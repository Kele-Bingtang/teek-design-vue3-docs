import Teek from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/teek-layout-provider.vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import Tip from "./components/tip.vue";

import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css";
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";
import "vitepress-theme-teek/theme-chalk/tk-nav.css";
import "vitepress-theme-teek/theme-chalk/tk-aside.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";
import "vitepress-theme-teek/theme-chalk/tk-table.css";
import "vitepress-theme-teek/theme-chalk/tk-mark.css";
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css";
import "vitepress-theme-teek/theme-chalk/tk-index-rainbow.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css";
import "vitepress-theme-teek/theme-chalk/tk-banner-desc-gradient.css";

import "./styles/code-bg.css";
import "./styles/pro-reset.scss";
import "./styles/var/index.scss";
import "./styles/element-plus/el-ui.scss"; // 重写部分 Element Plus 样式
import "./styles/element-plus/el-light.scss";
import "./styles/element-plus/el-dark.scss";

export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
  enhanceApp({ app }) {
    app.use(ElementPlus, {
      locale: zhCn,
    });

    app.component("Tip", Tip);
  },
};
