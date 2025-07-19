<script lang="ts" setup>
import type { FormColumn } from "@/components/pro/form";
import { ref, h } from "vue";
import { ElInput } from "element-plus";
import { ProForm } from "@/components/pro/form";

const state = ref({
  autocomplete: "vue",
  input: "100",
  input1: "单行文本",
  textarea: "多行文本",
});

interface RestaurantItem {
  value: string;
  link: string;
}

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

const columns: FormColumn[] = [
  {
    label: "autocomplete",
    prop: "autocomplete",
    el: "el-autocomplete",
    tooltip: "自动补全输入框",
    elProps: {
      modelModifiers: { trim: true },
      fetchSuggestions: (queryString: string, cb: any) => {
        const results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value;
        cb(results);
      },
    },
  },
  {
    label: "input",
    prop: "input",
    elProps: {
      modelModifiers: { trim: true, number: true, lazy: true },
    },
  },
  {
    label: "input",
    prop: "input1",
    // elProps 会同时作用于 render 返回值的 props，优先级低于返回值的 props，建议直接写在 render 中
    elProps: {
      modelModifiers: { trim: true, number: false },
    },
    render: (value, update) => {
      return h(ElInput, { modelValue: value as string, onChange: update, modelModifiers: { trim: true } });
    },
  },

  {
    label: "textarea",
    prop: "textarea",
    el: "el-input",
    elProps: {
      type: "textarea",
      modelModifiers: { trim: true },
    },
  },
];
</script>

<template>
  <ProForm v-model="state" label-width="140px" :columns="columns" />
</template>
