<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const data = [
  {
    user: {
      name: {
        value: "张三",
      },
      gender: 1,
    },
  },
  {
    user: {
      name: {
        value: "李四",
      },
      gender: 2,
    },
  },
  {
    user: {
      name: {
        value: "王五",
      },
      gender: 1,
    },
  },
];

const columns: TableColumn[] = [
  { prop: "user.name.value", label: "姓名" },
  {
    prop: "user.gender",
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
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
