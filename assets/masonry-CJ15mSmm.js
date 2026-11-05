import{A as e,At as t,F as n,Ft as r,I as i,Pt as a,R as o,W as s,_t as c,at as l,et as u,it as d,l as f,m as p,n as m,nt as h,ot as g,q as _,r as v,s as y,tt as b}from"./components-BJME9hSd.js";import{i as x,r as S}from"./classes-GOl-Me6B.js";var C=s({name:`ENMasonry`,props:{minSize:{type:String,default:void 0},gap:{type:[Number,String],default:void 0},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>{let n={...S(e.gap)};return e.minSize&&(n[`--en-masonry-min`]=e.minSize),_(e.as,{class:x([`en-masonry`],e.rootClass),style:n},t.default?.())}}}),w={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENMasonry } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:p(s({__name:`1`,setup(s){let l=[6,10,4,8,12,5,9,7];return(s,u)=>(d(),i(t(C),{"min-size":`10rem`,gap:`3`},{default:c(()=>[(d(),o(e,null,g(l,(e,t)=>n(`div`,{key:t,class:`box`,style:a({height:`${e}rem`})},` Item `+r(t+1),5)),64))]),_:1}))}}),[[`__scopeId`,`data-v-04532d45`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENMasonry } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> heights</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span><span class="shiki-token-constant">6</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 10</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 4</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 8</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 12</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 5</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 9</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 7</span><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENMasonry</span><span class="shiki-token-function"> min-size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"10rem"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> v-for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"(h, i) in heights"</span><span class="shiki-token-function"> :key</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"i"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> :style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"{ height: \`\${h}rem\` }"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Item {{ i + 1 }}</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENMasonry</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null}},T=[{id:`masonry`,text:`Masonry`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`reading-order`,text:`Reading order`,level:2},{id:`gap`,text:`Gap`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],E=[{id:`masonry`,text:`Masonry`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`reading-order`,text:`Reading order`,level:2,children:[]},{id:`gap`,text:`Gap`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],D={css:[],js:[],cleanup:[]},O=s({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>_(`div`,{class:n},[e.meta.isLive?_(v,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:_(m,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),k=s({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/masonry.md`,setup(){l(`vlm-toc`,{flat:T,tree:E}),b(()=>f(T,E)),h(()=>f([],[]));let e=y(D);return l(`vlm-inject`,e),b(()=>e.mount()),u(()=>e.beforeUnmount()),h(()=>e.unmounted()),()=>_(`div`,{class:`vlm-page`},[_(`div`,{class:`vlm-content`},[_(`div`,{class:`vlm-md`,innerHTML:`<h1 id="masonry">Masonry<a class="header-link" href="#masonry" title="Link to this heading"></a></h1>
<p><code>ENMasonry</code> packs <strong>items of different heights</strong> into columns without gaps below them. It uses CSS multi-column everywhere, and native <code>display: grid-lanes</code> in browsers that support it.</p>
<p>Requires <code>layouts/layout-primitives.css</code>.</p>
<p>`}),_(O,{key:0,meta:w[0]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),_(O,{key:1,meta:w[1]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The number of columns follows the width: each column is at least <code>min-size</code> wide (default <code>16rem</code>).</p>
<h2 id="reading-order">Reading order<a class="header-link" href="#reading-order" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Engine</th>
<th>Order</th>
</tr>
</thead>
<tbody>
<tr>
<td>Multi-column (default)</td>
<td>Items flow <strong>column by column</strong>, top to bottom</td>
</tr>
<tr>
<td><code>display: grid-lanes</code> (where supported)</td>
<td>Items fill <strong>row by row</strong></td>
</tr>
</tbody>
</table>
</div><p>Keep this in mind when the order of items matters (for example a ranked list). The DOM and tab order never change.</p>
<h2 id="gap">Gap<a class="header-link" href="#gap" title="Link to this heading"></a></h2>
<p><code>gap</code> sets the <code>--en-gap</code> custom property, because the multi-column CSS needs it for the spacing between rows. Custom properties inherit, so a nested layout primitive without a gap of its own picks the value up. See <a href="./foundations#gap">Foundations</a>.</p>
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
<td><code>minSize</code></td>
<td><code>string</code></td>
<td><code>'16rem'</code></td>
<td><code>--en-masonry-min</code>, minimum column width</td>
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
<td>Items</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>MasonryProps</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./columns">Columns</a>: multi-column flow for text</li>
<li><a href="./bento">Bento</a></li>
</ul>
`})]),null])}}),A={title:`Masonry`,description:`ENMasonry packs items of different heights into columns without gaps below them. It uses CSS multi-column everywhere, and native display: grid-lanes in browsers that support it.`},j=k;export{j as default,A as meta};