import{At as e,F as t,H as n,R as r,W as i,_t as a,at as o,et as s,it as c,l,m as u,n as d,nt as f,q as p,r as m,s as h,tt as g}from"./components-BJME9hSd.js";import{n as _}from"./src-BXRgfvcu.js";var v={class:`en-stack`},y={0:{component:u(i({__name:`0`,setup(i){return(i,o)=>(c(),r(`div`,v,[n(e(_),{gap:`1`},{default:a(()=>[...o[0]||=[t(`div`,{class:`box`},`gap 1`,-1),t(`div`,{class:`box`},`gap 1`,-1)]]),_:1}),n(e(_),{gap:`5`},{default:a(()=>[...o[1]||=[t(`div`,{class:`box`},`gap 5`,-1),t(`div`,{class:`box`},`gap 5`,-1)]]),_:1}),n(e(_),{gap:`2rem`},{default:a(()=>[...o[2]||=[t(`div`,{class:`box`},`2rem`,-1),t(`div`,{class:`box`},`2rem`,-1)]]),_:1}),n(e(_),{"gap-x":`6`,"gap-y":`1`,wrap:``},{default:a(()=>[...o[3]||=[t(`div`,{class:`box`},`x 6`,-1),t(`div`,{class:`box`},`y 1`,-1)]]),_:1})]))}}),[[`__scopeId`,`data-v-d9330bfc`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFlex } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-stack"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>gap 1&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>gap 1&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"5"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>gap 5&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>gap 5&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2rem"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>2rem&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>2rem&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-token-function"> gap-x</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"6"</span><span class="shiki-token-function"> gap-y</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-token-function"> wrap</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>x 6&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>y 1&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
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
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:0,lang:`vue`,injectKind:null,editable:!1,source:null}},b=[{id:`foundations`,text:`Foundations`,level:1},{id:`gap`,text:`Gap`,level:2},{id:`two-kinds-of-breakpoints`,text:`Two kinds of breakpoints`,level:2},{id:`viewport-breakpoints-media-queries`,text:`Viewport breakpoints (media queries)`,level:3},{id:`container-breakpoints-container-queries`,text:`Container breakpoints (container queries)`,level:3},{id:`columns-use-their-own-thresholds`,text:`Columns use their own thresholds`,level:3},{id:`common-props`,text:`Common props`,level:2},{id:`container-context`,text:`Container context`,level:2},{id:`development-warnings`,text:`Development warnings`,level:2},{id:`headless-helpers`,text:`Headless helpers`,level:2}],x=[{id:`foundations`,text:`Foundations`,level:1,children:[{id:`gap`,text:`Gap`,level:2,children:[]},{id:`two-kinds-of-breakpoints`,text:`Two kinds of breakpoints`,level:2,children:[{id:`viewport-breakpoints-media-queries`,text:`Viewport breakpoints (media queries)`,level:3,children:[]},{id:`container-breakpoints-container-queries`,text:`Container breakpoints (container queries)`,level:3,children:[]},{id:`columns-use-their-own-thresholds`,text:`Columns use their own thresholds`,level:3,children:[]}]},{id:`common-props`,text:`Common props`,level:2,children:[]},{id:`container-context`,text:`Container context`,level:2,children:[]},{id:`development-warnings`,text:`Development warnings`,level:2,children:[]},{id:`headless-helpers`,text:`Headless helpers`,level:2,children:[]}]}],S={css:[],js:[],cleanup:[]},C=i({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>p(`div`,{class:n},[e.meta.isLive?p(m,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:p(d,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),w=i({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/foundations.md`,setup(){o(`vlm-toc`,{flat:b,tree:x}),g(()=>l(b,x)),f(()=>l([],[]));let e=h(S);return o(`vlm-inject`,e),g(()=>e.mount()),s(()=>e.beforeUnmount()),f(()=>e.unmounted()),()=>p(`div`,{class:`vlm-page`},[p(`div`,{class:`vlm-content`},[p(`div`,{class:`vlm-md`,innerHTML:`<h1 id="foundations">Foundations<a class="header-link" href="#foundations" title="Link to this heading"></a></h1>
<p>Concepts shared by every layout component: the gap values, the two kinds of breakpoints, the common props and the development warnings.</p>
<h2 id="gap">Gap<a class="header-link" href="#gap" title="Link to this heading"></a></h2>
<p><code>gap</code>, <code>gap-x</code> and <code>gap-y</code> accept one of:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Value</th>
<th>Example</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td>A spacing step</td>
<td><code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>8</code>, <code>10</code></td>
<td><code>var(--en-space-N)</code> (<code>0</code> becomes <code>0</code>)</td>
</tr>
<tr>
<td>A fluid token</td>
<td><code>'fluid-sm'</code>, <code>'fluid-md'</code>, <code>'fluid-lg'</code>, <code>'fluid-xl'</code></td>
<td><code>var(--en-space-fluid-*)</code></td>
</tr>
<tr>
<td>Any CSS length</td>
<td><code>'1.5rem'</code>, <code>'2vw'</code></td>
<td>Used as is</td>
</tr>
</tbody>
</table>
</div><p>Numbers and numeric strings behave the same, so <code>gap=&quot;4&quot;</code> in a template equals <code>:gap=&quot;4&quot;</code>.</p>
<p>`}),p(C,{key:0,meta:y[0]}),p(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Gap is written as the real <code>gap</code>, <code>column-gap</code> and <code>row-gap</code> properties in an inline style. This has two consequences:</p>
<ul>
<li>It works without the utilities layer, so every step (6, 8, 10) and every fluid token is available.</li>
<li>It <strong>does not leak into nested layout primitives</strong>, because a gap set on a grid is not inherited.</li>
</ul>
<p><code>ENMasonry</code> and <code>ENColumns</code> are the exception. Their CSS spaces rows with the <code>--en-gap</code> custom property, so they set that property instead. Custom properties inherit, so nested primitives without a gap of their own pick it up.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Component</th>
<th>Props</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ENGrid</code>, <code>ENFlex</code>, <code>ENSwitcher</code>, <code>ENSidebarLayout</code>, <code>ENBento</code></td>
<td><code>gap</code>, <code>gapX</code>, <code>gapY</code></td>
</tr>
<tr>
<td><code>ENStack</code>, <code>ENCluster</code>, <code>ENCover</code>, <code>ENReel</code></td>
<td><code>gap</code> only</td>
</tr>
<tr>
<td><code>ENMasonry</code>, <code>ENColumns</code></td>
<td><code>gap</code> only (sets <code>--en-gap</code>)</td>
</tr>
</tbody>
</table>
</div><p>When an axis (<code>gapX</code> / <code>gapY</code>) is given, both axes are written explicitly, so the shorthand can never overwrite a longhand when props change.</p>
<h2 id="two-kinds-of-breakpoints">Two kinds of breakpoints<a class="header-link" href="#two-kinds-of-breakpoints" title="Link to this heading"></a></h2>
<p>Layout components react to <strong>two different things</strong>, and their thresholds differ.</p>
<h3 id="viewport-breakpoints-media-queries">Viewport breakpoints (media queries)<a class="header-link" href="#viewport-breakpoints-media-queries" title="Link to this heading"></a></h3>
<p>Used by the <code>span*</code> props of <code>ENCol</code>, the <code>cols*</code> props of <code>ENGrid</code>.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Name</th>
<th>From</th>
<th>Prop suffix</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>sm</code></td>
<td>480px</td>
<td><code>Sm</code></td>
</tr>
<tr>
<td><code>md</code></td>
<td>768px</td>
<td><code>Md</code></td>
</tr>
<tr>
<td><code>lg</code></td>
<td>1024px</td>
<td><code>Lg</code></td>
</tr>
<tr>
<td><code>xl</code></td>
<td>1280px</td>
<td><code>Xl</code></td>
</tr>
<tr>
<td><code>2xl</code></td>
<td>1536px</td>
<td><code>2xl</code></td>
</tr>
</tbody>
</table>
</div><p>The 16 and 24 column grids only have <code>sm</code>, <code>md</code> and <code>lg</code>.</p>
<h3 id="container-breakpoints-container-queries">Container breakpoints (container queries)<a class="header-link" href="#container-breakpoints-container-queries" title="Link to this heading"></a></h3>
<p>Used when a component is a container-query root, so it reacts to <strong>its own width</strong> instead of the viewport. That is useful inside sidebars, panels and cards.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Name</th>
<th><code>ENGrid</code> / <code>ENCol</code> (<code>col*</code>)</th>
<th><code>ENFlex</code> / <code>ENFlexItem</code> (<code>direction*</code>, <code>grow*</code>)</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>xxs</code></td>
<td>—</td>
<td>240px</td>
</tr>
<tr>
<td><code>xs</code></td>
<td>320px</td>
<td>320px</td>
</tr>
<tr>
<td><code>sm</code></td>
<td>360px</td>
<td>360px</td>
</tr>
<tr>
<td><code>md</code></td>
<td>480px</td>
<td>480px</td>
</tr>
<tr>
<td><code>lg</code></td>
<td>640px</td>
<td>640px</td>
</tr>
<tr>
<td><code>xl</code></td>
<td>768px</td>
<td>768px</td>
</tr>
</tbody>
</table>
</div><p>They are enabled with <code>responsive-container</code> on <a href="./grid#container-query-columns"><code>ENGrid</code></a> and <a href="./flex#container-query-flex"><code>ENFlex</code></a>.</p>
<h3 id="columns-use-their-own-thresholds">Columns use their own thresholds<a class="header-link" href="#columns-use-their-own-thresholds" title="Link to this heading"></a></h3>
<p><code>ENColumns</code> (<code>cols-xs</code> … <code>cols-lg</code>) follows the <strong>viewport</strong> at 320 / 360 / 480 / 640px. These are not the grid breakpoints. See <a href="./columns">Columns</a>.</p>
<h2 id="common-props">Common props<a class="header-link" href="#common-props" title="Link to this heading"></a></h2>
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
<td><code>as</code></td>
<td><code>string</code></td>
<td><code>'div'</code></td>
<td>Tag or component to render as. <code>ENCover</code> defaults to <code>'section'</code></td>
</tr>
<tr>
<td><code>rootClass</code></td>
<td><code>string | string[] | Record&lt;string, boolean&gt;</code></td>
<td>—</td>
<td>Extra classes merged onto the root element</td>
</tr>
</tbody>
</table>
</div><h2 id="container-context">Container context<a class="header-link" href="#container-context" title="Link to this heading"></a></h2>
<p><code>ENContainer</code> is also an inline-size container named <code>en</code>. Components inside it can use container queries against the container width. <code>ENGrid</code> (with <code>responsive-container</code>) and <code>ENFlex</code> (with <code>responsive-container</code>) define their own container contexts, named <code>grid-container</code> and <code>flex-container</code>.</p>
<h2 id="development-warnings">Development warnings<a class="header-link" href="#development-warnings" title="Link to this heading"></a></h2>
<p>Components render a class even when EN.CSS does not ship it, so a project can extend its own CSS. In a development build, Vue warns <strong>once per message</strong> so a missing class does not fail silently. Production builds stay silent.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Warning</th>
<th>Cause</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-col-span-8-md ... is not shipped by EN.CSS</code></td>
<td>A span or column count outside the shipped set (see the tables on the <a href="./grid">Grid</a> page)</td>
</tr>
<tr>
<td><code>The 16-column grid has no xl breakpoint classes</code></td>
<td><code>span-xl</code> / <code>span-2xl</code> on a 16 or 24 column grid. The prop is ignored</td>
</tr>
<tr>
<td><code>cols* props only apply to the 12-column system</code></td>
<td><code>cols</code> on <code>system=&quot;16&quot;</code>, <code>&quot;24&quot;</code> or <code>&quot;auto&quot;</code>. The prop is ignored</td>
</tr>
<tr>
<td><code>col* container-query spans only exist for the 12-column system</code></td>
<td><code>col-md</code> and friends on a 16 or 24 column column. The prop is ignored</td>
</tr>
<tr>
<td><code>Unknown grid system</code></td>
<td><code>system</code> is not <code>12</code>, <code>16</code>, <code>24</code> or <code>'auto'</code>. Falls back to <code>12</code></td>
</tr>
<tr>
<td><code>&lt;ENReel&gt; ... needs an accessible name</code></td>
<td><code>ENReel</code> without <code>aria-label</code> or <code>aria-labelledby</code></td>
</tr>
<tr>
<td><code>&lt;ENBento areas&gt; rows have different numbers of cells</code></td>
<td>Rows of <code>areas</code> with different cell counts</td>
</tr>
<tr>
<td><code>.en-switcher--max-5 is not shipped</code></td>
<td><code>max</code> outside <code>2</code>, <code>3</code>, <code>4</code></td>
</tr>
<tr>
<td><code>.en-columns--cols-5 is not shipped</code></td>
<td>Column count outside the shipped set</td>
</tr>
</tbody>
</table>
</div><h2 id="headless-helpers">Headless helpers<a class="header-link" href="#headless-helpers" title="Link to this heading"></a></h2>
<p>For custom components, the class logic of the grid is exported:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Export</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>useGridClasses(props)</code></td>
<td><code>{ classes, style }</code> for an <code>ENGrid</code></td>
</tr>
<tr>
<td><code>useColClasses(props)</code></td>
<td><code>{ classes }</code> for an <code>ENCol</code></td>
</tr>
<tr>
<td><code>normalizeSystem(value)</code></td>
<td>Normalizes <code>16</code>, <code>'16'</code>, <code>'auto'</code> or <code>undefined</code> to <code>12 | 16 | 24 | 'auto'</code></td>
</tr>
</tbody>
</table>
</div><p>See <a href="./grid#headless-composables">Grid</a>.</p>
`})]),null])}}),T={title:`Foundations`,description:`Concepts shared by every layout component: the gap values, the two kinds of breakpoints, the common props and the development warnings.`},E=w;export{E as default,T as meta};