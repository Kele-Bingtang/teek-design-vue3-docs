import Teek from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/teek-layout-provider.vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import Tip from "./components/tip.vue";

import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css"; // 移动端代码块样式优化
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css"; // 侧边栏优化
import "vitepress-theme-teek/theme-chalk/tk-nav.css"; // 导航栏优化
import "vitepress-theme-teek/theme-chalk/tk-aside.css"; // 右侧目栏录文字悬停和激活样式
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css"; // 一级标题渐变色
import "vitepress-theme-teek/theme-chalk/tk-table.css"; // 表格样式调整，去掉单元格之间的线条
import "vitepress-theme-teek/theme-chalk/tk-mark.css"; // <mark></mark> 样式
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css"; // > 引用块样式
import "vitepress-theme-teek/theme-chalk/tk-index-rainbow.css"; // 首页图片彩虹动画
import "vitepress-theme-teek/theme-chalk/tk-fade-up-animation.css"; // 首次加载的动画效果

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
