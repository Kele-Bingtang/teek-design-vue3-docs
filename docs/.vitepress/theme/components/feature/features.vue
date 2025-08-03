<script setup lang="ts">
import type { MaybeRef } from "vue";
import type { FeatureData } from "./data";
import { onBeforeUnmount, onMounted, unref, useTemplateRef } from "vue";

interface FeatureProps {
  /** 数据 */
  data: FeatureData;
  /** 类型 */
  type?: "feature" | "highlight";
}

const { type = "feature" } = defineProps<FeatureProps>();

// 给需要触发动画的文本标签添加 ref 属性
const textListInstance = useTemplateRef<HTMLElement[]>("textInstance");

const cleanup: (() => void)[] = [];

/**
 * 初始化监听元素是否可见
 */
const initAnimation = () => {
  textListInstance.value?.forEach(textInstance => {
    // 初始化动画 class
    textInstance.classList.add("scroll__animate");

    const { createIntersectionObserver, cleanIntersectionObserver } = useIntersectionObserver(
      textInstance,
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 使用 requestAnimationFrame 确保在下一帧执行
            requestAnimationFrame(() => {
              try {
                // 添加 visible class，触发动画
                textInstance.classList.add("visible");
                cleanIntersectionObserver();
              } catch (error) {
                console.error("初始化动画失败:", error);
              }
            });
          }
        });
      },
      0.1
    );

    createIntersectionObserver();
    cleanup.push(cleanIntersectionObserver);
  });
};

/**
 * 使用 IntersectionObserver 监听元素是否可见
 */
function useIntersectionObserver(
  observerDom: MaybeRef<HTMLElement | null>,
  callback: (entries: IntersectionObserverEntry[]) => void,
  threshold: number
) {
  let intersectionObserver: IntersectionObserver | null = null;

  // 创建 IntersectionObserver
  const createIntersectionObserver = () => {
    const observerDomValue = unref(observerDom);
    if (intersectionObserver || !observerDomValue) return;

    intersectionObserver = new IntersectionObserver(callback, { threshold });
    intersectionObserver.observe(observerDomValue);
  };

  // 清理 IntersectionObserver
  const cleanIntersectionObserver = () => {
    if (intersectionObserver) {
      intersectionObserver.disconnect();
      intersectionObserver = null;
    }
  };

  return { createIntersectionObserver, cleanIntersectionObserver };
}

onMounted(() => {
  initAnimation();
});

onBeforeUnmount(() => {
  cleanup.forEach(cleanupFn => cleanupFn?.());
});
</script>

<template>
  <div v-if="type === 'feature'" class="feature-wrapper">
    <div class="feature">
      <img :src="data.image" class="feature__image" />

      <div class="feature__header header">
        <h2 ref="textInstance">{{ data.title }}</h2>
        <p ref="textInstance" v-if="data.subTitle">{{ data.subTitle }}</p>
      </div>

      <div class="features">
        <div v-for="feature in data.items" :key="feature.title" class="features__item item">
          <h3 ref="textInstance">{{ feature.title }}</h3>
          <p ref="textInstance">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="type === 'highlight'" class="highlight-wrapper">
    <div class="highlight">
      <img :src="data.image" class="highlight__image" />

      <div class="highlight__content">
        <div class="highlight__header header">
          <h2 ref="textInstance">{{ data.title }}</h2>
          <p ref="textInstance" v-if="data.subTitle">{{ data.subTitle }}</p>
        </div>

        <div class="highlights">
          <div v-for="feature in data.items" :key="feature.title" class="highlights__item item">
            <h3 ref="textInstance">{{ feature.title }}</h3>
            <p ref="textInstance">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./index";
</style>
