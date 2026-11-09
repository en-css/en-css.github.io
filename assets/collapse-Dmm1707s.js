import{I as e,R as t,Tt as n,W as r,at as i,c as a,ct as o,et as s,h as c,it as l,n as u,nt as d,q as f,r as p,tt as m,u as h}from"./components-DGWjtEwO.js";var g=`<div class="en-collapse">
  <input type="checkbox" id="collapse1" hidden>
  <label class="en-collapse__trigger" for="collapse1">Show advanced options</label>
  <div class="en-collapse__content">
    <div>
      <p>Hidden content that can be toggled. Use this for advanced settings or optional information that doesn't need to be visible by default.</p>
      <button class="en-btn en-btn--sm">Apply Settings</button>
    </div>
  </div>
</div>`,_={__name:`0`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=g,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},v=`<div class="en-collapse">
  <input type="checkbox" id="collapse2" hidden checked>
  <label class="en-collapse__trigger" for="collapse2">Account information</label>
  <div class="en-collapse__content">
    <div>
      <p><strong>Email:</strong> user@example.com</p>
      <p><strong>Member since:</strong> January 2024</p>
      <p><strong>Plan:</strong> Premium</p>
    </div>
  </div>
</div>`,y={__name:`1`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=v,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},b=`<div class="en-card">
  <div class="en-card__body">
    <h3 style="margin-block-start: 0;">Product Search</h3>
    
    <div style="margin-block-end: var(--en-space-3);">
      <label style="display: block; margin-block-end: var(--en-space-1); font-weight: 500;">Category</label>
      <select class="en-input">
        <option>All Categories</option>
        <option>Electronics</option>
        <option>Clothing</option>
      </select>
    </div>
    
    <div class="en-collapse">
      <input type="checkbox" id="filters" hidden>
      <label class="en-collapse__trigger" for="filters">More filters</label>
      <div class="en-collapse__content">
        <div style="padding-block-start: var(--en-space-3);">
          <div style="margin-block-end: var(--en-space-3);">
            <label style="display: block; margin-block-end: var(--en-space-1); font-weight: 500;">Price Range</label>
            <input type="range" style="width: 100%;">
          </div>
          
          <div style="margin-block-end: var(--en-space-3);">
            <label style="display: block; margin-block-end: var(--en-space-1); font-weight: 500;">Rating</label>
            <select class="en-input">
              <option>All Ratings</option>
              <option>4+ Stars</option>
              <option>3+ Stars</option>
            </select>
          </div>
          
          <div>
            <label style="display: block; margin-block-end: var(--en-space-1); font-weight: 500;">Brand</label>
            <div class="en-flex" style="--en-direction: column; --en-gap: var(--en-space-1);">
              <label style="font-weight: normal;"><input type="checkbox"> Brand A</label>
              <label style="font-weight: normal;"><input type="checkbox"> Brand B</label>
              <label style="font-weight: normal;"><input type="checkbox"> Brand C</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,x={__name:`2`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=b,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},S=`<div class="en-card">
  <div class="en-card__body">
    <h3 style="margin-block-start: 0;">Settings</h3>
    
    <div class="en-flex" style="--en-direction: column; --en-gap: var(--en-space-3); margin-block-start: var(--en-space-3);">
      <div class="en-collapse">
        <input type="checkbox" id="section1" hidden checked>
        <label class="en-collapse__trigger" for="section1">Account settings</label>
        <div class="en-collapse__content">
          <div style="padding-block-start: var(--en-space-2);">
            <p>Manage your account preferences and profile information.</p>
            <button class="en-btn en-btn--sm en-btn--outline">Edit Profile</button>
          </div>
        </div>
      </div>
      
      <div class="en-collapse">
        <input type="checkbox" id="section2" hidden>
        <label class="en-collapse__trigger" for="section2">Privacy settings</label>
        <div class="en-collapse__content">
          <div style="padding-block-start: var(--en-space-2);">
            <p>Control your privacy and data sharing preferences.</p>
            <label style="display: flex; align-items: center; gap: var(--en-space-2);">
              <input type="checkbox" checked>
              <span>Make profile public</span>
            </label>
          </div>
        </div>
      </div>
      
      <div class="en-collapse">
        <input type="checkbox" id="section3" hidden>
        <label class="en-collapse__trigger" for="section3">Notification settings</label>
        <div class="en-collapse__content">
          <div style="padding-block-start: var(--en-space-2);">
            <p>Customize how and when you receive notifications.</p>
            <label style="display: flex; align-items: center; gap: var(--en-space-2);">
              <input type="checkbox" checked>
              <span>Email notifications</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,C={__name:`3`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},w=`<div class="en-card" style="max-inline-size: 280px;">
  <div class="en-card__body">
    <div class="en-flex" style="--en-direction: column; --en-gap: var(--en-space-2);">
      <a href="#" style="padding: var(--en-space-2); text-decoration: none; border-radius: var(--en-radius-md);">
        Home
      </a>
      
      <div class="en-collapse">
        <input type="checkbox" id="nav-products" hidden checked>
        <label class="en-collapse__trigger" for="nav-products" style="padding: var(--en-space-2);">
          Products
        </label>
        <div class="en-collapse__content">
          <div>
            <div class="en-flex" style="--en-direction: column; --en-gap: var(--en-space-1); padding-inline-start: var(--en-space-4);">
              <a href="#" style="padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);">
                All Products
              </a>
              <a href="#" style="padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);">
                Featured
              </a>
              <a href="#" style="padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);">
                New Arrivals
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="en-collapse">
        <input type="checkbox" id="nav-resources" hidden>
        <label class="en-collapse__trigger" for="nav-resources" style="padding: var(--en-space-2);">
          Resources
        </label>
        <div class="en-collapse__content">
          <div>
            <div class="en-flex" style="--en-direction: column; --en-gap: var(--en-space-1); padding-inline-start: var(--en-space-4);">
              <a href="#" style="padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);">
                Documentation
              </a>
              <a href="#" style="padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);">
                Blog
              </a>
              <a href="#" style="padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#" style="padding: var(--en-space-2); text-decoration: none; border-radius: var(--en-radius-md);">
        Contact
      </a>
    </div>
  </div>
</div>`,T={__name:`4`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},E=`<div class="en-collapse">
  <input type="checkbox" id="specs" hidden>
  <label class="en-collapse__trigger" for="specs">Technical specifications</label>
  <div class="en-collapse__content">
    <div style="padding-block-start: var(--en-space-2);">
      <table class="en-table" style="font-size: var(--en-text-sm);">
        <tbody>
          <tr>
            <td style="font-weight: 500;">Processor</td>
            <td>Intel Core i7-13700K</td>
          </tr>
          <tr>
            <td style="font-weight: 500;">RAM</td>
            <td>32GB DDR5</td>
          </tr>
          <tr>
            <td style="font-weight: 500;">Storage</td>
            <td>1TB NVMe SSD</td>
          </tr>
          <tr>
            <td style="font-weight: 500;">Graphics</td>
            <td>NVIDIA RTX 4070</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,D={__name:`5`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=E,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},O=`<div class="en-collapse">
  <input type="checkbox" id="parent" hidden>
  <label class="en-collapse__trigger" for="parent">Parent section</label>
  <div class="en-collapse__content">
    <div style="padding-block-start: var(--en-space-2);">
      <p>This is the parent content.</p>
      
      <div class="en-collapse" style="margin-block-start: var(--en-space-2); margin-inline-start: var(--en-space-3);">
        <input type="checkbox" id="child1" hidden>
        <label class="en-collapse__trigger" for="child1">Child section 1</label>
        <div class="en-collapse__content">
          <div style="padding-block-start: var(--en-space-2);">
            <p style="font-size: var(--en-text-sm);">Nested content inside child section 1.</p>
          </div>
        </div>
      </div>
      
      <div class="en-collapse" style="margin-block-start: var(--en-space-2); margin-inline-start: var(--en-space-3);">
        <input type="checkbox" id="child2" hidden>
        <label class="en-collapse__trigger" for="child2">Child section 2</label>
        <div class="en-collapse__content">
          <div style="padding-block-start: var(--en-space-2);">
            <p style="font-size: var(--en-text-sm);">Nested content inside child section 2.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,k={__name:`6`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=O,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},A=`<div class="en-flex" style="--en-direction: column; --en-gap: var(--en-space-3);">
  <div class="en-collapse">
    <input type="checkbox" id="state1" hidden>
    <label class="en-collapse__trigger" for="state1">Closed (unchecked)</label>
    <div class="en-collapse__content">
      <div>
        <p>Content is hidden by default.</p>
      </div>
    </div>
  </div>
  
  <div class="en-collapse">
    <input type="checkbox" id="state2" hidden checked>
    <label class="en-collapse__trigger" for="state2">Open (checked)</label>
    <div class="en-collapse__content">
      <div>
        <p>Content is visible when checkbox is checked.</p>
      </div>
    </div>
  </div>
  
  <div class="en-collapse">
    <input type="checkbox" id="state3" hidden disabled>
    <label class="en-collapse__trigger" for="state3" style="opacity: 0.5; cursor: not-allowed;">Disabled</label>
    <div class="en-collapse__content">
      <div>
        <p>This content cannot be toggled.</p>
      </div>
    </div>
  </div>
</div>`,j={__name:`7`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=A,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},M={};function N(t,n){let r=o(`Downloadable`);return l(),e(r,{"dev-url":`components/basic/components-collapse.css`})}var P={0:{component:_,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"collapse1"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"collapse1"</span><span class="shiki-foreground">>Show advanced options&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Hidden content that can be toggled. Use this for advanced settings or optional information that doesn't need to be visible by default.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Apply Settings&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Simple collapse with hidden checkbox`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"collapse2"</span><span class="shiki-token-function"> hidden</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"collapse2"</span><span class="shiki-foreground">>Account information&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Email:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">> user@example.com&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Member since:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">> January 2024&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Plan:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">> Premium&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Collapse open by default`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: 0;"</span><span class="shiki-foreground">>Product Search&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: block; margin-block-end: var(--en-space-1); font-weight: 500;"</span><span class="shiki-foreground">>Category&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>All Categories&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Electronics&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Clothing&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"filters"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"filters"</span><span class="shiki-foreground">>More filters&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-block-start: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: block; margin-block-end: var(--en-space-1); font-weight: 500;"</span><span class="shiki-foreground">>Price Range&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"range"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 100%;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          </span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: block; margin-block-end: var(--en-space-1); font-weight: 500;"</span><span class="shiki-foreground">>Rating&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>All Ratings&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>4+ Stars&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>3+ Stars&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          </span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: block; margin-block-end: var(--en-space-1); font-weight: 500;"</span><span class="shiki-foreground">>Brand&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-1);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-weight: normal;"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">> Brand A&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-weight: normal;"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">> Brand B&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-weight: normal;"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">> Brand C&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Collapsible advanced filters`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: 0;"</span><span class="shiki-foreground">>Settings&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-3); margin-block-start: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"section1"</span><span class="shiki-token-function"> hidden</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"section1"</span><span class="shiki-foreground">>Account settings&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-block-start: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Manage your account preferences and profile information.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm en-btn--outline"</span><span class="shiki-foreground">>Edit Profile&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"section2"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"section2"</span><span class="shiki-foreground">>Privacy settings&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-block-start: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Control your privacy and data sharing preferences.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: flex; align-items: center; gap: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Make profile public&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"section3"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"section3"</span><span class="shiki-foreground">>Notification settings&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-block-start: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Customize how and when you receive notifications.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: flex; align-items: center; gap: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Email notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Multiple collapse sections`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-inline-size: 280px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-2); text-decoration: none; border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Home</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"nav-products"</span><span class="shiki-token-function"> hidden</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"nav-products"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          Products</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-1); padding-inline-start: var(--en-space-4);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                All Products</span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                Featured</span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                New Arrivals</span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"nav-resources"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"nav-resources"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          Resources</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-1); padding-inline-start: var(--en-space-4);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                Documentation</span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                Blog</span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-2); text-decoration: none; font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                Support</span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-2); text-decoration: none; border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Contact</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Collapse in sidebar navigation`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"specs"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"specs"</span><span class="shiki-foreground">>Technical specifications&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-block-start: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-weight: 500;"</span><span class="shiki-foreground">>Processor&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Intel Core i7-13700K&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-weight: 500;"</span><span class="shiki-foreground">>RAM&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>32GB DDR5&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-weight: 500;"</span><span class="shiki-foreground">>Storage&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>1TB NVMe SSD&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-weight: 500;"</span><span class="shiki-foreground">>Graphics&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>NVIDIA RTX 4070&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Collapse with rich content`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:k,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"parent"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"parent"</span><span class="shiki-foreground">>Parent section&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-block-start: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>This is the parent content.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: var(--en-space-2); margin-inline-start: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"child1"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"child1"</span><span class="shiki-foreground">>Child section 1&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-block-start: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-size: var(--en-text-sm);"</span><span class="shiki-foreground">>Nested content inside child section 1.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: var(--en-space-2); margin-inline-start: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"child2"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"child2"</span><span class="shiki-foreground">>Child section 2&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-block-start: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-size: var(--en-text-sm);"</span><span class="shiki-foreground">>Nested content inside child section 2.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Nested collapsible sections`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"state1"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"state1"</span><span class="shiki-foreground">>Closed (unchecked)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Content is hidden by default.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"state2"</span><span class="shiki-token-function"> hidden</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"state2"</span><span class="shiki-foreground">>Open (checked)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Content is visible when checkbox is checked.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"state3"</span><span class="shiki-token-function"> hidden</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__trigger"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"state3"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"opacity: 0.5; cursor: not-allowed;"</span><span class="shiki-foreground">>Disabled&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-collapse__content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>This content cannot be toggled.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Checkbox states`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> checkbox</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> document</span><span class="shiki-token-function">.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'#collapse1'</span><span class="shiki-foreground">);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Toggle</span></span>
<span class="line"><span class="shiki-token-constant">checkbox</span><span class="shiki-foreground">.checked </span><span class="shiki-token-keyword">=</span><span class="shiki-token-keyword"> !</span><span class="shiki-token-constant">checkbox</span><span class="shiki-foreground">.checked;</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Open</span></span>
<span class="line"><span class="shiki-token-constant">checkbox</span><span class="shiki-foreground">.checked </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground">;</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Close</span></span>
<span class="line"><span class="shiki-token-constant">checkbox</span><span class="shiki-foreground">.checked </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> false</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:8,lang:`javascript`,injectKind:null,editable:!1,source:null},9:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">.en-collapse__content</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  display</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> grid</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  grid-template-rows</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 0</span><span class="shiki-token-keyword">fr</span><span class="shiki-foreground">;  </span><span class="shiki-token-comment">/* Collapsed */</span></span>
<span class="line"><span class="shiki-token-constant">  transition</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> grid-template-rows 300</span><span class="shiki-token-keyword">ms</span><span class="shiki-token-constant"> ease-out</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">.en-collapse</span><span class="shiki-token-string-expression"> input</span><span class="shiki-token-function">:checked</span><span class="shiki-token-keyword"> ~</span><span class="shiki-token-function"> .en-collapse__content</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  grid-template-rows</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">fr</span><span class="shiki-foreground">;  </span><span class="shiki-token-comment">/* Expanded */</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:9,lang:`css`,injectKind:null,editable:!1,source:null},10:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">.en-collapse__trigger::before</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  content</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> "▸"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  transition</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> rotate 200</span><span class="shiki-token-keyword">ms</span><span class="shiki-token-constant"> ease-out</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">.en-collapse</span><span class="shiki-token-string-expression"> input</span><span class="shiki-token-function">:checked</span><span class="shiki-token-keyword"> ~</span><span class="shiki-token-function"> .en-collapse__trigger::before</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  rotate</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 90</span><span class="shiki-token-keyword">deg</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:10,lang:`css`,injectKind:null,editable:!1,source:null},11:{component:c(M,[[`render`,N]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/basic/components-collapse.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:11,lang:`vue`,injectKind:null,editable:!1,source:null}},F=[{id:`collapse`,text:`Collapse`,level:1},{id:`basic-collapse`,text:`Basic Collapse`,level:2},{id:`default-open-state`,text:`Default Open State`,level:2},{id:`filter-panel`,text:`Filter Panel`,level:2},{id:`multiple-independent-sections`,text:`Multiple Independent Sections`,level:2},{id:`in-sidebar`,text:`In Sidebar`,level:2},{id:`rich-content`,text:`Rich Content`,level:2},{id:`nested-collapse`,text:`Nested Collapse`,level:2},{id:`states`,text:`States`,level:2},{id:`attributes`,text:`Attributes`,level:3},{id:`classes`,text:`Classes`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`comparison-collapse-vs-accordion-vs-toggle`,text:`Comparison: Collapse vs Accordion vs Toggle`,level:2},{id:`browser-support`,text:`Browser Support`,level:2},{id:`technical-details`,text:`Technical Details`,level:2},{id:`animation-technique`,text:`Animation Technique`,level:3},{id:`arrow-rotation`,text:`Arrow Rotation`,level:3},{id:`notes`,text:`Notes`,level:2},{id:`when-to-use`,text:`When to Use`,level:2}],I=[{id:`collapse`,text:`Collapse`,level:1,children:[{id:`basic-collapse`,text:`Basic Collapse`,level:2,children:[]},{id:`default-open-state`,text:`Default Open State`,level:2,children:[]},{id:`filter-panel`,text:`Filter Panel`,level:2,children:[]},{id:`multiple-independent-sections`,text:`Multiple Independent Sections`,level:2,children:[]},{id:`in-sidebar`,text:`In Sidebar`,level:2,children:[]},{id:`rich-content`,text:`Rich Content`,level:2,children:[]},{id:`nested-collapse`,text:`Nested Collapse`,level:2,children:[]},{id:`states`,text:`States`,level:2,children:[{id:`attributes`,text:`Attributes`,level:3,children:[]}]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`comparison-collapse-vs-accordion-vs-toggle`,text:`Comparison: Collapse vs Accordion vs Toggle`,level:2,children:[]},{id:`browser-support`,text:`Browser Support`,level:2,children:[]},{id:`technical-details`,text:`Technical Details`,level:2,children:[{id:`animation-technique`,text:`Animation Technique`,level:3,children:[]},{id:`arrow-rotation`,text:`Arrow Rotation`,level:3,children:[]}]},{id:`notes`,text:`Notes`,level:2,children:[]},{id:`when-to-use`,text:`When to Use`,level:2,children:[]}]}],L={css:[],js:[],cleanup:[]},R=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),z=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/basic/collapse.md`,setup(){i(`vlm-toc`,{flat:F,tree:I}),m(()=>h(F,I)),d(()=>h([],[]));let e=a(L);return i(`vlm-inject`,e),m(()=>e.mount()),s(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="collapse">Collapse<a class="header-link" href="#collapse" title="Link to this heading"></a></h1>
<p>Single show/hide section using a hidden checkbox. Pure CSS solution for toggling content visibility without native disclosure semantics.</p>
<h2 id="basic-collapse">Basic Collapse<a class="header-link" href="#basic-collapse" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:0,meta:P[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="default-open-state">Default Open State<a class="header-link" href="#default-open-state" title="Link to this heading"></a></h2>
<p>Add <code>checked</code> attribute to checkbox for default-open state.</p>
<p>`}),f(R,{key:1,meta:P[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="filter-panel">Filter Panel<a class="header-link" href="#filter-panel" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:2,meta:P[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="multiple-independent-sections">Multiple Independent Sections<a class="header-link" href="#multiple-independent-sections" title="Link to this heading"></a></h2>
<p>Multiple collapse sections can be open simultaneously (unlike accordion behavior).</p>
<p>`}),f(R,{key:3,meta:P[3]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="in-sidebar">In Sidebar<a class="header-link" href="#in-sidebar" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:4,meta:P[4]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="rich-content">Rich Content<a class="header-link" href="#rich-content" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:5,meta:P[5]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="nested-collapse">Nested Collapse<a class="header-link" href="#nested-collapse" title="Link to this heading"></a></h2>
<p>`}),f(R,{key:6,meta:P[6]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="states">States<a class="header-link" href="#states" title="Link to this heading"></a></h2>
<p>The collapse component uses native checkbox state, not CSS classes.</p>
<p>`}),f(R,{key:7,meta:P[7]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>hidden</code></td>
<td>boolean</td>
<td>Hides the checkbox from view (required)</td>
</tr>
<tr>
<td><code>checked</code></td>
<td>boolean</td>
<td>Content is visible when present</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>boolean</td>
<td>Prevents toggling (must style trigger manually)</td>
</tr>
</tbody>
</table>
</div><p>JavaScript can control state by setting checkbox properties:</p>
<p>`}),f(R,{key:8,meta:P[8]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>.en-collapse</code></td>
<td>Base collapse container</td>
</tr>
<tr>
<td><code>.en-collapse__trigger</code></td>
<td>Clickable label to toggle visibility</td>
</tr>
<tr>
<td><code>.en-collapse__content</code></td>
<td>Collapsible content wrapper with grid animation</td>
</tr>
</tbody>
</table>
</div><h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li><strong>Keyboard accessible</strong>: Native checkbox with label provides full keyboard support</li>
<li><strong>Space/Enter</strong>: Toggle when trigger label is focused</li>
<li><strong>Tab</strong>: Navigate between collapse triggers</li>
<li><strong>Screen readers</strong>: Hidden checkbox is still announced with label text</li>
<li><strong>Reduced motion</strong>: Respects <code>prefers-reduced-motion</code> for animations</li>
<li><strong>No ARIA required</strong>: Uses native form semantics</li>
</ul>
<p><strong>Best practices:</strong></p>
<ul>
<li>Use descriptive label text (e.g., “Show filters” not just “More”)</li>
<li>Don’t hide critical information in collapsed sections</li>
<li>Consider default-open state for important content</li>
<li>Provide visual indicator (arrow) for collapsible state</li>
</ul>
<h2 id="comparison-collapse-vs-accordion-vs-toggle">Comparison: Collapse vs Accordion vs Toggle<a class="header-link" href="#comparison-collapse-vs-accordion-vs-toggle" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Feature</th>
<th>Collapse</th>
<th>Accordion</th>
<th>Toggle</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Trigger visibility</strong></td>
<td>Label only</td>
<td>Summary (visible)</td>
<td>Checkbox visible</td>
</tr>
<tr>
<td><strong>Native element</strong></td>
<td>Hidden checkbox</td>
<td><code>&lt;details&gt;</code></td>
<td>Styled checkbox</td>
</tr>
<tr>
<td><strong>Semantic meaning</strong></td>
<td>None</td>
<td>Disclosure widget</td>
<td>Form control</td>
</tr>
<tr>
<td><strong>Multiple open</strong></td>
<td>Yes</td>
<td>Yes (unless scripted)</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Animation</strong></td>
<td>Grid trick</td>
<td>Grid trick</td>
<td>Grid trick + opacity</td>
</tr>
<tr>
<td><strong>Use case</strong></td>
<td>Filters, settings</td>
<td>FAQ, content sections</td>
<td>UI controls, preferences</td>
</tr>
</tbody>
</table>
</div><h2 id="browser-support">Browser Support<a class="header-link" href="#browser-support" title="Link to this heading"></a></h2>
<ul>
<li><strong>Grid-template-rows animation</strong>: All modern browsers (Baseline 2020+)</li>
<li><strong>Hidden checkbox</strong>: Universal support</li>
<li><strong>CSS transitions</strong>: Universal support</li>
</ul>
<h2 id="technical-details">Technical Details<a class="header-link" href="#technical-details" title="Link to this heading"></a></h2>
<h3 id="animation-technique">Animation Technique<a class="header-link" href="#animation-technique" title="Link to this heading"></a></h3>
<p>Uses the <code>grid-template-rows: 0fr → 1fr</code> technique for smooth height animation:</p>
<p>`}),f(R,{key:9,meta:P[9]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The inner <code>&lt;div&gt;</code> with <code>min-height: 0</code> allows the grid item to shrink below content height.</p>
<h3 id="arrow-rotation">Arrow Rotation<a class="header-link" href="#arrow-rotation" title="Link to this heading"></a></h3>
<p>The trigger arrow rotates 90° when open using the <code>rotate</code> property:</p>
<p>`}),f(R,{key:10,meta:P[10]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="notes">Notes<a class="header-link" href="#notes" title="Link to this heading"></a></h2>
<ul>
<li>Pure CSS solution using hidden checkbox and adjacent sibling selector</li>
<li>Smooth height animation without JavaScript</li>
<li>Arrow indicator (▸) rotates when expanded</li>
<li>Content wrapper <code>&lt;div&gt;</code> inside <code>.en-collapse__content</code> is required for grid animation</li>
<li>Each collapse needs unique <code>id</code> and matching <code>for</code> attribute</li>
<li>Multiple sections can be open simultaneously (independent state)</li>
<li>Add <code>checked</code> to checkbox for default-open state</li>
<li>Different from Accordion (semantic <code>&lt;details&gt;</code>) and Toggle (visible checkbox)</li>
</ul>
<h2 id="when-to-use">When to Use<a class="header-link" href="#when-to-use" title="Link to this heading"></a></h2>
<p><strong>Use Collapse when:</strong></p>
<ul>
<li>Need hidden checkbox without visible control</li>
<li>Building advanced filter panels</li>
<li>Toggling optional content (specs, details)</li>
<li>Sidebar navigation with collapsible sections</li>
<li>Settings panels with expandable groups</li>
</ul>
<p><strong>Use Accordion when:</strong></p>
<ul>
<li>FAQ or help content (semantic disclosure)</li>
<li>Multiple related sections</li>
<li>Need native browser support and semantics</li>
</ul>
<p><strong>Use Toggle when:</strong></p>
<ul>
<li>Visible checkbox control is appropriate</li>
<li>Building preference switches</li>
<li>Dynamic label text needed</li>
<li>Form-like UI controls</li>
</ul>
<p>`}),f(R,{key:11,meta:P[11]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),B={title:`Collapse`,description:`Single show/hide section using a hidden checkbox. Pure CSS solution for toggling content visibility without native disclosure semantics.`},V=z;export{V as default,B as meta};