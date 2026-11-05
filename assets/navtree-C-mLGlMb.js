import{At as e,Et as t,H as n,R as r,W as i,at as a,et as o,it as s,l as c,n as l,nt as u,q as d,r as f,s as p,tt as m}from"./components-BJME9hSd.js";import{i as h,n as g}from"./navtree-B-kmX2Y5.js";var _={class:`en-cluster en-cluster--align-start`,style:{"--en-gap":`var(--en-space-6)`}},v={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "en-css-src/en.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "en-css-src/components/extended/components-toc.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "en-css-src/components/extended/components-tree.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "en-css-src/components/extended/components-sidebar-menu.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:0,lang:`css`,injectKind:null,editable:!1,source:null},1:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">npm</span><span class="shiki-token-string"> install</span><span class="shiki-token-string"> @en32/en-css-vue</span><span class="shiki-token-string"> vue</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`bash`,key:1,lang:`bash`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCSSNav } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span><span class="shiki-token-comment">          // built bundle</span></span>
<span class="line"><span class="shiki-token-comment">// import { ENCSSNav } from '@en32/en-css-vue/navtree/ts'    // TypeScript source (Bun + Vite)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">app</span><span class="shiki-token-function">.use</span><span class="shiki-foreground">(ENCSSNav</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { </span><span class="shiki-token-function">translate</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> (key) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> i18n</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">global</span><span class="shiki-token-function">.t</span><span class="shiki-foreground">(key) })</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:2,lang:`ts`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENTree</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:3,lang:`ts`,injectKind:null,editable:!1,source:null},4:{component:i({__name:`4`,setup(i){let a=[{key:`home`,label:`Home`,icon:`bi bi-house`},{key:`master`,label:`Master data`,toggleOnly:!0,children:[{key:`users`,label:`Users`,badge:12},{key:`roles`,label:`Roles`}]}],o=t(`users`);return(t,i)=>(s(),r(`div`,_,[n(e(h),{"active-key":o.value,"onUpdate:activeKey":i[0]||=e=>o.value=e,items:a,"aria-label":`Main`},null,8,[`active-key`]),n(e(g),{"active-key":o.value,"onUpdate:activeKey":i[1]||=e=>o.value=e,items:a,"default-expanded":`all`,"aria-label":`Sections`},null,8,[`active-key`])]))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSidebarMenu</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENTree</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> icon</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bi bi-house'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'master'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Master data'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    toggleOnly</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> badge</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 12</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'roles'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Roles'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> active</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'users'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster en-cluster--align-start"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-6)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENSidebarMenu</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">active-key</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">active</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Main"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">active-key</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">active</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> default-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"all"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Sections"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:4,lang:`vue`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> routes</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    path</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '/master'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    name</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'master'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    meta</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { nav</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Master data'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> icon</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bi bi-database'</span><span class="shiki-foreground"> } }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">      { path</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> name</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> component</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> Users</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> meta</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { nav</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Users'</span><span class="shiki-foreground"> } } }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:5,lang:`ts`,injectKind:null,editable:!1,source:null},6:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENSidebarMenu</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">routes</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">router</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">options</span><span class="shiki-foreground">.routes</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Main"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">routes</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">router</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">options</span><span class="shiki-foreground">.routes</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Pages"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENToc</span><span class="shiki-token-function"> source</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"dom"</span><span class="shiki-token-function"> container</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"main"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:6,lang:`vue`,injectKind:null,editable:!1,source:null},7:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { register } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/registry'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { navRegistry } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">register</span><span class="shiki-token-function">.merge</span><span class="shiki-foreground">([navRegistry])</span></span>
<span class="line"><span class="shiki-token-constant">app</span><span class="shiki-token-function">.use</span><span class="shiki-foreground">(register)</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:7,lang:`ts`,injectKind:null,editable:!1,source:null}},y=[{id:`navtree`,text:`Navtree`,level:1},{id:`loading-the-stylesheets`,text:`Loading the stylesheets`,level:3},{id:`icons`,text:`Icons`,level:3},{id:`highlights`,text:`Highlights`,level:2},{id:`install`,text:`Install`,level:2},{id:`quick-start`,text:`Quick start`,level:2},{id:`with-vue-router`,text:`With Vue Router`,level:3},{id:`registry`,text:`Registry`,level:2},{id:`documentation-map`,text:`Documentation map`,level:2},{id:`notes`,text:`Notes`,level:2}],b=[{id:`navtree`,text:`Navtree`,level:1,children:[{id:`loading-the-stylesheets`,text:`Loading the stylesheets`,level:3,children:[]},{id:`icons`,text:`Icons`,level:3,children:[]},{id:`highlights`,text:`Highlights`,level:2,children:[]},{id:`install`,text:`Install`,level:2,children:[]},{id:`quick-start`,text:`Quick start`,level:2,children:[{id:`with-vue-router`,text:`With Vue Router`,level:3,children:[]}]},{id:`registry`,text:`Registry`,level:2,children:[]},{id:`documentation-map`,text:`Documentation map`,level:2,children:[]},{id:`notes`,text:`Notes`,level:2,children:[]}]}],x={css:[],js:[],cleanup:[]},S=i({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>d(`div`,{class:n},[e.meta.isLive?d(f,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:d(l,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),C=i({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/navtree/index.md`,setup(){a(`vlm-toc`,{flat:y,tree:b}),m(()=>c(y,b)),u(()=>c([],[]));let e=p(x);return a(`vlm-inject`,e),m(()=>e.mount()),o(()=>e.beforeUnmount()),u(()=>e.unmounted()),()=>d(`div`,{class:`vlm-page`},[d(`div`,{class:`vlm-content`},[d(`div`,{class:`vlm-md`,innerHTML:`<h1 id="navtree">Navtree<a class="header-link" href="#navtree" title="Link to this heading"></a></h1>
<p>Vue 3 navigation components for EN.CSS, built on <strong>one shared navigation model</strong>. A single array of items (or your Vue Router routes) can drive a breadcrumb, a table of contents, a tree and a sidebar menu.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Component</th>
<th>Purpose</th>
<th>CSS (from <code>en-css-src</code>)</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="./breadcrumb"><code>ENBreadcrumb</code></a></td>
<td>Breadcrumb trail, built from the current route or from items</td>
<td><code>basic/components-breadcrumb.css</code> (+ <code>basic/components-dropdown.css</code> for <code>ellipsisMode=&quot;menu&quot;</code>)</td>
</tr>
<tr>
<td><a href="./toc"><code>ENToc</code></a></td>
<td>“On this page” table of contents with scroll-spy</td>
<td><code>extended/components-toc.css</code></td>
</tr>
<tr>
<td><a href="./tree"><code>ENTree</code></a></td>
<td>Hierarchical tree: <code>tree</code> mode (ARIA, keyboard, selection, checkboxes) or <code>disclosure</code> mode (native <code>&lt;details&gt;</code>)</td>
<td><code>extended/components-tree.css</code></td>
</tr>
<tr>
<td><a href="./sidebar-menu"><code>ENSidebarMenu</code></a></td>
<td>Sidebar menu with groups, badges, accordion and a collapsed icon rail with flyouts</td>
<td><code>extended/components-sidebar-menu.css</code></td>
</tr>
</tbody>
</table>
</div><p>The components emit only <code>en-*</code> classes and <strong>ship no CSS</strong>. Load the stylesheets listed above.</p>
<h3 id="loading-the-stylesheets">Loading the stylesheets<a class="header-link" href="#loading-the-stylesheets" title="Link to this heading"></a></h3>
<p>EN.CSS comes in two entry points, and they cover the navtree components differently:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Entry</th>
<th>Breadcrumb</th>
<th>Dropdown (ellipsis menu)</th>
<th>TOC</th>
<th>Tree</th>
<th>Sidebar menu</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>en.css</code> (basic set)</td>
<td>Included</td>
<td>Included</td>
<td>Not included</td>
<td>Not included</td>
<td>Not included</td>
</tr>
<tr>
<td><code>en-extra.css</code> (full set)</td>
<td>Included</td>
<td>Included</td>
<td>Included</td>
<td>Included</td>
<td>Included</td>
</tr>
</tbody>
</table>
</div><p>With <code>en.css</code>, add the extended files one by one:</p>
<p>`}),d(S,{key:0,meta:v[0]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>All component rules live in the <code>en-components</code> cascade layer, so CSS you write without <code>@layer</code> always wins over them.</p>
<h3 id="icons">Icons<a class="header-link" href="#icons" title="Link to this heading"></a></h3>
<p>The examples use <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a> class names (<code>'bi bi-house'</code>), so the page needs the Bootstrap Icons stylesheet. Any other icon font works the same way, and emoji, components and VNodes are accepted too (see <a href="./nav-model"><code>NavIconValue</code></a>).</p>
<h2 id="highlights">Highlights<a class="header-link" href="#highlights" title="Link to this heading"></a></h2>
<ul>
<li><strong>One data model</strong> (<code>NavItemInput</code>) fed by a plain array or by Vue Router routes (<code>fromRoutes</code>).</li>
<li><strong>i18n friendly</strong>: labels, <code>to</code> and <code>href</code> may be functions, so a locale change re-renders without extra code.</li>
<li><strong>No runtime dependency on <code>vue-router</code></strong>. <code>RouterLink</code> is used when it is registered.</li>
<li><strong>Optional popkit</strong>: <code>@en32/popkit</code> is loaded lazily for sidebar flyouts and the breadcrumb ellipsis menu. Without it, the components fall back to CSS-only behaviour.</li>
<li><strong>Accessible by default</strong>: landmarks, <code>aria-current</code>, WAI-ARIA tree keyboard model.</li>
</ul>
<h2 id="install">Install<a class="header-link" href="#install" title="Link to this heading"></a></h2>
<p>`}),d(S,{key:1,meta:v[1]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),d(S,{key:2,meta:v[2]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The plugin registers <code>ENBreadcrumb</code>, <code>ENToc</code>, <code>ENTree</code> and <code>ENSidebarMenu</code> globally and provides the app-wide <a href="./configuration"><code>NavConfig</code></a>.</p>
<p>You can also import the components directly, which is what the examples in this documentation do:</p>
<p>`}),d(S,{key:3,meta:v[3]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Entry</th>
<th>Points to</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@en32/en-css-vue/navtree</code></td>
<td>Built bundle (<code>dist/bundle/navtree/navtree.js</code>)</td>
</tr>
<tr>
<td><code>@en32/en-css-vue/navtree/ts</code></td>
<td>TypeScript source, for runtimes that read <code>.ts</code> directly</td>
</tr>
</tbody>
</table>
</div><p>Optional peer dependency: <code>@en32/popkit</code> (see <a href="./configuration#optional-popkit">Configuration</a>).</p>
<h2 id="quick-start">Quick start<a class="header-link" href="#quick-start" title="Link to this heading"></a></h2>
<p>The same <code>items</code> array feeds a tree and a sidebar. Click an entry to change the active item.</p>
<p>`}),d(S,{key:4,meta:v[4]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<blockquote>
<p>Entries in these demos have no <code>to</code> / <code>href</code>, so they render as buttons and do not leave the documentation page. In a real application give them a <code>to</code> (see below).</p>
</blockquote>
<h3 id="with-vue-router">With Vue Router<a class="header-link" href="#with-vue-router" title="Link to this heading"></a></h3>
<p>Pass route records and put the navigation data in <code>meta.nav</code>:</p>
<p>`}),d(S,{key:5,meta:v[5]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),d(S,{key:6,meta:v[6]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The active item follows the current route and its ancestors open automatically.</p>
<h2 id="registry">Registry<a class="header-link" href="#registry" title="Link to this heading"></a></h2>
<p>Named variants with baked-in props (props passed at the call site still win):</p>
<p>`}),d(S,{key:7,meta:v[7]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Extra names provided by <code>navRegistry</code>:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Name</th>
<th>Base component</th>
<th>Baked-in props</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ENTreeLines</code></td>
<td><code>ENTree</code></td>
<td><code>{ lines: true }</code></td>
</tr>
<tr>
<td><code>ENTreeDisclosure</code></td>
<td><code>ENTree</code></td>
<td><code>{ mode: 'disclosure' }</code></td>
</tr>
<tr>
<td><code>ENBreadcrumbChevron</code></td>
<td><code>ENBreadcrumb</code></td>
<td><code>{ separator: 'chevron' }</code></td>
</tr>
</tbody>
</table>
</div><h2 id="documentation-map">Documentation map<a class="header-link" href="#documentation-map" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Page</th>
<th>Contents</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="./nav-model">Navigation model</a></td>
<td><code>NavItemInput</code>, <code>NavNode</code>, <code>fromRoutes</code>, active trail, expanded state and the other shared helpers</td>
</tr>
<tr>
<td><a href="./configuration">Configuration</a></td>
<td><code>ENCSSNav</code> plugin, <code>NavConfig</code>, <code>provideNavConfig</code>, popkit</td>
</tr>
<tr>
<td><a href="./breadcrumb">Breadcrumb</a></td>
<td><code>ENBreadcrumb</code>, <code>useEllipsisMenu</code></td>
</tr>
<tr>
<td><a href="./toc">Table of contents</a></td>
<td><code>ENToc</code>, <code>useToc</code>, <code>useScrollSpy</code>, <code>slugify</code></td>
</tr>
<tr>
<td><a href="./tree">Tree</a></td>
<td><code>ENTree</code>, <code>useTreeKeys</code></td>
</tr>
<tr>
<td><a href="./sidebar-menu">Sidebar menu</a></td>
<td><code>ENSidebarMenu</code>, <code>useFlyout</code></td>
</tr>
</tbody>
</table>
</div><h2 id="notes">Notes<a class="header-link" href="#notes" title="Link to this heading"></a></h2>
<ul>
<li>The library is <strong>experimental</strong> and has not been released officially. APIs may change without a version bump.</li>
<li>Keys must be unique within one tree. Duplicate keys print a development warning and only the first node is indexed.</li>
<li>Development warnings are printed once per message and only in development builds of Vue.</li>
</ul>
`})]),null])}}),w={title:`Navtree`,description:`Vue 3 navigation components for EN.CSS, built on one shared navigation model. A single array of items (or your Vue Router routes) can drive a breadcrumb, a table of contents, a tree and a sidebar menu...`},T=C;export{T as default,w as meta};