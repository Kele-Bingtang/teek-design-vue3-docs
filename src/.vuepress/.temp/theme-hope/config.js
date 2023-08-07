import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-shared@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-auto-catalog@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import Slide from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});