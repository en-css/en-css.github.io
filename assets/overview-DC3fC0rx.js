import{A as e,At as t,Et as n,F as r,Ft as i,H as a,R as o,W as s,_t as c,at as l,et as u,it as d,l as f,n as p,nt as m,q as h,r as g,s as _,tt as v}from"./components-BJME9hSd.js";import{t as y}from"./index-BxFZJYIM.js";import{t as b}from"./ENCombobox-DaGSbEqH.js";var x={class:`en-cluster`,style:{"--en-gap":`var(--en-space-3)`}},S=[`disabled`],C={0:{component:s({__name:`0`,setup(s){let l=n(null),u=n(!1);return(n,s)=>(d(),o(e,null,[r(`div`,x,[a(t(b),{modelValue:l.value,"onUpdate:modelValue":s[0]||=e=>l.value=e,options:[`Jakarta`,`Bandung`,`Surabaya`],placeholder:`City`,"aria-label":`City`},null,8,[`modelValue`]),r(`button`,{class:`en-btn en-btn--primary`,disabled:!l.value,onClick:s[1]||=e=>u.value=!0},`Continue`,8,S)]),a(t(y),{modelValue:u.value,"onUpdate:modelValue":s[2]||=e=>u.value=e,title:`Confirm city`,variant:`primary`},{default:c(()=>[r(`p`,null,`You picked `+i(l.value)+`.`,1)]),_:1},8,[`modelValue`])],64))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> city</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">city</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span><span class="shiki-token-string-expression">'Jakarta'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Bandung'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Surabaya'</span><span class="shiki-foreground">]</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"City"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"City"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> :disabled</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"!city"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Continue&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Confirm city"</span><span class="shiki-token-function"> variant</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"primary"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>You picked {{ city }}.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:0,lang:`vue`,injectKind:null,editable:!1,source:null}},w=[{id:`encss-vue`,text:`EN.CSS Vue`,level:1},{id:`principles`,text:`Principles`,level:2},{id:`what-is-in-the-box`,text:`What is in the box`,level:2},{id:`status`,text:`Status`,level:2},{id:`where-to-go-next`,text:`Where to go next`,level:2}],T=[{id:`encss-vue`,text:`EN.CSS Vue`,level:1,children:[{id:`principles`,text:`Principles`,level:2,children:[]},{id:`what-is-in-the-box`,text:`What is in the box`,level:2,children:[]},{id:`status`,text:`Status`,level:2,children:[]},{id:`where-to-go-next`,text:`Where to go next`,level:2,children:[]}]}],E={css:[],js:[],cleanup:[]},D=s({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>h(`div`,{class:n},[e.meta.isLive?h(g,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:h(p,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),O=s({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/overview.md`,setup(){l(`vlm-toc`,{flat:w,tree:T}),v(()=>f(w,T)),m(()=>f([],[]));let e=_(E);return l(`vlm-inject`,e),v(()=>e.mount()),u(()=>e.beforeUnmount()),m(()=>e.unmounted()),()=>h(`div`,{class:`vlm-page`},[h(`div`,{class:`vlm-content`},[h(`div`,{class:`vlm-md`,innerHTML:`<h1 id="encss-vue">EN.CSS Vue<a class="header-link" href="#encss-vue" title="Link to this heading"></a></h1>
<p><code>@en32/en-css-vue</code> is a set of Vue 3 components for the <strong>EN.CSS</strong> framework. Each component is a thin binding: it renders the real <code>en-*</code> markup and the ARIA attribute contract that the EN.CSS stylesheets read, and adds the behavior that CSS cannot provide (keyboard navigation, focus handling, state, remote data).</p>
<p>`}),h(D,{key:0,meta:C[0]}),h(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="principles">Principles<a class="header-link" href="#principles" title="Link to this heading"></a></h2>
<ul>
<li><strong>EN.CSS does the looks.</strong> The components ship no component CSS (the only exceptions are small additions, such as the combobox clear button). Load the EN.CSS stylesheets each component lists under its requirements.</li>
<li><strong>State lives in attributes.</strong> <code>aria-expanded</code>, <code>aria-selected</code>, <code>aria-current</code>, <code>aria-disabled</code>, <code>data-active</code> and friends drive the styles, so the markup stays valid and inspectable.</li>
<li><strong>Native first.</strong> The modal is a real <code>&lt;dialog&gt;</code>; tabs follow the WAI-ARIA tabs pattern; the combobox follows the ARIA 1.2 combobox pattern.</li>
<li><strong>Controlled and uncontrolled.</strong> Where it makes sense, a component works with <code>v-model</code> or keeps its own state.</li>
<li><strong>Headless escape hatches.</strong> Behavior is also available as composables (<code>useModal</code>, <code>useCombobox</code>, <code>useTabs</code>).</li>
<li><strong>TypeScript first.</strong> Every prop, option and payload is typed and exported.</li>
</ul>
<h2 id="what-is-in-the-box">What is in the box<a class="header-link" href="#what-is-in-the-box" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Module</th>
<th>Components</th>
<th>Page</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>tabs</code></td>
<td><code>ENTabs</code>, <code>ENTab</code>, <code>ENTabPanels</code>, <code>useTabs</code></td>
<td><a href="./components/tabs">Tabs</a></td>
</tr>
<tr>
<td><code>combobox</code></td>
<td><code>ENCombobox</code>, <code>useCombobox</code></td>
<td><a href="./components/combobox">Combobox</a></td>
</tr>
<tr>
<td><code>modal</code></td>
<td><code>ENModal</code>, <code>useModal</code></td>
<td><a href="./components/modal">Modal</a></td>
</tr>
<tr>
<td><code>layout</code></td>
<td><code>ENGrid</code>, <code>ENStack</code>, <code>ENCluster</code> and others (21 in total)</td>
<td><a href="./components/layout/index">Layout</a></td>
</tr>
<tr>
<td><code>navtree</code></td>
<td><code>ENBreadcrumb</code>, <code>ENToc</code>, <code>ENTree</code>, <code>ENSidebarMenu</code></td>
<td><a href="./components/navtree/index">Navtree</a></td>
</tr>
<tr>
<td><code>registry</code></td>
<td><code>register</code>, <code>createRegistry</code></td>
<td><a href="./global-registration">Global registration</a></td>
</tr>
</tbody>
</table>
</div><h2 id="status">Status<a class="header-link" href="#status" title="Link to this heading"></a></h2>
<p>The library is <strong>experimental</strong> and has not been officially released (<code>0.0.0-dev</code>). API changes are not versioned and are not treated as breaking changes yet, so pin the exact revision you use.</p>
<h2 id="where-to-go-next">Where to go next<a class="header-link" href="#where-to-go-next" title="Link to this heading"></a></h2>
<ol>
<li><a href="./installation">Installation</a>: packages, stylesheets and entry points.</li>
<li><a href="./quickstart">Quickstart</a>: your first components.</li>
<li><a href="./global-registration">Global registration</a>: register components once instead of importing them everywhere.</li>
<li><a href="./conventions">Conventions</a>: rules shared by every component.</li>
</ol>
`})]),null])}}),k={title:`EN.CSS Vue`,description:`@en32/en-css-vue is a set of Vue 3 components for the EN.CSS framework. Each component is a thin binding: it renders the real en-* markup and the ARIA attribute contract that the EN.CSS stylesheets re...`},A=O;export{A as default,k as meta};