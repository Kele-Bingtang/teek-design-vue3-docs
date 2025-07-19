<script lang="ts" setup>
import type { FormColumn } from "@/components/pro/form";
import { ref } from "vue";
import { ProForm } from "@/components/pro/form";

interface RestaurantItem {
  value: string;
  link: string;
}

interface Option {
  key: number;
  label: string;
  disabled: boolean;
}

const state = ref({
  autocomplete: "vue",
  cascader: ["0", "0-0", "0-0-0"],
  cascaderMultiple: [
    ["0", "0-0", "0-0-0"],
    ["0", "0-0", "0-0-1"],
    ["0", "0-0", "0-0-2"],
  ],
  checkbox: ["0"],
  colorPicker: "rgba(255, 69, 0, 0.68)",
  year: "2024",
  years: ["2024", "2005"],
  month: "2024-02",
  date: "2024-03-05",
  dates: ["2024-03-05", "2024-03-06"],
  datetime: "2024-03-19 00:00:00",
  week: "2024-03-19",
  datetimerange: ["2024-03-07 00:00:00", "2024-03-09 00:00:00"],
  daterange: ["2024-02-29", "2024-03-29"],
  monthrange: ["2024-03", "2024-05"],
  select: "0",
  selectMultiple: ["0", "1"],
  input: "单行文本",
  textarea: "多行文本",
  inputNumber: 4,
  rate: 3,
  switch: true,
  radio: "0",
  slider: 50,
  timePicker: "2024-03-18 09:55:31",
  timeSelect: "09:55:31",
  transfer: [1, 2, 3, 4, 5, 6],
  plusDatePicker: ["2024-03-18 09:55:31", "2024-03-20 09:55:31"],
  inputTag: ["tag", "tag1"],
  selectV2: "Option 1",
  selectV2Multiple: ["Option 1", "Option 2"],
  mention: "Fuphoenixes",
  segmented: "Mon",
  checkBoxSelect: "option1",
  checkBoxSelectMultiple: ["option1", "option2"],
  text: "我是一段文本",
});

const generateData = () => {
  const data: Option[] = [];
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    });
  }
  return data;
};

const restaurants = ref<RestaurantItem[]>([]);

const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
  };
};
const loadAll = () => {
  return [
    { value: "vue", link: "https://github.com/vuejs/vue" },
    { value: "element", link: "https://github.com/ElemeFE/element" },
    { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
    { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
    { value: "vuex", link: "https://github.com/vuejs/vuex" },
    { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
    { value: "babel", link: "https://github.com/babel/babel" },
  ];
};

restaurants.value = loadAll();

const cascaderOptions = [
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

const columns: FormColumn[] = [
  {
    label: "autocomplete",
    prop: "autocomplete",
    el: "el-autocomplete",
    tooltip: "自动补全输入框",
    elProps: {
      fetchSuggestions: (queryString: string, cb: any) => {
        const results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value;
        cb(results);
      },
    },
  },
  {
    label: "cascader",
    prop: "cascader",
    el: "el-cascader",
    options: cascaderOptions,
  },
  {
    label: "cascader-multiple",
    prop: "cascaderMultiple",
    el: "el-cascader",
    options: cascaderOptions,
    elProps: {
      multiple: true,
    },
  },
  {
    label: "checkbox",
    prop: "checkbox",
    el: "el-checkbox",
    options: [
      { label: "四六级", value: "0" },
      { label: "计算机二级证书", value: "1" },
      { label: "普通话证书", value: "2" },
    ],
  },
  {
    label: "color-picker",
    prop: "colorPicker",
    el: "el-color-picker",
    width: 35,
  },
  {
    label: "year",
    prop: "year",
    el: "el-date-picker",
    elProps: {
      type: "year",
    },
  },
  {
    label: "years",
    prop: "years",
    el: "el-date-picker",
    elProps: {
      type: "years",
    },
  },
  {
    label: "month",
    prop: "month",
    el: "el-date-picker",
    elProps: {
      type: "month",
    },
  },
  {
    label: "date",
    prop: "date",
    el: "el-date-picker",
    elProps: {
      type: "date",
    },
  },
  {
    label: "dates",
    prop: "dates",
    el: "el-date-picker",
    elProps: {
      type: "dates",
    },
  },
  {
    label: "datetime",
    prop: "datetime",
    el: "el-date-picker",
    elProps: {
      type: "datetime",
    },
  },
  {
    label: "week",
    prop: "week",
    el: "el-date-picker",
    elProps: {
      type: "week",
    },
  },
  {
    label: "datetimerange",
    prop: "datetimerange",
    el: "el-date-picker",
    elProps: {
      type: "datetimerange",
    },
  },
  {
    label: "daterange",
    prop: "daterange",
    el: "el-date-picker",
    elProps: {
      type: "daterange",
    },
  },
  {
    label: "monthrange",
    prop: "monthrange",
    el: "el-date-picker",
    elProps: {
      type: "monthrange",
    },
  },
  {
    label: "select",
    prop: "select",
    el: "el-select",
    options: [
      { label: "未解决", value: "0", color: "red" },
      { label: "已解决", value: "1", color: "blue" },
      { label: "解决中", value: "2", color: "yellow" },
      { label: "失败", value: "3", color: "red" },
    ],
  },
  {
    label: "select-multiple",
    prop: "selectMultiple",
    el: "el-select",
    options: [
      { label: "未解决", value: "0", color: "red" },
      { label: "已解决", value: "1", color: "blue" },
      { label: "解决中", value: "2", color: "yellow" },
      { label: "失败", value: "3", color: "red" },
    ],
    elProps: {
      multiple: true,
    },
  },
  { label: "input", prop: "input" },
  {
    label: "input-number",
    prop: "inputNumber",
    el: "el-input-number",
    elProps: { precision: 2, step: 2 },
  },
  {
    label: "textarea",
    prop: "textarea",
    el: "el-input",
    elProps: {
      type: "textarea",
      maxlength: 10,
      showWordLimit: true,
      autosize: { minRows: 2, maxRows: 4 },
    },
  },
  { label: "rate", prop: "rate", el: "el-rate" },
  { label: "switch", prop: "switch", el: "el-switch" },
  {
    label: "radio",
    prop: "radio",
    el: "el-radio",
    options: [
      { label: "诗", value: "0" },
      { label: "远方", value: "1" },
      { label: "美食", value: "2" },
    ],
  },
  { label: "slider", prop: "slider", el: "el-slider" },
  { label: "time-picker", prop: "timePicker", el: "el-time-picker" },
  { label: "time-select", prop: "timeSelect", el: "el-time-select" },
  {
    label: "transfer",
    prop: "transfer",
    el: "el-transfer",
    elProps: {
      data: generateData(),
    },
  },
  { label: "divider", prop: "divider", el: "el-divider" },
  {
    label: "tree-select",
    prop: "treeSelect",
    el: "el-tree-select",
    elProps: {
      data: cascaderOptions,
    },
  },
  {
    label: "input-tag",
    prop: "inputTag",
    el: "el-input-tag",
  },
  {
    label: "select-v2 ",
    prop: "selectV2",
    el: "el-select-v2",
    options: () => {
      const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
      return Array.from({ length: 1000 }).map((_, idx) => ({
        value: `Option ${idx + 1}`,
        label: `${initials[idx % 10]}${idx}`,
      }));
    },
  },
  {
    label: "select-v2-multiple",
    prop: "selectV2Multiple",
    el: "el-select-v2",
    options: () => {
      const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
      return Array.from({ length: 1000 }).map((_, idx) => ({
        value: `Option ${idx + 1}`,
        label: `${initials[idx % 10]}${idx}`,
      }));
    },
    elProps: {
      multiple: true,
    },
  },
  {
    label: "mention",
    prop: "mention",
    el: "el-mention",
    options: [
      { label: "Fuphoenixes", value: "Fuphoenixes" },
      { label: "kooriookami", value: "kooriookami" },
      { label: "Jeremy", value: "Jeremy" },
      { label: "btea", value: "btea" },
    ],
  },
  {
    label: "segmented",
    prop: "segmented",
    el: "el-segmented",
    options: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  {
    label: "check-box-select",
    prop: "checkBoxSelect",
    el: "check-box-select",
    options: [
      { label: "选择 1", value: "option1" },
      { label: "选择 2", value: "option2" },
      { label: "选择 3", value: "option3" },
    ],
  },
  {
    label: "check-box-select-multiple",
    prop: "checkBoxSelectMultiple",
    el: "check-box-select",
    elProps: {
      multiple: true,
    },
    options: [
      { label: "选择 1", value: "option1" },
      { label: "选择 2", value: "option2" },
      { label: "选择 3", value: "option3" },
    ],
  },
  {
    label: "text",
    prop: "text",
    el: "el-text",
  },
];
</script>

<template>
  <ProForm v-model="state" label-width="140px" :columns="columns" />

  {{ state }}
</template>
