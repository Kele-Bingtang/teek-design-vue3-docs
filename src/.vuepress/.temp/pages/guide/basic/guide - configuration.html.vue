<template><div><nav class="table-of-contents"><ul><li><router-link to="#环境变量">环境变量</router-link><ul><li><router-link to="#配置文件">配置文件</router-link></li><li><router-link to="#具体配置">具体配置</router-link></li><li><router-link to="#基础用法">基础用法</router-link></li><li><router-link to="#如何添加自定义配置">如何添加自定义配置</router-link></li></ul></li><li><router-link to="#全局配置文件">全局配置文件</router-link><ul><li><router-link to="#基础用法-1">基础用法</router-link></li><li><router-link to="#添加自定义配置">添加自定义配置</router-link></li><li><router-link to="#添加分类">添加分类</router-link></li></ul></li></ul></nav>
<h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2>
<h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>
<p>一共 <code v-pre>四</code> 个配置文件，都在平台根目录下，具体如下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>├── .env                  # 基础环境变量配置文件（优先级最低）
├── .env.development      # 开发环境变量配置文件
├── .env.production       # 生产环境变量配置文件
├── .env.test             # 测试环境变量配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="具体配置" tabindex="-1"><a class="header-anchor" href="#具体配置" aria-hidden="true">#</a> 具体配置</h3>
<p>.env 文件内置 <code v-pre>五</code> 个环境变量，具体如下</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># port</span>
VITE_PORT <span class="token operator">=</span> <span class="token number">8099</span>

<span class="token comment"># open 运行 npm run dev 时自动打开浏览器</span>
VITE_OPEN <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment"># 是否生成包分析文件</span>
VITE_REPORT <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment"># 是否开启 gzip 压缩</span>
VITE_BUILD_GZIP <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment"># 是否删除生产环境 console</span>
VITE_DROP_CONSOLE <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">VITE_PORT</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"当前环境变量 VITE_PORT 为："</span><span class="token punctuation">,</span> <span class="token constant">VITE_PORT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如何在 <code v-pre>.vue</code> 或 <code v-pre>.ts</code> 文件中判断当前是开发环境还是生产环境？</p>
</blockquote>
<p>打印 <code v-pre>process.env.NODE_ENV</code>，值为 <code v-pre>development</code> 代表是开发环境，值为 <code v-pre>production</code> 代表是生产环境。</p>
<blockquote>
<p>如何在 <code v-pre>.vue</code> 或 <code v-pre>.ts</code> 文件中判断当前环境是打包还是本地编译</p>
</blockquote>
<p>使用 <code v-pre>import.meta.env.DEV</code>，如果为 true 代表是本地编译环境，为 false 则是打包后的环境。</p>
<h3 id="如何添加自定义配置" tabindex="-1"><a class="header-anchor" href="#如何添加自定义配置" aria-hidden="true">#</a> 如何添加自定义配置</h3>
<p>添加自定义配置，Vitepress 强制规范是 <code v-pre>VITE_</code> 作为自定义配置前缀，否则无法读取到自定义的配置。</p>
<p>比如要在 <code v-pre>.env.production</code> 文件添加自定义配置 <code v-pre>VITE_ENVIROMENT = &quot;office&quot;</code>，具体如下</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 自定义配置</span>
VITE_ENVIROMENT <span class="token operator">=</span> office
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>加入类型支持，在 <code v-pre>src/env.d.ts</code> 的 ImportMetaEnv 里加上 <code v-pre>VITE_ENVIROMENT: string</code>，具体如下</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ImportMetaEnv</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_ENVIROMENT</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局配置文件" tabindex="-1"><a class="header-anchor" href="#全局配置文件" aria-hidden="true">#</a> 全局配置文件</h2>
<p>全局配置文件提供了针对框架配置的内容，位于 <code v-pre>src/config/settings.ts</code> 下。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Settings</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 项目 title</span>
  titleMode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 标题在浏览器标签上的多种模式。0：项目 title + 页面 title，1：用户名 + 页面 title，2：项目 title，3：页面 title</span>
  layoutMode<span class="token operator">:</span> LayoutModeType<span class="token punctuation">;</span> <span class="token comment">// 布局设置：vertical、classic、transverse、columns、subsystem、mixins</span>
  tabsNavMode<span class="token operator">:</span> TabsNavModeType<span class="token punctuation">;</span> <span class="token comment">// 标签页设置：classic、popular</span>
  showSettings<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否显示设置</span>
  showBreadcrumb<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否使用 Breadcrumb</span>
  showTabsNav<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否使用 tagsNav</span>
  showLayoutLogo<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否显示布局 Logo</span>
  showBreadcrumbIcon<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 面包屑 Icon 是否显示</span>
  showTabsNavIcon<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 标签栏 Icon 是否显示</span>
  isCollapse<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否折叠菜单栏</span>
  isDark<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否开启暗色主题</span>
  isWeak<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否开启灰色主题</span>
  isGrey<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否开启色弱主题</span>
  routeUseI18n<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 「路由」布局是否使用国际化，默认为 false，如果不使用，则需要在路由中给需要在菜单中展示的路由设置 meta: {title: 'xxx'} 用来在菜单中显示文字</span>
  recordTabsNav<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否记录打开过（没关闭）的 tags，下次打开会加载在 tagsNav</span>
  maximize<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// MainContent 是否开启最大化，默认不开启（false）</span>
  primaryTheme<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 主题色</span>
  layoutTheme<span class="token operator">:</span> LayoutThemeType<span class="token punctuation">;</span> <span class="token comment">// 侧边菜单栏的主题色，暗色和亮色，默认为暗色</span>
  errorLog<span class="token operator">:</span> <span class="token punctuation">{</span>
    showInHeader<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 设为 false 后不会在顶部显示错误日志徽标</span>
    env<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 日志收集的环境，默认是 production 生成环境</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 白名单额三种模式：["*"]、["next"]、[to.path, ...]
   * * 代表加载所有路由；next 代表直接放行，但不加载权限路由；to.path 表示指定的路由可以放行，可以填多个
   * 优先级：* > next > to.path
   */</span>
  whiteList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 这是路由和菜单呼应可能产生的问题而需要配置：alwaysShowRoot 为 false 情况（确保您了解路由的配置规则，如果不了解，前往 router/router-config 查看）
   * true：存在多个二级路由，但是只有一个二级路由 hideInMenu 为 false，举例：有 5 个二级路由，但是有 4 个二级路由 hideInMenu: true，则需要开启 true，确保菜单只渲染剩下的路由
   *
   * 为 true 的场景较少见，如果真的遇到，则开启为 true，否则不建议开启，虽然 true 能无需后顾之忧，但是会多重复一次过滤递归，即消耗点性能
   *
   * 如果看不懂这个配置没关系，当您配置路由时遇到为 true 的场景时，自然懂得
   */</span>
  moreRouteChildrenHideInMenuThenOnlyOne<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  layoutSize<span class="token operator">:</span> LayoutSizeType<span class="token punctuation">;</span>
  language<span class="token operator">:</span> LanguageType<span class="token punctuation">;</span>
  settingCacheKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 缓存配置的 key</span>
  layoutCacheKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 缓存布局的 key</span>
  tabsNavCacheKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 缓存标签页的 key</span>
  tabActiveExcludes<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 当 URL 携带 ? 的参数时，标签页的 path 也会携带参数，当 recordTabsNav 为 true 时，会造成多个重复的只是 ? 参数不一样的标签页，该选项指定当出现指定参数不会加载到 path，即该标签的 path 只保留 ? 前面的链接。当存在多个条件，满足任意一个即可</span>
  isKeepAlive<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 路由是否开启缓存</span>
  isFull<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否全屏，不渲染 Layout 布局，只渲染当前路由组件</span>
  cacheDynamicRoutes<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否缓存路由，默认不开启（false）</span>
  cacheDynamicRoutesKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 缓存路由的 key</span>
  tooltipEffect<span class="token operator">:</span> <span class="token string">"light"</span> <span class="token operator">|</span> <span class="token string">"dark"</span><span class="token punctuation">;</span> <span class="token comment">// 布局的 el-toolTip 风格</span>
  routeUseTooltip<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 菜单的文字超出后，是否使用 el-toolTip 提示，仅针二级路由及以上生效</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该文件已经为不同的配置进行了分类：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 主题类配置</span>
<span class="token keyword">const</span> themeSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">"kbt-vue3-admin"</span><span class="token punctuation">,</span>
  titleMode<span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
  layoutMode<span class="token operator">:</span> LayoutModeType<span class="token punctuation">.</span>Vertical<span class="token punctuation">,</span>
  tabsNavMode<span class="token operator">:</span> TabsNavModeType<span class="token punctuation">.</span>Classic<span class="token punctuation">,</span>
  showBreadcrumb<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  showTabsNav<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  showLayoutLogo<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  showBreadcrumbIcon<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  showTabsNavIcon<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  recordTabsNav<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  isCollapse<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  isDark<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  isWeak<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  isGrey<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  maximize<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  primaryTheme<span class="token operator">:</span> <span class="token string">"#168BF7"</span><span class="token punctuation">,</span> <span class="token comment">// 蓝色偏暗：#168BF7，官方：#409EFF</span>
  layoutTheme<span class="token operator">:</span> LayoutThemeType<span class="token punctuation">.</span>Light<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 布局类配置</span>
<span class="token keyword">const</span> layoutSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  showSettings<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  errorLog<span class="token operator">:</span> <span class="token punctuation">{</span>
    showInHeader<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    env<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"production"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  moreRouteChildrenHideInMenuThenOnlyOne<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  tooltipEffect<span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">,</span>
  layoutSize<span class="token operator">:</span> <span class="token string">"default"</span><span class="token punctuation">,</span>
  language<span class="token operator">:</span> <span class="token string">"zh-CN"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 路由类配置</span>
<span class="token keyword">const</span> routerSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  routeUseI18n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  whiteList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  isKeepAlive<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  isFull<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  cacheDynamicRoutes<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  routeUseTooltip<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 缓存类配置</span>
<span class="token keyword">const</span> keySetting<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  settingCacheKey<span class="token operator">:</span> <span class="token string">"kbt_settingsStore"</span><span class="token punctuation">,</span>
  layoutCacheKey<span class="token operator">:</span> <span class="token string">"kbt_layoutStore"</span><span class="token punctuation">,</span>
  tabsNavCacheKey<span class="token operator">:</span> <span class="token string">"kbt_tabsNav"</span><span class="token punctuation">,</span>
  cacheDynamicRoutesKey<span class="token operator">:</span> <span class="token string">"kbt_dynamic_routes"</span><span class="token punctuation">,</span>
  tabActiveExcludes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"layoutMode"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终这些分类将放到一个总分类进行合并：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> settings<span class="token operator">:</span> Settings <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">(</span>themeSettings <span class="token keyword">as</span> Settings<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token punctuation">(</span>layoutSettings <span class="token keyword">as</span> Settings<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token punctuation">(</span>routerSettings <span class="token keyword">as</span> Settings<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token punctuation">(</span>keySetting <span class="token keyword">as</span> Settings<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础用法-1" tabindex="-1"><a class="header-anchor" href="#基础用法-1" aria-hidden="true">#</a> 基础用法</h3>
<p>引入 settings 即可：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> settings <span class="token keyword">from</span> <span class="token string">"@/config/settings"</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>settings<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加自定义配置" tabindex="-1"><a class="header-anchor" href="#添加自定义配置" aria-hidden="true">#</a> 添加自定义配置</h3>
<p>比如要添加的自定义配置为 <code v-pre>isKeepAlive: true</code>。</p>
<p>加入类型支持，在 settings 的 interface 里添加 <code v-pre>isKeepAlive: true</code>。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Settings</span> <span class="token punctuation">{</span>
  isKeepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再根据该配置进行分类，如在 routerSettings 下，则</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> routerSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  isKeepAlive<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加分类" tabindex="-1"><a class="header-anchor" href="#添加分类" aria-hidden="true">#</a> 添加分类</h3>
<p>如添加一个 cacheSettings，则在 settings 文件：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> cacheSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  isKeepAlive<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 settings 文件找到 settings 变量：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> settings<span class="token operator">:</span> Settings <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">(</span>cacheSettings <span class="token keyword">as</span> Settings<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json 文件中的 <code v-pre>scripts</code> 配置中存放各种命令，具体如下</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite --mode development"</span><span class="token punctuation">,</span>
  <span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"vite --mode development"</span><span class="token punctuation">,</span>
  <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"rimraf dist &amp;&amp; vite build --mode production"</span><span class="token punctuation">,</span>
  <span class="token property">"build:prod"</span><span class="token operator">:</span> <span class="token string">"rimraf dist &amp;&amp; vite build --mode production"</span><span class="token punctuation">,</span>
  <span class="token property">"build:test"</span><span class="token operator">:</span> <span class="token string">"rimraf dist &amp;&amp; vite build --mode test"</span><span class="token punctuation">,</span>
  <span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span><span class="token punctuation">,</span>
  <span class="token property">"report"</span><span class="token operator">:</span> <span class="token string">"rimraf dist &amp;&amp; vite build"</span><span class="token punctuation">,</span>
  <span class="token property">"cloc"</span><span class="token operator">:</span> <span class="token string">"NODE_OPTIONS=--max-old-space-size=4096 cloc . --exclude-dir=node_modules"</span><span class="token punctuation">,</span>
  <span class="token property">"clean:cache"</span><span class="token operator">:</span> <span class="token string">"rm -rf node_modules &amp;&amp; rm -rf .eslintcache &amp;&amp; yarn install"</span><span class="token punctuation">,</span>
  <span class="token property">"prepare"</span><span class="token operator">:</span> <span class="token string">"husky install"</span><span class="token punctuation">,</span>
  <span class="token property">"lint:lint-staged"</span><span class="token operator">:</span> <span class="token string">"lint-staged -c ./.husky/lintstagedrc.js"</span><span class="token punctuation">,</span>
  <span class="token property">"lint:stylelint"</span><span class="token operator">:</span> <span class="token string">"stylelint \"**/*.{vue,css,scss,postcss,less}\" --fix"</span><span class="token punctuation">,</span>
  <span class="token property">"lint:prettier"</span><span class="token operator">:</span> <span class="token string">"prettier --write  \"src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}\""</span><span class="token punctuation">,</span>
  <span class="token property">"lint:eslint"</span><span class="token operator">:</span> <span class="token string">"eslint --max-warnings 0  \"{src,mock,build}/**/*.{vue,js,ts,tsx}\" --fix"</span><span class="token punctuation">,</span>
  <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"yarn lint:eslint &amp;&amp; yarn lint:prettier &amp;&amp; yarn lint:stylelint"</span><span class="token punctuation">,</span>
  <span class="token property">"release"</span><span class="token operator">:</span> <span class="token string">"standard-version"</span><span class="token punctuation">,</span>
  <span class="token property">"commit"</span><span class="token operator">:</span> <span class="token string">"git add . &amp;&amp; git-cz &amp;&amp; git push"</span><span class="token punctuation">,</span>
  <span class="token property">"commit:all"</span><span class="token operator">:</span> <span class="token string">"git pull &amp;&amp; git add . &amp;&amp; git-cz &amp;&amp; git push"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


