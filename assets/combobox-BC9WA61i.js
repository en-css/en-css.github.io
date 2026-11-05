import{Et as e,I as t,R as n,W as r,at as i,ct as a,et as o,it as s,l as c,m as l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";var g=`<div class="en-combobox">
  <input class="en-combobox__input" 
         type="text" 
         role="combobox"
         aria-expanded="false" 
         aria-controls="city-list"
         aria-autocomplete="list" 
         autocomplete="off" 
         aria-label="City"
         placeholder="Select a city...">
  <ul class="en-combobox__list" 
      id="city-list" 
      role="listbox" 
      aria-label="Cities">
    <li class="en-combobox__option" role="option" id="city-1">Jakarta</li>
    <li class="en-combobox__option" role="option" id="city-2">Bandung</li>
    <li class="en-combobox__option" role="option" id="city-3">Surabaya</li>
    <li class="en-combobox__option" role="option" id="city-4">Medan</li>
    <li class="en-combobox__option" role="option" id="city-5">Semarang</li>
  </ul>
</div>`,_={__name:`0`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=g,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},v=`<div style="height: 200px;">
  <div class="en-combobox">
    <input class="en-combobox__input" 
           type="text" 
           role="combobox"
           aria-expanded="true"
           aria-controls="country-list"
           aria-autocomplete="list" 
           autocomplete="off" 
           aria-label="Country"
           placeholder="Select country..."
           value="Ind">
    <ul class="en-combobox__list" 
        id="country-list" 
        role="listbox" 
        aria-label="Countries">
      <li class="en-combobox__option" role="option" id="country-1">Indonesia</li>
      <li class="en-combobox__option" role="option" id="country-2">India</li>
      <li class="en-combobox__option" role="option" id="country-3" hidden>Malaysia</li>
      <li class="en-combobox__option" role="option" id="country-4" hidden>Singapore</li>
      <li class="en-combobox__option" role="option" id="country-5" hidden>Thailand</li>
    </ul>
  </div>
</div>`,y={__name:`1`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=v,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},b=`<div style="height: 300px;">
  <div class="en-combobox">
    <input class="en-combobox__input" 
           type="text" 
           role="combobox"
           aria-expanded="true"
           aria-controls="language-list"
           aria-autocomplete="list" 
           autocomplete="off" 
           aria-label="Programming language"
           placeholder="Select language..."
           value="JavaScript">
    <ul class="en-combobox__list" 
        id="language-list" 
        role="listbox" 
        aria-label="Programming languages">
      <li class="en-combobox__option" role="option" id="lang-1" aria-selected="true">JavaScript</li>
      <li class="en-combobox__option" role="option" id="lang-2" data-active>TypeScript</li>
      <li class="en-combobox__option" role="option" id="lang-3">Python</li>
      <li class="en-combobox__option" role="option" id="lang-4">Ruby</li>
      <li class="en-combobox__option" role="option" id="lang-5">Go</li>
    </ul>
  </div>
</div>`,x={__name:`2`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=b,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},S=`<div style="height: 400px;">
  <div class="en-combobox">
    <input class="en-combobox__input" 
           type="text" 
           role="combobox"
           aria-expanded="true"
           aria-controls="fruit-list"
           aria-autocomplete="list" 
           autocomplete="off" 
           aria-label="Fruit"
           placeholder="Select fruit...">
    <ul class="en-combobox__list" 
        id="fruit-list" 
        role="listbox" 
        aria-label="Fruits">
      <li role="presentation">
        <span class="en-combobox__group" id="citrus">Citrus</span>
        <ul role="group" aria-labelledby="citrus">
          <li class="en-combobox__option" role="option" id="fruit-1">Orange</li>
          <li class="en-combobox__option" role="option" id="fruit-2">Lemon</li>
          <li class="en-combobox__option" role="option" id="fruit-3">Grapefruit</li>
        </ul>
      </li>
      <li role="presentation">
        <span class="en-combobox__group" id="berries">Berries</span>
        <ul role="group" aria-labelledby="berries">
          <li class="en-combobox__option" role="option" id="fruit-4">Strawberry</li>
          <li class="en-combobox__option" role="option" id="fruit-5">Blueberry</li>
          <li class="en-combobox__option" role="option" id="fruit-6">Raspberry</li>
        </ul>
      </li>
      <li role="presentation">
        <span class="en-combobox__group" id="tropical">Tropical</span>
        <ul role="group" aria-labelledby="tropical">
          <li class="en-combobox__option" role="option" id="fruit-7">Mango</li>
          <li class="en-combobox__option" role="option" id="fruit-8">Pineapple</li>
          <li class="en-combobox__option" role="option" id="fruit-9">Papaya</li>
        </ul>
      </li>
    </ul>
  </div>
</div>`,C={__name:`3`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},w=`<div class="en-combobox en-combobox--sm">
  <input class="en-combobox__input" 
         type="text" 
         role="combobox"
         aria-expanded="false"
         aria-controls="status-list-sm"
         aria-autocomplete="list" 
         autocomplete="off" 
         aria-label="Status"
         placeholder="Select status...">
  <ul class="en-combobox__list" 
      id="status-list-sm" 
      role="listbox" 
      aria-label="Status">
    <li class="en-combobox__option" role="option">Active</li>
    <li class="en-combobox__option" role="option">Inactive</li>
    <li class="en-combobox__option" role="option">Pending</li>
  </ul>
</div>`,T={__name:`4`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},E=`<div class="en-combobox en-combobox--lg">
  <input class="en-combobox__input" 
         type="text" 
         role="combobox"
         aria-expanded="false"
         aria-controls="priority-list-lg"
         aria-autocomplete="list" 
         autocomplete="off" 
         aria-label="Priority"
         placeholder="Select priority...">
  <ul class="en-combobox__list" 
      id="priority-list-lg" 
      role="listbox" 
      aria-label="Priority">
    <li class="en-combobox__option" role="option">High</li>
    <li class="en-combobox__option" role="option">Medium</li>
    <li class="en-combobox__option" role="option">Low</li>
  </ul>
</div>`,D={__name:`5`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=E,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},O=`<div style="height: 300px;">
  <div class="en-combobox">
    <input class="en-combobox__input" 
           type="text" 
           role="combobox"
           aria-expanded="true"
           aria-controls="plan-list"
           aria-autocomplete="list" 
           autocomplete="off" 
           aria-label="Plan"
           placeholder="Select plan...">
    <ul class="en-combobox__list" 
        id="plan-list" 
        role="listbox" 
        aria-label="Plans">
      <li class="en-combobox__option" role="option" id="plan-1">Free</li>
      <li class="en-combobox__option" role="option" id="plan-2">Basic</li>
      <li class="en-combobox__option" role="option" id="plan-3">Pro</li>
      <li class="en-combobox__option" role="option" id="plan-4" aria-disabled="true">Enterprise (Contact Sales)</li>
    </ul>
  </div>
</div>`,k={__name:`6`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=O,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},A=`<div style="height: 200px;">
  <div class="en-combobox">
    <input class="en-combobox__input" 
           type="text" 
           role="combobox"
           aria-expanded="true"
           aria-controls="search-list"
           aria-autocomplete="list" 
           autocomplete="off" 
           aria-label="Search"
           placeholder="Search..."
           value="xyz">
    <ul class="en-combobox__list" 
        id="search-list" 
        role="listbox" 
        aria-label="Search results">
      <li class="en-combobox__option" role="option" hidden>Apple</li>
      <li class="en-combobox__option" role="option" hidden>Banana</li>
      <li class="en-combobox__option" role="option" hidden>Cherry</li>
      <li class="en-combobox__empty">No results found</li>
    </ul>
  </div>
</div>`,j={__name:`7`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=A,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},M=`<div style="height: 200px;">
  <div class="en-combobox">
    <input class="en-combobox__input" 
           type="text" 
           role="combobox"
           aria-expanded="true"
           aria-controls="async-list"
           aria-autocomplete="list" 
           autocomplete="off" 
           aria-label="Search users"
           placeholder="Search users..."
           value="john">
    <ul class="en-combobox__list" 
        id="async-list" 
        role="listbox" 
        aria-label="Users"
        aria-busy="true">
      <li class="en-combobox__option" role="option">Loading...</li>
    </ul>
  </div>
</div>`,N={__name:`8`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=M,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},P=`<div class="en-combobox">
  <input class="en-combobox__input" 
         type="text" 
         role="combobox"
         aria-expanded="false"
         aria-controls="required-list"
         aria-autocomplete="list" 
         autocomplete="off" 
         aria-label="Required field"
         aria-invalid="true"
         placeholder="This field is required">
  <ul class="en-combobox__list" 
      id="required-list" 
      role="listbox" 
      aria-label="Options">
    <li class="en-combobox__option" role="option">Option 1</li>
    <li class="en-combobox__option" role="option">Option 2</li>
  </ul>
</div>`,F={__name:`9`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=P,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},I=`<div class="en-combobox">
  <input class="en-combobox__input" 
         type="text" 
         role="combobox"
         aria-expanded="false"
         aria-controls="disabled-list"
         aria-autocomplete="list" 
         autocomplete="off" 
         aria-label="Disabled field"
         placeholder="Not editable"
         disabled>
  <ul class="en-combobox__list" 
      id="disabled-list" 
      role="listbox" 
      aria-label="Options">
    <li class="en-combobox__option" role="option">Option 1</li>
    <li class="en-combobox__option" role="option">Option 2</li>
  </ul>
</div>`,L={__name:`10`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=I,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},R={};function z(e,n){let r=a(`Downloadable`);return s(),t(r,{"dev-url":`components/extended/components-combobox.css`})}var B={0:{component:_,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">         aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"false"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"city-list"</span></span>
<span class="line"><span class="shiki-token-function">         aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"City"</span></span>
<span class="line"><span class="shiki-token-function">         placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select a city..."</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"city-list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Cities"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"city-1"</span><span class="shiki-foreground">>Jakarta&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"city-2"</span><span class="shiki-foreground">>Bandung&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"city-3"</span><span class="shiki-foreground">>Surabaya&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"city-4"</span><span class="shiki-foreground">>Medan&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"city-5"</span><span class="shiki-foreground">>Semarang&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Simple combobox`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 200px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">           aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span></span>
<span class="line"><span class="shiki-token-function">           aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"country-list"</span></span>
<span class="line"><span class="shiki-token-function">           aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Country"</span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select country..."</span></span>
<span class="line"><span class="shiki-token-function">           value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Ind"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"country-list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Countries"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"country-1"</span><span class="shiki-foreground">>Indonesia&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"country-2"</span><span class="shiki-foreground">>India&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"country-3"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">>Malaysia&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"country-4"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">>Singapore&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"country-5"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">>Thailand&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Combobox with list open`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 300px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">           aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span></span>
<span class="line"><span class="shiki-token-function">           aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"language-list"</span></span>
<span class="line"><span class="shiki-token-function">           aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Programming language"</span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select language..."</span></span>
<span class="line"><span class="shiki-token-function">           value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"JavaScript"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"language-list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Programming languages"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lang-1"</span><span class="shiki-token-function"> aria-selected</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>JavaScript&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lang-2"</span><span class="shiki-token-function"> data-active</span><span class="shiki-foreground">>TypeScript&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lang-3"</span><span class="shiki-foreground">>Python&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lang-4"</span><span class="shiki-foreground">>Ruby&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lang-5"</span><span class="shiki-foreground">>Go&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`With selected and active options`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 400px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">           aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span></span>
<span class="line"><span class="shiki-token-function">           aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-list"</span></span>
<span class="line"><span class="shiki-token-function">           aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Fruit"</span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select fruit..."</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Fruits"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"presentation"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__group"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"citrus"</span><span class="shiki-foreground">>Citrus&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"group"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"citrus"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-1"</span><span class="shiki-foreground">>Orange&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-2"</span><span class="shiki-foreground">>Lemon&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-3"</span><span class="shiki-foreground">>Grapefruit&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"presentation"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__group"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"berries"</span><span class="shiki-foreground">>Berries&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"group"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"berries"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-4"</span><span class="shiki-foreground">>Strawberry&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-5"</span><span class="shiki-foreground">>Blueberry&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-6"</span><span class="shiki-foreground">>Raspberry&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"presentation"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__group"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tropical"</span><span class="shiki-foreground">>Tropical&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"group"</span><span class="shiki-token-function"> aria-labelledby</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tropical"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-7"</span><span class="shiki-foreground">>Mango&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-8"</span><span class="shiki-foreground">>Pineapple&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"fruit-9"</span><span class="shiki-foreground">>Papaya&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Combobox with option groups`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox en-combobox--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">         aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"false"</span></span>
<span class="line"><span class="shiki-token-function">         aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"status-list-sm"</span></span>
<span class="line"><span class="shiki-token-function">         aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Status"</span></span>
<span class="line"><span class="shiki-token-function">         placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select status..."</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"status-list-sm"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Status"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>Inactive&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Small combobox`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox en-combobox--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">         aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"false"</span></span>
<span class="line"><span class="shiki-token-function">         aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"priority-list-lg"</span></span>
<span class="line"><span class="shiki-token-function">         aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Priority"</span></span>
<span class="line"><span class="shiki-token-function">         placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select priority..."</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"priority-list-lg"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Priority"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>High&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>Medium&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>Low&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Large combobox`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:k,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 300px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">           aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span></span>
<span class="line"><span class="shiki-token-function">           aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"plan-list"</span></span>
<span class="line"><span class="shiki-token-function">           aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Plan"</span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select plan..."</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"plan-list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Plans"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"plan-1"</span><span class="shiki-foreground">>Free&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"plan-2"</span><span class="shiki-foreground">>Basic&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"plan-3"</span><span class="shiki-foreground">>Pro&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"plan-4"</span><span class="shiki-token-function"> aria-disabled</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>Enterprise (Contact Sales)&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`With disabled options`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 200px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">           aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span></span>
<span class="line"><span class="shiki-token-function">           aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search-list"</span></span>
<span class="line"><span class="shiki-token-function">           aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search"</span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search..."</span></span>
<span class="line"><span class="shiki-token-function">           value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"xyz"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search-list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search results"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">>Apple&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">>Banana&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> hidden</span><span class="shiki-foreground">>Cherry&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__empty"</span><span class="shiki-foreground">>No results found&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`No results found`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:N,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"height: 200px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">           aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span></span>
<span class="line"><span class="shiki-token-function">           aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"async-list"</span></span>
<span class="line"><span class="shiki-token-function">           aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">           aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search users"</span></span>
<span class="line"><span class="shiki-token-function">           placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search users..."</span></span>
<span class="line"><span class="shiki-token-function">           value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"john"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"async-list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">        aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Users"</span></span>
<span class="line"><span class="shiki-token-function">        aria-busy</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>Loading...&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Loading results`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">         aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"false"</span></span>
<span class="line"><span class="shiki-token-function">         aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"required-list"</span></span>
<span class="line"><span class="shiki-token-function">         aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Required field"</span></span>
<span class="line"><span class="shiki-token-function">         aria-invalid</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span></span>
<span class="line"><span class="shiki-token-function">         placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"This field is required"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"required-list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Options"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>Option 1&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>Option 2&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Invalid input state`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:L,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span></span>
<span class="line"><span class="shiki-token-function">         aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"false"</span></span>
<span class="line"><span class="shiki-token-function">         aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"disabled-list"</span></span>
<span class="line"><span class="shiki-token-function">         aria-autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         autocomplete</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"off"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">         aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Disabled field"</span></span>
<span class="line"><span class="shiki-token-function">         placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Not editable"</span></span>
<span class="line"><span class="shiki-token-function">         disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"disabled-list"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground"> </span></span>
<span class="line"><span class="shiki-token-function">      aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Options"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>Option 1&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-foreground">>Option 2&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Disabled state`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-token-function"> popover</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"manual"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- options --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> input</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> combobox</span><span class="shiki-token-function">.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-combobox__input'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> list</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> combobox</span><span class="shiki-token-function">.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-combobox__list[popover]'</span><span class="shiki-foreground">);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">input</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'focus'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  list</span><span class="shiki-token-function">.showPopover</span><span class="shiki-foreground">();</span></span>
<span class="line"><span class="shiki-token-constant">  input</span><span class="shiki-token-function">.setAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'aria-expanded'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'true'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-foreground">});</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">input</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'blur'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  list</span><span class="shiki-token-function">.hidePopover</span><span class="shiki-foreground">();</span></span>
<span class="line"><span class="shiki-token-constant">  input</span><span class="shiki-token-function">.setAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'aria-expanded'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'false'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-foreground">});</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:12,lang:`javascript`,injectKind:null,editable:!1,source:null},13:{component:l(R,[[`render`,z]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/extended/components-combobox.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:13,lang:`vue`,injectKind:null,editable:!1,source:null}},V=[{id:`combobox`,text:`Combobox`,level:1},{id:`basic-combobox`,text:`Basic Combobox`,level:2},{id:`expanded-state`,text:`Expanded State`,level:2},{id:`selected-and-active-states`,text:`Selected and Active States`,level:2},{id:`grouped-options`,text:`Grouped Options`,level:2},{id:`size-variants`,text:`Size Variants`,level:2},{id:`disabled-options`,text:`Disabled Options`,level:2},{id:`empty-state`,text:`Empty State`,level:2},{id:`loading-state`,text:`Loading State`,level:2},{id:`error-state`,text:`Error State`,level:2},{id:`disabled-combobox`,text:`Disabled Combobox`,level:2},{id:`classes`,text:`Classes`,level:2},{id:`custom-properties`,text:`Custom Properties`,level:2},{id:`attribute-contract`,text:`Attribute Contract`,level:2},{id:`placement-modes`,text:`Placement Modes`,level:2},{id:`default-placement-absolute-position`,text:`Default Placement (Absolute Position)`,level:3},{id:`popover-placement-top-layer`,text:`Popover Placement (Top Layer)`,level:3},{id:`keyboard-navigation`,text:`Keyboard Navigation`,level:2},{id:`filtering-behavior`,text:`Filtering Behavior`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`usage-notes`,text:`Usage Notes`,level:2},{id:`forced-colors-mode`,text:`Forced Colors Mode`,level:2},{id:`javascript-requirements`,text:`JavaScript Requirements`,level:2}],H=[{id:`combobox`,text:`Combobox`,level:1,children:[{id:`basic-combobox`,text:`Basic Combobox`,level:2,children:[]},{id:`expanded-state`,text:`Expanded State`,level:2,children:[]},{id:`selected-and-active-states`,text:`Selected and Active States`,level:2,children:[]},{id:`grouped-options`,text:`Grouped Options`,level:2,children:[]},{id:`size-variants`,text:`Size Variants`,level:2,children:[]},{id:`disabled-options`,text:`Disabled Options`,level:2,children:[]},{id:`empty-state`,text:`Empty State`,level:2,children:[]},{id:`loading-state`,text:`Loading State`,level:2,children:[]},{id:`error-state`,text:`Error State`,level:2,children:[]},{id:`disabled-combobox`,text:`Disabled Combobox`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`custom-properties`,text:`Custom Properties`,level:2,children:[]},{id:`attribute-contract`,text:`Attribute Contract`,level:2,children:[]},{id:`placement-modes`,text:`Placement Modes`,level:2,children:[{id:`default-placement-absolute-position`,text:`Default Placement (Absolute Position)`,level:3,children:[]},{id:`popover-placement-top-layer`,text:`Popover Placement (Top Layer)`,level:3,children:[]}]},{id:`keyboard-navigation`,text:`Keyboard Navigation`,level:2,children:[]},{id:`filtering-behavior`,text:`Filtering Behavior`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`usage-notes`,text:`Usage Notes`,level:2,children:[]},{id:`forced-colors-mode`,text:`Forced Colors Mode`,level:2,children:[]},{id:`javascript-requirements`,text:`JavaScript Requirements`,level:2,children:[]}]}],U={css:[],js:[],cleanup:[]},W=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),G=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/extended/combobox.md`,setup(){i(`vlm-toc`,{flat:V,tree:H}),h(()=>c(V,H)),d(()=>c([],[]));let e=m(U);return i(`vlm-inject`,e),h(()=>e.mount()),o(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="combobox">Combobox<a class="header-link" href="#combobox" title="Link to this heading"></a></h1>
<p>Editable select with filterable suggestion list following ARIA combobox pattern.</p>
<h2 id="basic-combobox">Basic Combobox<a class="header-link" href="#basic-combobox" title="Link to this heading"></a></h2>
<p>`}),f(W,{key:0,meta:B[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="expanded-state">Expanded State<a class="header-link" href="#expanded-state" title="Link to this heading"></a></h2>
<p>Use <code>aria-expanded=&quot;true&quot;</code> to show the option list.</p>
<p>`}),f(W,{key:1,meta:B[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="selected-and-active-states">Selected and Active States<a class="header-link" href="#selected-and-active-states" title="Link to this heading"></a></h2>
<p>Options can be selected (<code>aria-selected=&quot;true&quot;</code>) or keyboard-active (<code>data-active</code>).</p>
<p>`}),f(W,{key:2,meta:B[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="grouped-options">Grouped Options<a class="header-link" href="#grouped-options" title="Link to this heading"></a></h2>
<p>Group related options with semantic structure.</p>
<p>`}),f(W,{key:3,meta:B[3]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="size-variants">Size Variants<a class="header-link" href="#size-variants" title="Link to this heading"></a></h2>
<p>Combobox comes in three sizes: small, medium (default), and large.</p>
<p>`}),f(W,{key:4,meta:B[4]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),f(W,{key:5,meta:B[5]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="disabled-options">Disabled Options<a class="header-link" href="#disabled-options" title="Link to this heading"></a></h2>
<p>Use <code>aria-disabled=&quot;true&quot;</code> for non-selectable options.</p>
<p>`}),f(W,{key:6,meta:B[6]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="empty-state">Empty State<a class="header-link" href="#empty-state" title="Link to this heading"></a></h2>
<p>Empty state appears when all options are filtered out (<code>[hidden]</code>).</p>
<p>`}),f(W,{key:7,meta:B[7]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="loading-state">Loading State<a class="header-link" href="#loading-state" title="Link to this heading"></a></h2>
<p>Use <code>aria-busy=&quot;true&quot;</code> to indicate loading.</p>
<p>`}),f(W,{key:8,meta:B[8]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="error-state">Error State<a class="header-link" href="#error-state" title="Link to this heading"></a></h2>
<p>Use <code>aria-invalid=&quot;true&quot;</code> for validation errors.</p>
<p>`}),f(W,{key:9,meta:B[9]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="disabled-combobox">Disabled Combobox<a class="header-link" href="#disabled-combobox" title="Link to this heading"></a></h2>
<p>`}),f(W,{key:10,meta:B[10]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>.en-combobox</code></td>
<td>Combobox container</td>
</tr>
<tr>
<td><code>.en-combobox--sm</code></td>
<td>Small size variant</td>
</tr>
<tr>
<td><code>.en-combobox--lg</code></td>
<td>Large size variant</td>
</tr>
<tr>
<td><code>.en-combobox__input</code></td>
<td>Text input field with combobox role</td>
</tr>
<tr>
<td><code>.en-combobox__list</code></td>
<td>Option list (listbox role)</td>
</tr>
<tr>
<td><code>.en-combobox__group</code></td>
<td>Group label for categorizing options</td>
</tr>
<tr>
<td><code>.en-combobox__option</code></td>
<td>Individual option item (option role)</td>
</tr>
<tr>
<td><code>.en-combobox__empty</code></td>
<td>Empty state message (shown when all options hidden)</td>
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
<td><code>--en-combobox-max</code></td>
<td><code>16rem</code></td>
<td>Maximum height of option list before scrolling</td>
</tr>
</tbody>
</table>
</div><h2 id="attribute-contract">Attribute Contract<a class="header-link" href="#attribute-contract" title="Link to this heading"></a></h2>
<p>Combobox uses ARIA attributes for state management:</p>
<p><strong>Input attributes</strong>:</p>
<ul>
<li><code>role=&quot;combobox&quot;</code> - Identifies the input as a combobox</li>
<li><code>aria-expanded=&quot;true|false&quot;</code> - Controls list visibility (default placement)</li>
<li><code>aria-controls=&quot;list-id&quot;</code> - Points to the listbox element</li>
<li><code>aria-autocomplete=&quot;list&quot;</code> - Indicates suggestion list behavior</li>
<li><code>aria-invalid=&quot;true&quot;</code> - Shows error border</li>
<li><code>autocomplete=&quot;off&quot;</code> - Disables browser autocomplete</li>
</ul>
<p><strong>List attributes</strong>:</p>
<ul>
<li><code>role=&quot;listbox&quot;</code> - Identifies the container as option list</li>
<li><code>popover=&quot;manual&quot;</code> - Optional, enables top-layer popover placement</li>
<li><code>aria-busy=&quot;true&quot;</code> - Dims list while loading results</li>
<li><code>:popover-open</code> - CSS state for popover placement visibility</li>
</ul>
<p><strong>Option attributes</strong>:</p>
<ul>
<li><code>role=&quot;option&quot;</code> - Identifies each selectable item</li>
<li><code>aria-selected=&quot;true&quot;</code> - Marks chosen option (shows checkmark)</li>
<li><code>data-active</code> - Keyboard/highlight state (outline indicator)</li>
<li><code>aria-disabled=&quot;true&quot;</code> - Non-selectable option</li>
<li><code>[hidden]</code> - Filtered out options (not displayed)</li>
</ul>
<p><strong>Group attributes</strong>:</p>
<ul>
<li><code>role=&quot;group&quot;</code> - Grouped options container</li>
<li><code>role=&quot;presentation&quot;</code> - Wrapper for group + label</li>
<li><code>aria-labelledby=&quot;group-id&quot;</code> - Links group to its label</li>
</ul>
<h2 id="placement-modes">Placement Modes<a class="header-link" href="#placement-modes" title="Link to this heading"></a></h2>
<h3 id="default-placement-absolute-position">Default Placement (Absolute Position)<a class="header-link" href="#default-placement-absolute-position" title="Link to this heading"></a></h3>
<p>List appears below input using absolute positioning:</p>
<ul>
<li>Works in all browsers</li>
<li>May clip inside <code>overflow: hidden</code> parents</li>
<li>Controlled by <code>aria-expanded=&quot;true&quot;</code> on input</li>
<li>Uses <code>@starting-style</code> for smooth entrance animation</li>
</ul>
<h3 id="popover-placement-top-layer">Popover Placement (Top Layer)<a class="header-link" href="#popover-placement-top-layer" title="Link to this heading"></a></h3>
<p>Progressive enhancement using Popover API + CSS anchor positioning:</p>
<p>`}),f(W,{key:11,meta:B[11]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Benefits</strong>:</p>
<ul>
<li>Never clipped by parent overflow</li>
<li>Automatically flips above when no room below</li>
<li>Uses <code>position-try-fallbacks: flip-block</code></li>
<li>Controlled by <code>.showPopover()</code> / <code>.hidePopover()</code></li>
</ul>
<p><strong>Browser Support</strong>:</p>
<ul>
<li>Requires CSS anchor positioning support</li>
<li>Automatically detected via <code>@supports</code> query</li>
<li>Falls back to default placement in older browsers</li>
</ul>
<p><strong>JavaScript integration</strong>:
`}),f(W,{key:12,meta:B[12]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="keyboard-navigation">Keyboard Navigation<a class="header-link" href="#keyboard-navigation" title="Link to this heading"></a></h2>
<p>Expected keyboard interactions (requires JavaScript):</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Key</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ArrowDown</code></td>
<td>Move to next option, add <code>data-active</code> attribute</td>
</tr>
<tr>
<td><code>ArrowUp</code></td>
<td>Move to previous option</td>
</tr>
<tr>
<td><code>Enter</code></td>
<td>Select active option, set <code>aria-selected=&quot;true&quot;</code></td>
</tr>
<tr>
<td><code>Escape</code></td>
<td>Close list, set <code>aria-expanded=&quot;false&quot;</code></td>
</tr>
<tr>
<td><code>Tab</code></td>
<td>Move focus out, close list</td>
</tr>
<tr>
<td>Type characters</td>
<td>Filter options, hide non-matches with <code>[hidden]</code></td>
</tr>
</tbody>
</table>
</div><p><strong>ARIA Active Descendant</strong>:</p>
<ul>
<li>Update <code>aria-activedescendant</code> on input to match <code>data-active</code> option ID</li>
<li>Screen readers announce active option as user navigates</li>
</ul>
<h2 id="filtering-behavior">Filtering Behavior<a class="header-link" href="#filtering-behavior" title="Link to this heading"></a></h2>
<p>Combobox CSS provides styling only. Filtering logic must be implemented in JavaScript:</p>
<ol>
<li>User types in input → trigger filter function</li>
<li>Compare input value with option text</li>
<li>Add <code>[hidden]</code> attribute to non-matching options</li>
<li>Remove <code>[hidden]</code> from matching options</li>
<li>If all options hidden → <code>.en-combobox__empty</code> appears automatically</li>
</ol>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<p><strong>ARIA Combobox Pattern</strong>:</p>
<ul>
<li>Follows WAI-ARIA 1.2 combobox pattern</li>
<li>Input has <code>role=&quot;combobox&quot;</code> with proper ARIA attributes</li>
<li>List has <code>role=&quot;listbox&quot;</code>, options have <code>role=&quot;option&quot;</code></li>
<li>Groups use <code>role=&quot;group&quot;</code> with <code>aria-labelledby</code></li>
</ul>
<p><strong>Screen Reader Support</strong>:</p>
<ul>
<li>Active option announced via <code>aria-activedescendant</code></li>
<li>Selected option indicated with checkmark (✓) and <code>aria-selected</code></li>
<li>Group labels provide context for categorized options</li>
<li>Empty state message announced when no results</li>
</ul>
<p><strong>Keyboard Accessibility</strong>:</p>
<ul>
<li>Full keyboard navigation (arrows, enter, escape)</li>
<li>Focus indicators on input and active option</li>
<li>Disabled options not focusable via keyboard</li>
</ul>
<p><strong>Visual Indicators</strong>:</p>
<ul>
<li>Chevron rotates when list open</li>
<li>Selected options show checkmark</li>
<li>Active option has outline</li>
<li>Disabled options use muted color</li>
</ul>
<h2 id="usage-notes">Usage Notes<a class="header-link" href="#usage-notes" title="Link to this heading"></a></h2>
<p><strong>Chevron Indicator</strong>:</p>
<ul>
<li>CSS-only drawing using borders</li>
<li>Rotates 180° when list opens (<code>aria-expanded=&quot;true&quot;</code>)</li>
<li>Positioned absolutely in input padding area</li>
<li>Smooth rotation via transition</li>
</ul>
<p><strong>List Scrolling</strong>:</p>
<ul>
<li>Max height: <code>--en-combobox-max</code> (16rem default)</li>
<li>Vertical scroll when content exceeds max height</li>
<li><code>overscroll-behavior: contain</code> prevents scroll chaining</li>
<li><code>scroll-padding-block</code> ensures focus visibility</li>
</ul>
<p><strong>Selected State</strong>:</p>
<ul>
<li>Background: <code>--en-primary-subtle</code></li>
<li>Text color: <code>--en-text-brand</code></li>
<li>Font weight: medium</li>
<li>Checkmark (✓) suffix</li>
</ul>
<p><strong>Active State (Keyboard Highlight)</strong>:</p>
<ul>
<li>Uses <code>data-active</code> attribute (no native equivalent)</li>
<li>Outline: 2px solid <code>--en-focus-ring</code></li>
<li>Outline offset: -2px (inside option)</li>
<li>Background: <code>--en-bg-hover</code></li>
</ul>
<p><strong>Empty State</strong>:</p>
<ul>
<li>Only shown via <code>:not(:has(.en-combobox__option:not([hidden])))</code></li>
<li>Automatically appears when all options have <code>[hidden]</code></li>
<li>Center-aligned muted text</li>
<li>No interaction states</li>
</ul>
<p><strong>Size Variants</strong>:</p>
<ul>
<li>Small: <code>--en-control-height-sm</code> (compact forms)</li>
<li>Medium: <code>--en-control-height</code> (default)</li>
<li>Large: <code>--en-control-height-lg</code> (prominent fields)</li>
</ul>
<h2 id="forced-colors-mode">Forced Colors Mode<a class="header-link" href="#forced-colors-mode" title="Link to this heading"></a></h2>
<p>High contrast mode support included:</p>
<ul>
<li>Input and list borders use <code>CanvasText</code></li>
<li>Chevron borders use <code>CanvasText</code></li>
<li>Selected options get <code>Highlight</code> outline</li>
<li>Active and focused states use <code>Highlight</code> color</li>
</ul>
<h2 id="javascript-requirements">JavaScript Requirements<a class="header-link" href="#javascript-requirements" title="Link to this heading"></a></h2>
<p>This component requires JavaScript for:</p>
<ol>
<li><strong>Toggle list visibility</strong> - Show/hide on focus/click</li>
<li><strong>Filter options</strong> - Add/remove <code>[hidden]</code> based on input</li>
<li><strong>Keyboard navigation</strong> - Handle arrow keys, enter, escape</li>
<li><strong>Update aria-activedescendant</strong> - Sync with <code>data-active</code></li>
<li><strong>Select option</strong> - Set <code>aria-selected</code>, update input value</li>
<li><strong>Popover API</strong> - Call <code>.showPopover()</code> / <code>.hidePopover()</code> if using popover mode</li>
</ol>
<p>The CSS provides complete styling for all states. Your code controls state transitions.</p>
<p>`}),f(W,{key:13,meta:B[13]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),K={title:`Combobox`,description:`Editable select with filterable suggestion list following ARIA combobox pattern.`},q=G;export{q as default,K as meta};