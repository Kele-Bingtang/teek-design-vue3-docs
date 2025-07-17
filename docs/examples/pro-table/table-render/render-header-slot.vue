<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { h } from "vue";
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
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
  },
  { prop: "birthday", label: "生日" },
];
</script>

<template>
  <ProTable :columns="columns" :data="data">
    <template #header-before>pre</template>

    <template #username-header="{ column }">
      <el-button type="primary" @click="ElMessage.success('我是通过作用域插槽渲染的表头')">
        slot {{ column.label }}
      </el-button>
    </template>

    <template #gender-header="{ column }">
      <el-tag type="warning">{{ column.label }}</el-tag>
    </template>

    <template #progress-header>
      <el-progress :percentage="100" />
    </template>

    <template #birthday-header="{ column }">slot 渲染：{{ column.label }}</template>

    <template #header-after>pro</template>
  </ProTable>
</template>
