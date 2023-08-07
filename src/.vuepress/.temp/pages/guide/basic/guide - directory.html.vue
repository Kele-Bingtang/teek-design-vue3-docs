<template><div><nav class="table-of-contents"><ul></ul></nav>
<p>完整版目录结构 📚</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>├─ .husky # 代码提交前校验配置文件
├─ .vscode # IDE 工具推荐配置文件
├─ build # 构建工具
├─ public # 静态资源
│  └─ tinymce # tinymce 富文本资源
└─ src
    ├─ api # 接口请求统一管理
    ├─ assets # 字体、图片等静态资源
    ├─ components # 自定义通用组件
    │  ├─ CodeMirror # 代码编辑器组件
    │  ├─ CountTo # 计数组件
    │  ├─ Cropper # 剪切图组件
    │  ├─ DragDrawer # 可拖动抽屉组件
    │  ├─ DraggableItem # 拖动块组件
    │  ├─ DraggableList # 拖动列表组件
    │  ├─ DropdownMenu # 菜单下拉组件
    │  ├─ Flicker # 圆点、方形闪烁动画组件
    │  ├─ Grid # greid 布局组件
    │  ├─ ImageVerify # 验证码组件
    │  ├─ MaterialInput # input 组件
    │  ├─ Pagination # 分页组件
    │  ├─ Permission # 权限组件
    │  ├─ ProTable # 超级表格
    │  ├─ QrCode # 二维码组件
    │  ├─ SeamlessScroll # 无线滚动组件
    │  ├─ SearchForm # 查询组件
    │  ├─ SplitPane # 布局切割组件
    │  ├─ SvgIcon # svg 组件
    │  ├─ SwitchDark # 切换暗色主题组件
    │  ├─ TableSort # 表格级联排序组件
    │  ├─ TextHoverEffect # 文本激活动画组件
    │  ├─ Tinymce # 富文本组件
    │  ├─ Tooltip # 文字溢出提示组件
    │  ├─ TreeFilter # 树形过滤组件
    │  ├─ UploadExcel # Excel 上传组件
    │  ├─ UploadImages # 图片上传组件
    │  └─ WangEditor # 富文本组件
    ├─ config # 全局配置
    │  └─ request # Axios 配置
    ├─ directives # 自定义指令
    ├─ hooks 通用 Hooks
    ├─ languages # 国际化
    ├─ layout # 页面布局
    │  ├─ components # 布局组件
    │  │  ├─ CommonIcon # 通用图标
    │  │  ├─ FrameLayout # IFrame 嵌入
    │  │  ├─ Header # 头部
    │  │  ├─ Loading # 项目加载 Loading 
    │  │  ├─ MainContent # 内容区
    │  │  ├─ Menu # 菜单
    │  │  ├─ TabsNav # 标签页
    │  │  └─ ThemeDrawer 框架设置
    │  ├─ LayoutClassic # 经典布局
    │  ├─ LayoutColumns # 分栏布局
    │  ├─ LayoutMixins # 混入布局
    │  ├─ LayoutSubsystem # 子系统布局
    │  ├─ LayoutTransverse # 横向布局
    │  └─ LayoutVertical # 纵向布局
    ├─ router # 路由配置
    ├─ stores # pinia 状态管理
    ├─ styles # 全局样式
    ├─ types # 全局 TS 类型配置
    ├─ utils # 全局工具方法
    │  └─ layout # 布局用到的工具方法
    └─views # 业务代码
├── .editorconfig  # 编辑器读取文件格式及样式定义配置 https://editorconfig.org/
├── .env  # 全局环境变量配置（当 .env 文件与 .env.development、.env.production、.env.staging 这三个文件之一存在相同的配置 key 时，.env 优先级更低）
├── .env.development  # 开发环境变量配置
├── .env.production  # 生产环境变量配置
├── .env.test  # 测试环境变量配置
├── .eslintignore  # eslint 语法检查忽略文件
├── .eslintrc-globals # eslint 全局忽视变量配置
├── .eslintrc.cjs  # eslint 语法检查配置
├── .gitignore  # git 提交忽略文件
├── .prettierignore  # prettier 语法检查忽略文件
├── .prettierrc.json  # prettier 插件配置
├── .stylelintignore  # stylelint 插件检查忽略文件
├── .stylelintrc.js # stylelint 插件配置
├── .versionrc # standard-version 配置
├── CHANGELOG.md  # 版本更新日志
├── commitlint.config.js  # git 提交前检查配置
├── index.html  # html 主入口
├── LICENSE  # 证书
├── package.json  # 依赖包管理以及命令配置
├── postcss.config.js  # postcss 插件配置
├── README.md  # README
├── tsconfig.json  # typescript 配置
└── vite.config.ts  # vite 配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


