import{Et as e,I as t,R as n,W as r,at as i,ct as a,et as o,it as s,l as c,m as l,n as u,nt as d,q as f,r as p,s as m,tt as h}from"./components-BJME9hSd.js";var g=`<button class="en-btn en-btn--primary" onclick="document.getElementById('offcanvas1').classList.add('en-offcanvas--open'); document.getElementById('backdrop1').classList.add('en-offcanvas__backdrop--open')">
  Open Menu
</button>

<aside id="offcanvas1" class="en-offcanvas en-offcanvas--start">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Menu</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('offcanvas1').classList.remove('en-offcanvas--open'); document.getElementById('backdrop1').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <nav>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-block-end: var(--en-space-2);"><a href="#" style="text-decoration: none;">Dashboard</a></li>
        <li style="margin-block-end: var(--en-space-2);"><a href="#" style="text-decoration: none;">Products</a></li>
        <li style="margin-block-end: var(--en-space-2);"><a href="#" style="text-decoration: none;">Orders</a></li>
        <li style="margin-block-end: var(--en-space-2);"><a href="#" style="text-decoration: none;">Customers</a></li>
        <li><a href="#" style="text-decoration: none;">Settings</a></li>
      </ul>
    </nav>
  </div>
</aside>

<div id="backdrop1" class="en-offcanvas__backdrop" onclick="document.getElementById('offcanvas1').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,_={__name:`0`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=g,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},v=`<button class="en-btn en-btn--primary" onclick="document.getElementById('offcanvas2').classList.add('en-offcanvas--open'); document.getElementById('backdrop2').classList.add('en-offcanvas__backdrop--open')">
  Open from End
</button>

<aside id="offcanvas2" class="en-offcanvas en-offcanvas--end">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Settings</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('offcanvas2').classList.remove('en-offcanvas--open'); document.getElementById('backdrop2').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <p>Offcanvas slides in from the end edge (right side in LTR layouts, left side in RTL).</p>
    <div style="margin-block-start: var(--en-space-4);">
      <label style="display: flex; align-items: center; gap: var(--en-space-2); margin-block-end: var(--en-space-2);">
        <input type="checkbox" checked>
        <span>Enable notifications</span>
      </label>
      <label style="display: flex; align-items: center; gap: var(--en-space-2); margin-block-end: var(--en-space-2);">
        <input type="checkbox">
        <span>Dark mode</span>
      </label>
      <label style="display: flex; align-items: center; gap: var(--en-space-2);">
        <input type="checkbox" checked>
        <span>Auto-save</span>
      </label>
    </div>
  </div>
</aside>

<div id="backdrop2" class="en-offcanvas__backdrop" onclick="document.getElementById('offcanvas2').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,y={__name:`1`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=v,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},b=`<button class="en-btn" onclick="document.getElementById('offcanvas-sm').classList.add('en-offcanvas--open'); document.getElementById('backdrop-sm').classList.add('en-offcanvas__backdrop--open')">Open Small Offcanvas</button>

<aside id="offcanvas-sm" class="en-offcanvas en-offcanvas--start en-offcanvas--sm">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Small Offcanvas</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('offcanvas-sm').classList.remove('en-offcanvas--open'); document.getElementById('backdrop-sm').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <p>Small width: min(80vw, 16rem)</p>
    <p style="font-size: var(--en-text-sm); color: var(--en-text-muted);">Perfect for compact navigation or quick actions.</p>
  </div>
</aside>

<div id="backdrop-sm" class="en-offcanvas__backdrop" onclick="document.getElementById('offcanvas-sm').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,x={__name:`2`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=b,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},S=`<button class="en-btn" onclick="document.getElementById('offcanvas-default').classList.add('en-offcanvas--open'); document.getElementById('backdrop-default').classList.add('en-offcanvas__backdrop--open')">Open Default Offcanvas</button>

<aside id="offcanvas-default" class="en-offcanvas en-offcanvas--start">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Default Offcanvas</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('offcanvas-default').classList.remove('en-offcanvas--open'); document.getElementById('backdrop-default').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <p>Default width: min(85vw, 20rem)</p>
    <p style="font-size: var(--en-text-sm); color: var(--en-text-muted);">Standard size for most use cases.</p>
  </div>
</aside>

<div id="backdrop-default" class="en-offcanvas__backdrop" onclick="document.getElementById('offcanvas-default').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,C={__name:`3`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},w=`<button class="en-btn" onclick="document.getElementById('offcanvas-lg').classList.add('en-offcanvas--open'); document.getElementById('backdrop-lg').classList.add('en-offcanvas__backdrop--open')">Open Large Offcanvas</button>

<aside id="offcanvas-lg" class="en-offcanvas en-offcanvas--start en-offcanvas--lg">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Large Offcanvas</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('offcanvas-lg').classList.remove('en-offcanvas--open'); document.getElementById('backdrop-lg').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <p>Large width: min(90vw, 28rem)</p>
    <p style="font-size: var(--en-text-sm); color: var(--en-text-muted);">Spacious layout for detailed content or forms.</p>
  </div>
</aside>

<div id="backdrop-lg" class="en-offcanvas__backdrop" onclick="document.getElementById('offcanvas-lg').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,T={__name:`4`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},E=`<button class="en-btn en-btn--primary" onclick="toggleOffcanvas('offcanvas-float', 'backdrop-float', true)">
  Open Floating Panel
</button>

<aside id="offcanvas-float" class="en-offcanvas en-offcanvas--start en-offcanvas--floating">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Floating Panel</h3>
    <button class="en-offcanvas__close" onclick="toggleOffcanvas('offcanvas-float', 'backdrop-float', false)" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <p>Floating variant has:</p>
    <ul>
      <li>Gap from screen edges (var(--en-space-3))</li>
      <li>Rounded corners</li>
      <li>Border for definition</li>
      <li>Modern, card-like appearance</li>
    </ul>
  </div>
</aside>

<div id="backdrop-float" class="en-offcanvas__backdrop" onclick="toggleOffcanvas('offcanvas-float', 'backdrop-float', false)"></div>`,D={__name:`7`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=E,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},O=`<button class="en-btn en-btn--primary" onclick="document.getElementById('offcanvas-round').classList.add('en-offcanvas--open'); document.getElementById('backdrop-round').classList.add('en-offcanvas__backdrop--open')">
  Open Rounded Panel
</button>

<aside id="offcanvas-round" class="en-offcanvas en-offcanvas--start en-offcanvas--rounded">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Rounded Corners</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('offcanvas-round').classList.remove('en-offcanvas--open'); document.getElementById('backdrop-round').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <p>Rounded variant stays attached to the screen edge but has rounded inner corners for a softer appearance.</p>
  </div>
</aside>

<div id="backdrop-round" class="en-offcanvas__backdrop" onclick="document.getElementById('offcanvas-round').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,k={__name:`8`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=O,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},A=`<button class="en-btn en-btn--primary" onclick="document.getElementById('offcanvas-compact').classList.add('en-offcanvas--open'); document.getElementById('backdrop-compact').classList.add('en-offcanvas__backdrop--open')">
  Open Compact Panel
</button>

<aside id="offcanvas-compact" class="en-offcanvas en-offcanvas--start en-offcanvas--compact">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Compact Layout</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('offcanvas-compact').classList.remove('en-offcanvas--open'); document.getElementById('backdrop-compact').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <p>Compact variant reduces padding for a tighter layout. Useful when space is limited or you have many items to display.</p>
    <ul style="font-size: var(--en-text-sm);">
      <li>Smaller header padding</li>
      <li>Reduced body spacing</li>
      <li>Tighter footer layout</li>
      <li>Base font size for title</li>
    </ul>
  </div>
  <div class="en-offcanvas__footer">
    <button class="en-btn en-btn--sm">Cancel</button>
    <button class="en-btn en-btn--primary en-btn--sm">Save</button>
  </div>
</aside>

<div id="backdrop-compact" class="en-offcanvas__backdrop" onclick="document.getElementById('offcanvas-compact').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,j={__name:`9`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=A,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},M=`<button class="en-btn en-btn--primary" onclick="document.getElementById('offcanvas-footer').classList.add('en-offcanvas--open'); document.getElementById('backdrop-footer').classList.add('en-offcanvas__backdrop--open')">
  Open Filters
</button>

<aside id="offcanvas-footer" class="en-offcanvas en-offcanvas--start">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Filter Products</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('offcanvas-footer').classList.remove('en-offcanvas--open'); document.getElementById('backdrop-footer').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <div style="margin-block-end: var(--en-space-3);">
      <label style="display: block; margin-block-end: var(--en-space-1); font-weight: 500;">Category</label>
      <select class="en-select">
        <option>All Categories</option>
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Books</option>
      </select>
    </div>
    
    <div style="margin-block-end: var(--en-space-3);">
      <label style="display: block; margin-block-end: var(--en-space-1); font-weight: 500;">Price Range</label>
      <input type="range" style="width: 100%;">
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
  <div class="en-offcanvas__footer">
    <button class="en-btn en-btn--outline" onclick="document.getElementById('offcanvas-footer').classList.remove('en-offcanvas--open'); document.getElementById('backdrop-footer').classList.remove('en-offcanvas__backdrop--open')">Reset</button>
    <button class="en-btn en-btn--primary" onclick="document.getElementById('offcanvas-footer').classList.remove('en-offcanvas--open'); document.getElementById('backdrop-footer').classList.remove('en-offcanvas__backdrop--open')">Apply Filters</button>
  </div>
</aside>

<div id="backdrop-footer" class="en-offcanvas__backdrop" onclick="document.getElementById('offcanvas-footer').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,N={__name:`10`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=M,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},P=`<button class="en-btn" onclick="document.getElementById('nav-menu').classList.add('en-offcanvas--open'); document.getElementById('nav-backdrop').classList.add('en-offcanvas__backdrop--open')">
  ☰ Menu
</button>

<aside id="nav-menu" class="en-offcanvas en-offcanvas--start">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Navigation</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('nav-menu').classList.remove('en-offcanvas--open'); document.getElementById('nav-backdrop').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <nav>
      <div style="margin-block-end: var(--en-space-4);">
        <h4 style="margin-block-end: var(--en-space-2); font-size: var(--en-text-sm); font-weight: 600; color: var(--en-text-muted); text-transform: uppercase;">Main</h4>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="margin-block-end: var(--en-space-1);"><a href="#" style="text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);">Dashboard</a></li>
          <li style="margin-block-end: var(--en-space-1);"><a href="#" style="text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);">Products</a></li>
          <li style="margin-block-end: var(--en-space-1);"><a href="#" style="text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);">Orders</a></li>
        </ul>
      </div>
      
      <div>
        <h4 style="margin-block-end: var(--en-space-2); font-size: var(--en-text-sm); font-weight: 600; color: var(--en-text-muted); text-transform: uppercase;">Account</h4>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="margin-block-end: var(--en-space-1);"><a href="#" style="text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);">Profile</a></li>
          <li style="margin-block-end: var(--en-space-1);"><a href="#" style="text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);">Settings</a></li>
          <li><a href="#" style="text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</aside>

<div id="nav-backdrop" class="en-offcanvas__backdrop" onclick="document.getElementById('nav-menu').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,F={__name:`11`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=P,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},I=`<button class="en-btn" onclick="document.getElementById('cart').classList.add('en-offcanvas--open'); document.getElementById('cart-backdrop').classList.add('en-offcanvas__backdrop--open')">
  🛒 Cart (3)
</button>

<aside id="cart" class="en-offcanvas en-offcanvas--end">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Shopping Cart</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('cart').classList.remove('en-offcanvas--open'); document.getElementById('cart-backdrop').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <div class="en-flex" style="--en-direction: column; --en-gap: var(--en-space-3);">
      <div class="en-flex" style="--en-gap: var(--en-space-3);">
        <div style="inline-size: 60px; block-size: 60px; background: var(--en-bg-subtle); border-radius: var(--en-radius-md);"></div>
        <div style="flex: 1;">
          <p style="margin: 0; font-weight: 500;">Product Name</p>
          <p style="margin: 0; font-size: var(--en-text-sm); color: var(--en-text-muted);">Quantity: 1</p>
          <p style="margin: 0; font-weight: 600;">$49.99</p>
        </div>
      </div>
      
      <div class="en-flex" style="--en-gap: var(--en-space-3);">
        <div style="inline-size: 60px; block-size: 60px; background: var(--en-bg-subtle); border-radius: var(--en-radius-md);"></div>
        <div style="flex: 1;">
          <p style="margin: 0; font-weight: 500;">Another Product</p>
          <p style="margin: 0; font-size: var(--en-text-sm); color: var(--en-text-muted);">Quantity: 2</p>
          <p style="margin: 0; font-weight: 600;">$79.98</p>
        </div>
      </div>
      
      <hr class="en-divider">
      
      <div class="en-flex" style="justify-content: space-between;">
        <span>Subtotal:</span>
        <strong>$129.97</strong>
      </div>
      <div class="en-flex" style="justify-content: space-between;">
        <span>Shipping:</span>
        <strong>$10.00</strong>
      </div>
      <div class="en-flex" style="justify-content: space-between; font-size: var(--en-text-lg);">
        <strong>Total:</strong>
        <strong>$139.97</strong>
      </div>
    </div>
  </div>
  <div class="en-offcanvas__footer" style="flex-direction: column; gap: var(--en-space-2);">
    <button class="en-btn en-btn--primary en-btn--full" onclick="document.getElementById('cart').classList.remove('en-offcanvas--open'); document.getElementById('cart-backdrop').classList.remove('en-offcanvas__backdrop--open')">Checkout</button>
    <button class="en-btn en-btn--outline en-btn--full" onclick="document.getElementById('cart').classList.remove('en-offcanvas--open'); document.getElementById('cart-backdrop').classList.remove('en-offcanvas__backdrop--open')">Continue Shopping</button>
  </div>
</aside>

<div id="cart-backdrop" class="en-offcanvas__backdrop" onclick="document.getElementById('cart').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,L={__name:`12`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=I,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},R=`<button class="en-btn en-btn--primary" onclick="document.getElementById('combined').classList.add('en-offcanvas--open'); document.getElementById('combined-backdrop').classList.add('en-offcanvas__backdrop--open')">
  Open Combined Variants
</button>

<aside id="combined" class="en-offcanvas en-offcanvas--end en-offcanvas--floating en-offcanvas--compact en-offcanvas--sm">
  <div class="en-offcanvas__header">
    <h3 class="en-offcanvas__title">Quick Actions</h3>
    <button class="en-offcanvas__close" onclick="document.getElementById('combined').classList.remove('en-offcanvas--open'); document.getElementById('combined-backdrop').classList.remove('en-offcanvas__backdrop--open')" aria-label="Close">&times;</button>
  </div>
  <div class="en-offcanvas__body">
    <p style="font-size: var(--en-text-sm);">This offcanvas combines:</p>
    <ul style="font-size: var(--en-text-sm); margin: 0;">
      <li>End placement</li>
      <li>Floating appearance</li>
      <li>Compact spacing</li>
      <li>Small width</li>
    </ul>
  </div>
  <div class="en-offcanvas__footer">
    <button class="en-btn en-btn--sm en-btn--full en-btn--primary">Action</button>
  </div>
</aside>

<div id="combined-backdrop" class="en-offcanvas__backdrop" onclick="document.getElementById('combined').classList.remove('en-offcanvas--open'); this.classList.remove('en-offcanvas__backdrop--open')"></div>`,z={__name:`13`,setup(t){let r=e(null);return h(()=>{r.value&&(r.value.innerHTML=R,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(s(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},B={};function V(e,n){let r=a(`Downloadable`);return s(),t(r,{"dev-url":`components/basic/components-offcanvas.css`})}var H={0:{component:_,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas1').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop1').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Open Menu</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"offcanvas1"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Menu&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas1').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop1').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list-style: none; padding: 0; margin: 0;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-2);"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none;"</span><span class="shiki-foreground">>Dashboard&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-2);"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none;"</span><span class="shiki-foreground">>Products&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-2);"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none;"</span><span class="shiki-foreground">>Orders&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-2);"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none;"</span><span class="shiki-foreground">>Customers&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none;"</span><span class="shiki-foreground">>Settings&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"backdrop1"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas1').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Basic offcanvas from start`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas2').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop2').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Open from End</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"offcanvas2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--end"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Settings&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas2').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop2').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Offcanvas slides in from the end edge (right side in LTR layouts, left side in RTL).&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: var(--en-space-4);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: flex; align-items: center; gap: var(--en-space-2); margin-block-end: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Enable notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: flex; align-items: center; gap: var(--en-space-2); margin-block-end: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Dark mode&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: flex; align-items: center; gap: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Auto-save&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"backdrop2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas2').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Offcanvas from end`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-sm').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-sm').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>Open Small Offcanvas&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"offcanvas-sm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start en-offcanvas--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Small Offcanvas&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-sm').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-sm').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Small width: min(80vw, 16rem)&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-size: var(--en-text-sm); color: var(--en-text-muted);"</span><span class="shiki-foreground">>Perfect for compact navigation or quick actions.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"backdrop-sm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-sm').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Small size offcanvas`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-default').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-default').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>Open Default Offcanvas&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"offcanvas-default"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Default Offcanvas&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-default').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-default').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Default width: min(85vw, 20rem)&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-size: var(--en-text-sm); color: var(--en-text-muted);"</span><span class="shiki-foreground">>Standard size for most use cases.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"backdrop-default"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-default').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Default size offcanvas`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-lg').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-lg').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>Open Large Offcanvas&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"offcanvas-lg"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start en-offcanvas--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Large Offcanvas&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-lg').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-lg').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Large width: min(90vw, 28rem)&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-size: var(--en-text-sm); color: var(--en-text-muted);"</span><span class="shiki-foreground">>Spacious layout for detailed content or forms.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"backdrop-lg"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-lg').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Large size offcanvas`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-function">toggleOffcanvas</span><span class="shiki-token-string-expression">('offcanvas-float'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'backdrop-float'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> true</span><span class="shiki-token-string-expression">)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Open Floating Panel</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"offcanvas-float"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start en-offcanvas--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Floating Panel&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-function">toggleOffcanvas</span><span class="shiki-token-string-expression">('offcanvas-float'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'backdrop-float'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> false</span><span class="shiki-token-string-expression">)"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Floating variant has:&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Gap from screen edges (var(--en-space-3))&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Rounded corners&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Border for definition&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Modern, card-like appearance&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"backdrop-float"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-function">toggleOffcanvas</span><span class="shiki-token-string-expression">('offcanvas-float'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'backdrop-float'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> false</span><span class="shiki-token-string-expression">)"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Floating offcanvas`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:k,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-round').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-round').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Open Rounded Panel</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"offcanvas-round"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start en-offcanvas--rounded"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Rounded Corners&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-round').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-round').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Rounded variant stays attached to the screen edge but has rounded inner corners for a softer appearance.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"backdrop-round"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-round').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Rounded offcanvas`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-compact').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-compact').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Open Compact Panel</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"offcanvas-compact"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start en-offcanvas--compact"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Compact Layout&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-compact').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-compact').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Compact variant reduces padding for a tighter layout. Useful when space is limited or you have many items to display.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-size: var(--en-text-sm);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Smaller header padding&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Reduced body spacing&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Tighter footer layout&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Base font size for title&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Cancel&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--sm"</span><span class="shiki-foreground">>Save&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"backdrop-compact"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-compact').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Compact offcanvas`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:N,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-footer').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-footer').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Open Filters</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"offcanvas-footer"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Filter Products&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-footer').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-footer').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: block; margin-block-end: var(--en-space-1); font-weight: 500;"</span><span class="shiki-foreground">>Category&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>All Categories&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Electronics&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Clothing&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Books&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: block; margin-block-end: var(--en-space-1); font-weight: 500;"</span><span class="shiki-foreground">>Price Range&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"range"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 100%;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    </span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: block; margin-block-end: var(--en-space-1); font-weight: 500;"</span><span class="shiki-foreground">>Brand&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-1);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-weight: normal;"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">> Brand A&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-weight: normal;"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">> Brand B&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-weight: normal;"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">> Brand C&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-footer').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-footer').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>Reset&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-footer').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('backdrop-footer').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>Apply Filters&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"backdrop-footer"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('offcanvas-footer').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Offcanvas with footer actions`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('nav-menu').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('nav-backdrop').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  ☰ Menu</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"nav-menu"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Navigation&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('nav-menu').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('nav-backdrop').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-4);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-2); font-size: var(--en-text-sm); font-weight: 600; color: var(--en-text-muted); text-transform: uppercase;"</span><span class="shiki-foreground">>Main&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list-style: none; padding: 0; margin: 0;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-1);"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>Dashboard&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-1);"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>Products&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-1);"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>Orders&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-2); font-size: var(--en-text-sm); font-weight: 600; color: var(--en-text-muted); text-transform: uppercase;"</span><span class="shiki-foreground">>Account&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"list-style: none; padding: 0; margin: 0;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-1);"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>Profile&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-1);"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>Settings&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">a</span><span class="shiki-token-function"> href</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text-decoration: none; display: block; padding: var(--en-space-2); border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>Logout&#x3C;/</span><span class="shiki-token-string-expression">a</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"nav-backdrop"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('nav-menu').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Mobile navigation menu`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:L,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('cart').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('cart-backdrop').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  🛒 Cart (3)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"cart"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--end"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Shopping Cart&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('cart').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('cart-backdrop').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-direction: column; --en-gap: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"inline-size: 60px; block-size: 60px; background: var(--en-bg-subtle); border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"flex: 1;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0; font-weight: 500;"</span><span class="shiki-foreground">>Product Name&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0; font-size: var(--en-text-sm); color: var(--en-text-muted);"</span><span class="shiki-foreground">>Quantity: 1&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0; font-weight: 600;"</span><span class="shiki-foreground">>$49.99&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"inline-size: 60px; block-size: 60px; background: var(--en-bg-subtle); border-radius: var(--en-radius-md);"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"flex: 1;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0; font-weight: 500;"</span><span class="shiki-foreground">>Another Product&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0; font-size: var(--en-text-sm); color: var(--en-text-muted);"</span><span class="shiki-foreground">>Quantity: 2&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin: 0; font-weight: 600;"</span><span class="shiki-foreground">>$79.98&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">hr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-divider"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      </span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"justify-content: space-between;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Subtotal:&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>$129.97&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"justify-content: space-between;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Shipping:&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>$10.00&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"justify-content: space-between; font-size: var(--en-text-lg);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Total:&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>$139.97&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__footer"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"flex-direction: column; gap: var(--en-space-2);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--full"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('cart').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('cart-backdrop').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>Checkout&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline en-btn--full"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('cart').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('cart-backdrop').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>Continue Shopping&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"cart-backdrop"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('cart').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Shopping cart offcanvas`,key:12,lang:`html`,injectKind:null,editable:!1,source:null},13:{component:z,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('combined').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('combined-backdrop').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Open Combined Variants</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combined"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--end en-offcanvas--floating en-offcanvas--compact en-offcanvas--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Quick Actions&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('combined').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('combined-backdrop').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-size: var(--en-text-sm);"</span><span class="shiki-foreground">>This offcanvas combines:&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"font-size: var(--en-text-sm); margin: 0;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>End placement&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Floating appearance&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Compact spacing&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">>Small width&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm en-btn--full en-btn--primary"</span><span class="shiki-foreground">>Action&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combined-backdrop"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__backdrop"</span><span class="shiki-token-function"> onclick</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"</span><span class="shiki-token-constant">document</span><span class="shiki-token-function">.getElementById</span><span class="shiki-token-string-expression">('combined').</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas--open'); </span><span class="shiki-token-constant">this</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-token-string-expression">('en-offcanvas__backdrop--open')"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Floating + compact + small`,key:13,lang:`html`,injectKind:null,editable:!1,source:null},14:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">// Show offcanvas</span></span>
<span class="line"><span class="shiki-token-constant">offcanvasElement</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'en-offcanvas--open'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">backdropElement</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.add</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'en-offcanvas__backdrop--open'</span><span class="shiki-foreground">);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Hide offcanvas</span></span>
<span class="line"><span class="shiki-token-constant">offcanvasElement</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'en-offcanvas--open'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">backdropElement</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.remove</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'en-offcanvas__backdrop--open'</span><span class="shiki-foreground">);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Toggle</span></span>
<span class="line"><span class="shiki-token-constant">offcanvasElement</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.toggle</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'en-offcanvas--open'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">backdropElement</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.toggle</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'en-offcanvas__backdrop--open'</span><span class="shiki-foreground">);</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:14,lang:`javascript`,injectKind:null,editable:!1,source:null},15:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- Overlay on mobile, sticky sidebar on desktop --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar en-sidebar--open"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar__title"</span><span class="shiki-foreground">>Navigation&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar__close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sidebar__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span><span class="shiki-token-comment">&#x3C;!-- links --></span><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- Always overlay on all screen sizes --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start en-offcanvas--open"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Filters&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- filter controls --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-foreground">>Reset&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-foreground">>Apply&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:16,lang:`html`,injectKind:null,editable:!1,source:null},17:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-offcanvas-width: 24rem; --en-offcanvas-radius: var(--en-radius-lg);"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Custom width and radius --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:17,lang:`html`,injectKind:null,editable:!1,source:null},18:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">.en-offcanvas--start</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  translate</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> calc</span><span class="shiki-token-constant">(-100</span><span class="shiki-token-keyword">%</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-offcanvas-gap)) 0</span><span class="shiki-foreground">;  </span><span class="shiki-token-comment">/* Hidden */</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">.en-offcanvas--open</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  translate</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 0 0</span><span class="shiki-foreground">;  </span><span class="shiki-token-comment">/* Visible */</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:18,lang:`css`,injectKind:null,editable:!1,source:null},19:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">@starting-style</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-function">  .en-offcanvas--open</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">    translate</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> calc</span><span class="shiki-token-constant">(-100</span><span class="shiki-token-keyword">%</span><span class="shiki-token-keyword"> -</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-offcanvas-gap)) 0</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">  }</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:19,lang:`css`,injectKind:null,editable:!1,source:null},20:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--start"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Menu&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span><span class="shiki-token-comment">&#x3C;!-- navigation links --></span><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:20,lang:`html`,injectKind:null,editable:!1,source:null},21:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--end"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Filters&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- filter controls --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-foreground">>Reset&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-foreground">>Apply&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:21,lang:`html`,injectKind:null,editable:!1,source:null},22:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">aside</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas en-offcanvas--end"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__title"</span><span class="shiki-foreground">>Cart&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__close"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Close"</span><span class="shiki-foreground">>&#x26;times;&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- cart items --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-offcanvas__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--full"</span><span class="shiki-foreground">>Checkout&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">aside</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:22,lang:`html`,injectKind:null,editable:!1,source:null},23:{component:l(B,[[`render`,V]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/basic/components-offcanvas.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:23,lang:`vue`,injectKind:null,editable:!1,source:null}},U=[{id:`offcanvas`,text:`Offcanvas`,level:1},{id:`basic-offcanvas`,text:`Basic Offcanvas`,level:2},{id:`end-position`,text:`End Position`,level:2},{id:`size-variants`,text:`Size Variants`,level:2},{id:`floating-variant`,text:`Floating Variant`,level:2},{id:`rounded-variant`,text:`Rounded Variant`,level:2},{id:`compact-variant`,text:`Compact Variant`,level:2},{id:`with-footer`,text:`With Footer`,level:2},{id:`navigation-menu`,text:`Navigation Menu`,level:2},{id:`shopping-cart`,text:`Shopping Cart`,level:2},{id:`combined-variants`,text:`Combined Variants`,level:2},{id:`states`,text:`States`,level:2},{id:`attributes`,text:`Attributes`,level:3},{id:`sidebar-vs-offcanvas`,text:`Sidebar vs Offcanvas`,level:2},{id:`key-differences`,text:`Key Differences`,level:3},{id:`when-to-use-each`,text:`When to Use Each`,level:3},{id:`visual-behavior-comparison`,text:`Visual Behavior Comparison`,level:3},{id:`why-not-merged`,text:`Why Not Merged?`,level:3},{id:`example-comparison`,text:`Example Comparison`,level:3},{id:`technical-notes`,text:`Technical Notes`,level:3},{id:`classes`,text:`Classes`,level:2},{id:`css-custom-properties`,text:`CSS Custom Properties`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`browser-support`,text:`Browser Support`,level:2},{id:`technical-details`,text:`Technical Details`,level:2},{id:`slide-animation`,text:`Slide Animation`,level:3},{id:`starting-style-animation`,text:`@starting-style Animation`,level:3},{id:`z-index-layering`,text:`Z-Index Layering`,level:3},{id:`notes`,text:`Notes`,level:2},{id:`when-to-use`,text:`When to Use`,level:2},{id:`common-patterns`,text:`Common Patterns`,level:2},{id:`mobile-navigation`,text:`Mobile Navigation`,level:3},{id:`filter-panel`,text:`Filter Panel`,level:3},{id:`shopping-cart-1`,text:`Shopping Cart`,level:3}],W=[{id:`offcanvas`,text:`Offcanvas`,level:1,children:[{id:`basic-offcanvas`,text:`Basic Offcanvas`,level:2,children:[]},{id:`end-position`,text:`End Position`,level:2,children:[]},{id:`size-variants`,text:`Size Variants`,level:2,children:[]},{id:`floating-variant`,text:`Floating Variant`,level:2,children:[]},{id:`rounded-variant`,text:`Rounded Variant`,level:2,children:[]},{id:`compact-variant`,text:`Compact Variant`,level:2,children:[]},{id:`with-footer`,text:`With Footer`,level:2,children:[]},{id:`navigation-menu`,text:`Navigation Menu`,level:2,children:[]},{id:`shopping-cart`,text:`Shopping Cart`,level:2,children:[]},{id:`combined-variants`,text:`Combined Variants`,level:2,children:[]},{id:`states`,text:`States`,level:2,children:[{id:`attributes`,text:`Attributes`,level:3,children:[]}]},{id:`sidebar-vs-offcanvas`,text:`Sidebar vs Offcanvas`,level:2,children:[{id:`key-differences`,text:`Key Differences`,level:3,children:[]},{id:`when-to-use-each`,text:`When to Use Each`,level:3,children:[]},{id:`visual-behavior-comparison`,text:`Visual Behavior Comparison`,level:3,children:[]},{id:`why-not-merged`,text:`Why Not Merged?`,level:3,children:[]},{id:`example-comparison`,text:`Example Comparison`,level:3,children:[]},{id:`technical-notes`,text:`Technical Notes`,level:3,children:[]}]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`css-custom-properties`,text:`CSS Custom Properties`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`browser-support`,text:`Browser Support`,level:2,children:[]},{id:`technical-details`,text:`Technical Details`,level:2,children:[{id:`slide-animation`,text:`Slide Animation`,level:3,children:[]},{id:`starting-style-animation`,text:`@starting-style Animation`,level:3,children:[]},{id:`z-index-layering`,text:`Z-Index Layering`,level:3,children:[]}]},{id:`notes`,text:`Notes`,level:2,children:[]},{id:`when-to-use`,text:`When to Use`,level:2,children:[]},{id:`common-patterns`,text:`Common Patterns`,level:2,children:[{id:`mobile-navigation`,text:`Mobile Navigation`,level:3,children:[]},{id:`filter-panel`,text:`Filter Panel`,level:3,children:[]},{id:`shopping-cart-1`,text:`Shopping Cart`,level:3,children:[]}]}]}],G={css:[],js:[{key:5,code:`window.toggleOffcanvas = function(offcanvasId, backdropId, show) {
  const offcanvas = document.getElementById(offcanvasId);
  const backdrop = document.getElementById(backdropId);
  if (show) {
    offcanvas.classList.add('en-offcanvas--open');
    backdrop.classList.add('en-offcanvas__backdrop--open');
  } else {
    offcanvas.classList.remove('en-offcanvas--open');
    backdrop.classList.remove('en-offcanvas__backdrop--open');
  }
}`}],cleanup:[{key:6,code:`onUnmount(() => {
  delete window.toggleOffcanvas;
})`}]},K=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>f(`div`,{class:n},[e.meta.isLive?f(p,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:f(u,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),q=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/basic/offcanvas.md`,setup(){i(`vlm-toc`,{flat:U,tree:W}),h(()=>c(U,W)),d(()=>c([],[]));let e=m(G);return i(`vlm-inject`,e),h(()=>e.mount()),o(()=>e.beforeUnmount()),d(()=>e.unmounted()),()=>f(`div`,{class:`vlm-page`},[f(`div`,{class:`vlm-content`},[f(`div`,{class:`vlm-md`,innerHTML:`<h1 id="offcanvas">Offcanvas<a class="header-link" href="#offcanvas" title="Link to this heading"></a></h1>
<p>Slide-in sidebar panel for navigation, filters, or supplementary content. A responsive alternative to fixed sidebars that slides in from the edge of the screen.</p>
<h2 id="basic-offcanvas">Basic Offcanvas<a class="header-link" href="#basic-offcanvas" title="Link to this heading"></a></h2>
<p>Toggle the <code>en-offcanvas--open</code> class with JavaScript to show/hide. Slides in from the start (left in LTR) by default.</p>
<p>`}),f(K,{key:0,meta:H[0]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="end-position">End Position<a class="header-link" href="#end-position" title="Link to this heading"></a></h2>
<p>Slides in from the end (right in LTR, left in RTL).</p>
<p>`}),f(K,{key:1,meta:H[1]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="size-variants">Size Variants<a class="header-link" href="#size-variants" title="Link to this heading"></a></h2>
<p>`}),f(K,{key:2,meta:H[2]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),f(K,{key:3,meta:H[3]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),f(K,{key:4,meta:H[4]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="floating-variant">Floating Variant<a class="header-link" href="#floating-variant" title="Link to this heading"></a></h2>
<p>Detached panel with gap from screen edges, rounded corners, and border.</p>
<p>`}),f(K,{key:7,meta:H[7]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="rounded-variant">Rounded Variant<a class="header-link" href="#rounded-variant" title="Link to this heading"></a></h2>
<p>Attached to edge with inner corners rounded.</p>
<p>`}),f(K,{key:8,meta:H[8]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="compact-variant">Compact Variant<a class="header-link" href="#compact-variant" title="Link to this heading"></a></h2>
<p>Tighter spacing for headers, body, and footer.</p>
<p>`}),f(K,{key:9,meta:H[9]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="with-footer">With Footer<a class="header-link" href="#with-footer" title="Link to this heading"></a></h2>
<p>`}),f(K,{key:10,meta:H[10]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="navigation-menu">Navigation Menu<a class="header-link" href="#navigation-menu" title="Link to this heading"></a></h2>
<p>`}),f(K,{key:11,meta:H[11]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="shopping-cart">Shopping Cart<a class="header-link" href="#shopping-cart" title="Link to this heading"></a></h2>
<p>`}),f(K,{key:12,meta:H[12]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="combined-variants">Combined Variants<a class="header-link" href="#combined-variants" title="Link to this heading"></a></h2>
<p>Variants are orthogonal and can be combined.</p>
<p>`}),f(K,{key:13,meta:H[13]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="states">States<a class="header-link" href="#states" title="Link to this heading"></a></h2>
<p>The offcanvas component uses CSS classes for state, not HTML attributes.</p>
<h3 id="attributes">Attributes<a class="header-link" href="#attributes" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Values</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-offcanvas--open</code></td>
<td>-</td>
<td>Shows the offcanvas panel</td>
</tr>
<tr>
<td><code>.en-offcanvas__backdrop--open</code></td>
<td>-</td>
<td>Shows the backdrop overlay</td>
</tr>
</tbody>
</table>
</div><p>JavaScript controls state by toggling classes:</p>
<p>`}),f(K,{key:14,meta:H[14]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="sidebar-vs-offcanvas">Sidebar vs Offcanvas<a class="header-link" href="#sidebar-vs-offcanvas" title="Link to this heading"></a></h2>
<p>Both components create slide-in panels, but they serve different purposes and have distinct behaviors.</p>
<h3 id="key-differences">Key Differences<a class="header-link" href="#key-differences" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Feature</th>
<th><code>.en-sidebar</code></th>
<th><code>.en-offcanvas</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Behavior</strong></td>
<td>Responsive: overlay on mobile (&lt;480px), <strong>sticky in-flow</strong> on desktop (≥480px)</td>
<td>Always overlay, never in-flow</td>
</tr>
<tr>
<td><strong>Use Case</strong></td>
<td>Persistent navigation that becomes part of layout on desktop</td>
<td>Temporary panels for filters, carts, settings</td>
</tr>
<tr>
<td><strong>Desktop Mode</strong></td>
<td>Transforms to sticky aside, part of page layout</td>
<td>Remains fixed overlay even on desktop</td>
</tr>
<tr>
<td><strong>Variants</strong></td>
<td><code>--collapsed</code>, <code>--responsive</code> (container query)</td>
<td><code>--start/--end</code>, <code>--floating</code>, <code>--rounded</code>, <code>--compact</code>, <code>--sm/--lg</code></td>
</tr>
<tr>
<td><strong>Elements</strong></td>
<td>Header, body (no footer)</td>
<td>Header, body, footer</td>
</tr>
<tr>
<td><strong>Close Button</strong></td>
<td>Hidden on desktop (sticky mode)</td>
<td>Always visible</td>
</tr>
<tr>
<td><strong>Backdrop</strong></td>
<td>Hidden on desktop</td>
<td>Always present when open</td>
</tr>
<tr>
<td><strong>Width Control</strong></td>
<td>Fixed widths only</td>
<td>Customizable via <code>--en-offcanvas-width</code></td>
</tr>
<tr>
<td><strong>Related Components</strong></td>
<td><code>.en-sidebar-menu</code>, <code>.en-shell</code></td>
<td><code>.en-sheet</code>, <code>.en-modal</code></td>
</tr>
</tbody>
</table>
</div><h3 id="when-to-use-each">When to Use Each<a class="header-link" href="#when-to-use-each" title="Link to this heading"></a></h3>
<p><strong>Use <code>.en-sidebar</code> when:</strong></p>
<ul>
<li>Building responsive app layouts with persistent navigation</li>
<li>Desktop users need constant access to navigation</li>
<li>Mobile users get overlay, desktop gets in-flow sidebar</li>
<li>Creating admin dashboards, documentation sites, or web apps</li>
</ul>
<p><strong>Use <code>.en-offcanvas</code> when:</strong></p>
<ul>
<li>Content is temporary or contextual (filters, cart, settings)</li>
<li>Always needs to overlay content (even on desktop)</li>
<li>Requires footer with action buttons</li>
<li>Building mobile-first experiences with optional desktop overlays</li>
</ul>
<h3 id="visual-behavior-comparison">Visual Behavior Comparison<a class="header-link" href="#visual-behavior-comparison" title="Link to this heading"></a></h3>
<p><strong>Sidebar:</strong></p>
<pre><code>Mobile (&lt;480px):     Desktop (≥480px):
┌─────────────┐      ┌────┬────────────┐
│ [×] Sidebar │      │    │            │
│             │      │ S  │  Content   │
│  Nav Links  │  →   │ i  │            │
│             │      │ d  │            │
│             │      │ e  │            │
└─────────────┘      └────┴────────────┘
   (overlay)         (in-flow, sticky)
</code></pre>
<p><strong>Offcanvas:</strong></p>
<pre><code>Mobile (&lt;480px):     Desktop (≥480px):
┌─────────────┐      ┌─────────────┐
│ [×] Panel   │      │ [×] Panel   │
│             │      │             │
│  Filters    │  →   │  Filters    │
│             │      │             │
│ [Apply]     │      │ [Apply]     │
└─────────────┘      └─────────────┘
   (overlay)            (overlay)
</code></pre>
<h3 id="why-not-merged">Why Not Merged?<a class="header-link" href="#why-not-merged" title="Link to this heading"></a></h3>
<p>Though both share similar CSS (fixed position, translate, backdrop, header), they remain separate because:</p>
<ol>
<li>
<p><strong>Different responsive strategies</strong>: Sidebar overrides nearly every offcanvas property on desktop (<code>position</code>, <code>translate</code>, <code>visibility</code>, <code>z-index</code>) and hides header/close/backdrop with <code>!important</code>. Merging would create mostly overrides.</p>
</li>
<li>
<p><strong>Import flexibility</strong>: Both are imported separately in many presets (<code>manifest.json</code>). Merging forces presets that need one to load the other.</p>
</li>
<li>
<p><strong>Small duplication</strong>: Only ~30 lines overlap (header, title, close, backdrop CSS). The behavioral differences far outweigh the shared code.</p>
</li>
</ol>
<h3 id="example-comparison">Example Comparison<a class="header-link" href="#example-comparison" title="Link to this heading"></a></h3>
<p><strong>Sidebar Example</strong> (responsive navigation):
`}),f(K,{key:15,meta:H[15]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Offcanvas Example</strong> (always overlay):
`}),f(K,{key:16,meta:H[16]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="technical-notes">Technical Notes<a class="header-link" href="#technical-notes" title="Link to this heading"></a></h3>
<ul>
<li><strong>Token inconsistency</strong>: <code>.en-sidebar</code> uses <code>var(--en-surface)</code>, <code>.en-offcanvas</code> uses <code>var(--en-bg-surface)</code>. Both are aliases pointing to the same value, but for consistency, both should use <code>--en-bg-surface</code>.</li>
<li><strong>Shared code</strong>: Header, title, close button, and backdrop CSS (~30 lines) are duplicated but could be extracted to shared rules if duplication becomes an issue.</li>
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
<td><code>.en-offcanvas</code></td>
<td>Base offcanvas panel</td>
</tr>
<tr>
<td><strong>Placement</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-offcanvas--start</code></td>
<td>Slides from start edge (left in LTR, right in RTL)</td>
</tr>
<tr>
<td><code>.en-offcanvas--end</code></td>
<td>Slides from end edge (right in LTR, left in RTL)</td>
</tr>
<tr>
<td><strong>Sizes</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-offcanvas--sm</code></td>
<td>Small width: min(80vw, 16rem)</td>
</tr>
<tr>
<td><code>.en-offcanvas--lg</code></td>
<td>Large width: min(90vw, 28rem)</td>
</tr>
<tr>
<td><code>.en-offcanvas--responsive</code></td>
<td>Fullscreen on mobile (&lt;480px)</td>
</tr>
<tr>
<td><strong>Appearance</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-offcanvas--floating</code></td>
<td>Detached from edges with gap, rounded, bordered</td>
</tr>
<tr>
<td><code>.en-offcanvas--rounded</code></td>
<td>Inner corners rounded, attached to edge</td>
</tr>
<tr>
<td><code>.en-offcanvas--compact</code></td>
<td>Tighter header/body/footer spacing</td>
</tr>
<tr>
<td><strong>State</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-offcanvas--open</code></td>
<td>Shows the offcanvas (toggle with JavaScript)</td>
</tr>
<tr>
<td><strong>Elements</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-offcanvas__header</code></td>
<td>Header section with title and close button</td>
</tr>
<tr>
<td><code>.en-offcanvas__title</code></td>
<td>Title text in header</td>
</tr>
<tr>
<td><code>.en-offcanvas__close</code></td>
<td>Close button</td>
</tr>
<tr>
<td><code>.en-offcanvas__body</code></td>
<td>Scrollable content area (flex: 1)</td>
</tr>
<tr>
<td><code>.en-offcanvas__footer</code></td>
<td>Footer section with action buttons</td>
</tr>
<tr>
<td><code>.en-offcanvas__backdrop</code></td>
<td>Optional backdrop overlay</td>
</tr>
<tr>
<td><code>.en-offcanvas__backdrop--open</code></td>
<td>Shows the backdrop</td>
</tr>
</tbody>
</table>
</div><h2 id="css-custom-properties">CSS Custom Properties<a class="header-link" href="#css-custom-properties" title="Link to this heading"></a></h2>
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
<td><code>--en-offcanvas-width</code></td>
<td><code>min(85vw, 20rem)</code></td>
<td>Panel width</td>
</tr>
<tr>
<td><code>--en-offcanvas-gap</code></td>
<td><code>0px</code></td>
<td>Distance from screen edges (floating sets to <code>var(--en-space-3)</code>)</td>
</tr>
<tr>
<td><code>--en-offcanvas-radius</code></td>
<td><code>var(--en-radius-xl)</code></td>
<td>Corner radius for floating/rounded variants</td>
</tr>
</tbody>
</table>
</div><p>Override custom properties:</p>
<p>`}),f(K,{key:17,meta:H[17]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li><strong>Semantic HTML</strong>: Use <code>&lt;aside&gt;</code> element for offcanvas panels</li>
<li><strong>Focus management</strong>: Trap focus inside offcanvas when open (requires JavaScript)</li>
<li><strong>Keyboard support</strong>: Escape key should close offcanvas (requires JavaScript)</li>
<li><strong>ARIA attributes</strong>: Consider <code>aria-modal=&quot;true&quot;</code> and <code>role=&quot;dialog&quot;</code> for modal behavior</li>
<li><strong>Close button</strong>: Always include accessible close button with <code>aria-label=&quot;Close&quot;</code></li>
<li><strong>Backdrop</strong>: Click backdrop to close is standard behavior</li>
</ul>
<p><strong>Best practices:</strong></p>
<ul>
<li>Provide visible close button in header</li>
<li>Use descriptive title for context</li>
<li>Consider disabling body scroll when offcanvas is open</li>
<li>Return focus to trigger element after closing</li>
<li>Support Escape key to close</li>
</ul>
<h2 id="browser-support">Browser Support<a class="header-link" href="#browser-support" title="Link to this heading"></a></h2>
<ul>
<li><strong>CSS translate property</strong>: Universal support (Baseline 2022+)</li>
<li><strong>@starting-style</strong>: Baseline 2024+ (Chrome 117+, Firefox 129+, Safari 17.5+)</li>
<li><strong>Logical properties</strong>: Universal support (Baseline 2020+)</li>
<li><strong>Smooth animations</strong>: All modern browsers</li>
</ul>
<h2 id="technical-details">Technical Details<a class="header-link" href="#technical-details" title="Link to this heading"></a></h2>
<h3 id="slide-animation">Slide Animation<a class="header-link" href="#slide-animation" title="Link to this heading"></a></h3>
<p>Uses <code>translate</code> property for smooth slide animation:</p>
<p>`}),f(K,{key:18,meta:H[18]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The gap is included in translation so floating panels fully clear the screen.</p>
<h3 id="starting-style-animation">@starting-style Animation<a class="header-link" href="#starting-style-animation" title="Link to this heading"></a></h3>
<p>Entry animation uses <code>@starting-style</code> for smooth appearance:</p>
<p>`}),f(K,{key:19,meta:H[19]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="z-index-layering">Z-Index Layering<a class="header-link" href="#z-index-layering" title="Link to this heading"></a></h3>
<ul>
<li>Backdrop: <code>var(--en-z-overlay)</code> (400)</li>
<li>Offcanvas: <code>var(--en-z-modal)</code> (500)</li>
</ul>
<h2 id="notes">Notes<a class="header-link" href="#notes" title="Link to this heading"></a></h2>
<ul>
<li>Pure CSS for styling, JavaScript required for open/close behavior</li>
<li>Default placement is start (left in LTR) if no placement modifier specified</li>
<li>Backdrop is optional but recommended for modal behavior</li>
<li>All variants are orthogonal and can be combined</li>
<li>Uses logical properties for automatic RTL support</li>
<li>Smooth slide-in animation with <code>@starting-style</code> for modern browsers</li>
<li>Scrollable body with <code>overflow-y: auto</code></li>
<li>Footer stays at bottom with flex layout</li>
</ul>
<h2 id="when-to-use">When to Use<a class="header-link" href="#when-to-use" title="Link to this heading"></a></h2>
<p><strong>Use Offcanvas when:</strong></p>
<ul>
<li>Building mobile navigation menus</li>
<li>Creating filter panels or advanced search</li>
<li>Shopping cart or quick checkout</li>
<li>User profile or settings panel</li>
<li>Notification center or activity feed</li>
<li>Responsive sidebar that hides on mobile</li>
</ul>
<p><strong>Don’t use when:</strong></p>
<ul>
<li>Content should always be visible (use sidebar layout)</li>
<li>Modal dialog is more appropriate (use <code>.en-modal</code>)</li>
<li>Simple dropdown menu (use <code>.en-dropdown</code>)</li>
<li>Desktop-only layout (use fixed sidebar)</li>
</ul>
<h2 id="common-patterns">Common Patterns<a class="header-link" href="#common-patterns" title="Link to this heading"></a></h2>
<h3 id="mobile-navigation">Mobile Navigation<a class="header-link" href="#mobile-navigation" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:20,meta:H[20]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="filter-panel">Filter Panel<a class="header-link" href="#filter-panel" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:21,meta:H[21]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="shopping-cart-1">Shopping Cart<a class="header-link" href="#shopping-cart-1" title="Link to this heading"></a></h3>
<p>`}),f(K,{key:22,meta:H[22]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),f(K,{key:23,meta:H[23]}),f(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),J={title:`Offcanvas`,description:`Slide-in sidebar panel for navigation, filters, or supplementary content. A responsive alternative to fixed sidebars that slides in from the edge of the screen.`},Y=q;export{Y as default,J as meta};