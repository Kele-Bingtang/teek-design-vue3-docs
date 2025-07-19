<script lang="tsx" setup>
import type { ElFormProps, FormColumn } from "@/components/pro/form";
import { ref, computed, h } from "vue";
import { ProFormDrawer } from "@/components/pro/form-drawer";
import { ElInput } from "element-plus";

const confirmLoading = ref(false);
const drawerVisible = ref(false);
const state = ref<Record<string, any>>({ name: "我是一个 h 函数渲染的 input", tag: "我是一个 tsx 渲染的标签" });

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
    render: () => {
      return h(ElInput);
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
    render: value => {
      return <div style="color: green;">{value}</div>;
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
      <template #status>
        <el-input v-model="state.status" type="textarea" placeholder="自定义输入框插槽" />
      </template>
    </ProFormDrawer>
  </div>
</template>
