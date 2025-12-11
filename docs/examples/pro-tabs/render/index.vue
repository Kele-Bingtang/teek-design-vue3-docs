<script setup lang="tsx">
import type { TabColumn } from "@/components/pro/tabs";
import { h } from "vue";
import { ProTabs } from "@/components/pro/tabs";

const columns: TabColumn[] = [
  {
    prop: "group",
    label: "群组",
    render: () => <div>我是一个用 Render（TSX）渲染页面</div>,
  },
  {
    prop: "role",
    label: "角色",
    render: () => h("div", null, "我是一个使用 h 函数渲染页面"),
  },
  {
    prop: "slot",
    label: "插槽",
  },
  {
    prop: "renderLabel",
    label: "插槽",
    render: () => <div>我是一个用 Render（TSX）渲染页面</div>,
    renderLabel: () => <div>renderLabel 渲染的标签</div>,
  },
];
</script>

<template>
  <ProTabs :columns>
    <template #slot>我是一个使用插槽渲染的页面</template>
    <template #slot-label>插槽渲染的标签</template>
  </ProTabs>
</template>
