import { defineTeekConfig } from "vitepress-theme-teek/config";

export const teekConfig = defineTeekConfig({
  teekHome: false,
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "bothWidthAdjustable",
    },
  },
  author: { name: "Teeker", link: "https://github.com/Kele-Bingtang/teek-design-vue3-docs" },
  docAnalysis: {
    createTime: "2021-10-19",
  },
  footerInfo: {
    copyright: {
      createYear: 2023,
      suffix: "Teek Design Vue3",
    },
  },
  codeBlock: {
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  articleShare: { enabled: true },
  articleUpdate: { enabled: false },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      titleFormMd: true, // 是否从 index.md 文件获取一级标题作为目录名
      ignoreIndexMd: true, // 不扫描 index.md 作为侧边栏
    },
  },
});
