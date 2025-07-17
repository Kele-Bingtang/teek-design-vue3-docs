<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { h } from "vue";
import { ElButton, ElMessage, ElProgress, ElTag } from "element-plus";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
  { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
];

const columns: TableColumn[] = [
  { type: "index", label: "#", width: 60 },
  {
    prop: "username",
    label: "用户姓名",
    headerRenderHtml: ({ column }) => `<span style="color: red;">${column.label}</span>`,
  },
  {
    prop: "gender",
    label: "性别",
    el: "el-tag",
    options: async () => {
      return [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ];
    },
    headerRenderHtml: ({ column }) => `<span style="color: #395AE3;">${column.label}</span>`,
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    headerRenderHtml: ({ column }) => `<span style="color: #dd5c27;">${column.label}</span>`,
  },
  {
    prop: "birthday",
    label: "生日",
    headerRenderHtml: ({ column }) => `<span style="color: #e68a00;">${column.label}</span>`,
  },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
