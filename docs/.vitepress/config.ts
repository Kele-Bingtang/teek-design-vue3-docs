import { defineConfig } from "vitepress";
import { teekConfig } from "./teekConfig";

const description = [
  "Teek Design Vue3 后台管理系统",
  "Teek Design Vue3 是一个基于 Vue3、TypeScript、Vite、Pinia、Element-Plus 搭建的现代 Template 管理系统模板",
].toString();

export default defineConfig({
  extends: teekConfig,
  title: "Teek Design Vue3",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "Teeker Blog | Teek Theme" }],
    ["meta", { property: "og:site_name", content: "Teeker Blog" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "Teek" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    ["meta", { name: "keywords", description }],
  ],
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://vue3-design-docs.teek.top",
    transformItems: items => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig.permalinks;
      items.forEach(item => {
        const permalink = permalinks?.map[item.url];
        if (permalink) permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  themeConfig: {
    logo: "/favicon.ico",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "构建", link: "/structure/" },
      {
        text: "链接",
        items: [
          {
            text: "预览地址",
            link: "http://vue3-design.teek.top/",
          },
          {
            text: "Github 源码",
            link: "https://github.com/Kele-Bingtang/teek-design-vue3",
          },
          {
            text: "Gitee 源码",
            link: "https://gitee.com/kele-bingtang/teek-design-vue3",
          },
          {
            text: "精简版源码",
            link: "https://github.com/Kele-Bingtang/teek-design-vue3-template",
          },
          {
            text: "文档源码",
            link: "https://github.com/Kele-Bingtang/teek-design-vue3-docs",
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Kele-Bingtang/teek-design-vue3-docs",
      },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern: "https://github.com/Kele-Bingtang/teek-design-vue3-docs/edit/master/docs/:path",
    },
  },
});
