---
title: 指南 - Vite 配置
shortTitle: Vite 配置
date: 2023-07-31 23:53:12
order: 14
category:
  - 指南
tag: 
  - 指南
---

[[TOC]]



## 介绍

下面介绍下 Admin 的 `vite.config.ts` 的内容。

`vite.config.ts` 是 Vite 构建、打包的核心配置文件。

[Vite 官方文档](https://cn.vitejs.dev/)

## 环境变量

Admin 在 `vite.config.ts` 文件里封装了一个文件来获取环境变量，文件路径为 `/build/getEnv`。

环境变量指的是项目根目录下 `.env` 或者 `.env.xxx` 文件里的变量。

假设 `.env.development` 文件的环境变量为：

```sh
# 本地环境接口地址
VITE_API_URL = '/api'

# 静态文件获取根路径
VITE_PUBLIC_PATH = "/"

# 线上环境路由历史模式（Hash 模式传 "hash"、HTML5 模式传 "h5"、Hash 模式带 base 参数传 "hash, base 参数"、HTML5 模式带 base 参数传 "h5, base 参数"），如果填错或者不填，则默认 h5
VITE_ROUTER_MODE = "h5"
```

你可以这样在 `vite.config.ts` 获取环境变量：

```typescript
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv, type ConfigEnv, type UserConfig } from "vite";
import { wrapperEnv } from "./build/getEnv";

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  console.log("静态文件根路径：" + env.VITE_PUBLIC_PATH);
}
```

Admin 在 `vite.config.ts` 文件里通过这样的方式让项目的静态文件 base 路径根据不同的环境变量 `VITE_PUBLIC_PATH` 来进行配置。

## @

在 Admin 项目开发中，`@` 是一个常用的符号，它代表 `src`，如 `@/main.ts` 代表 `src/main.ts`。

当 **不同目录** 的文件之间内容引用的时候，Admin 建议使用 `@` 来 import 引用。

```typescript
import { useSettingsStore } from "@/stores/settings";
import MainContent from "@/layout/components/MainContent/index.vue";
import Header from "@/layout/components/Header/index.vue";
import { usePermissionStore } from "@/stores/permission";
import { useLayout } from "@/hooks/useLayout";
import settings from "@/config/settings";
import CommonIcon from "@/layout/components/CommonIcon/index.vue";
import Menu from "@/layout/components/Menu/index.vue";
import Tooltip from "@/components/Tooltip/index.vue";
import { HOME_URL } from "@/router/routesConfig";
```

当文件目录层级深的时候，通过相对路径引用看起来非常不优雅，所以此时使用 `@` 可以让代码 import 看起来非常简洁。

当然，如果文件引用的层级不深，完全可以用相对路径来引用：

```typescript
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutClassic from "./LayoutClassic/index.vue";
import LayoutTransverse from "./LayoutTransverse/index.vue";
import LayoutColumns from "./LayoutColumns/index.vue";
import LayoutMixins from "./LayoutMixins/index.vue";
import LayoutSubsystem from "./LayoutSubsystem/index.vue";
```

那么为什么 `@` 符号可以代表 `src` 呢？是 Vue 项目自带还是需要配置呢？

`@` 符号是需要配置的，至于为什么叫做 `@`，这是大家约定成俗的规范。

在 `vite.config.ts` 文件里，你可以看到这样一段代码：

```typescript
import { fileURLToPath, URL } from "node:url";

resolve: {
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url))
  },
},
```

这就是 `@` 的配置，如果大家想要有更多的自定义符号映射一个路径，则参考 `@` 来添加，如添加 `$` 代表 `src/components`：

```typescript
import { fileURLToPath, URL } from "node:url";

resolve: {
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
    "$": fileURLToPath(new URL("./src/components", import.meta.url))
  },
},
```

## plugins 插件

你可以在 `vite.config.ts` 文件里看到这段代码：

```typescript
import { getPluginsList } from "./build/plugins";

plugins: getPluginsList(command, viteEnv),
```

Vite 支持很多的插件，为了不让 `vite.config.ts` 文件内容太多，因此 Admin 将插件单独抽出来放到 `./build/plugins.ts` 文件里。

在 `./build/plugins.ts` 文件可以看到，Admin 添加了：

- Vue 支持 jsx、tsx
- Eslint 相关插件
- setup 支持组件命名
- Vue API 自动引入
- svg 图标使用
- 静态资源打包压缩
- 打包分析

```typescript
return [
  vue(),
  vueJsx(),
  eslintPlugin(), // EsLint 报错信息显示在浏览器界面上
  VueSetupExtend(), // script setup 标签支持 name 命名组件
  AutoImport({
    imports: ["vue", "vue-router"], // 自动引入 vue 的 ref、toRefs、onMounted 等，无需在页面中再次引入
    dts: "src/auto-import.d.ts", // 生成在 src 路径下名为 auto-import.d.ts 的声明文件
    eslintrc: {
      enabled: false, // 改为 true 用于生成 eslint 配置。生成后改回 false，避免重复生成消耗
    },
  }),
  // 使用 svg 图标
  createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), "src/assets/icons")],
    symbolId: "icon-[dir]-[name]",
  }),
  viteEnv.VITE_BUILD_GZIP && configCompressPlugin(viteEnv.VITE_COMPRESSION),
  // 打包分析
  (lifecycle === "report" || viteEnv.VITE_REPORT) &&
  visualizer({ open: true, brotliSize: true, filename: "report.html" }),
];
```

### 预构建

请看 [预构建](/guide/advanced/advanced-pre-build.html)。

## proxy 代理

本地开发的时候，涉及请求，会发生跨域问题，那么最好的一个方式就是代理。

Vite 内置代理模式，所以 Admin 在 `vite.config.ts` 里写了一个代理 Demo：

```json {10}
server: {
  // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
  host: "0.0.0.0",
  port: viteEnv.VITE_PORT,
  open: viteEnv.VITE_OPEN,
  cors: true,
  // 跨域代理配置
  proxy: {
    "/api": {
      target: "https://youngkbt.cn",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ""),
    },
  }
}
```

只需要修改 target 对应的链接就可以了。

如果本地开发的时候，涉及多个不同服务的接口，则跨域添加多个代理：

```json
server: {
  // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
  host: "0.0.0.0",
  port: viteEnv.VITE_PORT,
  open: viteEnv.VITE_OPEN,
  cors: true,
  // 跨域代理配置
  proxy: {
    "/api": {
      target: "https://youngkbt.cn",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ""),
    },
    "/test": {
      target: "https://youngkbt.cn",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/test/, ""),
    },
  }
}
```

注意 rewrite 是将代理的标识（如上面的 `/api`，`/test`）去掉，否则请求的时候将会携带这些标识。

## css 全局注入

Admin 使用 Vite 的 `css.preprocessorOptions` 将 `src/styles/index.scss` 里的样式全局注册到项目中。

```json
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "@/styles/index.scss";`,
    },
  },
}
```

## 打包

Admin 使用 Vite 自带的打包方式，在打包过程去掉 `console.log` 和 `debugger` 调式代码。

同时对静态资源进行分类打包，如 css 专门放在 css 文件夹下，js 专门放在 js 文件夹下。

```json
// 打包去除 console.log && debugger
esbuild: {
  pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [],
},
build: {
  // esbuild 打包更快，但是不能去除 console.log，terser 打包慢，但能去除 console.log
  minify: "esbuild",
  // 是否生成 map
  sourcemap: false,
  // 消除打包大小超过 500kb 警告
  chunkSizeWarningLimit: 4000,
  rollupOptions: {
    input: {
      index: resolve(__dirname, ".", "index.html"),
    },
    // 静态资源分类打包
    output: {
      chunkFileNames: "static/js/[name]-[hash].js",
      entryFileNames: "static/js/[name]-[hash].js",
      assetFileNames: "static/[ext]/[name]-[hash].[ext]",
    },
  },
}
```

## Admin 信息

Admin 在 `vite.config.ts` 里将 package.json 的部分信息全局注入到项目中：

```typescript
import { defineConfig, loadEnv, type ConfigEnv, type UserConfig } from "vite";
import pkg from "./package.json";

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version }, // package.json 相关信息
  lastBuildTime: getNowDate(), // 打包时间
};

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  return {
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    }
  };
});
```

全局注入到项目的 key 是 `__APP_INFO__`，于是你可以在项目的任意位置这样读取 package.json 的信息：

```typescript
const { lastBuildTime } = __APP_INFO__;

console.log("项目最好 Build 时间：" + lastBuildTime);
```

