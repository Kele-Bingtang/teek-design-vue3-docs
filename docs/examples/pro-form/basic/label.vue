<script lang="ts" setup>
import type { FormColumn } from "@/components/pro/form";
import { ref, computed } from "vue";
import { ProForm } from "@/components/pro/form";

const state = ref({
  status: "0",
  name: "",
});

const columns1: FormColumn[] = [
  {
    label: "名称",
    prop: "name",
    tooltip: "名称最多显示6个字符",
    // 优先级会更高
    showLabel: true,
  },
  {
    label: "名称1",
    prop: "name1",
    showLabel: ref(true),
  },
  {
    label: "名称2",
    prop: "name2",
    showLabel: computed(() => true),
  },
  {
    label: "状态",
    prop: "status",
    el: "el-select",
    options: [
      { label: "未解决", value: "0", color: "red" },
      { label: "已解决", value: "1", color: "blue" },
      { label: "解决中", value: "2", color: "yellow" },
      { label: "失败", value: "3", color: "red" },
    ],
  },
];

const columns2: FormColumn[] = [
  {
    label: "名称",
    prop: "name",
    tooltip: "名称最多显示6个字符",
    // 优先级会更高
    showLabel: false,
  },
  {
    label: "名称1",
    prop: "name1",
    showLabel: ref(false),
  },
  {
    label: "名称2",
    prop: "name2",
    showLabel: computed(() => false),
  },
  {
    label: "状态",
    prop: "status",
    el: "el-select",
    options: [
      { label: "未解决", value: "0", color: "red" },
      { label: "已解决", value: "1", color: "blue" },
      { label: "解决中", value: "2", color: "yellow" },
      { label: "失败", value: "3", color: "red" },
    ],
  },
];
</script>

<template>
  <el-card>
    <ProForm v-model="state" :columns="columns1" :show-label="false" />
  </el-card>
  <el-card style="margin-top: 20px">
    <ProForm v-model="state" :columns="columns2" />
  </el-card>
</template>
