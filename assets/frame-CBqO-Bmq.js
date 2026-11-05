import{At as e,F as t,H as n,I as r,W as i,_t as a,at as o,et as s,it as c,l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";import{i as g}from"./classes-GOl-Me6B.js";import{n as _}from"./src-DECtJlYK.js";import{t as v}from"./types-BRZadlRd.js";var y=i({name:`ENFrame`,props:{ratio:{type:[String,Number],default:void 0},fit:{type:String,default:void 0},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>{let n={},r=typeof e.ratio==`string`&&v.includes(e.ratio);return e.ratio!==void 0&&!r&&(n[`--en-frame-ratio`]=String(e.ratio)),e.fit&&e.fit!==`cover`&&e.fit!==`contain`&&(n[`--en-frame-fit`]=e.fit),f(e.as,{class:g([`en-frame`,r&&`en-frame--${e.ratio}`,e.fit===`contain`&&`en-frame--contain`],e.rootClass),style:n},t.default?.())}}}),b={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFrame } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:i({__name:`1`,setup(n){return(n,i)=>(c(),r(e(y),{ratio:`video`},{default:a(()=>[t(`img`,{src:`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22200%22%3E%3Crect%20width%3D%22400%22%20height%3D%22200%22%20fill%3D%22%236b8afd%22%2F%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22100%22%20r%3D%2260%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E`,alt:`Demo image`})]),_:1}))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFrame } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> svg</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-string-expression"> \`data:image/svg+xml;utf8,</span><span class="shiki-token-keyword">\${</span><span class="shiki-token-function">encodeURIComponent</span><span class="shiki-foreground">(</span></span>
<span class="line"><span class="shiki-token-string-expression">  '&#x3C;svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">&#x3C;rect width="400" height="200" fill="#6b8afd"/>&#x3C;circle cx="200" cy="100" r="60" fill="#fff"/>&#x3C;/svg>'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">)</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">\`</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENFrame</span><span class="shiki-token-function"> ratio</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"video"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">img</span><span class="shiki-token-function"> :src</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"svg"</span><span class="shiki-token-function"> alt</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Demo image"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENFrame</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:i({__name:`2`,setup(i){let o=`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22200%22%3E%3Crect%20width%3D%22400%22%20height%3D%22200%22%20fill%3D%22%236b8afd%22%2F%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22100%22%20r%3D%2260%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E`;return(i,s)=>(c(),r(e(_),{cols:2,gap:`3`},{default:a(()=>[n(e(y),{ratio:`square`,fit:`cover`},{default:a(()=>[t(`img`,{src:o,alt:`cover`})]),_:1}),n(e(y),{ratio:`square`,fit:`contain`},{default:a(()=>[t(`img`,{src:o,alt:`contain`})]),_:1})]),_:1}))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFrame</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENGrid } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> svg</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-string-expression"> \`data:image/svg+xml;utf8,</span><span class="shiki-token-keyword">\${</span><span class="shiki-token-function">encodeURIComponent</span><span class="shiki-foreground">(</span></span>
<span class="line"><span class="shiki-token-string-expression">  '&#x3C;svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">&#x3C;rect width="400" height="200" fill="#6b8afd"/>&#x3C;circle cx="200" cy="100" r="60" fill="#fff"/>&#x3C;/svg>'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">)</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">\`</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENGrid</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">cols</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">2</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFrame</span><span class="shiki-token-function"> ratio</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"square"</span><span class="shiki-token-function"> fit</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"cover"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">img</span><span class="shiki-token-function"> :src</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"svg"</span><span class="shiki-token-function"> alt</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"cover"</span><span class="shiki-foreground"> />&#x3C;/</span><span class="shiki-token-string-expression">ENFrame</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFrame</span><span class="shiki-token-function"> ratio</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"square"</span><span class="shiki-token-function"> fit</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"contain"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">img</span><span class="shiki-token-function"> :src</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"svg"</span><span class="shiki-token-function"> alt</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"contain"</span><span class="shiki-foreground"> />&#x3C;/</span><span class="shiki-token-string-expression">ENFrame</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENGrid</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null}},x=[{id:`frame`,text:`Frame`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`ratios`,text:`Ratios`,level:2},{id:`fit`,text:`Fit`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],S=[{id:`frame`,text:`Frame`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`ratios`,text:`Ratios`,level:2,children:[]},{id:`fit`,text:`Fit`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],C={css:[],js:[],cleanup:[]},w=i({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),T=i({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/frame.md`,setup(){o(`vlm-toc`,{flat:x,tree:S}),h(()=>l(x,S)),d(()=>l([],[]));let e=m(C);return o(`vlm-inject`,e),h(()=>e.mount()),s(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="frame">Frame<a class="header-link" href="#frame" title="Link to this heading"></a></h1>
<p><code>ENFrame</code> fixes an <strong>aspect ratio</strong> and makes a direct <code>img</code>, <code>video</code>, <code>picture</code> or <code>iframe</code> child <strong>fill the box</strong> with <code>object-fit</code>. Unlike <a href="./aspect-box"><code>ENAspectBox</code></a>, the media is resized to the box.</p>
<p>Requires <code>layouts/layout-primitives.css</code>.</p>
<p>`}),f(w,{key:0,meta:b[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),f(w,{key:1,meta:b[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The default ratio is 16 / 9.</p>
<h2 id="ratios">Ratios<a class="header-link" href="#ratios" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>ratio</code></th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>16 / 9</td>
</tr>
<tr>
<td><code>'video'</code></td>
<td><code>.en-frame--video</code></td>
</tr>
<tr>
<td><code>'square'</code></td>
<td><code>.en-frame--square</code></td>
</tr>
<tr>
<td><code>'portrait'</code></td>
<td><code>.en-frame--portrait</code> (3 / 4)</td>
</tr>
<tr>
<td>Any other string or number</td>
<td>Custom ratio (<code>--en-frame-ratio</code>), for example <code>'21 / 9'</code></td>
</tr>
</tbody>
</table>
</div><h2 id="fit">Fit<a class="header-link" href="#fit" title="Link to this heading"></a></h2>
<p><code>fit</code> sets <code>object-fit</code> of the media:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>fit</code></th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'cover'</code> (default)</td>
<td>Fills the box and crops the overflow</td>
</tr>
<tr>
<td><code>'contain'</code></td>
<td>Whole media visible (<code>.en-frame--contain</code>)</td>
</tr>
<tr>
<td><code>'fill'</code>, <code>'none'</code>, <code>'scale-down'</code></td>
<td>Set through <code>--en-frame-fit</code></td>
</tr>
</tbody>
</table>
</div><p>`}),f(w,{key:2,meta:b[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>picture &gt; img</code> is supported as well.</p>
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
<td><code>ratio</code></td>
<td><code>'video' | 'square' | 'portrait' | string | number</code></td>
<td><code>16 / 9</code></td>
<td>Preset modifier, or custom ratio (<code>--en-frame-ratio</code>)</td>
</tr>
<tr>
<td><code>fit</code></td>
<td><code>'cover' | 'contain' | 'fill' | 'none' | 'scale-down'</code></td>
<td><code>'cover'</code></td>
<td><code>object-fit</code> of the media</td>
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
<td>The media element (a direct child)</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>FrameProps</code>, <code>FrameFit</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./aspect-box">Aspect Box</a></li>
<li><a href="./reel">Reel</a></li>
</ul>
`})]),null])}}),E={title:`Frame`,description:`ENFrame fixes an aspect ratio and makes a direct img, video, picture or iframe child fill the box with object-fit. Unlike ENAspectBox, the media is resized to the box.`},D=T;export{D as default,E as meta};