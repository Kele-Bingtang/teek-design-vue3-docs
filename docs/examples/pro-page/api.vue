<script setup lang="ts">
import type { PageColumn } from "@/components/pro/page";
import { ProPage } from "@/components/pro/page";

// 模拟后端 API
const DataService = {
  getList: async (searchParams: Record<string, any>) => {
    console.log("搜索条件: ", searchParams);

    const data = [
      { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
      { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
      { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
    ];

    return Promise.resolve({
      code: 200,
      message: "success",
      data,
    });
  },
};

const columns: PageColumn[] = [
  { prop: "username", label: "用户姓名", el: "copy", search: {} },
  {
    prop: "gender",
    label: "性别",
    el: "el-tag",
    elProps: (value: number) => {
      if (value === 1) return { type: "success" };
      return { type: "danger" };
    },
    options: async () => {
      return [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ];
    },
    search: {
      el: "el-select",
    },
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    tooltip: "学习进度",
    elSlots: {
      default: ({ value }) => value + "%",
    },
    search: {
      el: "el-input",
    },
  },
  {
    prop: "birthday",
    label: "生日",
    search: {
      el: "el-date-picker",
    },
  },
];

// 请求数据后的回调
const handleTransformData = (data: Record<string, any>[]) => {
  return [...data, { username: "赵六", gender: 2, progress: 80, birthday: "2023-04-01" }];
};

// 请求错误的回调
const handleRequestError = (error: unknown) => {
  console.log(error);
};
</script>

<template>
  <ProPage
    :columns="columns"
    :request-api="DataService.getList"
    :default-request-params="{ username: '张三' }"
    :request-error="handleRequestError"
    :transform-data="handleTransformData"
  />
</template>
