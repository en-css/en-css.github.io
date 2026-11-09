import{I as e,R as t,Tt as n,W as r,at as i,c as ee,ct as te,et as a,h as ne,it as o,n as re,nt as s,q as c,r as ie,tt as l,u}from"./components-DGWjtEwO.js";var d=`<div class="en-form-display">johndoe@example.com</div>`,f={__name:`0`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=d,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},p=`<div class="en-field" style="max-width: 400px">
  <label class="en-label">Email Address</label>
  <div class="en-form-display">johndoe@example.com</div>
</div>`,m={__name:`1`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=p,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},h=`<div class="en-flex" style="--en-gap: var(--en-space-3); flex-direction: column; align-items: flex-start; max-width: 400px">
  <!-- Small -->
  <div class="en-field">
    <label class="en-label en-text-sm">User ID (Small)</label>
    <div class="en-form-display en-form-display--sm">#12345</div>
  </div>

  <!-- Medium (default) -->
  <div class="en-field">
    <label class="en-label">Username (Medium)</label>
    <div class="en-form-display">johndoe</div>
  </div>

  <!-- Large -->
  <div class="en-field">
    <label class="en-label en-text-lg">Full Name (Large)</label>
    <div class="en-form-display en-form-display--lg">John Doe</div>
  </div>
</div>`,g={__name:`2`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_=`<div class="en-flex" style="--en-gap: var(--en-space-4); flex-direction: column; max-width: 400px">
  <div class="en-field">
    <label class="en-label">Account Type</label>
    <div class="en-form-display en-form-display--ghost">Premium</div>
  </div>

  <div class="en-field">
    <label class="en-label">Member Since</label>
    <div class="en-form-display en-form-display--ghost">January 2023</div>
  </div>
</div>`,v={__name:`3`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=_,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},y=`<div class="en-flex" style="--en-gap: var(--en-space-3); flex-direction: column; max-width: 400px">
  <!-- Muted -->
  <div class="en-field">
    <label class="en-label">Status (Muted)</label>
    <div class="en-form-display en-form-display--muted">Not specified</div>
  </div>

  <!-- Disabled -->
  <div class="en-field">
    <label class="en-label">Legacy Field (Disabled)</label>
    <div class="en-form-display en-form-display--disabled">Deprecated value</div>
  </div>
</div>`,b={__name:`4`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=y,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},x=`<div class="en-flex" style="--en-gap: var(--en-space-3); flex-direction: column; max-width: 400px">
  <!-- Success -->
  <div class="en-field">
    <label class="en-label">Verification Status</label>
    <div class="en-form-display en-form-display--success">✓ Verified</div>
  </div>

  <!-- Warning -->
  <div class="en-field">
    <label class="en-label">Payment Method</label>
    <div class="en-form-display en-form-display--warning">⚠ Expiring soon</div>
  </div>

  <!-- Danger -->
  <div class="en-field">
    <label class="en-label">Account Status</label>
    <div class="en-form-display en-form-display--danger">✗ Suspended</div>
  </div>

  <!-- Info -->
  <div class="en-field">
    <label class="en-label">Subscription</label>
    <div class="en-form-display en-form-display--info">ℹ Trial period</div>
  </div>
</div>`,S={__name:`5`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=x,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},C=`<form style="max-width: 500px">
  <div class="en-flex" style="--en-gap: var(--en-space-4); flex-direction: column">
    <!-- Editable -->
    <div class="en-field">
      <label for="username" class="en-label">Username</label>
      <input type="text" id="username" class="en-input" value="johndoe">
    </div>

    <!-- Display only -->
    <div class="en-field">
      <label class="en-label">User ID (read-only)</label>
      <div class="en-form-display en-form-display--muted">#987654</div>
    </div>

    <!-- Editable -->
    <div class="en-field">
      <label for="email" class="en-label">Email Address</label>
      <input type="email" id="email" class="en-input" value="johndoe@example.com">
    </div>

    <!-- Display only -->
    <div class="en-field">
      <label class="en-label">Registration Date (read-only)</label>
      <div class="en-form-display">March 15, 2023</div>
    </div>

    <!-- Editable -->
    <div class="en-field">
      <label for="bio" class="en-label">Bio</label>
      <textarea id="bio" class="en-textarea" rows="3">Software developer and coffee enthusiast.</textarea>
    </div>
  </div>
</form>`,w={__name:`6`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=C,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},T=`<div class="en-card" style="max-width: 500px">
  <div class="en-card__header">
    <h3 class="en-card__title">User Profile</h3>
  </div>
  <div class="en-card__body">
    <div class="en-flex" style="--en-gap: var(--en-space-4); flex-direction: column">
      <div class="en-field">
        <label class="en-label">Full Name</label>
        <div class="en-form-display">John Michael Doe</div>
      </div>

      <div class="en-field">
        <label class="en-label">Email</label>
        <div class="en-form-display">john.doe@company.com</div>
      </div>

      <div class="en-field">
        <label class="en-label">Phone</label>
        <div class="en-form-display">+1 (555) 123-4567</div>
      </div>

      <div class="en-field">
        <label class="en-label">Department</label>
        <div class="en-form-display">Engineering</div>
      </div>

      <div class="en-field">
        <label class="en-label">Employee ID</label>
        <div class="en-form-display en-form-display--muted">EMP-2023-0456</div>
      </div>

      <div class="en-field">
        <label class="en-label">Account Status</label>
        <div class="en-form-display en-form-display--success">✓ Active</div>
      </div>
    </div>
  </div>
  <div class="en-card__footer">
    <button class="en-btn en-btn--outline">Cancel</button>
    <button class="en-btn en-btn--primary">Edit Profile</button>
  </div>
</div>`,E={__name:`7`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=T,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},D=`<div class="en-card" style="max-width: 500px">
  <div class="en-card__header">
    <h3 class="en-card__title">Invoice #INV-2024-001</h3>
  </div>
  <div class="en-card__body">
    <div class="en-flex" style="--en-gap: var(--en-space-3); flex-direction: column">
      <div class="en-field">
        <label class="en-label en-text-sm">Invoice Number</label>
        <div class="en-form-display en-form-display--sm">INV-2024-001</div>
      </div>

      <div class="en-field">
        <label class="en-label en-text-sm">Issue Date</label>
        <div class="en-form-display en-form-display--sm">January 15, 2024</div>
      </div>

      <div class="en-field">
        <label class="en-label en-text-sm">Due Date</label>
        <div class="en-form-display en-form-display--sm">February 15, 2024</div>
      </div>

      <div class="en-field">
        <label class="en-label en-text-sm">Customer</label>
        <div class="en-form-display en-form-display--sm">Acme Corporation</div>
      </div>

      <div style="border-block-start: 1px solid var(--en-border); padding-block-start: var(--en-space-3); margin-block-start: var(--en-space-2)">
        <div class="en-field">
          <label class="en-label en-font-semibold">Total Amount</label>
          <div class="en-form-display en-form-display--lg en-font-bold" style="color: var(--en-primary)">$2,450.00</div>
        </div>
      </div>

      <div class="en-field">
        <label class="en-label en-text-sm">Payment Status</label>
        <div class="en-form-display en-form-display--sm en-form-display--success">✓ Paid</div>
      </div>
    </div>
  </div>
</div>`,O={__name:`8`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=D,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},k=`<div class="en-card" style="max-width: 400px">
  <div class="en-card__header">
    <h3 class="en-card__title">Order Summary</h3>
  </div>
  <div class="en-card__body">
    <div class="en-grid" style="grid-template-columns: auto 1fr; --en-gap: var(--en-space-2) var(--en-space-3); align-items: center">
      <!-- Order details -->
      <label class="en-label en-text-sm">Order Number</label>
      <div class="en-form-display en-form-display--ghost">#ORD-20240112-7834</div>

      <label class="en-label en-text-sm">Order Date</label>
      <div class="en-form-display en-form-display--ghost">January 12, 2024</div>

      <label class="en-label en-text-sm">Estimated Delivery</label>
      <div class="en-form-display en-form-display--ghost">January 18-20, 2024</div>

      <!-- Divider -->
      <div style="grid-column: 1 / -1; border-block-start: 1px solid var(--en-border); margin-block: var(--en-space-2)"></div>

      <!-- Price breakdown -->
      <label class="en-label">Subtotal</label>
      <div class="en-form-display en-form-display--ghost">$89.97</div>

      <label class="en-label">Shipping</label>
      <div class="en-form-display en-form-display--ghost">$5.99</div>

      <label class="en-label">Tax</label>
      <div class="en-form-display en-form-display--ghost">$8.10</div>

      <!-- Total divider -->
      <div style="grid-column: 1 / -1; border-block-start: 2px solid var(--en-border); margin-block: var(--en-space-2)"></div>

      <!-- Total -->
      <label class="en-label en-text-lg en-font-bold">Total</label>
      <div class="en-form-display en-font-bold en-text-lg" style="color: var(--en-primary)">$104.06</div>
    </div>
  </div>
</div>`,A={__name:`9`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=k,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},j=`<div class="en-card" style="max-width: 500px">
  <div class="en-card__header">
    <h3 class="en-card__title">System Information</h3>
  </div>
  <div class="en-card__body">
    <div class="en-flex" style="--en-gap: var(--en-space-3); flex-direction: column">
      <div class="en-field">
        <label class="en-label">Operating System</label>
        <div class="en-form-display">Ubuntu 22.04 LTS</div>
      </div>

      <div class="en-field">
        <label class="en-label">Kernel Version</label>
        <div class="en-form-display en-form-display--muted">5.15.0-91-generic</div>
      </div>

      <div class="en-field">
        <label class="en-label">Architecture</label>
        <div class="en-form-display">x86_64</div>
      </div>

      <div class="en-field">
        <label class="en-label">Memory</label>
        <div class="en-form-display">16 GB DDR4</div>
      </div>

      <div class="en-field">
        <label class="en-label">Disk Space</label>
        <div class="en-form-display en-form-display--warning">⚠ 89% used (45 GB free)</div>
      </div>

      <div class="en-field">
        <label class="en-label">Network Status</label>
        <div class="en-form-display en-form-display--success">✓ Connected</div>
      </div>
    </div>
  </div>
</div>`,M={__name:`10`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=j,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},N=`<div class="en-flex" style="--en-gap: var(--en-space-3); flex-direction: column; max-width: 400px">
  <div class="en-field">
    <label class="en-label">Email</label>
    <div class="en-form-display">
      <svg class="en-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
      <span>user@example.com</span>
    </div>
  </div>

  <div class="en-field">
    <label class="en-label">Phone</label>
    <div class="en-form-display">
      <svg class="en-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      <span>+1 (555) 123-4567</span>
    </div>
  </div>

  <div class="en-field">
    <label class="en-label">Location</label>
    <div class="en-form-display">
      <svg class="en-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      <span>San Francisco, CA</span>
    </div>
  </div>
</div>`,P={__name:`11`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=N,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ae=`<div class="en-grid" style="--en-grid-min: 250px; --en-gap: var(--en-space-2); max-width: 600px">
  <input type="text" class="en-input" placeholder="Editable field">
  <div class="en-form-display">Read-only value</div>
</div>`,F={__name:`12`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=ae,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},I=`<div class="en-grid" style="grid-template-columns: 1fr auto auto; --en-gap: var(--en-space-2); align-items: stretch">
  <input type="text" class="en-input" placeholder="Name">
  <div class="en-form-display en-form-display--muted" style="min-width: 100px">#12345</div>
  <select class="en-select" style="min-width: 120px">
    <option>Active</option>
    <option>Inactive</option>
  </select>
</div>`,L={__name:`13`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=I,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},R=`<div class="en-grid" style="--en-gap: var(--en-space-4); grid-template-columns: 1fr">
  <!-- Small size -->
  <div class="en-grid" style="grid-template-columns: 1fr auto auto; --en-gap: var(--en-space-2)">
    <input type="text" class="en-input en-input--sm" placeholder="Small input">
    <div class="en-form-display en-form-display--sm" style="min-width: 80px">ID-001</div>
    <select class="en-select en-select--sm" style="min-width: 100px">
      <option>Type A</option>
      <option>Type B</option>
    </select>
  </div>

  <!-- Medium size (default) -->
  <div class="en-grid" style="grid-template-columns: 1fr auto auto; --en-gap: var(--en-space-2)">
    <input type="text" class="en-input" placeholder="Medium input">
    <div class="en-form-display" style="min-width: 100px">ID-002</div>
    <select class="en-select" style="min-width: 120px">
      <option>Type A</option>
      <option>Type B</option>
    </select>
  </div>

  <!-- Large size -->
  <div class="en-grid" style="grid-template-columns: 1fr auto auto; --en-gap: var(--en-space-2)">
    <input type="text" class="en-input en-input--lg" placeholder="Large input">
    <div class="en-form-display en-form-display--lg" style="min-width: 120px">ID-003</div>
    <select class="en-select en-select--lg" style="min-width: 140px">
      <option>Type A</option>
      <option>Type B</option>
    </select>
  </div>
</div>`,z={__name:`14`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=R,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},B=`<div class="en-field" style="max-width: 600px">
  <label class="en-label">Rental Period</label>
  <div class="en-grid" style="grid-template-columns: 1fr auto 1fr; --en-gap: var(--en-space-2); align-items: center">
    <input type="date" class="en-input" value="2024-01-15">
    <span class="en-text-muted">to</span>
    <div class="en-form-display en-form-display--muted">2024-01-22 (7 days)</div>
  </div>
</div>`,V={__name:`15`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=B,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},H=`<div class="en-card" style="max-width: 500px">
  <div class="en-card__body">
    <div class="en-grid" style="--en-gap: var(--en-space-4); grid-template-columns: 1fr">
      <div class="en-field">
        <label class="en-label">Product</label>
        <div class="en-form-display">Wireless Mouse</div>
      </div>

      <div class="en-field">
        <label class="en-label">Unit Price</label>
        <div class="en-form-display en-form-display--muted">$29.99</div>
      </div>

      <div class="en-field">
        <label class="en-label">Quantity</label>
        <div class="en-grid" style="grid-template-columns: 100px 1fr; --en-gap: var(--en-space-2)">
          <input type="number" class="en-input" value="3" min="1">
          <div class="en-form-display">× $29.99</div>
        </div>
      </div>

      <div class="en-field">
        <label class="en-label en-font-bold">Total</label>
        <div class="en-form-display en-font-bold en-text-lg" style="color: var(--en-primary)">$89.97</div>
      </div>
    </div>
  </div>
</div>`,U={__name:`16`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=H,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},W=`<div class="en-card" style="max-width: 600px">
  <div class="en-card__header">
    <h3 class="en-card__title">Profile Update</h3>
  </div>
  <div class="en-card__body">
    <div class="en-grid" style="--en-gap: var(--en-space-4); grid-template-columns: 1fr">
      <div class="en-field">
        <label class="en-label">Username</label>
        <div class="en-grid" style="--en-grid-min: 200px; --en-gap: var(--en-space-2)">
          <div>
            <p class="en-text-xs en-text-muted" style="margin-bottom: var(--en-space-1)">Current</p>
            <div class="en-form-display en-form-display--muted">john_doe_123</div>
          </div>
          <div>
            <p class="en-text-xs en-text-muted" style="margin-bottom: var(--en-space-1)">New</p>
            <input type="text" class="en-input" value="johndoe" placeholder="New username">
          </div>
        </div>
      </div>

      <div class="en-field">
        <label class="en-label">Email</label>
        <div class="en-grid" style="--en-grid-min: 200px; --en-gap: var(--en-space-2)">
          <div>
            <p class="en-text-xs en-text-muted" style="margin-bottom: var(--en-space-1)">Current</p>
            <div class="en-form-display en-form-display--muted">old@email.com</div>
          </div>
          <div>
            <p class="en-text-xs en-text-muted" style="margin-bottom: var(--en-space-1)">New</p>
            <input type="email" class="en-input" value="new@email.com">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,G={__name:`17`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=W,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},K=`<div class="en-field" style="max-width: 600px">
  <label class="en-label">Search Products</label>
  <div class="en-grid" style="grid-template-columns: 1fr auto; --en-gap: var(--en-space-2)">
    <input type="search" class="en-input" placeholder="Enter keyword...">
    <div class="en-form-display en-form-display--muted" style="min-width: 120px">
      <span class="en-font-semibold">247</span> results
    </div>
  </div>
</div>`,q={__name:`18`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=K,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},J=`<div class="en-card" style="max-width: 500px">
  <div class="en-card__header">
    <h3 class="en-card__title">Currency Converter</h3>
  </div>
  <div class="en-card__body">
    <div class="en-grid" style="--en-gap: var(--en-space-4); grid-template-columns: 1fr">
      <div class="en-field">
        <label class="en-label">Amount (USD)</label>
        <div class="en-grid" style="grid-template-columns: 1fr auto; --en-gap: var(--en-space-2)">
          <input type="number" class="en-input" value="100.00" step="0.01">
          <select class="en-select" style="min-width: 80px">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>
      </div>

      <div class="en-field">
        <label class="en-label">Converted Amount</label>
        <div class="en-grid" style="grid-template-columns: 1fr auto; --en-gap: var(--en-space-2)">
          <div class="en-form-display en-form-display--lg en-font-bold" style="color: var(--en-primary)">€92.50</div>
          <div class="en-form-display en-form-display--muted" style="min-width: 120px">Rate: 0.925</div>
        </div>
      </div>
    </div>
  </div>
</div>`,oe={__name:`19`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=J,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},se=`<form class="en-card" style="max-width: 700px">
  <div class="en-card__header">
    <h3 class="en-card__title">Product Entry</h3>
  </div>
  <div class="en-card__body">
    <div class="en-grid" style="--en-gap: var(--en-space-3); grid-template-columns: 1fr">
      <!-- Row 1: Product name + SKU -->
      <div class="en-grid" style="--en-grid-min: 200px; --en-gap: var(--en-space-2)">
        <div class="en-field">
          <label class="en-label">Product Name</label>
          <input type="text" class="en-input" placeholder="Enter product name">
        </div>
        <div class="en-field">
          <label class="en-label">SKU (Auto)</label>
          <div class="en-form-display en-form-display--muted">PRD-2024-001</div>
        </div>
      </div>

      <!-- Row 2: Category + Status -->
      <div class="en-grid" style="--en-grid-min: 200px; --en-gap: var(--en-space-2)">
        <div class="en-field">
          <label class="en-label">Category</label>
          <select class="en-select">
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Books</option>
          </select>
        </div>
        <div class="en-field">
          <label class="en-label">Status</label>
          <div class="en-form-display en-form-display--success">✓ Active</div>
        </div>
      </div>

      <!-- Row 3: Price + Stock + Created -->
      <div class="en-grid" style="--en-grid-min: 150px; --en-gap: var(--en-space-2)">
        <div class="en-field">
          <label class="en-label">Price ($)</label>
          <input type="number" class="en-input" value="49.99" step="0.01">
        </div>
        <div class="en-field">
          <label class="en-label">Stock</label>
          <input type="number" class="en-input" value="150" min="0">
        </div>
        <div class="en-field">
          <label class="en-label">Created</label>
          <div class="en-form-display en-form-display--muted en-text-sm">Jan 15, 2024</div>
        </div>
      </div>
    </div>
  </div>
  <div class="en-card__footer">
    <button type="button" class="en-btn en-btn--outline">Cancel</button>
    <button type="submit" class="en-btn en-btn--primary">Save Product</button>
  </div>
</form>`,ce={__name:`20`,setup(e){let r=n(null);return l(()=>{r.value&&(r.value.innerHTML=se,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(o(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},le={};function ue(t,n){let r=te(`Downloadable`);return o(),e(r,{"dev-url":`form/extended/components-form-display.css`})}var Y={0:{component:f,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>johndoe@example.com&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Basic form display`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:m,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 400px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>johndoe@example.com&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Form display with label`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:g,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); flex-direction: column; align-items: flex-start; max-width: 400px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Small --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-sm"</span><span class="shiki-foreground">>User ID (Small)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--sm"</span><span class="shiki-foreground">>#12345&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Medium (default) --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Username (Medium)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>johndoe&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Large --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-lg"</span><span class="shiki-foreground">>Full Name (Large)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--lg"</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Form display sizes`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:v,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-4); flex-direction: column; max-width: 400px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Account Type&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--ghost"</span><span class="shiki-foreground">>Premium&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Member Since&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--ghost"</span><span class="shiki-foreground">>January 2023&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Ghost form display`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:b,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); flex-direction: column; max-width: 400px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Muted --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Status (Muted)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-foreground">>Not specified&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Disabled --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Legacy Field (Disabled)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--disabled"</span><span class="shiki-foreground">>Deprecated value&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`State variants`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:S,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); flex-direction: column; max-width: 400px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Success --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Verification Status&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--success"</span><span class="shiki-foreground">>✓ Verified&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Warning --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Payment Method&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--warning"</span><span class="shiki-foreground">>⚠ Expiring soon&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Danger --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Account Status&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--danger"</span><span class="shiki-foreground">>✗ Suspended&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Info --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Subscription&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--info"</span><span class="shiki-foreground">>ℹ Trial period&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Semantic variants`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:w,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 500px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-4); flex-direction: column"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- Editable --></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"username"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Username&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"username"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"johndoe"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- Display only --></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>User ID (read-only)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-foreground">>#987654&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- Editable --></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"johndoe@example.com"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- Display only --></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Registration Date (read-only)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>March 15, 2023&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- Editable --></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"bio"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Bio&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"bio"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">>Software developer and coffee enthusiast.&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Mixed editable and display fields`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:E,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 500px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>User Profile&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-4); flex-direction: column"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Full Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>John Michael Doe&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>john.doe@company.com&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Phone&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>+1 (555) 123-4567&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Department&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>Engineering&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Employee ID&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-foreground">>EMP-2023-0456&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Account Status&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--success"</span><span class="shiki-foreground">>✓ Active&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline"</span><span class="shiki-foreground">>Cancel&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-foreground">>Edit Profile&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Profile view with display fields`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:O,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 500px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Invoice #INV-2024-001&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); flex-direction: column"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-sm"</span><span class="shiki-foreground">>Invoice Number&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--sm"</span><span class="shiki-foreground">>INV-2024-001&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-sm"</span><span class="shiki-foreground">>Issue Date&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--sm"</span><span class="shiki-foreground">>January 15, 2024&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-sm"</span><span class="shiki-foreground">>Due Date&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--sm"</span><span class="shiki-foreground">>February 15, 2024&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-sm"</span><span class="shiki-foreground">>Customer&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--sm"</span><span class="shiki-foreground">>Acme Corporation&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"border-block-start: 1px solid var(--en-border); padding-block-start: var(--en-space-3); margin-block-start: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-font-semibold"</span><span class="shiki-foreground">>Total Amount&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--lg en-font-bold"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-primary)"</span><span class="shiki-foreground">>$2,450.00&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-sm"</span><span class="shiki-foreground">>Payment Status&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--sm en-form-display--success"</span><span class="shiki-foreground">>✓ Paid&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Invoice details`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:A,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 400px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Order Summary&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: auto 1fr; --en-gap: var(--en-space-2) var(--en-space-3); align-items: center"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">      &#x3C;!-- Order details --></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-sm"</span><span class="shiki-foreground">>Order Number&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--ghost"</span><span class="shiki-foreground">>#ORD-20240112-7834&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-sm"</span><span class="shiki-foreground">>Order Date&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--ghost"</span><span class="shiki-foreground">>January 12, 2024&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-sm"</span><span class="shiki-foreground">>Estimated Delivery&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--ghost"</span><span class="shiki-foreground">>January 18-20, 2024&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">      &#x3C;!-- Divider --></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-column: 1 / -1; border-block-start: 1px solid var(--en-border); margin-block: var(--en-space-2)"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">      &#x3C;!-- Price breakdown --></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Subtotal&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--ghost"</span><span class="shiki-foreground">>$89.97&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Shipping&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--ghost"</span><span class="shiki-foreground">>$5.99&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Tax&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--ghost"</span><span class="shiki-foreground">>$8.10&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">      &#x3C;!-- Total divider --></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-column: 1 / -1; border-block-start: 2px solid var(--en-border); margin-block: var(--en-space-2)"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">      &#x3C;!-- Total --></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-text-lg en-font-bold"</span><span class="shiki-foreground">>Total&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-font-bold en-text-lg"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-primary)"</span><span class="shiki-foreground">>$104.06&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Order summary with 2-column grid`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:M,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 500px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>System Information&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); flex-direction: column"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Operating System&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>Ubuntu 22.04 LTS&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Kernel Version&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-foreground">>5.15.0-91-generic&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Architecture&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>x86_64&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Memory&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>16 GB DDR4&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Disk Space&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--warning"</span><span class="shiki-foreground">>⚠ 89% used (45 GB free)&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Network Status&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--success"</span><span class="shiki-foreground">>✓ Connected&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`System information`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:P,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); flex-direction: column; max-width: 400px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-icon"</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">polyline</span><span class="shiki-token-function"> points</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"22,6 12,13 2,6"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>user@example.com&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Phone&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-icon"</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>+1 (555) 123-4567&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Location&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-icon"</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">circle</span><span class="shiki-token-function"> cx</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"12"</span><span class="shiki-token-function"> cy</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"10"</span><span class="shiki-token-function"> r</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>San Francisco, CA&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Form display with icons`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 250px; --en-gap: var(--en-space-2); max-width: 600px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Editable field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>Read-only value&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Input and display side by side`,key:12,lang:`html`,injectKind:null,editable:!1,source:null},13:{component:L,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: 1fr auto auto; --en-gap: var(--en-space-2); align-items: stretch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Name"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 100px"</span><span class="shiki-foreground">>#12345&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 120px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Inactive&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Input, display, and select aligned`,key:13,lang:`html`,injectKind:null,editable:!1,source:null},14:{component:z,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-4); grid-template-columns: 1fr"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Small size --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: 1fr auto auto; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input en-input--sm"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Small input"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--sm"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 80px"</span><span class="shiki-foreground">>ID-001&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select en-select--sm"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 100px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Type A&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Type B&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Medium size (default) --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: 1fr auto auto; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Medium input"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 100px"</span><span class="shiki-foreground">>ID-002&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 120px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Type A&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Type B&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Large size --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: 1fr auto auto; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input en-input--lg"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Large input"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--lg"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 120px"</span><span class="shiki-foreground">>ID-003&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select en-select--lg"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 140px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Type A&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Type B&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Size-matched horizontal groups`,key:14,lang:`html`,injectKind:null,editable:!1,source:null},15:{component:V,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 600px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Rental Period&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: 1fr auto 1fr; --en-gap: var(--en-space-2); align-items: center"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"date"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2024-01-15"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-muted"</span><span class="shiki-foreground">>to&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-foreground">>2024-01-22 (7 days)&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Date range with calculated display`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:U,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 500px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-4); grid-template-columns: 1fr"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Product&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>Wireless Mouse&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Unit Price&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-foreground">>$29.99&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Quantity&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: 100px 1fr; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-token-function"> min</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>× $29.99&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label en-font-bold"</span><span class="shiki-foreground">>Total&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-font-bold en-text-lg"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-primary)"</span><span class="shiki-foreground">>$89.97&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Quantity input with price calculation`,key:16,lang:`html`,injectKind:null,editable:!1,source:null},17:{component:G,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 600px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Profile Update&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-4); grid-template-columns: 1fr"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Username&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 200px; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xs en-text-muted"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-bottom: var(--en-space-1)"</span><span class="shiki-foreground">>Current&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-foreground">>john_doe_123&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xs en-text-muted"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-bottom: var(--en-space-1)"</span><span class="shiki-foreground">>New&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"johndoe"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"New username"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 200px; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xs en-text-muted"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-bottom: var(--en-space-1)"</span><span class="shiki-foreground">>Current&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-foreground">>old@email.com&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-text-xs en-text-muted"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-bottom: var(--en-space-1)"</span><span class="shiki-foreground">>New&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"new@email.com"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Before and after comparison`,key:17,lang:`html`,injectKind:null,editable:!1,source:null},18:{component:q,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 600px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Search Products&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: 1fr auto; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Enter keyword..."</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 120px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-font-semibold"</span><span class="shiki-foreground">>247&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">> results</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Search with results count`,key:18,lang:`html`,injectKind:null,editable:!1,source:null},19:{component:oe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 500px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Currency Converter&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-4); grid-template-columns: 1fr"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Amount (USD)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: 1fr auto; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"100.00"</span><span class="shiki-token-function"> step</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0.01"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 80px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>USD&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>EUR&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>GBP&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Converted Amount&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: 1fr auto; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--lg en-font-bold"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-primary)"</span><span class="shiki-foreground">>€92.50&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 120px"</span><span class="shiki-foreground">>Rate: 0.925&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Currency converter`,key:19,lang:`html`,injectKind:null,editable:!1,source:null},20:{component:ce,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 700px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Product Entry&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); grid-template-columns: 1fr"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">      &#x3C;!-- Row 1: Product name + SKU --></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 200px; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Product Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Enter product name"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>SKU (Auto)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted"</span><span class="shiki-foreground">>PRD-2024-001&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">      &#x3C;!-- Row 2: Category + Status --></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 200px; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Category&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Electronics&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Clothing&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Books&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--success"</span><span class="shiki-foreground">>✓ Active&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">      &#x3C;!-- Row 3: Price + Stock + Created --></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-grid-min: 150px; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Price ($)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"49.99"</span><span class="shiki-token-function"> step</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0.01"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Stock&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"150"</span><span class="shiki-token-function"> min</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Created&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display en-form-display--muted en-text-sm"</span><span class="shiki-foreground">>Jan 15, 2024&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline"</span><span class="shiki-foreground">>Cancel&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-foreground">>Save Product&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Form grid with mixed controls`,key:20,lang:`html`,injectKind:null,editable:!1,source:null},21:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>Display value&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:21,lang:`html`,injectKind:null,editable:!1,source:null},22:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Label&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">>Value&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:22,lang:`html`,injectKind:null,editable:!1,source:null},23:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-display"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-icon"</span><span class="shiki-foreground">></span><span class="shiki-token-comment">&#x3C;!-- icon --></span><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Value with icon&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:23,lang:`html`,injectKind:null,editable:!1,source:null},24:{component:ne(le,[[`render`,ue]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"form/extended/components-form-display.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:24,lang:`vue`,injectKind:null,editable:!1,source:null}},X=[{id:`form-display`,text:`Form Display`,level:1},{id:`basic-form-display`,text:`Basic Form Display`,level:2},{id:`with-label`,text:`With Label`,level:2},{id:`size-variants`,text:`Size Variants`,level:2},{id:`ghost-variant`,text:`Ghost Variant`,level:2},{id:`state-variants`,text:`State Variants`,level:2},{id:`semantic-variants`,text:`Semantic Variants`,level:2},{id:`mixed-form-editable-display`,text:`Mixed Form (Editable + Display)`,level:2},{id:`profile-view-example`,text:`Profile View Example`,level:2},{id:`invoice-details-example`,text:`Invoice Details Example`,level:2},{id:`order-summary-example`,text:`Order Summary Example`,level:2},{id:`system-information-display`,text:`System Information Display`,level:2},{id:`with-icons`,text:`With Icons`,level:2},{id:`horizontal-alignment-input-display`,text:`Horizontal Alignment (Input + Display)`,level:2},{id:`mixed-control-types-horizontal`,text:`Mixed Control Types (Horizontal)`,level:2},{id:`size-matched-horizontal-groups`,text:`Size-Matched Horizontal Groups`,level:2},{id:`date-range-picker-pattern`,text:`Date Range Picker Pattern`,level:2},{id:`price-calculation-display`,text:`Price Calculation Display`,level:2},{id:`comparison-view`,text:`Comparison View`,level:2},{id:`search-filter-with-results-count`,text:`Search Filter with Results Count`,level:2},{id:`currency-converter-pattern`,text:`Currency Converter Pattern`,level:2},{id:`form-grid-with-mixed-controls`,text:`Form Grid with Mixed Controls`,level:2},{id:`classes`,text:`Classes`,level:2},{id:`html-structure`,text:`HTML Structure`,level:2},{id:`styling-details`,text:`Styling Details`,level:2},{id:`use-cases`,text:`Use Cases`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`notes`,text:`Notes`,level:2}],Z=[{id:`form-display`,text:`Form Display`,level:1,children:[{id:`basic-form-display`,text:`Basic Form Display`,level:2,children:[]},{id:`with-label`,text:`With Label`,level:2,children:[]},{id:`size-variants`,text:`Size Variants`,level:2,children:[]},{id:`ghost-variant`,text:`Ghost Variant`,level:2,children:[]},{id:`state-variants`,text:`State Variants`,level:2,children:[]},{id:`semantic-variants`,text:`Semantic Variants`,level:2,children:[]},{id:`mixed-form-editable-display`,text:`Mixed Form (Editable + Display)`,level:2,children:[]},{id:`profile-view-example`,text:`Profile View Example`,level:2,children:[]},{id:`invoice-details-example`,text:`Invoice Details Example`,level:2,children:[]},{id:`order-summary-example`,text:`Order Summary Example`,level:2,children:[]},{id:`system-information-display`,text:`System Information Display`,level:2,children:[]},{id:`with-icons`,text:`With Icons`,level:2,children:[]},{id:`horizontal-alignment-input-display`,text:`Horizontal Alignment (Input + Display)`,level:2,children:[]},{id:`mixed-control-types-horizontal`,text:`Mixed Control Types (Horizontal)`,level:2,children:[]},{id:`size-matched-horizontal-groups`,text:`Size-Matched Horizontal Groups`,level:2,children:[]},{id:`date-range-picker-pattern`,text:`Date Range Picker Pattern`,level:2,children:[]},{id:`price-calculation-display`,text:`Price Calculation Display`,level:2,children:[]},{id:`comparison-view`,text:`Comparison View`,level:2,children:[]},{id:`search-filter-with-results-count`,text:`Search Filter with Results Count`,level:2,children:[]},{id:`currency-converter-pattern`,text:`Currency Converter Pattern`,level:2,children:[]},{id:`form-grid-with-mixed-controls`,text:`Form Grid with Mixed Controls`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[]},{id:`html-structure`,text:`HTML Structure`,level:2,children:[]},{id:`styling-details`,text:`Styling Details`,level:2,children:[]},{id:`use-cases`,text:`Use Cases`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`notes`,text:`Notes`,level:2,children:[]}]}],Q={css:[],js:[],cleanup:[]},$=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>c(`div`,{class:n},[e.meta.isLive?c(ie,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:c(re,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),de=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/forms/extended/form-display.md`,setup(){i(`vlm-toc`,{flat:X,tree:Z}),l(()=>u(X,Z)),s(()=>u([],[]));let e=ee(Q);return i(`vlm-inject`,e),l(()=>e.mount()),a(()=>e.beforeUnmount()),s(()=>e.unmounted()),()=>c(`div`,{class:`vlm-page`},[c(`div`,{class:`vlm-content`},[c(`div`,{class:`vlm-md`,innerHTML:`<h1 id="form-display">Form Display<a class="header-link" href="#form-display" title="Link to this heading"></a></h1>
<p>Read-only display component that matches input styling for visual consistency in forms.</p>
<h2 id="basic-form-display">Basic Form Display<a class="header-link" href="#basic-form-display" title="Link to this heading"></a></h2>
<p>Default read-only field display.</p>
<p>`}),c($,{key:0,meta:Y[0]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="with-label">With Label<a class="header-link" href="#with-label" title="Link to this heading"></a></h2>
<p>Display field with label in form context.</p>
<p>`}),c($,{key:1,meta:Y[1]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="size-variants">Size Variants<a class="header-link" href="#size-variants" title="Link to this heading"></a></h2>
<p>Small, medium (default), and large sizes.</p>
<p>`}),c($,{key:2,meta:Y[2]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="ghost-variant">Ghost Variant<a class="header-link" href="#ghost-variant" title="Link to this heading"></a></h2>
<p>Minimal styling with bottom border only.</p>
<p>`}),c($,{key:3,meta:Y[3]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="state-variants">State Variants<a class="header-link" href="#state-variants" title="Link to this heading"></a></h2>
<p>Muted and disabled states.</p>
<p>`}),c($,{key:4,meta:Y[4]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="semantic-variants">Semantic Variants<a class="header-link" href="#semantic-variants" title="Link to this heading"></a></h2>
<p>Success, warning, danger, and info highlighting.</p>
<p>`}),c($,{key:5,meta:Y[5]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="mixed-form-editable-display">Mixed Form (Editable + Display)<a class="header-link" href="#mixed-form-editable-display" title="Link to this heading"></a></h2>
<p>Combining editable inputs with read-only display fields.</p>
<p>`}),c($,{key:6,meta:Y[6]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="profile-view-example">Profile View Example<a class="header-link" href="#profile-view-example" title="Link to this heading"></a></h2>
<p>Read-only profile information display.</p>
<p>`}),c($,{key:7,meta:Y[7]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="invoice-details-example">Invoice Details Example<a class="header-link" href="#invoice-details-example" title="Link to this heading"></a></h2>
<p>Display financial information in form layout.</p>
<p>`}),c($,{key:8,meta:Y[8]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="order-summary-example">Order Summary Example<a class="header-link" href="#order-summary-example" title="Link to this heading"></a></h2>
<p>Shopping order display with ghost variant using 2-column grid layout.</p>
<p>`}),c($,{key:9,meta:Y[9]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="system-information-display">System Information Display<a class="header-link" href="#system-information-display" title="Link to this heading"></a></h2>
<p>Technical specifications in form layout.</p>
<p>`}),c($,{key:10,meta:Y[10]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="with-icons">With Icons<a class="header-link" href="#with-icons" title="Link to this heading"></a></h2>
<p>Display fields with leading icons.</p>
<p>`}),c($,{key:11,meta:Y[11]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="horizontal-alignment-input-display">Horizontal Alignment (Input + Display)<a class="header-link" href="#horizontal-alignment-input-display" title="Link to this heading"></a></h2>
<p>Form display aligns perfectly with inputs in horizontal layouts.</p>
<p>`}),c($,{key:12,meta:Y[12]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="mixed-control-types-horizontal">Mixed Control Types (Horizontal)<a class="header-link" href="#mixed-control-types-horizontal" title="Link to this heading"></a></h2>
<p>Combining different form controls with display fields in one row.</p>
<p>`}),c($,{key:13,meta:Y[13]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="size-matched-horizontal-groups">Size-Matched Horizontal Groups<a class="header-link" href="#size-matched-horizontal-groups" title="Link to this heading"></a></h2>
<p>All sizes align perfectly when mixed horizontally.</p>
<p>`}),c($,{key:14,meta:Y[14]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="date-range-picker-pattern">Date Range Picker Pattern<a class="header-link" href="#date-range-picker-pattern" title="Link to this heading"></a></h2>
<p>Editable start date with read-only calculated end date.</p>
<p>`}),c($,{key:15,meta:Y[15]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="price-calculation-display">Price Calculation Display<a class="header-link" href="#price-calculation-display" title="Link to this heading"></a></h2>
<p>Input quantity with calculated total display.</p>
<p>`}),c($,{key:16,meta:Y[16]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="comparison-view">Comparison View<a class="header-link" href="#comparison-view" title="Link to this heading"></a></h2>
<p>Side-by-side comparison with editable and display fields.</p>
<p>`}),c($,{key:17,meta:Y[17]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="search-filter-with-results-count">Search Filter with Results Count<a class="header-link" href="#search-filter-with-results-count" title="Link to this heading"></a></h2>
<p>Search input with live result count display.</p>
<p>`}),c($,{key:18,meta:Y[18]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="currency-converter-pattern">Currency Converter Pattern<a class="header-link" href="#currency-converter-pattern" title="Link to this heading"></a></h2>
<p>Input amount with converted value display.</p>
<p>`}),c($,{key:19,meta:Y[19]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="form-grid-with-mixed-controls">Form Grid with Mixed Controls<a class="header-link" href="#form-grid-with-mixed-controls" title="Link to this heading"></a></h2>
<p>Complex form layout with various controls aligned.</p>
<p>`}),c($,{key:20,meta:Y[20]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
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
<td><code>.en-form-display</code></td>
<td>Base read-only display field</td>
</tr>
<tr>
<td><strong>Size Modifiers</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-form-display--sm</code></td>
<td>Small size (matches .en-input–sm)</td>
</tr>
<tr>
<td><code>.en-form-display--lg</code></td>
<td>Large size (matches .en-input–lg)</td>
</tr>
<tr>
<td><strong>Style Modifiers</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-form-display--ghost</code></td>
<td>Minimal style with bottom border only</td>
</tr>
<tr>
<td><strong>State Modifiers</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-form-display--muted</code></td>
<td>Muted text color for secondary info</td>
</tr>
<tr>
<td><code>.en-form-display--disabled</code></td>
<td>Disabled appearance</td>
</tr>
<tr>
<td><strong>Semantic Modifiers</strong></td>
<td></td>
</tr>
<tr>
<td><code>.en-form-display--success</code></td>
<td>Success state (green tint)</td>
</tr>
<tr>
<td><code>.en-form-display--warning</code></td>
<td>Warning state (yellow tint)</td>
</tr>
<tr>
<td><code>.en-form-display--danger</code></td>
<td>Danger state (red tint)</td>
</tr>
<tr>
<td><code>.en-form-display--info</code></td>
<td>Info state (blue tint)</td>
</tr>
</tbody>
</table>
</div><h2 id="html-structure">HTML Structure<a class="header-link" href="#html-structure" title="Link to this heading"></a></h2>
<p>Basic structure:</p>
<p>`}),c($,{key:21,meta:Y[21]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>With field wrapper:</p>
<p>`}),c($,{key:22,meta:Y[22]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>With icon:</p>
<p>`}),c($,{key:23,meta:Y[23]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="styling-details">Styling Details<a class="header-link" href="#styling-details" title="Link to this heading"></a></h2>
<p><strong>Matches input dimensions</strong>:</p>
<ul>
<li>Uses same padding tokens (<code>--en-input-padding-y</code>, <code>--en-input-padding-x</code>)</li>
<li>Same min-height as corresponding input sizes</li>
<li>Same border-radius and border-width</li>
<li>Aligns perfectly with <code>.en-input</code> in mixed forms</li>
</ul>
<p><strong>Visual differences from inputs</strong>:</p>
<ul>
<li>Background: <code>--en-bg-subtle</code> (instead of <code>--en-bg-surface</code>)</li>
<li>Border: <code>--en-border</code> (not <code>--en-border-control</code>)</li>
<li>No focus/hover states (non-interactive)</li>
<li>Subtle appearance indicates read-only nature</li>
</ul>
<h2 id="use-cases">Use Cases<a class="header-link" href="#use-cases" title="Link to this heading"></a></h2>
<p><strong>Profile &amp; Account Views:</strong></p>
<ul>
<li>User profile information</li>
<li>Account settings display</li>
<li>System-generated IDs</li>
<li>Registration/creation dates</li>
</ul>
<p><strong>Order &amp; Invoice Details:</strong></p>
<ul>
<li>Order summaries</li>
<li>Invoice information</li>
<li>Transaction records</li>
<li>Shipping details</li>
</ul>
<p><strong>Configuration &amp; Settings:</strong></p>
<ul>
<li>System information</li>
<li>Application settings</li>
<li>Server configuration</li>
<li>API keys (masked)</li>
</ul>
<p><strong>Mixed Forms:</strong></p>
<ul>
<li>Editable fields with read-only metadata</li>
<li>Multi-step forms with previous answers</li>
<li>Confirmation pages with submitted data</li>
<li>Admin panels with protected fields</li>
</ul>
<p><strong>Data Review:</strong></p>
<ul>
<li>Application review forms</li>
<li>Approval workflows</li>
<li>Audit trails</li>
<li>Comparison views</li>
</ul>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li><strong>Not focusable</strong>: Form display is not an interactive element</li>
<li><strong>Labels</strong>: Always pair with <code>&lt;label&gt;</code> or descriptive text</li>
<li><strong>Screen readers</strong>: Content is read as static text</li>
<li><strong>Copy support</strong>: Text is selectable for copying</li>
<li><strong>Semantic HTML</strong>: Use <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, not <code>&lt;input disabled&gt;</code></li>
</ul>
<h2 id="notes">Notes<a class="header-link" href="#notes" title="Link to this heading"></a></h2>
<ul>
<li><strong>Not an input</strong>: This is purely presentational, does not submit with forms</li>
<li><strong>Disabled vs Display</strong>: Use <code>&lt;input disabled&gt;</code> if you need form submission; use <code>.en-form-display</code> for pure display</li>
<li><strong>Size matching</strong>: Designed to align perfectly with form inputs of same size</li>
<li><strong>Ghost variant</strong>: Best for minimalist designs or dense information displays</li>
<li><strong>Semantic variants</strong>: Use sparingly for status indicators or important notices</li>
<li><strong>Icons</strong>: Component uses flexbox with gap, icons align naturally</li>
<li><strong>Forced colors mode</strong>: Border color adapts to <code>CanvasText</code></li>
</ul>
<p>`}),c($,{key:24,meta:Y[24]}),c(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),fe={title:`Form Display`,description:`Read-only display component that matches input styling for visual consistency in forms.`},pe=de;export{pe as default,fe as meta};