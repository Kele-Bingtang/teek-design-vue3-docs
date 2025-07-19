<script setup lang="ts">
import { ref, reactive, h, Fragment } from "vue";
import { ElButton } from "element-plus";
import type { TableColumn } from "@/components/pro/table";
import { ProTable, useProTable } from "@/components/pro/table";

const { tableRegister, tableMethods } = useProTable();
const { setProps, setColumn, getElTableExpose, addColumn, delColumn, clearSelection, changePagination } = tableMethods;

const DataService = {
  getList: async () => {
    const data = [
      { username: "张三", gender: 1 },
      { username: "李四", gender: 2 },
      { username: "王五", gender: 1 },
      { username: "赵六", gender: 1 },
      { username: "孙七", gender: 2 },
      { username: "周八", gender: 2 },
    ];

    return Promise.resolve({
      code: 200,
      message: "success",
      data,
    });
  },
};

const showTableButton = (show: boolean) => {
  setProps({ toolButton: show });
};

const showSelections = (show: boolean) => {
  setColumn([
    {
      prop: "selection",
      field: "hidden",
      value: show,
    },
  ]);
};

const showPagination = (show: boolean) => {
  setProps({ pageScope: show });
};

const index = ref(1);

const changeUsername = () => {
  setColumn([
    {
      prop: "username",
      field: "label",
      value: `用户姓名 ${index.value}`,
    },
  ]);
  index.value++;
};

const showExpandedRows = (show: boolean) => {
  setColumn([
    {
      prop: "expand",
      field: "hidden",
      value: show,
    },
  ]);
};

const selectAllNone = async () => {
  const elTableRef = await getElTableExpose();
  elTableRef?.toggleAllSelection();
};

const showAction = ref(true);

const delOrAddAction = () => {
  if (showAction.value) {
    delColumn("operation");
    showAction.value = false;
  } else {
    addColumn({
      prop: "operation",
      label: "操作",
      fixed: "right",
      width: 180,
      render: () =>
        h(Fragment, null, [
          h(ElButton, { plain: true, type: "primary" }, { default: () => "编辑" }),
          h(ElButton, { plain: true, type: "danger" }, { default: () => "删除" }),
        ]),
    });
    showAction.value = true;
  }
};

const showStripe = ref(false);
const showOrHiddenStripe = () => {
  setProps({
    stripe: !showStripe.value,
  });
  showStripe.value = !showStripe.value;
};

const height = ref<string | number>("auto");
const fixedHeaderOrAuto = () => {
  if (height.value === "auto") {
    height.value = 300;
    setProps({
      height: height.value,
    });
  } else {
    setProps({
      height: "auto",
    });
    height.value = "auto";
  }
};

export interface ResUserList {
  id: string;
  username: string;
  gender: number;
  user: { detail: { age: number } };
  idCard: string;
  email: string;
  address: string;
  createTime: string;
  status: number;
  avatar: string;
  photo: any[];
  children?: ResUserList[];
}

const columns: TableColumn[] = [
  { type: "selection", prop: "selection", fixed: "left", width: 60 },
  { type: "index", label: "#", width: 60 },
  { type: "sort", label: "Sort", width: 80 },
  { type: "expand", prop: "expand", label: "Expand", width: 80 },
  { prop: "username", label: "用户姓名" },
  {
    prop: "gender",
    label: "性别",
    options: [
      { genderLabel: "男", genderValue: 1 },
      { genderLabel: "女", genderValue: 2 },
    ],
    optionField: { label: "genderLabel", value: "genderValue" },
  },
  {
    prop: "operation",
    label: "操作",
    fixed: "right",
    width: 180,
    render: () =>
      h(Fragment, null, [
        h(ElButton, { plain: true, type: "primary" }, { default: () => "编辑" }),
        h(ElButton, { plain: true, type: "danger" }, { default: () => "删除" }),
      ]),
  },
];
</script>

<template>
  <el-space fill style="width: 100%">
    <el-card shadow="never" header="UseTable 操作">
      <el-space wrap>
        <el-button @click="showTableButton(false)">隐藏顶栏所有按钮</el-button>
        <el-button @click="showTableButton(true)">显示顶栏所有按钮</el-button>
        <el-button @click="showSelections(true)">隐藏多选</el-button>
        <el-button @click="showSelections(false)">显示多选</el-button>
        <el-button @click="showPagination(false)">隐藏分页</el-button>
        <el-button @click="showPagination(true)">显示分页</el-button>
        <el-button @click="changePagination({ pageNum: 2 })">切换到第二个页</el-button>
        <el-button @click="changeUsername">修改用户姓名</el-button>
        <el-button @click="showExpandedRows(true)">隐藏展开行</el-button>
        <el-button @click="showExpandedRows(false)">显示展开行</el-button>
        <el-button @click="selectAllNone">全选/全不选</el-button>
        <el-button @click="clearSelection">清空选择</el-button>
        <el-button @click="delOrAddAction">删除/添加操作列</el-button>
        <el-button @click="showOrHiddenStripe">删除/隐藏斑马纹</el-button>
        <el-button @click="fixedHeaderOrAuto">固定表头/自动</el-button>
      </el-space>
    </el-card>

    <ProTable
      :columns
      :request-api="DataService.getList"
      page-scope
      :page-info="{ pageSize: 5 }"
      @register="tableRegister"
    />
  </el-space>
</template>
