import{R as e,Tt as t,W as n,at as r,c as i,et as a,it as o,n as s,nt as c,q as l,r as u,tt as d,u as f}from"./components-DGWjtEwO.js";var p=`<div style="position: relative; block-size: 16rem; border: 1px solid var(--en-border); border-radius: var(--en-radius-md)">
  <button class="en-btn" style="position: absolute; inset-block-start: 2rem; inset-inline-start: 2rem; inline-size: 9rem">Search</button>
  <div class="en-tour en-tour--contained" data-state="open" role="dialog" aria-labelledby="t1-title"
       style="--en-tour-x: 2rem; --en-tour-y: 2rem; --en-tour-w: 9rem; --en-tour-h: 2.5rem">
    <div class="en-tour__spotlight" aria-hidden="true"></div>
    <div class="en-tour__card" data-placement="bottom">
      <h3 class="en-tour__title" id="t1-title">Search anywhere</h3>
      <p class="en-tour__body">Press <kbd class="en-kbd">/</kbd> to jump to any page.</p>
      <div class="en-tour__progress" aria-hidden="true"><i></i><i data-active></i><i></i></div>
      <div class="en-tour__actions">
        <button class="en-btn en-btn--sm">Skip</button>
        <button class="en-btn en-btn--sm en-btn--primary">Next</button>
      </div>
    </div>
  </div>
</div>`,m={__name:`0`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=p,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},h=`<div style="position: relative; block-size: 14rem">
  <div class="en-tour en-tour--contained en-tour--centered" data-state="open" role="dialog" aria-labelledby="t2-title">
    <div class="en-tour__card">
      <h3 class="en-tour__title" id="t2-title">Welcome</h3>
      <p class="en-tour__body">Take a one-minute tour of the dashboard.</p>
      <div class="en-tour__actions">
        <button class="en-btn en-btn--sm">Later</button>
        <button class="en-btn en-btn--sm en-btn--primary">Start</button>
      </div>
    </div>
  </div>
</div>`,g={0:{component:m,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: relative; block-size: 16rem; border: 1px solid var(--en-border); border-radius: var(--en-radius-md)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: absolute; inset-block-start: 2rem; inset-inline-start: 2rem; inline-size: 9rem"</span><span class="shiki-foreground">>Search&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour en-tour--contained"</span><span class="shiki-token-function"> data-state</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"open"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"dialog"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"t1-title"</span></span>
<span class="line"><span class="shiki-token-function">       style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-tour-x: 2rem; --en-tour-y: 2rem; --en-tour-w: 9rem; --en-tour-h: 2.5rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour__spotlight"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour__card"</span><span class="shiki-token-function"> data-placement</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"bottom"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"t1-title"</span><span class="shiki-foreground">>Search anywhere&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour__body"</span><span class="shiki-foreground">>Press &#x3C;</span><span class="shiki-token-string-expression">kbd</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-kbd"</span><span class="shiki-foreground">>/&#x3C;/</span><span class="shiki-token-string-expression">kbd</span><span class="shiki-foreground">> to jump to any page.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour__progress"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">i</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">i</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">i</span><span class="shiki-token-function"> data-active</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">i</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">i</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">i</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour__actions"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Skip&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm en-btn--primary"</span><span class="shiki-foreground">>Next&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Static tour step`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:{__name:`1`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: relative; block-size: 14rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour en-tour--contained en-tour--centered"</span><span class="shiki-token-function"> data-state</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"open"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"dialog"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"t2-title"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour__card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour__title"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"t2-title"</span><span class="shiki-foreground">>Welcome&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour__body"</span><span class="shiki-foreground">>Take a one-minute tour of the dashboard.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-tour__actions"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Later&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm en-btn--primary"</span><span class="shiki-foreground">>Start&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Centred tour card`,key:1,lang:`html`,injectKind:null,editable:!1,source:null}},_=[{id:`tour`,text:`Tour`,level:1},{id:`one-step`,text:`One Step`,level:2},{id:`centred-step`,text:`Centred Step`,level:2},{id:`attribute-contract`,text:`Attribute Contract`,level:2},{id:`tokens`,text:`Tokens`,level:2},{id:`without-javascript`,text:`Without JavaScript`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`classes`,text:`Classes`,level:2}],v=[{id:`tour`,text:`Tour`,level:1,children:[{id:`one-step`,text:`One Step`,level:2,children:[]},{id:`centred-step`,text:`Centred Step`,level:2,children:[]},{id:`attribute-contract`,text:`Attribute Contract`,level:2,children:[]},{id:`tokens`,text:`Tokens`,level:2,children:[]},{id:`without-javascript`,text:`Without JavaScript`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]}]}],y={css:[],js:[],cleanup:[]},b=n({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>l(`div`,{class:n},[e.meta.isLive?l(u,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:l(s,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),x=n({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/extended/tour.md`,setup(){r(`vlm-toc`,{flat:_,tree:v}),d(()=>f(_,v)),c(()=>f([],[]));let e=i(y);return r(`vlm-inject`,e),d(()=>e.mount()),a(()=>e.beforeUnmount()),c(()=>e.unmounted()),()=>l(`div`,{class:`vlm-page`},[l(`div`,{class:`vlm-content`},[l(`div`,{class:`vlm-md`,innerHTML:`<h1 id="tour">Tour<a class="header-link" href="#tour" title="Link to this heading"></a></h1>
<p>A product tour template: a spotlight around the target, a step card, progress dots and actions. EN.CSS ships the look and the contract only. Moving between steps, measuring the target, focus order and <kbd class="en-kbd">Esc</kbd> belong to ENJS or your own script.</p>
<h2 id="one-step">One Step<a class="header-link" href="#one-step" title="Link to this heading"></a></h2>
<p>Without JavaScript the tour is static: write <code>data-state=&quot;open&quot;</code> and the coordinates by hand to show one step. This demo uses <code>.en-tour--contained</code> so it fills its box instead of the viewport.</p>
<p>`}),l(b,{key:0,meta:g[0]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="centred-step">Centred Step<a class="header-link" href="#centred-step" title="Link to this heading"></a></h2>
<p>For a welcome or final step with no target.</p>
<p>`}),l(b,{key:1,meta:g[1]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="attribute-contract">Attribute Contract<a class="header-link" href="#attribute-contract" title="Link to this heading"></a></h2>
<p>Written by ENJS or the author:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Hook</th>
<th>On</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>data-state=&quot;open|closed&quot;</code></td>
<td><code>.en-tour</code></td>
<td>Closed hides the tour (<code>display: none</code>)</td>
</tr>
<tr>
<td><code>--en-tour-x</code>, <code>--en-tour-y</code></td>
<td><code>.en-tour</code></td>
<td>Target offset from the inline-start and block-start edges (logical, so it mirrors in RTL)</td>
</tr>
<tr>
<td><code>--en-tour-w</code>, <code>--en-tour-h</code></td>
<td><code>.en-tour</code></td>
<td>Target size</td>
</tr>
<tr>
<td><code>--en-tour-gap</code>, <code>--en-tour-pad</code></td>
<td><code>.en-tour</code></td>
<td>Space between target and card (<code>0.75rem</code>); room around the spotlight (<code>0.375rem</code>)</td>
</tr>
<tr>
<td><code>data-placement</code></td>
<td><code>.en-tour__card</code></td>
<td><code>bottom</code> (default), <code>top</code>, <code>start</code>, <code>end</code></td>
</tr>
<tr>
<td><code>data-active</code></td>
<td><code>&lt;i&gt;</code> in <code>.en-tour__progress</code></td>
<td>The current step</td>
</tr>
</tbody>
</table>
</div><h2 id="tokens">Tokens<a class="header-link" href="#tokens" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Token</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>--en-tour-scrim</code></td>
<td>inverse background at 60%</td>
<td>Backdrop colour</td>
</tr>
<tr>
<td><code>--en-tour-card-width</code></td>
<td><code>20rem</code></td>
<td>Width of the card</td>
</tr>
</tbody>
</table>
</div><h2 id="without-javascript">Without JavaScript<a class="header-link" href="#without-javascript" title="Link to this heading"></a></h2>
<p>The tour is static and shows one step. The backdrop does not block pointer events, so the page stays usable and the tour never traps the user.</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li>Use <code>role=&quot;dialog&quot;</code> (non-modal) with <code>aria-labelledby</code> on the root.</li>
<li>The driver moves focus to the card, handles <kbd class="en-kbd">Esc</kbd> and Tab order, and restores focus on close.</li>
<li>The progress dots are decoration, so also state the step in text (“Step 2 of 3”).</li>
<li>Forced-colors mode draws explicit borders around the spotlight and the card.</li>
<li>The spotlight animates with the duration tokens, so reduced motion turns it off.</li>
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
<td><code>.en-tour</code></td>
<td>Overlay root (fixed to the viewport)</td>
</tr>
<tr>
<td><code>.en-tour--contained</code></td>
<td>Fills the nearest positioned ancestor</td>
</tr>
<tr>
<td><code>.en-tour--centered</code></td>
<td>No target; centred card</td>
</tr>
<tr>
<td><code>.en-tour__spotlight</code></td>
<td>Cut-out around the target</td>
</tr>
<tr>
<td><code>.en-tour__card</code></td>
<td>Step card</td>
</tr>
<tr>
<td><code>.en-tour__title</code> <code>__body</code></td>
<td>Card text</td>
</tr>
<tr>
<td><code>.en-tour__progress</code></td>
<td>Row of <code>&lt;i&gt;</code> dots</td>
</tr>
<tr>
<td><code>.en-tour__actions</code></td>
<td>Buttons</td>
</tr>
</tbody>
</table>
</div>`})]),null])}}),S={title:`Tour`,description:`A product tour template: a spotlight around the target, a step card, progress dots and actions. EN.CSS ships the look and the contract only. Moving between steps, measuring the target, focus order and...`},C=x;export{C as default,S as meta};