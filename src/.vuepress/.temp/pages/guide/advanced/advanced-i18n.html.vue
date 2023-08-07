<template><div><nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link></li><li><router-link to="#使用">使用</router-link><ul><li><router-link to="#基本使用">基本使用</router-link></li><li><router-link to="#路由使用">路由使用</router-link></li></ul></li><li><router-link to="#elementplus-国际化">ElementPlus 国际化</router-link></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>开发不同地区需要的地域语言，就称为 <strong>国际化</strong>。</p>
<p>Admin 内置了国际化，支持自定义国际化、<code v-pre>element-plus</code> 国际化。</p>
<p>国际化支持的版本有 <a href="https://github.com/Kele-Bingtang/kbt-vue3-admin" target="_blank" rel="noopener noreferrer">完整版<ExternalLinkIcon/></a>，<a href="https://github.com/Kele-Bingtang/kbt-vue3-template" target="_blank" rel="noopener noreferrer">国际化精简版<ExternalLinkIcon/></a>。</p>
<p>非国际化版有 <a href="https://github.com/Kele-Bingtang/kbt-vue3-template/tree/no-i18n" target="_blank" rel="noopener noreferrer">非国际化精简版<ExternalLinkIcon/></a>。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>国际化使用非常简单，核心的国际化配置在 <code v-pre>src/languages/modules</code> 目录下：</p>
<ul>
<li><code v-pre>en-US.ts</code> 是英文配置文件</li>
<li><code v-pre>zh-CN.ts</code> 是中文配置文件</li>
</ul>
<p>配置文件是以 <code v-pre>key: value</code> 的形式，Admin 会根据当前的语言去对应的配置文件，根据 key 获取 value 来渲染到页面上。</p>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<p>如在 en-US.ts 配置：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>_tabsNav<span class="token operator">:</span> <span class="token punctuation">{</span>
  refresh<span class="token operator">:</span> <span class="token string">"Refresh Page"</span><span class="token punctuation">,</span>
  close<span class="token operator">:</span> <span class="token string">"Close Current"</span><span class="token punctuation">,</span>
  closeOthers<span class="token operator">:</span> <span class="token string">"Close Others"</span><span class="token punctuation">,</span>
  closeAll<span class="token operator">:</span> <span class="token string">"Close All"</span><span class="token punctuation">,</span>
  more<span class="token operator">:</span> <span class="token string">"More"</span><span class="token punctuation">,</span>
  maximize<span class="token operator">:</span> <span class="token string">"Maximize"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 zh-CN.ts 配置：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>_tabsNav<span class="token operator">:</span> <span class="token punctuation">{</span>
  refresh<span class="token operator">:</span> <span class="token string">"刷新当前标签页"</span><span class="token punctuation">,</span>
  closeCurrent<span class="token operator">:</span> <span class="token string">"关闭当前标签页"</span><span class="token punctuation">,</span>
  closeLeft<span class="token operator">:</span> <span class="token string">"关闭左侧标签页"</span><span class="token punctuation">,</span>
  closeRight<span class="token operator">:</span> <span class="token string">"关闭右侧标签页"</span><span class="token punctuation">,</span>
  closeOthers<span class="token operator">:</span> <span class="token string">"关闭其他标签页"</span><span class="token punctuation">,</span>
  closeAll<span class="token operator">:</span> <span class="token string">"关闭全部标签页"</span><span class="token punctuation">,</span>
  more<span class="token operator">:</span> <span class="token string">"更多"</span><span class="token punctuation">,</span>
  maximize<span class="token operator">:</span> <span class="token string">"内容区域最大化"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue-文件使用" tabindex="-1"><a class="header-anchor" href="#vue-文件使用" aria-hidden="true">#</a> .vue 文件使用</h4>
<p>则可以在组件里的 Template 直接使用 <code v-pre>$t</code> 函数：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ $t("_tabsNav.refresh") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ $t("_tabsNav.closeCurrent") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ $t("_tabsNav.closeLeft") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ $t("_tabsNav.closeRight") }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ $t("_tabsNav.closeOthers") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ $t("_tabsNav.closeAll") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>又或者：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ t("_tabsNav.refresh") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ t("_tabsNav.closeCurrent") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ t("_tabsNav.closeLeft") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ t("_tabsNav.closeRight") }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ t("_tabsNav.closeOthers") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ t("_tabsNav.closeAll") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-i18n"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只关注 <code v-pre>$t</code> 函数，最终根据不同的语言来渲染不同的 value。</p>
<h4 id="ts-文件使用-非-setup" tabindex="-1"><a class="header-anchor" href="#ts-文件使用-非-setup" aria-hidden="true">#</a> .ts 文件使用（非 setup）</h4>
<p>提供的 transformI18n 函数：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ $t("_tabsNav.refresh") }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> transformI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/languages"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">transformI18n</span><span class="token punctuation">(</span><span class="token string">"_tabsNav.refresh"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种方式的使用场景不同，如果是 setup 函数，则可以使用 <code v-pre>$t</code> 或者 <code v-pre>transformI18n</code> 函数，如果是 <code v-pre>.ts</code> 文件，则只能使用 <code v-pre>transformI18n</code> 函数。</p>
<p>两种方式如果都匹配不到配置文件的 key，则直接返回传的内容。如 <code v-pre>$t(&quot;xxx&quot;)</code> 直接返回 xxx。</p>
<h3 id="路由使用" tabindex="-1"><a class="header-anchor" href="#路由使用" aria-hidden="true">#</a> 路由使用</h3>
<p>下面讲解国际化和非国际化的简单配置。</p>
<h4 id="路由非国际化" tabindex="-1"><a class="header-anchor" href="#路由非国际化" aria-hidden="true">#</a> 路由非国际化</h4>
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
<h4 id="路由国际化" tabindex="-1"><a class="header-anchor" href="#路由国际化" aria-hidden="true">#</a> 路由国际化</h4>
<p>路由支持国际化，默认关闭，那么如何开启呢？</p>
<blockquote>
<p>局部开启</p>
</blockquote>
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
<blockquote>
<p>全局开启</p>
</blockquote>
<p>有时候项目是国际化项目，而路由非常多，给每个路由配置 <code v-pre>useI18n: true</code> 比较麻烦，所以可以在 <code v-pre>src/config/settings</code> 里的 routerSettings 开启全局国际化：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> routerSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  routeUseI18n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elementplus-国际化" tabindex="-1"><a class="header-anchor" href="#elementplus-国际化" aria-hidden="true">#</a> ElementPlus 国际化</h2>
<p>如果你想修改 ElementPlus 的国际化，内容在 <code v-pre>src/App.vue</code> 文件下。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i18nLocale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useLayoutStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./stores/layout"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">"element-plus/es/locale/lang/zh-cn"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">"element-plus/es/locale/lang/en"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getBrowserLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./utils"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> layoutStore <span class="token operator">=</span> <span class="token function">useLayoutStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// element 语言配置</span>
<span class="token keyword">const</span> i18nLocale <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>layoutStore<span class="token punctuation">.</span>language <span class="token operator">&amp;&amp;</span> layoutStore<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">"zh-CN"</span><span class="token punctuation">)</span> <span class="token keyword">return</span> zhCn<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>layoutStore<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">"en-US"</span><span class="token punctuation">)</span> <span class="token keyword">return</span> en<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">getBrowserLang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"zh-CN"</span> <span class="token operator">?</span> zhCn <span class="token operator">:</span> en<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>layoutStore 是 Pinia 状态管理，缓存了浏览器语言。</p>
</div></template>


