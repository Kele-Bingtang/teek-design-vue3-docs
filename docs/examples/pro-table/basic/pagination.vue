<script setup lang="ts">
import type { PageInfo } from "@/components/pro/pagination";
import type { TableColumn } from "@/components/pro/table";
import { ref, onMounted } from "vue";
import { ProTable } from "@/components/pro/table";

const originData = ref([
  { username: "张三", gender: 1, age: 18, birthday: "2023-01-01" },
  { username: "李四", gender: 2, age: 20, birthday: "2023-02-01" },
  { username: "王五", gender: 1, age: 22, birthday: "2023-03-01" },
  { username: "赵六", gender: 1, age: 23, birthday: "2023-04-01" },
  { username: "孙七", gender: 2, age: 23, birthday: "2023-05-01" },
  { username: "周八", gender: 2, age: 24, birthday: "2023-06-01" },
]);

const columns: TableColumn[] = [
  { type: "index", label: "#", width: 60 },
  { prop: "username", label: "用户姓名", el: "copy" },
  {
    prop: "gender",
    label: "性别",
    el: "el-tag",
    options: [
      { label: "男", value: 1, tagType: "primary" },
      { label: "女", value: 2, tagType: "warning" },
    ],
  },
  { prop: "age", label: "年龄", el: "el-progress" },
  { prop: "birthday", label: "生日" },
];

// ======= 后端分页 =======
const pageData = ref<Record<string, any>[]>([]);

const pageInfo = ref<PageInfo>({ pageNum: 1, pageSize: 5 });

// 获取数据
const requestData = async (pageNum = 1, pageSize = 5) => {
  const res = await mockBackend(pageNum, pageSize);

  pageInfo.value = {
    pageNum: res.data.pageNum,
    pageSize: res.data.pageSize,
    total: res.data.total,
  };

  pageData.value = res.data.list;
};

// 分页改变事件
const handlePaginationChange = ({ pageNum, pageSize }: PageInfo) => {
  requestData(pageNum, pageSize);
};

// 模拟后端获取分页数据
const mockBackend = (pageNum: number, pageSize: number) => {
  return Promise.resolve({
    code: 200,
    message: "success",
    data: {
      pageNum: pageNum,
      pageSize: pageSize,
      total: originData.value.length,
      list: originData.value.slice((pageNum - 1) * pageSize, pageNum * pageSize),
    },
  });
};

onMounted(() => {
  requestData();
});
</script>

<template>
  <ProTable title="前端分页" :columns="columns" :data="originData" page-scope :page-info="{ pageSize: 5 }" />
  <ProTable
    title="后端分页"
    :columns="columns"
    :data="pageData"
    page-scope="server"
    :page-info="pageInfo"
    @paginationChange="handlePaginationChange"
  />
</template>
