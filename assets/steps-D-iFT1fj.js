import{R as e,Tt as t,W as n,at as r,c as i,et as a,it as o,n as s,nt as c,q as l,r as u,tt as d,u as f}from"./components-DGWjtEwO.js";var p=`<ol class="en-steps">
  <li class="en-steps__item en-steps__item--done">
    <h3 class="en-steps__title">Install <span class="en-sr-only">(completed)</span></h3>
    <div class="en-steps__body"><p>Run the installer and accept the defaults.</p></div>
  </li>
  <li class="en-steps__item en-steps__item--current" aria-current="step">
    <h3 class="en-steps__title">Configure</h3>
    <div class="en-steps__body"><p>Edit <code>en.config.json</code> and set your accent colour.</p></div>
  </li>
  <li class="en-steps__item">
    <h3 class="en-steps__title">Deploy</h3>
    <div class="en-steps__body"><p>Publish the build to your host.</p></div>
  </li>
</ol>`,m={__name:`0`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=p,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},h=`<ol class="en-steps en-steps--compact">
  <li class="en-steps__item"><h3 class="en-steps__title">Clone the repository</h3></li>
  <li class="en-steps__item"><h3 class="en-steps__title">Install dependencies</h3></li>
  <li class="en-steps__item"><h3 class="en-steps__title">Start the dev server</h3></li>
</ol>`,g={0:{component:m,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ol</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__item en-steps__item--done"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__title"</span><span class="shiki-foreground">>Install &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sr-only"</span><span class="shiki-foreground">>(completed)&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__body"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Run the installer and accept the defaults.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__item en-steps__item--current"</span><span class="shiki-token-function"> aria-current</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"step"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__title"</span><span class="shiki-foreground">>Configure&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__body"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Edit &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>en.config.json&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">> and set your accent colour.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__item"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__title"</span><span class="shiki-foreground">>Deploy&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__body"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Publish the build to your host.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ol</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Three steps with state`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:{__name:`1`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ol</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps en-steps--compact"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__item"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__title"</span><span class="shiki-foreground">>Clone the repository&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__item"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__title"</span><span class="shiki-foreground">>Install dependencies&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__item"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-steps__title"</span><span class="shiki-foreground">>Start the dev server&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ol</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Compact steps`,key:1,lang:`html`,injectKind:null,editable:!1,source:null}},_=[{id:`steps`,text:`Steps`,level:1},{id:`basic-steps`,text:`Basic Steps`,level:2},{id:`compact`,text:`Compact`,level:2},{id:`tokens`,text:`Tokens`,level:2},{id:`attribute-contract`,text:`Attribute Contract`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`classes`,text:`Classes`,level:2}],v=[{id:`steps`,text:`Steps`,level:1,children:[{id:`basic-steps`,text:`Basic Steps`,level:2,children:[]},{id:`compact`,text:`Compact`,level:2,children:[]},{id:`tokens`,text:`Tokens`,level:2,children:[]},{id:`attribute-contract`,text:`Attribute Contract`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]}]}],y={css:[],js:[],cleanup:[]},b=n({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>l(`div`,{class:n},[e.meta.isLive?l(u,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:l(s,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),x=n({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/extended/steps.md`,setup(){r(`vlm-toc`,{flat:_,tree:v}),d(()=>f(_,v)),c(()=>f([],[]));let e=i(y);return r(`vlm-inject`,e),d(()=>e.mount()),a(()=>e.beforeUnmount()),c(()=>e.unmounted()),()=>l(`div`,{class:`vlm-page`},[l(`div`,{class:`vlm-content`},[l(`div`,{class:`vlm-md`,innerHTML:`<h1 id="steps">Steps<a class="header-link" href="#steps" title="Link to this heading"></a></h1>
<p>A numbered guide with content under each step, for docs and onboarding. <code>.en-stepper</code> is a compact progress indicator with no content; <code>.en-steps</code> is a vertical how-to.</p>
<h2 id="basic-steps">Basic Steps<a class="header-link" href="#basic-steps" title="Link to this heading"></a></h2>
<p>Numbers come from a CSS counter, so do not type them.</p>
<p>`}),l(b,{key:0,meta:g[0]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="compact">Compact<a class="header-link" href="#compact" title="Link to this heading"></a></h2>
<p>`}),l(b,{key:1,meta:g[1]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="tokens">Tokens<a class="header-link" href="#tokens" title="Link to this heading"></a></h2>
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
<td><code>--en-steps-marker-size</code></td>
<td><code>1.75rem</code></td>
<td>Marker diameter (<code>1.375rem</code> for <code>--compact</code>)</td>
</tr>
<tr>
<td><code>--en-steps-color</code></td>
<td><code>--en-primary</code></td>
<td>Accent of done and current steps</td>
</tr>
</tbody>
</table>
</div><h2 id="attribute-contract">Attribute Contract<a class="header-link" href="#attribute-contract" title="Link to this heading"></a></h2>
<p>Plain markup, no JavaScript. The counter restarts on every <code>.en-steps</code> list. The author sets the state with <code>--done</code>, <code>--current</code> or <code>aria-current=&quot;step&quot;</code> (which looks the same as <code>--current</code>).</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li>Use an <code>&lt;ol&gt;</code> so the order is announced.</li>
<li>A done step shows a check mark instead of its number, so also write the state for screen readers (for example a visually hidden “completed” in the title).</li>
<li>Colour is never the only signal; forced-colors mode keeps filled markers through <code>Highlight</code>.</li>
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
<td><code>.en-steps</code></td>
<td>The ordered list</td>
</tr>
<tr>
<td><code>.en-steps__item</code></td>
<td>One step</td>
</tr>
<tr>
<td><code>.en-steps__title</code></td>
<td>Step heading</td>
</tr>
<tr>
<td><code>.en-steps__body</code></td>
<td>Optional content</td>
</tr>
<tr>
<td><code>.en-steps--compact</code></td>
<td>Smaller markers and spacing</td>
</tr>
<tr>
<td><code>.en-steps__item--done</code> <code>--current</code></td>
<td>Step state</td>
</tr>
</tbody>
</table>
</div>`})]),null])}}),S={title:`Steps`,description:`A numbered guide with content under each step, for docs and onboarding. .en-stepper is a compact progress indicator with no content; .en-steps is a vertical how-to.`},C=x;export{C as default,S as meta};