<script lang="ts" setup>
import type { ElFormProps, FormColumn } from "@/components/pro/form";
import type { FormItemColumnProps } from "@/components/pro/form-item";
import { h, ref } from "vue";
import { ProForm } from "@/components/pro/form";

const state = ref({
  a: {
    b: {
      c: "我是一段有想法的文本",
      e: "3",
      f: ["0", "3"],
    },
  },
});

const elFormProps: Partial<ElFormProps> = {
  rules: {
    "a.b.c": [{ required: true, message: "请输入名称" }],
    "a.b.d": [{ required: true, message: "请输入标签" }],
  },
};

const columns: FormColumn[] = [
  {
    label: "文本",
    prop: "a.b.c",
    render: value => h("span", {}, { default: () => value + " - 自定义" }),
  },
  { label: "name", prop: "a.b.d" },
  {
    label: "tag",
    prop: "a.b.e",
    el: "el-select",
    options: [
      { label: "未解决", value: "0" },
      { label: "已解决", value: "1" },
      { label: "解决中", value: "2" },
      { label: "失败", value: "3" },
    ],
  },
  {
    label: "tag1",
    prop: "a.b.f",
    el: "el-select",
    fieldProps: {
      multiple: true,
    },
    options: [
      { label: "未解决", value: "0" },
      { label: "已解决", value: "1" },
      { label: "解决中", value: "2" },
      { label: "失败", value: "3" },
    ],
  },
];

const handleChange = (values: unknown, model: Record<string, any>, column: FormItemColumnProps) => {
  console.log(values, model, column, "change");
};

const handleSubmit = (model: Record<string, any>) => {
  console.log(model, "Submit");
};
</script>

<template>
  <ProForm v-model="state" :columns="columns" :el-form-props @change="handleChange" @submit="handleSubmit" />
</template>
