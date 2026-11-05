import{Et as e,I as t,R as n,W as r,at as i,ct as a,et as o,it as s,l as c,m as l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";var g=`<div class="en-flex en-gap-3">
  <button class="en-btn en-btn--primary en-fx-glow">Always Glowing</button>
  <div class="en-card en-p-4 en-fx-glow" style="--en-fx-glow-color: var(--en-success)">
    Card with green glow
  </div>
</div>`,_={__name:`0`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=g,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},v=`<div class="en-flex en-gap-3">
  <button class="en-btn en-fx-glow--hover">Hover Me</button>
  <a href="#" class="en-btn en-btn--outline en-fx-glow--hover">Glowing Link</a>
</div>`,y={__name:`1`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=v,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},b=`<div class="en-flex en-gap-3">
  <button class="en-btn en-btn--primary en-fx-glow--pulse">Pulsing</button>
  <div class="en-badge en-badge--success en-fx-glow--pulse" style="--en-fx-glow-color: var(--en-success)">
    Live
  </div>
</div>`,x={__name:`2`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=b,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},S=`<div class="en-flex en-gap-3 en-items-center">
  <button class="en-btn en-fx-glow" style="--en-fx-glow-color: #ec4899; --en-fx-glow-size: 1.5rem">
    Pink Glow
  </button>
  <button class="en-btn en-fx-glow" style="--en-fx-glow-color: #22d3ee; --en-fx-glow-size: 0.75rem">
    Small Cyan
  </button>
  <button class="en-btn en-btn--danger en-fx-glow--pulse" style="--en-fx-glow-size: 2rem">
    Large Pulse
  </button>
</div>`,C={__name:`3`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},w=`<div class="en-flex en-gap-3">
  <div class="en-card en-p-4 en-fx-border-gradient" style="border-color: transparent">
    <h4 class="en-text-lg en-font-semibold">Gradient Border</h4>
    <p class="en-text-muted">Static gradient ring</p>
  </div>
  <div class="en-card en-p-4 en-fx-border-gradient" 
       style="--en-fx-from: #22d3ee; --en-fx-to: #a855f7; --en-fx-angle-static: 90deg; border-color: transparent">
    <h4 class="en-text-lg en-font-semibold">Custom Colors</h4>
    <p class="en-text-muted">Cyan to purple</p>
  </div>
</div>`,T={__name:`4`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},E=`<div class="en-flex en-gap-3">
  <div class="en-card en-p-4 en-fx-border-spin" style="border-color: transparent">
    <h4 class="en-text-lg en-font-semibold">Spinning Border</h4>
    <p class="en-text-muted">Continuous rotation</p>
  </div>
  <div class="en-card en-p-4 en-fx-border-spin" 
       style="--en-fx-from: #10b981; --en-fx-to: #3b82f6; --en-fx-spin-duration: 3s; border-color: transparent">
    <h4 class="en-text-lg en-font-semibold">Fast Spin</h4>
    <p class="en-text-muted">Green to blue, 3s</p>
  </div>
</div>`,D={__name:`5`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=E,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},O=`<div class="en-flex en-gap-3">
  <a href="#" class="en-card en-p-4 en-fx-border-draw" style="border-color: transparent">
    <h4 class="en-text-lg en-font-semibold">Hover to Draw</h4>
    <p class="en-text-muted">Border animates on hover</p>
  </a>
  <button class="en-btn en-btn--lg en-fx-border-draw" 
          style="--en-fx-draw-color: var(--en-danger); --en-fx-draw-duration: 0.8s">
    Slow Red Draw
  </button>
</div>`,k={__name:`6`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=O,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},A=`<div class="en-flex en-gap-3">
  <div class="en-card en-p-4 en-fx-border-gradient" 
       style="--en-fx-border-width: 4px; border-color: transparent">
    <h4 class="en-text-lg en-font-semibold">Thick Ring</h4>
    <p class="en-text-muted">4px gradient border</p>
  </div>
  <div class="en-card en-p-4 en-fx-border-spin" 
       style="--en-fx-border-width: 6px; --en-fx-from: #f59e0b; --en-fx-to: #ef4444; border-color: transparent">
    <h4 class="en-text-lg en-font-semibold">Extra Thick</h4>
    <p class="en-text-muted">6px spinning border</p>
  </div>
</div>`,j={__name:`7`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=A,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},M=`<section class="en-fx-aurora en-p-6 en-rounded" 
         style="background-color: #0f172a; color: #f1f5f9; min-height: 200px">
  <h2 class="en-text-2xl en-font-bold en-mb-2">Ship Faster with EN-CSS</h2>
  <p class="en-text-lg">Beautiful, animated backgrounds for hero sections and feature cards.</p>
</section>`,N={__name:`8`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=M,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},P=`<section class="en-fx-aurora--static en-p-6 en-rounded" 
         style="background-color: #0f172a; color: #f1f5f9; min-height: 200px">
  <h2 class="en-text-2xl en-font-bold en-mb-2">Static Color Glows</h2>
  <p class="en-text-lg">Same visual effect without motion for reduced motion preferences.</p>
</section>`,F={__name:`9`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=P,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},I=`<div class="en-flex en-flex--col en-gap-3">
  <section class="en-fx-aurora en-p-6 en-rounded" 
           style="--en-fx-aurora-1: rgb(16 185 129 / 0.65); --en-fx-aurora-2: rgb(59 130 246 / 0.45); --en-fx-aurora-3: rgb(168 85 247 / 0.4); background-color: #1e293b; color: #f1f5f9; min-height: 160px">
    <h3 class="en-text-xl en-font-bold">Green, Blue & Purple</h3>
    <p>Custom aurora color combination</p>
  </section>
  
  <section class="en-fx-aurora en-p-6 en-rounded" 
           style="--en-fx-aurora-duration: 8s; background-color: #0c4a6e; color: #e0f2fe; min-height: 160px">
    <h3 class="en-text-xl en-font-bold">Faster Motion</h3>
    <p>8 second drift cycle for more dynamic feel</p>
  </section>
</div>`,L={__name:`10`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=I,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},R=`<div class="en-flex en-gap-3">
  <button class="en-btn en-btn--primary en-fx-glow en-fx-border-spin" 
          style="border-color: transparent; --en-fx-glow-size: 0.5rem">
    Spin + Glow
  </button>
  <div class="en-card en-p-4 en-fx-glow--hover en-fx-border-gradient" 
       style="border-color: transparent">
    <h4 class="en-font-semibold">Hover for Glow</h4>
    <p class="en-text-sm en-text-muted">Gradient border always visible</p>
  </div>
</div>`,z={__name:`11`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=R,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},B={};function V(e,n){let r=a(`Downloadable`);return s(),t(r,{"dev-url":`effects/effects-border.css`})}var H={0:{component:_,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-fx-glow"</span><span class="shiki-foreground">>Always Glowing&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-glow"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-glow-color: var(--en-success)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Card with green glow</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Constant glow`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-fx-glow--hover"</span><span class="shiki-foreground">>Hover Me&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline en-fx-glow--hover"</span><span class="shiki-foreground">>Glowing Link&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Glow on hover/focus`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-fx-glow--pulse"</span><span class="shiki-foreground">>Pulsing&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success en-fx-glow--pulse"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-glow-color: var(--en-success)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Live</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Breathing animation`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3 en-items-center"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-fx-glow"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-glow-color: #ec4899; --en-fx-glow-size: 1.5rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Pink Glow</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-fx-glow"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-glow-color: #22d3ee; --en-fx-glow-size: 0.75rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Small Cyan</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--danger en-fx-glow--pulse"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-glow-size: 2rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Large Pulse</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Custom colors and sizes`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-border-gradient"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border-color: transparent"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-lg en-font-semibold"</span><span class="shiki-foreground">>Gradient Border&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted"</span><span class="shiki-foreground">>Static gradient ring&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-border-gradient"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">       style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-from: #22d3ee; --en-fx-to: #a855f7; --en-fx-angle-static: 90deg; border-color: transparent"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-lg en-font-semibold"</span><span class="shiki-foreground">>Custom Colors&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted"</span><span class="shiki-foreground">>Cyan to purple&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Fixed gradient border`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-border-spin"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border-color: transparent"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-lg en-font-semibold"</span><span class="shiki-foreground">>Spinning Border&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted"</span><span class="shiki-foreground">>Continuous rotation&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-border-spin"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">       style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-from: #10b981; --en-fx-to: #3b82f6; --en-fx-spin-duration: 3s; border-color: transparent"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-lg en-font-semibold"</span><span class="shiki-foreground">>Fast Spin&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted"</span><span class="shiki-foreground">>Green to blue, 3s&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Rotating gradient border`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:k,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-border-draw"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border-color: transparent"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-lg en-font-semibold"</span><span class="shiki-foreground">>Hover to Draw&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted"</span><span class="shiki-foreground">>Border animates on hover&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--lg en-fx-border-draw"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-draw-color: var(--en-danger); --en-fx-draw-duration: 0.8s"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Slow Red Draw</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Border draws clockwise on hover`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-border-gradient"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">       style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-border-width: 4px; border-color: transparent"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-lg en-font-semibold"</span><span class="shiki-foreground">>Thick Ring&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted"</span><span class="shiki-foreground">>4px gradient border&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-border-spin"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">       style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-border-width: 6px; --en-fx-from: #f59e0b; --en-fx-to: #ef4444; border-color: transparent"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-lg en-font-semibold"</span><span class="shiki-foreground">>Extra Thick&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted"</span><span class="shiki-foreground">>6px spinning border&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Wider border rings`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:N,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-aurora en-p-6 en-rounded"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"background-color: #0f172a; color: #f1f5f9; min-height: 200px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-2xl en-font-bold en-mb-2"</span><span class="shiki-foreground">>Ship Faster with EN-CSS&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-lg"</span><span class="shiki-foreground">>Beautiful, animated backgrounds for hero sections and feature cards.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Drifting color glows`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-aurora--static en-p-6 en-rounded"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"background-color: #0f172a; color: #f1f5f9; min-height: 200px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-2xl en-font-bold en-mb-2"</span><span class="shiki-foreground">>Static Color Glows&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-lg"</span><span class="shiki-foreground">>Same visual effect without motion for reduced motion preferences.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Aurora without animation`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:L,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-aurora en-p-6 en-rounded"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-aurora-1: rgb(16 185 129 / 0.65); --en-fx-aurora-2: rgb(59 130 246 / 0.45); --en-fx-aurora-3: rgb(168 85 247 / 0.4); background-color: #1e293b; color: #f1f5f9; min-height: 160px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>Green, Blue &#x26; Purple&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Custom aurora color combination&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-aurora en-p-6 en-rounded"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-aurora-duration: 8s; background-color: #0c4a6e; color: #e0f2fe; min-height: 160px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>Faster Motion&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>8 second drift cycle for more dynamic feel&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Custom glow colors`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:z,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-fx-glow en-fx-border-spin"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border-color: transparent; --en-fx-glow-size: 0.5rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Spin + Glow</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-glow--hover en-fx-border-gradient"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">       style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border-color: transparent"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Hover for Glow&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Gradient border always visible&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Multiple border effects`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- ✗ BAD - conflicts --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-border-gradient en-fx-border-spin"</span><span class="shiki-foreground">>Won't work&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-noise en-fx-border-draw"</span><span class="shiki-foreground">>Won't work&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">&#x3C;!-- ✓ GOOD - separate elements --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-border-gradient"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-noise en-p-4"</span><span class="shiki-foreground">>Inner noise layer&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:12,lang:`html`,injectKind:null,editable:!1,source:null},13:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- ✗ BAD - background shorthand clears aurora --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-aurora"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"background: #0f172a"</span><span class="shiki-foreground">>Won't work&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">&#x3C;!-- ✓ GOOD - background-color only --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-aurora"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"background-color: #0f172a"</span><span class="shiki-foreground">>Works&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:13,lang:`html`,injectKind:null,editable:!1,source:null},14:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- Card border + gradient ring (two borders) --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-fx-border-gradient"</span><span class="shiki-foreground">>Two borders visible&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">&#x3C;!-- Single gradient ring only --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-fx-border-gradient"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border-color: transparent"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Clean single ring</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:14,lang:`html`,injectKind:null,editable:!1,source:null},15:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> dir</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"rtl"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-border-draw"</span><span class="shiki-foreground">>يرسم عكس عقارب الساعة&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:l(B,[[`render`,V]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"effects/effects-border.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:16,lang:`vue`,injectKind:null,editable:!1,source:null}},U=[{id:`border-glow-effects`,text:`Border & Glow Effects`,level:1},{id:`quick-reference`,text:`Quick Reference`,level:2},{id:`glow-effects`,text:`Glow Effects`,level:2},{id:`basic-glow`,text:`Basic Glow`,level:3},{id:`hover-glow`,text:`Hover Glow`,level:3},{id:`pulsing-glow`,text:`Pulsing Glow`,level:3},{id:`custom-glow-colors`,text:`Custom Glow Colors`,level:3},{id:`gradient-border-effects`,text:`Gradient Border Effects`,level:2},{id:`static-gradient-border`,text:`Static Gradient Border`,level:3},{id:`spinning-border`,text:`Spinning Border`,level:3},{id:`draw-border-on-hover`,text:`Draw Border on Hover`,level:3},{id:`thick-gradient-borders`,text:`Thick Gradient Borders`,level:3},{id:`aurora-effect`,text:`Aurora Effect`,level:2},{id:`animated-aurora`,text:`Animated Aurora`,level:3},{id:`static-aurora`,text:`Static Aurora`,level:3},{id:`custom-aurora-colors`,text:`Custom Aurora Colors`,level:3},{id:`combined-effects`,text:`Combined Effects`,level:2},{id:`glow-gradient-border`,text:`Glow + Gradient Border`,level:3},{id:`custom-properties`,text:`Custom Properties`,level:2},{id:`glow-properties`,text:`Glow Properties`,level:3},{id:`border-gradient-properties`,text:`Border Gradient Properties`,level:3},{id:`border-spin-properties`,text:`Border Spin Properties`,level:3},{id:`border-draw-properties`,text:`Border Draw Properties`,level:3},{id:`aurora-properties`,text:`Aurora Properties`,level:3},{id:`classes`,text:`Classes`,level:2},{id:`browser-support`,text:`Browser Support`,level:2},{id:`important-notes`,text:`Important Notes`,level:2},{id:`pseudo-element-conflicts`,text:`Pseudo-element Conflicts`,level:3},{id:`background-image-conflicts`,text:`Background Image Conflicts`,level:3},{id:`border-interactions`,text:`Border Interactions`,level:3},{id:`rtl-support`,text:`RTL Support`,level:3},{id:`accessibility`,text:`Accessibility`,level:3}],W=[{id:`border-glow-effects`,text:`Border & Glow Effects`,level:1,children:[{id:`quick-reference`,text:`Quick Reference`,level:2,children:[]},{id:`glow-effects`,text:`Glow Effects`,level:2,children:[{id:`basic-glow`,text:`Basic Glow`,level:3,children:[]},{id:`hover-glow`,text:`Hover Glow`,level:3,children:[]},{id:`pulsing-glow`,text:`Pulsing Glow`,level:3,children:[]},{id:`custom-glow-colors`,text:`Custom Glow Colors`,level:3,children:[]}]},{id:`gradient-border-effects`,text:`Gradient Border Effects`,level:2,children:[{id:`static-gradient-border`,text:`Static Gradient Border`,level:3,children:[]},{id:`spinning-border`,text:`Spinning Border`,level:3,children:[]},{id:`draw-border-on-hover`,text:`Draw Border on Hover`,level:3,children:[]},{id:`thick-gradient-borders`,text:`Thick Gradient Borders`,level:3,children:[]}]},{id:`aurora-effect`,text:`Aurora Effect`,level:2,children:[{id:`animated-aurora`,text:`Animated Aurora`,level:3,children:[]},{id:`static-aurora`,text:`Static Aurora`,level:3,children:[]},{id:`custom-aurora-colors`,text:`Custom Aurora Colors`,level:3,children:[]}]},{id:`combined-effects`,text:`Combined Effects`,level:2,children:[{id:`glow-gradient-border`,text:`Glow + Gradient Border`,level:3,children:[]}]},{id:`custom-properties`,text:`Custom Properties`,level:2,children:[{id:`glow-properties`,text:`Glow Properties`,level:3,children:[]},{id:`border-gradient-properties`,text:`Border Gradient Properties`,level:3,children:[]},{id:`border-spin-properties`,text:`Border Spin Properties`,level:3,children:[]},{id:`border-draw-properties`,text:`Border Draw Properties`,level:3,children:[]},{id:`aurora-properties`,text:`Aurora Properties`,level:3,children:[]}]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`browser-support`,text:`Browser Support`,level:2,children:[]},{id:`important-notes`,text:`Important Notes`,level:2,children:[{id:`pseudo-element-conflicts`,text:`Pseudo-element Conflicts`,level:3,children:[]},{id:`background-image-conflicts`,text:`Background Image Conflicts`,level:3,children:[]},{id:`border-interactions`,text:`Border Interactions`,level:3,children:[]},{id:`rtl-support`,text:`RTL Support`,level:3,children:[]},{id:`accessibility`,text:`Accessibility`,level:3,children:[]}]}]}],G={css:[],js:[],cleanup:[]},K=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),q=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/effects/border.md`,setup(){i(`vlm-toc`,{flat:U,tree:W}),h(()=>c(U,W)),d(()=>c([],[]));let e=m(G);return i(`vlm-inject`,e),h(()=>e.mount()),o(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="border-glow-effects">Border &amp; Glow Effects<a class="header-link" href="#border-glow-effects" title="Link to this heading"></a></h1>
<p>Animated borders, glowing halos, and gradient effects for highlighting interactive elements.</p>
<h2 id="quick-reference">Quick Reference<a class="header-link" href="#quick-reference" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Effect</th>
<th>Description</th>
<th>Owns</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-fx-glow</code></td>
<td>Constant colored halo</td>
<td><code>box-shadow</code></td>
</tr>
<tr>
<td><code>.en-fx-glow--hover</code></td>
<td>Halo on hover/focus only</td>
<td><code>box-shadow</code></td>
</tr>
<tr>
<td><code>.en-fx-glow--pulse</code></td>
<td>Breathing halo animation</td>
<td><code>box-shadow</code>, <code>animation</code></td>
</tr>
<tr>
<td><code>.en-fx-border-gradient</code></td>
<td>Static gradient border ring</td>
<td><code>::before</code></td>
</tr>
<tr>
<td><code>.en-fx-border-spin</code></td>
<td>Rotating gradient border</td>
<td><code>::before</code>, <code>animation</code></td>
</tr>
<tr>
<td><code>.en-fx-border-draw</code></td>
<td>Border that draws on hover</td>
<td><code>::before</code></td>
</tr>
<tr>
<td><code>.en-fx-aurora</code></td>
<td>Drifting color glows</td>
<td><code>background-image</code>, <code>animation</code></td>
</tr>
<tr>
<td><code>.en-fx-aurora--static</code></td>
<td>Static aurora effect</td>
<td><code>background-image</code></td>
</tr>
</tbody>
</table>
</div><h2 id="glow-effects">Glow Effects<a class="header-link" href="#glow-effects" title="Link to this heading"></a></h2>
<p>Soft colored halos around elements using box-shadow.</p>
<h3 id="basic-glow">Basic Glow<a class="header-link" href="#basic-glow" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:0,meta:H[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="hover-glow">Hover Glow<a class="header-link" href="#hover-glow" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:1,meta:H[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="pulsing-glow">Pulsing Glow<a class="header-link" href="#pulsing-glow" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:2,meta:H[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-glow-colors">Custom Glow Colors<a class="header-link" href="#custom-glow-colors" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:3,meta:H[3]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="gradient-border-effects">Gradient Border Effects<a class="header-link" href="#gradient-border-effects" title="Link to this heading"></a></h2>
<p>Gradient rings drawn with <code>::before</code> pseudo-element that follow the element’s border-radius.</p>
<h3 id="static-gradient-border">Static Gradient Border<a class="header-link" href="#static-gradient-border" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:4,meta:H[4]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="spinning-border">Spinning Border<a class="header-link" href="#spinning-border" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:5,meta:H[5]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="draw-border-on-hover">Draw Border on Hover<a class="header-link" href="#draw-border-on-hover" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:6,meta:H[6]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="thick-gradient-borders">Thick Gradient Borders<a class="header-link" href="#thick-gradient-borders" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:7,meta:H[7]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="aurora-effect">Aurora Effect<a class="header-link" href="#aurora-effect" title="Link to this heading"></a></h2>
<p>Slowly drifting color glows that create an animated background. Set base color with <code>background-color</code>.</p>
<h3 id="animated-aurora">Animated Aurora<a class="header-link" href="#animated-aurora" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:8,meta:H[8]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="static-aurora">Static Aurora<a class="header-link" href="#static-aurora" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:9,meta:H[9]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-aurora-colors">Custom Aurora Colors<a class="header-link" href="#custom-aurora-colors" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:10,meta:H[10]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="combined-effects">Combined Effects<a class="header-link" href="#combined-effects" title="Link to this heading"></a></h2>
<h3 id="glow-gradient-border">Glow + Gradient Border<a class="header-link" href="#glow-gradient-border" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:11,meta:H[11]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="custom-properties">Custom Properties<a class="header-link" href="#custom-properties" title="Link to this heading"></a></h2>
<h3 id="glow-properties">Glow Properties<a class="header-link" href="#glow-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-glow-color</code></td>
<td><code>var(--en-primary, #3b82f6)</code></td>
<td>Halo color</td>
</tr>
<tr>
<td><code>--en-fx-glow-size</code></td>
<td><code>1.25rem</code></td>
<td>Blur radius</td>
</tr>
</tbody>
</table>
</div><h3 id="border-gradient-properties">Border Gradient Properties<a class="header-link" href="#border-gradient-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-from</code></td>
<td><code>var(--en-primary, #3b82f6)</code></td>
<td>Gradient start color</td>
</tr>
<tr>
<td><code>--en-fx-to</code></td>
<td>Primary mixed with <code>#ec4899</code></td>
<td>Gradient end color</td>
</tr>
<tr>
<td><code>--en-fx-border-width</code></td>
<td><code>2px</code></td>
<td>Ring thickness</td>
</tr>
<tr>
<td><code>--en-fx-angle-static</code></td>
<td><code>135deg</code></td>
<td>Gradient direction (static)</td>
</tr>
</tbody>
</table>
</div><h3 id="border-spin-properties">Border Spin Properties<a class="header-link" href="#border-spin-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-spin-duration</code></td>
<td><code>4s</code></td>
<td>Time for one full rotation</td>
</tr>
</tbody>
</table>
</div><h3 id="border-draw-properties">Border Draw Properties<a class="header-link" href="#border-draw-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-draw-color</code></td>
<td><code>var(--en-primary, #3b82f6)</code></td>
<td>Ring color</td>
</tr>
<tr>
<td><code>--en-fx-draw-width</code></td>
<td><code>2px</code></td>
<td>Ring thickness</td>
</tr>
<tr>
<td><code>--en-fx-draw-duration</code></td>
<td><code>0.6s</code></td>
<td>Time to draw full ring</td>
</tr>
</tbody>
</table>
</div><h3 id="aurora-properties">Aurora Properties<a class="header-link" href="#aurora-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-aurora-1</code></td>
<td>Primary at 65% opacity</td>
<td>First glow</td>
</tr>
<tr>
<td><code>--en-fx-aurora-2</code></td>
<td><code>rgb(236 72 153 / 0.45)</code></td>
<td>Second glow (pink)</td>
</tr>
<tr>
<td><code>--en-fx-aurora-3</code></td>
<td><code>rgb(34 211 238 / 0.4)</code></td>
<td>Third glow (cyan)</td>
</tr>
<tr>
<td><code>--en-fx-aurora-duration</code></td>
<td><code>14s</code></td>
<td>One drift cycle (alternates)</td>
</tr>
</tbody>
</table>
</div><h2 id="classes">Classes<a class="header-link" href="#classes" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-fx-glow</code></td>
<td>Constant colored halo around element</td>
</tr>
<tr>
<td><code>.en-fx-glow--hover</code></td>
<td>Glow appears only on hover or focus</td>
</tr>
<tr>
<td><code>.en-fx-glow--pulse</code></td>
<td>Breathing glow animation</td>
</tr>
<tr>
<td><code>.en-fx-border-gradient</code></td>
<td>Static gradient border ring</td>
</tr>
<tr>
<td><code>.en-fx-border-spin</code></td>
<td>Rotating gradient border ring</td>
</tr>
<tr>
<td><code>.en-fx-border-draw</code></td>
<td>Border that draws itself on hover/focus</td>
</tr>
<tr>
<td><code>.en-fx-aurora</code></td>
<td>Drifting color glows with animation</td>
</tr>
<tr>
<td><code>.en-fx-aurora--static</code></td>
<td>Aurora effect without animation</td>
</tr>
</tbody>
</table>
</div><h2 id="browser-support">Browser Support<a class="header-link" href="#browser-support" title="Link to this heading"></a></h2>
<ul>
<li><strong>Glow effects</strong>: Full support in all modern browsers</li>
<li><strong>Gradient borders</strong>: Full support, uses mask and ::before</li>
<li><strong>Border spin</strong>: Requires <code>@property</code> support (Chrome 85+, Safari 15.4+). Falls back to static gradient in older browsers</li>
<li><strong>Border draw</strong>: Requires <code>@property</code> support for animation. Falls back to instant appearance on hover</li>
<li><strong>Aurora</strong>: Full support in all modern browsers</li>
</ul>
<h2 id="important-notes">Important Notes<a class="header-link" href="#important-notes" title="Link to this heading"></a></h2>
<h3 id="pseudo-element-conflicts">Pseudo-element Conflicts<a class="header-link" href="#pseudo-element-conflicts" title="Link to this heading"></a></h3>
<p>Border effects (<code>border-gradient</code>, <code>border-spin</code>, <code>border-draw</code>) use <code>::before</code>:</p>
<ul>
<li><strong>Cannot combine</strong> with each other on same element</li>
<li><strong>Cannot combine</strong> with <code>.en-fx-noise</code> (also uses <code>::before</code>)</li>
<li><strong>Cannot combine</strong> with components that draw their own <code>::before</code></li>
</ul>
<p>`}),f(K,{key:12,meta:H[12]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="background-image-conflicts">Background Image Conflicts<a class="header-link" href="#background-image-conflicts" title="Link to this heading"></a></h3>
<p>Aurora uses <code>background-image</code>:</p>
<ul>
<li><strong>Cannot combine</strong> with <code>.en-fx-grid</code>, <code>.en-fx-dots</code>, <code>.en-fx-gloss</code>, <code>.en-fx-stripes</code></li>
<li>Use <code>background-color</code> for base color, not <code>background</code> shorthand</li>
</ul>
<p>`}),f(K,{key:13,meta:H[13]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="border-interactions">Border Interactions<a class="header-link" href="#border-interactions" title="Link to this heading"></a></h3>
<p>Gradient border rings are drawn outside the element’s own border:</p>
<p>`}),f(K,{key:14,meta:H[14]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="rtl-support">RTL Support<a class="header-link" href="#rtl-support" title="Link to this heading"></a></h3>
<p>Border draw animates <strong>counter-clockwise</strong> in right-to-left languages:</p>
<p>`}),f(K,{key:15,meta:H[15]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h3>
<p>All animations respect <code>prefers-reduced-motion</code>:</p>
<ul>
<li>Glow pulse animation disabled</li>
<li>Border spin animation disabled</li>
<li>Aurora drift animation disabled</li>
<li>Border draw transition disabled</li>
<li>Glow transitions disabled</li>
</ul>
<p>Effects remain visible but static when motion is reduced.</p>
<p>`}),f(K,{key:16,meta:H[16]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),J={title:`Border & Glow Effects`,description:`Animated borders, glowing halos, and gradient effects for highlighting interactive elements.`},Y=q;export{Y as default,J as meta};