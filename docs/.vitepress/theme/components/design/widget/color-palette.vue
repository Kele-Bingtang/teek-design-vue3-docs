<template>
  <div class="color-palette">
    <!-- 头部区域：显示主色调及名称 -->
    <div class="group-header">
      <div v-if="baseColor" class="color-icon" :style="{ backgroundColor: baseColor }"></div>
      <div class="group-name">
        <span v-if="name" class="name">{{ name }}</span>
        <span v-if="desc" class="desc">{{ desc }}</span>
      </div>
      <div v-if="baseColor" class="base-value">{{ baseColor }}</div>
    </div>

    <!-- 色阶展示区：显示 1-9 级色阶 -->
    <div v-if="shades" class="shades-container">
      <div
        v-for="shade in shades"
        :key="shade.level"
        class="shade-block"
        :style="{ backgroundColor: shade.value }"
        @click="copyToClipboard(shade.value)"
      >
        <div class="shade-info" :style="{ color: getTextColor(shade.value) }">
          <span class="shade-level">{{ shade.level }}</span>
          <span class="shade-value">{{ shade.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";

export interface Shade {
  level: number;
  value: string;
}

export interface ColorPaletteProps {
  name?: string;
  desc?: string;
  baseColor?: string;
  shades?: Shade[];
}

defineProps<ColorPaletteProps>();

// 获取适合背景的文字颜色（自动计算黑白对比）
const getTextColor = (bgColor: string): string => {
  const hex = bgColor.replace("#", "");

  // 处理简写颜色值（如 #fff）
  const fullHex =
    hex.length === 3
      ? hex
          .split("")
          .map(x => x + x)
          .join("")
      : hex;

  // 确保长度正确
  if (fullHex.length !== 6) return "#000000";

  // 计算亮度
  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 150 ? "#000000" : "#ffffff";
};

// 复制色值到剪贴板
const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      ElMessage.success("已复制到剪贴板");
    })
    .catch(err => {
      console.error("复制失败:", err);
      ElMessage.error("复制失败，请手动复制");
    });
};
</script>

<style lang="scss" scoped>
.color-palette {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  .group-header {
    padding: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--tk-fill-color-dark);

    .color-icon {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 9999px;
      flex-shrink: 0;
    }

    .group-name {
      flex: 1;

      .name {
        font-weight: 600;
        font-size: 1.125rem;
        color: var(--tk-text-color-regular);
        display: block;
      }

      .desc {
        font-size: 0.875rem;
        color: var(--tk-text-color-secondary);
      }
    }

    .base-value {
      font-family: "SFMono-Regular", Consolas, monospace;
      font-size: 0.875rem;
      background: rgba(74, 108, 247, 0.1);
      color: #4a6cf7;
      padding: 0.25rem 0.5rem;
      border-radius: 0.375rem;
    }
  }

  .shades-container {
    display: flex;
    flex-direction: column;

    .shade-block {
      height: 3rem;
      padding: 0 1.25rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.03);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1;
      }

      .shade-info {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 0.875rem;

        .shade-level {
          font-weight: 600;
        }

        .shade-value {
          font-family: "SFMono-Regular", Consolas, monospace;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
