---
title: 指南 - 快速开始
shortTitle: 快速开始
date: 2023-07-20 00:52:58
order: 4
category:
  - 指南
tag: 
  - 指南
---

[[TOC]]

## 开发环境

`node` 版本应不小于 `16`，推荐使用 yarn 开管理包依赖。

```sh
npm install -g yarn
```

## IDE

推荐使用 [VsCode](https://code.visualstudio.com/)、WebStorm。

## 拉取代码

完整版前端代码

```
git clone https://github.com/Kele-Bingtang/kbt-vue3-admin.git
```

精简版前端代码

```sh
https://github.com/Kele-Bingtang/kbt-vue3-template.git
```

精简版仓库有两个分支，master 是国际化版，`no-i18n` 是非国际化版，根据项目需求自行切换分支。

克隆项目下来后，记得切换 GitLab 地址，修改为您真正的项目地址。

如果您暂时不确定您当前开发的项目地址，可以先把根目录下的 .git 文件删除，因为 .git 目录在 Windows 是隐藏的，所以您可以有两个步骤来删除它：

- 使用 Windows 10 资源管理器进入到项目根目录，右上角「查看」 -> 「隐藏的项目」打勾，即可看到隐藏的项目，即 .git，然后右键删除即可
- 使用 Windows 10 资源管理器进入到项目根目录，按住 `Shift`，然后鼠标在空白处右键，选择「在处处打开 Powershell 窗口」，执行命令 `rm -r -force .git` 即可删除
- 利用 Git Bash Here 窗口进入项目根目录，执行命令 `rm -rf .git` 即可删除

## 本地开发

Project setup：安装依赖

```sh
yarn install
```

Compiles and hot-reloads for development：编译运行（开发环境使用）

```sh
yarn dev
# or
yarn server
```

Compiles and minifies for production：打包运行（测试环境使用）

```sh
yarn build:test
```

Compiles and minifies for production：打包运行（生产环境使用）

```sh
yarn build:pro
```

Lints and fixes files：检查和修复文件

```sh
yarn lint
```

Push code：提交代码到 git

前往 push.sh 文件修改要提交的远程仓库地址，然后在 Git Bash Here 执行命令：

```sh
sh push.sh "您的 commit 信息"
```

## 开发流程

一套简单的开发仅需两步：

- 开发您自己的 Vue 组件
- 在 `src/router/routesConfig.ts` 里配置路由、角色等信息

Admin 根据路由、角色等信息自动生成菜单栏、面包屑、标签页。

用户的默认角色为空数组，实际的角色应该从后端获取。

比如你需要写一个登录组件，则在 `src/view` 下创建 `login/index.vue`，即 `src/viewlogin/index.vue`，并在 `index.vue` 编写你的需求，然后在 `src/router/routesConfig.ts` 注册到路由里。

```typescript
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
]
```

此时启动项目，就在左侧菜单栏看到 **登录** 菜单，点击就会跳转到你写的组件。

因为登录组件是没有认证才需要访问的，所以不应该放在左侧菜单，让用户手动点击，因此我们可以使用 `meta.hideInMenu` 配置项：

```typescript {8}
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
      hideInMenu: true,
    },
  },
]
```

这时候左侧菜单不会渲染这个菜单，并且你需要在路由 beforeEach 判断用户是否登录认证过，没有则手动跳转到 `/login` 路由。
