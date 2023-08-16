---
title: 指南 - 路由
shortTitle: 路由
date: 2023-07-20 01:40:54
order: 12
category:
  - 指南
tag: 
  - 指南
---

[[TOC]]



## 路由配置规则

路由的所有相关文件位于 `src/router` 下：

- 路由和组件的配置文件为 `routes-config.ts`
- 路由的核心配置、路由拦截文件为 `index.ts`
- 路由关闭前的回调文件为 `before-close.ts`

Admin 的菜单和布局并不需要开发者单独开发，而是通过一系列的转换而得到的，为了简化开发者多余的代码，Admin 基于路由制定了一套具有规范化的配置，掌握了路由的配置，基本就掌握了项目的开发节奏。

比如如何通过最短的代码让路由进行缓存、是否渲染到菜单，是否 icon 等布局类的操作，而最好的方法就是通过在写路由的时候进行配置。

再通俗理解一点：一个路由对应一个菜单、一个面包屑 Item，一个标签页，所以通过路由的配置，就可以自动生成菜单、面包屑 Item、标签，极大的简化了开发者写三套代码的精力和时间，这也是世面上流行的管理系统的搭建。

下面先给出 Admin 内置的路由配置，其中包括官方的配置和 Admin 可选的配置：

```typescript
interface RouterConfig {
  // 路由地址
  path: string;
  // 路由名字（必须保持唯一）
  name: string;
  // 路由重定向
  redirect: string;
  // 路由元信息，Admin 核心配置
  meta: MetaProp;
  // 子路由配置项
  children: [
    {
      // 路由地址
      path: string;
      // 路由名字（必须保持唯一）
      name: string;
      // 路由重定向
      redirect: string;
      // 按需加载需要展示的页面
      component: RouteComponent;
      // 路由元信息，Admin 核心配置
      meta: MetaProp;
    }
  ]
}

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

MetaProp 的配置是 Admin 内置的核心配置，通过这些配置可以对由路由生成的内容进行控制。

## 路由配置

### 一级路由

```typescript
const home: RouterConfigRaw = {
  path: HOME_URL,
  name: HOME_NAME,
  component: "/home/index",
  meta: {
    isAffix: true,
    title: "首页",
    icon: "HomeFilled",
    notClickBread: false,
    hideInBread: false,
    hideInMenu: false,
    isKeepAlive: false,
    useI18n: false,
    useTooltip: false,
    isFull: false,
    hideInTab: false,
  },
}
```

### 二级路由

```typescript
const components: RouterConfigRaw = {
  path: "/components",
  name: "Components",
  meta: {
    notClickBread: true,
    title: "组件",
    icon: "Opportunity",
  },
  children: [
    {
      path: "message",
      name: "MessageDemo",
      component: () => import("@/views/components/message/index.vue"),
      meta: { 
        title: "消息组件", 
        icon: "StarFilled",
        alwaysShowRoot: false,
        notClickBread: false,
        hideInBread: false,
        hideInMenu: false,
        isKeepAlive: false,
        useI18n: false,
        useTooltip: false,
        isFull: false,
        hideInTab: false,
      },
    }
  ]
}
```

meta 里的参数都有默认值（目前填写 Boolean 类型的都是默认值），所以不是要写很多配置项，常用的是 title、icon 配置项，其他可以保持默认值。

### 详情路由

```typescript
const detailsRoutes: RouterConfigRaw = {
  path: "/arg",
  name: "Arg",
  redirect: "/arg/params/1",
  meta: {
    hideInMenu: true,
    hideInBread: true,
  },
  children: [
    {
      path: "query",
      name: "Query",
      component: "/tabs/queryDetail",
      meta: {
        title: (route: RouteConfig) => `{{ _route.Query }}-${route.query.id}`,
        icon: "StarFilled",
        beforeCloseName: "before_close_normal",
      },
    },
    {
      path: "params/:id",
      name: "Params",
      component: "/tabs/paramsDetail",
      meta: {
        title: (route: RouteConfig) => `{{ _route.Params }}-${route.params.id}`,
        icon: "StarFilled",
        beforeCloseName: "before_close_normal",
        dynamicLevel: 3,
      },
    },
  ],
};
```

详情页路由的 title 支持函数式，参数是当前路由信息。

## 路由加载规则

Admin 已经将路由分为了两类：一类是常量路由，一类是权限路由。

常量路由指的是 Admin 一定会加载的路由，如登录页面、404 页面等，是在路由对象初始化的时候 **必然** 一起初始化的路由。

权限路由指的是满足了 **指定权限** 才加载的路由，具有权限校验功能，如 Admin 角色和 Visitor 角色看到路由可能不一样，在初始化的时候，就会根据角色去筛选出角色拥有的路由进行加载。

常量路由加载最先，随着路由对象初始化和加载，而权限路由靠后，是在路由的前置钩子 `beforeEach` 里进行动态加载。

常量路由一定是写在代码里，权限路由既可以是写在代码里，也可以是后端传来的动态路由。

### 异步懒加载

当项目庞大的时候，推荐使用 **异步懒加载** 来加载路由，这样可以实现按需加载。

异步懒加载指的是在访问到该路由才加载该路由，而不是一次性加载完所有路由，因为一次性加载完会导致初次访问的时候，页面长时间白屏，需要耗费大量时间去加载路由。

官方推荐的方式是使用 import 来进行异步懒加载：

```typescript {5}
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/index.vue")
    meta: {
      isAffix: true,
      title: "首页",
      icon: "HomeFilled",
    },
  },
]
```

而 Admin 基于这种形式再次衍生了另外两种形式：

> 字符串形式

```typescript {5}
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: "/home/index",
    meta: {
      isAffix: true,
      title: "首页",
      icon: "HomeFilled",
    },
  },
];
```

这样配置后，路由将去寻找 `src/view/home/index.vue` 来渲染，即在加载前自动加上 `src/views` 和 `.vue`。

> Path 形式

如果不想写 component，Admin 还支持 Path 形式，即直接用 path 代替 component：

```typescript {3}
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/home/index",
    name: "Home",
    meta: {
      isAffix: true,
      title: "首页",
      icon: "HomeFilled",
    },
  },
];
```

这样配置后，路由将去寻找 `src/view/home/index.vue` 来渲染，即在加载前自动加上 `src/views` 和 `.vue`。

## 国际化

下面讲解国际化和非国际化的简单配置。

### 非国际化

菜单、面包屑、标签页的文字显示取决于路由 meta 的 title：

```typescript {7}
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: import("@/views/home/index.vue"),
    meta: {
      title: "首页",
    },
  },
]
```

这样就可以在菜单、面包屑、标签页看到 **首页** 文字。

### 国际化

路由支持国际化，默认关闭，那么如何开启呢？

#### 局部开启

路由的 meta 里使用 useI18n 属性：

```typescript
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: import("@/views/home/index.vue"),
    meta: {
      useI18n: true,
    },
  },
]
```

可以看到 meta 里不需要 title 了，这是一个规则，国际化和非国际化使用的属性不是同一个属性。

- 非国际化使用的是路由 meta 的 title 属性
- 国际化使用的路由的 name 属性

此时页面的菜单将显示 `Home`，那么它是怎么支持国际化的呢？

开启国际化后，Admin 默认以路由的 name 值作为 key 去 `src/languages/modules` 下去寻找 `Home` 对应的 value：

- `en-US.ts` 是英文配置文件
- `zh-CN.ts` 是中文配置文件

如两个文件内容：

```typescript
// en-US.ts
export default {
  _route: {
    Home: "Home"
  }
}
// zh-CN.ts
export default {
  _route: {
    Home: "首页"
  }
}
```

则切换中文显示 **首页**，切换英文显示 `Home`。

如果没有配置国际化文件，则默认读取 name 的值，如上面的 `Home` 作为文字渲染。

#### 全局开启

有时候项目是国际化项目，而路由非常多，给每个路由配置 `useI18n: true` 比较麻烦，所以可以在 `src/config/settings` 里的 routerSettings 开启全局国际化：

```typescript
const routerSettings: Partial<Settings> = {
  routeUseI18n: true,
};
```

## 路由配置

下面演示一些基本的路由配置，实际还是建议去拉取项目并运行，然后尝试一些路由配置就明白了原理。

### 标题 & 图标

使用 `title` 来当菜单、面包屑、标签页渲染的标题，使用 `icon` 当渲染的图标。

```typescript
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: import("@/views/home/index.vue"),
    meta: {
      isAffix: true,
      title: "首页",
      icon: "HomeFilled",
    },
  },
]
```

如果你给 Admin 内置了部分图标，则 `icon` 可以直接写名字，如果使用了不内置的图标，则需要手动引入图标：

```typescript
import { HomeFilled } from "@element-plus/icons-vue";

export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: import("@/views/home/index.vue"),
    meta: {
      title: "首页",
      icon: HomeFilled,
    },
  },
]
```

`icon` 支持 Element Plus 内置的图标，也支持 Iconify 的图标，具体请看 [指南 - 图标](/guide/basic/guide-icon.html)。

### 标签页固定

标签页是记录打开过的历史路由，具有可删除功能，但是有时候我们需要将某个路由如首页直接固定到标签页的第一个位置，无法删除，则使用 `isAffix` 属性：

```typescript {7}
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: import("@/views/home/index.vue"),
    meta: {
      isAffix: true,
      title: "首页",
      icon: "HomeFilled",
    },
  },
]
```

### 路由缓存

使用 `isKeepAlive` 属性即可对路由进行缓存。

生效前提：Vue 组件的 `name` 必须与对应路由的 `name` 保持一致：

```vue {4}
<template>
</template>

<script setup lang="ts" name="Home">
</script>

<style lang="scss" scoped>
</style>
```

路由 name 和 isKeepAlive 属性：

```typescript
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: import("@/views/home/index.vue"),
    meta: {
      isKeepAlive: true,
      title: "首页",
      icon: "HomeFilled",
    },
  },
]
```

### 菜单隐藏

上文有说过，一个路由对应一个菜单，但是我们不希望将一个路由当作一个菜单渲染，即无法直接通过点击菜单跳转路由，则使用 hideInMenu 属性：

```typescript
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: import("@/views/home/index.vue"),
    meta: {
      hideInMenu: true,
      title: "首页",
      icon: "HomeFilled",
    },
  },
]
```

### 菜单渲染（一个）

如果一个父路由 A 只有一个子路由 B，那么有时候不希望有一个父菜单（路由 A）和一个子菜单（子路由 B），而是希望子路由 B 直接是一个父菜单，则使用 alwaysShowRoot 属性：

```typescript
export const rolesRoutes: RouterConfigRaw[] = [
  {
    path: "/components",
    name: "Components",
    meta: {
      notClickBread: true,
      title: "组件",
      icon: "Opportunity",
    },
    children: [
      {
        path: "message",
        name: "MessageDemo",
        component: () => import("@/views/components/message/index.vue"),
        meta: { title: "消息组件", icon: "StarFilled", alwaysShowRoot: true },
      },
    ]
  }
]
```

这样在菜单栏只看到父菜单 **消息组件**，而不是父菜单 **组件** 和子菜单 **消息组件**。

当父路由有多个子路由的时候，则该属性失效，即父路由一定是父菜单，子路由是子菜单。

上面的父菜单可以理解为一级菜单，子菜单为二级菜单，也可以是二级菜单和三级菜单。

### 菜单渲染（多个）

假设一个一级路由（菜单）下有五个二级路由（菜单），但是有 4 个二级路由 `hideInMenu: true`，此时页面看到的应该只有一个一级菜单（路由）和一个二级菜单（路由），但是我们希望最后一个二级路由（菜单）作为一级路由（菜单），因为它满足了上面的 **菜单渲染（一个）**，即使用 `alwaysShowRoot: true` 并希望它生效。

但是很遗憾，直接使用是不会生效的，因为一些逻辑处理问题，而针对这个问题，Admin 提供了另一个配置，在 `src/config/settings` 里的 layoutSettings 下的 `moreRouteChildrenHideInMenuThenOnlyOne` 属性，将其设为 true：

```typescript
const layoutSettings: Partial<Settings> = {
  /**
   * 这是路由和菜单呼应可能产生的问题而需要配置：alwaysShowRoot 为 false 情况（确保您了解路由的配置规则，如果不了解，前往 router/router-config 查看）
   * true：存在多个二级路由，但是只有一个二级路由 hideInMenu 为 false，举例：有 5 个二级路由，但是有 4 个二级路由 hideInMenu: true，则需要开启 true，确保菜单只渲染剩下的路由
   *
   * 为 true 的场景较少见，如果真的遇到，则开启为 true，否则不建议开启，虽然 true 能无需后顾之忧，但是会多重复一次过滤递归，即消耗点性能
   *
   */
  moreRouteChildrenHideInMenuThenOnlyOne: false,
};
```

当然开启这个配置会消耗一点性能，原理就是先过滤出 `hideInMenu: true` 的菜单，再过滤出 `alwaysShowRoot:true` 的菜单，相当于多走了一步过滤出 `alwaysShowRoot:true` 的菜单，所以没遇到这个场景的时候，不推荐设为 true。

> 更多的路由配置请参考 Admin 的路由文件。 

## 路由内置属性

路由内置属性仅限动态路由拥有的功能。

在动态路由加载的时，会根据内置的函数转换，从而自动生成 Admin 需要的一些路由属性来使用。

### meta._fullPath

一个路由的完整路径，在编译阶段自动生成，如三级路由的 `_fullPath` 将是一级路由 + 二级路由 + 三级路由的完整路径。

### meta._dynamic

是否是动态路由，在编译阶段自动生成，用来和静态路由进行区分。

### redirect

该属性可以在路由进行配置，如果没有配置，则 Admin 会自动根据是否存在子路由来生成，如果存在子路由，则自动 redirect 到第一个子路由，以 name 作为 redirect 的目标。

### component

上文讲的 [异步懒加载](#异步懒加载) 中，字符串形式和 Path 会自动加上 `/src/views` 前缀和 `.vue` 后缀。

## 重置路由

重置路由功能只针对动态路由。

> 常用场景

用户切换角色或退出登录时需调用重置路由功能，将路由和菜单恢复到初始化状态。

```typescript
import { resetRouter } from "@/router";

resetRouter();
```

## IFrame 路由

Admin 支持将其他系统内嵌在 Admin 里，这是因为 Admin 经历过一次 Portal 门户的使用场景，所以 Admin 封装了 IFrame 组件，支持 IFrame 页面、IFrame 缓存等功能。

### 如何使用？

只需要在写路由的时候在 meta 传入 frameSrc 即可：

```json
{
  path: "vue2-template-iframe",
  name: "IFrameVue2Template",
  meta: {
    title: "Vue2 Template IFrame",
    icon: "HotWater",
    frameSrc: "http://172.16.49.41/vue2-template"
  }
}
```

此时点击左侧菜单的该菜单，则会打开这个嵌入的 frameSrc 网页。

### IFrame 加载

IFrame 在加载的时候，可以使用 Loading 开启动画，该配置默认为 true，所以无需设置，如果要关闭，则：

```json
{
  path: "vue2-template-iframe",
  name: "IFrameVue2Template",
  meta: {
    title: "Vue2 Template IFrame",
    icon: "HotWater",
    frameSrc: "http://172.16.49.41/vue2-template",
    frameLoading: true
  }
}
```

### IFrame 缓存

IFrame 可以开启缓存，这样打开过的 IFrame 页面就能和正常路由一样进行缓存，下次访问时不需要重新渲染页面。

通过 frameKeepAlive 来开启缓存，默认关闭：

```json
{
  path: "vue2-template-iframe",
  name: "IFrameVue2Template",
  meta: {
    title: "Vue2 Template IFrame",
    icon: "HotWater",
    frameSrc: "http://172.16.49.41/vue2-template",
    frameKeepAlive: true
  }
}
```

::: danger

IFrame 缓存目前是记录已打开的页面，当打开多个页面时，只有激活的页面显示，其他页面隐藏：`display: none`，即缓存 IFrame 页面的 DOM，这样打开非常多的 IFrame 可能引起卡顿。

:::

### IFrame 新标签打开

有时候希望 IFrame 可以以新窗口打开方式打开，则使用 frameOpen 属性，默认不以新窗口打开方式打开:

```json
{
  path: "vue2-template-iframe",
  name: "IFrameVue2Template",
  meta: {
    title: "Vue2 Template IFrame",
    icon: "HotWater",
    frameSrc: "http://172.16.49.41/vue2-template",
    frameOpen: true
  }
}
```

使用场景一般是后端返回的路由，可能部分 IFrame 是内嵌，部分是新窗口打开方式打开。

### 代码

IFrame 的代码在 `src/layout/components/FrameLayout` 下。

## 外链路由

除了 IFrame 嵌入来打开外部链接，还可以直接打开新的窗口来跳转该链接。

只需要在路由的配置中，给 path 填写带有 `http` 或者 `https` 的链接，就可以跳转。

```json
{
	path: "https://github.com/Kele-Bingtang/kbt-vue3-admin",
	name: "Github",
	meta: {
		title: "Github",
		icon: "svg-github",
	},
},
```

## 路由权限

路由内置两个权限：roles 和 auths：

- roles：角色，用来控制权限路由
- auths：认证，用来控制路由产生的页面权限，即页面上是否有增删改查等按钮

案例：只有 admin 的角色才能访问该路由

```json {7}
{
  path: "role",
  component: () => import("@/views/permission/rolePermission.vue"),
  name: "RolePermission",
  meta: {
    title: "权限编辑",
    roles: ["admin"],
    icon: "StarFilled",
  }
}
```

案例：路由只有增删的按钮权限，没有删除权限：

```json
{
  path: "switch",
  component: () => import("@/views/permission/switchPermission.vue"),
  name: "SwitchPermission",
  meta: {
    title: "权限切换",
    auths: ["btn_add", "btn_edit"],
    icon: "StarFilled",
  },
}
```

详细的内容请看：[进阶 - 权限](/advanced-auth.html)。