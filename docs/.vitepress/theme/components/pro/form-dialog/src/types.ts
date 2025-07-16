import type { DialogProps } from "element-plus";
import type { ProFormNamespace } from "@/components/pro/form";
import type { ProDialogProps } from "@/components/pro/dialog";
import type { FormItemColumnProps } from "@/components/pro/form-item";

export interface ProFormDialogProps {
  /**
   * ElDialog 显示状态
   */
  visible?: boolean;
  /**
   * ElDialog 的 Props
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
  change: [value: unknown, model: Record<string, any>, column: FormItemColumnProps];
  /**
   * 确认按钮点击事件
   */
  confirm: [model: Record<string, any>];
  /**
   * 取消按钮点击事件
   */
  cancel: [];
}
