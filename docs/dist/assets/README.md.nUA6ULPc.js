import{_ as s,o as i,c as a,R as n}from"./chunks/framework.tzssv0c6.js";const E=JSON.parse('{"title":"ToolX","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1703258402000}'),e={name:"README.md"},t=n(`<p align="center"><a href="https://www.npmjs.com/package/@toolx/core" target="_blank" rel="noopener noreferrer"><img width="180" src="https://avatars.githubusercontent.com/u/154528565?s=200&amp;v=4" alt="ToolX logo"></a></p><br><p align="center"><a href="https://www.npmjs.com/package/@toolx/core"><img src="https://img.shields.io/npm/v/@toolx/core" alt="npm package"></a><a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/@toolx/core" alt="node compatibility"></a><a href="https://github.com/toolx-dev/toolx/actions/workflows/node.yml"><img src="https://github.com/toolx-dev/toolx/actions/workflows/node.yml/badge.svg?branch=main" alt="Node.js CI"></a></p><br><h1 id="toolx" tabindex="-1">ToolX <a class="header-anchor" href="#toolx" aria-label="Permalink to &quot;ToolX&quot;">​</a></h1><p>ToolX is structured around two core concepts: <code>Tool</code> and <code>Pipeline</code>. It offers a unified method for file processing through various methods such as media compression, transformation, etc. It enables the export of processed files. Pipelines in ToolX allow the integration of multiple tools where the output of one tool serves as the input for the next.</p><h2 id="quick-cli-usage" tabindex="-1">Quick CLI Usage <a class="header-anchor" href="#quick-cli-usage" aria-label="Permalink to &quot;Quick CLI Usage&quot;">​</a></h2><p>ToolX can be quickly used via the CLI with the <code>npx</code> command. For example:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @toolx/combine</span></span></code></pre></div><p>Or, after installing a tool globally,</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @toolx/combine</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><p>you can directly use it in the CLI:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toolx-combine</span></span></code></pre></div><p>In both methods, input files are taken from the current directory, and results are saved in the same directory. You can change the input folder, output folder, and options using the <code>--options</code>, <code>-i</code>, and <code>-o</code> parameters. More details can be found <a href="/docs/CLI">here</a>.</p><h2 id="cli-wizard-work-in-progress" tabindex="-1">CLI Wizard (Work in Progress) <a class="header-anchor" href="#cli-wizard-work-in-progress" aria-label="Permalink to &quot;CLI Wizard (Work in Progress)&quot;">​</a></h2><p>ToolX also offers a CLI wizard for a guided usage of all library tools. This method can be accessed by using <code>@toolx/cli</code> and is currently under development, so future changes are expected.</p><h2 id="using-toolx-in-code" tabindex="-1">Using ToolX in Code <a class="header-anchor" href="#using-toolx-in-code" aria-label="Permalink to &quot;Using ToolX in Code&quot;">​</a></h2><p>ToolX can be installed using npm for direct code usage. For example:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolSharp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@toolx/sharp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { api: { png: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, ext: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">()</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/in/**/*\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">()</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/out/\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Details on creating a tool and further information are available <a href="/docs/TheTool">here</a>. Remember to refer to the input path pattern using fast-glob syntax, detailed <a href="/docs/FastGlobPatternSyntax">here</a>.</p><h2 id="combining-tools-with-pipeline" tabindex="-1">Combining Tools with Pipeline <a class="header-anchor" href="#combining-tools-with-pipeline" aria-label="Permalink to &quot;Combining Tools with Pipeline&quot;">​</a></h2><p>Tools can be combined using Pipeline, where the output of one tool becomes the input for the next. For instance, a tool to transform an image format, followed by composing the image into a spritesheet, and finally compressing it. More about Pipeline can be found <a href="/docs/PipelineInsight">here</a>.</p><h2 id="future-implementations" tabindex="-1">Future Implementations <a class="header-anchor" href="#future-implementations" aria-label="Permalink to &quot;Future Implementations&quot;">​</a></h2><p>Plans include web-based usage and an app to support the project financially, expected by the first half of 2024.</p><p>For more information, visit the ToolX GitHub project page: <a href="https://github.com/toolx-dev" target="_blank" rel="noreferrer">ToolX on GitHub</a>.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>This section provides an overview of how to use ToolX&#39;s <code>Tool</code> and <code>Pipeline</code> components effectively.</p><ul><li><strong>Tool</strong>: Represents an individual utility focused on a specific task, such as file transformation, data processing, etc.</li><li><strong>Pipeline</strong>: A sequence of <code>Tool</code> instances, arranged to form a workflow for processing data through multiple stages.</li></ul><h2 id="using-tools" tabindex="-1">Using Tools <a class="header-anchor" href="#using-tools" aria-label="Permalink to &quot;Using Tools&quot;">​</a></h2><p>Each <code>Tool</code> in ToolX is a standalone module with its own set of functionalities.</p><h3 id="argument-structure-for-tools" tabindex="-1">Argument Structure for Tools <a class="header-anchor" href="#argument-structure-for-tools" aria-label="Permalink to &quot;Argument Structure for Tools&quot;">​</a></h3><p>When invoking the <code>run</code> method of a ToolX tool, the arguments are typically as follows:</p><ol><li><strong>Options</strong>: An object containing configuration settings for the tool. These settings vary depending on the tool&#39;s functionality.</li><li><strong>Input Path</strong>: The path to the files or data to be processed. This supports <code>fast-glob</code> patterns, allowing the tool to handle multiple files.</li><li><strong>Output Path</strong>: The destination path for the processed files or data.</li></ol><h3 id="example-toolsvg" tabindex="-1">Example: ToolSvg <a class="header-anchor" href="#example-toolsvg" aria-label="Permalink to &quot;Example: ToolSvg&quot;">​</a></h3><p><code>ToolSvg</code> is used for SVG file optimization. It leverages the SVGO library for this purpose.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolSvg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@toolx/svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Initialize the tool with options</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> toolSvg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolSvg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    settings: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // SVGO settings</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        floatPrecision: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        transformPrecision: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        multipass: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Run the tool</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toolSvg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options, inputPath, outputPath).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SVG optimization complete&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="example-custom-pipeline" tabindex="-1">Example: Custom pipeline <a class="header-anchor" href="#example-custom-pipeline" aria-label="Permalink to &quot;Example: Custom pipeline&quot;">​</a></h3><p>In this example, we demonstrate the creation of a custom pipeline using the ToolX library. The pipeline integrates two tools: <code>ToolSharp</code> and <code>ToolSvg</code>.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Pipeline } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@toolx/core&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolSharp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@toolx/sharp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolSvg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@toolx/svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Prepare options for pipeline execution</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> executionOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // General options for the entire pipeline</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Initialize the pipeline with optional configurations</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pipeline</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Pipeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(executionOptions, inputPath, outputPath);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Compose the pipeline with desired tools</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ToolSharp for image processing and ToolSvg for SVG optimization</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pipelineRun</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pipeline.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ToolSharp specific options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolSvg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ToolSvg specific options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Execute the pipeline</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pipelineRun.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Custom pipeline processing complete&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>ToolX provides a flexible and powerful system for handling various file manipulation and processing tasks. By understanding how to use individual <code>Tool</code> instances and combining them into <code>Pipeline</code> workflows, you can efficiently manage complex data processing tasks.</p><p>For more detailed information on individual tools and pipelines, refer to the respective documentation.</p>`,42),l=[t];function p(o,h,r,k,d,c){return i(),a("div",null,l)}const u=s(e,[["render",p]]);export{E as __pageData,u as default};
