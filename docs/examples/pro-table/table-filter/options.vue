<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
  { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
];

const columns: TableColumn[] = [
  {
    prop: "username",
    label: "用户姓名",
    el: "copy",
    filter: true,
  },
  {
    prop: "gender",
    label: "性别",
    el: "el-tag",
    options: () => {
      return [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ];
    },
    filter: true,
    filterProps: {
      el: "el-select",
      formColumn: {
        options: () => {
          return [
            { label: "男1", value: 1 },
            { label: "女2", value: 2 },
          ];
        },
      },
    },
  },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
