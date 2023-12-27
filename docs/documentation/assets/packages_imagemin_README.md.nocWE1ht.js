import{_ as s,o as i,c as a,R as e}from"./chunks/framework.o9SS2NfC.js";const E=JSON.parse('{"title":"ToolImagemin Documentation","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"packages/imagemin/README.md","filePath":"packages/imagemin/README.md","lastUpdated":1703684175000}'),n={name:"packages/imagemin/README.md"},t=e(`<h1 id="toolimagemin-documentation" tabindex="-1">ToolImagemin Documentation <a class="header-anchor" href="#toolimagemin-documentation" aria-label="Permalink to &quot;ToolImagemin Documentation&quot;">​</a></h1><p><code>ToolImagemin.js</code> is a part of the ToolX library, specifically designed for efficient image compression. It leverages the capabilities of the <code>imagemin</code> library to compress various image formats. This document outlines its functionalities, including options for compression and provides usage examples.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This tool uses the <code>imagemin</code> library, which is a powerful and flexible image compression library. It supports a variety of image formats and provides extensive options for customization. For more details on <code>imagemin</code>, visit <a href="https://www.npmjs.com/package/imagemin" target="_blank" rel="noreferrer">imagemin on npm</a>.</p></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><p><code>ToolImagemin</code> offers several options to customize the image compression process. These options allow for specific file extensions, inclusion and exclusion criteria, and detailed settings for JPG and PNG files.</p><h3 id="file-extensions-and-filters" tabindex="-1">File Extensions and Filters <a class="header-anchor" href="#file-extensions-and-filters" aria-label="Permalink to &quot;File Extensions and Filters&quot;">​</a></h3><ul><li><code>exts</code>: Specify the file extensions to target for compression.</li><li><code>includes</code>: Define patterns or strings to include certain files.</li><li><code>excludes</code>: Define patterns or strings to exclude certain files.</li></ul><h3 id="jpg-compression-settings" tabindex="-1">JPG Compression Settings <a class="header-anchor" href="#jpg-compression-settings" aria-label="Permalink to &quot;JPG Compression Settings&quot;">​</a></h3><ul><li><code>progressive</code>: Enable or disable progressive rendering for JPG files.</li><li><code>arithmetic</code>: Use arithmetic coding for JPG files.</li></ul><h3 id="png-compression-settings" tabindex="-1">PNG Compression Settings <a class="header-anchor" href="#png-compression-settings" aria-label="Permalink to &quot;PNG Compression Settings&quot;">​</a></h3><ul><li><code>speed</code>: Set the compression speed for PNG files.</li><li><code>strip</code>: Remove ancillary chunks from PNG files.</li><li><code>quality</code>: Define the quality range for PNG compression.</li><li><code>dithering</code>: Apply dithering to PNG images.</li><li><code>posterize</code>: Reduce the number of colors in PNG images.</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="example-compressing-jpg-and-png-images" tabindex="-1">Example: Compressing JPG and PNG Images <a class="header-anchor" href="#example-compressing-jpg-and-png-images" aria-label="Permalink to &quot;Example: Compressing JPG and PNG Images&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolImagemin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@toolx/image-compress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Example configuration</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> compressOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    exts: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    includes: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    excludes: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*.gif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    jpg: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        progressive: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        arithmetic: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    png: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        speed: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        strip: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        quality: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        dithering: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        posterize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Creating an instance of ToolImagemin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> imageCompressor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolImagemin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(compressOptions);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Compressing images</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">imageCompressor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inputPath, outputPath).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image compression complete&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>In this example, <code>ToolImagemin</code> is configured to compress both JPG and PNG files, with specific settings for each format. It will include all files but exclude GIFs. The process involves creating an instance of <code>ToolImagemin</code> with the desired options and then running the compression.</p>`,15),l=[t];function p(h,o,r,k,d,c){return i(),a("div",null,l)}const m=s(n,[["render",p]]);export{E as __pageData,m as default};
