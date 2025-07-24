<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ArrowRightBold, Warning, RefreshLeft, Orange, Bottom, Tools, Grid } from "@element-plus/icons-vue";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
  { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
];

const columns: TableColumn[] = [
  { type: "sort", label: "拖拽", width: 60 },
  { prop: "username", label: "用户姓名", el: "copy" },
  {
    prop: "gender",
    label: "性别",
    el: "el-tag",
    elProps: (value: number) => {
      if (value === 1) return { type: "success" };
      return { type: "danger" };
    },
    options: () => {
      return [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ];
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
  },
  { prop: "birthday", label: "生日" },
];
</script>

<template>
  <ProTable :columns="columns" :data="data">
    <template #operation-more-icon>
      <el-icon><ArrowRightBold /></el-icon>
    </template>

    <template #drag-sort-icon>☷</template>

    <template #tooltip-icon>
      <el-icon><Warning /></el-icon>
    </template>

    <template #refresh-icon>
      <el-icon><RefreshLeft /></el-icon>
    </template>

    <template #size-icon>
      <el-icon><Orange /></el-icon>
    </template>

    <template #export-icon>
      <el-icon><Bottom /></el-icon>
    </template>

    <template #column-setting-icon>
      <el-icon><Tools /></el-icon>
    </template>

    <template #base-setting-icon>
      <el-icon><Grid /></el-icon>
    </template>
  </ProTable>
</template>
