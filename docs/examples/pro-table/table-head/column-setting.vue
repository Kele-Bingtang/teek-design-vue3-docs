<script setup lang="ts">
import type { ColumnSetting, TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const columnSetting: ColumnSetting = {
  disabledFilter: true,
};

const data = [
  { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
  { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
];

const columns: TableColumn[] = [
  { prop: "username", label: "用户姓名", el: "copy", disabledHidden: true },
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
    disabledSortable: true,
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    elSlots: {
      default: ({ value }) => value + "%",
    },
    disabledFilter: true,
  },
  { prop: "birthday", label: "生日", disabledDragSort: true },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" :column-setting />
</template>
