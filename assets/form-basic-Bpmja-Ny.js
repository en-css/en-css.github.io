import{Et as e,I as t,R as n,W as r,at as i,ct as ee,et as a,it as o,l as s,m as te,n as ne,nt as c,q as l,r as re,s as ie,tt as u}from"./components-BJME9hSd.js";var ae=`<div class="en-field">
  <label for="name" class="en-label">Full Name</label>
  <input id="name" class="en-input" type="text" placeholder="Enter your name">
</div>`,d={__name:`2`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=ae,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},f=`<div class="en-flex en-flex--col en-gap-3">
  <div class="en-field">
    <label for="email" class="en-label">Email</label>
    <input id="email" class="en-input" type="email" placeholder="you@example.com">
  </div>

  <div class="en-field">
    <label for="password" class="en-label">Password</label>
    <input id="password" class="en-input" type="password" placeholder="Enter password">
  </div>

  <div class="en-field">
    <label for="tel" class="en-label">Phone</label>
    <input id="tel" class="en-input" type="tel" placeholder="+62 812-3456-7890">
  </div>

  <div class="en-field">
    <label for="url" class="en-label">Website</label>
    <input id="url" class="en-input" type="url" placeholder="https://example.com">
  </div>

  <div class="en-field">
    <label for="number" class="en-label">Age</label>
    <input id="number" class="en-input" type="number" min="1" max="120" placeholder="25">
  </div>

  <div class="en-field">
    <label for="date" class="en-label">Birth Date</label>
    <input id="date" class="en-input" type="date">
  </div>
</div>`,p={__name:`3`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=f,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},m=`<div class="en-flex en-flex--col en-gap-3">
  <div class="en-field">
    <label for="input-sm" class="en-label">Small Input</label>
    <input id="input-sm" class="en-input en-input--sm" type="text" placeholder="Small">
  </div>

  <div class="en-field">
    <label for="input-md" class="en-label">Default Input</label>
    <input id="input-md" class="en-input" type="text" placeholder="Default">
  </div>

  <div class="en-field">
    <label for="input-lg" class="en-label">Large Input</label>
    <input id="input-lg" class="en-input en-input--lg" type="text" placeholder="Large">
  </div>
</div>`,h={__name:`4`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=m,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},g=`<div class="en-field">
  <label for="ghost-input" class="en-label">Ghost Input</label>
  <input id="ghost-input" class="en-input en-input--ghost" type="text" placeholder="Borderless until focus">
</div>`,_={__name:`5`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=g,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},v=`<div class="en-field">
  <label for="ghost-filled" class="en-label">Ghost Input (Filled)</label>
  <input id="ghost-filled" class="en-input en-input--ghost" type="text" value="Has value">
</div>`,y={__name:`6`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=v,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},b=`<div class="en-field">
  <label for="valid-email" class="en-label">Email</label>
  <input id="valid-email" class="en-input" type="email" value="user@example.com" required>
  <p class="en-hint">Valid email format</p>
</div>`,x={__name:`7`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=b,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},S=`<form>
  <div class="en-field">
    <label for="invalid-email" class="en-label">Email</label>
    <input id="invalid-email" class="en-input" type="email" value="invalid-email" required>
    <p class="en-hint en-text-danger">Please enter a valid email</p>
  </div>
  <button class="en-btn en-btn--primary" type="submit">Validate</button>
</form>`,C={__name:`8`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=S,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},w=`<div class="en-field">
  <label for="disabled-input" class="en-label">Username</label>
  <input id="disabled-input" class="en-input" type="text" value="readonly-user" disabled>
  <p class="en-hint">This field cannot be edited</p>
</div>`,T={__name:`9`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=w,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},E=`<div class="en-field">
  <label for="readonly-input" class="en-label">Order ID</label>
  <input id="readonly-input" class="en-input" type="text" value="ORD-2024-001" readonly>
  <p class="en-hint">This value is auto-generated</p>
</div>`,D={__name:`10`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=E,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},O=`<div class="en-field">
  <label for="required-input" class="en-label">
    Email <span style="color: var(--en-danger)">*</span>
  </label>
  <input id="required-input" class="en-input" type="email" required>
  <p class="en-hint">Required field</p>
</div>`,k={__name:`11`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=O,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},A=`<div class="en-field">
  <label for="username-help" class="en-label">Username</label>
  <input id="username-help" class="en-input" type="text" placeholder="Choose username">
  <p class="en-hint">Minimum 3 characters, letters and numbers only</p>
</div>`,j={__name:`12`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=A,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},M=`<div class="en-field">
  <label for="search" class="en-label">Search</label>
  <input id="search" class="en-input" type="search" placeholder="Search products...">
</div>`,N={__name:`13`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=M,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},P=`<div class="en-field">
  <label for="color" class="en-label">Brand Color</label>
  <input id="color" class="en-input" type="color" value="#2563EB">
</div>`,F={__name:`14`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=P,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},I=`<div class="en-field">
  <label for="country" class="en-label">Country</label>
  <select id="country" class="en-select">
    <option>Select a country</option>
    <option>Indonesia</option>
    <option>Malaysia</option>
    <option>Singapore</option>
    <option>Thailand</option>
    <option>Vietnam</option>
  </select>
</div>`,L={__name:`15`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=I,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},R=`<div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-3)">
  <div class="en-field">
    <label for="select-sm" class="en-label">Small Select</label>
    <select id="select-sm" class="en-select en-select--sm">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>

  <div class="en-field">
    <label for="select-md" class="en-label">Default Select</label>
    <select id="select-md" class="en-select">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>

  <div class="en-field">
    <label for="select-lg" class="en-label">Large Select</label>
    <select id="select-lg" class="en-select en-select--lg">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
</div>`,z={__name:`16`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=R,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},B=`<div class="en-field">
  <label for="location" class="en-label">Location</label>
  <select id="location" class="en-select">
    <option>Select location</option>
    <optgroup label="Java">
      <option>Jakarta</option>
      <option>Bandung</option>
      <option>Surabaya</option>
      <option>Yogyakarta</option>
    </optgroup>
    <optgroup label="Sumatra">
      <option>Medan</option>
      <option>Palembang</option>
      <option>Padang</option>
    </optgroup>
    <optgroup label="Bali">
      <option>Denpasar</option>
      <option>Ubud</option>
    </optgroup>
  </select>
</div>`,V={__name:`17`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=B,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},H=`<div class="en-field">
  <label for="skills" class="en-label">Skills (hold Ctrl/Cmd to select multiple)</label>
  <select id="skills" class="en-select" multiple size="5">
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>Python</option>
    <option>Java</option>
    <option>Go</option>
    <option>Rust</option>
    <option>PHP</option>
    <option>Ruby</option>
  </select>
</div>`,U={__name:`18`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=H,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},W=`<div class="en-field">
  <label for="ghost-select" class="en-label">Ghost Select</label>
  <select id="ghost-select" class="en-select en-select--ghost">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`,G={__name:`19`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=W,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},K=`<div class="en-field">
  <label for="disabled-select" class="en-label">Status</label>
  <select id="disabled-select" class="en-select" disabled>
    <option>Active</option>
    <option>Inactive</option>
  </select>
</div>`,q={__name:`20`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=K,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},J=`<form>
  <div class="en-field">
    <label for="required-select" class="en-label">
      Payment Method <span style="color: var(--en-danger)">*</span>
    </label>
    <select id="required-select" class="en-select" required>
      <option value="">Select payment method</option>
      <option>Credit Card</option>
      <option>Bank Transfer</option>
      <option>E-Wallet</option>
    </select>
    <p class="en-hint">Please select a payment method</p>
  </div>
  <button class="en-btn en-btn--primary" type="submit">Continue</button>
</form>`,oe={__name:`21`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=J,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},se=`<div class="en-field">
  <label for="message" class="en-label">Message</label>
  <textarea id="message" class="en-textarea" rows="4" placeholder="Enter your message..."></textarea>
</div>`,ce={__name:`22`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=se,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},le=`<div class="en-grid">
  <div class="en-field">
    <label for="textarea-sm" class="en-label">Small Textarea</label>
    <textarea id="textarea-sm" class="en-textarea en-textarea--sm" rows="3" placeholder="Small size"></textarea>
  </div>

  <div class="en-field">
    <label for="textarea-md" class="en-label">Default Textarea</label>
    <textarea id="textarea-md" class="en-textarea" rows="4" placeholder="Default size"></textarea>
  </div>

  <div class="en-field">
    <label for="textarea-lg" class="en-label">Large Textarea</label>
    <textarea id="textarea-lg" class="en-textarea en-textarea--lg" rows="5" placeholder="Large size"></textarea>
  </div>
</div>`,ue={__name:`23`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=le,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},de=`<div class="en-field">
  <label for="bio" class="en-label">Bio</label>
  <textarea id="bio" class="en-textarea" rows="5" maxlength="500" placeholder="Tell us about yourself..."></textarea>
  <p class="en-hint">Maximum 500 characters</p>
</div>`,fe={__name:`24`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=de,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},pe=`<div class="en-field">
  <label for="ghost-textarea" class="en-label">Ghost Textarea</label>
  <textarea id="ghost-textarea" class="en-textarea en-textarea--ghost" rows="4" placeholder="Borderless until focus"></textarea>
</div>`,me={__name:`25`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=pe,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},he=`<div class="en-field">
  <label for="disabled-textarea" class="en-label">Comments</label>
  <textarea id="disabled-textarea" class="en-textarea" rows="4" disabled>This textarea is disabled and cannot be edited.</textarea>
</div>`,ge={__name:`26`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=he,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_e=`<div class="en-field">
  <label for="readonly-textarea" class="en-label">Terms and Conditions</label>
  <textarea id="readonly-textarea" class="en-textarea" rows="6" readonly>By using this service, you agree to the following terms:
1. You will not misuse the service
2. You are responsible for your content
3. We may terminate access at any time</textarea>
</div>`,ve={__name:`27`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=_e,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ye=`<form>
  <div class="en-field">
    <label for="required-textarea" class="en-label">
      Feedback <span style="color: var(--en-danger)">*</span>
    </label>
    <textarea id="required-textarea" class="en-textarea" rows="4" required placeholder="Your feedback is important to us"></textarea>
    <p class="en-hint">Please provide your feedback</p>
  </div>
  <button class="en-btn en-btn--primary" type="submit">Submit</button>
</form>`,be={__name:`28`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=ye,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},xe=`<div class="en-field">
  <label for="resizable" class="en-label">Resizable Content</label>
  <textarea id="resizable" class="en-textarea" rows="4" placeholder="Drag the corner to resize vertically"></textarea>
  <p class="en-hint">Resize vertically by dragging the bottom-right corner</p>
</div>`,Se={__name:`29`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=xe,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Ce=`<label class="en-check">
  <input type="checkbox">
  <span>Accept terms and conditions</span>
</label>`,we={__name:`30`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Ce,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Te=`<div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-2)">
  <label class="en-check en-check--sm">
    <input type="checkbox">
    <span>Small checkbox</span>
  </label>

  <label class="en-check">
    <input type="checkbox">
    <span>Default checkbox</span>
  </label>

  <label class="en-check en-check--lg">
    <input type="checkbox">
    <span>Large checkbox</span>
  </label>
</div>`,Ee={__name:`31`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Te,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},De=`<div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-2)">
  <label class="en-check">
    <input type="checkbox">
    <span>Unchecked</span>
  </label>

  <label class="en-check">
    <input type="checkbox" checked>
    <span>Checked</span>
  </label>

  <label class="en-check">
    <input type="checkbox" disabled>
    <span>Disabled</span>
  </label>

  <label class="en-check">
    <input type="checkbox" checked disabled>
    <span>Checked & Disabled</span>
  </label>
</div>`,Oe={__name:`32`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=De,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ke=`<div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-2)">
  <label class="en-check">
    <input type="checkbox" id="parent-checkbox">
    <span>Select All</span>
  </label>
  <div style="margin-inline-start: var(--en-space-5)">
    <label class="en-check">
      <input type="checkbox" class="child-checkbox">
      <span>Option 1</span>
    </label>
    <label class="en-check">
      <input type="checkbox" class="child-checkbox">
      <span>Option 2</span>
    </label>
    <label class="en-check">
      <input type="checkbox" class="child-checkbox">
      <span>Option 3</span>
    </label>
  </div>
</div>`,Ae={__name:`34`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=ke,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},je=`<label class="en-check en-check--full">
  <span>Enable notifications</span>
  <input type="checkbox">
</label>`,Me={__name:`35`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=je,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Ne=`<label class="en-check en-check--reverse">
  <input type="checkbox">
  <span>I agree to the terms</span>
</label>`,Pe={__name:`36`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Ne,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Fe=`<fieldset class="en-fieldset">
  <legend>Select your interests</legend>
  <div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-2)">
    <label class="en-check">
      <input type="checkbox" name="interests" value="design">
      <span>Design</span>
    </label>
    <label class="en-check">
      <input type="checkbox" name="interests" value="development">
      <span>Development</span>
    </label>
    <label class="en-check">
      <input type="checkbox" name="interests" value="marketing">
      <span>Marketing</span>
    </label>
    <label class="en-check">
      <input type="checkbox" name="interests" value="sales">
      <span>Sales</span>
    </label>
  </div>
</fieldset>`,Ie={__name:`37`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Fe,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Le=`<div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-2)">
  <label class="en-radio">
    <input type="radio" name="choice" value="1">
    <span>Option 1</span>
  </label>
  <label class="en-radio">
    <input type="radio" name="choice" value="2">
    <span>Option 2</span>
  </label>
  <label class="en-radio">
    <input type="radio" name="choice" value="3">
    <span>Option 3</span>
  </label>
</div>`,Re={__name:`38`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Le,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ze=`<div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-2)">
  <label class="en-radio en-radio--sm">
    <input type="radio" name="size-sm" value="1">
    <span>Small radio</span>
  </label>

  <label class="en-radio">
    <input type="radio" name="size-md" value="1">
    <span>Default radio</span>
  </label>

  <label class="en-radio en-radio--lg">
    <input type="radio" name="size-lg" value="1">
    <span>Large radio</span>
  </label>
</div>`,Be={__name:`39`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=ze,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Ve=`<div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-2)">
  <label class="en-radio">
    <input type="radio" name="state" value="1">
    <span>Unchecked</span>
  </label>

  <label class="en-radio">
    <input type="radio" name="state" value="2" checked>
    <span>Checked</span>
  </label>

  <label class="en-radio">
    <input type="radio" name="state-disabled" value="3" disabled>
    <span>Disabled</span>
  </label>

  <label class="en-radio">
    <input type="radio" name="state-disabled" value="4" checked disabled>
    <span>Checked & Disabled</span>
  </label>
</div>`,He={__name:`40`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Ve,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Ue=`<label class="en-radio en-radio--full">
  <span>Enable feature</span>
  <input type="radio" name="feature">
</label>`,We={__name:`41`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Ue,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Ge=`<label class="en-radio en-radio--reverse">
  <input type="radio" name="reverse">
  <span>Option on the right</span>
</label>`,Ke={__name:`42`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Ge,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},qe=`<fieldset class="en-fieldset">
  <legend>Select payment method</legend>
  <div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-2)">
    <label class="en-radio">
      <input type="radio" name="payment" value="card" checked>
      <span>Credit Card</span>
    </label>
    <label class="en-radio">
      <input type="radio" name="payment" value="bank">
      <span>Bank Transfer</span>
    </label>
    <label class="en-radio">
      <input type="radio" name="payment" value="wallet">
      <span>E-Wallet</span>
    </label>
    <label class="en-radio">
      <input type="radio" name="payment" value="cash">
      <span>Cash on Delivery</span>
    </label>
  </div>
</fieldset>`,Je={__name:`43`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=qe,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Ye=`<div class="en-grid" style="--en-gap: var(--en-space-2); grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))">
  <label class="en-check-btn">
    <input type="checkbox">
    <span class="en-check-btn__label">Option 1</span>
  </label>
  <label class="en-check-btn">
    <input type="checkbox">
    <span class="en-check-btn__label">Option 2</span>
  </label>
  <label class="en-check-btn">
    <input type="checkbox">
    <span class="en-check-btn__label">Option 3</span>
  </label>
</div>`,Xe={__name:`44`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Ye,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Ze=`<div style="display: grid; gap: var(--en-space-3)">
  <div class="en-grid" style="--en-gap: var(--en-space-2); grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))">
    <label class="en-check-btn en-check-btn--sm">
      <input type="checkbox">
      <span class="en-check-btn__label">Small</span>
    </label>
    <label class="en-check-btn en-check-btn--sm">
      <input type="checkbox">
      <span class="en-check-btn__label">Small</span>
    </label>
  </div>

  <div class="en-grid" style="--en-gap: var(--en-space-2); grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))">
    <label class="en-check-btn">
      <input type="checkbox">
      <span class="en-check-btn__label">Default</span>
    </label>
    <label class="en-check-btn">
      <input type="checkbox">
      <span class="en-check-btn__label">Default</span>
    </label>
  </div>

  <div class="en-grid" style="--en-gap: var(--en-space-2); grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))">
    <label class="en-check-btn en-check-btn--lg">
      <input type="checkbox">
      <span class="en-check-btn__label">Large</span>
    </label>
    <label class="en-check-btn en-check-btn--lg">
      <input type="checkbox">
      <span class="en-check-btn__label">Large</span>
    </label>
  </div>
</div>`,Qe={__name:`45`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Ze,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},$e=`<div class="en-check-btn-group">
  <label class="en-check-btn">
    <input type="checkbox">
    <span class="en-check-btn__label">Bold</span>
  </label>
  <label class="en-check-btn">
    <input type="checkbox">
    <span class="en-check-btn__label">Italic</span>
  </label>
  <label class="en-check-btn">
    <input type="checkbox">
    <span class="en-check-btn__label">Underline</span>
  </label>
</div>`,et={__name:`46`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=$e,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},tt=`<div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-3)">
  <div class="en-check-btn-group en-check-btn-group--sm">
    <label class="en-check-btn en-check-btn--sm">
      <input type="checkbox">
      <span class="en-check-btn__label">Left</span>
    </label>
    <label class="en-check-btn en-check-btn--sm">
      <input type="checkbox">
      <span class="en-check-btn__label">Center</span>
    </label>
    <label class="en-check-btn en-check-btn--sm">
      <input type="checkbox">
      <span class="en-check-btn__label">Right</span>
    </label>
  </div>

  <div class="en-check-btn-group">
    <label class="en-check-btn">
      <input type="checkbox">
      <span class="en-check-btn__label">Sun</span>
    </label>
    <label class="en-check-btn">
      <input type="checkbox">
      <span class="en-check-btn__label">Mon</span>
    </label>
    <label class="en-check-btn">
      <input type="checkbox">
      <span class="en-check-btn__label">Tue</span>
    </label>
  </div>

  <div class="en-check-btn-group en-check-btn-group--lg">
    <label class="en-check-btn en-check-btn--lg">
      <input type="checkbox">
      <span class="en-check-btn__label">Day</span>
    </label>
    <label class="en-check-btn en-check-btn--lg">
      <input type="checkbox">
      <span class="en-check-btn__label">Week</span>
    </label>
    <label class="en-check-btn en-check-btn--lg">
      <input type="checkbox">
      <span class="en-check-btn__label">Month</span>
    </label>
  </div>
</div>`,nt={__name:`47`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=tt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},rt=`<label class="en-check">
  <span>Enable notifications</span>
  <label class="en-switch">
    <input type="checkbox">
    <span class="en-switch__track"></span>
  </label>
</label>`,it={__name:`48`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=rt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},at=`<label class="en-switch">
  <input type="checkbox">
  <span class="en-switch__track"></span>
</label>`,ot={__name:`49`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=at,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},st=`<div class="en-grid">
  <label class="en-check">
    <span>Extra Small</span>
    <label class="en-switch en-switch--xs">
      <input type="checkbox">
      <span class="en-switch__track"></span>
    </label>
  </label>

  <label class="en-check">
    <span>Small</span>
    <label class="en-switch en-switch--sm">
      <input type="checkbox">
      <span class="en-switch__track"></span>
    </label>
  </label>

  <label class="en-check">
    <span>Default</span>
    <label class="en-switch">
      <input type="checkbox">
      <span class="en-switch__track"></span>
    </label>
  </label>

  <label class="en-check">
    <span>Large</span>
    <label class="en-switch en-switch--lg">
      <input type="checkbox">
      <span class="en-switch__track"></span>
    </label>
  </label>
</div>`,ct={__name:`50`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=st,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},lt=`<div class="en-grid">
  <label class="en-check">
    <span>Unchecked</span>
    <label class="en-switch">
      <input type="checkbox">
      <span class="en-switch__track"></span>
    </label>
  </label>

  <label class="en-check">
    <span>Checked</span>
    <label class="en-switch">
      <input type="checkbox" checked>
      <span class="en-switch__track"></span>
    </label>
  </label>

  <label class="en-check">
    <span>Disabled</span>
    <label class="en-switch">
      <input type="checkbox" disabled>
      <span class="en-switch__track"></span>
    </label>
  </label>

  <label class="en-check">
    <span>Checked & Disabled</span>
    <label class="en-switch">
      <input type="checkbox" checked disabled>
      <span class="en-switch__track"></span>
    </label>
  </label>
</div>`,ut={__name:`51`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=lt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},dt=`<label class="en-check en-check--full">
  <span>Enable dark mode</span>
  <label class="en-switch">
    <input type="checkbox">
    <span class="en-switch__track"></span>
  </label>
</label>`,ft={__name:`52`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=dt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},pt=`<div class="en-field">
  <label class="en-check en-check--full">
    <span>Email Notifications</span>
    <label class="en-switch">
      <input type="checkbox" checked>
      <span class="en-switch__track"></span>
    </label>
  </label>
  <p class="en-hint">Receive email updates about your account activity</p>
</div>`,mt={__name:`53`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=pt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ht=`<fieldset class="en-fieldset">
  <legend>Privacy Settings</legend>
  <div class="en-grid en-grid--cols-2">
    <label class="en-check en-check--full">
      <span>Profile Visibility</span>
      <label class="en-switch">
        <input type="checkbox" checked>
        <span class="en-switch__track"></span>
      </label>
    </label>

    <label class="en-check en-check--full">
      <span>Show Online Status</span>
      <label class="en-switch">
        <input type="checkbox">
        <span class="en-switch__track"></span>
      </label>
    </label>

    <label class="en-check en-check--full">
      <span>Allow Messages</span>
      <label class="en-switch">
        <input type="checkbox" checked>
        <span class="en-switch__track"></span>
      </label>
    </label>

    <label class="en-check en-check--full">
      <span>Show Activity</span>
      <label class="en-switch">
        <input type="checkbox">
        <span class="en-switch__track"></span>
      </label>
    </label>
  </div>
</fieldset>`,gt={__name:`54`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=ht,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_t=`<div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-4)">
  <div>
    <h4 style="margin-block-end: var(--en-space-2)">Immediate Action (Switch)</h4>
    <label class="en-check en-check--full">
      <span>Enable dark mode</span>
      <label class="en-switch">
        <input type="checkbox">
        <span class="en-switch__track"></span>
      </label>
    </label>
  </div>

  <div>
    <h4 style="margin-block-end: var(--en-space-2)">Form Submission (Checkbox)</h4>
    <label class="en-check">
      <input type="checkbox">
      <span>I agree to the terms and conditions</span>
    </label>
  </div>
</div>`,vt={__name:`55`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=_t,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},yt=`<div dir="rtl">
  <label class="en-check en-check--full">
    <span>تفعيل الإشعارات</span>
    <label class="en-switch">
      <input type="checkbox" checked>
      <span class="en-switch__track"></span>
    </label>
  </label>
</div>`,bt={__name:`56`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=yt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},xt=`<fieldset class="en-fieldset">
  <legend class="en-legend">Personal Information</legend>
  <div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-3)">
    <div class="en-field">
      <label for="first-name" class="en-label">First Name</label>
      <input id="first-name" class="en-input" type="text">
    </div>
    <div class="en-field">
      <label for="last-name" class="en-label">Last Name</label>
      <input id="last-name" class="en-input" type="text">
    </div>
  </div>
</fieldset>`,St={__name:`57`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=xt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Ct=`<fieldset class="en-fieldset">
  <legend class="en-legend">Notification Preferences</legend>
  <p class="en-fieldset__description">Choose how you want to be notified about updates</p>
  <div class="en-fieldset__options">
    <label class="en-check">
      <input type="checkbox" checked>
      <span>Email notifications</span>
    </label>
    <label class="en-check">
      <input type="checkbox">
      <span>SMS notifications</span>
    </label>
    <label class="en-check">
      <input type="checkbox" checked>
      <span>Push notifications</span>
    </label>
  </div>
</fieldset>`,wt={__name:`58`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Ct,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Tt=`<fieldset class="en-fieldset">
  <legend class="en-legend">Preferred Contact Method</legend>
  <div class="en-fieldset__options en-fieldset__options--inline">
    <label class="en-radio">
      <input type="radio" name="contact" value="email" checked>
      <span>Email</span>
    </label>
    <label class="en-radio">
      <input type="radio" name="contact" value="phone">
      <span>Phone</span>
    </label>
    <label class="en-radio">
      <input type="radio" name="contact" value="sms">
      <span>SMS</span>
    </label>
  </div>
</fieldset>`,Et={__name:`59`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Tt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Dt=`<form>
  <fieldset class="en-fieldset">
    <legend class="en-legend en-legend--required">Payment Method</legend>
    <p class="en-fieldset__description">Select how you would like to pay</p>
    <div class="en-fieldset__options">
      <label class="en-radio">
        <input type="radio" name="payment" value="card" required>
        <span>Credit Card</span>
      </label>
      <label class="en-radio">
        <input type="radio" name="payment" value="bank">
        <span>Bank Transfer</span>
      </label>
      <label class="en-radio">
        <input type="radio" name="payment" value="wallet">
        <span>E-Wallet</span>
      </label>
    </div>
  </fieldset>
  <button class="en-btn en-btn--primary" type="submit">Continue</button>
</form>`,Ot={__name:`60`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Dt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},kt=`<fieldset class="en-fieldset en-fieldset--plain">
  <legend class="en-legend">Shipping Address</legend>
  <div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-3)">
    <div class="en-field">
      <label for="street" class="en-label">Street Address</label>
      <input id="street" class="en-input" type="text">
    </div>
    <div class="en-grid" style="--en-gap: var(--en-space-3); grid-template-columns: 1fr 1fr">
      <div class="en-field">
        <label for="city" class="en-label">City</label>
        <input id="city" class="en-input" type="text">
      </div>
      <div class="en-field">
        <label for="postal" class="en-label">Postal Code</label>
        <input id="postal" class="en-input" type="text">
      </div>
    </div>
  </div>
</fieldset>`,At={__name:`61`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=kt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},jt=`<fieldset class="en-fieldset en-fieldset--plain">
  <legend class="en-legend en-legend--hidden">Account Settings</legend>
  <div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-3)">
    <label class="en-check en-check--full">
      <span>Enable two-factor authentication</span>
      <label class="en-switch">
        <input type="checkbox">
        <span class="en-switch__track"></span>
      </label>
    </label>
    <label class="en-check en-check--full">
      <span>Receive security alerts</span>
      <label class="en-switch">
        <input type="checkbox" checked>
        <span class="en-switch__track"></span>
      </label>
    </label>
  </div>
</fieldset>`,Mt={__name:`62`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=jt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Nt=`<form>
  <fieldset class="en-fieldset en-fieldset--invalid">
    <legend class="en-legend en-legend--required">Agree to Terms</legend>
    <p class="en-fieldset__description">You must accept the terms to continue</p>
    <div class="en-fieldset__options">
      <label class="en-check">
        <input type="checkbox" required>
        <span>I agree to the Terms of Service</span>
      </label>
      <label class="en-check">
        <input type="checkbox" required>
        <span>I agree to the Privacy Policy</span>
      </label>
    </div>
  </fieldset>
  <button class="en-btn en-btn--primary" type="submit">Submit</button>
</form>`,Pt={__name:`63`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Nt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Ft=`<fieldset class="en-fieldset" disabled>
  <legend class="en-legend">Unavailable Options</legend>
  <p class="en-fieldset__description">These options are currently disabled</p>
  <div class="en-fieldset__options">
    <label class="en-check">
      <input type="checkbox">
      <span>Option 1</span>
    </label>
    <label class="en-check">
      <input type="checkbox">
      <span>Option 2</span>
    </label>
    <label class="en-check">
      <input type="checkbox">
      <span>Option 3</span>
    </label>
  </div>
</fieldset>`,It={__name:`64`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Ft,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Lt=`<fieldset class="en-fieldset">
  <legend class="en-legend">Account Setup</legend>
  
  <fieldset class="en-fieldset en-fieldset--plain">
    <legend class="en-legend">Basic Information</legend>
    <div class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-3)">
      <div class="en-field">
        <label for="username-nested" class="en-label">Username</label>
        <input id="username-nested" class="en-input" type="text">
      </div>
      <div class="en-field">
        <label for="email-nested" class="en-label">Email</label>
        <input id="email-nested" class="en-input" type="email">
      </div>
    </div>
  </fieldset>
  
  <fieldset class="en-fieldset en-fieldset--plain">
    <legend class="en-legend">Preferences</legend>
    <div class="en-fieldset__options">
      <label class="en-check">
        <input type="checkbox">
        <span>Subscribe to newsletter</span>
      </label>
      <label class="en-check">
        <input type="checkbox">
        <span>Enable notifications</span>
      </label>
    </div>
  </fieldset>
</fieldset>`,Rt={__name:`65`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Lt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},zt=`<form class="en-flex en-flex--col en-gap-4">
  <fieldset class="en-fieldset">
    <legend class="en-legend en-legend--required">Personal Details</legend>
    <div class="en-grid" style="--en-gap: var(--en-space-3); grid-template-columns: 1fr 1fr">
      <div class="en-field">
        <label for="form-first" class="en-label">First Name</label>
        <input id="form-first" class="en-input" type="text" required>
      </div>
      <div class="en-field">
        <label for="form-last" class="en-label">Last Name</label>
        <input id="form-last" class="en-input" type="text" required>
      </div>
    </div>
    <div class="en-field">
      <label for="form-email" class="en-label">Email</label>
      <input id="form-email" class="en-input" type="email" required>
    </div>
  </fieldset>

  <fieldset class="en-fieldset">
    <legend class="en-legend">Communication Preferences</legend>
    <p class="en-fieldset__description">How would you like us to contact you?</p>
    <div class="en-fieldset__options">
      <label class="en-check">
        <input type="checkbox" checked>
        <span>Email updates</span>
      </label>
      <label class="en-check">
        <input type="checkbox">
        <span>SMS notifications</span>
      </label>
      <label class="en-check">
        <input type="checkbox">
        <span>Phone calls</span>
      </label>
    </div>
  </fieldset>

  <div class="en-grid" style="--en-gap: var(--en-space-2); grid-template-columns: auto 1fr">
    <button class="en-btn en-btn--primary" type="submit">Submit</button>
    <button class="en-btn en-btn--outline" type="button">Cancel</button>
  </div>
</form>`,Bt={__name:`66`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=zt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Vt=`<form class="en-form-grid">
  <div class="en-field">
    <label for="grid-first" class="en-label">First Name</label>
    <input id="grid-first" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid-last" class="en-label">Last Name</label>
    <input id="grid-last" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid-email" class="en-label">Email</label>
    <input id="grid-email" class="en-input" type="email">
  </div>
  <div class="en-field">
    <label for="grid-phone" class="en-label">Phone</label>
    <input id="grid-phone" class="en-input" type="tel">
  </div>
</form>`,Ht={__name:`67`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Vt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Ut=`<form class="en-form-grid en-form-grid--cols-2">
  <div class="en-field">
    <label for="grid2-first" class="en-label">First Name</label>
    <input id="grid2-first" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid2-last" class="en-label">Last Name</label>
    <input id="grid2-last" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid2-email" class="en-label">Email</label>
    <input id="grid2-email" class="en-input" type="email">
  </div>
  <div class="en-field">
    <label for="grid2-phone" class="en-label">Phone</label>
    <input id="grid2-phone" class="en-input" type="tel">
  </div>
  <div class="en-field en-field--span-full">
    <label for="grid2-address" class="en-label">Street Address</label>
    <input id="grid2-address" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid2-city" class="en-label">City</label>
    <input id="grid2-city" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid2-postal" class="en-label">Postal Code</label>
    <input id="grid2-postal" class="en-input" type="text">
  </div>
</form>`,Wt={__name:`68`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Ut,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Gt=`<form class="en-form-grid en-form-grid--cols-3">
  <div class="en-field">
    <label for="grid3-first" class="en-label">First Name</label>
    <input id="grid3-first" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid3-middle" class="en-label">Middle Name</label>
    <input id="grid3-middle" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid3-last" class="en-label">Last Name</label>
    <input id="grid3-last" class="en-input" type="text">
  </div>
  <div class="en-field en-field--span-full">
    <label for="grid3-email" class="en-label">Email Address</label>
    <input id="grid3-email" class="en-input" type="email">
  </div>
  <div class="en-field">
    <label for="grid3-city" class="en-label">City</label>
    <input id="grid3-city" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid3-state" class="en-label">State</label>
    <input id="grid3-state" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid3-zip" class="en-label">ZIP Code</label>
    <input id="grid3-zip" class="en-input" type="text">
  </div>
</form>`,Kt={__name:`69`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Gt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},qt=`<form class="en-form-grid en-form-grid--cols-4">
  <div class="en-field en-field--span-full">
    <label for="grid4-name" class="en-label">Full Name</label>
    <input id="grid4-name" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid4-card1" class="en-label">Card Group 1</label>
    <input id="grid4-card1" class="en-input" type="text" maxlength="4">
  </div>
  <div class="en-field">
    <label for="grid4-card2" class="en-label">Card Group 2</label>
    <input id="grid4-card2" class="en-input" type="text" maxlength="4">
  </div>
  <div class="en-field">
    <label for="grid4-card3" class="en-label">Card Group 3</label>
    <input id="grid4-card3" class="en-input" type="text" maxlength="4">
  </div>
  <div class="en-field">
    <label for="grid4-card4" class="en-label">Card Group 4</label>
    <input id="grid4-card4" class="en-input" type="text" maxlength="4">
  </div>
</form>`,Jt={__name:`70`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=qt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Yt=`<form class="en-form-grid en-form-grid--cols-3">
  <div class="en-field en-field--span-full">
    <label for="grid-full-name" class="en-label">Full Name</label>
    <input id="grid-full-name" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid-full-city" class="en-label">City</label>
    <input id="grid-full-city" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid-full-state" class="en-label">State</label>
    <input id="grid-full-state" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="grid-full-zip" class="en-label">ZIP</label>
    <input id="grid-full-zip" class="en-input" type="text">
  </div>
  <div class="en-field en-field--span-full">
    <label for="grid-full-bio" class="en-label">Biography</label>
    <textarea id="grid-full-bio" class="en-textarea" rows="3"></textarea>
  </div>
</form>`,Xt={__name:`71`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Yt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Zt=`<form class="en-form-grid en-form-grid--cols-2">
  <div class="en-field en-field--span-full">
    <label for="reg-email" class="en-label">Email Address</label>
    <input id="reg-email" class="en-input" type="email" required>
  </div>
  
  <div class="en-field">
    <label for="reg-password" class="en-label">Password</label>
    <input id="reg-password" class="en-input" type="password" required>
  </div>
  
  <div class="en-field">
    <label for="reg-confirm" class="en-label">Confirm Password</label>
    <input id="reg-confirm" class="en-input" type="password" required>
  </div>
  
  <div class="en-field">
    <label for="reg-first" class="en-label">First Name</label>
    <input id="reg-first" class="en-input" type="text" required>
  </div>
  
  <div class="en-field">
    <label for="reg-last" class="en-label">Last Name</label>
    <input id="reg-last" class="en-input" type="text" required>
  </div>
  
  <div class="en-field">
    <label for="reg-phone" class="en-label">Phone Number</label>
    <input id="reg-phone" class="en-input" type="tel">
  </div>
  
  <div class="en-field">
    <label for="reg-country" class="en-label">Country</label>
    <select id="reg-country" class="en-select" required>
      <option value="">Select country</option>
      <option>United States</option>
      <option>Canada</option>
      <option>United Kingdom</option>
    </select>
  </div>
  
  <div class="en-field en-field--span-full">
    <label class="en-check">
      <input type="checkbox" required>
      <span>I agree to the Terms of Service and Privacy Policy</span>
    </label>
  </div>
  
  <div class="en-field en-field--span-full">
    <button class="en-btn en-btn--primary en-btn--full" type="submit">Create Account</button>
  </div>
</form>`,Qt={__name:`72`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Zt,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},$t=`<form class="en-form-grid en-form-grid--cols-2">
  <fieldset class="en-fieldset en-fieldset--plain en-field--span-full">
    <legend class="en-legend">Personal Information</legend>
    <div class="en-form-grid en-form-grid--cols-2">
      <div class="en-field">
        <label for="person-first" class="en-label">First Name</label>
        <input id="person-first" class="en-input" type="text">
      </div>
      <div class="en-field">
        <label for="person-last" class="en-label">Last Name</label>
        <input id="person-last" class="en-input" type="text">
      </div>
      <div class="en-field en-field--span-full">
        <label for="person-email" class="en-label">Email</label>
        <input id="person-email" class="en-input" type="email">
      </div>
    </div>
  </fieldset>
  
  <fieldset class="en-fieldset en-fieldset--plain en-field--span-full">
    <legend class="en-legend">Address</legend>
    <div class="en-form-grid en-form-grid--cols-2">
      <div class="en-field en-field--span-full">
        <label for="addr-street" class="en-label">Street Address</label>
        <input id="addr-street" class="en-input" type="text">
      </div>
      <div class="en-field">
        <label for="addr-city" class="en-label">City</label>
        <input id="addr-city" class="en-input" type="text">
      </div>
      <div class="en-field">
        <label for="addr-postal" class="en-label">Postal Code</label>
        <input id="addr-postal" class="en-input" type="text">
      </div>
    </div>
  </fieldset>
</form>`,en={__name:`73`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=$t,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},tn=`<form class="en-form-grid en-form-grid--horizontal">
  <div class="en-field">
    <label for="h-first" class="en-label">First Name</label>
    <input id="h-first" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="h-last" class="en-label">Last Name</label>
    <input id="h-last" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="h-email" class="en-label">Email</label>
    <input id="h-email" class="en-input" type="email">
    <p class="en-hint">We'll never share your email.</p>
  </div>
  <div class="en-field">
    <label for="h-bio" class="en-label">Bio</label>
    <textarea id="h-bio" class="en-textarea" rows="3"></textarea>
  </div>
</form>`,nn={__name:`74`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=tn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},rn=`<form class="en-form-grid en-form-grid--horizontal" style="--en-form-label-width: 12rem">
  <div class="en-field">
    <label for="hw-username" class="en-label">Username</label>
    <input id="hw-username" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="hw-email" class="en-label">Email Address</label>
    <input id="hw-email" class="en-input" type="email">
    <p class="en-hint">Must be a valid email</p>
  </div>
  <div class="en-field">
    <label for="hw-password" class="en-label">Password</label>
    <input id="hw-password" class="en-input" type="password">
  </div>
</form>`,an={__name:`75`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=rn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},on=`<form class="en-form-grid en-form-grid--horizontal en-form-grid--reverse">
  <div class="en-field">
    <label for="hr-first" class="en-label">First Name</label>
    <input id="hr-first" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="hr-last" class="en-label">Last Name</label>
    <input id="hr-last" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="hr-email" class="en-label">Email</label>
    <input id="hr-email" class="en-input" type="email">
    <p class="en-hint">Your primary contact</p>
  </div>
</form>`,sn={__name:`76`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=on,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},cn=`<form class="en-form-grid en-form-grid--cols-2 en-form-grid--horizontal" style="--en-form-label-width: 10rem">
  <div class="en-field">
    <label for="hc-first" class="en-label">First Name</label>
    <input id="hc-first" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="hc-last" class="en-label">Last Name</label>
    <input id="hc-last" class="en-input" type="text">
  </div>
  <div class="en-field">
    <label for="hc-email" class="en-label">Email</label>
    <input id="hc-email" class="en-input" type="email">
  </div>
  <div class="en-field">
    <label for="hc-phone" class="en-label">Phone</label>
    <input id="hc-phone" class="en-input" type="tel">
  </div>
  <div class="en-field en-field--span-full">
    <label for="hc-address" class="en-label">Street Address</label>
    <input id="hc-address" class="en-input" type="text">
  </div>
</form>`,ln={__name:`77`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=cn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},un=`<div class="en-input-group">
  <span class="en-input-group__addon">@</span>
  <input class="en-input" type="text" placeholder="Username">
</div>`,dn={__name:`78`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=un,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},fn=`<div class="en-input-group">
  <input class="en-input" type="text" placeholder="Search...">
  <button class="en-btn en-btn--primary" type="button">Search</button>
</div>`,pn={__name:`79`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=fn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},mn=`<div class="en-input-group">
  <select class="en-select en-input-group__fixed">
    <option>USD</option>
    <option>EUR</option>
    <option>GBP</option>
  </select>
  <input class="en-input" type="number" placeholder="0.00">
</div>`,hn={__name:`80`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=mn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},gn=`<div class="en-input-group">
  <span class="en-input-group__addon">$</span>
  <input class="en-input" type="number" placeholder="0.00">
  <span class="en-input-group__addon">.00</span>
</div>`,_n={__name:`81`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=gn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},vn=`<div class="en-grid en-grid--align-start">
  <div class="en-input-group en-input-group--sm">
    <span class="en-input-group__addon">@</span>
    <input class="en-input" type="text" placeholder="Small">
  </div>

  <div class="en-input-group">
    <span class="en-input-group__addon">@</span>
    <input class="en-input" type="text" placeholder="Default">
  </div>

  <div class="en-input-group en-input-group--lg">
    <span class="en-input-group__addon">@</span>
    <input class="en-input" type="text" placeholder="Large">
  </div>
</div>`,yn={__name:`82`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=vn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},bn=`<div class="en-input-group">
  <input class="en-input" type="text" placeholder="Enter text">
  <button class="en-btn en-btn--outline" type="button">Copy</button>
  <button class="en-btn en-btn--outline" type="button">Paste</button>
  <button class="en-btn en-btn--primary" type="button">Submit</button>
</div>`,xn={__name:`83`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=bn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Sn=`<div class="en-input-group">
  <select class="en-select en-input-group__fixed">
    <option>https://</option>
    <option>http://</option>
  </select>
  <input class="en-input" type="text" placeholder="example.com">
</div>`,Cn={__name:`84`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Sn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},wn=`<div class="en-input-group">
  <input class="en-input" type="text" placeholder="username">
  <span class="en-input-group__addon">@</span>
  <input class="en-input" type="text" placeholder="domain.com">
</div>`,Tn={__name:`85`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=wn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},En=`<div class="en-input-group">
  <span class="en-input-group__addon">$</span>
  <input class="en-input" type="number" step="0.01" placeholder="0.00">
  <select class="en-select en-input-group__fixed">
    <option>USD</option>
    <option>EUR</option>
    <option>GBP</option>
    <option>JPY</option>
  </select>
</div>`,Dn={__name:`86`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=En,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},On=`<div class="en-input-group">
  <input class="en-input" type="date">
  <span class="en-input-group__addon">to</span>
  <input class="en-input" type="date">
</div>`,kn={__name:`87`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=On,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},An=`<div class="en-input-group">
  <input class="en-input" type="text" placeholder="Choose file..." readonly>
  <button class="en-btn en-btn--outline" type="button">Browse</button>
</div>`,jn={__name:`88`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=An,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Mn=`<div class="en-input-group">
  <select class="en-select">
    <option>Select action...</option>
    <option>Export as PDF</option>
    <option>Export as CSV</option>
    <option>Print</option>
  </select>
  <button class="en-btn en-btn--primary" type="button">Go</button>
</div>`,Nn={__name:`89`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Mn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Pn=`<div class="en-input-group">
  <span class="en-input-group__addon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="7" cy="7" r="5"/>
      <path d="M11 11l4 4"/>
    </svg>
  </span>
  <input class="en-input" type="text" placeholder="Search">
</div>`,Fn={__name:`90`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Pn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},In=`<div class="en-input-group">
  <span class="en-input-group__addon en-input-group__addon--grow">
    Optional prefix text that can be longer
  </span>
  <input class="en-input" type="text" placeholder="Input">
</div>`,Ln={__name:`91`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=In,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Rn=`<div class="en-input-group">
  <select class="en-select en-input-group__fixed">
    <option>+1</option>
    <option>+44</option>
    <option>+81</option>
  </select>
  <input class="en-input" type="tel" placeholder="Phone number">
</div>`,zn={__name:`92`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Rn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Bn=`<form class="en-flex" style="--en-flex-direction: column; --en-gap: var(--en-space-4); max-width: 500px">
  <div class="en-field">
    <label class="en-label">Amount</label>
    <div class="en-input-group">
      <select class="en-select en-input-group__fixed">
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
      </select>
      <span class="en-input-group__addon">$</span>
      <input class="en-input" type="number" step="0.01" placeholder="0.00">
    </div>
  </div>

  <div class="en-field">
    <label class="en-label">Card Number</label>
    <div class="en-input-group">
      <input class="en-input" type="text" placeholder="1234 5678 9012 3456">
      <span class="en-input-group__addon">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="currentColor">
          <rect width="24" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1"/>
          <rect x="2" y="4" width="20" height="3" rx="1"/>
        </svg>
      </span>
    </div>
  </div>

  <div class="en-grid" style="--en-gap: var(--en-space-3); grid-template-columns: 1fr 1fr">
    <div class="en-field">
      <label class="en-label">Expiry</label>
      <div class="en-input-group">
        <input class="en-input" type="text" placeholder="MM">
        <span class="en-input-group__addon">/</span>
        <input class="en-input" type="text" placeholder="YY">
      </div>
    </div>

    <div class="en-field">
      <label class="en-label">CVV</label>
      <input class="en-input" type="text" placeholder="123">
    </div>
  </div>

  <button class="en-btn en-btn--primary en-btn--full" type="submit">Pay Now</button>
</form>`,Vn={__name:`93`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Bn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Hn=`<div class="en-field--floating">
  <input class="en-input" type="text" placeholder=" " id="float-name">
  <label for="float-name" class="en-label">Full Name</label>
</div>`,Un={__name:`94`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Hn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Wn=`<div class="en-field--floating">
  <input class="en-input" type="email" placeholder=" " id="float-email">
  <label for="float-email" class="en-label">Email Address</label>
</div>`,Gn={__name:`95`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Wn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Kn=`<div class="en-field--floating">
  <textarea class="en-textarea" rows="4" placeholder=" " id="float-message"></textarea>
  <label for="float-message" class="en-label">Your Message</label>
</div>`,qn={__name:`96`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Kn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Jn=`<form class="en-flex en-flex--col en-flex--stretch en-gap-4" style="max-width: 400px">
  <div class="en-field--floating">
    <input class="en-input" type="text" placeholder=" " id="float-first">
    <label for="float-first" class="en-label">First Name</label>
  </div>

  <div class="en-field--floating">
    <input class="en-input" type="text" placeholder=" " id="float-last">
    <label for="float-last" class="en-label">Last Name</label>
  </div>

  <div class="en-field--floating">
    <input class="en-input" type="email" placeholder=" " id="float-email2">
    <label for="float-email2" class="en-label">Email</label>
  </div>

  <div class="en-field--floating">
    <input class="en-input" type="tel" placeholder=" " id="float-phone">
    <label for="float-phone" class="en-label">Phone Number</label>
  </div>

  <button class="en-btn en-btn--primary" type="submit">Submit</button>
</form>`,Yn={__name:`97`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Jn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Xn=`<div class="en-field--floating">
  <input class="en-input" type="text" placeholder=" " id="float-prefilled" value="John Doe">
  <label for="float-prefilled" class="en-label">Full Name</label>
</div>`,Zn={__name:`98`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Xn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Qn=`<div class="en-field--floating">
  <input class="en-input" type="password" placeholder=" " id="float-pass">
  <label for="float-pass" class="en-label">Password</label>
</div>`,$n={__name:`99`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=Qn,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},er=`<div class="en-field--floating">
  <input class="en-input" type="date" placeholder=" " id="float-date">
  <label for="float-date" class="en-label">Birth Date</label>
</div>`,tr={__name:`100`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=er,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},nr=`<div class="en-field--floating">
  <input class="en-input" type="number" placeholder=" " id="float-age">
  <label for="float-age" class="en-label">Age</label>
</div>`,rr={__name:`101`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=nr,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ir=`<form class="en-card" style="max-width: 400px; margin: 0 auto">
  <div class="en-card__body en-flex en-flex--col en-flex--stretch en-gap-4">
    <div>
      <h3 class="en-card__title">Sign In</h3>
      <p class="en-card__subtitle">Enter your credentials to continue</p>
    </div>

    <div class="en-field--floating">
      <input class="en-input" type="email" placeholder=" " id="login-email" required>
      <label for="login-email" class="en-label">Email Address</label>
    </div>

    <div class="en-field--floating">
      <input class="en-input" type="password" placeholder=" " id="login-pass" required>
      <label for="login-pass" class="en-label">Password</label>
    </div>

    <label class="en-check">
      <input type="checkbox">
      <span>Remember me</span>
    </label>

    <button class="en-btn en-btn--primary en-btn--full" type="submit">Sign In</button>
  </div>
</form>`,Y={__name:`102`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=ir,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ar=`<form class="en-card" style="max-width: 500px; margin: 0 auto">
  <div class="en-card__body en-flex en-flex--col en-flex--stretch en-gap-4">
    <div>
      <h3 class="en-card__title">Create Account</h3>
      <p class="en-card__subtitle">Fill in your details to get started</p>
    </div>

    <div class="en-grid en-gap-3" style="grid-template-columns: 1fr 1fr">
      <div class="en-field--floating">
        <input class="en-input" type="text" placeholder=" " id="reg-first2" required>
        <label for="reg-first2" class="en-label">First Name</label>
      </div>

      <div class="en-field--floating">
        <input class="en-input" type="text" placeholder=" " id="reg-last2" required>
        <label for="reg-last2" class="en-label">Last Name</label>
      </div>
    </div>

    <div class="en-field--floating">
      <input class="en-input" type="email" placeholder=" " id="reg-email2" required>
      <label for="reg-email2" class="en-label">Email Address</label>
    </div>

    <div class="en-field--floating">
      <input class="en-input" type="tel" placeholder=" " id="reg-phone2">
      <label for="reg-phone2" class="en-label">Phone Number (Optional)</label>
    </div>

    <div class="en-field--floating">
      <input class="en-input" type="password" placeholder=" " id="reg-pass2" required>
      <label for="reg-pass2" class="en-label">Password</label>
    </div>

    <div class="en-field--floating">
      <input class="en-input" type="password" placeholder=" " id="reg-confirm2" required>
      <label for="reg-confirm2" class="en-label">Confirm Password</label>
    </div>

    <label class="en-check">
      <input type="checkbox" required>
      <span>I agree to the Terms and Conditions</span>
    </label>

    <button class="en-btn en-btn--primary en-btn--full" type="submit">Create Account</button>
  </div>
</form>`,or={__name:`103`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=ar,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},sr=`<div class="en-field--floating-outlined">
  <input class="en-input" type="text" placeholder=" " id="outl-name">
  <label for="outl-name" class="en-label">Full Name</label>
</div>`,cr={__name:`104`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=sr,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},lr=`<div class="en-field--floating-outlined">
  <input class="en-input" type="email" placeholder=" " id="outl-email" value="example@host.com">
  <label for="outl-email" class="en-label">Email Address</label>
</div>`,ur={__name:`105`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=lr,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},dr=`<div class="en-field--floating-outlined">
  <textarea class="en-textarea" rows="4" placeholder=" " id="outl-message"></textarea>
  <label for="outl-message" class="en-label">Your Message</label>
</div>`,fr={__name:`106`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=dr,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},pr=`<div class="en-flex en-flex--col en-flex--stretch en-gap-4" style="max-width: 400px">
  <div class="en-field--floating-outlined">
    <input class="en-input en-input--sm" type="text" placeholder=" " id="outl-sm" value="Small">
    <label for="outl-sm" class="en-label">Small</label>
  </div>

  <div class="en-field--floating-outlined">
    <input class="en-input" type="text" placeholder=" " id="outl-md" value="Default">
    <label for="outl-md" class="en-label">Default</label>
  </div>

  <div class="en-field--floating-outlined">
    <input class="en-input en-input--lg" type="text" placeholder=" " id="outl-lg" value="Large">
    <label for="outl-lg" class="en-label">Large</label>
  </div>

  <div class="en-field--floating-outlined">
    <textarea class="en-textarea en-textarea--sm" rows="3" placeholder=" " id="outl-ta-sm">Small textarea</textarea>
    <label for="outl-ta-sm" class="en-label">Small Message</label>
  </div>
</div>`,mr={__name:`107`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=pr,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},hr=`<form class="en-flex en-flex--col en-flex--stretch en-gap-4" style="max-width: 400px">
  <div class="en-field--floating-outlined">
    <input class="en-input" type="text" placeholder=" " id="outl-first">
    <label for="outl-first" class="en-label">First Name</label>
  </div>

  <div class="en-field--floating-outlined">
    <input class="en-input" type="email" placeholder=" " id="outl-mail2" required>
    <label for="outl-mail2" class="en-label">Email</label>
  </div>

  <div class="en-field--floating-outlined">
    <input class="en-input" type="password" placeholder=" " id="outl-pass" required>
    <label for="outl-pass" class="en-label">Password</label>
  </div>

  <button class="en-btn en-btn--primary" type="submit">Submit</button>
</form>`,gr={__name:`108`,setup(t){let r=e(null);return u(()=>{r.value&&(r.value.innerHTML=hr,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),a(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,t)=>(o(),n(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_r={};function vr(e,n){let r=ee(`Downloadable`);return o(),t(r,{"dev-url":`form/form-basic.css`})}var X={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">/* ✓ GOOD - form controls */</span></span>
<span class="line"><span class="shiki-token-function">.en-input</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border-control)</span><span class="shiki-foreground">; }</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">/* ✗ BAD - don't use generic border */</span></span>
<span class="line"><span class="shiki-token-function">.en-input</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> solid </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">; }</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:0,lang:`css`,injectKind:null,editable:!1,source:null},1:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"username"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Username&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"username"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Choose a unique username&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:d,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Full Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Enter your name"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Default text input`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:p,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"you@example.com"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Password&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Enter password"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tel"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Phone&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tel"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tel"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"+62 812-3456-7890"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"url"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Website&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"url"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"url"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"https://example.com"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Age&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> min</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-token-function"> max</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"120"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"25"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"date"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Birth Date&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"date"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"date"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Common input types`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:h,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"input-sm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Small Input&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"input-sm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input en-input--sm"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Small"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"input-md"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Default Input&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"input-md"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Default"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"input-lg"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Large Input&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"input-lg"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input en-input--lg"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Large"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Input sizes`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:_,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ghost-input"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Ghost Input&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ghost-input"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input en-input--ghost"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Borderless until focus"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Ghost input`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ghost-filled"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Ghost Input (Filled)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ghost-filled"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input en-input--ghost"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Has value"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Ghost input with value`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:x,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"valid-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"valid-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"user@example.com"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Valid email format&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Valid input`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:C,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"invalid-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"invalid-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"invalid-email"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint en-text-danger"</span><span class="shiki-foreground">>Please enter a valid email&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Validate&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Invalid input (try submitting)`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:T,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"disabled-input"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Username&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"disabled-input"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"readonly-user"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>This field cannot be edited&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Disabled input`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:D,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"readonly-input"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Order ID&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"readonly-input"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ORD-2024-001"</span><span class="shiki-token-function"> readonly</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>This value is auto-generated&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Readonly input`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:k,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"required-input"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Email &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-danger)"</span><span class="shiki-foreground">>*&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"required-input"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Required field&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Required input with asterisk`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"username-help"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Username&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"username-help"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Choose username"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Minimum 3 characters, letters and numbers only&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Input with help text`,key:12,lang:`html`,injectKind:null,editable:!1,source:null},13:{component:N,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Search&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search products..."</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Search input`,key:13,lang:`html`,injectKind:null,editable:!1,source:null},14:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Brand Color&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"#2563EB"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Color picker input`,key:14,lang:`html`,injectKind:null,editable:!1,source:null},15:{component:L,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"country"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Country&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"country"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Select a country&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Indonesia&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Malaysia&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Singapore&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Thailand&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Vietnam&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Default select`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:z,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"select-sm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Small Select&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"select-sm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select en-select--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 1&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 2&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 3&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"select-md"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Default Select&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"select-md"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 1&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 2&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 3&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"select-lg"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Large Select&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"select-lg"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select en-select--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 1&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 2&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 3&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Select sizes`,key:16,lang:`html`,injectKind:null,editable:!1,source:null},17:{component:V,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"location"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Location&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"location"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Select location&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">optgroup</span><span class="shiki-token-function"> label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Java"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Jakarta&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Bandung&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Surabaya&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Yogyakarta&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">optgroup</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">optgroup</span><span class="shiki-token-function"> label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Sumatra"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Medan&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Palembang&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Padang&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">optgroup</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">optgroup</span><span class="shiki-token-function"> label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Bali"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Denpasar&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Ubud&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">optgroup</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Select with option groups`,key:17,lang:`html`,injectKind:null,editable:!1,source:null},18:{component:U,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"skills"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Skills (hold Ctrl/Cmd to select multiple)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"skills"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-token-function"> multiple</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"5"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>JavaScript&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>TypeScript&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Python&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Java&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Go&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Rust&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>PHP&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Ruby&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Multiple select`,key:18,lang:`html`,injectKind:null,editable:!1,source:null},19:{component:G,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ghost-select"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Ghost Select&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ghost-select"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select en-select--ghost"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 1&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 2&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Option 3&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Ghost select`,key:19,lang:`html`,injectKind:null,editable:!1,source:null},20:{component:q,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"disabled-select"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"disabled-select"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Inactive&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Disabled select`,key:20,lang:`html`,injectKind:null,editable:!1,source:null},21:{component:oe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"required-select"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Payment Method &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-danger)"</span><span class="shiki-foreground">>*&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"required-select"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">""</span><span class="shiki-foreground">>Select payment method&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Credit Card&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Bank Transfer&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>E-Wallet&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Please select a payment method&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Continue&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Required select`,key:21,lang:`html`,injectKind:null,editable:!1,source:null},22:{component:ce,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"message"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Message&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"message"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Enter your message..."</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Default textarea`,key:22,lang:`html`,injectKind:null,editable:!1,source:null},23:{component:ue,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"textarea-sm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Small Textarea&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"textarea-sm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea en-textarea--sm"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Small size"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"textarea-md"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Default Textarea&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"textarea-md"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Default size"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"textarea-lg"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Large Textarea&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"textarea-lg"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea en-textarea--lg"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"5"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Large size"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Textarea sizes`,key:23,lang:`html`,injectKind:null,editable:!1,source:null},24:{component:fe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"bio"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Bio&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"bio"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"5"</span><span class="shiki-token-function"> maxlength</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"500"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Tell us about yourself..."</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Maximum 500 characters&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Textarea with max length`,key:24,lang:`html`,injectKind:null,editable:!1,source:null},25:{component:me,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ghost-textarea"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Ghost Textarea&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ghost-textarea"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea en-textarea--ghost"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Borderless until focus"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Ghost textarea`,key:25,lang:`html`,injectKind:null,editable:!1,source:null},26:{component:ge,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"disabled-textarea"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Comments&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"disabled-textarea"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">>This textarea is disabled and cannot be edited.&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Disabled textarea`,key:26,lang:`html`,injectKind:null,editable:!1,source:null},27:{component:ve,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"readonly-textarea"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Terms and Conditions&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"readonly-textarea"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"6"</span><span class="shiki-token-function"> readonly</span><span class="shiki-foreground">>By using this service, you agree to the following terms:</span></span>
<span class="line"><span class="shiki-foreground">1. You will not misuse the service</span></span>
<span class="line"><span class="shiki-foreground">2. You are responsible for your content</span></span>
<span class="line"><span class="shiki-foreground">3. We may terminate access at any time&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Readonly textarea`,key:27,lang:`html`,injectKind:null,editable:!1,source:null},28:{component:be,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"required-textarea"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Feedback &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"color: var(--en-danger)"</span><span class="shiki-foreground">>*&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"required-textarea"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> required</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Your feedback is important to us"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Please provide your feedback&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Submit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Required textarea`,key:28,lang:`html`,injectKind:null,editable:!1,source:null},29:{component:Se,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"resizable"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Resizable Content&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"resizable"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Drag the corner to resize vertically"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Resize vertically by dragging the bottom-right corner&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Resizable textarea`,key:29,lang:`html`,injectKind:null,editable:!1,source:null},30:{component:we,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Accept terms and conditions&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Default checkbox`,key:30,lang:`html`,injectKind:null,editable:!1,source:null},31:{component:Ee,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Small checkbox&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Default checkbox&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Large checkbox&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Checkbox sizes`,key:31,lang:`html`,injectKind:null,editable:!1,source:null},32:{component:Oe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Unchecked&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Checked&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Disabled&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Checked &#x26; Disabled&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Checkbox states`,key:32,lang:`html`,injectKind:null,editable:!1,source:null},34:{component:Ae,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"parent-checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Select All&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-inline-start: var(--en-space-5)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"child-checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Option 1&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"child-checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Option 2&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"child-checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Option 3&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Indeterminate checkbox`,key:34,lang:`html`,injectKind:null,editable:!1,source:null},35:{component:Me,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Enable notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Full width checkbox`,key:35,lang:`html`,injectKind:null,editable:!1,source:null},36:{component:Pe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--reverse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>I agree to the terms&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Reverse layout checkbox`,key:36,lang:`html`,injectKind:null,editable:!1,source:null},37:{component:Ie,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">>Select your interests&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"interests"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"design"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Design&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"interests"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"development"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Development&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"interests"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"marketing"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Marketing&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"interests"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sales"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Sales&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Checkbox group`,key:37,lang:`html`,injectKind:null,editable:!1,source:null},38:{component:Re,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"choice"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Option 1&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"choice"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Option 2&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"choice"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Option 3&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Default radio buttons`,key:38,lang:`html`,injectKind:null,editable:!1,source:null},39:{component:Be,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio en-radio--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"size-sm"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Small radio&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"size-md"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Default radio&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio en-radio--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"size-lg"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Large radio&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Radio button sizes`,key:39,lang:`html`,injectKind:null,editable:!1,source:null},40:{component:He,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"state"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Unchecked&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"state"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Checked&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"state-disabled"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Disabled&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"state-disabled"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> checked</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Checked &#x26; Disabled&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Radio button states`,key:40,lang:`html`,injectKind:null,editable:!1,source:null},41:{component:We,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio en-radio--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Enable feature&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"feature"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Full width radio`,key:41,lang:`html`,injectKind:null,editable:!1,source:null},42:{component:Ke,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio en-radio--reverse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reverse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Option on the right&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Reverse layout radio`,key:42,lang:`html`,injectKind:null,editable:!1,source:null},43:{component:Je,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">>Select payment method&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"payment"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"card"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Credit Card&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"payment"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"bank"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Bank Transfer&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"payment"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"wallet"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>E-Wallet&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"payment"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"cash"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Cash on Delivery&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Radio group`,key:43,lang:`html`,injectKind:null,editable:!1,source:null},44:{component:Xe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Option 1&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Option 2&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Option 3&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Checkbox buttons`,key:44,lang:`html`,injectKind:null,editable:!1,source:null},45:{component:Qe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"display: grid; gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn en-check-btn--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Small&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn en-check-btn--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Small&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Default&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Default&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn en-check-btn--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Large&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn en-check-btn--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Large&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Checkbox button sizes`,key:45,lang:`html`,injectKind:null,editable:!1,source:null},46:{component:et,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Bold&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Italic&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Underline&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Checkbox button group`,key:46,lang:`html`,injectKind:null,editable:!1,source:null},47:{component:nt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn-group en-check-btn-group--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn en-check-btn--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Left&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn en-check-btn--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Center&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn en-check-btn--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Right&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Sun&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Mon&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Tue&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn-group en-check-btn-group--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn en-check-btn--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Day&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn en-check-btn--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Week&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn en-check-btn--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check-btn__label"</span><span class="shiki-foreground">>Month&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Checkbox button group sizes`,key:47,lang:`html`,injectKind:null,editable:!1,source:null},48:{component:it,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Enable notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Default switch`,key:48,lang:`html`,injectKind:null,editable:!1,source:null},49:{component:ot,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Standalone switch`,key:49,lang:`html`,injectKind:null,editable:!1,source:null},50:{component:ct,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Extra Small&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch en-switch--xs"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Small&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch en-switch--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Default&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Large&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch en-switch--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Switch sizes`,key:50,lang:`html`,injectKind:null,editable:!1,source:null},51:{component:ut,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Unchecked&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Checked&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Disabled&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Checked &#x26; Disabled&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Switch states`,key:51,lang:`html`,injectKind:null,editable:!1,source:null},52:{component:ft,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Enable dark mode&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Full width switch`,key:52,lang:`html`,injectKind:null,editable:!1,source:null},53:{component:mt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Email Notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Receive email updates about your account activity&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Switch with helper text`,key:53,lang:`html`,injectKind:null,editable:!1,source:null},54:{component:gt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">>Privacy Settings&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid en-grid--cols-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Profile Visibility&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Show Online Status&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Allow Messages&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Show Activity&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Multiple switches in form`,key:54,lang:`html`,injectKind:null,editable:!1,source:null},55:{component:vt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-4)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-2)"</span><span class="shiki-foreground">>Immediate Action (Switch)&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Enable dark mode&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">h4</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-end: var(--en-space-2)"</span><span class="shiki-foreground">>Form Submission (Checkbox)&#x3C;/</span><span class="shiki-token-string-expression">h4</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>I agree to the terms and conditions&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Switch vs Checkbox comparison`,key:55,lang:`html`,injectKind:null,editable:!1,source:null},56:{component:bt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> dir</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"rtl"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>تفعيل الإشعارات&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Switch in RTL`,key:56,lang:`html`,injectKind:null,editable:!1,source:null},57:{component:St,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Personal Information&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"first-name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"first-name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"last-name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"last-name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Default fieldset`,key:57,lang:`html`,injectKind:null,editable:!1,source:null},58:{component:wt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Notification Preferences&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__description"</span><span class="shiki-foreground">>Choose how you want to be notified about updates&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__options"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Email notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>SMS notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Push notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Fieldset with description`,key:58,lang:`html`,injectKind:null,editable:!1,source:null},59:{component:Et,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Preferred Contact Method&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__options en-fieldset__options--inline"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"contact"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"contact"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"phone"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Phone&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"contact"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sms"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>SMS&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Inline fieldset options`,key:59,lang:`html`,injectKind:null,editable:!1,source:null},60:{component:Ot,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend en-legend--required"</span><span class="shiki-foreground">>Payment Method&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__description"</span><span class="shiki-foreground">>Select how you would like to pay&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__options"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"payment"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"card"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Credit Card&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"payment"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"bank"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Bank Transfer&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-radio"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"radio"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"payment"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"wallet"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>E-Wallet&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Continue&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Required fieldset`,key:60,lang:`html`,injectKind:null,editable:!1,source:null},61:{component:At,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset en-fieldset--plain"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Shipping Address&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"street"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Street Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"street"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); grid-template-columns: 1fr 1fr"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"city"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>City&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"city"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"postal"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Postal Code&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"postal"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Plain fieldset`,key:61,lang:`html`,injectKind:null,editable:!1,source:null},62:{component:Mt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset en-fieldset--plain"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend en-legend--hidden"</span><span class="shiki-foreground">>Account Settings&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Enable two-factor authentication&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check en-check--full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Receive security alerts&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-switch__track"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Hidden legend`,key:62,lang:`html`,injectKind:null,editable:!1,source:null},63:{component:Pt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset en-fieldset--invalid"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend en-legend--required"</span><span class="shiki-foreground">>Agree to Terms&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__description"</span><span class="shiki-foreground">>You must accept the terms to continue&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__options"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>I agree to the Terms of Service&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>I agree to the Privacy Policy&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Submit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Invalid fieldset`,key:63,lang:`html`,injectKind:null,editable:!1,source:null},64:{component:It,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-token-function"> disabled</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Unavailable Options&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__description"</span><span class="shiki-foreground">>These options are currently disabled&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__options"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Option 1&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Option 2&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Option 3&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Disabled fieldset`,key:64,lang:`html`,injectKind:null,editable:!1,source:null},65:{component:Rt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Account Setup&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset en-fieldset--plain"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Basic Information&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"username-nested"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Username&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"username-nested"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email-nested"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email-nested"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset en-fieldset--plain"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Preferences&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__options"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Subscribe to newsletter&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Enable notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Nested fieldsets`,key:65,lang:`html`,injectKind:null,editable:!1,source:null},66:{component:Bt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-gap-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend en-legend--required"</span><span class="shiki-foreground">>Personal Details&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); grid-template-columns: 1fr 1fr"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"form-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"form-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"form-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"form-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"form-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"form-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Communication Preferences&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__description"</span><span class="shiki-foreground">>How would you like us to contact you?&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset__options"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Email updates&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>SMS notifications&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Phone calls&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); grid-template-columns: auto 1fr"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Submit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Cancel&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Complete form with multiple fieldsets`,key:66,lang:`html`,injectKind:null,editable:!1,source:null},67:{component:Ht,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-phone"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Phone&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-phone"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tel"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Basic form grid`,key:67,lang:`html`,injectKind:null,editable:!1,source:null},68:{component:Wt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--cols-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-phone"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Phone&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-phone"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tel"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-address"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Street Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-address"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-city"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>City&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-city"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-postal"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Postal Code&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid2-postal"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Two column form grid`,key:68,lang:`html`,injectKind:null,editable:!1,source:null},69:{component:Kt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--cols-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-middle"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Middle Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-middle"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-city"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>City&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-city"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-state"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>State&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-state"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-zip"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>ZIP Code&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid3-zip"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Three column form grid`,key:69,lang:`html`,injectKind:null,editable:!1,source:null},70:{component:Jt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--cols-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid4-name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Full Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid4-name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid4-card1"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Card Group 1&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid4-card1"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> maxlength</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid4-card2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Card Group 2&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid4-card2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> maxlength</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid4-card3"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Card Group 3&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid4-card3"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> maxlength</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid4-card4"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Card Group 4&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid4-card4"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> maxlength</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Four column form grid`,key:70,lang:`html`,injectKind:null,editable:!1,source:null},71:{component:Xt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--cols-3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-full-name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Full Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-full-name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-full-city"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>City&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-full-city"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-full-state"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>State&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-full-state"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-full-zip"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>ZIP&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-full-zip"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-full-bio"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Biography&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-full-bio"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Grid with full-width fields`,key:71,lang:`html`,injectKind:null,editable:!1,source:null},72:{component:Qt,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--cols-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-password"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Password&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-password"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-confirm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Confirm Password&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-confirm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-phone"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Phone Number&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-phone"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tel"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-country"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Country&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-country"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">""</span><span class="shiki-foreground">>Select country&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>United States&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Canada&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>United Kingdom&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>I agree to the Terms of Service and Privacy Policy&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--full"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Create Account&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Complete registration form`,key:72,lang:`html`,injectKind:null,editable:!1,source:null},73:{component:en,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--cols-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset en-fieldset--plain en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Personal Information&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--cols-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"person-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"person-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"person-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"person-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"person-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"person-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  </span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-fieldset en-fieldset--plain en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">legend</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-legend"</span><span class="shiki-foreground">>Address&#x3C;/</span><span class="shiki-token-string-expression">legend</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--cols-2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"addr-street"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Street Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"addr-street"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"addr-city"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>City&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"addr-city"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"addr-postal"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Postal Code&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"addr-postal"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">fieldset</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Grid with fieldset groups`,key:73,lang:`html`,injectKind:null,editable:!1,source:null},74:{component:nn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--horizontal"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"h-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"h-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"h-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"h-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"h-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"h-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>We'll never share your email.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"h-bio"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Bio&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"h-bio"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Horizontal form layout`,key:74,lang:`html`,injectKind:null,editable:!1,source:null},75:{component:an,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--horizontal"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-form-label-width: 12rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hw-username"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Username&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hw-username"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hw-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hw-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Must be a valid email&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hw-password"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Password&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hw-password"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Custom label width`,key:75,lang:`html`,injectKind:null,editable:!1,source:null},76:{component:sn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--horizontal en-form-grid--reverse"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hr-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hr-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hr-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hr-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hr-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hr-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint"</span><span class="shiki-foreground">>Your primary contact&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Reverse horizontal layout`,key:76,lang:`html`,injectKind:null,editable:!1,source:null},77:{component:ln,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-form-grid en-form-grid--cols-2 en-form-grid--horizontal"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-form-label-width: 10rem"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hc-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hc-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hc-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hc-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hc-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hc-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hc-phone"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Phone&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hc-phone"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tel"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field en-field--span-full"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hc-address"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Street Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"hc-address"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Horizontal two-column grid`,key:77,lang:`html`,injectKind:null,editable:!1,source:null},78:{component:dn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>@&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Username"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Input with text addon`,key:78,lang:`html`,injectKind:null,editable:!1,source:null},79:{component:pn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search..."</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Search&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Search with button`,key:79,lang:`html`,injectKind:null,editable:!1,source:null},80:{component:hn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select en-input-group__fixed"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>USD&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>EUR&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>GBP&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0.00"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Input with select addon`,key:80,lang:`html`,injectKind:null,editable:!1,source:null},81:{component:_n,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>$&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0.00"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>.00&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Input with addons on both sides`,key:81,lang:`html`,injectKind:null,editable:!1,source:null},82:{component:yn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid en-grid--align-start"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group en-input-group--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>@&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Small"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>@&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Default"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group en-input-group--lg"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>@&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Large"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Input group sizes`,key:82,lang:`html`,injectKind:null,editable:!1,source:null},83:{component:xn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Enter text"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Copy&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Paste&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Submit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Multiple buttons joined`,key:83,lang:`html`,injectKind:null,editable:!1,source:null},84:{component:Cn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select en-input-group__fixed"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>https://&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>http://&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"example.com"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`URL with protocol selector`,key:84,lang:`html`,injectKind:null,editable:!1,source:null},85:{component:Tn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"username"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>@&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"domain.com"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Email with domain`,key:85,lang:`html`,injectKind:null,editable:!1,source:null},86:{component:Dn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>$&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> step</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0.01"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0.00"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select en-input-group__fixed"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>USD&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>EUR&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>GBP&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>JPY&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Price with currency`,key:86,lang:`html`,injectKind:null,editable:!1,source:null},87:{component:kn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"date"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>to&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"date"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Date range picker`,key:87,lang:`html`,injectKind:null,editable:!1,source:null},88:{component:jn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Choose file..."</span><span class="shiki-token-function"> readonly</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--outline"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Browse&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`File input with button`,key:88,lang:`html`,injectKind:null,editable:!1,source:null},89:{component:Nn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Select action...&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Export as PDF&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Export as CSV&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>Print&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-foreground">>Go&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Select with submit button`,key:89,lang:`html`,injectKind:null,editable:!1,source:null},90:{component:Fn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 16 16"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">circle</span><span class="shiki-token-function"> cx</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"7"</span><span class="shiki-token-function"> cy</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"7"</span><span class="shiki-token-function"> r</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"5"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M11 11l4 4"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Input with icon`,key:90,lang:`html`,injectKind:null,editable:!1,source:null},91:{component:Ln,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon en-input-group__addon--grow"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Optional prefix text that can be longer</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Input"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Growing addon`,key:91,lang:`html`,injectKind:null,editable:!1,source:null},92:{component:zn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select en-input-group__fixed"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>+1&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>+44&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>+81&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tel"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Phone number"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Fixed width select`,key:92,lang:`html`,injectKind:null,editable:!1,source:null},93:{component:Vn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-flex-direction: column; --en-gap: var(--en-space-4); max-width: 500px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Amount&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-select en-input-group__fixed"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>USD&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>EUR&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>GBP&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>$&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> step</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0.01"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0.00"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Card Number&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1234 5678 9012 3456"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"24"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 16"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">rect</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"24"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> rx</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">rect</span><span class="shiki-token-function"> x</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-token-function"> y</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"20"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-token-function"> rx</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3); grid-template-columns: 1fr 1fr"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Expiry&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"MM"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input-group__addon"</span><span class="shiki-foreground">>/&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"YY"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>CVV&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"123"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--full"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Pay Now&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Payment form`,key:93,lang:`html`,injectKind:null,editable:!1,source:null},94:{component:Un,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-name"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Full Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Basic floating label`,key:94,lang:`html`,injectKind:null,editable:!1,source:null},95:{component:Gn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-email"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Email with floating label`,key:95,lang:`html`,injectKind:null,editable:!1,source:null},96:{component:qn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-message"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-message"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Your Message&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Textarea with floating label`,key:96,lang:`html`,injectKind:null,editable:!1,source:null},97:{component:Yn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-flex--stretch en-gap-4"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 400px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-first"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-last"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-last"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-email2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-email2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tel"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-phone"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-phone"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Phone Number&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Submit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Form with floating labels`,key:97,lang:`html`,injectKind:null,editable:!1,source:null},98:{component:Zn,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-prefilled"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"John Doe"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-prefilled"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Full Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Pre-filled floating label`,key:98,lang:`html`,injectKind:null,editable:!1,source:null},99:{component:$n,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-pass"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-pass"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Password&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Password with floating label`,key:99,lang:`html`,injectKind:null,editable:!1,source:null},100:{component:tr,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"date"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-date"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-date"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Birth Date&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Date with floating label`,key:100,lang:`html`,injectKind:null,editable:!1,source:null},101:{component:rr,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"number"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-age"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"float-age"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Age&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Number with floating label`,key:101,lang:`html`,injectKind:null,editable:!1,source:null},102:{component:Y,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 400px; margin: 0 auto"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body en-flex en-flex--col en-flex--stretch en-gap-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Sign In&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__subtitle"</span><span class="shiki-foreground">>Enter your credentials to continue&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"login-email"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"login-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"login-pass"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"login-pass"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Password&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>Remember me&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--full"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Sign In&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Login form with floating labels`,key:102,lang:`html`,injectKind:null,editable:!1,source:null},103:{component:or,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 500px; margin: 0 auto"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body en-flex en-flex--col en-flex--stretch en-gap-4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Create Account&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__subtitle"</span><span class="shiki-foreground">>Fill in your details to get started&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-grid en-gap-3"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"grid-template-columns: 1fr 1fr"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-first2"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-first2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-last2"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-last2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Last Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-email2"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-email2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"tel"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-phone2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-phone2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Phone Number (Optional)&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-pass2"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-pass2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Password&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-confirm2"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"reg-confirm2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Confirm Password&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-check"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>I agree to the Terms and Conditions&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--full"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Create Account&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Registration form`,key:103,lang:`html`,injectKind:null,editable:!1,source:null},104:{component:cr,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-name"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Full Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Outlined floating label`,key:104,lang:`html`,injectKind:null,editable:!1,source:null},105:{component:ur,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-email"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"example@host.com"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-email"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email Address&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Email with outlined floating label`,key:105,lang:`html`,injectKind:null,editable:!1,source:null},106:{component:fr,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-message"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-message"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Your Message&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Textarea with outlined floating label`,key:106,lang:`html`,injectKind:null,editable:!1,source:null},107:{component:mr,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-flex--stretch en-gap-4"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 400px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input en-input--sm"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-sm"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Small"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-sm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Small&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-md"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Default"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-md"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Default&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input en-input--lg"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-lg"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Large"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-lg"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Large&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-textarea en-textarea--sm"</span><span class="shiki-token-function"> rows</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-ta-sm"</span><span class="shiki-foreground">>Small textarea&#x3C;/</span><span class="shiki-token-string-expression">textarea</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-ta-sm"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Small Message&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Outlined floating label sizes`,key:107,lang:`html`,injectKind:null,editable:!1,source:null},108:{component:gr,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex en-flex--col en-flex--stretch en-gap-4"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 400px"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-first"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-first"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>First Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"email"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-mail2"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-mail2"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"password"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">" "</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-pass"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"outl-pass"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Password&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">>Submit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Form with outlined floating labels`,key:108,lang:`html`,injectKind:null,editable:!1,source:null},109:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field--floating-outlined"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-floating-bg: var(--en-bg-surface)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  ...</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:109,lang:`html`,injectKind:null,editable:!1,source:null},110:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-field"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"user"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-foreground">>Username&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"user"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input en-input--success"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"enrico"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-hint en-hint--success"</span><span class="shiki-foreground">>Username is available&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:110,lang:`html`,injectKind:null,editable:!1,source:null},111:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">/* Only show error after user interaction */</span></span>
<span class="line"><span class="shiki-token-function">.en-input</span><span class="shiki-foreground">:</span><span class="shiki-token-string-expression">user-invalid</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  border-color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-danger)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">/* Change label color when field is invalid */</span></span>
<span class="line"><span class="shiki-token-function">.en-field:has</span><span class="shiki-foreground">(:</span><span class="shiki-token-string-expression">user-invalid</span><span class="shiki-foreground">) </span><span class="shiki-token-function">.en-label</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-danger)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">/* Explicit success state (opt-in, lower specificity than :user-invalid) */</span></span>
<span class="line"><span class="shiki-token-function">.en-input--success</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  border-color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-success)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:111,lang:`css`,injectKind:null,editable:!1,source:null},112:{component:te(_r,[[`render`,vr]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"form/form-basic.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:112,lang:`vue`,injectKind:null,editable:!1,source:null}},Z=[{id:`form-controls`,text:`Form Controls`,level:1},{id:`overview`,text:`Overview`,level:2},{id:`when-to-use`,text:`When to Use`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`border-control-token`,text:`Border Control Token`,level:2},{id:`structure`,text:`Structure`,level:2},{id:`text-inputs`,text:`Text Inputs`,level:2},{id:`input-types`,text:`Input Types`,level:3},{id:`input-sizes`,text:`Input Sizes`,level:3},{id:`ghost-variant`,text:`Ghost Variant`,level:3},{id:`validation-states`,text:`Validation States`,level:3},{id:`disabled-state`,text:`Disabled State`,level:3},{id:`readonly-state`,text:`Readonly State`,level:3},{id:`required-fields`,text:`Required Fields`,level:3},{id:`with-helper-text`,text:`With Helper Text`,level:3},{id:`search-input`,text:`Search Input`,level:3},{id:`color-picker`,text:`Color Picker`,level:3},{id:`select-dropdowns`,text:`Select Dropdowns`,level:2},{id:`select-sizes`,text:`Select Sizes`,level:3},{id:`with-optgroups`,text:`With Optgroups`,level:3},{id:`multiple-select`,text:`Multiple Select`,level:3},{id:`ghost-select-1`,text:`Ghost Select`,level:3},{id:`disabled-select-1`,text:`Disabled Select`,level:3},{id:`required-select-1`,text:`Required Select`,level:3},{id:`textarea`,text:`Textarea`,level:2},{id:`textarea-sizes`,text:`Textarea Sizes`,level:3},{id:`with-character-count`,text:`With Character Count`,level:3},{id:`ghost-textarea-1`,text:`Ghost Textarea`,level:3},{id:`disabled-textarea-1`,text:`Disabled Textarea`,level:3},{id:`readonly-textarea-1`,text:`Readonly Textarea`,level:3},{id:`required-textarea-1`,text:`Required Textarea`,level:3},{id:`resizable-textarea`,text:`Resizable Textarea`,level:3},{id:`checkboxes`,text:`Checkboxes`,level:2},{id:`checkbox-sizes`,text:`Checkbox Sizes`,level:3},{id:`checkbox-states`,text:`Checkbox States`,level:3},{id:`indeterminate-state`,text:`Indeterminate State`,level:3},{id:`full-width`,text:`Full Width`,level:3},{id:`reverse-layout`,text:`Reverse Layout`,level:3},{id:`checkbox-group`,text:`Checkbox Group`,level:3},{id:`radio-buttons`,text:`Radio Buttons`,level:3},{id:`radio-sizes`,text:`Radio Sizes`,level:3},{id:`radio-states`,text:`Radio States`,level:3},{id:`radio-full-width`,text:`Radio Full Width`,level:3},{id:`radio-reverse-layout`,text:`Radio Reverse Layout`,level:3},{id:`radio-group`,text:`Radio Group`,level:3},{id:`checkbox-button`,text:`Checkbox Button`,level:3},{id:`checkbox-button-sizes`,text:`Checkbox Button Sizes`,level:3},{id:`checkbox-button-group`,text:`Checkbox Button Group`,level:3},{id:`checkbox-button-group-sizes`,text:`Checkbox Button Group Sizes`,level:3},{id:`switch-toggle`,text:`Switch (Toggle)`,level:2},{id:`switch-standalone`,text:`Switch Standalone`,level:3},{id:`switch-sizes`,text:`Switch Sizes`,level:3},{id:`switch-states`,text:`Switch States`,level:3},{id:`switch-with-full-width`,text:`Switch with Full Width`,level:3},{id:`switch-with-description`,text:`Switch with Description`,level:3},{id:`switch-group`,text:`Switch Group`,level:3},{id:`switch-vs-checkbox`,text:`Switch vs Checkbox`,level:3},{id:`rtl-support`,text:`RTL Support`,level:3},{id:`fieldset`,text:`Fieldset`,level:2},{id:`fieldset-with-description`,text:`Fieldset with Description`,level:3},{id:`fieldset-with-inline-options`,text:`Fieldset with Inline Options`,level:3},{id:`required-fieldset`,text:`Required Fieldset`,level:3},{id:`plain-fieldset`,text:`Plain Fieldset`,level:3},{id:`hidden-legend`,text:`Hidden Legend`,level:3},{id:`invalid-fieldset`,text:`Invalid Fieldset`,level:3},{id:`disabled-fieldset`,text:`Disabled Fieldset`,level:3},{id:`nested-fieldsets`,text:`Nested Fieldsets`,level:3},{id:`complete-form-example`,text:`Complete Form Example`,level:3},{id:`form-grid`,text:`Form Grid`,level:2},{id:`two-column-grid`,text:`Two Column Grid`,level:3},{id:`three-column-grid`,text:`Three Column Grid`,level:3},{id:`four-column-grid`,text:`Four Column Grid`,level:3},{id:`full-width-fields`,text:`Full Width Fields`,level:3},{id:`complex-form-grid`,text:`Complex Form Grid`,level:3},{id:`grid-with-fieldsets`,text:`Grid with Fieldsets`,level:3},{id:`horizontal-layout-label-beside-input`,text:`Horizontal Layout (Label Beside Input)`,level:3},{id:`horizontal-with-custom-label-width`,text:`Horizontal with Custom Label Width`,level:3},{id:`reverse-horizontal-input-left-label-right`,text:`Reverse Horizontal (Input Left, Label Right)`,level:3},{id:`horizontal-with-multi-column-grid`,text:`Horizontal with Multi-Column Grid`,level:3},{id:`horizontal-layout-behavior`,text:`Horizontal Layout Behavior`,level:3},{id:`responsive-behavior`,text:`Responsive Behavior`,level:3},{id:`how-it-works`,text:`How It Works`,level:3},{id:`input-group`,text:`Input Group`,level:2},{id:`input-group-with-button`,text:`Input Group with Button`,level:3},{id:`input-group-with-select`,text:`Input Group with Select`,level:3},{id:`multiple-addons`,text:`Multiple Addons`,level:3},{id:`input-group-sizes`,text:`Input Group Sizes`,level:3},{id:`button-group`,text:`Button Group`,level:3},{id:`url-input`,text:`URL Input`,level:3},{id:`email-input`,text:`Email Input`,level:3},{id:`price-input`,text:`Price Input`,level:3},{id:`date-range`,text:`Date Range`,level:3},{id:`file-upload-button`,text:`File Upload Button`,level:3},{id:`dropdown-with-action`,text:`Dropdown with Action`,level:3},{id:`with-icon-addon`,text:`With Icon Addon`,level:3},{id:`grow-addon`,text:`Grow Addon`,level:3},{id:`fixed-width-select`,text:`Fixed Width Select`,level:3},{id:`complex-example`,text:`Complex Example`,level:3},{id:`how-it-works-1`,text:`How It Works`,level:3},{id:`floating-label`,text:`Floating Label`,level:2},{id:`floating-label-with-email`,text:`Floating Label with Email`,level:3},{id:`floating-label-with-textarea`,text:`Floating Label with Textarea`,level:3},{id:`multiple-floating-inputs`,text:`Multiple Floating Inputs`,level:3},{id:`floating-label-with-initial-value`,text:`Floating Label with Initial Value`,level:3},{id:`floating-label-password`,text:`Floating Label Password`,level:3},{id:`floating-label-date`,text:`Floating Label Date`,level:3},{id:`floating-label-number`,text:`Floating Label Number`,level:3},{id:`login-form`,text:`Login Form`,level:3},{id:`registration-form`,text:`Registration Form`,level:3},{id:`how-it-works-2`,text:`How It Works`,level:3},{id:`floating-label-outlined`,text:`Floating Label (Outlined)`,level:2},{id:`outlined-with-email`,text:`Outlined with Email`,level:3},{id:`outlined-with-textarea`,text:`Outlined with Textarea`,level:3},{id:`outlined-sizes`,text:`Outlined Sizes`,level:3},{id:`outlined-form`,text:`Outlined Form`,level:3},{id:`outlined-how-it-works`,text:`Outlined How It Works`,level:3},{id:`classes`,text:`Classes`,level:2},{id:`field-wrapper`,text:`Field Wrapper`,level:3},{id:`labels-and-helper-text`,text:`Labels and Helper Text`,level:3},{id:`text-inputs-1`,text:`Text Inputs`,level:3},{id:`select-dropdowns-1`,text:`Select Dropdowns`,level:3},{id:`textarea-1`,text:`Textarea`,level:3},{id:`checkboxes-1`,text:`Checkboxes`,level:3},{id:`radio-buttons-1`,text:`Radio Buttons`,level:3},{id:`checkbox-button-1`,text:`Checkbox Button`,level:3},{id:`checkbox-button-group-1`,text:`Checkbox Button Group`,level:3},{id:`switch-toggle-1`,text:`Switch (Toggle)`,level:3},{id:`fieldset-1`,text:`Fieldset`,level:3},{id:`legend`,text:`Legend`,level:3},{id:`form-grid-1`,text:`Form Grid`,level:3},{id:`input-group-1`,text:`Input Group`,level:3},{id:`floating-label-1`,text:`Floating Label`,level:3},{id:`custom-properties`,text:`Custom Properties`,level:2},{id:`native-html-attributes`,text:`Native HTML Attributes`,level:2},{id:`input-attributes`,text:`Input Attributes`,level:3},{id:`select-attributes`,text:`Select Attributes`,level:3},{id:`textarea-attributes`,text:`Textarea Attributes`,level:3},{id:`checkboxradio-attributes`,text:`Checkbox/Radio Attributes`,level:3},{id:`fieldset-attributes`,text:`Fieldset Attributes`,level:3},{id:`validation-states-1`,text:`Validation States`,level:2},{id:`pseudo-classes`,text:`Pseudo-classes`,level:3},{id:`explicit-success-state`,text:`Explicit Success State`,level:3},{id:`validation-with-css`,text:`Validation with CSS`,level:3},{id:`accessibility-1`,text:`Accessibility`,level:2},{id:`required-practices`,text:`Required Practices`,level:3},{id:`aria-attributes`,text:`ARIA Attributes`,level:3},{id:`color-contrast`,text:`Color Contrast`,level:3},{id:`browser-support`,text:`Browser Support`,level:2}],Q=[{id:`form-controls`,text:`Form Controls`,level:1,children:[{id:`overview`,text:`Overview`,level:2,children:[]},{id:`when-to-use`,text:`When to Use`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`border-control-token`,text:`Border Control Token`,level:2,children:[]},{id:`structure`,text:`Structure`,level:2,children:[]},{id:`text-inputs`,text:`Text Inputs`,level:2,children:[{id:`input-types`,text:`Input Types`,level:3,children:[]},{id:`input-sizes`,text:`Input Sizes`,level:3,children:[]},{id:`ghost-variant`,text:`Ghost Variant`,level:3,children:[]},{id:`validation-states`,text:`Validation States`,level:3,children:[]},{id:`disabled-state`,text:`Disabled State`,level:3,children:[]},{id:`readonly-state`,text:`Readonly State`,level:3,children:[]},{id:`required-fields`,text:`Required Fields`,level:3,children:[]},{id:`with-helper-text`,text:`With Helper Text`,level:3,children:[]},{id:`search-input`,text:`Search Input`,level:3,children:[]},{id:`color-picker`,text:`Color Picker`,level:3,children:[]}]},{id:`select-dropdowns`,text:`Select Dropdowns`,level:2,children:[{id:`select-sizes`,text:`Select Sizes`,level:3,children:[]},{id:`with-optgroups`,text:`With Optgroups`,level:3,children:[]},{id:`multiple-select`,text:`Multiple Select`,level:3,children:[]},{id:`ghost-select-1`,text:`Ghost Select`,level:3,children:[]},{id:`disabled-select-1`,text:`Disabled Select`,level:3,children:[]},{id:`required-select-1`,text:`Required Select`,level:3,children:[]}]},{id:`textarea`,text:`Textarea`,level:2,children:[{id:`textarea-sizes`,text:`Textarea Sizes`,level:3,children:[]},{id:`with-character-count`,text:`With Character Count`,level:3,children:[]},{id:`ghost-textarea-1`,text:`Ghost Textarea`,level:3,children:[]},{id:`disabled-textarea-1`,text:`Disabled Textarea`,level:3,children:[]},{id:`readonly-textarea-1`,text:`Readonly Textarea`,level:3,children:[]},{id:`required-textarea-1`,text:`Required Textarea`,level:3,children:[]},{id:`resizable-textarea`,text:`Resizable Textarea`,level:3,children:[]}]},{id:`checkboxes`,text:`Checkboxes`,level:2,children:[{id:`checkbox-sizes`,text:`Checkbox Sizes`,level:3,children:[]},{id:`checkbox-states`,text:`Checkbox States`,level:3,children:[]},{id:`indeterminate-state`,text:`Indeterminate State`,level:3,children:[]},{id:`full-width`,text:`Full Width`,level:3,children:[]},{id:`reverse-layout`,text:`Reverse Layout`,level:3,children:[]},{id:`checkbox-group`,text:`Checkbox Group`,level:3,children:[]},{id:`radio-buttons`,text:`Radio Buttons`,level:3,children:[]},{id:`radio-sizes`,text:`Radio Sizes`,level:3,children:[]},{id:`radio-states`,text:`Radio States`,level:3,children:[]},{id:`radio-full-width`,text:`Radio Full Width`,level:3,children:[]},{id:`radio-reverse-layout`,text:`Radio Reverse Layout`,level:3,children:[]},{id:`radio-group`,text:`Radio Group`,level:3,children:[]},{id:`checkbox-button`,text:`Checkbox Button`,level:3,children:[]},{id:`checkbox-button-sizes`,text:`Checkbox Button Sizes`,level:3,children:[]},{id:`checkbox-button-group`,text:`Checkbox Button Group`,level:3,children:[]},{id:`checkbox-button-group-sizes`,text:`Checkbox Button Group Sizes`,level:3,children:[]}]},{id:`switch-toggle`,text:`Switch (Toggle)`,level:2,children:[{id:`switch-standalone`,text:`Switch Standalone`,level:3,children:[]},{id:`switch-sizes`,text:`Switch Sizes`,level:3,children:[]},{id:`switch-states`,text:`Switch States`,level:3,children:[]},{id:`switch-with-full-width`,text:`Switch with Full Width`,level:3,children:[]},{id:`switch-with-description`,text:`Switch with Description`,level:3,children:[]},{id:`switch-group`,text:`Switch Group`,level:3,children:[]},{id:`switch-vs-checkbox`,text:`Switch vs Checkbox`,level:3,children:[]},{id:`rtl-support`,text:`RTL Support`,level:3,children:[]}]},{id:`fieldset`,text:`Fieldset`,level:2,children:[{id:`fieldset-with-description`,text:`Fieldset with Description`,level:3,children:[]},{id:`fieldset-with-inline-options`,text:`Fieldset with Inline Options`,level:3,children:[]},{id:`required-fieldset`,text:`Required Fieldset`,level:3,children:[]},{id:`plain-fieldset`,text:`Plain Fieldset`,level:3,children:[]},{id:`hidden-legend`,text:`Hidden Legend`,level:3,children:[]},{id:`invalid-fieldset`,text:`Invalid Fieldset`,level:3,children:[]},{id:`disabled-fieldset`,text:`Disabled Fieldset`,level:3,children:[]},{id:`nested-fieldsets`,text:`Nested Fieldsets`,level:3,children:[]},{id:`complete-form-example`,text:`Complete Form Example`,level:3,children:[]}]},{id:`form-grid`,text:`Form Grid`,level:2,children:[{id:`two-column-grid`,text:`Two Column Grid`,level:3,children:[]},{id:`three-column-grid`,text:`Three Column Grid`,level:3,children:[]},{id:`four-column-grid`,text:`Four Column Grid`,level:3,children:[]},{id:`full-width-fields`,text:`Full Width Fields`,level:3,children:[]},{id:`complex-form-grid`,text:`Complex Form Grid`,level:3,children:[]},{id:`grid-with-fieldsets`,text:`Grid with Fieldsets`,level:3,children:[]},{id:`horizontal-layout-label-beside-input`,text:`Horizontal Layout (Label Beside Input)`,level:3,children:[]},{id:`horizontal-with-custom-label-width`,text:`Horizontal with Custom Label Width`,level:3,children:[]},{id:`reverse-horizontal-input-left-label-right`,text:`Reverse Horizontal (Input Left, Label Right)`,level:3,children:[]},{id:`horizontal-with-multi-column-grid`,text:`Horizontal with Multi-Column Grid`,level:3,children:[]},{id:`horizontal-layout-behavior`,text:`Horizontal Layout Behavior`,level:3,children:[]},{id:`responsive-behavior`,text:`Responsive Behavior`,level:3,children:[]},{id:`how-it-works`,text:`How It Works`,level:3,children:[]}]},{id:`input-group`,text:`Input Group`,level:2,children:[{id:`input-group-with-button`,text:`Input Group with Button`,level:3,children:[]},{id:`input-group-with-select`,text:`Input Group with Select`,level:3,children:[]},{id:`multiple-addons`,text:`Multiple Addons`,level:3,children:[]},{id:`input-group-sizes`,text:`Input Group Sizes`,level:3,children:[]},{id:`button-group`,text:`Button Group`,level:3,children:[]},{id:`url-input`,text:`URL Input`,level:3,children:[]},{id:`email-input`,text:`Email Input`,level:3,children:[]},{id:`price-input`,text:`Price Input`,level:3,children:[]},{id:`date-range`,text:`Date Range`,level:3,children:[]},{id:`file-upload-button`,text:`File Upload Button`,level:3,children:[]},{id:`dropdown-with-action`,text:`Dropdown with Action`,level:3,children:[]},{id:`with-icon-addon`,text:`With Icon Addon`,level:3,children:[]},{id:`grow-addon`,text:`Grow Addon`,level:3,children:[]},{id:`fixed-width-select`,text:`Fixed Width Select`,level:3,children:[]},{id:`complex-example`,text:`Complex Example`,level:3,children:[]},{id:`how-it-works-1`,text:`How It Works`,level:3,children:[]}]},{id:`floating-label`,text:`Floating Label`,level:2,children:[{id:`floating-label-with-email`,text:`Floating Label with Email`,level:3,children:[]},{id:`floating-label-with-textarea`,text:`Floating Label with Textarea`,level:3,children:[]},{id:`multiple-floating-inputs`,text:`Multiple Floating Inputs`,level:3,children:[]},{id:`floating-label-with-initial-value`,text:`Floating Label with Initial Value`,level:3,children:[]},{id:`floating-label-password`,text:`Floating Label Password`,level:3,children:[]},{id:`floating-label-date`,text:`Floating Label Date`,level:3,children:[]},{id:`floating-label-number`,text:`Floating Label Number`,level:3,children:[]},{id:`login-form`,text:`Login Form`,level:3,children:[]},{id:`registration-form`,text:`Registration Form`,level:3,children:[]},{id:`how-it-works-2`,text:`How It Works`,level:3,children:[]}]},{id:`floating-label-outlined`,text:`Floating Label (Outlined)`,level:2,children:[{id:`outlined-with-email`,text:`Outlined with Email`,level:3,children:[]},{id:`outlined-with-textarea`,text:`Outlined with Textarea`,level:3,children:[]},{id:`outlined-sizes`,text:`Outlined Sizes`,level:3,children:[]},{id:`outlined-form`,text:`Outlined Form`,level:3,children:[]},{id:`outlined-how-it-works`,text:`Outlined How It Works`,level:3,children:[]}]},{id:`classes`,text:`Classes`,level:2,children:[{id:`field-wrapper`,text:`Field Wrapper`,level:3,children:[]},{id:`labels-and-helper-text`,text:`Labels and Helper Text`,level:3,children:[]},{id:`text-inputs-1`,text:`Text Inputs`,level:3,children:[]},{id:`select-dropdowns-1`,text:`Select Dropdowns`,level:3,children:[]},{id:`textarea-1`,text:`Textarea`,level:3,children:[]},{id:`checkboxes-1`,text:`Checkboxes`,level:3,children:[]},{id:`radio-buttons-1`,text:`Radio Buttons`,level:3,children:[]},{id:`checkbox-button-1`,text:`Checkbox Button`,level:3,children:[]},{id:`checkbox-button-group-1`,text:`Checkbox Button Group`,level:3,children:[]},{id:`switch-toggle-1`,text:`Switch (Toggle)`,level:3,children:[]},{id:`fieldset-1`,text:`Fieldset`,level:3,children:[]},{id:`legend`,text:`Legend`,level:3,children:[]},{id:`form-grid-1`,text:`Form Grid`,level:3,children:[]},{id:`input-group-1`,text:`Input Group`,level:3,children:[]},{id:`floating-label-1`,text:`Floating Label`,level:3,children:[]}]},{id:`custom-properties`,text:`Custom Properties`,level:2,children:[]},{id:`native-html-attributes`,text:`Native HTML Attributes`,level:2,children:[{id:`input-attributes`,text:`Input Attributes`,level:3,children:[]},{id:`select-attributes`,text:`Select Attributes`,level:3,children:[]},{id:`textarea-attributes`,text:`Textarea Attributes`,level:3,children:[]},{id:`checkboxradio-attributes`,text:`Checkbox/Radio Attributes`,level:3,children:[]},{id:`fieldset-attributes`,text:`Fieldset Attributes`,level:3,children:[]}]},{id:`validation-states-1`,text:`Validation States`,level:2,children:[{id:`pseudo-classes`,text:`Pseudo-classes`,level:3,children:[]},{id:`explicit-success-state`,text:`Explicit Success State`,level:3,children:[]},{id:`validation-with-css`,text:`Validation with CSS`,level:3,children:[]}]},{id:`accessibility-1`,text:`Accessibility`,level:2,children:[{id:`required-practices`,text:`Required Practices`,level:3,children:[]},{id:`aria-attributes`,text:`ARIA Attributes`,level:3,children:[]},{id:`color-contrast`,text:`Color Contrast`,level:3,children:[]}]},{id:`browser-support`,text:`Browser Support`,level:2,children:[]}]}],yr={css:[],js:[{key:33,code:`window.setupIndeterminate = function() {
  const parent = document.getElementById('parent-checkbox');
  const children = document.querySelectorAll('.child-checkbox');
  
  function updateParent() {
    const checkedCount = Array.from(children).filter(c => c.checked).length;
    parent.checked = checkedCount === children.length;
    parent.indeterminate = checkedCount > 0 && checkedCount < children.length;
  }
  
  parent.addEventListener('change', () => {
    children.forEach(c => c.checked = parent.checked);
  });
  
  children.forEach(c => c.addEventListener('change', updateParent));
  updateParent();
}

// Run on mount
if (document.getElementById('parent-checkbox')) {
  window.setupIndeterminate();
}`}],cleanup:[]},$=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>l(`div`,{class:n},[e.meta.isLive?l(re,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:l(ne,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),br=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/forms/form-basic.md`,setup(){i(`vlm-toc`,{flat:Z,tree:Q}),u(()=>s(Z,Q)),c(()=>s([],[]));let e=ie(yr);return i(`vlm-inject`,e),u(()=>e.mount()),a(()=>e.beforeUnmount()),c(()=>e.unmounted()),()=>l(`div`,{class:`vlm-page`},[l(`div`,{class:`vlm-content`},[l(`div`,{class:`vlm-md`,innerHTML:`<h1 id="form-controls">Form Controls<a class="header-link" href="#form-controls" title="Link to this heading"></a></h1>
<p>Basic form controls provide styled text inputs, selects, textareas, checkboxes, radios, and switches with consistent appearance and validation states.</p>
<h2 id="overview">Overview<a class="header-link" href="#overview" title="Link to this heading"></a></h2>
<p>Basic form controls provide styled text inputs, selects, textareas, checkboxes, radios, and switches with consistent appearance and validation states.</p>
<p><strong>What’s included</strong>:</p>
<ul>
<li>Text inputs (text, email, password, number, tel, url, date, etc.)</li>
<li>Select dropdowns (single and multiple)</li>
<li>Textareas</li>
<li>Checkboxes and radios (custom styled, no JavaScript)</li>
<li>Switches (toggle controls)</li>
<li>Fieldset grouping</li>
<li>Input groups (joined addons)</li>
<li>Floating labels (inside the field or outlined on the border)</li>
<li>Validation states</li>
</ul>
<p><strong>Key features</strong>:</p>
<ul>
<li>Uses <code>--en-border-control</code> for all borders (≥3:1 contrast, WCAG 1.4.11)</li>
<li>Native HTML validation with <code>:user-invalid</code> pseudo-class</li>
<li>Ghost variant (borderless until focus)</li>
<li>Three sizes: small, default, large</li>
<li>Fully keyboard accessible</li>
<li>Works with all standard input types</li>
</ul>
<h2 id="when-to-use">When to Use<a class="header-link" href="#when-to-use" title="Link to this heading"></a></h2>
<p><strong>Use basic form controls for</strong>:</p>
<ul>
<li>Standard data entry forms</li>
<li>Login/signup pages</li>
<li>Settings panels</li>
<li>Search interfaces</li>
<li>Contact forms</li>
<li>Any user input collection</li>
</ul>
<p><strong>Consider extended controls when</strong>:</p>
<ul>
<li>Need specialized input (OTP, rating, range slider with marks)</li>
<li>File uploads with preview</li>
<li>Multi-step forms with display-only fields</li>
<li>Tag/chip input for multiple values</li>
</ul>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<p>All form controls follow WCAG 2.1 AA standards:</p>
<ul>
<li><strong>Labels required</strong>: Every input must have a <code>&lt;label&gt;</code> or <code>aria-label</code></li>
<li><strong>Keyboard navigation</strong>: All controls are fully keyboard accessible</li>
<li><strong>Focus indicators</strong>: Visible focus rings on all interactive elements</li>
<li><strong>Validation feedback</strong>: Native HTML5 validation with visual indicators</li>
<li><strong>Color contrast</strong>: Borders meet ≥3:1 contrast (WCAG 1.4.11 Non-text Contrast)</li>
<li><strong>Screen readers</strong>: Semantic HTML elements with proper ARIA attributes</li>
</ul>
<h2 id="border-control-token">Border Control Token<a class="header-link" href="#border-control-token" title="Link to this heading"></a></h2>
<p>Form controls use <strong><code>--en-border-control</code></strong> instead of <code>--en-border</code>:</p>
<p>`}),l($,{key:0,meta:X[0]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Why</strong>: WCAG 1.4.11 requires form control boundaries to have ≥3:1 contrast against the background. <code>--en-border-control</code> is calibrated to meet this requirement in both light and dark themes.</p>
<h2 id="structure">Structure<a class="header-link" href="#structure" title="Link to this heading"></a></h2>
<p>Form fields typically follow this structure:</p>
<p>`}),l($,{key:1,meta:X[1]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Elements</strong>:</p>
<ul>
<li><code>.en-field</code> - Wrapper with bottom margin (optional)</li>
<li><code>.en-label</code> - Form label (required for accessibility)</li>
<li><code>.en-input</code> / <code>.en-select</code> / <code>.en-textarea</code> - The control itself</li>
<li><code>.en-hint</code> - Helper text below the control (optional)</li>
</ul>
<h2 id="text-inputs">Text Inputs<a class="header-link" href="#text-inputs" title="Link to this heading"></a></h2>
<p>Basic text input field for single-line text entry.</p>
<p>`}),l($,{key:2,meta:X[2]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="input-types">Input Types<a class="header-link" href="#input-types" title="Link to this heading"></a></h3>
<p>Text inputs support all standard HTML input types.</p>
<p>`}),l($,{key:3,meta:X[3]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="input-sizes">Input Sizes<a class="header-link" href="#input-sizes" title="Link to this heading"></a></h3>
<p>Three size variants: small, default (medium), and large.</p>
<p>`}),l($,{key:4,meta:X[4]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="ghost-variant">Ghost Variant<a class="header-link" href="#ghost-variant" title="Link to this heading"></a></h3>
<p>Borderless style until focus or hover.</p>
<p>`}),l($,{key:5,meta:X[5]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),l($,{key:6,meta:X[6]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>When ghost input has value (not placeholder-shown), label gets bottom border to indicate field is filled.</p>
<h3 id="validation-states">Validation States<a class="header-link" href="#validation-states" title="Link to this heading"></a></h3>
<p>Native HTML5 validation with visual feedback.</p>
<p>`}),l($,{key:7,meta:X[7]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),l($,{key:8,meta:X[8]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="disabled-state">Disabled State<a class="header-link" href="#disabled-state" title="Link to this heading"></a></h3>
<p>`}),l($,{key:9,meta:X[9]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="readonly-state">Readonly State<a class="header-link" href="#readonly-state" title="Link to this heading"></a></h3>
<p>`}),l($,{key:10,meta:X[10]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="required-fields">Required Fields<a class="header-link" href="#required-fields" title="Link to this heading"></a></h3>
<p>`}),l($,{key:11,meta:X[11]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="with-helper-text">With Helper Text<a class="header-link" href="#with-helper-text" title="Link to this heading"></a></h3>
<p>`}),l($,{key:12,meta:X[12]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="search-input">Search Input<a class="header-link" href="#search-input" title="Link to this heading"></a></h3>
<p>`}),l($,{key:13,meta:X[13]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="color-picker">Color Picker<a class="header-link" href="#color-picker" title="Link to this heading"></a></h3>
<p>Native color input with custom styling.</p>
<p>`}),l($,{key:14,meta:X[14]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="select-dropdowns">Select Dropdowns<a class="header-link" href="#select-dropdowns" title="Link to this heading"></a></h2>
<p>Native select element with custom styling.</p>
<p>`}),l($,{key:15,meta:X[15]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="select-sizes">Select Sizes<a class="header-link" href="#select-sizes" title="Link to this heading"></a></h3>
<p>`}),l($,{key:16,meta:X[16]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="with-optgroups">With Optgroups<a class="header-link" href="#with-optgroups" title="Link to this heading"></a></h3>
<p>`}),l($,{key:17,meta:X[17]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="multiple-select">Multiple Select<a class="header-link" href="#multiple-select" title="Link to this heading"></a></h3>
<p>`}),l($,{key:18,meta:X[18]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="ghost-select-1">Ghost Select<a class="header-link" href="#ghost-select-1" title="Link to this heading"></a></h3>
<p>`}),l($,{key:19,meta:X[19]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="disabled-select-1">Disabled Select<a class="header-link" href="#disabled-select-1" title="Link to this heading"></a></h3>
<p>`}),l($,{key:20,meta:X[20]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="required-select-1">Required Select<a class="header-link" href="#required-select-1" title="Link to this heading"></a></h3>
<p>`}),l($,{key:21,meta:X[21]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="textarea">Textarea<a class="header-link" href="#textarea" title="Link to this heading"></a></h2>
<p>Multi-line text input for longer content.</p>
<p>`}),l($,{key:22,meta:X[22]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="textarea-sizes">Textarea Sizes<a class="header-link" href="#textarea-sizes" title="Link to this heading"></a></h3>
<p>`}),l($,{key:23,meta:X[23]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="with-character-count">With Character Count<a class="header-link" href="#with-character-count" title="Link to this heading"></a></h3>
<p>`}),l($,{key:24,meta:X[24]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="ghost-textarea-1">Ghost Textarea<a class="header-link" href="#ghost-textarea-1" title="Link to this heading"></a></h3>
<p>`}),l($,{key:25,meta:X[25]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="disabled-textarea-1">Disabled Textarea<a class="header-link" href="#disabled-textarea-1" title="Link to this heading"></a></h3>
<p>`}),l($,{key:26,meta:X[26]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="readonly-textarea-1">Readonly Textarea<a class="header-link" href="#readonly-textarea-1" title="Link to this heading"></a></h3>
<p>`}),l($,{key:27,meta:X[27]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="required-textarea-1">Required Textarea<a class="header-link" href="#required-textarea-1" title="Link to this heading"></a></h3>
<p>`}),l($,{key:28,meta:X[28]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="resizable-textarea">Resizable Textarea<a class="header-link" href="#resizable-textarea" title="Link to this heading"></a></h3>
<p>Textareas are vertically resizable by default.</p>
<p>`}),l($,{key:29,meta:X[29]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="checkboxes">Checkboxes<a class="header-link" href="#checkboxes" title="Link to this heading"></a></h2>
<p>Custom styled checkboxes with native HTML functionality.</p>
<p>`}),l($,{key:30,meta:X[30]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="checkbox-sizes">Checkbox Sizes<a class="header-link" href="#checkbox-sizes" title="Link to this heading"></a></h3>
<p>`}),l($,{key:31,meta:X[31]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="checkbox-states">Checkbox States<a class="header-link" href="#checkbox-states" title="Link to this heading"></a></h3>
<p>`}),l($,{key:32,meta:X[32]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="indeterminate-state">Indeterminate State<a class="header-link" href="#indeterminate-state" title="Link to this heading"></a></h3>
<p>Checkboxes can have an indeterminate state (horizontal line).</p>
<p>`}),l($,{key:34,meta:X[34]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="full-width">Full Width<a class="header-link" href="#full-width" title="Link to this heading"></a></h3>
<p>`}),l($,{key:35,meta:X[35]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="reverse-layout">Reverse Layout<a class="header-link" href="#reverse-layout" title="Link to this heading"></a></h3>
<p>Text on the right, checkbox on the left.</p>
<p>`}),l($,{key:36,meta:X[36]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="checkbox-group">Checkbox Group<a class="header-link" href="#checkbox-group" title="Link to this heading"></a></h3>
<p>`}),l($,{key:37,meta:X[37]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="radio-buttons">Radio Buttons<a class="header-link" href="#radio-buttons" title="Link to this heading"></a></h3>
<p>Custom styled radio buttons with native HTML functionality.</p>
<p>`}),l($,{key:38,meta:X[38]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="radio-sizes">Radio Sizes<a class="header-link" href="#radio-sizes" title="Link to this heading"></a></h3>
<p>`}),l($,{key:39,meta:X[39]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="radio-states">Radio States<a class="header-link" href="#radio-states" title="Link to this heading"></a></h3>
<p>`}),l($,{key:40,meta:X[40]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="radio-full-width">Radio Full Width<a class="header-link" href="#radio-full-width" title="Link to this heading"></a></h3>
<p>`}),l($,{key:41,meta:X[41]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="radio-reverse-layout">Radio Reverse Layout<a class="header-link" href="#radio-reverse-layout" title="Link to this heading"></a></h3>
<p>`}),l($,{key:42,meta:X[42]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="radio-group">Radio Group<a class="header-link" href="#radio-group" title="Link to this heading"></a></h3>
<p>`}),l($,{key:43,meta:X[43]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="checkbox-button">Checkbox Button<a class="header-link" href="#checkbox-button" title="Link to this heading"></a></h3>
<p>Checkboxes styled as toggle buttons.</p>
<p>`}),l($,{key:44,meta:X[44]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="checkbox-button-sizes">Checkbox Button Sizes<a class="header-link" href="#checkbox-button-sizes" title="Link to this heading"></a></h3>
<p>`}),l($,{key:45,meta:X[45]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="checkbox-button-group">Checkbox Button Group<a class="header-link" href="#checkbox-button-group" title="Link to this heading"></a></h3>
<p>Multiple checkbox buttons in a joined group.</p>
<p>`}),l($,{key:46,meta:X[46]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="checkbox-button-group-sizes">Checkbox Button Group Sizes<a class="header-link" href="#checkbox-button-group-sizes" title="Link to this heading"></a></h3>
<p>`}),l($,{key:47,meta:X[47]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="switch-toggle">Switch (Toggle)<a class="header-link" href="#switch-toggle" title="Link to this heading"></a></h2>
<p>Toggle switch control for boolean on/off states.</p>
<p>`}),l($,{key:48,meta:X[48]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="switch-standalone">Switch Standalone<a class="header-link" href="#switch-standalone" title="Link to this heading"></a></h3>
<p>Switch without wrapper label.</p>
<p>`}),l($,{key:49,meta:X[49]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="switch-sizes">Switch Sizes<a class="header-link" href="#switch-sizes" title="Link to this heading"></a></h3>
<p>`}),l($,{key:50,meta:X[50]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="switch-states">Switch States<a class="header-link" href="#switch-states" title="Link to this heading"></a></h3>
<p>`}),l($,{key:51,meta:X[51]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="switch-with-full-width">Switch with Full Width<a class="header-link" href="#switch-with-full-width" title="Link to this heading"></a></h3>
<p>`}),l($,{key:52,meta:X[52]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="switch-with-description">Switch with Description<a class="header-link" href="#switch-with-description" title="Link to this heading"></a></h3>
<p>`}),l($,{key:53,meta:X[53]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="switch-group">Switch Group<a class="header-link" href="#switch-group" title="Link to this heading"></a></h3>
<p>`}),l($,{key:54,meta:X[54]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="switch-vs-checkbox">Switch vs Checkbox<a class="header-link" href="#switch-vs-checkbox" title="Link to this heading"></a></h3>
<p><strong>Use Switch when</strong>:</p>
<ul>
<li>Represents immediate on/off state (takes effect immediately)</li>
<li>Binary choice that changes system state</li>
<li>Examples: Enable notifications, Dark mode, Show/Hide features</li>
</ul>
<p><strong>Use Checkbox when</strong>:</p>
<ul>
<li>Part of a form that will be submitted</li>
<li>Multiple selections in a group</li>
<li>Requires explicit submit action</li>
<li>Examples: Accept terms, Select interests, Filter options</li>
</ul>
<p>`}),l($,{key:55,meta:X[55]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="rtl-support">RTL Support<a class="header-link" href="#rtl-support" title="Link to this heading"></a></h3>
<p>Switch automatically adapts to RTL (right-to-left) layouts.</p>
<p>`}),l($,{key:56,meta:X[56]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="fieldset">Fieldset<a class="header-link" href="#fieldset" title="Link to this heading"></a></h2>
<p>Semantic grouping for related form controls with legend and border.</p>
<p>`}),l($,{key:57,meta:X[57]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="fieldset-with-description">Fieldset with Description<a class="header-link" href="#fieldset-with-description" title="Link to this heading"></a></h3>
<p>`}),l($,{key:58,meta:X[58]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="fieldset-with-inline-options">Fieldset with Inline Options<a class="header-link" href="#fieldset-with-inline-options" title="Link to this heading"></a></h3>
<p>`}),l($,{key:59,meta:X[59]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="required-fieldset">Required Fieldset<a class="header-link" href="#required-fieldset" title="Link to this heading"></a></h3>
<p>`}),l($,{key:60,meta:X[60]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="plain-fieldset">Plain Fieldset<a class="header-link" href="#plain-fieldset" title="Link to this heading"></a></h3>
<p>Semantic grouping without visual border.</p>
<p>`}),l($,{key:61,meta:X[61]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="hidden-legend">Hidden Legend<a class="header-link" href="#hidden-legend" title="Link to this heading"></a></h3>
<p>Legend present for accessibility but visually hidden.</p>
<p>`}),l($,{key:62,meta:X[62]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="invalid-fieldset">Invalid Fieldset<a class="header-link" href="#invalid-fieldset" title="Link to this heading"></a></h3>
<p>Validation state for entire group.</p>
<p>`}),l($,{key:63,meta:X[63]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="disabled-fieldset">Disabled Fieldset<a class="header-link" href="#disabled-fieldset" title="Link to this heading"></a></h3>
<p>Entire group of controls disabled.</p>
<p>`}),l($,{key:64,meta:X[64]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="nested-fieldsets">Nested Fieldsets<a class="header-link" href="#nested-fieldsets" title="Link to this heading"></a></h3>
<p>`}),l($,{key:65,meta:X[65]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="complete-form-example">Complete Form Example<a class="header-link" href="#complete-form-example" title="Link to this heading"></a></h3>
<p>`}),l($,{key:66,meta:X[66]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="form-grid">Form Grid<a class="header-link" href="#form-grid" title="Link to this heading"></a></h2>
<p>Responsive grid layout for forms with automatic column distribution.</p>
<p>`}),l($,{key:67,meta:X[67]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="two-column-grid">Two Column Grid<a class="header-link" href="#two-column-grid" title="Link to this heading"></a></h3>
<p>`}),l($,{key:68,meta:X[68]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="three-column-grid">Three Column Grid<a class="header-link" href="#three-column-grid" title="Link to this heading"></a></h3>
<p>`}),l($,{key:69,meta:X[69]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="four-column-grid">Four Column Grid<a class="header-link" href="#four-column-grid" title="Link to this heading"></a></h3>
<p>`}),l($,{key:70,meta:X[70]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="full-width-fields">Full Width Fields<a class="header-link" href="#full-width-fields" title="Link to this heading"></a></h3>
<p>Use <code>.en-field--span-full</code> to make a field span all columns.</p>
<p>`}),l($,{key:71,meta:X[71]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="complex-form-grid">Complex Form Grid<a class="header-link" href="#complex-form-grid" title="Link to this heading"></a></h3>
<p>Complete registration form with mixed field widths.</p>
<p>`}),l($,{key:72,meta:X[72]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="grid-with-fieldsets">Grid with Fieldsets<a class="header-link" href="#grid-with-fieldsets" title="Link to this heading"></a></h3>
<p>Combine grid with fieldsets for grouped sections.</p>
<p>`}),l($,{key:73,meta:X[73]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="horizontal-layout-label-beside-input">Horizontal Layout (Label Beside Input)<a class="header-link" href="#horizontal-layout-label-beside-input" title="Link to this heading"></a></h3>
<p>Use <code>.en-form-grid--horizontal</code> to place labels beside inputs instead of above them.</p>
<p>`}),l($,{key:74,meta:X[74]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="horizontal-with-custom-label-width">Horizontal with Custom Label Width<a class="header-link" href="#horizontal-with-custom-label-width" title="Link to this heading"></a></h3>
<p>Control label column width with <code>--en-form-label-width</code> (default: <code>8rem</code>).</p>
<p>`}),l($,{key:75,meta:X[75]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="reverse-horizontal-input-left-label-right">Reverse Horizontal (Input Left, Label Right)<a class="header-link" href="#reverse-horizontal-input-left-label-right" title="Link to this heading"></a></h3>
<p>Use <code>.en-form-grid--reverse</code> to swap visual positions while keeping DOM order intact.</p>
<p>`}),l($,{key:76,meta:X[76]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="horizontal-with-multi-column-grid">Horizontal with Multi-Column Grid<a class="header-link" href="#horizontal-with-multi-column-grid" title="Link to this heading"></a></h3>
<p>Combine horizontal layout with column grids.</p>
<p>`}),l($,{key:77,meta:X[77]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="horizontal-layout-behavior">Horizontal Layout Behavior<a class="header-link" href="#horizontal-layout-behavior" title="Link to this heading"></a></h3>
<p><strong>Key features</strong>:</p>
<ul>
<li>Label is vertically centered against the input row</li>
<li>Hints and errors appear below the input in the same column</li>
<li>Label width controlled by <code>--en-form-label-width</code> (default: <code>8rem</code>)</li>
<li>Reverse mode swaps visual position only (DOM order unchanged)</li>
<li>Screen reader order, Tab navigation, and <code>for</code> attribute work normally</li>
<li>Below 640px, rows stack (label above input) for mobile</li>
</ul>
<p><strong>Accessibility</strong>:</p>
<ul>
<li>DOM order: always label → input → hint/error (optimal for screen readers)</li>
<li>Visual order: configurable with <code>--reverse</code> modifier</li>
<li>Keyboard navigation follows DOM order, not visual order</li>
<li><code>for</code>/<code>id</code> association works regardless of layout direction</li>
</ul>
<p><strong>Not affected by horizontal layout</strong>:</p>
<ul>
<li><code>.en-field--floating</code> (label is inside the input)</li>
<li><code>.en-field--floating-outlined</code> (label sits on the top border)</li>
<li>Fieldsets (they follow their own layout rules)</li>
</ul>
<h3 id="responsive-behavior">Responsive Behavior<a class="header-link" href="#responsive-behavior" title="Link to this heading"></a></h3>
<p>Form grids are mobile-first and stack on small screens:</p>
<ul>
<li><strong>Mobile</strong> (&lt; 768px): Single column (all fields stack)</li>
<li><strong>Tablet/Desktop</strong> (≥ 768px): Apply column modifiers (–cols-2, --cols-3, --cols-4)</li>
<li><strong>Horizontal layout</strong> (&lt; 640px): Labels stack above inputs</li>
<li><strong>Horizontal layout</strong> (≥ 640px): Labels beside inputs with fixed width</li>
</ul>
<p>Fields with <code>.en-field--span-full</code> always take full width regardless of screen size.</p>
<h3 id="how-it-works">How It Works<a class="header-link" href="#how-it-works" title="Link to this heading"></a></h3>
<p><strong>Form Grid features</strong>:</p>
<ul>
<li>Default gap: <code>var(--en-space-4)</code></li>
<li>Removes <code>.en-field</code> bottom margins inside grid (gap handles spacing)</li>
<li>Responsive: stacks to single column on mobile</li>
<li>Column modifiers only apply at 768px+</li>
<li>Full-width span utility: <code>.en-field--span-full</code></li>
</ul>
<p><strong>Best practices</strong>:</p>
<ul>
<li>Use <code>.en-field</code> wrapper for each form control</li>
<li>Use <code>.en-field--span-full</code> for address lines, textareas, submit buttons</li>
<li>Nest fieldsets inside grid for grouped sections</li>
<li>Keep mobile-first: forms stack naturally on small screens</li>
</ul>
<h2 id="input-group">Input Group<a class="header-link" href="#input-group" title="Link to this heading"></a></h2>
<p>Join inputs with addons (text, icons, buttons, or selects) into a single visual unit.</p>
<p>`}),l($,{key:78,meta:X[78]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="input-group-with-button">Input Group with Button<a class="header-link" href="#input-group-with-button" title="Link to this heading"></a></h3>
<p>`}),l($,{key:79,meta:X[79]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="input-group-with-select">Input Group with Select<a class="header-link" href="#input-group-with-select" title="Link to this heading"></a></h3>
<p>`}),l($,{key:80,meta:X[80]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="multiple-addons">Multiple Addons<a class="header-link" href="#multiple-addons" title="Link to this heading"></a></h3>
<p>`}),l($,{key:81,meta:X[81]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="input-group-sizes">Input Group Sizes<a class="header-link" href="#input-group-sizes" title="Link to this heading"></a></h3>
<p>`}),l($,{key:82,meta:X[82]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="button-group">Button Group<a class="header-link" href="#button-group" title="Link to this heading"></a></h3>
<p>`}),l($,{key:83,meta:X[83]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="url-input">URL Input<a class="header-link" href="#url-input" title="Link to this heading"></a></h3>
<p>`}),l($,{key:84,meta:X[84]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="email-input">Email Input<a class="header-link" href="#email-input" title="Link to this heading"></a></h3>
<p>`}),l($,{key:85,meta:X[85]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="price-input">Price Input<a class="header-link" href="#price-input" title="Link to this heading"></a></h3>
<p>`}),l($,{key:86,meta:X[86]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="date-range">Date Range<a class="header-link" href="#date-range" title="Link to this heading"></a></h3>
<p>`}),l($,{key:87,meta:X[87]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="file-upload-button">File Upload Button<a class="header-link" href="#file-upload-button" title="Link to this heading"></a></h3>
<p>`}),l($,{key:88,meta:X[88]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="dropdown-with-action">Dropdown with Action<a class="header-link" href="#dropdown-with-action" title="Link to this heading"></a></h3>
<p>`}),l($,{key:89,meta:X[89]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="with-icon-addon">With Icon Addon<a class="header-link" href="#with-icon-addon" title="Link to this heading"></a></h3>
<p>`}),l($,{key:90,meta:X[90]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="grow-addon">Grow Addon<a class="header-link" href="#grow-addon" title="Link to this heading"></a></h3>
<p>Addons can grow to fill available space.</p>
<p>`}),l($,{key:91,meta:X[91]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="fixed-width-select">Fixed Width Select<a class="header-link" href="#fixed-width-select" title="Link to this heading"></a></h3>
<p>Use <code>.en-input-group__fixed</code> to keep select/input at natural width.</p>
<p>`}),l($,{key:92,meta:X[92]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="complex-example">Complex Example<a class="header-link" href="#complex-example" title="Link to this heading"></a></h3>
<p>Complete payment form with input groups.</p>
<p>`}),l($,{key:93,meta:X[93]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="how-it-works-1">How It Works<a class="header-link" href="#how-it-works-1" title="Link to this heading"></a></h3>
<p><strong>Input Group features</strong>:</p>
<ul>
<li>Joins multiple elements into single visual unit</li>
<li>Collapses shared borders (no double-thick lines)</li>
<li>Rounds only outer corners</li>
<li>Inputs stretch to fill space by default</li>
<li>Addons stay at natural width</li>
<li>Focus brings element on top (z-index)</li>
</ul>
<p><strong>Supported children</strong>:</p>
<ul>
<li><code>.en-input</code> - Text inputs</li>
<li><code>.en-select</code> - Select dropdowns</li>
<li><code>.en-textarea</code> - Multi-line text (for side-by-side layout)</li>
<li><code>.en-btn</code> - Buttons</li>
<li><code>.en-input-group__addon</code> - Text/icon addons (non-interactive)</li>
<li><code>.en-input-group__fixed</code> - Fixed-width select/input</li>
<li><code>.en-input-group__addon--grow</code> - Addon that fills space</li>
</ul>
<p><strong>Size modifiers</strong>:</p>
<ul>
<li><code>.en-input-group--sm</code> - Small (affects all children)</li>
<li><code>.en-input-group--lg</code> - Large (affects all children)</li>
</ul>
<p><strong>Best practices</strong>:</p>
<ul>
<li>Use <code>.en-input-group__fixed</code> for compact selects (currency, country code)</li>
<li>Use <code>.en-input-group__addon</code> for non-interactive labels</li>
<li>Use buttons for actions (search, submit, clear)</li>
<li>Keep addon text short (1-2 words or icons)</li>
<li>Don’t nest input groups</li>
<li>Don’t put floating-label fields (<code>.en-field--floating</code>, <code>.en-field--floating-outlined</code>) inside an input group; use a regular static label instead</li>
</ul>
<h2 id="floating-label">Floating Label<a class="header-link" href="#floating-label" title="Link to this heading"></a></h2>
<p>Label starts as placeholder text, floats up when field has focus or content.</p>
<p>Two styles are available. They share the same markup, so switching only means changing the wrapper class:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th></th>
<th><code>.en-field--floating</code></th>
<th><code>.en-field--floating-outlined</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>Floated label position</td>
<td>Inside the field, above the text</td>
<td>On the top border, cutting the border line</td>
</tr>
<tr>
<td>Field height</td>
<td>Taller than a plain input</td>
<td>Same as a plain input</td>
</tr>
<tr>
<td>Sizes</td>
<td>One default size</td>
<td>Follows <code>.en-input--sm</code> / <code>.en-input--lg</code> (and textarea)</td>
</tr>
<tr>
<td>Input group</td>
<td>Not supported</td>
<td>Not supported</td>
</tr>
<tr>
<td>Extra requirement</td>
<td>None</td>
<td><code>--en-floating-bg</code> must match the control background</td>
</tr>
</tbody>
</table>
</div><p>`}),l($,{key:94,meta:X[94]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="floating-label-with-email">Floating Label with Email<a class="header-link" href="#floating-label-with-email" title="Link to this heading"></a></h3>
<p>`}),l($,{key:95,meta:X[95]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="floating-label-with-textarea">Floating Label with Textarea<a class="header-link" href="#floating-label-with-textarea" title="Link to this heading"></a></h3>
<p>`}),l($,{key:96,meta:X[96]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="multiple-floating-inputs">Multiple Floating Inputs<a class="header-link" href="#multiple-floating-inputs" title="Link to this heading"></a></h3>
<p>`}),l($,{key:97,meta:X[97]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="floating-label-with-initial-value">Floating Label with Initial Value<a class="header-link" href="#floating-label-with-initial-value" title="Link to this heading"></a></h3>
<p>`}),l($,{key:98,meta:X[98]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="floating-label-password">Floating Label Password<a class="header-link" href="#floating-label-password" title="Link to this heading"></a></h3>
<p>`}),l($,{key:99,meta:X[99]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="floating-label-date">Floating Label Date<a class="header-link" href="#floating-label-date" title="Link to this heading"></a></h3>
<p>`}),l($,{key:100,meta:X[100]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="floating-label-number">Floating Label Number<a class="header-link" href="#floating-label-number" title="Link to this heading"></a></h3>
<p>`}),l($,{key:101,meta:X[101]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="login-form">Login Form<a class="header-link" href="#login-form" title="Link to this heading"></a></h3>
<p>Complete login form with floating labels.</p>
<p>`}),l($,{key:102,meta:X[102]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="registration-form">Registration Form<a class="header-link" href="#registration-form" title="Link to this heading"></a></h3>
<p>Complete registration with floating labels.</p>
<p>`}),l($,{key:103,meta:X[103]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="how-it-works-2">How It Works<a class="header-link" href="#how-it-works-2" title="Link to this heading"></a></h3>
<p><strong>Floating Label features</strong>:</p>
<ul>
<li>Label starts centered as placeholder</li>
<li>Floats up into the field’s top padding when it has focus or content</li>
<li>Label stays inside the field (no border notch), so it never depends on the parent background</li>
<li>Uses <code>:placeholder-shown</code> to detect content</li>
<li>Smooth animation with transitions</li>
<li>Field is taller than a plain input and has a single size (no <code>sm</code>/<code>lg</code>)</li>
</ul>
<p><strong>Markup requirements</strong>:</p>
<ul>
<li>Wrapper: <code>.en-field--floating</code></li>
<li>Input must have <code>placeholder=&quot; &quot;</code> (single space, not empty)</li>
<li>Label must come after input in DOM</li>
<li>Label must have <code>for</code> attribute matching input <code>id</code></li>
</ul>
<p><strong>Supported inputs</strong>:</p>
<ul>
<li>Text, email, password, tel, url, number, date</li>
<li>Textarea (label aligns with the first line, then floats to the top)</li>
<li>NOT supported: select (native select doesn’t support <code>:placeholder-shown</code>)</li>
</ul>
<p><strong>Best practices</strong>:</p>
<ul>
<li>Always use single space placeholder: <code>placeholder=&quot; &quot;</code></li>
<li>Don’t use with select dropdowns (use standard label)</li>
<li>Don’t use inside <code>.en-input-group</code> (use a regular label)</li>
<li>Keep label text short (long text is truncated with an ellipsis)</li>
<li>Use for modern, minimal form designs</li>
<li>Consider standard labels for better usability in some contexts</li>
</ul>
<p><strong>Accessibility</strong>:</p>
<ul>
<li>Label always present in DOM (good for screen readers)</li>
<li>Proper <code>for</code>/<code>id</code> association maintained</li>
<li>Works with browser autofill</li>
<li>Visual animation doesn’t affect semantic meaning</li>
</ul>
<h2 id="floating-label-outlined">Floating Label (Outlined)<a class="header-link" href="#floating-label-outlined" title="Link to this heading"></a></h2>
<p>Same behavior, but the floated label sits on the top border and cuts the border line. The field keeps the height of a plain input, so sizes work as usual.</p>
<p>`}),l($,{key:104,meta:X[104]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="outlined-with-email">Outlined with Email<a class="header-link" href="#outlined-with-email" title="Link to this heading"></a></h3>
<p>`}),l($,{key:105,meta:X[105]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="outlined-with-textarea">Outlined with Textarea<a class="header-link" href="#outlined-with-textarea" title="Link to this heading"></a></h3>
<p>`}),l($,{key:106,meta:X[106]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="outlined-sizes">Outlined Sizes<a class="header-link" href="#outlined-sizes" title="Link to this heading"></a></h3>
<p>The label follows the size class on the input automatically. No modifier is needed on the wrapper.</p>
<p>`}),l($,{key:107,meta:X[107]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="outlined-form">Outlined Form<a class="header-link" href="#outlined-form" title="Link to this heading"></a></h3>
<p>Spacing between fields comes from the container (<code>gap</code>), not from the field. The label only protrudes about half its own height above the border.</p>
<p>`}),l($,{key:108,meta:X[108]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="outlined-how-it-works">Outlined How It Works<a class="header-link" href="#outlined-how-it-works" title="Link to this heading"></a></h3>
<p><strong>Outlined features</strong>:</p>
<ul>
<li>Floated label is centered on the top border and hides the border line behind it</li>
<li>Field height and padding are identical to a plain <code>.en-input</code></li>
<li>Size follows <code>.en-input--sm</code> / <code>.en-input--lg</code> (and <code>.en-textarea--sm</code> / <code>--lg</code>) automatically</li>
<li>Only the lower half of the label has a background, so the parent background never matters (gradients and images work)</li>
<li>Label color follows the state: focus, success, invalid, disabled</li>
<li>Uses system colors in <code>forced-colors</code> mode</li>
</ul>
<p><strong>Markup requirements</strong>: identical to <code>.en-field--floating</code>, with the wrapper <code>.en-field--floating-outlined</code>.</p>
<p><strong>Customization</strong>:</p>
<ul>
<li><code>--en-floating-bg</code> (default <code>var(--en-bg-subtle)</code>) is the background of the label’s lower half. It must match the control background. If you change the input background, set it on the wrapper too:</li>
</ul>
<p>`}),l($,{key:109,meta:X[109]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Not supported</strong>:</p>
<ul>
<li><code>.en-input-group</code> (use a regular label instead)</li>
<li>Ghost variants (<code>.en-input--ghost</code>) since they have no border to cut</li>
<li><code>&lt;select&gt;</code> (no <code>:placeholder-shown</code>)</li>
</ul>
<h2 id="classes">Classes<a class="header-link" href="#classes" title="Link to this heading"></a></h2>
<p>Complete reference for all form control classes.</p>
<h3 id="field-wrapper">Field Wrapper<a class="header-link" href="#field-wrapper" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-field</code></td>
<td>Form field wrapper with bottom margin</td>
</tr>
<tr>
<td><code>.en-field--align-start</code></td>
<td>Vertical align to start in grid layouts</td>
</tr>
<tr>
<td><code>.en-field--align-center</code></td>
<td>Vertical align to center in grid layouts</td>
</tr>
<tr>
<td><code>.en-field--align-end</code></td>
<td>Vertical align to end in grid layouts</td>
</tr>
<tr>
<td><code>.en-field--align-stretch</code></td>
<td>Stretch to fill available height</td>
</tr>
<tr>
<td><code>.en-field--inline</code></td>
<td>Horizontal layout (label + input side by side)</td>
</tr>
</tbody>
</table>
</div><h3 id="labels-and-helper-text">Labels and Helper Text<a class="header-link" href="#labels-and-helper-text" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-label</code></td>
<td>Form label (block display, bottom margin)</td>
</tr>
<tr>
<td><code>.en-hint</code></td>
<td>Helper text below form controls (muted color)</td>
</tr>
<tr>
<td><code>.en-hint--success</code></td>
<td>Success state hint text (green)</td>
</tr>
<tr>
<td><code>.en-hint--warning</code></td>
<td>Warning state hint text (amber/yellow)</td>
</tr>
<tr>
<td><code>.en-hint--danger</code></td>
<td>Danger state hint text (red, same as <code>.en-error</code>)</td>
</tr>
<tr>
<td><code>.en-error</code></td>
<td>Error message text (red, alias for <code>.en-hint--danger</code>)</td>
</tr>
</tbody>
</table>
</div><h3 id="text-inputs-1">Text Inputs<a class="header-link" href="#text-inputs-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-input</code></td>
<td>Base text input class (all text input types)</td>
</tr>
<tr>
<td><code>.en-input--sm</code></td>
<td>Small input size</td>
</tr>
<tr>
<td><code>.en-input--lg</code></td>
<td>Large input size</td>
</tr>
<tr>
<td><code>.en-input--ghost</code></td>
<td>Borderless until focus or value</td>
</tr>
<tr>
<td><code>.en-input--success</code></td>
<td>Success state (green border and focus ring)</td>
</tr>
</tbody>
</table>
</div><h3 id="select-dropdowns-1">Select Dropdowns<a class="header-link" href="#select-dropdowns-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-select</code></td>
<td>Native select dropdown</td>
</tr>
<tr>
<td><code>.en-select--sm</code></td>
<td>Small select size</td>
</tr>
<tr>
<td><code>.en-select--lg</code></td>
<td>Large select size</td>
</tr>
<tr>
<td><code>.en-select--ghost</code></td>
<td>Borderless until focus</td>
</tr>
<tr>
<td><code>.en-select--success</code></td>
<td>Success state (green border and focus ring)</td>
</tr>
</tbody>
</table>
</div><h3 id="textarea-1">Textarea<a class="header-link" href="#textarea-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-textarea</code></td>
<td>Multi-line text input</td>
</tr>
<tr>
<td><code>.en-textarea--sm</code></td>
<td>Small textarea size</td>
</tr>
<tr>
<td><code>.en-textarea--lg</code></td>
<td>Large textarea size</td>
</tr>
<tr>
<td><code>.en-textarea--ghost</code></td>
<td>Borderless until focus or value</td>
</tr>
<tr>
<td><code>.en-textarea--success</code></td>
<td>Success state (green border and focus ring)</td>
</tr>
</tbody>
</table>
</div><h3 id="checkboxes-1">Checkboxes<a class="header-link" href="#checkboxes-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-check</code></td>
<td>Checkbox wrapper (label with native input)</td>
</tr>
<tr>
<td><code>.en-check--sm</code></td>
<td>Small checkbox size</td>
</tr>
<tr>
<td><code>.en-check--lg</code></td>
<td>Large checkbox size</td>
</tr>
<tr>
<td><code>.en-check--full</code></td>
<td>Full width with space-between</td>
</tr>
<tr>
<td><code>.en-check--reverse</code></td>
<td>Reverse layout (input on right)</td>
</tr>
</tbody>
</table>
</div><h3 id="radio-buttons-1">Radio Buttons<a class="header-link" href="#radio-buttons-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-radio</code></td>
<td>Radio button wrapper (label with native input)</td>
</tr>
<tr>
<td><code>.en-radio--sm</code></td>
<td>Small radio size</td>
</tr>
<tr>
<td><code>.en-radio--lg</code></td>
<td>Large radio size</td>
</tr>
<tr>
<td><code>.en-radio--full</code></td>
<td>Full width with space-between</td>
</tr>
<tr>
<td><code>.en-radio--reverse</code></td>
<td>Reverse layout (input on right)</td>
</tr>
</tbody>
</table>
</div><h3 id="checkbox-button-1">Checkbox Button<a class="header-link" href="#checkbox-button-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-check-btn</code></td>
<td>Checkbox styled as button</td>
</tr>
<tr>
<td><code>.en-check-btn__label</code></td>
<td>Button label element</td>
</tr>
<tr>
<td><code>.en-check-btn--sm</code></td>
<td>Small button size</td>
</tr>
<tr>
<td><code>.en-check-btn--lg</code></td>
<td>Large button size</td>
</tr>
<tr>
<td><code>.en-check-btn--primary</code></td>
<td>Primary color variant</td>
</tr>
<tr>
<td><code>.en-check-btn--outline</code></td>
<td>Outlined variant</td>
</tr>
<tr>
<td><code>.en-check-btn--danger</code></td>
<td>Danger color variant</td>
</tr>
</tbody>
</table>
</div><h3 id="checkbox-button-group-1">Checkbox Button Group<a class="header-link" href="#checkbox-button-group-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-check-btn-group</code></td>
<td>Container for joined checkbox buttons</td>
</tr>
<tr>
<td><code>.en-check-btn-group--sm</code></td>
<td>Small group size (affects all children)</td>
</tr>
<tr>
<td><code>.en-check-btn-group--lg</code></td>
<td>Large group size (affects all children)</td>
</tr>
<tr>
<td><code>.en-check-btn-group--vertical</code></td>
<td>Vertical stacking</td>
</tr>
</tbody>
</table>
</div><h3 id="switch-toggle-1">Switch (Toggle)<a class="header-link" href="#switch-toggle-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-switch</code></td>
<td>Toggle switch container</td>
</tr>
<tr>
<td><code>.en-switch__track</code></td>
<td>Switch track background</td>
</tr>
<tr>
<td><code>.en-switch--xs</code></td>
<td>Extra small switch</td>
</tr>
<tr>
<td><code>.en-switch--sm</code></td>
<td>Small switch</td>
</tr>
<tr>
<td><code>.en-switch--lg</code></td>
<td>Large switch</td>
</tr>
</tbody>
</table>
</div><h3 id="fieldset-1">Fieldset<a class="header-link" href="#fieldset-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-fieldset</code></td>
<td>Semantic grouping container with border</td>
</tr>
<tr>
<td><code>.en-fieldset--plain</code></td>
<td>Fieldset without visual border</td>
</tr>
<tr>
<td><code>.en-fieldset--invalid</code></td>
<td>Invalid validation state</td>
</tr>
<tr>
<td><code>.en-fieldset__description</code></td>
<td>Description text below legend</td>
</tr>
<tr>
<td><code>.en-fieldset__options</code></td>
<td>Options container (vertical stack)</td>
</tr>
<tr>
<td><code>.en-fieldset__options--inline</code></td>
<td>Inline options (horizontal wrap)</td>
</tr>
</tbody>
</table>
</div><h3 id="legend">Legend<a class="header-link" href="#legend" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-legend</code></td>
<td>Fieldset legend (title)</td>
</tr>
<tr>
<td><code>.en-legend--required</code></td>
<td>Adds asterisk for required fieldset</td>
</tr>
<tr>
<td><code>.en-legend--hidden</code></td>
<td>Visually hidden (for screen readers only)</td>
</tr>
</tbody>
</table>
</div><h3 id="form-grid-1">Form Grid<a class="header-link" href="#form-grid-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-form-grid</code></td>
<td>Responsive form grid container</td>
</tr>
<tr>
<td><code>.en-form-grid--cols-2</code></td>
<td>2-column grid at breakpoint (≥768px)</td>
</tr>
<tr>
<td><code>.en-form-grid--cols-3</code></td>
<td>3-column grid at breakpoint (≥768px)</td>
</tr>
<tr>
<td><code>.en-form-grid--cols-4</code></td>
<td>4-column grid at breakpoint (≥768px)</td>
</tr>
<tr>
<td><code>.en-form-grid--horizontal</code></td>
<td>Label beside input (≥640px), controlled by <code>--en-form-label-width</code></td>
</tr>
<tr>
<td><code>.en-form-grid--reverse</code></td>
<td>Reverse horizontal layout (input left, label right)</td>
</tr>
<tr>
<td><code>.en-field--span-full</code></td>
<td>Make field span all columns</td>
</tr>
</tbody>
</table>
</div><h3 id="input-group-1">Input Group<a class="header-link" href="#input-group-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-input-group</code></td>
<td>Container for joined input and addons</td>
</tr>
<tr>
<td><code>.en-input-group--sm</code></td>
<td>Small size (affects all children)</td>
</tr>
<tr>
<td><code>.en-input-group--lg</code></td>
<td>Large size (affects all children)</td>
</tr>
<tr>
<td><code>.en-input-group__addon</code></td>
<td>Text or icon addon (non-interactive)</td>
</tr>
<tr>
<td><code>.en-input-group__addon--grow</code></td>
<td>Addon that fills available space</td>
</tr>
<tr>
<td><code>.en-input-group__fixed</code></td>
<td>Fixed-width select/input inside group</td>
</tr>
</tbody>
</table>
</div><h3 id="floating-label-1">Floating Label<a class="header-link" href="#floating-label-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-field--floating</code></td>
<td>Floating label wrapper (label inside the field, single size)</td>
</tr>
<tr>
<td><code>.en-field--floating-outlined</code></td>
<td>Floating label wrapper (label sits on the top border, follows the input size)</td>
</tr>
</tbody>
</table>
</div><h2 id="custom-properties">Custom Properties<a class="header-link" href="#custom-properties" title="Link to this heading"></a></h2>
<p>Form controls share these CSS custom properties:</p>
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
<td><code>--en-input-bg</code></td>
<td><code>var(--en-bg-subtle)</code></td>
<td>Input background color</td>
</tr>
<tr>
<td><code>--en-input-fg</code></td>
<td><code>var(--en-text)</code></td>
<td>Input text color</td>
</tr>
<tr>
<td><code>--en-input-border</code></td>
<td><code>var(--en-border-control)</code></td>
<td>Border color (≥3:1 contrast)</td>
</tr>
<tr>
<td><code>--en-input-placeholder</code></td>
<td><code>var(--en-text-muted)</code></td>
<td>Placeholder text color</td>
</tr>
<tr>
<td><code>--en-input-focus-border</code></td>
<td><code>var(--en-focus-ring)</code></td>
<td>Border color when focused</td>
</tr>
<tr>
<td><code>--en-input-focus-ring</code></td>
<td><code>color-mix(...)</code></td>
<td>Focus ring shadow color</td>
</tr>
<tr>
<td><code>--en-input-disabled-bg</code></td>
<td><code>var(--en-disabled-bg)</code></td>
<td>Disabled background</td>
</tr>
<tr>
<td><code>--en-input-disabled-fg</code></td>
<td><code>var(--en-disabled-text)</code></td>
<td>Disabled text color</td>
</tr>
<tr>
<td><code>--en-input-padding-y</code></td>
<td>Token</td>
<td>Vertical padding (default size)</td>
</tr>
<tr>
<td><code>--en-input-padding-x</code></td>
<td>Token</td>
<td>Horizontal padding (default size)</td>
</tr>
<tr>
<td><code>--en-input-padding-sm-y</code></td>
<td>Token</td>
<td>Vertical padding (small size)</td>
</tr>
<tr>
<td><code>--en-input-padding-sm-x</code></td>
<td>Token</td>
<td>Horizontal padding (small size)</td>
</tr>
<tr>
<td><code>--en-input-padding-lg-y</code></td>
<td>Token</td>
<td>Vertical padding (large size)</td>
</tr>
<tr>
<td><code>--en-input-padding-lg-x</code></td>
<td>Token</td>
<td>Horizontal padding (large size)</td>
</tr>
<tr>
<td><code>--en-form-label-width</code></td>
<td><code>8rem</code></td>
<td>Label column width in horizontal form grid</td>
</tr>
<tr>
<td><code>--en-input-floating-padding-top</code></td>
<td><code>1em</code></td>
<td>Top padding of <code>.en-field--floating</code> (room for the label)</td>
</tr>
<tr>
<td><code>--en-input-floating-padding-bottom</code></td>
<td><code>0.5em</code></td>
<td>Bottom padding of <code>.en-field--floating</code></td>
</tr>
<tr>
<td><code>--en-floating-bg</code></td>
<td><code>var(--en-bg-subtle)</code></td>
<td>Label background of <code>.en-field--floating-outlined</code> (must match the control background)</td>
</tr>
</tbody>
</table>
</div><h2 id="native-html-attributes">Native HTML Attributes<a class="header-link" href="#native-html-attributes" title="Link to this heading"></a></h2>
<p>Form controls support all standard HTML attributes:</p>
<h3 id="input-attributes">Input Attributes<a class="header-link" href="#input-attributes" title="Link to this heading"></a></h3>
<ul>
<li><code>type</code> - Input type (text, email, password, tel, url, number, date, etc.)</li>
<li><code>placeholder</code> - Placeholder text</li>
<li><code>value</code> - Initial/current value</li>
<li><code>required</code> - Makes field required for form submission</li>
<li><code>disabled</code> - Disables the input</li>
<li><code>readonly</code> - Makes input read-only</li>
<li><code>min</code>, <code>max</code> - Min/max values for number/date inputs</li>
<li><code>minlength</code>, <code>maxlength</code> - Length constraints</li>
<li><code>pattern</code> - Regex validation pattern</li>
<li><code>autocomplete</code> - Autocomplete behavior</li>
</ul>
<h3 id="select-attributes">Select Attributes<a class="header-link" href="#select-attributes" title="Link to this heading"></a></h3>
<ul>
<li><code>multiple</code> - Allow multiple selections</li>
<li><code>size</code> - Visible options count</li>
<li><code>required</code> - Makes select required</li>
<li><code>disabled</code> - Disables the select</li>
</ul>
<h3 id="textarea-attributes">Textarea Attributes<a class="header-link" href="#textarea-attributes" title="Link to this heading"></a></h3>
<ul>
<li><code>rows</code> - Visible rows count</li>
<li><code>cols</code> - Visible columns count</li>
<li><code>maxlength</code> - Maximum character count</li>
<li><code>required</code> - Makes textarea required</li>
<li><code>disabled</code> - Disables the textarea</li>
<li><code>readonly</code> - Makes textarea read-only</li>
</ul>
<h3 id="checkboxradio-attributes">Checkbox/Radio Attributes<a class="header-link" href="#checkboxradio-attributes" title="Link to this heading"></a></h3>
<ul>
<li><code>checked</code> - Initial checked state</li>
<li><code>value</code> - Value sent on form submission</li>
<li><code>name</code> - Group name (for radio buttons)</li>
<li><code>required</code> - Makes checkbox/radio required</li>
<li><code>disabled</code> - Disables the input</li>
</ul>
<h3 id="fieldset-attributes">Fieldset Attributes<a class="header-link" href="#fieldset-attributes" title="Link to this heading"></a></h3>
<ul>
<li><code>disabled</code> - Disables all controls inside</li>
</ul>
<h2 id="validation-states-1">Validation States<a class="header-link" href="#validation-states-1" title="Link to this heading"></a></h2>
<p>Form controls use native HTML5 validation:</p>
<h3 id="pseudo-classes">Pseudo-classes<a class="header-link" href="#pseudo-classes" title="Link to this heading"></a></h3>
<ul>
<li><code>:valid</code> - Input passes validation</li>
<li><code>:invalid</code> - Input fails validation</li>
<li><code>:user-invalid</code> - Invalid after user interaction (preferred)</li>
<li><code>:required</code> - Required input</li>
<li><code>:optional</code> - Optional input</li>
<li><code>:disabled</code> - Disabled input</li>
<li><code>:readonly</code> - Read-only input</li>
<li><code>:checked</code> - Checked checkbox/radio</li>
<li><code>:indeterminate</code> - Indeterminate checkbox</li>
<li><code>:placeholder-shown</code> - Has placeholder visible</li>
</ul>
<h3 id="explicit-success-state">Explicit Success State<a class="header-link" href="#explicit-success-state" title="Link to this heading"></a></h3>
<p>The <code>--success</code> variant is opt-in for showing positive feedback (e.g., “username available”):</p>
<p>`}),l($,{key:110,meta:X[110]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Important</strong>: The <code>--success</code> variant has lower specificity than <code>:user-invalid</code>. If the field becomes invalid, it automatically shows red even if you forget to remove the success class. This prevents showing green borders on invalid values.</p>
<h3 id="validation-with-css">Validation with CSS<a class="header-link" href="#validation-with-css" title="Link to this heading"></a></h3>
<p>`}),l($,{key:111,meta:X[111]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="accessibility-1">Accessibility<a class="header-link" href="#accessibility-1" title="Link to this heading"></a></h2>
<p>All form controls follow WCAG 2.1 AA standards:</p>
<h3 id="required-practices">Required Practices<a class="header-link" href="#required-practices" title="Link to this heading"></a></h3>
<ol>
<li><strong>Label every input</strong>: Use <code>&lt;label for&gt;</code> or <code>aria-label</code></li>
<li><strong>Group related controls</strong>: Use <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code></li>
<li><strong>Provide helper text</strong>: Link with <code>aria-describedby</code></li>
<li><strong>Indicate required fields</strong>: Visual asterisk + <code>required</code> attribute</li>
<li><strong>Show validation errors</strong>: Use <code>aria-invalid</code> and error messages</li>
<li><strong>Ensure keyboard access</strong>: All controls must be keyboard navigable</li>
<li><strong>Maintain focus indicators</strong>: Never remove focus outlines</li>
<li><strong>Use semantic HTML</strong>: Native elements over divs with ARIA</li>
</ol>
<h3 id="aria-attributes">ARIA Attributes<a class="header-link" href="#aria-attributes" title="Link to this heading"></a></h3>
<ul>
<li><code>aria-label</code> - Accessible label for inputs without visible label</li>
<li><code>aria-labelledby</code> - Reference to label element(s)</li>
<li><code>aria-describedby</code> - Reference to helper text or error message</li>
<li><code>aria-required</code> - Indicates required field (use with <code>required</code> attribute)</li>
<li><code>aria-invalid</code> - Indicates validation error</li>
<li><code>aria-checked</code> - Checked state for custom checkboxes</li>
<li><code>aria-disabled</code> - Disabled state (use with <code>disabled</code> attribute)</li>
</ul>
<h3 id="color-contrast">Color Contrast<a class="header-link" href="#color-contrast" title="Link to this heading"></a></h3>
<ul>
<li><strong>Border contrast</strong>: <code>--en-border-control</code> meets ≥3:1 (WCAG 1.4.11)</li>
<li><strong>Text contrast</strong>: All text colors meet ≥4.5:1 (WCAG 1.4.3)</li>
<li><strong>Focus indicators</strong>: Meet ≥3:1 contrast against background</li>
</ul>
<h2 id="browser-support">Browser Support<a class="header-link" href="#browser-support" title="Link to this heading"></a></h2>
<p>Modern browsers (Baseline 2025): Chrome 123+, Firefox 120+, Safari 17.5+, Edge 123+.</p>
<p>Features used:</p>
<ul>
<li><code>:has()</code> selector for contextual styling</li>
<li><code>:user-invalid</code> pseudo-class</li>
<li><code>color-mix()</code> for focus rings</li>
<li>Logical properties (<code>padding-inline</code>, <code>margin-block</code>)</li>
<li>Container units (<code>lh</code> for textarea min-height)</li>
</ul>
<p>`}),l($,{key:112,meta:X[112]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),xr={title:`Form Controls`,description:`Basic form controls provide styled text inputs, selects, textareas, checkboxes, radios, and switches with consistent appearance and validation states.`},Sr=br;export{Sr as default,xr as meta};