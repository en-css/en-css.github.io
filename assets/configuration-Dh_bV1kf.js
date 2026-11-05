import{W as e,at as t,et as n,l as r,n as i,nt as a,q as o,r as s,s as c,tt as l}from"./components-BJME9hSd.js";var u={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { createApp } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCSSNav } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">createApp</span><span class="shiki-foreground">(App)</span></span>
<span class="line"><span class="shiki-token-function">  .use</span><span class="shiki-foreground">(ENCSSNav</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-function">    translate</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> (key) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> i18n</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">global</span><span class="shiki-token-function">.t</span><span class="shiki-foreground">(key)</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    flyout</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'popkit'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  })</span></span>
<span class="line"><span class="shiki-token-function">  .mount</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'#app'</span><span class="shiki-foreground">)</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { provideNavConfig } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">provideNavConfig</span><span class="shiki-foreground">({ flyout</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'popkit'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> flyoutAppendTo</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'body'</span><span class="shiki-foreground"> })</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-constant">app</span><span class="shiki-token-function">.use</span><span class="shiki-foreground">(ENCSSNav</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { </span><span class="shiki-token-function">translate</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> (key) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> i18n</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">global</span><span class="shiki-token-function">.t</span><span class="shiki-foreground">(key) })</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:2,lang:`ts`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'nav.users'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-comment">              // translated by \`translate\`</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'roles'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-function"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> t</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'nav.roles'</span><span class="shiki-foreground">) }</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-comment">     // used as is</span></span>
<span class="line"><span class="shiki-foreground">]</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:3,lang:`ts`,injectKind:null,editable:!1,source:null},4:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { NuxtLink } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '#components'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">app</span><span class="shiki-token-function">.use</span><span class="shiki-foreground">(ENCSSNav</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { linkComponent</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> NuxtLink })</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:4,lang:`ts`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">// Popkit consumed from source (Bun / Vite)</span></span>
<span class="line"><span class="shiki-token-constant">app</span><span class="shiki-token-function">.use</span><span class="shiki-foreground">(ENCSSNav</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { </span><span class="shiki-token-function">popkit</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-token-keyword"> import</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'@en32/popkit/ts'</span><span class="shiki-foreground">) })</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Or pass an already loaded module</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-constant"> *</span><span class="shiki-token-keyword"> as</span><span class="shiki-foreground"> popkit </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/popkit'</span></span>
<span class="line"><span class="shiki-token-constant">app</span><span class="shiki-token-function">.use</span><span class="shiki-foreground">(ENCSSNav</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { popkit })</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:5,lang:`ts`,injectKind:null,editable:!1,source:null}},d=[{id:`configuration`,text:`Configuration`,level:1},{id:`plugin`,text:`Plugin`,level:2},{id:`navconfig`,text:"`NavConfig`",level:2},{id:`scoped-configuration`,text:`Scoped configuration`,level:2},{id:`i18n`,text:`i18n`,level:2},{id:`custom-link-component`,text:`Custom link component`,level:2},{id:`optional-popkit`,text:`Optional: popkit`,level:2},{id:`api-summary`,text:`API summary`,level:2},{id:`see-also`,text:`See also`,level:2}],f=[{id:`configuration`,text:`Configuration`,level:1,children:[{id:`plugin`,text:`Plugin`,level:2,children:[]},{id:`navconfig`,text:"`NavConfig`",level:2,children:[]},{id:`scoped-configuration`,text:`Scoped configuration`,level:2,children:[]},{id:`i18n`,text:`i18n`,level:2,children:[]},{id:`custom-link-component`,text:`Custom link component`,level:2,children:[]},{id:`optional-popkit`,text:`Optional: popkit`,level:2,children:[]},{id:`api-summary`,text:`API summary`,level:2,children:[]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],p={css:[],js:[],cleanup:[]},m=e({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>o(`div`,{class:n},[e.meta.isLive?o(s,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:o(i,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),h=e({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/navtree/configuration.md`,setup(){t(`vlm-toc`,{flat:d,tree:f}),l(()=>r(d,f)),a(()=>r([],[]));let e=c(p);return t(`vlm-inject`,e),l(()=>e.mount()),n(()=>e.beforeUnmount()),a(()=>e.unmounted()),()=>o(`div`,{class:`vlm-page`},[o(`div`,{class:`vlm-content`},[o(`div`,{class:`vlm-md`,innerHTML:`<h1 id="configuration">Configuration<a class="header-link" href="#configuration" title="Link to this heading"></a></h1>
<p>Navtree has one configuration object, <code>NavConfig</code>. It controls i18n, how route metadata is read, which link component is used and how the collapsed sidebar behaves.</p>
<h2 id="plugin">Plugin<a class="header-link" href="#plugin" title="Link to this heading"></a></h2>
<p>`}),o(m,{key:0,meta:u[0]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>ENCSSNav</code> does two things:</p>
<ol>
<li>Registers <code>ENBreadcrumb</code>, <code>ENToc</code>, <code>ENTree</code> and <code>ENSidebarMenu</code> globally.</li>
<li>Provides the app-wide <code>NavConfig</code>.</li>
</ol>
<p>Using the plugin is optional. Without it, import the components directly and configure through props or <code>provideNavConfig()</code>.</p>
<h2 id="navconfig"><code>NavConfig</code><a class="header-link" href="#navconfig" title="Link to this heading"></a></h2>
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
<td><code>routeMetaKey</code></td>
<td><code>string | false</code></td>
<td><code>'nav'</code></td>
<td>Where <code>fromRoutes</code> reads nav metadata. <code>false</code> reads <code>NavItemInput</code> fields directly from <code>route.meta</code></td>
</tr>
<tr>
<td><code>mapMeta</code></td>
<td><code>(route: RouteLike) =&gt; NavItemInput | undefined</code></td>
<td>—</td>
<td>Custom route-to-item mapping. Wins over <code>routeMetaKey</code></td>
</tr>
<tr>
<td><code>translate</code></td>
<td><code>(text: string, ctx: NavContext) =&gt; string</code></td>
<td>—</td>
<td>Applied to plain-string text. Never applied to the result of a function value</td>
</tr>
<tr>
<td><code>linkComponent</code></td>
<td><code>Component | string</code></td>
<td><code>RouterLink</code></td>
<td>Replaces the link component (for example <code>NuxtLink</code>). A string is resolved as a registered component or an element name</td>
</tr>
<tr>
<td><code>flyout</code></td>
<td><code>'css' | 'popkit'</code></td>
<td><code>'css'</code></td>
<td>Collapsed sidebar mode</td>
</tr>
<tr>
<td><code>flyoutAppendTo</code></td>
<td><code>HTMLElement | 'body' | null</code></td>
<td><code>null</code></td>
<td>Portal target for popkit flyouts</td>
</tr>
<tr>
<td><code>popkit</code></td>
<td><code>PopkitLike | (() =&gt; Promise&lt;PopkitLike&gt;)</code></td>
<td><code>import('@en32/popkit')</code></td>
<td>Popkit module or loader. Use <code>() =&gt; import('@en32/popkit/ts')</code> when consuming popkit from source</td>
</tr>
</tbody>
</table>
</div><p><strong>Priority:</strong> component props &gt; nearest <code>provideNavConfig()</code> &gt; plugin &gt; defaults. Options set to <code>undefined</code> never override a lower layer.</p>
<h2 id="scoped-configuration">Scoped configuration<a class="header-link" href="#scoped-configuration" title="Link to this heading"></a></h2>
<p><code>provideNavConfig()</code> merges new options over whatever the parent (or the plugin) provided, so only the changed options are needed:</p>
<p>`}),o(m,{key:1,meta:u[1]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Providing a plain object with <code>provide(NavConfigKey, config)</code> also works, but it <strong>replaces</strong> the parent config instead of merging.</p>
<p>To read the effective config in your own component, use <code>useNavConfig(overrides?)</code>. It returns a <code>ComputedRef&lt;ResolvedNavConfig&gt;</code>.</p>
<h2 id="i18n">i18n<a class="header-link" href="#i18n" title="Link to this heading"></a></h2>
<p>Plain strings go through <code>translate</code>; functions are left untouched:</p>
<p>`}),o(m,{key:2,meta:u[2]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),o(m,{key:3,meta:u[3]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Use function values when the text depends on more than the key, for example <code>label: ({ route }) =&gt; t('nav.userN', { id: route?.params.id })</code>.</p>
<h2 id="custom-link-component">Custom link component<a class="header-link" href="#custom-link-component" title="Link to this heading"></a></h2>
<p>`}),o(m,{key:4,meta:u[4]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Without a link component and without a registered <code>RouterLink</code>, a <code>to</code> with a path renders a plain <code>&lt;a href&gt;</code>. A <code>to</code> that needs the router (name or params only) renders a non-link element and prints a development warning.</p>
<h2 id="optional-popkit">Optional: popkit<a class="header-link" href="#optional-popkit" title="Link to this heading"></a></h2>
<p><code>@en32/popkit</code> is an optional peer dependency. It enables:</p>
<ul>
<li><code>flyout=&quot;popkit&quot;</code> on <a href="./sidebar-menu#collapsed-rail"><code>ENSidebarMenu</code></a></li>
<li><code>ellipsis-mode=&quot;menu&quot;</code> on <a href="./breadcrumb#long-trails"><code>ENBreadcrumb</code></a></li>
</ul>
<p>It is imported lazily, only when one of those features is requested, and only on the client. If it cannot be loaded, a development warning is printed once and the components use their CSS-only fallback.</p>
<p>`}),o(m,{key:5,meta:u[5]}),o(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>A loader function is called once and its result is cached for the page lifetime.</p>
<h2 id="api-summary">API summary<a class="header-link" href="#api-summary" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Export</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ENCSSNav</code></td>
<td>Vue plugin: registers components and provides <code>NavConfig</code></td>
</tr>
<tr>
<td><code>navRegistry</code></td>
<td>Registry with the four components and the <code>ENTreeLines</code>, <code>ENTreeDisclosure</code>, <code>ENBreadcrumbChevron</code> variants</td>
</tr>
<tr>
<td><code>NavConfigKey</code></td>
<td>Injection key of the config</td>
</tr>
<tr>
<td><code>provideNavConfig(config)</code></td>
<td>Provide (merged) config to a subtree</td>
</tr>
<tr>
<td><code>useNavConfig(overrides?)</code></td>
<td>Effective config as a <code>ComputedRef</code></td>
</tr>
<tr>
<td><code>loadPopkit(config)</code></td>
<td>Lazy popkit loader</td>
</tr>
</tbody>
</table>
</div><h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./nav-model">Navigation model</a></li>
<li><a href="./sidebar-menu">Sidebar menu</a>, <a href="./breadcrumb">Breadcrumb</a></li>
</ul>
`})]),null])}}),g={title:`Configuration`,description:`Navtree has one configuration object, NavConfig. It controls i18n, how route metadata is read, which link component is used and how the collapsed sidebar behaves.`},_=h;export{_ as default,g as meta};