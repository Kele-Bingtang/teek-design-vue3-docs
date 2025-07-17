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
    render: ({ value }) =>
      h(
        ElButton,
        {
          type: "primary",
          link: true,
          onClick: () => ElMessage.success("我是通过 h 语法渲染的内容"),
        },
        {
          default: () => value,
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
    render: ({ value, renderValue }) =>
      h(
        ElTag,
        { type: value === 1 ? "success" : "danger" },
        {
          default: () => renderValue,
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
    render: ({ value }) => h(ElProgress, { percentage: value as number }),
  },
  { prop: "birthday", label: "生日", render: ({ value }) => h("span", {}, `render 渲染：${value}`) },
];
</script>

<template>
  <ProTable :columns="columns" :data="data">
    <template #birthday="{ value }">
      <!-- 插槽优先级比 render 低，会被 render 覆盖 -->
      {{ value }}
    </template>
  </ProTable>
</template>
