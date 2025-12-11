<script setup lang="ts">
import type { TabsInstance } from "element-plus";
import type { TabColumn } from "@/components/pro/tabs";
import { h, ref } from "vue";
import { ProTabs } from "@/components/pro/tabs";

const activeName = ref("group");

const tabPosition = ref<TabsInstance["tabPosition"]>("top");

const columns: TabColumn[] = [
  {
    prop: "group",
    label: "群组",
    render: () => h("div", null, "群组页面"),
  },
  {
    prop: "role",
    label: "角色",
    lazy: true,
    render: () => h("div", null, "角色页面"),
  },
  {
    prop: "dept",
    label: "部门",
    lazy: true,
    disabled: true,
    render: () => h("div", null, "部门页面"),
  },
];
</script>

<template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
    <el-radio-button value="top">top</el-radio-button>
    <el-radio-button value="right">right</el-radio-button>
    <el-radio-button value="bottom">bottom</el-radio-button>
    <el-radio-button value="left">left</el-radio-button>
  </el-radio-group>

  <ProTabs v-model="activeName" :columns :tab-position="tabPosition" type="border-card" style="height: 200px" />
</template>
