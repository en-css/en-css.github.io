import{I as e,R as t,Tt as n,W as r,at as i,c as ee,ct as a,et as o,h as te,it as s,n as ne,nt as c,q as l,r as re,tt as u,u as d}from"./components-DGWjtEwO.js";var ie=`<table class="en-table en-table--extra-compact">
  <thead><tr><th>Code</th><th>Description</th><th>Qty</th></tr></thead>
  <tbody>
    <tr><td>A01</td><td>Widget</td><td>150</td></tr>
    <tr><td>B02</td><td>Gadget</td><td>75</td></tr>
  </tbody>
</table>

<table class="en-table en-table--comfortable" style="margin-block-start: 1rem;">
  <thead><tr><th>Code</th><th>Description</th><th>Qty</th></tr></thead>
  <tbody>
    <tr><td>A01</td><td>Widget</td><td>150</td></tr>
    <tr><td>B02</td><td>Gadget</td><td>75</td></tr>
  </tbody>
</table>`,f={__name:`1`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=ie,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},p=`<div class="en-table-wrapper">
  <div class="en-table__bulk-actions en-table__bulk-actions--visible">
    <span class="en-table__bulk-count">2 selected</span>
    <button class="en-btn en-btn--sm">Export</button>
    <button class="en-btn en-btn--sm">Delete</button>
  </div>
  <div class="en-table__stage">
    <div class="en-table-container">
      <table class="en-table">
        <thead>
          <tr>
            <th class="en-table__select-cell"><input type="checkbox" aria-label="Select all"></th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="en-table__row--selected">
            <td class="en-table__select-cell"><input type="checkbox" checked aria-label="Select task"></td>
            <td>Build REST API endpoints</td>
            <td>In Progress</td>
          </tr>
          <tr class="en-table__row--selected">
            <td class="en-table__select-cell"><input type="checkbox" checked aria-label="Select task"></td>
            <td>Deploy to staging</td>
            <td>Ready</td>
          </tr>
          <tr>
            <td class="en-table__select-cell"><input type="checkbox" aria-label="Select task"></td>
            <td>Write unit tests</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,m={__name:`2`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=p,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},h=`<table class="en-table en-table--fixed en-table--resizable">
  <thead>
    <tr>
      <th style="width: 30%;">Name<span class="en-table__col-resizer" role="separator" aria-orientation="vertical"></span></th>
      <th style="width: 45%;">Email<span class="en-table__col-resizer" role="separator" aria-orientation="vertical"></span></th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
    <tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td></tr>
  </tbody>
</table>`,g={__name:`4`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_=`<table class="en-table en-table--reorderable">
  <thead>
    <tr>
      <th draggable="true">Name</th>
      <th draggable="true" class="en-table__col--dragging">Email</th>
      <th draggable="true" class="en-table__col--drop-target">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
  </tbody>
</table>`,v={__name:`5`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=_,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},y=`<div class="en-flex" style="--en-gap: var(--en-space-2); margin-block-end: 0.75rem;">
  <label class="en-table__col-toggle"><input type="checkbox" checked> Name</label>
  <label class="en-table__col-toggle"><input type="checkbox" checked> Email</label>
  <label class="en-table__col-toggle"><input type="checkbox"> Role</label>
</div>

<table class="en-table">
  <thead>
    <tr><th>Name</th><th>Email</th><th class="en-table__col--hidden">Role</th></tr>
  </thead>
  <tbody>
    <tr><td>John Doe</td><td>john@example.com</td><td data-column-hidden="true">Admin</td></tr>
    <tr><td>Jane Smith</td><td>jane@example.com</td><td data-column-hidden="true">Editor</td></tr>
  </tbody>
</table>`,b={__name:`6`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=y,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},x=`<div style="max-width: 520px; overflow: auto;">
  <table class="en-table" style="min-width: 900px; --en-sticky-col-1-width: 8rem;">
    <thead>
      <tr>
        <th class="en-table__col--sticky-start" style="min-width: 8rem;">ID</th>
        <th class="en-table__col--sticky-start-2">Name</th>
        <th>Email</th>
        <th>Department</th>
        <th>Role</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="en-table__col--sticky-start">EMP-001</td>
        <td class="en-table__col--sticky-start-2">John Doe</td>
        <td>john.doe@company.com</td><td>Engineering</td><td>Senior Developer</td><td>Jakarta</td>
      </tr>
      <tr>
        <td class="en-table__col--sticky-start">EMP-002</td>
        <td class="en-table__col--sticky-start-2">Jane Smith</td>
        <td>jane.smith@company.com</td><td>Marketing</td><td>Product Manager</td><td>Bandung</td>
      </tr>
    </tbody>
  </table>
</div>`,S={__name:`7`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=x,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},C=`<table class="en-table">
  <thead>
    <tr>
      <th aria-sort="ascending" data-sort-priority="1" style="padding-inline-end: 2.5rem;">Department</th>
      <th aria-sort="descending" data-sort-priority="2" data-sort-type="numeric" style="padding-inline-end: 2.5rem;">Salary</th>
      <th aria-sort="none" data-sort-type="date">Joined</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Engineering</td><td>$9,200</td><td>2024-03-11</td></tr>
    <tr><td>Engineering</td><td>$8,400</td><td>2023-08-02</td></tr>
    <tr><td>Marketing</td><td>$7,100</td><td>2025-01-20</td></tr>
  </tbody>
</table>`,w={__name:`8`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=C,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},T=`<div class="en-table-wrapper">
  <div class="en-table__toolbar">
    <label class="en-table__search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
      </svg>
      <input class="en-table__search-input" type="search" placeholder="Search users…" aria-label="Search users">
    </label>
    <button class="en-btn en-btn--sm">Filters</button>
  </div>

  <div class="en-table__filter-chips">
    <span class="en-table__filter-chip">
      Role: Admin
      <button class="en-table__filter-chip-remove" aria-label="Remove filter Role: Admin">×</button>
    </span>
    <span class="en-table__filter-chip">
      Status: Active
      <button class="en-table__filter-chip-remove" aria-label="Remove filter Status: Active">×</button>
    </span>
  </div>

  <div class="en-table__stage">
    <div class="en-table-container">
      <table class="en-table">
        <thead>
          <tr><th>Name</th><th>Role</th><th>Status</th></tr>
          <tr class="en-table__filter-row">
            <th class="en-table__filter-cell"><input class="en-table__filter-input" placeholder="Filter name" aria-label="Filter name"></th>
            <th class="en-table__filter-cell"><input class="en-table__filter-input" placeholder="Filter role" aria-label="Filter role"></th>
            <th class="en-table__filter-cell"><input class="en-table__filter-input" placeholder="Filter status" aria-label="Filter status"></th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Alice Johnson</td><td>Admin</td><td>Active</td></tr>
          <tr><td>Carol Davis</td><td>Admin</td><td>Active</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,E={__name:`9`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=T,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},D=`<table class="en-table">
  <thead>
    <tr><th class="en-table__expand-cell"></th><th>Order</th><th>Customer</th><th>Total</th></tr>
  </thead>
  <tbody>
    <tr>
      <td class="en-table__expand-cell">
        <button class="en-table__expand-btn en-table__expand-btn--expanded" aria-label="Collapse order #12345" aria-expanded="true" aria-controls="order-12345"></button>
      </td>
      <td>#12345</td><td>Alice Johnson</td><td>$1,299</td>
    </tr>
    <tr class="en-table__expanded-row" id="order-12345">
      <td colspan="4">
        <div class="en-table__expanded-content">
          Laptop Pro 15" × 1, shipped 2026-10-12 via express delivery.
        </div>
      </td>
    </tr>
    <tr>
      <td class="en-table__expand-cell">
        <button class="en-table__expand-btn" aria-label="Expand order #12346" aria-expanded="false"></button>
      </td>
      <td>#12346</td><td>Bob Williams</td><td>$29</td>
    </tr>
  </tbody>
</table>`,O={__name:`11`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=D,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},k=`<table class="en-table">
  <thead>
    <tr><th>Name</th><th>Type</th><th>Size</th></tr>
  </thead>
  <tbody>
    <tr class="en-table__row--parent en-table__row--expanded">
      <td><span class="en-table__tree-icon" role="button" tabindex="0" aria-label="Collapse src" aria-expanded="true"></span>src</td>
      <td>Folder</td><td>—</td>
    </tr>
    <tr class="en-table__row--child" style="--en-tree-level: 1;">
      <td>components</td><td>Folder</td><td>—</td>
    </tr>
    <tr class="en-table__row--child" style="--en-tree-level: 2;">
      <td>table.css</td><td>File</td><td>4.6 KB</td>
    </tr>
    <tr class="en-table__row--child" style="--en-tree-level: 1;">
      <td>index.css</td><td>File</td><td>1.2 KB</td>
    </tr>
  </tbody>
</table>`,A={__name:`12`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=k,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},j=`<table class="en-table">
  <thead>
    <tr><th>Product</th><th>Stock</th><th>Price</th></tr>
  </thead>
  <tbody>
    <tr class="en-table__group-header">
      <td colspan="3">Electronics <span class="en-table__group-count">3</span></td>
    </tr>
    <tr><td>Laptop Pro 15"</td><td>45</td><td>$1,299</td></tr>
    <tr><td>Wireless Mouse</td><td>120</td><td>$29</td></tr>
    <tr><td>USB-C Hub</td><td>23</td><td>$59</td></tr>
    <tr class="en-table__group-footer">
      <td>Subtotal</td><td>188</td><td>$1,387</td>
    </tr>
    <tr class="en-table__group-header en-table__group-header--collapsed">
      <td colspan="3">Books <span class="en-table__group-count">2</span></td>
    </tr>
  </tbody>
</table>`,M={__name:`13`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=j,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},N=`<table class="en-table">
  <thead>
    <tr><th>Name</th><th>Role</th><th>Department</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td class="en-table__cell--editable">Senior Developer</td>
      <td class="en-table__cell--editing">
        <input class="en-table__cell-input" value="Engineering" aria-label="Department">
      </td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td class="en-table__cell--editable">Product Manager</td>
      <td class="en-table__cell--editable">Marketing</td>
    </tr>
  </tbody>
</table>`,P={__name:`14`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=N,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},F=`<table class="en-table">
  <thead><tr><th>Service</th><th>Status</th></tr></thead>
  <tbody>
    <tr>
      <td>API</td>
      <td><div class="en-table__cell--status"><span class="en-table__status-dot en-table__status-dot--success"></span> Operational</div></td>
    </tr>
    <tr>
      <td>Database</td>
      <td><div class="en-table__cell--status"><span class="en-table__status-dot en-table__status-dot--warning"></span> Degraded</div></td>
    </tr>
  </tbody>
</table>`,I={__name:`15`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=F,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},L=`<table class="en-table">
  <thead><tr><th>Task</th><th>Progress</th></tr></thead>
  <tbody>
    <tr>
      <td>Design</td>
      <td class="en-table__cell--progress">
        <div class="en-table__progress" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" aria-label="Design progress">
          <div class="en-table__progress-bar en-table__progress-bar--success" style="width: 90%;"></div>
        </div>
      </td>
    </tr>
    <tr>
      <td>Development</td>
      <td class="en-table__cell--progress">
        <div class="en-table__progress" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" aria-label="Development progress">
          <div class="en-table__progress-bar" style="width: 40%;"></div>
        </div>
      </td>
    </tr>
  </tbody>
</table>`,R={__name:`16`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=L,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ae=`<table class="en-table">
  <thead><tr><th>User</th><th>Role</th></tr></thead>
  <tbody>
    <tr>
      <td>
        <div class="en-table__cell--user">
          <span class="en-table__user-avatar" role="img" aria-label="Alice Johnson"></span>
          <div class="en-table__user-info">
            <span class="en-table__user-name">Alice Johnson</span>
            <span class="en-table__user-email">alice.j@company.com</span>
          </div>
        </div>
      </td>
      <td>Admin</td>
    </tr>
  </tbody>
</table>`,z={__name:`17`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=ae,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},B=`<table class="en-table">
  <thead>
    <tr>
      <th>Invoice</th>
      <th class="en-table__cell--date">Date</th>
      <th class="en-table__cell--numeric">Amount</th>
      <th class="en-table__cell--actions">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#INV-001</td>
      <td class="en-table__cell--date">2026-10-15</td>
      <td class="en-table__cell--numeric">$1,250.00</td>
      <td class="en-table__cell--actions">
        <span class="en-table__actions">
          <button class="en-table__action-btn" aria-label="Edit invoice INV-001">✎</button>
          <button class="en-table__action-btn" aria-label="Delete invoice INV-001">✕</button>
        </span>
      </td>
    </tr>
    <tr>
      <td>#INV-002</td>
      <td class="en-table__cell--date">2026-10-18</td>
      <td class="en-table__cell--numeric">$890.00</td>
      <td class="en-table__cell--actions">
        <span class="en-table__actions">
          <button class="en-table__action-btn" aria-label="Edit invoice INV-002">✎</button>
          <button class="en-table__action-btn" aria-label="Delete invoice INV-002">✕</button>
        </span>
      </td>
    </tr>
  </tbody>
</table>`,V={__name:`18`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=B,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},H=`<table class="en-table">
  <thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead>
  <tbody>
    <tr>
      <td colspan="3">
        <div class="en-table__empty-state">
          <div class="en-table__empty-icon" aria-hidden="true">📭</div>
          <div class="en-table__empty-title">No users found</div>
          <div class="en-table__empty-description">Try changing your search or filters.</div>
        </div>
      </td>
    </tr>
  </tbody>
</table>`,U={__name:`19`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=H,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},W=`<table class="en-table" aria-busy="true">
  <thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead>
  <tbody>
    <tr class="en-table__skeleton-row">
      <td><div class="en-table__skeleton-cell"></div></td>
      <td><div class="en-table__skeleton-cell"></div></td>
      <td><div class="en-table__skeleton-cell"></div></td>
    </tr>
    <tr class="en-table__skeleton-row">
      <td><div class="en-table__skeleton-cell"></div></td>
      <td><div class="en-table__skeleton-cell"></div></td>
      <td><div class="en-table__skeleton-cell"></div></td>
    </tr>
  </tbody>
</table>`,G={__name:`20`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=W,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},K=`<table class="en-table">
  <caption>Order summary</caption>
  <thead>
    <tr><th>Item</th><th class="en-table__cell--numeric">Qty</th><th class="en-table__cell--numeric">Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Widget</td><td class="en-table__cell--numeric">150</td><td class="en-table__cell--numeric">$1,948.50</td></tr>
    <tr><td>Gadget</td><td class="en-table__cell--numeric">75</td><td class="en-table__cell--numeric">$1,837.50</td></tr>
  </tbody>
  <tfoot>
    <tr>
      <td><span class="en-table__footer-label">Total</span></td>
      <td class="en-table__cell--numeric">225</td>
      <td class="en-table__cell--numeric">$3,786.00</td>
    </tr>
  </tfoot>
</table>`,q={__name:`21`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=K,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},J=`<table class="en-table en-table--draggable">
  <thead><tr><th></th><th>Task</th><th>Priority</th></tr></thead>
  <tbody>
    <tr>
      <td><span class="en-table__drag-handle" aria-hidden="true">⋮⋮</span></td>
      <td>Design homepage mockups</td><td>High</td>
    </tr>
    <tr class="en-table__row--dragging">
      <td><span class="en-table__drag-handle" aria-hidden="true">⋮⋮</span></td>
      <td>Build REST API endpoints</td><td>Medium</td>
    </tr>
    <tr class="en-table__row--drop-target">
      <td><span class="en-table__drag-handle" aria-hidden="true">⋮⋮</span></td>
      <td>Write unit tests</td><td>Low</td>
    </tr>
  </tbody>
</table>`,oe={__name:`22`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=J,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},se=`<div class="en-table-container" style="max-height: 14rem; --en-table-header-height: 2.75rem;">
  <table class="en-table">
    <thead><tr><th>Product</th><th>Stock</th><th>Price</th></tr></thead>
    <tbody>
      <tr class="en-table__row--pinned-top"><td><strong>Featured: Laptop Pro 15"</strong></td><td>45</td><td>$1,299</td></tr>
      <tr><td>Wireless Mouse</td><td>120</td><td>$29</td></tr>
      <tr><td>JavaScript Guide</td><td>8</td><td>$39</td></tr>
      <tr><td>USB-C Hub</td><td>23</td><td>$59</td></tr>
      <tr><td>Desk Lamp</td><td>67</td><td>$79</td></tr>
      <tr><td>Yoga Mat</td><td>0</td><td>$49</td></tr>
      <tr><td>Monitor 27"</td><td>34</td><td>$399</td></tr>
      <tr class="en-table__row--pinned-bottom"><td><strong>Total</strong></td><td>297</td><td>—</td></tr>
    </tbody>
  </table>
</div>`,ce={__name:`23`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=se,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},le=`<div style="position: relative; min-height: 11rem;">
  <div class="en-table__context-menu en-table__context-menu--open" role="menu"
       style="position: absolute; inset-inline-start: 1rem; inset-block-start: 1rem;">
    <div class="en-table__context-item" role="menuitem" tabindex="-1">Edit</div>
    <div class="en-table__context-item" role="menuitem" tabindex="-1">Duplicate</div>
    <div class="en-table__context-divider" role="separator"></div>
    <div class="en-table__context-item en-table__context-item--danger" role="menuitem" tabindex="-1">Delete</div>
  </div>
</div>`,ue={__name:`25`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=le,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Y=`<div class="en-table-wrapper">
  <div class="en-table__stage">
    <div class="en-table-container">
      <table class="en-table">
        <thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead>
        <tbody>
          <tr><td>Alice Johnson</td><td>alice@example.com</td><td>Admin</td></tr>
          <tr><td>Bob Williams</td><td>bob@example.com</td><td>Editor</td></tr>
          <tr><td>Carol Davis</td><td>carol@example.com</td><td>Viewer</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="en-table__pagination">
    <span class="en-table__page-info">Showing 1–3 of 245</span>
    <label class="en-table__page-size-selector">
      Rows per page
      <select class="en-table__page-size-select">
        <option>10</option><option>25</option><option>50</option>
      </select>
    </label>
    <nav class="en-pagination" aria-label="Table pages">
      <!-- see the Pagination component -->
    </nav>
  </div>
</div>`,de={__name:`26`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=Y,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},fe=`<div class="en-table-wrapper">
  <div class="en-table__toolbar">
    <label class="en-table__search">
      <input class="en-table__search-input" type="search" placeholder="Search users…" aria-label="Search users">
    </label>
    <button class="en-btn en-btn--primary en-btn--solid en-btn--sm">Add User</button>
  </div>

  <div class="en-table__stage">
    <div class="en-table-container">
      <table class="en-table en-table--striped">
        <caption class="en-sr-only">Users</caption>
        <thead>
          <tr>
            <th class="en-table__select-cell"><input type="checkbox" aria-label="Select all"></th>
            <th aria-sort="ascending">Name</th>
            <th>Role</th>
            <th>Status</th>
            <th class="en-table__cell--numeric">Logins</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="en-table__select-cell"><input type="checkbox" aria-label="Select Alice Johnson"></td>
            <td>Alice Johnson</td>
            <td><span class="en-badge en-badge--primary">Admin</span></td>
            <td><span class="en-badge en-badge--success">Active</span></td>
            <td class="en-table__cell--numeric">1,284</td>
          </tr>
          <tr class="en-table__row--selected">
            <td class="en-table__select-cell"><input type="checkbox" checked aria-label="Select Bob Williams"></td>
            <td>Bob Williams</td>
            <td><span class="en-badge en-badge--secondary">Editor</span></td>
            <td><span class="en-badge en-badge--success">Active</span></td>
            <td class="en-table__cell--numeric">932</td>
          </tr>
          <tr>
            <td class="en-table__select-cell"><input type="checkbox" aria-label="Select Carol Davis"></td>
            <td>Carol Davis</td>
            <td><span class="en-badge">Viewer</span></td>
            <td><span class="en-badge en-badge--warning">Pending</span></td>
            <td class="en-table__cell--numeric">12</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="en-table__pagination">
    <span class="en-table__page-info">Showing 1–3 of 245</span>
  </div>
</div>`,pe={__name:`27`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=fe,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},me={};function he(t,n){let r=a(`Downloadable`);return s(),e(r,{"dev-url":`components/extended/components-table-advanced.css`})}var X={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "./components/basic/components-table.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "./components/extended/components-table-advanced.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:0,lang:`css`,injectKind:null,editable:!1,source:null},1:{component:f,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--extra-compact"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Code&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Description&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Qty&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>A01&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Widget&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>150&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>B02&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Gadget&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>75&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--comfortable"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: 1rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Code&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Description&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Qty&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>A01&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Widget&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>150&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>B02&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Gadget&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>75&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Density options`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:m,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-wrapper"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__bulk-actions en-table__bulk-actions--visible"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__bulk-count"</span><span class="shiki-foreground">>2 selected&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Export&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Delete&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__stage"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-container"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__select-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select all"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Task&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--selected"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__select-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select task"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Build REST API endpoints&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>In Progress&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--selected"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__select-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select task"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Deploy to staging&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Ready&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__select-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select task"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Write unit tests&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Selection with bulk actions`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> bar</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> wrapper</span><span class="shiki-token-function">.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-table__bulk-actions'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> rows</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> wrapper</span><span class="shiki-token-function">.querySelectorAll</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'tbody tr'</span><span class="shiki-foreground">);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-constant">wrapper</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'change'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> (e) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (</span><span class="shiki-token-keyword">!</span><span class="shiki-token-constant">e</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">target</span><span class="shiki-token-function">.matches</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'tbody input[type="checkbox"]'</span><span class="shiki-foreground">)) </span><span class="shiki-token-keyword">return</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  e</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">target</span><span class="shiki-token-function">.closest</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'tr'</span><span class="shiki-foreground">).</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.toggle</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'en-table__row--selected'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> e</span><span class="shiki-foreground">.</span><span class="shiki-token-constant">target</span><span class="shiki-foreground">.checked);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> count</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> wrapper</span><span class="shiki-token-function">.querySelectorAll</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'tbody input:checked'</span><span class="shiki-foreground">).</span><span class="shiki-token-constant">length</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  bar</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">classList</span><span class="shiki-token-function">.toggle</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'en-table__bulk-actions--visible'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> count </span><span class="shiki-token-keyword">></span><span class="shiki-token-constant"> 0</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-constant">  bar</span><span class="shiki-token-function">.querySelector</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'.en-table__bulk-count'</span><span class="shiki-foreground">).textContent </span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression"> \`</span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">count</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression"> selected\`</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">});</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:3,lang:`javascript`,injectKind:null,editable:!1,source:null},4:{component:g,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--fixed en-table--resizable"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 30%;"</span><span class="shiki-foreground">>Name&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-resizer"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"separator"</span><span class="shiki-token-function"> aria-orientation</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"vertical"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 45%;"</span><span class="shiki-foreground">>Email&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-resizer"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"separator"</span><span class="shiki-token-function"> aria-orientation</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"vertical"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>john@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jane Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>jane@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Resizable columns`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:v,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--reorderable"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> draggable</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> draggable</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col--dragging"</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> draggable</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col--drop-target"</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>john@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Column drag states`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:b,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2); margin-block-end: 0.75rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-toggle"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">> Name&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-toggle"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-foreground">> Email&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-toggle"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">> Role&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col--hidden"</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>john@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-column-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jane Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>jane@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-column-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Column toggle`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:S,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 520px; overflow: auto;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 900px; --en-sticky-col-1-width: 8rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col--sticky-start"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 8rem;"</span><span class="shiki-foreground">>ID&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col--sticky-start-2"</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Department&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Location&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col--sticky-start"</span><span class="shiki-foreground">>EMP-001&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col--sticky-start-2"</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>john.doe@company.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Engineering&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Senior Developer&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jakarta&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col--sticky-start"</span><span class="shiki-foreground">>EMP-002&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col--sticky-start-2"</span><span class="shiki-foreground">>Jane Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>jane.smith@company.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Marketing&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Product Manager&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bandung&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Two sticky start columns`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:w,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ascending"</span><span class="shiki-token-function"> data-sort-priority</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"1"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-inline-end: 2.5rem;"</span><span class="shiki-foreground">>Department&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"descending"</span><span class="shiki-token-function"> data-sort-priority</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-token-function"> data-sort-type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"numeric"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding-inline-end: 2.5rem;"</span><span class="shiki-foreground">>Salary&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> data-sort-type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"date"</span><span class="shiki-foreground">>Joined&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Engineering&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$9,200&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2024-03-11&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Engineering&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$8,400&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2023-08-02&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Marketing&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$7,100&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2025-01-20&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Multi-column sort`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:E,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-wrapper"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__toolbar"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">circle</span><span class="shiki-token-function"> cx</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"11"</span><span class="shiki-token-function"> cy</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"11"</span><span class="shiki-token-function"> r</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"7"</span><span class="shiki-foreground">/>&#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M21 21l-4.3-4.3"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__search-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search users…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search users"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Filters&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-chips"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Role: Admin</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-chip-remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove filter Role: Admin"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-chip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Status: Active</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-chip-remove"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Remove filter Status: Active"</span><span class="shiki-foreground">>×&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__stage"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-container"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-row"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter name"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter name"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter role"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter role"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-input"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter status"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Filter status"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Alice Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Carol Davis&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Toolbar, chips, and column filters`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Status</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__filter-dropdown en-table__filter-dropdown--open"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- checkboxes, radios, or inputs --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:O,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__expand-cell"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Order&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Customer&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Total&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__expand-cell"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__expand-btn en-table__expand-btn--expanded"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Collapse order #12345"</span><span class="shiki-token-function"> aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-token-function"> aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"order-12345"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#12345&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Alice Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$1,299&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__expanded-row"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"order-12345"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> colspan</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__expanded-content"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          Laptop Pro 15" × 1, shipped 2026-10-12 via express delivery.</span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__expand-cell"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__expand-btn"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Expand order #12346"</span><span class="shiki-token-function"> aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"false"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#12346&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Williams&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$29&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Expandable row`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:A,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Type&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Size&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--parent en-table__row--expanded"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__tree-icon"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> tabindex</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Collapse src"</span><span class="shiki-token-function"> aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>src&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Folder&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>—&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--child"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-tree-level: 1;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>components&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Folder&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>—&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--child"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-tree-level: 2;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>table.css&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>File&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>4.6 KB&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--child"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-tree-level: 1;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>index.css&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>File&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>1.2 KB&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Tree rows`,key:12,lang:`html`,injectKind:null,editable:!1,source:null},13:{component:M,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Product&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Stock&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Price&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__group-header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> colspan</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">>Electronics &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__group-count"</span><span class="shiki-foreground">>3&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Laptop Pro 15"&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>45&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$1,299&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Wireless Mouse&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>120&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$29&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>USB-C Hub&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>23&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$59&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__group-footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Subtotal&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>188&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$1,387&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__group-header en-table__group-header--collapsed"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> colspan</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">>Books &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__group-count"</span><span class="shiki-foreground">>2&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Grouped rows`,key:13,lang:`html`,injectKind:null,editable:!1,source:null},14:{component:P,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Department&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--editable"</span><span class="shiki-foreground">>Senior Developer&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--editing"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell-input"</span><span class="shiki-token-function"> value</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Engineering"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Department"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jane Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--editable"</span><span class="shiki-foreground">>Product Manager&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--editable"</span><span class="shiki-foreground">>Marketing&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Inline editing`,key:14,lang:`html`,injectKind:null,editable:!1,source:null},15:{component:I,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Service&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>API&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--status"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__status-dot en-table__status-dot--success"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">> Operational&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Database&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--status"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__status-dot en-table__status-dot--warning"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">> Degraded&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Status cell`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:R,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Task&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Progress&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Design&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--progress"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__progress"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"progressbar"</span><span class="shiki-token-function"> aria-valuenow</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"90"</span><span class="shiki-token-function"> aria-valuemin</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0"</span><span class="shiki-token-function"> aria-valuemax</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"100"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Design progress"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__progress-bar en-table__progress-bar--success"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 90%;"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Development&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--progress"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__progress"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"progressbar"</span><span class="shiki-token-function"> aria-valuenow</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"40"</span><span class="shiki-token-function"> aria-valuemin</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0"</span><span class="shiki-token-function"> aria-valuemax</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"100"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Development progress"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__progress-bar"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 40%;"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Progress cell`,key:16,lang:`html`,injectKind:null,editable:!1,source:null},17:{component:z,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>User&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--user"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__user-avatar"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"img"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Alice Johnson"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__user-info"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__user-name"</span><span class="shiki-foreground">>Alice Johnson&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__user-email"</span><span class="shiki-foreground">>alice.j@company.com&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`User cell`,key:17,lang:`html`,injectKind:null,editable:!1,source:null},18:{component:V,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Invoice&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--date"</span><span class="shiki-foreground">>Date&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>Amount&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--actions"</span><span class="shiki-foreground">>Actions&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#INV-001&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--date"</span><span class="shiki-foreground">>2026-10-15&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>$1,250.00&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--actions"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__actions"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__action-btn"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Edit invoice INV-001"</span><span class="shiki-foreground">>✎&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__action-btn"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Delete invoice INV-001"</span><span class="shiki-foreground">>✕&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#INV-002&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--date"</span><span class="shiki-foreground">>2026-10-18&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>$890.00&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--actions"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__actions"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__action-btn"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Edit invoice INV-002"</span><span class="shiki-foreground">>✎&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__action-btn"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Delete invoice INV-002"</span><span class="shiki-foreground">>✕&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Numeric and actions cells`,key:18,lang:`html`,injectKind:null,editable:!1,source:null},19:{component:U,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> colspan</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"3"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__empty-state"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__empty-icon"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>📭&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__empty-title"</span><span class="shiki-foreground">>No users found&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__empty-description"</span><span class="shiki-foreground">>Try changing your search or filters.&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Empty state`,key:19,lang:`html`,injectKind:null,editable:!1,source:null},20:{component:G,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-token-function"> aria-busy</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__skeleton-row"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__skeleton-cell"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__skeleton-cell"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__skeleton-cell"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__skeleton-row"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__skeleton-cell"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__skeleton-cell"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__skeleton-cell"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Skeleton rows`,key:20,lang:`html`,injectKind:null,editable:!1,source:null},21:{component:q,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">caption</span><span class="shiki-foreground">>Order summary&#x3C;/</span><span class="shiki-token-string-expression">caption</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Item&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>Qty&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>Price&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Widget&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>150&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>$1,948.50&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Gadget&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>75&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>$1,837.50&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tfoot</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__footer-label"</span><span class="shiki-foreground">>Total&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>225&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>$3,786.00&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tfoot</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Footer totals`,key:21,lang:`html`,injectKind:null,editable:!1,source:null},22:{component:oe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--draggable"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Task&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Priority&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__drag-handle"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>⋮⋮&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Design homepage mockups&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>High&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--dragging"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__drag-handle"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>⋮⋮&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Build REST API endpoints&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Medium&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--drop-target"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__drag-handle"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>⋮⋮&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Write unit tests&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Low&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Row drag states`,key:22,lang:`html`,injectKind:null,editable:!1,source:null},23:{component:ce,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-container"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-height: 14rem; --en-table-header-height: 2.75rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Product&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Stock&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Price&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--pinned-top"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Featured: Laptop Pro 15"&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>45&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$1,299&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Wireless Mouse&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>120&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$29&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>JavaScript Guide&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>8&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$39&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>USB-C Hub&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>23&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$59&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Desk Lamp&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>67&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$79&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Yoga Mat&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>0&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$49&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Monitor 27"&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>34&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$399&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--pinned-bottom"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>Total&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>297&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>—&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Pinned total row`,key:23,lang:`html`,injectKind:null,editable:!1,source:null},24:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__virtual-viewport"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-virtual-max-height: 24rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--virtual"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>…&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__virtual-spacer"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-virtual-spacer-height: 2400px;"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">      &#x3C;!-- only the visible rows --></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__virtual-spacer"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-virtual-spacer-height: 51200px;"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:24,lang:`html`,injectKind:null,editable:!1,source:null},25:{component:ue,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: relative; min-height: 11rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__context-menu en-table__context-menu--open"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menu"</span></span>
<span class="line"><span class="shiki-token-function">       style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position: absolute; inset-inline-start: 1rem; inset-block-start: 1rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__context-item"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menuitem"</span><span class="shiki-token-function"> tabindex</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"-1"</span><span class="shiki-foreground">>Edit&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__context-item"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menuitem"</span><span class="shiki-token-function"> tabindex</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"-1"</span><span class="shiki-foreground">>Duplicate&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__context-divider"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"separator"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__context-item en-table__context-item--danger"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"menuitem"</span><span class="shiki-token-function"> tabindex</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"-1"</span><span class="shiki-foreground">>Delete&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Context menu (open)`,key:25,lang:`html`,injectKind:null,editable:!1,source:null},26:{component:de,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-wrapper"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__stage"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-container"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Alice Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>alice@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Williams&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>bob@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Carol Davis&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>carol@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Viewer&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__pagination"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__page-info"</span><span class="shiki-foreground">>Showing 1–3 of 245&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__page-size-selector"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Rows per page</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">select</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__page-size-select"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>10&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>25&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">>50&#x3C;/</span><span class="shiki-token-string-expression">option</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">select</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">nav</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-pagination"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Table pages"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">      &#x3C;!-- see the Pagination component --></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">nav</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Table with pagination bar`,key:26,lang:`html`,injectKind:null,editable:!1,source:null},27:{component:pe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-wrapper"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__toolbar"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__search"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__search-input"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"search"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search users…"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search users"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--solid en-btn--sm"</span><span class="shiki-foreground">>Add User&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__stage"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-container"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--striped"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">caption</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-sr-only"</span><span class="shiki-foreground">>Users&#x3C;/</span><span class="shiki-token-string-expression">caption</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__select-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select all"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ascending"</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>Logins&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__select-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select Alice Johnson"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Alice Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--primary"</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>1,284&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--selected"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__select-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select Bob Williams"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Williams&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--secondary"</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>932&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__select-cell"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select Carol Davis"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Carol Davis&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge"</span><span class="shiki-foreground">>Viewer&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--warning"</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--numeric"</span><span class="shiki-foreground">>12&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__pagination"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__page-info"</span><span class="shiki-foreground">>Showing 1–3 of 245&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Data table with toolbar and pagination`,key:27,lang:`html`,injectKind:null,editable:!1,source:null},28:{component:te(me,[[`render`,he]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/extended/components-table-advanced.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:28,lang:`vue`,injectKind:null,editable:!1,source:null}},Z=[{id:`advanced-table`,text:`Advanced Table`,level:1},{id:`setup`,text:`Setup`,level:2},{id:`what-css-provides-vs-what-needs-javascript`,text:`What CSS provides vs. what needs JavaScript`,level:3},{id:`structure`,text:`Structure`,level:2},{id:`color-variants`,text:`Color Variants`,level:2},{id:`density`,text:`Density`,level:2},{id:`row-selection`,text:`Row Selection`,level:2},{id:`column-management`,text:`Column Management`,level:2},{id:`resizable-columns`,text:`Resizable Columns`,level:3},{id:`reorderable-columns`,text:`Reorderable Columns`,level:3},{id:`hiding-and-toggling-columns`,text:`Hiding and Toggling Columns`,level:3},{id:`sticky-columns-at-the-start`,text:`Sticky Columns at the Start`,level:3},{id:`advanced-sorting`,text:`Advanced Sorting`,level:2},{id:`search-filtering`,text:`Search & Filtering`,level:2},{id:`expandable-nested-rows`,text:`Expandable & Nested Rows`,level:2},{id:`detail-row`,text:`Detail Row`,level:3},{id:`tree-rows`,text:`Tree Rows`,level:3},{id:`row-grouping`,text:`Row Grouping`,level:2},{id:`inline-editing`,text:`Inline Editing`,level:2},{id:`cell-types`,text:`Cell Types`,level:2},{id:`status`,text:`Status`,level:3},{id:`progress`,text:`Progress`,level:3},{id:`user`,text:`User`,level:3},{id:`numeric-date-and-actions`,text:`Numeric, Date, and Actions`,level:3},{id:`badge-cell`,text:`Badge Cell`,level:3},{id:`loading-empty-error-states`,text:`Loading, Empty & Error States`,level:2},{id:`footer-with-aggregation`,text:`Footer with Aggregation`,level:2},{id:`row-dragging`,text:`Row Dragging`,level:2},{id:`pinned-rows`,text:`Pinned Rows`,level:2},{id:`virtual-scrolling`,text:`Virtual Scrolling`,level:2},{id:`context-menu`,text:`Context Menu`,level:2},{id:`pagination-integration`,text:`Pagination Integration`,level:2},{id:`complete-example`,text:`Complete Example`,level:2},{id:`classes`,text:`Classes`,level:2},{id:`variants-and-density`,text:`Variants and density`,level:3},{id:`structure-1`,text:`Structure`,level:3},{id:`selection-and-columns`,text:`Selection and columns`,level:3},{id:`filtering`,text:`Filtering`,level:3},{id:`rows`,text:`Rows`,level:3},{id:`cells`,text:`Cells`,level:3},{id:`attributes`,text:`Attributes`,level:3},{id:`css-custom-properties`,text:`CSS Custom Properties`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`responsive-behavior`,text:`Responsive Behavior`,level:2},{id:`known-limitations`,text:`Known Limitations`,level:2},{id:`browser-compatibility`,text:`Browser Compatibility`,level:2}],Q=[{id:`advanced-table`,text:`Advanced Table`,level:1,children:[{id:`setup`,text:`Setup`,level:2,children:[{id:`what-css-provides-vs-what-needs-javascript`,text:`What CSS provides vs. what needs JavaScript`,level:3,children:[]}]},{id:`structure`,text:`Structure`,level:2,children:[]},{id:`color-variants`,text:`Color Variants`,level:2,children:[]},{id:`density`,text:`Density`,level:2,children:[]},{id:`row-selection`,text:`Row Selection`,level:2,children:[]},{id:`column-management`,text:`Column Management`,level:2,children:[{id:`resizable-columns`,text:`Resizable Columns`,level:3,children:[]},{id:`reorderable-columns`,text:`Reorderable Columns`,level:3,children:[]},{id:`hiding-and-toggling-columns`,text:`Hiding and Toggling Columns`,level:3,children:[]},{id:`sticky-columns-at-the-start`,text:`Sticky Columns at the Start`,level:3,children:[]}]},{id:`advanced-sorting`,text:`Advanced Sorting`,level:2,children:[]},{id:`search-filtering`,text:`Search & Filtering`,level:2,children:[]},{id:`expandable-nested-rows`,text:`Expandable & Nested Rows`,level:2,children:[{id:`detail-row`,text:`Detail Row`,level:3,children:[]},{id:`tree-rows`,text:`Tree Rows`,level:3,children:[]}]},{id:`row-grouping`,text:`Row Grouping`,level:2,children:[]},{id:`inline-editing`,text:`Inline Editing`,level:2,children:[]},{id:`cell-types`,text:`Cell Types`,level:2,children:[{id:`status`,text:`Status`,level:3,children:[]},{id:`progress`,text:`Progress`,level:3,children:[]},{id:`user`,text:`User`,level:3,children:[]},{id:`numeric-date-and-actions`,text:`Numeric, Date, and Actions`,level:3,children:[]},{id:`badge-cell`,text:`Badge Cell`,level:3,children:[]}]},{id:`loading-empty-error-states`,text:`Loading, Empty & Error States`,level:2,children:[]},{id:`footer-with-aggregation`,text:`Footer with Aggregation`,level:2,children:[]},{id:`row-dragging`,text:`Row Dragging`,level:2,children:[]},{id:`pinned-rows`,text:`Pinned Rows`,level:2,children:[]},{id:`virtual-scrolling`,text:`Virtual Scrolling`,level:2,children:[]},{id:`context-menu`,text:`Context Menu`,level:2,children:[]},{id:`pagination-integration`,text:`Pagination Integration`,level:2,children:[]},{id:`complete-example`,text:`Complete Example`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[{id:`variants-and-density`,text:`Variants and density`,level:3,children:[]},{id:`structure-1`,text:`Structure`,level:3,children:[]},{id:`selection-and-columns`,text:`Selection and columns`,level:3,children:[]},{id:`filtering`,text:`Filtering`,level:3,children:[]},{id:`rows`,text:`Rows`,level:3,children:[]},{id:`cells`,text:`Cells`,level:3,children:[]},{id:`attributes`,text:`Attributes`,level:3,children:[]}]},{id:`css-custom-properties`,text:`CSS Custom Properties`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`responsive-behavior`,text:`Responsive Behavior`,level:2,children:[]},{id:`known-limitations`,text:`Known Limitations`,level:2,children:[]},{id:`browser-compatibility`,text:`Browser Compatibility`,level:2,children:[]}]}],ge={css:[],js:[],cleanup:[]},$=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>l(`div`,{class:n},[e.meta.isLive?l(re,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:l(ne,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),_e=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/extended/table-advanced.md`,setup(){i(`vlm-toc`,{flat:Z,tree:Q}),u(()=>d(Z,Q)),c(()=>d([],[]));let e=ee(ge);return i(`vlm-inject`,e),u(()=>e.mount()),o(()=>e.beforeUnmount()),c(()=>e.unmounted()),()=>l(`div`,{class:`vlm-page`},[l(`div`,{class:`vlm-content`},[l(`div`,{class:`vlm-md`,innerHTML:`<h1 id="advanced-table">Advanced Table<a class="header-link" href="#advanced-table" title="Link to this heading"></a></h1>
<p>Data-grid features for the <a href="/docs/encss/table">Table</a> component: row selection bars, column management, multi-sort badges, filtering, expandable rows, grouping, inline editing, cell types, loading states, pinned rows, and more.</p>
<blockquote>
<p><strong>Moved to Table.</strong> Header colors (<code>.en-table--primary</code> …), the selected-row style (<code>.en-table__row--selected</code>), the pinned start and end columns (<code>.en-table__col--sticky-start</code>, <code>.en-table__col-sticky</code>), the sticky header, the busy overlay, and row expansion spacing (<code>.en-table__row--expansion</code>) are part of <a href="/docs/encss/table">Table</a> and work without this file.</p>
</blockquote>
<blockquote>
<p><strong>CSS only.</strong> This component provides classes and styling hooks. Behavior such as sorting data, resizing columns, dragging rows, opening menus, and virtual scrolling must be implemented in your own JavaScript. Examples below show the markup for each state; the short scripts show the typical wiring.</p>
</blockquote>
<h2 id="setup">Setup<a class="header-link" href="#setup" title="Link to this heading"></a></h2>
<p>Advanced Table extends the basic table. Load <code>components-table.css</code> first, then <code>components-table-advanced.css</code>. Advanced Table builds on Table’s custom properties (<code>--en-table-row-bg</code>, <code>--en-table-bg</code>, <code>--en-col-offset</code>), and its density classes override Table’s cell padding at equal specificity, so they must come later in the cascade.</p>
<p>`}),l($,{key:0,meta:X[0]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>It is already included in <code>en-extra.css</code>, <code>en-preset-app.css</code>, <code>en-preset-data.css</code>, and <code>en-preset-extended.css</code>.</p>
<h3 id="what-css-provides-vs-what-needs-javascript">What CSS provides vs. what needs JavaScript<a class="header-link" href="#what-css-provides-vs-what-needs-javascript" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Feature</th>
<th>CSS provides</th>
<th>You implement</th>
</tr>
</thead>
<tbody>
<tr>
<td>Header colors, selected-row style, sticky columns, busy overlay</td>
<td>In <a href="/docs/encss/table">Table</a>, not in this file</td>
<td>Nothing</td>
</tr>
<tr>
<td>Density</td>
<td>Padding and font size</td>
<td>Nothing</td>
</tr>
<tr>
<td>Footer aggregation</td>
<td><code>tfoot</code> styling</td>
<td>Computing totals</td>
</tr>
<tr>
<td>Row selection</td>
<td>Select cell, bulk bar (highlight is in Table)</td>
<td>Selection state, toggling <code>--visible</code></td>
</tr>
<tr>
<td>Column resize / reorder / hide</td>
<td>Handles, drag states, hiding</td>
<td>Pointer and drag logic, widths</td>
</tr>
<tr>
<td>Sort priority / type</td>
<td>Badges and icons</td>
<td>Sorting and attribute updates</td>
</tr>
<tr>
<td>Search and filters</td>
<td>Layout, chips, dropdown</td>
<td>Filtering logic, open/close</td>
</tr>
<tr>
<td>Expandable and tree rows</td>
<td>Icons, indentation</td>
<td>Toggling rows, <code>aria-expanded</code></td>
</tr>
<tr>
<td>Grouping</td>
<td>Header row style</td>
<td>Collapsing rows</td>
</tr>
<tr>
<td>Inline editing</td>
<td>Editing cell style</td>
<td>Edit mode, saving</td>
</tr>
<tr>
<td>Loading and empty states</td>
<td>Styles</td>
<td>Rendering the right state</td>
</tr>
<tr>
<td>Row dragging</td>
<td>Handles, drop indicator</td>
<td>Drag and drop logic</td>
</tr>
<tr>
<td>Pinned rows, sticky columns</td>
<td>Sticky positioning</td>
<td>Setting offset variables (<code>--en-table-header-height</code>, <code>--en-col-offset</code>)</td>
</tr>
<tr>
<td>Virtual scrolling</td>
<td>Spacer and viewport</td>
<td>Windowing logic</td>
</tr>
<tr>
<td>Context menu</td>
<td>Menu styling</td>
<td>Positioning, open/close</td>
</tr>
<tr>
<td>Pagination</td>
<td>Wrapper and bar layout</td>
<td>Paging logic</td>
</tr>
</tbody>
</table>
</div><h2 id="structure">Structure<a class="header-link" href="#structure" title="Link to this heading"></a></h2>
<p>Advanced Table uses the same DOM contract as <a href="/docs/encss/table#structure">Table</a>. <code>.en-table-wrapper</code> is the optional outer frame; the table itself sits in <code>.en-table__stage</code> and <code>.en-table-container</code>:</p>
<pre><code class="language-text">.en-table-wrapper           border, rounded corners, clips its children
├─ .en-table__toolbar       (optional) search and actions
├─ .en-table__bulk-actions  (optional) bar shown while rows are selected
├─ .en-table__stage         non-scrolling box; anchors the busy overlay
│  ├─ .en-table-container   scroller
│  │  └─ table.en-table
│  └─ .en-table__busy-overlay
└─ .en-table__pagination    (optional)
</code></pre>
<p>The examples below use this structure wherever a wrapper is involved.</p>
<h2 id="color-variants">Color Variants<a class="header-link" href="#color-variants" title="Link to this heading"></a></h2>
<p>Header colors (<code>.en-table--primary</code>, <code>--secondary</code>, <code>--success</code>, <code>--danger</code>, <code>--warning</code>, <code>--info</code>) are defined in <a href="/docs/encss/table#header-colors">Table</a>. They only set <code>--en-table-head-bg</code>, <code>--en-table-head-fg</code>, and <code>--en-table-head-border</code>, so the order of the two files no longer matters for them, and you can set those properties yourself for a custom color.</p>
<h2 id="density">Density<a class="header-link" href="#density" title="Link to this heading"></a></h2>
<p>Per-table density, in addition to the basic <code>.en-table--compact</code>.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Cell padding</th>
<th>Font size</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table--extra-compact</code></td>
<td><code>space-1</code> / <code>space-2</code></td>
<td><code>text-xs</code></td>
</tr>
<tr>
<td><code>.en-table--compact</code> (basic)</td>
<td><code>space-2</code> / <code>space-3</code></td>
<td>default</td>
</tr>
<tr>
<td><em>(default)</em></td>
<td><code>space-3</code> / <code>space-4</code></td>
<td>default</td>
</tr>
<tr>
<td><code>.en-table--comfortable</code></td>
<td><code>space-4</code> / <code>space-5</code></td>
<td>default</td>
</tr>
</tbody>
</table>
</div><p>`}),l($,{key:1,meta:X[1]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The global <code>data-density</code> preset also scales spacing; see <a href="/docs/encss/presets">Appearance Presets</a>.</p>
<h2 id="row-selection">Row Selection<a class="header-link" href="#row-selection" title="Link to this heading"></a></h2>
<p>Use <code>.en-table__select-cell</code> for the checkbox column and <code>.en-table__row--selected</code> for a selected row. The class is defined in <a href="/docs/encss/table">Table</a>, which also highlights checked rows with <code>:has()</code>. Use the class when your selection state is not a checkbox, or when you target browsers without <code>:has()</code>. Add <code>.en-table--hover</code> to the table to give selected rows a hover tint.</p>
<p><code>.en-table__bulk-actions</code> is a bar that slides in when rows are selected. Toggle <code>.en-table__bulk-actions--visible</code>. Place it inside <code>.en-table-wrapper</code> (which clips it with <code>overflow: hidden</code>) before the table.</p>
<p>`}),l($,{key:2,meta:X[2]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),l($,{key:3,meta:X[3]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="column-management">Column Management<a class="header-link" href="#column-management" title="Link to this heading"></a></h2>
<h3 id="resizable-columns">Resizable Columns<a class="header-link" href="#resizable-columns" title="Link to this heading"></a></h3>
<p>Add <code>.en-table--resizable</code> and put a <code>.en-table__col-resizer</code> handle inside each <code>&lt;th&gt;</code>. The handle appears on header hover; add <code>.en-table__col-resizer--active</code> while dragging. Combine with <code>.en-table--fixed</code> and set widths on the <code>&lt;th&gt;</code> elements from JavaScript.</p>
<p>`}),l($,{key:4,meta:X[4]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="reorderable-columns">Reorderable Columns<a class="header-link" href="#reorderable-columns" title="Link to this heading"></a></h3>
<p>Add <code>.en-table--reorderable</code> (grab cursor on headers) and <code>draggable=&quot;true&quot;</code> on each <code>&lt;th&gt;</code>. During a drag, use <code>.en-table__col--dragging</code> on the dragged header and <code>.en-table__col--drop-target</code> on the header under the pointer, which shows an insertion line.</p>
<p>`}),l($,{key:5,meta:X[5]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="hiding-and-toggling-columns">Hiding and Toggling Columns<a class="header-link" href="#hiding-and-toggling-columns" title="Link to this heading"></a></h3>
<p>Hide a column with <code>.en-table__col--hidden</code> on every cell of that column, or with <code>data-column-hidden=&quot;true&quot;</code> on <code>&lt;td&gt;</code> cells. The attribute form works on <code>&lt;td&gt;</code> only, so use the class on <code>&lt;th&gt;</code>. <code>.en-table__col-toggle</code> styles a checkbox label for a column picker.</p>
<p>`}),l($,{key:6,meta:X[6]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="sticky-columns-at-the-start">Sticky Columns at the Start<a class="header-link" href="#sticky-columns-at-the-start" title="Link to this heading"></a></h3>
<p><code>.en-table__col--sticky-start</code> and <code>.en-table__col-sticky</code> are defined in <a href="/docs/encss/table">Table</a>. Each reads its distance from the edge from <code>--en-col-offset</code> (default <code>0</code>), so any number of columns can be pinned on either side when you set that offset on each cell (the component measures and writes it for you).</p>
<p>This file adds <code>.en-table__col--sticky-start-2</code> as shorthand for hand-written HTML: it pins a second start column without computing an offset. Set <code>--en-sticky-col-1-width</code> to the width of the first pinned column (default <code>10rem</code>).</p>
<p>`}),l($,{key:7,meta:X[7]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Notes:</strong></p>
<ul>
<li>Set an explicit width on the first sticky column and the same value in <code>--en-sticky-col-1-width</code>, or the second column will not line up.</li>
<li>Sticky cells have an opaque background (<code>--en-table-row-bg</code>, falling back to <code>--en-table-bg</code>), so they follow striped, variant, hover, and selected row colors.</li>
<li>Only <code>.en-table__col--sticky-start</code> draws the 1px divider on its inner edge; <code>.en-table__col--sticky-start-2</code> does not.</li>
<li>In a stacked layout (<code>.en-table--stack</code>, <code>.en-table--stack-*</code>) all pinned columns become <code>position: static</code>.</li>
</ul>
<h2 id="advanced-sorting">Advanced Sorting<a class="header-link" href="#advanced-sorting" title="Link to this heading"></a></h2>
<p>Extends the basic <code>aria-sort</code> indicator.</p>
<ul>
<li><code>data-sort-priority=&quot;1|2|3&quot;</code> on a <code>&lt;th&gt;</code> shows a numbered badge for multi-column sorting.</li>
<li><code>data-sort-type=&quot;numeric|date&quot;</code> prefixes the header label with <code>#</code> or a calendar icon.</li>
</ul>
<p>`}),l($,{key:8,meta:X[8]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Notes:</strong></p>
<ul>
<li>Both the priority badge and the direction arrow use <code>::after</code>, so on a column with <code>data-sort-priority</code> the badge replaces the arrow. Keep <code>aria-sort</code> on the header so assistive technology still gets the direction, and show the direction elsewhere if sighted users need it.</li>
<li>The badge is positioned at the end of the header. Add inline end padding so it does not cover the label.</li>
<li>Priorities above 3 have no badge.</li>
</ul>
<h2 id="search-filtering">Search &amp; Filtering<a class="header-link" href="#search-filtering" title="Link to this heading"></a></h2>
<p>Wrap the toolbar, chips, and table in <code>.en-table-wrapper</code> to give the whole data view one border and rounded corners.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table__toolbar</code></td>
<td>Bar above the table (stacks on mobile)</td>
</tr>
<tr>
<td><code>.en-table__search</code>, <code>.en-table__search-input</code></td>
<td>Search field with room for an icon</td>
</tr>
<tr>
<td><code>.en-table__filter-row</code>, <code>.en-table__filter-cell</code>, <code>.en-table__filter-input</code></td>
<td>Inline per-column filters</td>
</tr>
<tr>
<td><code>.en-table__filter-chips</code>, <code>.en-table__filter-chip</code>, <code>.en-table__filter-chip-remove</code></td>
<td>Active filters</td>
</tr>
<tr>
<td><code>.en-table__filter-dropdown</code>, <code>--open</code></td>
<td>Dropdown anchored under a header</td>
</tr>
</tbody>
</table>
</div><p>`}),l($,{key:9,meta:X[9]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Filter dropdown.</strong> Place the dropdown inside the <code>&lt;th&gt;</code> it belongs to (sticky headers are positioned, so it anchors correctly) and toggle <code>--open</code>:</p>
<p>`}),l($,{key:10,meta:X[10]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Notes:</strong></p>
<ul>
<li>Ancestors with <code>overflow</code> (<code>.en-table-wrapper</code>, <code>.en-table-container</code>) clip the dropdown. For long menus, use a <a href="/docs/encss/popover">Popover</a> instead.</li>
<li>With <code>.en-table--sticky-header</code> on the table, the second header row (the filter row) sticks below the first at <code>top: var(--en-table-header-row-1, 0px)</code>. The component measures the first row into that variable; in plain HTML set <code>--en-table-header-row-1</code> to the height of the first header row on the scroller, or the filter row will overlap the header.</li>
</ul>
<h2 id="expandable-nested-rows">Expandable &amp; Nested Rows<a class="header-link" href="#expandable-nested-rows" title="Link to this heading"></a></h2>
<h3 id="detail-row">Detail Row<a class="header-link" href="#detail-row" title="Link to this heading"></a></h3>
<p>Put an <code>.en-table__expand-btn</code> in an <code>.en-table__expand-cell</code>. Add <code>--expanded</code> to rotate the arrow and render a following <code>.en-table__expanded-row</code> with one cell spanning all columns. The button’s arrow comes from CSS, so keep the button empty and label it with <code>aria-label</code>.</p>
<p>`}),l($,{key:11,meta:X[11]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>.en-table__row--expandable</code> adds a pointer cursor when the whole row toggles. To let the detail content fill the row edge to edge, also add <code>.en-table__row--expansion</code> (from <a href="/docs/encss/table">Table</a>) to the detail row. It removes the padding and border from the cell, and <code>.en-table__expanded-content</code> then supplies its own padding.</p>
<h3 id="tree-rows">Tree Rows<a class="header-link" href="#tree-rows" title="Link to this heading"></a></h3>
<p>Mark parents with <code>.en-table__row--parent</code> (plus <code>--expanded</code> when open) and place an <code>.en-table__tree-icon</code> before the label. Mark children with <code>.en-table__row--child</code> and set <code>--en-tree-level</code> on each child to indent the first cell by 2rem per level.</p>
<p>`}),l($,{key:12,meta:X[12]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>For a full tree view that is not a table, use <a href="/docs/encss/tree">Tree</a>.</p>
<h2 id="row-grouping">Row Grouping<a class="header-link" href="#row-grouping" title="Link to this heading"></a></h2>
<p><code>.en-table__group-header</code> is a clickable row that labels a group, with a rotating arrow. Add <code>--collapsed</code> to turn the arrow. <code>.en-table__group-count</code> is a pill for the item count. <code>.en-table__group-footer</code> gives a subtotal row a top border.</p>
<p>`}),l($,{key:13,meta:X[13]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Hide the member rows of a collapsed group with the <code>hidden</code> attribute from JavaScript. Mirror the state with <code>aria-expanded</code> on the header row’s toggle control.</p>
<h2 id="inline-editing">Inline Editing<a class="header-link" href="#inline-editing" title="Link to this heading"></a></h2>
<p><code>.en-table__cell--editable</code> shows a pencil on hover. For the editing state, add <code>.en-table__cell--editing</code> to the cell and render an <code>.en-table__cell-input</code> inside it, which fills the cell with a primary-colored border.</p>
<p>`}),l($,{key:14,meta:X[14]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Commit on Enter or blur, cancel on Escape, and announce the result (for example with a toast).</p>
<h2 id="cell-types">Cell Types<a class="header-link" href="#cell-types" title="Link to this heading"></a></h2>
<p>Place the inner elements inside a <code>&lt;td&gt;</code>. Applying <code>display: flex</code> directly on a <code>&lt;td&gt;</code> (as <code>.en-table__cell--status</code> and <code>.en-table__cell--user</code> do) removes it from table layout, so wrap content in a <code>&lt;div&gt;</code> carrying the class instead of putting the class on the <code>&lt;td&gt;</code>.</p>
<h3 id="status">Status<a class="header-link" href="#status" title="Link to this heading"></a></h3>
<p>Prefer the standalone <a href="/docs/encss/status-dot">Status Dot</a> for new markup. <code>.en-table__status-dot</code> is kept for backward compatibility.</p>
<p>`}),l($,{key:15,meta:X[15]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Colors: <code>--success</code>, <code>--warning</code>, <code>--danger</code>, <code>--info</code>. Always show a text label next to the dot.</p>
<h3 id="progress">Progress<a class="header-link" href="#progress" title="Link to this heading"></a></h3>
<p>Use <code>.en-table__cell--progress</code> (minimum width 8rem) with <code>.en-table__progress</code> and <code>.en-table__progress-bar</code>. Variants: <code>--success</code>, <code>--warning</code>, <code>--danger</code>. Set the width from an inline style.</p>
<p>`}),l($,{key:16,meta:X[16]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="user">User<a class="header-link" href="#user" title="Link to this heading"></a></h3>
<p><code>.en-table__cell--user</code> lays out an avatar with a name and email. The parts are <code>.en-table__user-avatar</code>, <code>.en-table__user-info</code>, <code>.en-table__user-name</code>, and <code>.en-table__user-email</code>.</p>
<p>`}),l($,{key:17,meta:X[17]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>.en-table__user-avatar</code> also works on an <code>&lt;img&gt;</code> (<code>object-fit: cover</code>). For richer avatars, use the Avatar component.</p>
<h3 id="numeric-date-and-actions">Numeric, Date, and Actions<a class="header-link" href="#numeric-date-and-actions" title="Link to this heading"></a></h3>
<ul>
<li><code>.en-table__cell--numeric</code>: end-aligned, tabular figures. Put it on both the <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> of the column.</li>
<li><code>.en-table__cell--date</code>: tabular figures only.</li>
<li><code>.en-table__cell--actions</code>: end-aligned. Wrap buttons in <code>.en-table__actions</code>, which is hidden until the row is hovered, with <code>.en-table__action-btn</code> for icon buttons.</li>
</ul>
<p>`}),l($,{key:18,meta:X[18]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Action buttons are invisible until hover, so they are hard to find on touch devices and for keyboard users on first focus. Keep a visible fallback (for example a menu button) for those cases.</p>
<h3 id="badge-cell">Badge Cell<a class="header-link" href="#badge-cell" title="Link to this heading"></a></h3>
<p><code>.en-table__cell--badge</code> renders a pill, with <code>.en-table__cell--primary</code>, <code>--success</code>, <code>--warning</code>, <code>--danger</code> for color. Prefer <a href="/docs/encss/badge"><code>.en-badge</code></a> inside a normal cell for new markup. The cell classes are kept for backward compatibility.</p>
<h2 id="loading-empty-error-states">Loading, Empty &amp; Error States<a class="header-link" href="#loading-empty-error-states" title="Link to this heading"></a></h2>
<ul>
<li><code>.en-table--loading</code> dims the table and blocks pointer events. To show a message over the table without dimming the rows, use the busy overlay from <a href="/docs/encss/table#busy-state">Table</a> (<code>.en-table__busy-overlay</code> inside <code>.en-table__stage</code>).</li>
<li><code>.en-table__skeleton-row</code> pulses; <code>.en-table__skeleton-cell</code> is a placeholder bar. For new markup, consider the <a href="/docs/encss/skeleton">Skeleton</a> component.</li>
<li><code>.en-table__empty-state</code> (with <code>__empty-icon</code>, <code>__empty-title</code>, <code>__empty-description</code>) and <code>.en-table__error-state</code> fill a single full-width cell.</li>
</ul>
<p>`}),l($,{key:19,meta:X[19]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),l($,{key:20,meta:X[20]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Set <code>aria-busy=&quot;true&quot;</code> while loading and remove it when data arrives.</p>
<h2 id="footer-with-aggregation">Footer with Aggregation<a class="header-link" href="#footer-with-aggregation" title="Link to this heading"></a></h2>
<p><code>&lt;tfoot&gt;</code> gets bold text, a subtle background, and a top border. <code>.en-table__footer-label</code> styles a small uppercase label. Combine with <code>.en-table__cell--numeric</code> for totals.</p>
<p>`}),l($,{key:21,meta:X[21]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="row-dragging">Row Dragging<a class="header-link" href="#row-dragging" title="Link to this heading"></a></h2>
<p>Add <code>.en-table--draggable</code> (grab cursor on rows). Put an <code>.en-table__drag-handle</code> in the first cell; it appears on row hover. While dragging, use <code>.en-table__row--dragging</code> on the source row and <code>.en-table__row--drop-target</code> on the row under the pointer, which shows a top insertion line.</p>
<p>`}),l($,{key:22,meta:X[22]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Drag and drop is not keyboard accessible by itself. Offer move up/down buttons or a menu as an alternative.</p>
<h2 id="pinned-rows">Pinned Rows<a class="header-link" href="#pinned-rows" title="Link to this heading"></a></h2>
<p>Use <code>.en-table__row--pinned-top</code> and <code>.en-table__row--pinned-bottom</code> for rows that stay visible in a scrolling container, such as a totals row. The top variant sticks below the header at <code>--en-table-header-height</code> (default <code>3rem</code>); set it if your header is taller or shorter.</p>
<p>`}),l($,{key:23,meta:X[23]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="virtual-scrolling">Virtual Scrolling<a class="header-link" href="#virtual-scrolling" title="Link to this heading"></a></h2>
<p>For thousands of rows, render only the visible window.</p>
<ul>
<li><code>.en-table--virtual</code> makes the table a positioning context.</li>
<li><code>.en-table__virtual-viewport</code> is the scrolling element (<code>max-height</code> from <code>--en-virtual-max-height</code>, default <code>32rem</code>).</li>
<li><code>.en-table__virtual-spacer</code> is an empty row or element whose height (<code>--en-virtual-spacer-height</code>) stands in for the rows not rendered above or below.</li>
</ul>
<p>`}),l($,{key:24,meta:X[24]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Keep row heights fixed so offsets can be computed, and keep <code>aria-rowcount</code> and <code>aria-rowindex</code> accurate so assistive technology knows the full size of the data set.</p>
<h2 id="context-menu">Context Menu<a class="header-link" href="#context-menu" title="Link to this heading"></a></h2>
<p><code>.en-table__context-menu</code> is a fixed-position menu; toggle <code>--open</code> and set <code>left</code> and <code>top</code> from the <code>contextmenu</code> event. Items use <code>.en-table__context-item</code> (add <code>--danger</code> for destructive actions) and <code>.en-table__context-divider</code>.</p>
<p>`}),l($,{key:25,meta:X[25]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>A context menu must never be the only way to reach an action. For a general-purpose menu, see <a href="/docs/encss/context-menu">Context Menu</a>.</p>
<h2 id="pagination-integration">Pagination Integration<a class="header-link" href="#pagination-integration" title="Link to this heading"></a></h2>
<p><code>.en-table-wrapper</code> frames the table with a border and rounded corners. Put an <code>.en-table__pagination</code> bar below the stage, with <code>.en-table__page-info</code> and <code>.en-table__page-size-selector</code>. On mobile, the bar stacks vertically.</p>
<p>`}),l($,{key:26,meta:X[26]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="complete-example">Complete Example<a class="header-link" href="#complete-example" title="Link to this heading"></a></h2>
<p>Selection, toolbar, sorting, status, and pagination together.</p>
<p>`}),l($,{key:27,meta:X[27]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="classes">Classes<a class="header-link" href="#classes" title="Link to this heading"></a></h2>
<h3 id="variants-and-density">Variants and density<a class="header-link" href="#variants-and-density" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table--primary</code> <code>--secondary</code> <code>--success</code> <code>--danger</code> <code>--warning</code> <code>--info</code></td>
<td>Colored header row (defined in Table)</td>
</tr>
<tr>
<td><code>.en-table--comfortable</code></td>
<td>Roomier padding</td>
</tr>
<tr>
<td><code>.en-table--extra-compact</code></td>
<td>Tightest padding, <code>text-xs</code></td>
</tr>
<tr>
<td><code>.en-table--resizable</code></td>
<td>Enables column resize handles</td>
</tr>
<tr>
<td><code>.en-table--reorderable</code></td>
<td>Grab cursor on headers</td>
</tr>
<tr>
<td><code>.en-table--draggable</code></td>
<td>Grab cursor on rows</td>
</tr>
<tr>
<td><code>.en-table--virtual</code></td>
<td>Positioning context for virtual scrolling</td>
</tr>
<tr>
<td><code>.en-table--loading</code></td>
<td>Dimmed, non-interactive table</td>
</tr>
</tbody>
</table>
</div><h3 id="structure-1">Structure<a class="header-link" href="#structure-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table-wrapper</code></td>
<td>Bordered, rounded frame for toolbar, stage, and pagination</td>
</tr>
<tr>
<td><code>.en-table__stage</code>, <code>.en-table-container</code>, <code>.en-table__busy-overlay</code></td>
<td>Table structure and busy overlay (defined in Table)</td>
</tr>
<tr>
<td><code>.en-table__toolbar</code></td>
<td>Toolbar above the table</td>
</tr>
<tr>
<td><code>.en-table__bulk-actions</code>, <code>--visible</code>, <code>.en-table__bulk-count</code></td>
<td>Bulk action bar</td>
</tr>
<tr>
<td><code>.en-table__pagination</code>, <code>.en-table__page-info</code>, <code>.en-table__page-size-selector</code>, <code>.en-table__page-size-select</code></td>
<td>Pagination bar</td>
</tr>
<tr>
<td><code>.en-table__virtual-viewport</code>, <code>.en-table__virtual-spacer</code></td>
<td>Virtual scrolling parts</td>
</tr>
</tbody>
</table>
</div><h3 id="selection-and-columns">Selection and columns<a class="header-link" href="#selection-and-columns" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table__select-cell</code></td>
<td>Checkbox cell (3rem wide)</td>
</tr>
<tr>
<td><code>.en-table__row--selected</code></td>
<td>Selected row (defined in Table)</td>
</tr>
<tr>
<td><code>.en-table__col-resizer</code>, <code>--active</code></td>
<td>Resize handle</td>
</tr>
<tr>
<td><code>.en-table__col--dragging</code>, <code>.en-table__col--drop-target</code></td>
<td>Column drag states</td>
</tr>
<tr>
<td><code>.en-table__col--hidden</code></td>
<td>Hidden column (also <code>td[data-column-hidden=&quot;true&quot;]</code>)</td>
</tr>
<tr>
<td><code>.en-table__col-toggle</code></td>
<td>Column picker label</td>
</tr>
<tr>
<td><code>.en-table__col--sticky-start</code> (defined in Table), <code>.en-table__col--sticky-start-2</code></td>
<td>Sticky columns at the start</td>
</tr>
</tbody>
</table>
</div><h3 id="filtering">Filtering<a class="header-link" href="#filtering" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table__search</code>, <code>.en-table__search-input</code></td>
<td>Search field</td>
</tr>
<tr>
<td><code>.en-table__filter-row</code>, <code>.en-table__filter-cell</code>, <code>.en-table__filter-input</code></td>
<td>Per-column filters</td>
</tr>
<tr>
<td><code>.en-table__filter-dropdown</code>, <code>--open</code></td>
<td>Filter dropdown</td>
</tr>
<tr>
<td><code>.en-table__filter-chips</code>, <code>.en-table__filter-chip</code>, <code>.en-table__filter-chip-remove</code></td>
<td>Active filter chips</td>
</tr>
</tbody>
</table>
</div><h3 id="rows">Rows<a class="header-link" href="#rows" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table__expand-cell</code>, <code>.en-table__expand-btn</code>, <code>--expanded</code></td>
<td>Expand control</td>
</tr>
<tr>
<td><code>.en-table__row--expandable</code></td>
<td>Pointer cursor on a toggling row</td>
</tr>
<tr>
<td><code>.en-table__expanded-row</code>, <code>.en-table__expanded-content</code></td>
<td>Detail row</td>
</tr>
<tr>
<td><code>.en-table__row--expansion</code></td>
<td>Detail row with unpadded, borderless cell (defined in Table)</td>
</tr>
<tr>
<td><code>.en-table__row--parent</code>, <code>--expanded</code>, <code>.en-table__tree-icon</code></td>
<td>Tree parent</td>
</tr>
<tr>
<td><code>.en-table__row--child</code></td>
<td>Tree child (indent via <code>--en-tree-level</code>)</td>
</tr>
<tr>
<td><code>.en-table__group-header</code>, <code>--collapsed</code>, <code>.en-table__group-count</code>, <code>.en-table__group-footer</code></td>
<td>Grouping</td>
</tr>
<tr>
<td><code>.en-table__row--dragging</code>, <code>.en-table__row--drop-target</code>, <code>.en-table__drag-handle</code></td>
<td>Row dragging</td>
</tr>
<tr>
<td><code>.en-table__row--pinned-top</code>, <code>.en-table__row--pinned-bottom</code></td>
<td>Pinned rows</td>
</tr>
</tbody>
</table>
</div><h3 id="cells">Cells<a class="header-link" href="#cells" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table__cell--editable</code>, <code>--editing</code>, <code>.en-table__cell-input</code></td>
<td>Inline editing</td>
</tr>
<tr>
<td><code>.en-table__cell--status</code>, <code>.en-table__status-dot</code>, <code>--success</code> <code>--warning</code> <code>--danger</code> <code>--info</code></td>
<td>Status</td>
</tr>
<tr>
<td><code>.en-table__cell--progress</code>, <code>.en-table__progress</code>, <code>.en-table__progress-bar</code>, <code>--success</code> <code>--warning</code> <code>--danger</code></td>
<td>Progress</td>
</tr>
<tr>
<td><code>.en-table__cell--user</code>, <code>.en-table__user-avatar</code>, <code>.en-table__user-info</code>, <code>.en-table__user-name</code>, <code>.en-table__user-email</code></td>
<td>User</td>
</tr>
<tr>
<td><code>.en-table__cell--numeric</code>, <code>.en-table__cell--date</code></td>
<td>Number and date alignment</td>
</tr>
<tr>
<td><code>.en-table__cell--actions</code>, <code>.en-table__actions</code>, <code>.en-table__action-btn</code></td>
<td>Row actions</td>
</tr>
<tr>
<td><code>.en-table__cell--badge</code>, <code>.en-table__cell--primary</code> <code>--success</code> <code>--warning</code> <code>--danger</code></td>
<td>Badge pill (prefer <code>.en-badge</code>)</td>
</tr>
<tr>
<td><code>.en-table__skeleton-row</code>, <code>.en-table__skeleton-cell</code></td>
<td>Loading placeholders</td>
</tr>
<tr>
<td><code>.en-table__empty-state</code>, <code>__empty-icon</code>, <code>__empty-title</code>, <code>__empty-description</code>, <code>.en-table__error-state</code></td>
<td>Empty and error</td>
</tr>
<tr>
<td><code>.en-table__footer-label</code></td>
<td><code>tfoot</code> label</td>
</tr>
<tr>
<td><code>.en-table__context-menu</code>, <code>--open</code>, <code>.en-table__context-item</code>, <code>--danger</code>, <code>.en-table__context-divider</code></td>
<td>Context menu</td>
</tr>
</tbody>
</table>
</div><h3 id="attributes">Attributes<a class="header-link" href="#attributes" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>data-sort-priority=&quot;1|2|3&quot;</code></td>
<td>Multi-sort badge on a <code>&lt;th&gt;</code></td>
</tr>
<tr>
<td><code>data-sort-type=&quot;numeric|date&quot;</code></td>
<td>Type icon before a header label</td>
</tr>
<tr>
<td><code>data-column-hidden=&quot;true&quot;</code></td>
<td>Hides a <code>&lt;td&gt;</code></td>
</tr>
</tbody>
</table>
</div><h2 id="css-custom-properties">CSS Custom Properties<a class="header-link" href="#css-custom-properties" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Property</th>
<th>Default</th>
<th>Used by</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>--en-tree-level</code></td>
<td><code>0</code></td>
<td><code>.en-table__row--child</code> indent (2rem per level)</td>
</tr>
<tr>
<td><code>--en-table-header-height</code></td>
<td><code>3rem</code></td>
<td><code>.en-table__row--pinned-top</code> offset</td>
</tr>
<tr>
<td><code>--en-table-header-row-1</code></td>
<td><code>0px</code></td>
<td>Offset of the second sticky header row, such as the filter row (Table)</td>
</tr>
<tr>
<td><code>--en-col-offset</code></td>
<td><code>0</code></td>
<td>Distance of <code>.en-table__col--sticky-start</code> and <code>.en-table__col-sticky</code> from their edge (Table)</td>
</tr>
<tr>
<td><code>--en-sticky-col-1-width</code></td>
<td><code>10rem</code></td>
<td><code>.en-table__col--sticky-start-2</code> offset</td>
</tr>
<tr>
<td><code>--en-virtual-spacer-height</code></td>
<td><code>0</code></td>
<td><code>.en-table__virtual-spacer</code></td>
</tr>
<tr>
<td><code>--en-virtual-max-height</code></td>
<td><code>32rem</code></td>
<td><code>.en-table__virtual-viewport</code></td>
</tr>
</tbody>
</table>
</div><p>Row, header, and size properties such as <code>--en-table-row-bg</code>, <code>--en-table-head-bg</code>, and <code>--en-table-max-height</code> are listed in <a href="/docs/encss/table#custom-properties">Table</a>.</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li>Use real <code>&lt;table&gt;</code> markup (<code>&lt;caption&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>, <code>scope</code> on headers).</li>
<li>Give every checkbox, icon button, resize handle, and expand button an accessible name.</li>
<li>Mirror open and closed states with <code>aria-expanded</code> and <code>aria-controls</code> on expand buttons, tree icons, and group headers.</li>
<li>Keep <code>aria-sort</code> on sorted headers, even when <code>data-sort-priority</code> replaces the visible arrow.</li>
<li>Provide keyboard alternatives for anything that depends on a pointer: column resize and reorder, row dragging, context menus, and hover-only row actions.</li>
<li>Use <code>aria-busy=&quot;true&quot;</code> while loading, and announce result counts after search or filtering with a live region.</li>
<li>Do not rely on color alone: pair status dots, badges, and color variants with text.</li>
</ul>
<p><strong>High contrast.</strong> In Windows High Contrast (<code>forced-colors: active</code>), selected rows get a <code>Highlight</code> outline, the active resize handle uses <code>Highlight</code>, and badge cells get a <code>CanvasText</code> border, so those cues survive without background colors.</p>
<h2 id="responsive-behavior">Responsive Behavior<a class="header-link" href="#responsive-behavior" title="Link to this heading"></a></h2>
<p>Below 768px, <code>.en-table__toolbar</code>, <code>.en-table__bulk-actions</code>, and <code>.en-table__pagination</code> stack vertically. The table body itself does not reflow. For many columns, wrap the table in <code>.en-table-responsive</code>, or stack it with <code>.en-table--stack-md</code> (below 768px) or <code>.en-table--stack</code> (at every width), with <code>data-label</code> on every cell, as described in <a href="/docs/encss/table#responsive-tables">Table</a>. Pinned columns are released in the stacked layout.</p>
<h2 id="known-limitations">Known Limitations<a class="header-link" href="#known-limitations" title="Link to this heading"></a></h2>
<ul>
<li><strong>Pseudo-elements on table elements.</strong> <code>.en-table__group-header::before</code> (arrow) and <code>.en-table--loading::after</code> (overlay) attach pseudo-elements to a <code>&lt;tr&gt;</code> and a <code>&lt;table&gt;</code>. Browsers may wrap these in anonymous table cells, which can add an extra column or misalign layout. Check these two features in your target browsers. If you see a stray column, draw the group arrow inside the first <code>&lt;td&gt;</code> instead, and put <code>.en-table--loading</code> on a wrapper.</li>
<li><strong><code>display: flex</code> on cells.</strong> <code>.en-table__cell--status</code> and <code>.en-table__cell--user</code> are written for an inner wrapper, not for the <code>&lt;td&gt;</code> itself. See <a href="#cell-types">Cell Types</a>.</li>
<li><strong>Sort badge and arrow share <code>::after</code>.</strong> See <a href="#advanced-sorting">Advanced Sorting</a>.</li>
<li><strong>Overflow clipping.</strong> <code>.en-table-wrapper</code> and <code>.en-table-container</code> clip absolutely positioned children such as filter dropdowns.</li>
<li><strong>Global keyframes.</strong> The skeleton rows use a keyframe named <code>en-pulse</code>, defined in this file. Avoid reusing that name in your own CSS.</li>
</ul>
<h2 id="browser-compatibility">Browser Compatibility<a class="header-link" href="#browser-compatibility" title="Link to this heading"></a></h2>
<p>Same baseline as <a href="/docs/encss/table">Table</a>: <code>:has()</code> for automatic selected-row highlighting (Chrome 105+, Firefox 121+, Safari 15.4+) and <code>color-mix()</code> for the hover and variant tints. Container queries matter only if you write your own <code>@container table</code> rules for <code>.en-table--responsive</code>. Advanced Table also uses the individual <code>translate</code>, <code>rotate</code>, and <code>scale</code> properties (Chrome 104+, Firefox 72+, Safari 14.1+). Without <code>color-mix()</code> support, the affected border and hover tints are dropped and the base colors remain.</p>
<p>`}),l($,{key:28,meta:X[28]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),ve={title:`Advanced Table`,description:`Data-grid features for the Table component: row selection bars, column management, multi-sort badges, filtering, expandable rows, grouping, inline editing, cell types, loading states, pinned rows, and...`},ye=_e;export{ye as default,ve as meta};