<script setup lang="ts">
import type { PageColumn, ProPageInstance } from "@/components/pro/page";
import { ProPage } from "@/components/pro/page";
import { ElMessage } from "element-plus";
import { useTemplateRef } from "vue";

const proPageInstance = useTemplateRef<ProPageInstance>("proPageInstance");

const data = [
  { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
  { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
];

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

/**
 * 设置搜索值
 */
const setSearchParams = () => {
  proPageInstance.value?.setSearchParams({ username: "小明", gender: 1 });
};

/**
 * 获取搜索值
 */
const getSearchParams = () => {
  ElMessage.info(JSON.stringify(proPageInstance.value?.searchParams));
};
/**
 * 清空搜索值
 */
const clearSearchParams = () => {
  proPageInstance.value?.clearSearchParams();
};
</script>

<template>
  <div style="margin-bottom: 10px">
    <el-button @click="setSearchParams">设置搜索值</el-button>
    <el-button @click="getSearchParams">获取搜索值</el-button>
    <el-button @click="clearSearchParams">清空搜索值</el-button>
  </div>

  <ProPage ref="proPageInstance" :columns="columns" :data="data" />
</template>
