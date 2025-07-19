<script setup lang="tsx">
import type { TableColumn } from "@/components/pro/table";
import { useProTable } from "@/components/pro/table";
import { ElButton } from "element-plus";
import { onMounted } from "vue";

const DataService = {
  getList: async () => {
    const data = [
      { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
      { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
      { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
    ];

    return Promise.resolve({
      code: 200,
      message: "success",
      data,
    });
  },
};

const {
  createMethods: { createTable },
} = useProTable();

onMounted(async () => {
  // 函数式动态渲染组件到 proTableInstance 元素
  const {
    tableMethods: { setColumn },
  } = await createTable(
    "proTableInstance",
    { pageScope: "client", columns: columns, requestApi: DataService.getList },
    tableSlots
  );

  setColumn([{ prop: "username", field: "label", value: `用户姓名 Teek` }]);
});

const tableSlots = {
  "head-left": (scope: any) => (
    <>
      <ElButton type="primary">新增用户</ElButton>
      <ElButton type="primary" plain>
        批量添加用户
      </ElButton>
      <ElButton type="primary" plain>
        导出用户数据
      </ElButton>
      <ElButton type="primary" plain>
        To 子集详情页面
      </ElButton>
      <ElButton type="danger" plain disabled={!scope.isSelected}>
        批量删除用户
      </ElButton>
    </>
  ),
};

const columns: TableColumn[] = [
  { prop: "username", label: "用户姓名", el: "copy" },
  {
    prop: "gender",
    label: "性别",
    el: "el-tag",
    elProps: (value: number) => {
      if (value === 1) return { type: "success" };
      return { type: "danger" };
    },
    options: async () => {
      return [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ];
    },
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    elSlots: {
      default: ({ value }) => value + "%",
    },
  },
  { prop: "birthday", label: "生日" },
];
</script>

<template>
  <div ref="proTableInstance"></div>
</template>
