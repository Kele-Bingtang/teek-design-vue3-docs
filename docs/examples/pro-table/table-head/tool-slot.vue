<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { CirclePlus, Upload, Download } from "@element-plus/icons-vue";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
  { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
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
    prop: "progress",
    label: "进度",
    el: "el-progress",
    elSlots: {
      default: ({ value }) => value + "%",
    },
  },
  { prop: "birthday", label: "生日" },
];
</script>

<template>
  <ProTable :columns="columns" :data="data">
    <template #head-tool-before="{ tooltipProps }">
      <el-button type="primary" :icon="CirclePlus">新增用户</el-button>
      <el-tooltip content="新增" v-bind="tooltipProps">
        <el-button plain :icon="CirclePlus" class="head__tool-button" />
      </el-tooltip>
    </template>

    <template #head-tool-after>
      <el-button type="primary" :icon="Download" plain>导出用户数据</el-button>
    </template>
  </ProTable>
</template>
