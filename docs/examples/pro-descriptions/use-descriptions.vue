<script lang="ts" setup>
import type { DescriptionColumn } from "@/components/pro/descriptions";
import { ref } from "vue";
import { ProDescriptions, useProDescriptions } from "@/components/pro/descriptions";

const { descriptionsRegister, descriptionsMethods } = useProDescriptions();
const { setColumn, setProps, addColumn, delColumn, setValues } = descriptionsMethods;

const model = ref({});

const data = {
  name: "Teek",
  status: 1,
  tag: "success",
  progress: 30,
  rate: 3.5,
  switch: true,
  time: new Date(),
  code: `
  const getData = async params => {
    const data = await getData(params)
    return { list: data.data, ...data }
  }`,
};

const columns: DescriptionColumn[] = [
  { label: "名称", prop: "name" },
  {
    label: "状态",
    prop: "status",
    options: [
      { label: "未解决", value: "0" },
      { label: "已解决", value: "1" },
      { label: "解决中", value: "2" },
      { label: "失败", value: "3" },
    ],
    formColumn: { el: "el-select" },
  },
  { label: "标签", width: 120, prop: "tag" },
  { label: "执行进度", width: 200, prop: "progress", formColumn: { formItemProps: { required: true } } },
  {
    label: "代码块",
    span: editable => (editable ? 2 : 1),
    labelWidth: 50,
    prop: "code",
  },
  { label: "评分", width: 200, prop: "rate" },
  { label: "开关", width: 100, prop: "switch", formColumn: { el: "el-switch" } },
  { label: "时间", width: 190, prop: "time" },
];

const changeBorder = (border: boolean) => {
  setProps({ border });
};

const changeLabel = (label: string) => {
  setColumn([{ prop: "name", field: "label", value: label }]);
};

const changeColumn = (column: number) => {
  setProps({ column });
};

const addOneColumn = () => {
  addColumn({ prop: "addCol", label: "新增列" }, "time", "after");
  setValues({ addCol: "我是新增的一列" });
};

const delOneColumn = () => {
  delColumn("add-col");
};

const changeEdit = (editable: boolean) => {
  setProps({ editable });
};
</script>

<template>
  <el-space fill>
    <el-card shadow="never">
      <el-space wrap>
        <el-button @click="changeBorder(true)">打开边框</el-button>
        <el-button @click="changeBorder(false)">关闭边框</el-button>
        <el-button @click="changeLabel('Teek 姓名')">修改名称</el-button>
        <el-button @click="changeColumn(2)">默认显示两列</el-button>
        <el-button @click="changeColumn(3)">默认显示三列</el-button>
        <el-button @click="addOneColumn">新增一列</el-button>
        <el-button @click="delOneColumn">删除一列</el-button>
        <el-button @click="changeEdit(true)">打开编辑功能</el-button>
        <el-button @click="changeEdit(false)">关闭编辑功能</el-button>
      </el-space>
    </el-card>

    <ProDescriptions v-model="model" :columns :data @register="descriptionsRegister" />
  </el-space>
</template>
