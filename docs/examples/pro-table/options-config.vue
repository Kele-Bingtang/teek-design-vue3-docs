<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const data = [
  { ticket: "张三", status1: 0, status2: 0 },
  { ticket: "李四", status1: 1, status2: 1 },
  { ticket: "王五", status1: 2, status2: 2 },
  { ticket: "赵六", status1: 3, status2: 3 },
  { ticket: "孙七", status1: 4, status2: 4 },
];

const options = [
  { optionLabel: "未解决", optionValue: 0, tagType: "info", tagEffect: "light" },
  { optionLabel: "已解决", optionValue: 1, tagType: "primary", tagEffect: "dark" },
  { optionLabel: "解决中", optionValue: 2, tagType: "success", tagEffect: "light" },
  { optionLabel: "失败", optionValue: 3, tagType: "warning", tagEffect: "plain" },
  { optionLabel: "审核中", optionValue: 4, tagType: "danger", tagEffect: "plain" },
];

const columns: TableColumn[] = [
  { prop: "ticket", label: "事件" },
  {
    label: "options 配置",
    prop: "status1",
    options: options,
    optionField: { label: "optionLabel", value: "optionValue" },
  },
  {
    label: "options 配置",
    prop: "status2",
    el: "el-tag",
    options: options,
    optionField: { label: "optionLabel", value: "optionValue" },
  },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
