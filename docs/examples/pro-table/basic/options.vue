<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const data = [
  { ticket: "张三", status1: 0, status2: 0, status3: 0, status4: 0, status5: 0, status6: 0 },
  { ticket: "李四", status1: 1, status2: 1, status3: 1, status4: 1, status5: 1, status6: 1 },
  { ticket: "王五", status1: 2, status2: 2, status3: 2, status4: 2, status5: 2, status6: 2 },
  { ticket: "赵六", status1: 3, status2: 3, status3: 3, status4: 3, status5: 3, status6: 3 },
  { ticket: "孙七", status1: 4, status2: 4, status3: 4, status4: 4, status5: 4, status6: 4 },
];

const options = [
  { label: "未解决", value: 0 },
  { label: "已解决", value: 1 },
  { label: "解决中", value: 2 },
  { label: "失败", value: 3 },
  { label: "审核中", value: 4 },
];

const columns: TableColumn[] = [
  { prop: "ticket", label: "事件" },
  {
    label: "状态",
    prop: "status1",
    el: "el-tag",
    options: options,
  },
  {
    label: "匹配失败不取默认数据",
    prop: "status2",
    el: "el-tag",
    options: () => options.slice(3),
  },
  {
    label: "匹配失败取默认数据",
    prop: "status3",
    el: "el-tag",
    options: () => options.slice(3),
    ignoreOptionIfAbsent: true,
  },
  {
    label: "自定义 option",
    prop: "status4",
    el: "el-tag",
    options: options,
    transformOption: (value, options, row) => {
      const data = options?.find(item => item.value === value && ["张三", "李四"].includes(row.ticket));
      return data;
    },
  },
  {
    label: "忽略 options",
    prop: "status5",
    el: "el-tag",
    options: options,
    isFilterOptions: false,
  },
  {
    label: "使用已有 options",
    prop: "status6",
    el: "el-tag",
    optionsProp: "status1",
  },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
