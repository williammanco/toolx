import{_ as a,o as i,c as s,R as e}from"./chunks/framework.o9SS2NfC.js";const u=JSON.parse('{"title":"Installation","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/Installation.md","filePath":"docs/Installation.md","lastUpdated":1703684175000}'),t={name:"docs/Installation.md"},l=e('<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><p><a href="https://github.com/toolx-dev/toolx" target="_blank"><img src="https://img.shields.io/badge/source-a?logo=github" alt="GitHub"></a></p><p>The ToolX library offers a range of tools that can be installed individually or as part of the core package. Installation can be performed using either npm or yarn, depending on your preference.</p><h2 id="installing-individual-tools" tabindex="-1">Installing Individual Tools <a class="header-anchor" href="#installing-individual-tools" aria-label="Permalink to &quot;Installing Individual Tools&quot;">​</a></h2><p>To install a specific tool from the ToolX library, such as <code>imagemin</code>, use the following commands:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ap7I-" id="tab-OQ84LZI" checked="checked"><label for="tab-OQ84LZI">npm</label><input type="radio" name="group-ap7I-" id="tab-CLZdaXN"><label for="tab-CLZdaXN">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @toolx/imagemin</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @toolx/imagemin</span></span></code></pre></div></div></div><h2 id="installing-the-pipeline-from-core" tabindex="-1">Installing the Pipeline from Core <a class="header-anchor" href="#installing-the-pipeline-from-core" aria-label="Permalink to &quot;Installing the Pipeline from Core&quot;">​</a></h2><p>If you require the <code>Pipeline</code> functionality, it is essential to install it from the core package of ToolX. Additionally, if you plan to create a new tool using the ToolX library, the core package is also necessary. For more detailed information about these functionalities, you can refer to the official documentation of <a href="/documentation/docs/TheTool">Tool</a> and <a href="/documentation/docs/PipelineInsight">Pipeline</a>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-cOoYy" id="tab-dxhzM3y" checked="checked"><label for="tab-dxhzM3y">npm</label><input type="radio" name="group-cOoYy" id="tab-7rYihzO"><label for="tab-7rYihzO">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @toolx/core</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @toolx/core</span></span></code></pre></div></div></div><h2 id="global-installation-for-cli-use" tabindex="-1">Global Installation for CLI Use <a class="header-anchor" href="#global-installation-for-cli-use" aria-label="Permalink to &quot;Global Installation for CLI Use&quot;">​</a></h2><p>You can also install the tools globally to utilize them directly from the command line interface (CLI). This allows for the execution of ToolX tools as binary commands.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-IXebm" id="tab-7yJF_Cj" checked="checked"><label for="tab-7yJF_Cj">npm</label><input type="radio" name="group-IXebm" id="tab-kcxsGGm"><label for="tab-kcxsGGm">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @toolx/imagemin</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @toolx/imagemin</span></span></code></pre></div></div></div><p>For example, to compress images in the directory where you run the command using the <code>imagemin</code> tool, simply type the following in the CLI:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toolx-imagemin</span></span></code></pre></div>',14),o=[l];function n(h,p,d,r,c,k){return i(),s("div",null,o)}const m=a(t,[["render",n]]);export{u as __pageData,m as default};
