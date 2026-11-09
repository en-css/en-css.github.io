import{I as e,R as t,Tt as n,W as r,at as i,c as ee,ct as a,et as o,h as te,it as s,n as ne,nt as c,q as l,r as re,tt as u,u as d}from"./components-DGWjtEwO.js";var ie=`<table class="en-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>Editor</td>
    </tr>
    <tr>
      <td>Bob Johnson</td>
      <td>bob@example.com</td>
      <td>Viewer</td>
    </tr>
  </tbody>
</table>`,f={__name:`0`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=ie,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},p=`<table class="en-table">
  <caption>User List — Active Members</caption>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Alice Johnson</td>
      <td><span class="en-badge en-badge--success">Active</span></td>
    </tr>
    <tr>
      <td>002</td>
      <td>Bob Williams</td>
      <td><span class="en-badge en-badge--success">Active</span></td>
    </tr>
    <tr>
      <td>003</td>
      <td>Carol Davis</td>
      <td><span class="en-badge en-badge--warning">Pending</span></td>
    </tr>
  </tbody>
</table>`,m={__name:`1`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=p,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},h=`<div class="en-table-container" style="--en-table-max-height: 16rem;">
  <table class="en-table en-table--sticky-header">
    <thead>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Laptop Pro 15"</td><td>Electronics</td><td>$1,299</td><td>45</td><td><span class="en-badge en-badge--success">Available</span></td></tr>
      <tr><td>Wireless Mouse</td><td>Electronics</td><td>$29</td><td>120</td><td><span class="en-badge en-badge--success">Available</span></td></tr>
      <tr><td>JavaScript Guide</td><td>Books</td><td>$39</td><td>8</td><td><span class="en-badge en-badge--warning">Low Stock</span></td></tr>
      <tr><td>USB-C Hub</td><td>Electronics</td><td>$59</td><td>23</td><td><span class="en-badge en-badge--success">Available</span></td></tr>
      <tr><td>Desk Lamp</td><td>Home</td><td>$79</td><td>67</td><td><span class="en-badge en-badge--success">Available</span></td></tr>
      <tr><td>Yoga Mat</td><td>Sports</td><td>$49</td><td>0</td><td><span class="en-badge en-badge--danger">Out of Stock</span></td></tr>
      <tr><td>Monitor 27"</td><td>Electronics</td><td>$399</td><td>34</td><td><span class="en-badge en-badge--success">Available</span></td></tr>
      <tr><td>Python Handbook</td><td>Books</td><td>$44</td><td>156</td><td><span class="en-badge en-badge--success">Available</span></td></tr>
      <tr><td>Keyboard RGB</td><td>Electronics</td><td>$129</td><td>89</td><td><span class="en-badge en-badge--success">Available</span></td></tr>
      <tr><td>Coffee Maker</td><td>Home</td><td>$89</td><td>12</td><td><span class="en-badge en-badge--success">Available</span></td></tr>
    </tbody>
  </table>
</div>`,g={__name:`2`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=h,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},_=`<table class="en-table en-table--striped">
  <thead>
    <tr>
      <th>Invoice</th>
      <th>Date</th>
      <th>Amount</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>#INV-001</td><td>2026-07-15</td><td>$1,250</td><td><span class="en-badge en-badge--success">Paid</span></td></tr>
    <tr><td>#INV-002</td><td>2026-07-18</td><td>$890</td><td><span class="en-badge en-badge--warning">Pending</span></td></tr>
    <tr><td>#INV-003</td><td>2026-07-22</td><td>$2,100</td><td><span class="en-badge en-badge--success">Paid</span></td></tr>
    <tr><td>#INV-004</td><td>2026-07-25</td><td>$450</td><td><span class="en-badge en-badge--danger">Overdue</span></td></tr>
  </tbody>
</table>`,v={__name:`4`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=_,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},y=`<table class="en-table en-table--bordered">
  <thead>
    <tr>
      <th>Quarter</th>
      <th>Revenue</th>
      <th>Expenses</th>
      <th>Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Q1 2026</td><td>$125,000</td><td>$80,000</td><td>$45,000</td></tr>
    <tr><td>Q2 2026</td><td>$145,000</td><td>$85,000</td><td>$60,000</td></tr>
    <tr><td>Q3 2026</td><td>$132,000</td><td>$78,000</td><td>$54,000</td></tr>
  </tbody>
</table>`,b={__name:`5`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=y,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},x=`<table class="en-table en-table--compact">
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
      <th>Qty</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>A01</td><td>Widget</td><td>150</td><td>$12.99</td></tr>
    <tr><td>B02</td><td>Gadget</td><td>75</td><td>$24.50</td></tr>
    <tr><td>C03</td><td>Tool</td><td>200</td><td>$8.75</td></tr>
    <tr><td>D04</td><td>Part</td><td>320</td><td>$5.25</td></tr>
  </tbody>
</table>`,S={__name:`6`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=x,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},C=`<table class="en-table en-table--centered">
  <thead>
    <tr>
      <th>Mon</th>
      <th>Tue</th>
      <th>Wed</th>
      <th>Thu</th>
      <th>Fri</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>9:00</td><td>10:00</td><td>9:30</td><td>11:00</td><td>9:00</td></tr>
    <tr><td>Meeting</td><td>Dev</td><td>Review</td><td>Planning</td><td>Demo</td></tr>
  </tbody>
</table>`,w={__name:`7`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=C,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},T=`<table class="en-table en-table--borderless">
  <thead>
    <tr><th>Plan</th><th>Seats</th><th>Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Starter</td><td>5</td><td>$19</td></tr>
    <tr><td>Team</td><td>25</td><td>$79</td></tr>
    <tr><td>Business</td><td>100</td><td>$249</td></tr>
  </tbody>
</table>`,E={__name:`8`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=T,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},D=`<table class="en-table en-table--hover">
  <thead>
    <tr><th>Name</th><th>Email</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
    <tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td></tr>
    <tr><td>Bob Johnson</td><td>bob@example.com</td><td>Viewer</td></tr>
  </tbody>
</table>`,O={__name:`9`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=D,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},k=`<table class="en-table en-table--dark en-table--hover">
  <thead>
    <tr><th>Service</th><th>Region</th><th>Uptime</th></tr>
  </thead>
  <tbody>
    <tr><td>API</td><td>ap-southeast</td><td>99.98%</td></tr>
    <tr><td>Worker</td><td>eu-west</td><td>99.91%</td></tr>
  </tbody>
</table>`,A={__name:`10`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=k,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},j=`<table class="en-table en-table--primary">
  <thead>
    <tr><th>Primary</th><th>Email</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
    <tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td></tr>
  </tbody>
</table>

<table class="en-table en-table--success" style="margin-block-start: 1rem;">
  <thead>
    <tr><th>Success</th><th>Email</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td>Bob Johnson</td><td>bob@example.com</td><td>Viewer</td></tr>
  </tbody>
</table>`,M={__name:`11`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=j,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},N=`<table class="en-table">
  <thead>
    <tr><th>Service</th><th>Status</th><th>Latency</th></tr>
  </thead>
  <tbody>
    <tr><td>API</td><td>Operational</td><td>42 ms</td></tr>
    <tr class="en-table__variant-warning"><td>Database</td><td>Degraded</td><td>310 ms</td></tr>
    <tr class="en-table__variant-danger"><td>Queue</td><td>Down</td><td>—</td></tr>
    <tr><td>Cache</td><td class="en-table__variant-success">Operational</td><td>3 ms</td></tr>
  </tbody>
</table>`,P={__name:`13`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=N,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},F=`<table class="en-table">
  <thead>
    <tr>
      <th aria-sort="ascending">Name</th>
      <th aria-sort="none">Date</th>
      <th aria-sort="descending">Amount</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Alice Johnson</td><td>2026-07-20</td><td>$1,500</td><td><button class="en-btn en-btn--sm">View</button></td></tr>
    <tr><td>Bob Smith</td><td>2026-07-22</td><td>$750</td><td><button class="en-btn en-btn--sm">View</button></td></tr>
    <tr><td>Carol Davis</td><td>2026-07-25</td><td>$320</td><td><button class="en-btn en-btn--sm">View</button></td></tr>
  </tbody>
</table>`,I={__name:`14`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=F,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},L=`<table class="en-table">
  <thead>
    <tr>
      <th><input type="checkbox" aria-label="Select all"></th>
      <th>Task</th>
      <th>Priority</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox" aria-label="Select task"></td>
      <td>Design homepage mockups</td>
      <td><span class="en-badge en-badge--danger">High</span></td>
      <td>Complete</td>
    </tr>
    <tr>
      <td><input type="checkbox" checked aria-label="Select task"></td>
      <td>Build REST API endpoints</td>
      <td><span class="en-badge en-badge--warning">Medium</span></td>
      <td>In Progress</td>
    </tr>
    <tr>
      <td><input type="checkbox" aria-label="Select task"></td>
      <td>Write unit tests</td>
      <td><span class="en-badge">Low</span></td>
      <td>Pending</td>
    </tr>
    <tr>
      <td><input type="checkbox" checked aria-label="Select task"></td>
      <td>Deploy to staging</td>
      <td><span class="en-badge en-badge--warning">Medium</span></td>
      <td>Ready</td>
    </tr>
  </tbody>
</table>`,R={__name:`16`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=L,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},ae=`<table class="en-table en-table--hover">
  <thead>
    <tr><th>Task</th><th>Priority</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr class="en-table__row--selectable">
      <td>Design homepage mockups</td><td>High</td><td>Complete</td>
    </tr>
    <tr class="en-table__row--selectable en-table__row--selected" aria-selected="true">
      <td>Build REST API endpoints</td><td>Medium</td><td>In Progress</td>
    </tr>
    <tr class="en-table__row--selectable">
      <td>Write unit tests</td><td>Low</td><td>Pending</td>
    </tr>
  </tbody>
</table>`,z={__name:`17`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=ae,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},B=`<div class="en-table-responsive" style="max-width: 480px;">
  <table class="en-table" style="min-width: 720px;">
    <thead>
      <tr>
        <th>Order</th>
        <th>Customer</th>
        <th>Email</th>
        <th>City</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>#12345</td><td>Alice Johnson</td><td>alice@example.com</td><td>Jakarta</td><td>$1,299</td></tr>
      <tr><td>#12346</td><td>Bob Williams</td><td>bob@example.com</td><td>Bandung</td><td>$29</td></tr>
      <tr><td>#12347</td><td>Carol Davis</td><td>carol@example.com</td><td>Surabaya</td><td>$15</td></tr>
    </tbody>
  </table>
</div>`,V={__name:`18`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=B,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},H=`<table class="en-table en-table--stack-md">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Product">Laptop Pro 15"</td>
      <td data-label="Price">$1,299</td>
      <td data-label="Stock">23</td>
      <td data-label="Status"><span class="en-badge en-badge--success">Available</span></td>
    </tr>
    <tr>
      <td data-label="Product">Wireless Mouse</td>
      <td data-label="Price">$29</td>
      <td data-label="Stock">156</td>
      <td data-label="Status"><span class="en-badge en-badge--success">Available</span></td>
    </tr>
    <tr>
      <td data-label="Product">USB-C Cable</td>
      <td data-label="Price">$15</td>
      <td data-label="Stock">0</td>
      <td data-label="Status"><span class="en-badge en-badge--danger">Out of Stock</span></td>
    </tr>
  </tbody>
</table>`,U={__name:`19`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=H,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},W=`<div style="max-width: 420px; margin: 0 auto;">
  <div class="en-card">
    <div class="en-card__header">
      <h3 class="en-card__title">Recent Orders</h3>
    </div>
    <div class="en-card__body" style="padding: 0;">
      <table class="en-table en-table--stack">
        <thead>
          <tr>
            <th>Order</th>
            <th>Product</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Order">#12345</td>
            <td data-label="Product">Laptop Pro</td>
            <td data-label="Status"><span class="en-badge en-badge--success">Shipped</span></td>
            <td data-label="Total">$1,299</td>
          </tr>
          <tr>
            <td data-label="Order">#12346</td>
            <td data-label="Product">Wireless Mouse</td>
            <td data-label="Status"><span class="en-badge en-badge--warning">Processing</span></td>
            <td data-label="Total">$29</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,G={__name:`20`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=W,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},K=`<div style="max-width: 600px; overflow: auto;">
  <table class="en-table" style="min-width: 800px;">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Department</th>
        <th>Role</th>
        <th class="en-table__col-sticky">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john.doe@company.com</td>
        <td>Engineering</td>
        <td>Senior Developer</td>
        <td class="en-table__col-sticky">
          <div class="en-flex" style="--en-gap: var(--en-space-2)">
            <button class="en-btn en-btn--sm">Edit</button>
            <button class="en-btn en-btn--sm">Delete</button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane.smith@company.com</td>
        <td>Marketing</td>
        <td>Product Manager</td>
        <td class="en-table__col-sticky">
          <div class="en-flex" style="--en-gap: var(--en-space-2)">
            <button class="en-btn en-btn--sm">Edit</button>
            <button class="en-btn en-btn--sm">Delete</button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Bob Johnson</td>
        <td>bob.johnson@company.com</td>
        <td>Sales</td>
        <td>Account Executive</td>
        <td class="en-table__col-sticky">
          <div class="en-flex" style="--en-gap: var(--en-space-2)">
            <button class="en-btn en-btn--sm">Edit</button>
            <button class="en-btn en-btn--sm">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,q={__name:`22`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=K,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},J=`<table class="en-table">
  <thead>
    <tr>
      <th style="width: 150px;">Name</th>
      <th>Description</th>
      <th style="width: 100px;">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="en-table__cell--truncate">Very Long Product Name That Will Truncate</td>
      <td class="en-table__cell--fluid-truncate">This is a very long description that will be truncated with ellipsis when it exceeds the available space in the table cell.</td>
      <td>Active</td>
    </tr>
    <tr>
      <td class="en-table__cell--truncate">Another Long Name</td>
      <td class="en-table__cell--fluid-truncate">Another lengthy description that demonstrates the truncation behavior with text overflow ellipsis.</td>
      <td>Pending</td>
    </tr>
  </tbody>
</table>`,oe={__name:`24`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=J,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},se=`<table class="en-table">
  <thead>
    <tr>
      <th style="width: 150px;">Name</th>
      <th>Notes</th>
      <th style="width: 100px;">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project Alpha</td>
      <td class="en-table__cell--fluid-truncate en-table__cell--expand-inline" tabindex="0">Hover or focus this cell to read the complete note. It stays on one line with an ellipsis until then.</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Project Beta</td>
      <td class="en-table__cell--fluid-truncate en-table__cell--expand-inline" tabindex="0">Another long note that is clipped by default and expands in place when the cell is hovered or focused.</td>
      <td>Pending</td>
    </tr>
  </tbody>
</table>`,ce={__name:`25`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=se,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},le=`<table class="en-table en-table--fixed">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Short</td>
      <td>This is a much longer piece of content</td>
      <td>Medium length</td>
    </tr>
    <tr>
      <td>Another short</td>
      <td>Text</td>
      <td>More content here</td>
    </tr>
  </tbody>
</table>`,ue={__name:`26`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=le,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},Y=`<div class="en-table__stage">
  <div class="en-table-container">
    <table class="en-table" aria-busy="true">
      <thead>
        <tr><th>Name</th><th>Email</th><th>Role</th></tr>
      </thead>
      <tbody>
        <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
        <tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td></tr>
        <tr><td>Bob Johnson</td><td>bob@example.com</td><td>Viewer</td></tr>
      </tbody>
    </table>
  </div>
  <div class="en-table__busy-overlay">
    <div class="en-table__busy-overlay__content" role="status">
      <span class="en-spinner en-spinner--sm" aria-hidden="true"></span>
      Loading…
    </div>
  </div>
</div>`,de={__name:`28`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=Y,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},fe=`<div class="en-card">
  <div class="en-card__header">
    <div>
      <h3 class="en-card__title">User Management</h3>
      <p class="en-card__subtitle">245 total users</p>
    </div>
    <div class="en-flex" style="--en-gap: var(--en-space-2)">
      <button class="en-btn en-btn--sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 6h18M3 12h18M3 18h18"/>
        </svg>
        Filter
      </button>
      <button class="en-btn en-btn--primary en-btn--solid en-btn--sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        Add User
      </button>
    </div>
  </div>
  <div class="en-card__body" style="padding: 0;">
    <table class="en-table en-table--striped">
      <thead>
        <tr>
          <th><input type="checkbox" aria-label="Select all"></th>
          <th aria-sort="ascending">Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" aria-label="Select user"></td>
          <td>Alice Johnson</td>
          <td>alice.j@company.com</td>
          <td><span class="en-badge en-badge--primary">Admin</span></td>
          <td><span class="en-badge en-badge--success">Active</span></td>
          <td>
            <div class="en-flex" style="--en-gap: var(--en-space-1)">
              <button class="en-btn en-btn--ghost en-btn--sm" aria-label="Edit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
              <button class="en-btn en-btn--ghost en-btn--sm" aria-label="Delete">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" checked aria-label="Select user"></td>
          <td>Bob Williams</td>
          <td>bob.w@company.com</td>
          <td><span class="en-badge en-badge--secondary">Editor</span></td>
          <td><span class="en-badge en-badge--success">Active</span></td>
          <td>
            <div class="en-flex" style="--en-gap: var(--en-space-1)">
              <button class="en-btn en-btn--ghost en-btn--sm" aria-label="Edit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
              <button class="en-btn en-btn--ghost en-btn--sm" aria-label="Delete">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="Select user"></td>
          <td>Carol Davis</td>
          <td>carol.d@company.com</td>
          <td><span class="en-badge">Viewer</span></td>
          <td><span class="en-badge en-badge--warning">Pending</span></td>
          <td>
            <div class="en-flex" style="--en-gap: var(--en-space-1)">
              <button class="en-btn en-btn--ghost en-btn--sm" aria-label="Edit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
              <button class="en-btn en-btn--ghost en-btn--sm" aria-label="Delete">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,pe={__name:`29`,setup(e){let r=n(null);return u(()=>{r.value&&(r.value.innerHTML=fe,document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})))}),o(()=>{if(!r.value)return;let e=r.value;e.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{bubbles:!0,composed:!0,detail:{root:e}})),window.dispatchEvent(new CustomEvent(`vlm:html-live-unmounted`,{detail:{root:e}}))}),(e,n)=>(s(),t(`div`,{ref_key:`__vlmHtmlRoot`,ref:r,class:`vlm-html-live`},null,512))}},me={};function he(t,n){let r=a(`Downloadable`);return s(),e(r,{"dev-url":`components/basic/components-table.css`})}var X={0:{component:f,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>john@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jane Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>jane@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>bob@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Viewer&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Simple table`,key:0,lang:`html`,injectKind:null,editable:!1,source:null},1:{component:m,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">caption</span><span class="shiki-foreground">>User List — Active Members&#x3C;/</span><span class="shiki-token-string-expression">caption</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>ID&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>001&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Alice Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>002&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Williams&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>003&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Carol Davis&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--warning"</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Table with caption`,key:1,lang:`html`,injectKind:null,editable:!1,source:null},2:{component:g,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-container"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-table-max-height: 16rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--sticky-header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Product&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Category&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Price&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Stock&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Laptop Pro 15"&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Electronics&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$1,299&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>45&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Available&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Wireless Mouse&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Electronics&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$29&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>120&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Available&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>JavaScript Guide&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Books&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$39&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>8&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--warning"</span><span class="shiki-foreground">>Low Stock&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>USB-C Hub&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Electronics&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$59&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>23&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Available&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Desk Lamp&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Home&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$79&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>67&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Available&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Yoga Mat&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Sports&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$49&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>0&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--danger"</span><span class="shiki-foreground">>Out of Stock&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Monitor 27"&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Electronics&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$399&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>34&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Available&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Python Handbook&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Books&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$44&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>156&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Available&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Keyboard RGB&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Electronics&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$129&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>89&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Available&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Coffee Maker&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Home&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$89&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>12&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Available&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Scrollable table with sticky header`,key:2,lang:`html`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-container"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-table-header-row-1: 2.75rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--sticky-header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> colspan</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">>Sales&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> colspan</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">>Stock&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Q1&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Q2&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>In&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Out&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- … --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:3,lang:`html`,injectKind:null,editable:!1,source:null},4:{component:v,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--striped"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Invoice&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Date&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Amount&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#INV-001&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2026-07-15&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$1,250&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Paid&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#INV-002&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2026-07-18&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$890&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--warning"</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#INV-003&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2026-07-22&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$2,100&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Paid&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#INV-004&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2026-07-25&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$450&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--danger"</span><span class="shiki-foreground">>Overdue&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Striped table`,key:4,lang:`html`,injectKind:null,editable:!1,source:null},5:{component:b,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--bordered"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Quarter&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Revenue&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Expenses&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Profit&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Q1 2026&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$125,000&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$80,000&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$45,000&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Q2 2026&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$145,000&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$85,000&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$60,000&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Q3 2026&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$132,000&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$78,000&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$54,000&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Bordered table`,key:5,lang:`html`,injectKind:null,editable:!1,source:null},6:{component:S,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--compact"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Code&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Description&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Qty&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Price&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>A01&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Widget&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>150&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$12.99&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>B02&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Gadget&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>75&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$24.50&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>C03&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Tool&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>200&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$8.75&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>D04&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Part&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>320&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$5.25&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Compact table`,key:6,lang:`html`,injectKind:null,editable:!1,source:null},7:{component:w,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--centered"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Mon&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Tue&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Wed&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Thu&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Fri&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>9:00&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>10:00&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>9:30&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>11:00&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>9:00&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Meeting&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Dev&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Review&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Planning&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Demo&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Centered table`,key:7,lang:`html`,injectKind:null,editable:!1,source:null},8:{component:E,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--borderless"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Plan&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Seats&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Price&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Starter&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>5&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$19&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Team&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>25&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$79&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Business&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>100&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$249&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Borderless table`,key:8,lang:`html`,injectKind:null,editable:!1,source:null},9:{component:O,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--hover"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>john@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jane Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>jane@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>bob@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Viewer&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Hoverable rows`,key:9,lang:`html`,injectKind:null,editable:!1,source:null},10:{component:A,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--dark en-table--hover"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Service&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Region&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Uptime&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>API&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>ap-southeast&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>99.98%&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Worker&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>eu-west&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>99.91%&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Dark table`,key:10,lang:`html`,injectKind:null,editable:!1,source:null},11:{component:M,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--primary"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Primary&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>john@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jane Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>jane@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--success"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-block-start: 1rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Success&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>bob@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Viewer&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Header color variants`,key:11,lang:`html`,injectKind:null,editable:!1,source:null},12:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">.my-table</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  --en-table-head-bg</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> #1f2937</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">  --en-table-head-fg</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> #fff</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">  --en-table-head-border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> #111827</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:12,lang:`css`,injectKind:null,editable:!1,source:null},13:{component:P,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Service&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Latency&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>API&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Operational&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>42 ms&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__variant-warning"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Database&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Degraded&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>310 ms&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__variant-danger"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Queue&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Down&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>—&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Cache&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__variant-success"</span><span class="shiki-foreground">>Operational&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>3 ms&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Row and cell variants`,key:13,lang:`html`,injectKind:null,editable:!1,source:null},14:{component:I,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ascending"</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-foreground">>Date&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"descending"</span><span class="shiki-foreground">>Amount&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Actions&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Alice Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2026-07-20&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$1,500&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>View&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2026-07-22&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$750&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>View&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Carol Davis&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>2026-07-25&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$320&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>View&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Sortable column indicators`,key:14,lang:`html`,injectKind:null,editable:!1,source:null},15:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> scope</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"col"</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ascending"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"button"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__th-button"</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:R,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select all"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Task&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Priority&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select task"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Design homepage mockups&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--danger"</span><span class="shiki-foreground">>High&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Complete&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select task"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Build REST API endpoints&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--warning"</span><span class="shiki-foreground">>Medium&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>In Progress&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select task"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Write unit tests&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge"</span><span class="shiki-foreground">>Low&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select task"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Deploy to staging&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--warning"</span><span class="shiki-foreground">>Medium&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Ready&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Selectable rows with checkboxes`,key:16,lang:`html`,injectKind:null,editable:!1,source:null},17:{component:z,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--hover"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Task&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Priority&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--selectable"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Design homepage mockups&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>High&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Complete&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--selectable en-table__row--selected"</span><span class="shiki-token-function"> aria-selected</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Build REST API endpoints&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Medium&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>In Progress&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--selectable"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Write unit tests&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Low&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Selected rows with a class`,key:17,lang:`html`,injectKind:null,editable:!1,source:null},18:{component:V,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-responsive"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 480px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 720px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Order&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Customer&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>City&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Total&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#12345&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Alice Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>alice@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jakarta&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$1,299&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#12346&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Williams&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>bob@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bandung&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$29&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>#12347&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Carol Davis&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>carol@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Surabaya&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>$15&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Horizontal scroll wrapper`,key:18,lang:`html`,injectKind:null,editable:!1,source:null},19:{component:U,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--stack-md"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Product&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Price&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Stock&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Product"</span><span class="shiki-foreground">>Laptop Pro 15"&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Price"</span><span class="shiki-foreground">>$1,299&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Stock"</span><span class="shiki-foreground">>23&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Status"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Available&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Product"</span><span class="shiki-foreground">>Wireless Mouse&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Price"</span><span class="shiki-foreground">>$29&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Stock"</span><span class="shiki-foreground">>156&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Status"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Available&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Product"</span><span class="shiki-foreground">>USB-C Cable&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Price"</span><span class="shiki-foreground">>$15&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Stock"</span><span class="shiki-foreground">>0&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Status"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--danger"</span><span class="shiki-foreground">>Out of Stock&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Responsive stacked table (below 768px)`,key:19,lang:`html`,injectKind:null,editable:!1,source:null},20:{component:G,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 420px; margin: 0 auto;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>Recent Orders&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: 0;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--stack"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Order&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Product&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Total&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Order"</span><span class="shiki-foreground">>#12345&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Product"</span><span class="shiki-foreground">>Laptop Pro&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Status"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Shipped&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Total"</span><span class="shiki-foreground">>$1,299&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Order"</span><span class="shiki-foreground">>#12346&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Product"</span><span class="shiki-foreground">>Wireless Mouse&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Status"</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--warning"</span><span class="shiki-foreground">>Processing&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Total"</span><span class="shiki-foreground">>$29&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Always-stacked table in a card`,key:20,lang:`html`,injectKind:null,editable:!1,source:null},21:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">/* Hide the 4th column and beyond when the table is narrower than 600px */</span></span>
<span class="line"><span class="shiki-token-keyword">@container</span><span class="shiki-foreground"> table (max-width: 600px) {</span></span>
<span class="line"><span class="shiki-token-function">  .en-table--responsive</span><span class="shiki-token-string-expression"> th</span><span class="shiki-token-function">:nth-child</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">n + 4</span><span class="shiki-foreground">)</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-token-function">  .en-table--responsive</span><span class="shiki-token-string-expression"> td</span><span class="shiki-token-function">:nth-child</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">n + 4</span><span class="shiki-foreground">) {</span></span>
<span class="line"><span class="shiki-token-constant">    display</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> none</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">  }</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:21,lang:`css`,injectKind:null,editable:!1,source:null},22:{component:q,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"max-width: 600px; overflow: auto;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 800px;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Department&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-sticky"</span><span class="shiki-foreground">>Actions&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>john.doe@company.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Engineering&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Senior Developer&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-sticky"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Edit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Delete&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jane Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>jane.smith@company.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Marketing&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Product Manager&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-sticky"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Edit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Delete&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>bob.johnson@company.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Sales&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Account Executive&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-sticky"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Edit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">>Delete&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Table with sticky last column`,key:22,lang:`html`,injectKind:null,editable:!1,source:null},23:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- Two columns pinned to the end edge; Actions is 6rem wide --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-sticky"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-col-offset: 6rem; min-width: 6rem;"</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-sticky"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"min-width: 6rem;"</span><span class="shiki-foreground">>Actions&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:23,lang:`html`,injectKind:null,editable:!1,source:null},24:{component:oe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 150px;"</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Description&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 100px;"</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--truncate"</span><span class="shiki-foreground">>Very Long Product Name That Will Truncate&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--fluid-truncate"</span><span class="shiki-foreground">>This is a very long description that will be truncated with ellipsis when it exceeds the available space in the table cell.&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--truncate"</span><span class="shiki-foreground">>Another Long Name&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--fluid-truncate"</span><span class="shiki-foreground">>Another lengthy description that demonstrates the truncation behavior with text overflow ellipsis.&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Truncated cell content`,key:24,lang:`html`,injectKind:null,editable:!1,source:null},25:{component:ce,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 150px;"</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Notes&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"width: 100px;"</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Project Alpha&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--fluid-truncate en-table__cell--expand-inline"</span><span class="shiki-token-function"> tabindex</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0"</span><span class="shiki-foreground">>Hover or focus this cell to read the complete note. It stays on one line with an ellipsis until then.&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Project Beta&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--fluid-truncate en-table__cell--expand-inline"</span><span class="shiki-token-function"> tabindex</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0"</span><span class="shiki-foreground">>Another long note that is clipped by default and expands in place when the cell is hovered or focused.&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Truncated cell that expands on hover`,key:25,lang:`html`,injectKind:null,editable:!1,source:null},26:{component:ue,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--fixed"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Column 1&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Column 2&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Column 3&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Short&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>This is a much longer piece of content&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Medium length&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Another short&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Text&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>More content here&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Fixed table layout`,key:26,lang:`html`,injectKind:null,editable:!1,source:null},27:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__row--expansion"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> colspan</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"4"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"my-detail"</span><span class="shiki-foreground">>…&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:27,lang:`html`,injectKind:null,editable:!1,source:null},28:{component:de,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__stage"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-container"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table"</span><span class="shiki-token-function"> aria-busy</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>John Doe&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>john@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Jane Smith&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>jane@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>bob@example.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Viewer&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__busy-overlay"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__busy-overlay__content"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"status"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-spinner en-spinner--sm"</span><span class="shiki-token-function"> aria-hidden</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      Loading…</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Busy overlay`,key:28,lang:`html`,injectKind:null,editable:!1,source:null},29:{component:pe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">h3</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__title"</span><span class="shiki-foreground">>User Management&#x3C;/</span><span class="shiki-token-string-expression">h3</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__subtitle"</span><span class="shiki-foreground">>245 total users&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M3 6h18M3 12h18M3 18h18"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Filter</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--solid en-btn--sm"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M12 5v14M5 12h14"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        Add User</span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-card__body"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: 0;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--striped"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select all"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ascending"</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Email&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Role&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Status&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>Actions&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">thead</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select user"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Alice Johnson&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>alice.j@company.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--primary"</span><span class="shiki-foreground">>Admin&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-1)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--ghost en-btn--sm"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Edit"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                  &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">                  &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--ghost en-btn--sm"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Delete"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                  &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> checked</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select user"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Bob Williams&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>bob.w@company.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--secondary"</span><span class="shiki-foreground">>Editor&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--success"</span><span class="shiki-foreground">>Active&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-1)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--ghost en-btn--sm"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Edit"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                  &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">                  &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--ghost en-btn--sm"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Delete"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                  &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Select user"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Carol Davis&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>carol.d@company.com&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge"</span><span class="shiki-foreground">>Viewer&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-badge en-badge--warning"</span><span class="shiki-foreground">>Pending&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-flex"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-1)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--ghost en-btn--sm"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Edit"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                  &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">                  &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--ghost en-btn--sm"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Delete"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;</span><span class="shiki-token-string-expression">svg</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> height</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"16"</span><span class="shiki-token-function"> viewBox</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"0 0 24 24"</span><span class="shiki-token-function"> fill</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-token-function"> stroke</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"currentColor"</span><span class="shiki-token-function"> stroke-width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"2"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">                  &#x3C;</span><span class="shiki-token-string-expression">path</span><span class="shiki-token-function"> d</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"</span><span class="shiki-foreground">/></span></span>
<span class="line"><span class="shiki-foreground">                &#x3C;/</span><span class="shiki-token-string-expression">svg</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">              &#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">            &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">          &#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">        &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!0,fullscreen:!1,text:`Complete data table`,key:29,lang:`html`,injectKind:null,editable:!1,source:null},30:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">/* Override example: tighter header text */</span></span>
<span class="line"><span class="shiki-token-function">.en-table</span><span class="shiki-token-string-expression"> thead</span><span class="shiki-token-string-expression"> th</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  font-size</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-text-xs)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  letter-spacing</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 0</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:30,lang:`css`,injectKind:null,editable:!1,source:null},31:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table-container"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-table-max-height: 20rem;"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--sticky-header"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">    &#x3C;!-- thead sticks to the top when scrolling --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:31,lang:`html`,injectKind:null,editable:!1,source:null},32:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--stack"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> data-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Column Name"</span><span class="shiki-foreground">>Value&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">tbody</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:32,lang:`html`,injectKind:null,editable:!1,source:null},33:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">table</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table en-table--stack-md"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- same markup --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">table</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:33,lang:`html`,injectKind:null,editable:!1,source:null},34:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ascending"</span><span class="shiki-foreground">>Name&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>  </span><span class="shiki-token-comment">&#x3C;!-- ↑ --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"descending"</span><span class="shiki-foreground">>Date&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">> </span><span class="shiki-token-comment">&#x3C;!-- ↓ --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> aria-sort</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"none"</span><span class="shiki-foreground">>Amount&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">>     </span><span class="shiki-token-comment">&#x3C;!-- ↕ (neutral) --></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:34,lang:`html`,injectKind:null,editable:!1,source:null},35:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-constant">headers</span><span class="shiki-token-function">.forEach</span><span class="shiki-foreground">(header </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  header</span><span class="shiki-token-function">.addEventListener</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'click'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-keyword">    const</span><span class="shiki-token-constant"> currentSort</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> header</span><span class="shiki-token-function">.getAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'aria-sort'</span><span class="shiki-foreground">);</span></span>
<span class="line"><span class="shiki-token-keyword">    const</span><span class="shiki-token-constant"> newSort</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> currentSort </span><span class="shiki-token-keyword">===</span><span class="shiki-token-string-expression"> 'ascending'</span><span class="shiki-token-keyword"> ?</span><span class="shiki-token-string-expression"> 'descending'</span><span class="shiki-token-keyword"> :</span><span class="shiki-token-string-expression"> 'ascending'</span><span class="shiki-foreground">;</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">    // Reset other headers to neutral</span></span>
<span class="line"><span class="shiki-token-constant">    headers</span><span class="shiki-token-function">.forEach</span><span class="shiki-foreground">(h </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> h</span><span class="shiki-token-function">.setAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'aria-sort'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'none'</span><span class="shiki-foreground">));</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">    // Set new sort</span></span>
<span class="line"><span class="shiki-token-constant">    header</span><span class="shiki-token-function">.setAttribute</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'aria-sort'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> newSort);</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">    // Sort data...</span></span>
<span class="line"><span class="shiki-foreground">  });</span></span>
<span class="line"><span class="shiki-foreground">});</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`javascript`,key:35,lang:`javascript`,injectKind:null,editable:!1,source:null},36:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">>Row content&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">tr</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:36,lang:`html`,injectKind:null,editable:!1,source:null},37:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">th</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-sticky"</span><span class="shiki-foreground">>Actions&#x3C;/</span><span class="shiki-token-string-expression">th</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">...</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__col-sticky"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">>Edit&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:37,lang:`html`,injectKind:null,editable:!1,source:null},38:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--truncate"</span><span class="shiki-foreground">>Long text...&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">td</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-table__cell--fluid-truncate"</span><span class="shiki-foreground">>Very long text...&#x3C;/</span><span class="shiki-token-string-expression">td</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:38,lang:`html`,injectKind:null,editable:!1,source:null},39:{component:te(me,[[`render`,he]]),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">Downloadable</span><span class="shiki-token-function"> dev-url</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"components/basic/components-table.css"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!0,collapsed:!1,fullscreen:!1,text:`vue`,key:39,lang:`vue`,injectKind:null,editable:!1,source:null}},Z=[{id:`table`,text:`Table`,level:1},{id:`structure`,text:`Structure`,level:2},{id:`basic-table`,text:`Basic Table`,level:2},{id:`with-caption`,text:`With Caption`,level:2},{id:`scrollable-container`,text:`Scrollable Container`,level:2},{id:`table-variants`,text:`Table Variants`,level:2},{id:`striped-rows`,text:`Striped Rows`,level:3},{id:`bordered`,text:`Bordered`,level:3},{id:`compact`,text:`Compact`,level:3},{id:`centered`,text:`Centered`,level:3},{id:`borderless`,text:`Borderless`,level:3},{id:`hoverable-rows`,text:`Hoverable Rows`,level:3},{id:`dark-table`,text:`Dark Table`,level:3},{id:`header-colors`,text:`Header Colors`,level:3},{id:`row-and-cell-variants`,text:`Row and Cell Variants`,level:3},{id:`interactive-features`,text:`Interactive Features`,level:2},{id:`sortable-headers`,text:`Sortable Headers`,level:3},{id:`selectable-rows`,text:`Selectable Rows`,level:3},{id:`responsive-tables`,text:`Responsive Tables`,level:2},{id:`horizontal-scroll`,text:`Horizontal Scroll`,level:3},{id:`stack-by-viewport`,text:`Stack by Viewport`,level:3},{id:`stack-always`,text:`Stack Always`,level:3},{id:`how-stacking-works`,text:`How Stacking Works`,level:3},{id:`container-hook`,text:`Container Hook`,level:3},{id:`layout-cell-options`,text:`Layout & Cell Options`,level:2},{id:`sticky-columns`,text:`Sticky Columns`,level:3},{id:`text-truncation`,text:`Text Truncation`,level:3},{id:`expand-truncated-text`,text:`Expand Truncated Text`,level:3},{id:`fixed-layout`,text:`Fixed Layout`,level:3},{id:`row-expansion`,text:`Row Expansion`,level:3},{id:`busy-state`,text:`Busy State`,level:2},{id:`complex-example`,text:`Complex Example`,level:2},{id:`classes`,text:`Classes`,level:2},{id:`structure-1`,text:`Structure`,level:3},{id:`table-modifiers`,text:`Table modifiers`,level:3},{id:`header`,text:`Header`,level:3},{id:`responsive`,text:`Responsive`,level:3},{id:`rows-and-columns`,text:`Rows and columns`,level:3},{id:`cells`,text:`Cells`,level:3},{id:`busy-state-1`,text:`Busy state`,level:3},{id:`design-tokens`,text:`Design Tokens`,level:2},{id:`custom-properties`,text:`Custom properties`,level:3},{id:`usage-notes`,text:`Usage Notes`,level:2},{id:`sticky-headers`,text:`Sticky Headers`,level:3},{id:`responsive-strategies`,text:`Responsive Strategies`,level:3},{id:`sortable-tables`,text:`Sortable Tables`,level:3},{id:`selectable-rows-1`,text:`Selectable Rows`,level:3},{id:`sticky-columns-1`,text:`Sticky Columns`,level:3},{id:`text-truncation-1`,text:`Text Truncation`,level:3},{id:`accessibility`,text:`Accessibility`,level:3},{id:`browser-compatibility`,text:`Browser Compatibility`,level:2},{id:`appearance-presets`,text:`Appearance Presets`,level:2},{id:`print-high-contrast`,text:`Print & High Contrast`,level:2},{id:`see-also`,text:`See Also`,level:2}],Q=[{id:`table`,text:`Table`,level:1,children:[{id:`structure`,text:`Structure`,level:2,children:[]},{id:`basic-table`,text:`Basic Table`,level:2,children:[]},{id:`with-caption`,text:`With Caption`,level:2,children:[]},{id:`scrollable-container`,text:`Scrollable Container`,level:2,children:[]},{id:`table-variants`,text:`Table Variants`,level:2,children:[{id:`striped-rows`,text:`Striped Rows`,level:3,children:[]},{id:`bordered`,text:`Bordered`,level:3,children:[]},{id:`compact`,text:`Compact`,level:3,children:[]},{id:`centered`,text:`Centered`,level:3,children:[]},{id:`borderless`,text:`Borderless`,level:3,children:[]},{id:`hoverable-rows`,text:`Hoverable Rows`,level:3,children:[]},{id:`dark-table`,text:`Dark Table`,level:3,children:[]},{id:`header-colors`,text:`Header Colors`,level:3,children:[]},{id:`row-and-cell-variants`,text:`Row and Cell Variants`,level:3,children:[]}]},{id:`interactive-features`,text:`Interactive Features`,level:2,children:[{id:`sortable-headers`,text:`Sortable Headers`,level:3,children:[]},{id:`selectable-rows`,text:`Selectable Rows`,level:3,children:[]}]},{id:`responsive-tables`,text:`Responsive Tables`,level:2,children:[{id:`horizontal-scroll`,text:`Horizontal Scroll`,level:3,children:[]},{id:`stack-by-viewport`,text:`Stack by Viewport`,level:3,children:[]},{id:`stack-always`,text:`Stack Always`,level:3,children:[]},{id:`how-stacking-works`,text:`How Stacking Works`,level:3,children:[]},{id:`container-hook`,text:`Container Hook`,level:3,children:[]}]},{id:`layout-cell-options`,text:`Layout & Cell Options`,level:2,children:[{id:`sticky-columns`,text:`Sticky Columns`,level:3,children:[]},{id:`text-truncation`,text:`Text Truncation`,level:3,children:[]},{id:`expand-truncated-text`,text:`Expand Truncated Text`,level:3,children:[]},{id:`fixed-layout`,text:`Fixed Layout`,level:3,children:[]},{id:`row-expansion`,text:`Row Expansion`,level:3,children:[]}]},{id:`busy-state`,text:`Busy State`,level:2,children:[]},{id:`complex-example`,text:`Complex Example`,level:2,children:[]},{id:`classes`,text:`Classes`,level:2,children:[{id:`structure-1`,text:`Structure`,level:3,children:[]},{id:`table-modifiers`,text:`Table modifiers`,level:3,children:[]},{id:`header`,text:`Header`,level:3,children:[]},{id:`responsive`,text:`Responsive`,level:3,children:[]},{id:`rows-and-columns`,text:`Rows and columns`,level:3,children:[]},{id:`cells`,text:`Cells`,level:3,children:[]},{id:`busy-state-1`,text:`Busy state`,level:3,children:[]}]},{id:`design-tokens`,text:`Design Tokens`,level:2,children:[{id:`custom-properties`,text:`Custom properties`,level:3,children:[]}]},{id:`usage-notes`,text:`Usage Notes`,level:2,children:[{id:`sticky-headers`,text:`Sticky Headers`,level:3,children:[]},{id:`responsive-strategies`,text:`Responsive Strategies`,level:3,children:[]},{id:`sortable-tables`,text:`Sortable Tables`,level:3,children:[]},{id:`selectable-rows-1`,text:`Selectable Rows`,level:3,children:[]},{id:`sticky-columns-1`,text:`Sticky Columns`,level:3,children:[]},{id:`text-truncation-1`,text:`Text Truncation`,level:3,children:[]},{id:`accessibility`,text:`Accessibility`,level:3,children:[]}]},{id:`browser-compatibility`,text:`Browser Compatibility`,level:2,children:[]},{id:`appearance-presets`,text:`Appearance Presets`,level:2,children:[]},{id:`print-high-contrast`,text:`Print & High Contrast`,level:2,children:[]},{id:`see-also`,text:`See Also`,level:2,children:[]}]}],ge={css:[],js:[],cleanup:[]},$=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>l(`div`,{class:n},[e.meta.isLive?l(re,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:l(ne,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),_e=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/components/basic/table.md`,setup(){i(`vlm-toc`,{flat:Z,tree:Q}),u(()=>d(Z,Q)),c(()=>d([],[]));let e=ee(ge);return i(`vlm-inject`,e),u(()=>e.mount()),o(()=>e.beforeUnmount()),c(()=>e.unmounted()),()=>l(`div`,{class:`vlm-page`},[l(`div`,{class:`vlm-content`},[l(`div`,{class:`vlm-md`,innerHTML:`<h1 id="table">Table<a class="header-link" href="#table" title="Link to this heading"></a></h1>
<p>Styled data table with sorting indicators, optional sticky headers and columns, row tints and selection, a busy overlay, and responsive stacking.</p>
<blockquote>
<p>Need row selection bars, filtering, resizable columns, grouping, inline editing, or other data-grid features? See <a href="/docs/encss/components/extended/table-advanced">Advanced Table</a>, which extends this component.</p>
</blockquote>
<h2 id="structure">Structure<a class="header-link" href="#structure" title="Link to this heading"></a></h2>
<p>Every table feature builds on one DOM contract. It is the structure the <code>&lt;ENTable&gt;</code> component renders, and the one recommended for plain HTML:</p>
<pre><code class="language-text">.en-table-wrapper           optional frame (Advanced Table): toolbar, bulk bar, pagination
└─ .en-table__stage         non-scrolling box (position: relative), anchors the busy overlay
   ├─ .en-table-container   scroller: sticky header and horizontal scroll
   │  └─ table.en-table
   └─ .en-table__busy-overlay
</code></pre>
<ul>
<li><code>.en-table__stage</code> never scrolls, so the busy overlay stays in place while the table scrolls inside <code>.en-table-container</code>.</li>
<li>A plain <code>&lt;table class=&quot;en-table&quot;&gt;</code> still works on its own. Add the stage and the container only when you need scrolling, a sticky header, or the busy overlay.</li>
<li>Row color is driven by <strong>one</strong> custom property, <code>--en-table-row-bg</code>. Striped, variant, hover, and selected rules only reassign it, and sticky cells read the same property, so a pinned cell always matches its row.</li>
</ul>
<h2 id="basic-table">Basic Table<a class="header-link" href="#basic-table" title="Link to this heading"></a></h2>
<p>`}),l($,{key:0,meta:X[0]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="with-caption">With Caption<a class="header-link" href="#with-caption" title="Link to this heading"></a></h2>
<p>`}),l($,{key:1,meta:X[1]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="scrollable-container">Scrollable Container<a class="header-link" href="#scrollable-container" title="Link to this heading"></a></h2>
<p><code>.en-table-container</code> is the scroller. It scrolls on both axes (<code>overflow: auto</code>) with a default <code>max-height</code> of <code>32rem</code>; change it with <code>--en-table-max-height</code>. The header only stays pinned when the table also has <code>.en-table--sticky-header</code>. Without that class the header scrolls away with the rows.</p>
<p>`}),l($,{key:2,meta:X[2]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>For a header with two rows, the second row sticks below the first. The component measures the first row into <code>--en-table-header-row-1</code>; in plain HTML set it yourself to the height of the first header row:</p>
<p>`}),l($,{key:3,meta:X[3]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="table-variants">Table Variants<a class="header-link" href="#table-variants" title="Link to this heading"></a></h2>
<h3 id="striped-rows">Striped Rows<a class="header-link" href="#striped-rows" title="Link to this heading"></a></h3>
<p>`}),l($,{key:4,meta:X[4]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="bordered">Bordered<a class="header-link" href="#bordered" title="Link to this heading"></a></h3>
<p>`}),l($,{key:5,meta:X[5]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="compact">Compact<a class="header-link" href="#compact" title="Link to this heading"></a></h3>
<p>`}),l($,{key:6,meta:X[6]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="centered">Centered<a class="header-link" href="#centered" title="Link to this heading"></a></h3>
<p>`}),l($,{key:7,meta:X[7]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="borderless">Borderless<a class="header-link" href="#borderless" title="Link to this heading"></a></h3>
<p>Removes every cell border.</p>
<p>`}),l($,{key:8,meta:X[8]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="hoverable-rows">Hoverable Rows<a class="header-link" href="#hoverable-rows" title="Link to this heading"></a></h3>
<p>Row hover is opt-in. Add <code>.en-table--hover</code> to tint the row under the pointer.</p>
<p>`}),l($,{key:9,meta:X[9]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="dark-table">Dark Table<a class="header-link" href="#dark-table" title="Link to this heading"></a></h3>
<p><code>.en-table--dark</code> switches the color scheme on the table element. Design tokens use <code>light-dark()</code>, so every token below the table re-resolves to its dark value, whatever the page theme is.</p>
<p>`}),l($,{key:10,meta:X[10]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="header-colors">Header Colors<a class="header-link" href="#header-colors" title="Link to this heading"></a></h3>
<p>Colors the header row only. Choose one of <code>--primary</code>, <code>--secondary</code>, <code>--success</code>, <code>--danger</code>, <code>--warning</code>, <code>--info</code>. These classes live in this file, so they work without Advanced Table.</p>
<p>`}),l($,{key:11,meta:X[11]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Each class only sets three custom properties, so you can build your own color without a new class:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Property</th>
<th>Default</th>
<th>Controls</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>--en-table-head-bg</code></td>
<td><code>var(--en-bg-subtle)</code></td>
<td>Header background</td>
</tr>
<tr>
<td><code>--en-table-head-fg</code></td>
<td><code>var(--en-text-muted)</code></td>
<td>Header text</td>
</tr>
<tr>
<td><code>--en-table-head-border</code></td>
<td><code>var(--en-border)</code></td>
<td>Line under the header</td>
</tr>
</tbody>
</table>
</div><p>`}),l($,{key:12,meta:X[12]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="row-and-cell-variants">Row and Cell Variants<a class="header-link" href="#row-and-cell-variants" title="Link to this heading"></a></h3>
<p>Tint a single row or cell with <code>.en-table__variant-*</code>. The classes work on <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code>. Choose one of <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code>, <code>light</code>, <code>dark</code>. (<code>dark</code> also switches the text color to <code>--en-bg</code>.)</p>
<p>`}),l($,{key:13,meta:X[13]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>When several row colors apply, the later one wins: striped &lt; variant &lt; hover &lt; selected. Do not rely on color alone; keep a text label in the row, as above.</p>
<h2 id="interactive-features">Interactive Features<a class="header-link" href="#interactive-features" title="Link to this heading"></a></h2>
<h3 id="sortable-headers">Sortable Headers<a class="header-link" href="#sortable-headers" title="Link to this heading"></a></h3>
<p>`}),l($,{key:14,meta:X[14]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Sort indicators:</strong></p>
<ul>
<li><code>aria-sort=&quot;none&quot;</code> (or an empty <code>aria-sort</code>): Shows neutral indicator <code>↕</code> (opacity 0.4)</li>
<li><code>aria-sort=&quot;ascending&quot;</code>: Shows up arrow <code>↑</code></li>
<li><code>aria-sort=&quot;descending&quot;</code>: Shows down arrow <code>↓</code></li>
<li>No <code>aria-sort</code> attribute: no indicator and no pointer cursor, so the column is not presented as sortable</li>
</ul>
<p><strong>Sort button.</strong> To make a sortable header keyboard-operable, put a <code>.en-table__th-button</code> inside the <code>&lt;th&gt;</code>. The cell stays a <code>columnheader</code>, so <code>aria-sort</code> remains valid.</p>
<p>`}),l($,{key:15,meta:X[15]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li>The button fills the cell (<code>inline-size: 100%</code>) and is laid out as a flex row with <code>justify-content: space-between</code>, so an icon placed after the label sits at the end of the cell.</li>
<li>It has no chrome of its own: it inherits the header font, letter spacing, and text case, and shows a <code>:focus-visible</code> ring from <code>--en-ring-width</code> and <code>--en-ring-color</code>.</li>
<li><code>.en-table__th-content</code> is the same flex layout for a header that holds a label and icons but is not a button.</li>
</ul>
<h3 id="selectable-rows">Selectable Rows<a class="header-link" href="#selectable-rows" title="Link to this heading"></a></h3>
<p>`}),l($,{key:16,meta:X[16]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Automatic highlighting:</strong></p>
<ul>
<li>Rows with checked checkboxes get <code>--en-table-row-bg: var(--en-primary-subtle)</code></li>
<li>Uses <code>:has(input[type=&quot;checkbox&quot;]:checked)</code> selector</li>
<li>No JavaScript required</li>
<li>With <code>.en-table--hover</code>, a checked row also gets a slightly stronger tint on hover</li>
</ul>
<p><strong>Selection that is not a checkbox.</strong> Add <code>.en-table__row--selected</code> to the <code>&lt;tr&gt;</code>. It gives the same highlight and works in browsers without <code>:has()</code>. Add <code>.en-table__row--selectable</code> to rows that toggle on click, which only sets a pointer cursor.</p>
<p>`}),l($,{key:17,meta:X[17]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="responsive-tables">Responsive Tables<a class="header-link" href="#responsive-tables" title="Link to this heading"></a></h2>
<p>Pick one strategy per table:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Strategy</th>
<th>Class</th>
<th>Trigger</th>
<th>Best for</th>
</tr>
</thead>
<tbody>
<tr>
<td>Horizontal scroll</td>
<td><code>.en-table-responsive</code> (wrapper)</td>
<td>Content wider than the wrapper</td>
<td>Wide tables where every column must stay visible</td>
</tr>
<tr>
<td>Stack, always</td>
<td><code>.en-table--stack</code></td>
<td>Every width</td>
<td>Narrow layouts such as cards and sidebars</td>
</tr>
<tr>
<td>Stack, by viewport</td>
<td><code>.en-table--stack-sm</code> … <code>-xxl</code></td>
<td>Viewport below the breakpoint</td>
<td>Full-page tables</td>
</tr>
<tr>
<td>Container hook</td>
<td><code>.en-table--responsive</code></td>
<td>None by itself</td>
<td>Your own <code>@container table</code> rules</td>
</tr>
</tbody>
</table>
</div><blockquote>
<p><strong>Changed.</strong> <code>.en-table--stack</code> now stacks at every width; it used to stack only at viewport ≤ 767px. Use <code>.en-table--stack-md</code> for that behavior. <code>.en-table--responsive</code> no longer stacks the table at 600px on its own; it only declares a size container (see <a href="#container-hook">Container Hook</a>).</p>
</blockquote>
<h3 id="horizontal-scroll">Horizontal Scroll<a class="header-link" href="#horizontal-scroll" title="Link to this heading"></a></h3>
<p>Wrap the table in <code>.en-table-responsive</code> to scroll sideways instead of reflowing. Unlike <code>.en-table-container</code>, this wrapper has no <code>max-height</code>, so it scrolls horizontally only.</p>
<p>`}),l($,{key:18,meta:X[18]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="stack-by-viewport">Stack by Viewport<a class="header-link" href="#stack-by-viewport" title="Link to this heading"></a></h3>
<p><code>.en-table--stack-{bp}</code> turns the table into a card layout when the viewport is narrower than the breakpoint (<code>max-width</code> media query):</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Stacks below</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table--stack-sm</code></td>
<td>480px</td>
</tr>
<tr>
<td><code>.en-table--stack-md</code></td>
<td>768px</td>
</tr>
<tr>
<td><code>.en-table--stack-lg</code></td>
<td>1024px</td>
</tr>
<tr>
<td><code>.en-table--stack-xl</code></td>
<td>1280px</td>
</tr>
<tr>
<td><code>.en-table--stack-xxl</code></td>
<td>1536px</td>
</tr>
</tbody>
</table>
</div><p>`}),l($,{key:19,meta:X[19]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Note:</strong> Resize the browser to see the effect, or view it on a mobile device.</p>
<h3 id="stack-always">Stack Always<a class="header-link" href="#stack-always" title="Link to this heading"></a></h3>
<p><code>.en-table--stack</code> uses the same card layout at every width. Use it for a table inside a narrow card, modal, or sidebar, where the viewport width says nothing about the space available:</p>
<p>`}),l($,{key:20,meta:X[20]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="how-stacking-works">How Stacking Works<a class="header-link" href="#how-stacking-works" title="Link to this heading"></a></h3>
<p>All stack classes share one layout:</p>
<ul>
<li><code>&lt;thead&gt;</code> is hidden (<code>display: none</code>), so the visible labels come only from the cells.</li>
<li>Each <code>&lt;tr&gt;</code> becomes a bordered, rounded card. Each <code>&lt;td&gt;</code> and each <code>&lt;th scope=&quot;row&quot;&gt;</code> becomes a flex row.</li>
<li>A cell’s label comes from <code>data-label</code>, shown in a <code>::before</code> (bold, muted, minimum width <code>8rem</code>). For a label you need to mark up yourself, put an element with <code>.en-table__stack-label</code> inside the cell instead. It is hidden outside the stacked layout. Use one or the other in a cell, not both.</li>
<li><code>.en-table__hide-on-stack</code> hides an element, such as a column of icons, in the stacked layout only.</li>
<li>Sticky columns lose their pinning when stacked (<code>position: static</code>).</li>
</ul>
<h3 id="container-hook">Container Hook<a class="header-link" href="#container-hook" title="Link to this heading"></a></h3>
<p><code>.en-table--responsive</code> sets <code>container-type: inline-size</code> and <code>container-name: table</code> on the table, so descendants can respond to the table’s own width. With the default <code>width: 100%</code> that equals the width of its parent. The class adds no layout rules by itself; write the query you need:</p>
<p>`}),l($,{key:21,meta:X[21]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>A container query can only style descendants of the container, so these rules target cells, never the table itself.</p>
<h2 id="layout-cell-options">Layout &amp; Cell Options<a class="header-link" href="#layout-cell-options" title="Link to this heading"></a></h2>
<h3 id="sticky-columns">Sticky Columns<a class="header-link" href="#sticky-columns" title="Link to this heading"></a></h3>
<p><code>.en-table__col-sticky</code> pins a cell to the end edge, which suits an actions column. <code>.en-table__col--sticky-start</code> pins to the start edge. Both live in this file and work in either text direction. Keep a column visible during horizontal scroll:</p>
<p>`}),l($,{key:22,meta:X[22]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>To pin more than one column on a side, give each pinned cell its distance from the edge in <code>--en-col-offset</code>: the total width of the pinned columns between that cell and the edge. The component measures and writes this per cell; in plain HTML set it inline.</p>
<p>`}),l($,{key:23,meta:X[23]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>For a second column pinned at the start without computing offsets, see <a href="/docs/encss/table-advanced">Advanced Table</a>.</p>
<h3 id="text-truncation">Text Truncation<a class="header-link" href="#text-truncation" title="Link to this heading"></a></h3>
<p>`}),l($,{key:24,meta:X[24]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="expand-truncated-text">Expand Truncated Text<a class="header-link" href="#expand-truncated-text" title="Link to this heading"></a></h3>
<p>Add <code>.en-table__cell--expand-inline</code> to a truncated cell to reveal the full text on hover or keyboard focus. Add <code>tabindex=&quot;0&quot;</code> so the cell can receive focus.</p>
<p>`}),l($,{key:25,meta:X[25]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="fixed-layout">Fixed Layout<a class="header-link" href="#fixed-layout" title="Link to this heading"></a></h3>
<p>Equal column widths regardless of content:</p>
<p>`}),l($,{key:26,meta:X[26]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="row-expansion">Row Expansion<a class="header-link" href="#row-expansion" title="Link to this heading"></a></h3>
<p><code>.en-table__row--expansion</code> removes the padding and border from the cells of a detail row, so the content fills the row edge to edge. Pair it with a single <code>&lt;td colspan&gt;</code>. The toggle button, icons, and indentation are part of <a href="/docs/encss/table-advanced">Advanced Table</a>.</p>
<p>`}),l($,{key:27,meta:X[27]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="busy-state">Busy State<a class="header-link" href="#busy-state" title="Link to this heading"></a></h2>
<p>While data loads, cover the table with <code>.en-table__busy-overlay</code>. It is a sibling of the scroller inside <code>.en-table__stage</code>, so it fills the whole stage (<code>inset: 0</code>), blurs what is behind it, and does not scroll away. The overlay lets clicks through (<code>pointer-events: none</code>) except on its message box.</p>
<p>`}),l($,{key:28,meta:X[28]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table__stage</code></td>
<td>Non-scrolling positioning box that anchors the overlay</td>
</tr>
<tr>
<td><code>.en-table__busy-overlay</code></td>
<td>Full-stage scrim with blur; sits at <code>--en-z-overlay</code></td>
</tr>
<tr>
<td><code>.en-table__busy-overlay__content</code></td>
<td>Centered message box with surface background and shadow</td>
</tr>
<tr>
<td><code>.en-table__busy-row</code></td>
<td>Centered loading message for a single full-width cell. Put it on an element inside the <code>&lt;td&gt;</code>, not on the <code>&lt;td&gt;</code> itself</td>
</tr>
<tr>
<td><code>.en-table__spinner--sm</code></td>
<td>Small size (<code>1rem</code>, 2px border) for a spinner placed in the table</td>
</tr>
</tbody>
</table>
</div><p>Set <code>aria-busy=&quot;true&quot;</code> on the table while loading and remove it when the data arrives. For skeleton rows and the dimmed <code>.en-table--loading</code> state, see <a href="/docs/encss/table-advanced">Advanced Table</a>.</p>
<h2 id="complex-example">Complex Example<a class="header-link" href="#complex-example" title="Link to this heading"></a></h2>
<p>`}),l($,{key:29,meta:X[29]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="classes">Classes<a class="header-link" href="#classes" title="Link to this heading"></a></h2>
<h3 id="structure-1">Structure<a class="header-link" href="#structure-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table</code></td>
<td>Base table with styling</td>
</tr>
<tr>
<td><code>.en-table__stage</code></td>
<td>Non-scrolling box (<code>position: relative</code>) around the scroller; anchors the busy overlay</td>
</tr>
<tr>
<td><code>.en-table-container</code></td>
<td>Scroller with <code>overflow: auto</code> and <code>max-height: var(--en-table-max-height, 32rem)</code></td>
</tr>
<tr>
<td><code>.en-table-responsive</code></td>
<td>Horizontal-scroll wrapper (defined in <code>layout.css</code>)</td>
</tr>
</tbody>
</table>
</div><h3 id="table-modifiers">Table modifiers<a class="header-link" href="#table-modifiers" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table--striped</code></td>
<td>Zebra striping for odd rows</td>
</tr>
<tr>
<td><code>.en-table--hover</code></td>
<td>Tint the row under the pointer (opt-in)</td>
</tr>
<tr>
<td><code>.en-table--bordered</code></td>
<td>Add borders between columns</td>
</tr>
<tr>
<td><code>.en-table--borderless</code></td>
<td>Remove all cell borders</td>
</tr>
<tr>
<td><code>.en-table--compact</code></td>
<td>Tighter padding for dense data</td>
</tr>
<tr>
<td><code>.en-table--centered</code></td>
<td>Center-align all cells</td>
</tr>
<tr>
<td><code>.en-table--fixed</code></td>
<td>Fixed table layout (equal column widths)</td>
</tr>
<tr>
<td><code>.en-table--dark</code></td>
<td>Dark color scheme for this table only</td>
</tr>
<tr>
<td><code>.en-table--sticky-header</code></td>
<td>Pin the header cells; needs a bounded scroller</td>
</tr>
<tr>
<td><code>.en-table--primary</code> <code>--secondary</code> <code>--success</code> <code>--danger</code> <code>--warning</code> <code>--info</code></td>
<td>Colored header row</td>
</tr>
</tbody>
</table>
</div><h3 id="header">Header<a class="header-link" href="#header" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table__th-button</code></td>
<td>Full-width sort button inside a <code>&lt;th&gt;</code>, with a focus ring</td>
</tr>
<tr>
<td><code>.en-table__th-content</code></td>
<td>Flex layout for header label and icons</td>
</tr>
</tbody>
</table>
</div><h3 id="responsive">Responsive<a class="header-link" href="#responsive" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table--stack</code></td>
<td>Card layout at every width</td>
</tr>
<tr>
<td><code>.en-table--stack-sm</code> <code>-md</code> <code>-lg</code> <code>-xl</code> <code>-xxl</code></td>
<td>Card layout below 480 / 768 / 1024 / 1280 / 1536px (viewport)</td>
</tr>
<tr>
<td><code>.en-table--responsive</code></td>
<td>Declares a size container named <code>table</code>; no layout rules of its own</td>
</tr>
<tr>
<td><code>.en-table__stack-label</code></td>
<td>Label element for stacked cells (alternative to <code>data-label</code>)</td>
</tr>
<tr>
<td><code>.en-table__hide-on-stack</code></td>
<td>Hidden in the stacked layout</td>
</tr>
</tbody>
</table>
</div><h3 id="rows-and-columns">Rows and columns<a class="header-link" href="#rows-and-columns" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table__variant-primary</code> <code>-secondary</code> <code>-success</code> <code>-danger</code> <code>-warning</code> <code>-info</code> <code>-light</code> <code>-dark</code></td>
<td>Tint a <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, or <code>&lt;td&gt;</code></td>
</tr>
<tr>
<td><code>.en-table__row--selected</code></td>
<td>Selected row (highlight; outline in forced-colors mode)</td>
</tr>
<tr>
<td><code>.en-table__row--selectable</code></td>
<td>Pointer cursor on a row that toggles selection</td>
</tr>
<tr>
<td><code>.en-table__row--expansion</code></td>
<td>Detail row with unpadded, borderless cell</td>
</tr>
<tr>
<td><code>.en-table__col--sticky-start</code></td>
<td>Column pinned to the start edge</td>
</tr>
<tr>
<td><code>.en-table__col-sticky</code></td>
<td>Column pinned to the end edge (typically actions)</td>
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
<td><code>.en-table__cell--truncate</code></td>
<td>Truncate cell content with ellipsis</td>
</tr>
<tr>
<td><code>.en-table__cell--fluid-truncate</code></td>
<td>Truncate with max-width constraint</td>
</tr>
<tr>
<td><code>.en-table__cell--expand-inline</code></td>
<td>Expand a truncated cell on hover or focus (combine with a truncate class)</td>
</tr>
<tr>
<td><code>.en-table__truncate</code></td>
<td>Alias of <code>.en-table__cell--truncate</code></td>
</tr>
<tr>
<td><code>.en-table__truncate--fluid</code></td>
<td>Alias of <code>.en-table__cell--fluid-truncate</code></td>
</tr>
</tbody>
</table>
</div><h3 id="busy-state-1">Busy state<a class="header-link" href="#busy-state-1" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-table__busy-overlay</code>, <code>.en-table__busy-overlay__content</code></td>
<td>Overlay and its message box</td>
</tr>
<tr>
<td><code>.en-table__busy-row</code></td>
<td>Centered loading message in a single cell</td>
</tr>
<tr>
<td><code>.en-table__spinner--sm</code></td>
<td>Small spinner size</td>
</tr>
</tbody>
</table>
</div><p>Attributes: <code>aria-sort</code> on <code>&lt;th&gt;</code> (sort indicator) and <code>data-label</code> on <code>&lt;td&gt;</code> / <code>&lt;th scope=&quot;row&quot;&gt;</code> (label in stacked layouts).</p>
<h2 id="design-tokens">Design Tokens<a class="header-link" href="#design-tokens" title="Link to this heading"></a></h2>
<p>The table uses these tokens, so it follows the theme, density, radius, elevation, and contrast presets automatically.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Token</th>
<th>Used for</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>--en-text-sm</code>, <code>--en-text-xs</code></td>
<td>Body and caption text, header text</td>
</tr>
<tr>
<td><code>--en-space-1</code> … <code>--en-space-4</code></td>
<td>Cell padding (<code>--compact</code> uses 2 / 3), caption gap, stacked card gap</td>
</tr>
<tr>
<td><code>--en-border</code>, <code>--en-border-width</code>, <code>--en-border-style</code></td>
<td>Row and column dividers; stacked card border (falls back to <code>1px solid</code>)</td>
</tr>
<tr>
<td><code>--en-bg-subtle</code></td>
<td>Header background, striped rows, hover base, <code>light</code> variant, busy scrim</td>
</tr>
<tr>
<td><code>--en-bg-surface</code></td>
<td>Table surface (<code>--en-table-bg</code>), variant tint base, busy message box</td>
</tr>
<tr>
<td><code>--en-primary</code>, <code>--en-secondary</code>, <code>--en-success</code>, <code>--en-danger</code>, <code>--en-warning</code>, <code>--en-info</code> and their <code>--en-fg-*</code> pairs</td>
<td>Header colors, row and cell variants</td>
</tr>
<tr>
<td><code>--en-primary-subtle</code></td>
<td>Selected-row highlight</td>
</tr>
<tr>
<td><code>--en-text</code>, <code>--en-bg</code></td>
<td>Hover tint, <code>dark</code> variant</td>
</tr>
<tr>
<td><code>--en-text-muted</code></td>
<td>Header text, caption, stack labels, busy text</td>
</tr>
<tr>
<td><code>--en-radius-md</code></td>
<td>Stacked card and busy message corners</td>
</tr>
<tr>
<td><code>--en-shadow-md</code></td>
<td>Busy message box</td>
</tr>
<tr>
<td><code>--en-blur-sm</code></td>
<td>Busy overlay blur</td>
</tr>
<tr>
<td><code>--en-ring-width</code>, <code>--en-ring-color</code></td>
<td>Focus ring of <code>.en-table__th-button</code></td>
</tr>
<tr>
<td><code>--en-transition</code></td>
<td>Row background transition</td>
</tr>
<tr>
<td><code>--en-z-sticky</code></td>
<td>Sticky header and sticky columns (200); pinned header cells use +1</td>
</tr>
<tr>
<td><code>--en-z-overlay</code></td>
<td>Busy overlay (400)</td>
</tr>
</tbody>
</table>
</div><h3 id="custom-properties">Custom properties<a class="header-link" href="#custom-properties" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Property</th>
<th>Default</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>--en-table-bg</code></td>
<td><code>var(--en-bg-surface)</code></td>
<td>Table surface; fallback for sticky-column background</td>
</tr>
<tr>
<td><code>--en-table-row-bg</code></td>
<td><code>transparent</code></td>
<td>Row background. Reassigned by striped, variant, hover, and selected rules; read by sticky cells</td>
</tr>
<tr>
<td><code>--en-table-variant-bg</code></td>
<td>not set</td>
<td>Tint set by <code>.en-table__variant-*</code>; also used for pinned header cells</td>
</tr>
<tr>
<td><code>--en-table-head-bg</code></td>
<td><code>var(--en-bg-subtle)</code></td>
<td>Header background</td>
</tr>
<tr>
<td><code>--en-table-head-fg</code></td>
<td><code>var(--en-text-muted)</code></td>
<td>Header text</td>
</tr>
<tr>
<td><code>--en-table-head-border</code></td>
<td><code>var(--en-border)</code></td>
<td>Line under the header</td>
</tr>
<tr>
<td><code>--en-table-max-height</code></td>
<td><code>32rem</code></td>
<td><code>max-height</code> of <code>.en-table-container</code></td>
</tr>
<tr>
<td><code>--en-table-header-row-1</code></td>
<td><code>0px</code></td>
<td>Offset of the second sticky header row (height of the first)</td>
</tr>
<tr>
<td><code>--en-col-offset</code></td>
<td><code>0</code></td>
<td>Distance of a sticky column from its edge</td>
</tr>
</tbody>
</table>
</div><p>All rules live in <code>@layer en-components</code>, except the forced-colors selected-row outline, which is in <code>@layer en-utilities</code>. Your own CSS written without <code>@layer</code> always wins, without needing higher specificity.</p>
<p>`}),l($,{key:30,meta:X[30]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="usage-notes">Usage Notes<a class="header-link" href="#usage-notes" title="Link to this heading"></a></h2>
<h3 id="sticky-headers">Sticky Headers<a class="header-link" href="#sticky-headers" title="Link to this heading"></a></h3>
<p>Header stickiness is opt-in. Add <code>.en-table--sticky-header</code> to the table and wrap it in a scroller with a bounded height. <code>.en-table-container</code> is the ready-made one:</p>
<p>`}),l($,{key:31,meta:X[31]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Properties:</strong></p>
<ul>
<li>Header cells get <code>position: sticky; top: 0</code> and <code>z-index: var(--en-z-sticky)</code> (200)</li>
<li><code>.en-table-container</code>: <code>overflow: auto</code> and <code>max-height: var(--en-table-max-height, 32rem)</code></li>
<li>Without a scrolling ancestor of bounded height the header has nothing to stick to, so it looks like a normal header</li>
<li>With two header rows, the second row sticks at <code>top: var(--en-table-header-row-1, 0px)</code>. The component measures the first row; in plain HTML set the variable to the first row’s height</li>
</ul>
<h3 id="responsive-strategies">Responsive Strategies<a class="header-link" href="#responsive-strategies" title="Link to this heading"></a></h3>
<p><strong>Option 1: Stack at every width</strong>
`}),l($,{key:32,meta:X[32]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li>Use for tables in cards, modals, and sidebars</li>
</ul>
<p><strong>Option 2: Stack below a viewport breakpoint</strong>
`}),l($,{key:33,meta:X[33]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li>Pick <code>-sm</code> (480px), <code>-md</code> (768px), <code>-lg</code> (1024px), <code>-xl</code> (1280px) or <code>-xxl</code> (1536px)</li>
<li>Use for full-page tables</li>
</ul>
<p><strong>Option 3: Horizontal scroll</strong></p>
<ul>
<li>Wrap the table in <code>.en-table-responsive</code> and keep every column</li>
</ul>
<p><strong>Option 4: Container query of your own</strong></p>
<ul>
<li>Add <code>.en-table--responsive</code> and write <code>@container table (…)</code> rules; see <a href="#container-hook">Container Hook</a></li>
</ul>
<p><strong>Notes for the stacked layouts:</strong></p>
<ul>
<li><code>&lt;thead&gt;</code> is hidden with <code>display: none</code>, so the visible labels come only from <code>data-label</code> or <code>.en-table__stack-label</code></li>
<li><code>&lt;th scope=&quot;row&quot;&gt;</code> is laid out like a <code>&lt;td&gt;</code> and can carry <code>data-label</code> too</li>
<li>Give cells without a visible header (checkbox, actions) a short <code>data-label</code>, or an empty one to show no label</li>
<li>Use one stack class per table. <code>.en-table--stack</code> already stacks at every width, so combining it with a breakpoint class has no effect</li>
</ul>
<h3 id="sortable-tables">Sortable Tables<a class="header-link" href="#sortable-tables" title="Link to this heading"></a></h3>
<p>Add <code>aria-sort</code> attribute for sort indicators:</p>
<p>`}),l($,{key:34,meta:X[34]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Implement sorting with JavaScript:</strong>
`}),l($,{key:35,meta:X[35]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><strong>Keyboard access:</strong> the table only adds a pointer cursor and an indicator to <code>th[aria-sort]</code>; it does not make the header focusable. Put a <code>.en-table__th-button</code> inside the <code>&lt;th&gt;</code> (recommended; it keeps the cell a <code>columnheader</code> and shows a focus ring) and attach the click handler to the button, or add <code>tabindex=&quot;0&quot;</code> with an Enter/Space handler.</p>
<h3 id="selectable-rows-1">Selectable Rows<a class="header-link" href="#selectable-rows-1" title="Link to this heading"></a></h3>
<p>Automatic highlighting with <code>:has()</code>:</p>
<p>`}),l($,{key:36,meta:X[36]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li>Checked rows get <code>--en-table-row-bg: var(--en-primary-subtle)</code></li>
<li>No JavaScript required for highlighting</li>
<li>Add change event listeners for selection logic</li>
<li>For browsers without <code>:has()</code>, or for selection that is not driven by a checkbox, add <code>.en-table__row--selected</code> to the <code>&lt;tr&gt;</code> (it is part of this file). The two rules are kept separate on purpose, so an unsupported <code>:has()</code> never drops the class rule</li>
<li>Add <code>.en-table--hover</code> to give selected rows a hover tint. Hover is opt-in for every row</li>
<li>In forced-colors mode <code>.en-table__row--selected</code> gets a <code>Highlight</code> outline, since the fill color is not shown</li>
</ul>
<h3 id="sticky-columns-1">Sticky Columns<a class="header-link" href="#sticky-columns-1" title="Link to this heading"></a></h3>
<p>`}),l($,{key:37,meta:X[37]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li><code>.en-table__col-sticky</code> sticks to <code>inset-inline-end: var(--en-col-offset, 0)</code> (right in LTR, left in RTL); <code>.en-table__col--sticky-start</code> sticks to <code>inset-inline-start</code> the same way</li>
<li>Uses <code>z-index: var(--en-z-sticky)</code> (200)</li>
<li>A 1px divider in <code>--en-border</code> marks the inner edge of the pinned cell</li>
<li>The cell background is <code>--en-table-row-bg</code>, falling back to <code>--en-table-bg</code>, so it is opaque but still follows striped, variant, hover, and selected row colors</li>
<li>Pinned header cells keep the header color (<code>--en-table-variant-bg</code>, then <code>--en-table-head-bg</code>) and sit one level above pinned body cells (<code>--en-z-sticky + 1</code>), so the corner cell stays on top</li>
<li>Several pinned columns on one side need <code>--en-col-offset</code> on each cell (see <a href="#sticky-columns">Sticky Columns</a>)</li>
<li>In the stacked layout, pinned columns become <code>position: static</code></li>
</ul>
<h3 id="text-truncation-1">Text Truncation<a class="header-link" href="#text-truncation-1" title="Link to this heading"></a></h3>
<p>`}),l($,{key:38,meta:X[38]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li><code>--truncate</code>: Simple truncation with ellipsis</li>
<li><code>--fluid-truncate</code>: Width-constrained truncation (width: 100%; max-width: 0)</li>
<li><code>.en-table__truncate</code> and <code>.en-table__truncate--fluid</code> are aliases of the two classes above</li>
<li>Add <code>.en-table__cell--expand-inline</code> and <code>tabindex=&quot;0&quot;</code> to reveal the full text on hover or focus. The rule sets <code>outline: none</code> on hover and focus, so the expanded text is the only focus cue; add your own focus style if that is not enough</li>
</ul>
<h3 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h3>
<ul>
<li>Use <code>&lt;caption&gt;</code> for table description</li>
<li>Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> for structure</li>
<li>Add <code>scope=&quot;col&quot;</code> or <code>scope=&quot;row&quot;</code> to <code>&lt;th&gt;</code> elements</li>
<li>Use <code>aria-sort</code> for sortable columns</li>
<li>Add <code>aria-label</code> to icon-only buttons</li>
<li>Ensure 4.5:1 contrast ratio for text</li>
<li>Use <code>data-label</code> for responsive stacked views</li>
<li>Make sortable headers keyboard-operable (a <code>.en-table__th-button</code> inside the <code>&lt;th&gt;</code>)</li>
<li>Do not rely on color alone: pair <code>.en-badge</code> colors and <code>.en-table__variant-*</code> tints with visible text</li>
<li>Set <code>aria-busy=&quot;true&quot;</code> on the table while the busy overlay is shown, and give the message <code>role=&quot;status&quot;</code></li>
<li>Wrap a horizontally scrolling table in a focusable region (<code>tabindex=&quot;0&quot;</code>, <code>role=&quot;region&quot;</code>, <code>aria-label</code>) so keyboard users can scroll it</li>
<li><code>&lt;tfoot&gt;</code> is semantic markup only in this component; its visual styling is part of <a href="/docs/encss/table-advanced">Advanced Table</a></li>
</ul>
<h2 id="browser-compatibility">Browser Compatibility<a class="header-link" href="#browser-compatibility" title="Link to this heading"></a></h2>
<p><strong>Container queries</strong> (<code>.en-table--responsive</code> and your own <code>@container table</code> rules):</p>
<ul>
<li>Baseline 2023</li>
<li>Chrome 105+, Firefox 110+, Safari 16+</li>
<li>Without support the table keeps its normal layout; the class alone changes nothing visible</li>
</ul>
<p><strong><code>color-mix()</code></strong> (hover tint, selected-row hover, row and cell variants, header borders of the color variants):</p>
<ul>
<li>Baseline 2023</li>
<li>Chrome 111+, Firefox 113+, Safari 16.2+</li>
<li>Without support those tints and borders are dropped</li>
</ul>
<p><strong><code>:has()</code> selector</strong> (selected row highlighting):</p>
<ul>
<li>Baseline 2023</li>
<li>Chrome 105+, Firefox 121+, Safari 15.4+</li>
<li>Gracefully degrades (no automatic highlighting)</li>
</ul>
<h2 id="appearance-presets">Appearance Presets<a class="header-link" href="#appearance-presets" title="Link to this heading"></a></h2>
<p>Tables have no preset-specific CSS. They respond because they read design tokens. Put the attributes on <code>&lt;html&gt;</code>:</p>
<ul>
<li><code>data-density=&quot;compact|comfortable|spacious&quot;</code> scales <code>--en-space-*</code>, so cell padding follows. Requires <code>tokens-scale.css</code> (loaded by <code>en-extra.css</code>). This is separate from the <code>.en-table--compact</code> class, which changes one table only.</li>
<li><code>data-radius=&quot;sharp|soft|pill&quot;</code> changes the corner radius of stacked cards and of the busy message box.</li>
<li><code>data-contrast=&quot;more&quot;</code> strengthens <code>--en-border</code> and <code>--en-text-muted</code>, which the table uses for dividers and header text.</li>
<li><code>data-motion=&quot;reduced|none&quot;</code> shortens or removes the row hover transition.</li>
</ul>
<p><code>data-elevation</code> only affects the busy message box, which uses <code>--en-shadow-md</code>. Sticky columns use a flat divider line, not a shadow.</p>
<p>See <a href="/docs/encss/presets">Appearance Presets</a> for configuration details.</p>
<h2 id="print-high-contrast">Print &amp; High Contrast<a class="header-link" href="#print-high-contrast" title="Link to this heading"></a></h2>
<ul>
<li><strong>Windows High Contrast (<code>forced-colors: active</code>)</strong>: cell borders switch to <code>CanvasText</code>, so row and column dividers stay visible. A selected row (<code>.en-table__row--selected</code>) gets a 2px <code>Highlight</code> outline, because its fill color is not shown.</li>
<li><strong>Print</strong>: with <code>en-preset-print.css</code>, the header row repeats on every printed page and <code>&lt;tfoot&gt;</code> stays at the end of the table. Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> for this to work.</li>
</ul>
<h2 id="see-also">See Also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="/docs/encss/table-advanced">Advanced Table</a>: selection, column management, filtering, expandable rows, grouping, inline editing, and more</li>
<li>Badge: status labels inside cells</li>
<li>Card: container for tables, often combined with <code>.en-table--stack</code></li>
<li>Pagination: page controls below a table</li>
<li>Status Dot: replaces the older <code>.en-table__status-dot</code></li>
<li>Descriptions: key-value lists; <code>--stack-mobile</code> uses the same 767px breakpoint as <code>.en-table--stack-md</code></li>
<li>Spinner: loading indicator used in the busy overlay</li>
</ul>
<p>`}),l($,{key:39,meta:X[39]}),l(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),null])}}),ve={title:`Table`,description:`Styled data table with sorting indicators, optional sticky headers and columns, row tints and selection, a busy overlay, and responsive stacking.`},ye=_e;export{ye as default,ve as meta};