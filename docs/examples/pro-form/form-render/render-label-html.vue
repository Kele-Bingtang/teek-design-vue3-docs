<script lang="tsx" setup>
import type { ElFormProps, FormColumn } from "@/components/pro/form";
import { ref } from "vue";
import { ProForm } from "@/components/pro/form";

const state = ref({
  status: "0",
  name: "默认值",
});

const elFormProps: Partial<ElFormProps> = {
  rules: {
    name: [{ required: true, message: "请输入名称" }],
  },
};

const columns: FormColumn[] = [
  {
    label: "名称",
    prop: "name",
    valueType: "copy",
    tooltip: "名称最多显示6个字符",
    renderLabelHTML: ({ label }) => `<span style="color: red">${label}</span>`,
  },
  {
    label: "状态",
    prop: "status",
    valueType: "select",
    options: [
      { label: "未解决", value: "0" },
      { label: "已解决", value: "1" },
      { label: "解决中", value: "2" },
      { label: "失败", value: "3" },
    ],
    renderLabelHTML: ({ label }) => `<span style="color: blue">${label}</span>`,
  },
];
</script>

<template>
  <ProForm v-model="state" :el-form-props :columns="columns" />
</template>
