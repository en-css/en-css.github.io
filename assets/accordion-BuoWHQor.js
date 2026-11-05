import{Et as e,I as t,R as n,W as r,at as i,ct as a,et as o,it as s,l as c,m as l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";var g=`<div class="en-accordion">
  <details class="en-accordion__item">
    <summary>What is EN-CSS?</summary>
    <div class="en-accordion__body">
      <p>EN-CSS is a modern, utility-first CSS framework designed for building beautiful web interfaces.</p>
    </div>
  </details>
  
  <details class="en-accordion__item">
    <summary>How do I install it?</summary>
    <div class="en-accordion__body">
      <p>You can install EN-CSS via npm or include it directly via CDN.</p>
    </div>
  </details>
  
  <details class="en-accordion__item">
    <summary>Is it free to use?</summary>
    <div class="en-accordion__body">
      <p>Yes, EN-CSS is completely free and open source.</p>
    </div>
  </details>
</div>`,_={__name:`0`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=g,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},v=`<div class="en-accordion">
  <details class="en-accordion__item" open>
    <summary>Section 1 (Open by default)</summary>
    <div class="en-accordion__body">
      <p>This section is open by default using the <code>open</code> attribute.</p>
    </div>
  </details>
  
  <details class="en-accordion__item">
    <summary>Section 2</summary>
    <div class="en-accordion__body">
      <p>This section starts collapsed and can be expanded by clicking.</p>
    </div>
  </details>
  
  <details class="en-accordion__item">
    <summary>Section 3</summary>
    <div class="en-accordion__body">
      <p>Multiple items can be open simultaneously.</p>
    </div>
  </details>
</div>`,y={__name:`1`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=v,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},b=`<div class="en-accordion">
  <details class="en-accordion__item">
    <summary>Product Features</summary>
    <div class="en-accordion__body">
      <ul>
        <li>Modern design system with design tokens</li>
        <li>Responsive by default with mobile-first approach</li>
        <li>Accessible components with WCAG AA compliance</li>
        <li>Automatic dark mode support via light-dark()</li>
        <li>No JavaScript required for core functionality</li>
      </ul>
    </div>
  </details>
  
  <details class="en-accordion__item">
    <summary>Pricing Plans</summary>
    <div class="en-accordion__body">
      <p><strong>Free Plan:</strong> $0/month - Perfect for personal projects</p>
      <p><strong>Pro Plan:</strong> $29/month - For professional developers</p>
      <p><strong>Enterprise:</strong> Custom pricing - For large organizations</p>
      <button class="en-btn en-btn--primary en-btn--sm">Get Started</button>
    </div>
  </details>
  
  <details class="en-accordion__item">
    <summary>Documentation & Support</summary>
    <div class="en-accordion__body">
      <p>Comprehensive documentation with live examples and interactive code editor.</p>
      <p>Community support via GitHub Discussions and Discord.</p>
      <a href="#" class="en-btn en-btn--outline en-btn--sm">View Docs</a>
    </div>
  </details>
</div>`,x={__name:`2`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=b,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},S=`<div class="en-accordion">
  <details class="en-accordion__item">
    <summary>Do I need JavaScript to use this component?</summary>
    <div class="en-accordion__body">
      <p>No! The accordion uses native HTML <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements, which provide built-in expand/collapse functionality without any JavaScript.</p>
    </div>
  </details>
  
  <details class="en-accordion__item">
    <summary>Can multiple panels be open at the same time?</summary>
    <div class="en-accordion__body">
      <p>Yes, multiple panels can be open simultaneously. Each <code>&lt;details&gt;</code> element operates independently. If you need "accordion" behavior where only one panel is open at a time, you'll need to add JavaScript to close other panels when one opens.</p>
    </div>
  </details>
  
  <details class="en-accordion__item">
    <summary>How do I customize the icon?</summary>
    <div class="en-accordion__body">
      <p>The icon is created with CSS <code>::after</code> pseudo-element on the <code>&lt;summary&gt;</code>. You can override the <code>content</code> property to use different Unicode characters or replace it with a background image.</p>
    </div>
  </details>
  
  <details class="en-accordion__item">
    <summary>Is it accessible?</summary>
    <div class="en-accordion__body">
      <p>Yes! Using native <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> provides built-in keyboard accessibility (Space/Enter to toggle) and proper ARIA semantics for screen readers.</p>
    </div>
  </details>
</div>`,C={__name:`3`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},w=`<div class="en-accordion">
  <details class="en-accordion__item">
    <summary>Collapsed item (default state)</summary>
    <div class="en-accordion__body">
      <p>This item is collapsed by default.</p>
    </div>
  </details>
  
  <details class="en-accordion__item" open>
    <summary>Expanded item (using [open] attribute)</summary>
    <div class="en-accordion__body">
      <p>This item is expanded using the <code>open</code> attribute.</p>
    </div>
  </details>
</div>`,T={__name:`4`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},E={};function D(e,n){let r=a(`Downloadable`);return s(),t(r,{"dev-url":`components/basic/components-accordion.css`})}var O={0:{component:_,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>What is EN-CSS?&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>EN-CSS is a modern, utility-first CSS framework designed for building beautiful web interfaces.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>How do I install it?&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>You can install EN-CSS via npm or include it directly via CDN.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Is it free to use?&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Yes, EN-CSS is completely free and open source.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Simple accordion with three items`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-token-function"> open</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Section 1 (Open by default)&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>This section is open by default using the &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>open&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> attribute.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Section 2&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>This section starts collapsed and can be expanded by clicking.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Section 3&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Multiple items can be open simultaneously.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Accordion with first item open`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Product Features&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Modern design system with design tokens&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Responsive by default with mobile-first approach&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Accessible components with WCAG AA compliance&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Automatic dark mode support via light-dark()&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>No JavaScript required for core functionality&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Pricing Plans&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Free Plan:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">> $0/month - Perfect for personal projects&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Pro Plan:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">> $29/month - For professional developers&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Enterprise:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">> Custom pricing - For large organizations&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--sm"</span><span class="shiki-foreground">>Get Started&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Documentation &#x26; Support&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Comprehensive documentation with live examples and interactive code editor.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Community support via GitHub Discussions and Discord.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline en-btn--sm"</span><span class="shiki-foreground">>View Docs&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Accordion with rich content`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Do I need JavaScript to use this component?&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>No! The accordion uses native HTML &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x26;lt;details&#x26;gt;&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> and &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x26;lt;summary&#x26;gt;&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> elements, which provide built-in expand/collapse functionality without any JavaScript.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Can multiple panels be open at the same time?&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Yes, multiple panels can be open simultaneously. Each &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x26;lt;details&#x26;gt;&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> element operates independently. If you need "accordion" behavior where only one panel is open at a time, you'll need to add JavaScript to close other panels when one opens.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>How do I customize the icon?&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>The icon is created with CSS &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>::after&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> pseudo-element on the &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x26;lt;summary&#x26;gt;&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>. You can override the &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>content&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> property to use different Unicode characters or replace it with a background image.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Is it accessible?&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Yes! Using native &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x26;lt;details&#x26;gt;&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> and &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x26;lt;summary&#x26;gt;&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> provides built-in keyboard accessibility (Space/Enter to toggle) and proper ARIA semantics for screen readers.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`FAQ accordion`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Collapsed item (default state)&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>This item is collapsed by default.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">details</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__item"</span><span class="shiki-token-function"> open</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">>Expanded item (using [open] attribute)&#x3C;/</span><span class="shiki-token-string-expression">summary</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-accordion__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>This item is expanded using the &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>open&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> attribute.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">details</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Accordion states with [open]`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">// Toggle accordion item</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> item</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> document</span><span class="shiki-token-function">.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-accordion__item'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">item</span><span class="shiki-token-function">.toggleAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'open'</span><span class="shiki-foreground">);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Open specific item</span></span>
<span class="line"><span class="shiki-token-constant">item</span><span class="shiki-token-function">.setAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'open'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> ''</span><span class="shiki-foreground">);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Close specific item</span></span>
<span class="line"><span class="shiki-token-constant">item</span><span class="shiki-token-function">.removeAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'open'</span><span class="shiki-foreground">);</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:5,lang:`javascript`,injectKind:null,editable:!1,source:null},6:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- Compact spacing --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">html</span><span class="shiki-token-function"> data-density</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"compact"</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">&#x3C;!-- Different accent color --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">html</span><span class="shiki-token-function"> data-accent</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"violet"</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:l(E,[[`render`,D]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/basic/components-accordion.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:7,lang:`vue`,injectKind:null,editable:!1,source:null}},k=[{id:`accordion`,text:`Accordion`,level:1},{id:`basic-accordion`,text:`Basic Accordion`,level:2},{id:`default-open-item`,text:`Default Open Item`,level:2},{id:`rich-content`,text:`Rich Content`,level:2},{id:`faq-pattern`,text:`FAQ Pattern`,level:2},{id:`states`,text:`States`,level:2},{id:`attributes`,text:`Attributes`,level:3},{id:`classes`,text:`Classes`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`browser-support`,text:`Browser Support`,level:2},{id:`notes`,text:`Notes`,level:2},{id:`customization`,text:`Customization`,level:2}],A=[{id:`accordion`,text:`Accordion`,level:1,children:[{id:`basic-accordion`,text:`Basic Accordion`,level:2,children:[]},{id:`default-open-item`,text:`Default Open Item`,level:2,children:[]},{id:`rich-content`,text:`Rich Content`,level:2,children:[]},{id:`faq-pattern`,text:`FAQ Pattern`,level:2,children:[]},{id:`states`,text:`States`,level:2,children:[{id:`attributes`,text:`Attributes`,level:3,children:[]}]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`browser-support`,text:`Browser Support`,level:2,children:[]},{id:`notes`,text:`Notes`,level:2,children:[]},{id:`customization`,text:`Customization`,level:2,children:[]}]}],j={css:[],js:[],cleanup:[]},M=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),N=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/basic/accordion.md`,setup(){i(`vlm-toc`,{flat:k,tree:A}),h(()=>c(k,A)),d(()=>c([],[]));let e=m(j);return i(`vlm-inject`,e),h(()=>e.mount()),o(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="accordion">Accordion<a class="header-link" href="#accordion" title="Link to this heading"></a></h1>
<p>Pure CSS accordion component using native <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements for collapsible content sections.</p>
<h2 id="basic-accordion">Basic Accordion<a class="header-link" href="#basic-accordion" title="Link to this heading"></a></h2>
<p>`}),f(M,{key:0,meta:O[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="default-open-item">Default Open Item<a class="header-link" href="#default-open-item" title="Link to this heading"></a></h2>
<p>Use the native <code>[open]</code> attribute to have an accordion item expanded by default.</p>
<p>`}),f(M,{key:1,meta:O[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="rich-content">Rich Content<a class="header-link" href="#rich-content" title="Link to this heading"></a></h2>
<p>Accordion body can contain any HTML content including lists, buttons, and other components.</p>
<p>`}),f(M,{key:2,meta:O[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="faq-pattern">FAQ Pattern<a class="header-link" href="#faq-pattern" title="Link to this heading"></a></h2>
<p>Common use case for frequently asked questions.</p>
<p>`}),f(M,{key:3,meta:O[3]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="states">States<a class="header-link" href="#states" title="Link to this heading"></a></h2>
<p>The accordion component uses native HTML state attributes, not CSS classes.</p>
<p>`}),f(M,{key:4,meta:O[4]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>[open]</code></td>
<td>boolean</td>
<td>Marks the accordion item as expanded</td>
</tr>
</tbody>
</table>
</div><p>JavaScript can control state by toggling this attribute:</p>
<p>`}),f(M,{key:5,meta:O[5]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>.en-accordion</code></td>
<td>Base accordion container with border and rounded corners</td>
</tr>
<tr>
<td><code>.en-accordion__item</code></td>
<td>Individual accordion section using <code>&lt;details&gt;</code> element</td>
</tr>
<tr>
<td><code>.en-accordion__body</code></td>
<td>Content wrapper inside each item, displayed when expanded</td>
</tr>
</tbody>
</table>
</div><h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li><strong>Keyboard accessible</strong>: Uses native <code>&lt;details&gt;</code> element with built-in keyboard support</li>
<li><strong>Space/Enter</strong>: Toggle accordion item</li>
<li><strong>Tab</strong>: Navigate between accordion items</li>
<li><strong>Screen readers</strong>: Native elements provide proper ARIA semantics automatically</li>
<li><strong>No JavaScript required</strong>: Core functionality works without scripts</li>
</ul>
<h2 id="browser-support">Browser Support<a class="header-link" href="#browser-support" title="Link to this heading"></a></h2>
<p>The <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements are supported in all modern browsers (Baseline 2020+). For older browsers, consider a JavaScript-based accordion alternative.</p>
<h2 id="notes">Notes<a class="header-link" href="#notes" title="Link to this heading"></a></h2>
<ul>
<li>Uses native <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> HTML elements</li>
<li>No JavaScript required for basic functionality</li>
<li>Chevron icon rotates to indicate open/closed state</li>
<li>Multiple panels can be open simultaneously by default</li>
<li>Add <code>open</code> attribute to any <code>&lt;details&gt;</code> element to default-open it</li>
<li>Content inside <code>__body</code> is muted color for visual hierarchy</li>
<li>Borders between items collapse when items are adjacent</li>
</ul>
<h2 id="customization">Customization<a class="header-link" href="#customization" title="Link to this heading"></a></h2>
<p>The accordion supports standard appearance presets:</p>
<p>`}),f(M,{key:6,meta:O[6]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The chevron icon and spacing automatically adapt to these presets.</p>
<p>`}),f(M,{key:7,meta:O[7]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),P={title:`Accordion`,description:`Pure CSS accordion component using native <details> and <summary> elements for collapsible content sections.`},F=N;export{F as default,P as meta};