import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  {
    text: '指南',
    icon: 'lightbulb',
    link: '/guide/',
  },
  {
    text: '构建',
    icon: 'building',
    link: '/structure/',
  },
  {
    text: '组件',
    icon: 'bars',
    link: 'https://vue3-admin.youngkbt.cn/components',
  },
  {
    text: '链接',
    icon: 'dumpster',
    children: [
      {
        text: '预览地址',
        icon: 'house',
        link: 'https://vue3-admin.youngkbt.cn',
      },
      {
        text: 'Github 源码',
        icon: 'store',
        link: 'https://github.com/Kele-Bingtang/kbt-vue3-admin',
      },
      {
        text: 'Gitee 源码',
        icon: 'store',
        link: 'https://gitee.com/kele-bingtang/kbt-vue3-admin',
      },
      {
        text: '精简版源码',
        icon: 'store',
        link: 'https://github.com/Kele-Bingtang/kbt-vue3-template',
      },
      {
        text: '文档源码',
        icon: 'store',
        link: 'https://github.com/Kele-Bingtang/kbt-admin-docs',
      },
    ],
  },
]);
