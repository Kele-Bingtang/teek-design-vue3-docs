<script lang="ts" setup>
import type { ElFormProps, FormColumn } from "@/components/pro/form";
import { ref } from "vue";
import { ProForm } from "@/components/pro/form";

const state = ref({
  status: "0",
  content: "",
});
const submitLoading = ref(false);
const hasReset = ref(true);

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
  <ProForm v-model="state" :columns="columns" :el-form-props>
    <template #footer="{ handleSubmit, handleReset }">
      <div style="margin: 0 auto">
        <el-button type="info">返回</el-button>
        <el-button type="primary" :loading="submitLoading" @click="handleSubmit">通过</el-button>
        <el-button v-if="hasReset" type="warning" @click="handleReset">重置</el-button>
        <el-button type="danger">驳回</el-button>
      </div>
    </template>
  </ProForm>
</template>
