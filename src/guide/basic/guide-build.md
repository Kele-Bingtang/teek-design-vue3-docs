---
title: 指南 - 打包
shortTitle: 打包
date: 2023-07-20 01:41:12
order: 16
category:
  - 指南
tag: 
  - 指南
---

[[TOC]]



## 打包命令

### 本地环境打包预览

```sh
yarn preview:build
```

### 测试环境打包

```sh
yarn build:test
```

### 正式环境打包

```sh
yarn build
# or
yarn build:prod
```

### 打包分析

```sh
yarn report
```

## 打包压缩

Admin 内置打包压缩功能，可以对打包后的静态文件进行 `gizp`、`brotli` 压缩，压缩后部署到 `nginx` 将极大提高网页加载速度。

首先在 `.env` 文件提供了 `VITE_BUILD_GZIP` 属性，用来配置是否开启 gzip 压缩。

```sh
# 是否开启 gzip 压缩
VITE_BUILD_GZIP = true
```

然后在 `.env.test` 和 `.env.production` 文件里提供了 `VITE_COMPRESSION` 配置。

压缩支持：

- 压缩时不删除原始文件的配置
- 压缩时删除原始文件的配置

#### 压缩时不删除原始文件的配置

```sh
# 开启 gzip 压缩
VITE_COMPRESSION = "gzip"

# 开启 brotli 压缩
VITE_COMPRESSION = "brotli"

# 同时开启 gzip 与 brotli 压缩
VITE_COMPRESSION = "both"

# 不开启压缩，默认
VITE_COMPRESSION = "none"
```

#### 时删除原始文件的配置

```sh
# 开启 gzip 压缩
VITE_COMPRESSION = "gzip-clear"

# 开启 brotli 压缩
VITE_COMPRESSION = "brotli-clear"

# 同时开启 gzip 与 brotli 压缩
VITE_COMPRESSION = "both-clear"

# 不开启压缩，默认
VITE_COMPRESSION = "none"
```

## 打包内容

Admin 使用 `esbuild` 和 `rollup` 进行构建，同时在 `.env` 文件客针对打包内容进行配置：

```sh
# 是否生成包分析文件
VITE_REPORT = false

# 是否开启 gzip 压缩
VITE_BUILD_GZIP = true

# 是否删除生产环境 console
VITE_DROP_CONSOLE = true
```

同时使用了 `output` 对静态资源进行分类打包，最终得到的打包文件是：

```markdown
dist
├─ static
│  ├─css
│  ├─js
│  ├─png
│  └─svg
│─ favicon.ico
│─ index.html
```

同时 Admin 使用 [postcss](http://postcss.org/) 压缩 css，使用 Autoprefixer 自动添加浏览器前缀。
