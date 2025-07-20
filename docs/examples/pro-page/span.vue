<script setup lang="ts">
import type { PageColumn } from "@/components/pro/page";
import { ProPage } from "@/components/pro/page";

const data = [
  { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
  { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
];

const columns: PageColumn[] = [
  { prop: "username", label: "用户姓名", el: "copy", search: {} },
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
    search: {
      el: "el-select",
    },
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    tooltip: "学习进度",
    elSlots: {
      default: ({ value }) => value + "%",
    },
    search: {
      el: "el-input",
    },
  },
  {
    prop: "birthday",
    label: "生日",
    search: {
      el: "el-date-picker",
      span: 2,
      offset: 1,
    },
  },
];
</script>

<template>
  <ProPage :columns="columns" :data="data" />
</template>
