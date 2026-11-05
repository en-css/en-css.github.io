import{At as e,F as t,H as n,R as r,V as i,W as a,_t as o,at as s,et as c,it as l,l as u,m as d,n as f,nt as p,q as m,r as h,s as g,tt as _}from"./components-BJME9hSd.js";import{i as v}from"./classes-GOl-Me6B.js";var y=a({name:`ENImposter`,props:{fixed:{type:Boolean,default:!1},contain:{type:Boolean,default:!1},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>m(e.as,{class:v([`en-imposter`,e.fixed&&`en-imposter--fixed`,e.contain&&`en-imposter--contain`],e.rootClass)},t.default?.())}}),b={class:`box`,style:{position:`relative`,"min-height":`10rem`}},x={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENImposter } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:d(a({__name:`1`,setup(a){return(a,s)=>(l(),r(`div`,b,[s[1]||=i(` Underlying content `,-1),n(e(y),null,{default:o(()=>[...s[0]||=[t(`div`,{class:`box`,style:{background:`var(--en-bg-surface)`}},`Centered overlay`,-1)]]),_:1})]))}}),[[`__scopeId`,`data-v-a049b079`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENImposter } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: relative; min-height: 10rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Underlying content</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENImposter</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"background: var(--en-bg-surface)"</span><span class="shiki-foreground">>Centered overlay&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ENImposter</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENImposter</span><span class="shiki-token-function"> fixed</span><span class="shiki-token-function"> contain</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;div class="dialog">Long content that scrolls inside the overlay&#x3C;/div></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ENImposter</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null}},S=[{id:`imposter`,text:`Imposter`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`modes`,text:`Modes`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],C=[{id:`imposter`,text:`Imposter`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`modes`,text:`Modes`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],w={css:[],js:[],cleanup:[]},T=a({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>m(`div`,{class:n},[e.meta.isLive?m(h,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:m(f,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),E=a({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/imposter.md`,setup(){s(`vlm-toc`,{flat:S,tree:C}),_(()=>u(S,C)),p(()=>u([],[]));let e=g(w);return s(`vlm-inject`,e),_(()=>e.mount()),c(()=>e.beforeUnmount()),p(()=>e.unmounted()),()=>m(`div`,{class:`vlm-page`},[m(`div`,{class:`vlm-content`},[m(`div`,{class:`vlm-md`,innerHTML:`<h1 id="imposter">Imposter<a class="header-link" href="#imposter" title="Link to this heading"></a></h1>
<p><code>ENImposter</code> is an <strong>overlay centered</strong> over its positioned ancestor, or over the viewport with <code>fixed</code>. The centering does not depend on the writing direction, so it works in right-to-left layouts.</p>
<p>Requires <code>layouts/layout-primitives.css</code>.</p>
<p>`}),m(T,{key:0,meta:x[0]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>The ancestor needs <code>position: relative</code> (or any positioned value) and a size.</p>
<p>`}),m(T,{key:1,meta:x[1]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="modes">Modes<a class="header-link" href="#modes" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Class</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td><code>.en-imposter</code></td>
<td>Absolutely positioned and centered in the positioned ancestor</td>
</tr>
<tr>
<td><code>fixed</code></td>
<td><code>.en-imposter--fixed</code></td>
<td>Positioned relative to the viewport instead</td>
</tr>
<tr>
<td><code>contain</code></td>
<td><code>.en-imposter--contain</code></td>
<td>Never larger than the ancestor (minus <code>var(--en-space-4)</code> on each side); scrolls inside</td>
</tr>
</tbody>
</table>
</div><p>`}),m(T,{key:2,meta:x[2]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<blockquote>
<p><code>ENImposter</code> only positions the overlay. A modal also needs focus handling, a backdrop and an accessible role, which come from a modal component.</p>
</blockquote>
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
<td><code>fixed</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Relative to the viewport (<code>.en-imposter--fixed</code>)</td>
</tr>
<tr>
<td><code>contain</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Never larger than the ancestor; scrolls inside (<code>.en-imposter--contain</code>)</td>
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
<td>Overlay content</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>ImposterProps</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./center">Center</a></li>
<li><a href="./cover">Cover</a></li>
</ul>
`})]),null])}}),D={title:`Imposter`,description:`ENImposter is an overlay centered over its positioned ancestor, or over the viewport with fixed. The centering does not depend on the writing direction, so it works in right-to-left layouts.`},O=E;export{O as default,D as meta};