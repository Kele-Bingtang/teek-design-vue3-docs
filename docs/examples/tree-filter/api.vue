<script setup lang="ts" name="TreeFilterDemo">
import type { TreeKey } from "element-plus";
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import { TreeFilter } from "@/components/pro/tree-filter";
import { useNamespace } from "@/composables";

const ns = useNamespace("tree-filter-demo");

interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}

const treeFilterValue = reactive<{ departmentId: string }>({ departmentId: "1" });

// 模拟后端 API
const DataService = {
  getList: async (requestParams?: Record<string, any>) => {
    console.log("请求参数: ", requestParams);

    const data: Tree[] = [
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 4,
            label: "Level two 1-1",
            children: [
              { id: 9, label: "Level three 1-1-1" },
              { id: 10, label: "Level three 1-1-2" },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "Level one 2",
        children: [
          { id: 5, label: "Level two 2-1" },
          { id: 6, label: "Level two 2-2" },
        ],
      },
      {
        id: 3,
        label: "Level one 3",
        children: [
          { id: 7, label: "Level two 3-1" },
          { id: 8, label: "Level two 3-2" },
        ],
      },
    ];

    return Promise.resolve({
      code: 200,
      message: "success",
      data,
    });
  },
};
const changeTreeFilter = (val: string | TreeKey[]) => {
  ElMessage.success(`你选择了 id 为 ${val} 的数据🤔`);
  treeFilterValue.departmentId = val as string;
};

const handleTransformData = (data: Record<string, any>[]) => {
  console.log("可以在这里进行数据处理，然后返回新的数据", data);
  return data;
};
</script>

<template>
  <div :class="ns.b()">
    <TreeFilter
      label="label"
      title="部门列表"
      :request-api="DataService.getList"
      :default-request-params="{ id: 4 }"
      :transform-data="handleTransformData"
      :defaultValue="treeFilterValue.departmentId"
      @change="changeTreeFilter"
      show-more
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins/bem" as *;

@include b(tree-filter-demo) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}
</style>
