<script lang="tsx" setup>
import type { ElFormProps, FormColumn } from "@/components/pro/form";
import { ref, computed, h } from "vue";
import { ProFormDrawer } from "@/components/pro/form-drawer";

const confirmLoading = ref(false);
const drawerVisible = ref(false);
const state = ref<Record<string, any>>({
  name: "我的 Label 由 h 函数渲染",
  tag: "我的 Label 由 tsx 渲染",
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
    renderLabel: value => {
      return h("div", {}, value as string);
    },
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
  {
    label: "标签",
    prop: "tag",
    renderLabel: label => {
      return <div style="color: green;">{label}</div>;
    },
  },
  { label: "是否显示", prop: "switch", el: "el-switch" },
  { label: "时间", prop: "time", el: "el-date-picker" },
  { label: "数量", prop: "number", el: "el-input-number", elProps: { precision: 2, step: 2 } },
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
      :drawer="{ title: '表单标题', confirmLoading }"
      :form="{ elFormProps, columns }"
      @confirm="handleSubmit"
    >
      <template #status-label="{ label }">
        <span style="color: red">{{ label }}</span>
      </template>
    </ProFormDrawer>
  </div>
</template>
