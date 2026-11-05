import{At as e,F as t,H as n,I as r,W as i,_t as a,at as o,et as s,it as c,l,m as u,n as d,nt as f,q as p,r as m,s as h,tt as g}from"./components-BJME9hSd.js";import{i as _,n as v}from"./classes-GOl-Me6B.js";import{l as y}from"./support-BbBPiQ37.js";var b=i({name:`ENBento`,props:{minSize:{type:String,default:void 0},rowSize:{type:String,default:void 0},areas:{type:Array,default:void 0},cols:{type:Number,default:void 0},gap:{type:[Number,String],default:void 0},gapX:{type:[Number,String],default:void 0},gapY:{type:[Number,String],default:void 0},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>{let n={...v(e)};e.minSize&&(n[`--en-bento-min`]=e.minSize),e.rowSize&&(n[`--en-bento-row`]=e.rowSize);let r=e.areas?.map(e=>e.replace(/"/g,``).trim()).filter(Boolean);if(r?.length){let t=r.map(e=>e.split(/\s+/).length);new Set(t).size>1&&y(`<ENBento areas> rows have different numbers of cells; the area template is invalid and will be ignored by the browser.`),n[`--en-bento-areas`]=r.map(e=>`"${e}"`).join(` `),n[`--en-bento-cols`]=String(e.cols??t[0])}return p(e.as,{class:_([`en-bento`,!!r?.length&&`en-bento--areas`],e.rootClass),style:n},t.default?.())}}}),x=i({name:`ENBentoItem`,props:{size:{type:String,default:void 0},area:{type:String,default:void 0},as:{type:String,default:`div`},rootClass:{type:[String,Array,Object],default:void 0}},setup(e,{slots:t}){return()=>p(e.as,{class:_([`en-bento__item`,e.size&&`en-bento__item--${e.size}`],e.rootClass),style:e.area?{gridArea:e.area}:void 0},t.default?.())}}),S={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBento</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENBentoItem } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:u(i({__name:`1`,setup(i){return(i,o)=>(c(),r(e(b),{gap:`3`},{default:a(()=>[n(e(x),{size:`large`},{default:a(()=>[...o[0]||=[t(`div`,{class:`box`,style:{height:`100%`}},`Hero`,-1)]]),_:1}),n(e(x),{size:`wide`},{default:a(()=>[...o[1]||=[t(`div`,{class:`box`,style:{height:`100%`}},`Wide`,-1)]]),_:1}),n(e(x),null,{default:a(()=>[...o[2]||=[t(`div`,{class:`box`,style:{height:`100%`}},`Tile`,-1)]]),_:1}),n(e(x),null,{default:a(()=>[...o[3]||=[t(`div`,{class:`box`,style:{height:`100%`}},`Tile`,-1)]]),_:1}),n(e(x),{size:`tall`},{default:a(()=>[...o[4]||=[t(`div`,{class:`box`,style:{height:`100%`}},`Tall`,-1)]]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-e3cedfeb`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBento</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENBentoItem } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENBento</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"large"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 100%"</span><span class="shiki-foreground">>Hero&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"wide"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 100%"</span><span class="shiki-foreground">>Wide&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 100%"</span><span class="shiki-foreground">>Tile&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 100%"</span><span class="shiki-foreground">>Tile&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tall"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 100%"</span><span class="shiki-foreground">>Tall&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENBento</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:u(i({__name:`2`,setup(i){return(i,o)=>(c(),r(e(b),{areas:[`hero hero side`,`a b side`],gap:`3`},{default:a(()=>[n(e(x),{area:`hero`},{default:a(()=>[...o[0]||=[t(`div`,{class:`box`,style:{height:`100%`}},`Hero`,-1)]]),_:1}),n(e(x),{area:`a`},{default:a(()=>[...o[1]||=[t(`div`,{class:`box`,style:{height:`100%`}},`A`,-1)]]),_:1}),n(e(x),{area:`b`},{default:a(()=>[...o[2]||=[t(`div`,{class:`box`,style:{height:`100%`}},`B`,-1)]]),_:1}),n(e(x),{area:`side`},{default:a(()=>[...o[3]||=[t(`div`,{class:`box`,style:{height:`100%`}},`Side`,-1)]]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-146111d0`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBento</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENBentoItem } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENBento</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">areas</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span><span class="shiki-token-string-expression">'hero hero side'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'a b side'</span><span class="shiki-foreground">]</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-token-function"> area</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hero"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 100%"</span><span class="shiki-foreground">>Hero&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-token-function"> area</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"a"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 100%"</span><span class="shiki-foreground">>A&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-token-function"> area</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"b"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 100%"</span><span class="shiki-foreground">>B&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-token-function"> area</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"side"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 100%"</span><span class="shiki-foreground">>Side&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENBentoItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENBento</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null}},C=[{id:`bento`,text:`Bento`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`tile-sizes`,text:`Tile sizes`,level:2},{id:`named-areas`,text:`Named areas`,level:2},{id:`api`,text:`API`,level:2},{id:`enbento-props`,text:"`ENBento` props",level:3},{id:`enbentoitem-props`,text:"`ENBentoItem` props",level:3},{id:`slots`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],w=[{id:`bento`,text:`Bento`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`tile-sizes`,text:`Tile sizes`,level:2,children:[]},{id:`named-areas`,text:`Named areas`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`enbento-props`,text:"`ENBento` props",level:3,children:[]},{id:`enbentoitem-props`,text:"`ENBentoItem` props",level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],T={css:[],js:[],cleanup:[]},E=i({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>p(`div`,{class:n},[e.meta.isLive?p(m,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:p(d,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),D=i({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/bento.md`,setup(){o(`vlm-toc`,{flat:C,tree:w}),g(()=>l(C,w)),f(()=>l([],[]));let e=h(T);return o(`vlm-inject`,e),g(()=>e.mount()),s(()=>e.beforeUnmount()),f(()=>e.unmounted()),()=>p(`div`,{class:`vlm-page`},[p(`div`,{class:`vlm-content`},[p(`div`,{class:`vlm-md`,innerHTML:`<h1 id="bento">Bento<a class="header-link" href="#bento" title="Link to this heading"></a></h1>
<p><code>ENBento</code> is a <strong>grid of tiles with different spans</strong>, the shape of a dashboard or feature overview. <code>ENBentoItem</code> is one tile. Tiles flow into auto-fit columns by default, or into <strong>named areas</strong> you describe row by row.</p>
<p>Requires <code>layouts/layout-primitives.css</code>.</p>
<p>`}),p(E,{key:0,meta:S[0]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),p(E,{key:1,meta:S[1]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The grid uses auto-fit columns of at least <code>min-size</code> (default <code>14rem</code>) and rows of <code>row-size</code> (default <code>minmax(8rem, auto)</code>). Tiles are packed densely, so smaller tiles fill the gaps.</p>
<h2 id="tile-sizes">Tile sizes<a class="header-link" href="#tile-sizes" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>size</code></th>
<th>Class</th>
<th>Span</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td><code>.en-bento__item</code></td>
<td>1 column, 1 row</td>
</tr>
<tr>
<td><code>'wide'</code></td>
<td><code>.en-bento__item--wide</code></td>
<td>2 columns</td>
</tr>
<tr>
<td><code>'tall'</code></td>
<td><code>.en-bento__item--tall</code></td>
<td>2 rows</td>
</tr>
<tr>
<td><code>'large'</code></td>
<td><code>.en-bento__item--large</code></td>
<td>2 columns and 2 rows</td>
</tr>
<tr>
<td><code>'full'</code></td>
<td><code>.en-bento__item--full</code></td>
<td>The whole row</td>
</tr>
</tbody>
</table>
</div><p>The grid is a <strong>container-query root</strong>. Below <code>30rem</code> of grid width the <code>wide</code>, <code>tall</code> and <code>large</code> spans collapse to one cell, which avoids implicit columns in narrow parents.</p>
<h2 id="named-areas">Named areas<a class="header-link" href="#named-areas" title="Link to this heading"></a></h2>
<p><code>areas</code> takes one string per row. Pair it with <code>ENBentoItem area=&quot;...&quot;</code>:</p>
<p>`}),p(E,{key:2,meta:S[2]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li>Every row must have <strong>the same number of cells</strong>. A development warning is printed otherwise, and the browser ignores the invalid template.</li>
<li><code>cols</code> is derived from the first row. Set it only to override that count.</li>
<li>Quotes inside the row strings are removed for you.</li>
</ul>
<h2 id="api">API<a class="header-link" href="#api" title="Link to this heading"></a></h2>
<h3 id="enbento-props"><code>ENBento</code> props<a class="header-link" href="#enbento-props" title="Link to this heading"></a></h3>
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
<td><code>'14rem'</code></td>
<td><code>--en-bento-min</code>, minimum tile width of the auto-fit grid</td>
</tr>
<tr>
<td><code>rowSize</code></td>
<td><code>string</code></td>
<td><code>'minmax(8rem, auto)'</code></td>
<td><code>--en-bento-row</code></td>
</tr>
<tr>
<td><code>areas</code></td>
<td><code>string[]</code></td>
<td>—</td>
<td>Named-area layout (<code>.en-bento--areas</code>), one string per row</td>
</tr>
<tr>
<td><code>cols</code></td>
<td><code>number</code></td>
<td>first row length</td>
<td><code>--en-bento-cols</code> for <code>areas</code></td>
</tr>
<tr>
<td><code>gap</code> / <code>gapX</code> / <code>gapY</code></td>
<td><code>GapInput</code></td>
<td><code>var(--en-space-4)</code></td>
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
</div><h3 id="enbentoitem-props"><code>ENBentoItem</code> props<a class="header-link" href="#enbentoitem-props" title="Link to this heading"></a></h3>
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
<td><code>'wide' | 'tall' | 'large' | 'full'</code></td>
<td>—</td>
<td>Span of the tile</td>
</tr>
<tr>
<td><code>area</code></td>
<td><code>string</code></td>
<td>—</td>
<td><code>grid-area</code>, for <code>areas</code></td>
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
<td><code>ENBento</code></td>
<td><code>default</code></td>
<td><code>ENBentoItem</code> tiles</td>
</tr>
<tr>
<td><code>ENBentoItem</code></td>
<td><code>default</code></td>
<td>Tile content</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>BentoProps</code>, <code>BentoItemProps</code>, <code>BentoItemSize</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./grid">Grid</a></li>
<li><a href="./masonry">Masonry</a></li>
</ul>
`})]),null])}}),O={title:`Bento`,description:`ENBento is a grid of tiles with different spans, the shape of a dashboard or feature overview. ENBentoItem is one tile. Tiles flow into auto-fit columns by default, or into named areas you describe ro...`},k=D;export{k as default,O as meta};