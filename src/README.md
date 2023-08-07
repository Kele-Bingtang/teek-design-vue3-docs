---
home: true
icon: home
title: 主页
heroImage: /logo.png
bgImage: /homeBg/6-light.svg
bgImageDark: /homeBg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: Kbt Admin Docs
tagline: 基于 Vue3.2、TypeScript、Vite4、Pinia、Element-Plus
actions:
  - text: 使用指南 💡
    link: ./guide/
    type: primary

  - text: 在线预览 👀
    link: https://vue3-admin.youngkbt.cn

  - text: 项目仓库 📚
    link: https://github.com/Kele-Bingtang/kbt-vue3-admin

highlights:
  - header: 快速开发
    description: 提供了完整版参考代码和精简版开发代码
    image: /assets/image/box.svg
    bgImage: /homeBg/3-light.svg
    bgImageDark: /homeBg/3-dark.svg
    highlights:
      - title: 拉取完整版参考代码：<code>git clone https://github.com/Kele-Bingtang/kbt-vue3-admin.git</code>。
      - title: 拉取精简版开发代码： <code>git clone https://github.com/Kele-Bingtang/kbt-vue3-template.git</code> 可切换分支，master 为国际化，no-i18n 为非国际化。

  - header: 拥有丰富的 Features，并持续更新
    description: 满足大部分开发场景。
    image: /assets/image/markdown.svg
    bgImage: /homeBg/2-light.svg
    bgImageDark: /homeBg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 最新流行稳定技术栈
        icon: clipboard-check
        details: 基于 Vue3.2、TypeScript、Vite4、Pinia、Element-Plus 等最新技术栈开发
        link: 

      - title: 简单上手 & 学习
        icon: box-archive
        details: 项目结构清晰，代码简单、易读。
        link: 

      - title: 规范工程化工作流
        icon: table-columns
        details: 配置 Eslint、Prettier、Husky、Commitlint、Lint-staged 规范前端工程代码规范。
        link: 

      - title: 完善的打包优化方案
        icon: building
        details: 内置规范的打包目录，提供打包压缩功能，减少打包体积。
        link: 

      - title: 丰富的组件
        icon: bars
        details: 提供丰富的通用组件、业务组件。
        link: 

      - title: 常用 Hook 函数
        icon: code
        details: 提供丰富的组件、常用 Hooks 封装，实现复用思想，减少重复开发，提高效率。
        link: 

      - title: 个性化主题配置
        icon: palette
        details: 提供主题颜色配置，暗黑、灰色、色弱等模式切换。
        link: 

      - title: 多种布局配置
        icon: object-group
        details: 提供多种布局、标签栏切换，布局显隐，满足大部分场景。
        link: 

      - title: 项目权限管控
        icon: lock
        details: 采用 RBAC 权限管控，提供菜单、路由及按钮粗细粒度权限管理方案
        link: 

      - title: 国际化
        icon: chart-area
        details: 内置常用国际化转换函数，支持自定义国际化切换，
        link: 

      - title: IFrame 嵌入
        icon: route
        details: 提供 IFrame 嵌入、缓存功能，支持门户 Portal 布局。
        link: 

      - title: 自定义指令
        icon: square-check
        details: 内置多种 Vue 自定义指令，提供傻瓜式指令一键注册功能。
        link: 

      - title: Axios 封装
        icon: code-pull-request
        details: 基于 Axios 封装常用请求模块，内置业务拦截器、异常拦截器。
        link: 


  - header: 布局
    description: 多种布局、标签栏切换，布局组件显隐
    image: /assets/image/layout.svg
    bgImage: /homeBg/5-light.svg
    bgImageDark: /homeBg/5-dark.svg
    highlights:
      - title: 六大布局
        icon: object-group
        details: 内置纵向、经典、横向、分栏、混合、子系统六大布局切换
        link: 

      - title: 深色模式
        icon: circle-half-stroke
        details: 可以自由切换浅色模式与深色模式
        link: 

      - title: 主题色切换
        icon: palette
        details: 支持自定义主题色并允许用户在预设的主题颜色之间切换
        link: 

      - title: 布局组件
        icon: person-chalkboard
        details: 支持图标、面包屑、导航栏等组件显隐，内置缓存功能，记住用户的布局配置
        link: 

  - header: 通用组件
    image: /assets/image/features.svg
    bgImage: /homeBg/1-light.svg
    bgImageDark: /homeBg/1-dark.svg
    features:
      - title: 分页组件
        icon: pager
        details: 进一步封装 ElementPlus 分页，支持分页后回滚当前位置
        link: 

      - title: 富文本组件
        icon: keyboard
        details: 封装 WangEditor、Tinymce 富文本，支持文字、图片、音频、附件等功能
        link: 

      - title: 气泡文字提示组件
        icon: lines-leaning
        details: 进一步封装 el-tooltip，实现文字超出时自动显示省略号并气泡提示
        link: 

      - title: Excel、图片上传组件
        icon: file-excel
        details: 封装 Excel、图片上传组件
        link: 

      - title: 超级表格、超级表单组件
        icon: table
        details: 基于 el-table 和 el-form 封装的表格和表单组件，通过 ts 列配置项代码代替复杂的 template 标签
        link: 

      - title: 权限组件
        icon: lock
        details: 内置权限组件，搭配角色、认证功能对 HTML 标签进行管控
        link: 

      - title: Grid 组件
        icon: person-chalkboard
        details: 基于 CSS3 Grid 封装的组件，可以快速构建 Grid 布局
        link: 
      
      - title: 抽屉拖拽组件
        icon: draw-polygon
        details: 基于 el-drawer 封装的可以拖拽的抽屉组件
        link: 
      
      - title: 消息提示组件
        icon: comment-dots
        details: 基于 el-message 封装的组件，支持原生 el-message 样式风格和 antd-message 样式风格
        link: 

      - title: 数字动画组件
        icon: globe
        details: 基于 countup.js 封装的组件，让数字加载也有动画效果
        link: 

      - title: 代码编辑器组件
        icon: code
        details: 基于 Codemirror 封装的组件，可以在文本框写有高亮提示的代码，支持 Java、SQL、JavaScript 等流行语言。
        link: 

      - title: 二维码组件
        icon: laptop-code
        details: 支持二维码生成和解析。
        link: 
      
copyright: false
footer: 
---
