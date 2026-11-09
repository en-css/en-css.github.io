import{R as e,Tt as t,W as n,at as r,c as i,et as a,it as o,n as s,nt as c,q as l,r as u,tt as d,u as f}from"./components-DGWjtEwO.js";var p=`<div class="en-flex en-gap-2">
  <button class="en-btn en-btn--primary">Primary</button>
  <button class="en-btn en-btn--outline">Outline</button>
  <button class="en-btn en-btn--danger">Danger</button>
</div>`,m={__name:`4`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=p,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},h=`<div class="en-card">
  <div class="en-card__body">
    <p>Card content here</p>
  </div>
</div>`,g={__name:`5`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_=`<div class="en-alert en-alert--success">
  Success message!
</div>`,v={__name:`6`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=_,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},y=`<div class="en-grid en-gap-4" style="--en-grid-min: 200px;">
  <div class="en-card"><div class="en-card__body">Item 1</div></div>
  <div class="en-card"><div class="en-card__body">Item 2</div></div>
  <div class="en-card"><div class="en-card__body">Item 3</div></div>
</div>`,b={__name:`7`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=y,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},x=`<div class="en-flex en-flex--align-center en-gap-4">
  <button class="en-btn">Small</button>
  <div class="en-card"><div class="en-card__body">Taller item</div></div>
</div>

<div class="en-cluster en-cluster--align-end">
  <span class="en-badge">Tag</span>
  <button class="en-btn">Action</button>
</div>`,S={__name:`8`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=x,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},C=`<button class="en-btn en-btn--primary" onclick="document.getElementById('myModal').showModal()">
  Open Modal
</button>

<dialog id="myModal" class="en-modal">
  <div class="en-modal__header">
    <h3 class="en-modal__title">Modal Title</h3>
    <button class="en-modal__close-icon" onclick="this.closest('dialog').close()" aria-label="Close"></button>
  </div>
  <div class="en-modal__body">
    <p>Modal content goes here.</p>
  </div>
  <div class="en-modal__footer">
    <button class="en-btn" onclick="this.closest('dialog').close()">Close</button>
    <button class="en-btn en-btn--primary">Save</button>
  </div>
</dialog>`,w={__name:`9`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=C,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},T=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - EN-CSS</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@en32/en-css/dist/presets/en-preset-standard.min.css">
</head>
<body>
  
  <!-- Navbar -->
  <nav class="en-navbar">
    <div class="en-navbar__brand">
      <strong>My Dashboard</strong>
    </div>
    <div class="en-navbar__nav">
      <a href="#" class="en-navbar__link en-navbar__link--active">Home</a>
      <a href="#" class="en-navbar__link">Analytics</a>
      <a href="#" class="en-navbar__link">Settings</a>
    </div>
  </nav>
  
  <!-- Main Content -->
  <div class="en-container" style="padding-block: var(--en-space-6);">
    
    <!-- Stats Grid -->
    <div class="en-grid en-gap-4 en-mb-6" style="--en-grid-min: 250px;">
      
      <div class="en-card">
        <div class="en-card__body">
          <p class="en-text--muted" style="margin: 0;">Total Users</p>
          <h2 style="margin: 0.5rem 0 0 0;">1,234</h2>
          <span class="en-badge en-badge--success">+12%</span>
        </div>
      </div>
      
      <div class="en-card">
        <div class="en-card__body">
          <p class="en-text--muted" style="margin: 0;">Revenue</p>
          <h2 style="margin: 0.5rem 0 0 0;">$56.7K</h2>
          <span class="en-badge en-badge--danger">-3%</span>
        </div>
      </div>
      
      <div class="en-card">
        <div class="en-card__body">
          <p class="en-text--muted" style="margin: 0;">Conversions</p>
          <h2 style="margin: 0.5rem 0 0 0;">23.5%</h2>
          <span class="en-badge en-badge--success">+5%</span>
        </div>
      </div>
      
    </div>
    
    <!-- Recent Activity -->
    <div class="en-card">
      <div class="en-card__header">
        <h3 class="en-card__title">Recent Activity</h3>
      </div>
      <div class="en-card__body">
        <div class="en-table-wrapper">
          <table class="en-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Created account</td>
                <td><span class="en-badge en-badge--success">Complete</span></td>
                <td>2 hours ago</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Updated profile</td>
                <td><span class="en-badge en-badge--info">Pending</span></td>
                <td>5 hours ago</td>
              </tr>
              <tr>
                <td>Bob Johnson</td>
                <td>Deleted post</td>
                <td><span class="en-badge en-badge--danger">Failed</span></td>
                <td>1 day ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  </div>
  
</body>
</html>`,E={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- Standard preset --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">link</span><span class="shiki-token-function"> rel</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"stylesheet"</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"https://cdn.jsdelivr.net/npm/@en32/en-css/dist/presets/en-preset-standard.min.css"</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">npm</span><span class="shiki-token-string"> install</span><span class="shiki-token-string"> @en32/en-css</span></span>
<span class="line"><span class="shiki-token-comment"># or</span></span>
<span class="line"><span class="shiki-token-function">bun</span><span class="shiki-token-string"> add</span><span class="shiki-token-string"> @en32/en-css</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`bash`,key:1,lang:`bash`,injectKind:null,editable:!1,source:null},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">link</span><span class="shiki-token-function"> rel</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"stylesheet"</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"node_modules/@en32/en-css/dist/presets/en-preset-standard.min.css"</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;!</span><span class="shiki-token-string-expression">DOCTYPE</span><span class="shiki-token-function"> html</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">html</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">head</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">meta</span><span class="shiki-token-function"> charset</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"UTF-8"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">meta</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"viewport"</span><span class="shiki-token-function"> content</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width=device-width, initial-scale=1.0"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">title</span><span class="shiki-foreground">>EN-CSS Quick Start&#x3C;/</span><span class="shiki-token-string-expression">title</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- EN-CSS Standard preset --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">link</span><span class="shiki-token-function"> rel</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"stylesheet"</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"https://cdn.jsdelivr.net/npm/@en32/en-css/dist/presets/en-preset-standard.min.css"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">head</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">body</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Container --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-container"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- Card --></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Welcome to EN-CSS&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>A modern CSS framework with zero JavaScript required.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        </span></span>
<span class="line"><span class="shiki-token-comment">        &#x3C;!-- Buttons --></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-foreground">>Get Started&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline"</span><span class="shiki-foreground">>Learn More&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">body</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">html</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:m,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-gap-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-foreground">>Primary&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline"</span><span class="shiki-foreground">>Outline&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--danger"</span><span class="shiki-foreground">>Danger&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`Button`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:g,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Card content here&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`Card`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:v,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-alert en-alert--success"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Success message!</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`Alert`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:b,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid en-gap-4"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 200px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">>Item 1&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">>Item 2&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">>Item 3&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`Grid Layout`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:S,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--align-center en-gap-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-foreground">>Small&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">>Taller item&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster en-cluster--align-end"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge"</span><span class="shiki-foreground">>Tag&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-foreground">>Action&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`Alignment`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:w,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('myModal')</span><span class="shiki-token-function">.showModal</span><span class="shiki-token-string-expression">()"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Open Modal</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"myModal"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-modal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-modal__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-modal__title"</span><span class="shiki-foreground">>Modal Title&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-modal__close-icon"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.closest</span><span class="shiki-token-string-expression">('dialog')</span><span class="shiki-token-function">.close</span><span class="shiki-token-string-expression">()"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-modal__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Modal content goes here.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-modal__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.closest</span><span class="shiki-token-string-expression">('dialog')</span><span class="shiki-token-function">.close</span><span class="shiki-token-string-expression">()"</span><span class="shiki-foreground">>Close&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-foreground">>Save&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">dialog</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`Modal`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:{__name:`10`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=T,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;!</span><span class="shiki-token-string-expression">DOCTYPE</span><span class="shiki-token-function"> html</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">html</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">head</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">meta</span><span class="shiki-token-function"> charset</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"UTF-8"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">meta</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"viewport"</span><span class="shiki-token-function"> content</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width=device-width, initial-scale=1.0"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">title</span><span class="shiki-foreground">>Dashboard - EN-CSS&#x3C;/</span><span class="shiki-token-string-expression">title</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">link</span><span class="shiki-token-function"> rel</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"stylesheet"</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"https://cdn.jsdelivr.net/npm/@en32/en-css/dist/presets/en-preset-standard.min.css"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">head</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">body</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Navbar --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-navbar"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-navbar__brand"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>My Dashboard&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-navbar__nav"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-navbar__link en-navbar__link--active"</span><span class="shiki-foreground">>Home&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-navbar__link"</span><span class="shiki-foreground">>Analytics&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-navbar__link"</span><span class="shiki-foreground">>Settings&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Main Content --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-container"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-block: var(--en-space-6);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- Stats Grid --></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid en-gap-4 en-mb-6"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 250px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text--muted"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0;"</span><span class="shiki-foreground">>Total Users&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0.5rem 0 0 0;"</span><span class="shiki-foreground">>1,234&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>+12%&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text--muted"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0;"</span><span class="shiki-foreground">>Revenue&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0.5rem 0 0 0;"</span><span class="shiki-foreground">>$56.7K&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--danger"</span><span class="shiki-foreground">>-3%&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text--muted"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0;"</span><span class="shiki-foreground">>Conversions&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">h2</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0.5rem 0 0 0;"</span><span class="shiki-foreground">>23.5%&#x3C;/</span><span class="shiki-token-string-expression">h2</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>+5%&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- Recent Activity --></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Recent Activity&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-wrapper"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>User&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Action&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Date&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Created account&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Complete&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2 hours ago&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jane Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Updated profile&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--info"</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>5 hours ago&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Deleted post&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--danger"</span><span class="shiki-foreground">>Failed&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>1 day ago&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">body</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">html</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`Dashboard`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">html</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">  data-density</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"compact"</span></span>
<span class="line"><span class="shiki-token-function">  data-type-scale</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lg"</span></span>
<span class="line"><span class="shiki-token-function">  data-radius</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"pill"</span></span>
<span class="line"><span class="shiki-token-function">  data-accent</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"teal"</span></span>
<span class="line"><span class="shiki-token-function">  data-elevation</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"raised"</span></span>
<span class="line"><span class="shiki-token-function">  data-motion</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reduced"</span></span>
<span class="line"><span class="shiki-token-function">  data-contrast</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"more"</span></span>
<span class="line"><span class="shiki-token-function">  data-font</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"humanist"</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">section</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-py-section"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-container"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">article</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card en-p-inset"</span><span class="shiki-foreground">>…&#x3C;/</span><span class="shiki-token-string-expression">article</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">section</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:12,lang:`html`,injectKind:null,editable:!1,source:null}},D=[{id:`en-css-quick-start-guide`,text:`EN-CSS Quick Start Guide`,level:1},{id:`1-installation`,text:`1️⃣ Installation`,level:2},{id:`via-cdn-fastest`,text:`Via CDN (Fastest)`,level:3},{id:`via-npm`,text:`Via NPM`,level:3},{id:`2-choose-your-bundle`,text:`2️⃣ Choose Your Bundle`,level:2},{id:`pick-a-path`,text:`Pick a path`,level:3},{id:`3-basic-example`,text:`3️⃣ Basic Example`,level:2},{id:`4-common-components`,text:`4️⃣ Common Components`,level:2},{id:`button`,text:`Button`,level:3},{id:`card`,text:`Card`,level:3},{id:`alert`,text:`Alert`,level:3},{id:`grid-layout`,text:`Grid Layout`,level:3},{id:`alignment`,text:`Alignment`,level:3},{id:`modal-dialog`,text:`Modal (Dialog)`,level:3},{id:`-next-steps`,text:`📚 Next Steps`,level:2},{id:`-full-example-dashboard`,text:`🚀 Full Example: Dashboard`,level:2},{id:`-customize-appearance-with-data--attributes`,text:"🎨 Customize Appearance with `data-*` Attributes",level:2},{id:`-responsive-spacing`,text:`📐 Responsive Spacing`,level:2},{id:`-tips`,text:`💡 Tips`,level:2},{id:`-need-help`,text:`🆘 Need Help?`,level:2}],O=[{id:`en-css-quick-start-guide`,text:`EN-CSS Quick Start Guide`,level:1,children:[{id:`1-installation`,text:`1️⃣ Installation`,level:2,children:[{id:`via-cdn-fastest`,text:`Via CDN (Fastest)`,level:3,children:[]},{id:`via-npm`,text:`Via NPM`,level:3,children:[]}]},{id:`2-choose-your-bundle`,text:`2️⃣ Choose Your Bundle`,level:2,children:[{id:`pick-a-path`,text:`Pick a path`,level:3,children:[]}]},{id:`3-basic-example`,text:`3️⃣ Basic Example`,level:2,children:[]},{id:`4-common-components`,text:`4️⃣ Common Components`,level:2,children:[{id:`button`,text:`Button`,level:3,children:[]},{id:`card`,text:`Card`,level:3,children:[]},{id:`alert`,text:`Alert`,level:3,children:[]},{id:`grid-layout`,text:`Grid Layout`,level:3,children:[]},{id:`alignment`,text:`Alignment`,level:3,children:[]},{id:`modal-dialog`,text:`Modal (Dialog)`,level:3,children:[]}]},{id:`-next-steps`,text:`📚 Next Steps`,level:2,children:[]},{id:`-full-example-dashboard`,text:`🚀 Full Example: Dashboard`,level:2,children:[]},{id:`-customize-appearance-with-data--attributes`,text:"🎨 Customize Appearance with `data-*` Attributes",level:2,children:[]},{id:`-responsive-spacing`,text:`📐 Responsive Spacing`,level:2,children:[]},{id:`-tips`,text:`💡 Tips`,level:2,children:[]},{id:`-need-help`,text:`🆘 Need Help?`,level:2,children:[]}]}],k={css:[],js:[],cleanup:[]},A=n({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>l(`div`,{class:n},[e.meta.isLive?l(u,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:l(s,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),j=n({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/QUICKSTART.md`,setup(){r(`vlm-toc`,{flat:D,tree:O}),d(()=>f(D,O)),c(()=>f([],[]));let e=i(k);return r(`vlm-inject`,e),d(()=>e.mount()),a(()=>e.beforeUnmount()),c(()=>e.unmounted()),()=>l(`div`,{class:`vlm-page`},[l(`div`,{class:`vlm-content`},[l(`div`,{class:`vlm-md`,innerHTML:`<h1 id="en-css-quick-start-guide">EN-CSS Quick Start Guide<a class="header-link" href="#en-css-quick-start-guide" title="Link to this heading"></a></h1>
<p>Get started with EN-CSS in under 2 minutes.</p>
<h2 id="1-installation">1️⃣ Installation<a class="header-link" href="#1-installation" title="Link to this heading"></a></h2>
<h3 id="via-cdn-fastest">Via CDN (Fastest)<a class="header-link" href="#via-cdn-fastest" title="Link to this heading"></a></h3>
<p>`}),l(A,{key:0,meta:E[0]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="via-npm">Via NPM<a class="header-link" href="#via-npm" title="Link to this heading"></a></h3>
<p>`}),l(A,{key:1,meta:E[1]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),l(A,{key:2,meta:E[2]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="2-choose-your-bundle">2️⃣ Choose Your Bundle<a class="header-link" href="#2-choose-your-bundle" title="Link to this heading"></a></h2>
<!-- en:sizes:start -->
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Bundle</th>
<th>What it is</th>
<th>Minified</th>
<th>Gzip</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>en.css</code></td>
<td>Basic set: foundation, basic form controls, basic components, core utilities</td>
<td>178.0 KB</td>
<td>27.3 KB</td>
</tr>
<tr>
<td><code>en-extra.css</code></td>
<td>Full set: basic + every extended component/form control + 16/24 grids + scale tokens + extra utilities</td>
<td>560.7 KB</td>
<td>86.8 KB</td>
</tr>
<tr>
<td><code>en-preset-core.css</code></td>
<td>Foundation only: reset, tokens, base, theme, forced-colors</td>
<td>21.6 KB</td>
<td>4.8 KB</td>
</tr>
<tr>
<td><code>en-preset-lite.css</code></td>
<td>Core + layout + basic form controls + basic components + core utilities</td>
<td>185.5 KB</td>
<td>28.2 KB</td>
</tr>
<tr>
<td><code>en-preset-standard.css</code></td>
<td>Alias of en.css + extended form controls (incl. Choice card, Swatch) + Toast + Avatar</td>
<td>233.2 KB</td>
<td>35.5 KB</td>
</tr>
<tr>
<td><code>en-preset-nano.css</code></td>
<td>Core + minimal layout (container, stack, cluster, grid) + Button + Badge</td>
<td>37.5 KB</td>
<td>7.0 KB</td>
</tr>
<tr>
<td><code>en-preset-bare.css</code></td>
<td>Core + layout + core utilities, no components</td>
<td>50.1 KB</td>
<td>9.7 KB</td>
</tr>
<tr>
<td><code>en-preset-forms.css</code></td>
<td>Core + basic and extended form controls (incl. Choice card, Swatch) + Button, Alert, Callout, Progress, Stepper</td>
<td>112.4 KB</td>
<td>17.6 KB</td>
</tr>
<tr>
<td><code>en-preset-docs.css</code></td>
<td>Core + layout primitives + docs components (Prose, Code, TOC, Steps, Tree, Sidebar menu, Footer, Skip link, Tabs, Callout, Kbd, Breadcrumb, Descriptions)</td>
<td>97.3 KB</td>
<td>17.1 KB</td>
</tr>
<tr>
<td><code>en-preset-app.css</code></td>
<td>Standard + layout primitives + App shell, Sidebar menu, Command palette, Advanced table, Stat card, Context menu, Popover (incl. hover card), Split button, Sheet, Combobox, Filter bar, Result, Comment, Tour</td>
<td>319.5 KB</td>
<td>48.0 KB</td>
</tr>
<tr>
<td><code>en-preset-data.css</code></td>
<td>Standard + layout primitives + Advanced table, Kanban, Calendar, Tree, Stat card, Chart, Meter, Progress ring, Heatmap, Org chart, Filter bar, Feed</td>
<td>310.2 KB</td>
<td>47.3 KB</td>
</tr>
<tr>
<td><code>en-preset-marketing.css</code></td>
<td>Lite + layout primitives + Hero, Pricing, Auth card, Quote, Carousel, Gallery, Mega menu, Timeline, Banner, Footer, Skip link, Feature, Testimonial, Logo cloud, CTA, Countdown + text styles and shimmer</td>
<td>250.5 KB</td>
<td>39.5 KB</td>
</tr>
<tr>
<td><code>en-preset-mobile.css</code></td>
<td>Lite + layout primitives + Bottom navigation, Sheet, FAB, Chat, Dot loader, Skip link + 44px touch targets on coarse pointers</td>
<td>217.0 KB</td>
<td>33.9 KB</td>
</tr>
<tr>
<td><code>en-preset-extended.css</code></td>
<td>Add-on: every extended component (use on top of lite or standard)</td>
<td>248.9 KB</td>
<td>40.3 KB</td>
</tr>
<tr>
<td><code>en-preset-a11y.css</code></td>
<td>Add-on: prefers-contrast, thick focus ring, motion off for reduced-motion users, reduced transparency, extended forced-colors</td>
<td>3.3 KB</td>
<td>1.3 KB</td>
</tr>
<tr>
<td><code>en-preset-print.css</code></td>
<td>Add-on: @media print for invoices, reports and articles (hides chrome, page breaks, table headers, link URLs)</td>
<td>4.2 KB</td>
<td>1.8 KB</td>
</tr>
</tbody>
</table>
</div><p><em>Sizes measured with Baseline 2025 targets (chrome 141, edge 141, firefox 145, safari 26.2). Generated from <code>src/presets/manifest.json</code> by <code>npm run docs</code>.</em></p>
<!-- en:sizes:end -->
<p><strong>Not sure?</strong> → Start with <code>en-preset-standard.min.css</code>, or <code>en.min.css</code> for the basic set.</p>
<h3 id="pick-a-path">Pick a path<a class="header-link" href="#pick-a-path" title="Link to this heading"></a></h3>
<pre><code> ┌─ Quick ──── en.css (basic)  or  en-extra.css (full)
 ├─ Preset ─── en-preset-{core|nano|bare|lite|standard|forms|docs|…}
 └─ Build ──── en-preset-core  +  @import the extended components you need, one by one
</code></pre>
<p>Presets are only <em>download shortcuts</em>: every component stays importable as a single file, so you are never locked into a preset.</p>
<p>Tiny page or embed? <code>en-preset-nano</code>. Multi-step forms? <code>en-preset-forms</code>. Your own components? <code>en-preset-bare</code>. Documentation site? <code>en-preset-docs</code>.</p>
<h2 id="3-basic-example">3️⃣ Basic Example<a class="header-link" href="#3-basic-example" title="Link to this heading"></a></h2>
<p>`}),l(A,{key:3,meta:E[3]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="4-common-components">4️⃣ Common Components<a class="header-link" href="#4-common-components" title="Link to this heading"></a></h2>
<h3 id="button">Button<a class="header-link" href="#button" title="Link to this heading"></a></h3>
<p>`}),l(A,{key:4,meta:E[4]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Note</strong>: Buttons use solid color slots with WCAG AA compliant foreground colors automatically.</p>
<h3 id="card">Card<a class="header-link" href="#card" title="Link to this heading"></a></h3>
<p>`}),l(A,{key:5,meta:E[5]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="alert">Alert<a class="header-link" href="#alert" title="Link to this heading"></a></h3>
<p>`}),l(A,{key:6,meta:E[6]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="grid-layout">Grid Layout<a class="header-link" href="#grid-layout" title="Link to this heading"></a></h3>
<p>`}),l(A,{key:7,meta:E[7]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="alignment">Alignment<a class="header-link" href="#alignment" title="Link to this heading"></a></h3>
<p>Grid, flex and cluster items are aligned on the cross axis with the <code>--align-*</code> modifiers (<code>start</code>, <code>center</code>, <code>end</code>, <code>baseline</code>, <code>stretch</code>):</p>
<p>`}),l(A,{key:8,meta:E[8]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>For any other flex or grid container, use the utilities <code>.en-items-*</code> (<code>align-items</code>) and <code>.en-justify-*</code> (<code>justify-content</code>: <code>start</code>, <code>center</code>, <code>end</code>, <code>between</code>). They live in the last cascade layer, so they also override a component’s own alignment.</p>
<h3 id="modal-dialog">Modal (Dialog)<a class="header-link" href="#modal-dialog" title="Link to this heading"></a></h3>
<p>`}),l(A,{key:9,meta:E[9]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="-next-steps">📚 Next Steps<a class="header-link" href="#-next-steps" title="Link to this heading"></a></h2>
<ul>
<li><strong><a href="./docs/getting-started">Getting Started</a></strong> - Full installation guide with framework integration</li>
<li><strong><a href="./docs/tokens">Design Tokens</a></strong> - Color system, spacing scale, and customization</li>
<li><strong><a href="./docs/class-list">Class Reference</a></strong> - Complete list of all CSS classes</li>
<li><strong><a href="./PRESETS">PRESETS.md</a></strong> - Detailed guide on choosing the right bundle</li>
<li><strong><a href="./EXPORTS">EXPORTS.md</a></strong> - Every import path for custom builds</li>
<li><strong><a href="./BUILD">BUILD.md</a></strong> - Build from source</li>
</ul>
<h2 id="-full-example-dashboard">🚀 Full Example: Dashboard<a class="header-link" href="#-full-example-dashboard" title="Link to this heading"></a></h2>
<p>`}),l(A,{key:10,meta:E[10]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="-customize-appearance-with-data--attributes">🎨 Customize Appearance with <code>data-*</code> Attributes<a class="header-link" href="#-customize-appearance-with-data--attributes" title="Link to this heading"></a></h2>
<p>With <code>en-extra.css</code> (includes scale tokens + appearance presets):</p>
<p>`}),l(A,{key:11,meta:E[11]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Available attributes</strong>:</p>
<ul>
<li><code>data-density</code> → compact | comfortable | spacious (spacing scale)</li>
<li><code>data-type-scale</code> → sm | md | lg (font size scale)</li>
<li><code>data-radius</code> → sharp | soft | pill (corner radius)</li>
<li><code>data-elevation</code> → flat | subtle | raised (shadow depth)</li>
<li><code>data-motion</code> → full | reduced | none (animation speed)</li>
<li><code>data-contrast</code> → normal | more (border/text contrast)</li>
<li><code>data-font</code> → system | humanist | serif | mono (font family)</li>
<li><code>data-accent</code> → blue | violet | teal | amber | rose (primary color)</li>
</ul>
<p>See <a href="./PRESETS#appearance-presets">PRESETS.md</a> for details.</p>
<h2 id="-responsive-spacing">📐 Responsive Spacing<a class="header-link" href="#-responsive-spacing" title="Link to this heading"></a></h2>
<p>Four role tokens adapt to the screen without breakpoint suffixes (in <code>en.css</code> and <code>en-extra.css</code>):</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Token</th>
<th>Role</th>
<th>Classes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>--en-space-gutter</code></td>
<td>page inline padding</td>
<td><code>en-px-gutter</code>, <code>en-mx-gutter</code>, …</td>
</tr>
<tr>
<td><code>--en-space-section</code></td>
<td>vertical space between sections</td>
<td><code>en-py-section</code>, <code>en-mt-section</code>, …</td>
</tr>
<tr>
<td><code>--en-space-inset</code></td>
<td>padding inside cards and panels</td>
<td><code>en-p-inset</code>, <code>en-px-inset</code>, …</td>
</tr>
<tr>
<td><code>--en-space-items</code></td>
<td>gap between flex/grid items</td>
<td><code>en-gap-items</code>, <code>en-gap-x-items</code>, …</td>
</tr>
</tbody>
</table>
</div><p><code>.en-container</code> and <code>.en-grid</code> follow the tokens automatically (gutter 8px on phones up to 48px at 1280px):</p>
<p>`}),l(A,{key:12,meta:E[12]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>With <code>en-extra.css</code>, per-breakpoint (<code>en-px-4 en-px-6-sm en-px-8-md</code>), fluid (<code>en-py-fluid-lg</code>), negative-margin (<code>en--mx-gutter</code> to bleed to the screen edge), and between-children (<code>en-space-y-4</code>) utilities are also available. Avoid static <code>en-px-6</code>/<code>-8</code>/<code>-10</code> without a breakpoint on small screens. Override a token in plain CSS, e.g. <code>:root { --en-space-gutter: 1rem; }</code>.</p>
<h2 id="-tips">💡 Tips<a class="header-link" href="#-tips" title="Link to this heading"></a></h2>
<ol>
<li><strong>Start small</strong>: Use <code>en-preset-core.css</code> or <code>en-preset-lite.css</code>, add components as needed</li>
<li><strong>Use utilities</strong>: EN-CSS includes spacing (with responsive role tokens), display, alignment, and flex utilities</li>
<li><strong>Customize with CSS variables</strong>: Override design tokens with <code>--en-*</code> variables</li>
<li><strong>Check docs</strong>: See <code>/docs/</code> for all available components</li>
</ol>
<h2 id="-need-help">🆘 Need Help?<a class="header-link" href="#-need-help" title="Link to this heading"></a></h2>
<ul>
<li><strong>Getting Started</strong>: <a href="./docs/getting-started">docs/getting-started.md</a></li>
<li><strong>Design Tokens</strong>: <a href="./docs/tokens">docs/tokens.md</a></li>
<li><strong>Class Reference</strong>: <a href="./docs/class-list">docs/class-list.md</a></li>
<li><strong>Component docs</strong>: Browse <code>/docs/</code> folder for individual component guides</li>
<li><strong>Build guide</strong>: <a href="./BUILD">BUILD.md</a></li>
</ul>
<hr>
<p><strong>Ready to build?</strong> Start with <code>en-preset-standard.min.css</code> and explore the docs! 🎉</p>
`})]),null])}}),M={title:`EN-CSS Quick Start Guide`,description:`Get started with EN-CSS in under 2 minutes.`},N=j;export{N as default,M as meta};