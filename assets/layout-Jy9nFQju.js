import{At as e,F as t,H as n,I as r,W as i,_t as a,at as o,et as s,it as c,l,m as u,n as d,nt as f,q as p,r as m,s as h,tt as g}from"./components-BJME9hSd.js";import{n as _,t as v}from"./src-DECtJlYK.js";import{t as y}from"./src-DmzeVCXm.js";var b={0:{component:u(i({__name:`0`,setup(i){return(i,o)=>(c(),r(e(_),{gap:`4`},{default:a(()=>[n(e(v),{span:`12`,"span-md":`6`},{default:a(()=>[...o[0]||=[t(`div`,{class:`box`},`Left`,-1)]]),_:1}),n(e(v),{span:`12`,"span-md":`6`},{default:a(()=>[n(e(y),{gap:`2`},{default:a(()=>[...o[1]||=[t(`div`,{class:`box`},`Right, top`,-1),t(`div`,{class:`box`},`Right, bottom`,-1)]]),_:1})]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-2beb2ba6`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENGrid</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENCol</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENStack } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENGrid</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCol</span><span class="shiki-token-function"> span</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"12"</span><span class="shiki-token-function"> span-md</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"6"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Left&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENCol</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCol</span><span class="shiki-token-function"> span</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"12"</span><span class="shiki-token-function"> span-md</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"6"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">ENStack</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Right, top&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Right, bottom&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">ENStack</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ENCol</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENGrid</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:0,lang:`vue`,injectKind:null,editable:!1,source:null},1:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">npm</span><span class="shiki-token-string"> install</span><span class="shiki-token-string"> @en32/en-css-vue</span><span class="shiki-token-string"> vue</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`bash`,key:1,lang:`bash`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENGrid</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENCol</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENStack } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:2,lang:`ts`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "en-css-src/en.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "en-css-src/layouts/layout-primitives.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "en-css-src/layouts/layout-index.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:3,lang:`css`,injectKind:null,editable:!1,source:null},4:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { createApp } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCSSGrid } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">createApp</span><span class="shiki-foreground">(App)</span><span class="shiki-token-function">.use</span><span class="shiki-foreground">(ENCSSGrid) </span><span class="shiki-token-comment">// registers all 21 components</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:4,lang:`ts`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { register } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/registry'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENGrid } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">register</span><span class="shiki-token-function">.add</span><span class="shiki-foreground">(ENGrid</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { as</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'ENGrid16'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> props</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { system</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 16</span><span class="shiki-foreground"> } })</span></span>
<span class="line"><span class="shiki-token-constant">app</span><span class="shiki-token-function">.use</span><span class="shiki-foreground">(register)</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:5,lang:`ts`,injectKind:null,editable:!1,source:null},6:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENGrid16</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;ENCol system="16" span="4">Sidebar&#x3C;/ENCol></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;ENCol system="16" span="12">Content&#x3C;/ENCol></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ENGrid16</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:6,lang:`vue`,injectKind:null,editable:!1,source:null},7:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENStack</span><span class="shiki-token-function"> as</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"section"</span><span class="shiki-token-function"> root-class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"my-section"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"title"</span><span class="shiki-foreground">>...&#x3C;/</span><span class="shiki-token-string-expression">ENStack</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:7,lang:`vue`,injectKind:null,editable:!1,source:null}},x=[{id:`layout`,text:`Layout`,level:1},{id:`components`,text:`Components`,level:2},{id:`core-layout`,text:`Core layout`,level:3},{id:`layout-primitives`,text:`Layout primitives`,level:3},{id:`multi-column-flow`,text:`Multi-column flow`,level:3},{id:`install`,text:`Install`,level:2},{id:`global-registration`,text:`Global registration`,level:2},{id:`common-props`,text:`Common props`,level:2},{id:`choosing-a-component`,text:`Choosing a component`,level:2},{id:`notes`,text:`Notes`,level:2}],S=[{id:`layout`,text:`Layout`,level:1,children:[{id:`components`,text:`Components`,level:2,children:[{id:`core-layout`,text:`Core layout`,level:3,children:[]},{id:`layout-primitives`,text:`Layout primitives`,level:3,children:[]},{id:`multi-column-flow`,text:`Multi-column flow`,level:3,children:[]}]},{id:`install`,text:`Install`,level:2,children:[]},{id:`global-registration`,text:`Global registration`,level:2,children:[]},{id:`common-props`,text:`Common props`,level:2,children:[]},{id:`choosing-a-component`,text:`Choosing a component`,level:2,children:[]},{id:`notes`,text:`Notes`,level:2,children:[]}]}],C={css:[],js:[],cleanup:[]},w=i({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>p(`div`,{class:n},[e.meta.isLive?p(m,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:p(d,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),T=i({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/index.md`,setup(){o(`vlm-toc`,{flat:x,tree:S}),g(()=>l(x,S)),f(()=>l([],[]));let e=h(C);return o(`vlm-inject`,e),g(()=>e.mount()),s(()=>e.beforeUnmount()),f(()=>e.unmounted()),()=>p(`div`,{class:`vlm-page`},[p(`div`,{class:`vlm-content`},[p(`div`,{class:`vlm-md`,innerHTML:`<h1 id="layout">Layout<a class="header-link" href="#layout" title="Link to this heading"></a></h1>
<p>Vue 3 layout components for EN.CSS. Every component is a thin render function that maps typed props onto the real <code>en-*</code> classes of the framework’s layout files. Nothing is re-implemented in JavaScript, and a class that EN.CSS does not ship is reported in development instead of silently doing nothing.</p>
<p>`}),p(w,{key:0,meta:b[0]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="components">Components<a class="header-link" href="#components" title="Link to this heading"></a></h2>
<h3 id="core-layout">Core layout<a class="header-link" href="#core-layout" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Component</th>
<th>EN.CSS class</th>
<th>Purpose</th>
<th>Page</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ENContainer</code></td>
<td><code>.en-container</code></td>
<td>Centered, max-width wrapper and inline-size container</td>
<td><a href="./container">Container</a></td>
</tr>
<tr>
<td><code>ENGrid</code> / <code>ENCol</code></td>
<td><code>.en-grid-12</code>, <code>.en-grid-16</code>, <code>.en-grid-24</code>, <code>.en-grid</code>, <code>.en-grid--cols-*</code></td>
<td>Grid container and item span</td>
<td><a href="./grid">Grid</a></td>
</tr>
<tr>
<td><code>ENFlex</code> / <code>ENFlexItem</code></td>
<td><code>.en-flex</code>, <code>.en-flex-*</code></td>
<td>Flexbox container and item, with container-query responsiveness</td>
<td><a href="./flex">Flex</a></td>
</tr>
<tr>
<td><code>ENStack</code></td>
<td><code>.en-stack</code></td>
<td>Vertical rhythm</td>
<td><a href="./stack">Stack</a></td>
</tr>
<tr>
<td><code>ENCluster</code></td>
<td><code>.en-cluster</code></td>
<td>Wrapping row of inline items</td>
<td><a href="./cluster">Cluster</a></td>
</tr>
<tr>
<td><code>ENCenter</code></td>
<td><code>.en-center</code></td>
<td>One-line centering</td>
<td><a href="./center">Center</a></td>
</tr>
<tr>
<td><code>ENAspectBox</code></td>
<td><code>.en-aspect-*</code></td>
<td>Aspect-ratio box (preset or custom)</td>
<td><a href="./aspect-box">Aspect Box</a></td>
</tr>
</tbody>
</table>
</div><h3 id="layout-primitives">Layout primitives<a class="header-link" href="#layout-primitives" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Component</th>
<th>EN.CSS class</th>
<th>Purpose</th>
<th>Page</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ENSwitcher</code></td>
<td><code>.en-switcher</code></td>
<td>Row that becomes a column when its container is narrow</td>
<td><a href="./switcher">Switcher</a></td>
</tr>
<tr>
<td><code>ENSidebarLayout</code></td>
<td><code>.en-with-sidebar</code></td>
<td>Fixed sidebar and fluid content that wraps by itself</td>
<td><a href="./sidebar-layout">Sidebar Layout</a></td>
</tr>
<tr>
<td><code>ENCover</code></td>
<td><code>.en-cover</code></td>
<td>Full-height area with one centered child</td>
<td><a href="./cover">Cover</a></td>
</tr>
<tr>
<td><code>ENReel</code></td>
<td><code>.en-reel</code></td>
<td>Horizontal scroll row with scroll-snap</td>
<td><a href="./reel">Reel</a></td>
</tr>
<tr>
<td><code>ENFrame</code></td>
<td><code>.en-frame</code></td>
<td>Aspect ratio where media fills the box (<code>object-fit</code>)</td>
<td><a href="./frame">Frame</a></td>
</tr>
<tr>
<td><code>ENImposter</code></td>
<td><code>.en-imposter</code></td>
<td>Centered overlay</td>
<td><a href="./imposter">Imposter</a></td>
</tr>
<tr>
<td><code>ENBento</code> / <code>ENBentoItem</code></td>
<td><code>.en-bento</code></td>
<td>Tile grid with different spans or named areas</td>
<td><a href="./bento">Bento</a></td>
</tr>
<tr>
<td><code>ENMasonry</code></td>
<td><code>.en-masonry</code></td>
<td>Items of different heights packed in columns</td>
<td><a href="./masonry">Masonry</a></td>
</tr>
<tr>
<td><code>ENSplit</code> / <code>ENSplitPane</code></td>
<td><code>.en-split</code></td>
<td>Two panes, the first resizable</td>
<td><a href="./split">Split</a></td>
</tr>
</tbody>
</table>
</div><h3 id="multi-column-flow">Multi-column flow<a class="header-link" href="#multi-column-flow" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Component</th>
<th>EN.CSS class</th>
<th>Purpose</th>
<th>Page</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ENColumns</code></td>
<td><code>.en-columns</code></td>
<td>Multi-column flow (top to bottom, then the next column)</td>
<td><a href="./columns">Columns</a></td>
</tr>
</tbody>
</table>
</div><h2 id="install">Install<a class="header-link" href="#install" title="Link to this heading"></a></h2>
<p>`}),p(w,{key:1,meta:b[1]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),p(w,{key:2,meta:b[2]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The components only emit class names, so <strong>EN.CSS has to be loaded by your app</strong>. Which stylesheet a component needs:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Components</th>
<th>EN.CSS file</th>
<th>Shipped by</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ENContainer</code>, <code>ENGrid</code> (12 / auto / fixed columns), <code>ENCol</code>, <code>ENFlex</code>, <code>ENFlexItem</code>, <code>ENStack</code>, <code>ENCluster</code>, <code>ENCenter</code>, <code>ENAspectBox</code></td>
<td><code>core/layout.css</code></td>
<td><code>en.css</code> and every preset with a layout</td>
</tr>
<tr>
<td><code>ENGrid</code> / <code>ENCol</code> with <code>system=&quot;16&quot;</code> or <code>&quot;24&quot;</code>, <code>ENColumns</code></td>
<td><code>layouts/layout-index.css</code></td>
<td><code>en-extra.css</code>, preset <code>lite</code></td>
</tr>
<tr>
<td><code>ENSwitcher</code>, <code>ENSidebarLayout</code>, <code>ENCover</code>, <code>ENReel</code>, <code>ENFrame</code>, <code>ENImposter</code>, <code>ENBento</code>, <code>ENMasonry</code>, <code>ENSplit</code></td>
<td><code>layouts/layout-primitives.css</code></td>
<td><code>en-extra.css</code>, presets <code>app</code>, <code>data</code>, <code>docs</code>, <code>extended</code>, <code>marketing</code>, <code>mobile</code></td>
</tr>
</tbody>
</table>
</div><p><code>en.css</code> (the basic set) covers the core layout only. For the primitives and the 16 / 24 column grids, use <code>en-extra.css</code> or import the files one by one:</p>
<p>`}),p(w,{key:3,meta:b[3]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<blockquote>
<p>The examples in this documentation import every component from <code>@en32/en-css-vue/layout</code>.</p>
</blockquote>
<h2 id="global-registration">Global registration<a class="header-link" href="#global-registration" title="Link to this heading"></a></h2>
<p>`}),p(w,{key:4,meta:b[4]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>To register a component under another name with baked-in props, use the shared registry. Props passed at the call site still win:</p>
<p>`}),p(w,{key:5,meta:b[5]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),p(w,{key:6,meta:b[6]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="common-props">Common props<a class="header-link" href="#common-props" title="Link to this heading"></a></h2>
<p>Every component accepts these two props, and lets unknown attributes (<code>id</code>, <code>aria-*</code>, <code>data-*</code>, event listeners) fall through to the root element.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>as</code></td>
<td><code>string</code></td>
<td><code>'div'</code> (<code>'section'</code> for <code>ENCover</code>)</td>
<td>Tag or component to render as</td>
</tr>
<tr>
<td><code>rootClass</code></td>
<td><code>string | string[] | Record&lt;string, boolean&gt;</code></td>
<td>—</td>
<td>Extra classes merged onto the root element</td>
</tr>
</tbody>
</table>
</div><p>`}),p(w,{key:7,meta:b[7]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>More shared concepts (gap values, breakpoints, development warnings) are on the <a href="./foundations">Foundations</a> page.</p>
<h2 id="choosing-a-component">Choosing a component<a class="header-link" href="#choosing-a-component" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>You want</th>
<th>Use</th>
</tr>
</thead>
<tbody>
<tr>
<td>A page-width wrapper</td>
<td><a href="./container"><code>ENContainer</code></a></td>
</tr>
<tr>
<td>A 12 / 16 / 24 column page grid</td>
<td><a href="./grid"><code>ENGrid</code></a> with <a href="./grid#spans"><code>ENCol</code></a></td>
</tr>
<tr>
<td>Cards that fill the row by themselves</td>
<td><a href="./grid#auto-fit-tracks"><code>ENGrid</code></a> with <code>system=&quot;auto&quot;</code></td>
</tr>
<tr>
<td>A toolbar (one side left, the other right)</td>
<td><a href="./flex"><code>ENFlex</code></a></td>
</tr>
<tr>
<td>Form fields or cards with even vertical spacing</td>
<td><a href="./stack"><code>ENStack</code></a></td>
</tr>
<tr>
<td>Tags, buttons or chips that wrap</td>
<td><a href="./cluster"><code>ENCluster</code></a></td>
</tr>
<tr>
<td>One thing in the middle</td>
<td><a href="./center"><code>ENCenter</code></a></td>
</tr>
<tr>
<td>A row that turns into a column in narrow parents</td>
<td><a href="./switcher"><code>ENSwitcher</code></a></td>
</tr>
<tr>
<td>A sidebar next to content, without breakpoints</td>
<td><a href="./sidebar-layout"><code>ENSidebarLayout</code></a></td>
</tr>
<tr>
<td>A hero that fills the screen</td>
<td><a href="./cover"><code>ENCover</code></a></td>
</tr>
<tr>
<td>A swipeable row</td>
<td><a href="./reel"><code>ENReel</code></a></td>
</tr>
<tr>
<td>Images that fill a fixed ratio</td>
<td><a href="./frame"><code>ENFrame</code></a> (or <a href="./aspect-box"><code>ENAspectBox</code></a> when the content should not be resized)</td>
</tr>
<tr>
<td>A dialog-like overlay</td>
<td><a href="./imposter"><code>ENImposter</code></a></td>
</tr>
<tr>
<td>A dashboard of tiles</td>
<td><a href="./bento"><code>ENBento</code></a></td>
</tr>
<tr>
<td>A gallery of different heights</td>
<td><a href="./masonry"><code>ENMasonry</code></a></td>
</tr>
<tr>
<td>An editor-like two-pane view</td>
<td><a href="./split"><code>ENSplit</code></a></td>
</tr>
<tr>
<td>Text that flows in columns</td>
<td><a href="./columns"><code>ENColumns</code></a></td>
</tr>
</tbody>
</table>
</div><h2 id="notes">Notes<a class="header-link" href="#notes" title="Link to this heading"></a></h2>
<ul>
<li>The library is <strong>experimental</strong> and has not been released officially. APIs may change without a version bump.</li>
<li>Components render a class even when EN.CSS does not ship it, so a project can extend its own CSS. In development, Vue warns once per class (see <a href="./foundations#development-warnings">Foundations</a>).</li>
<li>There is no runtime dependency beyond Vue.</li>
</ul>
`})]),null])}}),E={title:`Layout`,description:`Vue 3 layout components for EN.CSS. Every component is a thin render function that maps typed props onto the real en-* classes of the framework’s layout files. Nothing is re-implemented in JavaScript,...`},D=T;export{D as default,E as meta};