<template><div><nav class="table-of-contents"><ul><li><router-link to="#开发环境">开发环境</router-link></li><li><router-link to="#ide">IDE</router-link></li><li><router-link to="#拉取代码">拉取代码</router-link></li><li><router-link to="#本地开发">本地开发</router-link></li><li><router-link to="#开发流程">开发流程</router-link></li></ul></nav>
<h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2>
<p><code v-pre>node</code> 版本应不小于 <code v-pre>16</code>，推荐使用 yarn 开管理包依赖。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ide" tabindex="-1"><a class="header-anchor" href="#ide" aria-hidden="true">#</a> IDE</h2>
<p>推荐使用 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VsCode<ExternalLinkIcon/></a>、WebStorm。</p>
<h2 id="拉取代码" tabindex="-1"><a class="header-anchor" href="#拉取代码" aria-hidden="true">#</a> 拉取代码</h2>
<p>完整版前端代码</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git clone https://github.com/Kele-Bingtang/kbt-vue3-admin.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>精简版前端代码</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>https://github.com/Kele-Bingtang/kbt-vue3-template.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>精简版仓库有两个分支，master 是国际化版，<code v-pre>no-i18n</code> 是非国际化版，根据项目需求自行切换分支。</p>
<p>克隆项目下来后，记得切换 GitLab 地址，修改为您真正的项目地址。</p>
<p>如果您暂时不确定您当前开发的项目地址，可以先把根目录下的 .git 文件删除，因为 .git 目录在 Windows 是隐藏的，所以您可以有两个步骤来删除它：</p>
<ul>
<li>使用 Windows 10 资源管理器进入到项目根目录，右上角「查看」 -&gt; 「隐藏的项目」打勾，即可看到隐藏的项目，即 .git，然后右键删除即可</li>
<li>使用 Windows 10 资源管理器进入到项目根目录，按住 <code v-pre>Shift</code>，然后鼠标在空白处右键，选择「在处处打开 Powershell 窗口」，执行命令 <code v-pre>rm -r -force .git</code> 即可删除</li>
<li>利用 Git Bash Here 窗口进入项目根目录，执行命令 <code v-pre>rm -rf .git</code> 即可删除</li>
</ul>
<h2 id="本地开发" tabindex="-1"><a class="header-anchor" href="#本地开发" aria-hidden="true">#</a> 本地开发</h2>
<p>Project setup：安装依赖</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Compiles and hot-reloads for development：编译运行（开发环境使用）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> dev
<span class="token comment"># or</span>
<span class="token function">yarn</span> server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Compiles and minifies for production：打包运行（测试环境使用）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> build:test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Compiles and minifies for production：打包运行（生产环境使用）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> build:pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Lints and fixes files：检查和修复文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Push code：提交代码到 git</p>
<p>前往 <a href="http://push.sh" target="_blank" rel="noopener noreferrer">push.sh<ExternalLinkIcon/></a> 文件修改要提交的远程仓库地址，然后在 Git Bash Here 执行命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sh</span> push.sh <span class="token string">"您的 commit 信息"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开发流程" tabindex="-1"><a class="header-anchor" href="#开发流程" aria-hidden="true">#</a> 开发流程</h2>
<p>一套简单的开发仅需两步：</p>
<ul>
<li>开发您自己的 Vue 组件</li>
<li>在 <code v-pre>src/router/routesConfig.ts</code> 里配置路由、角色等信息</li>
</ul>
<p>Admin 根据路由、角色等信息自动生成菜单栏、面包屑、标签页。</p>
<p>用户的默认角色为空数组，实际的角色应该从后端获取。</p>
<p>比如你需要写一个登录组件，则在 <code v-pre>src/view</code> 下创建 <code v-pre>login/index.vue</code>，即 <code v-pre>src/viewlogin/index.vue</code>，并在 <code v-pre>index.vue</code> 编写你的需求，然后在 <code v-pre>src/router/routesConfig.ts</code> 注册到路由里。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/login"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Login"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/login/index.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">"登录"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时启动项目，就在左侧菜单栏看到 <strong>登录</strong> 菜单，点击就会跳转到你写的组件。</p>
<p>因为登录组件是没有认证才需要访问的，所以不应该放在左侧菜单，让用户手动点击，因此我们可以使用 <code v-pre>meta.hideInMenu</code> 配置项：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre typescript="" class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> rolesRoutes<span class="token operator">:</span> RouterConfigRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/login"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"Login"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/login/index.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">"登录"</span><span class="token punctuation">,</span>
      hideInMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候左侧菜单不会渲染这个菜单，并且你需要在路由 beforeEach 判断用户是否登录认证过，没有则手动跳转到 <code v-pre>/login</code> 路由。</p>
</div></template>


