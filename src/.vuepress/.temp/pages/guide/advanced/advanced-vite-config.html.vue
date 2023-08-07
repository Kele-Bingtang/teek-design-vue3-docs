<template><div><nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link></li><li><router-link to="#环境变量">环境变量</router-link></li><li><router-link to="#">@</router-link></li><li><router-link to="#plugins-插件">plugins 插件</router-link><ul><li><router-link to="#预构建">预构建</router-link></li></ul></li><li><router-link to="#proxy-代理">proxy 代理</router-link></li><li><router-link to="#css-全局注入">css 全局注入</router-link></li><li><router-link to="#打包">打包</router-link></li><li><router-link to="#admin-信息">Admin 信息</router-link></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>下面介绍下 Admin 的 <code v-pre>vite.config.ts</code> 的内容。</p>
<p><code v-pre>vite.config.ts</code> 是 Vite 构建、打包的核心配置文件。</p>
<p><a href="https://cn.vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite 官方文档<ExternalLinkIcon/></a></p>
<h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2>
<p>Admin 在 <code v-pre>vite.config.ts</code> 文件里封装了一个文件来获取环境变量，文件路径为 <code v-pre>/build/getEnv</code>。</p>
<p>环境变量指的是项目根目录下 <code v-pre>.env</code> 或者 <code v-pre>.env.xxx</code> 文件里的变量。</p>
<p>假设 <code v-pre>.env.development</code> 文件的环境变量为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 本地环境接口地址</span>
VITE_API_URL <span class="token operator">=</span> <span class="token string">'/api'</span>

<span class="token comment"># 静态文件获取根路径</span>
VITE_PUBLIC_PATH <span class="token operator">=</span> <span class="token string">"/"</span>

<span class="token comment"># 线上环境路由历史模式（Hash 模式传 "hash"、HTML5 模式传 "h5"、Hash 模式带 base 参数传 "hash, base 参数"、HTML5 模式带 base 参数传 "h5, base 参数"），如果填错或者不填，则默认 h5</span>
VITE_ROUTER_MODE <span class="token operator">=</span> <span class="token string">"h5"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以这样在 <code v-pre>vite.config.ts</code> 获取环境变量：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> fileURLToPath<span class="token punctuation">,</span> <span class="token constant">URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"node:url"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">ConfigEnv</span><span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">UserConfig</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> wrapperEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./build/getEnv"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> command<span class="token punctuation">,</span> mode <span class="token punctuation">}</span><span class="token operator">:</span> ConfigEnv<span class="token punctuation">)</span><span class="token operator">:</span> UserConfig <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> viteEnv <span class="token operator">=</span> <span class="token function">wrapperEnv</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"静态文件根路径："</span> <span class="token operator">+</span> env<span class="token punctuation">.</span><span class="token constant">VITE_PUBLIC_PATH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Admin 在 <code v-pre>vite.config.ts</code> 文件里通过这样的方式让项目的静态文件 base 路径根据不同的环境变量 <code v-pre>VITE_PUBLIC_PATH</code> 来进行配置。</p>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> @</h2>
<p>在 Admin 项目开发中，<code v-pre>@</code> 是一个常用的符号，它代表 <code v-pre>src</code>，如 <code v-pre>@/main.ts</code> 代表 <code v-pre>src/main.ts</code>。</p>
<p>当 <strong>不同目录</strong> 的文件之间内容引用的时候，Admin 建议使用 <code v-pre>@</code> 来 import 引用。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useSettingsStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/stores/settings"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MainContent <span class="token keyword">from</span> <span class="token string">"@/layout/components/MainContent/index.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">"@/layout/components/Header/index.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePermissionStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/stores/permission"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/hooks/useLayout"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> settings <span class="token keyword">from</span> <span class="token string">"@/config/settings"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CommonIcon <span class="token keyword">from</span> <span class="token string">"@/layout/components/CommonIcon/index.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">"@/layout/components/Menu/index.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Tooltip <span class="token keyword">from</span> <span class="token string">"@/components/Tooltip/index.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">HOME_URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/router/routesConfig"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当文件目录层级深的时候，通过相对路径引用看起来非常不优雅，所以此时使用 <code v-pre>@</code> 可以让代码 import 看起来非常简洁。</p>
<p>当然，如果文件引用的层级不深，完全可以用相对路径来引用：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> LayoutVertical <span class="token keyword">from</span> <span class="token string">"./LayoutVertical/index.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LayoutClassic <span class="token keyword">from</span> <span class="token string">"./LayoutClassic/index.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LayoutTransverse <span class="token keyword">from</span> <span class="token string">"./LayoutTransverse/index.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LayoutColumns <span class="token keyword">from</span> <span class="token string">"./LayoutColumns/index.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LayoutMixins <span class="token keyword">from</span> <span class="token string">"./LayoutMixins/index.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LayoutSubsystem <span class="token keyword">from</span> <span class="token string">"./LayoutSubsystem/index.vue"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么为什么 <code v-pre>@</code> 符号可以代表 <code v-pre>src</code> 呢？是 Vue 项目自带还是需要配置呢？</p>
<p><code v-pre>@</code> 符号是需要配置的，至于为什么叫做 <code v-pre>@</code>，这是大家约定成俗的规范。</p>
<p>在 <code v-pre>vite.config.ts</code> 文件里，你可以看到这样一段代码：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> fileURLToPath<span class="token punctuation">,</span> <span class="token constant">URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"node:url"</span><span class="token punctuation">;</span>

resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"@"</span><span class="token operator">:</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"./src"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是 <code v-pre>@</code> 的配置，如果大家想要有更多的自定义符号映射一个路径，则参考 <code v-pre>@</code> 来添加，如添加 <code v-pre>$</code> 代表 <code v-pre>src/components</code>：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> fileURLToPath<span class="token punctuation">,</span> <span class="token constant">URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"node:url"</span><span class="token punctuation">;</span>

resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"@"</span><span class="token operator">:</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"./src"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">"$"</span><span class="token operator">:</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"./src/components"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="plugins-插件" tabindex="-1"><a class="header-anchor" href="#plugins-插件" aria-hidden="true">#</a> plugins 插件</h2>
<p>你可以在 <code v-pre>vite.config.ts</code> 文件里看到这段代码：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getPluginsList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./build/plugins"</span><span class="token punctuation">;</span>

plugins<span class="token operator">:</span> <span class="token function">getPluginsList</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> viteEnv<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vite 支持很多的插件，为了不让 <code v-pre>vite.config.ts</code> 文件内容太多，因此 Admin 将插件单独抽出来放到 <code v-pre>./build/plugins.ts</code> 文件里。</p>
<p>在 <code v-pre>./build/plugins.ts</code> 文件可以看到，Admin 添加了：</p>
<ul>
<li>Vue 支持 jsx、tsx</li>
<li>Eslint 相关插件</li>
<li>setup 支持组件命名</li>
<li>Vue API 自动引入</li>
<li>svg 图标使用</li>
<li>静态资源打包压缩</li>
<li>打包分析</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">return</span> <span class="token punctuation">[</span>
  <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">eslintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// EsLint 报错信息显示在浏览器界面上</span>
  <span class="token function">VueSetupExtend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// script setup 标签支持 name 命名组件</span>
  <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"vue-router"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 自动引入 vue 的 ref、toRefs、onMounted 等，无需在页面中再次引入</span>
    dts<span class="token operator">:</span> <span class="token string">"src/auto-import.d.ts"</span><span class="token punctuation">,</span> <span class="token comment">// 生成在 src 路径下名为 auto-import.d.ts 的声明文件</span>
    eslintrc<span class="token operator">:</span> <span class="token punctuation">{</span>
      enabled<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 改为 true 用于生成 eslint 配置。生成后改回 false，避免重复生成消耗</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用 svg 图标</span>
  <span class="token function">createSvgIconsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    iconDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"src/assets/icons"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    symbolId<span class="token operator">:</span> <span class="token string">"icon-[dir]-[name]"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  viteEnv<span class="token punctuation">.</span><span class="token constant">VITE_BUILD_GZIP</span> <span class="token operator">&amp;&amp;</span> <span class="token function">configCompressPlugin</span><span class="token punctuation">(</span>viteEnv<span class="token punctuation">.</span><span class="token constant">VITE_COMPRESSION</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 打包分析</span>
  <span class="token punctuation">(</span>lifecycle <span class="token operator">===</span> <span class="token string">"report"</span> <span class="token operator">||</span> viteEnv<span class="token punctuation">.</span><span class="token constant">VITE_REPORT</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
  <span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> brotliSize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> filename<span class="token operator">:</span> <span class="token string">"report.html"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预构建" tabindex="-1"><a class="header-anchor" href="#预构建" aria-hidden="true">#</a> 预构建</h3>
<p>请看 <RouterLink to="/guide/advanced/advanced-pre-build.html">预构建</RouterLink>。</p>
<h2 id="proxy-代理" tabindex="-1"><a class="header-anchor" href="#proxy-代理" aria-hidden="true">#</a> proxy 代理</h2>
<p>本地开发的时候，涉及请求，会发生跨域问题，那么最好的一个方式就是代理。</p>
<p>Vite 内置代理模式，所以 Admin 在 <code v-pre>vite.config.ts</code> 里写了一个代理 Demo：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre json="" class="language-json"><code>server<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"</span>
  host<span class="token operator">:</span> <span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span>
  port<span class="token operator">:</span> viteEnv.VITE_PORT<span class="token punctuation">,</span>
  open<span class="token operator">:</span> viteEnv.VITE_OPEN<span class="token punctuation">,</span>
  cors<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 跨域代理配置</span>
  proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"/api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      target<span class="token operator">:</span> <span class="token string">"https://youngkbt.cn"</span><span class="token punctuation">,</span>
      changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      rewrite<span class="token operator">:</span> path => path.replace(/^\/api/<span class="token punctuation">,</span> <span class="token string">""</span>)<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要修改 target 对应的链接就可以了。</p>
<p>如果本地开发的时候，涉及多个不同服务的接口，则跨域添加多个代理：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>server<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"</span>
  host<span class="token operator">:</span> <span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span>
  port<span class="token operator">:</span> viteEnv.VITE_PORT<span class="token punctuation">,</span>
  open<span class="token operator">:</span> viteEnv.VITE_OPEN<span class="token punctuation">,</span>
  cors<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 跨域代理配置</span>
  proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"/api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      target<span class="token operator">:</span> <span class="token string">"https://youngkbt.cn"</span><span class="token punctuation">,</span>
      changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      rewrite<span class="token operator">:</span> path => path.replace(/^\/api/<span class="token punctuation">,</span> <span class="token string">""</span>)<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"/test"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      target<span class="token operator">:</span> <span class="token string">"https://youngkbt.cn"</span><span class="token punctuation">,</span>
      changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      rewrite<span class="token operator">:</span> path => path.replace(/^\/test/<span class="token punctuation">,</span> <span class="token string">""</span>)<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 rewrite 是将代理的标识（如上面的 <code v-pre>/api</code>，<code v-pre>/test</code>）去掉，否则请求的时候将会携带这些标识。</p>
<h2 id="css-全局注入" tabindex="-1"><a class="header-anchor" href="#css-全局注入" aria-hidden="true">#</a> css 全局注入</h2>
<p>Admin 使用 Vite 的 <code v-pre>css.preprocessorOptions</code> 将 <code v-pre>src/styles/index.scss</code> 里的样式全局注册到项目中。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>css<span class="token operator">:</span> <span class="token punctuation">{</span>
  preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    scss<span class="token operator">:</span> <span class="token punctuation">{</span>
      additionalData<span class="token operator">:</span> `@import <span class="token string">"@/styles/index.scss"</span>;`<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2>
<p>Admin 使用 Vite 自带的打包方式，在打包过程去掉 <code v-pre>console.log</code> 和 <code v-pre>debugger</code> 调式代码。</p>
<p>同时对静态资源进行分类打包，如 css 专门放在 css 文件夹下，js 专门放在 js 文件夹下。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 打包去除 console.log &amp;&amp; debugger</span>
esbuild<span class="token operator">:</span> <span class="token punctuation">{</span>
  pure<span class="token operator">:</span> viteEnv.VITE_DROP_CONSOLE ? <span class="token punctuation">[</span><span class="token string">"console.log"</span><span class="token punctuation">,</span> <span class="token string">"debugger"</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
build<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// esbuild 打包更快，但是不能去除 console.log，terser 打包慢，但能去除 console.log</span>
  minify<span class="token operator">:</span> <span class="token string">"esbuild"</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否生成 map</span>
  sourcemap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 消除打包大小超过 500kb 警告</span>
  chunkSizeWarningLimit<span class="token operator">:</span> <span class="token number">4000</span><span class="token punctuation">,</span>
  rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    input<span class="token operator">:</span> <span class="token punctuation">{</span>
      index<span class="token operator">:</span> resolve(__dirname<span class="token punctuation">,</span> <span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">"index.html"</span>)<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 静态资源分类打包</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
      chunkFileNames<span class="token operator">:</span> <span class="token string">"static/js/[name]-[hash].js"</span><span class="token punctuation">,</span>
      entryFileNames<span class="token operator">:</span> <span class="token string">"static/js/[name]-[hash].js"</span><span class="token punctuation">,</span>
      assetFileNames<span class="token operator">:</span> <span class="token string">"static/[ext]/[name]-[hash].[ext]"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="admin-信息" tabindex="-1"><a class="header-anchor" href="#admin-信息" aria-hidden="true">#</a> Admin 信息</h2>
<p>Admin 在 <code v-pre>vite.config.ts</code> 里将 package.json 的部分信息全局注入到项目中：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">ConfigEnv</span><span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">UserConfig</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pkg <span class="token keyword">from</span> <span class="token string">"./package.json"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __APP_INFO__ <span class="token operator">=</span> <span class="token punctuation">{</span>
  pkg<span class="token operator">:</span> <span class="token punctuation">{</span> dependencies<span class="token punctuation">,</span> devDependencies<span class="token punctuation">,</span> name<span class="token punctuation">,</span> version <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// package.json 相关信息</span>
  lastBuildTime<span class="token operator">:</span> <span class="token function">getNowDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 打包时间</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> command<span class="token punctuation">,</span> mode <span class="token punctuation">}</span><span class="token operator">:</span> ConfigEnv<span class="token punctuation">)</span><span class="token operator">:</span> UserConfig <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> viteEnv <span class="token operator">=</span> <span class="token function">wrapperEnv</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    define<span class="token operator">:</span> <span class="token punctuation">{</span>
      __APP_INFO__<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>__APP_INFO__<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局注入到项目的 key 是 <code v-pre>__APP_INFO__</code>，于是你可以在项目的任意位置这样读取 package.json 的信息：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> lastBuildTime <span class="token punctuation">}</span> <span class="token operator">=</span> __APP_INFO__<span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"项目最好 Build 时间："</span> <span class="token operator">+</span> lastBuildTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


