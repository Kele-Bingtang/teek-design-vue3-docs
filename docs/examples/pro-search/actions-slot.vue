<script setup lang="ts" name="SimpleProSearch">
import type { ProSearchColumn } from "@/components/pro/search";
import { ref, onMounted } from "vue";
import { ArrowDown, ArrowUp, Refresh, Search } from "@element-plus/icons-vue";
import { ProSearch } from "@/components/pro/search";

const state = ref({});

const links = ref<{ value: string; link: string }[]>([]);

const querySearch = (queryString: string, cb: any) => {
  const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
  cb(results);
};

const createFilter = (queryString: string) => {
  return (restaurant: { value: string; link: string }) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
  };
};

const columns: ProSearchColumn[] = [
  {
    label: "姓名",
    prop: "name",
    el: "el-input",
  },
  {
    label: "性别",
    prop: "sex",
    el: "el-select",
    options: [
      { label: "男", value: "1" },
      { label: "女", value: "2" },
    ],
  },
  {
    label: "年龄",
    prop: "age",
    el: "el-input-number",
    defaultValue: 18,
  },
  {
    label: "状态",
    prop: "status",
    el: "el-select",
    options: [
      { label: "在职", value: "1" },
      { label: "离职", value: "2" },
    ],
  },
  {
    label: "下拉自动补全",
    prop: "autocomplete",
    el: "el-autocomplete",
    elProps: { fetchSuggestions: querySearch },
  },
];

onMounted(() => {
  links.value = loadAll();
});

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
</script>

<template>
  <ProSearch :columns v-model="state">
    <template #action="{ search, reset, collapse, showCollapseButton, toggleCollapse }">
      <div style="display: flex">
        <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
        <el-button :icon="Refresh" @click="reset">重置</el-button>

        <el-button v-if="showCollapseButton" :icon="collapse ? ArrowUp : ArrowDown" @click="toggleCollapse()">
          {{ collapse ? "收起" : "展开" }}
        </el-button>
      </div>
    </template>
  </ProSearch>
</template>
