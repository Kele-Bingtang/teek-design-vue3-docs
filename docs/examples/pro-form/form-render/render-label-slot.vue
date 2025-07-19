<script lang="tsx" setup>
import type { ElFormProps, FormColumn } from "@/components/pro/form";
import { ref, h } from "vue";
import { ElButton } from "element-plus";
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
  },
  {
    label: "状态",
    prop: "status",
    valueType: "select",
    options: [
      { label: "未解决", value: "0", color: "red" },
      { label: "已解决", value: "1", color: "blue" },
      { label: "解决中", value: "2", color: "yellow" },
      { label: "失败", value: "3", color: "red" },
    ],
  },
];
</script>

<template>
  <ProForm v-model="state" :el-form-props :columns="columns">
    <template #name-label="{ label }">
      <span style="color: red">{{ label }}</span>
    </template>

    <template #status-label="{ label }">
      <span style="color: green">{{ label }}</span>
    </template>
  </ProForm>
</template>
