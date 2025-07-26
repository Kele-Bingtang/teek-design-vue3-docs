<script lang="ts" setup>
import type { DescriptionColumn } from "@/components/pro/descriptions";
import { h } from "vue";
import { ElTag } from "element-plus";
import { ProDescriptions } from "@/components/pro/descriptions";

const data = {
  name: "Teek",
  status: 1,
};

const columns: DescriptionColumn[] = [
  {
    label: "名称",
    prop: "name",
    el: "Copy",
    renderLabel: ({ label }) => h(ElTag, null, () => label),
  },
  {
    label: "状态",
    prop: "status",
    options: [
      { label: "未解决", value: 0 },
      { label: "已解决", value: 1 },
      { label: "解决中", value: 2 },
      { label: "失败", value: 3 },
    ],
    renderLabel: ({ label }) => h(ElTag, null, () => label),
  },
];
</script>

<template>
  <ProDescriptions :column="3" :columns :data border />
</template>
