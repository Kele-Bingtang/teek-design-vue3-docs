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
  {
    prop: "username",
    label: "用户姓名",
    headerRender: ({ column }) =>
      h(
        ElButton,
        {
          type: "primary",
          onClick: () => ElMessage.success("我是通过 h 语法渲染的表头"),
        },
        {
          default: () => `h ${column.label}`,
        }
      ),
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
    headerRender: ({ column }) =>
      h(
        ElTag,
        { type: "danger" },
        {
          default: () => column.label,
        }
      ),
    // 通过 elProps 传递属性
    elProps: {
      closable: true,
    },
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    headerRender: () => h(ElProgress, { percentage: 90 }),
  },
  { prop: "birthday", label: "生日", headerRender: ({ column }) => h("span", {}, `h 渲染：${column.label}`) },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
