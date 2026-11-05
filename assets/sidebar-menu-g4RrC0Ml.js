import{A as e,At as t,Et as n,F as r,Ft as i,H as a,I as o,R as s,V as c,W as l,_t as u,at as d,et as f,it as p,l as m,n as h,nt as g,q as _,r as v,s as y,tt as b}from"./components-BJME9hSd.js";import{i as x}from"./navtree-B-kmX2Y5.js";var S=l({__name:`1`,setup(e){let r=[{key:`home`,label:`Home`,icon:`bi bi-house`},{group:`Management`},{key:`master`,label:`Master data`,icon:`bi bi-database`,toggleOnly:!0,children:[{key:`users`,label:`Users`,badge:12,badgeVariant:`info`},{key:`roles`,label:`Roles`}]},{divider:!0},{key:`logout`,label:`Log out`,icon:`bi bi-box-arrow-right`}],i=n(`users`);return(e,n)=>(p(),o(t(x),{"active-key":i.value,"onUpdate:activeKey":n[0]||=e=>i.value=e,items:r,"aria-label":`Main`},null,8,[`active-key`]))}}),C=l({__name:`4`,setup(o){let l=[{key:`a`,label:`Section A`,toggleOnly:!0,children:[{key:`a1`,label:`A1`},{key:`a2`,label:`A2`}]},{key:`b`,label:`Section B`,toggleOnly:!0,children:[{key:`b1`,label:`B1`}]},{key:`c`,label:`Section C`,toggleOnly:!0,children:[{key:`c1`,label:`C1`}]}],u=n([`a`]),d=n(`a1`);return(n,o)=>(p(),s(e,null,[a(t(x),{expanded:u.value,"onUpdate:expanded":o[0]||=e=>u.value=e,"active-key":d.value,"onUpdate:activeKey":o[1]||=e=>d.value=e,accordion:``,items:l,"aria-label":`Accordion`},null,8,[`expanded`,`active-key`]),r(`p`,null,[o[2]||=c(`Open: `,-1),r(`code`,null,i(u.value.join(`, `)||`—`),1)])],64))}}),w=l({__name:`5`,setup(o){let c=[{key:`home`,label:`Home`,icon:`bi bi-house`,tooltip:`Dashboard`},{key:`master`,label:`Master data`,icon:`bi bi-database`,toggleOnly:!0,children:[{key:`users`,label:`Users`},{key:`roles`,label:`Roles`}]}],l=n(!0),u=n(`home`);return(n,o)=>(p(),s(e,null,[r(`button`,{onClick:o[0]||=e=>l.value=!l.value},i(l.value?`Expand`:`Collapse`),1),a(t(x),{"active-key":u.value,"onUpdate:activeKey":o[1]||=e=>u.value=e,items:c,collapsed:l.value,"aria-label":`Rail`},null,8,[`active-key`,`collapsed`])],64))}}),T=l({__name:`7`,setup(e){return(e,n)=>(p(),o(t(x),{"aria-label":`Disabled demo`,items:[{key:`view`,label:`View`},{key:`edit`,label:`Edit`,disabled:!0}]}))}}),E={style:{color:`var(--en-danger)`}},D={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSidebarMenu</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useFlyout } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:S,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSidebarMenu</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> icon</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bi bi-house'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { group</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Management'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'master'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Master data'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    icon</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bi bi-database'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    toggleOnly</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> badge</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 12</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> badgeVariant</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'info'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'roles'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Roles'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { divider</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'logout'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Log out'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> icon</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bi bi-box-arrow-right'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> active</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'users'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENSidebarMenu</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">active-key</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">active</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Main"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENSidebarMenu</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">routes</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">router</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">options</span><span class="shiki-foreground">.routes</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Main"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">{ path</span><span class="shiki-token-punctuation">:</span><span class="shiki-token-string-expression"> '/users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> meta</span><span class="shiki-token-punctuation">:</span><span class="shiki-foreground"> { nav</span><span class="shiki-token-punctuation">:</span><span class="shiki-foreground"> { label</span><span class="shiki-token-punctuation">:</span><span class="shiki-token-string-expression"> 'Users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> icon</span><span class="shiki-token-punctuation">:</span><span class="shiki-token-string-expression"> 'bi bi-people'</span><span class="shiki-foreground"> } } }</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:3,lang:`ts`,injectKind:null,editable:!1,source:null},4:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSidebarMenu</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'a'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Section A'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> toggleOnly</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'a1'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'A1'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'a2'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'A2'</span><span class="shiki-foreground"> }] }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'b'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Section B'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> toggleOnly</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'b1'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'B1'</span><span class="shiki-foreground"> }] }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'c'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Section C'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> toggleOnly</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'c1'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'C1'</span><span class="shiki-foreground"> }] }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> open</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-constant">string</span><span class="shiki-foreground">[]>([</span><span class="shiki-token-string-expression">'a'</span><span class="shiki-foreground">])</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> active</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'a1'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENSidebarMenu</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">open</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">active-key</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">active</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> accordion</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Accordion"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Open: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ open.join(', ') || '—' }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:4,lang:`vue`,injectKind:null,editable:!1,source:null},5:{component:w,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSidebarMenu</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> icon</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bi bi-house'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> tooltip</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Dashboard'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'master'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Master data'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    icon</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bi bi-database'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    toggleOnly</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Users'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'roles'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Roles'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> collapsed</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">true</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> active</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'home'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"collapsed = !collapsed"</span><span class="shiki-foreground">>{{ collapsed ? 'Expand' : 'Collapse' }}&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENSidebarMenu</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function">active-key</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">active</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">collapsed</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">collapsed</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Rail"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:5,lang:`vue`,injectKind:null,editable:!1,source:null},6:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-constant">app</span><span class="shiki-token-function">.use</span><span class="shiki-foreground">(ENCSSNav</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  flyout</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'popkit'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  flyoutAppendTo</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'body'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-comment"> // when an ancestor has \`transform\` (for example an offcanvas sidebar)</span></span>
<span class="line"><span class="shiki-foreground">})</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:6,lang:`ts`,injectKind:null,editable:!1,source:null},7:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSidebarMenu } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENSidebarMenu</span></span>
<span class="line"><span class="shiki-token-function">    aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Disabled demo"</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'view'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'View'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'edit'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Edit'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> disabled</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">  /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:7,lang:`vue`,injectKind:null,editable:!1,source:null},8:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">{ key</span><span class="shiki-token-punctuation">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-punctuation">:</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> t</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'nav.users'</span><span class="shiki-foreground">)</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> to</span><span class="shiki-token-punctuation">:</span><span class="shiki-foreground"> ({ route }) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-string-expression"> \`/</span><span class="shiki-token-keyword">\${</span><span class="shiki-token-function">lang</span><span class="shiki-foreground">()</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">/users\`</span><span class="shiki-foreground"> }</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:8,lang:`ts`,injectKind:null,editable:!1,source:null},9:{component:l({__name:`9`,setup(e){return(e,n)=>(p(),o(t(x),{"aria-label":`Custom badge`,items:[{key:`inbox`,label:`Inbox`,badge:3},{key:`sent`,label:`Sent`}]},{badge:u(({node:e})=>[r(`strong`,E,i(e.badge),1)]),_:1}))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENSidebarMenu } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENSidebarMenu</span></span>
<span class="line"><span class="shiki-token-function">    aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Custom badge"</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'inbox'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Inbox'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> badge</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 3</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'sent'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Sent'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">  ></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground"> #</span><span class="shiki-token-function">badge</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">{ node }</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-danger)"</span><span class="shiki-foreground">>{{ node.badge }}&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENSidebarMenu</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:9,lang:`vue`,injectKind:null,editable:!1,source:null},10:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Main"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar-menu [en-sidebar-menu--flyout] [en-sidebar-menu--compact] [en-sidebar-menu--popkit]"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar-menu__item en-sidebar-menu__item--active"</span><span class="shiki-token-function"> aria-current</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"page"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar-menu__icon"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar-menu__text"</span><span class="shiki-foreground">>Home&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar-menu__badge"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar-menu__item en-sidebar-menu__item--parent"</span></span>
<span class="line"><span class="shiki-token-function">              aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-token-function"> aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        …&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar-menu__arrow"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar-menu__submenu"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-foreground">>…&#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">useFlyout</span><span class="shiki-foreground">(options: UseFlyoutOptions): UseFlyoutReturn</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:11,lang:`ts`,injectKind:null,editable:!1,source:null}},O=[{id:`sidebar-menu`,text:`Sidebar Menu`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`source-from-routes`,text:`Source from routes`,level:2},{id:`parents`,text:`Parents`,level:2},{id:`open-state`,text:`Open state`,level:2},{id:`collapsed-rail`,text:`Collapsed rail`,level:2},{id:`styling`,text:`Styling`,level:2},{id:`disabled-items`,text:`Disabled items`,level:2},{id:`i18n`,text:`i18n`,level:2},{id:`custom-rendering`,text:`Custom rendering`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`events`,text:`Events`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`item-fields-used`,text:`Item fields used`,level:3},{id:`markup`,text:`Markup`,level:3},{id:`with-flyoutpopkit`,text:'With `flyout="popkit"`',level:4},{id:`composable-useflyout`,text:"Composable: `useFlyout`",level:3},{id:`types`,text:`Types`,level:3},{id:`development-warnings`,text:`Development warnings`,level:3},{id:`see-also`,text:`See also`,level:2}],k=[{id:`sidebar-menu`,text:`Sidebar Menu`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`source-from-routes`,text:`Source from routes`,level:2,children:[]},{id:`parents`,text:`Parents`,level:2,children:[]},{id:`open-state`,text:`Open state`,level:2,children:[]},{id:`collapsed-rail`,text:`Collapsed rail`,level:2,children:[]},{id:`styling`,text:`Styling`,level:2,children:[]},{id:`disabled-items`,text:`Disabled items`,level:2,children:[]},{id:`i18n`,text:`i18n`,level:2,children:[]},{id:`custom-rendering`,text:`Custom rendering`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`events`,text:`Events`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`item-fields-used`,text:`Item fields used`,level:3,children:[]},{id:`markup`,text:`Markup`,level:3,children:[{id:`with-flyoutpopkit`,text:'With `flyout="popkit"`',level:4,children:[]}]},{id:`composable-useflyout`,text:"Composable: `useFlyout`",level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]},{id:`development-warnings`,text:`Development warnings`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],A={css:[],js:[],cleanup:[]},j=l({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>_(`div`,{class:n},[e.meta.isLive?_(v,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:_(h,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),M=l({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/navtree/sidebar-menu.md`,setup(){d(`vlm-toc`,{flat:O,tree:k}),b(()=>m(O,k)),g(()=>m([],[]));let e=y(A);return d(`vlm-inject`,e),b(()=>e.mount()),f(()=>e.beforeUnmount()),g(()=>e.unmounted()),()=>_(`div`,{class:`vlm-page`},[_(`div`,{class:`vlm-content`},[_(`div`,{class:`vlm-md`,innerHTML:`<h1 id="sidebar-menu">Sidebar Menu<a class="header-link" href="#sidebar-menu" title="Link to this heading"></a></h1>
<p><code>ENSidebarMenu</code> is a sidebar navigation menu: an inline list of links with groups, badges, nested submenus and an optional icon-only rail with flyouts.</p>
<p>Requires <code>extended/components-sidebar-menu.css</code> from <code>en-css-src</code>.</p>
<p>`}),_(j,{key:0,meta:D[0]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),_(j,{key:1,meta:D[1]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>In an application, give leaves a <code>to</code> (router) or <code>href</code> (plain link). An item without a target renders as a button.</p>
<h2 id="source-from-routes">Source from routes<a class="header-link" href="#source-from-routes" title="Link to this heading"></a></h2>
<p>`}),_(j,{key:2,meta:D[2]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),_(j,{key:3,meta:D[3]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="parents">Parents<a class="header-link" href="#parents" title="Link to this heading"></a></h2>
<p>A parent without <code>to</code>, or with <code>toggleOnly: true</code>, is a <code>&lt;button&gt;</code> that only opens and closes. A parent with <code>to</code> is a link: a click navigates and flips its open state.</p>
<h2 id="open-state">Open state<a class="header-link" href="#open-state" title="Link to this heading"></a></h2>
<p>`}),_(j,{key:4,meta:D[4]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Omit <code>expanded</code> to let the menu manage it. <code>default-expanded</code> accepts keys or <code>'all'</code>. Ancestors of the active item open automatically (<code>auto-expand-active</code>). With <code>accordion</code>, only one group per level stays open.</p>
<h2 id="collapsed-rail">Collapsed rail<a class="header-link" href="#collapsed-rail" title="Link to this heading"></a></h2>
<p><code>collapsed</code> turns the menu into an icon rail (<code>en-sidebar-menu--flyout</code>). Top-level items get an <code>aria-label</code> and a <code>data-tooltip</code> (from <code>tooltip</code>, or the label). Open state is left untouched while collapsed and applies again when expanded.</p>
<p>`}),_(j,{key:5,meta:D[5]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Two flyout implementations:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>flyout</code></th>
<th>Behaviour</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'css'</code> (default)</td>
<td>A CSS-only popup. Zero JavaScript, but it can be clipped by an <code>overflow</code> on a scrollable sidebar</td>
</tr>
<tr>
<td><code>'popkit'</code></td>
<td>Submenus and tooltips are driven by <code>@en32/popkit</code> (loaded lazily): <code>position: fixed</code>, flip/shift at the viewport edge, Escape to close, one flyout open at a time. Without popkit the CSS flyout is used and a development warning is printed</td>
</tr>
</tbody>
</table>
</div><p>`}),_(j,{key:6,meta:D[6]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Popkit keyboard: Enter/Space opens and pins a flyout, → opens it and focuses the first item, ↑/↓/Home/End move inside it, ← or Escape closes it and returns focus to the button.</p>
<h2 id="styling">Styling<a class="header-link" href="#styling" title="Link to this heading"></a></h2>
<ul>
<li>The root is a vertical flex list. Give the sidebar its own width: the menu fills whatever container it is placed in.</li>
<li>The active item uses the primary subtle background (<code>en-sidebar-menu__item--active</code> and <code>[aria-current=&quot;page&quot;]</code>).</li>
<li>Badge variants available in the stylesheet are <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code> and <code>subtle</code>. <code>primary</code> is part of <code>NavBadgeVariant</code> but has no sidebar style, so it renders as the default badge.</li>
<li>In the collapsed rail, <code>flyout=&quot;css&quot;</code> draws the tooltip with a CSS <code>::after</code> that reads the <code>data-tooltip</code> attribute. With <code>flyout=&quot;popkit&quot;</code> the tooltip is a popkit element styled by <code>.en-sidebar-menu__tooltip</code>, which has the same look.</li>
<li><code>compact</code> (<code>en-sidebar-menu--compact</code>) reduces the item padding and font size, and shrinks the icon to <code>1rem</code>.</li>
</ul>
<h2 id="disabled-items">Disabled items<a class="header-link" href="#disabled-items" title="Link to this heading"></a></h2>
<p><code>disabled</code> renders <code>aria-disabled=&quot;true&quot;</code> and <code>tabindex=&quot;-1&quot;</code>, and the item no longer activates.</p>
<p>`}),_(j,{key:7,meta:D[7]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="i18n">i18n<a class="header-link" href="#i18n" title="Link to this heading"></a></h2>
<p>Labels, <code>tooltip</code>, <code>badge</code> and <code>to</code> may be functions:</p>
<p>`}),_(j,{key:8,meta:D[8]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="custom-rendering">Custom rendering<a class="header-link" href="#custom-rendering" title="Link to this heading"></a></h2>
<p>`}),_(j,{key:9,meta:D[9]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td>Data source</td>
</tr>
<tr>
<td><code>routes</code></td>
<td><code>RouteLike[]</code></td>
<td>—</td>
<td>Data source from routes</td>
</tr>
<tr>
<td><code>activeKey</code></td>
<td><code>NavKey</code></td>
<td>from route</td>
<td>Active item. <code>v-model:active-key</code></td>
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
<td>—</td>
<td>Initial open parents when uncontrolled</td>
</tr>
<tr>
<td><code>autoExpandActive</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Open the ancestors of the active item</td>
</tr>
<tr>
<td><code>accordion</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>One open group per level</td>
</tr>
<tr>
<td><code>collapsed</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Icon rail (<code>en-sidebar-menu--flyout</code>)</td>
</tr>
<tr>
<td><code>flyout</code></td>
<td><code>'css' | 'popkit'</code></td>
<td><code>NavConfig.flyout</code>, then <code>'css'</code></td>
<td>Only meaningful when <code>collapsed</code>. <code>'popkit'</code> falls back to <code>'css'</code> without popkit</td>
</tr>
<tr>
<td><code>compact</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td><code>en-sidebar-menu--compact</code></td>
</tr>
<tr>
<td><code>matchMode</code></td>
<td><code>'exact' | 'prefix' | 'trail'</code></td>
<td><code>'trail'</code></td>
<td>How the current route is matched</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td>—</td>
<td>Label of the wrapping <code>&lt;nav&gt;</code></td>
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
<td>An item was activated</td>
</tr>
<tr>
<td><code>update:expanded</code></td>
<td><code>NavKey[]</code></td>
<td>Open parents changed</td>
</tr>
<tr>
<td><code>activate</code></td>
<td><code>{ item: NavNode, event: MouseEvent }</code></td>
<td>An item was clicked</td>
</tr>
<tr>
<td><code>toggle</code></td>
<td><code>{ item: NavNode, open: boolean }</code></td>
<td>A parent opened or closed (<code>open</code> is the new state)</td>
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
<td><code>SidebarMenuItemSlotProps</code></td>
<td>Replaces the whole content of an item</td>
</tr>
<tr>
<td><code>icon</code></td>
<td><code>SidebarMenuItemSlotProps</code></td>
<td>Replaces the icon</td>
</tr>
<tr>
<td><code>label</code></td>
<td><code>SidebarMenuItemSlotProps</code></td>
<td>Replaces the text</td>
</tr>
<tr>
<td><code>badge</code></td>
<td><code>SidebarMenuItemSlotProps</code></td>
<td>Replaces the badge</td>
</tr>
<tr>
<td><code>empty</code></td>
<td>—</td>
<td>Shown when there are no visible items</td>
</tr>
</tbody>
</table>
</div><p><code>SidebarMenuItemSlotProps</code>: <code>{ node, active, expanded, depth, collapsed }</code>. <code>expanded</code> is <code>false</code> for leaves.</p>
<h3 id="item-fields-used">Item fields used<a class="header-link" href="#item-fields-used" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Field</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>key</code></td>
<td>Identity (must be unique)</td>
</tr>
<tr>
<td><code>label</code> / <code>title</code></td>
<td>Text (<code>title</code> wins)</td>
</tr>
<tr>
<td><code>tooltip</code></td>
<td><code>data-tooltip</code> / popkit tooltip in the collapsed rail. Falls back to the label</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td>Accessible name override</td>
</tr>
<tr>
<td><code>icon</code></td>
<td><code>span.en-sidebar-menu__icon</code></td>
</tr>
<tr>
<td><code>badge</code> / <code>badgeVariant</code></td>
<td><code>span.en-sidebar-menu__badge</code> (+ <code>--success/danger/warning/info/subtle</code>)</td>
</tr>
<tr>
<td><code>to</code> / <code>href</code></td>
<td>Target. Without one, a leaf renders as a button</td>
</tr>
<tr>
<td><code>children</code></td>
<td>Submenu</td>
</tr>
<tr>
<td><code>toggleOnly</code></td>
<td>Click only toggles; never navigates</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>--disabled</code>, <code>aria-disabled=&quot;true&quot;</code>, <code>tabindex=&quot;-1&quot;</code></td>
</tr>
<tr>
<td><code>group</code></td>
<td>Non-clickable header (<code>li &gt; .en-sidebar-menu__header</code>)</td>
</tr>
<tr>
<td><code>divider</code></td>
<td>Divider before the item, or alone as a standalone divider (<code>li &gt; hr.en-sidebar-menu__divider</code>)</td>
</tr>
<tr>
<td><code>hidden</code></td>
<td><code>true</code> or <code>{ menu: true }</code> removes it from the menu (still used for active detection)</td>
</tr>
</tbody>
</table>
</div><h3 id="markup">Markup<a class="header-link" href="#markup" title="Link to this heading"></a></h3>
<p>`}),_(j,{key:10,meta:D[10]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The DOM order (parent button, then its submenu as a direct sibling) must not change: the CSS depends on the sibling selector.</p>
<h4 id="with-flyoutpopkit">With <code>flyout=&quot;popkit&quot;</code><a class="header-link" href="#with-flyoutpopkit" title="Link to this heading"></a></h4>
<ul>
<li>The root gets <code>en-sidebar-menu--popkit</code> only after popkit has loaded.</li>
<li>Top-level parents render no <code>aria-expanded</code> / <code>aria-controls</code> / <code>aria-haspopup</code>; popkit owns them. Popkit also owns <code>hidden</code>, <code>style</code>, <code>role</code> and (if missing) <code>id</code> of the submenu.</li>
<li>Parents nested inside a flyout expand inline, with <code>aria-expanded</code> from Vue.</li>
<li>With <code>flyoutAppendTo: 'body'</code> the submenu is moved to <code>body</code> while open and restored on close.</li>
<li>Open state (<code>expanded</code>) is not changed by flyouts and applies again when <code>collapsed</code> is turned off.</li>
</ul>
<h3 id="composable-useflyout">Composable: <code>useFlyout</code><a class="header-link" href="#composable-useflyout" title="Link to this heading"></a></h3>
<p>Drives the popkit flyouts and tooltips of the collapsed rail: one popover per top-level parent, one tooltip per leaf, grouped so only one flyout is open. Used internally; exported for custom menus. Client only. Call it synchronously during <code>setup()</code>.</p>
<p>`}),_(j,{key:11,meta:D[11]}),_(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>root</code></td>
<td><code>Ref&lt;HTMLElement | null | undefined&gt;</code></td>
<td>The <code>ul.en-sidebar-menu</code> element</td>
</tr>
<tr>
<td><code>popkit</code></td>
<td><code>MaybeRefOrGetter&lt;PopkitLike | null | undefined&gt;</code></td>
<td>Loaded popkit module</td>
</tr>
<tr>
<td><code>enabled</code></td>
<td><code>MaybeRefOrGetter&lt;boolean&gt;</code></td>
<td>Collapsed rail with popkit loaded. Turning it off removes every popover</td>
</tr>
<tr>
<td><code>appendTo</code></td>
<td><code>MaybeRefOrGetter&lt;HTMLElement | 'body' | null&gt;</code></td>
<td>Portal target. Default: none (<code>position: fixed</code> next to the item)</td>
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
<td><code>sync()</code></td>
<td>Create, rebuild or refresh popovers to match the DOM. Cheap when nothing changed</td>
</tr>
<tr>
<td><code>closeAll()</code></td>
<td>Close every open flyout</td>
</tr>
<tr>
<td><code>destroy()</code></td>
<td>Remove every popover</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>SidebarMenuProps</code>, <code>SidebarMenuActivatePayload</code>, <code>SidebarMenuTogglePayload</code>, <code>SidebarMenuItemSlotProps</code>, <code>UseFlyoutOptions</code>, <code>UseFlyoutReturn</code>.</p>
<h3 id="development-warnings">Development warnings<a class="header-link" href="#development-warnings" title="Link to this heading"></a></h3>
<ul>
<li>Duplicate item keys.</li>
<li><code>flyout=&quot;popkit&quot;</code> without a loadable <code>@en32/popkit</code> (the CSS flyout is used).</li>
</ul>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./nav-model">Navigation model</a></li>
<li><a href="./configuration#optional-popkit">Configuration</a></li>
<li><a href="./tree">Tree</a></li>
</ul>
`})]),null])}}),N={title:`Sidebar Menu`,description:`ENSidebarMenu is a sidebar navigation menu: an inline list of links with groups, badges, nested submenus and an optional icon-only rail with flyouts.`},P=M;export{P as default,N as meta};