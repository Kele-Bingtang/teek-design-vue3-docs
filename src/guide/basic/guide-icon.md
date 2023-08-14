---
title: 指南 - 图标
shortTitle: 图标
date: 2023-08-14 22:52:06
order: 22
category:
  - 指南
tag: 
  - 指南
---

[[TOC]]



## 介绍

图标是文字的隐喻，可以实现视觉引导和功能划分。

### Iconify

Admin 内置 Iconify 图标库组件，Iconify 是一个开源、统一的矢量图标库，市面上流行的图标都被收集到该库里，基本满足 `99%` 的使用场景。

官方链接：

-  [iconify](https://icon-sets.iconify.design/)
-  [icones](https://icones.js.org/)

在 Admin 里，Iconify 的图标支持在线模式和本地模式。

### IconFont

Admin 内置 IconFont [阿里巴巴矢量图标库](https://www.iconfont.cn/) 组件，这是国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。

### SVG

Admin 内置 SVG 组件，SVG 是使用 XML 来描述二维图形和绘图程序的语言。

## 使用

Admin 基于 Iconify、IconFont、SVG 三种图标类型进行了封装，提供组件、函数两种渲染形式，适应各个场景。

封装 Icon 的相关文件都在 `src/components/icon` 下。

封装的组件叫做 `Icon`，已经全局注入到 Admin 里，全局注入的位置在 `src/main.ts` 里。

封装的函数是 `useIcon`。

因为封装的 Icon 组件和 useIcon 函数具有通用性，因此需要传入特定的前缀来区分不同类型的图标，IconFont 的前缀是 `IF-`，SVG 的前缀是 `SVG-`，Iconify 不需要前缀，直接传入具体的内容即可。

### IconFont

IconFont 可以去 [阿里巴巴矢量图标库](https://www.iconfont.cn/) 进行收集和下载，下载后建议将其解压到 `src/assets` 下。当然你也可以解压到项目的任意位置，只需要在使用 IconFont 的时候引用下载的 js、css 文件。

> 那么如何使用呢？

假设 IconFont 有一个图标名：`icon-dagouyouquan`。

比如我有个 `Demo.vue` 组件，然后我希望使用 IconFont 图标，那么我在该组件下引入 IconFont  的文件，并使用 Icon 组件或者 useIcon 函数引用图标名。

```vue
<template>
  <span>使用 useIcon 函数</span>
  <component :is="useIcon('IF-icon-dagouyouquan')"></component>

  <span>使用 Icon 组件</span>
  <Icon icon="IF-icon-dagouyouquan"></Icon>
</template>

<script setup lang="ts" name="IconDemo">
import { useIcon } from "@/components/Icon/useIcon";

import "@/assets/iconfont/iconfont.js";
import "@/assets/iconfont/iconfont.css";
</script>
```

::: tip

因为封装的 Icon 组件和 useIcon 函数具有通用性，因此需要传入特定的前缀来区分不同类型的图标，而 IconFont 的前缀是 `IF-`。

:::

如果你觉得使用 IconFont  时候都需要引用文件：

```typescript
import "@/assets/iconfont/iconfont.js";
import "@/assets/iconfont/iconfont.css";
```

那么可以将这两段代码放到 `src/main.ts` 文件里来进行全局注册，这样就不需要再额外引入这两个文件。

### SVG

SVG 图标都以 `.svg` 结尾，并且 SVG 图标存放的目录必须是一个固定的目录：`src/assets/svg` 下，因为 Admin 需要将所以的本地 SVG 图标进行扫描并注册，因此扫描的目录必须是一个固定的目录，如果你想修改 SVG 存放的目录，则去 `build/plugin.ts` 文件里修改：

```typescript {3}
// 使用 svg 图标
createSvgIconsPlugin({
  iconDirs: [resolve(process.cwd(), "src/assets/svg")],
  symbolId: "icon-[dir]-[name]",
}),
```

`src/assets/svg` 就是需要修改 SVG 存放的位置。

> 那么如何使用呢？

SVG 的使用方式非常简单，假设 `src/assets/svg` 下有一个 `bug.svg` 图标，那么我希望引用它：

```vue
<template>
  <span>使用 useIcon 函数</span>
  <component :is="useIcon('SVG-bug')"></component>
	<!-- 或者 -->
  <component :is="useIcon('', { name: 'bug' })"></component>

  <span>使用 Icon 组件</span>
  <Icon icon="SVG-bug"></Icon>
	<!-- 或者 -->
	<Icon name="bug"></Icon>
</template>

<script setup lang="ts" name="IconDemo">
import { useIcon } from "@/components/Icon/useIcon";
</script>
```

上面的代码可以看出，无论是使用 useIcon 函数还是 Icon 组件，都有两种形式传入，且传入的名字必须是 SVG 图标的名字，至于 icon 属性前缀为 `SVG-` 是告诉 useIcon 函数或 Icon 组件，这是 SVG 图标，而不是 IconFont 或者 Iconify。

### Iconify

#### 在线图标

在线图标是指可以通过公网访问的图标。

如想引用 Element Plus 的 `AddLocation`，就可以这些写：

```vue
<template>
  <span>使用 useIcon 函数</span>
  <component :is="useIcon('ep:add-location')"></component>

  <span>使用 Icon 组件</span>
  <Icon icon="ep:add-location"></Icon>
</template>

<script setup lang="ts" name="IconDemo">
import { useIcon } from "@/components/Icon/useIcon";
</script>
```

`ep:add-location` 就是 Element Plus AddLocation 的在线图标，那么我们怎么知道这些在线图标的字符串是什么样子的呢？

我们先通过任意一个链接进去：

-  [iconify](https://icon-sets.iconify.design/)
-  [icones](https://icones.js.org/)

然后随便点开一个图标库，接着随便点击一个图标，往下看我们就可以看到该图标的在线名字，在线名字一般都是 **图标库名 + `:` + 图标名** 作为在线图标名。

#### 本地图标

Iconify 支持本地图标，那么本地图标从哪里下载呢？

我们可以从 NPM 仓库进行下载，那么下载的依赖名叫什么呢？

Iconify 的图标依赖都有固定的规范：`@iconify/icons-xxx` 或者 `@iconify-icons/xxx`。

xxx 就是不同的 **图标库名**，在哪里看呢？

上面说过，随便点开一个图标库，接着随便点击一个图标，往下看我们就可以看到该图标的在线名字，在线名字一般都是 **图标库名 + `:` + 图标名** 作为在线图标名。

那么这个图标库名就是 xxx。

比如 `ant-design` 的图标库名在 Iconify 叫做 `ant-design`，因此我们下载本地图标：

```sh
# yarn
yarn add @iconify/icons-ant-design
# 或
yarn add @iconify-icons/ant-design

# pnpm
pnpm add @iconify/icons-ant-design
# 或
pnpm add @iconify-icons/ant-design
```

`@iconify/icons-xxx` 或者 `@iconify-icons/xxx` 都可以，这是官方都在维护的两种类型的依赖。

引用：

```vue
<template>
  <span>使用 useIcon 函数</span>
  <component :is="useIcon(UpOutlined)"></component>

  <span>使用 Icon 组件</span>
  <Icon :icon="Upload"></Icon>
</template>

<script setup lang="ts" name="IconDemo">
import { useIcon } from "@/components/Icon/useIcon";
import UpOutlined from "@iconify-icons/ant-design/up-outlined";
import Upload from "@iconify-icons/ant-design/upload";
</script>
```

我们如何知道要引入哪些图标呢？

这需要大家去官网寻找对应的图标，当找到想要的图标，点击该图标，就可以看到图标名，然后在 Admin 引入图标名就可以了：

```typescript
import XxYy from "@iconify-icons/ant-design/xx-yy";
```

## 类型

上面只是演示了简单的使用 Icon 组件和 useIcon 函数，那么如何控制图标的颜色、大小呢？

如 Icon 组件组件，我们除了可以传入 `icon` 属性，也可以传入如下属性：

```typescript
import type { CSSProperties } from "vue";

export interface IconType {
  inline?: boolean;
  width?: string | number;
  height?: string | number;
  horizontalFlip?: boolean;
  verticalFlip?: boolean;
  flip?: string;
  rotate?: number | string;
  color?: string;
  horizontalAlign?: boolean;
  verticalAlign?: boolean;
  align?: string;
  onLoad?: Function;
  includes?: Function;
  name?: string;
  prefix?: string;

  //  all icon
  style?: CSSProperties;
}
```

如：

```vue
<Icon icon="IF-icon-dagouyouquan" width="200px" height="200px"></Icon>
<!-- 或者 -->
<Icon icon="IF-icon-dagouyouquan" :attrs="{ width: '200px', height: '200px'}"></Icon>
```

而 useIcon 函数，可以在第二个参数传入 IconType 的属性：

```vue
<component :is="useIcon('IF-icon-dagouyouquan', { width: '200px', height: '200px'})"></component>
```

## 原理

Admin 封装了 Icon 组件和 useIcon 函数来满足不同的使用场景，那么这两种形式的原理是什么呢？

以 Icon 组件为例子，我们可以点进去看源码，可以 Icon 组件的引用：

```typescript
import SvgIcon from "./components/vue/SvgIcon.vue";
import FontIcon from "./components/vue/FontIcon.vue";
import IconifyOffline from "./components/vue/IconifyOffline.vue";
import IconifyOnline from "./components/vue/IconifyOnline.vue";
```

于是我们可以知道，Icon 组件就类似于一个集成入口，它内置了：

- SVG 组件：SvgIcon
- IconFont 组件：FontIcon
- 在线 Iconify 组件：IconifyOnline
- 本地 Iconify 组件：IconifyOffline

Icon 通过传入的 `icon` 属性来进行判断，通过前缀规则来判断属于哪一类图标。

同理 useIcon 函数根据传入的参数来区分渲染哪一类图标。

因此，如果我们不使用 Icon 组件或 useIcon 函数，我们也可以单独引入对应的组件。

这些组件同样支持 IconType 的传参。

### IconFont

引用上面的 Demo：

```vue
<template>
  <span>使用 useIcon 函数</span>
  <component :is="useIcon('IF-icon-dagouyouquan')"></component>

  <span>使用 Icon 组件</span>
  <Icon icon="IF-icon-dagouyouquan"></Icon>
</template>

<script setup lang="ts" name="IconDemo">
import { useIcon } from "@/components/Icon/useIcon";

import "@/assets/iconfont/iconfont.js";
import "@/assets/iconfont/iconfont.css";
</script>
```

我们可以使用 FontIcon 组件：

```vue
<template>
  <FontIcon icon="icon-dagouyouquan"></FontIcon>
</template>

<script setup lang="ts" name="IconDemo">
import FontIcon from "@/components/Icon/components/vue/FontIcon.vue";

import "@/assets/iconfont/iconfont.js";
import "@/assets/iconfont/iconfont.css";
</script>
```

### SVG

引用上面的 Demo：

```vue
<template>
  <span>使用 useIcon 函数</span>
  <component :is="useIcon('SVG-bug')"></component>
	<!-- 或者 -->
  <component :is="useIcon('', { name: 'bug' })"></component>

  <span>使用 Icon 组件</span>
  <Icon icon="SVG-bug"></Icon>
	<!-- 或者 -->
	<Icon name="bug"></Icon>
</template>

<script setup lang="ts" name="IconDemo">
import { useIcon } from "@/components/Icon/useIcon";
</script>
```

我们可以使用 SvgIcon 组件：

```vue
<template>
  <SvgIcon name="bug"></SvgIcon>
</template>

<script setup lang="ts" name="IconDemo">
import SvgIcon from "@/components/Icon/components/vue/SvgIcon.vue";
</script>
```

### Iconify

#### 在线图标

引用上面的 Demo：

```vue
<template>
  <span>使用 useIcon 函数</span>
  <component :is="useIcon('ep:add-location')"></component>

  <span>使用 Icon 组件</span>
  <Icon icon="ep:add-location"></Icon>
</template>

<script setup lang="ts" name="IconDemo">
import { useIcon } from "@/components/Icon/useIcon";
</script>
```

我们可以使用 IconifyOnline 组件：

```vue
<template>
  <IconifyOnline icon="ep:add-location"></IconifyOnline>
</template>

<script setup lang="ts" name="IconDemo">
import IconifyOnline from "@/components/Icon/components/vue/IconifyOnline.vue";
</script>
```

#### 本地图标

引用上面的 Demo：

```vue
<template>
  <span>使用 useIcon 函数</span>
  <component :is="useIcon(UpOutlined)"></component>

  <span>使用 Icon 组件</span>
  <Icon :icon="Upload"></Icon>
</template>

<script setup lang="ts" name="IconDemo">
import { useIcon } from "@/components/Icon/useIcon";
import UpOutlined from "@iconify-icons/ant-design/up-outlined";
import Upload from "@iconify-icons/ant-design/upload";
</script>
```

我们可以使用 IconifyOffline 组件：

```vue
<template>
  <IconifyOffline icon="UpOutlined"></IconifyOffline>

	<IconifyOffline icon="Upload"></IconifyOffline>
</template>

<script setup lang="ts" name="IconDemo">
import IconifyOffline from "@/components/Icon/components/vue/IconifyOffline.vue";
import UpOutlined from "@iconify-icons/ant-design/up-outlined";
import Upload from "@iconify-icons/ant-design/upload";
</script>
```

### 组件全局引入

如果你使用 Admin 只使用一种组件来渲染图标，并且不想使用 Icon 组件或者 useIcon 函数，那么可以在 `src/main.ts` 将 Icon 组件取消全局注册，然后将自己想要的图标组件进行全局注册。

## VSCode 图标插件

使用 Iconify 并且开发 IDE 是 VSCode，那么可以安装 `antfu.iconify` 插件，该插件可以在引用 Iconify 的图标时，直接在代码里显示该图标。
