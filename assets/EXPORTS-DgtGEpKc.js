import{W as e,at as t,c as n,et as r,n as i,nt as a,q as o,r as s,tt as c,u as l}from"./components-DGWjtEwO.js";var u={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en.css"</span><span class="shiki-foreground">;                     </span><span class="shiki-token-comment">// basic set</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-extra.css"</span><span class="shiki-foreground">;               </span><span class="shiki-token-comment">// full set</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-preset-core.css"</span><span class="shiki-foreground">;         </span><span class="shiki-token-comment">// foundation only</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-preset-nano.css"</span><span class="shiki-foreground">;         </span><span class="shiki-token-comment">// core + minimal layout + Button + Badge</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-preset-bare.css"</span><span class="shiki-foreground">;         </span><span class="shiki-token-comment">// core + layout + utilities, no components</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-preset-forms.css"</span><span class="shiki-foreground">;        </span><span class="shiki-token-comment">// core + all form controls + Button, Alert, Callout, Progress, Stepper</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-preset-docs.css"</span><span class="shiki-foreground">;         </span><span class="shiki-token-comment">// core + layout primitives + Prose, Code, TOC, Tree, Footer, … (documentation sites)</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-preset-lite.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-preset-standard.css"</span><span class="shiki-foreground">;     </span><span class="shiki-token-comment">// alias: en.css + form extended + Toast + Avatar</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-preset-extended.css"</span><span class="shiki-foreground">;     </span><span class="shiki-token-comment">// add-on: all extended components</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:0,lang:`javascript`,injectKind:null,editable:!1,source:null},1:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/dist/en.min.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/dist/presets/en-preset-standard.min.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:1,lang:`javascript`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/reset.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/tokens.css"</span><span class="shiki-foreground">;      </span><span class="shiki-token-comment">// includes tokens-colors + tokens-semantic + tokens-responsive (role spacing tokens)</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/base.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/layout.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/utilities.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/theme.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/forced-colors.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/tokens/tokens-scale.css"</span><span class="shiki-foreground">;   </span><span class="shiki-token-comment">// --en-scale, --en-type-scale, --en-density (opt-in; part of en-extra.css)</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/tokens/tokens-presets.css"</span><span class="shiki-foreground">; </span><span class="shiki-token-comment">// data-density, data-radius, data-accent, … (opt-in; part of en-extra.css)</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:2,lang:`javascript`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/basic/components-button.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/basic/components-card.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/basic/components-modal.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-comment">// ... one file per component</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/basic/components-basic-index.css"</span><span class="shiki-foreground">;  </span><span class="shiki-token-comment">// all basic components</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:3,lang:`javascript`,injectKind:null,editable:!1,source:null},4:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/extended/components-toast.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/extended/components-timeline.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-comment">// ... one file per component</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/extended/components-extended-index.css"</span><span class="shiki-foreground">;  </span><span class="shiki-token-comment">// all extended components</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:4,lang:`javascript`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/form/form-basic.css"</span><span class="shiki-foreground">;                       </span><span class="shiki-token-comment">// basic controls + fieldset</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/form/extended/components-otp.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/form/extended/components-range.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/form/extended/components-rating.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/form/extended/form-extended-index.css"</span><span class="shiki-foreground">;     </span><span class="shiki-token-comment">// all extended form controls</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:5,lang:`javascript`,injectKind:null,editable:!1,source:null},6:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/layouts/layout-columns.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/layouts/layout-extra-16.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/layouts/layout-extra-24.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/utilities/utilities-extra.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/utilities/utilities-animation-extra.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Extra spacing (all part of en-extra.css; each file works on its own and lives in @layer en-utilities)</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/utilities/utilities-spacing-responsive.css"</span><span class="shiki-foreground">; </span><span class="shiki-token-comment">// .en-px-6-md, .en-gap-4-lg, .en-py-fluid-lg, ...</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/utilities/utilities-spacing-negative.css"</span><span class="shiki-foreground">;   </span><span class="shiki-token-comment">// .en--mt-4, .en--mx-6, bleed: .en--mx-gutter, .en--m-inset</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/utilities/utilities-spacing-between.css"</span><span class="shiki-foreground">;    </span><span class="shiki-token-comment">// .en-space-y-4, .en-space-x-items, ...</span></span>
<span class="line"><span class="shiki-token-comment">// The role spacing classes (.en-px-gutter, .en-py-section, .en-p-inset, .en-gap-items) are core:</span></span>
<span class="line"><span class="shiki-token-comment">// core/utilities/utilities-spacing-role.css, already included by core/utilities.css and en.css.</span></span>
<span class="line"><span class="shiki-token-comment">// Fullscreen and bleed are core too (also included by core/utilities.css and en.css); single files:</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/utilities/utilities-fullscreen.css"</span><span class="shiki-foreground">; </span><span class="shiki-token-comment">// .en-fullscreen</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/core/utilities/utilities-bleed.css"</span><span class="shiki-foreground">;      </span><span class="shiki-token-comment">// .en-bleed, .en-bleed-md, ...</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Touch targets (44px on coarse pointers). Opt-in: en-preset-mobile imports it, en-extra.css does not.</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/utilities/utilities-touch.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Decorative .en-fx-* effects (or import effects/effects-index.css for all of them)</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/effects/effects-text.css"</span><span class="shiki-foreground">; </span><span class="shiki-token-comment">// every text group</span></span>
<span class="line"><span class="shiki-token-comment">// ...or only the text groups you use:</span></span>
<span class="line"><span class="shiki-token-comment">// import "@en32/en-css/effects/effects-text-fill.css";</span></span>
<span class="line"><span class="shiki-token-comment">// import "@en32/en-css/effects/effects-text-depth.css";</span></span>
<span class="line"><span class="shiki-token-comment">// import "@en32/en-css/effects/effects-text-decor.css";</span></span>
<span class="line"><span class="shiki-token-comment">// import "@en32/en-css/effects/effects-text-style.css";</span></span>
<span class="line"><span class="shiki-token-comment">// import "@en32/en-css/effects/effects-text-interactive.css";</span></span>
<span class="line"><span class="shiki-token-comment">// import "@en32/en-css/effects/effects-text-motion.css";</span></span>
<span class="line"><span class="shiki-token-comment">// import "@en32/en-css/effects/effects-text-typing.css";</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/effects/effects-shimmer.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:6,lang:`javascript`,injectKind:null,editable:!1,source:null},7:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-preset-core.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/basic/components-button.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/basic/components-card.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:7,lang:`javascript`,injectKind:null,editable:!1,source:null},8:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-preset-lite.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/extended/components-toast.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/components/extended/components-timeline.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:8,lang:`javascript`,injectKind:null,editable:!1,source:null},9:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> "@en32/en-css/en-extra.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:9,lang:`javascript`,injectKind:null,editable:!1,source:null}},d=[{id:`en-css-package-exports`,text:`EN-CSS Package Exports`,level:1},{id:`bundles`,text:`Bundles`,level:2},{id:`foundation`,text:`Foundation`,level:2},{id:`components`,text:`Components`,level:2},{id:`basic`,text:`Basic`,level:3},{id:`extended-opt-in`,text:`Extended (opt-in)`,level:3},{id:`forms`,text:`Forms`,level:2},{id:`layouts-and-utilities`,text:`Layouts and utilities`,level:2},{id:`examples`,text:`Examples`,level:2},{id:`build-your-own-minimal`,text:`Build your own (minimal)`,level:3},{id:`lite-specific-extended-components`,text:`Lite + specific extended components`,level:3},{id:`everything`,text:`Everything`,level:3},{id:`best-practices`,text:`Best practices`,level:2},{id:`faq`,text:`FAQ`,level:2}],f=[{id:`en-css-package-exports`,text:`EN-CSS Package Exports`,level:1,children:[{id:`bundles`,text:`Bundles`,level:2,children:[]},{id:`foundation`,text:`Foundation`,level:2,children:[]},{id:`components`,text:`Components`,level:2,children:[{id:`basic`,text:`Basic`,level:3,children:[]},{id:`extended-opt-in`,text:`Extended (opt-in)`,level:3,children:[]}]},{id:`forms`,text:`Forms`,level:2,children:[]},{id:`layouts-and-utilities`,text:`Layouts and utilities`,level:2,children:[]},{id:`examples`,text:`Examples`,level:2,children:[{id:`build-your-own-minimal`,text:`Build your own (minimal)`,level:3,children:[]},{id:`lite-specific-extended-components`,text:`Lite + specific extended components`,level:3,children:[]},{id:`everything`,text:`Everything`,level:3,children:[]}]},{id:`best-practices`,text:`Best practices`,level:2,children:[]},{id:`faq`,text:`FAQ`,level:2,children:[]}]}],p={css:[],js:[],cleanup:[]},m=e({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>o(`div`,{class:n},[e.meta.isLive?o(s,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:o(i,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),h=e({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/EXPORTS.md`,setup(){t(`vlm-toc`,{flat:d,tree:f}),c(()=>l(d,f)),a(()=>l([],[]));let e=n(p);return t(`vlm-inject`,e),c(()=>e.mount()),r(()=>e.beforeUnmount()),a(()=>e.unmounted()),()=>o(`div`,{class:`vlm-page`},[o(`div`,{class:`vlm-content`},[o(`div`,{class:`vlm-md`,innerHTML:`<h1 id="en-css-package-exports">EN-CSS Package Exports<a class="header-link" href="#en-css-package-exports" title="Link to this heading"></a></h1>
<p>How to import EN-CSS files through the <code>@en32/en-css</code> package <code>exports</code> map.</p>
<p>The map is made of wildcard patterns that mirror the folder layout, so new files are importable without touching <code>package.json</code>:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Import</th>
<th>Maps to</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@en32/en-css/en.css</code></td>
<td><code>src/en.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/en-extra.css</code></td>
<td><code>src/en-extra.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/en-preset-*.css</code></td>
<td><code>src/presets/en-preset-*.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/core/*.css</code></td>
<td><code>src/core/*.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/components/basic/*.css</code></td>
<td><code>src/components/basic/*.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/components/extended/*.css</code></td>
<td><code>src/components/extended/*.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/form/*.css</code></td>
<td><code>src/form/*.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/form/extended/*.css</code></td>
<td><code>src/form/extended/*.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/layouts/*.css</code></td>
<td><code>src/layouts/*.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/utilities/*.css</code></td>
<td><code>src/utilities/*.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/effects/*.css</code></td>
<td><code>src/effects/*.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/dist/*.min.css</code></td>
<td><code>dist/*.min.css</code></td>
</tr>
<tr>
<td><code>@en32/en-css/dist/*.css</code></td>
<td><code>dist/*.css</code></td>
</tr>
</tbody>
</table>
</div><p>File names are mapped as-is, so the <strong>file-name prefix is part of the import path</strong>:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Kind</th>
<th>Prefix</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Preset</td>
<td><code>en-preset-</code></td>
<td><code>en-preset-core.css</code></td>
</tr>
<tr>
<td>Component (basic / extended)</td>
<td><code>components-</code></td>
<td><code>components/extended/components-toast.css</code></td>
</tr>
<tr>
<td>Form</td>
<td><code>form-</code> (basic, index) / <code>components-</code> (extended)</td>
<td><code>form/form-basic.css</code>, <code>form/extended/components-otp.css</code></td>
</tr>
<tr>
<td>Layout</td>
<td><code>layout-</code></td>
<td><code>layouts/layout-columns.css</code></td>
</tr>
<tr>
<td>Token</td>
<td><code>tokens-</code></td>
<td><code>core/tokens/tokens-scale.css</code></td>
</tr>
<tr>
<td>Utility</td>
<td><code>utilities-</code></td>
<td><code>utilities/utilities-extra.css</code></td>
</tr>
<tr>
<td>Effect</td>
<td><code>effects-</code></td>
<td><code>effects/effects-shimmer.css</code></td>
</tr>
<tr>
<td>Index</td>
<td><code>*-index.css</code></td>
<td><code>components/extended/components-extended-index.css</code></td>
</tr>
</tbody>
</table>
</div><p>See <a href="./PRESETS">PRESETS.md</a> for what each bundle contains.</p>
<hr>
<h2 id="bundles">Bundles<a class="header-link" href="#bundles" title="Link to this heading"></a></h2>
<p>`}),o(m,{key:0,meta:u[0]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Minified builds:</p>
<p>`}),o(m,{key:1,meta:u[1]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<hr>
<h2 id="foundation">Foundation<a class="header-link" href="#foundation" title="Link to this heading"></a></h2>
<p>`}),o(m,{key:2,meta:u[2]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Token sub-files other than <code>tokens-scale.css</code> and <code>tokens-presets.css</code> (<code>tokens-colors.css</code>, <code>tokens-semantic.css</code>, <code>tokens-responsive.css</code>) are included by <code>tokens.css</code>; import <code>tokens.css</code> instead. The two opt-in files are also built on their own (<code>dist/core/tokens/tokens-scale.min.css</code>, <code>dist/core/tokens/tokens-presets.min.css</code>).</p>
<hr>
<h2 id="components">Components<a class="header-link" href="#components" title="Link to this heading"></a></h2>
<h3 id="basic">Basic<a class="header-link" href="#basic" title="Link to this heading"></a></h3>
<p>`}),o(m,{key:3,meta:u[3]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="extended-opt-in">Extended (opt-in)<a class="header-link" href="#extended-opt-in" title="Link to this heading"></a></h3>
<p>`}),o(m,{key:4,meta:u[4]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<hr>
<h2 id="forms">Forms<a class="header-link" href="#forms" title="Link to this heading"></a></h2>
<p>`}),o(m,{key:5,meta:u[5]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<hr>
<h2 id="layouts-and-utilities">Layouts and utilities<a class="header-link" href="#layouts-and-utilities" title="Link to this heading"></a></h2>
<p>`}),o(m,{key:6,meta:u[6]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<hr>
<h2 id="examples">Examples<a class="header-link" href="#examples" title="Link to this heading"></a></h2>
<h3 id="build-your-own-minimal">Build your own (minimal)<a class="header-link" href="#build-your-own-minimal" title="Link to this heading"></a></h3>
<p>`}),o(m,{key:7,meta:u[7]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="lite-specific-extended-components">Lite + specific extended components<a class="header-link" href="#lite-specific-extended-components" title="Link to this heading"></a></h3>
<p>`}),o(m,{key:8,meta:u[8]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="everything">Everything<a class="header-link" href="#everything" title="Link to this heading"></a></h3>
<p>`}),o(m,{key:9,meta:u[9]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<hr>
<h2 id="best-practices">Best practices<a class="header-link" href="#best-practices" title="Link to this heading"></a></h2>
<ol>
<li><strong>One bundle per project.</strong> Every bundle includes the foundation, so importing two bundles duplicates code (the exception is <code>en-preset-extended.css</code>, which is meant to be added on top).</li>
<li><strong>Framework first, your styles last.</strong> Your own CSS written without <code>@layer</code> automatically wins over all EN-CSS layers.</li>
<li><strong>Add components incrementally.</strong> Start from a small bundle and import single extended files as you need them.</li>
</ol>
<hr>
<h2 id="faq">FAQ<a class="header-link" href="#faq" title="Link to this heading"></a></h2>
<p><strong>Can I import both <code>en-preset-lite.css</code> and <code>en-preset-standard.css</code>?</strong> No. Each includes the foundation. Pick one, then add single components.</p>
<p><strong>What is in each bundle?</strong> See <a href="./PRESETS">PRESETS.md</a>.</p>
`})]),null])}}),g={title:`EN-CSS Package Exports`,description:`How to import EN-CSS files through the @en32/en-css package exports map.`},_=h;export{_ as default,g as meta};