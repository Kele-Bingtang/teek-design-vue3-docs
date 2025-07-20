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
      rule: "eq", // 默认值
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
      rule: "eq",
    },
  },
  {
    prop: "idCard",
    label: "身份证号",
    filter: true,
    filterProps: {
      rule: "like",
    },
  },
  {
    prop: "birthday",
    label: "生日",
    filter: true,
    filterProps: {
      el: "el-date-picker",
      formColumn: {
        elProps: {
          type: "daterange",
        },
      },
      popoverProps: {
        width: 400,
      },
      rule: "between",
    },
  },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
