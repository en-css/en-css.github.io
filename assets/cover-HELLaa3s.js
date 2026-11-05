import{At as e,F as t,I as n,W as r,_t as i,at as a,et as o,it as s,l as c,m as l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";import{i as g,n as _}from"./classes-GOl-Me6B.js";var v=r({name:`ENCover`,props:{minHeight:{type:String,default:void 0},padding:{type:String,default:void 0},gap:{type:[Number,String],default:void 0},as:{type:String,default:`section`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>{let n={..._({gap:e.gap})};return e.minHeight&&(n[`--en-cover-min`]=e.minHeight),e.padding&&(n[`--en-cover-padding`]=e.padding),f(e.as,{class:g([`en-cover`],e.rootClass),style:n},[t.header?.(),f(`div`,{class:`en-cover__centered`},t.default?.()),t.footer?.()])}}}),y={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCover } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:l(r({__name:`1`,setup(r){return(r,a)=>(s(),n(e(v),{"min-height":`16rem`,class:`box`},{header:i(()=>[...a[0]||=[t(`header`,null,`Brand`,-1)]]),footer:i(()=>[...a[1]||=[t(`footer`,null,`Scroll`,-1)]]),default:i(()=>[a[2]||=t(`h1`,null,`Welcome`,-1)]),_:1}))}}),[[`__scopeId`,`data-v-e322ce12`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCover } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENCover</span><span class="shiki-token-function"> min-height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16rem"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground"> #</span><span class="shiki-token-function">header</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">header</span><span class="shiki-foreground">>Brand&#x3C;/</span><span class="shiki-token-string-expression">header</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h1</span><span class="shiki-foreground">>Welcome&#x3C;/</span><span class="shiki-token-string-expression">h1</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground"> #</span><span class="shiki-token-function">footer</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">footer</span><span class="shiki-foreground">>Scroll&#x3C;/</span><span class="shiki-token-string-expression">footer</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENCover</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENCover</span><span class="shiki-token-function"> min-height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"80dvh"</span><span class="shiki-token-function"> padding</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2rem"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"6"</span><span class="shiki-foreground">>...&#x3C;/</span><span class="shiki-token-string-expression">ENCover</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null}},b=[{id:`cover`,text:`Cover`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`slots`,text:`Slots`,level:2},{id:`spacing`,text:`Spacing`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`slots-1`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],x=[{id:`cover`,text:`Cover`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`slots`,text:`Slots`,level:2,children:[]},{id:`spacing`,text:`Spacing`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`slots-1`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],S={css:[],js:[],cleanup:[]},C=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),w=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/cover.md`,setup(){a(`vlm-toc`,{flat:b,tree:x}),h(()=>c(b,x)),d(()=>c([],[]));let e=m(S);return a(`vlm-inject`,e),h(()=>e.mount()),o(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="cover">Cover<a class="header-link" href="#cover" title="Link to this heading"></a></h1>
<p><code>ENCover</code> is a <strong>full-height area</strong> with one child centered vertically. Optional header and footer stay at the top and bottom. It is the usual shape of a hero section.</p>
<p>Requires <code>layouts/layout-primitives.css</code>.</p>
<p>`}),f(C,{key:0,meta:y[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),f(C,{key:1,meta:y[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The default <code>min-height</code> is <code>100dvh</code>, which is the whole screen. Use a smaller value for sections or demos.</p>
<h2 id="slots">Slots<a class="header-link" href="#slots" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Slot</th>
<th>Position</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>header</code></td>
<td>Top</td>
</tr>
<tr>
<td><code>default</code></td>
<td>Centered vertically, wrapped in <code>.en-cover__centered</code></td>
</tr>
<tr>
<td><code>footer</code></td>
<td>Bottom</td>
</tr>
</tbody>
</table>
</div><blockquote>
<p><code>header</code> and <code>footer</code> render <strong>directly</strong> as children of the cover, so pass <strong>one element each</strong>.</p>
</blockquote>
<h2 id="spacing">Spacing<a class="header-link" href="#spacing" title="Link to this heading"></a></h2>
<p><code>padding</code> sets <code>--en-cover-padding</code> (default <code>var(--en-space-4)</code>) and <code>gap</code> the space between header, centered content and footer (default <code>var(--en-space-4)</code>).</p>
<p>`}),f(C,{key:2,meta:y[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>minHeight</code></td>
<td><code>string</code></td>
<td><code>'100dvh'</code></td>
<td><code>--en-cover-min</code></td>
</tr>
<tr>
<td><code>padding</code></td>
<td><code>string</code></td>
<td><code>var(--en-space-4)</code></td>
<td><code>--en-cover-padding</code></td>
</tr>
<tr>
<td><code>gap</code></td>
<td><code>GapInput</code></td>
<td><code>var(--en-space-4)</code></td>
<td>Gap between header, centered content and footer</td>
</tr>
<tr>
<td><code>as</code></td>
<td><code>string</code></td>
<td><code>'section'</code></td>
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
</div><h3 id="slots-1">Slots<a class="header-link" href="#slots-1" title="Link to this heading"></a></h3>
<p><code>header</code>, <code>default</code> (centered), <code>footer</code>.</p>
<h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>CoverProps</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./center">Center</a></li>
<li><a href="./imposter">Imposter</a></li>
</ul>
`})]),null])}}),T={title:`Cover`,description:`ENCover is a full-height area with one child centered vertically. Optional header and footer stay at the top and bottom. It is the usual shape of a hero section.`},E=w;export{E as default,T as meta};