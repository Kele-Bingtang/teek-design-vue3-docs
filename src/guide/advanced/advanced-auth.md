---
title: 指南 - 权限管控
shortTitle: 权限管控
date: 2023-07-21 00:42:31
order: 8
category:
  - 指南
tag: 
  - 指南
---

[[TOC]]



## 介绍

Admin 基于 `RBAC` 内置权限管控，`RBAC`（Role Based Access Control）权限指的是基于角色的访问控制。

权限管控分为路由权限和页面权限，也成为粗粒度权限和细粒度权限。

## 角色权限

角色权限是一个数组，支持多个角色进行权限管控。

### 路由角色权限

在 [指南 - 路由](/guide/basic/guide-route.html) 中介绍过路由的配置，而路由角色权限也在其中的配置项里，即 `meta.roles`。

```json {7}
{
  path: "role",
  component: () => import("@/views/permission/rolePermission.vue"),
  name: "RolePermission",
  meta: {
    title: "权限编辑",
    roles: ["admin"],
    icon: "StarFilled",
  },
},
```

当在路由配置了 `meta.roles`，则告诉 Admin 这是一个角色权限的路由，Admin 会在加载路由之前，通过当前用户的角色和路由配置的 `meta.roles` 进行对比筛选，如果当前路由的 `meta.roles` 不满足用户的角色，则拒绝加载路由。

> 当前用户的角色在哪呢？

存储在 Pinia 里，在 `src/stores/user.ts` 文件，有一个 roles 属性，这就是存储当前用户的角色，而该文件有一个 `getUserInfo` 函数，该函数在第一次进入 Admin 时被触发，所以当前用户的信息就可以在这个函数里进行获取，包括角色，拿到角色后，在调用 `setRoles(用户角色)` 进行复制。

而拿到 roles 后，则后续进行路由的加载时，再根据路由的 `meta.roles` 进行对比筛选，从而进行路由的权限管控。

这些判断操作都是 Admin 内置的功能，您只需配置路由的 `meta.roles`，并在 `src/stores/user.ts` 文件的 `getUserInfo` 函数里获取用户的 roles，再通过 `setRoles(用户角色)` 进行赋值就可以了。

### 页面角色权限

除了上面的用角色权限来管理路由，您也可以用角色权限来管理页面内的任何操作，如按钮级别。

使用页面角色权限，您不需要在路由配置 `meta.roles`，只需要在 `src/stores/user.ts` 文件的 `getUserInfo` 函数里获取用户的 roles，再通过 `setRoles(用户角色)` 进行赋值，最后通过内置的 **三大形式** 在组件里进行判断即可。

如用户在 `src/stores/user.ts` 的 roles 是 `["Admin"]`。

#### 组件形式

Role 组件已经进行全局注册，无需引入，可以在 `src/main.ts` 查看全局注册的代码。

```vue
<template>
  <Role :value="['admin']">
    <p>只有 Admin <p>
  </Role>
</template>
```

#### 函数形式

需要引入 `hasRole` 函数，该函数封装在 hooks 的 usePermission 里。

```vue
<template>
  <p v-if="hasRole(['admin'])">只有 Admin <p>
</template>

<script>
  import { usePermission } from "@/hooks/usePermission";
  const { hasRole } = usePermission();
</script>
```

#### 自定义指令权限

自定义指令已经全局注册到 Admin，可以直接使用。

```vue
<template>
  <p v-role="['admin']">只有 Admin <p>
</template>
```

缺点：指令方式不能动态修改权限，在页面渲染完成后，就固定了。

而组件形式和函数形式可以通过传入一个响应式变量，然后通过修改该变量来实现动态修改权限。

### 场景

角色权限使用场景：

- 页面是否可见，可进入
- 按钮是否可见、可编辑
- 部分内容是否可见、可编辑
- ......

## 认证权限

认证权限是一个数组，支持多个认证进行权限管控。

### 页面认证权限

在 [指南 - 路由](/guide/basic/guide-route.html) 中介绍过路由的配置，而认证权限也在其中的配置项里，即 `meta.auths`。

```json {7}
{
  path: "role",
  component: () => import("@/views/permission/rolePermission.vue"),
  name: "RolePermission",
  meta: {
    title: "权限编辑",
    auths: ["btn_add"],
    icon: "StarFilled",
  },
},
```

这是一个路由内的认证权限配置。

和角色权限类似，认证权限的页面认证权限和角色权限的页面角色权限功能基本一样，但是不同的是认证权限必须依赖与路由的 `meta.auths`，它没有 Piana 的存储，而角色有。因为认证权限的出现纯粹是为页面的内容管控进行设计，它的粒度更为细致。

#### 组件形式

Auth 组件已经进行全局注册，无需引入，可以在 `src/main.ts` 查看全局注册的代码。

```vue
<template>
  <Auth value="btn_add">
    <el-button type="success"> 拥有 'btn_add' 权限可见</el-button>
  </Auth>
</template>
```

#### 函数形式

需要引入 `hasRole` 函数，该函数封装在 hooks 的 usePermission 里。

```vue
<template>
	<el-button type="success" :disabled="hasAuth('btn_add')"> 拥有 'btn_add' 权限可编辑</el-button>
</template>

<script>
  import { usePermission } from "@/hooks/usePermission";
  const { hasAuth } = usePermission();
</script>
```

#### 自定义指令权限

自定义指令已经全局注册到 Admin，可以直接使用。

```vue
<template>
	<el-button type="success" v-auth="['btn_add']"> 拥有 'btn_add' 权限可见</el-button>
</template>
```

缺点：指令方式不能动态修改权限，在页面渲染完成后，就固定了。

而组件形式和函数形式可以通过传入一个响应式变量，然后通过修改该变量来实现动态修改权限。

### 场景

页面认证权限使用场景：

- 按钮是否可见、可编辑
- 部分内容是否可见、可编辑
- ......

## 官方形式

除了上面 Admin 内置的三大形式来判断角色权限或者认证权限，也可以使用官方形式：

```typescript
const route = useRoute();

// 获取角色权限
route.meta.roles
// 获取认证权限
route.meta.auths
```



## 角色和认证区别

- 角色权限是一个 **粗粒度** 的权限管控，一般用于路由、菜单的权限管控（是否可进入）
- 认证权限是一个 **细粒度** 的权限管控，一般用于页面内的内容、按钮等 DOM 的权限管控（按钮是否可见、可编辑，部分内容是否可见）

认证权限提供了组件、函数、指令三大形式，其目的就是管控页面内的 DOM 元素。

当然角色权限也提供了组件、函数、指令三大形式，同样支持管控页面内的 DOM 元素，但是最初的角色权限仅仅是用于路由、菜单的权限管控，因为部分使用场景既要角色权限管控路由、菜单，也要管控页面内的 DOM 元素，所以就设计了和认证权限一样的组件、函数、指令三大形式，这样可以减少额外配置认证权限的重复性。

虽然角色认证功能涵盖了认证权限的场景，但是如果对权限这一块的设计非常精细，则建议分工明确，角色管理页面本身的权限，认证管理页面内容的权限，这样就不因为纯粹使用角色管控两块从而导致设计复杂，耦合性高。

当然如果是小型项目，则可以用角色来充当所有权限管控的基石。

## 数据权限

Admin 暂时不支持针对到某行数据的权限管控，这是一种更细粒度的权限管控，这往往是后台来进行管控。

如果前端要管控数据权限，则依然可以用认证权限来管控，不过可控性较低、稳定性较低、配置复杂度较高，根据项目的复杂度来决定。