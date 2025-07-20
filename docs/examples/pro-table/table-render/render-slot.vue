<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ElButton, ElMessage, ElProgress, ElTag } from "element-plus";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
  { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
];

const columns: TableColumn[] = [
{ type: "index", label: "#", width: 60 },
  { prop: "username", label: "用户姓名" },
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
    // 通过 elProps 传递属性
    elProps: {
      closable: true,
    },
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
  },
  { prop: "birthday", label: "生日" },
];

const handleClick = () => {
  ElMessage.success("我是通过作用域插槽渲染的内容");
};
</script>

<template>
  <ProTable :columns="columns" :data="data">
    <template #username="{ row }">
      <el-button @click="handleClick">{{ row.username }}</el-button>
    </template>

    <template #gender="{ row, displayValue }">
      <el-tag :type="row.gender === 1 ? 'success' : 'danger'">{{ displayValue }}</el-tag>
    </template>

    <template #progress="{ value }">
      <el-progress :percentage="value as number" />
    </template>
  </ProTable>
</template>
