export const data = JSON.parse("{\"key\":\"v-b1c790c2\",\"path\":\"/guide/advanced/advanced-pre-build.html\",\"title\":\"指南 - 预构建\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"指南 - 预构建\",\"shortTitle\":\"预构建\",\"date\":\"2023-07-21T00:45:29.000Z\",\"order\":12,\"category\":[\"指南\"],\"tag\":[\"指南\"],\"description\":\"[[TOC]] 介绍 Admin 内置预构建功能，在第一次构建的时候进行缓存，从而加快在下一次构建的时间。 预构建的依赖需要进行配置，Admin 默认只将布局用到的依赖进行缓存，所以开发者自行配置自己的依赖缓存。 在 build/optimize.ts 文件里，include 数组里添加预构建模块，exclude 数组排除与构建模块。 include ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vue3-admin.youngkbt.cn/guide/advanced/advanced-pre-build.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Kbt Admin Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"指南 - 预构建\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"[[TOC]] 介绍 Admin 内置预构建功能，在第一次构建的时候进行缓存，从而加快在下一次构建的时间。 预构建的依赖需要进行配置，Admin 默认只将布局用到的依赖进行缓存，所以开发者自行配置自己的依赖缓存。 在 build/optimize.ts 文件里，include 数组里添加预构建模块，exclude 数组排除与构建模块。 include ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Young Kbt\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"指南\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-07-21T00:45:29.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"指南 - 预构建\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-07-21T00:45:29.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Young Kbt\\\",\\\"url\\\":\\\"https://youngkbt.cn\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":2,\"title\":\"include\",\"slug\":\"include\",\"link\":\"#include\",\"children\":[]},{\"level\":2,\"title\":\"exclude\",\"slug\":\"exclude\",\"link\":\"#exclude\",\"children\":[]}],\"readingTime\":{\"minutes\":1.61,\"words\":484},\"filePathRelative\":\"guide/advanced/advanced-pre-build.md\",\"localizedDate\":\"2023年7月21日\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
