import type { CSSProperties, MaybeRefOrGetter, MaybeRef, ComponentInternalInstance } from "vue";
import type { DescriptionItemProps } from "element-plus";
import type { ProFormNamespace } from "@/components/pro/form";
import type { ElOption, FormItemColumnProps, RenderTypes } from "@/components/pro/form-item";
import type ProDescriptions from "./index.vue";
import type { ElDisplayProps } from "../../table";

/**
 * render、插槽参数类型
 */
export interface DescriptionsRenderParams {
  /**
   * 当前值
   */
  value: unknown;
  /**
   * 当前列配置
   */
  column: DescriptionColumn;
  /**
   * 当前描述列表标签
   */
  label: string;
  /**
   * 当前渲染数据
   */
  data: Record<string, any>;
}

/**
 * 描述列表配置项
 */
export interface DescriptionColumn
  extends Omit<Partial<DescriptionItemProps>, "label" | "width" | "minWidth" | "span" | "rowSpan" | "labelWidth">,
    Omit<ElDisplayProps, "originValue" | "displayValue" | "options"> {
  /**
   * 唯一键
   */
  prop?: FormItemColumnProps["prop"];
  /**
   * 标签
   */
  label?: MaybeRefOrGetter<string>;
  /**
   * 列的数量
   */
  span?: MaybeRef<number> | ((editable: boolean) => number);
  /**
   * 单元格应该跨越的行数
   */
  rowSpan?: MaybeRef<number> | ((editable: boolean) => number);
  /**
   * 列的宽度
   */
  width?: MaybeRef<string | number> | ((editable: boolean) => string | number);
  /**
   * 列的最小宽度
   */
  minWidth?: MaybeRef<string | number> | ((editable: boolean) => string | number);
  /**
   * 列标签宽
   */
  labelWidth?: MaybeRef<string | number> | ((editable: boolean) => string | number);
  /**
   * 是否隐藏
   *
   * @default false
   */
  hidden?: MaybeRefOrGetter<boolean>;
  /**
   * 字典枚举数据
   */
  options?: FormItemColumnProps["options"];
  /**
   * 指定 Options 的 key，如果设置了则优先从缓存获取对于 key 的 Options 数据
   */
  optionsProp?: string;
  /**
   * 字典指定 label && value && children 的 key 值
   *
   * @default '{ label: "label", value: "value", children: "children", disabled: "disabled" }'
   */
  optionField?: FormItemColumnProps["optionField"];
  /**
   * 自定义当前 option 选项
   */
  transformOption?: (value: unknown, options: ElOption[], data: Record<string, any>) => ElOption;
  /**
   * 排序（从大到小）
   */
  order?: number;
  /**
   * 自定义 label 渲染
   */
  renderLabel?: (scope: DescriptionsRenderParams) => RenderTypes;
  /**
   * 自定义内容渲染
   */
  render?: (scope: DescriptionsRenderParams) => RenderTypes;
  /**
   * 自定义内容渲染（HTML 格式）
   */
  renderHTML?: (scope: DescriptionsRenderParams) => string;
  /**
   * 自定义内容
   */
  formatValue?: (value: unknown, scope: DescriptionsRenderParams) => string | number;
  /**
   * 是否为编辑态
   *
   * @default false
   */
  editable?: boolean;
  /**
   * ProForm Props
   */
  formProps?: MaybeRefOrGetter<
    Omit<
      ProFormNamespace.Props,
      | "columns"
      | "flexLayout"
      | "showLabel"
      | "showFooter"
      | "rowProps"
      | "colProps"
      | "showReset"
      | "submitText"
      | "resetText"
      | "submitLoading"
      | "footerAlign"
      | "preventNativeSubmit"
    >
  >;
  /**
   * ProFormItem Props，等于 ProForm 的单个 column
   */
  formColumn?: MaybeRefOrGetter<Omit<FormItemColumnProps, "prop" | "label" | "options" | "optionField">>;
  /**
   * el 组件的插槽
   */
  elSlots?: {
    [slotName: string]: (data: { value: string; column: DescriptionColumn; data: Record<string, any> }) => RenderTypes;
  };
}

/**
 * PropDescriptions 组件的 Props
 */
export interface ProDescriptionsProp {
  /**
   * 描述列表数据，如果传入该配置项且有数据，则不会执行 api 请求
   */
  data?: Record<string, any>;
  /**
   * 请求数据的 api
   */
  requestApi?: (data?: Record<string, any>) => Promise<any>;
  /**
   * 默认请求参数
   */
  defaultRequestParams?: Record<string, any>;
  /**
   * 对请求成功的数据进行处理
   */
  transformData?: (data: Record<string, any>[], result?: any) => any;
  /**
   * 描述列表列配置
   */
  columns?: DescriptionColumn[];
  /**
   * 描述列表 DescriptionItem 全局配置
   */
  descriptionsItemProps?: Partial<DescriptionItemProps>;
  /**
   * 是否使用卡片背景
   */
  card?: boolean;
  /**
   * 描述列表整体是否为编辑态
   *
   * @default false
   */
  editable?: boolean;
  /**
   * 是否显示编辑按钮
   *
   * @default true
   */
  editButton?: boolean;
  /**
   * 编辑按钮文案
   *
   * @default '["编辑", "退出编辑"]'
   */
  editText?: [string, string];
  /**
   * ProForm Props
   */
  formProps?: DescriptionColumn["formProps"];
  /**
   * 是否显示重置按钮
   *
   * @default true
   */
  showReset?: boolean;
  /**
   * 提交按钮文字
   *
   * @default '提交'
   */
  submitText?: string;
  /**
   * 重置按钮文字
   *
   * @default '重置'
   */
  resetText?: string;
  /**
   * 提交按钮 loading
   *
   * @default false
   */
  submitLoading?: boolean;
  /**
   * 底部按钮对齐方式
   *
   * @default 'right'
   */
  footerAlign?: "left" | "center" | "right";
  /**
   * 底部按钮组样式
   */
  footerStyle?: CSSProperties;
  /**
   * 是否使用内置的表单校验功能
   *
   * @default true
   */
  validate?: boolean;
  /**
   * 支持拓展
   */
  [key: string]: any;
}

/**
 * ProDescriptions 事件
 */
export interface ProDescriptionsEmits {
  /**
   * 注册事件
   */
  register: [proDescriptionsInstance: any];
  /**
   * 表单值改变事件
   */
  formChange: [value: unknown, prop: string, model: Record<string, any>, column: FormItemColumnProps];
  /**
   * 进入编辑态事件
   */
  edited: [];
  /**
   * 退出编辑态事件
   */
  editedCancel: [];
  /**
   * 提交按钮事件
   */
  submit: [model: Record<string, any>, closeEdited: () => void];
  /**
   * 重置按钮事件
   */
  reset: [model: Record<string, any>, closeEdited: () => void];
}

export interface EditProps extends FormItemColumnProps {
  /**
   * 表单组件的值
   */
  value?: unknown;
  /**
   * ProForm Props
   */
  formProps?: DescriptionColumn["formProps"];
}

export interface EditEmits {
  /**
   * 表单值改变事件
   */
  change: [value: unknown, model: Record<string, any>, column: FormItemColumnProps];
}

export type ProDescriptionsInstance = InstanceType<typeof ProDescriptions>;
