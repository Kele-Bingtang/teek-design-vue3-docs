<script setup lang="ts">
import Teek from "vitepress-theme-teek";
import { onMounted } from "vue";
import ContributeChart from "./contribute-chart/index.vue";
import { useNamespace } from "../composables/use-namespace";

const ns = useNamespace();

onMounted(() => {
  // 圆角变量
  document.documentElement.style.setProperty(ns.cssVarName("radius"), "0.75rem");
});
</script>

<template>
  <Teek.Layout>
    <template #teek-archives-top-before>
      <ContributeChart />
    </template>
  </Teek.Layout>
</template>
