<script lang="ts" setup>
import type { FormColumn } from "@/components/pro/form";
import { ProForm } from "@/components/pro/form";

const columns: FormColumn[] = [
  {
    label: "Small divider",
    prop: "dividerSmall",
    el: "el-divider",
    elProps: {
      labelSize: "small",
    },
  },
  {
    label: "Default divider",
    prop: "dividerDefault",
    el: "el-divider",
    elProps: {
      labelSize: "default",
    },
  },
  {
    label: "Large divider",
    prop: "dividerLarge",
    el: "el-divider",
    elProps: {
      labelSize: "large",
    },
  },
];
</script>

<template>
  <ProForm :columns />
</template>
