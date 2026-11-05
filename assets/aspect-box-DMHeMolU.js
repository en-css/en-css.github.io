import{At as e,H as t,I as n,V as r,W as i,_t as a,at as o,et as s,it as c,l,m as u,n as d,nt as f,q as p,r as m,s as h,tt as g}from"./components-BJME9hSd.js";import{i as _}from"./classes-GOl-Me6B.js";import{n as v}from"./src-DECtJlYK.js";import{t as y}from"./types-BRZadlRd.js";var b=i({name:`ENAspectBox`,props:{ratio:{type:[String,Number],default:`video`},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>{let n=typeof e.ratio==`string`&&y.includes(e.ratio);return p(e.as,{class:_([n&&`en-aspect-${e.ratio}`],e.rootClass),style:n?void 0:{aspectRatio:String(e.ratio)}},t.default?.())}}}),x={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENAspectBox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:u(i({__name:`1`,setup(t){return(t,i)=>(c(),n(e(b),{ratio:`video`,class:`box`},{default:a(()=>[...i[0]||=[r(`16 / 9`,-1)]]),_:1}))}}),[[`__scopeId`,`data-v-b69e867b`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENAspectBox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENAspectBox</span><span class="shiki-token-function"> ratio</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"video"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>16 / 9&#x3C;/</span><span class="shiki-token-string-expression">ENAspectBox</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:u(i({__name:`2`,setup(i){return(i,o)=>(c(),n(e(v),{cols:2,"cols-md":`4`,gap:`3`},{default:a(()=>[t(e(b),{ratio:`square`,class:`box`},{default:a(()=>[...o[0]||=[r(`square`,-1)]]),_:1}),t(e(b),{ratio:`portrait`,class:`box`},{default:a(()=>[...o[1]||=[r(`portrait`,-1)]]),_:1}),t(e(b),{ratio:`4 / 3`,class:`box`},{default:a(()=>[...o[2]||=[r(`4 / 3`,-1)]]),_:1}),t(e(b),{ratio:2.4,class:`box`},{default:a(()=>[...o[3]||=[r(`2.4`,-1)]]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-7c2a0f29`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENAspectBox</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENGrid } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENGrid</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">cols</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">2</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> cols-md</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENAspectBox</span><span class="shiki-token-function"> ratio</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"square"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>square&#x3C;/</span><span class="shiki-token-string-expression">ENAspectBox</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENAspectBox</span><span class="shiki-token-function"> ratio</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"portrait"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>portrait&#x3C;/</span><span class="shiki-token-string-expression">ENAspectBox</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENAspectBox</span><span class="shiki-token-function"> ratio</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4 / 3"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>4 / 3&#x3C;/</span><span class="shiki-token-string-expression">ENAspectBox</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENAspectBox</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">ratio</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">2.4</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>2.4&#x3C;/</span><span class="shiki-token-string-expression">ENAspectBox</span><span class="shiki-foreground">></span></span>
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
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null}},S=[{id:`aspect-box`,text:`Aspect Box`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`presets-and-custom-ratios`,text:`Presets and custom ratios`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`exports`,text:`Exports`,level:3},{id:`see-also`,text:`See also`,level:2}],C=[{id:`aspect-box`,text:`Aspect Box`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`presets-and-custom-ratios`,text:`Presets and custom ratios`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`exports`,text:`Exports`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],w={css:[],js:[],cleanup:[]},T=i({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>p(`div`,{class:n},[e.meta.isLive?p(m,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:p(d,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),E=i({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/aspect-box.md`,setup(){o(`vlm-toc`,{flat:S,tree:C}),g(()=>l(S,C)),f(()=>l([],[]));let e=h(w);return o(`vlm-inject`,e),g(()=>e.mount()),s(()=>e.beforeUnmount()),f(()=>e.unmounted()),()=>p(`div`,{class:`vlm-page`},[p(`div`,{class:`vlm-content`},[p(`div`,{class:`vlm-md`,innerHTML:`<h1 id="aspect-box">Aspect Box<a class="header-link" href="#aspect-box" title="Link to this heading"></a></h1>
<p><code>ENAspectBox</code> locks its box to an <strong>aspect ratio</strong>, using a preset class or a custom ratio set inline. The content is <strong>not resized</strong>. Use <a href="./frame"><code>ENFrame</code></a> when media should fill the box with <code>object-fit</code>.</p>
<p>Requires <code>core/layout.css</code> (included in <code>en.css</code>).</p>
<p>`}),p(T,{key:0,meta:x[0]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),p(T,{key:1,meta:x[1]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="presets-and-custom-ratios">Presets and custom ratios<a class="header-link" href="#presets-and-custom-ratios" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>ratio</code></th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'video'</code> (default)</td>
<td><code>.en-aspect-video</code>, 16 / 9</td>
</tr>
<tr>
<td><code>'square'</code></td>
<td><code>.en-aspect-square</code>, 1 / 1</td>
</tr>
<tr>
<td><code>'portrait'</code></td>
<td><code>.en-aspect-portrait</code>, 3 / 4</td>
</tr>
<tr>
<td>Any other string or number</td>
<td>Inline <code>aspect-ratio</code> (<code>'4 / 3'</code>, <code>1.5</code>)</td>
</tr>
</tbody>
</table>
</div><p>`}),p(T,{key:2,meta:x[2]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>'video'</code></td>
<td>Preset, or any CSS <code>aspect-ratio</code> value applied inline</td>
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
<td>Content</td>
</tr>
</tbody>
</table>
</div><h3 id="exports">Exports<a class="header-link" href="#exports" title="Link to this heading"></a></h3>
<p><code>ENAspectBox</code>, <code>ASPECT_PRESETS</code> (<code>['video', 'square', 'portrait']</code>) and the types <code>AspectBoxProps</code>, <code>AspectRatio</code>, <code>AspectPreset</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./frame">Frame</a>: media that fills the box</li>
</ul>
`})]),null])}}),D={title:`Aspect Box`,description:`ENAspectBox locks its box to an aspect ratio, using a preset class or a custom ratio set inline. The content is not resized. Use ENFrame when media should fill the box with object-fit.`},O=E;export{O as default,D as meta};