<script setup lang="tsx" name="UseDialogDemo">
import { ref } from "vue";
import { useDialog, ProDialog } from "@/components/pro/dialog";

const visible = ref(false);

const { open } = useDialog();

const openDialog = () => {
  open({
    title: "ProDialog 弹框",
    height: 400,
    render: () => (
      <>
        <el-button onClick={() => againOpenDialog()}>使用函数打开 Dialog</el-button>
      </>
    ),
  });
};

const againOpenDialog = () => {
  open({
    title: "ProDialog 弹框",
    top: "20vh",
    render: () => <div>我被函数再次打开</div>,
  });
};
</script>

<template>
  <el-button @click="openDialog()">函数式打开 Dialog 组件</el-button>

  <el-button @Click="visible = true">组件式打开 Dialog 组件</el-button>

  <ProDialog v-model="visible" height="300">我是通过 modelValue 打开的 Dialog 组件</ProDialog>
</template>
