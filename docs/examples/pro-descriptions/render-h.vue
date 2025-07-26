<script lang="ts" setup>
import type { DescriptionColumn } from "@/components/pro/descriptions";
import { h } from "vue";
import { ElProgress, ElRate, ElTag } from "element-plus";
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
      { label: "未解决", value: 0 },
      { label: "已解决", value: 1 },
      { label: "解决中", value: 2 },
      { label: "失败", value: 3 },
    ],
    render: ({ value }) => h(ElTag, null, () => value),
  },
  {
    label: "执行进度",
    width: 200,
    prop: "progress",
    render: ({ value }) => h(ElProgress, { percentage: value as number }),
  },
  {
    label: "评分",
    width: 200,
    prop: "rate",
    render: ({ value }) => h(ElRate, { modelValue: value as number, disabled: true }),
  },
];
</script>

<template>
  <ProDescriptions :column="3" :columns :data border />
</template>
