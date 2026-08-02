import{M as e,R as t,V as n,k as r,v as i,z as a}from"./layouts-CK2yVfJi.js";import{t as o}from"./index-DYOVMqH4.js";import{n as s,r as c,t as l}from"./CustomToc-DrxX4mTi.js";var u=[{id:`en-css-index-reference`,text:`EN-CSS Index Reference`,level:1},{id:`table-of-contents`,text:`Table of Contents`,level:2},{id:`design-tokens`,text:`Design Tokens`,level:2},{id:`layout-classes`,text:`Layout Classes`,level:2},{id:`form-classes`,text:`Form Classes`,level:2},{id:`components`,text:`Components`,level:2},{id:`utility-classes`,text:`Utility Classes`,level:2}],d=[{id:`en-css-index-reference`,text:`EN-CSS Index Reference`,level:1,children:[{id:`table-of-contents`,text:`Table of Contents`,level:2,children:[]},{id:`design-tokens`,text:`Design Tokens`,level:2,children:[]},{id:`layout-classes`,text:`Layout Classes`,level:2,children:[]},{id:`form-classes`,text:`Form Classes`,level:2,children:[]},{id:`components`,text:`Components`,level:2,children:[]},{id:`utility-classes`,text:`Utility Classes`,level:2,children:[]}]}];r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(t){return()=>e(`div`,{class:`vlm-block`},[t.meta.isLive?e(c,{component:t.meta.component}):null,t.meta.noCode?null:e(s,{highlightedHtml:t.meta.highlightedHtml,defaultOpen:!t.meta.isLive||!t.meta.collapsed,text:t.meta.text,showToggle:t.meta.isLive})])}});var f=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/apps/en-framework/src/resources/en-css/indexes/indexes.md`,setup(){return n(`vlm-toc`,{flat:u,tree:d}),t(()=>o(u,d)),a(()=>o([],[])),()=>e(`div`,{class:`vlm-page`},[e(`div`,{class:`vlm-content`},[e(`div`,{class:`vlm-md`,innerHTML:`<h1 id="en-css-index-reference">EN-CSS Index Reference</h1>
<p>Complete reference of all CSS classes, tokens, and utilities available in the EN-CSS framework.</p>
<hr>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#design-tokens">Design Tokens</a></li>
<li><a href="#layout-classes">Layout Classes</a></li>
<li><a href="#form-classes">Form Classes</a></li>
<li><a href="#components">Components</a></li>
<li><a href="#utility-classes">Utility Classes</a></li>
</ul>
<hr>
<h2 id="design-tokens">Design Tokens</h2>
<p>CSS custom properties that control colors, spacing, typography, and other design values.</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class/Token</th>
<th>Type</th>
<th>Description</th>
<th>Tags</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>--en-primary</code></td>
<td>token</td>
<td>Primary brand color</td>
<td>color, brand, primary, theme</td>
</tr>
<tr>
<td><code>--en-primary-contrast</code></td>
<td>token</td>
<td>Text color on primary background</td>
<td>color, contrast, primary, theme</td>
</tr>
<tr>
<td><code>--en-secondary</code></td>
<td>token</td>
<td>Secondary brand color</td>
<td>color, brand, secondary, theme</td>
</tr>
<tr>
<td><code>--en-success</code></td>
<td>token</td>
<td>Success state color (green)</td>
<td>color, semantic, success, state</td>
</tr>
<tr>
<td><code>--en-warning</code></td>
<td>token</td>
<td>Warning state color (yellow/orange)</td>
<td>color, semantic, warning, state</td>
</tr>
<tr>
<td><code>--en-danger</code></td>
<td>token</td>
<td>Danger/error state color (red)</td>
<td>color, semantic, danger, error, state</td>
</tr>
<tr>
<td><code>--en-info</code></td>
<td>token</td>
<td>Info state color (blue)</td>
<td>color, semantic, info, state</td>
</tr>
<tr>
<td><code>--en-bg</code></td>
<td>token</td>
<td>Main background color</td>
<td>color, background, surface</td>
</tr>
<tr>
<td><code>--en-bg-subtle</code></td>
<td>token</td>
<td>Subtle background color</td>
<td>color, background, surface, subtle</td>
</tr>
<tr>
<td><code>--en-surface</code></td>
<td>token</td>
<td>Card/component surface color</td>
<td>color, background, surface, card</td>
</tr>
<tr>
<td><code>--en-text</code></td>
<td>token</td>
<td>Primary text color</td>
<td>color, text, typography</td>
</tr>
<tr>
<td><code>--en-text-muted</code></td>
<td>token</td>
<td>Muted/secondary text color</td>
<td>color, text, typography, muted</td>
</tr>
<tr>
<td><code>--en-border</code></td>
<td>token</td>
<td>Border color</td>
<td>color, border, decoration</td>
</tr>
<tr>
<td><code>--en-space-0</code></td>
<td>token</td>
<td>Spacing size 0 (0px)</td>
<td>spacing, size, scale</td>
</tr>
<tr>
<td><code>--en-space-1</code></td>
<td>token</td>
<td>Spacing size 1 (0.25rem/4px)</td>
<td>spacing, size, scale</td>
</tr>
<tr>
<td><code>--en-space-2</code></td>
<td>token</td>
<td>Spacing size 2 (0.5rem/8px)</td>
<td>spacing, size, scale</td>
</tr>
<tr>
<td><code>--en-space-3</code></td>
<td>token</td>
<td>Spacing size 3 (0.75rem/12px)</td>
<td>spacing, size, scale</td>
</tr>
<tr>
<td><code>--en-space-4</code></td>
<td>token</td>
<td>Spacing size 4 (1rem/16px)</td>
<td>spacing, size, scale</td>
</tr>
<tr>
<td><code>--en-space-5</code></td>
<td>token</td>
<td>Spacing size 5 (1.25rem/20px)</td>
<td>spacing, size, scale</td>
</tr>
<tr>
<td><code>--en-space-6</code></td>
<td>token</td>
<td>Spacing size 6 (1.5rem/24px)</td>
<td>spacing, size, scale</td>
</tr>
<tr>
<td><code>--en-space-8</code></td>
<td>token</td>
<td>Spacing size 8 (2rem/32px)</td>
<td>spacing, size, scale</td>
</tr>
<tr>
<td><code>--en-space-10</code></td>
<td>token</td>
<td>Spacing size 10 (2.5rem/40px)</td>
<td>spacing, size, scale</td>
</tr>
<tr>
<td><code>--en-space-fluid-sm</code></td>
<td>token</td>
<td>Fluid spacing small (8px → 12px)</td>
<td>spacing, size, fluid, responsive</td>
</tr>
<tr>
<td><code>--en-space-fluid-md</code></td>
<td>token</td>
<td>Fluid spacing medium (12px → 20px)</td>
<td>spacing, size, fluid, responsive</td>
</tr>
<tr>
<td><code>--en-space-fluid-lg</code></td>
<td>token</td>
<td>Fluid spacing large (16px → 32px)</td>
<td>spacing, size, fluid, responsive</td>
</tr>
<tr>
<td><code>--en-space-fluid-xl</code></td>
<td>token</td>
<td>Fluid spacing extra large (24px → 48px)</td>
<td>spacing, size, fluid, responsive</td>
</tr>
<tr>
<td><code>--en-text-xs</code></td>
<td>token</td>
<td>Extra small font size (0.75rem/12px)</td>
<td>typography, font, size</td>
</tr>
<tr>
<td><code>--en-text-sm</code></td>
<td>token</td>
<td>Small font size (0.875rem/14px)</td>
<td>typography, font, size</td>
</tr>
<tr>
<td><code>--en-text-base</code></td>
<td>token</td>
<td>Base font size (1rem/16px)</td>
<td>typography, font, size</td>
</tr>
<tr>
<td><code>--en-text-lg</code></td>
<td>token</td>
<td>Large font size (1.125rem/18px)</td>
<td>typography, font, size</td>
</tr>
<tr>
<td><code>--en-text-xl</code></td>
<td>token</td>
<td>Extra large font size (1.25rem/20px)</td>
<td>typography, font, size</td>
</tr>
<tr>
<td><code>--en-text-2xl</code></td>
<td>token</td>
<td>2x extra large font size (1.5rem/24px)</td>
<td>typography, font, size, heading</td>
</tr>
<tr>
<td><code>--en-text-3xl</code></td>
<td>token</td>
<td>3x extra large font size (1.875rem/30px)</td>
<td>typography, font, size, heading</td>
</tr>
<tr>
<td><code>--en-text-4xl</code></td>
<td>token</td>
<td>4x extra large font size (2.25rem/36px)</td>
<td>typography, font, size, heading</td>
</tr>
<tr>
<td><code>--en-text-5xl</code></td>
<td>token</td>
<td>5x extra large font size (3rem/48px)</td>
<td>typography, font, size, heading</td>
</tr>
<tr>
<td><code>--en-text-6xl</code></td>
<td>token</td>
<td>6x extra large font size (3.75rem/60px)</td>
<td>typography, font, size, heading</td>
</tr>
<tr>
<td><code>--en-font-sans</code></td>
<td>token</td>
<td>Sans-serif font family</td>
<td>typography, font, family</td>
</tr>
<tr>
<td><code>--en-font-normal</code></td>
<td>token</td>
<td>Normal font weight (400)</td>
<td>typography, font, weight</td>
</tr>
<tr>
<td><code>--en-font-medium</code></td>
<td>token</td>
<td>Medium font weight (500)</td>
<td>typography, font, weight</td>
</tr>
<tr>
<td><code>--en-font-semibold</code></td>
<td>token</td>
<td>Semi-bold font weight (600)</td>
<td>typography, font, weight</td>
</tr>
<tr>
<td><code>--en-font-bold</code></td>
<td>token</td>
<td>Bold font weight (700)</td>
<td>typography, font, weight</td>
</tr>
<tr>
<td><code>--en-leading-tight</code></td>
<td>token</td>
<td>Tight line height (1.25)</td>
<td>typography, line-height, leading</td>
</tr>
<tr>
<td><code>--en-leading-snug</code></td>
<td>token</td>
<td>Snug line height (1.375)</td>
<td>typography, line-height, leading</td>
</tr>
<tr>
<td><code>--en-leading-normal</code></td>
<td>token</td>
<td>Normal line height (1.5)</td>
<td>typography, line-height, leading</td>
</tr>
<tr>
<td><code>--en-leading-relaxed</code></td>
<td>token</td>
<td>Relaxed line height (1.75)</td>
<td>typography, line-height, leading</td>
</tr>
<tr>
<td><code>--en-tracking-tight</code></td>
<td>token</td>
<td>Tight letter spacing (-0.025em)</td>
<td>typography, tracking, spacing</td>
</tr>
<tr>
<td><code>--en-tracking-normal</code></td>
<td>token</td>
<td>Normal letter spacing (0)</td>
<td>typography, tracking, spacing</td>
</tr>
<tr>
<td><code>--en-tracking-wide</code></td>
<td>token</td>
<td>Wide letter spacing (0.025em)</td>
<td>typography, tracking, spacing</td>
</tr>
<tr>
<td><code>--en-radius-0</code></td>
<td>token</td>
<td>No border radius (0)</td>
<td>border, radius, shape</td>
</tr>
<tr>
<td><code>--en-radius-sm</code></td>
<td>token</td>
<td>Small border radius (0.25rem/4px)</td>
<td>border, radius, shape</td>
</tr>
<tr>
<td><code>--en-radius-md</code></td>
<td>token</td>
<td>Medium border radius (0.5rem/8px)</td>
<td>border, radius, shape</td>
</tr>
<tr>
<td><code>--en-radius-lg</code></td>
<td>token</td>
<td>Large border radius (0.75rem/12px)</td>
<td>border, radius, shape</td>
</tr>
<tr>
<td><code>--en-radius-full</code></td>
<td>token</td>
<td>Full border radius (999px, pill shape)</td>
<td>border, radius, shape, pill</td>
</tr>
<tr>
<td><code>--en-radius-circle</code></td>
<td>token</td>
<td>Circular border radius (50%)</td>
<td>border, radius, shape, circle</td>
</tr>
<tr>
<td><code>--en-shadow-sm</code></td>
<td>token</td>
<td>Small box shadow</td>
<td>shadow, elevation, depth</td>
</tr>
<tr>
<td><code>--en-shadow-md</code></td>
<td>token</td>
<td>Medium box shadow</td>
<td>shadow, elevation, depth</td>
</tr>
<tr>
<td><code>--en-shadow-lg</code></td>
<td>token</td>
<td>Large box shadow</td>
<td>shadow, elevation, depth</td>
</tr>
<tr>
<td><code>--en-border-width</code></td>
<td>token</td>
<td>Default border width (1px)</td>
<td>border, width, size</td>
</tr>
<tr>
<td><code>--en-border-width-thick</code></td>
<td>token</td>
<td>Thick border width (2px)</td>
<td>border, width, size, thick</td>
</tr>
<tr>
<td><code>--en-border-style</code></td>
<td>token</td>
<td>Border style (solid)</td>
<td>border, style</td>
</tr>
<tr>
<td><code>--en-duration-fast</code></td>
<td>token</td>
<td>Fast transition duration (150ms)</td>
<td>animation, duration, transition</td>
</tr>
<tr>
<td><code>--en-duration-base</code></td>
<td>token</td>
<td>Base transition duration (250ms)</td>
<td>animation, duration, transition</td>
</tr>
<tr>
<td><code>--en-duration-slow</code></td>
<td>token</td>
<td>Slow transition duration (350ms)</td>
<td>animation, duration, transition</td>
</tr>
<tr>
<td><code>--en-ease-in</code></td>
<td>token</td>
<td>Ease-in timing function</td>
<td>animation, easing, transition</td>
</tr>
<tr>
<td><code>--en-ease-out</code></td>
<td>token</td>
<td>Ease-out timing function</td>
<td>animation, easing, transition</td>
</tr>
<tr>
<td><code>--en-ease-in-out</code></td>
<td>token</td>
<td>Ease-in-out timing function</td>
<td>animation, easing, transition</td>
</tr>
<tr>
<td><code>--en-transition</code></td>
<td>token</td>
<td>Default transition (duration + easing)</td>
<td>animation, transition</td>
</tr>
<tr>
<td><code>--en-z-base</code></td>
<td>token</td>
<td>Base z-index (0)</td>
<td>z-index, layering, stacking</td>
</tr>
<tr>
<td><code>--en-z-dropdown</code></td>
<td>token</td>
<td>Dropdown z-index (100)</td>
<td>z-index, layering, stacking, dropdown</td>
</tr>
<tr>
<td><code>--en-z-sticky</code></td>
<td>token</td>
<td>Sticky element z-index (200)</td>
<td>z-index, layering, stacking, sticky</td>
</tr>
<tr>
<td><code>--en-z-fixed</code></td>
<td>token</td>
<td>Fixed element z-index (300)</td>
<td>z-index, layering, stacking, fixed</td>
</tr>
<tr>
<td><code>--en-z-overlay</code></td>
<td>token</td>
<td>Overlay/backdrop z-index (400)</td>
<td>z-index, layering, stacking, overlay</td>
</tr>
<tr>
<td><code>--en-z-modal</code></td>
<td>token</td>
<td>Modal z-index (500)</td>
<td>z-index, layering, stacking, modal</td>
</tr>
<tr>
<td><code>--en-z-toast</code></td>
<td>token</td>
<td>Toast notification z-index (600)</td>
<td>z-index, layering, stacking, toast</td>
</tr>
<tr>
<td><code>--en-z-tooltip</code></td>
<td>token</td>
<td>Tooltip z-index (700)</td>
<td>z-index, layering, stacking, tooltip</td>
</tr>
<tr>
<td><code>--en-ring-width</code></td>
<td>token</td>
<td>Focus ring width (3px)</td>
<td>focus, ring, accessibility, a11y</td>
</tr>
<tr>
<td><code>--en-ring-color</code></td>
<td>token</td>
<td>Focus ring color</td>
<td>focus, ring, accessibility, a11y, color</td>
</tr>
<tr>
<td><code>--en-ring-offset</code></td>
<td>token</td>
<td>Focus ring offset (2px)</td>
<td>focus, ring, accessibility, a11y</td>
</tr>
<tr>
<td><code>--en-aspect-square</code></td>
<td>token</td>
<td>Square aspect ratio (1/1)</td>
<td>aspect-ratio, shape, square</td>
</tr>
<tr>
<td><code>--en-aspect-video</code></td>
<td>token</td>
<td>Video aspect ratio (16/9)</td>
<td>aspect-ratio, shape, video</td>
</tr>
<tr>
<td><code>--en-aspect-portrait</code></td>
<td>token</td>
<td>Portrait aspect ratio (3/4)</td>
<td>aspect-ratio, shape, portrait</td>
</tr>
<tr>
<td><code>--en-opacity-hover</code></td>
<td>token</td>
<td>Hover opacity (0.8)</td>
<td>opacity, interaction, hover</td>
</tr>
<tr>
<td><code>--en-opacity-disabled</code></td>
<td>token</td>
<td>Disabled opacity (0.5)</td>
<td>opacity, state, disabled</td>
</tr>
<tr>
<td><code>--en-blur-sm</code></td>
<td>token</td>
<td>Small blur (4px)</td>
<td>blur, backdrop, effect</td>
</tr>
<tr>
<td><code>--en-blur-md</code></td>
<td>token</td>
<td>Medium blur (8px)</td>
<td>blur, backdrop, effect</td>
</tr>
<tr>
<td><code>--en-blur-lg</code></td>
<td>token</td>
<td>Large blur (12px)</td>
<td>blur, backdrop, effect</td>
</tr>
<tr>
<td><code>--en-backdrop-bg</code></td>
<td>token</td>
<td>Backdrop background color</td>
<td>backdrop, overlay, color</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="layout-classes">Layout Classes</h2>
<p>Classes for grid, flexbox, container, and other layout systems.</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class/Token</th>
<th>Type</th>
<th>Description</th>
<th>Tags</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-container</code></td>
<td>base</td>
<td>Centered container with max-width</td>
<td>layout, container, width, center</td>
</tr>
<tr>
<td><code>.en-container--fluid</code></td>
<td>modifier</td>
<td>Full-width container without max-width</td>
<td>layout, container, width, fluid, full</td>
</tr>
<tr>
<td><code>.en-container--sm</code></td>
<td>modifier</td>
<td>Small container (max-width: 640px)</td>
<td>layout, container, width, small</td>
</tr>
<tr>
<td><code>.en-container--md</code></td>
<td>modifier</td>
<td>Medium container (max-width: 768px)</td>
<td>layout, container, width, medium</td>
</tr>
<tr>
<td><code>.en-container--lg</code></td>
<td>modifier</td>
<td>Large container (max-width: 1024px)</td>
<td>layout, container, width, large</td>
</tr>
<tr>
<td><code>.en-grid</code></td>
<td>base</td>
<td>Auto-fit responsive grid layout</td>
<td>layout, grid, responsive, auto</td>
</tr>
<tr>
<td><code>.en-grid--cols-2</code></td>
<td>modifier</td>
<td>2-column grid layout</td>
<td>layout, grid, columns, two</td>
</tr>
<tr>
<td><code>.en-grid--cols-3</code></td>
<td>modifier</td>
<td>3-column grid layout</td>
<td>layout, grid, columns, three</td>
</tr>
<tr>
<td><code>.en-grid--cols-4</code></td>
<td>modifier</td>
<td>4-column grid layout</td>
<td>layout, grid, columns, four</td>
</tr>
<tr>
<td><code>.en-grid--cols-6</code></td>
<td>modifier</td>
<td>6-column grid layout</td>
<td>layout, grid, columns, six</td>
</tr>
<tr>
<td><code>.en-grid--cols-12</code></td>
<td>modifier</td>
<td>12-column grid layout</td>
<td>layout, grid, columns, twelve</td>
</tr>
<tr>
<td><code>.en-grid--cols-2-md</code></td>
<td>modifier</td>
<td>2 columns from medium breakpoint up</td>
<td>layout, grid, columns, responsive, tablet, desktop</td>
</tr>
<tr>
<td><code>.en-grid--cols-3-md</code></td>
<td>modifier</td>
<td>3 columns from medium breakpoint up</td>
<td>layout, grid, columns, responsive, tablet, desktop</td>
</tr>
<tr>
<td><code>.en-grid--cols-4-md</code></td>
<td>modifier</td>
<td>4 columns from medium breakpoint up</td>
<td>layout, grid, columns, responsive, tablet, desktop</td>
</tr>
<tr>
<td><code>.en-col-span-2</code></td>
<td>utility</td>
<td>Span 2 columns</td>
<td>layout, grid, span, columns</td>
</tr>
<tr>
<td><code>.en-col-span-3</code></td>
<td>utility</td>
<td>Span 3 columns</td>
<td>layout, grid, span, columns</td>
</tr>
<tr>
<td><code>.en-col-span-4</code></td>
<td>utility</td>
<td>Span 4 columns</td>
<td>layout, grid, span, columns</td>
</tr>
<tr>
<td><code>.en-col-span-6</code></td>
<td>utility</td>
<td>Span 6 columns</td>
<td>layout, grid, span, columns</td>
</tr>
<tr>
<td><code>.en-col-span-full</code></td>
<td>utility</td>
<td>Span all columns</td>
<td>layout, grid, span, columns, full</td>
</tr>
<tr>
<td><code>.en-flex</code></td>
<td>base</td>
<td>Flexbox layout with gap</td>
<td>layout, flex, flexbox</td>
</tr>
<tr>
<td><code>.en-flex--col</code></td>
<td>modifier</td>
<td>Flex column direction</td>
<td>layout, flex, flexbox, column, vertical</td>
</tr>
<tr>
<td><code>.en-flex--wrap</code></td>
<td>modifier</td>
<td>Enable flex wrapping</td>
<td>layout, flex, flexbox, wrap, responsive</td>
</tr>
<tr>
<td><code>.en-flex--center</code></td>
<td>modifier</td>
<td>Center items on both axes</td>
<td>layout, flex, flexbox, center, align</td>
</tr>
<tr>
<td><code>.en-flex--between</code></td>
<td>modifier</td>
<td>Space between with centered items</td>
<td>layout, flex, flexbox, justify, space</td>
</tr>
<tr>
<td><code>.en-flex--around</code></td>
<td>modifier</td>
<td>Space around items</td>
<td>layout, flex, flexbox, justify, space</td>
</tr>
<tr>
<td><code>.en-flex--start</code></td>
<td>modifier</td>
<td>Align items to start</td>
<td>layout, flex, flexbox, align</td>
</tr>
<tr>
<td><code>.en-flex--end</code></td>
<td>modifier</td>
<td>Align items to end</td>
<td>layout, flex, flexbox, align</td>
</tr>
<tr>
<td><code>.en-flex-1</code></td>
<td>utility</td>
<td>Flex grow/shrink (1 1 0%)</td>
<td>layout, flex, flexbox, grow, shrink</td>
</tr>
<tr>
<td><code>.en-flex-auto</code></td>
<td>utility</td>
<td>Flex auto (1 1 auto)</td>
<td>layout, flex, flexbox, grow, shrink, auto</td>
</tr>
<tr>
<td><code>.en-flex-none</code></td>
<td>utility</td>
<td>No flex grow/shrink</td>
<td>layout, flex, flexbox, fixed</td>
</tr>
<tr>
<td><code>.en-stack</code></td>
<td>base</td>
<td>Vertical flex layout with gap</td>
<td>layout, flex, stack, vertical, column</td>
</tr>
<tr>
<td><code>.en-cluster</code></td>
<td>base</td>
<td>Horizontal wrapping layout</td>
<td>layout, flex, cluster, horizontal, wrap</td>
</tr>
<tr>
<td><code>.en-center</code></td>
<td>utility</td>
<td>Center content using grid</td>
<td>layout, center, align, grid</td>
</tr>
<tr>
<td><code>.en-table-responsive</code></td>
<td>utility</td>
<td>Horizontal scrollable table wrapper</td>
<td>layout, table, responsive, scroll</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="form-classes">Form Classes</h2>
<p>Classes for styling form inputs, labels, validation states, and form layouts.</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class/Token</th>
<th>Type</th>
<th>Description</th>
<th>Tags</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-field</code></td>
<td>base</td>
<td>Form field wrapper with spacing</td>
<td>form, field, input, wrapper</td>
</tr>
<tr>
<td><code>.en-field--inline</code></td>
<td>modifier</td>
<td>Horizontal label-input layout</td>
<td>form, field, layout, horizontal, inline</td>
</tr>
<tr>
<td><code>.en-field--floating</code></td>
<td>modifier</td>
<td>Floating label input</td>
<td>form, field, label, floating, animated</td>
</tr>
<tr>
<td><code>.en-field--span-full</code></td>
<td>modifier</td>
<td>Span full width in form grid</td>
<td>form, field, grid, full, width</td>
</tr>
<tr>
<td><code>.en-label</code></td>
<td>base</td>
<td>Form label styling</td>
<td>form, label, typography</td>
</tr>
<tr>
<td><code>.en-input</code></td>
<td>base</td>
<td>Text input field</td>
<td>form, input, text, field</td>
</tr>
<tr>
<td><code>.en-input--sm</code></td>
<td>modifier</td>
<td>Small text input</td>
<td>form, input, text, size, small</td>
</tr>
<tr>
<td><code>.en-input--lg</code></td>
<td>modifier</td>
<td>Large text input</td>
<td>form, input, text, size, large</td>
</tr>
<tr>
<td><code>.en-input--ghost</code></td>
<td>modifier</td>
<td>Borderless input (border on hover/focus)</td>
<td>form, input, text, ghost, minimal</td>
</tr>
<tr>
<td><code>.en-select</code></td>
<td>base</td>
<td>Select dropdown field</td>
<td>form, select, dropdown, field</td>
</tr>
<tr>
<td><code>.en-select--sm</code></td>
<td>modifier</td>
<td>Small select dropdown</td>
<td>form, select, dropdown, size, small</td>
</tr>
<tr>
<td><code>.en-select--lg</code></td>
<td>modifier</td>
<td>Large select dropdown</td>
<td>form, select, dropdown, size, large</td>
</tr>
<tr>
<td><code>.en-textarea</code></td>
<td>base</td>
<td>Textarea field</td>
<td>form, textarea, text, multiline, field</td>
</tr>
<tr>
<td><code>.en-textarea--sm</code></td>
<td>modifier</td>
<td>Small textarea</td>
<td>form, textarea, text, size, small</td>
</tr>
<tr>
<td><code>.en-textarea--lg</code></td>
<td>modifier</td>
<td>Large textarea</td>
<td>form, textarea, text, size, large</td>
</tr>
<tr>
<td><code>.en-textarea--ghost</code></td>
<td>modifier</td>
<td>Borderless textarea (border on hover/focus)</td>
<td>form, textarea, text, ghost, minimal</td>
</tr>
<tr>
<td><code>.en-hint</code></td>
<td>base</td>
<td>Form field hint text</td>
<td>form, hint, help, text, description</td>
</tr>
<tr>
<td><code>.en-error</code></td>
<td>base</td>
<td>Form field error message</td>
<td>form, error, validation, message</td>
</tr>
<tr>
<td><code>.en-check</code></td>
<td>base</td>
<td>Checkbox wrapper</td>
<td>form, checkbox, input, boolean</td>
</tr>
<tr>
<td><code>.en-radio</code></td>
<td>base</td>
<td>Radio button wrapper</td>
<td>form, radio, input, choice</td>
</tr>
<tr>
<td><code>.en-switch</code></td>
<td>base</td>
<td>Toggle switch component</td>
<td>form, switch, toggle, boolean</td>
</tr>
<tr>
<td><code>.en-switch__track</code></td>
<td>element</td>
<td>Toggle switch track background</td>
<td>form, switch, toggle, track</td>
</tr>
<tr>
<td><code>.en-form-grid</code></td>
<td>base</td>
<td>Responsive form grid layout</td>
<td>form, layout, grid, responsive</td>
</tr>
<tr>
<td><code>.en-form-grid--cols-2</code></td>
<td>modifier</td>
<td>2-column form grid (tablet+)</td>
<td>form, layout, grid, columns, responsive</td>
</tr>
<tr>
<td><code>.en-form-grid--cols-3</code></td>
<td>modifier</td>
<td>3-column form grid (tablet+)</td>
<td>form, layout, grid, columns, responsive</td>
</tr>
<tr>
<td><code>.en-form-grid--cols-4</code></td>
<td>modifier</td>
<td>4-column form grid (tablet+)</td>
<td>form, layout, grid, columns, responsive</td>
</tr>
<tr>
<td><code>.en-input-group</code></td>
<td>base</td>
<td>Join addons to input field</td>
<td>form, input, group, addon, composite</td>
</tr>
<tr>
<td><code>.en-input-group--sm</code></td>
<td>modifier</td>
<td>Small input group</td>
<td>form, input, group, size, small</td>
</tr>
<tr>
<td><code>.en-input-group--lg</code></td>
<td>modifier</td>
<td>Large input group</td>
<td>form, input, group, size, large</td>
</tr>
<tr>
<td><code>.en-input-group__addon</code></td>
<td>element</td>
<td>Non-interactive input addon</td>
<td>form, input, group, addon, prefix, suffix</td>
</tr>
<tr>
<td><code>.en-input-group__fixed</code></td>
<td>element</td>
<td>Fixed-width input in group</td>
<td>form, input, group, fixed, width</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="components">Components</h2>
<p>Pre-built UI components including buttons, cards, modals, and more.</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class/Token</th>
<th>Type</th>
<th>Description</th>
<th>Tags</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-btn</code></td>
<td>base</td>
<td>Base button component</td>
<td>button, interactive, action, click</td>
</tr>
<tr>
<td><code>.en-btn--primary</code></td>
<td>modifier</td>
<td>Primary button variant</td>
<td>button, primary, accent, cta</td>
</tr>
<tr>
<td><code>.en-btn--outline</code></td>
<td>modifier</td>
<td>Outline button variant</td>
<td>button, outline, secondary, border</td>
</tr>
<tr>
<td><code>.en-btn--danger</code></td>
<td>modifier</td>
<td>Danger button variant</td>
<td>button, danger, destructive, delete, error</td>
</tr>
<tr>
<td><code>.en-btn--ghost</code></td>
<td>modifier</td>
<td>Ghost button variant (minimal)</td>
<td>button, ghost, minimal, transparent</td>
</tr>
<tr>
<td><code>.en-btn--sm</code></td>
<td>modifier</td>
<td>Small button size</td>
<td>button, size, small, compact</td>
</tr>
<tr>
<td><code>.en-btn--lg</code></td>
<td>modifier</td>
<td>Large button size</td>
<td>button, size, large</td>
</tr>
<tr>
<td><code>.en-btn--full</code></td>
<td>modifier</td>
<td>Full width button</td>
<td>button, width, full, block</td>
</tr>
<tr>
<td><code>.en-btn--round</code></td>
<td>modifier</td>
<td>Fully rounded button</td>
<td>button, rounded, pill, shape</td>
</tr>
<tr>
<td><code>.en-card</code></td>
<td>base</td>
<td>Card container component</td>
<td>card, container, surface, box</td>
</tr>
<tr>
<td><code>.en-card__header</code></td>
<td>element</td>
<td>Card header section</td>
<td>card, header, title, section</td>
</tr>
<tr>
<td><code>.en-card__title</code></td>
<td>element</td>
<td>Card title text</td>
<td>card, title, heading, text</td>
</tr>
<tr>
<td><code>.en-card__subtitle</code></td>
<td>element</td>
<td>Card subtitle text</td>
<td>card, subtitle, text, meta</td>
</tr>
<tr>
<td><code>.en-card__body</code></td>
<td>element</td>
<td>Card main content area</td>
<td>card, body, content, section</td>
</tr>
<tr>
<td><code>.en-card__footer</code></td>
<td>element</td>
<td>Card footer section</td>
<td>card, footer, actions, section</td>
</tr>
<tr>
<td><code>.en-card__image</code></td>
<td>element</td>
<td>Card image element</td>
<td>card, image, media, thumbnail</td>
</tr>
<tr>
<td><code>.en-card--flush</code></td>
<td>modifier</td>
<td>Card without body padding</td>
<td>card, flush, padding, full-bleed</td>
</tr>
<tr>
<td><code>.en-card--hover</code></td>
<td>modifier</td>
<td>Card with hover lift effect</td>
<td>card, hover, interactive, animation</td>
</tr>
<tr>
<td><code>.en-badge</code></td>
<td>base</td>
<td>Badge/label component</td>
<td>badge, label, tag, indicator, pill</td>
</tr>
<tr>
<td><code>.en-badge--primary</code></td>
<td>modifier</td>
<td>Primary badge variant</td>
<td>badge, primary, accent</td>
</tr>
<tr>
<td><code>.en-badge--success</code></td>
<td>modifier</td>
<td>Success badge variant</td>
<td>badge, success, positive, green</td>
</tr>
<tr>
<td><code>.en-badge--danger</code></td>
<td>modifier</td>
<td>Danger badge variant</td>
<td>badge, danger, error, negative, red</td>
</tr>
<tr>
<td><code>.en-alert</code></td>
<td>base</td>
<td>Alert/notification box</td>
<td>alert, notification, message, banner</td>
</tr>
<tr>
<td><code>.en-alert--success</code></td>
<td>modifier</td>
<td>Success alert variant</td>
<td>alert, success, positive, confirmation</td>
</tr>
<tr>
<td><code>.en-alert--warning</code></td>
<td>modifier</td>
<td>Warning alert variant</td>
<td>alert, warning, caution, attention</td>
</tr>
<tr>
<td><code>.en-alert--danger</code></td>
<td>modifier</td>
<td>Danger alert variant</td>
<td>alert, danger, error, critical</td>
</tr>
<tr>
<td><code>.en-navbar</code></td>
<td>base</td>
<td>Navigation bar component</td>
<td>navbar, navigation, header, menu</td>
</tr>
<tr>
<td><code>.en-navbar__brand</code></td>
<td>element</td>
<td>Navbar brand/logo section</td>
<td>navbar, brand, logo, identity</td>
</tr>
<tr>
<td><code>.en-navbar__links</code></td>
<td>element</td>
<td>Navbar navigation links</td>
<td>navbar, links, navigation, menu</td>
</tr>
<tr>
<td><code>.en-tabs</code></td>
<td>base</td>
<td>Tab navigation component</td>
<td>tabs, navigation, segmented, switcher</td>
</tr>
<tr>
<td><code>.en-tabs__list</code></td>
<td>element</td>
<td>Tab navigation list</td>
<td>tabs, list, navigation</td>
</tr>
<tr>
<td><code>.en-tabs__tab</code></td>
<td>element</td>
<td>Individual tab button</td>
<td>tabs, tab, button, navigation</td>
</tr>
<tr>
<td><code>.en-tabs__panel</code></td>
<td>element</td>
<td>Tab content panel</td>
<td>tabs, panel, content, section</td>
</tr>
<tr>
<td><code>.en-modal</code></td>
<td>base</td>
<td>Modal dialog component</td>
<td>modal, dialog, popup, overlay, lightbox</td>
</tr>
<tr>
<td><code>.en-modal__overlay</code></td>
<td>element</td>
<td>Modal backdrop overlay</td>
<td>modal, overlay, backdrop, scrim</td>
</tr>
<tr>
<td><code>.en-modal__dialog</code></td>
<td>element</td>
<td>Modal dialog container</td>
<td>modal, dialog, container</td>
</tr>
<tr>
<td><code>.en-modal__header</code></td>
<td>element</td>
<td>Modal header section</td>
<td>modal, header, title</td>
</tr>
<tr>
<td><code>.en-modal__title</code></td>
<td>element</td>
<td>Modal title text</td>
<td>modal, title, heading</td>
</tr>
<tr>
<td><code>.en-modal__close</code></td>
<td>element</td>
<td>Modal close button</td>
<td>modal, close, dismiss, button</td>
</tr>
<tr>
<td><code>.en-modal__body</code></td>
<td>element</td>
<td>Modal body content</td>
<td>modal, body, content</td>
</tr>
<tr>
<td><code>.en-modal__footer</code></td>
<td>element</td>
<td>Modal footer section</td>
<td>modal, footer, actions</td>
</tr>
<tr>
<td><code>.en-offcanvas</code></td>
<td>base</td>
<td>Off-canvas panel component</td>
<td>offcanvas, drawer, sidebar, slide, panel</td>
</tr>
<tr>
<td><code>.en-offcanvas--start</code></td>
<td>modifier</td>
<td>Off-canvas from start (left)</td>
<td>offcanvas, drawer, start, left</td>
</tr>
<tr>
<td><code>.en-offcanvas--end</code></td>
<td>modifier</td>
<td>Off-canvas from end (right)</td>
<td>offcanvas, drawer, end, right</td>
</tr>
<tr>
<td><code>.en-offcanvas__header</code></td>
<td>element</td>
<td>Off-canvas header</td>
<td>offcanvas, drawer, header</td>
</tr>
<tr>
<td><code>.en-offcanvas__body</code></td>
<td>element</td>
<td>Off-canvas body content</td>
<td>offcanvas, drawer, body, content</td>
</tr>
<tr>
<td><code>.en-offcanvas__backdrop</code></td>
<td>element</td>
<td>Off-canvas backdrop</td>
<td>offcanvas, drawer, backdrop, overlay</td>
</tr>
<tr>
<td><code>.en-sidebar</code></td>
<td>base</td>
<td>Responsive sidebar component</td>
<td>sidebar, navigation, menu, aside, responsive</td>
</tr>
<tr>
<td><code>.en-sidebar__header</code></td>
<td>element</td>
<td>Sidebar header section</td>
<td>sidebar, header, title</td>
</tr>
<tr>
<td><code>.en-sidebar__body</code></td>
<td>element</td>
<td>Sidebar body content</td>
<td>sidebar, body, content, navigation</td>
</tr>
<tr>
<td><code>.en-sidebar__backdrop</code></td>
<td>element</td>
<td>Sidebar backdrop overlay</td>
<td>sidebar, backdrop, overlay, mobile</td>
</tr>
<tr>
<td><code>.en-table</code></td>
<td>base</td>
<td>Enhanced table component</td>
<td>table, data, grid, tabular</td>
</tr>
<tr>
<td><code>.en-table--hover</code></td>
<td>modifier</td>
<td>Table with row hover effect</td>
<td>table, hover, interactive</td>
</tr>
<tr>
<td><code>.en-table--striped</code></td>
<td>modifier</td>
<td>Striped table rows</td>
<td>table, striped, zebra, alternating</td>
</tr>
<tr>
<td><code>.en-table--bordered</code></td>
<td>modifier</td>
<td>Table with borders</td>
<td>table, bordered, lines</td>
</tr>
<tr>
<td><code>.en-table__sticky-header</code></td>
<td>element</td>
<td>Sticky table header</td>
<td>table, sticky, header, fixed</td>
</tr>
<tr>
<td><code>.en-table__col-sticky</code></td>
<td>element</td>
<td>Sticky table column</td>
<td>table, sticky, column, fixed</td>
</tr>
<tr>
<td><code>.en-breadcrumb</code></td>
<td>base</td>
<td>Breadcrumb navigation</td>
<td>breadcrumb, navigation, hierarchy, path</td>
</tr>
<tr>
<td><code>.en-pagination</code></td>
<td>base</td>
<td>Pagination navigation</td>
<td>pagination, navigation, paging, pages</td>
</tr>
<tr>
<td><code>.en-pagination__link</code></td>
<td>element</td>
<td>Pagination link button</td>
<td>pagination, link, button, page</td>
</tr>
<tr>
<td><code>.en-pagination__active</code></td>
<td>element</td>
<td>Active pagination page</td>
<td>pagination, active, current</td>
</tr>
<tr>
<td><code>.en-pagination__disabled</code></td>
<td>element</td>
<td>Disabled pagination link</td>
<td>pagination, disabled, inactive</td>
</tr>
<tr>
<td><code>.en-avatar</code></td>
<td>base</td>
<td>Avatar/profile image</td>
<td>avatar, profile, image, user, photo</td>
</tr>
<tr>
<td><code>.en-avatar--sm</code></td>
<td>modifier</td>
<td>Small avatar size</td>
<td>avatar, size, small</td>
</tr>
<tr>
<td><code>.en-avatar--lg</code></td>
<td>modifier</td>
<td>Large avatar size</td>
<td>avatar, size, large</td>
</tr>
<tr>
<td><code>.en-avatar-group</code></td>
<td>base</td>
<td>Overlapping avatar group</td>
<td>avatar, group, stack, multiple, team</td>
</tr>
<tr>
<td><code>.en-list-group</code></td>
<td>base</td>
<td>List group component</td>
<td>list, group, menu, items</td>
</tr>
<tr>
<td><code>.en-list-group__item</code></td>
<td>element</td>
<td>List group item</td>
<td>list, item, entry</td>
</tr>
<tr>
<td><code>.en-list-group__item--active</code></td>
<td>element</td>
<td>Active list item</td>
<td>list, item, active, selected</td>
</tr>
<tr>
<td><code>.en-accordion</code></td>
<td>base</td>
<td>Accordion container</td>
<td>accordion, collapse, expand, toggle</td>
</tr>
<tr>
<td><code>.en-accordion__item</code></td>
<td>element</td>
<td>Accordion item</td>
<td>accordion, item, section</td>
</tr>
<tr>
<td><code>.en-accordion__body</code></td>
<td>element</td>
<td>Accordion body content</td>
<td>accordion, body, content, collapsible</td>
</tr>
<tr>
<td><code>.en-tooltip</code></td>
<td>base</td>
<td>Tooltip component</td>
<td>tooltip, hint, popup, help</td>
</tr>
<tr>
<td><code>.en-dropdown</code></td>
<td>base</td>
<td>Dropdown menu container</td>
<td>dropdown, menu, select, popover</td>
</tr>
<tr>
<td><code>.en-dropdown__menu</code></td>
<td>element</td>
<td>Dropdown menu list</td>
<td>dropdown, menu, list, items</td>
</tr>
<tr>
<td><code>.en-dropdown__item</code></td>
<td>element</td>
<td>Dropdown menu item</td>
<td>dropdown, menu, item, option</td>
</tr>
<tr>
<td><code>.en-progress</code></td>
<td>base</td>
<td>Progress bar component</td>
<td>progress, bar, loading, indicator</td>
</tr>
<tr>
<td><code>.en-progress__bar</code></td>
<td>element</td>
<td>Progress bar fill</td>
<td>progress, bar, fill, indicator</td>
</tr>
<tr>
<td><code>.en-progress-native</code></td>
<td>base</td>
<td>Native progress element styling</td>
<td>progress, native, html5</td>
</tr>
<tr>
<td><code>.en-spinner</code></td>
<td>base</td>
<td>Loading spinner</td>
<td>spinner, loading, indicator, busy, wait</td>
</tr>
<tr>
<td><code>.en-skeleton</code></td>
<td>base</td>
<td>Skeleton loading placeholder</td>
<td>skeleton, loading, placeholder, shimmer</td>
</tr>
<tr>
<td><code>.en-toast</code></td>
<td>base</td>
<td>Toast notification</td>
<td>toast, notification, alert, snackbar, message</td>
</tr>
<tr>
<td><code>.en-stepper</code></td>
<td>base</td>
<td>Step indicator component</td>
<td>stepper, steps, progress, wizard, flow</td>
</tr>
<tr>
<td><code>.en-stepper__step</code></td>
<td>element</td>
<td>Individual step</td>
<td>stepper, step, item</td>
</tr>
<tr>
<td><code>.en-stepper__active</code></td>
<td>element</td>
<td>Active/current step</td>
<td>stepper, step, active, current</td>
</tr>
<tr>
<td><code>.en-empty</code></td>
<td>base</td>
<td>Empty state component</td>
<td>empty, state, placeholder, no-data, zero-state</td>
</tr>
<tr>
<td><code>.en-empty__icon</code></td>
<td>element</td>
<td>Empty state icon</td>
<td>empty, state, icon, illustration</td>
</tr>
<tr>
<td><code>.en-rating</code></td>
<td>base</td>
<td>Interactive star rating</td>
<td>rating, stars, review, feedback, score</td>
</tr>
<tr>
<td><code>.en-rating--readonly</code></td>
<td>modifier</td>
<td>Read-only rating display</td>
<td>rating, stars, readonly, display</td>
</tr>
<tr>
<td><code>.en-timeline</code></td>
<td>base</td>
<td>Timeline component</td>
<td>timeline, history, events, chronology</td>
</tr>
<tr>
<td><code>.en-timeline__item</code></td>
<td>element</td>
<td>Timeline event item</td>
<td>timeline, item, event, entry</td>
</tr>
<tr>
<td><code>.en-timeline__title</code></td>
<td>element</td>
<td>Timeline event title</td>
<td>timeline, title, heading</td>
</tr>
<tr>
<td><code>.en-popover</code></td>
<td>base</td>
<td>Popover component</td>
<td>popover, popup, overlay, tooltip</td>
</tr>
<tr>
<td><code>.en-popover__content</code></td>
<td>element</td>
<td>Popover content container</td>
<td>popover, content, body</td>
</tr>
<tr>
<td><code>.en-popover__title</code></td>
<td>element</td>
<td>Popover title</td>
<td>popover, title, heading</td>
</tr>
<tr>
<td><code>.en-segmented</code></td>
<td>base</td>
<td>Segmented control</td>
<td>segmented, toggle, tabs, switcher, button-group</td>
</tr>
<tr>
<td><code>.en-carousel</code></td>
<td>base</td>
<td>Carousel/slider component</td>
<td>carousel, slider, slideshow, gallery</td>
</tr>
<tr>
<td><code>.en-carousel__track</code></td>
<td>element</td>
<td>Carousel slide track</td>
<td>carousel, track, slides, container</td>
</tr>
<tr>
<td><code>.en-carousel__slide</code></td>
<td>element</td>
<td>Carousel slide</td>
<td>carousel, slide, item</td>
</tr>
<tr>
<td><code>.en-carousel__dot</code></td>
<td>element</td>
<td>Carousel navigation dot</td>
<td>carousel, dot, indicator, pagination</td>
</tr>
<tr>
<td><code>.en-stat</code></td>
<td>base</td>
<td>Statistic card component</td>
<td>stat, statistic, metric, number, kpi</td>
</tr>
<tr>
<td><code>.en-stat__label</code></td>
<td>element</td>
<td>Stat label text</td>
<td>stat, label, title</td>
</tr>
<tr>
<td><code>.en-stat__value</code></td>
<td>element</td>
<td>Stat value number</td>
<td>stat, value, number, metric</td>
</tr>
<tr>
<td><code>.en-stat__delta</code></td>
<td>element</td>
<td>Stat change indicator</td>
<td>stat, delta, change, trend</td>
</tr>
<tr>
<td><code>.en-stat__delta--up</code></td>
<td>element</td>
<td>Positive stat change</td>
<td>stat, delta, increase, positive, up</td>
</tr>
<tr>
<td><code>.en-stat__delta--down</code></td>
<td>element</td>
<td>Negative stat change</td>
<td>stat, delta, decrease, negative, down</td>
</tr>
<tr>
<td><code>.en-descriptions</code></td>
<td>base</td>
<td>Description list component</td>
<td>descriptions, list, data, key-value</td>
</tr>
<tr>
<td><code>.en-descriptions--bordered</code></td>
<td>modifier</td>
<td>Bordered descriptions</td>
<td>descriptions, bordered, table</td>
</tr>
<tr>
<td><code>.en-chip</code></td>
<td>base</td>
<td>Chip/tag component</td>
<td>chip, tag, label, token, removable</td>
</tr>
<tr>
<td><code>.en-chip__remove</code></td>
<td>element</td>
<td>Chip remove button</td>
<td>chip, remove, close, delete</td>
</tr>
<tr>
<td><code>.en-collapse</code></td>
<td>base</td>
<td>Collapse component</td>
<td>collapse, expand, toggle, show-hide</td>
</tr>
<tr>
<td><code>.en-collapse__trigger</code></td>
<td>element</td>
<td>Collapse trigger button</td>
<td>collapse, trigger, button, toggle</td>
</tr>
<tr>
<td><code>.en-collapse__content</code></td>
<td>element</td>
<td>Collapsible content</td>
<td>collapse, content, body, hidden</td>
</tr>
<tr>
<td><code>.en-divider</code></td>
<td>base</td>
<td>Divider/separator line</td>
<td>divider, separator, line, hr, border</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="utility-classes">Utility Classes</h2>
<p>Single-purpose utility classes for spacing, typography, colors, and responsive design.</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class/Token</th>
<th>Type</th>
<th>Description</th>
<th>Tags</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-text-xs</code></td>
<td>utility</td>
<td>Extra small text size</td>
<td>text, typography, size, font</td>
</tr>
<tr>
<td><code>.en-text-sm</code></td>
<td>utility</td>
<td>Small text size</td>
<td>text, typography, size, font</td>
</tr>
<tr>
<td><code>.en-text-lg</code></td>
<td>utility</td>
<td>Large text size</td>
<td>text, typography, size, font</td>
</tr>
<tr>
<td><code>.en-text-xl</code></td>
<td>utility</td>
<td>Extra large text size</td>
<td>text, typography, size, font</td>
</tr>
<tr>
<td><code>.en-text-2xl</code></td>
<td>utility</td>
<td>2x extra large text size</td>
<td>text, typography, size, font, heading</td>
</tr>
<tr>
<td><code>.en-text-3xl</code></td>
<td>utility</td>
<td>3x extra large text size</td>
<td>text, typography, size, font, heading</td>
</tr>
<tr>
<td><code>.en-text-4xl</code></td>
<td>utility</td>
<td>4x extra large text size</td>
<td>text, typography, size, font, heading</td>
</tr>
<tr>
<td><code>.en-text-5xl</code></td>
<td>utility</td>
<td>5x extra large text size</td>
<td>text, typography, size, font, heading</td>
</tr>
<tr>
<td><code>.en-text-6xl</code></td>
<td>utility</td>
<td>6x extra large text size</td>
<td>text, typography, size, font, heading</td>
</tr>
<tr>
<td><code>.en-font-normal</code></td>
<td>utility</td>
<td>Normal font weight (400)</td>
<td>text, typography, weight, font</td>
</tr>
<tr>
<td><code>.en-font-medium</code></td>
<td>utility</td>
<td>Medium font weight (500)</td>
<td>text, typography, weight, font</td>
</tr>
<tr>
<td><code>.en-font-semibold</code></td>
<td>utility</td>
<td>Semi-bold font weight (600)</td>
<td>text, typography, weight, font</td>
</tr>
<tr>
<td><code>.en-font-bold</code></td>
<td>utility</td>
<td>Bold font weight (700)</td>
<td>text, typography, weight, font</td>
</tr>
<tr>
<td><code>.en-text-italic</code></td>
<td>utility</td>
<td>Italic text style</td>
<td>text, typography, style</td>
</tr>
<tr>
<td><code>.en-text-muted</code></td>
<td>utility</td>
<td>Muted text color</td>
<td>text, typography, color</td>
</tr>
<tr>
<td><code>.en-text-primary</code></td>
<td>utility</td>
<td>Primary color text</td>
<td>text, typography, color, primary</td>
</tr>
<tr>
<td><code>.en-text-success</code></td>
<td>utility</td>
<td>Success color text</td>
<td>text, typography, color, success</td>
</tr>
<tr>
<td><code>.en-text-danger</code></td>
<td>utility</td>
<td>Danger color text</td>
<td>text, typography, color, danger, error</td>
</tr>
<tr>
<td><code>.en-text-start</code></td>
<td>utility</td>
<td>Align text to start</td>
<td>text, typography, align, alignment</td>
</tr>
<tr>
<td><code>.en-text-center</code></td>
<td>utility</td>
<td>Center align text</td>
<td>text, typography, align, alignment, center</td>
</tr>
<tr>
<td><code>.en-text-end</code></td>
<td>utility</td>
<td>Align text to end</td>
<td>text, typography, align, alignment</td>
</tr>
<tr>
<td><code>.en-tracking-tight</code></td>
<td>utility</td>
<td>Tight letter spacing</td>
<td>text, typography, spacing, tracking</td>
</tr>
<tr>
<td><code>.en-tracking-normal</code></td>
<td>utility</td>
<td>Normal letter spacing</td>
<td>text, typography, spacing, tracking</td>
</tr>
<tr>
<td><code>.en-tracking-wide</code></td>
<td>utility</td>
<td>Wide letter spacing</td>
<td>text, typography, spacing, tracking</td>
</tr>
<tr>
<td><code>.en-leading-tight</code></td>
<td>utility</td>
<td>Tight line height</td>
<td>text, typography, line-height, leading</td>
</tr>
<tr>
<td><code>.en-leading-snug</code></td>
<td>utility</td>
<td>Snug line height</td>
<td>text, typography, line-height, leading</td>
</tr>
<tr>
<td><code>.en-leading-normal</code></td>
<td>utility</td>
<td>Normal line height</td>
<td>text, typography, line-height, leading</td>
</tr>
<tr>
<td><code>.en-leading-relaxed</code></td>
<td>utility</td>
<td>Relaxed line height</td>
<td>text, typography, line-height, leading</td>
</tr>
<tr>
<td><code>.en-truncate</code></td>
<td>utility</td>
<td>Truncate text with ellipsis</td>
<td>text, typography, overflow, ellipsis</td>
</tr>
<tr>
<td><code>.en-clamp-2</code></td>
<td>utility</td>
<td>Clamp text to 2 lines</td>
<td>text, typography, overflow, clamp, multiline</td>
</tr>
<tr>
<td><code>.en-clamp-3</code></td>
<td>utility</td>
<td>Clamp text to 3 lines</td>
<td>text, typography, overflow, clamp, multiline</td>
</tr>
<tr>
<td><code>.en-p-0</code></td>
<td>utility</td>
<td>Remove all padding</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-1</code></td>
<td>utility</td>
<td>Padding size 1</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-2</code></td>
<td>utility</td>
<td>Padding size 2</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-3</code></td>
<td>utility</td>
<td>Padding size 3</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-4</code></td>
<td>utility</td>
<td>Padding size 4</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-5</code></td>
<td>utility</td>
<td>Padding size 5</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-6</code></td>
<td>utility</td>
<td>Padding size 6</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-8</code></td>
<td>utility</td>
<td>Padding size 8</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-10</code></td>
<td>utility</td>
<td>Padding size 10</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-px-0</code></td>
<td>utility</td>
<td>Remove horizontal padding</td>
<td>spacing, padding, horizontal</td>
</tr>
<tr>
<td><code>.en-px-4</code></td>
<td>utility</td>
<td>Horizontal padding size 4</td>
<td>spacing, padding, horizontal</td>
</tr>
<tr>
<td><code>.en-py-0</code></td>
<td>utility</td>
<td>Remove vertical padding</td>
<td>spacing, padding, vertical</td>
</tr>
<tr>
<td><code>.en-py-4</code></td>
<td>utility</td>
<td>Vertical padding size 4</td>
<td>spacing, padding, vertical</td>
</tr>
<tr>
<td><code>.en-pt-4</code></td>
<td>utility</td>
<td>Padding top size 4</td>
<td>spacing, padding, top</td>
</tr>
<tr>
<td><code>.en-pb-4</code></td>
<td>utility</td>
<td>Padding bottom size 4</td>
<td>spacing, padding, bottom</td>
</tr>
<tr>
<td><code>.en-ps-4</code></td>
<td>utility</td>
<td>Padding start size 4</td>
<td>spacing, padding, start, left</td>
</tr>
<tr>
<td><code>.en-pe-4</code></td>
<td>utility</td>
<td>Padding end size 4</td>
<td>spacing, padding, end, right</td>
</tr>
<tr>
<td><code>.en-m-0</code></td>
<td>utility</td>
<td>Remove all margin</td>
<td>spacing, margin</td>
</tr>
<tr>
<td><code>.en-m-4</code></td>
<td>utility</td>
<td>Margin size 4</td>
<td>spacing, margin</td>
</tr>
<tr>
<td><code>.en-m-auto</code></td>
<td>utility</td>
<td>Auto margin (centering)</td>
<td>spacing, margin, center, auto</td>
</tr>
<tr>
<td><code>.en-mx-auto</code></td>
<td>utility</td>
<td>Auto horizontal margin (center horizontally)</td>
<td>spacing, margin, horizontal, center, auto</td>
</tr>
<tr>
<td><code>.en-my-4</code></td>
<td>utility</td>
<td>Vertical margin size 4</td>
<td>spacing, margin, vertical</td>
</tr>
<tr>
<td><code>.en-mt-4</code></td>
<td>utility</td>
<td>Margin top size 4</td>
<td>spacing, margin, top</td>
</tr>
<tr>
<td><code>.en-mb-4</code></td>
<td>utility</td>
<td>Margin bottom size 4</td>
<td>spacing, margin, bottom</td>
</tr>
<tr>
<td><code>.en-ms-4</code></td>
<td>utility</td>
<td>Margin start size 4</td>
<td>spacing, margin, start, left</td>
</tr>
<tr>
<td><code>.en-me-4</code></td>
<td>utility</td>
<td>Margin end size 4</td>
<td>spacing, margin, end, right</td>
</tr>
<tr>
<td><code>.en--mt-4</code></td>
<td>utility</td>
<td>Negative margin top size 4</td>
<td>spacing, margin, negative, top</td>
</tr>
<tr>
<td><code>.en-gap-0</code></td>
<td>utility</td>
<td>Remove gap</td>
<td>spacing, gap, flex, grid</td>
</tr>
<tr>
<td><code>.en-gap-4</code></td>
<td>utility</td>
<td>Gap size 4</td>
<td>spacing, gap, flex, grid</td>
</tr>
<tr>
<td><code>.en-gap-x-4</code></td>
<td>utility</td>
<td>Horizontal gap size 4</td>
<td>spacing, gap, flex, grid, horizontal</td>
</tr>
<tr>
<td><code>.en-gap-y-4</code></td>
<td>utility</td>
<td>Vertical gap size 4</td>
<td>spacing, gap, flex, grid, vertical</td>
</tr>
<tr>
<td><code>.en-hidden</code></td>
<td>utility</td>
<td>Hide element (display: none)</td>
<td>display, visibility, hide</td>
</tr>
<tr>
<td><code>.en-block</code></td>
<td>utility</td>
<td>Display as block</td>
<td>display, block</td>
</tr>
<tr>
<td><code>.en-inline</code></td>
<td>utility</td>
<td>Display as inline</td>
<td>display, inline</td>
</tr>
<tr>
<td><code>.en-inline-block</code></td>
<td>utility</td>
<td>Display as inline-block</td>
<td>display, inline, block</td>
</tr>
<tr>
<td><code>.en-flex-display</code></td>
<td>utility</td>
<td>Display as flex</td>
<td>display, flex, layout</td>
</tr>
<tr>
<td><code>.en-grid-display</code></td>
<td>utility</td>
<td>Display as grid</td>
<td>display, grid, layout</td>
</tr>
<tr>
<td><code>.en-visible</code></td>
<td>utility</td>
<td>Make element visible</td>
<td>display, visibility, show</td>
</tr>
<tr>
<td><code>.en-invisible</code></td>
<td>utility</td>
<td>Hide but reserve space (visibility: hidden)</td>
<td>display, visibility, hide, space</td>
</tr>
<tr>
<td><code>.en-sr-only</code></td>
<td>utility</td>
<td>Screen reader only (visually hidden)</td>
<td>accessibility, a11y, screen-reader, hide</td>
</tr>
<tr>
<td><code>.en-sr-only-focusable</code></td>
<td>utility</td>
<td>Hidden until focused (skip links)</td>
<td>accessibility, a11y, screen-reader, focus, skip-link</td>
</tr>
<tr>
<td><code>.en-mobile-only</code></td>
<td>utility</td>
<td>Visible only on mobile (&lt; 480px)</td>
<td>responsive, mobile, visibility, breakpoint</td>
</tr>
<tr>
<td><code>.en-tablet-only</code></td>
<td>utility</td>
<td>Visible only on tablets (480px - 1023px)</td>
<td>responsive, tablet, visibility, breakpoint</td>
</tr>
<tr>
<td><code>.en-desktop-only</code></td>
<td>utility</td>
<td>Visible only on desktop (≥ 1024px)</td>
<td>responsive, desktop, visibility, breakpoint</td>
</tr>
<tr>
<td><code>.en-print-hidden</code></td>
<td>utility</td>
<td>Hidden when printing</td>
<td>print, visibility, hide</td>
</tr>
<tr>
<td><code>.en-print-only</code></td>
<td>utility</td>
<td>Visible only when printing</td>
<td>print, visibility, show</td>
</tr>
<tr>
<td><code>.en-border</code></td>
<td>utility</td>
<td>Add border on all sides</td>
<td>border, decoration</td>
</tr>
<tr>
<td><code>.en-border-0</code></td>
<td>utility</td>
<td>Remove border</td>
<td>border, decoration</td>
</tr>
<tr>
<td><code>.en-border-thick</code></td>
<td>utility</td>
<td>Thick border</td>
<td>border, decoration, thick</td>
</tr>
<tr>
<td><code>.en-border-t</code></td>
<td>utility</td>
<td>Border top</td>
<td>border, decoration, top</td>
</tr>
<tr>
<td><code>.en-border-r</code></td>
<td>utility</td>
<td>Border right</td>
<td>border, decoration, right</td>
</tr>
<tr>
<td><code>.en-border-b</code></td>
<td>utility</td>
<td>Border bottom</td>
<td>border, decoration, bottom</td>
</tr>
<tr>
<td><code>.en-border-l</code></td>
<td>utility</td>
<td>Border left</td>
<td>border, decoration, left</td>
</tr>
<tr>
<td><code>.en-rounded-0</code></td>
<td>utility</td>
<td>No border radius (sharp corners)</td>
<td>border, radius, decoration</td>
</tr>
<tr>
<td><code>.en-rounded-sm</code></td>
<td>utility</td>
<td>Small border radius</td>
<td>border, radius, decoration</td>
</tr>
<tr>
<td><code>.en-rounded</code></td>
<td>utility</td>
<td>Medium border radius</td>
<td>border, radius, decoration</td>
</tr>
<tr>
<td><code>.en-rounded-lg</code></td>
<td>utility</td>
<td>Large border radius</td>
<td>border, radius, decoration</td>
</tr>
<tr>
<td><code>.en-rounded-full</code></td>
<td>utility</td>
<td>Full border radius (pill shape)</td>
<td>border, radius, decoration, pill, circle</td>
</tr>
<tr>
<td><code>.en-rounded-circle</code></td>
<td>utility</td>
<td>Circular border radius (50%)</td>
<td>border, radius, decoration, circle</td>
</tr>
<tr>
<td><code>.en-shadow-sm</code></td>
<td>utility</td>
<td>Small box shadow</td>
<td>shadow, decoration, elevation</td>
</tr>
<tr>
<td><code>.en-shadow</code></td>
<td>utility</td>
<td>Medium box shadow</td>
<td>shadow, decoration, elevation</td>
</tr>
<tr>
<td><code>.en-shadow-lg</code></td>
<td>utility</td>
<td>Large box shadow</td>
<td>shadow, decoration, elevation</td>
</tr>
<tr>
<td><code>.en-bg-primary</code></td>
<td>utility</td>
<td>Primary background color</td>
<td>background, color, primary</td>
</tr>
<tr>
<td><code>.en-bg-surface</code></td>
<td>utility</td>
<td>Surface background color</td>
<td>background, color, surface</td>
</tr>
<tr>
<td><code>.en-bg-subtle</code></td>
<td>utility</td>
<td>Subtle background color</td>
<td>background, color, subtle</td>
</tr>
<tr>
<td><code>.en-opacity-50</code></td>
<td>utility</td>
<td>50% opacity</td>
<td>opacity, transparency</td>
</tr>
<tr>
<td><code>.en-opacity-75</code></td>
<td>utility</td>
<td>75% opacity</td>
<td>opacity, transparency</td>
</tr>
<tr>
<td><code>.en-aspect-square</code></td>
<td>utility</td>
<td>Square aspect ratio (1:1)</td>
<td>aspect-ratio, layout, square</td>
</tr>
<tr>
<td><code>.en-aspect-video</code></td>
<td>utility</td>
<td>Video aspect ratio (16:9)</td>
<td>aspect-ratio, layout, video</td>
</tr>
<tr>
<td><code>.en-backdrop-blur</code></td>
<td>utility</td>
<td>Backdrop blur effect</td>
<td>backdrop, blur, effect</td>
</tr>
<tr>
<td><code>.en-w-full</code></td>
<td>utility</td>
<td>Width 100%</td>
<td>sizing, width, full</td>
</tr>
<tr>
<td><code>.en-h-full</code></td>
<td>utility</td>
<td>Height 100%</td>
<td>sizing, height, full</td>
</tr>
<tr>
<td><code>.en-w-screen</code></td>
<td>utility</td>
<td>Width 100vw (full viewport)</td>
<td>sizing, width, viewport, full</td>
</tr>
<tr>
<td><code>.en-h-screen</code></td>
<td>utility</td>
<td>Height 100vh (full viewport)</td>
<td>sizing, height, viewport, full</td>
</tr>
<tr>
<td><code>.en-w-auto</code></td>
<td>utility</td>
<td>Width auto</td>
<td>sizing, width, auto</td>
</tr>
<tr>
<td><code>.en-h-auto</code></td>
<td>utility</td>
<td>Height auto</td>
<td>sizing, height, auto</td>
</tr>
<tr>
<td><code>.en-max-w-full</code></td>
<td>utility</td>
<td>Max-width 100%</td>
<td>sizing, width, max, constraint</td>
</tr>
<tr>
<td><code>.en-max-h-full</code></td>
<td>utility</td>
<td>Max-height 100%</td>
<td>sizing, height, max, constraint</td>
</tr>
<tr>
<td><code>.en-relative</code></td>
<td>utility</td>
<td>Position relative</td>
<td>position, layout</td>
</tr>
<tr>
<td><code>.en-absolute</code></td>
<td>utility</td>
<td>Position absolute</td>
<td>position, layout</td>
</tr>
<tr>
<td><code>.en-fixed</code></td>
<td>utility</td>
<td>Position fixed</td>
<td>position, layout</td>
</tr>
<tr>
<td><code>.en-sticky</code></td>
<td>utility</td>
<td>Position sticky</td>
<td>position, layout, sticky</td>
</tr>
<tr>
<td><code>.en-inset-0</code></td>
<td>utility</td>
<td>All edges at 0</td>
<td>position, layout, inset</td>
</tr>
<tr>
<td><code>.en-full-absolute</code></td>
<td>utility</td>
<td>Position absolute with inset: 0</td>
<td>position, layout, full, overlay</td>
</tr>
<tr>
<td><code>.en-full-fixed</code></td>
<td>utility</td>
<td>Position fixed with inset: 0</td>
<td>position, layout, full, overlay</td>
</tr>
<tr>
<td><code>.en-top-0</code></td>
<td>utility</td>
<td>Top edge at 0</td>
<td>position, layout, top</td>
</tr>
<tr>
<td><code>.en-right-0</code></td>
<td>utility</td>
<td>Right edge at 0</td>
<td>position, layout, right</td>
</tr>
<tr>
<td><code>.en-bottom-0</code></td>
<td>utility</td>
<td>Bottom edge at 0</td>
<td>position, layout, bottom</td>
</tr>
<tr>
<td><code>.en-left-0</code></td>
<td>utility</td>
<td>Left edge at 0</td>
<td>position, layout, left</td>
</tr>
<tr>
<td><code>.en-top-start</code></td>
<td>utility</td>
<td>Top-left corner with spacing</td>
<td>position, layout, corner, top, left</td>
</tr>
<tr>
<td><code>.en-top-end</code></td>
<td>utility</td>
<td>Top-right corner with spacing</td>
<td>position, layout, corner, top, right</td>
</tr>
<tr>
<td><code>.en-bottom-start</code></td>
<td>utility</td>
<td>Bottom-left corner with spacing</td>
<td>position, layout, corner, bottom, left</td>
</tr>
<tr>
<td><code>.en-bottom-end</code></td>
<td>utility</td>
<td>Bottom-right corner with spacing</td>
<td>position, layout, corner, bottom, right</td>
</tr>
<tr>
<td><code>.en-overflow-hidden</code></td>
<td>utility</td>
<td>Hide overflow content</td>
<td>overflow, layout</td>
</tr>
<tr>
<td><code>.en-overflow-auto</code></td>
<td>utility</td>
<td>Auto overflow with scrollbar</td>
<td>overflow, layout, scroll</td>
</tr>
<tr>
<td><code>.en-animate-fade-in</code></td>
<td>utility</td>
<td>Fade in animation</td>
<td>animation, transition, fade</td>
</tr>
<tr>
<td><code>.en-animate-slide-up</code></td>
<td>utility</td>
<td>Slide up animation</td>
<td>animation, transition, slide</td>
</tr>
<tr>
<td><code>.en-animate-scale-in</code></td>
<td>utility</td>
<td>Scale in animation</td>
<td>animation, transition, scale</td>
</tr>
<tr>
<td><code>.en-text-sm</code></td>
<td>utility</td>
<td>Small text size</td>
<td>text, typography, size, font</td>
</tr>
<tr>
<td><code>.en-text-lg</code></td>
<td>utility</td>
<td>Large text size</td>
<td>text, typography, size, font</td>
</tr>
<tr>
<td><code>.en-text-xl</code></td>
<td>utility</td>
<td>Extra large text size</td>
<td>text, typography, size, font</td>
</tr>
<tr>
<td><code>.en-text-2xl</code></td>
<td>utility</td>
<td>2x extra large text size</td>
<td>text, typography, size, font, heading</td>
</tr>
<tr>
<td><code>.en-text-3xl</code></td>
<td>utility</td>
<td>3x extra large text size</td>
<td>text, typography, size, font, heading</td>
</tr>
<tr>
<td><code>.en-text-4xl</code></td>
<td>utility</td>
<td>4x extra large text size</td>
<td>text, typography, size, font, heading</td>
</tr>
<tr>
<td><code>.en-text-5xl</code></td>
<td>utility</td>
<td>5x extra large text size</td>
<td>text, typography, size, font, heading</td>
</tr>
<tr>
<td><code>.en-text-6xl</code></td>
<td>utility</td>
<td>6x extra large text size</td>
<td>text, typography, size, font, heading</td>
</tr>
<tr>
<td><code>.en-font-normal</code></td>
<td>utility</td>
<td>Normal font weight (400)</td>
<td>text, typography, weight, font</td>
</tr>
<tr>
<td><code>.en-font-medium</code></td>
<td>utility</td>
<td>Medium font weight (500)</td>
<td>text, typography, weight, font</td>
</tr>
<tr>
<td><code>.en-font-semibold</code></td>
<td>utility</td>
<td>Semi-bold font weight (600)</td>
<td>text, typography, weight, font</td>
</tr>
<tr>
<td><code>.en-font-bold</code></td>
<td>utility</td>
<td>Bold font weight (700)</td>
<td>text, typography, weight, font</td>
</tr>
<tr>
<td><code>.en-text-italic</code></td>
<td>utility</td>
<td>Italic text style</td>
<td>text, typography, style</td>
</tr>
<tr>
<td><code>.en-text-muted</code></td>
<td>utility</td>
<td>Muted text color</td>
<td>text, typography, color</td>
</tr>
<tr>
<td><code>.en-text-primary</code></td>
<td>utility</td>
<td>Primary color text</td>
<td>text, typography, color, primary</td>
</tr>
<tr>
<td><code>.en-text-success</code></td>
<td>utility</td>
<td>Success color text</td>
<td>text, typography, color, success</td>
</tr>
<tr>
<td><code>.en-text-danger</code></td>
<td>utility</td>
<td>Danger color text</td>
<td>text, typography, color, danger, error</td>
</tr>
<tr>
<td><code>.en-text-start</code></td>
<td>utility</td>
<td>Align text to start</td>
<td>text, typography, align, alignment</td>
</tr>
<tr>
<td><code>.en-text-center</code></td>
<td>utility</td>
<td>Center align text</td>
<td>text, typography, align, alignment, center</td>
</tr>
<tr>
<td><code>.en-text-end</code></td>
<td>utility</td>
<td>Align text to end</td>
<td>text, typography, align, alignment</td>
</tr>
<tr>
<td><code>.en-tracking-tight</code></td>
<td>utility</td>
<td>Tight letter spacing</td>
<td>text, typography, spacing, tracking</td>
</tr>
<tr>
<td><code>.en-tracking-normal</code></td>
<td>utility</td>
<td>Normal letter spacing</td>
<td>text, typography, spacing, tracking</td>
</tr>
<tr>
<td><code>.en-tracking-wide</code></td>
<td>utility</td>
<td>Wide letter spacing</td>
<td>text, typography, spacing, tracking</td>
</tr>
<tr>
<td><code>.en-leading-tight</code></td>
<td>utility</td>
<td>Tight line height</td>
<td>text, typography, line-height, leading</td>
</tr>
<tr>
<td><code>.en-leading-snug</code></td>
<td>utility</td>
<td>Snug line height</td>
<td>text, typography, line-height, leading</td>
</tr>
<tr>
<td><code>.en-leading-normal</code></td>
<td>utility</td>
<td>Normal line height</td>
<td>text, typography, line-height, leading</td>
</tr>
<tr>
<td><code>.en-leading-relaxed</code></td>
<td>utility</td>
<td>Relaxed line height</td>
<td>text, typography, line-height, leading</td>
</tr>
<tr>
<td><code>.en-truncate</code></td>
<td>utility</td>
<td>Truncate text with ellipsis</td>
<td>text, typography, overflow, ellipsis</td>
</tr>
<tr>
<td><code>.en-clamp-2</code></td>
<td>utility</td>
<td>Clamp text to 2 lines</td>
<td>text, typography, overflow, clamp, multiline</td>
</tr>
<tr>
<td><code>.en-clamp-3</code></td>
<td>utility</td>
<td>Clamp text to 3 lines</td>
<td>text, typography, overflow, clamp, multiline</td>
</tr>
<tr>
<td><code>.en-p-0</code></td>
<td>utility</td>
<td>Remove all padding</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-1</code></td>
<td>utility</td>
<td>Padding size 1</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-2</code></td>
<td>utility</td>
<td>Padding size 2</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-3</code></td>
<td>utility</td>
<td>Padding size 3</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-4</code></td>
<td>utility</td>
<td>Padding size 4</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-5</code></td>
<td>utility</td>
<td>Padding size 5</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-6</code></td>
<td>utility</td>
<td>Padding size 6</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-8</code></td>
<td>utility</td>
<td>Padding size 8</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-p-10</code></td>
<td>utility</td>
<td>Padding size 10</td>
<td>spacing, padding</td>
</tr>
<tr>
<td><code>.en-px-0</code></td>
<td>utility</td>
<td>Remove horizontal padding</td>
<td>spacing, padding, horizontal</td>
</tr>
<tr>
<td><code>.en-px-4</code></td>
<td>utility</td>
<td>Horizontal padding size 4</td>
<td>spacing, padding, horizontal</td>
</tr>
<tr>
<td><code>.en-py-0</code></td>
<td>utility</td>
<td>Remove vertical padding</td>
<td>spacing, padding, vertical</td>
</tr>
<tr>
<td><code>.en-py-4</code></td>
<td>utility</td>
<td>Vertical padding size 4</td>
<td>spacing, padding, vertical</td>
</tr>
<tr>
<td><code>.en-pt-4</code></td>
<td>utility</td>
<td>Padding top size 4</td>
<td>spacing, padding, top</td>
</tr>
<tr>
<td><code>.en-pb-4</code></td>
<td>utility</td>
<td>Padding bottom size 4</td>
<td>spacing, padding, bottom</td>
</tr>
<tr>
<td><code>.en-ps-4</code></td>
<td>utility</td>
<td>Padding start size 4</td>
<td>spacing, padding, start, left</td>
</tr>
<tr>
<td><code>.en-pe-4</code></td>
<td>utility</td>
<td>Padding end size 4</td>
<td>spacing, padding, end, right</td>
</tr>
<tr>
<td><code>.en-m-0</code></td>
<td>utility</td>
<td>Remove all margin</td>
<td>spacing, margin</td>
</tr>
<tr>
<td><code>.en-m-4</code></td>
<td>utility</td>
<td>Margin size 4</td>
<td>spacing, margin</td>
</tr>
<tr>
<td><code>.en-m-auto</code></td>
<td>utility</td>
<td>Auto margin (centering)</td>
<td>spacing, margin, center, auto</td>
</tr>
<tr>
<td><code>.en-mx-auto</code></td>
<td>utility</td>
<td>Auto horizontal margin (center horizontally)</td>
<td>spacing, margin, horizontal, center, auto</td>
</tr>
<tr>
<td><code>.en-my-4</code></td>
<td>utility</td>
<td>Vertical margin size 4</td>
<td>spacing, margin, vertical</td>
</tr>
<tr>
<td><code>.en-mt-4</code></td>
<td>utility</td>
<td>Margin top size 4</td>
<td>spacing, margin, top</td>
</tr>
<tr>
<td><code>.en-mb-4</code></td>
<td>utility</td>
<td>Margin bottom size 4</td>
<td>spacing, margin, bottom</td>
</tr>
<tr>
<td><code>.en-ms-4</code></td>
<td>utility</td>
<td>Margin start size 4</td>
<td>spacing, margin, start, left</td>
</tr>
<tr>
<td><code>.en-me-4</code></td>
<td>utility</td>
<td>Margin end size 4</td>
<td>spacing, margin, end, right</td>
</tr>
<tr>
<td><code>.en--mt-4</code></td>
<td>utility</td>
<td>Negative margin top size 4</td>
<td>spacing, margin, negative, top</td>
</tr>
<tr>
<td><code>.en-gap-0</code></td>
<td>utility</td>
<td>Remove gap</td>
<td>spacing, gap, flex, grid</td>
</tr>
<tr>
<td><code>.en-gap-4</code></td>
<td>utility</td>
<td>Gap size 4</td>
<td>spacing, gap, flex, grid</td>
</tr>
<tr>
<td><code>.en-gap-x-4</code></td>
<td>utility</td>
<td>Horizontal gap size 4</td>
<td>spacing, gap, flex, grid, horizontal</td>
</tr>
<tr>
<td><code>.en-gap-y-4</code></td>
<td>utility</td>
<td>Vertical gap size 4</td>
<td>spacing, gap, flex, grid, vertical</td>
</tr>
<tr>
<td><code>.en-hidden</code></td>
<td>utility</td>
<td>Hide element (display: none)</td>
<td>display, visibility, hide</td>
</tr>
<tr>
<td><code>.en-block</code></td>
<td>utility</td>
<td>Display as block</td>
<td>display, block</td>
</tr>
<tr>
<td><code>.en-inline</code></td>
<td>utility</td>
<td>Display as inline</td>
<td>display, inline</td>
</tr>
<tr>
<td><code>.en-inline-block</code></td>
<td>utility</td>
<td>Display as inline-block</td>
<td>display, inline, block</td>
</tr>
<tr>
<td><code>.en-flex-display</code></td>
<td>utility</td>
<td>Display as flex</td>
<td>display, flex, layout</td>
</tr>
<tr>
<td><code>.en-grid-display</code></td>
<td>utility</td>
<td>Display as grid</td>
<td>display, grid, layout</td>
</tr>
<tr>
<td><code>.en-visible</code></td>
<td>utility</td>
<td>Make element visible</td>
<td>display, visibility, show</td>
</tr>
<tr>
<td><code>.en-invisible</code></td>
<td>utility</td>
<td>Hide but reserve space (visibility: hidden)</td>
<td>display, visibility, hide, space</td>
</tr>
<tr>
<td><code>.en-sr-only</code></td>
<td>utility</td>
<td>Screen reader only (visually hidden)</td>
<td>accessibility, a11y, screen-reader, hide</td>
</tr>
<tr>
<td><code>.en-sr-only-focusable</code></td>
<td>utility</td>
<td>Hidden until focused (skip links)</td>
<td>accessibility, a11y, screen-reader, focus, skip-link</td>
</tr>
<tr>
<td><code>.en-mobile-only</code></td>
<td>utility</td>
<td>Visible only on mobile (&lt; 480px)</td>
<td>responsive, mobile, visibility, breakpoint</td>
</tr>
<tr>
<td><code>.en-tablet-only</code></td>
<td>utility</td>
<td>Visible only on tablets (480px - 1023px)</td>
<td>responsive, tablet, visibility, breakpoint</td>
</tr>
<tr>
<td><code>.en-desktop-only</code></td>
<td>utility</td>
<td>Visible only on desktop (≥ 1024px)</td>
<td>responsive, desktop, visibility, breakpoint</td>
</tr>
<tr>
<td><code>.en-print-hidden</code></td>
<td>utility</td>
<td>Hidden when printing</td>
<td>print, visibility, hide</td>
</tr>
<tr>
<td><code>.en-print-only</code></td>
<td>utility</td>
<td>Visible only when printing</td>
<td>print, visibility, show</td>
</tr>
<tr>
<td><code>.en-border</code></td>
<td>utility</td>
<td>Add border on all sides</td>
<td>border, decoration</td>
</tr>
<tr>
<td><code>.en-border-0</code></td>
<td>utility</td>
<td>Remove border</td>
<td>border, decoration</td>
</tr>
<tr>
<td><code>.en-border-thick</code></td>
<td>utility</td>
<td>Thick border</td>
<td>border, decoration, thick</td>
</tr>
<tr>
<td><code>.en-border-t</code></td>
<td>utility</td>
<td>Border top</td>
<td>border, decoration, top</td>
</tr>
<tr>
<td><code>.en-border-r</code></td>
<td>utility</td>
<td>Border right</td>
<td>border, decoration, right</td>
</tr>
<tr>
<td><code>.en-border-b</code></td>
<td>utility</td>
<td>Border bottom</td>
<td>border, decoration, bottom</td>
</tr>
<tr>
<td><code>.en-border-l</code></td>
<td>utility</td>
<td>Border left</td>
<td>border, decoration, left</td>
</tr>
<tr>
<td><code>.en-rounded-0</code></td>
<td>utility</td>
<td>No border radius (sharp corners)</td>
<td>border, radius, decoration</td>
</tr>
<tr>
<td><code>.en-rounded-sm</code></td>
<td>utility</td>
<td>Small border radius</td>
<td>border, radius, decoration</td>
</tr>
<tr>
<td><code>.en-rounded</code></td>
<td>utility</td>
<td>Medium border radius</td>
<td>border, radius, decoration</td>
</tr>
<tr>
<td><code>.en-rounded-lg</code></td>
<td>utility</td>
<td>Large border radius</td>
<td>border, radius, decoration</td>
</tr>
<tr>
<td><code>.en-rounded-full</code></td>
<td>utility</td>
<td>Full border radius (pill shape)</td>
<td>border, radius, decoration, pill, circle</td>
</tr>
<tr>
<td><code>.en-rounded-circle</code></td>
<td>utility</td>
<td>Circular border radius (50%)</td>
<td>border, radius, decoration, circle</td>
</tr>
<tr>
<td><code>.en-shadow-sm</code></td>
<td>utility</td>
<td>Small box shadow</td>
<td>shadow, decoration, elevation</td>
</tr>
<tr>
<td><code>.en-shadow</code></td>
<td>utility</td>
<td>Medium box shadow</td>
<td>shadow, decoration, elevation</td>
</tr>
<tr>
<td><code>.en-shadow-lg</code></td>
<td>utility</td>
<td>Large box shadow</td>
<td>shadow, decoration, elevation</td>
</tr>
<tr>
<td><code>.en-bg-primary</code></td>
<td>utility</td>
<td>Primary background color</td>
<td>background, color, primary</td>
</tr>
<tr>
<td><code>.en-bg-surface</code></td>
<td>utility</td>
<td>Surface background color</td>
<td>background, color, surface</td>
</tr>
<tr>
<td><code>.en-bg-subtle</code></td>
<td>utility</td>
<td>Subtle background color</td>
<td>background, color, subtle</td>
</tr>
<tr>
<td><code>.en-opacity-50</code></td>
<td>utility</td>
<td>50% opacity</td>
<td>opacity, transparency</td>
</tr>
<tr>
<td><code>.en-opacity-75</code></td>
<td>utility</td>
<td>75% opacity</td>
<td>opacity, transparency</td>
</tr>
<tr>
<td><code>.en-aspect-square</code></td>
<td>utility</td>
<td>Square aspect ratio (1:1)</td>
<td>aspect-ratio, layout, square</td>
</tr>
<tr>
<td><code>.en-aspect-video</code></td>
<td>utility</td>
<td>Video aspect ratio (16:9)</td>
<td>aspect-ratio, layout, video</td>
</tr>
<tr>
<td><code>.en-backdrop-blur</code></td>
<td>utility</td>
<td>Backdrop blur effect</td>
<td>backdrop, blur, effect</td>
</tr>
<tr>
<td><code>.en-w-full</code></td>
<td>utility</td>
<td>Width 100%</td>
<td>sizing, width, full</td>
</tr>
<tr>
<td><code>.en-h-full</code></td>
<td>utility</td>
<td>Height 100%</td>
<td>sizing, height, full</td>
</tr>
<tr>
<td><code>.en-w-screen</code></td>
<td>utility</td>
<td>Width 100vw (full viewport)</td>
<td>sizing, width, viewport, full</td>
</tr>
<tr>
<td><code>.en-h-screen</code></td>
<td>utility</td>
<td>Height 100vh (full viewport)</td>
<td>sizing, height, viewport, full</td>
</tr>
<tr>
<td><code>.en-w-auto</code></td>
<td>utility</td>
<td>Width auto</td>
<td>sizing, width, auto</td>
</tr>
<tr>
<td><code>.en-h-auto</code></td>
<td>utility</td>
<td>Height auto</td>
<td>sizing, height, auto</td>
</tr>
<tr>
<td><code>.en-max-w-full</code></td>
<td>utility</td>
<td>Max-width 100%</td>
<td>sizing, width, max, constraint</td>
</tr>
<tr>
<td><code>.en-max-h-full</code></td>
<td>utility</td>
<td>Max-height 100%</td>
<td>sizing, height, max, constraint</td>
</tr>
<tr>
<td><code>.en-relative</code></td>
<td>utility</td>
<td>Position relative</td>
<td>position, layout</td>
</tr>
<tr>
<td><code>.en-absolute</code></td>
<td>utility</td>
<td>Position absolute</td>
<td>position, layout</td>
</tr>
<tr>
<td><code>.en-fixed</code></td>
<td>utility</td>
<td>Position fixed</td>
<td>position, layout</td>
</tr>
<tr>
<td><code>.en-sticky</code></td>
<td>utility</td>
<td>Position sticky</td>
<td>position, layout, sticky</td>
</tr>
<tr>
<td><code>.en-inset-0</code></td>
<td>utility</td>
<td>All edges at 0</td>
<td>position, layout, inset</td>
</tr>
<tr>
<td><code>.en-full-absolute</code></td>
<td>utility</td>
<td>Position absolute with inset: 0</td>
<td>position, layout, full, overlay</td>
</tr>
<tr>
<td><code>.en-full-fixed</code></td>
<td>utility</td>
<td>Position fixed with inset: 0</td>
<td>position, layout, full, overlay</td>
</tr>
<tr>
<td><code>.en-top-0</code></td>
<td>utility</td>
<td>Top edge at 0</td>
<td>position, layout, top</td>
</tr>
<tr>
<td><code>.en-right-0</code></td>
<td>utility</td>
<td>Right edge at 0</td>
<td>position, layout, right</td>
</tr>
<tr>
<td><code>.en-bottom-0</code></td>
<td>utility</td>
<td>Bottom edge at 0</td>
<td>position, layout, bottom</td>
</tr>
<tr>
<td><code>.en-left-0</code></td>
<td>utility</td>
<td>Left edge at 0</td>
<td>position, layout, left</td>
</tr>
<tr>
<td><code>.en-top-start</code></td>
<td>utility</td>
<td>Top-left corner with spacing</td>
<td>position, layout, corner, top, left</td>
</tr>
<tr>
<td><code>.en-top-end</code></td>
<td>utility</td>
<td>Top-right corner with spacing</td>
<td>position, layout, corner, top, right</td>
</tr>
<tr>
<td><code>.en-bottom-start</code></td>
<td>utility</td>
<td>Bottom-left corner with spacing</td>
<td>position, layout, corner, bottom, left</td>
</tr>
<tr>
<td><code>.en-bottom-end</code></td>
<td>utility</td>
<td>Bottom-right corner with spacing</td>
<td>position, layout, corner, bottom, right</td>
</tr>
<tr>
<td><code>.en-overflow-hidden</code></td>
<td>utility</td>
<td>Hide overflow content</td>
<td>overflow, layout</td>
</tr>
<tr>
<td><code>.en-overflow-auto</code></td>
<td>utility</td>
<td>Auto overflow with scrollbar</td>
<td>overflow, layout, scroll</td>
</tr>
<tr>
<td><code>.en-animate-fade-in</code></td>
<td>utility</td>
<td>Fade in animation</td>
<td>animation, transition, fade</td>
</tr>
<tr>
<td><code>.en-animate-slide-up</code></td>
<td>utility</td>
<td>Slide up animation</td>
<td>animation, transition, slide</td>
</tr>
<tr>
<td><code>.en-animate-scale-in</code></td>
<td>utility</td>
<td>Scale in animation</td>
<td>animation, transition, scale</td>
</tr>
</tbody>
</table>
</div><hr>
<p><em>Generated from EN-CSS index files</em></p>
`})]),e(i,{to:`#toc-right-sidebar`,defer:!0},[e(l,{tree:d})])])}});export{f as default};