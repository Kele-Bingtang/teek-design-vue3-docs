---
title: 指南 - TS 类型
shortTitle: TS 类型
date: 2023-07-21 00:43:01
order: 10
category:
  - 指南
tag: 
  - 指南
---

[[TOC]]





## 介绍

下面介绍 Admin 内置的 TS 声明文件（`.d.ts` 文件）和一些声明操作。

框架级别的 TS 声明文件在 src 目录下，项目级别的 TS 声明文件在 `src/types` 目录下。

## TS 配置文件

TS 的配置文件为根目录下的 `tsconfig.json` 文件，Admin 已经在该文件里添加了项目需要的 `.d.ts`、`.ts`、`.tsx` 等文件的扫描和提示，所以你无需关心自己写的 TS 文件是否有提示，除非你的 TS 文件所在的路径不在 TS 配置文件里填写的扫描范围内，此时你需要在 TS 配置文件的 include 添加路径就可以完成扫描和提示。

## shims-vue.d.ts

`.vue`、`.scss` 文件不是常规的文件类型，`typescript` 无法识别，所以 Admin 在 `src/env.d.ts` 添加了这些文件类型的支持：

```typescript
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.scss" {
  const scss: Record<string, string>;
  export default scss;
}

```

## auto-import.d.ts

Admin 安装了 `unplugin-auto-import` 依赖，该依赖在 src 下自动生成 `auto-import.d.ts` 文件，自动引入 Vue 常用的 API，如 ref、computed、watch 等，这样在 Vue 组件里，直接使用 Vue 自带的 API 即可，无需 import 引入，如：

```vue
<script setup lang="ts" name="App">
const isOpen = ref(true);
</script>
```

不需要手动引入 ref：

```vue
<script setup lang="ts" name="App">
import { ref } from "vue";
  
const isOpen = ref(true);
</script>
```

## types/plugins.d.ts

项目开发，我们可能需要安装一些库或者插件什么的，当它们对 `typescript` 支持不是很友好的时候，如 Admin 使用了 `nprogress`、`qs`、`v-contextmenu` 这三个第三方依赖，而且这三个依赖官方并没有提供 TS 类型支持，导致在 `import xxx from "xx"` 的时候，会报错：无法找到 XX 的声明文件 ...

解决办法就是将这些通过 `declare module "包名"` 的形式添加到 `src/types/plugins.d.ts` 文件里。

```typescript
declare module "nprogress";
declare module "qs";
declare module "v-contextmenu";
```

这样 `import xxx from "nprogress"` 的时候就不会报错。

## 自定义全局组件 TS 提示

自定义的全局组件，在使用的时候没有 TS 语法提示，如没有 props 需要的属性属性，那么这需要我们自己往项目注入这些提示。

如 Admin 全局注册了 Auth、Role 组件，则需要添加 TS 提示，则在 `src/shims-vue.d.ts` 里添加：

```typescript
declare module "vue" {
	export interface GlobalComponents {
		Role: typeof import("./components/Permission/role.vue")["default"]
		Auth: typeof import("./components/Permission/auth")["default"]
    // 其他全局组件
	}
}
```

这样使用 Auth、Role 组件时，会有 TS 提示，如组件里的 props 提示。

## 全局类型声明

有些 TS 类型、interface 或者其他提示，我们希望所有的组件都能使用，而不是在不同的组件重复定义提示，则在 `src/types/global.d.ts` 文件里定义（`declare global {}` 里定义），该文件里定义的 type、interface 等都会全局注入 Admin 里，在任意地方都可以使用这些声明。

Admin 基于自身场景重写了 Vue 的路由 TS 提示，在 Vue 的路由 TS 提示基础上进行拓展，添加了更多的适用于 Admin 的其他 TS 提示。

如路由的 meta 类型：

```typescript
interface MetaProp {
  readonly _fullPath?: string; // 路由的完整路径，在编译阶段自动生成
  readonly _dynamic?: boolean; // 是否是动态路由，在编译阶段自动生成
  roles?: string[]; // 可访问该页面的权限数组，当前路由设置的权限会影响子路由
  auths?: string[]; // 路由内的按钮权限
  title?: string | number | ((route: RouteConfig) => string); // 显示在侧边栏、面包屑和标签栏的文字，使用 '{{ 多语言字段 }}' 形式结合「多语言」使用，可以传入一个回调函数，参数是当前路由对象 to
  icon?: string; // 菜单图标，该页面在左侧菜单、面包屑显示的图标，无默认值
  notClickBread?: boolean; // 是否允许点击面包屑，如果为 true，则该路由无法在面包屑中被点击，默认为 false
  hideInBread?: boolean; // 是否不添加到面包屑，如果为 true，则该路由将不会出现在面包屑中，默认为 false
  hideInMenu?: boolean; // 是否不添加到菜单，如果为 true，则该路由不会显示在左侧菜单，默认为 false
  alwaysShowRoot?: boolean; // 是否总是渲染为菜单，如果为 false 且某一级路由下只有一个二级路由，则左侧菜单直接显示该二级路由，如果为 true，则总会让一级菜单作为下拉菜单，默认为 false，仅限父级路由使用
  isKeepAlive?: boolean; // 是否缓存，如果为 true，该路由在切换标签后不会缓存，如果需要缓存，则「必须」设置页面组件 name 属性（class 名）和路由配置的 name 一致，默认为 false
  isAffix?: boolean | number; // 是否固定在 tabs nav，如果为 true，则该路由按照路由表顺序依次标签固定在标签栏，默认为 false
  isFull?: boolean; // 是否全屏，不渲染 Layout 布局，只渲染当前路由组件
  activeMenu?: string; // Restful 路由搭配使用，当前路由为详情页时，需要高亮的菜单
  beforeCloseName?: string; // 关闭路由前的回调，如果设置该字段，则在关闭当前 tab 页时会去 @/router/before-close.js 里寻找该字段名「对应」的方法，作为关闭前的钩子函数，无默认值
  rank?: number; // 路由在左侧菜单的排序，rank 值越高越靠后，当 rank 不存在时，根据顺序自动创建，首页路由永远在第一位，当 rank 存在时，可以插入指定的菜单位置，默认不存在
  frameSrc?: string; // IFrame 链接，填写后该路由将打开 IFrame 指定的链接
  frameLoading?: boolean; // IFrame 页是否开启首次加载动画（默认 true）
  frameKeepAlive?: boolean; // IFrame 页是否开启缓（默认 false）
  frameOpen?: boolean; // IFrame 页是否开新标签页打开（默认 false）
  /**
     * @description 页面加载动画（有两种形式，一种直接采用 vue 内置的 transitions 动画，另一种是使用 animate.css 写进、离场动画）
     * @see {@link https://next.router.vuejs.org/guide/advanced/transitions.html#transitions}
     * @see animate.css {@link https://animate.style}
     */
  transition?: {
    name?: string; // 当前路由动画效果
    enterTransition?: string; // 进场动画
    leaveTransition?: string; // 离场动画
  };
  hideInTab?: boolean; // 是否不添加到标签页，默认 false
  dynamicLevel?: number; // 动态路由可打开的最大数量
  useI18n?: boolean; // 是否开启 i18n，默认读取全局的 routeUseI18n（src/config/settings.ts）
  useTooltip?: boolean; // 菜单的文字超出后，是否使用 el-toolTip 提示，默认读取全局的 routeUseTooltip（src/config/settings.ts）
}
```

路由表配置类型：

```typescript
import type { RouteRecordRaw, RouteComponent } from "vue-router";

type RouterConfigRaw = Omit<RouteRecordRaw, "component" | "children"> & {
  meta?: Omit<MetaProp, MetaNeedKey>;
  component?: string | RouteComponent | (() => Promise<RouteComponent>);
  children?: RouterConfigRaw[];
};
```

这些是 Admin 内置的全局 TS 提示，如果你希望拓展自己的全局 TS 提示，则在该文件添加即可。



## 自定义 TS API

我们知道 TS 自带的几个 API：

- Partial 可选
- Pick 提取
- Omit 去除
- Required 必选
- ...

Admin 根据常用场景基于这些 API 进行组装，更便于操作 TS 的提示。

这些组装的新 API 在 `src/types/types.d.ts` 里：

```typescript
/**
 * 将对象的某个属性变为可选，如：

interface User {
  name: string;
  age: string;
  gender: string;
}

// gender 变为可选
let user: PartialKey<User, "gender"> = {
  name: "",
  age: "",
};
// age 和 gender 变为可选
let user: PartialKey<User, "age" | gender"> = {
  name: "",
};

 */
declare type PartialKey<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>> & Partial<Pick<T, U>>;

/**
 * 指定属性变为必选
 */
declare type RequiredKey<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>> & Required<Pick<T, U>>;

/**
 * 指定的属性为必选，其他属性都变为可选
 *
 * 如 RequiredKey<User, "name">
 * 则只有 name 是必填，age 和 gender 变为可选
 */
declare type RequiredKeyPartialOther<T, U extends keyof T> = Partial<Pick<T, Exclude<keyof T, U>>> &
  Required<Pick<T, U>>;

/**
 * 指定属性变为只读
 */
declare type ReadOnlyKey<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>> & Readonly<Pick<T, U>>;
```

如果你需要根据自己的使用场景组装 API，则可以参考上面内容。

## types/http.d.ts

关于全局 Axios 请求的 TS 提示，Admin 放在了 `src/types/http.d.ts` 文件里。

```typescript
declare namespace http {
  interface Response<T> {
    code: number; // 状态码
    status: string; // 状态码信息
    message: string; // 消息
    data: T; // 数据
  }
}
```

这是后台返回的一个 http 响应格式。

我们如何使用呢？

```typescript {15}
import axios from "@/config/request";

export interface BackstageMenuList {
  imageIcon: string;
  menuCode: string;
  pagePath: string;
  menuName: string;
  menuUrl: string;
  parentMenuCode: string;
  seq: number;
  children?: BackstageMenuList[];
}

export const getMenuList = () => {
  return axios.request<http.Response<BackstageMenuList>>({
    url: "/test",
    method: "post",
    headers: {
      mapping: true,
    },
  });
};
```

Axios 请求的部分请看：[指南 - 请求](/guide/basic/guide-request.html)，这里只是演示如何使用 `http.d.ts` 的内容。

在 `http.d.ts` 声明的响应格式，我们无需 import 引入，因为 `declare namespace xxx` 声明一个命名空间后，TS 会自动将 xxx 注入到 Admin 里，在任意文件里都无需引入，直接填写 xxx 即可。

::: warning

任意一个 `.d.ts` 文件出现 `export declare` 关键词，则只能手动 import 引入。

:::

所以 `http.d.ts` 文件里不建议出现 export 关键词，否则关于 Axios 的响应 TS，都需要手动 import，如下：

```typescript {1}
export declare namespace http {
  export interface Response<T> {
    code: number; // 状态码
    status: string; // 状态码信息
    message: string; // 消息
    data: T; // 数据
  }
}
```

则需要手动引入 http。

```typescript {2}
import axios from "@/config/request";
import type { http } from "@/types/http";

export interface BackstageMenuList {
  imageIcon: string;
  menuCode: string;
  pagePath: string;
  menuName: string;
  menuUrl: string;
  parentMenuCode: string;
  seq: number;
  children?: BackstageMenuList[];
}

export const getMenuList = () => {
  return axios.request<http.Response<BackstageMenuList>>({
    url: "/test",
    method: "post",
    headers: {
      mapping: true,
    },
  });
};
```

如果你了解 TS 的 `declare module`，则和 namespace 也是同理，添加了 `export declare module xxx`，则需要手动引入 xxx。