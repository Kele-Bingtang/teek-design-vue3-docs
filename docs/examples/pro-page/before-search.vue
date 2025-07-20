<script setup lang="ts">
import type { PageColumn } from "@/components/pro/page";
import { ProPage } from "@/components/pro/page";
import { ElMessage } from "element-plus";

const data = [
  { username: "张三", gender: 1, progress: 20, createTime: "2023-01-01" },
  { username: "李四", gender: 2, progress: 40, createTime: "2023-02-01" },
  { username: "王五", gender: 1, progress: 60, createTime: "2023-03-01" },
];

const columns: PageColumn[] = [
  {
    prop: "username",
    label: "用户姓名",
    el: "copy",
    search: {
      beforeSearch: value => {
        if (value) return "%" + value + "%";
      },
    },
  },
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
    prop: "createTime",
    label: "创建事件",
    search: {
      el: "el-date-picker",
      span: 2,
      elProps: {
        type: "daterange",
      },
      beforeSearch: (value, searchParams) => {
        if (value) {
          searchParams.startTime = value[0];
          searchParams.endTime = value[1];
          delete searchParams.createTime;
        }
      },
    },
  },
];

const beforeSearch = (searchParams: Record<string, any>) => {
  // 饭 false 代表取消发送请求
  return false;
};

const handleSearch = (model: Record<string, any>) => {
  ElMessage.info("搜索条件：" + JSON.stringify(model));
};
</script>

<template>
  <ProPage :columns="columns" :data="data" :before-search="beforeSearch" @search="handleSearch" />
</template>
