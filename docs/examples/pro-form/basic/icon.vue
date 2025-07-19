<script lang="ts" setup>
import type { FormColumn } from "@/components/pro/form";
import { ref } from "vue";
import { ProForm } from "@/components/pro/form";
import { Warning } from "@element-plus/icons-vue";

const state = ref({
  input: "文本",
});

const columns: FormColumn[] = [
  {
    label: "输入框",
    prop: "input",
    el: "el-input",
    tooltip: "自动补全输入框",
  },
];
</script>

<template>
  <ProForm v-model="state" label-width="100px" :columns="columns">
    <template #tooltip-icon>
      <el-icon :size="16" style="margin-left: 10px"><Warning /></el-icon>
    </template>
  </ProForm>
</template>
