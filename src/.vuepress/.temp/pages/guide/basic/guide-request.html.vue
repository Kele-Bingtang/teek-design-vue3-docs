<template><div><nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link><ul><li><router-link to="#中文文档">中文文档</router-link></li></ul></li><li><router-link to="#配置">配置</router-link></li><li><router-link to="#基本使用">基本使用</router-link><ul><li><router-link to="#get">get</router-link></li><li><router-link to="#其他">其他</router-link></li><li><router-link to="#完整写法">完整写法</router-link></li></ul></li><li><router-link to="#contenttype-封装">ContentType 封装</router-link></li><li><router-link to="#数组封装">数组封装</router-link></li><li><router-link to="#loading-封装">Loading 封装</router-link></li><li><router-link to="#映射封装">映射封装</router-link></li><li><router-link to="#请求异常封装">请求异常封装</router-link></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>Admin 基于 Axios 封装了一套开箱即用的 http 请求。包括请求 Loading、错误处理、取消请求等功能，在 <code v-pre>src/config/request</code> 目录下。</p>
<h3 id="中文文档" tabindex="-1"><a class="header-anchor" href="#中文文档" aria-hidden="true">#</a> 中文文档</h3>
<p><a href="https://www.axios-http.cn/" target="_blank" rel="noopener noreferrer">点击查看 Axios 中文文档<ExternalLinkIcon/></a></p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>你需要手动配置你的 <code v-pre>baseURL</code>，<code v-pre>baseURL</code> 默认读取环境变量文件 <code v-pre>.env.xxx</code> 的 <code v-pre>VITE_API_URL</code>：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 默认地址请求地址，可在 .env.*** 文件中修改</span>
  baseURL<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_URL</span><span class="token punctuation">,</span>
  <span class="token comment">// 设置超时时间（10s）</span>
  timeout<span class="token operator">:</span> ResultEnum<span class="token punctuation">.</span><span class="token constant">TIMEOUT</span> <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><code v-pre>baseURL</code> 是通过环境变量加载的。你应该去项目根目录下的 <code v-pre>.env.***</code> 文件中修改 <code v-pre>VITE_API_URL</code>，而不是在此处直接修改。</p>
</div>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<p>Admin 封装了六种方法，基本满足请求的场景。</p>
<h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> params<span class="token operator">?</span><span class="token operator">:</span> object<span class="token punctuation">,</span> _object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> params<span class="token punctuation">,</span> <span class="token operator">...</span>_object <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">,</span> <span class="token string">"参数"</span><span class="token punctuation">,</span> <span class="token string">"其他信息"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加数据的 TS 返回类型：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">,</span> <span class="token string">"参数"</span><span class="token punctuation">,</span> <span class="token string">"其他信息"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3>
<p>Admin 还支持 post、put、delete、download 请求，用法和 get 一样。</p>
<h3 id="完整写法" tabindex="-1"><a class="header-anchor" href="#完整写法" aria-hidden="true">#</a> 完整写法</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfigProp<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">service</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Admin 还兼容 Axios 的完整写法：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">"/test"</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"可乐"</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加数据的 TS 返回类型：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">"/test"</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"可乐"</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contenttype-封装" tabindex="-1"><a class="header-anchor" href="#contenttype-封装" aria-hidden="true">#</a> ContentType 封装</h2>
<p>Admin 对 ContentType 进行了一些封装，提供了关键词 <code v-pre>_type</code> 来快速修改 ContentType，在 params 下添加了一个关键词 <code v-pre>_type</code>（仅支持 <code v-pre>post</code> 请求），该关键词目前接收 5 个参数：</p>
<ul>
<li><code v-pre>form</code>：请求头为 <code v-pre>application/x-www-form-urlencoded</code></li>
<li><code v-pre>file</code>：请求头为 <code v-pre>application/form-data</code></li>
<li><code v-pre>json</code>：请求头为 <code v-pre>application/json</code></li>
<li><code v-pre>info</code>：请求头为 <code v-pre>multipart/form-data</code></li>
<li><code v-pre>multi</code>：代表发送的参数有数组，会自动处理成 <code v-pre>key=value&amp;key=value</code> 形式，具体看数组封装</li>
</ul>
<p>如果不填写 <code v-pre>_type</code>，则默认是 json。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre typescript="" class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">"/test"</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"可乐"</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    _type<span class="token operator">:</span> <span class="token string">"form"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组封装" tabindex="-1"><a class="header-anchor" href="#数组封装" aria-hidden="true">#</a> 数组封装</h2>
<p>Admin 经历过这样一个场景，那就是后台不接受数组作为参数，而是需要在 URL 后面进行拼接来形成数组，如不接受</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">"/test"</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">"get"</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只接收：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">"https://youngkbt.cn/test?arr=1&amp;arr=2&amp;arr=3"</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">"get"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么 Admin 基于 URL 的数组进行了封装，满足开发人员传递的 <strong>依然是数组</strong>，而在 Axios 调用接口前，进行数组的抽取，拼到 URL 后面。</p>
<p>这依赖一个在 params 的关键词：<code v-pre>_type: multi</code>，代表发送的参数有数组，会自动处理成 <code v-pre>key=value&amp;key=value</code> 形式，具体看数组封装。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">"https://youngkbt.cn/test"</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">"get"</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    _type<span class="token operator">:</span> multi
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样在最终发送的链接就是 <code v-pre>https://youngkbt.cn/test?arr=1&amp;arr=2&amp;arr=3</code>。</p>
<h2 id="loading-封装" tabindex="-1"><a class="header-anchor" href="#loading-封装" aria-hidden="true">#</a> Loading 封装</h2>
<p>如果发送请求时，需要显示全局 loading 加载，在 api 服务中通过指定: <code v-pre>{ headers: { loading: true } }</code> 来控制显示 loading</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">api</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"/generic/api"</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span>
      loading<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样当请求 api 的时候，将全屏显示 Loading，直到请求结束。</p>
<h2 id="映射封装" tabindex="-1"><a class="header-anchor" href="#映射封装" aria-hidden="true">#</a> 映射封装</h2>
<p>当项目变得复杂时，那么获取资源的 <code v-pre>https://ip:port</code> 必然有很多个，可以在接口的 header 使用 mapping 来开启多个 baseURL 功能：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">api</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"/generic/api"</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span>
      mapping<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当开启 mapping 后，打开 <code v-pre>src/config/request/index.ts</code> 文件，然后在 mappingUrl 变量里添加一个键值对：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> mappingUrl<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_URL</span><span class="token punctuation">,</span>
  test<span class="token operator">:</span> <span class="token string">"https://youngkbt.cn"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>default 是默认的 baseURL，<strong>请不要删除或者更改</strong>，当不开启 mapping 或者开启后无法匹配键值对，则走 default 对应的 URL。</p>
<p>当配置了一个键值对，如上面的 test，则在请求的时候，url 前缀携带 test，如（第五行）：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/config/request"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">api</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"/test/generic/api"</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span>
      mapping<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当触发该接口到后台时，<code v-pre>/test</code> 将会被替换成 <code v-pre>https://youngkbt.cn</code>，变成 <code v-pre>https://youngkbt.cn/generic/api</code>。</p>
<p>如果在 headers 开启了 mapping，但是 URL 没有在 mappingUrl 里配置，则依然走 default 的 URL。</p>
<p>在不使用该功能时，不建议打开 mapping，因为这将进行一轮 mapping 匹配扫描，耗费些许时间。</p>
<h2 id="请求异常封装" tabindex="-1"><a class="header-anchor" href="#请求异常封装" aria-hidden="true">#</a> 请求异常封装</h2>
<p>Admin 针对 Axios 发生的请求异常进行捕获并在页面上提示，如果开启了错误日志，则将异常存放到错误日志。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 异常存放到错误日志</span>
  <span class="token keyword">const</span> errorStore <span class="token operator">=</span> <span class="token function">useErrorLogStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 关闭全局 Loading</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>config<span class="token operator">?.</span>headers<span class="token operator">?.</span>loading<span class="token punctuation">)</span> <span class="token function">tryHideFullScreenLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 请求结束，移除请求的缓存</span>
  <span class="token keyword">else</span> axiosCanceler<span class="token punctuation">.</span><span class="token function">removePendingRequest</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>config <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message <span class="token operator">===</span> <span class="token string">"身份异常"</span><span class="token punctuation">)</span> <span class="token keyword">return</span> message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"身份异常"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"timeout"</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"请求超时！请您稍后重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"Network Error"</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"网络错误！请您稍后重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 根据响应的错误状态码，做不同的处理</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token function">checkStatus</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>onLine<span class="token punctuation">)</span> router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"/500"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token function">processError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  e <span class="token operator">&amp;&amp;</span> errorStore<span class="token punctuation">.</span><span class="token function">addErrorLog</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> checkStatus <span class="token operator">=</span> <span class="token punctuation">(</span>status<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"请求失败！请您稍后重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"登录失效！请您重新登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"当前账号无权限访问！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"你所访问的资源不存在！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">405</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"请求方式错误！请您稍后重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">408</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"请求超时！请您稍后重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"服务异常！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">502</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"网关错误！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">503</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"服务不可用！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">504</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"网关超时！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"请求失败！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * Axios 的错误提示和持久化处理
 * <span class="token keyword">@param</span> <span class="token parameter">error</span> Axios 错误
 * <span class="token keyword">@returns</span> 持久化数据
 */</span>
<span class="token keyword">function</span> <span class="token function">processError</span><span class="token punctuation">(</span>error<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">"baseURL"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
      config<span class="token operator">:</span> <span class="token punctuation">{</span> baseURL<span class="token punctuation">,</span> url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> method<span class="token punctuation">,</span> data <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> requestURL <span class="token operator">=</span> <span class="token function">isExternal</span><span class="token punctuation">(</span>baseURL<span class="token punctuation">)</span> <span class="token operator">?</span> baseURL <span class="token operator">+</span> url <span class="token operator">:</span> url<span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">;</span>
    message <span class="token operator">=</span> message <span class="token operator">+</span> <span class="token string">"，token 不存在或者失效了"</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token string">"您发送的请求为 "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"，您请求的地址为 "</span> <span class="token operator">+</span> requestURL<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> stack <span class="token operator">=</span> stack <span class="token operator">+</span> <span class="token string">"，请求携带的 params 为 "</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> stack <span class="token operator">=</span> stack <span class="token operator">+</span> <span class="token string">"，请求携带的 data 为 "</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    error<span class="token punctuation">.</span>stack <span class="token operator">=</span> stack<span class="token punctuation">;</span>
    error<span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
    <span class="token comment">// 添加异常</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      error<span class="token punctuation">,</span>
      vm<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      info<span class="token operator">:</span> <span class="token string">"axios 请求错误"</span><span class="token punctuation">,</span>
      url<span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">,</span>
      hasRead<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


