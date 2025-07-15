export interface FeatureData {
  /** 标题 */
  title: string;
  /** 描述 */
  subTitle?: string;
  /** 图片 */
  image: string;
  /** 数据 */
  items: {
    title: string;
    description: string;
  }[];
}

export const features: FeatureData = {
  title: "Features 新特性",
  subTitle: "成熟的后台管理系统解决方案",
  image: "/home/features.svg",
  items: [
    {
      title: "最新流行稳定现代化技术栈",
      description: "基于 Vue3、TypeScript、Vite、Pinia、Element-Plus 等最新技术栈开发",
    },
    {
      title: "界面美观实用，项目易上手 & 学习",
      description: "精心优化前端界面，项目结构清晰，代码简单易读",
    },
    {
      title: "规范工程化工作流",
      description: "配置 Eslint、Prettier、Husky、Commitlint、Lint-staged 规范前端工程代码规范",
    },
    {
      title: "完善的打包优化方案",
      description: "内置规范的打包目录，提供打包压缩功能，减少打包体积",
    },
    {
      title: "丰富的组件",
      description: "提供丰富的 ElementPlus 超级组件、页面级组件、编辑器组件、卡片组件、EChart 组件",
    },
    {
      title: "丰富的组合式函数",
      description: "提供丰富常用的 Composables（Hooks）函数封装，实现复用思想，减少重复开发，提高效率",
    },
    {
      title: "个性化主题配置",
      description: "提供强大丰富的 CSS 主题变量、布局变量，支持主题色、浅色、深色、色弱等模式切换",
    },
    {
      title: "多种布局配置",
      description: "提供多种布局、标签栏切换，布局显隐，满足 90% 场景",
    },
    {
      title: "项目权限管控",
      description: "采用 RBAC 权限管控，提供菜单、路由及按钮粗细粒度权限管理方案",
    },
    {
      title: "国际化",
      description: "内置常用国际化转换函数，支持自定义国际化切换",
    },
    {
      title: "IFrame 嵌入",
      description: "提供 IFrame 嵌入、IFrame 缓存、IFrame 跳转等功能，可作为 Portal 门户、子系统、单页应用解决方案",
    },
    {
      title: "自定义指令",
      description: "内置多种 Vue 实用自定义指令，提供傻瓜式指令一键注册功能",
    },
    {
      title: "Axios 封装",
      description:
        "基于 Axios 封装常用请求模块，内置业务拦截器、异常拦截器、请求 Loading、错误处理、取消重复请求等功能",
    },
    {
      title: "多种图标类型",
      description: "支持 IconFont、SVG、Iconify 等多种图标类型渲染，快速集成市面上最流行的图标库",
    },
  ],
};

export const highlights: FeatureData = {
  title: "Layout 布局",
  subTitle: "多种布局、标签栏风格、布局组件显隐、全局主题色由你控制",
  image: "/home/layout.svg",
  items: [
    {
      title: "六大布局",
      description: "内置纵向、经典、横向、分栏、混合、嵌入六大布局切换",
    },
    {
      title: "浅色/深色模式",
      description: "可以自由切换浅色模式与深色模式",
    },
    {
      title: "主题色切换",
      description: "支持自定义主题色并允许用户在预设的主题颜色之间切换",
    },
    {
      title: "布局组件",
      description: "支持图标、面包屑、导航栏等组件显隐，内置布局缓存功能，记住用户的布局配置",
    },
  ],
};

export const components: FeatureData = {
  title: "Component 组件",
  image: "/home/ui.svg",
  items: [
    {
      title: "超级组件",
      description: "基于 ElementPlus 的表格、表单、描述列表组件进一步封装，采用 JSON 配置项驱动的方式，快速构建页面",
    },
    {
      title: "页面级组件",
      description:
        "提供 10+ 页面级组件，如：数字动画组件、抽屉可拖拽组件、图标选择器组件、Antd Design 消息提示工具等组件",
    },
    {
      title: "基础组件",
      description: "提供图标组件、点标签组件、权限组件、文字溢出行数提示组件，方便快速开发页面",
    },
    {
      title: "编辑器组件",
      description: "提供 Tinymce、Wang Editor 2 个富文本编辑器，提供 CodeMirror 代码编辑器以及代码对比编辑器",
    },
    {
      title: "卡片组件",
      description: "提供横幅卡片组件、多个 EChart 卡片组件、多种卡片原子类快速构建页面组件",
    },
    {
      title: "EChart 组件",
      description: "提供多种常用 EChart 组件，提供 ECharts 组合式函数快速构建 EChart 图表",
    },
  ],
};
