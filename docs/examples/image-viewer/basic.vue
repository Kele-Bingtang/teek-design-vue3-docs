<script setup lang="ts" name="ImageViewerDemo">
import { ref } from "vue";
import { createImageViewer, ImageViewer } from "@/components/pro/image-viewer";

const urlList = [
  "https://images.unsplash.com/photo-1659959103870-c4beea371a9b?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1749044300940-3a6c9e51a584?q=80&w=648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1748723594323-f5210fe2b9ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
];

const open = () => {
  createImageViewer({
    urlList: urlList,
  });
};

const visible = ref(false);
</script>

<template>
  <el-button @click="open()">函数式打开图片预览</el-button>

  <el-button @click="visible = true">组件式打开图片预览</el-button>
  <ImageViewer v-model="visible" :urlList="urlList" teleported />
</template>
