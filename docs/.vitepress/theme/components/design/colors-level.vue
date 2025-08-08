<template>
  <div class="teek-palette">
    <div class="theme-header">
      <h2>Teek 功能色板</h2>
      <div class="theme-toggle">
        <el-select v-model="selectedTheme" @change="changeTheme" style="width: 240px">
          <el-option v-for="theme in themes" :key="theme.value" :label="theme.label" :value="theme.value" />
        </el-select>
      </div>
    </div>

    <div class="palette-description">
      <p>
        功能色板当前包含 {{ functionalColors.length + extendedColors.length }} 个主色调及衍生色阶，
        专为数据可视化和管理后台设计。1-9 的色阶基于色彩算法自动计算生成。
      </p>
      <p>
        其中 Primary 主色调已经在项目启动的时候自动生成了，您可以通过
        <span style="color: var(--teek-color-primary)">var(--tk-color-primary-i)</span>
        来获取，其中 i 为 1 - 9 的数字
      </p>
    </div>

    <!-- 色彩面板展示 -->
    <div>
      <h3>基础色板</h3>
      <div class="palette-container">
        <ColorPalette
          v-for="color in functionalColors"
          :key="color.name"
          :name="color.name"
          :desc="color.desc"
          :base-color="color.baseColor"
          :shades="color.shades"
        />
      </div>
    </div>

    <div>
      <h2>色彩生成工具</h2>
      <p>
        如果上面的色板不能满足你的需求，你可以选择一个品牌色，Teek 的色彩生成算法通过
        <span style="font-weight: 700">线性混合</span>
        方式来生成另外一种衍生色，你看到的 9 个衍生色是因为循环 9 次。
      </p>
      <el-color-picker v-model="selectedColor" @change="handleChangeColor" style="margin-bottom: 16px" />

      <ColorPalette v-if="selectedColor" v-bind="selectedColors" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ColorPaletteProps, Shade } from "./widget/color-palette.vue";
import { ref, onMounted, watch } from "vue";
import { isClient } from "vitepress-theme-teek";
import { getLightColor, getDarkColor } from "../../common/utils/color";
import ColorPalette from "./widget/color-palette.vue";
import { useData } from "vitepress";

interface ColorDefinition {
  name: string;
  desc: string;
  cssVar: string;
}

// 主题配置
const themes = [
  { label: "浅色模式", value: "light" },
  { label: "深蓝深色模式", value: "dark-blue" },
  { label: "暗黑深色模式", value: "dark-deep" },
  { label: "午夜深色模式", value: "dark-midnight" },
  { label: "中性深色模式", value: "dark-neutral" },
];

const { isDark } = useData();

const selectedTheme = ref("light");

// 功能色定义
const functionalColors = ref<ColorPaletteProps[]>([]);
const extendedColors = ref<ColorPaletteProps[]>([]);

const selectedColor = ref("");
const selectedColors = ref<Partial<ColorPaletteProps>>({});

// 定义颜色配置
const colorDefinitions = {
  // 核心功能色
  core: [
    { name: "Primary / 主色调", desc: "主导功能，品牌识别", cssVar: "--teek-color-primary" },
    { name: "Success / 成功", desc: "操作成功，正向反馈", cssVar: "--teek-color-success" },
    { name: "Warning / 警告", desc: "警示提醒，需要注意", cssVar: "--teek-color-warning" },
    { name: "Danger / 危险", desc: "高危操作，错误状态", cssVar: "--teek-color-danger" },
    { name: "Error / 错误", desc: "系统错误，操作失败", cssVar: "--teek-color-error" },
  ] as ColorDefinition[],

  // 扩展色
  extended: [] as ColorDefinition[],
};

// 主题切换函数
const changeTheme = () => {
  if (!isClient) return;

  document.documentElement.classList.remove("dark", "dark-blue", "dark-deep", "dark-midnight", "dark-neutral");

  if (selectedTheme.value.startsWith("dark")) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
    document.documentElement.classList.add(selectedTheme.value);
  } else isDark.value = false;

  // 更新颜色显示
  updateColorDisplay();
};

// 获取 CSS 变量值
const getCssVariable = (name: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
};

// 生成颜色色阶
const generateShades = (baseColor: string, levelCount = 10) => {
  const shades: Shade[] = [];

  // 生成从浅到深的色阶
  for (let i = 1; i < levelCount; i++) {
    let shadeColor: string | null = null;
    const level = i / levelCount;

    if (selectedTheme.value === "light") {
      shadeColor = getLightColor(baseColor, level);
    } else {
      shadeColor = getDarkColor(baseColor, level);
    }

    shades.push({
      label: i + "",
      value: shadeColor || baseColor,
    });
  }

  // 确保色阶按正确的顺序排列
  shades.sort((a, b) => Number(a.label) - Number(b.label));

  return shades;
};

// 更新颜色显示
const updateColorDisplay = () => {
  if (!isClient) return;

  // 更新核心功能色
  functionalColors.value = colorDefinitions.core.map(color => {
    const baseColor = getCssVariable(color.cssVar);
    return {
      name: color.name,
      desc: color.desc,
      baseColor: baseColor,
      shades: generateShades(baseColor),
    };
  });

  // 更新扩展功能色
  extendedColors.value = colorDefinitions.extended.map(color => {
    const baseColor = getCssVariable(color.cssVar);
    return {
      name: color.name,
      desc: color.desc,
      baseColor: baseColor,
      shades: generateShades(baseColor),
    };
  });
};

const handleChangeColor = (value: string) => {
  selectedColors.value = {
    name: "Custom / 自定义",
    desc: "由你定义，尽显个性",
    baseColor: value,
    shades: generateShades(value),
  };
};

// 初始化
onMounted(() => {
  updateColorDisplay();
});

// 监听主题变化
watch(selectedTheme, () => {
  updateColorDisplay();
});
</script>

<style lang="scss" scoped>
.teek-palette {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  transition: all 0.3s ease;

  .theme-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--el-border-color-light);

    h2 {
      margin: 0;
      font-size: 2rem;
      font-weight: 600;
    }
  }

  .theme-toggle {
    display: flex;
    align-items: center;
  }

  .palette-description {
    font-size: 1.125rem;
    line-height: 1.6;
    max-width: 800px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--el-border-color-light);
  }

  .palette-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-bottom: 3rem;
  }
}
</style>
