<template><div><nav class="table-of-contents"><ul><li><router-link to="#布局">布局</router-link></li><li><router-link to="#标签栏">标签栏</router-link></li><li><router-link to="#页面刷新">页面刷新</router-link><ul><li><router-link to="#方法一">方法一</router-link></li><li><router-link to="#方法二">方法二</router-link></li><li><router-link to="#状态管理-pinia">状态管理 Pinia</router-link></li><li><router-link to="#事件总栈">事件总栈</router-link></li><li><router-link to="#错误日志">错误日志</router-link></li><li><router-link to="#工具">工具</router-link></li></ul></li><li><router-link to="#进度条">进度条</router-link></li><li><router-link to="#版本号缓存">版本号缓存</router-link></li></ul></nav>
<h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2>
<p>Admin 的布局组件有顶栏、侧边菜单栏、标签栏、内容区，位于 <code v-pre>src/layout</code> 下，分别位为 components 目录的 Header、Menu、TabsNav、MainContent 下。</p>
<p>内容区（MainContent）根据路由进行组件的跳转，可视化页面的组件在 <code v-pre>src/views</code> 下。</p>
<p>布局支持 6 种形式动态切换，分别为</p>
<ul>
<li>纵向布局：<code v-pre>src/layout/LayoutVertical</code></li>
<li>经典布局：<code v-pre>src/layout/LayoutClassic</code></li>
<li>横向布局：<code v-pre>src/layout/LayoutTransverse</code></li>
<li>分栏布局：<code v-pre>src/layout/LayoutColumns</code></li>
<li>混合布局：<code v-pre>src/layout/LayoutMixins</code></li>
<li>子系统布局：<code v-pre>src/layout/LayoutSubsystem</code></li>
</ul>
<p>所以使用了 <code v-pre>&lt;compoment is=&quot;&quot;&gt;&lt;/component&gt;</code> 内置组件来动态切换，具体请看 <code v-pre>src/layout/index.vue</code> 内容。</p>
<blockquote>
<p>默认布局</p>
</blockquote>
<p>可在 <code v-pre>src/config/settins</code> 的 themeSettings 配置默认布局：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> themeSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  layoutMode<span class="token operator">:</span> LayoutModeType<span class="token punctuation">.</span>Vertical<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>页面切换</p>
</blockquote>
<p>在页面的右上角，点击「头像」，然后点击「我的设置」，即可看到五个布局的预览图，点击即可切换布局。</p>
<p>Admin 内置设置缓存功能，所以下次进来的布局会是切换后的布局。</p>
<h2 id="标签栏" tabindex="-1"><a class="header-anchor" href="#标签栏" aria-hidden="true">#</a> 标签栏</h2>
<p>标签页支持两种形式，一种是保留了 <a href="https://vue2-admin.youngkbt.cn/" target="_blank" rel="noopener noreferrer">Vue2 Admin<ExternalLinkIcon/></a> 的经典版，另一种是使用了 <code v-pre>Element Plus</code> 提供的 <code v-pre>el-tabs</code> 组件。</p>
<p>标签栏采用了 <code v-pre>components</code> 内置组件来动态切换，具体请看 <code v-pre>src/layout/components/TabsNav</code> 内容。</p>
<blockquote>
<p>默认布局</p>
</blockquote>
<p>可在 <code v-pre>src/config/settins</code> 的 themeSettings 配置默认标签栏：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> themeSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  tabsNavMode<span class="token operator">:</span> TabsNavModeType<span class="token punctuation">.</span>Classic<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>页面切换</p>
</blockquote>
<p>在页面的右上角，点击「头像」，然后点击「我的设置」，即可看到两个标签栏的预览图，点击即可切换标签栏。</p>
<p>Admin 内置设置缓存功能，所以下次进来的标签栏会是切换后的标签栏。</p>
<h2 id="页面刷新" tabindex="-1"><a class="header-anchor" href="#页面刷新" aria-hidden="true">#</a> 页面刷新</h2>
<h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3>
<p>如果您想在执行完某些操作（增删改）之后刷新页面，Admin 已经通过 provide 往 views 目录下的组件注入一个函数，您只需要通过 inject 接收，然后调用即可。</p>
<p>相关代码：<code v-pre>layout/components/MainContent/index.vue</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RefreshFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> refreshCurrentPage<span class="token operator">:</span> <span class="token function-variable function">RefreshFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">"refresh"</span><span class="token punctuation">,</span> refreshCurrentPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用的方式有两种：</p>
<blockquote>
<p>传入参数</p>
</blockquote>
<p>接收的是一个函数，如果您调用该函数时，可以传入参数，参数类型为 boolean 值</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RefreshFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/layout/components/MainContent/index.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> refreshCurrentPage <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">"refresh"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> RefreshFunction<span class="token punctuation">;</span>
<span class="token function">refreshCurrentPage</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">refreshCurrentPage</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先传入 false，在 nextTick 生命周期再传入 true 来实现刷新</p>
<blockquote>
<p>不传参数</p>
</blockquote>
<p>您可以直接调用该函数，如果不传入参数，则函数内部自动实现刷新功能</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RefreshFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/layout/components/MainContent/index.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> refreshCurrentPage <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">"refresh"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> RefreshFunction<span class="token punctuation">;</span>
<span class="token function">refreshCurrentPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入参数的方式适用于您想在刷新前做些事情，在您没有第二次传入 true 时，页面是不会刷新的。</p>
<h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3>
<p>Template 内置重定向组件 <code v-pre>redirect.vue</code>，位于 <code v-pre>/src/layout/redirect.vue</code> 下，并且该组件已经在 constantRoutes 进行加载注入，所以你只需要了解如何使用该组件跳转即可。</p>
<p>方法非常简单，利用编程式路由跳转：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/redirect/home"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"/redirect/home"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样将会跳转到 <code v-pre>/home</code> 的路由，因此您要了解的是，<code v-pre>/redirect</code> 是必须的前缀，后面携带的地址就是路由对应的 path。</p>
<p>所以实现页面刷新，只需要在重定向到自己的 path。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/redirect"</span> <span class="token operator">+</span> route<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"/redirect"</span> <span class="token operator">+</span> route<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体是 <code v-pre>route.path</code> 还是 <code v-pre>route.fullPath</code>，根据你的需求来实现，最终都会刷新当前页面。</p>
<h3 id="状态管理-pinia" tabindex="-1"><a class="header-anchor" href="#状态管理-pinia" aria-hidden="true">#</a> 状态管理 Pinia</h3>
<p>状态管理文件既有组件需要的数据、方法、也有用户信息、路由权限等的初始化方法，配合路由守卫进行初始化，位于 <code v-pre>src/store/modules</code> 下。</p>
<ul>
<li><code v-pre>errorLog.ts</code>：错误日志 store</li>
<li><code v-pre>layout.ts</code>：布局信息 store</li>
<li><code v-pre>permission.ts</code>：路由权限 store</li>
<li><code v-pre>settings.ts</code>：项目客制化 store</li>
<li><code v-pre>user.ts</code>：用户信息 store</li>
</ul>
<h3 id="事件总栈" tabindex="-1"><a class="header-anchor" href="#事件总栈" aria-hidden="true">#</a> 事件总栈</h3>
<p>Vue3 已经把事件总栈去掉了，所以原生 Vue3 我们无法使用事件总栈来给不同组件传递事件。</p>
<p>Admin 使用了 mittBus 实现事件总栈。</p>
<p>注册一个事件到事件总栈：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> mittBus <span class="token keyword">from</span> <span class="token string">"@/utils/mittBus"</span><span class="token punctuation">;</span>

mittBus<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"openThemeDrawer"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>drawerVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事件总栈触发该事件：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> mittBus <span class="token keyword">from</span> <span class="token string">"@/utils/mittBus"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">openSettingsDrawer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  mittBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">"openThemeDrawer"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误日志" tabindex="-1"><a class="header-anchor" href="#错误日志" aria-hidden="true">#</a> 错误日志</h3>
<p>Admin 内置错误日志，当项目抛出 Error 的时候，Admin 会将其捕获，然后放到日志组件里，您可以在页面的右上角看到一个「虫子」的图标，点击后会跳转到日志页面，查看错误的信息。</p>
<p>「虫子」的图标只有在出现抛出至少 1 个 Error 的时候才会出现，默认是不出现的，如果你想直接访问，则访问项目根路径 + <code v-pre>/error-log</code> 即可。</p>
<p>Admin 默认只在生产环境捕获错误并持久化，在本地环境和测试环境该功能是关闭的，如果你想在本地环境或者测试环境开启，又或者在生产环境关闭，则在 <code v-pre>src/config/settings.ts</code> 文件的 layoutSettings 里，对 <code v-pre>errorLog</code> 进行配置：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> layoutSettings<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Settings<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  errorLog<span class="token operator">:</span> <span class="token punctuation">{</span>
    showInHeader<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 错误日志是否在顶部出现图标，提供可点击进入的入口</span>
    env<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"development"</span><span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token string">"production"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 错误日志触发的环境，这里依次对应 本地环境、测试环境、生产环境</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><code v-pre>errorLog.env</code> 配置了错误日志功能触发的环境后，当 Admin 出现 Error 时，该功能将 Error 进行捕获并持久化，所以开发者在浏览器开发者工具的 console 控制台无法看到错误信息。</p>
<p>这是因为 Admin 在 Error 显示到 console 控制台之前进行捕获。</p>
</div>
<p>错误日志功能的出现是为了让用户更直观的看到错误，从而快速截图，告知相关开发者解决问题。</p>
<p>如果不开启错误日志功能，则用户使用过程中出现的 Error，用户是不知道在哪里查看 Error 信息，而开发者只能根据用户提供的步骤进行复现，或者远程操控用户电脑看 console 控制台的错误，这是非常不方便的。</p>
<h3 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h3>
<p>Admin 常用的函数位于 <code v-pre>src/utils</code> 下，实现复用性，有数据深克隆、URL 参数值截取、展示 title 等功能函数。</p>
<p>Admin 继承了 Vue3 的核心思想：hooks 函数，位于 <code v-pre>src/hooks</code> 下。</p>
<h2 id="进度条" tabindex="-1"><a class="header-anchor" href="#进度条" aria-hidden="true">#</a> 进度条</h2>
<p>Admin 使用 nprogress 依赖来实现页面加载过程的进度条显示进度，如果你不喜欢 Admin 默认的进度条，则可以在 <code v-pre>src/config/nprogress.ts</code> 文件里进行修改。</p>
<p>下面是 Admin 默认的 nprogress 配置内容：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">"nprogress"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"nprogress/nprogress.css"</span><span class="token punctuation">;</span>

NProgress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  easing<span class="token operator">:</span> <span class="token string">"ease"</span><span class="token punctuation">,</span> <span class="token comment">// 动画方式</span>
  speed<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// 递增进度条的速度</span>
  showSpinner<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否显示加载 ico</span>
  trickleSpeed<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// 自动递增间隔</span>
  minimum<span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token comment">// 初始化时的最小百分比</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> NProgress<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本号缓存" tabindex="-1"><a class="header-anchor" href="#版本号缓存" aria-hidden="true">#</a> 版本号缓存</h2>
<p>Admin 内置一些布局的缓存功能：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Settings</span> <span class="token punctuation">{</span>
  settingCacheKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 缓存配置的 key，缓存项目的配置</span>
  layoutCacheKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 缓存布局的 key，缓存项目的布局</span>
  tabsNavCacheKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 缓存标签页的 key，缓存标签页内容</span>
  versionCacheKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 缓存版本号的 key，缓存版本号</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些缓存会存在 <code v-pre>localstorage</code> 里，因此缓存是否被清除取决于用户的操作。</p>
<p>Admin 经历过很多这些缓存导致问题的场景，比如 Admin 发布了一个新版，修改了内容是配置、项目，但是因为用户的浏览器已经缓存了这些旧版内容，而新版用旧版的缓存导致出现了很多问题，因此 Admin 内置版本号缓存功能。</p>
<p>版本号缓存功能：当你发布一个版本的时候，Admin 首先会清除上一个版本（如果存在）的缓存，然后再缓存这个版本相关的配置、布局、标签页内容。</p>
<p>那么如何让 Admin 知道你更新了一个新版呢？</p>
<p>这是版本号缓存功能的原理：读取 <code v-pre>package.json</code> 的 <code v-pre>version</code>：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre json="" class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"kbt-vue3-admin"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.0.1"</span><span class="token punctuation">,</span>
  <span class="token property">"private"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面的 version，Admin 会缓存 0.0.1 版本的配置、布局、标签页内容，当你将 version 变成 0.0.1，则 Admin 将 0.0.1 的缓存清除，然后再缓存 0.0.2 的配置、布局、标签页内容。</p>
<p>因此你只需要修改 version 即可重新触发版本号缓存功能。</p>
</div></template>


