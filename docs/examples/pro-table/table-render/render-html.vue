<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", gender: 1, idCard: "805839158256013232", birthday: "2023-01-01" },
  { username: "李四", gender: 2, idCard: "824440124728046271", birthday: "2023-02-01" },
  { username: "王五", gender: 1, idCard: "026454951166840353", birthday: "2023-03-01" },
];

const columns: TableColumn[] = [
  { type: "index", label: "#", width: 60 },
  {
    prop: "username",
    label: "用户姓名",
    renderHTML: ({ value }) => `<span style="color: red">${value}</span>`,
  },
  {
    prop: "gender",
    label: "性别",
    el: "el-tag",
    options: [
      { label: "男", value: 1, tagType: "primary" },
      { label: "女", value: 2, tagType: "warning" },
    ],
    renderHTML: ({ value }) => `<span style="color: #395AE3">${value}-自定义</span>`,
  },
  {
    prop: "idCard",
    label: "身份证号",
    filter: true,
    renderHTML: ({ value }) => {
      return `<input  style="border:1px solid #dd5c27;width:80px;padding:0 10px;" value=${value} />`;
    },
  },
  {
    prop: "birthday",
    label: "生日",
    renderHTML: ({ value }) => {
      return `日期：<span style="color: #e68a00">${value}</span>`;
    },
  },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
