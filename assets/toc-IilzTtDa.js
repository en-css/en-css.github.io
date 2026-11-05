import{A as e,At as t,B as n,Et as r,F as i,Ft as a,H as o,R as s,V as c,W as l,at as u,et as d,it as f,l as p,n as m,nt as h,q as g,r as _,s as v,tt as y}from"./components-BJME9hSd.js";import{t as b}from"./navtree-B-kmX2Y5.js";var x={class:`en-cluster en-cluster--align-start`,style:{"--en-gap":`var(--en-space-6)`}},S=l({__name:`1`,setup(e){let r=[{key:`install`,label:`Install`,href:`#toc-demo-install`},{key:`usage`,label:`Usage`,href:`#toc-demo-usage`,children:[{key:`options`,label:`Options`,href:`#toc-demo-options`}]},{key:`api`,label:`API`,href:`#toc-demo-api`}];return(e,i)=>(f(),s(`div`,x,[o(t(b),{items:r}),i[0]||=n(`<div><h4 id="toc-demo-install">Install</h4><p>Static items point at in-page ids.</p><h4 id="toc-demo-usage">Usage</h4><p>Nested entries are described with <code>children</code>.</p><h5 id="toc-demo-options">Options</h5><p>The scroll-spy follows the section in view.</p><h4 id="toc-demo-api">API</h4><p>Each target needs a matching <code>id</code>.</p></div>`,1)]))}}),C={class:`en-cluster en-cluster--align-start`,style:{"--en-gap":`var(--en-space-6)`}},w={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENToc</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useToc</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useScrollSpy</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> slugify } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:S,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENToc</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'install'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Install'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#toc-demo-install'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'usage'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Usage'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#toc-demo-usage'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'options'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Options'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#toc-demo-options'</span><span class="shiki-foreground"> }]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'api'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'API'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#toc-demo-api'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster en-cluster--align-start"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-6)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENToc</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"toc-demo-install"</span><span class="shiki-foreground">>Install&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Static items point at in-page ids.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"toc-demo-usage"</span><span class="shiki-foreground">>Usage&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Nested entries are described with &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>children&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h5</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"toc-demo-options"</span><span class="shiki-foreground">>Options&#x3C;/</span><span class="shiki-token-string-expression">h5</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>The scroll-spy follows the section in view.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"toc-demo-api"</span><span class="shiki-foreground">>API&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Each target needs a matching &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>id&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:l({__name:`2`,setup(e){return(e,r)=>(f(),s(`div`,C,[o(t(b),{source:`dom`,container:`#toc-dom-demo`,selector:`h4, h5`}),r[0]||=n(`<div id="toc-dom-demo"><h4 id="toc-dom-intro">Introduction</h4><p>Headings need an <code>id</code> so the links stay durable.</p><h5 id="toc-dom-req">Requirements</h5><p>An <code>h5</code> goes under the previous <code>h4</code>.</p><h4 id="toc-dom-usage">Usage</h4><p>Add <code>data-toc-ignore</code> to skip a heading.</p></div>`,1)]))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENToc } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster en-cluster--align-start"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-6)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENToc</span><span class="shiki-token-function"> source</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"dom"</span><span class="shiki-token-function"> container</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#toc-dom-demo"</span><span class="shiki-token-function"> selector</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"h4, h5"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"toc-dom-demo"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"toc-dom-intro"</span><span class="shiki-foreground">>Introduction&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Headings need an &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>id&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> so the links stay durable.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h5</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"toc-dom-req"</span><span class="shiki-foreground">>Requirements&#x3C;/</span><span class="shiki-token-string-expression">h5</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>An &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>h5&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> goes under the previous &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>h4&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"toc-dom-usage"</span><span class="shiki-foreground">>Usage&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Add &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>data-toc-ignore&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> to skip a heading.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENToc</span><span class="shiki-token-function"> source</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"dom"</span><span class="shiki-token-function"> sticky</span><span class="shiki-token-function"> rail</span><span class="shiki-token-function"> progress</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:3,lang:`vue`,injectKind:null,editable:!1,source:null},4:{component:l({__name:`4`,setup(n){let l=r(`b`);return(n,r)=>(f(),s(e,null,[o(t(b),{"active-key":l.value,"onUpdate:activeKey":r[0]||=e=>l.value=e,spy:!1,items:[{key:`a`,label:`Section A`,href:`#toc-ctrl-a`},{key:`b`,label:`Section B`,href:`#toc-ctrl-b`},{key:`c`,label:`Section C`,href:`#toc-ctrl-c`}]},null,8,[`active-key`]),i(`p`,null,[r[1]||=c(`Active: `,-1),i(`code`,null,a(l.value),1)])],64))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENToc } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> active</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'b'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENToc</span></span>
<span class="line"><span class="shiki-token-function">    v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">active-key</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">active</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">spy</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'a'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Section A'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#toc-ctrl-a'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'b'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Section B'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#toc-ctrl-b'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'c'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Section C'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#toc-ctrl-c'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">  /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Active: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ active }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:4,lang:`vue`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">.docs-toc</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  --en-toc-top</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 5</span><span class="shiki-token-keyword">rem</span><span class="shiki-foreground">; </span><span class="shiki-token-comment">/* below a 4rem sticky header */</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:5,lang:`css`,injectKind:null,editable:!1,source:null},6:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENToc</span><span class="shiki-token-function"> source</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"dom"</span><span class="shiki-token-function"> watch-dom</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:6,lang:`vue`,injectKind:null,editable:!1,source:null},7:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENToc</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;template #title>Contents&#x3C;/template></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;template #label="{ node, active, depth }"></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;span :class="{ 'en-font-semibold': active }">{{ node.label }}&#x3C;/span></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/template></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;template #empty>No sections&#x3C;/template></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ENToc</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:7,lang:`vue`,injectKind:null,editable:!1,source:null},8:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toc [en-toc--sticky] [en-toc--rail] [en-toc--spy]"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toc__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-foreground">>On this page&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ol</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toc__list"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toc__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toc__link"</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#install"</span><span class="shiki-token-function"> aria-current</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"location"</span><span class="shiki-foreground">>Install&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">ol</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toc__list"</span><span class="shiki-foreground">>…&#x3C;/</span><span class="shiki-token-string-expression">ol</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ol</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:8,lang:`html`,injectKind:null,editable:!1,source:null}},T=[{id:`table-of-contents`,text:`Table of Contents`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`from-the-page-headings`,text:`From the page headings`,level:2},{id:`sticky-rail-and-progress`,text:`Sticky, rail and progress`,level:2},{id:`scroll-spy-modes`,text:`Scroll-spy modes`,level:2},{id:`setting-the-offset`,text:`Setting the offset`,level:3},{id:`the-active-state`,text:`The active state`,level:2},{id:`language-switches`,text:`Language switches`,level:2},{id:`custom-rendering`,text:`Custom rendering`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`events`,text:`Events`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`exposed-methods`,text:`Exposed methods`,level:3},{id:`item-fields-used`,text:`Item fields used`,level:3},{id:`markup`,text:`Markup`,level:3},{id:`composable-usetocoptions`,text:"Composable: `useToc(options?)`",level:3},{id:`composable-usescrollspyoptions`,text:"Composable: `useScrollSpy(options)`",level:3},{id:`slugifytext`,text:"`slugify(text)`",level:3},{id:`types`,text:`Types`,level:3},{id:`development-warnings`,text:`Development warnings`,level:3},{id:`see-also`,text:`See also`,level:2}],E=[{id:`table-of-contents`,text:`Table of Contents`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`from-the-page-headings`,text:`From the page headings`,level:2,children:[]},{id:`sticky-rail-and-progress`,text:`Sticky, rail and progress`,level:2,children:[]},{id:`scroll-spy-modes`,text:`Scroll-spy modes`,level:2,children:[{id:`setting-the-offset`,text:`Setting the offset`,level:3,children:[]}]},{id:`the-active-state`,text:`The active state`,level:2,children:[]},{id:`language-switches`,text:`Language switches`,level:2,children:[]},{id:`custom-rendering`,text:`Custom rendering`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`events`,text:`Events`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`exposed-methods`,text:`Exposed methods`,level:3,children:[]},{id:`item-fields-used`,text:`Item fields used`,level:3,children:[]},{id:`markup`,text:`Markup`,level:3,children:[]},{id:`composable-usetocoptions`,text:"Composable: `useToc(options?)`",level:3,children:[]},{id:`composable-usescrollspyoptions`,text:"Composable: `useScrollSpy(options)`",level:3,children:[]},{id:`slugifytext`,text:"`slugify(text)`",level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]},{id:`development-warnings`,text:`Development warnings`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],D={css:[],js:[],cleanup:[]},O=l({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>g(`div`,{class:n},[e.meta.isLive?g(_,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:g(m,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),k=l({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/navtree/toc.md`,setup(){u(`vlm-toc`,{flat:T,tree:E}),y(()=>p(T,E)),h(()=>p([],[]));let e=v(D);return u(`vlm-inject`,e),y(()=>e.mount()),d(()=>e.beforeUnmount()),h(()=>e.unmounted()),()=>g(`div`,{class:`vlm-page`},[g(`div`,{class:`vlm-content`},[g(`div`,{class:`vlm-md`,innerHTML:`<h1 id="table-of-contents">Table of Contents<a class="header-link" href="#table-of-contents" title="Link to this heading"></a></h1>
<p><code>ENToc</code> renders an “On this page” table of contents with scroll-spy. Entries come from static items or from the headings found in the page.</p>
<p>Requires <code>extended/components-toc.css</code> from <code>en-css-src</code>.</p>
<p>`}),g(O,{key:0,meta:w[0]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>Static items. Targets are <code>href: '#id'</code>, <code>to: '#id'</code> or <code>to: { hash: 'id' }</code>.</p>
<p>`}),g(O,{key:1,meta:w[1]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="from-the-page-headings">From the page headings<a class="header-link" href="#from-the-page-headings" title="Link to this heading"></a></h2>
<p>With <code>source=&quot;dom&quot;</code> the TOC scans a container for headings:</p>
<p>`}),g(O,{key:2,meta:w[2]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Nesting follows the heading level. A heading without an <code>id</code> gets a generated slug and a development warning, because generated ids change when the text changes. The default <code>selector</code> is <code>'h2, h3'</code> and the default <code>container</code> is <code>'main'</code>.</p>
<h2 id="sticky-rail-and-progress">Sticky, rail and progress<a class="header-link" href="#sticky-rail-and-progress" title="Link to this heading"></a></h2>
<p>`}),g(O,{key:3,meta:w[3]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li><code>sticky</code> sticks the TOC below the top edge, offset by <code>--en-toc-top</code> (default <code>var(--en-space-4)</code>). It scrolls on its own when it is taller than the viewport. If the page has a sticky header, raise <code>--en-toc-top</code> and give headings <code>scroll-margin-top</code> so a click does not hide them under it.</li>
<li><code>rail</code> adds <code>en-toc--rail</code>: a vertical rail with a marker on the active entry.</li>
<li><code>progress</code> renders <code>.en-toc__progress</code>, a reading-progress bar driven by the <strong>page</strong> scroll. It must be the first child of a sticky TOC and only appears in browsers that support scroll-driven animations (<code>animation-timeline</code>); elsewhere it is simply not shown.</li>
</ul>
<h2 id="scroll-spy-modes">Scroll-spy modes<a class="header-link" href="#scroll-spy-modes" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>spy</code></th>
<th>Behaviour</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'js'</code> (default)</td>
<td><code>IntersectionObserver</code> sets <code>aria-current=&quot;location&quot;</code> on the current link</td>
</tr>
<tr>
<td><code>'css'</code></td>
<td>Only adds <code>en-toc--spy</code>. Browsers that support <code>:target-current</code> highlight the entry, others show nothing</td>
</tr>
<tr>
<td><code>false</code></td>
<td>Nothing is followed. Control it with <code>v-model:active-key</code></td>
</tr>
</tbody>
</table>
</div><p>`}),g(O,{key:4,meta:w[4]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="setting-the-offset">Setting the offset<a class="header-link" href="#setting-the-offset" title="Link to this heading"></a></h3>
<p>`}),g(O,{key:5,meta:w[5]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="the-active-state">The active state<a class="header-link" href="#the-active-state" title="Link to this heading"></a></h2>
<p>The CSS only reads one attribute: the active link carries <code>aria-current=&quot;location&quot;</code> (or <code>&quot;true&quot;</code>). With <code>spy=&quot;js&quot;</code> the component sets it for you. With <code>spy=&quot;css&quot;</code> it adds <code>en-toc--spy</code> and leaves the highlighting to the browser, using <code>scroll-target-group</code> and <code>:target-current</code>, which are not Baseline yet, so treat that mode as progressive enhancement. In forced-colors mode the active link is underlined.</p>
<h2 id="language-switches">Language switches<a class="header-link" href="#language-switches" title="Link to this heading"></a></h2>
<p>When headings are rewritten (for example after changing the locale), let the TOC follow:</p>
<p>`}),g(O,{key:6,meta:w[6]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>watch-dom</code> rescans when the container content changes (<code>MutationObserver</code>). For content added late (for example by a <code>router-view</code>), call the exposed <code>refresh()</code> method.</p>
<h2 id="custom-rendering">Custom rendering<a class="header-link" href="#custom-rendering" title="Link to this heading"></a></h2>
<p>`}),g(O,{key:7,meta:w[7]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>items</code></td>
<td><code>NavItemInput[]</code></td>
<td>—</td>
<td>Entries for <code>source=&quot;items&quot;</code></td>
</tr>
<tr>
<td><code>source</code></td>
<td><code>'items' | 'dom'</code></td>
<td><code>'items'</code></td>
<td>Where entries come from</td>
</tr>
<tr>
<td><code>container</code></td>
<td><code>string | HTMLElement</code></td>
<td><code>'main'</code></td>
<td>Mode <code>dom</code>: CSS selector or element to scan</td>
</tr>
<tr>
<td><code>selector</code></td>
<td><code>string</code></td>
<td><code>'h2, h3'</code></td>
<td>Mode <code>dom</code>: which elements become entries</td>
</tr>
<tr>
<td><code>watchDom</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Rescan when the container content changes (<code>MutationObserver</code>)</td>
</tr>
<tr>
<td><code>maxDepth</code></td>
<td><code>number</code></td>
<td><code>3</code></td>
<td>Nesting depth of the list</td>
</tr>
<tr>
<td><code>spy</code></td>
<td><code>'js' | 'css' | false</code></td>
<td><code>'js'</code></td>
<td>How the section in view is followed</td>
</tr>
<tr>
<td><code>rootMargin</code></td>
<td><code>string</code></td>
<td><code>'0px 0px -70% 0px'</code></td>
<td><code>IntersectionObserver</code> root margin (the reading band is the top 30%)</td>
</tr>
<tr>
<td><code>sticky</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Adds <code>en-toc--sticky</code></td>
</tr>
<tr>
<td><code>rail</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Adds <code>en-toc--rail</code></td>
</tr>
<tr>
<td><code>progress</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Renders <code>.en-toc__progress</code> (needs a sticky TOC and scroll-driven animations)</td>
</tr>
<tr>
<td><code>title</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td><code>'On this page'</code></td>
<td>Title text. Also available as the <code>title</code> slot</td>
</tr>
<tr>
<td><code>titleAs</code></td>
<td><code>string</code></td>
<td><code>'h2'</code></td>
<td>Tag of the title</td>
</tr>
<tr>
<td><code>activeKey</code></td>
<td><code>NavKey</code></td>
<td>followed from scrolling</td>
<td>Current entry. <code>v-model:active-key</code></td>
</tr>
<tr>
<td><code>as</code></td>
<td><code>string</code></td>
<td><code>'nav'</code></td>
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
</div><h3 id="events">Events<a class="header-link" href="#events" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Event</th>
<th>Payload</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>update:activeKey</code></td>
<td><code>NavKey</code></td>
<td>An entry was clicked</td>
</tr>
<tr>
<td><code>select</code></td>
<td><code>{ item: NavNode, event: MouseEvent }</code></td>
<td>An entry link was clicked</td>
</tr>
</tbody>
</table>
</div><h3 id="slots">Slots<a class="header-link" href="#slots" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Slot</th>
<th>Bindings</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>title</code></td>
<td>—</td>
<td>Replaces the title text</td>
</tr>
<tr>
<td><code>item</code></td>
<td><code>{ node, active, depth }</code></td>
<td>Replaces the content of a link</td>
</tr>
<tr>
<td><code>label</code></td>
<td><code>{ node, active, depth }</code></td>
<td>Replaces only the label inside the link</td>
</tr>
<tr>
<td><code>empty</code></td>
<td>—</td>
<td>Shown when there are no entries (nothing is rendered otherwise)</td>
</tr>
</tbody>
</table>
</div><h3 id="exposed-methods">Exposed methods<a class="header-link" href="#exposed-methods" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>refresh()</code></td>
<td>Rescan (mode <code>dom</code>) or look the targets up again (mode <code>items</code>). Use after content was added late, for example by a <code>router-view</code></td>
</tr>
</tbody>
</table>
</div><h3 id="item-fields-used">Item fields used<a class="header-link" href="#item-fields-used" title="Link to this heading"></a></h3>
<p><code>key</code>, <code>label</code> / <code>title</code>, <code>href</code> or <code>to</code> (an in-page hash), <code>children</code>, <code>hidden</code> (<code>true</code> or <code>{ toc: true }</code>).</p>
<h3 id="markup">Markup<a class="header-link" href="#markup" title="Link to this heading"></a></h3>
<p>`}),g(O,{key:8,meta:w[8]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="composable-usetocoptions">Composable: <code>useToc(options?)</code><a class="header-link" href="#composable-usetocoptions" title="Link to this heading"></a></h3>
<p>Builds a nested item list from the headings of a container. Client only: scanning starts in <code>onMounted</code> and observers are removed on unmount. Call it synchronously during <code>setup()</code>.</p>
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
<td><code>container</code></td>
<td><code>MaybeRefOrGetter&lt;string | HTMLElement | null | undefined&gt;</code></td>
<td><code>'main'</code></td>
<td><code>null</code> switches scanning off</td>
</tr>
<tr>
<td><code>selector</code></td>
<td><code>MaybeRefOrGetter&lt;string | undefined&gt;</code></td>
<td><code>'h2, h3'</code></td>
<td>Elements that become entries</td>
</tr>
<tr>
<td><code>maxDepth</code></td>
<td><code>MaybeRefOrGetter&lt;number | undefined&gt;</code></td>
<td><code>3</code></td>
<td>Nesting depth (not heading level)</td>
</tr>
<tr>
<td><code>rootMargin</code></td>
<td><code>MaybeRefOrGetter&lt;string | undefined&gt;</code></td>
<td><code>'0px 0px -70% 0px'</code></td>
<td>Reading band</td>
</tr>
<tr>
<td><code>watchDom</code></td>
<td><code>MaybeRefOrGetter&lt;boolean | undefined&gt;</code></td>
<td><code>false</code></td>
<td>Rescan on DOM changes</td>
</tr>
<tr>
<td><code>spy</code></td>
<td><code>MaybeRefOrGetter&lt;boolean | undefined&gt;</code></td>
<td><code>true</code></td>
<td>Follow the scroll position</td>
</tr>
</tbody>
</table>
</div><div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Return</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>items</code></td>
<td><code>ComputedRef&lt;NavItemInput[]&gt;</code></td>
<td>Nested items (<code>key</code> and <code>href</code> are the heading id). Empty until mounted and on the server</td>
</tr>
<tr>
<td><code>activeKey</code></td>
<td><code>ComputedRef&lt;NavKey | undefined&gt;</code></td>
<td>Listed item for the current heading. A heading deeper than <code>maxDepth</code> maps to its nearest listed ancestor</td>
</tr>
<tr>
<td><code>refresh()</code></td>
<td><code>() =&gt; void</code></td>
<td>Scan again</td>
</tr>
<tr>
<td><code>select(key)</code></td>
<td><code>(key: NavKey) =&gt; void</code></td>
<td>Force the active item (for example on click)</td>
</tr>
</tbody>
</table>
</div><p>Headings with <code>data-toc-ignore</code> and empty headings are skipped. Labels are functions, so a configured <code>translate</code> never touches heading text.</p>
<h3 id="composable-usescrollspyoptions">Composable: <code>useScrollSpy(options)</code><a class="header-link" href="#composable-usescrollspyoptions" title="Link to this heading"></a></h3>
<p>Which of a list of in-page targets is current while scrolling. The active target is the last one (in document order) whose top edge is at or above the bottom of the reading band; near the page bottom the last target wins. Client only.</p>
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
<td><code>ids</code></td>
<td><code>MaybeRefOrGetter&lt;readonly string[]&gt;</code></td>
<td>Element ids to follow. Missing elements are skipped until <code>refresh()</code></td>
</tr>
<tr>
<td><code>rootMargin</code></td>
<td><code>MaybeRefOrGetter&lt;string | undefined&gt;</code></td>
<td>Default <code>'0px 0px -70% 0px'</code></td>
</tr>
<tr>
<td><code>enabled</code></td>
<td><code>MaybeRefOrGetter&lt;boolean | undefined&gt;</code></td>
<td><code>false</code> disconnects everything. Default <code>true</code></td>
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
<td><code>activeId</code></td>
<td><code>Ref&lt;string | undefined&gt;</code>: last target that reached the band</td>
</tr>
<tr>
<td><code>refresh()</code></td>
<td>Look the elements up again and recompute</td>
</tr>
<tr>
<td><code>set(id)</code></td>
<td>Force the active id. The next scroll event recomputes it</td>
</tr>
</tbody>
</table>
</div><h3 id="slugifytext"><code>slugify(text)</code><a class="header-link" href="#slugifytext" title="Link to this heading"></a></h3>
<p>Lower-case, accent-free, <code>-</code>-separated; keeps letters and digits of any script.</p>
<h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>TocProps</code>, <code>TocSource</code>, <code>TocSpy</code>, <code>TocSelectPayload</code>, <code>TocItemSlotProps</code>, <code>UseTocOptions</code>, <code>UseTocReturn</code>, <code>UseScrollSpyOptions</code>, <code>UseScrollSpyReturn</code>.</p>
<h3 id="development-warnings">Development warnings<a class="header-link" href="#development-warnings" title="Link to this heading"></a></h3>
<ul>
<li>A heading without <code>id</code> (a slug is generated).</li>
<li><code>container</code> not found (the TOC stays empty until <code>refresh()</code>).</li>
</ul>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./nav-model">Navigation model</a></li>
</ul>
`})]),null])}}),A={title:`Table of Contents`,description:`ENToc renders an “On this page” table of contents with scroll-spy. Entries come from static items or from the headings found in the page.`},j=k;export{j as default,A as meta};