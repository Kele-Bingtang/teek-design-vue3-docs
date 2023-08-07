import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  '/guide/': [
    {
      text: '指南',
      icon: 'book',
      children: 'structure',
    },
  ],
  '/structure/': [
    {
      text: '构建',
      icon: 'building',
      children: 'structure',
    },
  ],
});
