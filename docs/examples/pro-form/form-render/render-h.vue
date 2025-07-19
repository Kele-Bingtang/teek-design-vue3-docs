<script lang="ts" setup>
import type { FormColumn } from "@/components/pro/form";
import { ref, h, Fragment } from "vue";
import { ElUpload, ElButton, ElImage, ElInput, ElTransfer } from "element-plus";
import { ProForm } from "@/components/pro/form";

const state = ref({
  img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  input: "input 值",
  transfer: [],
  data: "初始值",
  data1: "初始值1",
});

const columns: FormColumn[] = [
  {
    label: "自定义el-input ",
    prop: "input",
    elProps: {
      // 优先级低于 render 的 props
      placeholder: "请输入",
    },
    render: () => {
      return h(ElInput);
    },
  },
  {
    label: "自定义 el-transfer",
    prop: "transfer",
    render: (value, update) => {
      interface Option {
        key: number;
        label: string;
        disabled: boolean;
      }
      const data: Option[] = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return h(ElTransfer as any, {
        data: [...data],
      });
    },
  },
  {
    label: "上传",
    prop: "img",
    width: 100,
    render(value, update) {
      // 自定义上传
      const handleHttpRequest = async ({ file, onError, onSuccess }: any) => {
        try {
          onSuccess(file);
        } catch (error: any) {
          onError(error);
        }
        return file;
      };

      return h(Fragment, [
        h(ElImage as any, {
          src: value,
          previewSrcList: [value],
          style: value ? { width: "60px", marginRight: "10px" } : {},
        }),
        h(
          ElUpload,
          {
            action: "",
            httpRequest: handleHttpRequest,
            onChange: async (data: any) => {
              const value = await fileToDataURL(data.raw);
              // 当渲染的组件不支持 v-model 时，需要手动调用 render 的 update 回调把值传给表单
              update(value);
            },
          },
          () => h(ElButton, () => "点击上传")
        ),
      ]);
    },
  },
  {
    label: "原生表单（返回VNode）",
    prop: "data",
    elProps: {
      placeholder: "请输入原生表单值",
    },
    render: (value, update) => {
      return h("input", {
        // 原生表单需要手动添加 value 值
        value: value,
        // 当渲染的组件不支持 v-model 时，需要手动调用 render 的 update 回调把值传给表单
        onChange: (e: Event) => {
          const value = (e.target as HTMLInputElement)?.value;
          update(value);
        },
        style: {
          border: "1px solid #ccc",
          width: "200px",
          padding: "0 10px",
        },
      });
    },
  },
  {
    label: "原生标签（返回字符串）",
    prop: "data1",
    elProps: {
      placeholder: "请输入原生表单值",
      onChange(e: Event) {
        const value = (e?.target as HTMLInputElement)?.value;
        return value;
      },
    },

    render: value => {
      return h("div", null, value as string);
    },
  },
];

const fileToDataURL = (file: File | Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const data = (e.target as any).result;
      resolve(data);
    };
    reader.onerror = e => {
      // 读取文件失败
      reject(new Error(e as any));
    };
    reader.readAsDataURL(file);
  });
};
</script>

<template>
  <ProForm v-model="state" :columns="columns" :label-width="200" />

  {{ state }}
</template>
