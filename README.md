## 介绍

[Teek Design Vue3](https://github.com/Kele-Bingtang/teek-design-vue3) 使用文档。

## 依赖

`ProFormItem` 添加一个 Props 属性，其上有组件 `ProSearch`、`ProForm`、`ProFormDialog`、`ProFormDrawer`、`ProFormSteps` 也要支持该 Props。

尤其是 Props 属性是 boolean 值时且默认为 true，上游组件如果不手动将默认值改为 true，则传递给 `ProFormItem` 组件都是 false，因为 `withDefaults` 默认将 Boolean 值设置为 false。

`ProSearch` 重写了 `ProForm` 组件的 `ProFormItem` 逻辑，所以 `ProFormItem` 改动时，这两个组件也要同步改动。而其他 `ProFormXx` 组件完全依赖于 `ProForm` 组件的逻辑，所以 `ProFormXx` 组件也不需要改动。

## TODO

- ElTree 为自定义 Tree 说明文档
- ProTable Filter 文档
- 表单 width 属性示例说明
- 表单操作 confirm 包类型不匹配
- 表格表单 icon 插槽示例编写
- ProForm 的 width 属性示例
- ProSearch 的 create 和 use 示例
- ProTable 表头 render label 直接取而不是从 column 取
