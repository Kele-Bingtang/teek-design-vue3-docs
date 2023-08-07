<template><div><nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link></li><li><router-link to="#如何注册">如何注册？</router-link></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>Admin 内置一些通用的自定义指令，指令在 <code v-pre>src/directives</code> 目录下。</p>
<ul>
<li>v-copy：复制某个值至剪贴板</li>
<li>v-auth：认证权限</li>
<li>v-role：角色权限</li>
<li>v-waves：常用于按钮使用，点击按钮时触发波纹效果</li>
<li>v-debounce：按钮防抖指令</li>
<li>v-draggable：拖拽指令，可在父元素区域任意拖拽元素</li>
<li>v-longpress：长按指令，长按时触发事件</li>
<li>v-throttle：防止按钮在短时间内被多次点击，使用节流函数限制规定时间内只能点击一次</li>
<li>v-waterMarker：给整个页面添加背景水印</li>
</ul>
<p>这些指令都有对应的 Demo 组件使用，在 <code v-pre>src/views/directives</code> 目录下可以看到所有的自定义指令的使用 Demo。</p>
<h2 id="如何注册" tabindex="-1"><a class="header-anchor" href="#如何注册" aria-hidden="true">#</a> 如何注册？</h2>
<p>如果你自己写一个指令，并想注册到 Admin，步骤非常简单：</p>
<ol>
<li>
<p>在 <code v-pre>src/directives/modules</code> 创建自己的指令文件或文件夹，并写好自己的指令代码</p>
</li>
<li>
<p>在 <code v-pre>src/directives/index.ts</code> 引入自己的指令并注册到 Admin，即在该文件里</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> xxx <span class="token keyword">from</span> <span class="token string">"./modules/xxx"</span>

<span class="token keyword">const</span> directivesList<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其他指令</span>
  xxx
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>这样你的指令就全局注册到 Admin 里。</p>
<p>如果你不想全局注册到 Admin 里，则按需在组件里 import 引入即可使用：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-xxx</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Xxx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> xxx <span class="token keyword">from</span> <span class="token string">"@/directives/modules/xxx"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


