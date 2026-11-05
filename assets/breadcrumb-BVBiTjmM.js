import{At as e,Ft as t,H as n,I as r,O as i,R as a,W as o,_t as s,at as c,et as l,it as u,l as d,n as f,nt as p,q as m,r as h,s as g,tt as _}from"./components-BJME9hSd.js";import{r as v}from"./navtree-B-kmX2Y5.js";var y=o({__name:`1`,setup(t){let n=[{key:`home`,label:`Home`,href:`#`},{key:`docs`,label:`Docs`,href:`#`},{key:`components`,label:`Components`,href:`#`},{key:`breadcrumb`,label:`Breadcrumb`}],i=({event:e})=>e.preventDefault();return(t,a)=>(u(),r(e(v),{items:n,onSelect:i}))}}),b={class:`en-stack`,style:{"--en-gap":`var(--en-space-3)`}},x=o({__name:`4`,setup(t){let r=[{key:`home`,label:`Home`,href:`#`},{key:`docs`,label:`Docs`,href:`#`},{key:`page`,label:`Page`}],i=({event:e})=>e.preventDefault();return(t,o)=>(u(),a(`div`,b,[n(e(v),{items:r,separator:`slash`,onSelect:i}),n(e(v),{items:r,separator:`chevron`,onSelect:i}),n(e(v),{items:r,separator:`arrow`,onSelect:i}),n(e(v),{items:r,separator:`dot`,onSelect:i})]))}}),S=o({__name:`7`,setup(t){let n=({event:e})=>e.preventDefault();return(t,i)=>(u(),r(e(v),{home:{key:`home`,label:`Home`,href:`#`,icon:`bi bi-house`},items:[{key:`settings`,label:`Settings`,href:`#`},{key:`profile`,label:`Profile`}],onSelect:n}))}}),C=o({__name:`8`,setup(t){let n=[`Home`,`Library`,`Science`,`Physics`,`Optics`,`Lenses`,`Thin lenses`].map((e,t,n)=>({key:e,label:e,href:t<n.length-1?`#`:void 0})),i=({event:e})=>e.preventDefault();return(t,a)=>(u(),r(e(v),{items:e(n),"max-items":4,"items-before":1,"items-after":2,onSelect:i},null,8,[`items`]))}}),w={style:{"max-width":`20rem`}},T=o({__name:`10`,setup(t){let r=[`Home`,`Dashboard`,`Projects`,`Website Redesign`,`Design`,`Components`,`Navigation`].map((e,t,n)=>({key:e,label:e,href:t<n.length-1?`#`:void 0})),i=({event:e})=>e.preventDefault();return(t,o)=>(u(),a(`div`,w,[n(e(v),{items:e(r),overflow:`scroll`,onSelect:i},null,8,[`items`])]))}}),E={class:`en-stack`,style:{"--en-gap":`var(--en-space-3)`,"max-width":`20rem`}},D=o({__name:`11`,setup(t){let r=[`Home`,`Dashboard`,`Projects`,`Website Redesign`,`Design`,`Components`,`Navigation`].map((e,t,n)=>({key:e,label:e,href:t<n.length-1?`#`:void 0})),i=({event:e})=>e.preventDefault();return(t,o)=>(u(),a(`div`,E,[n(e(v),{items:e(r),"sticky-start":``,"scroll-to-current":!1,onSelect:i},null,8,[`items`]),n(e(v),{items:e(r),"sticky-start":``,"sticky-end":``,"scroll-to-current":!1,onSelect:i},null,8,[`items`])]))}}),O={key:0},k=[`href`],A={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBreadcrumb</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useEllipsisMenu } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBreadcrumb</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'docs'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Docs'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'components'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Components'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'breadcrumb'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Breadcrumb'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-function"> stay</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> ({ event }</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { event</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> MouseEvent</span><span class="shiki-foreground"> }) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> event</span><span class="shiki-token-function">.preventDefault</span><span class="shiki-foreground">()</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">select</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">stay</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> routes</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    path</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '/master'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    name</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'master'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    meta</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { nav</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Master data'</span><span class="shiki-foreground"> } }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    children</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">      { path</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> name</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> component</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> Users</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> meta</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { nav</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Users'</span><span class="shiki-foreground"> } } }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:2,lang:`ts`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">home</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">{ label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> to</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '/'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> icon</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bi bi-house'</span><span class="shiki-foreground"> }</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:3,lang:`vue`,injectKind:null,editable:!1,source:null},4:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBreadcrumb</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'docs'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Docs'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'page'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Page'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-function"> stay</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> ({ event }</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { event</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> MouseEvent</span><span class="shiki-foreground"> }) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> event</span><span class="shiki-token-function">.preventDefault</span><span class="shiki-foreground">()</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-stack"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> separator</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"slash"</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">select</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">stay</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> separator</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"chevron"</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">select</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">stay</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> separator</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"arrow"</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">select</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">stay</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> separator</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"dot"</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">select</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">stay</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:4,lang:`vue`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">.my-breadcrumb</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  --en-breadcrumb-sep</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> "\\2022"</span><span class="shiki-foreground">; </span><span class="shiki-token-comment">/* • */</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:5,lang:`css`,injectKind:null,editable:!1,source:null},6:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"my-breadcrumb"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:6,lang:`vue`,injectKind:null,editable:!1,source:null},7:{component:S,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBreadcrumb } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-function"> stay</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> ({ event }</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { event</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> MouseEvent</span><span class="shiki-foreground"> }) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> event</span><span class="shiki-token-function">.preventDefault</span><span class="shiki-foreground">()</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">home</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> icon</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bi bi-house'</span><span class="shiki-foreground"> }</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'settings'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Settings'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'profile'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Profile'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">    @</span><span class="shiki-token-function">select</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">stay</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">  /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:7,lang:`vue`,injectKind:null,editable:!1,source:null},8:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBreadcrumb</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Library'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Science'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Physics'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Optics'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Lenses'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Thin lenses'</span><span class="shiki-foreground">]</span><span class="shiki-token-function">.map</span><span class="shiki-foreground">(</span></span>
<span class="line"><span class="shiki-foreground">  (label</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> i</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> all) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> ({ key</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> label</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> i </span><span class="shiki-token-keyword">&#x3C;</span><span class="shiki-token-constant"> all</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">length</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword"> ?</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-token-keyword"> :</span><span class="shiki-token-constant"> undefined</span><span class="shiki-foreground"> })</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-function"> stay</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> ({ event }</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { event</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> MouseEvent</span><span class="shiki-foreground"> }) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> event</span><span class="shiki-token-function">.preventDefault</span><span class="shiki-foreground">()</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">max-items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">4</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items-before</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">1</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items-after</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">2</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">select</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">stay</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:8,lang:`vue`,injectKind:null,editable:!1,source:null},9:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">max-items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">4</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> ellipsis-mode</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menu"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:9,lang:`vue`,injectKind:null,editable:!1,source:null},10:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBreadcrumb</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-token-string-expression">  'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Dashboard'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Projects'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Website Redesign'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Design'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Components'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Navigation'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span><span class="shiki-token-function">.map</span><span class="shiki-foreground">((label</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> i</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> all) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> ({ key</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> label</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> i </span><span class="shiki-token-keyword">&#x3C;</span><span class="shiki-token-constant"> all</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">length</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword"> ?</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-token-keyword"> :</span><span class="shiki-token-constant"> undefined</span><span class="shiki-foreground"> }))</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-function"> stay</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> ({ event }</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { event</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> MouseEvent</span><span class="shiki-foreground"> }) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> event</span><span class="shiki-token-function">.preventDefault</span><span class="shiki-foreground">()</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 20rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> overflow</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"scroll"</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">select</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">stay</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:10,lang:`vue`,injectKind:null,editable:!1,source:null},11:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBreadcrumb</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> NavItemInput } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> items</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> NavItemInput</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-token-string-expression">  'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Dashboard'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Projects'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Website Redesign'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Design'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Components'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Navigation'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span><span class="shiki-token-function">.map</span><span class="shiki-foreground">((label</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> i</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> all) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> ({ key</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> label</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> i </span><span class="shiki-token-keyword">&#x3C;</span><span class="shiki-token-constant"> all</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">length</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword"> ?</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-token-keyword"> :</span><span class="shiki-token-constant"> undefined</span><span class="shiki-foreground"> }))</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-function"> stay</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> ({ event }</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> { event</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> MouseEvent</span><span class="shiki-foreground"> }) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> event</span><span class="shiki-token-function">.preventDefault</span><span class="shiki-foreground">()</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-stack"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); max-width: 20rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> sticky-start</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">scroll-to-current</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">select</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">stay</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">items</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> sticky-start</span><span class="shiki-token-function"> sticky-end</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">scroll-to-current</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">select</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">stay</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:11,lang:`vue`,injectKind:null,editable:!1,source:null},12:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">.my-card</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  --en-breadcrumb-sticky-bg</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-bg-surface)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:12,lang:`css`,injectKind:null,editable:!1,source:null},13:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">{ key</span><span class="shiki-token-punctuation">:</span><span class="shiki-token-string-expression"> 'users'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-punctuation">:</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> t</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'nav.users'</span><span class="shiki-foreground">)</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> to</span><span class="shiki-token-punctuation">:</span><span class="shiki-token-string-expression"> '/users'</span><span class="shiki-foreground"> }</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:13,lang:`ts`,injectKind:null,editable:!1,source:null},14:{component:o({__name:`14`,setup(n){return(n,o)=>(u(),r(e(v),{items:[{key:`home`,label:`Home`,href:`#`},{key:`reports`,label:`Reports`,href:`#`},{key:`q3`,label:`Q3 summary`}]},{item:s(({node:e,last:n})=>[n?(u(),a(`strong`,O,t(e.label),1)):(u(),a(`a`,{key:1,href:e.href,onClick:o[0]||=i(()=>{},[`prevent`])},t(e.label),9,k))]),_:1}))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENBreadcrumb } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/navtree'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENBreadcrumb</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">items</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Home'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'reports'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Reports'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> href</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '#'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'q3'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Q3 summary'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    ]</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">  ></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground"> #</span><span class="shiki-token-function">item</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">{ node</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> last }</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-token-function"> v-if</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"last"</span><span class="shiki-foreground">>{{ node.label }}&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> v-else</span><span class="shiki-token-function"> :href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"node.href"</span><span class="shiki-token-function"> @click.prevent</span><span class="shiki-foreground">>{{ node.label }}&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENBreadcrumb</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:14,lang:`vue`,injectKind:null,editable:!1,source:null},15:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Breadcrumb"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ol</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-breadcrumb [en-breadcrumb--chevron] [en-breadcrumb--nowrap|--scroll] [en-breadcrumb--sticky-start] [en-breadcrumb--sticky-end]"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-breadcrumb__item"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-breadcrumb__link"</span><span class="shiki-foreground">>Home&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-breadcrumb__item"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-breadcrumb__ellipsis"</span><span class="shiki-foreground">>…&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-breadcrumb__item"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> aria-current</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"page"</span><span class="shiki-foreground">>Users&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ol</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">useEllipsisMenu</span><span class="shiki-foreground">(options: UseEllipsisMenuOptions): UseEllipsisMenuReturn</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:16,lang:`ts`,injectKind:null,editable:!1,source:null}},j=[{id:`breadcrumb`,text:`Breadcrumb`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`automatic-trail-from-vue-router`,text:`Automatic trail from Vue Router`,level:2},{id:`separators`,text:`Separators`,level:2},{id:`custom-separator`,text:`Custom separator`,level:3},{id:`home-crumb-and-icons`,text:`Home crumb and icons`,level:2},{id:`long-trails`,text:`Long trails`,level:2},{id:`single-line-modes`,text:`Single-line modes`,level:2},{id:`pinned-crumbs`,text:`Pinned crumbs`,level:3},{id:`i18n`,text:`i18n`,level:2},{id:`custom-rendering`,text:`Custom rendering`,level:2},{id:`styling`,text:`Styling`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`item-fields-used`,text:`Item fields used`,level:3},{id:`events`,text:`Events`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`markup`,text:`Markup`,level:3},{id:`composable-useellipsismenu`,text:"Composable: `useEllipsisMenu`",level:3},{id:`types`,text:`Types`,level:3},{id:`development-warnings`,text:`Development warnings`,level:3},{id:`see-also`,text:`See also`,level:2}],M=[{id:`breadcrumb`,text:`Breadcrumb`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`automatic-trail-from-vue-router`,text:`Automatic trail from Vue Router`,level:2,children:[]},{id:`separators`,text:`Separators`,level:2,children:[{id:`custom-separator`,text:`Custom separator`,level:3,children:[]}]},{id:`home-crumb-and-icons`,text:`Home crumb and icons`,level:2,children:[]},{id:`long-trails`,text:`Long trails`,level:2,children:[]},{id:`single-line-modes`,text:`Single-line modes`,level:2,children:[{id:`pinned-crumbs`,text:`Pinned crumbs`,level:3,children:[]}]},{id:`i18n`,text:`i18n`,level:2,children:[]},{id:`custom-rendering`,text:`Custom rendering`,level:2,children:[]},{id:`styling`,text:`Styling`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`item-fields-used`,text:`Item fields used`,level:3,children:[]},{id:`events`,text:`Events`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`markup`,text:`Markup`,level:3,children:[]},{id:`composable-useellipsismenu`,text:"Composable: `useEllipsisMenu`",level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]},{id:`development-warnings`,text:`Development warnings`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],N={css:[],js:[],cleanup:[]},P=o({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>m(`div`,{class:n},[e.meta.isLive?m(h,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:m(f,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),F=o({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/navtree/breadcrumb.md`,setup(){c(`vlm-toc`,{flat:j,tree:M}),_(()=>d(j,M)),p(()=>d([],[]));let e=g(N);return c(`vlm-inject`,e),_(()=>e.mount()),l(()=>e.beforeUnmount()),p(()=>e.unmounted()),()=>m(`div`,{class:`vlm-page`},[m(`div`,{class:`vlm-content`},[m(`div`,{class:`vlm-md`,innerHTML:`<h1 id="breadcrumb">Breadcrumb<a class="header-link" href="#breadcrumb" title="Link to this heading"></a></h1>
<p><code>ENBreadcrumb</code> renders a breadcrumb trail. It builds itself from the current route (<code>$route.matched</code>), from a route tree, or from explicit items.</p>
<p>Requires <code>basic/components-breadcrumb.css</code> from <code>en-css-src</code> (and <code>basic/components-dropdown.css</code> for <code>ellipsis-mode=&quot;menu&quot;</code>).</p>
<p>`}),m(P,{key:0,meta:A[0]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>Explicit items. The last crumb is the current page: plain text with <code>aria-current=&quot;page&quot;</code>. A crumb without a target is also plain text.</p>
<p>`}),m(P,{key:1,meta:A[1]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>items</code> is flat (<code>children</code> are ignored) and turns the automatic trail off.</p>
<h2 id="automatic-trail-from-vue-router">Automatic trail from Vue Router<a class="header-link" href="#automatic-trail-from-vue-router" title="Link to this heading"></a></h2>
<p>Give each route a <code>meta.nav</code> label. No props are needed:</p>
<p>`}),m(P,{key:2,meta:A[2]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),m(P,{key:3,meta:A[3]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Source precedence: <code>items</code>, then <code>routes</code>, then <code>$route.matched</code>.</p>
<h2 id="separators">Separators<a class="header-link" href="#separators" title="Link to this heading"></a></h2>
<p>`}),m(P,{key:4,meta:A[4]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>'slash'</code> is the default (<code>/</code>) and adds no modifier class. The separator is a CSS pseudo-element, so the markup never contains separator nodes.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>separator</code></th>
<th>Class</th>
<th>Character</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'slash'</code></td>
<td>—</td>
<td><code>/</code></td>
</tr>
<tr>
<td><code>'chevron'</code></td>
<td><code>en-breadcrumb--chevron</code></td>
<td><code>›</code></td>
</tr>
<tr>
<td><code>'arrow'</code></td>
<td><code>en-breadcrumb--arrow</code></td>
<td><code>→</code></td>
</tr>
<tr>
<td><code>'dot'</code></td>
<td><code>en-breadcrumb--dot</code></td>
<td><code>·</code></td>
</tr>
</tbody>
</table>
</div><p><code>chevron</code> and <code>arrow</code> are mirrored automatically in right-to-left layouts.</p>
<h3 id="custom-separator">Custom separator<a class="header-link" href="#custom-separator" title="Link to this heading"></a></h3>
<p>Set the CSS variable <code>--en-breadcrumb-sep</code>. <strong>The value must be a quoted string</strong>:</p>
<p>`}),m(P,{key:5,meta:A[5]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),m(P,{key:6,meta:A[6]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The <code>separator</code> slot replaces the CSS separator entirely.</p>
<h2 id="home-crumb-and-icons">Home crumb and icons<a class="header-link" href="#home-crumb-and-icons" title="Link to this heading"></a></h2>
<p>`}),m(P,{key:7,meta:A[7]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>home</code> is prepended to any source.</p>
<h2 id="long-trails">Long trails<a class="header-link" href="#long-trails" title="Link to this heading"></a></h2>
<p>When there are more crumbs than <code>max-items</code>, the middle collapses into an ellipsis button.</p>
<p>`}),m(P,{key:8,meta:A[8]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>ellipsis-mode</code></th>
<th>Behaviour</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'expand'</code> (default)</td>
<td>Clicking the button reveals every crumb</td>
</tr>
<tr>
<td><code>'menu'</code></td>
<td>The button opens a dropdown with the hidden crumbs. Needs the optional <code>@en32/popkit</code>; without it the component falls back to <code>'expand'</code> and prints a development warning</td>
</tr>
</tbody>
</table>
</div><p>`}),m(P,{key:9,meta:A[9]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="single-line-modes">Single-line modes<a class="header-link" href="#single-line-modes" title="Link to this heading"></a></h2>
<p>By default a long trail wraps onto several lines. <code>overflow=&quot;scroll&quot;</code> keeps it on one line and scrolls it horizontally without showing a scrollbar. The current page is scrolled into view automatically.</p>
<p>`}),m(P,{key:10,meta:A[10]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>overflow=&quot;nowrap&quot;</code> also keeps one line, but adds no scrolling or clipping: what does not fit simply overflows the breadcrumb. Use it when an ancestor already handles overflow (for example <code>overflow: hidden</code>), or when you only need the crumbs not to wrap.</p>
<h3 id="pinned-crumbs">Pinned crumbs<a class="header-link" href="#pinned-crumbs" title="Link to this heading"></a></h3>
<p><code>sticky-start</code> keeps the first crumb (usually Home) in place while the rest scrolls underneath it. <code>sticky-end</code> does the same for the current page. They can be combined, and they imply a scrollable single line.</p>
<p>`}),m(P,{key:11,meta:A[11]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Pinned crumbs are painted with an opaque background so the scrolled crumbs do not show through. It defaults to <code>--en-bg</code>. When the breadcrumb sits on another surface, set <code>--en-breadcrumb-sticky-bg</code> on the breadcrumb or any ancestor:</p>
<p>`}),m(P,{key:12,meta:A[12]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Notes:</p>
<ul>
<li><code>scroll-to-current</code> (default <code>true</code>) only moves the breadcrumb itself, never the page. It is switched off in the examples above so that the start of the trail stays visible.</li>
<li>Edges are logical: in right-to-left layouts the pinned crumbs swap sides.</li>
<li><code>ellipsis-mode=&quot;menu&quot;</code> works in scrollable trails: the dropdown is positioned with popkit’s <code>fixed</code> strategy so the scroll container does not clip it. This assumes no ancestor of the breadcrumb has a CSS <code>transform</code>, <code>filter</code> or <code>contain</code>; in that case use <code>ellipsis-mode=&quot;expand&quot;</code>.</li>
</ul>
<h2 id="i18n">i18n<a class="header-link" href="#i18n" title="Link to this heading"></a></h2>
<p>Labels may be functions, so they follow your locale:</p>
<p>`}),m(P,{key:13,meta:A[13]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>For dynamic routes, use the route context: <code>label: ({ route }) =&gt; t('nav.userN', { id: route?.params.id })</code>.</p>
<h2 id="custom-rendering">Custom rendering<a class="header-link" href="#custom-rendering" title="Link to this heading"></a></h2>
<p>`}),m(P,{key:14,meta:A[14]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="styling">Styling<a class="header-link" href="#styling" title="Link to this heading"></a></h2>
<p>The current page (<code>aria-current=&quot;page&quot;</code>, or the last crumb) is shown in the normal text colour with a heavier weight; links are muted and turn primary on hover. Links inside the ellipsis dropdown are styled as regular dropdown items, not as crumbs. In forced-colors mode (Windows High Contrast) the separators and the current page stay visible.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>overflow</code></th>
<th>Class</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'wrap'</code></td>
<td>—</td>
</tr>
<tr>
<td><code>'nowrap'</code></td>
<td><code>en-breadcrumb--nowrap</code></td>
</tr>
<tr>
<td><code>'scroll'</code></td>
<td><code>en-breadcrumb--scroll</code></td>
</tr>
</tbody>
</table>
</div><p><code>sticky-start</code> and <code>sticky-end</code> add <code>en-breadcrumb--sticky-start</code> and <code>en-breadcrumb--sticky-end</code>.</p>
<p>The stylesheet also works with class-less markup (<code>ol &gt; li &gt; a</code>), which is handy when a crumb must be rendered by hand.</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li>The wrapper is a <code>&lt;nav&gt;</code> with <code>aria-label</code> (default <code>&quot;Breadcrumb&quot;</code>).</li>
<li>The current page crumb has <code>aria-current=&quot;page&quot;</code>.</li>
<li>The ellipsis button has an accessible name from <code>ellipsis-label</code>.</li>
<li>In <code>menu</code> mode the hidden crumbs are <code>role=&quot;menuitem&quot;</code> links. This gives full keyboard support but menu semantics for plain navigation, which is why <code>expand</code> is the default.</li>
</ul>
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
<td>Explicit crumbs (flat). Turns the automatic trail off</td>
</tr>
<tr>
<td><code>routes</code></td>
<td><code>RouteLike[]</code></td>
<td>—</td>
<td>Route tree (<code>router.options.routes</code>). The trail to the current route inside it is shown</td>
</tr>
<tr>
<td><code>home</code></td>
<td><code>NavItemInput | false</code></td>
<td><code>false</code></td>
<td>First crumb, prepended to any source</td>
</tr>
<tr>
<td><code>separator</code></td>
<td><code>'slash' | 'chevron' | 'arrow' | 'dot'</code></td>
<td><code>'slash'</code></td>
<td>Adds <code>en-breadcrumb--chevron/--arrow/--dot</code> (nothing for <code>slash</code>)</td>
</tr>
<tr>
<td><code>maxItems</code></td>
<td><code>number</code></td>
<td>—</td>
<td>Collapse the middle when there are more crumbs than this</td>
</tr>
<tr>
<td><code>itemsBefore</code></td>
<td><code>number</code></td>
<td><code>1</code></td>
<td>Crumbs kept before the ellipsis</td>
</tr>
<tr>
<td><code>itemsAfter</code></td>
<td><code>number</code></td>
<td><code>2</code></td>
<td>Crumbs kept after the ellipsis (at least 1)</td>
</tr>
<tr>
<td><code>ellipsisMode</code></td>
<td><code>'expand' | 'menu'</code></td>
<td><code>'expand'</code></td>
<td><code>'menu'</code> needs <code>@en32/popkit</code>; falls back to <code>'expand'</code> without it</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td><code>'Breadcrumb'</code></td>
<td>Label of the <code>&lt;nav&gt;</code></td>
</tr>
<tr>
<td><code>ellipsisLabel</code></td>
<td><code>NavValue&lt;string&gt;</code></td>
<td><code>'Show hidden items'</code></td>
<td>Accessible name of the ellipsis button</td>
</tr>
<tr>
<td><code>matchMode</code></td>
<td><code>'exact' | 'prefix' | 'trail'</code></td>
<td><code>'trail'</code></td>
<td>How <code>routes</code> is matched against the current route</td>
</tr>
<tr>
<td><code>routeMetaKey</code></td>
<td><code>string | false</code></td>
<td>from <code>NavConfig</code></td>
<td>Overrides where route metadata is read</td>
</tr>
<tr>
<td><code>mapMeta</code></td>
<td><code>(route: RouteLike) =&gt; NavItemInput | undefined</code></td>
<td>from <code>NavConfig</code></td>
<td>Overrides the route-to-item mapping</td>
</tr>
<tr>
<td><code>overflow</code></td>
<td><code>'wrap' | 'nowrap' | 'scroll'</code></td>
<td><code>'wrap'</code></td>
<td>Behaviour of a trail wider than its container. See <a href="#single-line-modes">Single-line modes</a></td>
</tr>
<tr>
<td><code>stickyStart</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Pin the first crumb to the start edge while scrolling. Implies a scrollable single line</td>
</tr>
<tr>
<td><code>stickyEnd</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Pin the last crumb (current page) to the end edge while scrolling. Implies a scrollable single line</td>
</tr>
<tr>
<td><code>scrollToCurrent</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>In a scrollable trail, scroll the current page into view on mount and when the trail changes</td>
</tr>
<tr>
<td><code>as</code></td>
<td><code>string</code></td>
<td><code>'nav'</code></td>
<td>Root element. Keep a <code>nav</code> (or add <code>role=&quot;navigation&quot;</code>) so it stays a landmark</td>
</tr>
<tr>
<td><code>rootClass</code></td>
<td><code>ClassValue</code></td>
<td>—</td>
<td>Extra classes on the root element</td>
</tr>
</tbody>
</table>
</div><h3 id="item-fields-used">Item fields used<a class="header-link" href="#item-fields-used" title="Link to this heading"></a></h3>
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
<td>Identity of the crumb</td>
</tr>
<tr>
<td><code>label</code> / <code>title</code></td>
<td>Text (<code>title</code> wins)</td>
</tr>
<tr>
<td><code>icon</code></td>
<td>Rendered before the text</td>
</tr>
<tr>
<td><code>to</code> / <code>href</code></td>
<td>Target. Without one, the crumb is plain text</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>aria-label</code> of the link</td>
</tr>
<tr>
<td><code>hidden</code></td>
<td><code>true</code> or <code>{ breadcrumb: true }</code> removes the crumb</td>
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
<td><code>select</code></td>
<td><code>{ item: NavNode, event: MouseEvent }</code></td>
<td>A crumb link was clicked (also inside the ellipsis menu)</td>
</tr>
<tr>
<td><code>expand</code></td>
<td><code>{ items: NavNode[] }</code></td>
<td>The ellipsis button revealed the hidden crumbs (<code>expand</code> mode)</td>
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
<td><code>{ node, last, index }</code></td>
<td>Replaces the content of a crumb. <code>index</code> is the position in the full list</td>
</tr>
<tr>
<td><code>separator</code></td>
<td><code>{ index }</code></td>
<td>Replaces the CSS separator (rendered with <code>aria-hidden</code>)</td>
</tr>
<tr>
<td><code>ellipsis</code></td>
<td>—</td>
<td>Content of the ellipsis button (default <code>…</code>)</td>
</tr>
</tbody>
</table>
</div><h3 id="markup">Markup<a class="header-link" href="#markup" title="Link to this heading"></a></h3>
<p>`}),m(P,{key:15,meta:A[15]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>With <code>ellipsis-mode=&quot;menu&quot;</code> and popkit loaded, the ellipsis becomes <code>span.en-dropdown[data-enjs] &gt; button.en-breadcrumb__ellipsis + div.en-dropdown__menu &gt; a.en-dropdown__item[role=&quot;menuitem&quot;]</code>. Popkit owns <code>aria-expanded</code>, <code>aria-controls</code>, <code>aria-haspopup</code> and <code>hidden</code> there.</p>
<h3 id="composable-useellipsismenu">Composable: <code>useEllipsisMenu</code><a class="header-link" href="#composable-useellipsismenu" title="Link to this heading"></a></h3>
<p>Creates the popkit dropdown behind the ellipsis. Used internally; exported for custom breadcrumbs. Call it synchronously during <code>setup()</code>. Client only.</p>
<p>`}),m(P,{key:16,meta:A[16]}),m(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td>The <code>ol.en-breadcrumb</code> element</td>
</tr>
<tr>
<td><code>popkit</code></td>
<td><code>MaybeRefOrGetter&lt;PopkitLike | null | undefined&gt;</code></td>
<td>Loaded popkit module</td>
</tr>
<tr>
<td><code>enabled</code></td>
<td><code>MaybeRefOrGetter&lt;boolean&gt;</code></td>
<td>Turning it off removes the dropdown</td>
</tr>
<tr>
<td><code>strategy</code></td>
<td><code>MaybeRefOrGetter&lt;'absolute' | 'fixed' | undefined&gt;</code></td>
<td>Popkit positioning strategy (default <code>'absolute'</code>). Use <code>'fixed'</code> when the list is a scroll container. Changing it rebuilds the dropdown</td>
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
<td>Create or rebuild the dropdown to match the DOM. Cheap when nothing changed</td>
</tr>
<tr>
<td><code>destroy()</code></td>
<td>Remove the dropdown</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>BreadcrumbProps</code>, <code>BreadcrumbSeparator</code>, <code>BreadcrumbEllipsisMode</code>, <code>BreadcrumbOverflow</code>, <code>BreadcrumbSelectPayload</code>, <code>BreadcrumbExpandPayload</code>, <code>BreadcrumbItemSlotProps</code>, <code>UseEllipsisMenuOptions</code>, <code>UseEllipsisMenuReturn</code>.</p>
<h3 id="development-warnings">Development warnings<a class="header-link" href="#development-warnings" title="Link to this heading"></a></h3>
<ul>
<li><code>ellipsis-mode=&quot;menu&quot;</code> without a loadable <code>@en32/popkit</code>: falls back to <code>'expand'</code>.</li>
<li>Duplicate item keys.</li>
</ul>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./nav-model">Navigation model</a></li>
<li><a href="./configuration#optional-popkit">Configuration</a></li>
</ul>
`})]),null])}}),I={title:`Breadcrumb`,description:`ENBreadcrumb renders a breadcrumb trail. It builds itself from the current route ($route.matched), from a route tree, or from explicit items.`},L=F;export{L as default,I as meta};