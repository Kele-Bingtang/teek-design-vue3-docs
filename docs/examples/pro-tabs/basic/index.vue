<script setup lang="ts">
import type { TabColumn } from "@/components/pro/tabs";
import { h, ref } from "vue";
import { ProTabs } from "@/components/pro/tabs";
import Group from "./components/group.vue";

const activeName = ref("group");

const columns: TabColumn[] = [
  {
    prop: "group",
    label: "群组",
    el: Group,
  },
  {
    prop: "role",
    label: "角色",
    render: () => h("div", null, "角色页面"),
  },
  {
    prop: "dept",
    label: "部门",
    render: () => h("div", null, "部门页面"),
  },
];
</script>

<template>
  <ProTabs v-model="activeName" :columns />
</template>
