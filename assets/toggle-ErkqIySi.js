import{Et as e,I as t,R as n,W as r,at as i,ct as a,et as o,it as s,l as c,m as l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";var g=`<label class="en-toggle">
  <input type="checkbox">
  <span>Show advanced options</span>
</label>

<div class="en-toggle__content">
  <div class="en-card">
    <div class="en-card__body">
      <p>Advanced options appear here when checkbox is checked.</p>
      <button class="en-btn en-btn--sm">Apply Settings</button>
    </div>
  </div>
</div>`,_={__name:`0`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=g,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},v=`<label class="en-toggle">
  <input type="checkbox">
  <span class="en-toggle__label" 
        data-unchecked="▶ Show details" 
        data-checked="▼ Hide details">
  </span>
</label>

<div class="en-toggle__content">
  <p>Content revealed! The label text changes based on checkbox state.</p>
</div>`,y={__name:`1`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=v,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},b=`<label class="en-toggle">
  <input type="checkbox">
  <span class="en-toggle__label" 
        data-unchecked="Show FAQ" 
        data-checked="Hide FAQ">
  </span>
</label>

<div class="en-toggle__content en-toggle__content--animated">
  <div>
    <h4>Frequently Asked Questions</h4>
    <p><strong>Q: How does the animation work?</strong></p>
    <p>A: Uses the grid-template-rows trick (0fr → 1fr) combined with opacity for smooth height animation without JavaScript.</p>
    <p><strong>Q: Does it require JavaScript?</strong></p>
    <p>A: No! Pure CSS using checkbox state and the adjacent sibling selector.</p>
  </div>
</div>`,x={__name:`2`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=b,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},S=`<label class="en-toggle">
  <input type="checkbox">
  <span>Show toolbar</span>
</label>

<div class="en-toggle__content en-toggle__content--flex" style="--en-gap: var(--en-space-2)">
  <button class="en-btn en-btn--sm en-btn--outline">Cut</button>
  <button class="en-btn en-btn--sm en-btn--outline">Copy</button>
  <button class="en-btn en-btn--sm en-btn--outline">Paste</button>
  <button class="en-btn en-btn--sm en-btn--outline">Delete</button>
</div>`,C={__name:`3`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},w=`<label class="en-toggle">
  <input type="checkbox">
  <span>Show color palette</span>
</label>

<div class="en-toggle__content en-toggle__content--grid" style="--en-gap: var(--en-space-2); grid-template-columns: repeat(4, 1fr);">
  <div style="background: var(--en-primary); block-size: 60px; border-radius: var(--en-radius-md);"></div>
  <div style="background: var(--en-success); block-size: 60px; border-radius: var(--en-radius-md);"></div>
  <div style="background: var(--en-warning); block-size: 60px; border-radius: var(--en-radius-md);"></div>
  <div style="background: var(--en-danger); block-size: 60px; border-radius: var(--en-radius-md);"></div>
</div>`,T={__name:`4`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},E=`<div class="en-toggle en-toggle--block">
  <label>
    <input type="checkbox">
    <span class="en-toggle__label" 
          data-unchecked="Show filters" 
          data-checked="Hide filters">
    </span>
  </label>
  
  <div class="en-toggle__content en-toggle__content--animated en-toggle__content--bordered">
    <div>
      <h4 style="margin-block-start: 0;">Filter Options</h4>
      <div style="margin-block-end: var(--en-space-3);">
        <label style="display: block; margin-block-end: var(--en-space-1); font-weight: 500;">Category</label>
        <select class="en-input">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Books</option>
        </select>
      </div>
      <div>
        <label style="display: block; margin-block-end: var(--en-space-1); font-weight: 500;">Price Range</label>
        <input type="range" style="width: 100%;">
      </div>
    </div>
  </div>
</div>`,D={__name:`5`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=E,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},O=`<div class="en-toggle en-toggle--block">
  <label>
    <input type="checkbox">
    <span>Show advanced options</span>
  </label>
  
  <div class="en-toggle__content">
    <div class="en-card">
      <div class="en-card__body">
        <p>Advanced options appear here when checkbox is checked.</p>
        <button class="en-btn en-btn--sm">Apply Settings</button>
      </div>
    </div>
  </div>
</div>`,k={__name:`6`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=O,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},A=`<div class="en-toggle en-toggle--block">
  <label>
    <input type="checkbox">
    <span class="en-toggle__label" 
          data-unchecked="📦 Show shipping info" 
          data-checked="📦 Hide shipping info">
    </span>
  </label>
  
  <div class="en-toggle__content en-toggle__content--animated en-toggle__content--padded">
    <div>
      <p><strong>Free shipping</strong> on orders over $50</p>
      <p>Estimated delivery: 3-5 business days</p>
      <p>Express shipping available at checkout</p>
      <p style="color: var(--en-text-muted); font-size: var(--en-text-sm);">Tracking information will be sent via email</p>
    </div>
  </div>
</div>`,j={__name:`7`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=A,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},M=`<label class="en-toggle en-toggle--reverse">
  <input type="checkbox">
  <span>Enable email notifications</span>
</label>

<div class="en-toggle__content">
  <p style="margin-block-start: var(--en-space-2); color: var(--en-text-muted); font-size: var(--en-text-sm);">
    You will receive email notifications for important updates and announcements.
  </p>
</div>`,N={__name:`8`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=M,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},P=`<div class="en-flex" style="--en-direction: column; --en-gap: var(--en-space-3);">
  <label class="en-toggle en-toggle--sm">
    <input type="checkbox">
    <span>Small toggle</span>
  </label>
  
  <label class="en-toggle">
    <input type="checkbox">
    <span>Default toggle</span>
  </label>
  
  <label class="en-toggle en-toggle--lg">
    <input type="checkbox">
    <span>Large toggle</span>
  </label>
</div>`,F={__name:`9`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=P,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},I=`<div class="en-card">
  <div class="en-card__body">
    <h3 style="margin-block-start: 0;">Privacy Settings</h3>
    
    <div class="en-flex" style="--en-direction: column; --en-gap: var(--en-space-3); margin-block-start: var(--en-space-3);">
      <div>
        <label class="en-toggle">
          <input type="checkbox" checked>
          <span>Profile visibility</span>
        </label>
        <p style="margin-block-start: var(--en-space-1); color: var(--en-text-muted); font-size: var(--en-text-sm);">
          Your profile is visible to other users
        </p>
      </div>
      
      <div>
        <label class="en-toggle">
          <input type="checkbox">
          <span>Activity status</span>
        </label>
        <p style="margin-block-start: var(--en-space-1); color: var(--en-text-muted); font-size: var(--en-text-sm);">
          Show when you're online
        </p>
      </div>
      
      <div>
        <label class="en-toggle">
          <input type="checkbox" checked>
          <span>Email notifications</span>
        </label>
        <p style="margin-block-start: var(--en-space-1); color: var(--en-text-muted); font-size: var(--en-text-sm);">
          Receive updates via email
        </p>
      </div>
    </div>
  </div>
</div>`,L={__name:`10`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=I,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},R=`<p>
  This paragraph has 
  <label class="en-toggle en-toggle--inline">
    <input type="checkbox">
    <span style="color: var(--en-primary); cursor: pointer;">more</span>
  </label>
  <span class="en-toggle__content" style="display: inline;">
    additional information that can be toggled inline with the surrounding text
  </span>
  within the content.
</p>`,z={__name:`11`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=R,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},B=`<div class="en-flex" style="--en-direction: column; --en-gap: var(--en-space-2);">
  <label class="en-toggle">
    <input type="checkbox">
    <span>Unchecked (default state)</span>
  </label>
  
  <label class="en-toggle">
    <input type="checkbox" checked>
    <span>Checked state</span>
  </label>
  
  <label class="en-toggle">
    <input type="checkbox" disabled>
    <span>Disabled unchecked</span>
  </label>
  
  <label class="en-toggle">
    <input type="checkbox" checked disabled>
    <span>Disabled checked</span>
  </label>
</div>`,V={__name:`12`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=B,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},H={};function U(e,n){let r=a(`Downloadable`);return s(),t(r,{"dev-url":`components/basic/components-toggle.css`})}var W={0:{component:_,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Show advanced options&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Advanced options appear here when checkbox is checked.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Apply Settings&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Basic toggle with static label`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__label"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        data-unchecked</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"▶ Show details"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        data-checked</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"▼ Hide details"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Content revealed! The label text changes based on checkbox state.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Toggle with changing label`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__label"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        data-unchecked</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Show FAQ"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        data-checked</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Hide FAQ"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content en-toggle__content--animated"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">>Frequently Asked Questions&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Q: How does the animation work?&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>A: Uses the grid-template-rows trick (0fr → 1fr) combined with opacity for smooth height animation without JavaScript.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Q: Does it require JavaScript?&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>A: No! Pure CSS using checkbox state and the adjacent sibling selector.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Animated smooth transition`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Show toolbar&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content en-toggle__content--flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm en-btn--outline"</span><span class="shiki-foreground">>Cut&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm en-btn--outline"</span><span class="shiki-foreground">>Copy&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm en-btn--outline"</span><span class="shiki-foreground">>Paste&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm en-btn--outline"</span><span class="shiki-foreground">>Delete&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Flex layout content`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Show color palette&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content en-toggle__content--grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); grid-template-columns: repeat(4, 1fr);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"background: var(--en-primary); block-size: 60px; border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"background: var(--en-success); block-size: 60px; border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"background: var(--en-warning); block-size: 60px; border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"background: var(--en-danger); block-size: 60px; border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Grid layout content`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle en-toggle--block"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__label"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          data-unchecked</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Show filters"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          data-checked</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Hide filters"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content en-toggle__content--animated en-toggle__content--bordered"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: 0;"</span><span class="shiki-foreground">>Filter Options&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: block; margin-block-end: var(--en-space-1); font-weight: 500;"</span><span class="shiki-foreground">>Category&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>All Categories&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Electronics&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Clothing&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Books&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: block; margin-block-end: var(--en-space-1); font-weight: 500;"</span><span class="shiki-foreground">>Price Range&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"range"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 100%;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Block layout with filters`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:k,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle en-toggle--block"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Show advanced options&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Advanced options appear here when checkbox is checked.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Apply Settings&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Modern :has() selector pattern`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle en-toggle--block"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__label"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          data-unchecked</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"📦 Show shipping info"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          data-checked</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"📦 Hide shipping info"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content en-toggle__content--animated en-toggle__content--padded"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Free shipping&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">> on orders over $50&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Estimated delivery: 3-5 business days&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Express shipping available at checkout&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-text-muted); font-size: var(--en-text-sm);"</span><span class="shiki-foreground">>Tracking information will be sent via email&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Wrapper pattern with dynamic label`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:N,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle en-toggle--reverse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Enable email notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: var(--en-space-2); color: var(--en-text-muted); font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    You will receive email notifications for important updates and announcements.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Reversed checkbox position`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle en-toggle--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Small toggle&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Default toggle&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle en-toggle--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Large toggle&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Small, default, and large sizes`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:L,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: 0;"</span><span class="shiki-foreground">>Privacy Settings&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-3); margin-block-start: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Profile visibility&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: var(--en-space-1); color: var(--en-text-muted); font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          Your profile is visible to other users</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Activity status&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: var(--en-space-1); color: var(--en-text-muted); font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          Show when you're online</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Email notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: var(--en-space-1); color: var(--en-text-muted); font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          Receive updates via email</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Multiple toggle controls`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:z,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  This paragraph has </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle en-toggle--inline"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-primary); cursor: pointer;"</span><span class="shiki-foreground">>more&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: inline;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    additional information that can be toggled inline with the surrounding text</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  within the content.</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Inline content toggle`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:V,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Unchecked (default state)&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Checked state&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Disabled unchecked&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Disabled checked&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Checked and unchecked states`,key:12,lang:`html`,injectKind:null,editable:!1,source:null},13:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> checkbox</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> document</span><span class="shiki-token-function">.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-toggle input[type="checkbox"]'</span><span class="shiki-foreground">);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Toggle checked state</span></span>
<span class="line"><span class="shiki-token-constant">checkbox</span><span class="shiki-foreground">.checked </span><span class="shiki-token-keyword">=</span><span class="shiki-token-keyword"> !</span><span class="shiki-token-constant">checkbox</span><span class="shiki-foreground">.checked;</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Check</span></span>
<span class="line"><span class="shiki-token-constant">checkbox</span><span class="shiki-foreground">.checked </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground">;</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Uncheck</span></span>
<span class="line"><span class="shiki-token-constant">checkbox</span><span class="shiki-foreground">.checked </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> false</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`js`,key:13,lang:`js`,injectKind:null,editable:!1,source:null},14:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">.my-toggle</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  --en-space-2</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">rem</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">  --en-duration-slow</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 400</span><span class="shiki-token-keyword">ms</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:14,lang:`css`,injectKind:null,editable:!1,source:null},15:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Label&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content"</span><span class="shiki-foreground">>Content&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle en-toggle--block"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Label&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-toggle__content"</span><span class="shiki-foreground">>Content&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:16,lang:`html`,injectKind:null,editable:!1,source:null},17:{component:l(H,[[`render`,U]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/basic/components-toggle.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:17,lang:`vue`,injectKind:null,editable:!1,source:null}},G=[{id:`toggle`,text:`Toggle`,level:1},{id:`basic-toggle`,text:`Basic Toggle`,level:2},{id:`dynamic-label-text`,text:`Dynamic Label Text`,level:2},{id:`animated-variant`,text:`Animated Variant`,level:2},{id:`display-type-variants`,text:`Display Type Variants`,level:2},{id:`block-layout`,text:`Block Layout`,level:2},{id:`using-has-wrapper-pattern`,text:`Using :has() Wrapper Pattern`,level:2},{id:`reverse-layout`,text:`Reverse Layout`,level:2},{id:`size-variants`,text:`Size Variants`,level:2},{id:`multiple-independent-toggles`,text:`Multiple Independent Toggles`,level:2},{id:`inline-toggle`,text:`Inline Toggle`,level:2},{id:`states`,text:`States`,level:2},{id:`attributes`,text:`Attributes`,level:3},{id:`classes`,text:`Classes`,level:2},{id:`dynamic-label-attributes`,text:`Dynamic Label Attributes`,level:2},{id:`css-custom-properties`,text:`CSS Custom Properties`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`comparison-toggle-vs-collapse`,text:`Comparison: Toggle vs Collapse`,level:2},{id:`browser-support`,text:`Browser Support`,level:2},{id:`two-markup-patterns`,text:`Two Markup Patterns`,level:3},{id:`notes`,text:`Notes`,level:2},{id:`markup-patterns`,text:`Markup Patterns`,level:3},{id:`technical-details`,text:`Technical Details`,level:3},{id:`when-to-use`,text:`When to Use`,level:2}],K=[{id:`toggle`,text:`Toggle`,level:1,children:[{id:`basic-toggle`,text:`Basic Toggle`,level:2,children:[]},{id:`dynamic-label-text`,text:`Dynamic Label Text`,level:2,children:[]},{id:`animated-variant`,text:`Animated Variant`,level:2,children:[]},{id:`display-type-variants`,text:`Display Type Variants`,level:2,children:[]},{id:`block-layout`,text:`Block Layout`,level:2,children:[]},{id:`using-has-wrapper-pattern`,text:`Using :has() Wrapper Pattern`,level:2,children:[]},{id:`reverse-layout`,text:`Reverse Layout`,level:2,children:[]},{id:`size-variants`,text:`Size Variants`,level:2,children:[]},{id:`multiple-independent-toggles`,text:`Multiple Independent Toggles`,level:2,children:[]},{id:`inline-toggle`,text:`Inline Toggle`,level:2,children:[]},{id:`states`,text:`States`,level:2,children:[{id:`attributes`,text:`Attributes`,level:3,children:[]}]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`dynamic-label-attributes`,text:`Dynamic Label Attributes`,level:2,children:[]},{id:`css-custom-properties`,text:`CSS Custom Properties`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`comparison-toggle-vs-collapse`,text:`Comparison: Toggle vs Collapse`,level:2,children:[]},{id:`browser-support`,text:`Browser Support`,level:2,children:[{id:`two-markup-patterns`,text:`Two Markup Patterns`,level:3,children:[]}]},{id:`notes`,text:`Notes`,level:2,children:[{id:`markup-patterns`,text:`Markup Patterns`,level:3,children:[]},{id:`technical-details`,text:`Technical Details`,level:3,children:[]}]},{id:`when-to-use`,text:`When to Use`,level:2,children:[]}]}],q={css:[],js:[],cleanup:[]},J=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),Y=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/basic/toggle.md`,setup(){i(`vlm-toc`,{flat:G,tree:K}),h(()=>c(G,K)),d(()=>c([],[]));let e=m(q);return i(`vlm-inject`,e),h(()=>e.mount()),o(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="toggle">Toggle<a class="header-link" href="#toggle" title="Link to this heading"></a></h1>
<p>Checkbox-driven content visibility control with visible controls, dynamic label text, and smooth animations. A feature-rich alternative to simple collapse components.</p>
<h2 id="basic-toggle">Basic Toggle<a class="header-link" href="#basic-toggle" title="Link to this heading"></a></h2>
<p>Basic pattern with label and content as siblings (uses adjacent sibling selector <code>~</code>).</p>
<p>`}),f(J,{key:0,meta:W[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="dynamic-label-text">Dynamic Label Text<a class="header-link" href="#dynamic-label-text" title="Link to this heading"></a></h2>
<p>Labels can change text based on checkbox state using data attributes.</p>
<p>`}),f(J,{key:1,meta:W[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="animated-variant">Animated Variant<a class="header-link" href="#animated-variant" title="Link to this heading"></a></h2>
<p>Smooth expand/collapse animation using grid-template-rows technique.</p>
<p>`}),f(J,{key:2,meta:W[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="display-type-variants">Display Type Variants<a class="header-link" href="#display-type-variants" title="Link to this heading"></a></h2>
<p>Content can use different display modes when revealed.</p>
<p>`}),f(J,{key:3,meta:W[3]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),f(J,{key:4,meta:W[4]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="block-layout">Block Layout<a class="header-link" href="#block-layout" title="Link to this heading"></a></h2>
<p>Stack the toggle control and content vertically using the <code>:has()</code> wrapper pattern.</p>
<p>`}),f(J,{key:5,meta:W[5]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="using-has-wrapper-pattern">Using :has() Wrapper Pattern<a class="header-link" href="#using-has-wrapper-pattern" title="Link to this heading"></a></h2>
<p>Modern pattern using <code>:has()</code> selector for cleaner markup. The wrapper (<code>.en-toggle</code>) contains both the label and content.</p>
<p>`}),f(J,{key:6,meta:W[6]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),f(J,{key:7,meta:W[7]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="reverse-layout">Reverse Layout<a class="header-link" href="#reverse-layout" title="Link to this heading"></a></h2>
<p>Place checkbox on the right side of the label.</p>
<p>`}),f(J,{key:8,meta:W[8]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="size-variants">Size Variants<a class="header-link" href="#size-variants" title="Link to this heading"></a></h2>
<p>`}),f(J,{key:9,meta:W[9]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="multiple-independent-toggles">Multiple Independent Toggles<a class="header-link" href="#multiple-independent-toggles" title="Link to this heading"></a></h2>
<p>`}),f(J,{key:10,meta:W[10]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="inline-toggle">Inline Toggle<a class="header-link" href="#inline-toggle" title="Link to this heading"></a></h2>
<p>Content can be toggled inline within text flow.</p>
<p>`}),f(J,{key:11,meta:W[11]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="states">States<a class="header-link" href="#states" title="Link to this heading"></a></h2>
<p>The toggle component uses native checkbox state, not CSS classes.</p>
<p>`}),f(J,{key:12,meta:W[12]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="attributes">Attributes<a class="header-link" href="#attributes" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Attribute</th>
<th>Values</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>:checked</code></td>
<td>boolean</td>
<td>Checkbox is checked (content visible)</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>boolean</td>
<td>Disables the checkbox interaction</td>
</tr>
</tbody>
</table>
</div><p>JavaScript can control state by setting checkbox properties:</p>
<p>`}),f(J,{key:13,meta:W[13]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>.en-toggle</code></td>
<td>Base toggle container</td>
</tr>
<tr>
<td><code>.en-toggle__label</code></td>
<td>Label element with dynamic text support</td>
</tr>
<tr>
<td><code>.en-toggle__content</code></td>
<td>Content that shows/hides based on checkbox state</td>
</tr>
<tr>
<td><strong>Content Display Variants</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-toggle__content--animated</code></td>
<td>Smooth animated expand/collapse with grid-template-rows</td>
</tr>
<tr>
<td><code>.en-toggle__content--flex</code></td>
<td>Content displays as flex when visible</td>
</tr>
<tr>
<td><code>.en-toggle__content--grid</code></td>
<td>Content displays as grid when visible</td>
</tr>
<tr>
<td><code>.en-toggle__content--inline</code></td>
<td>Content displays inline when visible</td>
</tr>
<tr>
<td><code>.en-toggle__content--inline-flex</code></td>
<td>Content displays as inline-flex when visible</td>
</tr>
<tr>
<td><code>.en-toggle__content--inline-block</code></td>
<td>Content displays as inline-block when visible</td>
</tr>
<tr>
<td><strong>Content Spacing Variants</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-toggle__content--padded</code></td>
<td>Adds padding to revealed content</td>
</tr>
<tr>
<td><code>.en-toggle__content--bordered</code></td>
<td>Adds border, padding, and margin to content</td>
</tr>
<tr>
<td><strong>Layout Variants</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-toggle--block</code></td>
<td>Block layout (checkbox and content stack vertically)</td>
</tr>
<tr>
<td><code>.en-toggle--inline</code></td>
<td>Inline layout for in-text toggles</td>
</tr>
<tr>
<td><code>.en-toggle--reverse</code></td>
<td>Places checkbox on right side of label</td>
</tr>
<tr>
<td><strong>Size Variants</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-toggle--sm</code></td>
<td>Small size variant</td>
</tr>
<tr>
<td><code>.en-toggle--lg</code></td>
<td>Large size variant</td>
</tr>
<tr>
<td><strong>Integration Variants</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-toggle--switch</code></td>
<td>For use with <code>.en-switch</code> component instead of plain checkbox</td>
</tr>
</tbody>
</table>
</div><h2 id="dynamic-label-attributes">Dynamic Label Attributes<a class="header-link" href="#dynamic-label-attributes" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>data-unchecked</code></td>
<td>Text displayed when checkbox is unchecked</td>
</tr>
<tr>
<td><code>data-checked</code></td>
<td>Text displayed when checkbox is checked</td>
</tr>
</tbody>
</table>
</div><p>Both attributes are optional. If omitted, the label displays its static content.</p>
<h2 id="css-custom-properties">CSS Custom Properties<a class="header-link" href="#css-custom-properties" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Property</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>--en-display</code></td>
<td><code>block</code></td>
<td>Display type when content is visible</td>
</tr>
<tr>
<td><code>--en-space-2</code></td>
<td>Token</td>
<td>Gap between checkbox and label</td>
</tr>
<tr>
<td><code>--en-space-3</code></td>
<td>Token</td>
<td>Spacing for block layout and content</td>
</tr>
<tr>
<td><code>--en-duration-slow</code></td>
<td>Token</td>
<td>Animation duration for height transition</td>
</tr>
<tr>
<td><code>--en-duration-base</code></td>
<td>Token</td>
<td>Opacity transition duration</td>
</tr>
<tr>
<td><code>--en-ease-out</code></td>
<td>Token</td>
<td>Animation easing function</td>
</tr>
</tbody>
</table>
</div><p>Override these in your custom styles:</p>
<p>`}),f(J,{key:14,meta:W[14]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li><strong>Keyboard accessible</strong>: Native checkbox with full keyboard support</li>
<li><strong>Space</strong>: Toggle checkbox when focused</li>
<li><strong>Tab</strong>: Navigate between toggles</li>
<li><strong>Screen readers</strong>: Proper label association with checkbox</li>
<li><strong>Reduced motion</strong>: Respects <code>prefers-reduced-motion</code> for animations</li>
<li><strong>No JavaScript required</strong>: Works with pure CSS using checkbox state</li>
</ul>
<h2 id="comparison-toggle-vs-collapse">Comparison: Toggle vs Collapse<a class="header-link" href="#comparison-toggle-vs-collapse" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Feature</th>
<th><code>en-collapse</code></th>
<th><code>en-toggle</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Checkbox</strong></td>
<td>Hidden</td>
<td>Visible &amp; styled</td>
</tr>
<tr>
<td><strong>Label text</strong></td>
<td>Static</td>
<td>Dynamic (data attributes)</td>
</tr>
<tr>
<td><strong>Animation</strong></td>
<td>Grid trick only</td>
<td>Grid + opacity</td>
</tr>
<tr>
<td><strong>Display types</strong></td>
<td>Block only</td>
<td>Block, flex, grid, inline variants</td>
</tr>
<tr>
<td><strong><code>:has()</code> support</strong></td>
<td>No</td>
<td>Yes (modern pattern)</td>
</tr>
<tr>
<td><strong>Layout options</strong></td>
<td>Basic</td>
<td>Block, inline, reverse</td>
</tr>
<tr>
<td><strong>Size variants</strong></td>
<td>No</td>
<td>Yes (sm, lg)</td>
</tr>
<tr>
<td><strong>Switch integration</strong></td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Use case</strong></td>
<td>Simple hidden content</td>
<td>Complete toggle UI system</td>
</tr>
</tbody>
</table>
</div><h2 id="browser-support">Browser Support<a class="header-link" href="#browser-support" title="Link to this heading"></a></h2>
<ul>
<li><strong><code>:has()</code> selector</strong>: Baseline 2023+ (Chrome 105+, Firefox 121+, Safari 15.4+)</li>
<li><strong>Fallback</strong>: Works without <code>:has()</code> using sibling selector pattern</li>
<li><strong>Animations</strong>: All modern browsers (Baseline 2020+)</li>
<li><strong>Grid trick</strong>: All browsers supporting CSS Grid</li>
</ul>
<h3 id="two-markup-patterns">Two Markup Patterns<a class="header-link" href="#two-markup-patterns" title="Link to this heading"></a></h3>
<p><strong>Pattern 1: Sibling Selector</strong> (works in all browsers)
`}),f(J,{key:15,meta:W[15]}),f(`div`,{class:`vlm-md`,innerHTML:`
Uses adjacent sibling selector (<code>~</code>) - checkbox and content are separate siblings.</p>
<p><strong>Pattern 2: :has() Wrapper</strong> (modern browsers only)
`}),f(J,{key:16,meta:W[16]}),f(`div`,{class:`vlm-md`,innerHTML:`
Uses <code>:has()</code> selector - wrapper detects checkbox state and controls descendant content.</p>
<p>For older browsers without <code>:has()</code>, always use Pattern 1 (sibling selector).</p>
<h2 id="notes">Notes<a class="header-link" href="#notes" title="Link to this heading"></a></h2>
<h3 id="markup-patterns">Markup Patterns<a class="header-link" href="#markup-patterns" title="Link to this heading"></a></h3>
<p>Two patterns are supported depending on browser compatibility needs:</p>
<ol>
<li>
<p><strong>Sibling Selector Pattern</strong> (universal support):</p>
<ul>
<li>Label and content are siblings</li>
<li>Uses adjacent sibling selector (<code>input:checked ~ .en-toggle__content</code>)</li>
<li>Works in all browsers</li>
<li>Example: <code>&lt;label&gt;...&lt;/label&gt; &lt;div class=&quot;en-toggle__content&quot;&gt;...&lt;/div&gt;</code></li>
</ul>
</li>
<li>
<p><strong>:has() Wrapper Pattern</strong> (modern browsers):</p>
<ul>
<li>Wrapper (<code>.en-toggle</code>) contains both label and content</li>
<li>Uses <code>:has()</code> selector (<code>.en-toggle:has(input:checked) .en-toggle__content</code>)</li>
<li>Requires Chrome 105+, Firefox 121+, Safari 15.4+</li>
<li>Example: <code>&lt;div class=&quot;en-toggle&quot;&gt;&lt;label&gt;...&lt;/label&gt;&lt;div class=&quot;en-toggle__content&quot;&gt;...&lt;/div&gt;&lt;/div&gt;</code></li>
</ul>
</li>
</ol>
<h3 id="technical-details">Technical Details<a class="header-link" href="#technical-details" title="Link to this heading"></a></h3>
<ul>
<li>Pure CSS solution using checkbox state and CSS selectors</li>
<li>The <code>--animated</code> variant uses grid-template-rows (0fr → 1fr) for smooth height animation</li>
<li>Content wrapper <code>&lt;div&gt;</code> required inside <code>--animated</code> variant for proper grid behavior</li>
<li>Works with or without JavaScript</li>
<li>Respects <code>prefers-reduced-motion</code> for accessibility</li>
<li>Can be combined with switch component (<code>.en-switch</code>) for toggle-style controls</li>
<li>Multiple toggles on the same page operate independently</li>
</ul>
<h2 id="when-to-use">When to Use<a class="header-link" href="#when-to-use" title="Link to this heading"></a></h2>
<p><strong>Use Toggle when:</strong></p>
<ul>
<li>You need visible checkbox controls</li>
<li>Label text should change based on state</li>
<li>Multiple display types needed (flex, grid, inline)</li>
<li>Building settings panels or preference UI</li>
</ul>
<p><strong>Use Collapse when:</strong></p>
<ul>
<li>You need completely hidden trigger</li>
<li>Simple show/hide without visible control</li>
<li>JavaScript-driven toggle (button, link)</li>
<li>Simpler markup preferred</li>
</ul>
<p><strong>Use Accordion when:</strong></p>
<ul>
<li>Multiple related collapsible sections</li>
<li>Only one section open at a time (with JS)</li>
<li>FAQ or structured content navigation</li>
</ul>
<p>`}),f(J,{key:17,meta:W[17]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),X={title:`Toggle`,description:`Checkbox-driven content visibility control with visible controls, dynamic label text, and smooth animations. A feature-rich alternative to simple collapse components.`},Z=Y;export{Z as default,X as meta};