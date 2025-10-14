<script setup lang="ts" name="SimpleProSearch">
import type { ActionPosition, SearchColumn } from "@/components/pro/search";
import { ref } from "vue";
import { ProSearch } from "@/components/pro/search";

const state = ref({});

const actionsPosition = ref<ActionPosition>("right");

const columns: SearchColumn[] = [
  {
    label: "姓名",
    prop: "name",
    el: "el-input",
  },
  {
    label: "性别",
    prop: "sex",
    el: "el-select",
    options: [
      { label: "男", value: "1" },
      { label: "女", value: "2" },
    ],
  },
  {
    label: "年龄",
    prop: "age",
    el: "el-input-number",
    defaultValue: 18,
  },
  {
    label: "状态",
    prop: "status",
    el: "el-select",
    options: [
      { label: "在职", value: "1" },
      { label: "离职", value: "2" },
    ],
  },
];
</script>

<template>
  <div style="margin-bottom: 20px">
    <el-radio-group v-model="actionsPosition">
      <el-radio value="left">left</el-radio>
      <el-radio value="right">right</el-radio>
      <el-radio value="block-left">block-left</el-radio>
      <el-radio value="block-center">block-center</el-radio>
      <el-radio value="block-right">block-right</el-radio>
    </el-radio-group>
  </div>

  <ProSearch :columns v-model="state" :position="actionsPosition" />
</template>
