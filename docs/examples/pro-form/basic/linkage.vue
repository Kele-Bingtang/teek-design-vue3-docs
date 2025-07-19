<script lang="ts" setup>
import type { FormColumn } from "@/components/pro/form";
import { ref, computed } from "vue";
import { ProForm } from "@/components/pro/form";

const state = ref({
  status: "0",
});

const columns: FormColumn[] = [
  {
    label: "状态",
    prop: "status",
    el: "el-select",
    options: [
      { label: "未解决", value: "0", color: "red" },
      { label: "已解决", value: "1", color: "blue" },
    ],
  },
  {
    label: "要求1",
    prop: "demand1",
    el: "el-checkbox",
    options: computed(() =>
      state.value.status === "0"
        ? [
            { label: "四六级", value: "0" },
            { label: "计算机二级证书", value: "1" },
            { label: "普通话证书", value: "2" },
          ]
        : [{ label: "四六级", value: "0" }]
    ),
  },
  {
    label: "名称1",
    prop: "name1",
    tooltip: "名称最多显示6个字符",
    fieldProps: computed(() => ({ disabled: state.value.status === "1" })),
  },
  {
    label: "标签1",
    prop: "tag1",
    hidden: computed(() => state.value.status === "1"),
  },
  {
    label: "名称2",
    prop: "name2",
    tooltip: "名称最多显示6个字符",
    elProps: computed(() => ({ disabled: state.value.status === "1" })),
  },
  {
    label: "标签2",
    prop: "tag2",
    formItemProps: computed(() => ({ required: state.value.status === "1" })),
  },
];
</script>

<template>
  <ProForm v-model="state" :columns="columns" />
</template>
