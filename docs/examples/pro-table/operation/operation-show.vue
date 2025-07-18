<script setup lang="ts">
import type { ButtonEl, OperationNamespace, TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";
import { DocumentCopy, Delete, View, Edit } from "@element-plus/icons-vue";
import { computed, ref } from "vue";

const permissionList = ["sys.view", "sys.edit", "sys.copy"];

const data = [
  { username: "张三", status: 0 },
  { username: "李四", status: 1 },
  { username: "王五", status: 2 },
  { username: "孙六", status: 3 },
];

const columns: TableColumn[] = [
  { prop: "username", label: "用户姓名", el: "copy" },
  {
    prop: "status",
    label: "状态",
    el: "el-tag",
    options: [
      { label: "未解决", value: "0", tagType: "info" },
      { label: "已解决", value: "1", tagType: "primary" },
      { label: "解决中", value: "2", tagType: "warning" },
      { label: "失败", value: "3", tagType: "danger" },
    ],
  },
];

const operationProps: OperationNamespace.Props = {
  label: "操作",
  width: 150,
  buttons: [
    {
      text: "查看",
      code: "view",
      elProps: row => ({
        type: "info",
        disabled: row.status === 1,
      }),
      show: () => permissionList.includes("sys.view"), // 权限控制
      icon: View,
    },
    {
      text: "修改",
      elProps: row => ({
        type: "primary",
        disabled: row.status === 1,
      }),
      show: computed(() => permissionList.includes("sys.edit")), // 支持 computed
      icon: Edit,
    },
    {
      text: "删除",
      code: "delete",
      elProps: computed(() => ({ type: "danger" })),
      show: row => permissionList.includes("sys.delete") || row.status === 1,
      confirm: {
        props: { options: { draggable: true } },
      },
      icon: Delete,
    },
  ],
};
</script>

<template>
  <ProTable :columns="columns" :data="data" :operation-props />
</template>
