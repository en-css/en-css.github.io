import{W as e,at as t,et as n,l as r,n as i,nt as a,q as o,r as s,s as c,tt as l}from"./components-BJME9hSd.js";var u={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">npm</span><span class="shiki-token-string"> install</span><span class="shiki-token-string"> @en32/en-css-vue</span><span class="shiki-token-string"> vue</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`bash`,key:0,lang:`bash`,injectKind:null,editable:!1,source:null},1:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> 'en-css-src/en.css'</span><span class="shiki-token-comment">          // basic set</span></span>
<span class="line"><span class="shiki-token-comment">// import 'en-css-src/en-extra.css' // full set: every optional component</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:1,lang:`ts`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "en-css-src/en.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "en-css-src/components/extended/components-combobox.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "en-css-src/components/extended/components-chip.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:2,lang:`css`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENTabs</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENTab } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/tabs'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENGrid } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { register } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/registry'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:3,lang:`ts`,injectKind:null,editable:!1,source:null},4:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxOption } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ModalButton } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:4,lang:`ts`,injectKind:null,editable:!1,source:null}},d=[{id:`installation`,text:`Installation`,level:1},{id:`packages`,text:`Packages`,level:2},{id:`load-encss`,text:`Load EN.CSS`,level:2},{id:`stylesheets-per-module`,text:`Stylesheets per module`,level:3},{id:`entry-points`,text:`Entry points`,level:2},{id:`typescript`,text:`TypeScript`,level:2},{id:`server-side-rendering`,text:`Server-side rendering`,level:2}],f=[{id:`installation`,text:`Installation`,level:1,children:[{id:`packages`,text:`Packages`,level:2,children:[]},{id:`load-encss`,text:`Load EN.CSS`,level:2,children:[{id:`stylesheets-per-module`,text:`Stylesheets per module`,level:3,children:[]}]},{id:`entry-points`,text:`Entry points`,level:2,children:[]},{id:`typescript`,text:`TypeScript`,level:2,children:[]},{id:`server-side-rendering`,text:`Server-side rendering`,level:2,children:[]}]}],p={css:[],js:[],cleanup:[]},m=e({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>o(`div`,{class:n},[e.meta.isLive?o(s,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:o(i,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),h=e({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/installation.md`,setup(){t(`vlm-toc`,{flat:d,tree:f}),l(()=>r(d,f)),a(()=>r([],[]));let e=c(p);return t(`vlm-inject`,e),l(()=>e.mount()),n(()=>e.beforeUnmount()),a(()=>e.unmounted()),()=>o(`div`,{class:`vlm-page`},[o(`div`,{class:`vlm-content`},[o(`div`,{class:`vlm-md`,innerHTML:`<h1 id="installation">Installation<a class="header-link" href="#installation" title="Link to this heading"></a></h1>
<h2 id="packages">Packages<a class="header-link" href="#packages" title="Link to this heading"></a></h2>
<p>`}),o(m,{key:0,meta:u[0]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Package</th>
<th>Required</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>vue</code></td>
<td>yes</td>
<td><code>^3.5.0</code> (the components use <code>useId()</code>)</td>
</tr>
<tr>
<td><code>@en32/popkit</code></td>
<td>no</td>
<td>Optional peer dependency. Used lazily by navtree for sidebar flyouts and the breadcrumb ellipsis menu</td>
</tr>
<tr>
<td><code>en-css-src</code></td>
<td>yes</td>
<td>The EN.CSS stylesheets (see below)</td>
</tr>
</tbody>
</table>
</div><h2 id="load-encss">Load EN.CSS<a class="header-link" href="#load-encss" title="Link to this heading"></a></h2>
<p>The Vue package renders <code>en-*</code> classes; the stylesheets come from EN.CSS. Import a bundle once, for example in <code>main.ts</code>:</p>
<p>`}),o(m,{key:1,meta:u[1]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>If you use the basic set, add the extended files a component needs one by one:</p>
<p>`}),o(m,{key:2,meta:u[2]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>All component rules live in the <code>en-components</code> cascade layer, so CSS you write without <code>@layer</code> always wins.</p>
<h3 id="stylesheets-per-module">Stylesheets per module<a class="header-link" href="#stylesheets-per-module" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Module</th>
<th>Needs</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>combobox</code></td>
<td><code>components-combobox.css</code>, <code>components-chip.css</code> (for <code>multiple</code>). <code>combobox/style.css</code> for <code>clearable</code></td>
</tr>
<tr>
<td><code>modal</code></td>
<td><code>components-modal.css</code>, <code>components-close-icon.css</code>, <code>components-button.css</code>. Optional: <code>components-btn-loading.css</code>, <code>components-spinner.css</code>, dot loaders, <code>form-basic.css</code> (for <code>prompt()</code>)</td>
</tr>
<tr>
<td><code>tabs</code></td>
<td><code>basic/components-tabs.css</code> (and <code>basic/components-segmented-control.css</code> for <code>segmented</code>)</td>
</tr>
<tr>
<td><code>layout</code></td>
<td><code>core/layout.css</code> (included in <code>en.css</code>)</td>
</tr>
<tr>
<td><code>navtree</code></td>
<td><code>basic/components-breadcrumb.css</code>, <code>extended/components-toc.css</code>, <code>extended/components-tree.css</code>, <code>extended/components-sidebar-menu.css</code></td>
</tr>
</tbody>
</table>
</div><p>Each component page lists the exact requirements.</p>
<h2 id="entry-points">Entry points<a class="header-link" href="#entry-points" title="Link to this heading"></a></h2>
<p>Import each module from its own subpath, so you only bundle what you use:</p>
<p>`}),o(m,{key:3,meta:u[3]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Subpath</th>
<th>Resolves to</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@en32/en-css-vue/registry</code>, <code>/modal</code>, <code>/tabs</code>, <code>/layout</code>, <code>/combobox</code></td>
<td>TypeScript source</td>
</tr>
<tr>
<td><code>@en32/en-css-vue/tabs/ts</code></td>
<td>TypeScript source (same file as <code>/tabs</code>)</td>
</tr>
<tr>
<td><code>@en32/en-css-vue/navtree</code></td>
<td>Built bundle (<code>dist/bundle/navtree/navtree.js</code>)</td>
</tr>
<tr>
<td><code>@en32/en-css-vue/navtree/ts</code></td>
<td>TypeScript source</td>
</tr>
<tr>
<td><code>@en32/en-css-vue/modal/style.css</code></td>
<td>Deprecated empty stub</td>
</tr>
<tr>
<td><code>@en32/en-css-vue/combobox/style.css</code></td>
<td>Clear button styles</td>
</tr>
</tbody>
</table>
</div><p>Modules that resolve to TypeScript source need a toolchain that compiles <code>.ts</code> from <code>node_modules</code> (Vite, Bun). The examples in this documentation import from the suffix-less subpath, which resolves for every module.</p>
<h2 id="typescript">TypeScript<a class="header-link" href="#typescript" title="Link to this heading"></a></h2>
<p>Use <code>&quot;moduleResolution&quot;: &quot;Bundler&quot;</code> (or <code>&quot;NodeNext&quot;</code>) so the <code>exports</code> map is honored. Types are re-exported from each module’s entry point, for example:</p>
<p>`}),o(m,{key:4,meta:u[4]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="server-side-rendering">Server-side rendering<a class="header-link" href="#server-side-rendering" title="Link to this heading"></a></h2>
<p>DOM ids come from <code>useId()</code>, so they match between server and client. Two things need care: a server-rendered <code>&lt;ENModal&gt;</code> should get an explicit <code>id</code>, and <code>ENCombobox</code> decides on <code>placement=&quot;popover&quot;</code> only after mount, so the first render is always <code>inline</code>.</p>
`})]),null])}}),g={title:`Installation`,description:null},_=h;export{_ as default,g as meta};