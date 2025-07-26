<script lang="ts" setup>
import type { Ref } from "vue";
import type { ElFormProps, FormColumn } from "@/components/pro/form";
import type { ElOption } from "@/components/pro/form-item";
import { ref, computed } from "vue";
import { ProForm } from "@/components/pro/form";

const state = ref({
  status: "0",
});

const elFormProps: Partial<ElFormProps> = {
  rules: {
    name: [{ required: true, message: "请输入名称" }],
  },
};

const options: Ref<ElOption[]> = ref([]);

const getOptions = async () => {
  // 等待 2s
  return await new Promise(resolve => {
    setTimeout(() => {
      options.value = [
        { label: "未解决", value: "0" },
        { label: "已解决", value: "1" },
      ];
      resolve("");
    }, 2000);
  });
};
getOptions();

const columns: FormColumn[] = [
  {
    label: "状态",
    prop: "status",
    el: "el-select",
    options: computed(() => options.value),
    formItemProps: () => {
      return { labelWidth: "120px" };
    },
  },
  {
    label: "状态",
    prop: "status",
    el: "el-select",
    options: async () => {
      // 等待 2s
      await new Promise(resolve => {
        setTimeout(() => {
          resolve("");
        }, 2000);
      });
      return [
        { dictLabel: "未解决", dictValue: "0" },
        { dictLabel: "已解决", dictValue: "1" },
        { dictLabel: "解决中", dictValue: "2" },
        { dictLabel: "失败", dictValue: "3" },
      ];
    },
    optionField: { label: "dictLabel", value: "dictValue" },
    formItemProps: () => {
      return { labelWidth: "100px" };
    },
  },
  {
    label: "城市",
    prop: "city",
    el: "el-cascader",
    options: async () => {
      // 等待 2s
      await new Promise(resolve => {
        setTimeout(() => {
          resolve("");
        }, 2000);
      });
      return [
        {
          value: "0",
          label: "陕西",
          children: [
            {
              value: "0-0",
              label: "西安",
              children: [
                { value: "0-0-0", label: "新城区" },
                { value: "0-0-1", label: "高新区" },
                { value: "0-0-2", label: "灞桥区" },
              ],
            },
          ],
        },
        {
          value: "1",
          label: "山西",
          children: [
            {
              value: "1-0",
              label: "太原",
              children: [
                { value: "1-0-0", label: "小店区" },
                { value: "1-0-1", label: "古交市" },
                { value: "1-0-2", label: "万柏林区" },
              ],
            },
          ],
        },
      ];
    },
    formItemProps: () => {
      return { labelWidth: "100px" };
    },
  },
  {
    label: "地区",
    prop: "place",
    tooltip: "请精确到门牌号",
    elProps: {
      placeholder: "请精确到门牌号",
    },
    formItemProps: () => {
      return { labelWidth: "100px" };
    },
  },
  {
    label: "要求",
    prop: "demand",
    el: "el-checkbox",
    formItemProps: () => {
      return { labelWidth: "100px" };
    },
    options: () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            { label: "四六级", value: "0" },
            { label: "计算机二级证书", value: "1" },
            { label: "普通话证书", value: "2" },
          ]);
        }, 2000);
      });
    },
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
    label: "梦想",
    prop: "gift",
    el: "el-radio",
    options: new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { label: "诗", value: "0" },
          { label: "远方", value: "1" },
          { label: "美食", value: "2" },
        ]);
      }, 2000);
    }),
  },
];
</script>

<template>
  <ProForm v-model="state" :columns="columns" :el-form-props />
</template>
