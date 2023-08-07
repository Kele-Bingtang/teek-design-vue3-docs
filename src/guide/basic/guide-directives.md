---
title: 指南 - 指令
shortTitle: 指令
date: 2023-07-31 00:09:42
order: 20
category:
  - 指南
tag: 
  - 指南
---

[[TOC]]



## 介绍

Admin 内置一些通用的自定义指令，指令在 `src/directives` 目录下。

- v-copy：复制某个值至剪贴板
- v-auth：认证权限
- v-role：角色权限
- v-waves：常用于按钮使用，点击按钮时触发波纹效果
- v-debounce：按钮防抖指令
- v-draggable：拖拽指令，可在父元素区域任意拖拽元素
- v-longpress：长按指令，长按时触发事件
- v-throttle：防止按钮在短时间内被多次点击，使用节流函数限制规定时间内只能点击一次
- v-waterMarker：给整个页面添加背景水印

这些指令都有对应的 Demo 组件使用，在 `src/views/directives` 目录下可以看到所有的自定义指令的使用 Demo。

## 如何注册？

如果你自己写一个指令，并想注册到 Admin，步骤非常简单：

1. 在 `src/directives/modules` 创建自己的指令文件或文件夹，并写好自己的指令代码

2. 在 `src/directives/index.ts` 引入自己的指令并注册到 Admin，即在该文件里

   ```typescript
   import xxx from "./modules/xxx"
   
   const directivesList: any = {
     // 其他指令
     xxx
   };
   ```

这样你的指令就全局注册到 Admin 里。

如果你不想全局注册到 Admin 里，则按需在组件里 import 引入即可使用：

```vue
<template>
	<div v-xxx></div>
</template>

<script setup lang="ts" name="Xxx">
import xxx from "@/directives/modules/xxx";
</script>
```

