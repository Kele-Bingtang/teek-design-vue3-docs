import type { DialogProps } from "element-plus";
import type { ProFormNamespace } from "@/components/pro/form";
import type { ProDialogProps } from "@/components/pro/dialog";
import type { FormItemColumnProps } from "@/components/pro/form-item";
import type ProDialogForm from "./index.vue";

export interface ProFormDialogProps {
  /**
   * ProDialog 的 Props
   */
  dialog?: ProDialogProps & Partial<DialogProps>;
  /**
   * ProForm 的 Props
   */
  form?: ProFormNamespace.Props & ProFormNamespace.OnEmits;
}

export interface ProFormDialogEmits {
  /**
   * 表单值改变事件
   */
  change: [value: any, model: Record<string, any>, column: FormItemColumnProps];
  /**
   * 确认按钮点击事件
   */
  confirm: [model: Record<string, any>];
  /**
   * 取消按钮点击事件
   */
  cancel: [];
}

/**
 * ProDialogForm 组件实例
 */
export type ProDialogFormInstance = InstanceType<typeof ProDialogForm>;
