<template><div><nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link></li><li><router-link to="#include">include</router-link></li><li><router-link to="#exclude">exclude</router-link></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>Admin 内置预构建功能，在第一次构建的时候进行缓存，从而加快在下一次构建的时间。</p>
<p>预构建的依赖需要进行配置，Admin 默认只将布局用到的依赖进行缓存，所以开发者自行配置自己的依赖缓存。</p>
<p>在 <code v-pre>build/optimize.ts</code> 文件里，<code v-pre>include</code> 数组里添加预构建模块，<code v-pre>exclude</code> 数组排除与构建模块。</p>
<h2 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h2>
<p><code v-pre>include</code> 配置为需要预构建的模块。<code v-pre>vite</code> 启动时会将 <code v-pre>include</code> 里的模块，编译成 <code v-pre>esm</code> 格式并缓存到 <code v-pre>node_modules/.vite</code> 文件夹，页面加载到对应模块时如果浏览器有缓存就读取浏览器缓存，如果没有会读取本地缓存并按需加载。</p>
<p>下面是精简版 <code v-pre>include</code> 配置，将 <code v-pre>package.json</code> 的 <code v-pre>dependencies</code> 大部分未全局安装的模块都配置进来，当然如果模块里面的东西很少，也就是里面方法不多，可以不用配置进来直接让浏览器加载即可（您自己安装的模块也是参考该配置）</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> include <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">"qs"</span><span class="token punctuation">,</span>
  <span class="token string">"mitt"</span><span class="token punctuation">,</span>
  <span class="token string">"axios"</span><span class="token punctuation">,</span>
  <span class="token string">"pinia"</span><span class="token punctuation">,</span>
  <span class="token string">"vue-i18n"</span><span class="token punctuation">,</span>
  <span class="token string">"sortablejs"</span><span class="token punctuation">,</span>
  <span class="token string">"@vueuse/core"</span><span class="token punctuation">,</span>
  <span class="token string">"path-to-regexp"</span><span class="token punctuation">,</span>
  <span class="token string">"pinia-plugin-persistedstate"</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>提示</p>
<ol>
<li>尤其当您禁用浏览器缓存时（这种情况只应该发生在调试阶段）必须将对应模块加入到 <code v-pre>include</code> 里，否则会遇到开发环境切换页面卡顿的问题（<code v-pre>vite</code> 会认为它是一个新的依赖包会重新加载并强制刷新页面），因为它既无法使用浏览器缓存，又没有在本地 <code v-pre>node_modules/.vite</code> 里缓存</li>
<li>如果您使用的第三方库是全局引入，也就是引入到 <code v-pre>src/main.ts</code> 文件里，就不需要再添加到 <code v-pre>include</code> 里了，因为 <code v-pre>vite</code> 会自动将它们缓存到 <code v-pre>node_modules/.vite</code></li>
</ol>
</div>
<h2 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> exclude</h2>
<p><code v-pre>exclude </code> 配置为排除预构建的模块。</p>
</div></template>


