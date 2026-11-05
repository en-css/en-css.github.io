import{Et as e,I as t,R as n,W as r,at as i,ct as a,et as o,it as s,l as c,m as l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";var g=`<span class="en-sparkline" role="img" aria-label="Last 7 days: trending up">
  <span style="--value: 30"></span>
  <span style="--value: 45"></span>
  <span style="--value: 28"></span>
  <span style="--value: 52"></span>
  <span style="--value: 61"></span>
  <span style="--value: 48"></span>
  <span style="--value: 72"></span>
</span>`,_={__name:`0`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=g,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},v=`<div class="en-flex en-flex--col" style="--en-gap: var(--en-space-3)">
  <div class="en-flex" style="--en-gap: var(--en-space-2)">
    <strong class="en-w-32">Default:</strong>
    <span class="en-sparkline" role="img" aria-label="Neutral trend">
      <span style="--value: 40"></span>
      <span style="--value: 55"></span>
      <span style="--value: 48"></span>
      <span style="--value: 62"></span>
      <span style="--value: 58"></span>
      <span style="--value: 70"></span>
      <span style="--value: 65"></span>
    </span>
  </div>
  
  <div class="en-flex" style="--en-gap: var(--en-space-2)">
    <strong class="en-w-32">Up (Success):</strong>
    <span class="en-sparkline en-sparkline--up" role="img" aria-label="Rising trend">
      <span style="--value: 25"></span>
      <span style="--value: 32"></span>
      <span style="--value: 38"></span>
      <span style="--value: 50"></span>
      <span style="--value: 58"></span>
      <span style="--value: 72"></span>
      <span style="--value: 85"></span>
    </span>
  </div>
  
  <div class="en-flex" style="--en-gap: var(--en-space-2)">
    <strong class="en-w-32">Down (Danger):</strong>
    <span class="en-sparkline en-sparkline--down" role="img" aria-label="Declining trend">
      <span style="--value: 80"></span>
      <span style="--value: 68"></span>
      <span style="--value: 62"></span>
      <span style="--value: 50"></span>
      <span style="--value: 45"></span>
      <span style="--value: 32"></span>
      <span style="--value: 28"></span>
    </span>
  </div>
</div>`,y={__name:`1`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=v,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},b=`<div class="en-card">
  <div class="en-card__body">
    <p>
      Revenue is up 
      <span class="en-sparkline en-sparkline--up" role="img" aria-label="Revenue trend: rising">
        <span style="--value: 45"></span>
        <span style="--value: 52"></span>
        <span style="--value: 48"></span>
        <span style="--value: 65"></span>
        <span style="--value: 72"></span>
      </span>
      compared to last month, while expenses 
      <span class="en-sparkline en-sparkline--down" role="img" aria-label="Expense trend: declining">
        <span style="--value: 60"></span>
        <span style="--value: 52"></span>
        <span style="--value: 48"></span>
        <span style="--value: 42"></span>
        <span style="--value: 38"></span>
      </span>
      are trending down.
    </p>
  </div>
</div>`,x={__name:`2`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=b,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},S=`<table class="en-table">
  <thead>
    <tr>
      <th>Product</th>
      <th>Sales</th>
      <th class="en-text-end">Last 7 Days</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Widget A</td>
      <td>$12,450</td>
      <td class="en-text-end">
        <span class="en-sparkline en-sparkline--up" role="img" aria-label="Widget A sales: rising">
          <span style="--value: 45"></span>
          <span style="--value: 50"></span>
          <span style="--value: 48"></span>
          <span style="--value: 62"></span>
          <span style="--value: 68"></span>
          <span style="--value: 75"></span>
          <span style="--value: 82"></span>
        </span>
      </td>
    </tr>
    <tr>
      <td>Widget B</td>
      <td>$8,230</td>
      <td class="en-text-end">
        <span class="en-sparkline" role="img" aria-label="Widget B sales: stable">
          <span style="--value: 55"></span>
          <span style="--value: 52"></span>
          <span style="--value: 58"></span>
          <span style="--value: 54"></span>
          <span style="--value: 56"></span>
          <span style="--value: 53"></span>
          <span style="--value: 57"></span>
        </span>
      </td>
    </tr>
    <tr>
      <td>Widget C</td>
      <td>$5,890</td>
      <td class="en-text-end">
        <span class="en-sparkline en-sparkline--down" role="img" aria-label="Widget C sales: declining">
          <span style="--value: 72"></span>
          <span style="--value: 65"></span>
          <span style="--value: 58"></span>
          <span style="--value: 52"></span>
          <span style="--value: 45"></span>
          <span style="--value: 38"></span>
          <span style="--value: 32"></span>
        </span>
      </td>
    </tr>
  </tbody>
</table>`,C={__name:`3`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},w=`<div class="en-grid" style="--en-grid-min: 15rem; --en-gap: var(--en-space-4)">
  <div class="en-card">
    <div class="en-card__body">
      <div class="en-flex en-flex--col" style="--en-gap: var(--en-space-2)">
        <span class="en-text-muted en-text-sm">Page Views</span>
        <div class="en-flex en-items-center en-justify-between">
          <span class="en-text-2xl en-font-bold">24.5K</span>
          <span class="en-sparkline en-sparkline--up" role="img" aria-label="Page views trend: rising">
            <span style="--value: 40"></span>
            <span style="--value: 48"></span>
            <span style="--value: 45"></span>
            <span style="--value: 58"></span>
            <span style="--value: 65"></span>
            <span style="--value: 72"></span>
            <span style="--value: 80"></span>
          </span>
        </div>
        <span class="en-text-sm">
          <span class="en-text-success">+12.5%</span> from last week
        </span>
      </div>
    </div>
  </div>
  
  <div class="en-card">
    <div class="en-card__body">
      <div class="en-flex en-flex--col" style="--en-gap: var(--en-space-2)">
        <span class="en-text-muted en-text-sm">Active Users</span>
        <div class="en-flex en-items-center en-justify-between">
          <span class="en-text-2xl en-font-bold">1,284</span>
          <span class="en-sparkline" role="img" aria-label="User trend: stable">
            <span style="--value: 52"></span>
            <span style="--value: 55"></span>
            <span style="--value: 50"></span>
            <span style="--value: 54"></span>
            <span style="--value: 52"></span>
            <span style="--value: 56"></span>
            <span style="--value: 53"></span>
          </span>
        </div>
        <span class="en-text-sm">
          <span class="en-text-muted">~0%</span> no change
        </span>
      </div>
    </div>
  </div>
  
  <div class="en-card">
    <div class="en-card__body">
      <div class="en-flex en-flex--col" style="--en-gap: var(--en-space-2)">
        <span class="en-text-muted en-text-sm">Bounce Rate</span>
        <div class="en-flex en-items-center en-justify-between">
          <span class="en-text-2xl en-font-bold">32%</span>
          <span class="en-sparkline en-sparkline--down" role="img" aria-label="Bounce rate trend: declining">
            <span style="--value: 68"></span>
            <span style="--value: 62"></span>
            <span style="--value: 58"></span>
            <span style="--value: 52"></span>
            <span style="--value: 48"></span>
            <span style="--value: 42"></span>
            <span style="--value: 38"></span>
          </span>
        </div>
        <span class="en-text-sm">
          <span class="en-text-success">-8.2%</span> improvement
        </span>
      </div>
    </div>
  </div>
</div>`,T={__name:`4`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},E=`<div class="en-flex en-flex--col" style="--en-gap: var(--en-space-3)">
  <div class="en-flex" style="--en-gap: var(--en-space-2)">
    <strong>Small:</strong>
    <span class="en-sparkline en-sparkline--up" style="--en-sparkline-width: 4rem; --en-sparkline-height: 1.25rem" role="img" aria-label="Compact trend">
      <span style="--value: 30"></span>
      <span style="--value: 45"></span>
      <span style="--value: 52"></span>
      <span style="--value: 68"></span>
      <span style="--value: 75"></span>
    </span>
  </div>
  
  <div class="en-flex" style="--en-gap: var(--en-space-2)">
    <strong>Default:</strong>
    <span class="en-sparkline" role="img" aria-label="Default size trend">
      <span style="--value: 30"></span>
      <span style="--value: 45"></span>
      <span style="--value: 52"></span>
      <span style="--value: 68"></span>
      <span style="--value: 75"></span>
    </span>
  </div>
  
  <div class="en-flex" style="--en-gap: var(--en-space-2)">
    <strong>Large:</strong>
    <span class="en-sparkline en-sparkline--down" style="--en-sparkline-width: 9rem; --en-sparkline-height: 2.5rem" role="img" aria-label="Expanded trend">
      <span style="--value: 75"></span>
      <span style="--value: 68"></span>
      <span style="--value: 62"></span>
      <span style="--value: 50"></span>
      <span style="--value: 42"></span>
    </span>
  </div>
</div>`,D={__name:`5`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=E,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},O=`<div class="en-card">
  <div class="en-card__body">
    <div class="en-flex en-flex--col" style="--en-gap: var(--en-space-2)">
      <strong>Last 30 Days Activity</strong>
      <span class="en-sparkline en-sparkline--up" style="--en-sparkline-width: 100%" role="img" aria-label="30-day trend: rising">
        <span style="--value: 32"></span>
        <span style="--value: 35"></span>
        <span style="--value: 38"></span>
        <span style="--value: 34"></span>
        <span style="--value: 40"></span>
        <span style="--value: 38"></span>
        <span style="--value: 42"></span>
        <span style="--value: 45"></span>
        <span style="--value: 48"></span>
        <span style="--value: 44"></span>
        <span style="--value: 50"></span>
        <span style="--value: 48"></span>
        <span style="--value: 52"></span>
        <span style="--value: 55"></span>
        <span style="--value: 58"></span>
        <span style="--value: 54"></span>
        <span style="--value: 60"></span>
        <span style="--value: 58"></span>
        <span style="--value: 62"></span>
        <span style="--value: 65"></span>
        <span style="--value: 68"></span>
        <span style="--value: 64"></span>
        <span style="--value: 70"></span>
        <span style="--value: 68"></span>
        <span style="--value: 72"></span>
        <span style="--value: 75"></span>
        <span style="--value: 78"></span>
        <span style="--value: 74"></span>
        <span style="--value: 80"></span>
        <span style="--value: 82"></span>
      </span>
    </div>
  </div>
</div>`,k={__name:`6`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=O,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},A=`<div class="en-flex en-flex--col" style="--en-gap: var(--en-space-3)">
  <div>
    <strong class="en-block en-mb-2">SVG Line Sparkline:</strong>
    <span class="en-sparkline en-sparkline--up">
      <svg viewBox="0 0 100 30" preserveAspectRatio="none">
        <path class="en-sparkline__area" d="M0,25 L20,18 L40,22 L60,12 L80,8 L100,5 L100,30 L0,30 Z"/>
        <path class="en-sparkline__line" d="M0,25 L20,18 L40,22 L60,12 L80,8 L100,5"/>
      </svg>
    </span>
  </div>
  
  <div>
    <strong class="en-block en-mb-2">SVG Line Sparkline (Down):</strong>
    <span class="en-sparkline en-sparkline--down">
      <svg viewBox="0 0 100 30" preserveAspectRatio="none">
        <path class="en-sparkline__area" d="M0,5 L20,8 L40,12 L60,15 L80,20 L100,25 L100,30 L0,30 Z"/>
        <path class="en-sparkline__line" d="M0,5 L20,8 L40,12 L60,15 L80,20 L100,25"/>
      </svg>
    </span>
  </div>
</div>`,j={__name:`7`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=A,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},M=`<div class="en-card">
  <div class="en-card__header">
    <h3 class="en-card__title">Performance Overview</h3>
  </div>
  <div class="en-card__body">
    <div class="en-flex en-flex--col" style="--en-gap: var(--en-space-4)">
      <div class="en-flex en-items-center en-justify-between">
        <div>
          <div class="en-text-muted en-text-sm">Revenue</div>
          <div class="en-text-2xl en-font-bold">$54,239</div>
        </div>
        <span class="en-sparkline en-sparkline--up" role="img" aria-label="Revenue trending up">
          <span style="--value: 42"></span>
          <span style="--value: 48"></span>
          <span style="--value: 52"></span>
          <span style="--value: 58"></span>
          <span style="--value: 65"></span>
          <span style="--value: 72"></span>
          <span style="--value: 78"></span>
        </span>
      </div>
      
      <div class="en-flex en-items-center en-justify-between">
        <div>
          <div class="en-text-muted en-text-sm">Orders</div>
          <div class="en-text-2xl en-font-bold">1,847</div>
        </div>
        <span class="en-sparkline" role="img" aria-label="Orders stable">
          <span style="--value: 50"></span>
          <span style="--value: 54"></span>
          <span style="--value: 52"></span>
          <span style="--value: 56"></span>
          <span style="--value: 53"></span>
          <span style="--value: 55"></span>
          <span style="--value: 54"></span>
        </span>
      </div>
      
      <div class="en-flex en-items-center en-justify-between">
        <div>
          <div class="en-text-muted en-text-sm">Refunds</div>
          <div class="en-text-2xl en-font-bold">23</div>
        </div>
        <span class="en-sparkline en-sparkline--down" role="img" aria-label="Refunds declining">
          <span style="--value: 62"></span>
          <span style="--value: 58"></span>
          <span style="--value: 52"></span>
          <span style="--value: 48"></span>
          <span style="--value: 42"></span>
          <span style="--value: 35"></span>
          <span style="--value: 30"></span>
        </span>
      </div>
    </div>
  </div>
</div>`,N={__name:`8`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=M,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},P={};function F(e,n){let r=a(`Downloadable`);return s(),t(r,{"dev-url":`components/extended/components-chart.css`})}var I={0:{component:_,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Last 7 days: trending up"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 30"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 45"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 28"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 61"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 72"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Simple sparkline with 7 data points`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-w-32"</span><span class="shiki-foreground">>Default:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Neutral trend"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 40"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 55"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 62"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 58"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 70"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 65"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-w-32"</span><span class="shiki-foreground">>Up (Success):&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--up"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Rising trend"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 25"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 32"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 38"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 50"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 58"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 72"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 85"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-w-32"</span><span class="shiki-foreground">>Down (Danger):&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--down"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Declining trend"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 80"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 68"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 62"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 50"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 45"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 32"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 28"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sparklines with semantic colors`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Revenue is up </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--up"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Revenue trend: rising"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 45"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 65"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 72"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      compared to last month, while expenses </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--down"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Expense trend: declining"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 60"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 42"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 38"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      are trending down.</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sparkline embedded in paragraph`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Product&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Sales&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-end"</span><span class="shiki-foreground">>Last 7 Days&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Widget A&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$12,450&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-end"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--up"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Widget A sales: rising"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 45"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 50"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 62"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 68"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 75"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 82"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Widget B&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$8,230&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-end"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Widget B sales: stable"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 55"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 58"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 54"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 56"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 53"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 57"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Widget C&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$5,890&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-end"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--down"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Widget C sales: declining"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 72"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 65"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 58"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 45"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 38"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 32"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sparklines showing trends in table`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 15rem; --en-gap: var(--en-space-4)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted en-text-sm"</span><span class="shiki-foreground">>Page Views&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-items-center en-justify-between"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-2xl en-font-bold"</span><span class="shiki-foreground">>24.5K&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--up"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Page views trend: rising"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 40"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 45"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 58"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 65"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 72"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 80"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-success"</span><span class="shiki-foreground">>+12.5%&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">> from last week</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted en-text-sm"</span><span class="shiki-foreground">>Active Users&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-items-center en-justify-between"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-2xl en-font-bold"</span><span class="shiki-foreground">>1,284&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"User trend: stable"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 55"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 50"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 54"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 56"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 53"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted"</span><span class="shiki-foreground">>~0%&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">> no change</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted en-text-sm"</span><span class="shiki-foreground">>Bounce Rate&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-items-center en-justify-between"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-2xl en-font-bold"</span><span class="shiki-foreground">>32%&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--down"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Bounce rate trend: declining"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 68"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 62"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 58"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 42"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 38"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-success"</span><span class="shiki-foreground">>-8.2%&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">> improvement</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Stat cards with sparklines`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Small:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--up"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-sparkline-width: 4rem; --en-sparkline-height: 1.25rem"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Compact trend"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 30"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 45"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 68"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 75"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Default:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Default size trend"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 30"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 45"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 68"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 75"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Large:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--down"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-sparkline-width: 9rem; --en-sparkline-height: 2.5rem"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Expanded trend"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 75"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 68"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 62"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 50"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 42"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Larger sparklines with custom dimensions`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:k,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Last 30 Days Activity&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--up"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-sparkline-width: 100%"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"30-day trend: rising"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 32"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 35"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 38"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 34"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 40"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 38"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 42"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 45"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 44"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 50"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 55"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 58"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 54"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 60"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 58"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 62"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 65"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 68"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 64"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 70"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 68"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 72"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 75"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 78"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 74"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 80"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 82"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sparkline with many data points`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-block en-mb-2"</span><span class="shiki-foreground">>SVG Line Sparkline:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--up"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 100 30"</span><span class="shiki-token-function"> preserveAspectRatio</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline__area"</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M0,25 L20,18 L40,22 L60,12 L80,8 L100,5 L100,30 L0,30 Z"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline__line"</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M0,25 L20,18 L40,22 L60,12 L80,8 L100,5"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-block en-mb-2"</span><span class="shiki-foreground">>SVG Line Sparkline (Down):&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--down"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 100 30"</span><span class="shiki-token-function"> preserveAspectRatio</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline__area"</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M0,5 L20,8 L40,12 L60,15 L80,20 L100,25 L100,30 L0,30 Z"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline__line"</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M0,5 L20,8 L40,12 L60,15 L80,20 L100,25"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`SVG-based sparkline with area and line`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:N,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Performance Overview&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-4)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-items-center en-justify-between"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted en-text-sm"</span><span class="shiki-foreground">>Revenue&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-2xl en-font-bold"</span><span class="shiki-foreground">>$54,239&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--up"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Revenue trending up"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 42"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 58"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 65"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 72"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 78"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-items-center en-justify-between"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted en-text-sm"</span><span class="shiki-foreground">>Orders&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-2xl en-font-bold"</span><span class="shiki-foreground">>1,847&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Orders stable"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 50"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 54"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 56"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 53"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 55"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 54"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-items-center en-justify-between"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted en-text-sm"</span><span class="shiki-foreground">>Refunds&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-2xl en-font-bold"</span><span class="shiki-foreground">>23&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline en-sparkline--down"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Refunds declining"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 62"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 58"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 52"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 48"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 42"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 35"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: 30"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Complete dashboard with sparklines`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline [--variant]"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"[description]"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: [0-100]"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--value: [0-100]"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- More data points... --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline [--variant]"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"[description]"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 100 30"</span><span class="shiki-token-function"> preserveAspectRatio</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline__area"</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"[SVG path]"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sparkline__line"</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"[SVG path]"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:l(P,[[`render`,F]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/extended/components-chart.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:11,lang:`vue`,injectKind:null,editable:!1,source:null}},L=[{id:`sparkline`,text:`Sparkline`,level:1},{id:`basic-sparkline`,text:`Basic Sparkline`,level:2},{id:`color-variants`,text:`Color Variants`,level:2},{id:`inline-with-text`,text:`Inline with Text`,level:2},{id:`in-table`,text:`In Table`,level:2},{id:`in-cards`,text:`In Cards`,level:2},{id:`custom-size`,text:`Custom Size`,level:2},{id:`multiple-data-points`,text:`Multiple Data Points`,level:2},{id:`with-svg-optional`,text:`With SVG (Optional)`,level:2},{id:`dashboard-example`,text:`Dashboard Example`,level:2},{id:`classes`,text:`Classes`,level:2},{id:`custom-properties`,text:`Custom Properties`,level:2},{id:`attributes`,text:`Attributes`,level:2},{id:`structure-guidelines`,text:`Structure Guidelines`,level:2},{id:`usage-guidelines`,text:`Usage Guidelines`,level:2},{id:`inline-display`,text:`Inline Display`,level:2},{id:`data-representation`,text:`Data Representation`,level:2},{id:`notes`,text:`Notes`,level:2}],R=[{id:`sparkline`,text:`Sparkline`,level:1,children:[{id:`basic-sparkline`,text:`Basic Sparkline`,level:2,children:[]},{id:`color-variants`,text:`Color Variants`,level:2,children:[]},{id:`inline-with-text`,text:`Inline with Text`,level:2,children:[]},{id:`in-table`,text:`In Table`,level:2,children:[]},{id:`in-cards`,text:`In Cards`,level:2,children:[]},{id:`custom-size`,text:`Custom Size`,level:2,children:[]},{id:`multiple-data-points`,text:`Multiple Data Points`,level:2,children:[]},{id:`with-svg-optional`,text:`With SVG (Optional)`,level:2,children:[]},{id:`dashboard-example`,text:`Dashboard Example`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`custom-properties`,text:`Custom Properties`,level:2,children:[]},{id:`attributes`,text:`Attributes`,level:2,children:[]},{id:`structure-guidelines`,text:`Structure Guidelines`,level:2,children:[]},{id:`usage-guidelines`,text:`Usage Guidelines`,level:2,children:[]},{id:`inline-display`,text:`Inline Display`,level:2,children:[]},{id:`data-representation`,text:`Data Representation`,level:2,children:[]},{id:`notes`,text:`Notes`,level:2,children:[]}]}],z={css:[],js:[],cleanup:[]},B=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),V=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/extended/sparkline.md`,setup(){i(`vlm-toc`,{flat:L,tree:R}),h(()=>c(L,R)),d(()=>c([],[]));let e=m(z);return i(`vlm-inject`,e),h(()=>e.mount()),o(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="sparkline">Sparkline<a class="header-link" href="#sparkline" title="Link to this heading"></a></h1>
<p>Inline mini chart showing data trends at a glance, perfect for embedding in tables, cards, or text content.</p>
<h2 id="basic-sparkline">Basic Sparkline<a class="header-link" href="#basic-sparkline" title="Link to this heading"></a></h2>
<p>`}),f(B,{key:0,meta:I[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="color-variants">Color Variants<a class="header-link" href="#color-variants" title="Link to this heading"></a></h2>
<p>`}),f(B,{key:1,meta:I[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="inline-with-text">Inline with Text<a class="header-link" href="#inline-with-text" title="Link to this heading"></a></h2>
<p>`}),f(B,{key:2,meta:I[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="in-table">In Table<a class="header-link" href="#in-table" title="Link to this heading"></a></h2>
<p>`}),f(B,{key:3,meta:I[3]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="in-cards">In Cards<a class="header-link" href="#in-cards" title="Link to this heading"></a></h2>
<p>`}),f(B,{key:4,meta:I[4]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="custom-size">Custom Size<a class="header-link" href="#custom-size" title="Link to this heading"></a></h2>
<p>`}),f(B,{key:5,meta:I[5]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="multiple-data-points">Multiple Data Points<a class="header-link" href="#multiple-data-points" title="Link to this heading"></a></h2>
<p>`}),f(B,{key:6,meta:I[6]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="with-svg-optional">With SVG (Optional)<a class="header-link" href="#with-svg-optional" title="Link to this heading"></a></h2>
<p>`}),f(B,{key:7,meta:I[7]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="dashboard-example">Dashboard Example<a class="header-link" href="#dashboard-example" title="Link to this heading"></a></h2>
<p>`}),f(B,{key:8,meta:I[8]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>.en-sparkline</code></td>
<td>Inline sparkline container</td>
</tr>
<tr>
<td><code>.en-sparkline--up</code></td>
<td>Success color (green) for upward trends</td>
</tr>
<tr>
<td><code>.en-sparkline--down</code></td>
<td>Danger color (red) for downward trends</td>
</tr>
<tr>
<td><code>.en-sparkline__line</code></td>
<td>SVG line stroke style</td>
</tr>
<tr>
<td><code>.en-sparkline__area</code></td>
<td>SVG area fill style</td>
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
<td><code>--value</code></td>
<td><code>0</code></td>
<td>Bar height as percentage (0-100) per <code>&lt;span&gt;</code></td>
</tr>
<tr>
<td><code>--en-sparkline-width</code></td>
<td><code>6rem</code></td>
<td>Width of sparkline</td>
</tr>
<tr>
<td><code>--en-sparkline-height</code></td>
<td><code>1.75rem</code></td>
<td>Height of sparkline</td>
</tr>
<tr>
<td><code>--en-chart-color</code></td>
<td><code>--en-chart-1</code></td>
<td>Custom color override</td>
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
<td><code>role</code></td>
<td><code>&quot;img&quot;</code></td>
<td>Semantic role for accessibility</td>
</tr>
<tr>
<td><code>aria-label</code></td>
<td>string</td>
<td>Descriptive summary of the data trend</td>
</tr>
</tbody>
</table>
</div><h2 id="structure-guidelines">Structure Guidelines<a class="header-link" href="#structure-guidelines" title="Link to this heading"></a></h2>
<p><strong>Bar-based sparkline</strong> (default):
`}),f(B,{key:9,meta:I[9]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>SVG-based sparkline</strong> (optional):
`}),f(B,{key:10,meta:I[10]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="usage-guidelines">Usage Guidelines<a class="header-link" href="#usage-guidelines" title="Link to this heading"></a></h2>
<p><strong>Number of data points</strong>:</p>
<ul>
<li><strong>5-10 points</strong>: Ideal for most use cases</li>
<li><strong>10-20 points</strong>: Good for weekly/monthly trends</li>
<li><strong>20+ points</strong>: Use full width or larger size</li>
</ul>
<p><strong>Color selection</strong>:</p>
<ul>
<li><strong>Default</strong>: Neutral trends, general data</li>
<li><strong>–up (Success)</strong>: Positive growth, increasing metrics</li>
<li><strong>–down (Danger)</strong>: Declining metrics, negative trends</li>
</ul>
<p><strong>Accessibility</strong>:</p>
<ul>
<li>Always include <code>role=&quot;img&quot;</code></li>
<li>Provide descriptive <code>aria-label</code> explaining the trend</li>
<li>Label should state: data type, direction, and context</li>
<li>Example: <code>&quot;Last 7 days: sales trending up&quot;</code></li>
</ul>
<h2 id="inline-display">Inline Display<a class="header-link" href="#inline-display" title="Link to this heading"></a></h2>
<ul>
<li>Uses <code>display: inline-flex</code> with <code>vertical-align: middle</code></li>
<li>Aligns naturally with surrounding text</li>
<li>No line breaks introduced</li>
<li>Perfect for embedding in paragraphs, table cells, or headings</li>
</ul>
<h2 id="data-representation">Data Representation<a class="header-link" href="#data-representation" title="Link to this heading"></a></h2>
<ul>
<li>Values are percentages (0-100) relative to sparkline height</li>
<li>Each <code>&lt;span&gt;</code> is one data point</li>
<li>Bars have minimum height of 2px for visibility</li>
<li>Gap between bars: 2px</li>
<li>Equal width distribution (flex: 1 1 0)</li>
</ul>
<h2 id="notes">Notes<a class="header-link" href="#notes" title="Link to this heading"></a></h2>
<ul>
<li>No JavaScript required (pure CSS)</li>
<li>SVG mode optional for smooth curves</li>
<li>Works in forced-colors mode (high contrast)</li>
<li>Flexbox-based layout for automatic spacing</li>
<li>Bar mode has rounded corners (1px radius)</li>
<li>Values animate smoothly when changed (transitions)</li>
</ul>
<p>`}),f(B,{key:11,meta:I[11]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),H={title:`Sparkline`,description:`Inline mini chart showing data trends at a glance, perfect for embedding in tables, cards, or text content.`},U=V;export{U as default,H as meta};