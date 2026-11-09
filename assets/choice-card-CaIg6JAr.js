import{R as e,Tt as t,W as n,at as r,c as i,et as a,it as o,n as s,nt as c,q as l,r as u,tt as d,u as f}from"./components-DGWjtEwO.js";var p=`<fieldset class="en-fieldset">
  <legend class="en-legend">Plan</legend>
  <div style="display: grid; gap: var(--en-space-3); max-inline-size: 28rem">
    <label class="en-choice-card en-choice-card--horizontal">
      <input type="radio" name="plan" value="free">
      <span class="en-choice-card__indicator" aria-hidden="true"></span>
      <span class="en-choice-card__body">
        <span class="en-choice-card__title">Free</span>
        <span class="en-choice-card__desc">For personal projects</span>
      </span>
      <span class="en-choice-card__aside">$0</span>
    </label>
    <label class="en-choice-card en-choice-card--horizontal">
      <input type="radio" name="plan" value="pro" checked>
      <span class="en-choice-card__indicator" aria-hidden="true"></span>
      <span class="en-choice-card__body">
        <span class="en-choice-card__title">Pro</span>
        <span class="en-choice-card__desc">For small teams</span>
      </span>
      <span class="en-choice-card__aside">$12</span>
    </label>
    <label class="en-choice-card en-choice-card--horizontal">
      <input type="radio" name="plan" value="team" disabled>
      <span class="en-choice-card__indicator" aria-hidden="true"></span>
      <span class="en-choice-card__body">
        <span class="en-choice-card__title">Team</span>
        <span class="en-choice-card__desc">Currently unavailable</span>
      </span>
      <span class="en-choice-card__aside">$40</span>
    </label>
  </div>
</fieldset>`,m={__name:`0`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=p,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},h=`<fieldset class="en-fieldset">
  <legend class="en-legend">Billing</legend>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: var(--en-space-3)">
    <label class="en-choice-card">
      <input type="radio" name="billing" value="monthly" checked>
      <span class="en-choice-card__indicator" aria-hidden="true"></span>
      <span class="en-choice-card__body">
        <span class="en-choice-card__title">Monthly</span>
        <span class="en-choice-card__desc">Cancel anytime</span>
      </span>
      <span class="en-choice-card__aside">$12 / mo</span>
    </label>
    <label class="en-choice-card">
      <input type="radio" name="billing" value="yearly">
      <span class="en-choice-card__indicator" aria-hidden="true"></span>
      <span class="en-choice-card__body">
        <span class="en-choice-card__title">Yearly</span>
        <span class="en-choice-card__desc">Two months free</span>
      </span>
      <span class="en-choice-card__aside">$120 / yr</span>
    </label>
  </div>
</fieldset>`,g={__name:`1`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_=`<fieldset class="en-fieldset">
  <legend class="en-legend">Add-ons</legend>
  <div style="display: grid; gap: var(--en-space-3); max-inline-size: 28rem">
    <label class="en-choice-card en-choice-card--success en-choice-card--horizontal">
      <input type="checkbox" name="addon" value="backup" checked>
      <span class="en-choice-card__indicator" aria-hidden="true"></span>
      <span class="en-choice-card__body">
        <span class="en-choice-card__title">Daily backup</span>
        <span class="en-choice-card__desc">Kept for 30 days</span>
      </span>
      <span class="en-choice-card__aside">+$4</span>
    </label>
    <label class="en-choice-card en-choice-card--info en-choice-card--horizontal">
      <input type="checkbox" name="addon" value="support">
      <span class="en-choice-card__indicator" aria-hidden="true"></span>
      <span class="en-choice-card__body">
        <span class="en-choice-card__title">Priority support</span>
        <span class="en-choice-card__desc">Reply within 4 hours</span>
      </span>
      <span class="en-choice-card__aside">+$9</span>
    </label>
  </div>
</fieldset>`,v={__name:`2`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=_,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},y=`<div style="display: grid; gap: var(--en-space-3); max-inline-size: 28rem">
  <label class="en-choice-card en-choice-card--outline en-choice-card--horizontal">
    <input type="radio" name="v1" value="a" checked>
    <span class="en-choice-card__indicator" aria-hidden="true"></span>
    <span class="en-choice-card__body">
      <span class="en-choice-card__title">Outline</span>
      <span class="en-choice-card__desc">Transparent card, selection shown by the border</span>
    </span>
  </label>
  <label class="en-choice-card en-choice-card--compact en-choice-card--horizontal">
    <input type="radio" name="v1" value="b">
    <span class="en-choice-card__indicator" aria-hidden="true"></span>
    <span class="en-choice-card__body">
      <span class="en-choice-card__title">Compact</span>
    </span>
    <span class="en-choice-card__aside">Tight</span>
  </label>
</div>`,b={0:{component:m,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Plan&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: grid; gap: var(--en-space-3); max-inline-size: 28rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card en-choice-card--horizontal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"plan"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"free"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__indicator"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__title"</span><span class="shiki-foreground">>Free&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__desc"</span><span class="shiki-foreground">>For personal projects&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__aside"</span><span class="shiki-foreground">>$0&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card en-choice-card--horizontal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"plan"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"pro"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__indicator"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__title"</span><span class="shiki-foreground">>Pro&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__desc"</span><span class="shiki-foreground">>For small teams&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__aside"</span><span class="shiki-foreground">>$12&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card en-choice-card--horizontal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"plan"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"team"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__indicator"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__title"</span><span class="shiki-foreground">>Team&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__desc"</span><span class="shiki-foreground">>Currently unavailable&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__aside"</span><span class="shiki-foreground">>$40&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Plan picker with radio cards`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:g,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Billing&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"billing"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"monthly"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__indicator"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__title"</span><span class="shiki-foreground">>Monthly&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__desc"</span><span class="shiki-foreground">>Cancel anytime&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__aside"</span><span class="shiki-foreground">>$12 / mo&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"billing"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"yearly"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__indicator"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__title"</span><span class="shiki-foreground">>Yearly&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__desc"</span><span class="shiki-foreground">>Two months free&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__aside"</span><span class="shiki-foreground">>$120 / yr&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Stacked cards in a grid`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:v,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Add-ons&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: grid; gap: var(--en-space-3); max-inline-size: 28rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card en-choice-card--success en-choice-card--horizontal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"addon"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"backup"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__indicator"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__title"</span><span class="shiki-foreground">>Daily backup&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__desc"</span><span class="shiki-foreground">>Kept for 30 days&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__aside"</span><span class="shiki-foreground">>+$4&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card en-choice-card--info en-choice-card--horizontal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"addon"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"support"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__indicator"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__title"</span><span class="shiki-foreground">>Priority support&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__desc"</span><span class="shiki-foreground">>Reply within 4 hours&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__aside"</span><span class="shiki-foreground">>+$9&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Checkbox cards with semantic colours`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:{__name:`3`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=y,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: grid; gap: var(--en-space-3); max-inline-size: 28rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card en-choice-card--outline en-choice-card--horizontal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"v1"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"a"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__indicator"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__title"</span><span class="shiki-foreground">>Outline&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__desc"</span><span class="shiki-foreground">>Transparent card, selection shown by the border&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card en-choice-card--compact en-choice-card--horizontal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"v1"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"b"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__indicator"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__title"</span><span class="shiki-foreground">>Compact&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-choice-card__aside"</span><span class="shiki-foreground">>Tight&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Outline and compact`,key:3,lang:`html`,injectKind:null,editable:!1,source:null}},x=[{id:`choice-card`,text:`Choice Card`,level:1},{id:`radio-cards`,text:`Radio Cards`,level:2},{id:`stacked-layout`,text:`Stacked Layout`,level:2},{id:`checkbox-cards`,text:`Checkbox Cards`,level:2},{id:`variants`,text:`Variants`,level:2},{id:`tokens`,text:`Tokens`,level:2},{id:`attribute-contract`,text:`Attribute Contract`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`classes`,text:`Classes`,level:2}],S=[{id:`choice-card`,text:`Choice Card`,level:1,children:[{id:`radio-cards`,text:`Radio Cards`,level:2,children:[]},{id:`stacked-layout`,text:`Stacked Layout`,level:2,children:[]},{id:`checkbox-cards`,text:`Checkbox Cards`,level:2,children:[]},{id:`variants`,text:`Variants`,level:2,children:[]},{id:`tokens`,text:`Tokens`,level:2,children:[]},{id:`attribute-contract`,text:`Attribute Contract`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]}]}],C={css:[],js:[],cleanup:[]},w=n({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>l(`div`,{class:n},[e.meta.isLive?l(u,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:l(s,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),T=n({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/forms/extended/choice-card.md`,setup(){r(`vlm-toc`,{flat:x,tree:S}),d(()=>f(x,S)),c(()=>f([],[]));let e=i(C);return r(`vlm-inject`,e),d(()=>e.mount()),a(()=>e.beforeUnmount()),c(()=>e.unmounted()),()=>l(`div`,{class:`vlm-page`},[l(`div`,{class:`vlm-content`},[l(`div`,{class:`vlm-md`,innerHTML:`<h1 id="choice-card">Choice Card<a class="header-link" href="#choice-card" title="Link to this heading"></a></h1>
<p>Radio or checkbox shown as a selectable card, for plans, payment methods and templates. It complements <code>.en-check-btn</code>, which only covers button-shaped choices.</p>
<h2 id="radio-cards">Radio Cards<a class="header-link" href="#radio-cards" title="Link to this heading"></a></h2>
<p>Wrap each choice in a <code>&lt;label class=&quot;en-choice-card&quot;&gt;</code>. The real <code>&lt;input&gt;</code> stays focusable; the card draws the state with <code>:has()</code>.</p>
<p>`}),l(w,{key:0,meta:b[0]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="stacked-layout">Stacked Layout<a class="header-link" href="#stacked-layout" title="Link to this heading"></a></h2>
<p>Without <code>--horizontal</code> the card stacks the indicator, body and aside. This suits a row of cards in a grid.</p>
<p>`}),l(w,{key:1,meta:b[1]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="checkbox-cards">Checkbox Cards<a class="header-link" href="#checkbox-cards" title="Link to this heading"></a></h2>
<p>Use <code>type=&quot;checkbox&quot;</code> for multi-select. The indicator becomes a square with a tick.</p>
<p>`}),l(w,{key:2,meta:b[2]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="variants">Variants<a class="header-link" href="#variants" title="Link to this heading"></a></h2>
<p>`}),l(w,{key:3,meta:b[3]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="tokens">Tokens<a class="header-link" href="#tokens" title="Link to this heading"></a></h2>
<p>Override per card, or on a wrapper (custom properties inherit).</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Token</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>--en-choice-card-color</code></td>
<td><code>--en-primary</code></td>
<td>Accent of the selected state</td>
</tr>
<tr>
<td><code>--en-choice-card-fg</code></td>
<td><code>--en-fg-primary</code></td>
<td>Dot and tick colour on the accent</td>
</tr>
<tr>
<td><code>--en-choice-card-bg</code></td>
<td><code>--en-bg-surface</code></td>
<td>Card background</td>
</tr>
<tr>
<td><code>--en-choice-card-border</code></td>
<td><code>--en-border-control</code></td>
<td>Idle border (meets WCAG 1.4.11)</td>
</tr>
</tbody>
</table>
</div><h2 id="attribute-contract">Attribute Contract<a class="header-link" href="#attribute-contract" title="Link to this heading"></a></h2>
<p>The native input does all the work. The CSS reads <code>:checked</code>, <code>:focus-visible</code>, <code>:disabled</code> and <code>:user-invalid</code> / <code>[aria-invalid=&quot;true&quot;]</code> from the input that is a <strong>direct child</strong> of <code>.en-choice-card</code>. No JavaScript is needed or used.</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li>The input is hidden visually, not with <code>display: none</code>, so it stays in the tab order and keeps its radio-group arrow-key behaviour.</li>
<li>The focus ring is drawn around the whole card.</li>
<li>Selection never relies on colour alone: the border thickens and the indicator is filled.</li>
<li>Group radios in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code>.</li>
<li>In forced-colors mode the selected card uses <code>Highlight</code>.</li>
</ul>
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
<td><code>.en-choice-card</code></td>
<td>The label that wraps the input (stacked by default)</td>
</tr>
<tr>
<td><code>.en-choice-card__indicator</code></td>
<td>Optional radio dot or checkbox tick</td>
</tr>
<tr>
<td><code>.en-choice-card__body</code></td>
<td>Container for title and description</td>
</tr>
<tr>
<td><code>.en-choice-card__title</code></td>
<td>Title (semibold)</td>
</tr>
<tr>
<td><code>.en-choice-card__desc</code></td>
<td>Muted description</td>
</tr>
<tr>
<td><code>.en-choice-card__aside</code></td>
<td>Price, badge or meta, kept on one line</td>
</tr>
<tr>
<td><code>.en-choice-card--horizontal</code></td>
<td>One row; <code>__aside</code> moves to the end</td>
</tr>
<tr>
<td><code>.en-choice-card--outline</code></td>
<td>Transparent background</td>
</tr>
<tr>
<td><code>.en-choice-card--compact</code></td>
<td>Smaller padding and text</td>
</tr>
<tr>
<td><code>.en-choice-card--primary</code> <code>--success</code> <code>--warning</code> <code>--danger</code> <code>--info</code></td>
<td>Accent of the selected state</td>
</tr>
</tbody>
</table>
</div>`})]),null])}}),E={title:`Choice Card`,description:`Radio or checkbox shown as a selectable card, for plans, payment methods and templates. It complements .en-check-btn, which only covers button-shaped choices.`},D=T;export{D as default,E as meta};