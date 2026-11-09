import{I as e,R as t,Tt as n,W as r,at as i,c as ee,ct as te,et as a,h as ne,it as o,n as re,nt as s,q as c,r as ie,tt as l,u}from"./components-DGWjtEwO.js";var d=`<div class="en-flex en-gap-3">
  <button class="en-btn en-btn--primary en-fx-ripple">Press Me</button>
  <button class="en-btn en-btn--outline en-fx-ripple">Ripple Effect</button>
  <button class="en-btn en-btn--danger en-fx-ripple">Delete</button>
</div>`,f={__name:`0`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=d,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},p=`<div class="en-flex en-gap-3">
  <button class="en-card en-p-4 en-fx-ripple" style="border: none; cursor: pointer;">
    <h4 class="en-font-semibold">Option A</h4>
    <p class="en-text-sm en-text-muted">Press to select</p>
  </button>
  <button class="en-card en-p-4 en-fx-ripple" style="border: none; cursor: pointer;">
    <h4 class="en-font-semibold">Option B</h4>
    <p class="en-text-sm en-text-muted">Press to select</p>
  </button>
</div>`,m={__name:`1`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=p,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},h=`<div class="en-flex en-gap-3">
  <button class="en-btn en-fx-ripple" 
          style="--en-fx-ripple-color: rgb(59 130 246 / 0.3); background: #eff6ff">
    Blue Ripple
  </button>
  <button class="en-btn en-fx-ripple" 
          style="--en-fx-ripple-color: rgb(239 68 68 / 0.25); background: #fee2e2">
    Red Ripple
  </button>
</div>`,g={__name:`2`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_=`<div class="en-flex en-gap-3">
  <article class="en-card en-p-4 en-fx-lift">
    <h4 class="en-font-semibold">Hover Me</h4>
    <p class="en-text-sm en-text-muted">Card lifts and gets shadow</p>
  </article>
  <article class="en-card en-p-4 en-fx-lift">
    <h4 class="en-font-semibold">Interactive Card</h4>
    <p class="en-text-sm en-text-muted">Click to see press effect</p>
  </article>
</div>`,v={__name:`3`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=_,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},y=`<div class="en-flex en-gap-3">
  <div class="en-card en-p-4 en-fx-lift">
    <h4 class="en-font-semibold">Default Lift</h4>
    <p class="en-text-sm en-text-muted">0.25rem rise</p>
  </div>
  <div class="en-card en-p-4 en-fx-lift" 
       style="--en-fx-lift-distance: 0.5rem; --en-fx-lift-shadow: 0 20px 40px rgb(0 0 0 / 0.2)">
    <h4 class="en-font-semibold">High Lift</h4>
    <p class="en-text-sm en-text-muted">0.5rem rise, deeper shadow</p>
  </div>
</div>`,b={__name:`4`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=y,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},x=`<div class="en-flex en-gap-4 en-items-center">
  <div style="position: relative; display: inline-block;">
    <button class="en-btn">
      Messages
    </button>
    <span class="en-fx-ping" 
          style="position: absolute; top: -0.25rem; right: -0.25rem; display: block; width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--en-danger)">
    </span>
  </div>
  
  <div style="position: relative; display: inline-block;">
    <button class="en-btn">
      Notifications
    </button>
    <span class="en-fx-ping" 
          style="position: absolute; top: -0.25rem; right: -0.25rem; display: block; width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--en-success)">
    </span>
  </div>
</div>`,S={__name:`5`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=x,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},C=`<div class="en-flex en-gap-3 en-items-center">
  <span class="en-flex en-items-center en-gap-2">
    <span class="en-fx-ping" 
          style="display: inline-block; width: 0.6rem; height: 0.6rem; border-radius: 50%; background: var(--en-success)">
    </span>
    <span class="en-text-sm">Online</span>
  </span>
  
  <span class="en-flex en-items-center en-gap-2">
    <span class="en-fx-ping" 
          style="--en-fx-ping-color: var(--en-warning); display: inline-block; width: 0.6rem; height: 0.6rem; border-radius: 50%; background: var(--en-warning)">
    </span>
    <span class="en-text-sm">Recording</span>
  </span>
  
  <span class="en-flex en-items-center en-gap-2">
    <span class="en-fx-ping" 
          style="--en-fx-ping-color: var(--en-danger); --en-fx-ping-duration: 1s; display: inline-block; width: 0.6rem; height: 0.6rem; border-radius: 50%; background: var(--en-danger)">
    </span>
    <span class="en-text-sm">Live</span>
  </span>
</div>`,w={__name:`6`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=C,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},T=`<div class="en-flex en-gap-4 en-items-center">
  <span class="en-fx-ping" 
        style="display: inline-block; width: 0.5rem; height: 0.5rem; border-radius: 50%; background: var(--en-primary)">
  </span>
  
  <span class="en-fx-ping" 
        style="--en-fx-ping-size: 1rem; display: inline-block; width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--en-success)">
  </span>
  
  <span class="en-fx-ping" 
        style="--en-fx-ping-size: 1.5rem; --en-fx-ping-duration: 1s; display: inline-block; width: 1rem; height: 1rem; border-radius: 50%; background: var(--en-danger)">
  </span>
</div>`,E={__name:`7`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=T,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},D=`<div class="en-flex en-gap-3">
  <div class="en-card en-p-4 en-fx-tilt">
    <h4 class="en-font-semibold">Default (Right)</h4>
    <p class="en-text-sm en-text-muted">Pressed from right</p>
  </div>
  <div class="en-card en-p-4 en-fx-tilt--left">
    <h4 class="en-font-semibold">Tilt Left</h4>
    <p class="en-text-sm en-text-muted">Pressed from left</p>
  </div>
</div>`,O={__name:`8`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=D,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},k=`<div class="en-flex en-gap-3">
  <div class="en-card en-p-4 en-fx-tilt--up">
    <h4 class="en-font-semibold">Tilt Up</h4>
    <p class="en-text-sm en-text-muted">Pressed from top</p>
  </div>
  <div class="en-card en-p-4 en-fx-tilt--down">
    <h4 class="en-font-semibold">Tilt Down</h4>
    <p class="en-text-sm en-text-muted">Pressed from bottom</p>
  </div>
</div>`,A={__name:`9`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=k,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},j=`<div class="en-flex en-gap-3">
  <div class="en-card en-p-4 en-fx-tilt" style="--en-fx-tilt-angle: 4deg">
    <h4 class="en-font-semibold">Subtle Tilt</h4>
    <p class="en-text-sm en-text-muted">4 degrees</p>
  </div>
  <div class="en-card en-p-4 en-fx-tilt" style="--en-fx-tilt-angle: 15deg">
    <h4 class="en-font-semibold">Strong Tilt</h4>
    <p class="en-text-sm en-text-muted">15 degrees</p>
  </div>
</div>`,M={__name:`10`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=j,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},N=`<div class="en-flex en-gap-3">
  <button class="en-btn en-btn--primary en-fx-press">Tap Me</button>
  <button class="en-btn en-btn--outline en-fx-press">Press Effect</button>
  <button class="en-btn en-btn--danger en-fx-press">Delete</button>
</div>`,P={__name:`11`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=N,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},F=`<div class="en-flex en-gap-3">
  <button class="en-btn en-fx-press" style="--en-fx-press-scale: 0.98">
    Subtle (0.98)
  </button>
  <button class="en-btn en-fx-press">
    Default (0.96)
  </button>
  <button class="en-btn en-fx-press" style="--en-fx-press-scale: 0.92">
    Strong (0.92)
  </button>
</div>`,I={__name:`12`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=F,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},L=`<div class="en-flex en-gap-3">
  <button class="en-btn en-btn--primary en-fx-magnet">Get Started</button>
  <button class="en-btn en-btn--outline en-fx-magnet">Learn More</button>
</div>`,R={__name:`13`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=L,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},z=`<div class="en-flex en-gap-3">
  <button class="en-btn en-fx-magnet" style="--en-fx-magnet-distance: 0.3rem; --en-fx-magnet-scale: 1.02">
    Subtle Pull
  </button>
  <button class="en-btn en-fx-magnet" style="--en-fx-magnet-distance: 1rem; --en-fx-magnet-scale: 1.08">
    Strong Pull
  </button>
</div>`,B={__name:`14`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=z,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},V=`<div class="en-flex en-flex--col en-gap-3">
  <a href="#" class="en-fx-underline-grow">Read the documentation</a>
  <a href="#" class="en-fx-underline-grow" style="--en-fx-underline-color: var(--en-primary)">
    Learn more about EN-CSS
  </a>
  <a href="#" class="en-fx-underline-grow" style="--en-fx-underline-color: var(--en-danger); --en-fx-underline-thickness: 3px">
    Delete account
  </a>
</div>`,H={__name:`15`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=V,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},U=`<div class="en-flex en-flex--col en-gap-3">
  <a href="#" class="en-fx-underline-grow--center">Centered growth</a>
  <a href="#" class="en-fx-underline-grow--center" style="--en-fx-underline-color: var(--en-success)">
    Symmetrical animation
  </a>
</div>`,W={__name:`16`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=U,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},G=`<div style="max-width: 300px">
  <a href="#" class="en-fx-underline-grow">
    This is a longer link that will wrap onto multiple lines and the underline effect still works perfectly
  </a>
</div>`,K={__name:`17`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=G,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ae=`<div class="en-flex en-flex--col en-gap-3">
  <a href="#" class="en-fx-arrow-slide">Read more</a>
  <a href="#" class="en-fx-arrow-slide">View details</a>
  <a href="#" class="en-fx-arrow-slide">Continue reading</a>
</div>`,q={__name:`18`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=ae,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},J=`<div class="en-flex en-flex--col en-gap-3">
  <a href="#" class="en-fx-arrow-slide" style="--en-fx-arrow: '\\203A'">Next chapter</a>
  <a href="#" class="en-fx-arrow-slide" style="--en-fx-arrow: '\\21E2'">Go to page</a>
  <a href="#" class="en-fx-arrow-slide" style="--en-fx-arrow: '\\27A4'">Learn more</a>
</div>`,oe={__name:`19`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=J,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},se=`<div class="en-flex en-flex--col en-gap-3">
  <a href="#" class="en-fx-arrow-slide" style="--en-fx-arrow-distance: 0.15em">Subtle slide</a>
  <a href="#" class="en-fx-arrow-slide" style="--en-fx-arrow-distance: 0.5em">Large slide</a>
</div>`,ce={__name:`20`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=se,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},le=`<button class="en-card en-p-4 en-fx-lift" style="border: none; cursor: pointer;">
  <div class="en-fx-ripple">
    <h4 class="en-font-semibold">Interactive Card</h4>
    <p class="en-text-sm en-text-muted">Lifts on hover, ripples on press</p>
  </div>
</button>`,ue={__name:`21`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=le,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},de=`<button class="en-btn en-btn--primary en-fx-press en-fx-arrow-slide">
  Continue
</button>`,fe={__name:`22`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=de,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},pe=`<a href="#" class="en-fx-underline-grow en-fx-arrow-slide">
  Read the full story
</a>`,me={__name:`23`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=pe,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},he=`<div class="en-card en-p-6 en-fx-tilt en-fx-tilt-tracked" onclick="window.initTiltTracking && window.initTiltTracking()">
  <h4 class="en-font-semibold en-mb-2">3D Card</h4>
  <p class="en-text-sm en-text-muted">Move your pointer around to see the tilt follow</p>
  <p class="en-text-xs en-text-muted en-mt-2">(Click to initialize tracking)</p>
</div>`,ge={__name:`26`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=he,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_e=`<button class="en-btn en-btn--primary en-btn--lg en-fx-magnet en-fx-magnet-tracked" 
        onclick="window.initMagnetTracking && window.initMagnetTracking()">
  Magnetic Button
</button>
<p class="en-text-xs en-text-muted en-mt-2">(Click to initialize tracking)</p>`,ve={__name:`29`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=_e,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ye=`<button class="en-card en-p-6 en-fx-ripple en-fx-ripple-tracked" 
        style="border: none; cursor: pointer;"
        onclick="window.initRippleTracking && window.initRippleTracking()">
  <h4 class="en-font-semibold">Click anywhere</h4>
  <p class="en-text-sm en-text-muted">Ripple starts where you press</p>
</button>`,be={__name:`32`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=ye,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},xe={};function Se(t,n){let r=te(`Downloadable`);return o(),e(r,{"dev-url":`effects/effects-interaction.css`})}var Y={0:{component:f,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-fx-ripple"</span><span class="shiki-foreground">>Press Me&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline en-fx-ripple"</span><span class="shiki-foreground">>Ripple Effect&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--danger en-fx-ripple"</span><span class="shiki-foreground">>Delete&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Ripple on button press`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:m,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-ripple"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border: none; cursor: pointer;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Option A&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Press to select&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-ripple"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border: none; cursor: pointer;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Option B&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Press to select&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Interactive card with ripple`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:g,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-fx-ripple"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-ripple-color: rgb(59 130 246 / 0.3); background: #eff6ff"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Blue Ripple</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-fx-ripple"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-ripple-color: rgb(239 68 68 / 0.25); background: #fee2e2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Red Ripple</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Dark and light ripple colors`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:v,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">article</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-lift"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Hover Me&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Card lifts and gets shadow&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">article</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">article</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-lift"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Interactive Card&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Click to see press effect&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">article</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Cards that lift on hover`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:b,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-lift"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Default Lift&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>0.25rem rise&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-lift"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">       style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-lift-distance: 0.5rem; --en-fx-lift-shadow: 0 20px 40px rgb(0 0 0 / 0.2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>High Lift&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>0.5rem rise, deeper shadow&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Higher lift and deeper shadow`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:S,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-4 en-items-center"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: relative; display: inline-block;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Messages</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ping"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: absolute; top: -0.25rem; right: -0.25rem; display: block; width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--en-danger)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: relative; display: inline-block;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Notifications</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ping"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: absolute; top: -0.25rem; right: -0.25rem; display: block; width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--en-success)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Live indicators with ping`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:w,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3 en-items-center"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-items-center en-gap-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ping"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: inline-block; width: 0.6rem; height: 0.6rem; border-radius: 50%; background: var(--en-success)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm"</span><span class="shiki-foreground">>Online&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-items-center en-gap-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ping"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-ping-color: var(--en-warning); display: inline-block; width: 0.6rem; height: 0.6rem; border-radius: 50%; background: var(--en-warning)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm"</span><span class="shiki-foreground">>Recording&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-items-center en-gap-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ping"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">          style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-ping-color: var(--en-danger); --en-fx-ping-duration: 1s; display: inline-block; width: 0.6rem; height: 0.6rem; border-radius: 50%; background: var(--en-danger)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm"</span><span class="shiki-foreground">>Live&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Status indicators with ping`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:E,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-4 en-items-center"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ping"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: inline-block; width: 0.5rem; height: 0.5rem; border-radius: 50%; background: var(--en-primary)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ping"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-ping-size: 1rem; display: inline-block; width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--en-success)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ping"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-ping-size: 1.5rem; --en-fx-ping-duration: 1s; display: inline-block; width: 1rem; height: 1rem; border-radius: 50%; background: var(--en-danger)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Different sizes and speeds`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:O,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-tilt"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Default (Right)&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Pressed from right&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-tilt--left"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Tilt Left&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Pressed from left&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Tilt modifiers`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:A,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-tilt--up"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Tilt Up&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Pressed from top&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-tilt--down"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Tilt Down&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Pressed from bottom&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Vertical tilt directions`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:M,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-tilt"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-tilt-angle: 4deg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Subtle Tilt&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>4 degrees&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-tilt"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-tilt-angle: 15deg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Strong Tilt&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>15 degrees&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Stronger and subtler tilts`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:P,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-fx-press"</span><span class="shiki-foreground">>Tap Me&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline en-fx-press"</span><span class="shiki-foreground">>Press Effect&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--danger en-fx-press"</span><span class="shiki-foreground">>Delete&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Buttons with press effect`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:I,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-fx-press"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-press-scale: 0.98"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Subtle (0.98)</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-fx-press"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Default (0.96)</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-fx-press"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-press-scale: 0.92"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Strong (0.92)</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Different squash amounts`,key:12,lang:`html`,injectKind:null,editable:!1,source:null},13:{component:R,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-fx-magnet"</span><span class="shiki-foreground">>Get Started&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline en-fx-magnet"</span><span class="shiki-foreground">>Learn More&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Buttons with magnet effect`,key:13,lang:`html`,injectKind:null,editable:!1,source:null},14:{component:B,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-fx-magnet"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-magnet-distance: 0.3rem; --en-fx-magnet-scale: 1.02"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Subtle Pull</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-fx-magnet"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-magnet-distance: 1rem; --en-fx-magnet-scale: 1.08"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Strong Pull</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Different pull distances and scales`,key:14,lang:`html`,injectKind:null,editable:!1,source:null},15:{component:H,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-underline-grow"</span><span class="shiki-foreground">>Read the documentation&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-underline-grow"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-underline-color: var(--en-primary)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Learn more about EN-CSS</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-underline-grow"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-underline-color: var(--en-danger); --en-fx-underline-thickness: 3px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Delete account</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Links with growing underline`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:W,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-underline-grow--center"</span><span class="shiki-foreground">>Centered growth&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-underline-grow--center"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-underline-color: var(--en-success)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Symmetrical animation</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Underline grows from center`,key:16,lang:`html`,injectKind:null,editable:!1,source:null},17:{component:K,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 300px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-underline-grow"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    This is a longer link that will wrap onto multiple lines and the underline effect still works perfectly</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Works across line breaks`,key:17,lang:`html`,injectKind:null,editable:!1,source:null},18:{component:q,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-arrow-slide"</span><span class="shiki-foreground">>Read more&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-arrow-slide"</span><span class="shiki-foreground">>View details&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-arrow-slide"</span><span class="shiki-foreground">>Continue reading&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Links with sliding arrow`,key:18,lang:`html`,injectKind:null,editable:!1,source:null},19:{component:oe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-arrow-slide"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-arrow: '\\203A'"</span><span class="shiki-foreground">>Next chapter&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-arrow-slide"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-arrow: '\\21E2'"</span><span class="shiki-foreground">>Go to page&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-arrow-slide"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-arrow: '\\27A4'"</span><span class="shiki-foreground">>Learn more&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Different arrow styles`,key:19,lang:`html`,injectKind:null,editable:!1,source:null},20:{component:ce,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-arrow-slide"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-arrow-distance: 0.15em"</span><span class="shiki-foreground">>Subtle slide&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-arrow-slide"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-fx-arrow-distance: 0.5em"</span><span class="shiki-foreground">>Large slide&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Different movement amounts`,key:20,lang:`html`,injectKind:null,editable:!1,source:null},21:{component:ue,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-4 en-fx-lift"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border: none; cursor: pointer;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ripple"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Interactive Card&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Lifts on hover, ripples on press&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Card lifts and ripples`,key:21,lang:`html`,injectKind:null,editable:!1,source:null},22:{component:fe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-fx-press en-fx-arrow-slide"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Continue</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Button press with arrow slide`,key:22,lang:`html`,injectKind:null,editable:!1,source:null},23:{component:me,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-underline-grow en-fx-arrow-slide"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Read the full story</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Link with underline and arrow`,key:23,lang:`html`,injectKind:null,editable:!1,source:null},24:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">// Tilt follows pointer position</span></span>
<span class="line"><span class="shiki-token-constant">window</span><span class="shiki-foreground">.</span><span class="shiki-token-function">initTiltTracking</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-keyword"> function</span><span class="shiki-foreground">() {</span></span>
<span class="line"><span class="shiki-token-constant">  document</span><span class="shiki-token-function">.querySelectorAll</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-fx-tilt-tracked'</span><span class="shiki-foreground">)</span><span class="shiki-token-function">.forEach</span><span class="shiki-foreground">((el) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">    el</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'pointermove'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> (e) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-keyword">      const</span><span class="shiki-token-constant"> r</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> el</span><span class="shiki-token-function">.getBoundingClientRect</span><span class="shiki-foreground">();</span></span>
<span class="line"><span class="shiki-token-keyword">      const</span><span class="shiki-token-constant"> x</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> (((</span><span class="shiki-token-constant">e</span><span class="shiki-foreground">.clientX </span><span class="shiki-token-keyword">-</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.left) </span><span class="shiki-token-keyword">/</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.width) </span><span class="shiki-token-keyword">*</span><span class="shiki-token-constant"> 2</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-constant"> 1</span><span class="shiki-foreground">)</span><span class="shiki-token-function">.toFixed</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">3</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">      const</span><span class="shiki-token-constant"> y</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> (((</span><span class="shiki-token-constant">e</span><span class="shiki-foreground">.clientY </span><span class="shiki-token-keyword">-</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.top) </span><span class="shiki-token-keyword">/</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.height) </span><span class="shiki-token-keyword">*</span><span class="shiki-token-constant"> 2</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-constant"> 1</span><span class="shiki-foreground">)</span><span class="shiki-token-function">.toFixed</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">3</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">      el</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.setProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-fx-tilt-x'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> x);</span></span>
<span class="line"><span class="shiki-token-constant">      el</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.setProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-fx-tilt-y'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> y);</span></span>
<span class="line"><span class="shiki-foreground">    });</span></span>
<span class="line"><span class="shiki-token-constant">    el</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'pointerleave'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">      el</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.removeProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-fx-tilt-x'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">      el</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.removeProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-fx-tilt-y'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-foreground">    });</span></span>
<span class="line"><span class="shiki-foreground">  });</span></span>
<span class="line"><span class="shiki-foreground">};</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`js`,key:24,lang:`js`,injectKind:`js-inject`,editable:!1,source:null},26:{component:ge,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-tilt en-fx-tilt-tracked"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">window</span><span class="shiki-token-string-expression">.initTiltTracking </span><span class="shiki-token-keyword">&#x26;&#x26;</span><span class="shiki-token-constant"> window</span><span class="shiki-token-function">.initTiltTracking</span><span class="shiki-token-string-expression">()"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold en-mb-2"</span><span class="shiki-foreground">>3D Card&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Move your pointer around to see the tilt follow&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xs en-text-muted en-mt-2"</span><span class="shiki-foreground">>(Click to initialize tracking)&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Tilt with pointer tracking`,key:26,lang:`html`,injectKind:null,editable:!1,source:null},27:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">// Magnet pulls toward pointer</span></span>
<span class="line"><span class="shiki-token-constant">window</span><span class="shiki-foreground">.</span><span class="shiki-token-function">initMagnetTracking</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-keyword"> function</span><span class="shiki-foreground">() {</span></span>
<span class="line"><span class="shiki-token-constant">  document</span><span class="shiki-token-function">.querySelectorAll</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-fx-magnet-tracked'</span><span class="shiki-foreground">)</span><span class="shiki-token-function">.forEach</span><span class="shiki-foreground">((el) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">    el</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'pointermove'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> (e) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-keyword">      const</span><span class="shiki-token-constant"> r</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> el</span><span class="shiki-token-function">.getBoundingClientRect</span><span class="shiki-foreground">();</span></span>
<span class="line"><span class="shiki-token-keyword">      const</span><span class="shiki-token-constant"> x</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> (((</span><span class="shiki-token-constant">e</span><span class="shiki-foreground">.clientX </span><span class="shiki-token-keyword">-</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.left) </span><span class="shiki-token-keyword">/</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.width) </span><span class="shiki-token-keyword">*</span><span class="shiki-token-constant"> 2</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-constant"> 1</span><span class="shiki-foreground">)</span><span class="shiki-token-function">.toFixed</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">3</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">      const</span><span class="shiki-token-constant"> y</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> (((</span><span class="shiki-token-constant">e</span><span class="shiki-foreground">.clientY </span><span class="shiki-token-keyword">-</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.top) </span><span class="shiki-token-keyword">/</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.height) </span><span class="shiki-token-keyword">*</span><span class="shiki-token-constant"> 2</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-constant"> 1</span><span class="shiki-foreground">)</span><span class="shiki-token-function">.toFixed</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">3</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">      el</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.setProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-fx-magnet-x'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> x);</span></span>
<span class="line"><span class="shiki-token-constant">      el</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.setProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-fx-magnet-y'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> y);</span></span>
<span class="line"><span class="shiki-foreground">    });</span></span>
<span class="line"><span class="shiki-token-constant">    el</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'pointerleave'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">      el</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.removeProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-fx-magnet-x'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">      el</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.removeProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-fx-magnet-y'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-foreground">    });</span></span>
<span class="line"><span class="shiki-foreground">  });</span></span>
<span class="line"><span class="shiki-foreground">};</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`js`,key:27,lang:`js`,injectKind:`js-inject`,editable:!1,source:null},29:{component:ve,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--lg en-fx-magnet en-fx-magnet-tracked"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">window</span><span class="shiki-token-string-expression">.initMagnetTracking </span><span class="shiki-token-keyword">&#x26;&#x26;</span><span class="shiki-token-constant"> window</span><span class="shiki-token-function">.initMagnetTracking</span><span class="shiki-token-string-expression">()"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Magnetic Button</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xs en-text-muted en-mt-2"</span><span class="shiki-foreground">>(Click to initialize tracking)&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Magnet with pointer tracking`,key:29,lang:`html`,injectKind:null,editable:!1,source:null},30:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">// Ripple starts at pointer position</span></span>
<span class="line"><span class="shiki-token-constant">window</span><span class="shiki-foreground">.</span><span class="shiki-token-function">initRippleTracking</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-keyword"> function</span><span class="shiki-foreground">() {</span></span>
<span class="line"><span class="shiki-token-constant">  document</span><span class="shiki-token-function">.querySelectorAll</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-fx-ripple-tracked'</span><span class="shiki-foreground">)</span><span class="shiki-token-function">.forEach</span><span class="shiki-foreground">((el) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">    el</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'pointerdown'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> (e) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-keyword">      const</span><span class="shiki-token-constant"> r</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> el</span><span class="shiki-token-function">.getBoundingClientRect</span><span class="shiki-foreground">();</span></span>
<span class="line"><span class="shiki-token-constant">      el</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.setProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-fx-ripple-x'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> \`</span><span class="shiki-token-keyword">\${</span><span class="shiki-token-constant">e</span><span class="shiki-foreground">.clientX </span><span class="shiki-token-keyword">-</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.left</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">px\`</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">      el</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.setProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-fx-ripple-y'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> \`</span><span class="shiki-token-keyword">\${</span><span class="shiki-token-constant">e</span><span class="shiki-foreground">.clientY </span><span class="shiki-token-keyword">-</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.top</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">px\`</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-foreground">    });</span></span>
<span class="line"><span class="shiki-foreground">  });</span></span>
<span class="line"><span class="shiki-foreground">};</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`js`,key:30,lang:`js`,injectKind:`js-inject`,editable:!1,source:null},32:{component:be,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-6 en-fx-ripple en-fx-ripple-tracked"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border: none; cursor: pointer;"</span></span>
<span class="line"><span class="shiki-token-function">        onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">window</span><span class="shiki-token-string-expression">.initRippleTracking </span><span class="shiki-token-keyword">&#x26;&#x26;</span><span class="shiki-token-constant"> window</span><span class="shiki-token-function">.initRippleTracking</span><span class="shiki-token-string-expression">()"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>Click anywhere&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm en-text-muted"</span><span class="shiki-foreground">>Ripple starts where you press&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Ripple starts at pointer`,key:32,lang:`html`,injectKind:null,editable:!1,source:null},33:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- ✗ BAD - both use ::after --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ripple en-fx-ping"</span><span class="shiki-foreground">>Won't work&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-arrow-slide en-fx-shimmer"</span><span class="shiki-foreground">>Won't work&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">&#x3C;!-- ✓ GOOD - nest separate elements --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ping"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-ripple"</span><span class="shiki-foreground">>Works&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:33,lang:`html`,injectKind:null,editable:!1,source:null},34:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- ✗ BAD - both use transform --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-tilt"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"transform: scale(1.1)"</span><span class="shiki-foreground">>Won't work&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">&#x3C;!-- ✓ GOOD - nest elements --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-tilt"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"transform: scale(1.1)"</span><span class="shiki-foreground">>Works&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:34,lang:`html`,injectKind:null,editable:!1,source:null},35:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- ✗ BAD - press and magnet both set scale/transition --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-press en-fx-magnet"</span><span class="shiki-foreground">>Conflicts&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">&#x3C;!-- ✓ GOOD - separate elements --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-magnet"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fx-press"</span><span class="shiki-foreground">>Works&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:35,lang:`html`,injectKind:null,editable:!1,source:null},36:{component:ne(xe,[[`render`,Se]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"effects/effects-interaction.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:36,lang:`vue`,injectKind:null,editable:!1,source:null}},X=[{id:`interaction-effects`,text:`Interaction Effects`,level:1},{id:`quick-reference`,text:`Quick Reference`,level:2},{id:`ripple-effect`,text:`Ripple Effect`,level:2},{id:`basic-ripple`,text:`Basic Ripple`,level:3},{id:`ripple-on-cards`,text:`Ripple on Cards`,level:3},{id:`custom-ripple-color`,text:`Custom Ripple Color`,level:3},{id:`lift-effect`,text:`Lift Effect`,level:2},{id:`basic-lift`,text:`Basic Lift`,level:3},{id:`custom-lift-distance`,text:`Custom Lift Distance`,level:3},{id:`ping-effect`,text:`Ping Effect`,level:2},{id:`notification-dots`,text:`Notification Dots`,level:3},{id:`live-status-badges`,text:`Live Status Badges`,level:3},{id:`custom-ping-settings`,text:`Custom Ping Settings`,level:3},{id:`tilt-effect`,text:`Tilt Effect`,level:2},{id:`fixed-direction-tilts`,text:`Fixed Direction Tilts`,level:3},{id:`custom-tilt-angle`,text:`Custom Tilt Angle`,level:3},{id:`press-effect`,text:`Press Effect`,level:2},{id:`basic-press`,text:`Basic Press`,level:3},{id:`custom-press-scale`,text:`Custom Press Scale`,level:3},{id:`magnet-effect`,text:`Magnet Effect`,level:2},{id:`basic-magnet`,text:`Basic Magnet`,level:3},{id:`custom-magnet-settings`,text:`Custom Magnet Settings`,level:3},{id:`underline-grow-effect`,text:`Underline Grow Effect`,level:2},{id:`basic-underline-grow`,text:`Basic Underline Grow`,level:3},{id:`center-growth`,text:`Center Growth`,level:3},{id:`multi-line-support`,text:`Multi-line Support`,level:3},{id:`arrow-slide-effect`,text:`Arrow Slide Effect`,level:2},{id:`basic-arrow-slide`,text:`Basic Arrow Slide`,level:3},{id:`custom-arrow-glyphs`,text:`Custom Arrow Glyphs`,level:3},{id:`custom-slide-distance`,text:`Custom Slide Distance`,level:3},{id:`combined-effects`,text:`Combined Effects`,level:2},{id:`lift-ripple`,text:`Lift + Ripple`,level:3},{id:`press-arrow-slide`,text:`Press + Arrow Slide`,level:3},{id:`underline-arrow`,text:`Underline + Arrow`,level:3},{id:`javascript-integration`,text:`JavaScript Integration`,level:2},{id:`tilt-tracking`,text:`Tilt Tracking`,level:3},{id:`magnet-tracking`,text:`Magnet Tracking`,level:3},{id:`ripple-origin-tracking`,text:`Ripple Origin Tracking`,level:3},{id:`custom-properties`,text:`Custom Properties`,level:2},{id:`ripple-properties`,text:`Ripple Properties`,level:3},{id:`lift-properties`,text:`Lift Properties`,level:3},{id:`ping-properties`,text:`Ping Properties`,level:3},{id:`tilt-properties`,text:`Tilt Properties`,level:3},{id:`press-properties`,text:`Press Properties`,level:3},{id:`magnet-properties`,text:`Magnet Properties`,level:3},{id:`underline-grow-properties`,text:`Underline Grow Properties`,level:3},{id:`arrow-slide-properties`,text:`Arrow Slide Properties`,level:3},{id:`classes`,text:`Classes`,level:2},{id:`important-notes`,text:`Important Notes`,level:2},{id:`pseudo-element-conflicts`,text:`Pseudo-element Conflicts`,level:3},{id:`transform-conflicts`,text:`Transform Conflicts`,level:3},{id:`transition-conflicts`,text:`Transition Conflicts`,level:3},{id:`ripple-clipping`,text:`Ripple Clipping`,level:3},{id:`active-state-behavior`,text:`Active State Behavior`,level:3},{id:`rtl-support`,text:`RTL Support`,level:3},{id:`accessibility`,text:`Accessibility`,level:3},{id:`browser-support`,text:`Browser Support`,level:2},{id:`use-cases`,text:`Use Cases`,level:2}],Z=[{id:`interaction-effects`,text:`Interaction Effects`,level:1,children:[{id:`quick-reference`,text:`Quick Reference`,level:2,children:[]},{id:`ripple-effect`,text:`Ripple Effect`,level:2,children:[{id:`basic-ripple`,text:`Basic Ripple`,level:3,children:[]},{id:`ripple-on-cards`,text:`Ripple on Cards`,level:3,children:[]},{id:`custom-ripple-color`,text:`Custom Ripple Color`,level:3,children:[]}]},{id:`lift-effect`,text:`Lift Effect`,level:2,children:[{id:`basic-lift`,text:`Basic Lift`,level:3,children:[]},{id:`custom-lift-distance`,text:`Custom Lift Distance`,level:3,children:[]}]},{id:`ping-effect`,text:`Ping Effect`,level:2,children:[{id:`notification-dots`,text:`Notification Dots`,level:3,children:[]},{id:`live-status-badges`,text:`Live Status Badges`,level:3,children:[]},{id:`custom-ping-settings`,text:`Custom Ping Settings`,level:3,children:[]}]},{id:`tilt-effect`,text:`Tilt Effect`,level:2,children:[{id:`fixed-direction-tilts`,text:`Fixed Direction Tilts`,level:3,children:[]},{id:`custom-tilt-angle`,text:`Custom Tilt Angle`,level:3,children:[]}]},{id:`press-effect`,text:`Press Effect`,level:2,children:[{id:`basic-press`,text:`Basic Press`,level:3,children:[]},{id:`custom-press-scale`,text:`Custom Press Scale`,level:3,children:[]}]},{id:`magnet-effect`,text:`Magnet Effect`,level:2,children:[{id:`basic-magnet`,text:`Basic Magnet`,level:3,children:[]},{id:`custom-magnet-settings`,text:`Custom Magnet Settings`,level:3,children:[]}]},{id:`underline-grow-effect`,text:`Underline Grow Effect`,level:2,children:[{id:`basic-underline-grow`,text:`Basic Underline Grow`,level:3,children:[]},{id:`center-growth`,text:`Center Growth`,level:3,children:[]},{id:`multi-line-support`,text:`Multi-line Support`,level:3,children:[]}]},{id:`arrow-slide-effect`,text:`Arrow Slide Effect`,level:2,children:[{id:`basic-arrow-slide`,text:`Basic Arrow Slide`,level:3,children:[]},{id:`custom-arrow-glyphs`,text:`Custom Arrow Glyphs`,level:3,children:[]},{id:`custom-slide-distance`,text:`Custom Slide Distance`,level:3,children:[]}]},{id:`combined-effects`,text:`Combined Effects`,level:2,children:[{id:`lift-ripple`,text:`Lift + Ripple`,level:3,children:[]},{id:`press-arrow-slide`,text:`Press + Arrow Slide`,level:3,children:[]},{id:`underline-arrow`,text:`Underline + Arrow`,level:3,children:[]}]},{id:`javascript-integration`,text:`JavaScript Integration`,level:2,children:[{id:`tilt-tracking`,text:`Tilt Tracking`,level:3,children:[]},{id:`magnet-tracking`,text:`Magnet Tracking`,level:3,children:[]},{id:`ripple-origin-tracking`,text:`Ripple Origin Tracking`,level:3,children:[]}]},{id:`custom-properties`,text:`Custom Properties`,level:2,children:[{id:`ripple-properties`,text:`Ripple Properties`,level:3,children:[]},{id:`lift-properties`,text:`Lift Properties`,level:3,children:[]},{id:`ping-properties`,text:`Ping Properties`,level:3,children:[]},{id:`tilt-properties`,text:`Tilt Properties`,level:3,children:[]},{id:`press-properties`,text:`Press Properties`,level:3,children:[]},{id:`magnet-properties`,text:`Magnet Properties`,level:3,children:[]},{id:`underline-grow-properties`,text:`Underline Grow Properties`,level:3,children:[]},{id:`arrow-slide-properties`,text:`Arrow Slide Properties`,level:3,children:[]}]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`important-notes`,text:`Important Notes`,level:2,children:[{id:`pseudo-element-conflicts`,text:`Pseudo-element Conflicts`,level:3,children:[]},{id:`transform-conflicts`,text:`Transform Conflicts`,level:3,children:[]},{id:`transition-conflicts`,text:`Transition Conflicts`,level:3,children:[]},{id:`ripple-clipping`,text:`Ripple Clipping`,level:3,children:[]},{id:`active-state-behavior`,text:`Active State Behavior`,level:3,children:[]},{id:`rtl-support`,text:`RTL Support`,level:3,children:[]},{id:`accessibility`,text:`Accessibility`,level:3,children:[]}]},{id:`browser-support`,text:`Browser Support`,level:2,children:[]},{id:`use-cases`,text:`Use Cases`,level:2,children:[]}]}],Ce={css:[],js:[{key:24,code:`// Tilt follows pointer position
window.initTiltTracking = function() {
  document.querySelectorAll('.en-fx-tilt-tracked').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3);
      const y = (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3);
      el.style.setProperty('--en-fx-tilt-x', x);
      el.style.setProperty('--en-fx-tilt-y', y);
    });
    el.addEventListener('pointerleave', () => {
      el.style.removeProperty('--en-fx-tilt-x');
      el.style.removeProperty('--en-fx-tilt-y');
    });
  });
};`},{key:27,code:`// Magnet pulls toward pointer
window.initMagnetTracking = function() {
  document.querySelectorAll('.en-fx-magnet-tracked').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3);
      const y = (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3);
      el.style.setProperty('--en-fx-magnet-x', x);
      el.style.setProperty('--en-fx-magnet-y', y);
    });
    el.addEventListener('pointerleave', () => {
      el.style.removeProperty('--en-fx-magnet-x');
      el.style.removeProperty('--en-fx-magnet-y');
    });
  });
};`},{key:30,code:`// Ripple starts at pointer position
window.initRippleTracking = function() {
  document.querySelectorAll('.en-fx-ripple-tracked').forEach((el) => {
    el.addEventListener('pointerdown', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--en-fx-ripple-x', \`\${e.clientX - r.left}px\`);
      el.style.setProperty('--en-fx-ripple-y', \`\${e.clientY - r.top}px\`);
    });
  });
};`}],cleanup:[{key:25,code:`onUnmount(() => {
  delete window.initTiltTracking;
});`},{key:28,code:`onUnmount(() => {
  delete window.initMagnetTracking;
});`},{key:31,code:`onUnmount(() => {
  delete window.initRippleTracking;
});`}]},Q=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>c(`div`,{class:n},[e.meta.isLive?c(ie,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:c(re,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),$=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/effects/interaction.md`,setup(){i(`vlm-toc`,{flat:X,tree:Z}),l(()=>u(X,Z)),s(()=>u([],[]));let e=ee(Ce);return i(`vlm-inject`,e),l(()=>e.mount()),a(()=>e.beforeUnmount()),s(()=>e.unmounted()),()=>c(`div`,{class:`vlm-page`},[c(`div`,{class:`vlm-content`},[c(`div`,{class:`vlm-md`,innerHTML:`<h1 id="interaction-effects">Interaction Effects<a class="header-link" href="#interaction-effects" title="Link to this heading"></a></h1>
<p>Hover, focus, and press feedback effects. All effects work with pure CSS and optionally support JavaScript for pointer tracking.</p>
<h2 id="quick-reference">Quick Reference<a class="header-link" href="#quick-reference" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Effect</th>
<th>Trigger</th>
<th>Owns</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-fx-ripple</code></td>
<td>Press (<code>:active</code>)</td>
<td><code>::after</code>, <code>overflow</code>, <code>position</code></td>
</tr>
<tr>
<td><code>.en-fx-lift</code></td>
<td>Hover, focus</td>
<td><code>translate</code>, <code>box-shadow</code></td>
</tr>
<tr>
<td><code>.en-fx-ping</code></td>
<td>Continuous</td>
<td><code>::after</code>, <code>position</code></td>
</tr>
<tr>
<td><code>.en-fx-tilt</code> + modifiers</td>
<td>Hover, focus</td>
<td><code>transform</code></td>
</tr>
<tr>
<td><code>.en-fx-press</code></td>
<td>Press (<code>:active</code>)</td>
<td><code>scale</code></td>
</tr>
<tr>
<td><code>.en-fx-magnet</code></td>
<td>Hover, focus</td>
<td><code>scale</code>, <code>translate</code></td>
</tr>
<tr>
<td><code>.en-fx-underline-grow</code> + modifier</td>
<td>Hover, focus</td>
<td><code>background-image</code></td>
</tr>
<tr>
<td><code>.en-fx-arrow-slide</code></td>
<td>Hover, focus</td>
<td><code>::after</code></td>
</tr>
</tbody>
</table>
</div><h2 id="ripple-effect">Ripple Effect<a class="header-link" href="#ripple-effect" title="Link to this heading"></a></h2>
<p>Circular wave that expands from center on press, fading after release.</p>
<h3 id="basic-ripple">Basic Ripple<a class="header-link" href="#basic-ripple" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:0,meta:Y[0]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="ripple-on-cards">Ripple on Cards<a class="header-link" href="#ripple-on-cards" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:1,meta:Y[1]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-ripple-color">Custom Ripple Color<a class="header-link" href="#custom-ripple-color" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:2,meta:Y[2]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="lift-effect">Lift Effect<a class="header-link" href="#lift-effect" title="Link to this heading"></a></h2>
<p>Element rises with deeper shadow on hover/focus, slightly lowers on press.</p>
<h3 id="basic-lift">Basic Lift<a class="header-link" href="#basic-lift" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:3,meta:Y[3]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-lift-distance">Custom Lift Distance<a class="header-link" href="#custom-lift-distance" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:4,meta:Y[4]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="ping-effect">Ping Effect<a class="header-link" href="#ping-effect" title="Link to this heading"></a></h2>
<p>Expanding ring animation for notification dots and live indicators.</p>
<h3 id="notification-dots">Notification Dots<a class="header-link" href="#notification-dots" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:5,meta:Y[5]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="live-status-badges">Live Status Badges<a class="header-link" href="#live-status-badges" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:6,meta:Y[6]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-ping-settings">Custom Ping Settings<a class="header-link" href="#custom-ping-settings" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:7,meta:Y[7]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="tilt-effect">Tilt Effect<a class="header-link" href="#tilt-effect" title="Link to this heading"></a></h2>
<p>3D tilt on hover/focus with optional pointer tracking via JavaScript.</p>
<h3 id="fixed-direction-tilts">Fixed Direction Tilts<a class="header-link" href="#fixed-direction-tilts" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:8,meta:Y[8]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),c(Q,{key:9,meta:Y[9]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-tilt-angle">Custom Tilt Angle<a class="header-link" href="#custom-tilt-angle" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:10,meta:Y[10]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="press-effect">Press Effect<a class="header-link" href="#press-effect" title="Link to this heading"></a></h2>
<p>Element squashes when pressed and springs back on release.</p>
<h3 id="basic-press">Basic Press<a class="header-link" href="#basic-press" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:11,meta:Y[11]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-press-scale">Custom Press Scale<a class="header-link" href="#custom-press-scale" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:12,meta:Y[12]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="magnet-effect">Magnet Effect<a class="header-link" href="#magnet-effect" title="Link to this heading"></a></h2>
<p>Element grows and moves toward pointer on hover (with optional JavaScript tracking).</p>
<h3 id="basic-magnet">Basic Magnet<a class="header-link" href="#basic-magnet" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:13,meta:Y[13]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-magnet-settings">Custom Magnet Settings<a class="header-link" href="#custom-magnet-settings" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:14,meta:Y[14]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="underline-grow-effect">Underline Grow Effect<a class="header-link" href="#underline-grow-effect" title="Link to this heading"></a></h2>
<p>Animated underline that grows on hover/focus, works across line breaks.</p>
<h3 id="basic-underline-grow">Basic Underline Grow<a class="header-link" href="#basic-underline-grow" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:15,meta:Y[15]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="center-growth">Center Growth<a class="header-link" href="#center-growth" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:16,meta:Y[16]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="multi-line-support">Multi-line Support<a class="header-link" href="#multi-line-support" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:17,meta:Y[17]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="arrow-slide-effect">Arrow Slide Effect<a class="header-link" href="#arrow-slide-effect" title="Link to this heading"></a></h2>
<p>Trailing arrow that slides on hover, automatically flips in RTL.</p>
<h3 id="basic-arrow-slide">Basic Arrow Slide<a class="header-link" href="#basic-arrow-slide" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:18,meta:Y[18]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-arrow-glyphs">Custom Arrow Glyphs<a class="header-link" href="#custom-arrow-glyphs" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:19,meta:Y[19]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-slide-distance">Custom Slide Distance<a class="header-link" href="#custom-slide-distance" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:20,meta:Y[20]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="combined-effects">Combined Effects<a class="header-link" href="#combined-effects" title="Link to this heading"></a></h2>
<h3 id="lift-ripple">Lift + Ripple<a class="header-link" href="#lift-ripple" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:21,meta:Y[21]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="press-arrow-slide">Press + Arrow Slide<a class="header-link" href="#press-arrow-slide" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:22,meta:Y[22]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="underline-arrow">Underline + Arrow<a class="header-link" href="#underline-arrow" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:23,meta:Y[23]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="javascript-integration">JavaScript Integration<a class="header-link" href="#javascript-integration" title="Link to this heading"></a></h2>
<p>Optional JavaScript for pointer tracking on tilt, magnet, and ripple effects.</p>
<h3 id="tilt-tracking">Tilt Tracking<a class="header-link" href="#tilt-tracking" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:24,meta:Y[24]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),c(Q,{key:26,meta:Y[26]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="magnet-tracking">Magnet Tracking<a class="header-link" href="#magnet-tracking" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:27,meta:Y[27]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),c(Q,{key:29,meta:Y[29]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="ripple-origin-tracking">Ripple Origin Tracking<a class="header-link" href="#ripple-origin-tracking" title="Link to this heading"></a></h3>
<p>`}),c(Q,{key:30,meta:Y[30]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),c(Q,{key:32,meta:Y[32]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="custom-properties">Custom Properties<a class="header-link" href="#custom-properties" title="Link to this heading"></a></h2>
<h3 id="ripple-properties">Ripple Properties<a class="header-link" href="#ripple-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-ripple-color</code></td>
<td><code>light-dark(rgb(0 0 0 / 0.14), rgb(255 255 255 / 0.22))</code></td>
<td>Wave color</td>
</tr>
<tr>
<td><code>--en-fx-ripple-x</code></td>
<td><code>50%</code></td>
<td>Horizontal origin (set via JS)</td>
</tr>
<tr>
<td><code>--en-fx-ripple-y</code></td>
<td><code>50%</code></td>
<td>Vertical origin (set via JS)</td>
</tr>
</tbody>
</table>
</div><h3 id="lift-properties">Lift Properties<a class="header-link" href="#lift-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-lift-distance</code></td>
<td><code>0.25rem</code></td>
<td>How far element rises</td>
</tr>
<tr>
<td><code>--en-fx-lift-shadow</code></td>
<td><code>var(--en-shadow-lg)</code></td>
<td>Shadow when lifted</td>
</tr>
</tbody>
</table>
</div><h3 id="ping-properties">Ping Properties<a class="header-link" href="#ping-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-ping-color</code></td>
<td><code>var(--en-primary, currentColor)</code></td>
<td>Ring color</td>
</tr>
<tr>
<td><code>--en-fx-ping-size</code></td>
<td><code>0.6rem</code></td>
<td>Ring expansion distance</td>
</tr>
<tr>
<td><code>--en-fx-ping-duration</code></td>
<td><code>1.6s</code></td>
<td>One animation cycle</td>
</tr>
</tbody>
</table>
</div><h3 id="tilt-properties">Tilt Properties<a class="header-link" href="#tilt-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-tilt-angle</code></td>
<td><code>8deg</code></td>
<td>Maximum rotation angle</td>
</tr>
<tr>
<td><code>--en-fx-tilt-perspective</code></td>
<td><code>800px</code></td>
<td>3D perspective depth</td>
</tr>
<tr>
<td><code>--en-fx-tilt-x</code></td>
<td>(unset)</td>
<td>Pointer X position, -1 to 1 (set via JS)</td>
</tr>
<tr>
<td><code>--en-fx-tilt-y</code></td>
<td>(unset)</td>
<td>Pointer Y position, -1 to 1 (set via JS)</td>
</tr>
</tbody>
</table>
</div><h3 id="press-properties">Press Properties<a class="header-link" href="#press-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-press-scale</code></td>
<td><code>0.96</code></td>
<td>Scale factor when pressed</td>
</tr>
</tbody>
</table>
</div><h3 id="magnet-properties">Magnet Properties<a class="header-link" href="#magnet-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-magnet-distance</code></td>
<td><code>0.6rem</code></td>
<td>Maximum pull distance</td>
</tr>
<tr>
<td><code>--en-fx-magnet-scale</code></td>
<td><code>1.04</code></td>
<td>Scale on hover</td>
</tr>
<tr>
<td><code>--en-fx-magnet-x</code></td>
<td><code>0</code></td>
<td>Pointer X offset, -1 to 1 (set via JS)</td>
</tr>
<tr>
<td><code>--en-fx-magnet-y</code></td>
<td><code>0</code></td>
<td>Pointer Y offset, -1 to 1 (set via JS)</td>
</tr>
</tbody>
</table>
</div><h3 id="underline-grow-properties">Underline Grow Properties<a class="header-link" href="#underline-grow-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-underline-color</code></td>
<td><code>currentColor</code></td>
<td>Underline color</td>
</tr>
<tr>
<td><code>--en-fx-underline-thickness</code></td>
<td><code>2px</code></td>
<td>Line thickness</td>
</tr>
</tbody>
</table>
</div><h3 id="arrow-slide-properties">Arrow Slide Properties<a class="header-link" href="#arrow-slide-properties" title="Link to this heading"></a></h3>
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
<td><code>--en-fx-arrow</code></td>
<td><code>'\\2192'</code> (→)</td>
<td>Arrow glyph (quoted string)</td>
</tr>
<tr>
<td><code>--en-fx-arrow-distance</code></td>
<td><code>0.3em</code></td>
<td>Slide distance</td>
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
<td><code>.en-fx-ripple</code></td>
<td>Circular wave expands on press</td>
</tr>
<tr>
<td><code>.en-fx-lift</code></td>
<td>Element rises with shadow on hover/focus</td>
</tr>
<tr>
<td><code>.en-fx-ping</code></td>
<td>Expanding ring animation (continuous)</td>
</tr>
<tr>
<td><code>.en-fx-tilt</code></td>
<td>3D tilt on hover (default right direction)</td>
</tr>
<tr>
<td><code>.en-fx-tilt--left</code></td>
<td>Tilts from left side</td>
</tr>
<tr>
<td><code>.en-fx-tilt--right</code></td>
<td>Tilts from right side (alias for default)</td>
</tr>
<tr>
<td><code>.en-fx-tilt--up</code></td>
<td>Tilts from top</td>
</tr>
<tr>
<td><code>.en-fx-tilt--down</code></td>
<td>Tilts from bottom</td>
</tr>
<tr>
<td><code>.en-fx-press</code></td>
<td>Squashes on press, springs back</td>
</tr>
<tr>
<td><code>.en-fx-magnet</code></td>
<td>Grows and pulls toward pointer</td>
</tr>
<tr>
<td><code>.en-fx-underline-grow</code></td>
<td>Underline grows from inline-start</td>
</tr>
<tr>
<td><code>.en-fx-underline-grow--center</code></td>
<td>Underline grows from center</td>
</tr>
<tr>
<td><code>.en-fx-arrow-slide</code></td>
<td>Trailing arrow slides on hover</td>
</tr>
</tbody>
</table>
</div><h2 id="important-notes">Important Notes<a class="header-link" href="#important-notes" title="Link to this heading"></a></h2>
<h3 id="pseudo-element-conflicts">Pseudo-element Conflicts<a class="header-link" href="#pseudo-element-conflicts" title="Link to this heading"></a></h3>
<p>Some effects use <code>::after</code> and cannot be combined on the same element:</p>
<ul>
<li><strong>Cannot combine</strong>: <code>.en-fx-ripple</code>, <code>.en-fx-ping</code>, <code>.en-fx-arrow-slide</code></li>
<li><strong>Also conflicts with</strong>: <code>.en-fx-shimmer</code>, surface effects that use <code>::after</code></li>
</ul>
<p>`}),c(Q,{key:33,meta:Y[33]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="transform-conflicts">Transform Conflicts<a class="header-link" href="#transform-conflicts" title="Link to this heading"></a></h3>
<p>Tilt uses <code>transform</code> and cannot combine with other transform-based effects on same element:</p>
<p>`}),c(Q,{key:34,meta:Y[34]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="transition-conflicts">Transition Conflicts<a class="header-link" href="#transition-conflicts" title="Link to this heading"></a></h3>
<p>Multiple effects that set their own <code>transition</code> on same element will conflict:</p>
<ul>
<li><strong>Conflict</strong>: <code>.en-fx-lift</code>, <code>.en-fx-press</code>, <code>.en-fx-magnet</code>, <code>.en-fx-tilt</code></li>
</ul>
<p>Last-declared effect wins. To combine, nest elements:</p>
<p>`}),c(Q,{key:35,meta:Y[35]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="ripple-clipping">Ripple Clipping<a class="header-link" href="#ripple-clipping" title="Link to this heading"></a></h3>
<p>Ripple sets <code>overflow: hidden</code>, which clips:</p>
<ul>
<li>Outer box-shadows</li>
<li>Focus outlines that extend beyond element</li>
<li>Dropdown menus positioned inside</li>
</ul>
<p>Use <code>outline-offset</code> or nest elements to avoid clipping important visuals.</p>
<h3 id="active-state-behavior">Active State Behavior<a class="header-link" href="#active-state-behavior" title="Link to this heading"></a></h3>
<p>Press effects (ripple, press) use <code>:active</code>:</p>
<ul>
<li><strong>Button</strong>: Activates with mouse click or Space key (not Enter)</li>
<li><strong>Links</strong>: Activates with mouse click or Enter key</li>
<li><strong>iOS Safari</strong>: Requires touch event listener on page to enable <code>:active</code></li>
</ul>
<h3 id="rtl-support">RTL Support<a class="header-link" href="#rtl-support" title="Link to this heading"></a></h3>
<p>Effects that move horizontally automatically reverse in RTL:</p>
<ul>
<li><strong>Underline grow</strong>: Starts from inline-end (right edge)</li>
<li><strong>Arrow slide</strong>: Flips to <code>←</code> and slides leftward</li>
</ul>
<p>Both use logical properties for automatic RTL behavior.</p>
<h3 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h3>
<p>All animations respect <code>prefers-reduced-motion</code>:</p>
<ul>
<li>Ripple and ping animations disabled</li>
<li>Lift movement disabled (shadow remains)</li>
<li>Tilt transform disabled</li>
<li>Press and magnet scaling disabled</li>
<li>Arrow slide movement disabled</li>
<li>Underline grow still works (instant)</li>
</ul>
<p>Interactive feedback remains functional without motion.</p>
<h2 id="browser-support">Browser Support<a class="header-link" href="#browser-support" title="Link to this heading"></a></h2>
<ul>
<li><strong>All effects</strong>: Modern browsers (Baseline 2024+)</li>
<li><strong>Light-dark()</strong>: Chrome 123+, Firefox 120+, Safari 17.5+</li>
<li><strong>::after animations</strong>: Full support</li>
<li><strong>Transform 3D</strong>: Full support with hardware acceleration</li>
<li><strong>Reduced motion</strong>: Full support</li>
</ul>
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
<td>Ripple</td>
<td>Material-style buttons, clickable cards, touch interfaces</td>
</tr>
<tr>
<td>Lift</td>
<td>Interactive cards, hoverable panels, gallery items</td>
</tr>
<tr>
<td>Ping</td>
<td>Live status indicators, notification badges, recording dots</td>
</tr>
<tr>
<td>Tilt</td>
<td>Product cards, portfolio items, feature highlights</td>
</tr>
<tr>
<td>Press</td>
<td>Touch-friendly buttons, mobile interfaces, game controls</td>
</tr>
<tr>
<td>Magnet</td>
<td>CTAs, primary actions, focal point elements</td>
</tr>
<tr>
<td>Underline Grow</td>
<td>Navigation links, article links, inline actions</td>
</tr>
<tr>
<td>Arrow Slide</td>
<td>“Read more” links, navigation items, external links</td>
</tr>
</tbody>
</table>
</div><p>`}),c(Q,{key:36,meta:Y[36]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),we={title:`Interaction Effects`,description:`Hover, focus, and press feedback effects. All effects work with pure CSS and optionally support JavaScript for pointer tracking.`},Te=$;export{Te as default,we as meta};