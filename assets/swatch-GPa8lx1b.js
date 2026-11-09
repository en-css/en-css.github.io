import{R as e,Tt as t,W as n,at as r,c as i,et as a,it as o,n as s,nt as c,q as l,r as u,tt as d,u as f}from"./components-DGWjtEwO.js";var p=`<div class="en-swatch-group" role="radiogroup" aria-label="Accent">
  <label class="en-swatch" style="--swatch: var(--en-primary)">
    <input type="radio" name="accent" value="blue" checked>
    <span class="en-swatch__label">Blue</span>
  </label>
  <label class="en-swatch" style="--swatch: var(--en-success)">
    <input type="radio" name="accent" value="green">
    <span class="en-swatch__label">Green</span>
  </label>
  <label class="en-swatch" style="--swatch: var(--en-warning)">
    <input type="radio" name="accent" value="amber">
    <span class="en-swatch__label">Amber</span>
  </label>
  <label class="en-swatch" style="--swatch: var(--en-danger)">
    <input type="radio" name="accent" value="red">
    <span class="en-swatch__label">Red</span>
  </label>
  <label class="en-swatch" style="--swatch: var(--en-bg-surface)">
    <input type="radio" name="accent" value="white">
    <span class="en-swatch__label">White</span>
  </label>
</div>`,m={__name:`0`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=p,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},h=`<div class="en-swatch-group" role="radiogroup" aria-label="Shapes" style="align-items: center">
  <label class="en-swatch en-swatch--sm en-swatch--circle" style="--swatch: var(--en-info)">
    <input type="radio" name="shape" value="sm" checked>
    <span class="en-swatch__label">Small circle</span>
  </label>
  <label class="en-swatch en-swatch--circle" style="--swatch: var(--en-info)">
    <input type="radio" name="shape" value="md">
    <span class="en-swatch__label">Medium circle</span>
  </label>
  <label class="en-swatch en-swatch--lg en-swatch--square" style="--swatch: var(--en-info)">
    <input type="radio" name="shape" value="lg">
    <span class="en-swatch__label">Large square</span>
  </label>
</div>`,g={__name:`1`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_=`<div style="display: grid; gap: var(--en-space-4)">
  <div class="en-swatch-group" role="radiogroup" aria-label="Labeled">
    <label class="en-swatch en-swatch--labeled" style="--swatch: var(--en-primary)">
      <input type="radio" name="lab" value="blue" checked>
      <span class="en-swatch__label">Blue</span>
    </label>
    <label class="en-swatch en-swatch--labeled" style="--swatch: var(--en-success)">
      <input type="radio" name="lab" value="green">
      <span class="en-swatch__label">Green</span>
    </label>
  </div>
  <div class="en-swatch-group" role="radiogroup" aria-label="Ring only">
    <label class="en-swatch en-swatch--sm en-swatch--ring" style="--swatch: var(--en-primary)">
      <input type="radio" name="rg" value="blue" checked>
      <span class="en-swatch__label">Blue</span>
    </label>
    <label class="en-swatch en-swatch--sm en-swatch--ring" style="--swatch: var(--en-danger)">
      <input type="radio" name="rg" value="red">
      <span class="en-swatch__label">Red</span>
    </label>
  </div>
</div>`,v={0:{component:m,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch-group"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radiogroup"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Accent"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-primary)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"accent"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"blue"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Blue&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-success)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"accent"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"green"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Green&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-warning)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"accent"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"amber"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Amber&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-danger)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"accent"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"red"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Red&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-bg-surface)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"accent"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"white"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>White&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Accent picker`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:g,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch-group"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radiogroup"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Shapes"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"align-items: center"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch en-swatch--sm en-swatch--circle"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-info)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"shape"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sm"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Small circle&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch en-swatch--circle"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-info)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"shape"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"md"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Medium circle&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch en-swatch--lg en-swatch--square"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-info)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"shape"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Large square&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sizes, circle and square`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:{__name:`2`,setup(n){let r=t(null);return d(()=>{r.value&&(r.value.innerHTML=_,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(t,n)=>(o(),e(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: grid; gap: var(--en-space-4)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch-group"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radiogroup"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Labeled"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch en-swatch--labeled"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-primary)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lab"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"blue"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Blue&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch en-swatch--labeled"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-success)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lab"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"green"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Green&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch-group"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radiogroup"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Ring only"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch en-swatch--sm en-swatch--ring"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-primary)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"rg"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"blue"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Blue&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch en-swatch--sm en-swatch--ring"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--swatch: var(--en-danger)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"rg"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"red"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-swatch__label"</span><span class="shiki-foreground">>Red&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Labeled and ring-only swatches`,key:2,lang:`html`,injectKind:null,editable:!1,source:null}},y=[{id:`swatch`,text:`Swatch`,level:1},{id:`basic-group`,text:`Basic Group`,level:2},{id:`sizes-and-shapes`,text:`Sizes and Shapes`,level:2},{id:`visible-labels-and-ring-only`,text:`Visible Labels and Ring Only`,level:2},{id:`tokens`,text:`Tokens`,level:2},{id:`attribute-contract`,text:`Attribute Contract`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`classes`,text:`Classes`,level:2}],b=[{id:`swatch`,text:`Swatch`,level:1,children:[{id:`basic-group`,text:`Basic Group`,level:2,children:[]},{id:`sizes-and-shapes`,text:`Sizes and Shapes`,level:2,children:[]},{id:`visible-labels-and-ring-only`,text:`Visible Labels and Ring Only`,level:2,children:[]},{id:`tokens`,text:`Tokens`,level:2,children:[]},{id:`attribute-contract`,text:`Attribute Contract`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]}]}],x={css:[],js:[],cleanup:[]},S=n({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>l(`div`,{class:n},[e.meta.isLive?l(u,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:l(s,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),C=n({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/forms/extended/swatch.md`,setup(){r(`vlm-toc`,{flat:y,tree:b}),d(()=>f(y,b)),c(()=>f([],[]));let e=i(x);return r(`vlm-inject`,e),d(()=>e.mount()),a(()=>e.beforeUnmount()),c(()=>e.unmounted()),()=>l(`div`,{class:`vlm-page`},[l(`div`,{class:`vlm-content`},[l(`div`,{class:`vlm-md`,innerHTML:`<h1 id="swatch">Swatch<a class="header-link" href="#swatch" title="Link to this heading"></a></h1>
<p>A group of colour choices. The component only draws the chips: the colour comes from the <code>--swatch</code> custom property. It pairs naturally with <code>data-accent</code> and the colour tokens.</p>
<h2 id="basic-group">Basic Group<a class="header-link" href="#basic-group" title="Link to this heading"></a></h2>
<p>The input is the chip itself. Put a text label after it; it stays visually hidden but names the colour for assistive technology.</p>
<p>`}),l(S,{key:0,meta:v[0]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="sizes-and-shapes">Sizes and Shapes<a class="header-link" href="#sizes-and-shapes" title="Link to this heading"></a></h2>
<p>`}),l(S,{key:1,meta:v[1]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="visible-labels-and-ring-only">Visible Labels and Ring Only<a class="header-link" href="#visible-labels-and-ring-only" title="Link to this heading"></a></h2>
<p><code>--labeled</code> shows the text under the chip. <code>--ring</code> drops the tick and keeps only the ring, for very small chips.</p>
<p>`}),l(S,{key:2,meta:v[2]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>--swatch</code></td>
<td><code>--en-bg-subtle</code></td>
<td>Colour of the chip, set on each <code>.en-swatch</code></td>
</tr>
<tr>
<td><code>--en-swatch-size</code></td>
<td><code>2rem</code></td>
<td>Chip size; overrides <code>--sm</code> and <code>--lg</code></td>
</tr>
<tr>
<td><code>--en-swatch-ring</code></td>
<td><code>--en-text</code></td>
<td>Colour of the selected ring</td>
</tr>
</tbody>
</table>
</div><h2 id="attribute-contract">Attribute Contract<a class="header-link" href="#attribute-contract" title="Link to this heading"></a></h2>
<p>The input (radio or checkbox) is the chip, so it must be a <strong>direct child</strong> of <code>.en-swatch</code> and come before the label. The CSS reads <code>:checked</code>, <code>:focus-visible</code> and <code>:disabled</code> from it, and <code>--swatch</code> from the label (the property is inherited). No JavaScript is needed.</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li>A text label is required. It may stay visually hidden.</li>
<li>The selected state is a double ring plus a tick on a surface-coloured disc, so it does not depend on the swatch colour. No text colour is set on top of an arbitrary fill.</li>
<li>The chip has a boundary line (<code>--en-border-control</code>), so light colours remain visible.</li>
<li>In forced-colors mode the chip keeps its own colour on purpose (colour is the content) and the selection is drawn with <code>Highlight</code>.</li>
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
<td><code>.en-swatch-group</code></td>
<td>Wrapping row of swatches</td>
</tr>
<tr>
<td><code>.en-swatch</code></td>
<td>The label that wraps one chip</td>
</tr>
<tr>
<td><code>.en-swatch__label</code></td>
<td>Text label (visually hidden unless <code>--labeled</code>)</td>
</tr>
<tr>
<td><code>.en-swatch--sm</code> <code>--lg</code></td>
<td>Chip size (1.5rem, 2.75rem)</td>
</tr>
<tr>
<td><code>.en-swatch--square</code> <code>--circle</code></td>
<td>Corner shape</td>
</tr>
<tr>
<td><code>.en-swatch--ring</code></td>
<td>Ring only, no tick</td>
</tr>
<tr>
<td><code>.en-swatch--labeled</code></td>
<td>Show the label under the chip</td>
</tr>
</tbody>
</table>
</div>`})]),null])}}),w={title:`Swatch`,description:`A group of colour choices. The component only draws the chips: the colour comes from the --swatch custom property. It pairs naturally with data-accent and the colour tokens.`},T=C;export{T as default,w as meta};