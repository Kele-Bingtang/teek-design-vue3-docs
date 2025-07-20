import type { MaybeRef } from "vue";
import type { TableInstance, TableProps } from "element-plus";
import type { ProTableHeadNamespace } from "./table-head";
import type { ProTableMainNamespace } from "./table-main";
import type { TableColumn } from "./table-column";

/**
 * ProTable 组件的类型命名空间
 */
export namespace ProTableNamespace {
  export interface Props
    extends ProTableMainNamespace.Props,
      Omit<ProTableHeadNamespace.Props, "isSelected" | "selectedList" | "selectedListIds"> {
    /**
     * 列配置项
     *
     * @default '[]'
     */
    columns?: TableColumn<any>[];
    /**
     * table 数据
     *
     * @default '[]'
     */
    data?: Record<string, any>[];
    /**
     * 请求表格数据的请求
     *
     * @param params 请求参数
     */
    requestApi?: (params: Record<string, any>) => Promise<any>;
    /**
     * 默认请求参数（请求一定会携带）
     */
    defaultRequestParams?: MaybeRef<Record<string, any>>;
    /**
     * 请求参数
     */
    requestParams?: MaybeRef<Record<string, any>>;
    /**
     * 初始化请求参数（重置时恢复为初始化参数）
     */
    initRequestParams?: MaybeRef<Record<string, any>>;
    /**
     * 是否立即执行请求
     *
     * @default true
     */
    requestImmediate?: boolean;
    /**
     * 查询数据前的回调函数，可以对查询参数进行处理或禁止查询
     */
    beforeSearch?: (searchParams: Record<string, any>) => boolean | Record<string, any>;
    /**
     * 请求失败回调
     */
    requestError?: (error: unknown) => void;
    /**
     * 对请求成功的数据进行处理
     */
    transformData?: (data: Record<string, any>[], result?: any) => any;
    /**
     * 是否隐藏表格顶部栏
     *
     * @default false
     */
    hideHead?: boolean;
    /**
     * 是否显示控制表格顶部栏的图标列
     *
     * @default false
     */
    controlHeadColumn?: boolean;
    /**
     * 控制表格顶部栏图标列（ElTableColumn）的 Props
     */
    controlHeadColumnProps?: TableColumn<any>;
    /**
     * 是否使用卡片样式
     *
     * @default false
     */
    card?: boolean;
    /**
     * 分页信息
     */
    pageInfo?: ProTableMainNamespace.Props["pageInfo"];
    /**
     * 是否开启分页功能，pageMode 可以指定客户端（前端）分页还是服务端（后端）分页，当为 true 时，默认为客户端（前端）分页
     *
     * @default false
     */
    pageScope?: ProTableMainNamespace.Props["pageScope"];
    /**
     * 操作列 props
     */
    operationProps?: ProTableMainNamespace.Props["operationProps"];
    /**
     * ElTable 的 rowStyle
     */
    rowStyle?: TableProps<Record<string, any>>["rowStyle"];
    /**
     * ElTable 的 cellStyle
     */
    cellStyle?: TableProps<Record<string, any>>["cellStyle"];
    /**
     * ElTable 的 headerRowStyle
     */
    headerRowStyle?: TableProps<Record<string, any>>["cellStyle"];
    /**
     * ElTable 的 headerCellStyle
     */
    headerCellStyle?: TableProps<Record<string, any>>["headerCellStyle"];
    /**
     * ElTable 的 border
     */
    border?: TableProps<Record<string, any>>["border"];
    /**
     * ElTable 的 stripe
     */
    stripe?: TableProps<Record<string, any>>["stripe"];
    /**
     * ElTable 的 showHeader
     */
    showHeader?: TableProps<Record<string, any>>["showHeader"];
    /**
     * 是否显示表头背景
     *
     * @default true
     */
    headerBackground?: boolean;
    /**
     * ElTable 的 highlightCurrentRow
     *
     * @default true
     */
    highlightCurrentRow?: TableProps<Record<string, any>>["highlightCurrentRow"];
    /**
     * ElTable 的 props
     */
    [key: string]: any;
  }

  export interface Emits extends ProTableMainNamespace.Emits, ProTableHeadNamespace.Emits {
    /**
     * 注册组件实例
     */
    register: [proTableInstance: any, elTableInstance: TableInstance | null];
  }

  /**
   * 转为 onXxx: (xxx) => void
   */
  export type OnEmits = Partial<keyOnPrefix<Emits>>;
}
