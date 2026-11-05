import{At as e,F as t,I as n,W as r,_t as i,at as a,et as o,it as s,l as c,m as l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";import{i as g,n as _}from"./classes-GOl-Me6B.js";var v=r({name:`ENSidebarLayout`,props:{end:{type:Boolean,default:!1},sidebarWidth:{type:String,default:void 0},contentMin:{type:String,default:void 0},gap:{type:[Number,String],default:void 0},gapX:{type:[Number,String],default:void 0},gapY:{type:[Number,String],default:void 0},sidebarAs:{type:String,default:`aside`},contentAs:{type:String,default:`div`},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>{let n={..._(e)};return e.sidebarWidth&&(n[`--en-sidebar-width`]=e.sidebarWidth),e.contentMin&&(n[`--en-content-min`]=e.contentMin),f(e.as,{class:g([`en-with-sidebar`,e.end&&`en-with-sidebar--end`],e.rootClass),style:n},[f(e.sidebarAs,t.sidebar?.()),f(e.contentAs,t.default?.())])}}}),y={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSidebarLayout } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:l(r({__name:`1`,setup(r){return(r,a)=>(s(),n(e(v),{"sidebar-width":`12rem`,gap:`4`},{sidebar:i(()=>[...a[0]||=[t(`div`,{class:`box`},`Filters`,-1)]]),default:i(()=>[a[1]||=t(`div`,{class:`box`},`Results`,-1)]),_:1}))}}),[[`__scopeId`,`data-v-9e5d2ab6`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSidebarLayout } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENSidebarLayout</span><span class="shiki-token-function"> sidebar-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"12rem"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground"> #</span><span class="shiki-token-function">sidebar</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Filters&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Results&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENSidebarLayout</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:l(r({__name:`2`,setup(r){return(r,a)=>(s(),n(e(v),{end:``,"sidebar-width":`10rem`,gap:`4`},{sidebar:i(()=>[...a[0]||=[t(`div`,{class:`box`},`Table of contents`,-1)]]),default:i(()=>[a[1]||=t(`div`,{class:`box`},`Article`,-1)]),_:1}))}}),[[`__scopeId`,`data-v-b6629824`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSidebarLayout } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENSidebarLayout</span><span class="shiki-token-function"> end</span><span class="shiki-token-function"> sidebar-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"10rem"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground"> #</span><span class="shiki-token-function">sidebar</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Table of contents&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Article&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENSidebarLayout</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- Wrap as soon as the content would drop below 20rem --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENSidebarLayout</span><span class="shiki-token-function"> sidebar-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"14rem"</span><span class="shiki-token-function"> content-min</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"20rem"</span><span class="shiki-foreground">>...&#x3C;/</span><span class="shiki-token-string-expression">ENSidebarLayout</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:3,lang:`vue`,injectKind:null,editable:!1,source:null},4:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENSidebarLayout</span><span class="shiki-token-function"> sidebar-as</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"nav"</span><span class="shiki-token-function"> content-as</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"main"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;template #sidebar>...&#x3C;/template></span></span>
<span class="line"><span class="shiki-foreground">  ...</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ENSidebarLayout</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:4,lang:`vue`,injectKind:null,editable:!1,source:null}},b=[{id:`sidebar-layout`,text:`Sidebar Layout`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`sidebar-at-the-end`,text:`Sidebar at the end`,level:2},{id:`when-does-it-wrap`,text:`When does it wrap?`,level:2},{id:`custom-tags`,text:`Custom tags`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],x=[{id:`sidebar-layout`,text:`Sidebar Layout`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`sidebar-at-the-end`,text:`Sidebar at the end`,level:2,children:[]},{id:`when-does-it-wrap`,text:`When does it wrap?`,level:2,children:[]},{id:`custom-tags`,text:`Custom tags`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],S={css:[],js:[],cleanup:[]},C=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),w=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/sidebar-layout.md`,setup(){a(`vlm-toc`,{flat:b,tree:x}),h(()=>c(b,x)),d(()=>c([],[]));let e=m(S);return a(`vlm-inject`,e),h(()=>e.mount()),o(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="sidebar-layout">Sidebar Layout<a class="header-link" href="#sidebar-layout" title="Link to this heading"></a></h1>
<p><code>ENSidebarLayout</code> places a <strong>fixed-width sidebar</strong> next to <strong>fluid content</strong>. When the content would become narrower than <code>content-min</code>, the two wrap onto separate lines by themselves. There are no viewport breakpoints.</p>
<p>Requires <code>layouts/layout-primitives.css</code>.</p>
<p>`}),f(C,{key:0,meta:y[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),f(C,{key:1,meta:y[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Use the <code>sidebar</code> slot for the sidebar and the default slot for the content. Each slot is wrapped in one element (<code>aside</code> and <code>div</code> by default), because the CSS expects the <strong>first child to be the sidebar and the last the content</strong>.</p>
<h2 id="sidebar-at-the-end">Sidebar at the end<a class="header-link" href="#sidebar-at-the-end" title="Link to this heading"></a></h2>
<p>`}),f(C,{key:2,meta:y[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>end</code> puts the sidebar on the inline-end side (<code>.en-with-sidebar--end</code>), so it follows the writing direction.</p>
<h2 id="when-does-it-wrap">When does it wrap?<a class="header-link" href="#when-does-it-wrap" title="Link to this heading"></a></h2>
<p><code>content-min</code> is the minimum width of the content (default <code>50%</code>). The sidebar keeps its <code>sidebar-width</code> while the content can stay at least <code>content-min</code> wide; otherwise they stack.</p>
<p>`}),f(C,{key:3,meta:y[3]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="custom-tags">Custom tags<a class="header-link" href="#custom-tags" title="Link to this heading"></a></h2>
<p>`}),f(C,{key:4,meta:y[4]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>end</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Sidebar on the inline-end side</td>
</tr>
<tr>
<td><code>sidebarWidth</code></td>
<td><code>string</code></td>
<td><code>'16rem'</code></td>
<td><code>--en-sidebar-width</code></td>
</tr>
<tr>
<td><code>contentMin</code></td>
<td><code>string</code></td>
<td><code>'50%'</code></td>
<td><code>--en-content-min</code>. Below this the layout wraps</td>
</tr>
<tr>
<td><code>sidebarAs</code></td>
<td><code>string</code></td>
<td><code>'aside'</code></td>
<td>Tag of the sidebar element</td>
</tr>
<tr>
<td><code>contentAs</code></td>
<td><code>string</code></td>
<td><code>'div'</code></td>
<td>Tag of the content element</td>
</tr>
<tr>
<td><code>gap</code> / <code>gapX</code> / <code>gapY</code></td>
<td><code>GapInput</code></td>
<td><code>var(--en-space-5)</code></td>
<td>Gap. See <a href="./foundations#gap">Foundations</a></td>
</tr>
<tr>
<td><code>as</code></td>
<td><code>string</code></td>
<td><code>'div'</code></td>
<td>Root element</td>
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
<td><code>sidebar</code></td>
<td>Sidebar content</td>
</tr>
<tr>
<td><code>default</code></td>
<td>Main content</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>SidebarLayoutProps</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./split">Split</a>: two panes the user can resize</li>
<li><a href="./switcher">Switcher</a></li>
<li><a href="../navtree/sidebar-menu">Navtree: Sidebar Menu</a></li>
</ul>
`})]),null])}}),T={title:`Sidebar Layout`,description:`ENSidebarLayout places a fixed-width sidebar next to fluid content. When the content would become narrower than content-min, the two wrap onto separate lines by themselves. There are no viewport break...`},E=w;export{E as default,T as meta};