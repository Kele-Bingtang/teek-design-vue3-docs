<script lang="ts" setup>
import type { DescriptionColumn } from "@/components/pro/descriptions";
import { ProDescriptions } from "@/components/pro/descriptions";

const data = {
  name: "Teek",
  status: 1,
  progress: 30,
  rate: 3.5,
};

const columns: DescriptionColumn[] = [
  { label: "名称", prop: "name", el: "Copy" },
  {
    label: "状态",
    prop: "status",
    options: [
      { label: "未解决", value: "0" },
      { label: "已解决", value: "1" },
      { label: "解决中", value: "2" },
      { label: "失败", value: "3" },
    ],
    renderHTML: ({ value }) => `<span class="el-tag el-tag--success">${value}</span>`,
  },
  {
    label: "执行进度",
    width: 200,
    prop: "progress",
    renderHTML: ({ value }) => `<span style="color: red">${value}</span>`,
  },
  {
    label: "评分",
    width: 200,
    prop: "rate",
    renderHTML: ({ value }) => `<span style="color: green">${value}</span>`,
  },
];
</script>

<template>
  <ProDescriptions :column="3" :columns :data border />
</template>
