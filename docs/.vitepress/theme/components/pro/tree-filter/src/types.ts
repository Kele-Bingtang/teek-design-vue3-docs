import type { TreeKey } from "element-plus";
import TreeFilter from "./index.vue";

export interface TreeFilterProps {
  /**
   * 树形数据，如果传入该配置项且有数据，则不会执行 api 请求
   */
  data?: Record<string, any>[];
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
   * treeFilter 标题
   */
  title?: string;
  /**
   * 选择的 id
   *
   * @default 'id'
   */
  id?: string;
  /**
   * 显示的 label
   *
   * @default 'label'
   */
  label?: string;
  /**
   * 是否为多选
   *
   * @default false
   */
  multiple?: boolean;
  /**
   * 默认选中的值
   */
  defaultValue?: unknown;
  /**
   * 是否显示 全部 选项
   */
  enableTotal?: boolean;
  /**
   * 是否默认选中第一个选项
   */
  defaultFirst?: boolean;
}

export type FilterEmits = {
  change: [value: string | TreeKey[], data?: Record<string, any>];
};

export type TreeFilterInstance = InstanceType<typeof TreeFilter>;
