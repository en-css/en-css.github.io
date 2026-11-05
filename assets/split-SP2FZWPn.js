import{At as e,F as t,H as n,I as r,W as i,_t as a,at as o,et as s,it as c,l,m as u,n as d,nt as f,q as p,r as m,s as h,tt as g}from"./components-BJME9hSd.js";import{i as _}from"./classes-GOl-Me6B.js";var v=i({name:`ENSplit`,props:{vertical:{type:Boolean,default:!1},size:{type:String,default:void 0},min:{type:String,default:void 0},max:{type:String,default:void 0},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>{let n={};return e.size&&(n[`--en-split-size`]=e.size),e.min&&(n[`--en-split-min`]=e.min),e.max&&(n[`--en-split-max`]=e.max),p(e.as,{class:_([`en-split`,e.vertical&&`en-split--vertical`],e.rootClass),style:n},t.default?.())}}}),y=i({name:`ENSplitPane`,props:{resizable:{type:Boolean,default:!1},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>p(e.as,{class:_([`en-split__pane`,e.resizable&&`en-split__pane--resizable`],e.rootClass)},t.default?.())}}),b={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSplit</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENSplitPane } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:u(i({__name:`1`,setup(i){return(i,o)=>(c(),r(e(v),{size:`30%`,style:{height:`10rem`}},{default:a(()=>[n(e(y),{resizable:``},{default:a(()=>[...o[0]||=[t(`div`,{class:`box`},`Navigation. Drag the bottom-right corner.`,-1)]]),_:1}),n(e(y),null,{default:a(()=>[...o[1]||=[t(`div`,{class:`box`},`Content`,-1)]]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-f70f63ce`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSplit</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENSplitPane } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENSplit</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"30%"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">height</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 10</span><span class="shiki-token-keyword">rem</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENSplitPane</span><span class="shiki-token-function"> resizable</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Navigation. Drag the bottom-right corner.&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENSplitPane</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENSplitPane</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Content&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENSplitPane</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENSplit</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:u(i({__name:`2`,setup(i){return(i,o)=>(c(),r(e(v),{vertical:``,size:`40%`,style:{height:`14rem`}},{default:a(()=>[n(e(y),{resizable:``},{default:a(()=>[...o[0]||=[t(`div`,{class:`box`},`Editor`,-1)]]),_:1}),n(e(y),null,{default:a(()=>[...o[1]||=[t(`div`,{class:`box`},`Output`,-1)]]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-04ccd69c`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSplit</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENSplitPane } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENSplit</span><span class="shiki-token-function"> vertical</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"40%"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">height</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 14</span><span class="shiki-token-keyword">rem</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENSplitPane</span><span class="shiki-token-function"> resizable</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENSplitPane</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENSplitPane</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Output&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENSplitPane</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENSplit</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENSplit</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16rem"</span><span class="shiki-token-function"> min</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"10rem"</span><span class="shiki-token-function"> max</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"50%"</span><span class="shiki-foreground">>...&#x3C;/</span><span class="shiki-token-string-expression">ENSplit</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:3,lang:`vue`,injectKind:null,editable:!1,source:null}},x=[{id:`split`,text:`Split`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`vertical`,text:`Vertical`,level:2},{id:`limits`,text:`Limits`,level:2},{id:`api`,text:`API`,level:2},{id:`ensplit-props`,text:"`ENSplit` props",level:3},{id:`ensplitpane-props`,text:"`ENSplitPane` props",level:3},{id:`slots`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],S=[{id:`split`,text:`Split`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`vertical`,text:`Vertical`,level:2,children:[]},{id:`limits`,text:`Limits`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`ensplit-props`,text:"`ENSplit` props",level:3,children:[]},{id:`ensplitpane-props`,text:"`ENSplitPane` props",level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],C={css:[],js:[],cleanup:[]},w=i({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>p(`div`,{class:n},[e.meta.isLive?p(m,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:p(d,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),T=i({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/split.md`,setup(){o(`vlm-toc`,{flat:x,tree:S}),g(()=>l(x,S)),f(()=>l([],[]));let e=h(C);return o(`vlm-inject`,e),g(()=>e.mount()),s(()=>e.beforeUnmount()),f(()=>e.unmounted()),()=>p(`div`,{class:`vlm-page`},[p(`div`,{class:`vlm-content`},[p(`div`,{class:`vlm-md`,innerHTML:`<h1 id="split">Split<a class="header-link" href="#split" title="Link to this heading"></a></h1>
<p><code>ENSplit</code> shows <strong>two panes</strong>, the first resizable with the browser’s native resize handle. The border of the pane is the divider, so no separator element is needed. <code>ENSplitPane</code> is one pane.</p>
<p>Requires <code>layouts/layout-primitives.css</code>.</p>
<p>`}),p(w,{key:0,meta:b[0]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),p(w,{key:1,meta:b[1]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Mark the <strong>first</strong> pane <code>resizable</code>. The second pane takes the remaining space. Each pane scrolls on its own (<code>overflow: auto</code>).</p>
<h2 id="vertical">Vertical<a class="header-link" href="#vertical" title="Link to this heading"></a></h2>
<p><code>vertical</code> stacks the panes. <strong>The container needs a definite height</strong>, otherwise there is nothing to divide.</p>
<p>`}),p(w,{key:2,meta:b[2]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="limits">Limits<a class="header-link" href="#limits" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Default</th>
<th>Variable</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>size</code></td>
<td><code>50%</code></td>
<td><code>--en-split-size</code>, initial size of the resizable pane</td>
</tr>
<tr>
<td><code>min</code></td>
<td><code>12rem</code> (<code>8rem</code> vertical)</td>
<td><code>--en-split-min</code></td>
</tr>
<tr>
<td><code>max</code></td>
<td><code>80%</code></td>
<td><code>--en-split-max</code></td>
</tr>
</tbody>
</table>
</div><p>`}),p(w,{key:3,meta:b[3]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<blockquote>
<p>The native handle works with a pointer. It is not keyboard accessible, so offer another way to change the size when it matters (for example a button that toggles the pane).</p>
</blockquote>
<h2 id="api">API<a class="header-link" href="#api" title="Link to this heading"></a></h2>
<h3 id="ensplit-props"><code>ENSplit</code> props<a class="header-link" href="#ensplit-props" title="Link to this heading"></a></h3>
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
<td><code>vertical</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Panes on top of each other (<code>.en-split--vertical</code>)</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>string</code></td>
<td><code>'50%'</code></td>
<td><code>--en-split-size</code></td>
</tr>
<tr>
<td><code>min</code></td>
<td><code>string</code></td>
<td><code>'12rem'</code> (<code>'8rem'</code> vertical)</td>
<td><code>--en-split-min</code></td>
</tr>
<tr>
<td><code>max</code></td>
<td><code>string</code></td>
<td><code>'80%'</code></td>
<td><code>--en-split-max</code></td>
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
</div><h3 id="ensplitpane-props"><code>ENSplitPane</code> props<a class="header-link" href="#ensplitpane-props" title="Link to this heading"></a></h3>
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
<td><code>resizable</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Native resize handle (<code>.en-split__pane--resizable</code>). Use on the first pane</td>
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
<th>Component</th>
<th>Slot</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ENSplit</code></td>
<td><code>default</code></td>
<td>Two <code>ENSplitPane</code></td>
</tr>
<tr>
<td><code>ENSplitPane</code></td>
<td><code>default</code></td>
<td>Pane content</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>SplitProps</code>, <code>SplitPaneProps</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./sidebar-layout">Sidebar Layout</a></li>
</ul>
`})]),null])}}),E={title:`Split`,description:`ENSplit shows two panes, the first resizable with the browser’s native resize handle. The border of the pane is the divider, so no separator element is needed. ENSplitPane is one pane.`},D=T;export{D as default,E as meta};