import{_ as i,o as a,c as s,R as t}from"./chunks/framework.tzssv0c6.js";const m=JSON.parse('{"title":"ToolX CLI Usage Documentation","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/CLI.md","filePath":"docs/CLI.md","lastUpdated":1703181099000}'),e={name:"docs/CLI.md"},o=t('<h1 id="toolx-cli-usage-documentation" tabindex="-1">ToolX CLI Usage Documentation <a class="header-anchor" href="#toolx-cli-usage-documentation" aria-label="Permalink to &quot;ToolX CLI Usage Documentation&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>ToolX provides a versatile Command Line Interface (CLI) for utilizing its tools and pipelines. The CLI interface leverages <code>mustargs</code>, a custom <a href="https://github.com/toolx-dev/mustargs" target="_blank" rel="noreferrer">library</a> developed specifically for ToolX, to parse command line arguments into JavaScript objects. This functionality is crucial for handling array support and nested objects used in tool options.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><h3 id="command-structure" tabindex="-1">Command Structure <a class="header-anchor" href="#command-structure" aria-label="Permalink to &quot;Command Structure&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toolx-&lt;toolName&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">optionsObjec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">inputPat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">outputPat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><ul><li><code>--options</code>: Provides the options for the tool in a nested object format.</li><li><code>-i</code> or <code>--pathIn</code>: Defines the input path.</li><li><code>-o</code> or <code>--pathOut</code>: Sets the output path.</li></ul><h3 id="example-command" tabindex="-1">Example Command <a class="header-anchor" href="#example-command" aria-label="Permalink to &quot;Example Command&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toolx-sharp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --options</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> api.blur=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /yourpath/yourfile.ext</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /your-output-folder</span></span></code></pre></div><p>This command runs the <code>sharp</code> tool with a blur option set to <code>5</code>, processing a file from the specified input path and outputting the result to the given output folder.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For a faster and more streamlined experience, you can use quick commands like <code>toolx-imagemin</code> without specifying input or output paths. This approach processes all applicable files within the current directory and its subdirectories, applying default or specified options to each file.</p></div>',11),n=[o];function l(h,p,r,d,c,k){return a(),s("div",null,n)}const g=i(e,[["render",l]]);export{m as __pageData,g as default};
