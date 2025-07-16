<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { h } from "vue";
import { ElEmpty, ElIcon } from "element-plus/es";
import { ProTable } from "@/components/pro/table";
import { Link } from "@element-plus/icons-vue";

const data = [
  {
    copy: "张三",
    tag: 0,
    progress: 10,
    link: "按钮",
    img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  },
  { copy: "李四", tag: 1, progress: 30, link: "按钮", img: "" },
  { copy: "王五", tag: 1, progress: 50, link: "按钮", img: "" },
  {
    copy: "孙六",
    tag: 0,
    progress: 80,
    link: "按钮",
    img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  },
];

const columns: TableColumn[] = [
  { type: "index", label: "#", width: 60 },
  { prop: "copy", label: "用户姓名", el: "copy" },
  {
    prop: "tag",
    label: "性别",
    el: "el-tag",
    elProps: value => ({
      type: value === 0 ? "success" : "info",
    }),
    elSlots: {
      default: ({ value }) => (value === 0 ? "开启" : "关闭"),
    },
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    elProps: value => ({
      status: value === 30 ? "success" : "warning",
    }),
    elSlots: {
      default: ({ value }) => ((value as number) > 30 ? "高" : "低"),
    },
  },
  { prop: "link", label: "点击跳转", el: "el-link", icon: () => h(ElIcon, null, () => h(Link)) },
  {
    prop: "img",
    label: "图片",
    el: "el-image",
    elSlots: {
      error: () => h(ElEmpty, { description: "图片坏了" }),
    },
  },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" border />
</template>
