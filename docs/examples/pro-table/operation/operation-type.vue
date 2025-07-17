<script setup lang="ts">
import type { ButtonEl, ConformEl, OperationNamespace, TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";
import { Delete, Operation, View, WarnTriangleFilled } from "@element-plus/icons-vue";
import { computed, ref } from "vue";

const confirmType = ref<ConformEl>("el-popconfirm");
const buttonType = ref<ButtonEl>("el-link");

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
    label: "性别",
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
  el: buttonType, // 可选的值：el-button, el-link, el-icon
  confirm: {
    el: confirmType,
  },
  width: () => (buttonType.value === "el-button" ? 260 : buttonType.value === "el-icon" ? 160 : 200),
  buttons: [
    {
      text: "按钮级配置",
      code: "view",
      elProps: row => ({
        type: "info",
        disabled: row.status === 1,
      }),
      // 按钮级别的配置优先级高于全局配置
      el: "el-button",
      confirm: {
        el: "ElPopconfirm",
      },
      icon: View,
    },
    {
      text: "打开",
      code: "open",
      elProps: () => ({
        type: "warning",
      }),
      icon: Operation,
      confirm: {
        props: {
          width: 150,
          icon: WarnTriangleFilled,
          iconColor: "red",
          message: data => `确定打开 username 为 ${data.row.username} 的数据吗？`,
          title: data => `确定打开 username 为 ${data.row.username} 的数据吗？`,
        },
      },
    },
    {
      text: "删除",
      code: "delete",
      elProps: computed(() => ({ type: "danger" })),
      confirm: {
        props: {
          width: 200,
          icon: WarnTriangleFilled,
          iconColor: "red",
          message: data => `确定删除 username 为 ${data.row.username} 且行数为 ${data.rowIndex} 的数据吗？`,
          title: data => `确定删除 username 为 ${data.row.username} 且行数为 ${data.rowIndex} 的数据吗？`,
        },
      },
      icon: Delete,
    },
  ],
};
</script>

<template>
  <el-row>
    <el-text style="margin-right: 10px">操作按钮二次确认类型</el-text>

    <el-radio-group v-model="confirmType">
      <el-radio value="el-popconfirm">el-popconfirm</el-radio>
      <el-radio value="el-messageBox">el-messageBox</el-radio>
    </el-radio-group>
  </el-row>

  <el-row>
    <el-text style="margin-right: 10px">操作按钮类型</el-text>

    <el-radio-group v-model="buttonType">
      <el-radio value="el-link">el-link</el-radio>
      <el-radio value="el-icon">el-icon</el-radio>
      <el-radio value="el-button">el-button</el-radio>
    </el-radio-group>
  </el-row>

  <ProTable :columns="columns" :data="data" :operation-props />
</template>
