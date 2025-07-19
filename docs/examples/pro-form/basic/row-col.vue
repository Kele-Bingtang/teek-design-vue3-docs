<script lang="ts" setup>
import type { FormValidateCallback } from "element-plus";
import type { ElFormProps, FormColumn } from "@/components/pro/form";
import type { FormItemColumnProps } from "@/components/pro/form-item";
import { ref, computed } from "vue";
import { ProForm } from "@/components/pro/form";

const state = ref({
  status: "0",
  name: "",
  rate: 4,
  progress: 100,
  switch: true,
  time: new Date().toString(),
  endTime: [],
  img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
});

const elFormProps: Partial<ElFormProps> = {
  rules: {
    name: [{ required: true, message: "请输入名称" }],
    tag: [{ required: true, message: "请输入标签" }],
  },
};

const columns: FormColumn[] = [
  {
    label: "名称",
    prop: "name",
    tooltip: computed(() => (state.value.name as string) || "提示：复制名称"),
  },
  {
    label: "状态",
    prop: "status",
    el: "el-select",
    options: [
      { label: "未解决", value: "0" },
      { label: "已解决", value: "1" },
      { label: "解决中", value: "2" },
      { label: "失败", value: "3" },
    ],
  },
  { label: "标签", prop: "tag" },
  { label: "执行进度", prop: "progress" },
  { label: "评分", prop: "rate", el: "el-rate" },
  { label: "是否显示", prop: "switch", el: "el-switch" },
  {
    label: "图片",
    prop: "img",
    colProps: { span: 24 },
  },
  { label: "时间", prop: "time", el: "el-date-picker" },
  {
    label: "数量",
    prop: "number",
    el: "el-input-number",
    elProps: { precision: 2, step: 2 },
  },
  {
    label: "城市",
    prop: "city",
    el: "el-cascader",
    options: [
      {
        value: "0",
        label: "陕西",
        children: [
          {
            value: "0-0",
            label: "西安",
            children: [
              { value: "0-0-0", label: "新城区" },
              { value: "0-0-1", label: "高新区" },
              { value: "0-0-2", label: "灞桥区" },
            ],
          },
        ],
      },
      {
        value: "1",
        label: "山西",
        children: [
          {
            value: "1-0",
            label: "太原",
            children: [
              { value: "1-0-0", label: "小店区" },
              { value: "1-0-1", label: "古交市" },
              { value: "1-0-2", label: "万柏林区" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "地区",
    prop: "place",
    tooltip: "请精确到门牌号",
    elProps: {
      placeholder: "请精确到门牌号",
    },
  },
  {
    label: "要求",
    prop: "demand",
    el: "el-checkbox",
    options: [
      { label: "四六级", value: "0" },
      { label: "计算机二级证书", value: "1" },
      { label: "普通话证书", value: "2" },
    ],
  },
  {
    label: "梦想",
    prop: "gift",
    el: "el-radio",
    options: [
      {
        label: "诗",
        value: "0",
      },
      {
        label: "远方",
        value: "1",
      },
      {
        label: "美食",
        value: "2",
      },
    ],
  },
  {
    label: "到期时间",
    prop: "endTime",
    el: "el-date-picker",
    elProps: {
      type: "datetimerange",
      startPlaceholder: "请选择开始时间",
      endPlaceholder: "请选择结束时间",
    },
  },
  {
    label: "说明",
    prop: "desc",
    el: "el-input",
    elProps: {
      type: "textarea",
      maxlength: 10,
      showWordLimit: true,
      autosize: { minRows: 2, maxRows: 4 },
    },
    colProps: { span: 24 },
  },
];

const flexLayout = ref(true);

const handleChange = (values: unknown, model: Record<string, any>, column: FormItemColumnProps) => {
  console.log(values, model, column, "change");
};
const handleSubmit = (model: Record<string, any>) => {
  console.log(model, "Submit");
};
const handleSubmitError = (err: Parameters<FormValidateCallback>[1]) => {
  console.log(err, "err");
};
const handleReset = () => {
  console.log("handleReset");
};
</script>

<template>
  <el-button type="primary" plain @click="flexLayout = !flexLayout" style="margin-bottom: 20px">
    {{ `${flexLayout ? "取消" : "使用"} Flex 布局` }}
  </el-button>

  <ProForm
    v-model="state"
    :columns
    :el-form-props
    :flex-layout
    :row-props="{ gutter: 40 }"
    :col-props="{ span: 12 }"
    @change="handleChange"
    @submit="handleSubmit"
    @submit-error="handleSubmitError"
    @reset="handleReset"
  />
</template>
