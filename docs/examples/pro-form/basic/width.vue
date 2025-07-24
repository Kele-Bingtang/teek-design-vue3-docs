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
    width: 200,
    tooltip: computed(() => (state.value.name as string) || "提示：复制名称"),
  },
  {
    label: "状态",
    prop: "status",
    width: 400,
    el: "el-select",
    options: [
      { label: "未解决", value: "0" },
      { label: "已解决", value: "1" },
      { label: "解决中", value: "2" },
      { label: "失败", value: "3" },
    ],
  },
  { label: "标签", prop: "tag", width: 200 },
  { label: "执行进度", prop: "progress", width: 300 },
  { label: "评分", prop: "rate", width: 400, el: "el-rate" },
  { label: "是否显示", prop: "switch", width: 500, el: "el-switch" },
  { label: "图片", prop: "img", width: 600 },
  { label: "时间", prop: "time", width: 600, el: "el-date-picker" },
  { label: "数量", prop: "number", width: 700, el: "el-input-number", elProps: { precision: 2, step: 2 } },
];

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
  <ProForm
    v-model="state"
    :columns
    :el-form-props
    @change="handleChange"
    @submit="handleSubmit"
    @submit-error="handleSubmitError"
    @reset="handleReset"
  />
</template>
