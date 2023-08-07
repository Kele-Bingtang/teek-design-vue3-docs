---
title: 指南 - 国际化
shortTitle: 国际化
date: 2023-07-21 00:40:41
order: 4
category:
  - 指南
tag: 
  - 指南
---

[[TOC]]



## 介绍

开发不同地区需要的地域语言，就称为 **国际化**。

Admin 内置了国际化，支持自定义国际化、`element-plus` 国际化。

国际化支持的版本有 [完整版](https://github.com/Kele-Bingtang/kbt-vue3-admin)，[国际化精简版](https://github.com/Kele-Bingtang/kbt-vue3-template)。

非国际化版有 [非国际化精简版](https://github.com/Kele-Bingtang/kbt-vue3-template/tree/no-i18n)。



## 使用

国际化使用非常简单，核心的国际化配置在 `src/languages/modules` 目录下：

- `en-US.ts` 是英文配置文件
- `zh-CN.ts` 是中文配置文件

配置文件是以 `key: value` 的形式，Admin 会根据当前的语言去对应的配置文件，根据 key 获取 value 来渲染到页面上。

### 基本使用

如在 en-US.ts 配置：

```json
_tabsNav: {
  refresh: "Refresh Page",
  close: "Close Current",
  closeOthers: "Close Others",
  closeAll: "Close All",
  more: "More",
  maximize: "Maximize",
}
```

在 zh-CN.ts 配置：

```json
_tabsNav: {
  refresh: "刷新当前标签页",
  closeCurrent: "关闭当前标签页",
  closeLeft: "关闭左侧标签页",
  closeRight: "关闭右侧标签页",
  closeOthers: "关闭其他标签页",
  closeAll: "关闭全部标签页",
  more: "更多",
  maximize: "内容区域最大化",
}
```

#### .vue 文件使用

则可以在组件里的 Template 直接使用 `$t` 函数：

```vue
<template>
<ul>
  <li>{{ $t("_tabsNav.refresh") }}</li>
  <li>{{ $t("_tabsNav.closeCurrent") }}</li>
  <li>{{ $t("_tabsNav.closeLeft") }}</li>
  <li>{{ $t("_tabsNav.closeRight") }} </li>
  <li>{{ $t("_tabsNav.closeOthers") }}</li>
  <li>{{ $t("_tabsNav.closeAll") }}</li>
  </ul>
</template>
```

又或者：

```vue
<template>
<ul>
  <li>{{ t("_tabsNav.refresh") }}</li>
  <li>{{ t("_tabsNav.closeCurrent") }}</li>
  <li>{{ t("_tabsNav.closeLeft") }}</li>
  <li>{{ t("_tabsNav.closeRight") }} </li>
  <li>{{ t("_tabsNav.closeOthers") }}</li>
  <li>{{ t("_tabsNav.closeAll") }}</li>
  </ul>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
```

只关注 `$t` 函数，最终根据不同的语言来渲染不同的 value。

#### .ts 文件使用（非 setup）

提供的 transformI18n 函数：

```vue
<template>
  <p>{{ $t("_tabsNav.refresh") }}</p>
</template>

<script setup lang="ts">
import { transformI18n } from "@/languages";

console.log(transformI18n("_tabsNav.refresh"));
</script>
```

这两种方式的使用场景不同，如果是 setup 函数，则可以使用 `$t` 或者 `transformI18n` 函数，如果是 `.ts` 文件，则只能使用 `transformI18n` 函数。

两种方式如果都匹配不到配置文件的 key，则直接返回传的内容。如 `$t("xxx")` 直接返回 xxx。

### 路由使用

下面讲解国际化和非国际化的简单配置。

#### 路由非国际化

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

#### 路由国际化

路由支持国际化，默认关闭，那么如何开启呢？

> 局部开启

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

> 全局开启

有时候项目是国际化项目，而路由非常多，给每个路由配置 `useI18n: true` 比较麻烦，所以可以在 `src/config/settings` 里的 routerSettings 开启全局国际化：

```typescript
const routerSettings: Partial<Settings> = {
  routeUseI18n: true,
};
```

## ElementPlus 国际化

如果你想修改 ElementPlus 的国际化，内容在 `src/App.vue` 文件下。

```vue
<template>
  <el-config-provider :locale="i18nLocale">
  </el-config-provider>
</template>

<script setup lang="ts" name="App">
import { useLayoutStore } from "./stores/layout";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { getBrowserLang } from "./utils";

const layoutStore = useLayoutStore();

// element 语言配置
const i18nLocale = computed(() => {
  if (layoutStore.language && layoutStore.language === "zh-CN") return zhCn;
  if (layoutStore.language === "en-US") return en;
  return getBrowserLang() === "zh-CN" ? zhCn : en;
});

</script>
```

layoutStore 是 Pinia 状态管理，缓存了浏览器语言。