<script lang="ts" setup>
import type { ElFormProps, FormColumn } from "@/components/pro/form";
import { ref, computed } from "vue";
import { ProFormDrawer } from "@/components/pro/form-drawer";

const confirmLoading = ref(false);
const drawerVisible = ref(false);
const state = ref({ name: "名称" });

const elFormProps: Partial<ElFormProps> = {
  rules: {
    name: [{ required: true, message: "请输入名称" }],
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
  { label: "是否显示", prop: "switch", el: "el-switch" },
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
  },
];

const handleSubmit = () => {
  confirmLoading.value = true;

  setTimeout(() => {
    confirmLoading.value = false;
    drawerVisible.value = false;
  }, 2000);
};
</script>

<template>
  <div>
    <el-button @click="drawerVisible = true">打开抽屉表单</el-button>

    <ProFormDrawer
      v-model:visible="drawerVisible"
      v-model="state"
      :drawer="{ title: '抽屉标题', confirmLoading }"
      :form="{ elFormProps, columns }"
      @confirm="handleSubmit"
    />
  </div>
</template>
