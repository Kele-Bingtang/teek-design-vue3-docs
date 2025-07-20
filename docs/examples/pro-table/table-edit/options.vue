<script setup lang="ts">
import { setProp } from "@/components/pro/helper";
import type { TableColumn, TableScope } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";
import { ref } from "vue";

const data = ref([
  { username: "张三", status: 0, rate: 3, switch: true, time: "2025-01-01" },
  { username: "李四", status: 1, rate: 3.5, switch: true, time: "2025-02-01" },
  { username: "王五", status: 2, rate: 4.5, switch: false, time: "2025-04-01" },
  { username: "孙六", status: 3, rate: 1, switch: false, time: "2025-05-01" },
]);

const columns: TableColumn[] = [
  { prop: "username", label: "用户姓名" },
  {
    prop: "status",
    label: "状态",
    el: "el-tag",
    width: 120,
    editable: true,
    options: [
      { label: "未解决", value: 0, tagType: "info" },
      { label: "已解决", value: 1, tagType: "primary" },
      { label: "解决中", value: 2, tagType: "warning" },
      { label: "失败", value: 3, tagType: "danger" },
    ],
    editProps: {
      options: () => [
        { label: "未解决0", value: 0 },
        { label: "已解决1", value: 1 },
        { label: "解决中2", value: 2 },
        { label: "失败3", value: 3 },
      ],
    },
  },
];

// 监听表单数据变化，修改表格数据
const handleFormChange = async (fromValue: unknown, prop: string, scope: TableScope) => {
  setProp(data.value[scope.rowIndex!], prop, fromValue);
};
</script>

<template>
  <ProTable :columns="columns" :data="data" @form-change="handleFormChange" />
</template>
