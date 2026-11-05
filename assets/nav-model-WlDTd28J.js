import{At as e,Et as t,I as n,W as r,at as i,et as a,it as o,l as s,n as c,nt as l,q as u,r as d,s as f,tt as p}from"./components-BJME9hSd.js";import{n as m}from"./navtree-B-kmX2Y5.js";var h={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { normalizeItems</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> fromRoutes</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useNavItems } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { NavItemInput</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> NavNode</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> NavTree } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:r({__name:`1`,setup(r){let i=[{key:`home`,label:`Home`,icon:`bi bi-house`},{group:`Management`},{key:`master`,label:`Master data`,toggleOnly:!0,children:[{key:`users`,label:`Users`,badge:12,badgeVariant:`info`},{key:`roles`,label:`Roles`},{key:`legacy`,label:`Legacy`,disabled:!0}]}],a=t(`users`);return(t,r)=>(o(),n(e(m),{"active-key":a.value,"onUpdate:activeKey":r[0]||=e=>a.value=e,items:i,"default-expanded":`all`,"aria-label":`Model demo`},null,8,[`active-key`]))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENTree</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> icon</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bi bi-house'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { group</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Management'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'master'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Master data'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    toggleOnly</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> badge</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 12</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> badgeVariant</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'info'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'roles'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Roles'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'legacy'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Legacy'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> disabled</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> active</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'users'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">active-key</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">active</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> default-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"all"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Model demo"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-token-function">    label</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> t</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'nav.users'</span><span class="shiki-foreground">)</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-token-function">    to</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> ({ route }) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-string-expression"> \`/</span><span class="shiki-token-keyword">\${</span><span class="shiki-token-constant">route</span><span class="shiki-foreground">?.</span><span class="shiki-token-constant">params</span><span class="shiki-foreground">.lang</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">/users\`</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-token-function">    badge</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> store</span><span class="shiki-foreground">.pendingUsers</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:2,lang:`ts`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> fromRoutes</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">router</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">options</span><span class="shiki-foreground">.routes</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { routeMetaKey</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'nav'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> include</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'meta'</span><span class="shiki-foreground"> })</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:3,lang:`ts`,injectKind:null,editable:!1,source:null},4:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">interface</span><span class="shiki-token-function"> NavTree</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-keyword">  readonly</span><span class="shiki-foreground"> nodes</span><span class="shiki-token-keyword">:</span><span class="shiki-token-keyword"> readonly</span><span class="shiki-token-function"> NavNode</span><span class="shiki-foreground">[]                 </span><span class="shiki-token-comment">// root nodes, in authoring order</span></span>
<span class="line"><span class="shiki-token-keyword">  readonly</span><span class="shiki-foreground"> index</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ReadonlyMap</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">NavKey</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-function"> NavNode</span><span class="shiki-foreground">>       </span><span class="shiki-token-comment">// every node, pre-order</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:4,lang:`ts`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> visible</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> flatten</span><span class="shiki-foreground">(tree</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> (node) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-keyword"> !</span><span class="shiki-token-constant">node</span><span class="shiki-token-function">.isHidden</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'menu'</span><span class="shiki-foreground">))</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:5,lang:`ts`,injectKind:null,editable:!1,source:null}},g=[{id:`navigation-model`,text:`Navigation Model`,level:1},{id:`authoring-items`,text:`Authoring items`,level:2},{id:`naviteminput-fields`,text:"`NavItemInput` fields",level:3},{id:`dynamic-values`,text:`Dynamic values`,level:3},{id:`items-from-routes`,text:`Items from routes`,level:2},{id:`normalized-nodes`,text:`Normalized nodes`,level:2},{id:`functions-and-composables`,text:`Functions and composables`,level:2},{id:`normalizeitemsinput-options-navtree`,text:"`normalizeItems(input, options?): NavTree`",level:3},{id:`flattentree-filter-navnode`,text:"`flatten(tree, filter?): NavNode[]`",level:3},{id:`usenavitemssource-options-computedrefnavtree`,text:"`useNavItems(source, options?): ComputedRef<NavTree>`",level:3},{id:`useactivetrailtree-current-options`,text:"`useActiveTrail(tree, current, options?)`",level:3},{id:`useexpandedoptions`,text:"`useExpanded(options)`",level:3},{id:`usecurrentroute-computedrefnavroute-undefined`,text:"`useCurrentRoute(): ComputedRef<NavRoute | undefined>`",level:3},{id:`navlink`,text:"`NavLink`",level:3},{id:`navicon`,text:"`NavIcon`",level:3},{id:`loadpopkitconfig`,text:"`loadPopkit(config)`",level:3},{id:`types`,text:`Types`,level:2},{id:`see-also`,text:`See also`,level:2}],_=[{id:`navigation-model`,text:`Navigation Model`,level:1,children:[{id:`authoring-items`,text:`Authoring items`,level:2,children:[{id:`naviteminput-fields`,text:"`NavItemInput` fields",level:3,children:[]},{id:`dynamic-values`,text:`Dynamic values`,level:3,children:[]}]},{id:`items-from-routes`,text:`Items from routes`,level:2,children:[]},{id:`normalized-nodes`,text:`Normalized nodes`,level:2,children:[]},{id:`functions-and-composables`,text:`Functions and composables`,level:2,children:[{id:`normalizeitemsinput-options-navtree`,text:"`normalizeItems(input, options?): NavTree`",level:3,children:[]},{id:`flattentree-filter-navnode`,text:"`flatten(tree, filter?): NavNode[]`",level:3,children:[]},{id:`usenavitemssource-options-computedrefnavtree`,text:"`useNavItems(source, options?): ComputedRef<NavTree>`",level:3,children:[]},{id:`useactivetrailtree-current-options`,text:"`useActiveTrail(tree, current, options?)`",level:3,children:[]},{id:`useexpandedoptions`,text:"`useExpanded(options)`",level:3,children:[]},{id:`usecurrentroute-computedrefnavroute-undefined`,text:"`useCurrentRoute(): ComputedRef<NavRoute | undefined>`",level:3,children:[]},{id:`navlink`,text:"`NavLink`",level:3,children:[]},{id:`navicon`,text:"`NavIcon`",level:3,children:[]},{id:`loadpopkitconfig`,text:"`loadPopkit(config)`",level:3,children:[]}]},{id:`types`,text:`Types`,level:2,children:[]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],v={css:[],js:[],cleanup:[]},y=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>u(`div`,{class:n},[e.meta.isLive?u(d,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:u(c,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),b=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/navtree/nav-model.md`,setup(){i(`vlm-toc`,{flat:g,tree:_}),p(()=>s(g,_)),l(()=>s([],[]));let e=f(v);return i(`vlm-inject`,e),p(()=>e.mount()),a(()=>e.beforeUnmount()),l(()=>e.unmounted()),()=>u(`div`,{class:`vlm-page`},[u(`div`,{class:`vlm-content`},[u(`div`,{class:`vlm-md`,innerHTML:`<h1 id="navigation-model">Navigation Model<a class="header-link" href="#navigation-model" title="Link to this heading"></a></h1>
<p>Every navtree component reads the same data model. You author <code>NavItemInput</code> objects (or route records), the library normalizes them into a tree of <code>NavNode</code>, and the components render that tree.</p>
<p>`}),u(y,{key:0,meta:h[0]}),u(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="authoring-items">Authoring items<a class="header-link" href="#authoring-items" title="Link to this heading"></a></h2>
<p>`}),u(y,{key:1,meta:h[1]}),u(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="naviteminput-fields"><code>NavItemInput</code> fields<a class="header-link" href="#naviteminput-fields" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>key</code></td>
<td><code>NavKey</code></td>
<td>Identity. Must be unique within a tree. Generated from the position when omitted</td>
</tr>
<tr>
<td><code>label</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td>Text</td>
</tr>
<tr>
<td><code>title</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td>Text that wins over <code>label</code> (<code>title || label</code>)</td>
</tr>
<tr>
<td><code>tooltip</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td>Flyout tooltip / <code>title</code> attribute. Falls back to the label</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td>Accessible name override. Falls back to the label</td>
</tr>
<tr>
<td><code>badge</code></td>
<td><code>NavValue&lt;string | number&gt;</code></td>
<td>Badge content</td>
</tr>
<tr>
<td><code>badgeVariant</code></td>
<td><code>'primary' | 'success' | 'danger' | 'warning' | 'info' | 'subtle'</code></td>
<td>Badge colour</td>
</tr>
<tr>
<td><code>group</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td>Renders the entry as a non-clickable group header with this text</td>
</tr>
<tr>
<td><code>icon</code></td>
<td><code>NavIconValue</code></td>
<td>Class string (<code>'bi bi-house'</code>), text/emoji, a <code>Component</code> or a <code>VNode</code></td>
</tr>
<tr>
<td><code>to</code></td>
<td><code>NavValue&lt;NavLocation&gt;</code></td>
<td>Router location. Rendered with <code>RouterLink</code> (or <code>linkComponent</code>)</td>
</tr>
<tr>
<td><code>href</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td>Plain link</td>
</tr>
<tr>
<td><code>children</code></td>
<td><code>NavItemInput[]</code></td>
<td>Nested items</td>
</tr>
<tr>
<td><code>divider</code></td>
<td><code>boolean</code></td>
<td>Divider before the item. Alone, it is a standalone divider</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>NavValue&lt;boolean&gt;</code></td>
<td>Visible but never navigates (<code>aria-disabled=&quot;true&quot;</code>)</td>
</tr>
<tr>
<td><code>toggleOnly</code></td>
<td><code>boolean</code></td>
<td>A click only toggles the children, never navigates</td>
</tr>
<tr>
<td><code>hidden</code></td>
<td><code>NavValue&lt;boolean | Partial&lt;Record&lt;NavScope, boolean&gt;&gt;&gt;</code></td>
<td><code>true</code> hides from menu and tree. An object hides per scope (<code>menu</code>, <code>tree</code>, <code>breadcrumb</code>, <code>toc</code>). Hidden items stay in the index for active detection</td>
</tr>
<tr>
<td><code>data</code></td>
<td><code>Record&lt;string, unknown&gt;</code></td>
<td>Free-form payload</td>
</tr>
</tbody>
</table>
</div><h3 id="dynamic-values">Dynamic values<a class="header-link" href="#dynamic-values" title="Link to this heading"></a></h3>
<p><code>NavValue&lt;T&gt;</code> is a value <strong>or</strong> a function <code>(ctx: NavContext) =&gt; T</code>. Functions are evaluated lazily inside the render or computed that reads them, so any reactive source they touch (router, vue-i18n locale, permission store) re-renders the consumer without rebuilding the tree.</p>
<p>`}),u(y,{key:2,meta:h[2]}),u(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>translate</code> (from <a href="./configuration"><code>NavConfig</code></a>) is applied to plain strings only, never to the result of a function.</p>
<h2 id="items-from-routes">Items from routes<a class="header-link" href="#items-from-routes" title="Link to this heading"></a></h2>
<p><code>fromRoutes()</code> turns route records into <code>NavItemInput[]</code>. Pass <code>router.options.routes</code> (nested records), not <code>router.getRoutes()</code>.</p>
<p>`}),u(y,{key:3,meta:h[3]}),u(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>routeMetaKey</code></td>
<td><code>'nav'</code></td>
<td>Where nav metadata lives in <code>route.meta</code>. <code>false</code> reads <code>NavItemInput</code> fields straight from <code>route.meta</code></td>
</tr>
<tr>
<td><code>mapMeta</code></td>
<td>—</td>
<td>Free-form mapping <code>(route) =&gt; NavItemInput | undefined</code>. Wins over <code>routeMetaKey</code></td>
</tr>
<tr>
<td><code>include</code></td>
<td><code>'meta'</code></td>
<td><code>'meta'</code>: only routes that have nav meta. <code>'all'</code>: every route</td>
</tr>
</tbody>
</table>
</div><p>Rules applied for each route:</p>
<ul>
<li><code>key</code> is <code>meta.key</code>, else the route <code>name</code>, else the full path.</li>
<li><code>label</code> is <code>meta.label</code>, else <code>route.meta.title</code>, else the route name, else the last path segment.</li>
<li><code>to</code> is <code>{ name }</code> for a named route, otherwise the full path. An explicit <code>to</code> / <code>href</code> in the meta wins.</li>
<li>Dynamic routes (<code>:id</code>) without an explicit <code>to</code> are hidden from menu and tree, but stay in the index for breadcrumbs and active detection.</li>
<li>Routes without nav meta are skipped and their children are hoisted (layout wrappers).</li>
</ul>
<blockquote>
<p>With the default <code>routeMetaKey</code> the data is nested: <code>meta: { nav: { label: '...' } }</code>. With <code>routeMetaKey: false</code> the same fields sit directly in <code>meta</code>: <code>meta: { label: '...' }</code>.</p>
</blockquote>
<h2 id="normalized-nodes">Normalized nodes<a class="header-link" href="#normalized-nodes" title="Link to this heading"></a></h2>
<p><code>normalizeItems(items, options?)</code> returns a <code>NavTree</code>:</p>
<p>`}),u(y,{key:4,meta:h[4]}),u(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Structure (<code>children</code>, <code>depth</code>, <code>path</code>) is computed once. Everything that can be reactive (<code>label</code>, <code>to</code>, <code>href</code>, <code>disabled</code>, <code>badge</code>, hidden state) is a getter that evaluates the source function on every read.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>NavNode</code> member</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>key</code>, <code>kind</code></td>
<td>Identity and <code>'item' | 'group' | 'divider'</code></td>
</tr>
<tr>
<td><code>label</code>, <code>tooltip</code>, <code>ariaLabel</code></td>
<td>Resolved text</td>
</tr>
<tr>
<td><code>badge</code>, <code>badgeVariant</code>, <code>icon</code></td>
<td>Display fields</td>
</tr>
<tr>
<td><code>href</code>, <code>to</code>, <code>disabled</code>, <code>toggleOnly</code></td>
<td>Behaviour</td>
</tr>
<tr>
<td><code>isHidden(scope)</code></td>
<td>Whether the node is hidden in <code>'menu' | 'tree' | 'breadcrumb' | 'toc'</code></td>
</tr>
<tr>
<td><code>data</code></td>
<td>Frozen payload (empty object when none)</td>
</tr>
<tr>
<td><code>depth</code>, <code>parentKey</code>, <code>path</code></td>
<td>Structure. <code>path</code> holds the keys from root to the node (inclusive)</td>
</tr>
<tr>
<td><code>children</code>, <code>raw</code></td>
<td>Child nodes and the original input</td>
</tr>
</tbody>
</table>
</div><h2 id="functions-and-composables">Functions and composables<a class="header-link" href="#functions-and-composables" title="Link to this heading"></a></h2>
<h3 id="normalizeitemsinput-options-navtree"><code>normalizeItems(input, options?): NavTree</code><a class="header-link" href="#normalizeitemsinput-options-navtree" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>translate</code></td>
<td><code>(text, ctx) =&gt; string</code></td>
<td>Applied to plain-string text only</td>
</tr>
<tr>
<td><code>context</code></td>
<td><code>() =&gt; NavContext</code></td>
<td>Context passed to dynamic values. Evaluated on every read</td>
</tr>
</tbody>
</table>
</div><p>A group with <code>children</code> ignores them and prints a development warning.</p>
<h3 id="flattentree-filter-navnode"><code>flatten(tree, filter?): NavNode[]</code><a class="header-link" href="#flattentree-filter-navnode" title="Link to this heading"></a></h3>
<p>Depth-first (pre-order) list of nodes. A node that fails <code>filter</code> is dropped together with its subtree, which is what “visible nodes in a scope” needs:</p>
<p>`}),u(y,{key:5,meta:h[5]}),u(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="usenavitemssource-options-computedrefnavtree"><code>useNavItems(source, options?): ComputedRef&lt;NavTree&gt;</code><a class="header-link" href="#usenavitemssource-options-computedrefnavtree" title="Link to this heading"></a></h3>
<p>Reactive tree from items or routes, wired to the current route and to <code>NavConfig</code>. Call it synchronously during <code>setup()</code>.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>routes</code></td>
<td><code>MaybeRefOrGetter&lt;readonly RouteLike[] | undefined&gt;</code></td>
<td>Used when <code>source</code> resolves to <code>undefined</code></td>
</tr>
<tr>
<td><code>include</code></td>
<td><code>MaybeRefOrGetter&lt;'meta' | 'all' | undefined&gt;</code></td>
<td><code>fromRoutes</code> inclusion rule</td>
</tr>
<tr>
<td><code>config</code></td>
<td><code>MaybeRefOrGetter&lt;NavConfig | undefined&gt;</code></td>
<td>Per-component overrides of <code>NavConfig</code></td>
</tr>
</tbody>
</table>
</div><h3 id="useactivetrailtree-current-options"><code>useActiveTrail(tree, current, options?)</code><a class="header-link" href="#useactivetrailtree-current-options" title="Link to this heading"></a></h3>
<p>Which node is active for the current location, and the chain of its ancestors.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>matchMode</code></td>
<td><code>'exact' | 'prefix' | 'trail'</code></td>
<td><code>'trail'</code></td>
<td>How the current location is matched</td>
</tr>
<tr>
<td><code>activeKey</code></td>
<td><code>MaybeRefOrGetter&lt;NavKey | undefined&gt;</code></td>
<td>—</td>
<td>Manual override. Wins when not <code>undefined</code></td>
</tr>
</tbody>
</table>
</div><div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Return</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>activeKey</code></td>
<td><code>ComputedRef&lt;NavKey | undefined&gt;</code></td>
</tr>
<tr>
<td><code>trail</code></td>
<td>Nodes from root to the active node, hidden ones included (breadcrumb source)</td>
</tr>
<tr>
<td><code>isActive(key)</code></td>
<td>Whether the key is the active node</td>
</tr>
<tr>
<td><code>isAncestor(key)</code></td>
<td>On the trail but not the active node itself</td>
</tr>
</tbody>
</table>
</div><p>Match modes (an exact match always beats a prefix match):</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Mode</th>
<th>Behaviour</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'exact'</code></td>
<td>The item’s location equals the current one</td>
</tr>
<tr>
<td><code>'prefix'</code></td>
<td>An item whose path is a segment prefix of the current path also matches (<code>/users</code> matches <code>/users/12</code>; <code>/</code> is exact-only). The longest path wins</td>
</tr>
<tr>
<td><code>'trail'</code></td>
<td>Same candidates as <code>'prefix'</code>, but the deepest node wins. Its ancestors become the trail</td>
</tr>
</tbody>
</table>
</div><p>Items from <code>fromRoutes</code> are compared by route record, other items by path or <code>{ name }</code>. Hidden nodes take part, so a hidden detail page still activates its section.</p>
<h3 id="useexpandedoptions"><code>useExpanded(options)</code><a class="header-link" href="#useexpandedoptions" title="Link to this heading"></a></h3>
<p>Expanded-state manager, controlled or uncontrolled.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>tree</code></td>
<td><code>MaybeRefOrGetter&lt;NavTree&gt;</code></td>
<td>The tree</td>
</tr>
<tr>
<td><code>expanded</code></td>
<td><code>MaybeRefOrGetter&lt;readonly NavKey[] | undefined&gt;</code></td>
<td>Controlled value. When set, changes are only reported through <code>onChange</code></td>
</tr>
<tr>
<td><code>defaultExpanded</code></td>
<td><code>readonly NavKey[] | 'all'</code></td>
<td>Initial value when uncontrolled</td>
</tr>
<tr>
<td><code>accordion</code></td>
<td><code>MaybeRefOrGetter&lt;boolean | undefined&gt;</code></td>
<td>One open group per level</td>
</tr>
<tr>
<td><code>ensureOpen</code></td>
<td><code>MaybeRefOrGetter&lt;readonly NavKey[] | undefined&gt;</code></td>
<td>Keys that must be open, usually the active trail. Ignores <code>accordion</code></td>
</tr>
<tr>
<td><code>onChange</code></td>
<td><code>(keys: NavKey[]) =&gt; void</code></td>
<td>Called with the new list</td>
</tr>
</tbody>
</table>
</div><div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Return</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>expanded</code></td>
<td><code>ComputedRef&lt;readonly NavKey[]&gt;</code></td>
</tr>
<tr>
<td><code>isExpanded(key)</code></td>
<td>Whether the key is open</td>
</tr>
<tr>
<td><code>toggle(key, force?)</code></td>
<td>Flip, or force open/closed</td>
</tr>
<tr>
<td><code>expand(key)</code> / <code>collapse(key)</code></td>
<td>Open / close one node</td>
</tr>
<tr>
<td><code>expandAll()</code> / <code>collapseAll()</code></td>
<td>Open every parent / close all</td>
</tr>
</tbody>
</table>
</div><h3 id="usecurrentroute-computedrefnavroute-undefined"><code>useCurrentRoute(): ComputedRef&lt;NavRoute | undefined&gt;</code><a class="header-link" href="#usecurrentroute-computedrefnavroute-undefined" title="Link to this heading"></a></h3>
<p>Reactive current route <strong>without importing <code>vue-router</code></strong>. It reads <code>app.config.globalProperties.$route</code>. Without a router the value is <code>undefined</code>. Call it synchronously during <code>setup()</code>.</p>
<h3 id="navlink"><code>NavLink</code><a class="header-link" href="#navlink" title="Link to this heading"></a></h3>
<p>Renders one entry as the right element:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Entry has</th>
<th>Rendered as</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>to</code></td>
<td><code>RouterLink</code> (or <code>NavConfig.linkComponent</code>); a plain <code>&lt;a&gt;</code> when the location has a path and no router link exists</td>
</tr>
<tr>
<td><code>href</code></td>
<td><code>&lt;a href&gt;</code></td>
</tr>
<tr>
<td>neither</td>
<td><code>&lt;button type=&quot;button&quot;&gt;</code> (or the <code>fallback</code> element)</td>
</tr>
</tbody>
</table>
</div><div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
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
<td><code>node</code></td>
<td><code>NavNode</code></td>
<td>required</td>
<td>The node</td>
</tr>
<tr>
<td><code>fallback</code></td>
<td><code>'button' | 'div' | 'span'</code></td>
<td><code>'button'</code></td>
<td>Element for entries that do not navigate</td>
</tr>
<tr>
<td><code>navigate</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td><code>false</code> forces the non-navigating element (for <code>toggleOnly</code> parents)</td>
</tr>
</tbody>
</table>
</div><p><code>disabled</code> nodes never navigate: they render without <code>href</code> / <code>to</code>, with <code>aria-disabled=&quot;true&quot;</code> and <code>tabindex=&quot;-1&quot;</code>.</p>
<h3 id="navicon"><code>NavIcon</code><a class="header-link" href="#navicon" title="Link to this heading"></a></h3>
<p>Renders a <code>NavItemInput.icon</code> value as a bare icon (the caller adds the wrapper):</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Value</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>string</code> made of class-name characters (<code>'bi bi-house'</code>)</td>
<td><code>&lt;i class=&quot;...&quot; aria-hidden=&quot;true&quot;&gt;</code></td>
</tr>
<tr>
<td>any other <code>string</code> (emoji, glyph)</td>
<td><code>&lt;span aria-hidden=&quot;true&quot;&gt;</code> text</td>
</tr>
<tr>
<td><code>Component</code> / <code>VNode</code></td>
<td>Rendered as is</td>
</tr>
</tbody>
</table>
</div><h3 id="loadpopkitconfig"><code>loadPopkit(config)</code><a class="header-link" href="#loadpopkitconfig" title="Link to this heading"></a></h3>
<p>Loads <code>@en32/popkit</code> lazily. Resolves <code>null</code> when it cannot be loaded. See <a href="./configuration#optional-popkit">Configuration</a>.</p>
<h2 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h2>
<p><code>NavKey</code>, <code>NavScope</code>, <code>NavBadgeVariant</code>, <code>NavMatchMode</code>, <code>NavIconValue</code>, <code>NavLocation</code>, <code>NavRouteRecord</code>, <code>NavRoute</code>, <code>NavCurrent</code>, <code>NavContext</code>, <code>NavValue</code>, <code>NavItemInput</code>, <code>NavNode</code>, <code>NavTree</code>, <code>NormalizeOptions</code>, <code>RouteLike</code>, <code>FromRoutesOptions</code>, <code>NavConfig</code>, <code>ResolvedNavConfig</code>, <code>UseActiveTrailOptions</code>, <code>UseActiveTrailReturn</code>, <code>UseExpandedOptions</code>, <code>UseExpandedReturn</code>, <code>UseNavItemsOptions</code>, <code>PopkitLike</code>, <code>PopoverLike</code>, <code>ListNavigationLike</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./configuration">Configuration</a></li>
<li><a href="./tree">Tree</a>, <a href="./sidebar-menu">Sidebar menu</a>, <a href="./breadcrumb">Breadcrumb</a>, <a href="./toc">Table of contents</a></li>
</ul>
`})]),null])}}),x={title:`Navigation Model`,description:`Every navtree component reads the same data model. You author NavItemInput objects (or route records), the library normalizes them into a tree of NavNode, and the components render that tree.`},S=b;export{S as default,x as meta};