<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", gender: 1, age: 18, birthday: "2023-01-01" },
  { username: "李四", gender: 2, age: 20, birthday: "2023-02-01" },
  { username: "王五", gender: 1, age: 22, birthday: "2023-03-01" },
];

const columns: TableColumn[] = [
  { prop: "username", label: "用户姓名", el: "copy" },
  {
    prop: "gender",
    label: "性别",
    el: "el-tag",
    elProps: (value: number) => {
      if (value === 1) return { type: "success" };
      return { type: "danger" };
    },
    options: async () => {
      return [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ];
    },
  },
  {
    prop: "age",
    label: "年龄",
    el: "el-progress",
    elSlots: {
      default: ({ value }) => "*" + value,
    },
  },
  { prop: "birthday", label: "生日" },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
