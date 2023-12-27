import{_ as s,o as i,c as a,R as n}from"./chunks/framework.o9SS2NfC.js";const E=JSON.parse('{"title":"ToolSharp Documentation","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"packages/sharp/README.md","filePath":"packages/sharp/README.md","lastUpdated":1703684175000}'),e={name:"packages/sharp/README.md"},t=n(`<h1 id="toolsharp-documentation" tabindex="-1">ToolSharp Documentation <a class="header-anchor" href="#toolsharp-documentation" aria-label="Permalink to &quot;ToolSharp Documentation&quot;">​</a></h1><p><code>ToolSharp</code> is a part of the ToolX library, focusing specifically on image processing and manipulation. It leverages the <code>sharp</code> library, known for its efficiency and robust capabilities in handling image transformations. <code>ToolSharp</code> provides a user-friendly interface to access the advanced features of <code>sharp</code>, making it a go-to solution for image-related tasks in the ToolX environment.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>ToolSharp</code> excels in image manipulation and conversion, offering a wide range of customization options. Its integration with the <code>sharp</code> library ensures high performance and quality results in various image processing tasks.</p></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p><code>ToolSharp</code> comes with a comprehensive set of options that allow users to control different aspects of image processing:</p><h3 id="general-options" tabindex="-1">General Options <a class="header-anchor" href="#general-options" aria-label="Permalink to &quot;General Options&quot;">​</a></h3><ul><li><strong><code>settings</code></strong>: Configure the sharp class options.</li><li><strong><code>ext</code></strong>: Set the output file extension.</li><li><strong><code>scale</code></strong>: Configure the image scale.</li><li><strong><code>exts</code></strong>: Specify allowed file extensions.</li><li><strong><code>api</code></strong>: Access sharp library features.</li></ul><h3 id="image-processing-options" tabindex="-1">Image Processing Options <a class="header-anchor" href="#image-processing-options" aria-label="Permalink to &quot;Image Processing Options&quot;">​</a></h3><ul><li><strong><code>resize</code></strong>: Adjust image dimensions.</li><li><strong><code>rotate</code></strong>: Rotate the image.</li><li><strong><code>flip</code></strong>: Flip the image vertically.</li><li><strong><code>flop</code></strong>: Flip the image horizontally.</li><li><strong><code>sharpen</code></strong>: Sharpen the image.</li><li><strong><code>threshold</code></strong>: Apply image binarization.</li><li><strong><code>composite</code></strong>: Overlay images.</li><li><strong><code>toFormat</code></strong>: Set output format.</li><li><strong><code>jpeg</code></strong>: JPEG-specific options.</li><li><strong><code>png</code></strong>: PNG-specific options.</li><li><strong><code>webp</code></strong>: WebP-specific options.</li><li><strong><code>avif</code></strong>: AVIF-specific options.</li><li><strong><code>heif</code></strong>: HEIF-specific options.</li><li><strong><code>tiff</code></strong>: TIFF-specific options.</li><li><strong><code>gif</code></strong>: GIF-specific options.</li><li><strong><code>jp2</code></strong>: JPEG 2000 options.</li><li><strong><code>jxl</code></strong>: JPEG XL options.</li><li><strong><code>raw</code></strong>: RAW format options.</li><li><strong><code>tile</code></strong>: Image tiling options.</li><li><strong><code>removeAlpha</code></strong>: Remove alpha channel.</li><li><strong><code>ensureAlpha</code></strong>: Ensure alpha channel.</li><li><strong><code>extractChannel</code></strong>: Extract a color channel.</li><li><strong><code>joinChannel</code></strong>: Join channels to the image.</li><li><strong><code>bandbool</code></strong>: Apply a boolean operation.</li><li><strong><code>tint</code></strong>: Tint the image.</li><li><strong><code>greyscale</code>/<code>grayscale</code></strong>: Convert to greyscale.</li><li><strong><code>pipelineColourspace</code>/<code>pipelineColorspace</code></strong>: Set pipeline colorspace.</li><li><strong><code>toColourspace</code>/<code>toColorspace</code></strong>: Set output colorspace.</li><li><strong><code>affine</code></strong>: Perform affine transformation.</li><li><strong><code>median</code></strong>: Apply a median filter.</li><li><strong><code>blur</code></strong>: Blur the image.</li><li><strong><code>flatten</code></strong>: Merge alpha channel.</li><li><strong><code>gamma</code></strong>: Apply gamma correction.</li><li><strong><code>negate</code></strong>: Create a negative image.</li><li><strong><code>normalise</code>/<code>normalize</code></strong>: Enhance contrast.</li><li><strong><code>clahe</code></strong>: Adaptive histogram equalization.</li><li><strong><code>convolve</code></strong>: Convolve with a kernel.</li><li><strong><code>recomb</code></strong>: Recombine using a matrix.</li></ul><h2 id="usage-examples" tabindex="-1">Usage Examples <a class="header-anchor" href="#usage-examples" aria-label="Permalink to &quot;Usage Examples&quot;">​</a></h2><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolSharp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@toolx/core&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Example usage</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> toolSharp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ext: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scale: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    api: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        resize: { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        rotate: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sharpen: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Other sharp options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Run the tool</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toolSharp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inputFilePath, outputFilePath).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image processing complete&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="advanced-usage-in-a-pipeline" tabindex="-1">Advanced Usage in a Pipeline <a class="header-anchor" href="#advanced-usage-in-a-pipeline" aria-label="Permalink to &quot;Advanced Usage in a Pipeline&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Pipeline } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@toolx/core&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolSharp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@toolx/sharp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolOther </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@toolx/other&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Another ToolX tool</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Setting up the pipeline</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pipeline</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Pipeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pipeline.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolOther</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ToolOther options */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ext: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scale: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        api: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            resize: { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            flip: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            toFormat: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // Other sharp options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Run the pipeline</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pipeline.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inputPath, outputPath).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image processing pipeline complete&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="sharp-library-integration" tabindex="-1">Sharp Library Integration <a class="header-anchor" href="#sharp-library-integration" aria-label="Permalink to &quot;Sharp Library Integration&quot;">​</a></h3><p><code>ToolSharp</code> integrates with the <code>sharp</code> library for most of its image processing capabilities. For detailed information on the <code>sharp</code> library and its options, visit <a href="https://sharp.pixelplumbing.com/" target="_blank" rel="noreferrer">sharp documentation</a>.</p>`,16),l=[t];function o(p,h,r,k,c,d){return i(),a("div",null,l)}const y=s(e,[["render",o]]);export{E as __pageData,y as default};
