import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-shared@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useScriptTag } from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+@vueuse+core@10.2.1_vue@3.3.4/node_modules/@vueuse/core/index.mjs";
import Badge from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
