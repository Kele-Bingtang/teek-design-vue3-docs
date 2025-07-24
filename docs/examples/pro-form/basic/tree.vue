<script lang="ts" setup>
import type { FormColumn } from "@/components/pro/form";
import { computed, ref } from "vue";
import { ProForm } from "@/components/pro/form";

const state = ref({
  tree: [1],
});

const checkbox = ref(false);
const search = ref(false);
const select = ref(true);
const checkBaseValueType = ref("keys");

const columns: FormColumn[] = [
  {
    label: "",
    prop: "tree",
    el: "tree",
    elProps: computed(() => ({
      checkbox: checkbox.value,
      search: search.value,
      select: select.value,
      expandSelected: true, // 初始化时存在默认选中的节点，是否展开选中节点的所有父节点，默认 false
      checkBaseValueType: checkBaseValueType.value,
    })),
    options: [
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 4,
            label: "Level two 1-1",
            children: [
              { id: 9, label: "Level three 1-1-1" },
              { id: 10, label: "Level three 1-1-2" },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "Level one 2",
        children: [
          { id: 5, label: "Level two 2-1" },
          { id: 6, label: "Level two 2-2" },
        ],
      },
      {
        id: 3,
        label: "Level one 3",
        children: [
          { id: 7, label: "Level two 3-1" },
          { id: 8, label: "Level two 3-2" },
        ],
      },
    ],
  },
];
</script>

<template>
  <div style="margin-bottom: 20px">
    <el-checkbox v-model="checkbox">开启工具栏</el-checkbox>
    <el-checkbox v-model="search">开启搜索功能</el-checkbox>
    <el-checkbox v-model="select">开启全选/全不选功能</el-checkbox>
    <el-switch
      v-model="checkBaseValueType"
      inline-prompt
      active-text="获取 keys"
      active-value="keys"
      inactive-text="获取 nodes"
      inactive-value="nodes"
      style="margin-left: 16px; vertical-align: 4px"
    />
  </div>

  <el-card>
    <ProForm v-model="state" :columns :show-label="false" />
    {{ state }}
  </el-card>
</template>
