import{_ as e,o as t,c as o,R as a}from"./chunks/framework.os06lqCT.js";const m=JSON.parse('{"title":"Contributing to ToolX Library","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"CONTRIBUTING.md","filePath":"CONTRIBUTING.md","lastUpdated":1703684175000}'),i={name:"CONTRIBUTING.md"},s=a('<h1 id="contributing-to-toolx-library" tabindex="-1">Contributing to ToolX Library <a class="header-anchor" href="#contributing-to-toolx-library" aria-label="Permalink to &quot;Contributing to ToolX Library&quot;">​</a></h1><p>Contributing to the ToolX library involves creating useful tools or wrappers around other libraries to facilitate their use with other tools. Here&#39;s a step-by-step guide to contribute effectively.</p><h2 id="step-1-create-a-tool-placeholder" tabindex="-1">Step 1: Create a Tool Placeholder <a class="header-anchor" href="#step-1-create-a-tool-placeholder" aria-label="Permalink to &quot;Step 1: Create a Tool Placeholder&quot;">​</a></h2><p>Use the script to create a placeholder for your tool:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nameoftoo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>This command does more than just create a file placeholder. It adds references to other files like <code>package.json</code> and <code>tsconfig.json</code>.</p><h2 id="step-2-write-your-tool" tabindex="-1">Step 2: Write Your Tool <a class="header-anchor" href="#step-2-write-your-tool" aria-label="Permalink to &quot;Step 2: Write Your Tool&quot;">​</a></h2><p>After running the script, a folder is created in the <code>packages</code> directory, e.g., <code>demo</code> for a tool named &quot;Demo&quot;. Begin by editing <code>ToolDemo.js</code> inside <code>/packages/demo/ToolDemo.js</code>.</p><p>Key functions to use are <code>onEveryFile</code> and <code>onBody</code>. More information can be found in the documentation: <a href="/toolx/dist/docs/TheTool">TheTool.md</a>.</p><h2 id="step-3-document-with-jsdoc" tabindex="-1">Step 3: Document with JSDoc <a class="header-anchor" href="#step-3-document-with-jsdoc" aria-label="Permalink to &quot;Step 3: Document with JSDoc&quot;">​</a></h2><p>Use JSDoc to write types. Focus on the <code>options</code> as they tend to be unique for each tool. This helps in automatically creating options for other platforms like apps and sites. Run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> types</span></span></code></pre></div><p>For more on why <code>.ts</code> files are not used, see: <a href="/toolx/dist/docs/WhyNoTypescript">WhyNoTypescript.md</a>.</p><h2 id="step-4-write-tests" tabindex="-1">Step 4: Write Tests <a class="header-anchor" href="#step-4-write-tests" aria-label="Permalink to &quot;Step 4: Write Tests&quot;">​</a></h2><p>Write tests for your tool as it will be tested on different platforms through GitHub actions. Run the tests with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><h2 id="step-5-write-a-readme" tabindex="-1">Step 5: Write a README <a class="header-anchor" href="#step-5-write-a-readme" aria-label="Permalink to &quot;Step 5: Write a README&quot;">​</a></h2><p>Create a <code>README.md</code> file for your tool. You can use ChatGPT to assist with this. Guidelines for writing it can be found here: <a href="/toolx/dist/docs/DocumentationByAI">DocumentationByAI.md</a>.</p><h2 id="step-6-commit-push-and-publish" tabindex="-1">Step 6: Commit, Push, and Publish <a class="header-anchor" href="#step-6-commit-push-and-publish" aria-label="Permalink to &quot;Step 6: Commit, Push, and Publish&quot;">​</a></h2><p>After testing and writing documentation, commit and push your tool. Use the <code>version</code> script to tag and bump the version, which is crucial for managing version and core dependencies:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><p>Once everything is pushed, you can test and publish it if you have the necessary permissions.</p><h2 id="note-on-changes-and-versioning" tabindex="-1">Note on Changes and Versioning <a class="header-anchor" href="#note-on-changes-and-versioning" aria-label="Permalink to &quot;Note on Changes and Versioning&quot;">​</a></h2><p>If you need to make changes to your tool, other tools, or the core, follow the guideline on versioning.</p><h2 id="versioning-guidelines" tabindex="-1">Versioning Guidelines <a class="header-anchor" href="#versioning-guidelines" aria-label="Permalink to &quot;Versioning Guidelines&quot;">​</a></h2><p>Contributing to the ToolX library involves understanding the versioning conventions used within the monorepo. These conventions are crucial for maintaining consistency, compatibility, and clarity across all packages.</p><h3 id="patch-updates" tabindex="-1">Patch Updates <a class="header-anchor" href="#patch-updates" aria-label="Permalink to &quot;Patch Updates&quot;">​</a></h3><ul><li><strong>When to use</strong>: <ul><li>Small changes.</li><li>Bug fixes.</li><li>Improvements in documentation, tests, etc.</li></ul></li><li><strong>Scope</strong>: Applies to every package in the monorepo.</li><li><strong>Command</strong>: <code>npm run version &lt;nameofpackage&gt;</code></li><li><strong>Description</strong>: Patch updates are used for minor tweaks that don&#39;t affect the API or overall functionality of a tool.</li></ul><h3 id="minor-updates" tabindex="-1">Minor Updates <a class="header-anchor" href="#minor-updates" aria-label="Permalink to &quot;Minor Updates&quot;">​</a></h3><ul><li><strong>When to use</strong>: <ul><li>API changes.</li><li>New features (also not backwards compatible).</li><li>Changes in the options structure that might break existing configurations (similar to a &#39;major&#39; update in standard conventions).</li><li>Significant changes in tool functionality that alter output or usage.</li></ul></li><li><strong>Scope</strong>: Applies to every package in the monorepo.</li><li><strong>Command</strong>: <code>npm run version &lt;nameofpackage&gt; minor</code></li><li><strong>Description</strong>: Minor updates are significant yet don&#39;t affect the core functionality that might break other tools.</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Minor updates to the core are treated as per other packages - introducing new features without compromising other tools&#39; functionality.</p></div><h3 id="major-updates" tabindex="-1">Major Updates <a class="header-anchor" href="#major-updates" aria-label="Permalink to &quot;Major Updates&quot;">​</a></h3><ul><li><strong>When to use</strong>: <ul><li>Core changes that might break some or all tools.</li></ul></li><li><strong>Scope</strong>: Only on the core package.</li><li><strong>Command</strong>: <code>npm run version &lt;nameofpackage&gt; major</code></li><li><strong>Description</strong>: Major updates are used for substantial changes that have a widespread impact across the library.</li></ul><h2 id="versioning-commands" tabindex="-1">Versioning Commands <a class="header-anchor" href="#versioning-commands" aria-label="Permalink to &quot;Versioning Commands&quot;">​</a></h2><ul><li><strong>Individual Tool Update</strong>: <ul><li><strong>Command</strong>: <code>npm run version &lt;nameofpackage&gt;</code> for patch updates.</li><li><strong>Command</strong>: <code>npm run version &lt;nameofpackage&gt; &lt;type&gt;</code> for specifying update type (<code>patch</code>, <code>minor</code>, <code>major</code>).</li></ul></li><li><strong>Bulk Update</strong>: <ul><li><strong>Command</strong>: <code>npm run version all</code> to upgrade all packages.</li></ul></li><li><strong>Note</strong>: Using these commands automatically adds a tag about the package updates.</li></ul>',35),n=[s];function r(l,d,h,c,p,u){return t(),o("div",null,n)}const k=e(i,[["render",r]]);export{m as __pageData,k as default};
