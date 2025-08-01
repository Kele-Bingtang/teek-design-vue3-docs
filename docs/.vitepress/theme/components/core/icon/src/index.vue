<script setup lang="ts">
import type { IconProps } from "./types";
import { useSlots, computed, toRaw } from "vue";
import { addUnit, isObject, isString } from "@/common/utils";
import { useNamespace } from "@/composables";
import SvgIcon from "./components/svg-icon.vue";
import FontIcon from "./components/font-icon.vue";

defineOptions({ name: "Icon" });

const { icon = "", iconType, color, hover = false, hoverColor, pointer = false, ...props } = defineProps<IconProps>();

const ns = useNamespace("icon");
const slot = useSlots();

const getStyle = () => {
  return {
    ...props.style,
    ...(pointer ? { cursor: "pointer" } : undefined),
    "--icon-color": color,
    "--icon-size": props.size && addUnit(props.size),
    "--icon-color-hover": hoverColor,
  };
};

/**
 * 当 props.icon 为字符串时，支持传入修饰符来代替 props.iconType
 *
 * 1、icon 为 img- 或 IMG- 开头，则默认为 img
 * 2、icon 为 if- 或 IF- 开头，则默认为 iconfont
 * 3、icon 为 uni- 或 UNI- 开头，则默认为 unicode
 * 4、icon 为 sym- 或 SYM- 开头，则默认为 symbol
 * 5、icon 为 svg- 或 SVG- 开头，则默认为 svg
 */
const finalIcon = computed<any>(() => {
  if (!isString(icon)) return toRaw(icon);
  return icon.replace(/^(svg-|if-|uni-|sym-|img-)/i, "");
});

// 获取 iconfont 类型
const fontIconType = computed(() => {
  if (iconType && ["unicode", "iconfont", "symbol"].includes(iconType)) {
    return iconType as "unicode" | "iconfont" | "symbol";
  }

  if (!isString(icon)) return "";

  const caseIconName = icon.toLowerCase();

  if (caseIconName.startsWith("if-") || caseIconName.startsWith("iconfont")) return "iconfont";
  if (
    caseIconName.startsWith("uni-") ||
    /^&#x[\da-f]+/i.test(icon) ||
    (icon.length === 1 && icon.charCodeAt(0) >= 0xe000 && icon.charCodeAt(0) <= 0xf8ff)
  ) {
    return "unicode";
  }
  if (caseIconName.startsWith("sym-")) return "symbol";

  return "";
});

// 是否为 SVG 图标
const isSvgIcon = computed(() => isString(icon) && (iconType === "svg" || icon.startsWith("svg-") || isString(icon)));
// 是否为 SVG Html
const isSvgIconHtml = computed(() => isString(icon) && icon?.includes("<svg"));
// 是否为 iconfont 图标
const isFontIcon = computed(() => isString(icon) && fontIconType.value);
// 是否为组件
const isComponent = computed(
  () =>
    !isString(icon) &&
    (iconType === "component" ||
      (isObject(icon) && ("setup" in icon || "render" in icon)) ||
      typeof icon === "function")
);
// 是否为 Iconify 离线图标
const isIconifyOffline = computed(() => !isString(icon) && (iconType === "iconifyOffline" || "body" in icon));
// 是否为 Iconify 在线图标
const isIconifyOnline = computed(() => isString(icon) && (iconType === "iconifyOnline" || icon.includes(":")));
// 是否为图片
const isImage = computed(
  () =>
    isString(icon) &&
    (iconType === "img" ||
      icon.toLowerCase().startsWith("img-") ||
      [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp"].some(ext => icon.endsWith(ext)))
);
</script>

<template>
  <i v-if="!isFontIcon && !isImage" :class="[ns.b(), ns.is('hover', hover)]" :style="getStyle()">
    <slot v-if="slot.default" />
    <component v-else-if="isComponent" :is="finalIcon" :size />
    <SvgIcon v-else-if="isSvgIcon" :icon="finalIcon" />
  </i>

  <i v-else-if="isSvgIconHtml" v-html="icon" />

  <FontIcon
    v-else-if="isFontIcon"
    :icon="finalIcon"
    :iconType="fontIconType"
    :class="[ns.b(), ns.is('hover', hover)]"
    :style="getStyle()"
  />

  <img
    v-else-if="isImage"
    :src="finalIcon"
    :alt="imgAlt"
    :class="[ns.b(), ns.is('hover', hover)]"
    :style="getStyle()"
  />
</template>

<style lang="scss">
@use "./index";
</style>
