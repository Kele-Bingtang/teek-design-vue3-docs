<script setup lang="tsx">
import type { TableColumn } from "@/components/pro/table";
import { h, ref, withModifiers } from "vue";
import { ElButton, ElMessage, ElMessageBox, ElProgress, ElSwitch, ElTag } from "element-plus";
import { ProTable } from "@/components/pro/table";

const data = [
  { username: "张三", status: 1, progress: 20, birthday: "2023-01-01" },
  { username: "李四", status: 0, progress: 40, birthday: "2023-02-01" },
  { username: "王五", status: 1, progress: 60, birthday: "2023-03-01" },
];

const switchUserStatus = ref(false);

const columns: TableColumn[] = [
  { type: "index", label: "#", width: 60 },
  {
    prop: "username",
    label: "用户姓名",
    render: ({ value }) => {
      return (
        <ElButton
          type="primary"
          link
          onClick={withModifiers(() => ElMessage.success("我是通过 tsx 语法渲染的内容"), ["stop"])}
        >
          {value}
        </ElButton>
      );
    },
  },
  {
    prop: "status",
    label: "用户状态",
    options: [
      { userLabel: "启用", userStatus: 1 },
      { userLabel: "禁用", userStatus: 0 },
    ],
    optionField: { label: "userLabel", value: "userStatus" },
    render: ({ value, row }) => {
      return (
        <>
          {switchUserStatus.value ? (
            <ElSwitch
              model-value={value}
              active-text={value ? "启用" : "禁用"}
              active-value={1}
              inactive-value={0}
              {...{
                onClick: async () => {
                  await ElMessageBox.confirm("确定要修改吗？", "提示").then(() => {
                    row.status === 0 ? (row.status = 1) : (row.status = 0);
                  });

                  ElMessage.success(`切换【${row.username}】用户状态成功`);
                },
              }}
            />
          ) : (
            <ElTag type={value ? "success" : "danger"}>{value ? "启用" : "禁用"}</ElTag>
          )}
        </>
      );
    },
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    render: ({ value }) => <ElProgress percentage={value as number} />,
  },
  { prop: "birthday", label: "生日" },
];
</script>

<template>
  <ProTable :columns="columns" :data="data">
    <template #head-left>
      <ElButton type="primary" @click="switchUserStatus = !switchUserStatus">切换用户状态</ElButton>
    </template>
  </ProTable>
</template>
