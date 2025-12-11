<script setup lang="ts">
import type { TabColumn } from "@/components/pro/tabs";
import { computed, h, ref } from "vue";
import { ProTabs } from "@/components/pro/tabs";
import Group from "./components/group.vue";

const userId = ref("k100338");

const activeName = ref("group");

const columns: TabColumn[] = [
  {
    prop: "group",
    label: "群组",
    el: Group,
    // 使用 computed 传响应式参数
    elProps: computed(() => ({
      userId: userId.value,
    })),
  },
  {
    prop: "dept",
    label: "部门",
    lazy: true,
    render: () => h("div", null, "我是一个使用 h 函数渲染页面"),
  },
];

const handleChangeUserId = () => {
  // 随机生成一个用户 ID
  userId.value = Math.round(Math.random() * 100) + 1024 + "";
};
</script>

<template>
  <el-button v-if="activeName === 'group'" @click="handleChangeUserId" style="margin-bottom: 10px">
    切换用户 ID
  </el-button>
  <ProTabs v-model="activeName" :columns />
</template>
