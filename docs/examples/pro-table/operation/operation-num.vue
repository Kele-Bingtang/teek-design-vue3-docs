<script setup lang="ts">
import type { OperationNamespace, TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";
import { DocumentCopy, Delete, View, Edit } from "@element-plus/icons-vue";
import { computed } from "vue";

const data = [
  { username: "张三", status: 0 },
  { username: "李四", status: 1 },
  { username: "王五", status: 2 },
  { username: "孙六", status: 3 },
];

const columns: TableColumn[] = [
  { prop: "username", label: "用户姓名", el: "copy" },
  {
    prop: "gender",
    label: "status",
    el: "el-tag",
    options: [
      { label: "未解决", value: "0", tagType: "info" },
      { label: "已解决", value: "1", tagType: "primary" },
      { label: "解决中", value: "2", tagType: "warning" },
      { label: "失败", value: "3", tagType: "error" },
    ],
  },
];

const operationProps: OperationNamespace.Props = {
  label: "操作",
  width: 200,
  showNumber: row => (row.status === 1 ? 2 : 3),
  buttons: [
    {
      text: row => (row.status === 1 ? "开启" : "关闭"),
      code: "status",
      icon: View,
      elProps: {
        type: "primary",
      },
    },
    {
      text: "查看",
      code: "view",
      elProps: row => ({
        type: "info",
        disabled: row.status === 1,
      }),
      icon: View,
    },
    {
      text: "修改",
      elProps: row => ({
        type: "primary",
        disabled: row.status === 1,
      }),
      icon: Edit,
    },
    {
      text: "删除",
      code: "delete",
      elProps: computed(() => ({ type: "danger" })),
      confirm: {
        props: { options: { draggable: true } },
      },
      icon: Delete,
    },
    {
      text: "复制",
      code: "copy",
      elProps: {
        type: "success",
      },
      icon: DocumentCopy,
    },
  ],
};
</script>

<template>
  <ProTable :columns="columns" :data="data" :operation-props />
</template>
