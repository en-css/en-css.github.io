import{A as e,F as t,I as n,L as r,Pt as i,R as a,Tt as o,V as s,W as c,at as l,c as u,ct as d,et as f,h as p,it as m,n as h,nt as g,ot as _,q as v,r as y,tt as b,u as x}from"./components-DGWjtEwO.js";var S=`<span class="en-chip">JavaScript</span>`,C={__name:`0`,setup(e){let t=o(null);return b(()=>{t.value&&(t.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),f(()=>{if(!t.value)return;let e=t.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(m(),a(`div`,{ref_key:`__vlmHtmlRoot`,ref:t,class:`vlm-html-live`},null,512))}},w=`<div class="en-flex" style="--en-gap: var(--en-space-2)">
  <span class="en-chip">JavaScript</span>
  <span class="en-chip">TypeScript</span>
  <span class="en-chip">React</span>
  <span class="en-chip">Vue</span>
</div>`,T={__name:`1`,setup(e){let t=o(null);return b(()=>{t.value&&(t.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),f(()=>{if(!t.value)return;let e=t.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(m(),a(`div`,{ref_key:`__vlmHtmlRoot`,ref:t,class:`vlm-html-live`},null,512))}},E=`<div class="en-flex" style="--en-gap: var(--en-space-2); flex-wrap: wrap">
  <span class="en-chip">
    Jakarta
    <button class="en-chip__remove" aria-label="Remove Jakarta">×</button>
  </span>
  <span class="en-chip">
    Bandung
    <button class="en-chip__remove" aria-label="Remove Bandung">×</button>
  </span>
  <span class="en-chip">
    Surabaya
    <button class="en-chip__remove" aria-label="Remove Surabaya">×</button>
  </span>
  <span class="en-chip">
    Yogyakarta
    <button class="en-chip__remove" aria-label="Remove Yogyakarta">×</button>
  </span>
</div>`,D={__name:`2`,setup(e){let t=o(null);return b(()=>{t.value&&(t.value.innerHTML=E,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),f(()=>{if(!t.value)return;let e=t.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(m(),a(`div`,{ref_key:`__vlmHtmlRoot`,ref:t,class:`vlm-html-live`},null,512))}},O={class:`en-flex`,style:{"--en-gap":`var(--en-space-2)`,"flex-wrap":`wrap`}},k=[`aria-label`,`onClick`],A={key:0,class:`en-text-muted`},j={__name:`3`,setup(n){let c=o([`Frontend`,`Backend`,`DevOps`,`Design`]);function l(e){c.value.splice(e,1)}return(n,o)=>(m(),a(`div`,O,[(m(!0),a(e,null,_(c.value,(e,n)=>(m(),a(`span`,{key:n,class:`en-chip`},[s(i(e)+` `,1),t(`button`,{class:`en-chip__remove`,"aria-label":`Remove ${e}`,onClick:e=>l(n)},`×`,8,k)]))),128)),c.value.length===0?(m(),a(`span`,A,`All tags removed`)):r(``,!0)]))}},M=`<div class="en-card">
  <div class="en-card__body">
    <div class="en-font-semibold en-mb-2">Active Filters</div>
    <div class="en-flex" style="--en-gap: var(--en-space-2); flex-wrap: wrap">
      <span class="en-chip">
        Price: $0-$100
        <button class="en-chip__remove" aria-label="Remove price filter">×</button>
      </span>
      <span class="en-chip">
        Category: Electronics
        <button class="en-chip__remove" aria-label="Remove category filter">×</button>
      </span>
      <span class="en-chip">
        In Stock
        <button class="en-chip__remove" aria-label="Remove stock filter">×</button>
      </span>
      <button class="en-btn en-btn--sm en-btn--ghost">Clear All</button>
    </div>
  </div>
</div>`,N={__name:`4`,setup(e){let t=o(null);return b(()=>{t.value&&(t.value.innerHTML=M,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),f(()=>{if(!t.value)return;let e=t.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(m(),a(`div`,{ref_key:`__vlmHtmlRoot`,ref:t,class:`vlm-html-live`},null,512))}},P=`<div class="en-card">
  <div class="en-card__body">
    <label for="tag-input" class="en-font-semibold en-block en-mb-2">
      Selected Technologies
    </label>
    <div class="en-flex" style="--en-gap: var(--en-space-2); flex-wrap: wrap; margin-block-end: var(--en-space-3)">
      <span class="en-chip">
        React
        <button class="en-chip__remove" aria-label="Remove React">×</button>
      </span>
      <span class="en-chip">
        Vue.js
        <button class="en-chip__remove" aria-label="Remove Vue.js">×</button>
      </span>
      <span class="en-chip">
        Angular
        <button class="en-chip__remove" aria-label="Remove Angular">×</button>
      </span>
    </div>
    <input type="text" id="tag-input" class="en-input" placeholder="Add more tags...">
  </div>
</div>`,F={__name:`5`,setup(e){let t=o(null);return b(()=>{t.value&&(t.value.innerHTML=P,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),f(()=>{if(!t.value)return;let e=t.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(m(),a(`div`,{ref_key:`__vlmHtmlRoot`,ref:t,class:`vlm-html-live`},null,512))}},I={};function L(e,t){let r=d(`Downloadable`);return m(),n(r,{"dev-url":`components/extended/components-chip.css`})}var R={0:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">>JavaScript&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Simple chip`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">>JavaScript&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">>TypeScript&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">>React&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">>Vue&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Multiple chips`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); flex-wrap: wrap"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Jakarta</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove Jakarta"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Bandung</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove Bandung"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Surabaya</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove Surabaya"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Yogyakarta</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove Yogyakarta"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Removable chips`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> tags</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">([</span></span>
<span class="line"><span class="shiki-token-string-expression">  'Frontend'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-token-string-expression">  'Backend'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-token-string-expression">  'DevOps'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-token-string-expression">  'Design'</span></span>
<span class="line"><span class="shiki-foreground">])</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">function</span><span class="shiki-token-function"> removeTag</span><span class="shiki-foreground">(index) {</span></span>
<span class="line"><span class="shiki-token-constant">  tags</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">value</span><span class="shiki-token-function">.splice</span><span class="shiki-foreground">(index</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 1</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); flex-wrap: wrap"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> v-for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"(tag, index) in tags"</span><span class="shiki-token-function"> :key</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"index"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      {{ tag }}</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> :aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"\`Remove \${tag}\`"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"removeTag(index)"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> v-if</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tags.length === 0"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted"</span><span class="shiki-foreground">>All tags removed&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Chip removal`,key:3,lang:`vue`,injectKind:null,editable:!1,source:null},4:{component:N,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold en-mb-2"</span><span class="shiki-foreground">>Active Filters&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); flex-wrap: wrap"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Price: $0-$100</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove price filter"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Category: Electronics</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove category filter"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        In Stock</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove stock filter"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm en-btn--ghost"</span><span class="shiki-foreground">>Clear All&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Active filter chips`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tag-input"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold en-block en-mb-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Selected Technologies</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); flex-wrap: wrap; margin-block-end: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        React</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove React"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Vue.js</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove Vue.js"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Angular</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-chip__remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove Angular"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tag-input"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Add more tags..."</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Tag input with chips`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-constant">document</span><span class="shiki-token-function">.querySelectorAll</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-chip__remove'</span><span class="shiki-foreground">)</span><span class="shiki-token-function">.forEach</span><span class="shiki-foreground">(btn </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  btn</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'click'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">    btn</span><span class="shiki-token-function">.closest</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-chip'</span><span class="shiki-foreground">)</span><span class="shiki-token-function">.remove</span><span class="shiki-foreground">();</span></span>
<span class="line"><span class="shiki-foreground">  });</span></span>
<span class="line"><span class="shiki-foreground">});</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:6,lang:`javascript`,injectKind:null,editable:!1,source:null},7:{component:p(I,[[`render`,L]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/extended/components-chip.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:7,lang:`vue`,injectKind:null,editable:!1,source:null}},z=[{id:`chip`,text:`Chip`,level:1},{id:`basic-chip`,text:`Basic Chip`,level:2},{id:`multiple-chips`,text:`Multiple Chips`,level:2},{id:`with-remove-button`,text:`With Remove Button`,level:2},{id:`interactive-example`,text:`Interactive Example`,level:2},{id:`filter-tags`,text:`Filter Tags`,level:2},{id:`tag-input-simulation`,text:`Tag Input Simulation`,level:2},{id:`classes`,text:`Classes`,level:2},{id:`javascript-integration`,text:`JavaScript Integration`,level:2},{id:`additional-notes`,text:`Additional Notes`,level:2}],B=[{id:`chip`,text:`Chip`,level:1,children:[{id:`basic-chip`,text:`Basic Chip`,level:2,children:[]},{id:`multiple-chips`,text:`Multiple Chips`,level:2,children:[]},{id:`with-remove-button`,text:`With Remove Button`,level:2,children:[]},{id:`interactive-example`,text:`Interactive Example`,level:2,children:[]},{id:`filter-tags`,text:`Filter Tags`,level:2,children:[]},{id:`tag-input-simulation`,text:`Tag Input Simulation`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`javascript-integration`,text:`JavaScript Integration`,level:2,children:[]},{id:`additional-notes`,text:`Additional Notes`,level:2,children:[]}]}],V={css:[],js:[],cleanup:[]},H=c({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>v(`div`,{class:n},[e.meta.isLive?v(y,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:v(h,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),U=c({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/extended/chip.md`,setup(){l(`vlm-toc`,{flat:z,tree:B}),b(()=>x(z,B)),g(()=>x([],[]));let e=u(V);return l(`vlm-inject`,e),b(()=>e.mount()),f(()=>e.beforeUnmount()),g(()=>e.unmounted()),()=>v(`div`,{class:`vlm-page`},[v(`div`,{class:`vlm-content`},[v(`div`,{class:`vlm-md`,innerHTML:`<h1 id="chip">Chip<a class="header-link" href="#chip" title="Link to this heading"></a></h1>
<p>Removable tag component for filters, selections, and multi-select inputs.</p>
<h2 id="basic-chip">Basic Chip<a class="header-link" href="#basic-chip" title="Link to this heading"></a></h2>
<p>`}),v(H,{key:0,meta:R[0]}),v(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="multiple-chips">Multiple Chips<a class="header-link" href="#multiple-chips" title="Link to this heading"></a></h2>
<p>`}),v(H,{key:1,meta:R[1]}),v(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="with-remove-button">With Remove Button<a class="header-link" href="#with-remove-button" title="Link to this heading"></a></h2>
<p>`}),v(H,{key:2,meta:R[2]}),v(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="interactive-example">Interactive Example<a class="header-link" href="#interactive-example" title="Link to this heading"></a></h2>
<p>`}),v(H,{key:3,meta:R[3]}),v(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="filter-tags">Filter Tags<a class="header-link" href="#filter-tags" title="Link to this heading"></a></h2>
<p>`}),v(H,{key:4,meta:R[4]}),v(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="tag-input-simulation">Tag Input Simulation<a class="header-link" href="#tag-input-simulation" title="Link to this heading"></a></h2>
<p>`}),v(H,{key:5,meta:R[5]}),v(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="classes">Classes<a class="header-link" href="#classes" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-chip</code></td>
<td>Base chip/tag container</td>
</tr>
<tr>
<td><code>.en-chip__remove</code></td>
<td>Remove button with × symbol</td>
</tr>
</tbody>
</table>
</div><h2 id="javascript-integration">JavaScript Integration<a class="header-link" href="#javascript-integration" title="Link to this heading"></a></h2>
<p>Wire up the remove button to actually remove chips:</p>
<p>`}),v(H,{key:6,meta:R[6]}),v(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="additional-notes">Additional Notes<a class="header-link" href="#additional-notes" title="Link to this heading"></a></h2>
<p><strong>Structure</strong>:</p>
<ul>
<li>Chip is inline-flex container with gap</li>
<li>Remove button is optional</li>
<li>Text content comes first, then remove button</li>
</ul>
<p><strong>Remove Button</strong>:</p>
<ul>
<li>Styled with × symbol</li>
<li>Has hover effect (15% currentColor overlay)</li>
<li>Requires aria-label for accessibility</li>
<li>Click handler must be added via JavaScript</li>
</ul>
<p><strong>Layout Tips</strong>:</p>
<ul>
<li>Use with flex-wrap for multi-line layouts</li>
<li>Add gap to parent flex container for spacing</li>
<li>Works well in cards, filters, and form inputs</li>
</ul>
<p><strong>Common Use Cases</strong>:</p>
<ul>
<li>Selected filter criteria</li>
<li>Multi-select tag inputs</li>
<li>Applied search terms</li>
<li>Active categories or labels</li>
</ul>
<p><strong>Accessibility</strong>:</p>
<ul>
<li>Include descriptive aria-label on remove button</li>
<li>Use semantic HTML (button for interactive elements)</li>
<li>Ensure keyboard navigation works</li>
<li>Consider announcing removals to screen readers</li>
</ul>
<p>`}),v(H,{key:7,meta:R[7]}),v(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),W={title:`Chip`,description:`Removable tag component for filters, selections, and multi-select inputs.`},G=U;export{G as default,W as meta};