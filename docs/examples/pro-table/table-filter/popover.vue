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
    filterProps: {
      popoverProps: {
        disabled: true,
      },
    },
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
    filter: true,
    filterProps: {
      el: "el-select",
      popoverProps: {
        width: 600,
        placement: "right",
      },
    },
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    tooltip: "学习进度",
    filter: true,
    filterProps: {
      formColumn: {
        elProps: { modelModifiers: { number: true } },
      },
      popoverProps: {
        width: 400,
        placement: "top",
      },
    },
  },
  {
    prop: "birthday",
    label: "生日",
    filter: true,
    filterProps: {
      el: "el-date-picker",
      popoverProps: {
        placement: "left",
        offset: 20,
      },
    },
  },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
