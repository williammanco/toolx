import{_ as s,o as i,c as a,R as e}from"./chunks/framework.o9SS2NfC.js";const u=JSON.parse('{"title":"Quick CLI Usage","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/QuickStart.md","filePath":"docs/QuickStart.md","lastUpdated":1703684175000}'),t={name:"docs/QuickStart.md"},n=e(`<h1 id="quick-cli-usage" tabindex="-1">Quick CLI Usage <a class="header-anchor" href="#quick-cli-usage" aria-label="Permalink to &quot;Quick CLI Usage&quot;">​</a></h1><p>ToolX can be quickly used via the CLI with the <code>npx</code> command. For example:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @toolx/combine</span></span></code></pre></div><p>Or, after installing a tool globally,</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @toolx/combine</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><p>you can directly use it in the CLI:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toolx-combine</span></span></code></pre></div><p>In both methods, input files are taken from the current directory, and results are saved in the same directory. You can change the input folder, output folder, and options using the <code>--options</code>, <code>-i</code>, and <code>-o</code> parameters. More details can be found <a href="/documentation/docs/CLI">here</a>.</p><h2 id="cli-wizard-work-in-progress" tabindex="-1">CLI Wizard (Work in Progress) <a class="header-anchor" href="#cli-wizard-work-in-progress" aria-label="Permalink to &quot;CLI Wizard (Work in Progress)&quot;">​</a></h2><p>ToolX also offers a CLI wizard for a guided usage of all library tools. This method can be accessed by using <code>@toolx/cli</code> and is currently under development, so future changes are expected.</p><h2 id="using-toolx-in-code" tabindex="-1">Using ToolX in Code <a class="header-anchor" href="#using-toolx-in-code" aria-label="Permalink to &quot;Using ToolX in Code&quot;">​</a></h2><p>ToolX can be installed using npm for direct code usage. For example:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolSharp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@toolx/sharp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { api: { png: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, ext: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">()</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/in/**/*\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">()</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/out/\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Details on creating a tool and further information are available <a href="/documentation/docs/TheTool">here</a>. Remember to refer to the input path pattern using fast-glob syntax, detailed <a href="/documentation/docs/FastGlobPatternSyntax">here</a>.</p><h2 id="combining-tools-with-pipeline" tabindex="-1">Combining Tools with Pipeline <a class="header-anchor" href="#combining-tools-with-pipeline" aria-label="Permalink to &quot;Combining Tools with Pipeline&quot;">​</a></h2><p>Tools can be combined using Pipeline, where the output of one tool becomes the input for the next. For instance, a tool to transform an image format, followed by composing the image into a spritesheet, and finally compressing it. More about Pipeline can be found <a href="/documentation/docs/PipelineInsight">here</a>.</p>`,16),o=[n];function l(h,p,r,d,k,c){return i(),a("div",null,o)}const F=s(t,[["render",l]]);export{u as __pageData,F as default};
