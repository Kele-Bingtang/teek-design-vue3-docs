<script setup lang="ts" name="CreateProSearch">
import type { SearchColumn } from "@/components/pro/search";
import { ref, reactive } from "vue";
import { useProSearch } from "@/components/pro/search";

const {
  createMethods: { createSearch },
} = useProSearch();

const model = ref<Record<string, any>>({});

const handleSearch = async (data: Record<string, any>) => {
  console.log(data);
};

const columns: SearchColumn[] = reactive([
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
  {
    label: "input 框",
    prop: "input",
    el: "el-input",
  },
  {
    label: "input 框",
    prop: "input1",
    el: "el-input",
  },
  {
    label: "input 框",
    prop: "input2",
    el: "el-input",
  },
  {
    label: "input 框",
    prop: "input3",
    el: "el-input",
  },
  {
    label: "input 框",
    prop: "input4",
    el: "el-input",
  },
]);

createSearch("proSearchInstance", { columns, modelValue: model.value, onSearch: handleSearch, onReset: handleSearch });
</script>

<template>
  <div ref="proSearchInstance"></div>
</template>
