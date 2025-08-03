<template>
  <div class="theme-palette">
    <div class="header">
      <h2>主题色板</h2>
      <div class="theme-toggle">
        <el-select v-model="selectedTheme" @change="changeTheme" style="width: 210px">
          <el-option label="浅色模式" value="light" />
          <el-option label="深色蓝色模式" value="dark-blue" />
          <el-option label="深色深邃模式" value="dark-deep" />
          <el-option label="深色午夜模式" value="dark-midnight" />
          <el-option label="深色中性模式" value="dark-neutral" />
        </el-select>
      </div>
    </div>

    <!-- 功能色 -->
    <div class="palette-section">
      <h3>功能色</h3>
      <div class="palette-group">
        <div v-for="color in functionalColors" :key="color.name" class="color-card">
          <!-- 主色区域 -->
          <div
            class="color-main"
            :style="{ backgroundColor: getColorValue(`--${namespace}-color-` + color.name) }"
            @click="copyToClipboard(getColorValue(`--${namespace}-color-` + color.name))"
          >
            <div class="color-info-overlay">
              <div class="color-name">{{ color.name }}</div>
              <div class="color-value">{{ getColorLabel(`--${namespace}-color-` + color.name) }}</div>
            </div>
          </div>

          <!-- 衍生色区域 -->
          <div class="color-derivatives" :style="{ backgroundColor: getColorValue(`--${namespace}-bg-${color.name}`) }">
            <div
              v-for="variable in color.variables"
              :key="variable"
              class="derivative-color"
              @click="copyToClipboard(getColorValue(`--${namespace}-color-` + color.name + '-' + variable))"
            >
              <div
                class="derivative-preview"
                :style="{
                  backgroundColor: getColorValue(`--${namespace}-color-` + color.name + '-' + variable),
                }"
              >
                <div class="derivative-value">{{ variable }}</div>
                <div class="derivative-name">
                  {{ getColorLabel(`--${namespace}-color-` + color.name + "-" + variable) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 次级色 -->
    <div class="palette-section">
      <h3>次级色</h3>
      <div class="palette-group">
        <div
          v-for="color in secondaryColors"
          :key="color.name"
          class="color-card"
          :style="{ backgroundColor: getColorValue(`--${namespace}-bg-${color.name}`) }"
        >
          <!-- 主色区域 -->
          <div
            class="color-main"
            :style="{ backgroundColor: getColorValue(`--${namespace}-color-` + color.name) }"
            @click="copyToClipboard(getColorValue(`--${namespace}-color-` + color.name))"
          >
            <div class="color-info-overlay">
              <div class="color-name">{{ color.name }}</div>
              <div class="color-value">{{ getColorLabel(`--${namespace}-color-` + color.name) }}</div>
            </div>
          </div>

          <!-- 衍生色区域 -->
          <div class="color-derivatives">
            <div
              v-for="variable in color.variables"
              :key="variable"
              class="derivative-color"
              @click="copyToClipboard(getColorValue(`--${namespace}-color-` + color.name + '-' + variable))"
            >
              <div
                class="derivative-preview"
                :style="{ backgroundColor: getColorValue(`--${namespace}-color-` + color.name + '-' + variable) }"
              >
                <div class="derivative-value">{{ variable }}</div>
                <div class="derivative-name">
                  {{ getColorLabel(`--${namespace}-color-` + color.name + "-" + variable) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 基本色 -->
    <div class="palette-section">
      <h3>基本色</h3>
      <div class="palette-swatches">
        <div
          v-for="color in baseColors"
          :key="color"
          class="swatch"
          :style="{
            backgroundColor: getColorValue(`--${namespace}-` + color),
            color: color == 'dark' ? 'var(--vp-c-neutral-inverse)' : '',
          }"
          @click="copyToClipboard(getColorValue(`--${namespace}-` + color))"
        >
          <span class="swatch-name">
            {{ color }}
          </span>
          <span class="swatch-value">
            {{ getColorLabel(`--${namespace}-` + color) }}
          </span>
        </div>
      </div>
    </div>

    <!-- 背景色 -->
    <div class="palette-section">
      <h3>背景色</h3>
      <div class="palette-swatches">
        <div
          v-for="color in backgroundColors"
          :key="color"
          class="swatch"
          :style="{ backgroundColor: getColorValue(`--${namespace}-` + color) }"
          @click="copyToClipboard(getColorValue(`--${namespace}-` + color))"
        >
          <span class="swatch-name">{{ color }}</span>
          <span class="swatch-value">{{ getColorLabel(`--${namespace}-` + color) }}</span>
        </div>
      </div>
    </div>

    <!-- 中性背景色 -->
    <div class="palette-section">
      <h3>中性背景色</h3>
      <div class="palette-swatches">
        <div
          v-for="color in neutralBackgroundColors"
          :key="color"
          class="swatch"
          :style="{ backgroundColor: getColorValue(`--${namespace}-` + color) }"
          @click="copyToClipboard(getColorValue(`--${namespace}-` + color))"
        >
          <span class="swatch-name">{{ color }}</span>
          <span class="swatch-value">{{ getColorLabel(`--${namespace}-` + color) }}</span>
        </div>
      </div>
    </div>

    <!-- 灰度色 -->
    <div class="palette-section">
      <h3>灰度色</h3>
      <div class="palette-swatches">
        <div
          v-for="(color, index) in grayColors"
          :key="color"
          class="swatch gray-swatch"
          :style="{
            backgroundColor: getColorValue(`--${namespace}-` + color),
            color: color > 'gray-500' ? 'var(--vp-c-neutral-inverse)' : '',
          }"
          @click="copyToClipboard(getColorValue(`--${namespace}-` + color))"
        >
          <span class="swatch-name">{{ color }}</span>
          <span class="swatch-value">{{ getColorLabel(`--${namespace}-` + color) }}</span>
          <span style="font-size: 11px">{{ grayColorsTip[index] }}</span>
        </div>
      </div>
    </div>

    <!-- 文本色 -->
    <div class="palette-section">
      <h3>文本色</h3>
      <div class="palette-swatches">
        <div
          v-for="color in textColors"
          :key="color"
          class="swatch text-swatch"
          :style="{
            color: getColorValue(`--${namespace}-` + color),
          }"
          @click="copyToClipboard(getColorValue(`--${namespace}-` + color))"
        >
          <span class="swatch-name">{{ color }}</span>
          <span class="swatch-value">{{ getColorLabel(`--${namespace}-` + color) }}</span>
        </div>
      </div>
    </div>

    <!-- 边框色 -->
    <div class="palette-section">
      <h3>边框色</h3>
      <div class="palette-swatches">
        <div
          v-for="color in borderColors"
          :key="color"
          class="swatch"
          :style="{ backgroundColor: getColorValue(`--${namespace}-` + color) }"
          @click="copyToClipboard(getColorValue(`--${namespace}-` + color))"
        >
          <span class="swatch-name">{{ color }}</span>
          <span class="swatch-value">{{ getColorLabel(`--${namespace}-` + color) }}</span>
        </div>
      </div>
    </div>

    <!-- 阴影 -->
    <div class="palette-section">
      <h3>阴影</h3>
      <div class="shadow-examples">
        <div
          v-for="shadow in shadowColors"
          :key="shadow"
          class="shadow-box"
          :style="{ boxShadow: getColorValue(`--${namespace}-` + shadow) }"
          @click="copyToClipboard(getColorValue(`--${namespace}-` + shadow))"
        >
          <span class="shadow-name">{{ shadow }}</span>
          <span class="shadow-value">{{ getColorLabel(`--${namespace}-` + shadow) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ElSelect, ElOption, ElMessage } from "element-plus";
import { isClient } from "vitepress-theme-teek";

const namespace = "teek";

// 主题状态
const selectedTheme = ref("light");

// 切换主题函数
const changeTheme = () => {
  if (!isClient) return;

  // 清除所有主题类
  document.documentElement.classList.remove("dark", "dark-blue", "dark-deep", "dark-midnight", "dark-neutral");

  if (selectedTheme.value.startsWith("dark")) {
    document.documentElement.classList.add(selectedTheme.value);
    document.documentElement.classList.add("dark");
  }
};

// 获取 CSS 变量值
const getColorValue = (cssVar: string) => {
  if (!isClient) return "";

  const root = document.documentElement;
  const value = getComputedStyle(root).getPropertyValue(cssVar).trim();

  // 如果值为空，返回默认颜色
  if (!value) return "#f0f0f0";

  // 如果是 RGB 格式 (如: 57, 90, 227)，转换为十六进制
  if (/^\d{1,3},\s*\d{1,3},\s*\d{1,3}$/.test(value)) {
    const rgb = value.split(",").map(v => parseInt(v.trim(), 10));
    if (rgb.length === 3 && rgb.every(v => !isNaN(v) && v >= 0 && v <= 255)) {
      return "#" + rgb.map(x => x.toString(16).padStart(2, "0")).join("");
    }
    // 如果转换失败，返回原始值
    return value;
  }

  // 如果是 HSL 格式 (如: hsl(225, 74%, 58%))，转换为十六进制
  if (value.startsWith("hsl(") && value.endsWith(")")) {
    try {
      const hslValues = value.substring(4, value.length - 1).split(",");
      if (hslValues.length >= 3) {
        const h = parseFloat(hslValues[0]);
        const s = parseFloat(hslValues[1].trim().replace("%", ""));
        const l = parseFloat(hslValues[2].trim().replace("%", ""));

        if (!isNaN(h) && !isNaN(s) && !isNaN(l)) {
          return hslToHex(h, s, l);
        }
      }
    } catch (e) {
      // 转换失败，返回原始值
      return value;
    }
  }

  // 处理带透明度的 rgb 格式或其他 rgb 格式
  if (value.includes("rgb(") || value.includes("rgba(")) {
    return value;
  }

  // 返回原始值
  return value;
};

// 获取显示的颜色值
const getColorLabel = (cssVar: string) => {
  if (!isClient) return "";

  const root = document.documentElement;
  const value = getComputedStyle(root).getPropertyValue(cssVar).trim();

  // 如果是 RGB 格式
  if (/^\d{1,3},\s*\d{1,3},\s*\d{1,3}$/.test(value)) return value;
  else return getColorValue(cssVar);
};

// HSL 转十六进制
const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

// 复制到剪贴板
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    ElMessage.success("已复制到剪贴板");
  });
};

// 功能色
const functionalColors = [
  {
    name: "primary",
    variables: ["hover", "muted", "deep", "light", "rgb"],
  },
  {
    name: "success",
    variables: ["hover", "muted", "deep", "light", "rgb"],
  },
  {
    name: "warning",
    variables: ["hover", "muted", "deep", "light", "rgb"],
  },
  {
    name: "danger",
    variables: ["hover", "muted", "deep", "light", "rgb"],
  },
  {
    name: "error",
    variables: ["hover", "muted", "deep", "light", "rgb"],
  },
];

// 次级色
const secondaryColors = [
  {
    name: "info",
    variables: ["hover", "muted", "deep", "light", "rgb"],
  },
  {
    name: "secondary",
    variables: ["hover", "muted", "deep", "light", "rgb"],
  },
];

// 基本色
const baseColors = ["color", "light", "dark"];

// 背景色
const backgroundColors = ["bg-primary", "bg-success", "bg-warning", "bg-danger", "bg-error", "bg-info", "bg-secondary"];

// 中性背景色
const neutralBackgroundColors = ["bg-neutral", "bg-neutral-light", "bg-neutral-dark"];

// 灰度色
const grayColors = [
  "gray-100",
  "gray-200",
  "gray-300",
  "gray-400",
  "gray-500",
  "gray-600",
  "gray-700",
  "gray-800",
  "gray-900",
];

const grayColorsTip = [
  "文本/背景",
  "斑马纹/鼠标悬停",
  "背景色/表头背景/表单禁用文字",
  "浅边框/卡片边框",
  "浅边框/卡片边框",
  "按钮/表单/边框线/表单提示文字",
  "表单禁用文字/弱文字",
  "弱文本/辅助信息/说明文字/灰色图标",
  "文本/辅助内容/次要图标",
  "标题/重要内容/深色图标/",
];

// 文本色
const textColors = [
  "text-muted",
  "text-gray-100",
  "text-gray-200",
  "text-gray-300",
  "text-gray-400",
  "text-gray-500",
  "text-gray-600",
  "text-gray-700",
  "text-gray-800",
  "text-gray-900",
];

// 边框色
const borderColors = ["border-color", "border-dashed-color"];

// 阴影
const shadowColors = ["box-shadow-xs", "box-shadow-sm", "box-shadow-md", "box-shadow-lg"];

// 组件挂载时初始化主题
onMounted(() => {
  changeTheme();
});
</script>

<style lang="scss" scoped>
.theme-palette {
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
      margin: 0;
    }
  }

  .theme-toggle {
    display: flex;
    align-items: center;
  }

  .palette-section {
    margin-bottom: 40px;

    h3 {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  .palette-group {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  .color-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background: var(--vp-c-bg);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
  }

  .color-main {
    height: 100px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }

  .color-info-overlay {
    padding: 8px 12px;
    width: 100%;
  }

  .color-name {
    font-size: 14px;
    font-weight: 500;
    color: white;
    margin-bottom: 2px;
  }

  .color-value {
    font-size: 13px;
    color: var(--vp-c-neutral-inverse);
  }

  .color-derivatives {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 12px;
    gap: 10px;
  }

  .derivative-color {
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    padding: 4px;

    &:hover {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
      transform: scale(1.05);
    }
  }

  .derivative-preview {
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
    flex-direction: column;
  }

  .derivative-value {
    font-size: 14px;
    line-height: 1.5;
    color: var(--vp-c-neutral-inverse);
  }

  .derivative-name {
    font-size: 13px;
    line-height: 1.5;
    color: var(--vp-c-neutral-inverse);
  }

  .palette-swatches {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
  }

  .swatch {
    height: 80px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  .swatch-name {
    font-size: 14px;
    font-weight: 500;
  }

  .swatch-value {
    font-size: 13px;
  }

  .gray-swatch {
    height: 90px;
  }

  .text-swatch {
    border: 1px solid var(--vp-c-divider);
    background-color: rgb(255, 255, 255, 0.8);
  }

  .shadow-examples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
  }

  .shadow-box {
    height: 80px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--vp-c-bg);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-3px);
    }
  }

  .shadow-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-neutral);
    margin-bottom: 4px;
  }

  .shadow-value {
    font-size: 13px;
    color: var(--vp-c-neutral);
    text-align: center;
    padding: 0 4px;
  }
}

/* 深色模式样式 */
html.dark,
html.dark-blue,
html.dark-deep,
html.dark-midnight,
html.dark-neutral {
  .swatch-name,
  .swatch-value,
  .shadow-name {
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }

  .text-swatch {
    border-color: #4d505e;

    .swatch-name,
    .swatch-value {
      text-shadow: none;
    }
  }
}
</style>
