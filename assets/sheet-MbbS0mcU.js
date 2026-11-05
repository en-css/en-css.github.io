import{Et as e,I as t,R as n,W as r,at as i,ct as a,et as o,it as s,l as c,m as l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";var g=`<button type="button" class="en-btn" commandfor="sheet-demo1" command="show-modal">Open Sheet</button>

<dialog class="en-sheet" id="sheet-demo1" aria-labelledby="sheet-title1">
  <div class="en-sheet__handle" aria-hidden="true"></div>
  <header class="en-sheet__header">
    <h2 class="en-sheet__title" id="sheet-title1">Sheet Title</h2>
    <button type="button" class="en-sheet__close" aria-label="Close" commandfor="sheet-demo1" command="close">×</button>
  </header>
  <div class="en-sheet__body">
    <p>This is a bottom sheet that slides up from the bottom of the screen.</p>
    <p>Press Escape or click the close button to dismiss.</p>
  </div>
</dialog>`,_={__name:`0`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=g,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},v=`<button type="button" class="en-btn en-btn--primary" commandfor="sheet-demo2" command="show-modal">Apply Filters</button>

<dialog class="en-sheet" id="sheet-demo2" aria-labelledby="sheet-title2">
  <div class="en-sheet__handle" aria-hidden="true"></div>
  <header class="en-sheet__header">
    <h2 class="en-sheet__title" id="sheet-title2">Filter Options</h2>
    <button type="button" class="en-sheet__close" aria-label="Close" commandfor="sheet-demo2" command="close">×</button>
  </header>
  <div class="en-sheet__body">
    <div class="en-form-grid">
      <label class="en-check">
        <input type="checkbox" checked>
        <span>Show active items</span>
      </label>
      <label class="en-check">
        <input type="checkbox">
        <span>Include archived</span>
      </label>
      <label class="en-check">
        <input type="checkbox">
        <span>Show drafts</span>
      </label>
    </div>
  </div>
  <footer class="en-sheet__footer">
    <button type="button" class="en-btn" commandfor="sheet-demo2" command="close">Cancel</button>
    <button type="button" class="en-btn en-btn--primary" commandfor="sheet-demo2" command="close">Apply</button>
  </footer>
</dialog>`,y={__name:`1`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=v,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},b=`<button type="button" class="en-btn" commandfor="sheet-demo3" command="show-modal">Open from Top</button>

<dialog class="en-sheet en-sheet--top" id="sheet-demo3" aria-labelledby="sheet-title3">
  <header class="en-sheet__header">
    <h2 class="en-sheet__title" id="sheet-title3">Notifications</h2>
    <button type="button" class="en-sheet__close" aria-label="Close" commandfor="sheet-demo3" command="close">×</button>
  </header>
  <div class="en-sheet__body">
    <ul class="en-list-group">
      <li class="en-list-group__item">
        <strong>New message</strong> from Alice
      </li>
      <li class="en-list-group__item">
        <strong>Task completed</strong> by Bob
      </li>
      <li class="en-list-group__item">
        <strong>System update</strong> available
      </li>
    </ul>
  </div>
  <div class="en-sheet__handle" aria-hidden="true"></div>
</dialog>`,x={__name:`2`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=b,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},S=`<button type="button" class="en-btn" commandfor="sheet-demo4" command="show-modal">Open from Left</button>

<dialog class="en-sheet en-sheet--start" id="sheet-demo4" aria-labelledby="sheet-title4">
  <header class="en-sheet__header">
    <h2 class="en-sheet__title" id="sheet-title4">Navigation</h2>
    <button type="button" class="en-sheet__close" aria-label="Close" commandfor="sheet-demo4" command="close">×</button>
  </header>
  <div class="en-sheet__body">
    <nav aria-label="Main navigation">
      <ul class="en-list-group">
        <li><a href="#" class="en-list-group__item">Dashboard</a></li>
        <li><a href="#" class="en-list-group__item">Projects</a></li>
        <li><a href="#" class="en-list-group__item">Team</a></li>
        <li><a href="#" class="en-list-group__item">Settings</a></li>
      </ul>
    </nav>
  </div>
</dialog>`,C={__name:`3`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},w=`<button type="button" class="en-btn" commandfor="sheet-demo5" command="show-modal">Open from Right</button>

<dialog class="en-sheet en-sheet--end" id="sheet-demo5" aria-labelledby="sheet-title5">
  <header class="en-sheet__header">
    <h2 class="en-sheet__title" id="sheet-title5">Details Panel</h2>
    <button type="button" class="en-sheet__close" aria-label="Close" commandfor="sheet-demo5" command="close">×</button>
  </header>
  <div class="en-sheet__body">
    <dl class="en-descriptions en-descriptions--bordered">
      <dt>Name</dt>
      <dd>Product Alpha</dd>
      <dt>Status</dt>
      <dd><span class="en-badge en-badge--success">Active</span></dd>
      <dt>Created</dt>
      <dd>2026-10-01</dd>
      <dt>Modified</dt>
      <dd>2026-10-13</dd>
    </dl>
  </div>
  <footer class="en-sheet__footer">
    <button type="button" class="en-btn en-btn--outline">Edit</button>
    <button type="button" class="en-btn en-btn--danger">Delete</button>
  </footer>
</dialog>`,T={__name:`4`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},E=`<button type="button" class="en-btn" commandfor="sheet-demo6" command="show-modal">Full Height Sheet</button>

<dialog class="en-sheet en-sheet--full" id="sheet-demo6" aria-labelledby="sheet-title6">
  <div class="en-sheet__handle" aria-hidden="true"></div>
  <header class="en-sheet__header">
    <h2 class="en-sheet__title" id="sheet-title6">Full Screen Form</h2>
    <button type="button" class="en-sheet__close" aria-label="Close" commandfor="sheet-demo6" command="close">×</button>
  </header>
  <div class="en-sheet__body">
    <form class="en-form-grid">
      <label class="en-form-field">
        <span class="en-form-field__label">Name</span>
        <input type="text" class="en-input" placeholder="Enter name">
      </label>
      <label class="en-form-field">
        <span class="en-form-field__label">Email</span>
        <input type="email" class="en-input" placeholder="your@email.com">
      </label>
      <label class="en-form-field">
        <span class="en-form-field__label">Message</span>
        <textarea class="en-textarea" rows="6" placeholder="Your message"></textarea>
      </label>
    </form>
  </div>
  <footer class="en-sheet__footer">
    <button type="button" class="en-btn" commandfor="sheet-demo6" command="close">Cancel</button>
    <button type="button" class="en-btn en-btn--primary">Submit</button>
  </footer>
</dialog>`,D={__name:`5`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=E,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},O=`<button type="button" class="en-btn" commandfor="sheet-demo7" command="show-modal">Wide Sheet</button>

<dialog class="en-sheet" style="--en-sheet-width: 60rem" id="sheet-demo7" aria-labelledby="sheet-title7">
  <div class="en-sheet__handle" aria-hidden="true"></div>
  <header class="en-sheet__header">
    <h2 class="en-sheet__title" id="sheet-title7">Wide Content</h2>
    <button type="button" class="en-sheet__close" aria-label="Close" commandfor="sheet-demo7" command="close">×</button>
  </header>
  <div class="en-sheet__body">
    <p>This sheet has a custom width of 60rem (default is 40rem for bottom/top sheets).</p>
    <p>Useful for forms or content that needs more horizontal space.</p>
  </div>
</dialog>`,k={__name:`6`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=O,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},A=`<button type="button" class="en-btn" commandfor="sheet-demo8" command="show-modal">Open Sheet (peek)</button>

<dialog class="en-sheet" id="sheet-demo8" data-detent="peek" aria-labelledby="sheet-title8">
  <div class="en-sheet__handle" aria-hidden="true"></div>
  <header class="en-sheet__header">
    <h2 class="en-sheet__title" id="sheet-title8">Detents</h2>
    <button type="button" class="en-sheet__close" aria-label="Close" commandfor="sheet-demo8" command="close">×</button>
  </header>
  <div class="en-sheet__body">
    <div class="en-btn-group" role="group" aria-label="Sheet height">
      <button type="button" class="en-btn" onclick="setSheetDetent('peek')">Peek</button>
      <button type="button" class="en-btn" onclick="setSheetDetent('half')">Half</button>
      <button type="button" class="en-btn" onclick="setSheetDetent('expanded')">Expanded</button>
    </div>
    <p>Peek is 30dvh, half is 50dvh and expanded is 80dvh by default.</p>
  </div>
</dialog>`,j={__name:`7`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=A,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},M={};function N(e,n){let r=a(`Downloadable`);return s(),t(r,{"dev-url":`components/extended/components-sheet.css`})}var P={0:{component:_,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo1"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show-modal"</span><span class="shiki-foreground">>Open Sheet&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo1"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title1"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__handle"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">header</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title1"</span><span class="shiki-foreground">>Sheet Title&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo1"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">header</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>This is a bottom sheet that slides up from the bottom of the screen.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Press Escape or click the close button to dismiss.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Bottom sheet with invoker commands`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo2"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show-modal"</span><span class="shiki-foreground">>Apply Filters&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo2"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__handle"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">header</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title2"</span><span class="shiki-foreground">>Filter Options&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo2"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">header</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Show active items&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Include archived&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Show drafts&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">footer</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo2"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>Cancel&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo2"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>Apply&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">footer</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sheet with action buttons`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo3"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show-modal"</span><span class="shiki-foreground">>Open from Top&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet en-sheet--top"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo3"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">header</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title3"</span><span class="shiki-foreground">>Notifications&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo3"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">header</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-list-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-list-group__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>New message&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">> from Alice</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-list-group__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Task completed&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">> by Bob</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-list-group__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>System update&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">> available</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__handle"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sheet slides from top`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo4"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show-modal"</span><span class="shiki-foreground">>Open from Left&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet en-sheet--start"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo4"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">header</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title4"</span><span class="shiki-foreground">>Navigation&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo4"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">header</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Main navigation"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-list-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-list-group__item"</span><span class="shiki-foreground">>Dashboard&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-list-group__item"</span><span class="shiki-foreground">>Projects&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-list-group__item"</span><span class="shiki-foreground">>Team&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-list-group__item"</span><span class="shiki-foreground">>Settings&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sheet slides from left`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo5"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show-modal"</span><span class="shiki-foreground">>Open from Right&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet en-sheet--end"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo5"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title5"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">header</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title5"</span><span class="shiki-foreground">>Details Panel&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo5"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">header</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">dl</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-descriptions en-descriptions--bordered"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">dt</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">dt</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">dd</span><span class="shiki-foreground">>Product Alpha&#x3C;/</span><span class="shiki-token-string-expression">dd</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">dt</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">dt</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">dd</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">dd</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">dt</span><span class="shiki-foreground">>Created&#x3C;/</span><span class="shiki-token-string-expression">dt</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">dd</span><span class="shiki-foreground">>2026-10-01&#x3C;/</span><span class="shiki-token-string-expression">dd</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">dt</span><span class="shiki-foreground">>Modified&#x3C;/</span><span class="shiki-token-string-expression">dt</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">dd</span><span class="shiki-foreground">>2026-10-13&#x3C;/</span><span class="shiki-token-string-expression">dd</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">dl</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">footer</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline"</span><span class="shiki-foreground">>Edit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--danger"</span><span class="shiki-foreground">>Delete&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">footer</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sheet slides from right`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo6"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show-modal"</span><span class="shiki-foreground">>Full Height Sheet&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet en-sheet--full"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo6"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title6"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__handle"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">header</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title6"</span><span class="shiki-foreground">>Full Screen Form&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo6"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">header</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-field__label"</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Enter name"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-field__label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"your@email.com"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-field__label"</span><span class="shiki-foreground">>Message&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"6"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Your message"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">footer</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo6"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>Cancel&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-foreground">>Submit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">footer</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Full viewport height`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:k,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo7"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show-modal"</span><span class="shiki-foreground">>Wide Sheet&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-sheet-width: 60rem"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo7"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title7"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__handle"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">header</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title7"</span><span class="shiki-foreground">>Wide Content&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo7"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">header</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>This sheet has a custom width of 60rem (default is 40rem for bottom/top sheets).&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Useful for forms or content that needs more horizontal space.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Custom sheet width`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo8"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show-modal"</span><span class="shiki-foreground">>Open Sheet (peek)&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo8"</span><span class="shiki-token-function"> data-detent</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"peek"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title8"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__handle"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">header</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-title8"</span><span class="shiki-foreground">>Detents&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-token-function"> commandfor</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sheet-demo8"</span><span class="shiki-token-function"> command</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">header</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn-group"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"group"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Sheet height"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-function">setSheetDetent</span><span class="shiki-token-string-expression">('peek')"</span><span class="shiki-foreground">>Peek&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-function">setSheetDetent</span><span class="shiki-token-string-expression">('half')"</span><span class="shiki-foreground">>Half&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-function">setSheetDetent</span><span class="shiki-token-string-expression">('expanded')"</span><span class="shiki-foreground">>Expanded&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Peek is 30dvh, half is 50dvh and expanded is 80dvh by default.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sheet with detents`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-constant">window</span><span class="shiki-foreground">.</span><span class="shiki-token-function">setSheetDetent</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-keyword"> function</span><span class="shiki-foreground">(name) {</span></span>
<span class="line"><span class="shiki-token-constant">  document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'sheet-demo8'</span><span class="shiki-foreground">).</span><span class="shiki-token-constant">dataset</span><span class="shiki-foreground">.detent </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> name;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`js`,key:8,lang:`js`,injectKind:`js-inject`,editable:!1,source:null},10:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> sheet</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> document</span><span class="shiki-token-function">.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'#my-sheet'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> handle</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> sheet</span><span class="shiki-token-function">.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-sheet__handle'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> detents</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">'peek'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'half'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'expanded'</span><span class="shiki-foreground">];</span></span>
<span class="line"><span class="shiki-token-keyword">let</span><span class="shiki-foreground"> startY </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> 0</span><span class="shiki-foreground">;</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">handle</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'pointerdown'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> (e) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  startY </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> e</span><span class="shiki-foreground">.clientY;</span></span>
<span class="line"><span class="shiki-token-constant">  sheet</span><span class="shiki-token-function">.toggleAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'data-dragging'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">  handle</span><span class="shiki-token-function">.setPointerCapture</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">e</span><span class="shiki-foreground">.pointerId);</span></span>
<span class="line"><span class="shiki-foreground">});</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">handle</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'pointermove'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> (e) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (</span><span class="shiki-token-keyword">!</span><span class="shiki-token-constant">sheet</span><span class="shiki-token-function">.hasAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'data-dragging'</span><span class="shiki-foreground">)) </span><span class="shiki-token-keyword">return</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-comment">  // Dragging up (smaller clientY) makes a bottom sheet taller.</span></span>
<span class="line"><span class="shiki-token-constant">  sheet</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.setProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-sheet-drag'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> \`</span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">startY </span><span class="shiki-token-keyword">-</span><span class="shiki-token-constant"> e</span><span class="shiki-foreground">.clientY</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">px\`</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-foreground">});</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">function</span><span class="shiki-token-function"> release</span><span class="shiki-foreground">(e) {</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (</span><span class="shiki-token-keyword">!</span><span class="shiki-token-constant">sheet</span><span class="shiki-token-function">.hasAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'data-dragging'</span><span class="shiki-foreground">)) </span><span class="shiki-token-keyword">return</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> dy</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> startY </span><span class="shiki-token-keyword">-</span><span class="shiki-token-constant"> e</span><span class="shiki-foreground">.clientY;                 </span><span class="shiki-token-comment">// > 0: dragged up</span></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> i</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> detents</span><span class="shiki-token-function">.indexOf</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">sheet</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">dataset</span><span class="shiki-foreground">.detent);</span></span>
<span class="line"><span class="shiki-token-constant">  sheet</span><span class="shiki-token-function">.removeAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'data-dragging'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">  sheet</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">style</span><span class="shiki-token-function">.removeProperty</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'--en-sheet-drag'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (dy </span><span class="shiki-token-keyword">></span><span class="shiki-token-constant"> 60</span><span class="shiki-foreground">) </span><span class="shiki-token-constant">sheet</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">dataset</span><span class="shiki-foreground">.detent </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> detents[</span><span class="shiki-token-constant">Math</span><span class="shiki-token-function">.min</span><span class="shiki-foreground">(i </span><span class="shiki-token-keyword">+</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> detents</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">length</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-constant"> 1</span><span class="shiki-foreground">)];</span></span>
<span class="line"><span class="shiki-token-keyword">  else</span><span class="shiki-token-keyword"> if</span><span class="shiki-foreground"> (dy </span><span class="shiki-token-keyword">&#x3C;</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-constant">60</span><span class="shiki-foreground">) i </span><span class="shiki-token-keyword">&#x3C;=</span><span class="shiki-token-constant"> 0</span><span class="shiki-token-keyword"> ?</span><span class="shiki-token-constant"> sheet</span><span class="shiki-token-function">.close</span><span class="shiki-foreground">() </span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> (</span><span class="shiki-token-constant">sheet</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">dataset</span><span class="shiki-foreground">.detent </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> detents[i </span><span class="shiki-token-keyword">-</span><span class="shiki-token-constant"> 1</span><span class="shiki-foreground">]);</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">handle</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'pointerup'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> release);</span></span>
<span class="line"><span class="shiki-token-constant">handle</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'pointercancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> release);</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`js`,key:10,lang:`js`,injectKind:null,editable:!1,source:null},11:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet en-sheet--draggable"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"my-sheet"</span><span class="shiki-token-function"> data-detent</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"peek"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"my-title"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sheet__handle"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"separator"</span><span class="shiki-token-function"> aria-orientation</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"horizontal"</span></span>
<span class="line"><span class="shiki-token-function">       aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Resize sheet"</span><span class="shiki-token-function"> tabindex</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- header, body, footer --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:l(M,[[`render`,N]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/extended/components-sheet.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:12,lang:`vue`,injectKind:null,editable:!1,source:null}},F=[{id:`sheet`,text:`Sheet`,level:1},{id:`basic-sheet`,text:`Basic Sheet`,level:2},{id:`with-footer-actions`,text:`With Footer Actions`,level:2},{id:`top-sheet`,text:`Top Sheet`,level:2},{id:`side-sheet-start`,text:`Side Sheet (Start)`,level:2},{id:`side-sheet-end`,text:`Side Sheet (End)`,level:2},{id:`full-height-sheet`,text:`Full Height Sheet`,level:2},{id:`custom-width`,text:`Custom Width`,level:2},{id:`detents`,text:`Detents`,level:2},{id:`drag-hooks-for-javascript`,text:`Drag Hooks for JavaScript`,level:2},{id:`classes`,text:`Classes`,level:2},{id:`custom-properties`,text:`Custom Properties`,level:2},{id:`attributes`,text:`Attributes`,level:2},{id:`structure-guidelines`,text:`Structure Guidelines`,level:2},{id:`animation`,text:`Animation`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`notes`,text:`Notes`,level:2}],I=[{id:`sheet`,text:`Sheet`,level:1,children:[{id:`basic-sheet`,text:`Basic Sheet`,level:2,children:[]},{id:`with-footer-actions`,text:`With Footer Actions`,level:2,children:[]},{id:`top-sheet`,text:`Top Sheet`,level:2,children:[]},{id:`side-sheet-start`,text:`Side Sheet (Start)`,level:2,children:[]},{id:`side-sheet-end`,text:`Side Sheet (End)`,level:2,children:[]},{id:`full-height-sheet`,text:`Full Height Sheet`,level:2,children:[]},{id:`custom-width`,text:`Custom Width`,level:2,children:[]},{id:`detents`,text:`Detents`,level:2,children:[]},{id:`drag-hooks-for-javascript`,text:`Drag Hooks for JavaScript`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`custom-properties`,text:`Custom Properties`,level:2,children:[]},{id:`attributes`,text:`Attributes`,level:2,children:[]},{id:`structure-guidelines`,text:`Structure Guidelines`,level:2,children:[]},{id:`animation`,text:`Animation`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`notes`,text:`Notes`,level:2,children:[]}]}],L={css:[],js:[{key:8,code:`window.setSheetDetent = function(name) {
  document.getElementById('sheet-demo8').dataset.detent = name;
}`}],cleanup:[{key:9,code:`onUnmount(() => {
  delete window.setSheetDetent;
})`}]},R=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),z=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/extended/sheet.md`,setup(){i(`vlm-toc`,{flat:F,tree:I}),h(()=>c(F,I)),d(()=>c([],[]));let e=m(L);return i(`vlm-inject`,e),h(()=>e.mount()),o(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="sheet">Sheet<a class="header-link" href="#sheet" title="Link to this heading"></a></h1>
<p>Slide-in panel built on native <code>&lt;dialog&gt;</code> element, appearing from bottom (default), top, or sides—perfect for filters, settings, and mobile-friendly forms.</p>
<h2 id="basic-sheet">Basic Sheet<a class="header-link" href="#basic-sheet" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:0,meta:P[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="with-footer-actions">With Footer Actions<a class="header-link" href="#with-footer-actions" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:1,meta:P[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="top-sheet">Top Sheet<a class="header-link" href="#top-sheet" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:2,meta:P[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="side-sheet-start">Side Sheet (Start)<a class="header-link" href="#side-sheet-start" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:3,meta:P[3]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="side-sheet-end">Side Sheet (End)<a class="header-link" href="#side-sheet-end" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:4,meta:P[4]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="full-height-sheet">Full Height Sheet<a class="header-link" href="#full-height-sheet" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:5,meta:P[5]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="custom-width">Custom Width<a class="header-link" href="#custom-width" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:6,meta:P[6]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="detents">Detents<a class="header-link" href="#detents" title="Link to this heading"></a></h2>
<p>Add <code>data-detent</code> to a bottom or top sheet to give it a resting height (<code>peek</code>, <code>half</code> or <code>expanded</code>). Change the attribute from your code and the sheet eases to the new height. Without <code>data-detent</code> the sheet keeps its content height.</p>
<p>`}),f(R,{key:7,meta:P[7]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),f(R,{key:8,meta:P[8]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="drag-hooks-for-javascript">Drag Hooks for JavaScript<a class="header-link" href="#drag-hooks-for-javascript" title="Link to this heading"></a></h2>
<p>The sheet does not ship any JavaScript. It exposes CSS hooks so your own code or a gesture plugin can drive it:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Hook</th>
<th>Set by</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>data-detent</code></td>
<td>your code</td>
<td>Resting height: <code>peek</code>, <code>half</code> or <code>expanded</code></td>
</tr>
<tr>
<td><code>data-dragging</code></td>
<td>your code</td>
<td>Present while a drag is in progress: the resize follows the pointer without easing</td>
</tr>
<tr>
<td><code>--en-sheet-drag</code></td>
<td>your code</td>
<td>Extra height in px added to the detent while dragging (positive grows, negative shrinks)</td>
</tr>
<tr>
<td><code>.en-sheet--draggable</code></td>
<td>markup</td>
<td>Bigger touch target around the handle, grab cursor, and <code>touch-action: none</code> so the browser does not scroll during the gesture</td>
</tr>
</tbody>
</table>
</div><p>Detent heights are set with <code>--en-sheet-peek</code> (default <code>30dvh</code>), <code>--en-sheet-half</code> (<code>50dvh</code>) and <code>--en-sheet-expanded</code> (<code>80dvh</code>). A sheet never grows past <code>--en-sheet-max</code>. Side sheets and <code>.en-sheet--full</code> ignore detents.</p>
<p>A minimal sketch of a handle drag that steps between detents:</p>
<p>`}),f(R,{key:10,meta:P[10]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Markup for a draggable sheet:</p>
<p>`}),f(R,{key:11,meta:P[11]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>A handle that reacts to the pointer must also work without one: remove <code>aria-hidden</code>, give it a role and <code>tabindex=&quot;0&quot;</code>, and handle the Arrow Up/Down keys to change <code>data-detent</code>.</p>
<p>A sheet opened with <code>dialog.show()</code> (non-modal) keeps the page interactive and has no backdrop, which suits a persistent <code>peek</code> sheet. It is lifted above the page with <code>z-index: var(--en-z-overlay)</code>.</p>
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
<td><code>.en-sheet</code></td>
<td>Base sheet component (bottom placement by default)</td>
</tr>
<tr>
<td><code>.en-sheet--top</code></td>
<td>Sheet slides from top of screen</td>
</tr>
<tr>
<td><code>.en-sheet--start</code></td>
<td>Sheet slides from left (inline-start)</td>
</tr>
<tr>
<td><code>.en-sheet--end</code></td>
<td>Sheet slides from right (inline-end)</td>
</tr>
<tr>
<td><code>.en-sheet--full</code></td>
<td>Full viewport height (bottom/top sheets)</td>
</tr>
<tr>
<td><code>.en-sheet--draggable</code></td>
<td>Bigger touch target on the handle for JS drag gestures</td>
</tr>
<tr>
<td><code>.en-sheet__handle</code></td>
<td>Drag handle indicator (visual unless your JS makes it interactive, hidden on side sheets)</td>
</tr>
<tr>
<td><code>.en-sheet__header</code></td>
<td>Header section with title and close button</td>
</tr>
<tr>
<td><code>.en-sheet__title</code></td>
<td>Sheet title heading</td>
</tr>
<tr>
<td><code>.en-sheet__close</code></td>
<td>Close button (typically × character)</td>
</tr>
<tr>
<td><code>.en-sheet__body</code></td>
<td>Scrollable content area</td>
</tr>
<tr>
<td><code>.en-sheet__footer</code></td>
<td>Footer with action buttons</td>
</tr>
</tbody>
</table>
</div><h2 id="custom-properties">Custom Properties<a class="header-link" href="#custom-properties" title="Link to this heading"></a></h2>
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
<td><code>--en-sheet-width</code></td>
<td><code>40rem</code> (bottom/top), <code>24rem</code> (sides)</td>
<td>Maximum width/height of sheet</td>
</tr>
<tr>
<td><code>--en-sheet-max</code></td>
<td><code>85dvh</code></td>
<td>Max height for bottom/top sheets</td>
</tr>
<tr>
<td><code>--en-sheet-peek</code></td>
<td><code>30dvh</code></td>
<td>Height of <code>data-detent=&quot;peek&quot;</code></td>
</tr>
<tr>
<td><code>--en-sheet-half</code></td>
<td><code>50dvh</code></td>
<td>Height of <code>data-detent=&quot;half&quot;</code></td>
</tr>
<tr>
<td><code>--en-sheet-expanded</code></td>
<td><code>80dvh</code></td>
<td>Height of <code>data-detent=&quot;expanded&quot;</code></td>
</tr>
<tr>
<td><code>--en-sheet-drag</code></td>
<td><code>0px</code></td>
<td>Extra height set by JS while dragging</td>
</tr>
</tbody>
</table>
</div><h2 id="attributes">Attributes<a class="header-link" href="#attributes" title="Link to this heading"></a></h2>
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
<td><code>[open]</code></td>
<td>-</td>
<td>Native dialog attribute, sheet is visible when present</td>
</tr>
<tr>
<td><code>commandfor</code></td>
<td><code>&quot;dialog-id&quot;</code></td>
<td>Links button to dialog (invoker button or close button)</td>
</tr>
<tr>
<td><code>command</code></td>
<td><code>&quot;show-modal&quot;</code> | <code>&quot;close&quot;</code></td>
<td>Opens sheet as modal or closes it</td>
</tr>
<tr>
<td><code>aria-labelledby</code></td>
<td><code>&quot;title-id&quot;</code></td>
<td>Associates dialog with its title</td>
</tr>
<tr>
<td><code>data-detent</code></td>
<td><code>&quot;peek&quot;</code> | <code>&quot;half&quot;</code> | <code>&quot;expanded&quot;</code></td>
<td>Resting height of a bottom/top sheet</td>
</tr>
<tr>
<td><code>data-dragging</code></td>
<td>-</td>
<td>Present while a drag is in progress (disables the resize easing)</td>
</tr>
</tbody>
</table>
</div><h2 id="structure-guidelines">Structure Guidelines<a class="header-link" href="#structure-guidelines" title="Link to this heading"></a></h2>
<p><strong>Opening methods</strong>:</p>
<ol>
<li><strong>Invoker commands</strong> (recommended): <code>&lt;button commandfor=&quot;sheet-id&quot; command=&quot;show-modal&quot;&gt;Open&lt;/button&gt;</code></li>
<li><strong>JavaScript</strong>: <code>dialog.showModal()</code> for modal, <code>dialog.show()</code> for non-modal</li>
<li><strong>Closing</strong>: Escape key, close button with <code>command=&quot;close&quot;</code>, or <code>dialog.close()</code></li>
</ol>
<p><strong>Drag handle</strong>: The <code>.en-sheet__handle</code> is visual by default and no drag behavior is shipped. Hidden on side sheets, shown at the bottom edge for top sheets. See <a href="#drag-hooks-for-javascript">Drag Hooks for JavaScript</a> to drive it with your own code or a gesture plugin.</p>
<p><strong>Safe areas</strong>: Sheets automatically account for:</p>
<ul>
<li>Bottom safe area: <code>env(safe-area-inset-bottom)</code> for home indicator</li>
<li>Top safe area: <code>env(safe-area-inset-top)</code> for notch/status bar</li>
<li>Side safe areas: Respected on side sheets</li>
</ul>
<p><strong>Modal behavior</strong>: When opened with <code>showModal()</code> or <code>command=&quot;show-modal&quot;</code>:</p>
<ul>
<li>Focus is trapped inside the sheet</li>
<li>Rest of page becomes inert (not interactive)</li>
<li>Escape key closes the sheet</li>
<li>Focus returns to opener on close</li>
</ul>
<h2 id="animation">Animation<a class="header-link" href="#animation" title="Link to this heading"></a></h2>
<ul>
<li>Slides in from off-screen position with opacity fade</li>
<li>Both opening and closing are animated</li>
<li>Uses <code>@starting-style</code> for enter animations</li>
<li>Backdrop fades in/out with sheet</li>
<li>Respects <code>prefers-reduced-motion</code> via duration tokens</li>
</ul>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li>Built on native <code>&lt;dialog&gt;</code> element for proper semantics</li>
<li>Modal dialogs trap focus automatically</li>
<li>Escape key closes modal sheets</li>
<li>Close button needs <code>aria-label=&quot;Close&quot;</code></li>
<li>Sheet needs <code>aria-labelledby</code> pointing to title</li>
<li>When closed, content is <code>display: none</code> (not focusable)</li>
<li>Backdrop overlay indicates modal state</li>
</ul>
<h2 id="notes">Notes<a class="header-link" href="#notes" title="Link to this heading"></a></h2>
<ul>
<li>Uses native HTML Dialog API (Baseline 2022+)</li>
<li>Z-index automatically managed by browser for modal dialogs</li>
<li>Bottom/top sheets are centered horizontally beyond max-width</li>
<li>Side sheets take full viewport height</li>
<li>Content area (<code>.en-sheet__body</code>) scrolls independently</li>
<li>Footer buttons typically right-aligned with flexbox</li>
</ul>
<p>`}),f(R,{key:12,meta:P[12]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),B={title:`Sheet`,description:`Slide-in panel built on native <dialog> element, appearing from bottom (default), top, or sides—perfect for filters, settings, and mobile-friendly forms.`},V=z;export{V as default,B as meta};