import{A as e,At as t,F as n,Ft as r,I as i,R as a,W as o,_t as s,at as c,et as l,it as u,l as d,m as f,n as p,nt as m,ot as h,q as g,r as _,s as v,tt as y,ut as b}from"./components-BJME9hSd.js";import{i as x,n as S}from"./classes-GOl-Me6B.js";import{l as C}from"./support-BbBPiQ37.js";var w=o({name:`ENReel`,props:{snap:{type:Boolean,default:!1},itemSize:{type:String,default:void 0},gap:{type:[Number,String],default:void 0},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){let n=b();return()=>{!n[`aria-label`]&&!n[`aria-labelledby`]&&C("<ENReel> is a scrollable region and needs an accessible name: pass `aria-label` or `aria-labelledby`.");let r={...S({gap:e.gap})};return e.itemSize&&(r[`--en-reel-item`]=e.itemSize),g(e.as,{class:x([`en-reel`,e.snap&&`en-reel--snap`],e.rootClass),style:r,role:`region`,tabindex:0},t.default?.())}}}),T={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENReel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:f(o({__name:`1`,setup(o){return(o,c)=>(u(),i(t(w),{snap:``,"item-size":`12rem`,gap:`3`,"aria-label":`Cards`},{default:s(()=>[(u(),a(e,null,h(8,e=>n(`div`,{key:e,class:`box`},`Card `+r(e),1)),64))]),_:1}))}}),[[`__scopeId`,`data-v-2e99a2a1`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENReel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENReel</span><span class="shiki-token-function"> snap</span><span class="shiki-token-function"> item-size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"12rem"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Cards"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> v-for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"n in 8"</span><span class="shiki-token-function"> :key</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"n"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Card {{ n }}&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENReel</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null}},E=[{id:`reel`,text:`Reel`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`snapping-and-item-size`,text:`Snapping and item size`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],D=[{id:`reel`,text:`Reel`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`snapping-and-item-size`,text:`Snapping and item size`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],O={css:[],js:[],cleanup:[]},k=o({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>g(`div`,{class:n},[e.meta.isLive?g(_,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:g(p,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),A=o({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/reel.md`,setup(){c(`vlm-toc`,{flat:E,tree:D}),y(()=>d(E,D)),m(()=>d([],[]));let e=v(O);return c(`vlm-inject`,e),y(()=>e.mount()),l(()=>e.beforeUnmount()),m(()=>e.unmounted()),()=>g(`div`,{class:`vlm-page`},[g(`div`,{class:`vlm-content`},[g(`div`,{class:`vlm-md`,innerHTML:`<h1 id="reel">Reel<a class="header-link" href="#reel" title="Link to this heading"></a></h1>
<p><code>ENReel</code> is a <strong>horizontally scrolling row</strong> with scroll-snap. It suits image strips, cards and screenshots.</p>
<p>Requires <code>layouts/layout-primitives.css</code>.</p>
<p>`}),g(k,{key:0,meta:T[0]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),g(k,{key:1,meta:T[1]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<p>A scrollable region must be focusable and named. <code>ENReel</code> adds <code>role=&quot;region&quot;</code> and <code>tabindex=&quot;0&quot;</code> to its root. <strong>Provide <code>aria-label</code> or <code>aria-labelledby</code></strong>, which falls through to the root element. A development build warns when the name is missing.</p>
<p>Keyboard users scroll the focused reel with the arrow keys, and the focus ring is styled (also in forced-colors mode).</p>
<h2 id="snapping-and-item-size">Snapping and item size<a class="header-link" href="#snapping-and-item-size" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>snap</code></td>
<td>Mandatory snapping (<code>scroll-snap-type: inline mandatory</code>). The default is <code>proximity</code></td>
</tr>
<tr>
<td><code>item-size</code></td>
<td>Width of each item (<code>--en-reel-item</code>). Without it, items keep their own width</td>
</tr>
</tbody>
</table>
</div><p>Direct <code>img</code> and <code>video</code> children get <code>block-size: 100%</code> and <code>inline-size: auto</code>, so a fixed-height reel of images keeps each image’s own ratio.</p>
<h2 id="api">API<a class="header-link" href="#api" title="Link to this heading"></a></h2>
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
<td><code>snap</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Mandatory snapping (<code>.en-reel--snap</code>)</td>
</tr>
<tr>
<td><code>itemSize</code></td>
<td><code>string</code></td>
<td>—</td>
<td><code>--en-reel-item</code>, width of each item</td>
</tr>
<tr>
<td><code>gap</code></td>
<td><code>GapInput</code></td>
<td><code>var(--en-space-3)</code></td>
<td>Gap. See <a href="./foundations#gap">Foundations</a></td>
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
</div><h3 id="slots">Slots<a class="header-link" href="#slots" title="Link to this heading"></a></h3>
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
<td>Items (direct children)</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>ReelProps</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./frame">Frame</a></li>
<li><a href="./cluster">Cluster</a>: a wrapping row instead of a scrolling one</li>
</ul>
`})]),null])}}),j={title:`Reel`,description:`ENReel is a horizontally scrolling row with scroll-snap. It suits image strips, cards and screenshots.`},M=A;export{M as default,j as meta};