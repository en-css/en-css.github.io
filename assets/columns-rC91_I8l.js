import{At as e,F as t,I as n,W as r,_t as i,at as a,et as o,it as s,l as c,m as l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";import{a as g,i as _,r as v}from"./classes-GOl-Me6B.js";import{c as y,n as b,t as x}from"./support-BbBPiQ37.js";var S=()=>({type:[Number,String],default:void 0}),C=r({name:`ENColumns`,props:{cols:S(),colsXs:S(),colsSm:S(),colsMd:S(),colsLg:S(),gap:{type:[Number,String],default:void 0},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>{let n=[`en-columns`],r=g(e.cols);r!==void 0&&(y(`\`.en-columns--cols-${r}\``,r,x),n.push(`en-columns--cols-${r}`));for(let[t,r]of[[`xs`,e.colsXs],[`sm`,e.colsSm],[`md`,e.colsMd],[`lg`,e.colsLg]]){let e=g(r);e!==void 0&&(y(`\`.en-columns--${t}-cols-${e}\``,e,b[t]),n.push(`en-columns--${t}-cols-${e}`))}return f(e.as,{class:_(n,e.rootClass),style:v(e.gap)},t.default?.())}}}),w={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENColumns } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:l(r({__name:`1`,setup(r){return(r,a)=>(s(),n(e(C),{cols:1,"cols-md":`2`,gap:`4`},{default:i(()=>[...a[0]||=[t(`p`,{class:`box`},`First paragraph. It is placed at the top of the first column.`,-1),t(`p`,{class:`box`},`Second paragraph, a little longer than the first one so the heights differ.`,-1),t(`p`,{class:`box`},`Third paragraph.`,-1),t(`p`,{class:`box`},`Fourth paragraph moves to the second column once the first is full.`,-1)]]),_:1}))}}),[[`__scopeId`,`data-v-9d665313`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENColumns } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENColumns</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">cols</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">1</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> cols-md</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>First paragraph. It is placed at the top of the first column.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Second paragraph, a little longer than the first one so the heights differ.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Third paragraph.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Fourth paragraph moves to the second column once the first is full.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENColumns</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENColumns</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">cols</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">1</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> cols-sm</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-token-function"> cols-lg</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">>...&#x3C;/</span><span class="shiki-token-string-expression">ENColumns</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null}},T=[{id:`columns`,text:`Columns`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`responsive-columns`,text:`Responsive columns`,level:2},{id:`gap`,text:`Gap`,level:2},{id:`columns-or-masonry`,text:`Columns or Masonry?`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],E=[{id:`columns`,text:`Columns`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`responsive-columns`,text:`Responsive columns`,level:2,children:[]},{id:`gap`,text:`Gap`,level:2,children:[]},{id:`columns-or-masonry`,text:`Columns or Masonry?`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],D={css:[],js:[],cleanup:[]},O=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),k=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/columns.md`,setup(){a(`vlm-toc`,{flat:T,tree:E}),h(()=>c(T,E)),d(()=>c([],[]));let e=m(D);return a(`vlm-inject`,e),h(()=>e.mount()),o(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="columns">Columns<a class="header-link" href="#columns" title="Link to this heading"></a></h1>
<p><code>ENColumns</code> is a <strong>multi-column flow</strong>: items fill the first column top to bottom, then the next. Use it for text blocks and cards of different heights where the reading order is column by column.</p>
<p>Requires <code>layouts/layout-index.css</code>.</p>
<p>`}),f(O,{key:0,meta:w[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),f(O,{key:1,meta:w[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Without any <code>cols*</code> prop there is one column.</p>
<h2 id="responsive-columns">Responsive columns<a class="header-link" href="#responsive-columns" title="Link to this heading"></a></h2>
<p>The responsive props follow the <strong>viewport</strong>, at thresholds that <strong>differ from the grid breakpoints</strong>:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Viewport width</th>
<th>Counts</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>cols</code></td>
<td>any width</td>
<td>1 to 4</td>
</tr>
<tr>
<td><code>cols-xs</code></td>
<td>320px</td>
<td>1, 2</td>
</tr>
<tr>
<td><code>cols-sm</code></td>
<td>360px</td>
<td>1, 2, 3</td>
</tr>
<tr>
<td><code>cols-md</code></td>
<td>480px</td>
<td>1 to 4</td>
</tr>
<tr>
<td><code>cols-lg</code></td>
<td>640px</td>
<td>1 to 4</td>
</tr>
</tbody>
</table>
</div><p>`}),f(O,{key:2,meta:w[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Values outside these sets still render a class, with a development warning.</p>
<h2 id="gap">Gap<a class="header-link" href="#gap" title="Link to this heading"></a></h2>
<p><code>gap</code> sets the <code>--en-gap</code> custom property, which the CSS uses for the column gap and for the spacing under each item. Nested layout primitives without a gap of their own inherit it. See <a href="./foundations#gap">Foundations</a>.</p>
<h2 id="columns-or-masonry">Columns or Masonry?<a class="header-link" href="#columns-or-masonry" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th></th>
<th><code>ENColumns</code></th>
<th><a href="./masonry"><code>ENMasonry</code></a></th>
</tr>
</thead>
<tbody>
<tr>
<td>Column count</td>
<td>You choose it (<code>cols*</code>)</td>
<td>Follows the width (<code>min-size</code>)</td>
</tr>
<tr>
<td>Best for</td>
<td>Text and article blocks</td>
<td>Galleries and cards</td>
</tr>
</tbody>
</table>
</div><h2 id="api">API<a class="header-link" href="#api" title="Link to this heading"></a></h2>
<h3 id="props">Props<a class="header-link" href="#props" title="Link to this heading"></a></h3>
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
<td><code>cols</code></td>
<td><code>1 | 2 | 3 | 4</code></td>
<td>—</td>
<td><code>.en-columns--cols-{n}</code></td>
</tr>
<tr>
<td><code>colsXs</code></td>
<td><code>1 | 2</code></td>
<td>—</td>
<td>From a viewport width of 320px</td>
</tr>
<tr>
<td><code>colsSm</code></td>
<td><code>1 | 2 | 3</code></td>
<td>—</td>
<td>From 360px</td>
</tr>
<tr>
<td><code>colsMd</code></td>
<td><code>1 | 2 | 3 | 4</code></td>
<td>—</td>
<td>From 480px</td>
</tr>
<tr>
<td><code>colsLg</code></td>
<td><code>1 | 2 | 3 | 4</code></td>
<td>—</td>
<td>From 640px</td>
</tr>
<tr>
<td><code>gap</code></td>
<td><code>GapInput</code></td>
<td><code>var(--en-space-4)</code></td>
<td>Sets <code>--en-gap</code></td>
</tr>
<tr>
<td><code>as</code></td>
<td><code>string</code></td>
<td><code>'div'</code></td>
<td>Element to render as</td>
</tr>
<tr>
<td><code>rootClass</code></td>
<td><code>ClassValue</code></td>
<td>—</td>
<td>Extra classes on the root</td>
</tr>
</tbody>
</table>
</div><p>Numeric props also accept numeric strings.</p>
<h3 id="slots">Slots<a class="header-link" href="#slots" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Slot</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>default</code></td>
<td>Items. Each direct child avoids breaking across columns</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>ColumnsProps</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./masonry">Masonry</a></li>
<li><a href="./grid">Grid</a></li>
</ul>
`})]),null])}}),A={title:`Columns`,description:`ENColumns is a multi-column flow: items fill the first column top to bottom, then the next. Use it for text blocks and cards of different heights where the reading order is column by column.`},j=k;export{j as default,A as meta};