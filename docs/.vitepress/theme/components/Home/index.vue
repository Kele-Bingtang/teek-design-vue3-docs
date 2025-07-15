<script setup lang="ts">
import Feature from "./Feature.vue";
import { features, highlights, components } from "./data";
</script>

<template>
  <Feature :data="features" type="feature" />
  <Feature :data="highlights" type="highlight" />
  <Feature :data="components" type="feature" />
</template>
