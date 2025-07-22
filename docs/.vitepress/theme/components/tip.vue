<script lang="ts" setup>
import { Warning } from "@element-plus/icons-vue";

interface TipProps {
  content?: string;
}

withDefaults(defineProps<TipProps>(), { content: "" });
</script>

<template>
  <ClientOnly>
    <el-tooltip raw-content effect="light" trigger="click">
      <template #content>
        <code class="tip-code">
          {{ content }}
        </code>
      </template>

      <el-icon :size="16" class="tip-icon"><Warning /></el-icon>
    </el-tooltip>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.tip-code {
  color: #0c61c9;
  background-color: #f5f7fa;
}

.tip-icon {
  vertical-align: middle;
  cursor: pointer;
}
</style>
