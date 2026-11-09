import{W as e,at as t,c as n,et as r,n as i,nt as a,q as o,r as s,tt as c,u as l}from"./components-DGWjtEwO.js";var u=[{id:`en-css-class-reference`,text:`EN-CSS Class Reference`,level:1},{id:`organization`,text:`Organization`,level:2},{id:`layout`,text:`Layout`,level:2},{id:`container`,text:`Container`,level:3},{id:`grid`,text:`Grid`,level:3},{id:`flexbox`,text:`Flexbox`,level:3},{id:`stack-cluster`,text:`Stack & Cluster`,level:3},{id:`forms`,text:`Forms`,level:2},{id:`inputs`,text:`Inputs`,level:3},{id:`checkbox-switch`,text:`Checkbox & Switch`,level:3},{id:`basic-components`,text:`Basic Components`,level:2},{id:`button`,text:`Button`,level:3},{id:`card`,text:`Card`,level:3},{id:`badge`,text:`Badge`,level:3},{id:`alert`,text:`Alert`,level:3},{id:`modal`,text:`Modal`,level:3},{id:`table`,text:`Table`,level:3},{id:`progress-spinner`,text:`Progress & Spinner`,level:3},{id:`extended-components`,text:`Extended Components`,level:2},{id:`avatar`,text:`Avatar`,level:3},{id:`timeline`,text:`Timeline`,level:3},{id:`carousel`,text:`Carousel`,level:3},{id:`gallery`,text:`Gallery`,level:3},{id:`kanban`,text:`Kanban`,level:3},{id:`layout-primitives-phase-2`,text:`Layout Primitives (Phase 2)`,level:2},{id:`prose`,text:`Prose`,level:3},{id:`code-block`,text:`Code Block`,level:3},{id:`hero-section`,text:`Hero Section`,level:3},{id:`fab`,text:`FAB`,level:3},{id:`typography`,text:`Typography`,level:2},{id:`spacing`,text:`Spacing`,level:2},{id:`display`,text:`Display`,level:2},{id:`border-shadow`,text:`Border & Shadow`,level:2},{id:`bleed`,text:`Bleed`,level:3},{id:`see-also`,text:`See Also`,level:2}],d=[{id:`en-css-class-reference`,text:`EN-CSS Class Reference`,level:1,children:[{id:`organization`,text:`Organization`,level:2,children:[]},{id:`layout`,text:`Layout`,level:2,children:[{id:`container`,text:`Container`,level:3,children:[]},{id:`grid`,text:`Grid`,level:3,children:[]},{id:`flexbox`,text:`Flexbox`,level:3,children:[]},{id:`stack-cluster`,text:`Stack & Cluster`,level:3,children:[]}]},{id:`forms`,text:`Forms`,level:2,children:[{id:`inputs`,text:`Inputs`,level:3,children:[]},{id:`checkbox-switch`,text:`Checkbox & Switch`,level:3,children:[]}]},{id:`basic-components`,text:`Basic Components`,level:2,children:[{id:`button`,text:`Button`,level:3,children:[]},{id:`card`,text:`Card`,level:3,children:[]},{id:`badge`,text:`Badge`,level:3,children:[]},{id:`alert`,text:`Alert`,level:3,children:[]},{id:`modal`,text:`Modal`,level:3,children:[]},{id:`table`,text:`Table`,level:3,children:[]},{id:`progress-spinner`,text:`Progress & Spinner`,level:3,children:[]}]},{id:`extended-components`,text:`Extended Components`,level:2,children:[{id:`avatar`,text:`Avatar`,level:3,children:[]},{id:`timeline`,text:`Timeline`,level:3,children:[]},{id:`carousel`,text:`Carousel`,level:3,children:[]},{id:`gallery`,text:`Gallery`,level:3,children:[]},{id:`kanban`,text:`Kanban`,level:3,children:[]}]},{id:`layout-primitives-phase-2`,text:`Layout Primitives (Phase 2)`,level:2,children:[{id:`prose`,text:`Prose`,level:3,children:[]},{id:`code-block`,text:`Code Block`,level:3,children:[]},{id:`hero-section`,text:`Hero Section`,level:3,children:[]},{id:`fab`,text:`FAB`,level:3,children:[]}]},{id:`typography`,text:`Typography`,level:2,children:[]},{id:`spacing`,text:`Spacing`,level:2,children:[]},{id:`display`,text:`Display`,level:2,children:[]},{id:`border-shadow`,text:`Border & Shadow`,level:2,children:[{id:`bleed`,text:`Bleed`,level:3,children:[]}]},{id:`see-also`,text:`See Also`,level:2,children:[]}]}],f={css:[],js:[],cleanup:[]};e({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>o(`div`,{class:n},[e.meta.isLive?o(s,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:o(i,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}});var p=e({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-dev/docs/class-list.md`,setup(){t(`vlm-toc`,{flat:u,tree:d}),c(()=>l(u,d)),a(()=>l([],[]));let e=n(f);return t(`vlm-inject`,e),c(()=>e.mount()),r(()=>e.beforeUnmount()),a(()=>e.unmounted()),()=>o(`div`,{class:`vlm-page`},[o(`div`,{class:`vlm-content`},[o(`div`,{class:`vlm-md`,innerHTML:`<h1 id="en-css-class-reference">EN-CSS Class Reference<a class="header-link" href="#en-css-class-reference" title="Link to this heading"></a></h1>
<p>Complete list of all available CSS classes in EN-CSS framework, organized by category.</p>
<h2 id="organization">Organization<a class="header-link" href="#organization" title="Link to this heading"></a></h2>
<p>EN-CSS classes are organized into:</p>
<ul>
<li><strong>Layout</strong> - Container, grid, flexbox, stack, cluster, etc.</li>
<li><strong>Forms</strong> - Inputs, labels, validation, groups, checkboxes, switches</li>
<li><strong>Basic Components</strong> - Core components (button, card, alert, badge, modal, etc.)</li>
<li><strong>Extended Components</strong> - Advanced components (timeline, carousel, kanban, etc.)</li>
<li><strong>Layout Primitives</strong> (Phase 2) - Prose, code, TOC, shell, hero, FAB, chat, etc.</li>
<li><strong>Typography</strong> - Font size, weight, color, alignment</li>
<li><strong>Spacing</strong> - Padding, margin, gap</li>
<li><strong>Display &amp; Visibility</strong> - Show/hide, responsive display</li>
<li><strong>Border, Radius &amp; Shadow</strong> - Borders, corner radius, shadows</li>
<li><strong>Utilities</strong> - Focus ring, background, opacity, position, animations</li>
</ul>
<hr>
<h2 id="layout">Layout<a class="header-link" href="#layout" title="Link to this heading"></a></h2>
<h3 id="container">Container<a class="header-link" href="#container" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-container</code></td>
<td>Centered container with max-width and padding</td>
</tr>
<tr>
<td><code>.en-container--fluid</code></td>
<td>Full-width container without max-width</td>
</tr>
<tr>
<td><code>.en-container--sm</code></td>
<td>Small container (max-width: 640px)</td>
</tr>
<tr>
<td><code>.en-container--md</code></td>
<td>Medium container (max-width: 768px)</td>
</tr>
<tr>
<td><code>.en-container--lg</code></td>
<td>Large container (max-width: 1024px)</td>
</tr>
<tr>
<td><code>.en-container--xl</code></td>
<td>Extra large container (max-width: 1280px)</td>
</tr>
<tr>
<td><code>.en-container--2xl</code></td>
<td>2XL container (max-width: 1536px)</td>
</tr>
</tbody>
</table>
</div><h3 id="grid">Grid<a class="header-link" href="#grid" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-grid</code></td>
<td>Auto-fit grid with responsive columns</td>
</tr>
<tr>
<td><code>.en-grid-12</code></td>
<td>12-column grid</td>
</tr>
<tr>
<td><code>.en-grid--cols-2</code></td>
<td>2-column grid layout</td>
</tr>
<tr>
<td><code>.en-grid--cols-3</code></td>
<td>3-column grid layout</td>
</tr>
<tr>
<td><code>.en-grid--cols-4</code></td>
<td>4-column grid layout</td>
</tr>
<tr>
<td><code>.en-grid--cols-6</code></td>
<td>6-column grid layout</td>
</tr>
<tr>
<td><code>.en-grid--cols-12</code></td>
<td>12-column grid layout</td>
</tr>
<tr>
<td><code>.en-grid--responsive</code></td>
<td>Enable container queries</td>
</tr>
<tr>
<td><code>.en-grid--align-start</code></td>
<td>Align grid items to start (maintain own height)</td>
</tr>
<tr>
<td><code>.en-grid--align-center</code></td>
<td>Center grid items vertically</td>
</tr>
<tr>
<td><code>.en-grid--align-end</code></td>
<td>Align grid items to end</td>
</tr>
<tr>
<td><code>.en-grid--align-stretch</code></td>
<td>Stretch items to tallest (default)</td>
</tr>
<tr>
<td><code>.en-col-span-1</code> through <code>.en-col-span-12</code></td>
<td>Span N columns (viewport-based)</td>
</tr>
<tr>
<td><code>.en-col-span-full</code></td>
<td>Span all columns</td>
</tr>
<tr>
<td><code>.en-col-xs-{1,2,3,4,6,8,12}</code></td>
<td>Container query spans (≥ 320px)</td>
</tr>
<tr>
<td><code>.en-col-sm-{1,2,3,4,6,8,12}</code></td>
<td>Container query spans (≥ 360px)</td>
</tr>
<tr>
<td><code>.en-col-md-{1,2,3,4,6,8,12}</code></td>
<td>Container query spans (≥ 480px)</td>
</tr>
<tr>
<td><code>.en-col-lg-{1,2,3,4,6,8,12}</code></td>
<td>Container query spans (≥ 640px)</td>
</tr>
<tr>
<td><code>.en-col-xl-{1,2,3,4,6,8,12}</code></td>
<td>Container query spans (≥ 768px)</td>
</tr>
</tbody>
</table>
</div><h3 id="flexbox">Flexbox<a class="header-link" href="#flexbox" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-flex</code></td>
<td>Flex container with gap</td>
</tr>
<tr>
<td><code>.en-flex--col</code></td>
<td>Flex column direction</td>
</tr>
<tr>
<td><code>.en-flex--wrap</code></td>
<td>Enable flex wrapping</td>
</tr>
<tr>
<td><code>.en-flex--center</code></td>
<td>Center items both axes</td>
</tr>
<tr>
<td><code>.en-flex--between</code></td>
<td>Space between with centered items</td>
</tr>
<tr>
<td><code>.en-flex-1</code></td>
<td>Flex grow/shrink (1 1 0%)</td>
</tr>
<tr>
<td><code>.en-flex-auto</code></td>
<td>Flex auto (1 1 auto)</td>
</tr>
</tbody>
</table>
</div><h3 id="stack-cluster">Stack &amp; Cluster<a class="header-link" href="#stack-cluster" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-stack</code></td>
<td>Vertical flex layout with gap</td>
</tr>
<tr>
<td><code>.en-cluster</code></td>
<td>Horizontal wrapping layout</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="forms">Forms<a class="header-link" href="#forms" title="Link to this heading"></a></h2>
<h3 id="inputs">Inputs<a class="header-link" href="#inputs" title="Link to this heading"></a></h3>
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
<td>Text input field (uses <code>--en-border-control</code>)</td>
</tr>
<tr>
<td><code>.en-input--sm</code></td>
<td>Small input</td>
</tr>
<tr>
<td><code>.en-input--lg</code></td>
<td>Large input</td>
</tr>
<tr>
<td><code>.en-select</code></td>
<td>Select dropdown</td>
</tr>
<tr>
<td><code>.en-textarea</code></td>
<td>Textarea field</td>
</tr>
<tr>
<td><code>.en-label</code></td>
<td>Form label styling</td>
</tr>
<tr>
<td><code>.en-hint</code></td>
<td>Help text below input</td>
</tr>
<tr>
<td><code>.en-error</code></td>
<td>Error message text</td>
</tr>
</tbody>
</table>
</div><h3 id="checkbox-switch">Checkbox &amp; Switch<a class="header-link" href="#checkbox-switch" title="Link to this heading"></a></h3>
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
<td>Checkbox wrapper with label</td>
</tr>
<tr>
<td><code>.en-radio</code></td>
<td>Radio button wrapper with label</td>
</tr>
<tr>
<td><code>.en-switch</code></td>
<td>Toggle switch container</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="basic-components">Basic Components<a class="header-link" href="#basic-components" title="Link to this heading"></a></h2>
<p>Core components included in <code>en.css</code>.</p>
<h3 id="button">Button<a class="header-link" href="#button" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-btn</code></td>
<td>Base button</td>
</tr>
<tr>
<td><code>.en-btn--primary</code></td>
<td>Primary color variant</td>
</tr>
<tr>
<td><code>.en-btn--danger</code></td>
<td>Danger color variant</td>
</tr>
<tr>
<td><code>.en-btn--sm</code></td>
<td>Small size</td>
</tr>
<tr>
<td><code>.en-btn--lg</code></td>
<td>Large size</td>
</tr>
<tr>
<td><code>.en-btn--full</code></td>
<td>Full width (100%)</td>
</tr>
</tbody>
</table>
</div><h3 id="card">Card<a class="header-link" href="#card" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-card</code></td>
<td>Card container</td>
</tr>
<tr>
<td><code>.en-card__header</code></td>
<td>Card header section</td>
</tr>
<tr>
<td><code>.en-card__title</code></td>
<td>Card title</td>
</tr>
<tr>
<td><code>.en-card__body</code></td>
<td>Card body content</td>
</tr>
<tr>
<td><code>.en-card__footer</code></td>
<td>Card footer section</td>
</tr>
<tr>
<td><code>.en-card--hover</code></td>
<td>Hover lift effect</td>
</tr>
</tbody>
</table>
</div><h3 id="badge">Badge<a class="header-link" href="#badge" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-badge</code></td>
<td>Small label badge</td>
</tr>
<tr>
<td><code>.en-badge--primary</code></td>
<td>Primary badge</td>
</tr>
<tr>
<td><code>.en-badge--success</code></td>
<td>Success badge</td>
</tr>
<tr>
<td><code>.en-badge--danger</code></td>
<td>Danger badge</td>
</tr>
</tbody>
</table>
</div><h3 id="alert">Alert<a class="header-link" href="#alert" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-alert</code></td>
<td>Alert message box</td>
</tr>
<tr>
<td><code>.en-alert--success</code></td>
<td>Success alert</td>
</tr>
<tr>
<td><code>.en-alert--warning</code></td>
<td>Warning alert</td>
</tr>
<tr>
<td><code>.en-alert--danger</code></td>
<td>Danger/error alert</td>
</tr>
</tbody>
</table>
</div><h3 id="modal">Modal<a class="header-link" href="#modal" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-modal</code></td>
<td>Modal dialog (native <code>&lt;dialog&gt;</code>)</td>
</tr>
<tr>
<td><code>.en-modal--sm</code></td>
<td>Small modal</td>
</tr>
<tr>
<td><code>.en-modal--lg</code></td>
<td>Large modal</td>
</tr>
<tr>
<td><code>.en-modal__header</code></td>
<td>Modal header</td>
</tr>
<tr>
<td><code>.en-modal__body</code></td>
<td>Modal body content</td>
</tr>
<tr>
<td><code>.en-modal__footer</code></td>
<td>Modal footer</td>
</tr>
</tbody>
</table>
</div><h3 id="table">Table<a class="header-link" href="#table" title="Link to this heading"></a></h3>
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
<td>Base table styling</td>
</tr>
<tr>
<td><code>.en-table--striped</code></td>
<td>Zebra striping</td>
</tr>
<tr>
<td><code>.en-table--bordered</code></td>
<td>Column dividers</td>
</tr>
</tbody>
</table>
</div><h3 id="progress-spinner">Progress &amp; Spinner<a class="header-link" href="#progress-spinner" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-progress</code></td>
<td>Progress bar container</td>
</tr>
<tr>
<td><code>.en-spinner</code></td>
<td>Loading spinner</td>
</tr>
<tr>
<td><code>.en-skeleton</code></td>
<td>Skeleton loading placeholder</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="extended-components">Extended Components<a class="header-link" href="#extended-components" title="Link to this heading"></a></h2>
<p>Advanced components (require <code>en-extra.css</code>).</p>
<h3 id="avatar">Avatar<a class="header-link" href="#avatar" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-avatar</code></td>
<td>Avatar circle</td>
</tr>
<tr>
<td><code>.en-avatar--sm</code></td>
<td>Small avatar</td>
</tr>
<tr>
<td><code>.en-avatar--lg</code></td>
<td>Large avatar</td>
</tr>
</tbody>
</table>
</div><h3 id="timeline">Timeline<a class="header-link" href="#timeline" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-timeline</code></td>
<td>Timeline list</td>
</tr>
<tr>
<td><code>.en-timeline__item</code></td>
<td>Timeline item</td>
</tr>
</tbody>
</table>
</div><h3 id="carousel">Carousel<a class="header-link" href="#carousel" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-carousel</code></td>
<td>Carousel container</td>
</tr>
<tr>
<td><code>.en-carousel__item</code></td>
<td>Carousel slide</td>
</tr>
<tr>
<td><code>.en-carousel__nav</code></td>
<td>Navigation dots</td>
</tr>
</tbody>
</table>
</div><h3 id="gallery">Gallery<a class="header-link" href="#gallery" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-gallery</code></td>
<td>Gallery container</td>
</tr>
<tr>
<td><code>.en-gallery--grid</code></td>
<td>Regular grid layout</td>
</tr>
<tr>
<td><code>.en-gallery--masonry</code></td>
<td>Pinterest-style layout</td>
</tr>
</tbody>
</table>
</div><h3 id="kanban">Kanban<a class="header-link" href="#kanban" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-kanban</code></td>
<td>Kanban board container</td>
</tr>
<tr>
<td><code>.en-kanban__column</code></td>
<td>Column container</td>
</tr>
<tr>
<td><code>.en-kanban__card</code></td>
<td>Task card</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="layout-primitives-phase-2">Layout Primitives (Phase 2)<a class="header-link" href="#layout-primitives-phase-2" title="Link to this heading"></a></h2>
<p>New in Phase 2.</p>
<h3 id="prose">Prose<a class="header-link" href="#prose" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-prose</code></td>
<td>Typography-optimized container</td>
</tr>
<tr>
<td><code>.en-prose--sm</code></td>
<td>Small font size</td>
</tr>
<tr>
<td><code>.en-prose--lg</code></td>
<td>Large font size</td>
</tr>
</tbody>
</table>
</div><h3 id="code-block">Code Block<a class="header-link" href="#code-block" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-code-block</code></td>
<td>Code container</td>
</tr>
<tr>
<td><code>.en-code-block--numbered</code></td>
<td>Show line numbers</td>
</tr>
</tbody>
</table>
</div><h3 id="hero-section">Hero Section<a class="header-link" href="#hero-section" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-hero</code></td>
<td>Hero section</td>
</tr>
<tr>
<td><code>.en-hero--center</code></td>
<td>Center-aligned</td>
</tr>
<tr>
<td><code>.en-hero--full</code></td>
<td>Full viewport height</td>
</tr>
</tbody>
</table>
</div><h3 id="fab">FAB<a class="header-link" href="#fab" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-fab</code></td>
<td>Floating action button</td>
</tr>
<tr>
<td><code>.en-fab--bottom-right</code></td>
<td>Position bottom-right</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="typography">Typography<a class="header-link" href="#typography" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-text-xs</code></td>
<td>Extra small (12px)</td>
</tr>
<tr>
<td><code>.en-text-sm</code></td>
<td>Small (14px)</td>
</tr>
<tr>
<td><code>.en-text-base</code></td>
<td>Base (16px)</td>
</tr>
<tr>
<td><code>.en-text-lg</code></td>
<td>Large (18px)</td>
</tr>
<tr>
<td><code>.en-text-xl</code></td>
<td>Extra large (20px)</td>
</tr>
<tr>
<td><code>.en-font-bold</code></td>
<td>Bold weight</td>
</tr>
<tr>
<td><code>.en-text-muted</code></td>
<td>Muted color</td>
</tr>
<tr>
<td><code>.en-text-center</code></td>
<td>Center align</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="spacing">Spacing<a class="header-link" href="#spacing" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-p-{0-10}</code></td>
<td>Padding all sides</td>
</tr>
<tr>
<td><code>.en-px-{0-10}</code></td>
<td>Padding horizontal</td>
</tr>
<tr>
<td><code>.en-py-{0-10}</code></td>
<td>Padding vertical</td>
</tr>
<tr>
<td><code>.en-m-{0-10}</code></td>
<td>Margin all sides</td>
</tr>
<tr>
<td><code>.en-mx-auto</code></td>
<td>Auto horizontal margin</td>
</tr>
<tr>
<td><code>.en-gap-{0-10}</code></td>
<td>Gap for flex/grid</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="display">Display<a class="header-link" href="#display" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-hidden</code></td>
<td>Hide element</td>
</tr>
<tr>
<td><code>.en-block</code></td>
<td>Display block</td>
</tr>
<tr>
<td><code>.en-flex-display</code></td>
<td>Display flex</td>
</tr>
<tr>
<td><code>.en-sr-only</code></td>
<td>Screen reader only</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="border-shadow">Border &amp; Shadow<a class="header-link" href="#border-shadow" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-border</code></td>
<td>Border all sides</td>
</tr>
<tr>
<td><code>.en-rounded</code></td>
<td>Medium border radius</td>
</tr>
<tr>
<td><code>.en-rounded-full</code></td>
<td>Fully rounded</td>
</tr>
<tr>
<td><code>.en-shadow</code></td>
<td>Medium shadow</td>
</tr>
</tbody>
</table>
</div><h3 id="bleed">Bleed<a class="header-link" href="#bleed" title="Link to this heading"></a></h3>
<p>Edge-to-edge block elements: no inline border, radius or shadow. Part of the core utilities (<code>en.css</code>). The breakpoint suffix means “below this breakpoint” (width &lt; N).</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-bleed</code></td>
<td>Remove inline border, radius and shadow at every screen size</td>
</tr>
<tr>
<td><code>.en-bleed-sm</code></td>
<td>Same, only below 480px</td>
</tr>
<tr>
<td><code>.en-bleed-md</code></td>
<td>Same, only below 768px</td>
</tr>
<tr>
<td><code>.en-bleed-lg</code></td>
<td>Same, only below 1024px</td>
</tr>
<tr>
<td><code>.en-bleed-xl</code></td>
<td>Same, only below 1280px</td>
</tr>
</tbody>
</table>
</div><p>To also cancel the padding of the parent, add a gutter bleed margin from the <a href="utilities-extended">Extended Utilities</a> (<code>en-extra.css</code>):</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en--mx-gutter</code></td>
<td>Negative inline margin that cancels the parent gutter (all screen sizes)</td>
</tr>
<tr>
<td><code>.en--mx-gutter-{sm|md|lg|xl}</code></td>
<td>Same, only below the breakpoint</td>
</tr>
<tr>
<td><code>.en--ms-gutter-{sm|md|lg|xl}</code>, <code>.en--me-gutter-{sm|md|lg|xl}</code></td>
<td>Same, inline start / inline end only</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="see-also">See Also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="getting-started">Getting Started</a> - Installation and setup</li>
<li><a href="utilities">Core Utilities</a> and <a href="utilities-extended">Extended Utilities</a> - Utility class guides</li>
<li><a href="tokens">Design Tokens</a> - Complete token reference</li>
<li><a href="../PRESETS">Presets Guide</a> - Pre-configured bundles</li>
</ul>
`})]),null])}}),m={title:`EN-CSS Class Reference`,description:`Complete list of all available CSS classes in EN-CSS framework, organized by category.`},h=p;export{h as default,m as meta};