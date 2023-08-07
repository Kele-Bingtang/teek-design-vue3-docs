<template><div><nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link></li><li><router-link to="#主题色">主题色</router-link></li><li><router-link to="#暗黑模式">暗黑模式</router-link><ul><li><router-link to="#适配">适配</router-link></li><li><router-link to="#组件切换">组件切换</router-link></li></ul></li><li><router-link to="#灰色模式、色弱模式">灰色模式、色弱模式</router-link></li><li><router-link to="#源码">源码</router-link></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>Admin 内置了主题色、暗黑模式、灰色模式、色弱模式等主题配置。</p>
<p>Admin 的样式相关代码在 <code v-pre>src/styles</code> 目录下。</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>├── styles
    ├─ element-dark.scss # 自定义 element 暗黑模式样式
    ├─ index.scss # 自定义全局元素样式
    ├─ normalize.css # 默认的基本元素样式
    ├─ transition.scss # 自定义全局动画样式
    ├─ variables.module.scss # 布局主题样式
    ├─ variables.module.scss.d.ts # 布局主题样式 TS 提示
    ├─ variables.scss # 自定义全局变量，文件里填写的变量在编译的时候内置到系统
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主题色" tabindex="-1"><a class="header-anchor" href="#主题色" aria-hidden="true">#</a> 主题色</h2>
<p>Admin 点击右上角头像，然后点击我的设置，就可以看到全局主题颜色选择器，有如下预定义主题颜色：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 预定义主题颜色</span>
<span class="token keyword">const</span> colorList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">"#168BF7"</span><span class="token punctuation">,</span> 
  <span class="token string">"#DAA96E"</span><span class="token punctuation">,</span>
  <span class="token string">"#0C819F"</span><span class="token punctuation">,</span>
  <span class="token string">"#409EFF"</span><span class="token punctuation">,</span>
  <span class="token string">"#27ae60"</span><span class="token punctuation">,</span>
  <span class="token string">"#ff5c93"</span><span class="token punctuation">,</span>
  <span class="token string">"#e74c3c"</span><span class="token punctuation">,</span>
  <span class="token string">"#fd726d"</span><span class="token punctuation">,</span>
  <span class="token string">"#f39c12"</span><span class="token punctuation">,</span>
  <span class="token string">"#9b59b6"</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你希望更改这些预定义主题颜色的时候，前往 <code v-pre>src/layout/components/ThemeDrawer/index.vue</code> 的 304 行左右找到上面的代码进行修改。</p>
<h2 id="暗黑模式" tabindex="-1"><a class="header-anchor" href="#暗黑模式" aria-hidden="true">#</a> 暗黑模式</h2>
<p>Admin 适配了 Element Plus 的暗黑模式，可以在「右上角头像 - 我的设置 - 暗黑模式」进行切换暗黑模式。</p>
<p>Admin 默认不开启暗黑模式，如果希望默认开启暗黑模式，则在 <code v-pre>src/config/settings</code> 将 isDark 改为 true。</p>
<h3 id="适配" tabindex="-1"><a class="header-anchor" href="#适配" aria-hidden="true">#</a> 适配</h3>
<p>如果在暗黑模式下，自己写的组件没有适配样式，则在 <code v-pre>src/styles/element-dark.scss</code> 里进行适配：</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">html.dark </span><span class="token punctuation">{</span>
  <span class="token comment">// 适配样式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件切换" tabindex="-1"><a class="header-anchor" href="#组件切换" aria-hidden="true">#</a> 组件切换</h3>
<p>暗黑模式除了通过我的设置来切换，也可以通过页面的按钮来切换，Admin 封装了暗黑模式切换的组件，在 <code v-pre>/src/components/SwitchDark</code> 下，是一个 Switch 开关。</p>
<h2 id="灰色模式、色弱模式" tabindex="-1"><a class="header-anchor" href="#灰色模式、色弱模式" aria-hidden="true">#</a> 灰色模式、色弱模式</h2>
<p>Admin 适配了灰色模式、色弱模式，可以在「右上角头像 - 我的设置 - 灰色模式、色弱模式」进行切换灰色模式、色弱模式。</p>
<p>Admin 默认不开启灰色模式、色弱模式，如果希望默认开启灰色模式、色弱模式，则在 <code v-pre>src/config/settings</code> 将 isWeak、isGrey 改为 true。</p>
<p>灰色模式、色弱模式 采用了 CSS3 的 <code v-pre>filter</code> 属性来全局设置，俗称 <strong>滤镜</strong>，如果你想自定义更多类似的全局颜色模式，可以学习 <code v-pre>filter</code> 的其他用法。</p>
<p>灰色模式、色弱模式只是 <code v-pre>filter</code> 属性的其中两个应用。</p>
<h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2>
<p>主题色、暗黑模式、灰色模式、色弱模式等主题的功能在 <code v-pre>src/hooks/useTheme.ts</code> 里看到代码逻辑。</p>
</div></template>


