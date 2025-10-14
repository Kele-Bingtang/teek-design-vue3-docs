<script setup lang="ts" name="SimpleProSearch">
import type { SearchColumn } from "@/components/pro/search";
import { ref } from "vue";
import { ProSearch } from "@/components/pro/search";

const state = ref({
  status: "0",
  async: "0",
  promise: "0-0-0",
  time: new Date().toString(),
});

const columns: SearchColumn[] = [
  {
    label: "函数状态",
    prop: "status",
    el: "el-select",
    options: () => [
      { label: "未解决", value: "0" },
      { label: "已解决", value: "1" },
      { label: "解决中", value: "2" },
      { label: "失败", value: "3" },
    ],
  },
  {
    label: "async函数状态",
    prop: "async",
    el: "el-select",
    options: async () => {
      // 等待 2s
      await new Promise(resolve => {
        setTimeout(() => {
          resolve("");
        }, 2000);
      });

      return [
        { label: "pending", value: "0" },
        { label: "fulfilled", value: "1" },
        { label: "rejected", value: "1" },
      ];
    },
  },
  {
    label: "promise 城市",
    prop: "promise",
    el: "el-cascader",
    options: () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              value: "0",
              label: "陕西",
              children: [
                {
                  value: "0-0",
                  label: "西安",
                  children: [
                    { value: "0-0-0", label: "新城区" },
                    { value: "0-0-1", label: "高新区" },
                    { value: "0-0-2", label: "灞桥区" },
                  ],
                },
              ],
            },
            {
              value: "1",
              label: "山西",
              children: [
                {
                  value: "1-0",
                  label: "太原",
                  children: [
                    { value: "1-0-0", label: "小店区" },
                    { value: "1-0-1", label: "古交市" },
                    { value: "1-0-2", label: "万柏林区" },
                  ],
                },
              ],
            },
          ]);
        }, 2000);
      });
    },
  },
];
</script>

<template>
  <ProSearch :columns v-model="state" />
</template>
