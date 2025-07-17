<script setup lang="ts">
import type { TableColumn } from "@/components/pro/table";
import { ProTable } from "@/components/pro/table";

const data = [
  {
    id: "805839158256013232",
    username: "江明",
    gender: 2,
    status: 0,
    user: { detail: { age: 11 } },
    idCard: "805839158256013232",
    email: "i.nfhct@efxnicw.mx",
    address: "黑龙江省 鸡西市",
    createTime: "1982-11-04 17:35:47",
  },
  {
    id: "824440124728046271",
    username: "黄芳",
    gender: 1,
    user: { detail: { age: 30 } },
    status: 1,
    idCard: "824440124728046271",
    email: "r.baxyzmgz@wfvnkqcni.tc",
    createTime: "1983-07-19 21:44:22",
  },
  {
    id: "026454951166840353",
    username: "黄军",
    gender: 2,
    status: 1,
    user: { detail: { age: 10 } },
    idCard: "026454951166840353",
    email: "t.xxoblmbhvd@ttbmbazuj.ee",
    createTime: "1995-03-29 01:41:47",
  },
];

const columns: TableColumn[] = [
  {
    prop: "base",
    label: "基本信息",
    children: [
      { prop: "username", label: "用户姓名", width: 110 },
      { prop: "user.detail.age", label: "年龄", width: 100 },
      {
        prop: "gender",
        label: "性别",
        width: 100,
        options: [
          { label: "男", value: 1 },
          { label: "女", value: 2 },
        ],
      },
      {
        prop: "details",
        label: "详细资料",
        children: [
          { prop: "idCard", label: "身份证号" },
          { prop: "email", label: "邮箱" },
        ],
      },
    ],
  },
  {
    prop: "status",
    label: "用户状态",
    options: [
      { label: "启用", value: 1 },
      { label: "禁用", value: 0 },
    ],
  },
  { prop: "createTime", label: "创建时间", width: 200 },
];
</script>

<template>
  <ProTable :columns="columns" :data="data" />
</template>
