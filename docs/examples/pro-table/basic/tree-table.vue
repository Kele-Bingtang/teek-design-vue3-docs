<script lang="ts" setup>
import type { TableColumn } from "@/components/pro/table";
import { ref } from "vue";
import { ProTable } from "@/components/pro/table";
import { dayjs } from "element-plus";

const DataServe = {
  getList: async () => {
    const dataLazy = Array.from({ length: 3 }).map((item, index) => {
      return {
        id: index,
        name: index + "name",
        status: String(index % 3),
        tag: index === 1 ? "success" : index === 2 ? "warning" : index === 3 ? "info" : "danger",
        time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        hasChildren: true,
        children: [],
      };
    });
    const data = Array.from({ length: 3 }).map((item, index) => {
      return {
        id: index,
        name: index + "name",
        status: String(index % 3),
        tag: index === 1 ? "success" : index === 2 ? "warning" : index === 3 ? "info" : "danger",
        time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        children: Array.from({ length: 10 }).map((item, i) => ({
          id: index + "" + i,
          name: "小明" + i + "-" + i,
          status: String(i % 3),
          tag: i === 1 ? "success" : i === 2 ? "warning" : i === 3 ? "info" : "danger",
          time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        })),
      };
    });
    return {
      data: data,
      dataLazy: dataLazy,
    };
  },
};

const load = (row: Record<string, any>, treeNode: unknown, resolve: (date: Record<string, any>[]) => void) => {
  setTimeout(() => {
    resolve(
      Array.from({ length: 10 }).map((item, i) => ({
        id: 10 + i,
        name: "小明" + i + "-" + i,
        status: String(i % 3),
        tag: i === 1 ? "success" : i === 2 ? "warning" : i === 3 ? "info" : "danger",
        time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      }))
    );
  }, 1000);
};

const columns: TableColumn[] = [
  { label: "ID", prop: "id", width: 80 },
  { label: "名称", prop: "name" },
  {
    label: "状态",
    prop: "status",
    el: "el-tag",
    options: [
      { label: "未解决", value: "0" },
      { label: "已解决", value: "1" },
      { label: "解决中", value: "2" },
      { label: "失败", value: "3" },
    ],
  },
  {
    label: "标签",
    prop: "tag",
    el: "el-tag",
    elProps: (value: string) => {
      return { type: value };
    },
  },
  {
    label: "时间",
    prop: "time",
    valueType: "date-picker",
  },
];

const tableData = ref<Record<string, any>[]>();
const tableDataLazy = ref<Record<string, any>[]>();

const getList = async () => {
  const { data, dataLazy } = await DataServe.getList();
  tableData.value = data;
  tableDataLazy.value = dataLazy;
};

getList();
</script>

<template>
  <div>
    <ProTable
      :columns="columns"
      :data="tableData"
      title="树形表格"
      row-key="name"
      :tree-props="{ children: 'children' }"
    />
    <ProTable
      :columns="columns"
      :data="tableDataLazy"
      title="树形懒加载表格"
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    />
  </div>
</template>
