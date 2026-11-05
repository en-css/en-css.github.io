import{A as e,At as t,F as n,H as r,I as i,R as a,V as o,W as s,_t as c,at as l,et as u,it as d,l as f,m as p,n as m,nt as h,q as g,r as _,s as v,tt as y}from"./components-BJME9hSd.js";import{n as b,t as x}from"./src-BXRgfvcu.js";var S={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFlex</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENFlexItem } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:p(s({__name:`1`,setup(e){return(e,a)=>(d(),i(t(b),{align:`between`,gap:`2`},{default:c(()=>[r(t(x),{grow:`1`},{default:c(()=>[...a[0]||=[n(`div`,{class:`box`},`Search (grows)`,-1)]]),_:1}),a[1]||=n(`div`,{class:`box`},`Actions`,-1)]),_:1}))}}),[[`__scopeId`,`data-v-efcd62fa`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFlex</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENFlexItem } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground"> align</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"between"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-token-function"> grow</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Search (grows)&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Actions&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:p(s({__name:`2`,setup(i){return(i,o)=>(d(),a(e,null,[r(t(b),{column:``,gap:`2`},{default:c(()=>[...o[0]||=[n(`div`,{class:`box`},`Column (shorthand)`,-1),n(`div`,{class:`box`},`Second`,-1)]]),_:1}),r(t(b),{direction:`row-reverse`,gap:`2`,style:{"margin-top":`var(--en-space-4)`}},{default:c(()=>[...o[1]||=[n(`div`,{class:`box`},`1`,-1),n(`div`,{class:`box`},`2`,-1),n(`div`,{class:`box`},`3`,-1)]]),_:1})],64))}}),[[`__scopeId`,`data-v-15453841`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFlex } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-token-function"> column</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Column (shorthand)&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Second&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-token-function"> direction</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"row-reverse"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">margin-top</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-4)</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>1&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>2&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>3&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null},3:{component:p(s({__name:`3`,setup(e){return(e,r)=>(d(),i(t(b),{align:`between`,gap:`2`},{default:c(()=>[...r[0]||=[n(`div`,{class:`box`},`Logo`,-1),n(`div`,{class:`box`},`Menu`,-1),n(`div`,{class:`box`},`Account`,-1)]]),_:1}))}}),[[`__scopeId`,`data-v-8bae317e`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFlex } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground"> align</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"between"</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Logo&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Menu&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Account&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:3,lang:`vue`,injectKind:null,editable:!1,source:null},4:{component:p(s({__name:`4`,setup(e){return(e,r)=>(d(),i(t(b),{gap:`3`,"align-items":`start`},{default:c(()=>[...r[0]||=[n(`div`,{class:`box`},`Short`,-1),n(`div`,{class:`box`},[o(`Taller`),n(`br`),o(`content`),n(`br`),o(`here`)],-1),n(`div`,{class:`box`},`Short`,-1)]]),_:1}))}}),[[`__scopeId`,`data-v-5112461a`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFlex } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-token-function"> align-items</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"start"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Short&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Taller&#x3C;</span><span class="shiki-token-string-expression">br</span><span class="shiki-foreground">>content&#x3C;</span><span class="shiki-token-string-expression">br</span><span class="shiki-foreground">>here&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>Short&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:4,lang:`vue`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground"> align</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"between"</span><span class="shiki-token-function"> align-items</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"start"</span><span class="shiki-foreground">>...&#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:5,lang:`vue`,injectKind:null,editable:!1,source:null},6:{component:p(s({__name:`6`,setup(e){return(e,a)=>(d(),i(t(b),{gap:`2`},{default:c(()=>[r(t(x),{grow:`none`},{default:c(()=>[...a[0]||=[n(`div`,{class:`box`},`none`,-1)]]),_:1}),r(t(x),{grow:`1`},{default:c(()=>[...a[1]||=[n(`div`,{class:`box`},`1`,-1)]]),_:1}),r(t(x),{grow:`1`},{default:c(()=>[...a[2]||=[n(`div`,{class:`box`},`1`,-1)]]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-fca48dd1`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFlex</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENFlexItem } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-token-function"> grow</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>none&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-token-function"> grow</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>1&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-token-function"> grow</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>1&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:6,lang:`vue`,injectKind:null,editable:!1,source:null},7:{component:p(s({__name:`7`,setup(e){return(e,a)=>(d(),i(t(b),{"responsive-container":``,gap:`3`},{default:c(()=>[r(t(x),{"grow-md":`1`},{default:c(()=>[...a[0]||=[n(`div`,{class:`box`},`A`,-1)]]),_:1}),r(t(x),{"grow-md":`1`},{default:c(()=>[...a[1]||=[n(`div`,{class:`box`},`B`,-1)]]),_:1}),r(t(x),{"grow-md":`1`},{default:c(()=>[...a[2]||=[n(`div`,{class:`box`},`C`,-1)]]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-f1f431cf`]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENFlex</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENFlexItem } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/layout'</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Children are full width until the container is 480px wide --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-token-function"> responsive-container</span><span class="shiki-token-function"> gap</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-token-function"> grow-md</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>A&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-token-function"> grow-md</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>B&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-token-function"> grow-md</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"box"</span><span class="shiki-foreground">>C&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">ENFlexItem</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.box</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  background</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-primary-subtle)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:7,lang:`vue`,injectKind:null,editable:!1,source:null},8:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-token-function"> responsive-container</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;!-- This inner flex switches to a column below the container's 480px --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;ENFlex direction-md="row" column gap="2"></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;div>One&#x3C;/div></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;div>Two&#x3C;/div></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ENFlex</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:8,lang:`vue`,injectKind:null,editable:!1,source:null}},C=[{id:`flex`,text:`Flex`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`direction-and-wrap`,text:`Direction and wrap`,level:2},{id:`alignment`,text:`Alignment`,level:2},{id:`cross-axis-alignment`,text:`Cross-axis alignment`,level:2},{id:`item-growth`,text:`Item growth`,level:2},{id:`container-query-flex`,text:`Container-query flex`,level:2},{id:`api`,text:`API`,level:2},{id:`enflex-props`,text:"`ENFlex` props",level:3},{id:`enflexitem-props`,text:"`ENFlexItem` props",level:3},{id:`slots`,text:`Slots`,level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],w=[{id:`flex`,text:`Flex`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`direction-and-wrap`,text:`Direction and wrap`,level:2,children:[]},{id:`alignment`,text:`Alignment`,level:2,children:[]},{id:`cross-axis-alignment`,text:`Cross-axis alignment`,level:2,children:[]},{id:`item-growth`,text:`Item growth`,level:2,children:[]},{id:`container-query-flex`,text:`Container-query flex`,level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`enflex-props`,text:"`ENFlex` props",level:3,children:[]},{id:`enflexitem-props`,text:"`ENFlexItem` props",level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],T={css:[],js:[],cleanup:[]},E=s({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>g(`div`,{class:n},[e.meta.isLive?g(_,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:g(m,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),D=s({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/layout/flex.md`,setup(){l(`vlm-toc`,{flat:C,tree:w}),y(()=>f(C,w)),h(()=>f([],[]));let e=v(T);return l(`vlm-inject`,e),y(()=>e.mount()),u(()=>e.beforeUnmount()),h(()=>e.unmounted()),()=>g(`div`,{class:`vlm-page`},[g(`div`,{class:`vlm-content`},[g(`div`,{class:`vlm-md`,innerHTML:`<h1 id="flex">Flex<a class="header-link" href="#flex" title="Link to this heading"></a></h1>
<p><code>ENFlex</code> is a flexbox container and <code>ENFlexItem</code> is an optional helper for its children. They map one to one onto the EN.CSS flex modifiers: direction, wrap, alignment and container-query responsiveness.</p>
<p>Requires <code>core/layout.css</code> (included in <code>en.css</code>).</p>
<p>`}),g(E,{key:0,meta:S[0]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>`}),g(E,{key:1,meta:S[1]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>ENFlexItem</code> is optional: any plain element is a valid flex child.</p>
<h2 id="direction-and-wrap">Direction and wrap<a class="header-link" href="#direction-and-wrap" title="Link to this heading"></a></h2>
<p>`}),g(E,{key:2,meta:S[2]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>direction=&quot;row&quot;</code></td>
<td><code>.en-flex--row</code></td>
<td>Explicit row</td>
</tr>
<tr>
<td><code>direction=&quot;row-reverse&quot;</code></td>
<td><code>.en-flex--row-reverse</code></td>
<td>Reversed row</td>
</tr>
<tr>
<td><code>direction=&quot;col&quot;</code></td>
<td><code>.en-flex--col</code></td>
<td>Column</td>
</tr>
<tr>
<td><code>direction=&quot;col-reverse&quot;</code></td>
<td><code>.en-flex--col-reverse</code></td>
<td>Reversed column</td>
</tr>
<tr>
<td><code>column</code></td>
<td><code>.en-flex--col</code></td>
<td>Shorthand for <code>direction=&quot;col&quot;</code>. <code>direction</code> wins when both are set</td>
</tr>
<tr>
<td><code>wrap</code></td>
<td><code>.en-flex--wrap</code></td>
<td>Items wrap onto several lines</td>
</tr>
<tr>
<td><code>nowrap</code></td>
<td><code>.en-flex--nowrap</code></td>
<td>Never wrap, for example to override a wrapping responsive container</td>
</tr>
</tbody>
</table>
</div><h2 id="alignment">Alignment<a class="header-link" href="#alignment" title="Link to this heading"></a></h2>
<p><code>align</code> is a <strong>preset</strong>, not a single CSS property. In EN.CSS:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>align</code></th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'start'</code></td>
<td>Main axis start (<code>justify-content: flex-start</code>)</td>
</tr>
<tr>
<td><code>'end'</code></td>
<td>Main axis end (<code>justify-content: flex-end</code>)</td>
</tr>
<tr>
<td><code>'between'</code></td>
<td>Space between items (<code>justify-content: space-between</code>) and vertically centered (<code>align-items: center</code>)</td>
</tr>
<tr>
<td><code>'around'</code></td>
<td>Space around items (<code>justify-content: space-around</code>)</td>
</tr>
<tr>
<td><code>'center'</code></td>
<td>Centers items on <strong>both</strong> axes</td>
</tr>
<tr>
<td><code>'stretch'</code></td>
<td><code>align-items: stretch</code> on the cross axis</td>
</tr>
</tbody>
</table>
</div><p>`}),g(E,{key:3,meta:S[3]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="cross-axis-alignment">Cross-axis alignment<a class="header-link" href="#cross-axis-alignment" title="Link to this heading"></a></h2>
<p><code>align</code> is a preset that mostly controls the <strong>main axis</strong>, so it cannot set <code>align-items</code> on its own. <code>align-items</code> has its own prop, <code>align-items</code> (<code>alignItems</code> in a script), which maps to <code>.en-flex--align-*</code>:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>align-items</code></th>
<th>Class</th>
<th><code>align-items</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'start'</code></td>
<td><code>.en-flex--align-start</code></td>
<td><code>start</code></td>
</tr>
<tr>
<td><code>'center'</code></td>
<td><code>.en-flex--align-center</code></td>
<td><code>center</code></td>
</tr>
<tr>
<td><code>'end'</code></td>
<td><code>.en-flex--align-end</code></td>
<td><code>end</code></td>
</tr>
<tr>
<td><code>'baseline'</code></td>
<td><code>.en-flex--align-baseline</code></td>
<td><code>baseline</code></td>
</tr>
<tr>
<td><code>'stretch'</code></td>
<td><code>.en-flex--align-stretch</code></td>
<td><code>stretch</code></td>
</tr>
</tbody>
</table>
</div><p>`}),g(E,{key:4,meta:S[4]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Both props can be combined when each axis needs its own value. Here the items are spread across the row (<code>align</code>, main axis) but aligned to the top (<code>align-items</code>, cross axis):</p>
<p>`}),g(E,{key:5,meta:S[5]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<blockquote>
<p><code>align=&quot;between&quot;</code> already centers the cross axis (<code>align-items: center</code>), and <code>align=&quot;center&quot;</code> centers both axes. <code>align-items</code> is applied after the preset in the stylesheet, so it wins when both are set. <code>align=&quot;stretch&quot;</code> and <code>align-items=&quot;stretch&quot;</code> produce the same cross-axis result.</p>
</blockquote>
<h2 id="item-growth">Item growth<a class="header-link" href="#item-growth" title="Link to this heading"></a></h2>
<p><code>ENFlexItem</code> sets how a child grows with <code>grow</code>:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>grow</code></th>
<th>Class</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'1'</code></td>
<td><code>.en-flex-1</code></td>
<td><code>flex: 1 1 0%</code>, takes the remaining space</td>
</tr>
<tr>
<td><code>'auto'</code></td>
<td><code>.en-flex-auto</code></td>
<td><code>flex: 1 1 auto</code>, starts from the content size and can grow and shrink</td>
</tr>
<tr>
<td><code>'none'</code></td>
<td><code>.en-flex-none</code></td>
<td>Does not grow or shrink</td>
</tr>
<tr>
<td><code>'full'</code></td>
<td><code>.en-flex-full</code></td>
<td>100% wide</td>
</tr>
</tbody>
</table>
</div><p>`}),g(E,{key:6,meta:S[6]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="container-query-flex">Container-query flex<a class="header-link" href="#container-query-flex" title="Link to this heading"></a></h2>
<p><code>responsive-container</code> turns the flex into a <strong>container-query root</strong> (<code>.en-flex--responsive</code>). Children are full width by default and opt in to sizing with <code>grow-*</code> once the container is wide enough, so the layout follows the width of the flex itself, not the viewport.</p>
<p>`}),g(E,{key:7,meta:S[7]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Suffix</th>
<th>From a container width of</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>Xxs</code></td>
<td>240px</td>
</tr>
<tr>
<td><code>Xs</code></td>
<td>320px</td>
</tr>
<tr>
<td><code>Sm</code></td>
<td>360px</td>
</tr>
<tr>
<td><code>Md</code></td>
<td>480px</td>
</tr>
<tr>
<td><code>Lg</code></td>
<td>640px</td>
</tr>
<tr>
<td><code>Xl</code></td>
<td>768px</td>
</tr>
</tbody>
</table>
</div><ul>
<li><code>ENFlexItem</code> has <code>grow-xxs</code> … <code>grow-xl</code>, with <code>'1'</code> or <code>'auto'</code>.</li>
<li><code>ENFlex</code> has <code>direction-xxs</code> … <code>direction-xl</code>, with <code>'row'</code> or <code>'col'</code>.</li>
</ul>
<blockquote>
<p><strong><code>direction-*</code> reacts to the nearest ancestor responsive flex.</strong> It applies to a flex that is <strong>nested inside</strong> a <code>responsive-container</code> flex, not to the responsive flex itself.</p>
</blockquote>
<p>`}),g(E,{key:8,meta:S[8]}),g(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="api">API<a class="header-link" href="#api" title="Link to this heading"></a></h2>
<h3 id="enflex-props"><code>ENFlex</code> props<a class="header-link" href="#enflex-props" title="Link to this heading"></a></h3>
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
<td><code>direction</code></td>
<td><code>'row' | 'row-reverse' | 'col' | 'col-reverse'</code></td>
<td>—</td>
<td>Explicit direction. Wins over <code>column</code></td>
</tr>
<tr>
<td><code>column</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Shorthand for <code>direction=&quot;col&quot;</code></td>
</tr>
<tr>
<td><code>wrap</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td><code>.en-flex--wrap</code></td>
</tr>
<tr>
<td><code>nowrap</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td><code>.en-flex--nowrap</code></td>
</tr>
<tr>
<td><code>align</code></td>
<td><code>'center' | 'between' | 'around' | 'start' | 'end' | 'stretch'</code></td>
<td>—</td>
<td>Alignment preset, mostly the main axis. See <a href="#alignment">Alignment</a></td>
</tr>
<tr>
<td><code>alignItems</code></td>
<td><code>'start' | 'center' | 'end' | 'baseline' | 'stretch'</code></td>
<td>—</td>
<td>Cross-axis alignment only (<code>.en-flex--align-*</code>). See <a href="#cross-axis-alignment">Cross-axis alignment</a></td>
</tr>
<tr>
<td><code>gap</code> / <code>gapX</code> / <code>gapY</code></td>
<td><code>GapInput</code></td>
<td>—</td>
<td>Gap. See <a href="./foundations#gap">Foundations</a></td>
</tr>
<tr>
<td><code>responsiveContainer</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Container-query root (<code>.en-flex--responsive</code>)</td>
</tr>
<tr>
<td><code>directionXxs</code> / <code>directionXs</code> / <code>directionSm</code> / <code>directionMd</code> / <code>directionLg</code> / <code>directionXl</code></td>
<td><code>'row' | 'col'</code></td>
<td>—</td>
<td>Direction from a container width. Reacts to the nearest ancestor responsive flex</td>
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
</div><h3 id="enflexitem-props"><code>ENFlexItem</code> props<a class="header-link" href="#enflexitem-props" title="Link to this heading"></a></h3>
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
<td><code>grow</code></td>
<td><code>'1' | 'auto' | 'none' | 'full'</code></td>
<td>—</td>
<td>Item sizing</td>
</tr>
<tr>
<td><code>growXxs</code> / <code>growXs</code> / <code>growSm</code> / <code>growMd</code> / <code>growLg</code> / <code>growXl</code></td>
<td><code>'1' | 'auto'</code></td>
<td>—</td>
<td>Growth from a container width, inside a responsive flex. <code>none</code> and <code>full</code> have no responsive class</td>
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
<td><code>ENFlex</code></td>
<td><code>default</code></td>
<td>Flex children</td>
</tr>
<tr>
<td><code>ENFlexItem</code></td>
<td><code>default</code></td>
<td>Content</td>
</tr>
</tbody>
</table>
</div><h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p><code>FlexProps</code>, <code>FlexItemProps</code>, <code>FlexAlign</code>, <code>FlexItemsAlign</code>, <code>FlexDirection</code>, <code>FlexResponsiveDirection</code>, <code>FlexItemGrow</code>, <code>FlexItemResponsiveGrow</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="./stack">Stack</a>: vertical spacing without a flex container</li>
<li><a href="./cluster">Cluster</a>: a wrapping row on a shared center line</li>
<li><a href="./foundations">Foundations</a></li>
</ul>
`})]),null])}}),O={title:`Flex`,description:`ENFlex is a flexbox container and ENFlexItem is an optional helper for its children. They map one to one onto the EN.CSS flex modifiers: direction, wrap, alignment and container-query responsiveness.`},k=D;export{k as default,O as meta};