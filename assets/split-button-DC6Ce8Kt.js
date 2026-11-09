import{R as e,Tt as t,W as n,at as r,c as i,et as a,it as o,n as s,nt as c,q as l,r as u,tt as d,u as f}from"./components-DGWjtEwO.js";var p=`<div class="en-split-button" role="group" aria-label="Save">
  <button class="en-btn en-btn--primary en-btn--solid en-split-button__main" type="button">Save</button>
  <button class="en-btn en-btn--primary en-btn--solid en-split-button__toggle" type="button"
          popovertarget="save-menu" aria-haspopup="menu" aria-expanded="false"
          aria-label="More save options"></button>
</div>
<div id="save-menu" class="en-popover" popover role="menu">
  <a class="en-dropdown__item" role="menuitem" href="#">Save as draft</a>
  <a class="en-dropdown__item" role="menuitem" href="#">Save and close</a>
  <a class="en-dropdown__item" role="menuitem" href="#">Save as template</a>
</div>`,m={__name:`0`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=p,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},h=`<div style="display: flex; flex-wrap: wrap; gap: var(--en-space-4); align-items: center">
  <div class="en-split-button en-split-button--sm" role="group" aria-label="Export">
    <button class="en-btn en-btn--primary en-split-button__main" type="button">Export</button>
    <button class="en-btn en-btn--primary en-split-button__toggle" type="button"
            aria-haspopup="menu" aria-label="More export options"></button>
  </div>
  <div class="en-split-button" role="group" aria-label="Delete">
    <button class="en-btn en-btn--danger en-btn--solid en-split-button__main" type="button">Delete</button>
    <button class="en-btn en-btn--danger en-btn--solid en-split-button__toggle" type="button"
            aria-haspopup="menu" aria-label="More delete options"></button>
  </div>
  <div class="en-split-button en-split-button--lg" role="group" aria-label="Share">
    <button class="en-btn en-split-button__main" type="button">Share</button>
    <button class="en-btn en-split-button__toggle" type="button"
            aria-haspopup="menu" aria-label="More share options"></button>
  </div>
</div>`,g={0:{component:m,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-split-button"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"group"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Save"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--solid en-split-button__main"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Save&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--solid en-split-button__toggle"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span></span>
<span class="line"><span class="shiki-token-function">          popovertarget</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"save-menu"</span><span class="shiki-token-function"> aria-haspopup</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menu"</span><span class="shiki-token-function"> aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"false"</span></span>
<span class="line"><span class="shiki-token-function">          aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"More save options"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"save-menu"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-popover"</span><span class="shiki-token-function"> popover</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menu"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-dropdown__item"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menuitem"</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-foreground">>Save as draft&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-dropdown__item"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menuitem"</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-foreground">>Save and close&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-dropdown__item"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menuitem"</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-foreground">>Save as template&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Primary split button with a native popover menu`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:{__name:`1`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: flex; flex-wrap: wrap; gap: var(--en-space-4); align-items: center"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-split-button en-split-button--sm"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"group"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Export"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-split-button__main"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Export&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-split-button__toggle"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span></span>
<span class="line"><span class="shiki-token-function">            aria-haspopup</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menu"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"More export options"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-split-button"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"group"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Delete"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--danger en-btn--solid en-split-button__main"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Delete&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--danger en-btn--solid en-split-button__toggle"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span></span>
<span class="line"><span class="shiki-token-function">            aria-haspopup</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menu"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"More delete options"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-split-button en-split-button--lg"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"group"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Share"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-split-button__main"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Share&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-split-button__toggle"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span></span>
<span class="line"><span class="shiki-token-function">            aria-haspopup</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menu"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"More share options"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Outline, danger and sizes`,key:1,lang:`html`,injectKind:null,editable:!1,source:null}},_=[{id:`split-button`,text:`Split Button`,level:1},{id:`basic-split-button`,text:`Basic Split Button`,level:2},{id:`styles-and-sizes`,text:`Styles and Sizes`,level:2},{id:`driving-the-menu`,text:`Driving the Menu`,level:2},{id:`attribute-contract`,text:`Attribute Contract`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`classes`,text:`Classes`,level:2}],v=[{id:`split-button`,text:`Split Button`,level:1,children:[{id:`basic-split-button`,text:`Basic Split Button`,level:2,children:[]},{id:`styles-and-sizes`,text:`Styles and Sizes`,level:2,children:[]},{id:`driving-the-menu`,text:`Driving the Menu`,level:2,children:[]},{id:`attribute-contract`,text:`Attribute Contract`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]}]}],y={css:[],js:[],cleanup:[]},b=n({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>l(`div`,{class:n},[e.meta.isLive?l(u,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:l(s,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),x=n({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/extended/split-button.md`,setup(){r(`vlm-toc`,{flat:_,tree:v}),d(()=>f(_,v)),c(()=>f([],[]));let e=i(y);return r(`vlm-inject`,e),d(()=>e.mount()),a(()=>e.beforeUnmount()),c(()=>e.unmounted()),()=>l(`div`,{class:`vlm-page`},[l(`div`,{class:`vlm-content`},[l(`div`,{class:`vlm-md`,innerHTML:`<h1 id="split-button">Split Button<a class="header-link" href="#split-button" title="Link to this heading"></a></h1>
<p>A main action plus a caret button that opens a menu of alternatives.</p>
<h2 id="basic-split-button">Basic Split Button<a class="header-link" href="#basic-split-button" title="Link to this heading"></a></h2>
<p>Put the colour and style classes of <code>.en-btn</code> on <strong>both</strong> buttons so the two halves match. The caret is drawn by CSS, so keep the toggle empty and give it an <code>aria-label</code>.</p>
<p>`}),l(b,{key:0,meta:g[0]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The menu uses the native Popover API through <code>popovertarget</code>, so placement, light dismiss and <kbd class="en-kbd">Esc</kbd> work without JavaScript.</p>
<h2 id="styles-and-sizes">Styles and Sizes<a class="header-link" href="#styles-and-sizes" title="Link to this heading"></a></h2>
<p>`}),l(b,{key:1,meta:g[1]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="driving-the-menu">Driving the Menu<a class="header-link" href="#driving-the-menu" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Approach</th>
<th>How</th>
</tr>
</thead>
<tbody>
<tr>
<td>Native (no JS)</td>
<td><code>popovertarget</code> on the toggle and <code>popover</code> on an <code>.en-popover</code> menu</td>
</tr>
<tr>
<td>Popkit (<code>@en32/enjs</code>)</td>
<td>Use <code>.en-dropdown__menu</code> with the same toggle; keep <code>aria-expanded</code> in sync</td>
</tr>
</tbody>
</table>
</div><p>The CSS flips the caret when the toggle has <code>aria-expanded=&quot;true&quot;</code>. With the native popover that attribute is only maintained by JavaScript, so without JS the caret stays pointing down, which is fine.</p>
<h2 id="attribute-contract">Attribute Contract<a class="header-link" href="#attribute-contract" title="Link to this heading"></a></h2>
<p>The group and its two buttons are plain markup. The toggle needs an accessible name (<code>aria-label</code>) and <code>aria-haspopup=&quot;menu&quot;</code>. The main action must work on its own; the menu only holds alternatives.</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li>Both halves are real buttons and are reachable with <kbd class="en-kbd">Tab</kbd>.</li>
<li>The hovered or focused half is raised, so its full border and focus ring stay visible.</li>
<li>Forced-colors mode keeps the seam between the buttons and the caret.</li>
<li>Corners are logical (<code>border-start-end-radius</code> and friends), so the control mirrors in right-to-left layouts.</li>
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
<td><code>.en-split-button</code></td>
<td>Group that joins the two buttons</td>
</tr>
<tr>
<td><code>.en-split-button__main</code></td>
<td>The primary action button</td>
</tr>
<tr>
<td><code>.en-split-button__toggle</code></td>
<td>The caret button that opens the menu</td>
</tr>
<tr>
<td><code>.en-split-button--sm</code> <code>--lg</code></td>
<td>Resize both buttons</td>
</tr>
</tbody>
</table>
</div>`})]),null])}}),S={title:`Split Button`,description:`A main action plus a caret button that opens a menu of alternatives.`},C=x;export{C as default,S as meta};