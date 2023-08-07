<template><div><nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link></li><li><router-link to="#角色权限">角色权限</router-link><ul><li><router-link to="#路由角色权限">路由角色权限</router-link></li><li><router-link to="#页面角色权限">页面角色权限</router-link></li><li><router-link to="#场景">场景</router-link></li></ul></li><li><router-link to="#认证权限">认证权限</router-link><ul><li><router-link to="#页面认证权限">页面认证权限</router-link></li><li><router-link to="#场景-1">场景</router-link></li></ul></li><li><router-link to="#官方形式">官方形式</router-link></li><li><router-link to="#角色和认证区别">角色和认证区别</router-link></li><li><router-link to="#数据权限">数据权限</router-link></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>Admin 基于 <code v-pre>RBAC</code> 内置权限管控，<code v-pre>RBAC</code>（Role Based Access Control）权限指的是基于角色的访问控制。</p>
<p>权限管控分为路由权限和页面权限，也成为粗粒度权限和细粒度权限。</p>
<h2 id="角色权限" tabindex="-1"><a class="header-anchor" href="#角色权限" aria-hidden="true">#</a> 角色权限</h2>
<p>角色权限是一个数组，支持多个角色进行权限管控。</p>
<h3 id="路由角色权限" tabindex="-1"><a class="header-anchor" href="#路由角色权限" aria-hidden="true">#</a> 路由角色权限</h3>
<p>在 <RouterLink to="/guide/basic/guide%20-%20route.html">指南 - 路由</RouterLink> 中介绍过路由的配置，而路由角色权限也在其中的配置项里，即 <code v-pre>meta.roles</code>。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre json="" class="language-json"><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">"role"</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> () => import(<span class="token string">"@/views/permission/rolePermission.vue"</span>)<span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"RolePermission"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">"权限编辑"</span><span class="token punctuation">,</span>
    roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"admin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"StarFilled"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当在路由配置了 <code v-pre>meta.roles</code>，则告诉 Admin 这是一个角色权限的路由，Admin 会在加载路由之前，通过当前用户的角色和路由配置的 <code v-pre>meta.roles</code> 进行对比筛选，如果当前路由的 <code v-pre>meta.roles</code> 不满足用户的角色，则拒绝加载路由。</p>
<blockquote>
<p>当前用户的角色在哪呢？</p>
</blockquote>
<p>存储在 Pinia 里，在 <code v-pre>src/stores/user.ts</code> 文件，有一个 roles 属性，这就是存储当前用户的角色，而该文件有一个 <code v-pre>getUserInfo</code> 函数，该函数在第一次进入 Admin 时被触发，所以当前用户的信息就可以在这个函数里进行获取，包括角色，拿到角色后，在调用 <code v-pre>setRoles(用户角色)</code> 进行复制。</p>
<p>而拿到 roles 后，则后续进行路由的加载时，再根据路由的 <code v-pre>meta.roles</code> 进行对比筛选，从而进行路由的权限管控。</p>
<p>这些判断操作都是 Admin 内置的功能，您只需配置路由的 <code v-pre>meta.roles</code>，并在 <code v-pre>src/stores/user.ts</code> 文件的 <code v-pre>getUserInfo</code> 函数里获取用户的 roles，再通过 <code v-pre>setRoles(用户角色)</code> 进行赋值就可以了。</p>
<h3 id="页面角色权限" tabindex="-1"><a class="header-anchor" href="#页面角色权限" aria-hidden="true">#</a> 页面角色权限</h3>
<p>除了上面的用角色权限来管理路由，您也可以用角色权限来管理页面内的任何操作，如按钮级别。</p>
<p>使用页面角色权限，您不需要在路由配置 <code v-pre>meta.roles</code>，只需要在 <code v-pre>src/stores/user.ts</code> 文件的 <code v-pre>getUserInfo</code> 函数里获取用户的 roles，再通过 <code v-pre>setRoles(用户角色)</code> 进行赋值，最后通过内置的 <strong>三大形式</strong> 在组件里进行判断即可。</p>
<p>如用户在 <code v-pre>src/stores/user.ts</code> 的 roles 是 <code v-pre>[&quot;Admin&quot;]</code>。</p>
<h4 id="组件形式" tabindex="-1"><a class="header-anchor" href="#组件形式" aria-hidden="true">#</a> 组件形式</h4>
<p>Role 组件已经进行全局注册，无需引入，可以在 <code v-pre>src/main.ts</code> 查看全局注册的代码。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Role</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['admin']<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>只有 Admin <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Role</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数形式" tabindex="-1"><a class="header-anchor" href="#函数形式" aria-hidden="true">#</a> 函数形式</h4>
<p>需要引入 <code v-pre>hasRole</code> 函数，该函数封装在 hooks 的 usePermission 里。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hasRole(['admin'])<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>只有 Admin <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> usePermission <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/hooks/usePermission"</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> hasRole <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义指令权限" tabindex="-1"><a class="header-anchor" href="#自定义指令权限" aria-hidden="true">#</a> 自定义指令权限</h4>
<p>自定义指令已经全局注册到 Admin，可以直接使用。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['admin']<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>只有 Admin <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：指令方式不能动态修改权限，在页面渲染完成后，就固定了。</p>
<p>而组件形式和函数形式可以通过传入一个响应式变量，然后通过修改该变量来实现动态修改权限。</p>
<h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h3>
<p>角色权限使用场景：</p>
<ul>
<li>页面是否可见，可进入</li>
<li>按钮是否可见、可编辑</li>
<li>部分内容是否可见、可编辑</li>
<li>......</li>
</ul>
<h2 id="认证权限" tabindex="-1"><a class="header-anchor" href="#认证权限" aria-hidden="true">#</a> 认证权限</h2>
<p>认证权限是一个数组，支持多个认证进行权限管控。</p>
<h3 id="页面认证权限" tabindex="-1"><a class="header-anchor" href="#页面认证权限" aria-hidden="true">#</a> 页面认证权限</h3>
<p>在 <RouterLink to="/guide/basic/guide%20-%20route.html">指南 - 路由</RouterLink> 中介绍过路由的配置，而认证权限也在其中的配置项里，即 <code v-pre>meta.auths</code>。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre json="" class="language-json"><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">"role"</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> () => import(<span class="token string">"@/views/permission/rolePermission.vue"</span>)<span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"RolePermission"</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">"权限编辑"</span><span class="token punctuation">,</span>
    auths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"btn_add"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"StarFilled"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个路由内的认证权限配置。</p>
<p>和角色权限类似，认证权限的页面认证权限和角色权限的页面角色权限功能基本一样，但是不同的是认证权限必须依赖与路由的 <code v-pre>meta.auths</code>，它没有 Piana 的存储，而角色有。因为认证权限的出现纯粹是为页面的内容管控进行设计，它的粒度更为细致。</p>
<h4 id="组件形式-1" tabindex="-1"><a class="header-anchor" href="#组件形式-1" aria-hidden="true">#</a> 组件形式</h4>
<p>Auth 组件已经进行全局注册，无需引入，可以在 <code v-pre>src/main.ts</code> 查看全局注册的代码。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Auth</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn_add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 拥有 'btn_add' 权限可见<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Auth</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数形式-1" tabindex="-1"><a class="header-anchor" href="#函数形式-1" aria-hidden="true">#</a> 函数形式</h4>
<p>需要引入 <code v-pre>hasRole</code> 函数，该函数封装在 hooks 的 usePermission 里。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hasAuth('btn_add')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 拥有 'btn_add' 权限可编辑<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> usePermission <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/hooks/usePermission"</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> hasAuth <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义指令权限-1" tabindex="-1"><a class="header-anchor" href="#自定义指令权限-1" aria-hidden="true">#</a> 自定义指令权限</h4>
<p>自定义指令已经全局注册到 Admin，可以直接使用。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">v-auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['btn_add']<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 拥有 'btn_add' 权限可见<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：指令方式不能动态修改权限，在页面渲染完成后，就固定了。</p>
<p>而组件形式和函数形式可以通过传入一个响应式变量，然后通过修改该变量来实现动态修改权限。</p>
<h3 id="场景-1" tabindex="-1"><a class="header-anchor" href="#场景-1" aria-hidden="true">#</a> 场景</h3>
<p>页面认证权限使用场景：</p>
<ul>
<li>按钮是否可见、可编辑</li>
<li>部分内容是否可见、可编辑</li>
<li>......</li>
</ul>
<h2 id="官方形式" tabindex="-1"><a class="header-anchor" href="#官方形式" aria-hidden="true">#</a> 官方形式</h2>
<p>除了上面 Admin 内置的三大形式来判断角色权限或者认证权限，也可以使用官方形式：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取角色权限</span>
route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>roles
<span class="token comment">// 获取认证权限</span>
route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>auths
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="角色和认证区别" tabindex="-1"><a class="header-anchor" href="#角色和认证区别" aria-hidden="true">#</a> 角色和认证区别</h2>
<ul>
<li>角色权限是一个 <strong>粗粒度</strong> 的权限管控，一般用于路由、菜单的权限管控（是否可进入）</li>
<li>认证权限是一个 <strong>细粒度</strong> 的权限管控，一般用于页面内的内容、按钮等 DOM 的权限管控（按钮是否可见、可编辑，部分内容是否可见）</li>
</ul>
<p>认证权限提供了组件、函数、指令三大形式，其目的就是管控页面内的 DOM 元素。</p>
<p>当然角色权限也提供了组件、函数、指令三大形式，同样支持管控页面内的 DOM 元素，但是最初的角色权限仅仅是用于路由、菜单的权限管控，因为部分使用场景既要角色权限管控路由、菜单，也要管控页面内的 DOM 元素，所以就设计了和认证权限一样的组件、函数、指令三大形式，这样可以减少额外配置认证权限的重复性。</p>
<p>虽然角色认证功能涵盖了认证权限的场景，但是如果对权限这一块的设计非常精细，则建议分工明确，角色管理页面本身的权限，认证管理页面内容的权限，这样就不因为纯粹使用角色管控两块从而导致设计复杂，耦合性高。</p>
<p>当然如果是小型项目，则可以用角色来充当所有权限管控的基石。</p>
<h2 id="数据权限" tabindex="-1"><a class="header-anchor" href="#数据权限" aria-hidden="true">#</a> 数据权限</h2>
<p>Admin 暂时不支持针对到某行数据的权限管控，这是一种更细粒度的权限管控，这往往是后台来进行管控。</p>
<p>如果前端要管控数据权限，则依然可以用认证权限来管控，不过可控性较低、稳定性较低、配置复杂度较高，根据项目的复杂度来决定。</p>
</div></template>


