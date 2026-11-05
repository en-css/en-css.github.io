import{At as e,F as t,H as n,I as r,W as i,_t as a,at as o,et as s,it as c,l,m as u,n as d,nt as f,q as p,r as m,s as h,tt as g}from"./components-BJME9hSd.js";import{i as _}from"./classes-GOl-Me6B.js";import{t as v}from"./src-DmzeVCXm.js";var y=i({name:`ENContainer`,props:{size:{type:String,default:void 0},fluid:{type:Boolean,default:!1},align:{type:String,default:void 0},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>p(e.as,{class:_([`en-container`,e.fluid&&`en-container--fluid`,!e.fluid&&e.size?`en-container--${e.size}`:!1,e.align===`start`||e.align===`end`?`en-container--${e.align}`:!1],e.rootClass)},t.default?.())}}),b={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENContainer } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:u(i({__name:`1`,setup(n){return(n,i)=>(c(),r(e(y),{size:`md`},{default:a(()=>[...i[0]||=[t(`div`,{class:`box`},`Content constrained to 768px and centered`,-1)]]),_:1}))}}),[[`__scopeId`,`data-v-46e0c0a1`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENContainer } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"md"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Content constrained to 768px and centered&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:u(i({__name:`2`,setup(i){return(i,o)=>(c(),r(e(v),{gap:`2`},{default:a(()=>[n(e(y),{size:`sm`},{default:a(()=>[...o[0]||=[t(`div`,{class:`box`},`sm`,-1)]]),_:1}),n(e(y),{size:`md`},{default:a(()=>[...o[1]||=[t(`div`,{class:`box`},`md`,-1)]]),_:1}),n(e(y),{size:`lg`},{default:a(()=>[...o[2]||=[t(`div`,{class:`box`},`lg`,-1)]]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-e8c35307`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENContainer</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENStack } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENStack</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sm"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>sm&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"md"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>md&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lg"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>lg&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENStack</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-token-function"> fluid</span><span class="shiki-foreground">>Full width with the container padding&#x3C;/</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:3,lang:`vue`,injectKind:null,editable:!1,source:null},4:{component:u(i({__name:`4`,setup(i){return(i,o)=>(c(),r(e(v),{gap:`2`},{default:a(()=>[n(e(y),{size:`sm`,align:`start`},{default:a(()=>[...o[0]||=[t(`div`,{class:`box`},`start`,-1)]]),_:1}),n(e(y),{size:`sm`,align:`center`},{default:a(()=>[...o[1]||=[t(`div`,{class:`box`},`center (default)`,-1)]]),_:1}),n(e(y),{size:`sm`,align:`end`},{default:a(()=>[...o[2]||=[t(`div`,{class:`box`},`end`,-1)]]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-e31c31ac`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENContainer</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENStack } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENStack</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sm"</span><span class="shiki-foreground"> align</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"start"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>start&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sm"</span><span class="shiki-foreground"> align</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"center"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>center (default)&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sm"</span><span class="shiki-foreground"> align</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"end"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>end&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENContainer</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENStack</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:4,lang:`vue`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">@container</span><span class="shiki-foreground"> en (width >= 40rem) {</span></span>
<span class="line"><span class="shiki-token-function">  .my-card</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">flex-direction</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> row</span><span class="shiki-foreground">; }</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:5,lang:`css`,injectKind:null,editable:!1,source:null}},x=[{id:`container`,text:`Container`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`sizes`,text:`Sizes`,level:2},{id:`fluid`,text:`Fluid`,level:2},{id:`alignment`,text:`Alignment`,level:2},{id:`container-queries`,text:`Container queries`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],S=[{id:`container`,text:`Container`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`sizes`,text:`Sizes`,level:2,children:[]},{id:`fluid`,text:`Fluid`,level:2,children:[]},{id:`alignment`,text:`Alignment`,level:2,children:[]},{id:`container-queries`,text:`Container queries`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],C={css:[],js:[],cleanup:[]},w=i({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>p(`div`,{class:n},[e.meta.isLive?p(m,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:p(d,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),T=i({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/container.md`,setup(){o(`vlm-toc`,{flat:x,tree:S}),g(()=>l(x,S)),f(()=>l([],[]));let e=h(C);return o(`vlm-inject`,e),g(()=>e.mount()),s(()=>e.beforeUnmount()),f(()=>e.unmounted()),()=>p(`div`,{class:`vlm-page`},[p(`div`,{class:`vlm-content`},[p(`div`,{class:`vlm-md`,innerHTML:`<h1 id="container">Container<a class="header-link" href="#container" title="Link to this heading"></a></h1>
<p><code>ENContainer</code> is a centered, max-width wrapper. It is also an <strong>inline-size container</strong> (named <code>en</code>), so container queries can key off its width instead of the viewport.</p>
<p>Requires <code>core/layout.css</code> (included in <code>en.css</code>).</p>
<p>`}),p(w,{key:0,meta:b[0]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),p(w,{key:1,meta:b[1]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Without a <code>size</code> the container is <code>1140px</code> wide. It always has a horizontal padding of <code>var(--en-space-4)</code>, and hides horizontal overflow (<code>overflow-x: clip</code>).</p>
<h2 id="sizes">Sizes<a class="header-link" href="#sizes" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>size</code></th>
<th>Max width</th>
<th>Class</th>
</tr>
</thead>
<tbody>
<tr>
<td>— (default)</td>
<td>1140px</td>
<td><code>.en-container</code></td>
</tr>
<tr>
<td><code>'sm'</code></td>
<td>480px</td>
<td><code>.en-container--sm</code></td>
</tr>
<tr>
<td><code>'md'</code></td>
<td>768px</td>
<td><code>.en-container--md</code></td>
</tr>
<tr>
<td><code>'lg'</code></td>
<td>1024px</td>
<td><code>.en-container--lg</code></td>
</tr>
<tr>
<td><code>'xl'</code></td>
<td>1280px</td>
<td><code>.en-container--xl</code></td>
</tr>
<tr>
<td><code>'2xl'</code></td>
<td>1536px</td>
<td><code>.en-container--2xl</code></td>
</tr>
</tbody>
</table>
</div><p>`}),p(w,{key:2,meta:b[2]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="fluid">Fluid<a class="header-link" href="#fluid" title="Link to this heading"></a></h2>
<p><code>fluid</code> removes the max-width constraint (<code>.en-container--fluid</code>). A <code>size</code> is ignored when <code>fluid</code> is set.</p>
<p>`}),p(w,{key:3,meta:b[3]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="alignment">Alignment<a class="header-link" href="#alignment" title="Link to this heading"></a></h2>
<p>A constrained container is centered by default. Use <code>align</code> to place it at the start or end of the available space:</p>
<p>`}),p(w,{key:4,meta:b[4]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>start</code> and <code>end</code> are logical (<code>margin-inline-*</code>), so they follow the writing direction.</p>
<h2 id="container-queries">Container queries<a class="header-link" href="#container-queries" title="Link to this heading"></a></h2>
<p>Because the container is named <code>en</code>, you can write container queries in your own CSS:</p>
<p>`}),p(w,{key:5,meta:b[5]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>size</code></td>
<td><code>'sm' | 'md' | 'lg' | 'xl' | '2xl'</code></td>
<td>—</td>
<td>Max-width preset (<code>.en-container--{size}</code>). Ignored with <code>fluid</code></td>
</tr>
<tr>
<td><code>fluid</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>No max-width (<code>.en-container--fluid</code>)</td>
</tr>
<tr>
<td><code>align</code></td>
<td><code>'start' | 'center' | 'end'</code></td>
<td><code>'center'</code></td>
<td><code>.en-container--start</code> / <code>--end</code> instead of centering. <code>center</code> adds no class</td>
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
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>ContainerProps</code>, <code>ContainerSize</code>, <code>ContainerAlign</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./grid">Grid</a></li>
<li><a href="./foundations">Foundations</a></li>
</ul>
`})]),null])}}),E={title:`Container`,description:`ENContainer is a centered, max-width wrapper. It is also an inline-size container (named en), so container queries can key off its width instead of the viewport.`},D=T;export{D as default,E as meta};