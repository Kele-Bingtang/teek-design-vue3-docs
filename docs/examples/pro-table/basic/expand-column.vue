<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
  { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
];

const columns: TableColumn[] = [
  { type: "expand", label: "Expand", width: 80 },
  { prop: "username", label: "用户姓名", el: "copy" },
  {
    prop: "gender",
    label: "性别",
    el: "el-tag",
    options: [
      { label: "男", value: 1, tagType: "primary" },
      { label: "女", value: 2, tagType: "warning" },
    ],
  },
  { prop: "progress", label: "进度", el: "el-progress" },
  { prop: "birthday", label: "生日" },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" row-key="username">
    <template #expand="scope">
      {{ scope.row }}
    </template>
  </ProTable>
</template>
