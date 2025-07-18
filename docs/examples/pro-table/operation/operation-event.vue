<script setup lang="ts">
import type { OperationNamespace, TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";
import { Delete, Edit } from "@element-plus/icons-vue";
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
  {
    prop: "operation",
    label: "操作",
    width: 100,
    buttons: [
      {
        text: "修改",
        elProps: row => ({
          type: "primary",
          disabled: row.status === 1,
        }),
        show: computed(() => true),
        icon: Edit,
        onClick: params => {
          params.row._editable = !params.row._editable;
        },
      },
      {
        text: "删除",
        code: "delete",
        elProps: computed(() => ({ type: "danger" })),
        confirm: {
          props: { options: { draggable: true } },
        },
        icon: Delete,
        onClick: params => {
          console.log(params, "onClick");
        },
        onConfirm: params => {
          console.log(params, "onConfirm");
        },
        // 也支持函数式风格
        onCancel(params) {
          console.log(params, "onCancel");
        },
      },
    ],
  },
];

const handleButtonClick = (params: OperationNamespace.ButtonsCallBackParams) => {
  console.log(params, "handleButtonClick");
};

const handleButtonConfirm = (params: OperationNamespace.ButtonsCallBackParams) => {
  console.log(params, "handleButtonConfirm");
};

const handleButtonCancel = (params: OperationNamespace.ButtonsCallBackParams) => {
  console.log(params, "handleButtonCancel");
};
</script>

<template>
  <ProTable
    :columns="columns"
    :data="data"
    @button-click="handleButtonClick"
    @button-confirm="handleButtonConfirm"
    @button-cancel="handleButtonCancel"
  />
</template>
