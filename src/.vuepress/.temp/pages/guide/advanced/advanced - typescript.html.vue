<template><div><nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link></li><li><router-link to="#ts-配置文件">TS 配置文件</router-link></li><li><router-link to="#shims-vue-d-ts">shims-vue.d.ts</router-link></li><li><router-link to="#auto-import-d-ts">auto-import.d.ts</router-link></li><li><router-link to="#types-plugins-d-ts">types/plugins.d.ts</router-link></li><li><router-link to="#自定义全局组件-ts-提示">自定义全局组件 TS 提示</router-link></li><li><router-link to="#全局类型声明">全局类型声明</router-link></li><li><router-link to="#自定义-ts-api">自定义 TS API</router-link></li><li><router-link to="#types-http-d-ts">types/http.d.ts</router-link></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>下面介绍 Admin 内置的 TS 声明文件（<code v-pre>.d.ts</code> 文件）和一些声明操作。</p>
<p>框架级别的 TS 声明文件在 src 目录下，项目级别的 TS 声明文件在 <code v-pre>src/types</code> 目录下。</p>
<h2 id="ts-配置文件" tabindex="-1"><a class="header-anchor" href="#ts-配置文件" aria-hidden="true">#</a> TS 配置文件</h2>
<p>TS 的配置文件为根目录下的 <code v-pre>tsconfig.json</code> 文件，Admin 已经在该文件里添加了项目需要的 <code v-pre>.d.ts</code>、<code v-pre>.ts</code>、<code v-pre>.tsx</code> 等文件的扫描和提示，所以你无需关心自己写的 TS 文件是否有提示，除非你的 TS 文件所在的路径不在 TS 配置文件里填写的扫描范围内，此时你需要在 TS 配置文件的 include 添加路径就可以完成扫描和提示。</p>
<h2 id="shims-vue-d-ts" tabindex="-1"><a class="header-anchor" href="#shims-vue-d-ts" aria-hidden="true">#</a> shims-vue.d.ts</h2>
<p><code v-pre>.vue</code>、<code v-pre>.scss</code> 文件不是常规的文件类型，<code v-pre>typescript</code> 无法识别，所以 Admin 在 <code v-pre>src/env.d.ts</code> 添加了这些文件类型的支持：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">/// &lt;reference types="vite/client" /></span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"*.vue"</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DefineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
  <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types</span>
  <span class="token keyword">const</span> component<span class="token operator">:</span> DefineComponent<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> component<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"*.scss"</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> scss<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> scss<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="auto-import-d-ts" tabindex="-1"><a class="header-anchor" href="#auto-import-d-ts" aria-hidden="true">#</a> auto-import.d.ts</h2>
<p>Admin 安装了 <code v-pre>unplugin-auto-import</code> 依赖，该依赖在 src 下自动生成 <code v-pre>auto-import.d.ts</code> 文件，自动引入 Vue 常用的 API，如 ref、computed、watch 等，这样在 Vue 组件里，直接使用 Vue 自带的 API 即可，无需 import 引入，如：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> isOpen <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不需要手动引入 ref：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
  
<span class="token keyword">const</span> isOpen <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="types-plugins-d-ts" tabindex="-1"><a class="header-anchor" href="#types-plugins-d-ts" aria-hidden="true">#</a> types/plugins.d.ts</h2>
<p>项目开发，我们可能需要安装一些库或者插件什么的，当它们对 <code v-pre>typescript</code> 支持不是很友好的时候，如 Admin 使用了 <code v-pre>nprogress</code>、<code v-pre>qs</code>、<code v-pre>v-contextmenu</code> 这三个第三方依赖，而且这三个依赖官方并没有提供 TS 类型支持，导致在 <code v-pre>import xxx from &quot;xx&quot;</code> 的时候，会报错：无法找到 XX 的声明文件 ...</p>
<p>解决办法就是将这些通过 <code v-pre>declare module &quot;包名&quot;</code> 的形式添加到 <code v-pre>src/types/plugins.d.ts</code> 文件里。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"nprogress"</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"qs"</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"v-contextmenu"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样 <code v-pre>import xxx from &quot;nprogress&quot;</code> 的时候就不会报错。</p>
<h2 id="自定义全局组件-ts-提示" tabindex="-1"><a class="header-anchor" href="#自定义全局组件-ts-提示" aria-hidden="true">#</a> 自定义全局组件 TS 提示</h2>
<p>自定义的全局组件，在使用的时候没有 TS 语法提示，如没有 props 需要的属性属性，那么这需要我们自己往项目注入这些提示。</p>
<p>如 Admin 全局注册了 Auth、Role 组件，则需要添加 TS 提示，则在 <code v-pre>src/shims-vue.d.ts</code> 里添加：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"vue"</span> <span class="token punctuation">{</span>
	<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GlobalComponents</span> <span class="token punctuation">{</span>
		Role<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./components/Permission/role.vue"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"default"</span><span class="token punctuation">]</span>
		Auth<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./components/Permission/auth"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"default"</span><span class="token punctuation">]</span>
    <span class="token comment">// 其他全局组件</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样使用 Auth、Role 组件时，会有 TS 提示，如组件里的 props 提示。</p>
<h2 id="全局类型声明" tabindex="-1"><a class="header-anchor" href="#全局类型声明" aria-hidden="true">#</a> 全局类型声明</h2>
<p>有些 TS 类型、interface 或者其他提示，我们希望所有的组件都能使用，而不是在不同的组件重复定义提示，则在 <code v-pre>src/types/global.d.ts</code> 文件里定义（<code v-pre>declare global {}</code> 里定义），该文件里定义的 type、interface 等都会全局注入 Admin 里，在任意地方都可以使用这些声明。</p>
<p>Admin 基于自身场景重写了 Vue 的路由 TS 提示，在 Vue 的路由 TS 提示基础上进行拓展，添加了更多的适用于 Admin 的其他 TS 提示。</p>
<p>如路由的 meta 类型：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MetaProp</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> _fullPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 路由的完整路径，在编译阶段自动生成</span>
  <span class="token keyword">readonly</span> _dynamic<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否是动态路由，在编译阶段自动生成</span>
  roles<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 可访问该页面的权限数组，当前路由设置的权限会影响子路由</span>
  auths<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 路由内的按钮权限</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>route<span class="token operator">:</span> RouteConfig<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 显示在侧边栏、面包屑和标签栏的文字，使用 '{{ 多语言字段 }}' 形式结合「多语言」使用，可以传入一个回调函数，参数是当前路由对象 to</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 菜单图标，该页面在左侧菜单、面包屑显示的图标，无默认值</span>
  notClickBread<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否允许点击面包屑，如果为 true，则该路由无法在面包屑中被点击，默认为 false</span>
  hideInBread<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否不添加到面包屑，如果为 true，则该路由将不会出现在面包屑中，默认为 false</span>
  hideInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否不添加到菜单，如果为 true，则该路由不会显示在左侧菜单，默认为 false</span>
  alwaysShowRoot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否总是渲染为菜单，如果为 false 且某一级路由下只有一个二级路由，则左侧菜单直接显示该二级路由，如果为 true，则总会让一级菜单作为下拉菜单，默认为 false，仅限父级路由使用</span>
  isKeepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否缓存，如果为 true，该路由在切换标签后不会缓存，如果需要缓存，则「必须」设置页面组件 name 属性（class 名）和路由配置的 name 一致，默认为 false</span>
  isAffix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 是否固定在 tabs nav，如果为 true，则该路由按照路由表顺序依次标签固定在标签栏，默认为 false</span>
  isFull<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否全屏，不渲染 Layout 布局，只渲染当前路由组件</span>
  activeMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// Restful 路由搭配使用，当前路由为详情页时，需要高亮的菜单</span>
  beforeCloseName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 关闭路由前的回调，如果设置该字段，则在关闭当前 tab 页时会去 @/router/before-close.js 里寻找该字段名「对应」的方法，作为关闭前的钩子函数，无默认值</span>
  rank<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 路由在左侧菜单的排序，rank 值越高越靠后，当 rank 不存在时，根据顺序自动创建，首页路由永远在第一位，当 rank 存在时，可以插入指定的菜单位置，默认不存在</span>
  frameSrc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// IFrame 链接，填写后该路由将打开 IFrame 指定的链接</span>
  frameLoading<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// IFrame 页是否开启首次加载动画（默认 true）</span>
  frameKeepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// IFrame 页是否开启缓（默认 false）</span>
  frameOpen<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// IFrame 页是否开新标签页打开（默认 false）</span>
  <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span> 页面加载动画（有两种形式，一种直接采用 vue 内置的 transitions 动画，另一种是使用 animate.css 写进、离场动画）
     * <span class="token keyword">@see</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> https://next.router.vuejs.org/guide/advanced/transitions.html#transitions<span class="token punctuation">}</span>
     * <span class="token keyword">@see</span> animate.css <span class="token punctuation">{</span><span class="token keyword">@link</span> https://animate.style<span class="token punctuation">}</span>
     */</span>
  transition<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 当前路由动画效果</span>
    enterTransition<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 进场动画</span>
    leaveTransition<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 离场动画</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  hideInTab<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否不添加到标签页，默认 false</span>
  dynamicLevel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 动态路由可打开的最大数量</span>
  useI18n<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否开启 i18n，默认读取全局的 routeUseI18n（src/config/settings.ts）</span>
  useTooltip<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 菜单的文字超出后，是否使用 el-toolTip 提示，默认读取全局的 routeUseTooltip（src/config/settings.ts）</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由表配置类型：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RouteRecordRaw<span class="token punctuation">,</span> RouteComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">RouterConfigRaw</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>RouteRecordRaw<span class="token punctuation">,</span> <span class="token string">"component"</span> <span class="token operator">|</span> <span class="token string">"children"</span><span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  meta<span class="token operator">?</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>MetaProp<span class="token punctuation">,</span> MetaNeedKey<span class="token operator">></span><span class="token punctuation">;</span>
  component<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> RouteComponent <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>RouteComponent<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些是 Admin 内置的全局 TS 提示，如果你希望拓展自己的全局 TS 提示，则在该文件添加即可。</p>
<h2 id="自定义-ts-api" tabindex="-1"><a class="header-anchor" href="#自定义-ts-api" aria-hidden="true">#</a> 自定义 TS API</h2>
<p>我们知道 TS 自带的几个 API：</p>
<ul>
<li>Partial 可选</li>
<li>Pick 提取</li>
<li>Omit 去除</li>
<li>Required 必选</li>
<li>...</li>
</ul>
<p>Admin 根据常用场景基于这些 API 进行组装，更便于操作 TS 的提示。</p>
<p>这些组装的新 API 在 <code v-pre>src/types/types.d.ts</code> 里：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 将对象的某个属性变为可选，如：

interface User <span class="token punctuation">{</span>
  name: string;
  age: string;
  gender: string;
<span class="token punctuation">}</span>

// gender 变为可选
let user: PartialKey&lt;User, "gender"> = <span class="token punctuation">{</span>
  name: "",
  age: "",
<span class="token punctuation">}</span>;
// age 和 gender 变为可选
let user: PartialKey&lt;User, "age" | gender"> = <span class="token punctuation">{</span>
  name: "",
<span class="token punctuation">}</span>;

 */</span>
<span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">PartialKey<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">>></span> <span class="token operator">&amp;</span> Partial<span class="token operator">&lt;</span>Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">>></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 指定属性变为必选
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">RequiredKey<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">>></span> <span class="token operator">&amp;</span> Required<span class="token operator">&lt;</span>Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">>></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 指定的属性为必选，其他属性都变为可选
 *
 * 如 RequiredKey&lt;User, "name">
 * 则只有 name 是必填，age 和 gender 变为可选
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">RequiredKeyPartialOther<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">>>></span> <span class="token operator">&amp;</span>
  Required<span class="token operator">&lt;</span>Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">>></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 指定属性变为只读
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">ReadOnlyKey<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">>></span> <span class="token operator">&amp;</span> Readonly<span class="token operator">&lt;</span>Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">>></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要根据自己的使用场景组装 API，则可以参考上面内容。</p>
<h2 id="types-http-d-ts" tabindex="-1"><a class="header-anchor" href="#types-http-d-ts" aria-hidden="true">#</a> types/http.d.ts</h2>
<p>关于全局 Axios 请求的 TS 提示，Admin 放在了 <code v-pre>src/types/http.d.ts</code> 文件里。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">namespace</span> http <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Response<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
    code<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 状态码</span>
    status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 状态码信息</span>
    message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 消息</span>
    data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span> <span class="token comment">// 数据</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是后台返回的一个 http 响应格式。</p>
<p>我们如何使用呢？</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre typescript="" class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BackstageMenuList</span> <span class="token punctuation">{</span>
  imageIcon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  menuCode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  pagePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  menuName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  menuUrl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  parentMenuCode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  seq<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> BackstageMenuList<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getMenuList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span>http<span class="token punctuation">.</span>Response<span class="token operator">&lt;</span>BackstageMenuList<span class="token operator">>></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"/test"</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span>
      mapping<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Axios 请求的部分请看：<RouterLink to="/guide/basic/guide%20-%20request.html">指南 - 请求</RouterLink>，这里只是演示如何使用 <code v-pre>http.d.ts</code> 的内容。</p>
<p>在 <code v-pre>http.d.ts</code> 声明的响应格式，我们无需 import 引入，因为 <code v-pre>declare namespace xxx</code> 声明一个命名空间后，TS 会自动将 xxx 注入到 Admin 里，在任意文件里都无需引入，直接填写 xxx 即可。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>任意一个 <code v-pre>.d.ts</code> 文件出现 <code v-pre>export declare</code> 关键词，则只能手动 import 引入。</p>
</div>
<p>所以 <code v-pre>http.d.ts</code> 文件里不建议出现 export 关键词，否则关于 Axios 的响应 TS，都需要手动 import，如下：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre typescript="" class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">namespace</span> http <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Response<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
    code<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 状态码</span>
    status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 状态码信息</span>
    message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 消息</span>
    data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span> <span class="token comment">// 数据</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则需要手动引入 http。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre typescript="" class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/types/http"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BackstageMenuList</span> <span class="token punctuation">{</span>
  imageIcon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  menuCode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  pagePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  menuName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  menuUrl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  parentMenuCode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  seq<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> BackstageMenuList<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getMenuList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span>http<span class="token punctuation">.</span>Response<span class="token operator">&lt;</span>BackstageMenuList<span class="token operator">>></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"/test"</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span>
      mapping<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你了解 TS 的 <code v-pre>declare module</code>，则和 namespace 也是同理，添加了 <code v-pre>export declare module xxx</code>，则需要手动引入 xxx。</p>
</div></template>


