<script setup lang="ts">
import Teek from "vitepress-theme-teek";
import ContributeChart from "./ContributeChart/index.vue";
</script>

<template>
  <Teek.Layout>
    <template #teek-archives-top-before>
      <ContributeChart />
    </template>
  </Teek.Layout>
</template>
