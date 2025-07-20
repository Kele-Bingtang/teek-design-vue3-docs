<script setup lang="tsx" name="UseDrawerDemo">
import { ref } from "vue";
import { useDrawer, ProDrawer } from "@/components/pro/drawer";

const visible = ref(false);

const { open } = useDrawer();

const openDrawer = () => {
  open({
    title: "ProDrawer 弹框",
    render: () => <el-button onClick={() => againOpenDrawer()}>使用函数打开 Drawer</el-button>,
  });
};

const againOpenDrawer = () => {
  open({
    title: "ProDrawer 弹框",
    size: "60%",
    render: () => <div>我被函数再次打开</div>,
  });
};
</script>

<template>
  <el-button @click="openDrawer()">函数式打开 Drawer</el-button>

  <el-button @Click="visible = true">组件式打开 Drawer 组件</el-button>

  <ProDrawer v-model="visible">我是通过 modelValue 打开的 Drawer 组件</ProDrawer>
</template>
