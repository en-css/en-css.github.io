import{A as e,At as t,Et as n,F as r,Ft as i,H as a,I as o,R as s,V as c,W as l,at as u,et as d,it as f,l as p,n as m,nt as h,q as g,r as _,s as v,tt as y}from"./components-BJME9hSd.js";import{n as b}from"./navtree-B-kmX2Y5.js";var x=l({__name:`1`,setup(e){let r=[{key:`guide`,label:`Guide`,children:[{key:`intro`,label:`Introduction`},{key:`install`,label:`Install`}]},{key:`api`,label:`API`,badge:`new`,badgeVariant:`success`}],i=n(`intro`);return(e,n)=>(f(),o(t(b),{"active-key":i.value,"onUpdate:activeKey":n[0]||=e=>i.value=e,items:r,"aria-label":`Documentation`},null,8,[`active-key`]))}}),S=l({__name:`4`,setup(e){let r=[{key:`guide`,label:`Guide`,children:[{key:`intro`,label:`Introduction`},{key:`install`,label:`Install`}]},{key:`api`,label:`API`}],i=n(`install`);return(e,n)=>(f(),o(t(b),{"active-key":i.value,"onUpdate:activeKey":n[0]||=e=>i.value=e,mode:`disclosure`,items:r,"aria-label":`Documentation`},null,8,[`active-key`]))}}),C=l({__name:`5`,setup(o){let l=[{key:`a`,label:`Folder A`,children:[{key:`a1`,label:`File A1`},{key:`a2`,label:`File A2`}]},{key:`b`,label:`Folder B`,children:[{key:`b1`,label:`File B1`}]}],u=n([`a`]),d=n(`a1`);return(n,o)=>(f(),s(e,null,[a(t(b),{expanded:u.value,"onUpdate:expanded":o[0]||=e=>u.value=e,"active-key":d.value,"onUpdate:activeKey":o[1]||=e=>d.value=e,items:l,"aria-label":`Files`},null,8,[`expanded`,`active-key`]),r(`p`,null,[o[2]||=c(`Open: `,-1),r(`code`,null,i(u.value.join(`, `)||`—`),1),o[3]||=c(` · Active: `,-1),r(`code`,null,i(d.value),1)])],64))}}),w={class:`en-cluster en-cluster--align-start`,style:{"--en-gap":`var(--en-space-8)`}},T=l({__name:`6`,setup(e){let o=[{key:`perm`,label:`Permissions`,children:[{key:`read`,label:`Read`},{key:`write`,label:`Write`},{key:`admin`,label:`Admin`}]}],l=n([`read`]),u=n([]);return(e,n)=>(f(),s(`div`,w,[r(`div`,null,[n[3]||=r(`p`,null,[r(`strong`,null,`Checkable`)],-1),a(t(b),{checked:l.value,"onUpdate:checked":n[0]||=e=>l.value=e,checkable:``,"default-expanded":`all`,items:o,"aria-label":`Permissions`},null,8,[`checked`]),r(`p`,null,[n[2]||=c(`Checked: `,-1),r(`code`,null,i(l.value.join(`, `)||`—`),1)])]),r(`div`,null,[n[5]||=r(`p`,null,[r(`strong`,null,`Multiple selection`)],-1),a(t(b),{selected:u.value,"onUpdate:selected":n[1]||=e=>u.value=e,"selection-mode":`multiple`,"default-expanded":`all`,items:o,"aria-label":`Pick items`},null,8,[`selected`]),r(`p`,null,[n[4]||=c(`Selected: `,-1),r(`code`,null,i(u.value.join(`, `)||`—`),1)])])]))}}),E={class:`en-cluster en-cluster--align-start`,style:{"--en-gap":`var(--en-space-6)`}},D={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENTree</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useTreeKeys } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENTree</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'guide'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Guide'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'intro'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Introduction'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'install'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Install'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'api'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'API'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> badge</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'new'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> badgeVariant</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'success'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> active</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'intro'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">active-key</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">active</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Documentation"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">{ key</span><span class="shiki-token-punctuation">:</span><span class="shiki-token-string-expression"> 'intro'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-punctuation">:</span><span class="shiki-token-string-expression"> 'Introduction'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> to</span><span class="shiki-token-punctuation">:</span><span class="shiki-token-string-expression"> '/guide/intro'</span><span class="shiki-foreground"> }</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:2,lang:`ts`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">routes</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">router</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">options</span><span class="shiki-foreground">.routes</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Pages"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:3,lang:`vue`,injectKind:null,editable:!1,source:null},4:{component:S,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENTree</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'guide'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Guide'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'intro'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Introduction'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'install'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Install'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'api'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'API'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> active</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'install'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">active-key</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">active</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> mode</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"disclosure"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Documentation"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:4,lang:`vue`,injectKind:null,editable:!1,source:null},5:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENTree</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'a'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Folder A'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'a1'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'File A1'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'a2'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'File A2'</span><span class="shiki-foreground"> }] }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'b'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Folder B'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'b1'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'File B1'</span><span class="shiki-foreground"> }] }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> open</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-constant">string</span><span class="shiki-foreground">[]>([</span><span class="shiki-token-string-expression">'a'</span><span class="shiki-foreground">])</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> current</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'a1'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">open</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">active-key</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">current</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Files"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Open: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ open.join(', ') || '—' }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> · Active: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ current }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:5,lang:`vue`,injectKind:null,editable:!1,source:null},6:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENTree</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'perm'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Permissions'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'read'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Read'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'write'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Write'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'admin'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Admin'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> checked</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-constant">string</span><span class="shiki-foreground">[]>([</span><span class="shiki-token-string-expression">'read'</span><span class="shiki-foreground">])</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> selected</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-constant">string</span><span class="shiki-foreground">[]>([])</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster en-cluster--align-start"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-8)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Checkable&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">checked</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">checked</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> checkable</span><span class="shiki-token-function"> default-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"all"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Permissions"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Checked: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ checked.join(', ') || '—' }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Multiple selection&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">selected</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">selected</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> selection-mode</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"multiple"</span><span class="shiki-token-function"> default-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"all"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Pick items"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Selected: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ selected.join(', ') || '—' }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:6,lang:`vue`,injectKind:null,editable:!1,source:null},7:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> render</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lazy"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">bigItems</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Catalog"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:7,lang:`vue`,injectKind:null,editable:!1,source:null},8:{component:l({__name:`8`,setup(e){let n=[{key:`src`,label:`src`,children:[{key:`main`,label:`main.ts`},{key:`app`,label:`App.vue`}]},{key:`pkg`,label:`package.json`}];return(e,r)=>(f(),s(`div`,E,[a(t(b),{variant:`chevron`,"default-expanded":`all`,items:n,"aria-label":`Chevron`}),a(t(b),{variant:`arrow`,"default-expanded":`all`,items:n,"aria-label":`Arrow`}),a(t(b),{variant:`plusminus`,lines:``,compact:``,size:`sm`,"default-expanded":`all`,items:n,"aria-label":`Plus minus`})]))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENTree</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'src'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'src'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'main'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'main.ts'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'app'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'App.vue'</span><span class="shiki-foreground"> }] }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'pkg'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'package.json'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster en-cluster--align-start"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-6)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> variant</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"chevron"</span><span class="shiki-token-function"> default-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"all"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Chevron"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> variant</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"arrow"</span><span class="shiki-token-function"> default-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"all"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Arrow"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> variant</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"plusminus"</span><span class="shiki-token-function"> lines</span><span class="shiki-token-function"> compact</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sm"</span><span class="shiki-token-function"> default-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"all"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Plus minus"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:8,lang:`vue`,injectKind:null,editable:!1,source:null},9:{component:l({__name:`9`,setup(i){let o=[{key:`a`,label:`A`,children:[{key:`a1`,label:`A1`}]},{key:`b`,label:`B`,children:[{key:`b1`,label:`B1`}]}],c=n(null);return(n,i)=>(f(),s(e,null,[r(`button`,{onClick:i[0]||=e=>c.value?.expandAll()},`Expand all`),r(`button`,{onClick:i[1]||=e=>c.value?.collapseAll()},`Collapse all`),a(t(b),{ref_key:`tree`,ref:c,items:o,"aria-label":`Methods demo`},null,512)],64))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENTree</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'a'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'A'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'a1'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'A1'</span><span class="shiki-foreground"> }] }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'b'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'B'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'b1'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'B1'</span><span class="shiki-foreground"> }] }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> tree</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">InstanceType</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-keyword">typeof</span><span class="shiki-foreground"> ENTree> </span><span class="shiki-token-keyword">|</span><span class="shiki-token-constant"> null</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tree?.expandAll()"</span><span class="shiki-foreground">>Expand all&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tree?.collapseAll()"</span><span class="shiki-foreground">>Collapse all&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENTree</span><span class="shiki-token-function"> ref</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tree"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Methods demo"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:9,lang:`vue`,injectKind:null,editable:!1,source:null},10:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree en-tree--chevron"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tree"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__item"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"treeitem"</span><span class="shiki-token-function"> aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-token-function"> aria-level</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span></span>
<span class="line"><span class="shiki-token-function">      aria-setsize</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-token-function"> aria-posinset</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-token-function"> tabindex</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__label"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__expander"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__checkbox"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> tabindex</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"-1"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">> </span><span class="shiki-token-comment">&#x3C;!-- checkable --></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__icon"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__text"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-foreground">>Guide&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__badge"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__children"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__item"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"treeitem"</span><span class="shiki-token-function"> aria-current</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"page"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__leaf en-tree__leaf--active"</span><span class="shiki-token-function"> tabindex</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"-1"</span><span class="shiki-foreground">>…&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree en-tree--chevron"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__node"</span><span class="shiki-token-function"> open</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__label"</span><span class="shiki-foreground">>…&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__children"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__item"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tree__leaf en-tree__leaf--active"</span><span class="shiki-token-function"> aria-current</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"page"</span><span class="shiki-foreground">>…&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">useTreeKeys</span><span class="shiki-foreground">(options: UseTreeKeysOptions): UseTreeKeysReturn</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:12,lang:`ts`,injectKind:null,editable:!1,source:null}},O=[{id:`tree`,text:`Tree`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`source-from-routes`,text:`Source from routes`,level:2},{id:`disclosure-mode`,text:`Disclosure mode`,level:2},{id:`controlled-state`,text:`Controlled state`,level:2},{id:`selection-and-checkboxes`,text:`Selection and checkboxes`,level:2},{id:`parents-that-have-a-link`,text:`Parents that have a link`,level:2},{id:`large-trees`,text:`Large trees`,level:2},{id:`appearance`,text:`Appearance`,level:2},{id:`methods`,text:`Methods`,level:2},{id:`styling`,text:`Styling`,level:2},{id:`keyboard-mode-tree`,text:"Keyboard (mode `tree`)",level:2},{id:`context-menus`,text:`Context menus`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`mode-support`,text:`Mode support`,level:3},{id:`events`,text:`Events`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`exposed-methods-template-ref`,text:`Exposed methods (template ref)`,level:3},{id:`item-fields-used`,text:`Item fields used`,level:3},{id:`markup`,text:`Markup`,level:3},{id:`mode-tree`,text:"Mode `tree`",level:4},{id:`mode-disclosure`,text:"Mode `disclosure`",level:4},{id:`composable-usetreekeys`,text:"Composable: `useTreeKeys`",level:3},{id:`types`,text:`Types`,level:3},{id:`development-warnings`,text:`Development warnings`,level:3},{id:`see-also`,text:`See also`,level:2}],k=[{id:`tree`,text:`Tree`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`source-from-routes`,text:`Source from routes`,level:2,children:[]},{id:`disclosure-mode`,text:`Disclosure mode`,level:2,children:[]},{id:`controlled-state`,text:`Controlled state`,level:2,children:[]},{id:`selection-and-checkboxes`,text:`Selection and checkboxes`,level:2,children:[]},{id:`parents-that-have-a-link`,text:`Parents that have a link`,level:2,children:[]},{id:`large-trees`,text:`Large trees`,level:2,children:[]},{id:`appearance`,text:`Appearance`,level:2,children:[]},{id:`methods`,text:`Methods`,level:2,children:[]},{id:`styling`,text:`Styling`,level:2,children:[]},{id:`keyboard-mode-tree`,text:"Keyboard (mode `tree`)",level:2,children:[]},{id:`context-menus`,text:`Context menus`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`mode-support`,text:`Mode support`,level:3,children:[]},{id:`events`,text:`Events`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`exposed-methods-template-ref`,text:`Exposed methods (template ref)`,level:3,children:[]},{id:`item-fields-used`,text:`Item fields used`,level:3,children:[]},{id:`markup`,text:`Markup`,level:3,children:[{id:`mode-tree`,text:"Mode `tree`",level:4,children:[]},{id:`mode-disclosure`,text:"Mode `disclosure`",level:4,children:[]}]},{id:`composable-usetreekeys`,text:"Composable: `useTreeKeys`",level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]},{id:`development-warnings`,text:`Development warnings`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],A={css:[],js:[],cleanup:[]},j=l({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>g(`div`,{class:n},[e.meta.isLive?g(_,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:g(m,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),M=l({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/navtree/tree.md`,setup(){u(`vlm-toc`,{flat:O,tree:k}),y(()=>p(O,k)),h(()=>p([],[]));let e=v(A);return u(`vlm-inject`,e),y(()=>e.mount()),d(()=>e.beforeUnmount()),h(()=>e.unmounted()),()=>g(`div`,{class:`vlm-page`},[g(`div`,{class:`vlm-content`},[g(`div`,{class:`vlm-md`,innerHTML:`<h1 id="tree">Tree<a class="header-link" href="#tree" title="Link to this heading"></a></h1>
<p><code>ENTree</code> is a hierarchical navigation tree with two implementations, chosen by <code>mode</code>:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Mode</th>
<th>Based on</th>
<th>Good for</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'tree'</code> (default)</td>
<td><code>role=&quot;tree&quot;</code>, roving tabindex, WAI-ARIA keyboard model</td>
<td>Application UI: selection, checkboxes, large lists</td>
</tr>
<tr>
<td><code>'disclosure'</code></td>
<td>native <code>&lt;details&gt;</code> / <code>&lt;summary&gt;</code></td>
<td>Document navigation: simple, opens and closes without JavaScript, SSR friendly</td>
</tr>
</tbody>
</table>
</div><p>Requires <code>extended/components-tree.css</code> from <code>en-css-src</code>.</p>
<p>`}),g(j,{key:0,meta:D[0]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>A <code>role=&quot;tree&quot;</code> needs an accessible name: pass <code>aria-label</code> or <code>aria-labelledby</code> (a development warning appears otherwise).</p>
<p>`}),g(j,{key:1,meta:D[1]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>In an application, give items a <code>to</code> so they navigate:</p>
<p>`}),g(j,{key:2,meta:D[2]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="source-from-routes">Source from routes<a class="header-link" href="#source-from-routes" title="Link to this heading"></a></h2>
<p>`}),g(j,{key:3,meta:D[3]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The active item follows the current route, and its ancestors open automatically (<code>auto-expand-active</code>).</p>
<h2 id="disclosure-mode">Disclosure mode<a class="header-link" href="#disclosure-mode" title="Link to this heading"></a></h2>
<p>`}),g(j,{key:4,meta:D[4]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>selection-mode</code>, <code>checkable</code>, <code>typeahead</code> and <code>parent-link</code> are not supported here and are ignored with a development warning. A <code>to</code> on a parent is ignored too, because an interactive <code>&lt;a&gt;</code> cannot live inside a <code>&lt;summary&gt;</code>.</p>
<h2 id="controlled-state">Controlled state<a class="header-link" href="#controlled-state" title="Link to this heading"></a></h2>
<p>`}),g(j,{key:5,meta:D[5]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Omit <code>expanded</code> to let the tree manage it. Use <code>default-expanded</code> (<code>NavKey[]</code> or <code>'all'</code>) for the initial state.</p>
<h2 id="selection-and-checkboxes">Selection and checkboxes<a class="header-link" href="#selection-and-checkboxes" title="Link to this heading"></a></h2>
<p>Available in mode <code>tree</code>.</p>
<p>`}),g(j,{key:6,meta:D[6]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Checking a parent cascades to its children and a partly checked parent is <code>mixed</code>. Use <code>check-strictly</code> to turn the cascade off. <code>checkable</code> cannot be combined with <code>selection-mode</code>.</p>
<h2 id="parents-that-have-a-link">Parents that have a link<a class="header-link" href="#parents-that-have-a-link" title="Link to this heading"></a></h2>
<p>A parent with <code>to</code> behaves according to <code>parent-link</code>:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Value</th>
<th>Click on label / Enter</th>
<th>Click on expander</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'toggle'</code> (default)</td>
<td>Opens/closes; <code>to</code> is ignored</td>
<td>Opens/closes</td>
</tr>
<tr>
<td><code>'link'</code></td>
<td>Navigates only</td>
<td>Opens/closes</td>
</tr>
<tr>
<td><code>'both'</code></td>
<td>Navigates and opens/closes</td>
<td>Opens/closes</td>
</tr>
</tbody>
</table>
</div><p><code>toggleOnly: true</code> on an item always wins.</p>
<h2 id="large-trees">Large trees<a class="header-link" href="#large-trees" title="Link to this heading"></a></h2>
<p><code>render=&quot;lazy&quot;</code> renders a group only after it was opened once.</p>
<p>`}),g(j,{key:7,meta:D[7]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="appearance">Appearance<a class="header-link" href="#appearance" title="Link to this heading"></a></h2>
<p>`}),g(j,{key:8,meta:D[8]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="methods">Methods<a class="header-link" href="#methods" title="Link to this heading"></a></h2>
<p>`}),g(j,{key:9,meta:D[9]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="styling">Styling<a class="header-link" href="#styling" title="Link to this heading"></a></h2>
<ul>
<li>The expander arrow is drawn by the variant class (<code>en-tree--chevron</code>, <code>--arrow</code> or <code>--plusminus</code>). <code>ENTree</code> always adds one (default <code>chevron</code>), so you only need to care about this when writing the markup by hand.</li>
<li>A leaf also holds an empty <code>en-tree__expander</code>, used as a spacer so the text lines up with its siblings.</li>
<li>State lives in ARIA attributes: <code>aria-expanded</code>, <code>aria-current=&quot;page&quot;</code>, <code>aria-selected=&quot;true&quot;</code> and <code>aria-disabled=&quot;true&quot;</code>.</li>
<li><code>en-tree__text--wrap</code> lets a long label wrap instead of staying on one line.</li>
<li>Badge variants available in the stylesheet are <code>primary</code>, <code>success</code>, <code>warning</code>, <code>danger</code> and <code>info</code>. <code>subtle</code> is part of <code>NavBadgeVariant</code> but has no tree style, so it renders as the default badge.</li>
</ul>
<h2 id="keyboard-mode-tree">Keyboard (mode <code>tree</code>)<a class="header-link" href="#keyboard-mode-tree" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Key</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>↓ / ↑</td>
<td>Next / previous visible item</td>
</tr>
<tr>
<td>→</td>
<td>Closed parent: open. Open parent: first child</td>
</tr>
<tr>
<td>←</td>
<td>Open parent: close. Otherwise: go to the parent</td>
</tr>
<tr>
<td>Home / End</td>
<td>First / last visible item</td>
</tr>
<tr>
<td>Enter</td>
<td>Activate: navigate or toggle (see <code>parent-link</code>)</td>
</tr>
<tr>
<td>Space</td>
<td>Toggle selection or check</td>
</tr>
<tr>
<td><code>*</code></td>
<td>Open all siblings at the same level</td>
</tr>
<tr>
<td>Letters</td>
<td>Typeahead on the resolved label (follows the active language)</td>
</tr>
</tbody>
</table>
</div><p>In <code>disclosure</code> mode the browser’s native behaviour applies (Tab, Enter, Space).</p>
<h2 id="context-menus">Context menus<a class="header-link" href="#context-menus" title="Link to this heading"></a></h2>
<p><code>ENTree</code> does not use popkit. To add a context menu per node, bind it yourself in the <code>item</code> slot with popkit’s <code>bindContextMenu</code>.</p>
<h2 id="api">API<a class="header-link" href="#api" title="Link to this heading"></a></h2>
<p><code>ENTree</code> is the public component. It renders <code>ENTreeAria</code> (mode <code>tree</code>) or <code>ENTreeDisclosure</code> (mode <code>disclosure</code>); both implementations are also exported by the <code>tree</code> folder index.</p>
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
<td><code>mode</code></td>
<td><code>'tree' | 'disclosure'</code></td>
<td><code>'tree'</code></td>
<td>Implementation. Changing it re-creates the tree (open state is kept only when controlled)</td>
</tr>
<tr>
<td><code>items</code></td>
<td><code>NavItemInput[]</code></td>
<td>—</td>
<td>Data source</td>
</tr>
<tr>
<td><code>routes</code></td>
<td><code>RouteLike[]</code></td>
<td>—</td>
<td>Data source from routes</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td>—</td>
<td>Accessible name. One of <code>ariaLabel</code> / <code>ariaLabelledby</code> is required</td>
</tr>
<tr>
<td><code>ariaLabelledby</code></td>
<td><code>string</code></td>
<td>—</td>
<td>Id of the labelling element</td>
</tr>
<tr>
<td><code>activeKey</code></td>
<td><code>NavKey</code></td>
<td>from route</td>
<td>Current page (<code>aria-current</code>). <code>v-model:active-key</code></td>
</tr>
<tr>
<td><code>expanded</code></td>
<td><code>NavKey[]</code></td>
<td>uncontrolled</td>
<td>Open parents. <code>v-model:expanded</code></td>
</tr>
<tr>
<td><code>defaultExpanded</code></td>
<td><code>NavKey[] | 'all'</code></td>
<td><code>[]</code></td>
<td>Initial open parents when uncontrolled</td>
</tr>
<tr>
<td><code>autoExpandActive</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Open the ancestors of the active item</td>
</tr>
<tr>
<td><code>matchMode</code></td>
<td><code>'exact' | 'prefix' | 'trail'</code></td>
<td><code>'trail'</code></td>
<td>How the current route is matched</td>
</tr>
<tr>
<td><code>selectionMode</code></td>
<td><code>'none' | 'single' | 'multiple'</code></td>
<td><code>'none'</code></td>
<td>Mode <code>tree</code> only. Uses <code>aria-selected</code></td>
</tr>
<tr>
<td><code>selected</code></td>
<td><code>NavKey[]</code></td>
<td>uncontrolled</td>
<td><code>v-model:selected</code></td>
</tr>
<tr>
<td><code>defaultSelected</code></td>
<td><code>NavKey[]</code></td>
<td><code>[]</code></td>
<td>Initial selection</td>
</tr>
<tr>
<td><code>checkable</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Mode <code>tree</code> only. Checkbox per row, <code>aria-checked</code> (<code>mixed</code> for partial)</td>
</tr>
<tr>
<td><code>checked</code></td>
<td><code>NavKey[]</code></td>
<td>uncontrolled</td>
<td><code>v-model:checked</code></td>
</tr>
<tr>
<td><code>defaultChecked</code></td>
<td><code>NavKey[]</code></td>
<td><code>[]</code></td>
<td>Initial checked keys</td>
</tr>
<tr>
<td><code>checkStrictly</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Do not cascade checks</td>
</tr>
<tr>
<td><code>parentLink</code></td>
<td><code>'toggle' | 'link' | 'both'</code></td>
<td><code>'toggle'</code></td>
<td>Behaviour of a parent that has <code>to</code>. Mode <code>tree</code> only</td>
</tr>
<tr>
<td><code>typeahead</code></td>
<td><code>boolean</code></td>
<td><code>true</code> (mode <code>tree</code>)</td>
<td>Type a letter to jump to a matching item</td>
</tr>
<tr>
<td><code>render</code></td>
<td><code>'eager' | 'lazy'</code></td>
<td><code>'eager'</code></td>
<td><code>'lazy'</code>: a group is rendered after it was opened once</td>
</tr>
<tr>
<td><code>variant</code></td>
<td><code>'chevron' | 'arrow' | 'plusminus'</code></td>
<td><code>'chevron'</code></td>
<td>Expander style (<code>en-tree--{variant}</code>)</td>
</tr>
<tr>
<td><code>lines</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td><code>en-tree--lines</code></td>
</tr>
<tr>
<td><code>compact</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td><code>en-tree--compact</code></td>
</tr>
<tr>
<td><code>dense</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td><code>en-tree--dense</code></td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>'sm' | 'md' | 'lg'</code></td>
<td><code>'md'</code></td>
<td><code>en-tree--sm</code> / <code>--lg</code> (nothing for <code>md</code>)</td>
</tr>
<tr>
<td><code>routeMetaKey</code></td>
<td><code>string | false</code></td>
<td>from <code>NavConfig</code></td>
<td>Where route metadata is read</td>
</tr>
<tr>
<td><code>mapMeta</code></td>
<td><code>(route) =&gt; NavItemInput | undefined</code></td>
<td>from <code>NavConfig</code></td>
<td>Route-to-item mapping</td>
</tr>
<tr>
<td><code>as</code></td>
<td><code>string</code></td>
<td><code>'ul'</code></td>
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
</div><h3 id="mode-support">Mode support<a class="header-link" href="#mode-support" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Feature</th>
<th><code>tree</code></th>
<th><code>disclosure</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>items</code> / <code>routes</code>, <code>activeKey</code>, <code>expanded</code>, <code>autoExpandActive</code></td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td><code>render=&quot;lazy&quot;</code></td>
<td>Yes</td>
<td>Yes (group rendered after first open)</td>
</tr>
<tr>
<td><code>variant</code>, <code>lines</code>, <code>compact</code>, <code>dense</code>, <code>size</code></td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td><code>parentLink</code></td>
<td><code>toggle</code> / <code>link</code> / <code>both</code></td>
<td>Always <code>toggle</code>; <code>to</code> on a parent is ignored</td>
</tr>
<tr>
<td><code>selectionMode</code>, <code>checkable</code></td>
<td>Yes</td>
<td>No (warning, ignored)</td>
</tr>
<tr>
<td><code>typeahead</code></td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Works without JavaScript</td>
<td>No</td>
<td>Yes (open/close)</td>
</tr>
</tbody>
</table>
</div><h3 id="events">Events<a class="header-link" href="#events" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Event</th>
<th>Payload</th>
<th>Mode</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>update:activeKey</code></td>
<td><code>NavKey</code></td>
<td>both</td>
<td>An item was activated</td>
</tr>
<tr>
<td><code>update:expanded</code></td>
<td><code>NavKey[]</code></td>
<td>both</td>
<td>Open parents changed</td>
</tr>
<tr>
<td><code>update:selected</code></td>
<td><code>NavKey[]</code></td>
<td>tree</td>
<td>Selection changed</td>
</tr>
<tr>
<td><code>update:checked</code></td>
<td><code>NavKey[]</code></td>
<td>tree</td>
<td>Checked keys changed</td>
</tr>
<tr>
<td><code>activate</code></td>
<td><code>{ item: NavNode, event: MouseEvent }</code></td>
<td>both</td>
<td>An item was activated</td>
</tr>
<tr>
<td><code>toggle</code></td>
<td><code>{ item: NavNode, open: boolean }</code></td>
<td>both</td>
<td>A parent opened or closed (<code>open</code> is the new state)</td>
</tr>
<tr>
<td><code>focus-item</code></td>
<td><code>{ item: NavNode }</code></td>
<td>tree</td>
<td>Roving focus moved to an item</td>
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
<td><code>item</code></td>
<td><code>TreeItemSlotProps</code></td>
<td>Replaces the whole row content</td>
</tr>
<tr>
<td><code>icon</code></td>
<td><code>TreeItemSlotProps</code></td>
<td>Replaces the icon</td>
</tr>
<tr>
<td><code>label</code></td>
<td><code>TreeItemSlotProps</code></td>
<td>Replaces the text</td>
</tr>
<tr>
<td><code>badge</code></td>
<td><code>TreeItemSlotProps</code></td>
<td>Replaces the badge</td>
</tr>
<tr>
<td><code>empty</code></td>
<td>—</td>
<td>Shown when there is nothing to display</td>
</tr>
</tbody>
</table>
</div><p><code>TreeItemSlotProps</code>: <code>{ node, active, expanded, selected, checked, level }</code>. <code>checked</code> is <code>undefined</code> unless <code>checkable</code>; <code>level</code> is the 1-based nesting level.</p>
<h3 id="exposed-methods-template-ref">Exposed methods (template ref)<a class="header-link" href="#exposed-methods-template-ref" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>focus(key)</code></td>
<td>Move focus to an item. Ignored when the item is not visible. Only meaningful in mode <code>tree</code></td>
</tr>
<tr>
<td><code>expandAll()</code></td>
<td>Open every parent</td>
</tr>
<tr>
<td><code>collapseAll()</code></td>
<td>Close every parent</td>
</tr>
</tbody>
</table>
</div><h3 id="item-fields-used">Item fields used<a class="header-link" href="#item-fields-used" title="Link to this heading"></a></h3>
<p><code>key</code>, <code>label</code> / <code>title</code>, <code>tooltip</code>, <code>ariaLabel</code>, <code>icon</code>, <code>badge</code>, <code>badgeVariant</code>, <code>to</code> / <code>href</code>, <code>children</code>, <code>disabled</code>, <code>toggleOnly</code>, <code>hidden</code> (<code>true</code> or <code>{ tree: true }</code>; hidden nodes are not rendered but stay in the index), <code>data</code>.</p>
<h3 id="markup">Markup<a class="header-link" href="#markup" title="Link to this heading"></a></h3>
<h4 id="mode-tree">Mode <code>tree</code><a class="header-link" href="#mode-tree" title="Link to this heading"></a></h4>
<p>`}),g(j,{key:10,meta:D[10]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The treeitem name uses <code>aria-labelledby</code> to its own text element, so it does not include the text of its children. Links inside rows have <code>tabindex=&quot;-1&quot;</code>; exactly one item has <code>tabindex=&quot;0&quot;</code>.</p>
<h4 id="mode-disclosure">Mode <code>disclosure</code><a class="header-link" href="#mode-disclosure" title="Link to this heading"></a></h4>
<p>`}),g(j,{key:11,meta:D[11]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The <code>open</code> attribute follows <code>expanded</code>. User toggles are read from the <code>&lt;details&gt;</code> <code>toggle</code> event, which is asynchronous, so state is never changed from a click handler.</p>
<h3 id="composable-usetreekeys">Composable: <code>useTreeKeys</code><a class="header-link" href="#composable-usetreekeys" title="Link to this heading"></a></h3>
<p>Roving focus and the WAI-ARIA tree keyboard model for mode <code>tree</code>. Events are delegated: bind <code>onKeydown</code> and <code>onFocusin</code> once on the root. Enter and Space are handled only when the <code>&lt;li&gt;</code> itself has focus; Enter forwards a <code>click()</code> to the row so a <code>RouterLink</code> keeps handling navigation.</p>
<p>`}),g(j,{key:12,meta:D[12]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>rows</code></td>
<td><code>MaybeRefOrGetter&lt;readonly TreeRow[]&gt;</code></td>
<td>Visible rows in DOM order</td>
</tr>
<tr>
<td><code>fallbackKey</code></td>
<td><code>MaybeRefOrGetter&lt;NavKey | undefined&gt;</code></td>
<td>Tabbable item while nothing was focused (usually the active one)</td>
</tr>
<tr>
<td><code>typeahead</code></td>
<td><code>MaybeRefOrGetter&lt;boolean | undefined&gt;</code></td>
<td>Enable typeahead</td>
</tr>
<tr>
<td><code>setOpen</code></td>
<td><code>(key, open) =&gt; void</code></td>
<td>Open or close a parent</td>
</tr>
<tr>
<td><code>expandSiblings</code></td>
<td><code>(key) =&gt; void</code></td>
<td><code>*</code>: open every closed parent among the siblings</td>
</tr>
<tr>
<td><code>onSpace</code></td>
<td><code>(key) =&gt; void</code></td>
<td>Toggle selection or check</td>
</tr>
<tr>
<td><code>onFocusItem</code></td>
<td><code>(key) =&gt; void</code></td>
<td>Called when focus moves to an item</td>
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
<td><code>focusKey</code></td>
<td><code>Ref&lt;NavKey | undefined&gt;</code>: last focused item</td>
</tr>
<tr>
<td><code>tabbableKey</code></td>
<td><code>ComputedRef&lt;NavKey | undefined&gt;</code>: item with <code>tabindex=&quot;0&quot;</code></td>
</tr>
<tr>
<td><code>registerItem(key)</code></td>
<td>Function ref for an item’s <code>&lt;li&gt;</code></td>
</tr>
<tr>
<td><code>focus(key)</code></td>
<td>Move focus (and the roving tabindex) to a visible item</td>
</tr>
<tr>
<td><code>onKeydown</code> / <code>onFocusin</code></td>
<td>Delegated handlers</td>
</tr>
</tbody>
</table>
</div><p><code>TreeRow</code>: <code>{ node, level, parentKey?, isParent, open }</code>.</p>
<h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>TreeProps</code>, <code>TreeMode</code>, <code>TreeVariant</code>, <code>TreeSize</code>, <code>TreeSelectionMode</code>, <code>TreeParentLink</code>, <code>TreeCheckState</code>, <code>TreeActivatePayload</code>, <code>TreeTogglePayload</code>, <code>TreeFocusPayload</code>, <code>TreeItemSlotProps</code>, <code>TreeExpose</code>, <code>TreeRow</code>, <code>UseTreeKeysOptions</code>, <code>UseTreeKeysReturn</code>.</p>
<p>The runtime option objects <code>treeProps</code> and <code>treeEmits</code> are exported from the <code>tree</code> folder index for custom implementations.</p>
<h3 id="development-warnings">Development warnings<a class="header-link" href="#development-warnings" title="Link to this heading"></a></h3>
<ul>
<li>No <code>ariaLabel</code> / <code>ariaLabelledby</code>.</li>
<li>Duplicate item keys.</li>
<li><code>checkable</code> together with <code>selectionMode</code> (<code>selectionMode</code> is ignored).</li>
<li>Mode <code>disclosure</code> with <code>selectionMode</code>, <code>checkable</code>, <code>typeahead</code>, <code>parentLink</code>, or a <code>to</code> / <code>href</code> on a parent.</li>
</ul>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./nav-model">Navigation model</a></li>
<li><a href="./sidebar-menu">Sidebar menu</a></li>
</ul>
`})]),null])}}),N={title:`Tree`,description:`ENTree is a hierarchical navigation tree with two implementations, chosen by mode:`},P=M;export{P as default,N as meta};