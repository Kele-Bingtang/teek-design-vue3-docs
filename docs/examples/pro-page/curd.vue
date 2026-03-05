<script setup lang="ts">
import type { FeedbackFormColumn, FeedbackFormProps, PageColumn } from "@/components/pro/page";
import { ProPage } from "@/components/pro/page";
import type { FormRules } from "element-plus";
import { ref } from "vue";

// 模拟后端 API
const DataService = {
  getList: async (searchParams: Record<string, any>) => {
    console.log("搜索条件: ", searchParams);

    const data = [
      { username: "张三", gender: 1, progress: 20, birthday: "2023-01-01" },
      { username: "李四", gender: 2, progress: 40, birthday: "2023-02-01" },
      { username: "王五", gender: 1, progress: 60, birthday: "2023-03-01" },
      { username: "赵六", gender: 2, progress: 80, birthday: "2023-04-01" },
    ];

    return Promise.resolve({
      code: 200,
      message: "success",
      data,
    });
  },
};

// 表格配置项
const tableColumns: PageColumn[] = [
  { prop: "username", label: "用户姓名", el: "copy", search: {} },
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
    search: {
      el: "el-select",
    },
  },
  {
    prop: "progress",
    label: "进度",
    el: "el-progress",
    tooltip: "学习进度",
    elSlots: {
      default: ({ value }) => value + "%",
    },
    search: {
      el: "el-input",
    },
  },
  {
    prop: "birthday",
    label: "生日",
    search: {
      el: "el-date-picker",
    },
  },
  { prop: "operation", label: "操作", width: 160, fixed: "right" }, // 开启操作列
];

// 表单配置项
const formColumns: FeedbackFormColumn[] = [
  { prop: "username", label: "用户姓名" },
  {
    prop: "gender",
    label: "性别",
    el: "el-select",
    options: [
      { label: "男", value: 1 },
      { label: "女", value: 2 },
    ],
  },
  { prop: "progress", label: "进度", el: "el-input-number" },
  { prop: "birthday", label: "生日" },
  {
    prop: "status",
    label: "当前状态",
    props: { disabled: true },
    destroyIn: ["add"], // 在新增时销毁该表单
    disabledIn: ["edit"], // 在修改时禁用该表单
  },
];

const feedbackType = ref<"dialog" | "drawer">("dialog");

// 表单规则
const rules: FormRules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
};

/**
 * 点击删除、修改、新增时保存后触发的回调，根据业务调用后端接口进行 CURD
 */
const curdUser = async (data: Record<string, any>) => {
  console.log("curdUser", data);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ code: 200, message: "操作成功！" });
    }, 1000);
  });
};

// 反馈表单配置
const feedbackFormProps: FeedbackFormProps = {
  // ProForm 配置
  form: {
    // ElForm 配置
    elFormProps: {
      labelWidth: 80,
      rules: rules,
    },
    columns: formColumns, // 表单配置项
  },
  // 反馈组件配置（Dialog、Drawer）
  type: feedbackType, // 不写 type 默认为 dialog
  feedbackProps: {
    title: (_, status) => (status === "add" ? "新增" : "编辑"),
    width: "45%",
    height: 300,
    top: "5vh",
    closeOnClickModal: false,
  },
  // CURD 配置
  id: ["id", "roleId"],
  addApi: data => curdUser({ ...data, createDate: new Date() }),
  editApi: curdUser,
  removeApi: curdUser,
  removeBatchApi: curdUser,
  disableAdd: false, // 可以设置权限是否禁用
  disableEdit: false,
  disableRemove: false,
  disableRemoveBatch: false,
  clickEdit: async model => {
    // 编辑时模拟获取该用户的在线状态
    const res = { code: 200, data: "在线", success: true };
    model.status = res.data || "离线";
  },
};
</script>

<template>
  <ProPage :columns="tableColumns" :request-api="DataService.getList" :feedback-form-props>
    <template #head-left-after>
      <el-button type="warning" @click="feedbackType = feedbackType === 'dialog' ? 'drawer' : 'dialog'">
        切换为 {{ feedbackType === "dialog" ? "Drawer" : "Dialog" }}
      </el-button>
    </template>
  </ProPage>
</template>
