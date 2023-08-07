<template><div><nav class="table-of-contents"><ul><li><router-link to="#打包命令">打包命令</router-link><ul><li><router-link to="#本地环境打包预览">本地环境打包预览</router-link></li><li><router-link to="#测试环境打包">测试环境打包</router-link></li><li><router-link to="#正式环境打包">正式环境打包</router-link></li><li><router-link to="#打包分析">打包分析</router-link></li></ul></li><li><router-link to="#打包压缩">打包压缩</router-link></li><li><router-link to="#打包内容">打包内容</router-link></li></ul></nav>
<h2 id="打包命令" tabindex="-1"><a class="header-anchor" href="#打包命令" aria-hidden="true">#</a> 打包命令</h2>
<h3 id="本地环境打包预览" tabindex="-1"><a class="header-anchor" href="#本地环境打包预览" aria-hidden="true">#</a> 本地环境打包预览</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> preview:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="测试环境打包" tabindex="-1"><a class="header-anchor" href="#测试环境打包" aria-hidden="true">#</a> 测试环境打包</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> build:test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="正式环境打包" tabindex="-1"><a class="header-anchor" href="#正式环境打包" aria-hidden="true">#</a> 正式环境打包</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> build
<span class="token comment"># or</span>
<span class="token function">yarn</span> build:prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包分析" tabindex="-1"><a class="header-anchor" href="#打包分析" aria-hidden="true">#</a> 打包分析</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="打包压缩" tabindex="-1"><a class="header-anchor" href="#打包压缩" aria-hidden="true">#</a> 打包压缩</h2>
<p>Admin 内置打包压缩功能，可以对打包后的静态文件进行 <code v-pre>gizp</code>、<code v-pre>brotli</code> 压缩，压缩后部署到 <code v-pre>nginx</code> 将极大提高网页加载速度。</p>
<p>首先在 <code v-pre>.env</code> 文件提供了 <code v-pre>VITE_BUILD_GZIP</code> 属性，用来配置是否开启 gzip 压缩。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 是否开启 gzip 压缩</span>
VITE_BUILD_GZIP <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 <code v-pre>.env.test</code> 和 <code v-pre>.env.production</code> 文件里提供了 <code v-pre>VITE_COMPRESSION</code> 配置。</p>
<p>压缩支持：</p>
<ul>
<li>压缩时不删除原始文件的配置</li>
<li>压缩时删除原始文件的配置</li>
</ul>
<h4 id="压缩时不删除原始文件的配置" tabindex="-1"><a class="header-anchor" href="#压缩时不删除原始文件的配置" aria-hidden="true">#</a> 压缩时不删除原始文件的配置</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 开启 gzip 压缩</span>
VITE_COMPRESSION <span class="token operator">=</span> <span class="token string">"gzip"</span>

<span class="token comment"># 开启 brotli 压缩</span>
VITE_COMPRESSION <span class="token operator">=</span> <span class="token string">"brotli"</span>

<span class="token comment"># 同时开启 gzip 与 brotli 压缩</span>
VITE_COMPRESSION <span class="token operator">=</span> <span class="token string">"both"</span>

<span class="token comment"># 不开启压缩，默认</span>
VITE_COMPRESSION <span class="token operator">=</span> <span class="token string">"none"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="时删除原始文件的配置" tabindex="-1"><a class="header-anchor" href="#时删除原始文件的配置" aria-hidden="true">#</a> 时删除原始文件的配置</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 开启 gzip 压缩</span>
VITE_COMPRESSION <span class="token operator">=</span> <span class="token string">"gzip-clear"</span>

<span class="token comment"># 开启 brotli 压缩</span>
VITE_COMPRESSION <span class="token operator">=</span> <span class="token string">"brotli-clear"</span>

<span class="token comment"># 同时开启 gzip 与 brotli 压缩</span>
VITE_COMPRESSION <span class="token operator">=</span> <span class="token string">"both-clear"</span>

<span class="token comment"># 不开启压缩，默认</span>
VITE_COMPRESSION <span class="token operator">=</span> <span class="token string">"none"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包内容" tabindex="-1"><a class="header-anchor" href="#打包内容" aria-hidden="true">#</a> 打包内容</h2>
<p>Admin 使用 <code v-pre>esbuild</code> 和 <code v-pre>rollup</code> 进行构建，同时在 <code v-pre>.env</code> 文件客针对打包内容进行配置：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 是否生成包分析文件</span>
VITE_REPORT <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment"># 是否开启 gzip 压缩</span>
VITE_BUILD_GZIP <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment"># 是否删除生产环境 console</span>
VITE_DROP_CONSOLE <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时使用了 <code v-pre>output</code> 对静态资源进行分类打包，最终得到的打包文件是：</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>dist
├─ static
│  ├─css
│  ├─js
│  ├─png
│  └─svg
│─ favicon.ico
│─ index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时 Admin 使用 <a href="http://postcss.org/" target="_blank" rel="noopener noreferrer">postcss<ExternalLinkIcon/></a> 压缩 css，使用 Autoprefixer 自动添加浏览器前缀。</p>
</div></template>


