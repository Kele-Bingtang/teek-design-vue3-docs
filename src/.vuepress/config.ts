import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Kbt Admin Docs",
      description: "Kbt Admin 使用文档",
    },
    "/en/": {
      lang: "en-US",
      title: "Kbt Admin Docs",
      description: "Kbt Admin Usage Document",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
