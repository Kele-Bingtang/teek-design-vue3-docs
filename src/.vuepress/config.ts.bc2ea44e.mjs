// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([]);

// src/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  "/zh/",
  {
    text: "\u6307\u5357",
    icon: "lightbulb",
    prefix: "/zh/01.\u6307\u5357/",
    children: ["02.\u57FA\u7840", "04.\u8FDB\u9636"]
  },
  {
    text: "Kbt Admin Demo",
    icon: "book",
    link: "https://vue3-admin.youngkbt.cn/"
  }
]);

// src/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({});

// src/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/zh/": [
    {
      text: "\u6307\u5357",
      icon: "book",
      prefix: "01.\u6307\u5357/",
      children: "structure"
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  author: {
    name: "Young Kbt",
    url: "https://admin.youngkbt.cn"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/logo.svg",
  repo: "Kele-Bingtang/kbt-vue3-admin",
  docsDir: "src",
  fullscreen: true,
  navTitle: false,
  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar
    },
    "/en/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar
      // footer: 'Default footer',
      // displayFooter: true,
      // metaLocales: {
      //   editLink: 'Edit this page on GitHub',
      // },
    }
  },
  plugins: {
    // You should generate and use your own comment service
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    }
    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Kbt Admin Docs",
      description: "Kbt Admin \u4F7F\u7528\u6587\u6863"
    }
    // "/en/": {
    //   lang: "en-US",
    //   title: "Kbt Admin Docs",
    //   description: "Kbt Admin Usage Document",
    // },
  },
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci96aC50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovXHU1QzU1XHU3OTNBXHU1MzNBL1x1NjU4N1x1Njg2My9rYnQtYWRtaW4tZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxcdTVDNTVcdTc5M0FcdTUzM0FcXFxcXHU2NTg3XHU2ODYzXFxcXGtidC1hZG1pbi1kb2NzXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8lRTUlQjElOTUlRTclQTQlQkElRTUlOEMlQkEvJUU2JTk2JTg3JUU2JUExJUEzL2tidC1hZG1pbi1kb2NzL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBiYXNlOiBcIi9cIixcblxuICBsb2NhbGVzOiB7XG4gICAgXCIvXCI6IHtcbiAgICAgIGxhbmc6IFwiemgtQ05cIixcbiAgICAgIHRpdGxlOiBcIktidCBBZG1pbiBEb2NzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJLYnQgQWRtaW4gXHU0RjdGXHU3NTI4XHU2NTg3XHU2ODYzXCIsXG4gICAgfSxcbiAgICAvLyBcIi9lbi9cIjoge1xuICAgIC8vICAgbGFuZzogXCJlbi1VU1wiLFxuICAgIC8vICAgdGl0bGU6IFwiS2J0IEFkbWluIERvY3NcIixcbiAgICAvLyAgIGRlc2NyaXB0aW9uOiBcIktidCBBZG1pbiBVc2FnZSBEb2N1bWVudFwiLFxuICAgIC8vIH0sXG4gIH0sXG5cbiAgdGhlbWUsXG5cbiAgLy8gRW5hYmxlIGl0IHdpdGggcHdhXG4gIC8vIHNob3VsZFByZWZldGNoOiBmYWxzZSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9cdTVDNTVcdTc5M0FcdTUzM0EvXHU2NTg3XHU2ODYzL2tidC1hZG1pbi1kb2NzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFx1NUM1NVx1NzkzQVx1NTMzQVxcXFxcdTY1ODdcdTY4NjNcXFxca2J0LWFkbWluLWRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovJUU1JUIxJTk1JUU3JUE0JUJBJUU1JThDJUJBLyVFNiU5NiU4NyVFNiVBMSVBMy9rYnQtYWRtaW4tZG9jcy9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtaG9wZSc7XG5pbXBvcnQgeyBlbk5hdmJhciwgemhOYXZiYXIgfSBmcm9tICcuL25hdmJhci9pbmRleC5qcyc7XG5pbXBvcnQgeyBlblNpZGViYXIsIHpoU2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIGhvc3RuYW1lOiAnaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLWRvY3MtZGVtby5uZXRsaWZ5LmFwcCcsXG5cbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogJ1lvdW5nIEtidCcsXG4gICAgdXJsOiAnaHR0cHM6Ly9hZG1pbi55b3VuZ2tidC5jbicsXG4gIH0sXG5cbiAgaWNvbkFzc2V0czogJ2ZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzJyxcblxuICBsb2dvOiAnL2xvZ28uc3ZnJyxcblxuICByZXBvOiAnS2VsZS1CaW5ndGFuZy9rYnQtdnVlMy1hZG1pbicsXG5cbiAgZG9jc0RpcjogJ3NyYycsXG5cbiAgZnVsbHNjcmVlbjogdHJ1ZSxcblxuICBuYXZUaXRsZTogZmFsc2UsXG5cbiAgbG9jYWxlczoge1xuICAgIC8qKlxuICAgICAqIENoaW5lc2UgbG9jYWxlIGNvbmZpZ1xuICAgICAqL1xuICAgICcvJzoge1xuICAgICAgLy8gbmF2YmFyXG4gICAgICBuYXZiYXI6IHpoTmF2YmFyLFxuXG4gICAgICAvLyBzaWRlYmFyXG4gICAgICBzaWRlYmFyOiB6aFNpZGViYXIsXG4gICAgfSxcbiAgICAnL2VuLyc6IHtcbiAgICAgIC8vIG5hdmJhclxuICAgICAgbmF2YmFyOiBlbk5hdmJhcixcblxuICAgICAgLy8gc2lkZWJhclxuICAgICAgc2lkZWJhcjogZW5TaWRlYmFyLFxuXG4gICAgICAvLyBmb290ZXI6ICdEZWZhdWx0IGZvb3RlcicsXG5cbiAgICAgIC8vIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgICAgIC8vIG1ldGFMb2NhbGVzOiB7XG4gICAgICAvLyAgIGVkaXRMaW5rOiAnRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViJyxcbiAgICAgIC8vIH0sXG4gICAgfSxcbiAgfSxcblxuICBwbHVnaW5zOiB7XG4gICAgLy8gWW91IHNob3VsZCBnZW5lcmF0ZSBhbmQgdXNlIHlvdXIgb3duIGNvbW1lbnQgc2VydmljZVxuICAgIC8vIGNvbW1lbnQ6IHtcbiAgICAvLyAgIHByb3ZpZGVyOiBcIkdpc2N1c1wiLFxuICAgIC8vICAgcmVwbzogXCJ2dWVwcmVzcy10aGVtZS1ob3BlL2dpc2N1cy1kaXNjdXNzaW9uc1wiLFxuICAgIC8vICAgcmVwb0lkOiBcIlJfa2dET0dfUHQyQVwiLFxuICAgIC8vICAgY2F0ZWdvcnk6IFwiQW5ub3VuY2VtZW50c1wiLFxuICAgIC8vICAgY2F0ZWdvcnlJZDogXCJESUNfa3dET0dfUHQyTTRDT0Q2OVwiLFxuICAgIC8vIH0sXG5cbiAgICAvLyBBbGwgZmVhdHVyZXMgYXJlIGVuYWJsZWQgZm9yIGRlbW8sIG9ubHkgcHJlc2VydmUgZmVhdHVyZXMgeW91IG5lZWQgaGVyZVxuICAgIG1kRW5oYW5jZToge1xuICAgICAgYWxpZ246IHRydWUsXG4gICAgICBhdHRyczogdHJ1ZSxcbiAgICAgIGNoYXJ0OiB0cnVlLFxuICAgICAgY29kZXRhYnM6IHRydWUsXG4gICAgICBkZW1vOiB0cnVlLFxuICAgICAgZWNoYXJ0czogdHJ1ZSxcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcbiAgICAgIGZsb3djaGFydDogdHJ1ZSxcbiAgICAgIGdmbTogdHJ1ZSxcbiAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IHRydWUsXG4gICAgICBrYXRleDogdHJ1ZSxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBtZXJtYWlkOiB0cnVlLFxuICAgICAgcGxheWdyb3VuZDoge1xuICAgICAgICBwcmVzZXRzOiBbJ3RzJywgJ3Z1ZSddLFxuICAgICAgfSxcbiAgICAgIHByZXNlbnRhdGlvbjogWydoaWdobGlnaHQnLCAnbWF0aCcsICdzZWFyY2gnLCAnbm90ZXMnLCAnem9vbSddLFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogJ1JlY29tbWVuZGVkJyxcbiAgICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YWcgPT09ICdlbScpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnQmFkZ2UnLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6ICd0aXAnIH0sXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1JlY29tbWVuZGVkJyxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHRhYnM6IHRydWUsXG4gICAgICB2UHJlOiB0cnVlLFxuICAgICAgdnVlUGxheWdyb3VuZDogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLy8gdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgcHdhXG4gICAgLy8gcHdhOiB7XG4gICAgLy8gICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgIC8vICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgIC8vICAgY2FjaGVQaWM6IHRydWUsXG4gICAgLy8gICBhcHBlbmRCYXNlOiB0cnVlLFxuICAgIC8vICAgYXBwbGU6IHtcbiAgICAvLyAgICAgaWNvbjogXCIvYXNzZXRzL2ljb24vYXBwbGUtaWNvbi0xNTIucG5nXCIsXG4gICAgLy8gICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbXNUaWxlOiB7XG4gICAgLy8gICAgIGltYWdlOiBcIi9hc3NldHMvaWNvbi9tcy1pY29uLTE0NC5wbmdcIixcbiAgICAvLyAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1hbmlmZXN0OiB7XG4gICAgLy8gICAgIGljb25zOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgICAgc2hvcnRjdXRzOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHVybDogXCIvZGVtby9cIixcbiAgICAvLyAgICAgICAgIGljb25zOiBbXG4gICAgLy8gICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2d1aWRlLW1hc2thYmxlLnBuZ1wiLFxuICAgIC8vICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9cdTVDNTVcdTc5M0FcdTUzM0EvXHU2NTg3XHU2ODYzL2tidC1hZG1pbi1kb2NzL3NyYy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxcdTVDNTVcdTc5M0FcdTUzM0FcXFxcXHU2NTg3XHU2ODYzXFxcXGtidC1hZG1pbi1kb2NzXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyXFxcXGVuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8lRTUlQjElOTUlRTclQTQlQkElRTUlOEMlQkEvJUU2JTk2JTg3JUU2JUExJUEzL2tidC1hZG1pbi1kb2NzL3NyYy8udnVlcHJlc3MvbmF2YmFyL2VuLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtaG9wZSc7XG5cbmV4cG9ydCBjb25zdCBlbk5hdmJhciA9IG5hdmJhcihbXSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L1x1NUM1NVx1NzkzQVx1NTMzQS9cdTY1ODdcdTY4NjMva2J0LWFkbWluLWRvY3Mvc3JjLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFx1NUM1NVx1NzkzQVx1NTMzQVxcXFxcdTY1ODdcdTY4NjNcXFxca2J0LWFkbWluLWRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXJcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LyVFNSVCMSU5NSVFNyVBNCVCQSVFNSU4QyVCQS8lRTYlOTYlODclRTYlQTElQTMva2J0LWFkbWluLWRvY3Mvc3JjLy52dWVwcmVzcy9uYXZiYXIvemgudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1ob3BlJztcblxuZXhwb3J0IGNvbnN0IHpoTmF2YmFyID0gbmF2YmFyKFtcbiAgJy96aC8nLFxuICB7XG4gICAgdGV4dDogJ1x1NjMwN1x1NTM1NycsXG4gICAgaWNvbjogJ2xpZ2h0YnVsYicsXG4gICAgcHJlZml4OiAnL3poLzAxLlx1NjMwN1x1NTM1Ny8nLFxuICAgIGNoaWxkcmVuOiBbJzAyLlx1NTdGQVx1Nzg0MCcsICcwNC5cdThGREJcdTk2MzYnXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdLYnQgQWRtaW4gRGVtbycsXG4gICAgaWNvbjogJ2Jvb2snLFxuICAgIGxpbms6ICdodHRwczovL3Z1ZTMtYWRtaW4ueW91bmdrYnQuY24vJyxcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9cdTVDNTVcdTc5M0FcdTUzM0EvXHU2NTg3XHU2ODYzL2tidC1hZG1pbi1kb2NzL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcXHU1QzU1XHU3OTNBXHU1MzNBXFxcXFx1NjU4N1x1Njg2M1xcXFxrYnQtYWRtaW4tZG9jc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LyVFNSVCMSU5NSVFNyVBNCVCQSVFNSU4QyVCQS8lRTYlOTYlODclRTYlQTElQTMva2J0LWFkbWluLWRvY3Mvc3JjLy52dWVwcmVzcy9zaWRlYmFyL2VuLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLWhvcGUnO1xuXG5leHBvcnQgY29uc3QgZW5TaWRlYmFyID0gc2lkZWJhcih7fSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L1x1NUM1NVx1NzkzQVx1NTMzQS9cdTY1ODdcdTY4NjMva2J0LWFkbWluLWRvY3Mvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxcdTVDNTVcdTc5M0FcdTUzM0FcXFxcXHU2NTg3XHU2ODYzXFxcXGtidC1hZG1pbi1kb2NzXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovJUU1JUIxJTk1JUU3JUE0JUJBJUU1JThDJUJBLyVFNiU5NiU4NyVFNiVBMSVBMy9rYnQtYWRtaW4tZG9jcy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvemgudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoU2lkZWJhciA9IHNpZGViYXIoe1xuICBcIi96aC9cIjogW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU2MzA3XHU1MzU3XCIsXG4gICAgICBpY29uOiBcImJvb2tcIixcbiAgICAgIHByZWZpeDogXCIwMS5cdTYzMDdcdTUzNTcvXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlVLFNBQVMsd0JBQXdCOzs7QUNBbkMsU0FBUyxpQkFBaUI7OztBQ0FWLFNBQVMsY0FBYztBQUV2VyxJQUFNLFdBQVcsT0FBTyxDQUFDLENBQUM7OztBQ0ZzVCxTQUFTLFVBQUFBLGVBQWM7QUFFdlcsSUFBTSxXQUFXQyxRQUFPO0FBQUEsRUFDN0I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVLENBQUMsbUJBQVMsaUJBQU87QUFBQSxFQUM3QjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzs7O0FDZnlWLFNBQVMsZUFBZTtBQUUzVyxJQUFNLFlBQVksUUFBUSxDQUFDLENBQUM7OztBQ0Z1VCxTQUFTLFdBQUFDLGdCQUFlO0FBRTNXLElBQU0sWUFBWUMsU0FBUTtBQUFBLEVBQy9CLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUpQRCxJQUFPLGdCQUFRLFVBQVU7QUFBQSxFQUN2QixVQUFVO0FBQUEsRUFFVixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsRUFDUDtBQUFBLEVBRUEsWUFBWTtBQUFBLEVBRVosTUFBTTtBQUFBLEVBRU4sTUFBTTtBQUFBLEVBRU4sU0FBUztBQUFBLEVBRVQsWUFBWTtBQUFBLEVBRVosVUFBVTtBQUFBLEVBRVYsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBLElBSVAsS0FBSztBQUFBO0FBQUEsTUFFSCxRQUFRO0FBQUE7QUFBQSxNQUdSLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxRQUFRO0FBQUE7QUFBQSxNQUVOLFFBQVE7QUFBQTtBQUFBLE1BR1IsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVNYO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBV1AsV0FBVztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLFFBQ1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3ZCO0FBQUEsTUFDQSxjQUFjLENBQUMsYUFBYSxRQUFRLFVBQVUsU0FBUyxNQUFNO0FBQUEsTUFDN0QsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFVBQVUsQ0FBQyxFQUFFLElBQUksTUFBTTtBQUNyQixnQkFBSSxRQUFRO0FBQ1YscUJBQU87QUFBQSxnQkFDTCxLQUFLO0FBQUEsZ0JBQ0wsT0FBTyxFQUFFLE1BQU0sTUFBTTtBQUFBLGdCQUNyQixTQUFTO0FBQUEsY0FDWDtBQUFBLFVBQ0o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sZUFBZTtBQUFBLElBQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBMERGO0FBQ0YsQ0FBQzs7O0FEN0pELElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBRU4sU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNRjtBQUFBLEVBRUE7QUFBQTtBQUFBO0FBSUYsQ0FBQzsiLAogICJuYW1lcyI6IFsibmF2YmFyIiwgIm5hdmJhciIsICJzaWRlYmFyIiwgInNpZGViYXIiXQp9Cg==
