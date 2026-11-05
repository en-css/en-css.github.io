import{W as e,at as t,et as n,l as r,n as i,nt as a,q as o,r as s,s as c,tt as l}from"./components-BJME9hSd.js";var u={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">npm</span><span class="shiki-token-string"> install</span></span>
<span class="line"><span class="shiki-token-comment"># or</span></span>
<span class="line"><span class="shiki-token-function">bun</span><span class="shiki-token-string"> install</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`bash`,key:0,lang:`bash`,injectKind:null,editable:!1,source:null},1:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">export</span><span class="shiki-token-keyword"> const</span><span class="shiki-token-constant"> BASELINE_YEAR</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> 2025</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`typescript`,key:1,lang:`typescript`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">{ </span><span class="shiki-token-keyword">"files"</span><span class="shiki-token-punctuation">:</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">"dist"</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> "src"</span><span class="shiki-foreground">] }</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`json`,key:2,lang:`json`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">npm</span><span class="shiki-token-string"> run</span><span class="shiki-token-string"> build:all</span></span>
<span class="line"><span class="shiki-token-function">npm</span><span class="shiki-token-string"> run</span><span class="shiki-token-string"> check</span></span>
<span class="line"><span class="shiki-token-function">npm</span><span class="shiki-token-string"> publish</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`bash`,key:3,lang:`bash`,injectKind:null,editable:!1,source:null},4:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">// vite.config.js</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { defineConfig } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> "vite"</span><span class="shiki-foreground">;</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">export</span><span class="shiki-token-keyword"> default</span><span class="shiki-token-function"> defineConfig</span><span class="shiki-foreground">({</span></span>
<span class="line"><span class="shiki-foreground">  css</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { transformer</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> "lightningcss"</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">});</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// main.js</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:4,lang:`javascript`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">// postcss.config.js</span></span>
<span class="line"><span class="shiki-token-constant">module</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">exports</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  plugins</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [</span><span class="shiki-token-function">require</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">"postcss-import"</span><span class="shiki-foreground">)]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">};</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:5,lang:`javascript`,injectKind:null,editable:!1,source:null}},d=[{id:`en-css-build-guide`,text:`EN-CSS Build Guide`,level:1},{id:`prerequisites`,text:`Prerequisites`,level:2},{id:`where-the-bundle-list-comes-from`,text:`Where the bundle list comes from`,level:2},{id:`build-commands`,text:`Build commands`,level:2},{id:`generated-bundles`,text:`Generated bundles`,level:2},{id:`consistency-check`,text:`Consistency check`,level:2},{id:`browser-support`,text:`Browser support`,level:2},{id:`output-layout`,text:`Output layout`,level:2},{id:`ci-example`,text:`CI example`,level:2},{id:`publishing`,text:`Publishing`,level:2},{id:`troubleshooting`,text:`Troubleshooting`,level:2},{id:`integrating-with-your-own-pipeline`,text:`Integrating with your own pipeline`,level:2},{id:`vite`,text:`Vite`,level:3},{id:`postcss`,text:`PostCSS`,level:3}],f=[{id:`en-css-build-guide`,text:`EN-CSS Build Guide`,level:1,children:[{id:`prerequisites`,text:`Prerequisites`,level:2,children:[]},{id:`where-the-bundle-list-comes-from`,text:`Where the bundle list comes from`,level:2,children:[]},{id:`build-commands`,text:`Build commands`,level:2,children:[]},{id:`generated-bundles`,text:`Generated bundles`,level:2,children:[]},{id:`consistency-check`,text:`Consistency check`,level:2,children:[]},{id:`browser-support`,text:`Browser support`,level:2,children:[]},{id:`output-layout`,text:`Output layout`,level:2,children:[]},{id:`ci-example`,text:`CI example`,level:2,children:[]},{id:`publishing`,text:`Publishing`,level:2,children:[]},{id:`troubleshooting`,text:`Troubleshooting`,level:2,children:[]},{id:`integrating-with-your-own-pipeline`,text:`Integrating with your own pipeline`,level:2,children:[{id:`vite`,text:`Vite`,level:3,children:[]},{id:`postcss`,text:`PostCSS`,level:3,children:[]}]}]}],p={css:[],js:[],cleanup:[]},m=e({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>o(`div`,{class:n},[e.meta.isLive?o(s,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:o(i,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),h=e({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/BUILD.md`,setup(){t(`vlm-toc`,{flat:d,tree:f}),l(()=>r(d,f)),a(()=>r([],[]));let e=c(p);return t(`vlm-inject`,e),l(()=>e.mount()),n(()=>e.beforeUnmount()),a(()=>e.unmounted()),()=>o(`div`,{class:`vlm-page`},[o(`div`,{class:`vlm-content`},[o(`div`,{class:`vlm-md`,innerHTML:`<h1 id="en-css-build-guide">EN-CSS Build Guide<a class="header-link" href="#en-css-build-guide" title="Link to this heading"></a></h1>
<p>How to build <code>@en32/en-css</code> bundles from source.</p>
<h2 id="prerequisites">Prerequisites<a class="header-link" href="#prerequisites" title="Link to this heading"></a></h2>
<p>Bundling and minification use <strong>LightningCSS</strong>. Browser targets are derived from Baseline data by <code>baseline-browser-mapping</code>. The scripts run on both <strong>Bun</strong> and <strong>Node.js</strong> (Node 22.18+ runs the <code>.ts</code> scripts directly).</p>
<p>`}),o(m,{key:0,meta:u[0]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="where-the-bundle-list-comes-from">Where the bundle list comes from<a class="header-link" href="#where-the-bundle-list-comes-from" title="Link to this heading"></a></h2>
<p><code>src/presets/manifest.json</code> is the single source of truth. <code>build.ts</code>, <code>minify.ts</code>, <code>analyze.ts</code>, <code>check.ts</code> and <code>docs.ts</code> all read it.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Field</th>
<th>Edited by</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>name</code>, <code>kind</code>, <code>title</code>, <code>summary</code>, <code>audience</code> (optional), <code>input</code>, <code>dist</code></td>
<td>you</td>
</tr>
<tr>
<td><code>files</code> (resolved <code>@import</code> list), <code>measured</code> (sizes), <code>targets</code></td>
<td>generated by the build scripts</td>
</tr>
</tbody>
</table>
</div><p>To add a bundle: create the source file, add one entry to <code>manifest.json</code>, run <code>npm run build:all</code>.</p>
<h2 id="build-commands">Build commands<a class="header-link" href="#build-commands" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Command</th>
<th>What it does</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>npm run build</code></td>
<td>Development bundles (unminified)</td>
<td><code>dist/&lt;dist&gt;.css</code></td>
</tr>
<tr>
<td><code>npm run build:prod</code></td>
<td>Minified bundles + records sizes in the manifest</td>
<td><code>dist/&lt;dist&gt;.min.css</code></td>
</tr>
<tr>
<td><code>npm run build:chunks</code></td>
<td>Every source file individually (+ <code>_*-index</code> bundles)</td>
<td><code>dist/**</code> (mirrors <code>src/</code>)</td>
</tr>
<tr>
<td><code>npm run build:json</code></td>
<td>Tree JSON for the file browser</td>
<td><code>dist/tree-*.json</code></td>
</tr>
<tr>
<td><code>npm run docs</code></td>
<td>Regenerates the bundle tables in the docs from the manifest</td>
<td><code>README.md</code>, <code>PRESETS.md</code>, <code>QUICKSTART.md</code>, <code>BUILD.md</code></td>
</tr>
<tr>
<td><code>npm run build:all</code></td>
<td>All of the above, in order</td>
<td></td>
</tr>
<tr>
<td><code>npm run analyze</code></td>
<td>Prints sizes of what is in <code>dist/</code> (add <code>--write</code> to store them)</td>
<td>console</td>
</tr>
<tr>
<td><code>npm run check</code></td>
<td>Consistency checks (see below)</td>
<td>exit code</td>
</tr>
</tbody>
</table>
</div><h2 id="generated-bundles">Generated bundles<a class="header-link" href="#generated-bundles" title="Link to this heading"></a></h2>
<!-- en:sizes:start -->
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Source</th>
<th>Development</th>
<th>Minified</th>
<th>Gzip</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>src/en.css</code></td>
<td><code>dist/en.css</code> (218.4 KB)</td>
<td><code>dist/en.min.css</code> (174.6 KB)</td>
<td>26.9 KB</td>
</tr>
<tr>
<td><code>src/en-extra.css</code></td>
<td><code>dist/en-extra.css</code> (657.1 KB)</td>
<td><code>dist/en-extra.min.css</code> (521.3 KB)</td>
<td>80.4 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-core.css</code></td>
<td><code>dist/presets/en-preset-core.css</code> (25.0 KB)</td>
<td><code>dist/presets/en-preset-core.min.css</code> (20.9 KB)</td>
<td>4.7 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-lite.css</code></td>
<td><code>dist/presets/en-preset-lite.css</code> (229.8 KB)</td>
<td><code>dist/presets/en-preset-lite.min.css</code> (182.1 KB)</td>
<td>27.9 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-standard.css</code></td>
<td><code>dist/presets/en-preset-standard.css</code> (277.4 KB)</td>
<td><code>dist/presets/en-preset-standard.min.css</code> (222.1 KB)</td>
<td>33.9 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-nano.css</code></td>
<td><code>dist/presets/en-preset-nano.css</code> (46.1 KB)</td>
<td><code>dist/presets/en-preset-nano.min.css</code> (36.8 KB)</td>
<td>6.9 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-bare.css</code></td>
<td><code>dist/presets/en-preset-bare.css</code> (61.8 KB)</td>
<td><code>dist/presets/en-preset-bare.min.css</code> (48.4 KB)</td>
<td>9.5 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-forms.css</code></td>
<td><code>dist/presets/en-preset-forms.css</code> (126.8 KB)</td>
<td><code>dist/presets/en-preset-forms.min.css</code> (103.9 KB)</td>
<td>16.3 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-docs.css</code></td>
<td><code>dist/presets/en-preset-docs.css</code> (118.4 KB)</td>
<td><code>dist/presets/en-preset-docs.min.css</code> (93.3 KB)</td>
<td>16.6 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-app.css</code></td>
<td><code>dist/presets/en-preset-app.css</code> (373.2 KB)</td>
<td><code>dist/presets/en-preset-app.min.css</code> (298.7 KB)</td>
<td>44.8 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-data.css</code></td>
<td><code>dist/presets/en-preset-data.css</code> (366.4 KB)</td>
<td><code>dist/presets/en-preset-data.min.css</code> (292.4 KB)</td>
<td>44.7 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-marketing.css</code></td>
<td><code>dist/presets/en-preset-marketing.css</code> (299.2 KB)</td>
<td><code>dist/presets/en-preset-marketing.min.css</code> (237.4 KB)</td>
<td>37.5 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-mobile.css</code></td>
<td><code>dist/presets/en-preset-mobile.css</code> (269.1 KB)</td>
<td><code>dist/presets/en-preset-mobile.min.css</code> (213.5 KB)</td>
<td>33.5 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-extended.css</code></td>
<td><code>dist/presets/en-preset-extended.css</code> (279.0 KB)</td>
<td><code>dist/presets/en-preset-extended.min.css</code> (220.7 KB)</td>
<td>35.4 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-a11y.css</code></td>
<td><code>dist/presets/en-preset-a11y.css</code> (3.7 KB)</td>
<td><code>dist/presets/en-preset-a11y.min.css</code> (3.3 KB)</td>
<td>1.3 KB</td>
</tr>
<tr>
<td><code>src/presets/en-preset-print.css</code></td>
<td><code>dist/presets/en-preset-print.css</code> (5.1 KB)</td>
<td><code>dist/presets/en-preset-print.min.css</code> (4.2 KB)</td>
<td>1.8 KB</td>
</tr>
</tbody>
</table>
</div><p><em>Sizes measured with Baseline 2025 targets (chrome 141, edge 141, firefox 145, safari 26.2). Generated from <code>src/presets/manifest.json</code> by <code>npm run docs</code>.</em></p>
<!-- en:sizes:end -->
<p>Sizes are recorded for information only. There are no size budgets, thresholds, warnings or build failures based on size.</p>
<h2 id="consistency-check">Consistency check<a class="header-link" href="#consistency-check" title="Link to this heading"></a></h2>
<p><code>npm run check</code> verifies, and exits non-zero on failure:</p>
<ol>
<li>every local <code>@import</code> in <code>src/</code> points to an existing file;</li>
<li>every manifest bundle bundles successfully;</li>
<li>every <code>src/presets/en-preset-*.css</code> is listed in the manifest;</li>
<li><code>en.css</code> contains <strong>no</strong> extended selectors, while <code>en-extra.css</code> does;</li>
<li>no stale references to removed or renamed bundles remain in code or docs;</li>
<li>every manifest bundle is reachable through <code>package.json</code> <code>exports</code>;</li>
<li><code>--en-density</code> / <code>--en-type-scale</code> are referenced only by <code>tokens-scale.css</code> and <code>tokens-presets.css</code> (components use the derived tokens), and <code>tokens-scale.css</code> defaults every axis to <code>1</code>;</li>
<li><code>tokens-presets.css</code> has rules for all eight <code>data-*</code> attributes, stays standalone (no <code>@import</code>), and <code>en-extra.css</code> ships it;</li>
<li>solid color slots are defined in <code>tokens-colors.css</code> with the correct naming pattern (<code>--en-color-*-solid-{base|hover|active}-{light|dark}</code>);</li>
<li>form controls use <code>--en-border-control</code> instead of <code>--en-border</code> for WCAG 1.4.11 compliance (≥3:1 contrast);</li>
<li>responsive spacing: the four role tokens are defined in <code>tokens-responsive.css</code> (imported by <code>tokens.css</code>, base scale untouched), <code>.en-container</code> and the <code>.en-grid</code> family use them, the spacing files in <code>utilities/</code> and <code>core/utilities/</code> each hold a single <code>@layer en-utilities</code> block, <code>utilities-extra.css</code> no longer holds breakpoint, fluid or negative spacing, removed classes do not return, and breakpoint/negative/between classes appear only in <code>en-extra.css</code>.</li>
</ol>
<h2 id="browser-support">Browser support<a class="header-link" href="#browser-support" title="Link to this heading"></a></h2>
<p>The support floor is <strong>Baseline 2025</strong> (features that are Baseline “newly available” by the end of 2025, i.e. early 2026). It is defined in one place, <code>scripts/targets.ts</code>:</p>
<p>`}),o(m,{key:1,meta:u[1]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The minimum browser versions are <strong>derived</strong> from <code>baseline-browser-mapping</code> (not written by hand) and shared by <code>build.ts</code>, <code>minify.ts</code> and <code>individual.ts</code>. The versions used for the last build are stored in <code>manifest.json</code> → <code>targets</code>. To move the floor, change <code>BASELINE_YEAR</code> and rebuild.</p>
<p>Because the floor is modern, LightningCSS no longer adds transpilation fallbacks for features such as <code>light-dark()</code>, nesting or <code>@layer</code>, which keeps the output smaller.</p>
<p>Before using a new CSS feature in source, check its Baseline status on MDN or web.dev. Features that are not Baseline yet must be wrapped in <code>@supports</code>.</p>
<h2 id="output-layout">Output layout<a class="header-link" href="#output-layout" title="Link to this heading"></a></h2>
<pre><code>dist/
├── en.css / en.min.css
├── en-extra.css / en-extra.min.css
├── presets/
│   └── en-preset-*.css / en-preset-*.min.css
└── &lt;mirror of src/ from build:chunks&gt;
</code></pre>
<h2 id="ci-example">CI example<a class="header-link" href="#ci-example" title="Link to this heading"></a></h2>
<pre><code class="language-yaml">name: Build CSS
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun run check
      - run: bun run build:all
      - uses: actions/upload-artifact@v4
        with:
          name: css-bundles
          path: dist/
</code></pre>
<h2 id="publishing">Publishing<a class="header-link" href="#publishing" title="Link to this heading"></a></h2>
<p><code>package.json</code> publishes <code>dist/</code> and <code>src/</code>:</p>
<p>`}),o(m,{key:2,meta:u[2]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),o(m,{key:3,meta:u[3]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="troubleshooting">Troubleshooting<a class="header-link" href="#troubleshooting" title="Link to this heading"></a></h2>
<p><strong><code>Cannot find module 'lightningcss'</code> / <code>'baseline-browser-mapping'</code></strong> — run <code>npm install</code> (or <code>bun install</code>).</p>
<p><strong><code>Missing @import &quot;...&quot; in ...</code></strong> — a path in a bundle is wrong; <code>npm run check</code> lists every broken import.</p>
<p><strong>Build fails with a syntax error</strong> — LightningCSS validates CSS strictly; fix the file named in the message.</p>
<p><strong><code>en.css</code> suddenly grows</strong> — an extended file was imported by a basic index; <code>npm run check</code> fails on extended selectors in <code>en.css</code>.</p>
<h2 id="integrating-with-your-own-pipeline">Integrating with your own pipeline<a class="header-link" href="#integrating-with-your-own-pipeline" title="Link to this heading"></a></h2>
<h3 id="vite">Vite<a class="header-link" href="#vite" title="Link to this heading"></a></h3>
<p>`}),o(m,{key:4,meta:u[4]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="postcss">PostCSS<a class="header-link" href="#postcss" title="Link to this heading"></a></h3>
<p>`}),o(m,{key:5,meta:u[5]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),g={title:`EN-CSS Build Guide`,description:`How to build @en32/en-css bundles from source.`},_=h;export{_ as default,g as meta};