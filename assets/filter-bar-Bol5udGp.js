import{I as e,R as t,Tt as n,W as r,at as i,c as a,ct as o,et as s,h as c,it as l,n as u,nt as d,q as f,r as p,tt as m,u as h}from"./components-DGWjtEwO.js";var g=`<form class="en-filter" role="search" aria-label="Filter products">
  <div class="en-search">
    <span class="en-search__icon" aria-hidden="true"></span>
    <input class="en-search__input" type="search" name="q" 
           placeholder="Search products…" aria-label="Search products">
  </div>

  <fieldset class="en-filter__group">
    <legend class="en-filter__legend">Category</legend>
    <label class="en-filter__chip">
      <input type="checkbox" name="category" value="electronics">
      Electronics
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="category" value="clothing">
      Clothing
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="category" value="home">
      Home & Garden
    </label>
  </fieldset>

  <label class="en-filter__sort">
    <span class="en-filter__legend">Sort by</span>
    <select class="en-filter__select" name="sort">
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
    </select>
  </label>

  <button type="reset" class="en-filter__clear">Clear filters</button>
  <output class="en-filter__summary" aria-live="polite">156 results</output>
</form>`,_={__name:`0`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=g,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},v=`<div class="en-search">
  <span class="en-search__icon" aria-hidden="true"></span>
  <input class="en-search__input" type="search" name="q" 
         placeholder="Search…" aria-label="Search">
</div>`,y={__name:`1`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=v,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},b=`<nav class="en-navbar">
  <div class="en-navbar__brand">Brand</div>
  <div class="en-search" style="flex: 0 1 20rem;">
    <span class="en-search__icon" aria-hidden="true"></span>
    <input class="en-search__input" type="search" 
           placeholder="Search site…" aria-label="Search site">
  </div>
</nav>`,x={__name:`2`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=b,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},S=`<form class="en-filter" role="search" aria-label="Filter orders">
  <div class="en-search">
    <span class="en-search__icon" aria-hidden="true"></span>
    <input class="en-search__input" type="search" 
           placeholder="Search orders…" aria-label="Search orders">
  </div>

  <fieldset class="en-filter__group">
    <legend class="en-filter__legend">Status</legend>
    <label class="en-filter__chip">
      <input type="checkbox" name="status" value="paid" checked>
      Paid
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="status" value="pending">
      Pending
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="status" value="cancelled">
      Cancelled
    </label>
  </fieldset>

  <fieldset class="en-filter__group">
    <legend class="en-filter__legend">Priority</legend>
    <label class="en-filter__chip">
      <input type="checkbox" name="priority" value="high">
      High
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="priority" value="normal" checked>
      Normal
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="priority" value="low">
      Low
    </label>
  </fieldset>

  <button type="reset" class="en-filter__clear">Clear</button>
  <output class="en-filter__summary" aria-live="polite">24 orders</output>
</form>`,C={__name:`3`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},w=`<form class="en-filter">
  <fieldset class="en-filter__group">
    <legend class="en-filter__legend">Time range</legend>
    <label class="en-filter__chip">
      <input type="radio" name="range" value="today" checked>
      Today
    </label>
    <label class="en-filter__chip">
      <input type="radio" name="range" value="week">
      This Week
    </label>
    <label class="en-filter__chip">
      <input type="radio" name="range" value="month">
      This Month
    </label>
    <label class="en-filter__chip">
      <input type="radio" name="range" value="year">
      This Year
    </label>
  </fieldset>
</form>`,T={__name:`4`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},E=`<form class="en-filter en-filter--inline" role="search" aria-label="Filter tasks">
  <div class="en-search">
    <span class="en-search__icon" aria-hidden="true"></span>
    <input class="en-search__input" type="search" 
           placeholder="Search tasks…" aria-label="Search tasks">
  </div>

  <fieldset class="en-filter__group">
    <legend class="en-filter__legend">Status</legend>
    <label class="en-filter__chip">
      <input type="checkbox" name="status" value="open" checked>
      Open
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="status" value="in-progress">
      In Progress
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="status" value="done">
      Done
    </label>
  </fieldset>

  <fieldset class="en-filter__group">
    <legend class="en-filter__legend">Assignee</legend>
    <label class="en-filter__chip">
      <input type="checkbox" name="assignee" value="me">
      Assigned to me
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="assignee" value="unassigned">
      Unassigned
    </label>
  </fieldset>

  <label class="en-filter__sort">
    <span class="en-filter__legend">Sort by</span>
    <select class="en-filter__select" name="sort">
      <option>Due date</option>
      <option>Priority</option>
      <option>Created</option>
    </select>
  </label>

  <button type="reset" class="en-filter__clear">Clear</button>
  <output class="en-filter__summary" aria-live="polite">18 tasks</output>
</form>`,D={__name:`5`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=E,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},O=`<form class="en-filter" role="search" aria-label="Filter articles">
  <div class="en-search">
    <span class="en-search__icon" aria-hidden="true"></span>
    <input class="en-search__input" type="search" 
           placeholder="Search articles…" aria-label="Search articles">
  </div>

  <fieldset class="en-filter__group">
    <legend style="position: static; width: auto; height: auto; margin: 0; padding: 0; overflow: visible; clip-path: none; white-space: normal; font-weight: 600; font-size: 0.875rem;">
      Category
    </legend>
    <label class="en-filter__chip">
      <input type="checkbox" name="category" value="tech">
      Technology
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="category" value="design">
      Design
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="category" value="business">
      Business
    </label>
  </fieldset>

  <label class="en-filter__sort">
    <span style="position: static; width: auto; height: auto; margin: 0 0.5rem 0 0; padding: 0; overflow: visible; clip-path: none; white-space: normal; font-weight: 600; font-size: 0.875rem;">
      Sort by
    </span>
    <select class="en-filter__select" name="sort">
      <option>Newest</option>
      <option>Oldest</option>
      <option>Popular</option>
    </select>
  </label>

  <button type="reset" class="en-filter__clear">Clear</button>
  <output class="en-filter__summary" aria-live="polite">42 articles</output>
</form>`,k={__name:`6`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=O,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},A=`<form class="en-filter">
  <fieldset class="en-filter__group">
    <legend class="en-filter__legend">Options</legend>
    <label class="en-filter__chip">
      <input type="checkbox" name="option" value="available" checked>
      Available
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="option" value="coming-soon" disabled>
      Coming Soon
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="option" value="discontinued" disabled>
      Discontinued
    </label>
  </fieldset>
</form>`,j={__name:`7`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=A,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},M=`<form class="en-filter" style="--en-search-width: 24rem;">
  <div class="en-search">
    <span class="en-search__icon" aria-hidden="true"></span>
    <input class="en-search__input" type="search" 
           placeholder="Search with wider box…" aria-label="Search">
  </div>

  <fieldset class="en-filter__group">
    <legend class="en-filter__legend">Filter</legend>
    <label class="en-filter__chip">
      <input type="checkbox" name="filter" value="active">
      Active
    </label>
    <label class="en-filter__chip">
      <input type="checkbox" name="filter" value="archived">
      Archived
    </label>
  </fieldset>

  <output class="en-filter__summary" aria-live="polite">All items</output>
</form>`,N={__name:`8`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=M,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},P=`<div>
  <form class="en-filter en-mb-4" role="search" aria-label="Filter users">
    <div class="en-search">
      <span class="en-search__icon" aria-hidden="true"></span>
      <input class="en-search__input" type="search" 
             placeholder="Search users…" aria-label="Search users">
    </div>

    <fieldset class="en-filter__group">
      <legend class="en-filter__legend">Role</legend>
      <label class="en-filter__chip">
        <input type="checkbox" name="role" value="admin">
        Admin
      </label>
      <label class="en-filter__chip">
        <input type="checkbox" name="role" value="editor">
        Editor
      </label>
      <label class="en-filter__chip">
        <input type="checkbox" name="role" value="viewer">
        Viewer
      </label>
    </fieldset>

    <label class="en-filter__sort">
      <span class="en-filter__legend">Sort by</span>
      <select class="en-filter__select" name="sort">
        <option>Name</option>
        <option>Email</option>
        <option>Last login</option>
      </select>
    </label>

    <button type="reset" class="en-filter__clear">Clear</button>
    <output class="en-filter__summary" aria-live="polite">48 users</output>
  </form>

  <table class="en-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>alice@example.com</td>
        <td>Admin</td>
        <td><span class="en-badge en-badge--success">Active</span></td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>bob@example.com</td>
        <td>Editor</td>
        <td><span class="en-badge en-badge--success">Active</span></td>
      </tr>
      <tr>
        <td>Carol White</td>
        <td>carol@example.com</td>
        <td>Viewer</td>
        <td><span class="en-badge">Inactive</span></td>
      </tr>
    </tbody>
  </table>
</div>`,F={__name:`9`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=P,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},I=`<div id="filter-demo">
  <form class="en-filter" role="search" aria-label="Filter items">
    <div class="en-search">
      <span class="en-search__icon" aria-hidden="true"></span>
      <input class="en-search__input" type="search" 
             placeholder="Search items…" aria-label="Search items">
    </div>

    <fieldset class="en-filter__group">
      <legend class="en-filter__legend">Type</legend>
      <label class="en-filter__chip">
        <input type="checkbox" name="type" value="document">
        Documents
      </label>
      <label class="en-filter__chip">
        <input type="checkbox" name="type" value="image">
        Images
      </label>
      <label class="en-filter__chip">
        <input type="checkbox" name="type" value="video">
        Videos
      </label>
    </fieldset>

    <button type="reset" class="en-filter__clear">Clear</button>
    <output class="en-filter__summary" aria-live="polite">12 items</output>
  </form>

  <div class="en-mt-4" style="color: var(--en-text-muted); font-size: 0.875rem;">
    Selected filters will appear here when implemented with JavaScript
  </div>
</div>`,L={__name:`10`,setup(e){let r=n(null);return m(()=>{r.value&&(r.value.innerHTML=I,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),s(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(l(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},R={};function z(t,n){let r=o(`Downloadable`);return l(),e(r,{"dev-url":`components/extended/components-filter-bar.css`})}var B={0:{component:_,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter products"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__icon"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"q"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search products…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search products"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Category&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"category"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"electronics"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Electronics</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"category"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"clothing"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Clothing</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"category"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"home"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Home &#x26; Garden</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__sort"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Sort by&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__select"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sort"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"newest"</span><span class="shiki-foreground">>Newest&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"oldest"</span><span class="shiki-foreground">>Oldest&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"price-low"</span><span class="shiki-foreground">>Price: Low to High&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"price-high"</span><span class="shiki-foreground">>Price: High to Low&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reset"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__clear"</span><span class="shiki-foreground">>Clear filters&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">output</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__summary"</span><span class="shiki-token-function"> aria-live</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"polite"</span><span class="shiki-foreground">>156 results&#x3C;/</span><span class="shiki-token-string-expression">output</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Complete filter bar`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__icon"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"q"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Standalone search box`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-navbar"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-navbar__brand"</span><span class="shiki-foreground">>Brand&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"flex: 0 1 20rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__icon"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search site…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search site"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Search in navbar`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter orders"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__icon"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search orders…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search orders"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"status"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"paid"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Paid</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"status"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"pending"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Pending</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"status"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"cancelled"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Cancelled</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Priority&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"priority"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"high"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      High</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"priority"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"normal"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Normal</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"priority"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"low"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Low</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reset"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__clear"</span><span class="shiki-foreground">>Clear&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">output</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__summary"</span><span class="shiki-token-function"> aria-live</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"polite"</span><span class="shiki-foreground">>24 orders&#x3C;/</span><span class="shiki-token-string-expression">output</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Multiple filter groups`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Time range&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"range"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"today"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Today</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"range"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"week"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      This Week</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"range"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"month"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      This Month</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"range"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"year"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      This Year</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Single choice with radios`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter en-filter--inline"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter tasks"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__icon"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search tasks…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search tasks"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"status"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"open"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Open</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"status"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"in-progress"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      In Progress</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"status"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"done"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Done</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Assignee&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"assignee"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"me"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Assigned to me</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"assignee"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"unassigned"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Unassigned</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__sort"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Sort by&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__select"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sort"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Due date&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Priority&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Created&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reset"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__clear"</span><span class="shiki-foreground">>Clear&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">output</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__summary"</span><span class="shiki-token-function"> aria-live</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"polite"</span><span class="shiki-foreground">>18 tasks&#x3C;/</span><span class="shiki-token-string-expression">output</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Inline filter bar with scroll`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:k,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter articles"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__icon"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search articles…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search articles"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: static; width: auto; height: auto; margin: 0; padding: 0; overflow: visible; clip-path: none; white-space: normal; font-weight: 600; font-size: 0.875rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Category</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"category"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tech"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Technology</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"category"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"design"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Design</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"category"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"business"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Business</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__sort"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: static; width: auto; height: auto; margin: 0 0.5rem 0 0; padding: 0; overflow: visible; clip-path: none; white-space: normal; font-weight: 600; font-size: 0.875rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Sort by</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__select"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sort"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Newest&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Oldest&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Popular&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reset"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__clear"</span><span class="shiki-foreground">>Clear&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">output</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__summary"</span><span class="shiki-token-function"> aria-live</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"polite"</span><span class="shiki-foreground">>42 articles&#x3C;/</span><span class="shiki-token-string-expression">output</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Filter with visible labels`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Options&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"available"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Available</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"coming-soon"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Coming Soon</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"discontinued"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Discontinued</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Disabled filter chips`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:N,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-search-width: 24rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__icon"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search with wider box…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Filter&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"filter"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"active"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Active</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"filter"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"archived"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Archived</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">output</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__summary"</span><span class="shiki-token-function"> aria-live</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"polite"</span><span class="shiki-foreground">>All items&#x3C;/</span><span class="shiki-token-string-expression">output</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Wide search box`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter en-mb-4"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter users"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__icon"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">             placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search users…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search users"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"role"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"admin"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Admin</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"role"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"editor"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Editor</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"role"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"viewer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Viewer</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__sort"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Sort by&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__select"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sort"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Last login&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reset"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__clear"</span><span class="shiki-foreground">>Clear&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">output</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__summary"</span><span class="shiki-token-function"> aria-live</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"polite"</span><span class="shiki-foreground">>48 users&#x3C;/</span><span class="shiki-token-string-expression">output</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Alice Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>alice@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>bob@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Carol White&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>carol@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Viewer&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge"</span><span class="shiki-foreground">>Inactive&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Filter bar with table`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:L,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"filter-demo"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter items"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__icon"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-search__input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">             placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search items…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search items"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__legend"</span><span class="shiki-foreground">>Type&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"type"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"document"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Documents</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"type"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"image"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Images</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"type"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"video"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Videos</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reset"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__clear"</span><span class="shiki-foreground">>Clear&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">output</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-filter__summary"</span><span class="shiki-token-function"> aria-live</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"polite"</span><span class="shiki-foreground">>12 items&#x3C;/</span><span class="shiki-token-string-expression">output</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-mt-4"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-text-muted); font-size: 0.875rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Selected filters will appear here when implemented with JavaScript</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Basic filtering example`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">// Example: Update results count on filter change</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> filterForm</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> document</span><span class="shiki-token-function">.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'#filter-demo .en-filter'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> summary</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> filterForm</span><span class="shiki-token-function">?.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-filter__summary'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> searchInput</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> filterForm</span><span class="shiki-token-function">?.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-search__input'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> checkboxes</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> filterForm</span><span class="shiki-token-function">?.querySelectorAll</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'input[type="checkbox"]'</span><span class="shiki-foreground">);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">function</span><span class="shiki-token-function"> updateCount</span><span class="shiki-foreground">() {</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (</span><span class="shiki-token-keyword">!</span><span class="shiki-foreground">summary) </span><span class="shiki-token-keyword">return</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-comment">  // In real app, this would reflect actual filtered results</span></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> checkedCount</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> filterForm</span><span class="shiki-token-function">?.querySelectorAll</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'input[type="checkbox"]:checked'</span><span class="shiki-foreground">).</span><span class="shiki-token-constant">length</span><span class="shiki-token-keyword"> ||</span><span class="shiki-token-constant"> 0</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> hasSearch</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> searchInput</span><span class="shiki-token-function">?.</span><span class="shiki-token-constant">value</span><span class="shiki-token-function">.trim</span><span class="shiki-foreground">().</span><span class="shiki-token-constant">length</span><span class="shiki-token-keyword"> ></span><span class="shiki-token-constant"> 0</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-token-keyword">  let</span><span class="shiki-foreground"> count </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> 12</span><span class="shiki-foreground">; </span><span class="shiki-token-comment">// mock total</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (checkedCount </span><span class="shiki-token-keyword">></span><span class="shiki-token-constant"> 0</span><span class="shiki-token-keyword"> ||</span><span class="shiki-foreground"> hasSearch) {</span></span>
<span class="line"><span class="shiki-foreground">    count </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> Math</span><span class="shiki-token-function">.max</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">1</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 12</span><span class="shiki-token-keyword"> -</span><span class="shiki-foreground"> checkedCount </span><span class="shiki-token-keyword">*</span><span class="shiki-token-constant"> 3</span><span class="shiki-token-keyword"> -</span><span class="shiki-foreground"> (hasSearch </span><span class="shiki-token-keyword">?</span><span class="shiki-token-constant"> 2</span><span class="shiki-token-keyword"> :</span><span class="shiki-token-constant"> 0</span><span class="shiki-foreground">));</span></span>
<span class="line"><span class="shiki-foreground">  }</span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-token-constant">  summary</span><span class="shiki-foreground">.textContent </span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression"> \`</span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">count</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression"> item</span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">count </span><span class="shiki-token-keyword">!==</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword"> ?</span><span class="shiki-token-string-expression"> 's'</span><span class="shiki-token-keyword"> :</span><span class="shiki-token-string-expression"> ''</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">\`</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">searchInput</span><span class="shiki-token-function">?.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'input'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> updateCount);</span></span>
<span class="line"><span class="shiki-token-constant">checkboxes</span><span class="shiki-token-function">?.forEach</span><span class="shiki-foreground">(cb </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> cb</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'change'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> updateCount));</span></span>
<span class="line"><span class="shiki-token-constant">filterForm</span><span class="shiki-token-function">?.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'reset'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-function">  setTimeout</span><span class="shiki-foreground">(updateCount</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 0</span><span class="shiki-foreground">); </span><span class="shiki-token-comment">// Wait for reset to complete</span></span>
<span class="line"><span class="shiki-foreground">});</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`js`,key:11,lang:`js`,injectKind:`js-inject`,editable:!1,source:null},13:{component:c(R,[[`render`,z]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/extended/components-filter-bar.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:13,lang:`vue`,injectKind:null,editable:!1,source:null}},V=[{id:`filter-bar`,text:`Filter Bar`,level:1},{id:`basic-filter-bar`,text:`Basic Filter Bar`,level:2},{id:`search-box-standalone`,text:`Search Box Standalone`,level:2},{id:`filter-chips`,text:`Filter Chips`,level:2},{id:`radio-chips-single-choice`,text:`Radio Chips (Single Choice)`,level:2},{id:`inline-layout`,text:`Inline Layout`,level:2},{id:`visible-legends`,text:`Visible Legends`,level:2},{id:`disabled-state`,text:`Disabled State`,level:2},{id:`custom-search-width`,text:`Custom Search Width`,level:2},{id:`with-data-table`,text:`With Data Table`,level:2},{id:`classes`,text:`Classes`,level:2},{id:`custom-properties`,text:`Custom Properties`,level:2},{id:`attribute-contract`,text:`Attribute Contract`,level:2},{id:`responsive-behavior`,text:`Responsive Behavior`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`usage-notes`,text:`Usage Notes`,level:2},{id:`forced-colors-mode`,text:`Forced Colors Mode`,level:2},{id:`javascript-integration`,text:`JavaScript Integration`,level:2}],H=[{id:`filter-bar`,text:`Filter Bar`,level:1,children:[{id:`basic-filter-bar`,text:`Basic Filter Bar`,level:2,children:[]},{id:`search-box-standalone`,text:`Search Box Standalone`,level:2,children:[]},{id:`filter-chips`,text:`Filter Chips`,level:2,children:[]},{id:`radio-chips-single-choice`,text:`Radio Chips (Single Choice)`,level:2,children:[]},{id:`inline-layout`,text:`Inline Layout`,level:2,children:[]},{id:`visible-legends`,text:`Visible Legends`,level:2,children:[]},{id:`disabled-state`,text:`Disabled State`,level:2,children:[]},{id:`custom-search-width`,text:`Custom Search Width`,level:2,children:[]},{id:`with-data-table`,text:`With Data Table`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`custom-properties`,text:`Custom Properties`,level:2,children:[]},{id:`attribute-contract`,text:`Attribute Contract`,level:2,children:[]},{id:`responsive-behavior`,text:`Responsive Behavior`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`usage-notes`,text:`Usage Notes`,level:2,children:[]},{id:`forced-colors-mode`,text:`Forced Colors Mode`,level:2,children:[]},{id:`javascript-integration`,text:`JavaScript Integration`,level:2,children:[]}]}],U={css:[],js:[{key:11,code:`// Example: Update results count on filter change
const filterForm = document.querySelector('#filter-demo .en-filter');
const summary = filterForm?.querySelector('.en-filter__summary');
const searchInput = filterForm?.querySelector('.en-search__input');
const checkboxes = filterForm?.querySelectorAll('input[type="checkbox"]');

function updateCount() {
  if (!summary) return;
  // In real app, this would reflect actual filtered results
  const checkedCount = filterForm?.querySelectorAll('input[type="checkbox"]:checked').length || 0;
  const hasSearch = searchInput?.value.trim().length > 0;
  
  let count = 12; // mock total
  if (checkedCount > 0 || hasSearch) {
    count = Math.max(1, 12 - checkedCount * 3 - (hasSearch ? 2 : 0));
  }
  
  summary.textContent = \`\${count} item\${count !== 1 ? 's' : ''}\`;
}

searchInput?.addEventListener('input', updateCount);
checkboxes?.forEach(cb => cb.addEventListener('change', updateCount));
filterForm?.addEventListener('reset', () => {
  setTimeout(updateCount, 0); // Wait for reset to complete
});`}],cleanup:[{key:12,code:`onUnmount(() => {
  // Cleanup event listeners (handled automatically when elements are removed)
});`}]},W=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),G=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/extended/filter-bar.md`,setup(){i(`vlm-toc`,{flat:V,tree:H}),m(()=>h(V,H)),d(()=>h([],[]));let e=a(U);return i(`vlm-inject`,e),m(()=>e.mount()),s(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="filter-bar">Filter Bar<a class="header-link" href="#filter-bar" title="Link to this heading"></a></h1>
<p>Search, filter, and sort controls for lists, tables, and dashboards with semantic HTML forms.</p>
<h2 id="basic-filter-bar">Basic Filter Bar<a class="header-link" href="#basic-filter-bar" title="Link to this heading"></a></h2>
<p>`}),f(W,{key:0,meta:B[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="search-box-standalone">Search Box Standalone<a class="header-link" href="#search-box-standalone" title="Link to this heading"></a></h2>
<p>The search component works independently outside the filter bar.</p>
<p>`}),f(W,{key:1,meta:B[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),f(W,{key:2,meta:B[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="filter-chips">Filter Chips<a class="header-link" href="#filter-chips" title="Link to this heading"></a></h2>
<p>Filter chips use real checkboxes (multi-select) or radios (single choice) with checked state styling.</p>
<p>`}),f(W,{key:3,meta:B[3]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="radio-chips-single-choice">Radio Chips (Single Choice)<a class="header-link" href="#radio-chips-single-choice" title="Link to this heading"></a></h2>
<p>Use radio buttons for mutually exclusive choices.</p>
<p>`}),f(W,{key:4,meta:B[4]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="inline-layout">Inline Layout<a class="header-link" href="#inline-layout" title="Link to this heading"></a></h2>
<p>Use <code>--inline</code> modifier to keep everything on one row with horizontal scrolling.</p>
<p>`}),f(W,{key:5,meta:B[5]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="visible-legends">Visible Legends<a class="header-link" href="#visible-legends" title="Link to this heading"></a></h2>
<p>By default, legends are visually hidden but accessible to screen readers. Remove <code>.en-filter__legend</code> class to show them.</p>
<p>`}),f(W,{key:6,meta:B[6]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="disabled-state">Disabled State<a class="header-link" href="#disabled-state" title="Link to this heading"></a></h2>
<p>`}),f(W,{key:7,meta:B[7]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="custom-search-width">Custom Search Width<a class="header-link" href="#custom-search-width" title="Link to this heading"></a></h2>
<p>Control search box width with <code>--en-search-width</code> custom property.</p>
<p>`}),f(W,{key:8,meta:B[8]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="with-data-table">With Data Table<a class="header-link" href="#with-data-table" title="Link to this heading"></a></h2>
<p>Filter bar commonly used above tables for data filtering.</p>
<p>`}),f(W,{key:9,meta:B[9]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>.en-filter</code></td>
<td>Filter bar container (form element)</td>
</tr>
<tr>
<td><code>.en-filter--inline</code></td>
<td>Inline layout with horizontal scroll instead of wrapping</td>
</tr>
<tr>
<td><code>.en-search</code></td>
<td>Search box container (works standalone)</td>
</tr>
<tr>
<td><code>.en-search__icon</code></td>
<td>Search icon (magnifying glass, CSS-only drawing)</td>
</tr>
<tr>
<td><code>.en-search__input</code></td>
<td>Search input field</td>
</tr>
<tr>
<td><code>.en-filter__group</code></td>
<td>Fieldset grouping filter chips</td>
</tr>
<tr>
<td><code>.en-filter__legend</code></td>
<td>Legend label (visually hidden by default, accessible)</td>
</tr>
<tr>
<td><code>.en-filter__chip</code></td>
<td>Filter chip label wrapping checkbox/radio</td>
</tr>
<tr>
<td><code>.en-filter__sort</code></td>
<td>Sort label container</td>
</tr>
<tr>
<td><code>.en-filter__select</code></td>
<td>Sort dropdown select</td>
</tr>
<tr>
<td><code>.en-filter__clear</code></td>
<td>Clear/reset button</td>
</tr>
<tr>
<td><code>.en-filter__summary</code></td>
<td>Results count output with live region</td>
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
<td><code>--en-search-width</code></td>
<td><code>16rem</code></td>
<td>Flex basis width of search box</td>
</tr>
</tbody>
</table>
</div><h2 id="attribute-contract">Attribute Contract<a class="header-link" href="#attribute-contract" title="Link to this heading"></a></h2>
<p>Filter bar uses native form state attributes:</p>
<ul>
<li><code>:checked</code> - Applied to checkbox/radio inputs when selected</li>
<li><code>:disabled</code> - Applied to inputs to prevent interaction</li>
<li><code>[aria-invalid]</code> - Can be applied for validation states</li>
<li><code>aria-live=&quot;polite&quot;</code> - On summary for dynamic result count announcements</li>
</ul>
<p><strong>State management</strong>: This component provides the UI controls. Actual filtering logic (client-side or server-side) is handled by your JavaScript or backend.</p>
<h2 id="responsive-behavior">Responsive Behavior<a class="header-link" href="#responsive-behavior" title="Link to this heading"></a></h2>
<p><strong>Container Query Breakpoint</strong>: At <code>&lt; 36rem</code> container width:</p>
<ul>
<li>Search box takes full width (its own row)</li>
<li>Summary moves to full width below other controls</li>
<li>Maintains readable layout in narrow spaces</li>
</ul>
<p><strong>Inline Modifier</strong>: <code>.en-filter--inline</code>:</p>
<ul>
<li>Prevents wrapping</li>
<li>Enables horizontal scrolling</li>
<li>Search box fixed at <code>--en-search-width</code></li>
<li>Useful for toolbars and sidebars</li>
</ul>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<p><strong>Semantic HTML</strong>:</p>
<ul>
<li>Uses <code>&lt;form&gt;</code> with <code>role=&quot;search&quot;</code> and <code>aria-label</code></li>
<li>Fieldsets group related checkboxes/radios</li>
<li>Legends provide context for screen readers</li>
<li>Native form controls for keyboard navigation</li>
</ul>
<p><strong>Screen Reader Support</strong>:</p>
<ul>
<li>Search icon has <code>aria-hidden=&quot;true&quot;</code> (decorative)</li>
<li>Legends are accessible even when visually hidden</li>
<li><code>&lt;output&gt;</code> with <code>aria-live=&quot;polite&quot;</code> announces result changes</li>
<li>All inputs have accessible labels</li>
</ul>
<p><strong>Keyboard Navigation</strong>:</p>
<ul>
<li>Tab through all interactive elements</li>
<li>Space/Enter to toggle checkboxes/radios</li>
<li>Arrow keys in select dropdown</li>
<li>Enter to submit form</li>
</ul>
<p><strong>Focus Indicators</strong>:</p>
<ul>
<li>Visible focus rings on all interactive elements</li>
<li>2px solid outline with 2px offset</li>
<li>High contrast in forced-colors mode</li>
</ul>
<h2 id="usage-notes">Usage Notes<a class="header-link" href="#usage-notes" title="Link to this heading"></a></h2>
<p><strong>Search Icon</strong>:</p>
<ul>
<li>CSS-only magnifying glass drawing (no SVG needed)</li>
<li>Two pseudo-elements: <code>::before</code> (lens circle) and <code>::after</code> (handle)</li>
<li>RTL-aware with <code>dir(rtl)</code> rotation adjustment</li>
<li>Color matches <code>--en-text-muted</code></li>
</ul>
<p><strong>Filter Chips</strong>:</p>
<ul>
<li>Real checkboxes/radios with visually hidden inputs</li>
<li>Checked state styled via <code>:has(:checked)</code> selector</li>
<li>Checkmark “✓” appears when selected for non-color-dependent indication</li>
<li>Selected chips use <code>--en-primary-subtle</code> background with <code>--en-primary</code> border</li>
<li>Font weight increases to medium when selected</li>
</ul>
<p><strong>Clear Button</strong>:</p>
<ul>
<li>Uses <code>type=&quot;reset&quot;</code> for native form reset behavior</li>
<li>Styled as text link with underline</li>
<li>Resets all form inputs to default state</li>
</ul>
<p><strong>Results Summary</strong>:</p>
<ul>
<li>Right-aligned with <code>margin-inline-start: auto</code></li>
<li>Uses <code>font-variant-numeric: tabular-nums</code> for consistent width</li>
<li>Update dynamically with JavaScript when filters change</li>
</ul>
<p><strong>Form Submission</strong>:</p>
<ul>
<li>Filter bar is a <code>&lt;form&gt;</code>, can submit normally or handle with JavaScript</li>
<li>Use <code>FormData</code> API to collect selected filters</li>
<li>Integrate with URLSearchParams for shareable filter URLs</li>
</ul>
<h2 id="forced-colors-mode">Forced Colors Mode<a class="header-link" href="#forced-colors-mode" title="Link to this heading"></a></h2>
<p>High contrast mode support included automatically:</p>
<ul>
<li>Search input, chips, and select get <code>CanvasText</code> borders</li>
<li>Checked chips get <code>Highlight</code> border and outline</li>
<li>Focus states use <code>Highlight</code> color</li>
<li>Checkmark remains visible in all color schemes</li>
</ul>
<h2 id="javascript-integration">JavaScript Integration<a class="header-link" href="#javascript-integration" title="Link to this heading"></a></h2>
<p>`}),f(W,{key:10,meta:B[10]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),f(W,{key:11,meta:B[11]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),f(W,{key:13,meta:B[13]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),K={title:`Filter Bar`,description:`Search, filter, and sort controls for lists, tables, and dashboards with semantic HTML forms.`},q=G;export{q as default,K as meta};