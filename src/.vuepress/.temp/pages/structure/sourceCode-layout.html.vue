<template><div><nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link></li><li><router-link to="#布局路由">布局路由</router-link></li><li><router-link to="#布局组件">布局组件</router-link></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>Admin 在完成页面渲染的期间，进行了很多的逻辑处理，那么如果要想二次开发 Admin，则必须了解 Admin 的构建流程，这样才能根据需求切入源码，进行二次开发。</p>
<h2 id="布局路由" tabindex="-1"><a class="header-anchor" href="#布局路由" aria-hidden="true">#</a> 布局路由</h2>
<p>Admin 除了有路由的初始化构建流程，还有布局的构建流程，布局的构建流程是以静态路由开始。</p>
<p>布局路由是 Admin 的核心路由，它不需要进行权限管控，所以放在了静态路由里：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> constantRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Layout"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/layout/index.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token constant">HOME_URL</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> hideInMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> hideInBread<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>constantRoutes 里的路由将随着 <code v-pre>main.ts</code> 初始化而初始化，优先级高于路由的 beforeEach，也就是布局构建的初始化快于路由构建的初始化，这也就是为什么路由构建的初始化里能看到权限路由都注册到布局路由的子路由。</p>
<h2 id="布局组件" tabindex="-1"><a class="header-anchor" href="#布局组件" aria-hidden="true">#</a> 布局组件</h2>
<p>在上面的 <a href="#%E5%B8%83%E5%B1%80%E8%B7%AF%E7%94%B1">布局路由</a> 知道布局组件的入口组件是 <code v-pre>src/layout/index.vue</code>，所以这是入口组件，该文件内容：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LayoutComponents[layoutMode]<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutClassic from "./LayoutClassic/index.vue";
import LayoutTransverse from "./LayoutTransverse/index.vue";
import LayoutColumns from "./LayoutColumns/index.vue";
import LayoutMixins from "./LayoutMixins/index.vue";
import LayoutSubsystem from "./LayoutSubsystem/index.vue";
import { useSettingsStore } from "@/stores/settings";
  
const LayoutComponents: { [key: string]: Component } = {
  vertical: LayoutVertical,
  classic: LayoutClassic,
  transverse: LayoutTransverse,
  columns: LayoutColumns,
  mixins: LayoutMixins,
  subsystem: LayoutSubsystem,
};
  
const settingsStore = useSettingsStore();
const layoutMode = computed(() => settingsStore.layoutMode);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，入口组件引用了 6 种布局，分别为</p>
<ul>
<li>纵向布局：<code v-pre>src/layout/LayoutVertical</code></li>
<li>经典布局：<code v-pre>src/layout/LayoutClassic</code></li>
<li>横向布局：<code v-pre>src/layout/LayoutTransverse</code></li>
<li>分栏布局：<code v-pre>src/layout/LayoutColumns</code></li>
<li>混合布局：<code v-pre>src/layout/LayoutMixins</code></li>
<li>子系统布局：<code v-pre>src/layout/LayoutSubsystem</code></li>
</ul>
<p>通过 <code v-pre>component</code> 来动态切换对应的布局。</p>
<p>任意一个布局都有顶栏、侧边菜单栏、标签栏、内容区，位于 <code v-pre>src/layout</code> 下，分别位为 components 目录的 Header、Menu、TabsNav、MainContent 下。</p>
<p>所以进入任意一个布局都可以看到这些局部的布局组件。</p>
<p>如果你需要修改源码，自行去对应的布局组件修改即可。</p>
<p>下面是完整的布局组件目录</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>├─ layout # 页面布局
│  ├─ components # 布局组件
│  │  ├─ CommonIcon # 通用图标
│  │  ├─ FrameLayout # IFrame 嵌入
│  │  ├─ Header # 头部
│  │  ├─ Loading # 项目加载 Loading 
│  │  ├─ MainContent # 内容区
│  │  ├─ Menu # 菜单
│  │  ├─ TabsNav # 标签页
│  │  └─ ThemeDrawer 框架设置
│  ├─ LayoutClassic # 经典布局
│  ├─ LayoutColumns # 分栏布局
│  ├─ LayoutMixins # 混入布局
│  ├─ LayoutSubsystem # 子系统布局
│  ├─ LayoutTransverse # 横向布局
│  └─ LayoutVertical # 纵向布局
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


