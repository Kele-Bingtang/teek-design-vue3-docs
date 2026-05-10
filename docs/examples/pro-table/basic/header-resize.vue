<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", gender: 1, status: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", gender: 2, status: 0, progress: 40, birthday: "2023-02-01" },
  { username: "王五", gender: 1, status: 1, progress: 60, birthday: "2023-03-01" },
];

const columns: TableColumn[] = [
  { prop: "username", label: "用户姓名", el: "copy" },
  {
    prop: "gender",
    label: "性别",
    el: "el-tag",
    options: [
      { label: "男", value: 1, tagType: "success" },
      { label: "女", value: 2, tagType: "danger" },
    ],
  },
  {
    prop: "status",
    label: "状态",
    el: "point-tag",
    options: [
      { label: "正常", value: 1, tagType: "success" },
      { label: "禁用", value: 0, tagType: "danger" },
    ],
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    tooltip: "学习进度",
  },
  { prop: "birthday", label: "生日" },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" header-resize />
</template>
