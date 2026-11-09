import{I as e,R as t,Tt as n,W as r,at as i,c as a,ct as o,et as s,h as c,it as l,n as ee,nt as u,q as d,r as f,tt as p,u as m}from"./components-DGWjtEwO.js";var h=`<div class="en-flex en-flex--col en-gap-4">
  <section class="en-card en-p-6 en-fx-reveal">
    <h3 class="en-text-xl en-font-bold">First Section</h3>
    <p>This card rises up as it enters the viewport</p>
  </section>
  
  <section class="en-card en-p-6 en-fx-reveal">
    <h3 class="en-text-xl en-font-bold">Second Section</h3>
    <p>Each element animates independently</p>
  </section>
  
  <section class="en-card en-p-6 en-fx-reveal">
    <h3 class="en-text-xl en-font-bold">Third Section</h3>
    <p>Scroll down to see more animate in</p>
  </section>
</div>`,g={__name:`0`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_=`<div class="en-flex en-flex--col en-gap-4">
  <section class="en-card en-p-6 en-fx-reveal--left">
    <h3 class="en-text-xl en-font-bold">From Left</h3>
    <p>Slides in from the inline-start (left in LTR)</p>
  </section>
  
  <section class="en-card en-p-6 en-fx-reveal--right">
    <h3 class="en-text-xl en-font-bold">From Right</h3>
    <p>Slides in from the inline-end (right in LTR)</p>
  </section>
</div>`,v={__name:`1`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=_,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},y=`<div class="en-flex en-flex--col en-gap-4">
  <section class="en-card en-p-6 en-fx-reveal--scale">
    <h3 class="en-text-xl en-font-bold">Scale Effect</h3>
    <p>Fades in while scaling from 0.92 to 1</p>
  </section>
  
  <section class="en-card en-p-6 en-fx-reveal--fade">
    <h3 class="en-text-xl en-font-bold">Fade Only</h3>
    <p>Simple fade in without movement</p>
  </section>
</div>`,b={__name:`2`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=y,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},x=`<div class="en-flex en-flex--col en-gap-4">
  <section class="en-card en-p-6 en-fx-reveal">
    <h3 class="en-text-xl en-font-bold">Default Distance</h3>
    <p>Rises 2rem (default)</p>
  </section>
  
  <section class="en-card en-p-6 en-fx-reveal" style="--en-fx-reveal-distance: 4rem">
    <h3 class="en-text-xl en-font-bold">Larger Distance</h3>
    <p>Rises 4rem for more dramatic effect</p>
  </section>
  
  <section class="en-card en-p-6 en-fx-reveal" style="--en-fx-reveal-distance: 0.5rem">
    <h3 class="en-text-xl en-font-bold">Subtle Distance</h3>
    <p>Rises only 0.5rem for subtle motion</p>
  </section>
</div>`,S={__name:`3`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=x,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},C=`<div class="en-flex en-flex--col en-gap-4">
  <div class="en-card en-p-4 en-fx-reveal">
    <h4 class="en-font-semibold">Rise Up</h4>
  </div>
  <div class="en-card en-p-4 en-fx-reveal--left">
    <h4 class="en-font-semibold">From Left</h4>
  </div>
  <div class="en-card en-p-4 en-fx-reveal--right">
    <h4 class="en-font-semibold">From Right</h4>
  </div>
  <div class="en-card en-p-4 en-fx-reveal--scale">
    <h4 class="en-font-semibold">Scale</h4>
  </div>
  <div class="en-card en-p-4 en-fx-reveal--fade">
    <h4 class="en-font-semibold">Fade</h4>
  </div>
</div>`,w={__name:`4`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=C,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},T=`<div>
  <div class="en-fx-scroll-progress" aria-hidden="true"></div>
  <p class="en-text-muted en-text-sm">A thin progress bar appears at the top of the page</p>
</div>`,E={__name:`5`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=T,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},D=`<div>
  <div class="en-fx-scroll-progress--bottom" aria-hidden="true"></div>
  <p class="en-text-muted en-text-sm">Progress bar appears at the bottom of the page</p>
</div>`,O={__name:`6`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=D,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},k=`<div class="en-flex en-flex--col en-gap-3">
  <div>
    <div class="en-fx-scroll-progress" 
         style="--en-fx-progress-color: var(--en-success); --en-fx-progress-height: 4px" 
         aria-hidden="true"></div>
    <p class="en-text-sm">Green progress bar, 4px thick</p>
  </div>
  
  <div>
    <div class="en-fx-scroll-progress" 
         style="--en-fx-progress-color: var(--en-danger); --en-fx-progress-height: 6px" 
         aria-hidden="true"></div>
    <p class="en-text-sm">Red progress bar, 6px thick</p>
  </div>
</div>`,A={__name:`7`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=k,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},j=`<ul class="en-fx-stagger" style="list-style: none; padding: 0; margin: 0;">
  <li class="en-card en-p-3 en-mb-2">Item 1 - Appears first</li>
  <li class="en-card en-p-3 en-mb-2">Item 2 - 70ms delay</li>
  <li class="en-card en-p-3 en-mb-2">Item 3 - 140ms delay</li>
  <li class="en-card en-p-3 en-mb-2">Item 4 - 210ms delay</li>
  <li class="en-card en-p-3 en-mb-2">Item 5 - 280ms delay</li>
</ul>`,M={__name:`8`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=j,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},N=`<div class="en-grid en-gap-3 en-fx-stagger" style="--en-grid-min: 150px">
  <div class="en-card en-p-4">
    <h4 class="en-font-semibold en-mb-2">Card 1</h4>
    <p class="en-text-sm en-text-muted">First to appear</p>
  </div>
  <div class="en-card en-p-4">
    <h4 class="en-font-semibold en-mb-2">Card 2</h4>
    <p class="en-text-sm en-text-muted">Second</p>
  </div>
  <div class="en-card en-p-4">
    <h4 class="en-font-semibold en-mb-2">Card 3</h4>
    <p class="en-text-sm en-text-muted">Third</p>
  </div>
  <div class="en-card en-p-4">
    <h4 class="en-font-semibold en-mb-2">Card 4</h4>
    <p class="en-text-sm en-text-muted">Fourth</p>
  </div>
</div>`,P={__name:`9`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=N,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},te=`<div class="en-fx-stagger" style="--en-fx-stagger-step: 150ms; --en-fx-stagger-duration: 0.8s; --en-fx-stagger-distance: 2rem">
  <div class="en-card en-p-4 en-mb-3">
    <h4 class="en-font-semibold">Slow Stagger</h4>
    <p class="en-text-sm en-text-muted">150ms between each item</p>
  </div>
  <div class="en-card en-p-4 en-mb-3">
    <h4 class="en-font-semibold">Longer Duration</h4>
    <p class="en-text-sm en-text-muted">0.8s animation per item</p>
  </div>
  <div class="en-card en-p-4 en-mb-3">
    <h4 class="en-font-semibold">Larger Rise</h4>
    <p class="en-text-sm en-text-muted">2rem travel distance</p>
  </div>
</div>`,F={__name:`10`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=te,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},I=`<div class="en-fx-stagger--delay" style="--en-fx-stagger-step: 100ms">
  <div class="en-card en-p-3 en-mb-2 en-animate-fade-in">
    Uses fade-in animation with staggered delay
  </div>
  <div class="en-card en-p-3 en-mb-2 en-animate-fade-in">
    Second item, 100ms later
  </div>
  <div class="en-card en-p-3 en-mb-2 en-animate-fade-in">
    Third item, 200ms later
  </div>
</div>`,L={__name:`11`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=I,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},R=`<div class="en-grid en-gap-3 en-fx-stagger--scroll" style="--en-grid-min: 180px">
  <article class="en-card en-p-4">
    <h4 class="en-font-semibold">Feature 1</h4>
    <p class="en-text-sm en-text-muted">Reveals as you scroll</p>
  </article>
  <article class="en-card en-p-4">
    <h4 class="en-font-semibold">Feature 2</h4>
    <p class="en-text-sm en-text-muted">Slightly delayed</p>
  </article>
  <article class="en-card en-p-4">
    <h4 class="en-font-semibold">Feature 3</h4>
    <p class="en-text-sm en-text-muted">More delayed</p>
  </article>
  <article class="en-card en-p-4">
    <h4 class="en-font-semibold">Feature 4</h4>
    <p class="en-text-sm en-text-muted">Most delayed</p>
  </article>
</div>`,z={__name:`12`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=R,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},B=`<div class="en-flex en-flex--col en-gap-3">
  <article class="en-card en-card--hover en-p-4 en-fx-reveal">
    <h4 class="en-font-semibold">Hoverable Card</h4>
    <p class="en-text-sm en-text-muted">Reveals on scroll, lifts on hover</p>
  </article>
  <article class="en-card en-card--hover en-p-4 en-fx-reveal--left">
    <h4 class="en-font-semibold">From Left</h4>
    <p class="en-text-sm en-text-muted">Slides in then becomes interactive</p>
  </article>
</div>`,V={__name:`13`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=B,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},H=`<div class="en-flex en-gap-2 en-flex--wrap en-fx-stagger">
  <span class="en-badge en-badge--primary">JavaScript</span>
  <span class="en-badge en-badge--success">TypeScript</span>
  <span class="en-badge en-badge--info">React</span>
  <span class="en-badge en-badge--warning">Vue</span>
  <span class="en-badge en-badge--danger">Angular</span>
  <span class="en-badge">Svelte</span>
</div>`,U={__name:`14`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=H,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},W=`<div class="en-flex en-flex--col en-gap-6">
  <section class="en-card en-p-6 en-fx-reveal--scale">
    <h2 class="en-text-2xl en-font-bold en-mb-2">Hero Section</h2>
    <p>Scales in for impact</p>
  </section>
  
  <div class="en-grid en-gap-4 en-fx-stagger--scroll" style="--en-grid-min: 200px">
    <div class="en-card en-p-4">
      <h3 class="en-font-semibold">Feature 1</h3>
    </div>
    <div class="en-card en-p-4">
      <h3 class="en-font-semibold">Feature 2</h3>
    </div>
    <div class="en-card en-p-4">
      <h3 class="en-font-semibold">Feature 3</h3>
    </div>
  </div>
</div>`,G={__name:`19`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=W,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},K=`<div>
  <div class="en-fx-scroll-progress" style="--en-fx-progress-color: var(--en-success)" aria-hidden="true"></div>
  
  <article class="en-prose">
    <section class="en-fx-reveal">
      <h2>Introduction</h2>
      <p>Article content that reveals while scrolling...</p>
    </section>
  </article>
</div>`,q={__name:`20`,setup(e){let r=n(null);return p(()=>{r.value&&(r.value.innerHTML=K,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},J={};function Y(t,n){let r=o(`Downloadable`);return l(),e(r,{"dev-url":`effects/effects-scroll.css`})}var X={0:{component:g,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>First Section&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>This card rises up as it enters the viewport&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>Second Section&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Each element animates independently&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>Third Section&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Scroll down to see more animate in&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Default rise from below`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:v,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal--left"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>From Left&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Slides in from the inline-start (left in LTR)&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal--right"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>From Right&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Slides in from the inline-end (right in LTR)&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Slide from left and right`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:b,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal--scale"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>Scale Effect&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Fades in while scaling from 0.92 to 1&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal--fade"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>Fade Only&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Simple fade in without movement&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Scale up and fade in`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:S,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>Default Distance&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Rises 2rem (default)&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-reveal-distance: 4rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>Larger Distance&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Rises 4rem for more dramatic effect&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-reveal-distance: 0.5rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xl en-font-bold"</span><span class="shiki-foreground">>Subtle Distance&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Rises only 0.5rem for subtle motion&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Different slide distances`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:w,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-reveal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Rise Up&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-reveal--left"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>From Left&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-reveal--right"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>From Right&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-reveal--scale"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Scale&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-reveal--fade"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Fade&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Different reveals in sequence`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:E,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-scroll-progress"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted en-text-sm"</span><span class="shiki-foreground">>A thin progress bar appears at the top of the page&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Progress bar at top`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:O,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-scroll-progress--bottom"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted en-text-sm"</span><span class="shiki-foreground">>Progress bar appears at the bottom of the page&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Progress bar at bottom`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:A,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-scroll-progress"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-progress-color: var(--en-success); --en-fx-progress-height: 4px"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm"</span><span class="shiki-foreground">>Green progress bar, 4px thick&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-scroll-progress"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-progress-color: var(--en-danger); --en-fx-progress-height: 6px"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm"</span><span class="shiki-foreground">>Red progress bar, 6px thick&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Custom color and height`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:M,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-stagger"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list-style: none; padding: 0; margin: 0;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-3 en-mb-2"</span><span class="shiki-foreground">>Item 1 - Appears first&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-3 en-mb-2"</span><span class="shiki-foreground">>Item 2 - 70ms delay&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-3 en-mb-2"</span><span class="shiki-foreground">>Item 3 - 140ms delay&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-3 en-mb-2"</span><span class="shiki-foreground">>Item 4 - 210ms delay&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-3 en-mb-2"</span><span class="shiki-foreground">>Item 5 - 280ms delay&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`List items appear one by one`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:P,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid en-gap-3 en-fx-stagger"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 150px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold en-mb-2"</span><span class="shiki-foreground">>Card 1&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>First to appear&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold en-mb-2"</span><span class="shiki-foreground">>Card 2&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Second&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold en-mb-2"</span><span class="shiki-foreground">>Card 3&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Third&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold en-mb-2"</span><span class="shiki-foreground">>Card 4&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Fourth&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Grid cards with stagger`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-stagger"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-stagger-step: 150ms; --en-fx-stagger-duration: 0.8s; --en-fx-stagger-distance: 2rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-mb-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Slow Stagger&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>150ms between each item&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-mb-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Longer Duration&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>0.8s animation per item&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-mb-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Larger Rise&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>2rem travel distance&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Slower stagger with larger distance`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:L,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-stagger--delay"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-stagger-step: 100ms"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-3 en-mb-2 en-animate-fade-in"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Uses fade-in animation with staggered delay</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-3 en-mb-2 en-animate-fade-in"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Second item, 100ms later</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-3 en-mb-2 en-animate-fade-in"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Third item, 200ms later</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Stagger with existing animations`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:z,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid en-gap-3 en-fx-stagger--scroll"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 180px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">article</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Feature 1&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Reveals as you scroll&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">article</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">article</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Feature 2&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Slightly delayed&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">article</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">article</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Feature 3&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>More delayed&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">article</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">article</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Feature 4&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Most delayed&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">article</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Items reveal while scrolling`,key:12,lang:`html`,injectKind:null,editable:!1,source:null},13:{component:V,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">article</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-card--hover en-p-4 en-fx-reveal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Hoverable Card&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Reveals on scroll, lifts on hover&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">article</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">article</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-card--hover en-p-4 en-fx-reveal--left"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>From Left&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Slides in then becomes interactive&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">article</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Reveal with interactive cards`,key:13,lang:`html`,injectKind:null,editable:!1,source:null},14:{component:U,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-2 en-flex--wrap en-fx-stagger"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--primary"</span><span class="shiki-foreground">>JavaScript&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>TypeScript&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--info"</span><span class="shiki-foreground">>React&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--warning"</span><span class="shiki-foreground">>Vue&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--danger"</span><span class="shiki-foreground">>Angular&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge"</span><span class="shiki-foreground">>Svelte&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Badge list with stagger`,key:14,lang:`html`,injectKind:null,editable:!1,source:null},15:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- ✗ BAD - both animate opacity and translate --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-reveal en-fx-reveal--left"</span><span class="shiki-foreground">>Conflicts&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">&#x3C;!-- ✗ BAD - stagger and reveal on same element --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-reveal en-fx-stagger"</span><span class="shiki-foreground">>Conflicts&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">&#x3C;!-- ✓ GOOD - one reveal effect per element --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-reveal"</span><span class="shiki-foreground">>Works&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-reveal--left"</span><span class="shiki-foreground">>Also works&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- LTR: slides from left edge --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-reveal--left"</span><span class="shiki-foreground">>From left&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">&#x3C;!-- RTL: slides from right edge (inline-start in RTL) --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> dir</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"rtl"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-reveal--left"</span><span class="shiki-foreground">>מימין&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:16,lang:`html`,injectKind:null,editable:!1,source:null},17:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;!</span><span class="shiki-token-string-expression">DOCTYPE</span><span class="shiki-token-function"> html</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">html</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">body</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-scroll-progress"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Rest of content --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">body</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">html</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:17,lang:`html`,injectKind:null,editable:!1,source:null},18:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- Children have their own animations --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-stagger--delay"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-animate-fade-in"</span><span class="shiki-foreground">>Has fade animation&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-animate-slide-up"</span><span class="shiki-foreground">>Has slide animation&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-animate-scale-in"</span><span class="shiki-foreground">>Has scale animation&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:18,lang:`html`,injectKind:null,editable:!1,source:null},19:{component:G,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-6"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-reveal--scale"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-2xl en-font-bold en-mb-2"</span><span class="shiki-foreground">>Hero Section&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Scales in for impact&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid en-gap-4 en-fx-stagger--scroll"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 200px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Feature 1&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Feature 2&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Feature 3&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Hero and features with reveals`,key:19,lang:`html`,injectKind:null,editable:!1,source:null},20:{component:q,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-scroll-progress"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-progress-color: var(--en-success)"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">article</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-prose"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-reveal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">>Introduction&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Article content that reveals while scrolling...&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">article</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Article with progress bar`,key:20,lang:`html`,injectKind:null,editable:!1,source:null},21:{component:c(J,[[`render`,Y]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"effects/effects-scroll.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:21,lang:`vue`,injectKind:null,editable:!1,source:null}},Z=[{id:`scroll-effects`,text:`Scroll Effects`,level:1},{id:`quick-reference`,text:`Quick Reference`,level:2},{id:`reveal-effects`,text:`Reveal Effects`,level:2},{id:`basic-reveal-rise-up`,text:`Basic Reveal (Rise Up)`,level:3},{id:`horizontal-reveals`,text:`Horizontal Reveals`,level:3},{id:`scale-and-fade`,text:`Scale and Fade`,level:3},{id:`custom-reveal-distance`,text:`Custom Reveal Distance`,level:3},{id:`mixed-reveal-styles`,text:`Mixed Reveal Styles`,level:3},{id:`scroll-progress-bar`,text:`Scroll Progress Bar`,level:2},{id:`top-progress-bar`,text:`Top Progress Bar`,level:3},{id:`bottom-progress-bar`,text:`Bottom Progress Bar`,level:3},{id:`custom-progress-bar-style`,text:`Custom Progress Bar Style`,level:3},{id:`stagger-effects`,text:`Stagger Effects`,level:2},{id:`stagger-on-load`,text:`Stagger on Load`,level:3},{id:`stagger-grid`,text:`Stagger Grid`,level:3},{id:`custom-stagger-timing`,text:`Custom Stagger Timing`,level:3},{id:`stagger-delay-only`,text:`Stagger Delay Only`,level:3},{id:`stagger-on-scroll`,text:`Stagger on Scroll`,level:3},{id:`combined-effects`,text:`Combined Effects`,level:2},{id:`reveal-card-hover`,text:`Reveal + Card Hover`,level:3},{id:`stagger-badges`,text:`Stagger + Badges`,level:3},{id:`custom-properties`,text:`Custom Properties`,level:2},{id:`reveal-properties`,text:`Reveal Properties`,level:3},{id:`scroll-progress-properties`,text:`Scroll Progress Properties`,level:3},{id:`stagger-properties`,text:`Stagger Properties`,level:3},{id:`classes`,text:`Classes`,level:2},{id:`browser-support`,text:`Browser Support`,level:2},{id:`scroll-driven-animations`,text:`Scroll-Driven Animations`,level:3},{id:`time-based-animations`,text:`Time-Based Animations`,level:3},{id:`important-notes`,text:`Important Notes`,level:2},{id:`reveal-animation-conflicts`,text:`Reveal Animation Conflicts`,level:3},{id:`rtl-support`,text:`RTL Support`,level:3},{id:`progress-bar-placement`,text:`Progress Bar Placement`,level:3},{id:`stagger-index-limit`,text:`Stagger Index Limit`,level:3},{id:`stagger-with-existing-animations`,text:`Stagger with Existing Animations`,level:3},{id:`animation-range`,text:`Animation Range`,level:3},{id:`accessibility`,text:`Accessibility`,level:3},{id:`performance`,text:`Performance`,level:3},{id:`use-cases`,text:`Use Cases`,level:2},{id:`practical-examples`,text:`Practical Examples`,level:2},{id:`landing-page-sections`,text:`Landing Page Sections`,level:3},{id:`article-layout`,text:`Article Layout`,level:3}],Q=[{id:`scroll-effects`,text:`Scroll Effects`,level:1,children:[{id:`quick-reference`,text:`Quick Reference`,level:2,children:[]},{id:`reveal-effects`,text:`Reveal Effects`,level:2,children:[{id:`basic-reveal-rise-up`,text:`Basic Reveal (Rise Up)`,level:3,children:[]},{id:`horizontal-reveals`,text:`Horizontal Reveals`,level:3,children:[]},{id:`scale-and-fade`,text:`Scale and Fade`,level:3,children:[]},{id:`custom-reveal-distance`,text:`Custom Reveal Distance`,level:3,children:[]},{id:`mixed-reveal-styles`,text:`Mixed Reveal Styles`,level:3,children:[]}]},{id:`scroll-progress-bar`,text:`Scroll Progress Bar`,level:2,children:[{id:`top-progress-bar`,text:`Top Progress Bar`,level:3,children:[]},{id:`bottom-progress-bar`,text:`Bottom Progress Bar`,level:3,children:[]},{id:`custom-progress-bar-style`,text:`Custom Progress Bar Style`,level:3,children:[]}]},{id:`stagger-effects`,text:`Stagger Effects`,level:2,children:[{id:`stagger-on-load`,text:`Stagger on Load`,level:3,children:[]},{id:`stagger-grid`,text:`Stagger Grid`,level:3,children:[]},{id:`custom-stagger-timing`,text:`Custom Stagger Timing`,level:3,children:[]},{id:`stagger-delay-only`,text:`Stagger Delay Only`,level:3,children:[]},{id:`stagger-on-scroll`,text:`Stagger on Scroll`,level:3,children:[]}]},{id:`combined-effects`,text:`Combined Effects`,level:2,children:[{id:`reveal-card-hover`,text:`Reveal + Card Hover`,level:3,children:[]},{id:`stagger-badges`,text:`Stagger + Badges`,level:3,children:[]}]},{id:`custom-properties`,text:`Custom Properties`,level:2,children:[{id:`reveal-properties`,text:`Reveal Properties`,level:3,children:[]},{id:`scroll-progress-properties`,text:`Scroll Progress Properties`,level:3,children:[]},{id:`stagger-properties`,text:`Stagger Properties`,level:3,children:[]}]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`browser-support`,text:`Browser Support`,level:2,children:[{id:`scroll-driven-animations`,text:`Scroll-Driven Animations`,level:3,children:[]},{id:`time-based-animations`,text:`Time-Based Animations`,level:3,children:[]}]},{id:`important-notes`,text:`Important Notes`,level:2,children:[{id:`reveal-animation-conflicts`,text:`Reveal Animation Conflicts`,level:3,children:[]},{id:`rtl-support`,text:`RTL Support`,level:3,children:[]},{id:`progress-bar-placement`,text:`Progress Bar Placement`,level:3,children:[]},{id:`stagger-index-limit`,text:`Stagger Index Limit`,level:3,children:[]},{id:`stagger-with-existing-animations`,text:`Stagger with Existing Animations`,level:3,children:[]},{id:`animation-range`,text:`Animation Range`,level:3,children:[]},{id:`accessibility`,text:`Accessibility`,level:3,children:[]},{id:`performance`,text:`Performance`,level:3,children:[]}]},{id:`use-cases`,text:`Use Cases`,level:2,children:[]},{id:`practical-examples`,text:`Practical Examples`,level:2,children:[{id:`landing-page-sections`,text:`Landing Page Sections`,level:3,children:[]},{id:`article-layout`,text:`Article Layout`,level:3,children:[]}]}]}],ne={css:[],js:[],cleanup:[]},$=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>d(`div`,{class:n},[e.meta.isLive?d(f,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:d(ee,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),re=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/effects/scroll.md`,setup(){i(`vlm-toc`,{flat:Z,tree:Q}),p(()=>m(Z,Q)),u(()=>m([],[]));let e=a(ne);return i(`vlm-inject`,e),p(()=>e.mount()),s(()=>e.beforeUnmount()),u(()=>e.unmounted()),()=>d(`div`,{class:`vlm-page`},[d(`div`,{class:`vlm-content`},[d(`div`,{class:`vlm-md`,innerHTML:`<h1 id="scroll-effects">Scroll Effects<a class="header-link" href="#scroll-effects" title="Link to this heading"></a></h1>
<p>Scroll-driven animations using CSS <code>animation-timeline</code>. No JavaScript required.</p>
<h2 id="quick-reference">Quick Reference<a class="header-link" href="#quick-reference" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Effect</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-fx-reveal</code></td>
<td>Fades in and rises from below</td>
<td>Scroll-driven</td>
</tr>
<tr>
<td><code>.en-fx-reveal--left</code></td>
<td>Slides in from inline-start</td>
<td>Scroll-driven</td>
</tr>
<tr>
<td><code>.en-fx-reveal--right</code></td>
<td>Slides in from inline-end</td>
<td>Scroll-driven</td>
</tr>
<tr>
<td><code>.en-fx-reveal--scale</code></td>
<td>Fades in while scaling up</td>
<td>Scroll-driven</td>
</tr>
<tr>
<td><code>.en-fx-reveal--fade</code></td>
<td>Fades in only (no movement)</td>
<td>Scroll-driven</td>
</tr>
<tr>
<td><code>.en-fx-scroll-progress</code></td>
<td>Reading progress bar (top)</td>
<td>Scroll-driven</td>
</tr>
<tr>
<td><code>.en-fx-scroll-progress--bottom</code></td>
<td>Reading progress bar (bottom)</td>
<td>Scroll-driven</td>
</tr>
<tr>
<td><code>.en-fx-stagger</code></td>
<td>Children enter sequentially (on load)</td>
<td>Time-based</td>
</tr>
<tr>
<td><code>.en-fx-stagger--delay</code></td>
<td>Adds staggered delay only</td>
<td>Time-based</td>
</tr>
<tr>
<td><code>.en-fx-stagger--scroll</code></td>
<td>Children reveal while scrolling</td>
<td>Scroll-driven</td>
</tr>
</tbody>
</table>
</div><p><strong>Fallback</strong>: Browsers without <code>animation-timeline</code> support show content immediately (no animation, not hidden).</p>
<h2 id="reveal-effects">Reveal Effects<a class="header-link" href="#reveal-effects" title="Link to this heading"></a></h2>
<p>Elements animate into view as they scroll into the viewport (entry phase).</p>
<h3 id="basic-reveal-rise-up">Basic Reveal (Rise Up)<a class="header-link" href="#basic-reveal-rise-up" title="Link to this heading"></a></h3>
<p>`}),d($,{key:0,meta:X[0]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="horizontal-reveals">Horizontal Reveals<a class="header-link" href="#horizontal-reveals" title="Link to this heading"></a></h3>
<p>`}),d($,{key:1,meta:X[1]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="scale-and-fade">Scale and Fade<a class="header-link" href="#scale-and-fade" title="Link to this heading"></a></h3>
<p>`}),d($,{key:2,meta:X[2]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-reveal-distance">Custom Reveal Distance<a class="header-link" href="#custom-reveal-distance" title="Link to this heading"></a></h3>
<p>`}),d($,{key:3,meta:X[3]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="mixed-reveal-styles">Mixed Reveal Styles<a class="header-link" href="#mixed-reveal-styles" title="Link to this heading"></a></h3>
<p>`}),d($,{key:4,meta:X[4]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="scroll-progress-bar">Scroll Progress Bar<a class="header-link" href="#scroll-progress-bar" title="Link to this heading"></a></h2>
<p>Reading progress indicator that fills as page scrolls. Fixed to viewport edge.</p>
<h3 id="top-progress-bar">Top Progress Bar<a class="header-link" href="#top-progress-bar" title="Link to this heading"></a></h3>
<p>`}),d($,{key:5,meta:X[5]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="bottom-progress-bar">Bottom Progress Bar<a class="header-link" href="#bottom-progress-bar" title="Link to this heading"></a></h3>
<p>`}),d($,{key:6,meta:X[6]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-progress-bar-style">Custom Progress Bar Style<a class="header-link" href="#custom-progress-bar-style" title="Link to this heading"></a></h3>
<p>`}),d($,{key:7,meta:X[7]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="stagger-effects">Stagger Effects<a class="header-link" href="#stagger-effects" title="Link to this heading"></a></h2>
<p>Children animate sequentially with index-based delays.</p>
<h3 id="stagger-on-load">Stagger on Load<a class="header-link" href="#stagger-on-load" title="Link to this heading"></a></h3>
<p>`}),d($,{key:8,meta:X[8]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="stagger-grid">Stagger Grid<a class="header-link" href="#stagger-grid" title="Link to this heading"></a></h3>
<p>`}),d($,{key:9,meta:X[9]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-stagger-timing">Custom Stagger Timing<a class="header-link" href="#custom-stagger-timing" title="Link to this heading"></a></h3>
<p>`}),d($,{key:10,meta:X[10]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="stagger-delay-only">Stagger Delay Only<a class="header-link" href="#stagger-delay-only" title="Link to this heading"></a></h3>
<p>`}),d($,{key:11,meta:X[11]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="stagger-on-scroll">Stagger on Scroll<a class="header-link" href="#stagger-on-scroll" title="Link to this heading"></a></h3>
<p>`}),d($,{key:12,meta:X[12]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="combined-effects">Combined Effects<a class="header-link" href="#combined-effects" title="Link to this heading"></a></h2>
<h3 id="reveal-card-hover">Reveal + Card Hover<a class="header-link" href="#reveal-card-hover" title="Link to this heading"></a></h3>
<p>`}),d($,{key:13,meta:X[13]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="stagger-badges">Stagger + Badges<a class="header-link" href="#stagger-badges" title="Link to this heading"></a></h3>
<p>`}),d($,{key:14,meta:X[14]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="custom-properties">Custom Properties<a class="header-link" href="#custom-properties" title="Link to this heading"></a></h2>
<h3 id="reveal-properties">Reveal Properties<a class="header-link" href="#reveal-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-reveal-distance</code></td>
<td><code>2rem</code></td>
<td>Slide distance for directional reveals</td>
</tr>
</tbody>
</table>
</div><h3 id="scroll-progress-properties">Scroll Progress Properties<a class="header-link" href="#scroll-progress-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-progress-color</code></td>
<td><code>var(--en-primary, #3b82f6)</code></td>
<td>Bar color</td>
</tr>
<tr>
<td><code>--en-fx-progress-height</code></td>
<td><code>3px</code></td>
<td>Bar thickness</td>
</tr>
<tr>
<td><code>--en-fx-progress-z</code></td>
<td><code>1000</code></td>
<td>Z-index (fixed positioning)</td>
</tr>
</tbody>
</table>
</div><h3 id="stagger-properties">Stagger Properties<a class="header-link" href="#stagger-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-stagger-step</code></td>
<td><code>70ms</code></td>
<td>Delay between each child</td>
</tr>
<tr>
<td><code>--en-fx-stagger-duration</code></td>
<td><code>0.5s</code></td>
<td>Animation duration per child</td>
</tr>
<tr>
<td><code>--en-fx-stagger-distance</code></td>
<td><code>1rem</code></td>
<td>Rise distance</td>
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
<td><code>.en-fx-reveal</code></td>
<td>Fades in and rises from below on scroll</td>
</tr>
<tr>
<td><code>.en-fx-reveal--left</code></td>
<td>Slides in from inline-start (LTR: left, RTL: right)</td>
</tr>
<tr>
<td><code>.en-fx-reveal--right</code></td>
<td>Slides in from inline-end (LTR: right, RTL: left)</td>
</tr>
<tr>
<td><code>.en-fx-reveal--scale</code></td>
<td>Fades in while scaling from 0.92 to 1</td>
</tr>
<tr>
<td><code>.en-fx-reveal--fade</code></td>
<td>Fades in without movement</td>
</tr>
<tr>
<td><code>.en-fx-scroll-progress</code></td>
<td>Reading progress bar fixed at top</td>
</tr>
<tr>
<td><code>.en-fx-scroll-progress--bottom</code></td>
<td>Reading progress bar fixed at bottom</td>
</tr>
<tr>
<td><code>.en-fx-stagger</code></td>
<td>Children appear sequentially on load</td>
</tr>
<tr>
<td><code>.en-fx-stagger--delay</code></td>
<td>Adds staggered delay to children’s animations</td>
</tr>
<tr>
<td><code>.en-fx-stagger--scroll</code></td>
<td>Children reveal sequentially while scrolling</td>
</tr>
</tbody>
</table>
</div><h2 id="browser-support">Browser Support<a class="header-link" href="#browser-support" title="Link to this heading"></a></h2>
<h3 id="scroll-driven-animations">Scroll-Driven Animations<a class="header-link" href="#scroll-driven-animations" title="Link to this heading"></a></h3>
<p>Effects require <code>animation-timeline</code> support:</p>
<ul>
<li><strong>Chrome/Edge</strong>: 115+ ✅</li>
<li><strong>Safari</strong>: 17.5+ (iOS 17.5+) ✅</li>
<li><strong>Firefox</strong>: Behind flag (not stable) ⚠️</li>
</ul>
<p><strong>Fallback behavior</strong>:</p>
<ul>
<li>Reveal effects: Content shown immediately (not hidden)</li>
<li>Progress bar: Remains empty (not filled)</li>
<li>Stagger-scroll: Falls back to time-based stagger</li>
</ul>
<h3 id="time-based-animations">Time-Based Animations<a class="header-link" href="#time-based-animations" title="Link to this heading"></a></h3>
<p>Standard stagger effects work in all modern browsers.</p>
<h2 id="important-notes">Important Notes<a class="header-link" href="#important-notes" title="Link to this heading"></a></h2>
<h3 id="reveal-animation-conflicts">Reveal Animation Conflicts<a class="header-link" href="#reveal-animation-conflicts" title="Link to this heading"></a></h3>
<p>Do not combine multiple reveal classes on same element:</p>
<p>`}),d($,{key:15,meta:X[15]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="rtl-support">RTL Support<a class="header-link" href="#rtl-support" title="Link to this heading"></a></h3>
<p>Horizontal reveals automatically mirror in RTL:</p>
<ul>
<li><code>--left</code>: Slides from <strong>inline-start</strong> (left in LTR, right in RTL)</li>
<li><code>--right</code>: Slides from <strong>inline-end</strong> (right in LTR, left in RTL)</li>
</ul>
<p>`}),d($,{key:16,meta:X[16]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>This ensures reveals follow reading direction.</p>
<h3 id="progress-bar-placement">Progress Bar Placement<a class="header-link" href="#progress-bar-placement" title="Link to this heading"></a></h3>
<p>Progress bar is fixed, place once near top of <code>&lt;body&gt;</code>:</p>
<p>`}),d($,{key:17,meta:X[17]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Do not place multiple progress bars or inside scrolling containers.</p>
<h3 id="stagger-index-limit">Stagger Index Limit<a class="header-link" href="#stagger-index-limit" title="Link to this heading"></a></h3>
<p>Stagger supports first <strong>24 children</strong>:</p>
<ul>
<li>Children 1-24: Get individual delays (0ms, 70ms, 140ms, …)</li>
<li>Children 25+: Share delay of 24th child (1610ms)</li>
</ul>
<p>For more than 24 items, consider grouping or custom implementation.</p>
<h3 id="stagger-with-existing-animations">Stagger with Existing Animations<a class="header-link" href="#stagger-with-existing-animations" title="Link to this heading"></a></h3>
<p><code>.en-fx-stagger--delay</code> only adds <code>animation-delay</code>:</p>
<p>`}),d($,{key:18,meta:X[18]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Useful when combining with utility animation classes.</p>
<h3 id="animation-range">Animation Range<a class="header-link" href="#animation-range" title="Link to this heading"></a></h3>
<p>Reveals trigger during <strong>entry phase</strong> (0% to 45%):</p>
<ul>
<li>Element starts entering viewport</li>
<li>Animation completes when 45% visible</li>
<li>Prevents premature triggering</li>
</ul>
<p>Stagger-scroll uses progressive ranges (each child slightly later).</p>
<h3 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h3>
<p>All scroll animations respect <code>prefers-reduced-motion</code>:</p>
<ul>
<li>Reveal animations disabled (content shown immediately)</li>
<li>Stagger animations disabled (children appear together)</li>
<li>Progress bar remains functional (no animation, just static)</li>
</ul>
<p>Motion-sensitive users see all content without animation.</p>
<h3 id="performance">Performance<a class="header-link" href="#performance" title="Link to this heading"></a></h3>
<p>Scroll-driven animations are <strong>GPU-accelerated</strong>:</p>
<ul>
<li>Use <code>translate</code> instead of <code>left</code>/<code>top</code></li>
<li>Use <code>scale</code> instead of <code>width</code>/<code>height</code></li>
<li>Use <code>opacity</code> for fading</li>
</ul>
<p>No JavaScript listeners or scroll calculations needed.</p>
<h2 id="use-cases">Use Cases<a class="header-link" href="#use-cases" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Effect</th>
<th>Best For</th>
</tr>
</thead>
<tbody>
<tr>
<td>Reveal (up)</td>
<td>Article sections, feature cards, content blocks</td>
</tr>
<tr>
<td>Reveal (left/right)</td>
<td>Alternating content, timeline items, side-by-side layouts</td>
</tr>
<tr>
<td>Reveal (scale)</td>
<td>Hero sections, testimonials, highlighted content</td>
</tr>
<tr>
<td>Reveal (fade)</td>
<td>Subtle reveals, backgrounds, overlays</td>
</tr>
<tr>
<td>Scroll Progress</td>
<td>Long-form articles, documentation, blog posts</td>
</tr>
<tr>
<td>Stagger</td>
<td>Feature grids, navigation menus, lists, galleries</td>
</tr>
<tr>
<td>Stagger (scroll)</td>
<td>Progressive disclosure, step-by-step content</td>
</tr>
</tbody>
</table>
</div><h2 id="practical-examples">Practical Examples<a class="header-link" href="#practical-examples" title="Link to this heading"></a></h2>
<h3 id="landing-page-sections">Landing Page Sections<a class="header-link" href="#landing-page-sections" title="Link to this heading"></a></h3>
<p>`}),d($,{key:19,meta:X[19]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="article-layout">Article Layout<a class="header-link" href="#article-layout" title="Link to this heading"></a></h3>
<p>`}),d($,{key:20,meta:X[20]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),d($,{key:21,meta:X[21]}),d(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),ie={title:`Scroll Effects`,description:`Scroll-driven animations using CSS animation-timeline. No JavaScript required.`},ae=re;export{ae as default,ie as meta};