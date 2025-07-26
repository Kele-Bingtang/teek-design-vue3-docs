import type { DrawerProps } from "element-plus";
import type { ProFormNamespace } from "@/components/pro/form";
import type { ProDrawerProps } from "@/components/pro/drawer";
import type { FormItemColumnProps } from "@/components/pro/form-item";

export interface ProFormDrawerProps {
  /**
   * ProDrawer 的 Props
   */
  drawer?: ProDrawerProps & Partial<DrawerProps>;
  /**
   * ProForm 的 Props
   */
  form?: ProFormNamespace.Props & ProFormNamespace.OnEmits;
}

export interface ProFormDrawerEmits {
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
