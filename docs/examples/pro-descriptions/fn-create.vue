<script setup lang="ts">
import type { DescriptionColumn } from "@/components/pro/descriptions";
import { useProDescriptions } from "@/components/pro/descriptions";

const {
  createMethods: { createDescriptions },
} = useProDescriptions();

const data = {
  name: "Teek",
  status: 1,
  tag: "success",
  progress: 30,
  rate: 3.5,
  switch: true,
  time: new Date(),
  code: `
  const getData = async params => {
    const data = await getData(params)
    return { list: data.data, ...data }
  }`,
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
  },
  { label: "标签", width: 120, prop: "tag", el: "el-tag" },
  { label: "执行进度", width: 200, prop: "progress" },
  { label: "代码块", width: 250, prop: "code" },
  { label: "评分", width: 200, prop: "rate" },
  { label: "开关", width: 100, prop: "switch" },
  { label: "时间", width: 190, prop: "time" },
];

createDescriptions("proDescriptionInstance", {
  columns,
  data,
  border: true,
});
</script>

<template>
  <div ref="proDescriptionInstance"></div>
</template>
