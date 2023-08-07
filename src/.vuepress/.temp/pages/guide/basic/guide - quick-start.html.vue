<template><div><nav class="table-of-contents"><ul><li><router-link to="#开发环境">开发环境</router-link></li><li><router-link to="#ide">IDE</router-link></li><li><router-link to="#拉取代码">拉取代码</router-link></li><li><router-link to="#本地开发">本地开发</router-link></li></ul></nav>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


