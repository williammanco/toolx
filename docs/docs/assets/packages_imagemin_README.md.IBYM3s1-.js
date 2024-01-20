import{_ as s,o as i,c as a,R as e}from"./chunks/framework.BB5QA5cW.js";const g=JSON.parse('{"title":"ToolImagemin Documentation","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"packages/imagemin/README.md","filePath":"packages/imagemin/README.md","lastUpdated":1705789347000}'),n={name:"packages/imagemin/README.md"},l=e(`<h1 id="toolimagemin-documentation" tabindex="-1">ToolImagemin Documentation <a class="header-anchor" href="#toolimagemin-documentation" aria-label="Permalink to &quot;ToolImagemin Documentation&quot;">​</a></h1><p><code>ToolImagemin</code>, is a component of the ToolX library designed for efficient image optimization. This class handles a variety of image formats and employs several optimization strategies to compress images effectively. By providing various options, it allows users to fine-tune the optimization process to their needs.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>ToolImagemin</code> supports both lossless and lossy compression methods and offers detailed configuration options for different formats including PNG, JPEG, and others.</p></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>The <code>ToolImagemin</code> accepts an object of <code>ToolOptions</code> to configure the optimization process. Below is a description of these options.</p><h3 id="general-options" tabindex="-1">General Options <a class="header-anchor" href="#general-options" aria-label="Permalink to &quot;General Options&quot;">​</a></h3><ul><li><code>lossless</code> (boolean): Choose between lossless or lossy compression methods.</li><li><code>compression</code> (number, 0-10): Determine the compression; 10 means high compression.</li><li><code>colors</code> (number, 1-255): Set the number of colors in the image, applies only to PNG format and only in a lossy manner.</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Pay attention, the active <code>lossless</code> parameter refers to configurations that support <code>lossless</code>; if not active, they will be <code>lossy</code> instead. The <code>quality</code> parameter is an abstraction applicable to all compression libraries; however, for greater control, use the original options of each library.</p></div><h2 id="format-specific-options" tabindex="-1">Format-Specific Options <a class="header-anchor" href="#format-specific-options" aria-label="Permalink to &quot;Format-Specific Options&quot;">​</a></h2><h3 id="optipngoptions" tabindex="-1">OptiPNGOptions <a class="header-anchor" href="#optipngoptions" aria-label="Permalink to &quot;OptiPNGOptions&quot;">​</a></h3><p><code>OptiPNGOptions</code> (lossless) is a configuration object used by <code>ToolImagemin</code> to set options for optimizing PNG images with the <a href="https://www.npmjs.com/package/optipng-bin" target="_blank" rel="noreferrer">optipng</a> tool. The following are the properties you can configure, with their explanations and examples:</p><h4 id="options-1" tabindex="-1">Options <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;Options&quot;">​</a></h4><ul><li><code>o</code>, <code>optimization</code>: Optimization level (0-7).</li><li><code>fix</code>: Enable error recovery.</li><li><code>preserve</code>: Preserve file attributes if possible.</li><li><code>filters</code>: PNG delta filters (0-5).</li><li><code>interlaceType</code>: PNG interlace type (0-1).</li><li><code>zlibCompressionLevels</code>: Zlib compression levels (1-9).</li><li><code>zlibMemoryLevels</code>: Zlib memory levels (1-9).</li><li><code>zlibCompressionStrategies</code>: Zlib compression strategies (0-3).</li><li><code>zlibWindowSize</code>: Zlib window size (256,512,1k,2k,4k,8k,16k,32k).</li><li><code>fullReport</code>: Produce a full report on IDAT.</li><li><code>noBitDepthReduction</code>: No bit depth reduction.</li><li><code>noColorTypeReduction</code>: No color type reduction.</li><li><code>noPaletteReduction</code>: No palette reduction.</li><li><code>noReductions</code>: No reductions.</li><li><code>noIDATRecoding</code>: No IDAT recoding.</li><li><code>snip</code>: Cut one image out of multi-image or animation files.</li><li><code>strip</code>: Strip metadata objects (e.g., &quot;all&quot;).</li></ul><h4 id="usage-example" tabindex="-1">Usage Example <a class="header-anchor" href="#usage-example" aria-label="Permalink to &quot;Usage Example&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> run</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolImagemin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pngquant: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        optimization:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fix:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        preserve:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        filters:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        interlaceType:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        zlibCompressionLevels:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        zlibMemoryLevels:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        zlibCompressionStrategies:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        zlibWindowSize:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">512</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        optimization:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="pngquantoptions" tabindex="-1">PNGQuantOptions <a class="header-anchor" href="#pngquantoptions" aria-label="Permalink to &quot;PNGQuantOptions&quot;">​</a></h3><p><code>PNGQuantOptions</code> (lossy) is a configuration object used by <code>ToolImagemin</code> to set options for processing PNG images through the <a href="https://www.npmjs.com/package/pngquant-bin" target="_blank" rel="noreferrer">pnquant</a> tool. Below are the available properties with their descriptions and usage examples:</p><h4 id="options-2" tabindex="-1">Options <a class="header-anchor" href="#options-2" aria-label="Permalink to &quot;Options&quot;">​</a></h4><ul><li><code>quality</code>: Don&#39;t save below min, use fewer colors below max (0-100).</li><li><code>speed</code>: Speed/quality trade-off. 1=slow, 4=default, 11=fast &amp; rough.</li><li><code>nofs</code>: Disable Floyd-Steinberg dithering. Synonym: <code>--nofs</code>.</li><li><code>posterize</code>: Output lower-precision color (e.g. for ARGB4444 output).</li><li><code>strip</code>: Remove optional metadata (default on Mac). Synonym: <code>--strip</code>.</li></ul><h4 id="usage-example-1" tabindex="-1">Usage Example <a class="header-anchor" href="#usage-example-1" aria-label="Permalink to &quot;Usage Example&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> run</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolImagemin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pngquant: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        quality: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;65-80&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        speed:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        nofs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        posterize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        strip: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="jpegtranoptions" tabindex="-1">JPEGTranOptions <a class="header-anchor" href="#jpegtranoptions" aria-label="Permalink to &quot;JPEGTranOptions&quot;">​</a></h3><p><code>JPEGTranOptions</code> (lossless) is a configuration object used by <code>ToolImagemin</code> to set options for processing JPEG images through the <a href="https://www.npmjs.com/package/jpegtran-bin" target="_blank" rel="noreferrer">jpegtran</a> tool. Below are the available properties with their descriptions and usage examples:</p><h4 id="options-3" tabindex="-1">Options <a class="header-anchor" href="#options-3" aria-label="Permalink to &quot;Options&quot;">​</a></h4><ul><li><code>progressive</code>: Create progressive JPEG file.</li><li><code>optimize</code>: Optimize Huffman table (smaller file, but slow compression).</li><li><code>arithmetic</code>: Use arithmetic coding for smaller files.</li><li><code>copy</code>: Copy markers (e.g., EXIF, ICC) from input to output. Use <code>none</code> to strip all.</li><li><code>flip</code>: Mirror image across horizontal or vertical axis.</li><li><code>crop</code>: Crop source image. Expects a string in the format <code>WxH+X+Y</code>.</li><li><code>grayscale</code>: Create a grayscale JPEG.</li><li><code>rotate</code>: Rotate image by 0, 90, 180, or 270 degrees.</li><li><code>maxMemory</code>: Maximum memory to use in kilobytes.</li><li><code>revert</code>: Revert to standard defaults instead of MozJPEG defaults.</li><li><code>targa</code>: Input file is Targa format (usually not needed).</li><li><code>trim</code>: Trim to the MCU block boundary; could result in up to 15 pixels being removed.</li></ul><h4 id="usage-example-2" tabindex="-1">Usage Example <a class="header-anchor" href="#usage-example-2" aria-label="Permalink to &quot;Usage Example&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> run</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolImagemin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    jpegtran: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        progressive: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        optimize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        copy: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;none&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        flip: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;horizontal&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        crop: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;640x480+0+0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        grayscale: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        rotate: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        maxMemory: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        revert: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        targa: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        trim: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="mozjpeg-options" tabindex="-1">MozJPEG Options <a class="header-anchor" href="#mozjpeg-options" aria-label="Permalink to &quot;MozJPEG Options&quot;">​</a></h3><p><code>MozJPEGOptions</code> (lossy) is a configuration object used by <code>ToolImagemin</code> to set options for processing JPEG images through the <a href="https://www.npmjs.com/package/mozjpeg" target="_blank" rel="noreferrer">mozjpeg</a> tool. Below are the available properties with their descriptions and usage examples.</p><h4 id="options-4" tabindex="-1">Options <a class="header-anchor" href="#options-4" aria-label="Permalink to &quot;Options&quot;">​</a></h4><ul><li><code>quality</code> (number[]): Compression quality (0-100; 5-95 is most useful range, default is 75).</li><li><code>grayscale</code> (boolean): Create monochrome JPEG file.</li><li><code>rgb</code> (boolean): Create RGB JPEG file.</li><li><code>optimize</code> (boolean): Optimize Huffman table (smaller file, but slow compression, enabled by default).</li><li><code>progressive</code> (boolean): Create progressive JPEG file (enabled by default).</li><li><code>baseline</code> (boolean): Create baseline JPEG file (disable progressive coding).</li><li><code>targa</code> (boolean): Input file is Targa format (usually not needed).</li><li><code>revert</code> (boolean): Revert to standard defaults (instead of mozjpeg defaults).</li><li><code>dcScanOpt</code> (number): DC scan optimization mode.</li><li><code>notrellis</code> (boolean): Disable trellis optimization.</li><li><code>trellisDC</code> (boolean): Enable trellis optimization of DC coefficients (default).</li><li><code>tune</code> (string): Tune trellis optimization.</li><li><code>noovershoot</code> (boolean): Disable black-on-white deringing via overshoot.</li><li><code>arithmetic</code> (boolean): Use arithmetic coding.</li><li><code>dct</code> (&#39;int&#39; | &#39;fast&#39; | &#39;float&#39;): DCT method.</li><li><code>quantBaseline</code> (boolean): Use 8-bit quantization table entries for baseline JPEG compatibility.</li><li><code>quantTable</code> (number): Quantization table.</li><li><code>restart</code> (number): Set restart interval.</li><li><code>smooth</code> (number): Smooth dithered input.</li><li><code>maxmemory</code> (number): Maximum memory to use (in kbytes).</li></ul><h4 id="usage-example-3" tabindex="-1">Usage Example <a class="header-anchor" href="#usage-example-3" aria-label="Permalink to &quot;Usage Example&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> optimizer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolImagemin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mozjpeg: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        quality: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">75</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        grayscale: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        optimize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        progressive: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="usage-example-4" tabindex="-1">Usage Example <a class="header-anchor" href="#usage-example-4" aria-label="Permalink to &quot;Usage Example&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolImagemin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@toolx/imagemin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Create a new instance of ToolImagemin with desired options</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> run</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolImagemin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lossless: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     pngquant: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        minQuality:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        maxQuality:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        posterize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        strip: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    jpegtran: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        progressive: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        optimize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="external-libraries-used" tabindex="-1">External Libraries Used <a class="header-anchor" href="#external-libraries-used" aria-label="Permalink to &quot;External Libraries Used&quot;">​</a></h2><p><code>ToolImagemin</code> leverages several external optimization libraries like OptiPNG, PNGQuant, JPEGTran, MozJPEG. Each of these libraries contributes to the image optimization capabilities of <code>ToolImagemin</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>For more details on configurations and advanced options for each format-specific tool, please refer to respective documentation of OptiPNG, PNGQuant, JPEGTran, MozJPEG.</p></div>`,38),t=[l];function o(p,h,r,k,d,c){return i(),a("div",null,t)}const m=s(n,[["render",o]]);export{g as __pageData,m as default};
