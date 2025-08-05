<template>
  <div class="teek-palette">
    <div class="theme-header">
      <h2>Teek 基础色板</h2>
    </div>

    <div class="palette-description">
      <p>
        Teek 的基础色板共计 120 个颜色，包含 12 个主色以及衍生色。当前色板是 UX
        设计师设计出来，并没有依靠色板算法生成，如果你喜欢根据一个主色生成衍生色，那么可以参考 AntDesign 的色板生成工具
        <a href="https://www.npmjs.com/package/@ant-design/colors" target="_blank">colors</a>
      </p>
    </div>

    <div>
      <h3>基础色板</h3>
      <div class="palette-container">
        <ColorPalette
          v-for="color in colorDefinitions"
          :key="color.name"
          :name="color.name"
          :desc="color.desc"
          :base-color="color.baseColor"
          :shades="color.shades"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Shade } from "./widget/color-palette.vue";
import { computed } from "vue";
import ColorPalette from "./widget/color-palette.vue";
import { useData } from "vitepress";

interface ColorDefinition {
  name: string;
  desc: string;
  baseColor: string;
  shades: Shade[];
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

const colorDefinitions = computed<ColorDefinition[]>(() => {
  if (!isDark.value) {
    return [
      {
        name: "Crimson Aurora / 绯色晨曦",
        desc: "重要操作引导与关键状态强调",
        baseColor: "#d93126",
        shades: [
          { label: "red-1", value: "#fdeceb" },
          { label: "red-2", value: "#f7cfcb" },
          { label: "red-3", value: "#f1b1ab" },
          { label: "red-4", value: "#ea9189" },
          { label: "red-5", value: "#e37066" },
          { label: "red-6", value: "#d93126" },
          { label: "red-7", value: "#b5251b" },
          { label: "red-8", value: "#911910" },
          { label: "red-9", value: "#6d0d07" },
          { label: "red-10", value: "#4a0301" },
        ],
      },
      {
        name: "Ember Glow / 烬火余温",
        desc: "系统异常提示与待处理事项",
        baseColor: "#dd5c27",
        shades: [
          { label: "volcano-1", value: "#fef1eb" },
          { label: "volcano-2", value: "#f9d7c4" },
          { label: "volcano-3", value: "#f4ba9e" },
          { label: "volcano-4", value: "#ef9c79" },
          { label: "volcano-5", value: "#e97d55" },
          { label: "volcano-6", value: "#dd5c27" },
          { label: "volcano-7", value: "#b7491c" },
          { label: "volcano-8", value: "#913612" },
          { label: "volcano-9", value: "#6b2408" },
          { label: "volcano-10", value: "#471301" },
        ],
      },
      {
        name: "Golden Hour / 鎏金时刻",
        desc: "过渡期提醒与温和预警",
        baseColor: "#e68a00",
        shades: [
          { label: "orange-1", value: "#fff7e6" },
          { label: "orange-2", value: "#ffe7ba" },
          { label: "orange-3", value: "#ffd58f" },
          { label: "orange-4", value: "#fec064" },
          { label: "orange-5", value: "#fca839" },
          { label: "orange-6", value: "#e68a00" },
          { label: "orange-7", value: "#bf6f00" },
          { label: "orange-8", value: "#995400" },
          { label: "orange-9", value: "#733a00" },
          { label: "orange-10", value: "#4d2000" },
        ],
      },
      {
        name: "Verdant Whisper / 翠黛私语",
        desc: "达成状态与自然生态场景",
        baseColor: "#0b9e40",
        shades: [
          { label: "green-1", value: "#e8fff0" },
          { label: "green-2", value: "#bff2c7" },
          { label: "green-3", value: "#98e4a1" },
          { label: "green-4", value: "#73d67e" },
          { label: "green-5", value: "#50c860" },
          { label: "green-6", value: "#0b9e40" },
          { label: "green-7", value: "#098235" },
          { label: "green-8", value: "#066629" },
          { label: "green-9", value: "#044a1d" },
          { label: "green-10", value: "#012e12" },
        ],
      },
      {
        name: "Citrus Zest / 柚香初萃",
        desc: "轻盈的提醒与愉悦感元素",
        baseColor: "#f8d837",
        shades: [
          { label: "yellow-1", value: "#ffffe8" },
          { label: "yellow-2", value: "#fefcc4" },
          { label: "yellow-3", value: "#fcf6a0" },
          { label: "yellow-4", value: "#fbee7d" },
          { label: "yellow-5", value: "#f9e45a" },
          { label: "yellow-6", value: "#f8d837" },
          { label: "yellow-7", value: "#cdab22" },
          { label: "yellow-8", value: "#a28112" },
          { label: "yellow-9", value: "#775907" },
          { label: "yellow-10", value: "#4d3600" },
        ],
      },
      {
        name: "Sylvan Hush / 林间幽影",
        desc: "生长、更新与自然生命力表现",
        baseColor: "#80c910",
        shades: [
          { label: "lime-1", value: "#faffe8" },
          { label: "lime-2", value: "#e4f4b6" },
          { label: "lime-3", value: "#cce987" },
          { label: "lime-4", value: "#b3df5c" },
          { label: "lime-5", value: "#99d434" },
          { label: "lime-6", value: "#80c910" },
          { label: "lime-7", value: "#65aa0a" },
          { label: "lime-8", value: "#4d8b06" },
          { label: "lime-9", value: "#376c02" },
          { label: "lime-10", value: "#244d00" },
        ],
      },
      {
        name: "Aqua Mirage / 碧波幻境",
        desc: "清新科技感与水元素表现",
        baseColor: "#2dd5e0",
        shades: [
          { label: "cyan-1", value: "#e8fffd" },
          { label: "cyan-2", value: "#bff9f5" },
          { label: "cyan-3", value: "#98f3f0" },
          { label: "cyan-4", value: "#73ecec" },
          { label: "cyan-5", value: "#4fe1e6" },
          { label: "cyan-6", value: "#2dd5e0" },
          { label: "cyan-7", value: "#1cabbb" },
          { label: "cyan-8", value: "#0f8496" },
          { label: "cyan-9", value: "#065f71" },
          { label: "cyan-10", value: "#003d4d" },
        ],
      },
      {
        name: "Azure Horizon / 晴空边际",
        desc: "开阔视野与可靠体验表现",
        baseColor: "#1890ff",
        shades: [
          { label: "geekblue-1", value: "#e8f8ff" },
          { label: "geekblue-2", value: "#bee8ff" },
          { label: "geekblue-3", value: "#95d6ff" },
          { label: "geekblue-4", value: "#6bc1ff" },
          { label: "geekblue-5", value: "#42aaff" },
          { label: "geekblue-6", value: "#1890ff" },
          { label: "geekblue-7", value: "#0f6dd2" },
          { label: "geekblue-8", value: "#084fa6" },
          { label: "geekblue-9", value: "#033479" },
          { label: "geekblue-10", value: "#001d4d" },
        ],
      },
      {
        name: "Cerulean Veil / 蔚蓝帷幔",
        desc: "品牌核心交互色与导航元素",
        baseColor: "#395ae3",
        shades: [
          { label: "blue-1", value: "#f2f5ff" },
          { label: "blue-2", value: "#d9e6ff" },
          { label: "blue-3", value: "#a4bffc" },
          { label: "blue-4", value: "#7a9df5" },
          { label: "blue-5", value: "#577ae8" },
          { label: "blue-6", value: "#395ae3" },
          { label: "blue-7", value: "#233dc2" },
          { label: "blue-8", value: "#132598" },
          { label: "blue-9", value: "#071272" },
          { label: "blue-10", value: "#00054d" },
        ],
      },
      {
        name: "Blush Petal / 绯云花瓣",
        desc: "女性化元素与温柔情感表达",
        baseColor: "#ee3a9e",
        shades: [
          { label: "magenta-1", value: "#ffe8f1" },
          { label: "magenta-2", value: "#fcc3db" },
          { label: "magenta-3", value: "#f8a0c8" },
          { label: "magenta-4", value: "#f57db7" },
          { label: "magenta-5", value: "#f15ba9" },
          { label: "magenta-6", value: "#ee3a9e" },
          { label: "magenta-7", value: "#c62482" },
          { label: "magenta-8", value: "#9d1368" },
          { label: "magenta-9", value: "#75074e" },
          { label: "magenta-10", value: "#4d0034" },
        ],
      },
      {
        name: "Velvet Twilight / 丝绒暮色",
        desc: "神秘感与艺术创意场景",
        baseColor: "#7830dd",
        shades: [
          { label: "purple-1", value: "#f5e8ff" },
          { label: "purple-2", value: "#dfbff8" },
          { label: "purple-3", value: "#c799f1" },
          { label: "purple-4", value: "#ad74eb" },
          { label: "purple-5", value: "#9351e4" },
          { label: "purple-6", value: "#7830dd" },
          { label: "purple-7", value: "#591eb9" },
          { label: "purple-8", value: "#3f1095" },
          { label: "purple-9", value: "#280671" },
          { label: "purple-10", value: "#16004d" },
        ],
      },
      {
        name: "Raspberry Rapture / 莓果沉醉",
        desc: "视觉焦点引导与奢华质感",
        baseColor: "#d82bd8",
        shades: [
          { label: "pink-1", value: "#ffe8fb" },
          { label: "pink-2", value: "#f7bef0" },
          { label: "pink-3", value: "#ef96e6" },
          { label: "pink-4", value: "#e870e0" },
          { label: "pink-5", value: "#e04cdb" },
          { label: "pink-6", value: "#d82bd8" },
          { label: "pink-7", value: "#b01bb5" },
          { label: "pink-8", value: "#890f92" },
          { label: "pink-9", value: "#65066f" },
          { label: "pink-10", value: "#42004d" },
        ],
      },
    ];
  } else {
    return [
      {
        name: "Crimson Aurora / 绯色晨曦 (深色模式)",
        desc: "重要操作引导与关键状态强调",
        baseColor: "#d93126",
        shades: [
          { label: "red-1", value: "#3a0d0a" },
          { label: "red-2", value: "#56130e" },
          { label: "red-3", value: "#731a13" },
          { label: "red-4", value: "#8f2118" },
          { label: "red-5", value: "#ab281d" },
          { label: "red-6", value: "#d93126" },
          { label: "red-7", value: "#e25a50" },
          { label: "red-8", value: "#eb837a" },
          { label: "red-9", value: "#f5aca5" },
          { label: "red-10", value: "#ffd5cf" },
        ],
      },
      {
        name: "Ember Glow / 烬火余温 (深色模式)",
        desc: "系统异常提示与待处理事项",
        baseColor: "#dd5c27",
        shades: [
          { label: "volcano-1", value: "#3a180b" },
          { label: "volcano-2", value: "#562510" },
          { label: "volcano-3", value: "#733315" },
          { label: "volcano-4", value: "#8f411a" },
          { label: "volcano-5", value: "#ab4f1f" },
          { label: "volcano-6", value: "#dd5c27" },
          { label: "volcano-7", value: "#e47f53" },
          { label: "volcano-8", value: "#eba27f" },
          { label: "volcano-9", value: "#f3c5ab" },
          { label: "volcano-10", value: "#fce8d7" },
        ],
      },
      {
        name: "Golden Hour / 鎏金时刻 (深色模式)",
        desc: "过渡期提醒与温和预警",
        baseColor: "#e68a00",
        shades: [
          { label: "orange-1", value: "#3a2400" },
          { label: "orange-2", value: "#563600" },
          { label: "orange-3", value: "#734800" },
          { label: "orange-4", value: "#8f5a00" },
          { label: "orange-5", value: "#ab6c00" },
          { label: "orange-6", value: "#e68a00" },
          { label: "orange-7", value: "#eba333" },
          { label: "orange-8", value: "#f0bc66" },
          { label: "orange-9", value: "#f5d599" },
          { label: "orange-10", value: "#fcf8d7" },
        ],
      },
      {
        name: "Verdant Whisper / 翠黛私语 (深色模式)",
        desc: "达成状态与自然生态场景",
        baseColor: "#0b9e40",
        shades: [
          { label: "green-1", value: "#0a2e12" },
          { label: "green-2", value: "#0d441b" },
          { label: "green-3", value: "#105a24" },
          { label: "green-4", value: "#13702d" },
          { label: "green-5", value: "#168636" },
          { label: "green-6", value: "#0b9e40" },
          { label: "green-7", value: "#2db15a" },
          { label: "green-8", value: "#4fc474" },
          { label: "green-9", value: "#71d78e" },
          { label: "green-10", value: "#93eaa8" },
        ],
      },
      {
        name: "Citrus Zest / 柚香初萃 (深色模式)",
        desc: "轻盈的提醒与愉悦感元素",
        baseColor: "#f8d837",
        shades: [
          { label: "yellow-1", value: "#3a3600" },
          { label: "yellow-2", value: "#564f00" },
          { label: "yellow-3", value: "#736800" },
          { label: "yellow-4", value: "#8f8100" },
          { label: "yellow-5", value: "#ab9a00" },
          { label: "yellow-6", value: "#f8d837" },
          { label: "yellow-7", value: "#f9e05f" },
          { label: "yellow-8", value: "#fae887" },
          { label: "yellow-9", value: "#fbf0af" },
          { label: "yellow-10", value: "#fcf8d7" },
        ],
      },
      {
        name: "Sylvan Hush / 林间幽影 (深色模式)",
        desc: "生长、更新与自然生命力表现",
        baseColor: "#80c910",
        shades: [
          { label: "lime-1", value: "#1a2d00" },
          { label: "lime-2", value: "#274300" },
          { label: "lime-3", value: "#345900" },
          { label: "lime-4", value: "#416f00" },
          { label: "lime-5", value: "#4e8500" },
          { label: "lime-6", value: "#80c910" },
          { label: "lime-7", value: "#95d33a" },
          { label: "lime-8", value: "#aadd64" },
          { label: "lime-9", value: "#bfe78e" },
          { label: "lime-10", value: "#d4f1b8" },
        ],
      },
      {
        name: "Aqua Mirage / 碧波幻境 (深色模式)",
        desc: "清新科技感与水元素表现",
        baseColor: "#2dd5e0",
        shades: [
          { label: "cyan-1", value: "#003d4d" },
          { label: "cyan-2", value: "#065f71" },
          { label: "cyan-3", value: "#0f8496" },
          { label: "cyan-4", value: "#1cabbb" },
          { label: "cyan-5", value: "#2dd5e0" },
          { label: "cyan-6", value: "#4fe1e6" },
          { label: "cyan-7", value: "#73ecec" },
          { label: "cyan-8", value: "#98f3f0" },
          { label: "cyan-9", value: "#bff9f5" },
          { label: "cyan-10", value: "#e6fffd" },
        ],
      },
      {
        name: "Azure Horizon / 晴空边际 (深色模式)",
        desc: "开阔视野与可靠体验表现",
        baseColor: "#1890ff",
        shades: [
          { label: "geekblue-1", value: "#001d4d" },
          { label: "geekblue-2", value: "#033479" },
          { label: "geekblue-3", value: "#084fa6" },
          { label: "geekblue-4", value: "#0f6dd2" },
          { label: "geekblue-5", value: "#1890ff" },
          { label: "geekblue-6", value: "#42aaff" },
          { label: "geekblue-7", value: "#6bc1ff" },
          { label: "geekblue-8", value: "#95d6ff" },
          { label: "geekblue-9", value: "#bee8ff" },
          { label: "geekblue-10", value: "#e7f8ff" },
        ],
      },
      {
        name: "Cerulean Veil / 蔚蓝帷幔 (深色模式)",
        desc: "品牌核心交互色与导航元素",
        baseColor: "#395ae3",
        shades: [
          { label: "blue-1", value: "#00054d" },
          { label: "blue-2", value: "#071272" },
          { label: "blue-3", value: "#132598" },
          { label: "blue-4", value: "#233dc2" },
          { label: "blue-5", value: "#395ae3" },
          { label: "blue-6", value: "#577ae8" },
          { label: "blue-7", value: "#7a9df5" },
          { label: "blue-8", value: "#a4bffc" },
          { label: "blue-9", value: "#d9e6ff" },
          { label: "blue-10", value: "#f2f5ff" },
        ],
      },
      {
        name: "Blush Petal / 绯云花瓣 (深色模式)",
        desc: "女性化元素与温柔情感表达",
        baseColor: "#ee3a9e",
        shades: [
          { label: "magenta-1", value: "#4d0034" },
          { label: "magenta-2", value: "#75074e" },
          { label: "magenta-3", value: "#9d1368" },
          { label: "magenta-4", value: "#c62482" },
          { label: "magenta-5", value: "#ee3a9e" },
          { label: "magenta-6", value: "#f15ba9" },
          { label: "magenta-7", value: "#f57db7" },
          { label: "magenta-8", value: "#f8a0c8" },
          { label: "magenta-9", value: "#fcc3db" },
          { label: "magenta-10", value: "#ffe6f1" },
        ],
      },
      {
        name: "Velvet Twilight / 丝绒暮色 (深色模式)",
        desc: "神秘感与艺术创意场景",
        baseColor: "#7830dd",
        shades: [
          { label: "purple-1", value: "#16004d" },
          { label: "purple-2", value: "#280671" },
          { label: "purple-3", value: "#3f1095" },
          { label: "purple-4", value: "#591eb9" },
          { label: "purple-5", value: "#7830dd" },
          { label: "purple-6", value: "#9351e4" },
          { label: "purple-7", value: "#ad74eb" },
          { label: "purple-8", value: "#c799f1" },
          { label: "purple-9", value: "#dfbff8" },
          { label: "purple-10", value: "#f7e8ff" },
        ],
      },
      {
        name: "Raspberry Rapture / 莓果沉醉 (深色模式)",
        desc: "视觉焦点引导与奢华质感",
        baseColor: "#d82bd8",
        shades: [
          { label: "pink-1", value: "#42004d" },
          { label: "pink-2", value: "#65066f" },
          { label: "pink-3", value: "#890f92" },
          { label: "pink-4", value: "#b01bb5" },
          { label: "pink-5", value: "#d82bd8" },
          { label: "pink-6", value: "#e04cdb" },
          { label: "pink-7", value: "#e870e0" },
          { label: "pink-8", value: "#ef96e6" },
          { label: "pink-9", value: "#f7bef0" },
          { label: "pink-10", value: "#ffe6fb" },
        ],
      },
    ];
  }
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
