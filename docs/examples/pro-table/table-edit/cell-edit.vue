<script setup lang="ts">
import { setProp } from "@/components/pro/helper";
import type { TableColumn, TableScope } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";
import { ElMessage } from "element-plus";
import { ref } from "vue";

// 表格数据需要是 ref 响应式，这样才会触发表格的更新
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
    // 当存在 options，编辑组件默认为 el-select
    options: [
      { label: "未解决", value: 0, tagType: "info" },
      { label: "已解决", value: 1, tagType: "primary" },
      { label: "解决中", value: 2, tagType: "warning" },
      { label: "失败", value: 3, tagType: "danger" },
    ],
    editProps: {
      formItemProps: {
        rules: [{ required: true, trigger: "change", message: "请选择状态" }],
      },
    },
  },
  {
    prop: "rate",
    label: "评分",
    width: 200,
    editProps: {
      el: "el-rate",
      elProps: {
        allowHalf: true,
      },
    },
  },
  {
    prop: "switch",
    label: "开关",
    width: 100,
    editProps: {
      el: "el-switch",
      formItemProps: {
        required: true,
      },
    },
  },
  {
    label: "时间",
    prop: "time",
    editProps: {
      el: "el-date-picker",
      formItemProps: {
        required: true,
      },
    },
    width: 200,
  },
  {
    prop: "operation",
    label: "操作",
    width: 120,
    buttons: [
      {
        text: "取消编辑",
        code: "cancel",
        show: row => !!row._isCellEdit?.(["username", "status"]),
        elProps: {
          type: "warning",
        },
        onClick: async ({ row }) => {
          // 关闭当前行编辑
          row._closeCellEdit(["username", "status"], true);

          // _closeCellEdit 第二个参数为 true 时，等于调用该方法
          // row._resetCellData(["username", "status"]);
        },
      },
      {
        text: "保存",
        code: "save",
        elProps: {
          type: "primary",
        },
        show: row => !!row._isCellEdit?.(["username", "status"]),
        onClick: async ({ row }) => {
          // 校验成功再关闭编辑
          const isValid = await row._validateCellEdit();
          if (isValid) {
            row._closeCellEdit(["username", "status"]);
            // 这里可以调用接口进行保存
            ElMessage.success("保存成功：" + JSON.stringify(row._getData()));
          }
        },
      },
      {
        text: "编辑",
        code: "edit",
        elProps: {
          type: "primary",
        },
        show: row => !row._isCellEdit?.(["username", "status"]),
        onClick: ({ row }) => {
          // 指定当前行单元格可编辑
          row._openCellEdit(["username", "status"]);
        },
      },
      {
        text: "删除",
        code: "delete",
        elProps: {
          type: "danger",
        },
        confirm: true,
        show: row => !row._isCellEdit?.(["username", "status"]),
        onConfirm: ({ row }) => {
          data.value = data.value.filter(item => !row.username.includes(item.username));
        },
      },
    ],
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
