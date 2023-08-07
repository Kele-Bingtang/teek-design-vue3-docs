import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "E:/展示区/文档/kbt-admin-docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
