<template><div><nav class="table-of-contents"><ul><li><router-link to="#路由配置规则">路由配置规则</router-link></li><li><router-link to="#路由配置">路由配置</router-link><ul><li><router-link to="#一级路由">一级路由</router-link></li><li><router-link to="#二级路由">二级路由</router-link></li><li><router-link to="#详情路由">详情路由</router-link></li></ul></li><li><router-link to="#路由加载规则">路由加载规则</router-link><ul><li><router-link to="#异步懒加载">异步懒加载</router-link></li></ul></li><li><router-link to="#国际化">国际化</router-link><ul><li><router-link to="#非国际化">非国际化</router-link></li><li><router-link to="#国际化-1">国际化</router-link></li></ul></li><li><router-link to="#路由配置-1">路由配置</router-link><ul><li><router-link to="#标签页固定">标签页固定</router-link></li><li><router-link to="#路由缓存">路由缓存</router-link></li><li><router-link to="#菜单隐藏">菜单隐藏</router-link></li><li><router-link to="#菜单渲染-一个">菜单渲染（一个）</router-link></li><li><router-link to="#菜单渲染-多个">菜单渲染（多个）</router-link></li></ul></li><li><router-link to="#路由内置属性">路由内置属性</router-link><ul><li><router-link to="#meta-fullpath">meta._fullPath</router-link></li><li><router-link to="#meta-dynamic">meta._dynamic</router-link></li><li><router-link to="#redirect">redirect</router-link></li><li><router-link to="#component">component</router-link></li></ul></li><li><router-link to="#重置路由">重置路由</router-link></li><li><router-link to="#iframe-路由">IFrame 路由</router-link><ul><li><router-link to="#如何使用">如何使用？</router-link></li><li><router-link to="#iframe-加载">IFrame 加载</router-link></li><li><router-link to="#iframe-缓存">IFrame 缓存</router-link></li><li><router-link to="#iframe-新标签打开">IFrame 新标签打开</router-link></li><li><router-link to="#代码">代码</router-link></li></ul></li><li><router-link to="#外链路由">外链路由</router-link></li><li><router-link to="#路由权限">路由权限</router-link></li></ul></nav>
<h2 id="路由配置规则" tabindex="-1"><a class="header-anchor" href="#路由配置规则" aria-hidden="true">#</a> 路由配置规则</h2>
<p>路由的所有相关文件位于 <code v-pre>src/router</code> 下：</p>
<ul>
<li>路由和组件的配置文件为 <code v-pre>routes-config.ts</code></li>
<li>路由的核心配置、路由拦截文件为 <code v-pre>index.ts</code></li>
<li>路由关闭前的回调文件为 <code v-pre>before-close.ts</code></li>
</ul>
<p>Admin 的菜单和布局并不需要开发者单独开发，而是通过一系列的转换而得到的，为了简化开发者多余的代码，Admin 基于路由制定了一套具有规范化的配置，掌握了路由的配置，基本就掌握了项目的开发节奏。</p>
<p>比如如何通过最短的代码让路由进行缓存、是否渲染到菜单，是否 icon 等布局类的操作，而最好的方法就是通过在写路由的时候进行配置。</p>
<p>再通俗理解一点：一个路由对应一个菜单、一个面包屑 Item，一个标签页，所以通过路由的配置，就可以自动生成菜单、面包屑 Item、标签，极大的简化了开发者写三套代码的精力和时间，这也是世面上流行的管理系统的搭建。</p>
<p>下面先给出 Admin 内置的路由配置，其中包括官方的配置和 Admin 可选的配置：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RouterConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// 路由地址</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 路由名字（必须保持唯一）</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 路由重定向</span>
  redirect<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 路由元信息，Admin 核心配置</span>
  meta<span class="token operator">:</span> MetaProp<span class="token punctuation">;</span>
  <span class="token comment">// 子路由配置项</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 路由地址</span>
      path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      <span class="token comment">// 路由名字（必须保持唯一）</span>
      name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      <span class="token comment">// 路由重定向</span>
      redirect<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      <span class="token comment">// 按需加载需要展示的页面</span>
      component<span class="token operator">:</span> RouteComponent<span class="token punctuation">;</span>
      <span class="token comment">// 路由元信息，Admin 核心配置</span>
      meta<span class="token operator">:</span> MetaProp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MetaProp</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MetaProp 的配置是 Admin 内置的核心配置，通过这些配置可以对由路由生成的内容进行控制。</p>
<h2 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置" aria-hidden="true">#</a> 路由配置</h2>
<h3 id="一级路由" tabindex="-1"><a class="header-anchor" href="#一级路由" aria-hidden="true">#</a> 一级路由</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> home<span class="token operator">:</span> RouterConfigRaw <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token constant">HOME_URL</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token constant">HOME_NAME</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> <span class="token string">"/home/index"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    isAffix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"HomeFilled"</span><span class="token punctuation">,</span>
    notClickBread<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    hideInBread<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    hideInMenu<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isKeepAlive<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    useI18n<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    useTooltip<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isFull<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    hideInTab<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二级路由" tabindex="-1"><a class="header-anchor" href="#二级路由" aria-hidden="true">#</a> 二级路由</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> components<span class="token operator">:</span> RouterConfigRaw <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">"/components"</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"Components"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    notClickBread<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">"组件"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"Opportunity"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">"message"</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">"MessageDemo"</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/components/message/index.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span> 
        title<span class="token operator">:</span> <span class="token string">"消息组件"</span><span class="token punctuation">,</span> 
        icon<span class="token operator">:</span> <span class="token string">"StarFilled"</span><span class="token punctuation">,</span>
        alwaysShowRoot<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        notClickBread<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        hideInBread<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        hideInMenu<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        isKeepAlive<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        useI18n<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        useTooltip<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        isFull<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        hideInTab<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>meta 里的参数都有默认值（目前填写 Boolean 类型的都是默认值），所以不是要写很多配置项，常用的是 title、icon 配置项，其他可以保持默认值。</p>
<h3 id="详情路由" tabindex="-1"><a class="header-anchor" href="#详情路由" aria-hidden="true">#</a> 详情路由</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> detailsRoutes<span class="token operator">:</span> RouterConfigRaw <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">"/arg"</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"Arg"</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">"/arg/params/1"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    hideInMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    hideInBread<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">"query"</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">"Query"</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> <span class="token string">"/tabs/queryDetail"</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>route<span class="token operator">:</span> RouteConfig<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">{{ _route.Query }}-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">"StarFilled"</span><span class="token punctuation">,</span>
        beforeCloseName<span class="token operator">:</span> <span class="token string">"before_close_normal"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">"params/:id"</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">"Params"</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> <span class="token string">"/tabs/paramsDetail"</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>route<span class="token operator">:</span> RouteConfig<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">{{ _route.Params }}-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">"StarFilled"</span><span class="token punctuation">,</span>
        beforeCloseName<span class="token operator">:</span> <span class="token string">"before_close_normal"</span><span class="token punctuation">,</span>
        dynamicLevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详情页路由的 title 支持函数式，参数是当前路由信息。</p>
<h2 id="路由加载规则" tabindex="-1"><a class="header-anchor" href="#路由加载规则" aria-hidden="true">#</a> 路由加载规则</h2>
<p>Admin 已经将路由分为了两类：一类是常量路由，一类是权限路由。</p>
<p>常量路由指的是 Admin 一定会加载的路由，如登录页面、404 页面等，是在路由对象初始化的时候 <strong>必然</strong> 一起初始化的路由。</p>
<p>权限路由指的是满足了 <strong>指定权限</strong> 才加载的路由，具有权限校验功能，如 Admin 角色和 Visitor 角色看到路由可能不一样，在初始化的时候，就会根据角色去筛选出角色拥有的路由进行加载。</p>
<p>常量路由加载最先，随着路由对象初始化和加载，而权限路由靠后，是在路由的前置钩子 <code v-pre>beforeEach</code> 里进行动态加载。</p>
<p>常量路由一定是写在代码里，权限路由既可以是写在代码里，也可以是后端传来的动态路由。</p>
<h3 id="异步懒加载" tabindex="-1"><a class="header-anchor" href="#异步懒加载" aria-hidden="true">#</a> 异步懒加载</h3>
<p>当项目庞大的时候，推荐使用 <strong>异步懒加载</strong> 来加载路由，这样可以实现按需加载。</p>
<p>异步懒加载指的是在访问到该路由才加载该路由，而不是一次性加载完所有路由，因为一次性加载完会导致初次访问的时候，页面长时间白屏，需要耗费大量时间去加载路由。</p>
<p>官方推荐的方式是使用 import 来进行异步懒加载：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre typescript="" class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/home"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/home/index.vue"</span><span class="token punctuation">)</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      isAffix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">"HomeFilled"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而 Admin 基于这种形式再次衍生了另外两种形式：</p>
<blockquote>
<p>字符串形式</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre typescript="" class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/home"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token string">"/home/index"</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      isAffix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">"HomeFilled"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样配置后，路由将去寻找 <code v-pre>src/view/home/index.vue</code> 来渲染，即在加载前自动加上 <code v-pre>src/views</code> 和 <code v-pre>.vue</code>。</p>
<blockquote>
<p>Path 形式</p>
</blockquote>
<p>如果不想写 component，Admin 还支持 Path 形式，即直接用 path 代替 component：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre typescript="" class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/home/index"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      isAffix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">"HomeFilled"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样配置后，路由将去寻找 <code v-pre>src/view/home/index.vue</code> 来渲染，即在加载前自动加上 <code v-pre>src/views</code> 和 <code v-pre>.vue</code>。</p>
<h2 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化" aria-hidden="true">#</a> 国际化</h2>
<p>下面讲解国际化和非国际化的简单配置。</p>
<h3 id="非国际化" tabindex="-1"><a class="header-anchor" href="#非国际化" aria-hidden="true">#</a> 非国际化</h3>
<p>菜单、面包屑、标签页的文字显示取决于路由 meta 的 title：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre typescript="" class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/home"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/home/index.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以在菜单、面包屑、标签页看到 <strong>首页</strong> 文字。</p>
<h3 id="国际化-1" tabindex="-1"><a class="header-anchor" href="#国际化-1" aria-hidden="true">#</a> 国际化</h3>
<p>路由支持国际化，默认关闭，那么如何开启呢？</p>
<h4 id="局部开启" tabindex="-1"><a class="header-anchor" href="#局部开启" aria-hidden="true">#</a> 局部开启</h4>
<p>路由的 meta 里使用 useI18n 属性：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/home"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/home/index.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      useI18n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 meta 里不需要 title 了，这是一个规则，国际化和非国际化使用的属性不是同一个属性。</p>
<ul>
<li>非国际化使用的是路由 meta 的 title 属性</li>
<li>国际化使用的路由的 name 属性</li>
</ul>
<p>此时页面的菜单将显示 <code v-pre>Home</code>，那么它是怎么支持国际化的呢？</p>
<p>开启国际化后，Admin 默认以路由的 name 值作为 key 去 <code v-pre>src/languages/modules</code> 下去寻找 <code v-pre>Home</code> 对应的 value：</p>
<ul>
<li><code v-pre>en-US.ts</code> 是英文配置文件</li>
<li><code v-pre>zh-CN.ts</code> 是中文配置文件</li>
</ul>
<p>如两个文件内容：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// en-US.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  _route<span class="token operator">:</span> <span class="token punctuation">{</span>
    Home<span class="token operator">:</span> <span class="token string">"Home"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// zh-CN.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  _route<span class="token operator">:</span> <span class="token punctuation">{</span>
    Home<span class="token operator">:</span> <span class="token string">"首页"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则切换中文显示 <strong>首页</strong>，切换英文显示 <code v-pre>Home</code>。</p>
<p>如果没有配置国际化文件，则默认读取 name 的值，如上面的 <code v-pre>Home</code> 作为文字渲染。</p>
<h4 id="全局开启" tabindex="-1"><a class="header-anchor" href="#全局开启" aria-hidden="true">#</a> 全局开启</h4>
<p>有时候项目是国际化项目，而路由非常多，给每个路由配置 <code v-pre>useI18n: true</code> 比较麻烦，所以可以在 <code v-pre>src/config/settings</code> 里的 routerSettings 开启全局国际化：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> routerSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  routeUseI18n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由配置-1" tabindex="-1"><a class="header-anchor" href="#路由配置-1" aria-hidden="true">#</a> 路由配置</h2>
<p>下面演示一些基本的路由配置，实际还是建议去拉取项目并运行，然后尝试一些路由配置就明白了原理。</p>
<h3 id="标签页固定" tabindex="-1"><a class="header-anchor" href="#标签页固定" aria-hidden="true">#</a> 标签页固定</h3>
<p>标签页是记录打开过的历史路由，具有可删除功能，但是有时候我们需要将某个路由如首页直接固定到标签页的第一个位置，无法删除，则使用 <code v-pre>isAffix</code> 属性：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre typescript="" class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/home"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/home/index.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      isAffix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">"HomeFilled"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由缓存" tabindex="-1"><a class="header-anchor" href="#路由缓存" aria-hidden="true">#</a> 路由缓存</h3>
<p>使用 <code v-pre>isKeepAlive</code> 属性即可对路由进行缓存。</p>
<p>生效前提：Vue 组件的 <code v-pre>name</code> 必须与对应路由的 <code v-pre>name</code> 保持一致：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre vue="" class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由 name 和 isKeepAlive 属性：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/home"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/home/index.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">"HomeFilled"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="菜单隐藏" tabindex="-1"><a class="header-anchor" href="#菜单隐藏" aria-hidden="true">#</a> 菜单隐藏</h3>
<p>上文有说过，一个路由对应一个菜单，但是我们不希望将一个路由当作一个菜单渲染，即无法直接通过点击菜单跳转路由，则使用 hideInMenu 属性：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/home"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/home/index.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      hideInMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">"HomeFilled"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="菜单渲染-一个" tabindex="-1"><a class="header-anchor" href="#菜单渲染-一个" aria-hidden="true">#</a> 菜单渲染（一个）</h3>
<p>如果一个父路由 A 只有一个子路由 B，那么有时候不希望有一个父菜单（路由 A）和一个子菜单（子路由 B），而是希望子路由 B 直接是一个父菜单，则使用 alwaysShowRoot 属性：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/components"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Components"</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      notClickBread<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">"组件"</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">"Opportunity"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"message"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"MessageDemo"</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/components/message/index.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"消息组件"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"StarFilled"</span><span class="token punctuation">,</span> alwaysShowRoot<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样在菜单栏只看到父菜单 <strong>消息组件</strong>，而不是父菜单 <strong>组件</strong> 和子菜单 <strong>消息组件</strong>。</p>
<p>当父路由有多个子路由的时候，则该属性失效，即父路由一定是父菜单，子路由是子菜单。</p>
<p>上面的父菜单可以理解为一级菜单，子菜单为二级菜单，也可以是二级菜单和三级菜单。</p>
<h3 id="菜单渲染-多个" tabindex="-1"><a class="header-anchor" href="#菜单渲染-多个" aria-hidden="true">#</a> 菜单渲染（多个）</h3>
<p>假设一个一级路由（菜单）下有五个二级路由（菜单），但是有 4 个二级路由 <code v-pre>hideInMenu: true</code>，此时页面看到的应该只有一个一级菜单（路由）和一个二级菜单（路由），但是我们希望最后一个二级路由（菜单）作为一级路由（菜单），因为它满足了上面的 <strong>菜单渲染（一个）</strong>，即使用 <code v-pre>alwaysShowRoot: true</code> 并希望它生效。</p>
<p>但是很遗憾，直接使用是不会生效的，因为一些逻辑处理问题，而针对这个问题，Admin 提供了另一个配置，在 <code v-pre>src/config/settings</code> 里的 layoutSettings 下的 <code v-pre>moreRouteChildrenHideInMenuThenOnlyOne</code> 属性，将其设为 true：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> layoutSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 这是路由和菜单呼应可能产生的问题而需要配置：alwaysShowRoot 为 false 情况（确保您了解路由的配置规则，如果不了解，前往 router/router-config 查看）
   * true：存在多个二级路由，但是只有一个二级路由 hideInMenu 为 false，举例：有 5 个二级路由，但是有 4 个二级路由 hideInMenu: true，则需要开启 true，确保菜单只渲染剩下的路由
   *
   * 为 true 的场景较少见，如果真的遇到，则开启为 true，否则不建议开启，虽然 true 能无需后顾之忧，但是会多重复一次过滤递归，即消耗点性能
   *
   */</span>
  moreRouteChildrenHideInMenuThenOnlyOne<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然开启这个配置会消耗一点性能，原理就是先过滤出 <code v-pre>hideInMenu: true</code> 的菜单，再过滤出 <code v-pre>alwaysShowRoot:true</code> 的菜单，相当于多走了一步过滤出 <code v-pre>alwaysShowRoot:true</code> 的菜单，所以没遇到这个场景的时候，不推荐设为 true。</p>
<blockquote>
<p>更多的路由配置请参考 Admin 的路由文件。</p>
</blockquote>
<h2 id="路由内置属性" tabindex="-1"><a class="header-anchor" href="#路由内置属性" aria-hidden="true">#</a> 路由内置属性</h2>
<p>路由内置属性仅限动态路由拥有的功能。</p>
<p>在动态路由加载的时，会根据内置的函数转换，从而自动生成 Admin 需要的一些路由属性来使用。</p>
<h3 id="meta-fullpath" tabindex="-1"><a class="header-anchor" href="#meta-fullpath" aria-hidden="true">#</a> meta._fullPath</h3>
<p>一个路由的完整路径，在编译阶段自动生成，如三级路由的 <code v-pre>_fullPath</code> 将是一级路由 + 二级路由 + 三级路由的完整路径。</p>
<h3 id="meta-dynamic" tabindex="-1"><a class="header-anchor" href="#meta-dynamic" aria-hidden="true">#</a> meta._dynamic</h3>
<p>是否是动态路由，在编译阶段自动生成，用来和静态路由进行区分。</p>
<h3 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> redirect</h3>
<p>该属性可以在路由进行配置，如果没有配置，则 Admin 会自动根据是否存在子路由来生成，如果存在子路由，则自动 redirect 到第一个子路由，以 name 作为 redirect 的目标。</p>
<h3 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> component</h3>
<p>上文讲的 <a href="#%E5%BC%82%E6%AD%A5%E6%87%92%E5%8A%A0%E8%BD%BD">异步懒加载</a> 中，字符串形式和 Path 会自动加上 <code v-pre>/src/views</code> 前缀和 <code v-pre>.vue</code> 后缀。</p>
<h2 id="重置路由" tabindex="-1"><a class="header-anchor" href="#重置路由" aria-hidden="true">#</a> 重置路由</h2>
<p>重置路由功能只针对动态路由。</p>
<blockquote>
<p>常用场景</p>
</blockquote>
<p>用户切换角色或退出登录时需调用重置路由功能，将路由和菜单恢复到初始化状态。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> resetRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/router"</span><span class="token punctuation">;</span>

<span class="token function">resetRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iframe-路由" tabindex="-1"><a class="header-anchor" href="#iframe-路由" aria-hidden="true">#</a> IFrame 路由</h2>
<p>Admin 支持将其他系统内嵌在 Admin 里，这是因为 Admin 经历过一次 Portal 门户的使用场景，所以 Admin 封装了 IFrame 组件，支持 IFrame 页面、IFrame 缓存等功能。</p>
<h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用？</h3>
<p>只需要在写路由的时候在 meta 传入 frameSrc 即可：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">"vue2-template-iframe"</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"IFrameVue2Template"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">"Vue2 Template IFrame"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"HotWater"</span><span class="token punctuation">,</span>
    frameSrc<span class="token operator">:</span> <span class="token string">"http://172.16.49.41/vue2-template"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时点击左侧菜单的该菜单，则会打开这个嵌入的 frameSrc 网页。</p>
<h3 id="iframe-加载" tabindex="-1"><a class="header-anchor" href="#iframe-加载" aria-hidden="true">#</a> IFrame 加载</h3>
<p>IFrame 在加载的时候，可以使用 Loading 开启动画，该配置默认为 true，所以无需设置，如果要关闭，则：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">"vue2-template-iframe"</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"IFrameVue2Template"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">"Vue2 Template IFrame"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"HotWater"</span><span class="token punctuation">,</span>
    frameSrc<span class="token operator">:</span> <span class="token string">"http://172.16.49.41/vue2-template"</span><span class="token punctuation">,</span>
    frameLoading<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iframe-缓存" tabindex="-1"><a class="header-anchor" href="#iframe-缓存" aria-hidden="true">#</a> IFrame 缓存</h3>
<p>IFrame 可以开启缓存，这样打开过的 IFrame 页面就能和正常路由一样进行缓存，下次访问时不需要重新渲染页面。</p>
<p>通过 frameKeepAlive 来开启缓存，默认关闭：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">"vue2-template-iframe"</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"IFrameVue2Template"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">"Vue2 Template IFrame"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"HotWater"</span><span class="token punctuation">,</span>
    frameSrc<span class="token operator">:</span> <span class="token string">"http://172.16.49.41/vue2-template"</span><span class="token punctuation">,</span>
    frameKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger">
<p class="hint-container-title">警告</p>
<p>IFrame 缓存目前是记录已打开的页面，当打开多个页面时，只有激活的页面显示，其他页面隐藏：<code v-pre>display: none</code>，即缓存 IFrame 页面的 DOM，这样打开非常多的 IFrame 可能引起卡顿。</p>
</div>
<h3 id="iframe-新标签打开" tabindex="-1"><a class="header-anchor" href="#iframe-新标签打开" aria-hidden="true">#</a> IFrame 新标签打开</h3>
<p>有时候希望 IFrame 可以以新窗口打开方式打开，则使用 frameOpen 属性，默认不以新窗口打开方式打开:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">"vue2-template-iframe"</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"IFrameVue2Template"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">"Vue2 Template IFrame"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"HotWater"</span><span class="token punctuation">,</span>
    frameSrc<span class="token operator">:</span> <span class="token string">"http://172.16.49.41/vue2-template"</span><span class="token punctuation">,</span>
    frameOpen<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用场景一般是后端返回的路由，可能部分 IFrame 是内嵌，部分是新窗口打开方式打开。</p>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<p>IFrame 的代码在 <code v-pre>src/layout/components/FrameLayout</code> 下。</p>
<h2 id="外链路由" tabindex="-1"><a class="header-anchor" href="#外链路由" aria-hidden="true">#</a> 外链路由</h2>
<p>除了 IFrame 嵌入来打开外部链接，还可以直接打开新的窗口来跳转该链接。</p>
<p>只需要在路由的配置中，给 path 填写带有 <code v-pre>http</code> 或者 <code v-pre>https</code> 的链接，就可以跳转。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	path<span class="token operator">:</span> <span class="token string">"https://github.com/Kele-Bingtang/kbt-vue3-admin"</span><span class="token punctuation">,</span>
	name<span class="token operator">:</span> <span class="token string">"Github"</span><span class="token punctuation">,</span>
	meta<span class="token operator">:</span> <span class="token punctuation">{</span>
		title<span class="token operator">:</span> <span class="token string">"Github"</span><span class="token punctuation">,</span>
		icon<span class="token operator">:</span> <span class="token string">"svg-github"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由权限" tabindex="-1"><a class="header-anchor" href="#路由权限" aria-hidden="true">#</a> 路由权限</h2>
<p>路由内置两个权限：roles 和 auths：</p>
<ul>
<li>roles：角色，用来控制权限路由</li>
<li>auths：认证，用来控制路由产生的页面权限，即页面上是否有增删改查等按钮</li>
</ul>
<p>案例：只有 admin 的角色才能访问该路由</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre json="" class="language-json"><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">"role"</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> () => import(<span class="token string">"@/views/permission/rolePermission.vue"</span>)<span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"RolePermission"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">"权限编辑"</span><span class="token punctuation">,</span>
    roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"admin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"StarFilled"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例：路由只有增删的按钮权限，没有删除权限：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">"switch"</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> () => import(<span class="token string">"@/views/permission/switchPermission.vue"</span>)<span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"SwitchPermission"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">"权限切换"</span><span class="token punctuation">,</span>
    auths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"btn_add"</span><span class="token punctuation">,</span> <span class="token string">"btn_edit"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"StarFilled"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细的内容请看：<RouterLink to="/advanced-auth.html">进阶 - 权限</RouterLink>。</p>
</div></template>


