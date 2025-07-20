<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", gender: 1, idCard: "805839158256013232", birthday: "2023-01-01" },
  { username: "李四", gender: 2, idCard: "824440124728046271", birthday: "2023-02-01" },
  { username: "王五", gender: 1, idCard: "026454951166840353", birthday: "2023-03-01" },
];

const columns: TableColumn[] = [
  {
    prop: "username",
    label: "用户姓名",
    el: "copy",
    filter: true,
    filterProps: {
      rule: (model, row, key) => {
        // 输入的值
        const value = model[key];
        // 表格的值
        const rowValue = row[key];

        // 模糊匹配
        return rowValue?.includes(value);
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
      rule: (model, row, key) => {
        // 输入的值
        const value = model[key];
        // 表格的值
        const rowValue = row[key];

        // 精确匹配
        return value === rowValue;
      },
    },
  },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
