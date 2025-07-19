<script lang="ts" setup>
import type { ElFormProps, FormColumn } from "@/components/pro/form";
import { ref } from "vue";
import { ProForm } from "@/components/pro/form";

const state = ref({
  status: "0",
  content: "",
});

const footerAlign = ref<"left" | "center" | "right">("right");

const elFormProps: Partial<ElFormProps> = {
  rules: {
    content: [{ required: true, message: "请输入原因" }],
  },
};

const columns: FormColumn[] = [
  { label: "原因", prop: "content" },
  {
    label: "状态",
    prop: "status",
    el: "el-select",
    options: [
      { label: "未解决", value: "0", color: "red" },
      { label: "已解决", value: "1", color: "blue" },
      { label: "解决中", value: "2", color: "yellow" },
    ],
  },
];
</script>

<template>
  <el-radio-group v-model="footerAlign" style="margin-bottom: 10px">
    <el-radio value="left">left</el-radio>
    <el-radio value="center">center</el-radio>
    <el-radio value="right">right</el-radio>
  </el-radio-group>

  <ProForm v-model="state" :columns="columns" :el-form-props :footer-align />
</template>
