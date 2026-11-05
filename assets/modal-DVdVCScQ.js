import{A as e,At as t,C as n,E as r,Et as i,F as a,Ft as o,H as s,L as c,O as l,P as u,R as d,V as f,W as p,_t as m,at as h,et as g,it as _,l as v,n as ee,nt as y,ot as b,q as x,r as te,s as ne,tt as S,vt as C}from"./components-BJME9hSd.js";import{t as w}from"./useModal-OHDf11EE.js";import{t as T}from"./index-BxFZJYIM.js";var re=p({__name:`1`,setup(n){let r=i(!1);return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn en-btn--primary en-btn--solid`,onClick:i[0]||=e=>r.value=!0},`Open modal`),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,title:`Hello`,variant:`primary`},{default:m(()=>[...i[2]||=[a(`p`,null,`Modal body content.`,-1)]]),_:1},8,[`modelValue`])],64))}}),ie={key:0},ae=p({__name:`2`,setup(n){let{confirm:r}=w(`docs-quick`),l=i(``);async function u(){let e=await r({title:`Delete item?`,content:`This cannot be undone.`,variant:`danger`,okLabel:`Delete`});l.value=e?`Deleted`:`Cancelled`}return(n,r)=>(_(),d(e,null,[s(t(T),{namespace:`docs-quick`}),a(`button`,{class:`en-btn en-btn--danger en-btn--solid`,onClick:u},`Delete…`),l.value?(_(),d(`p`,ie,[r[0]||=f(`Result: `,-1),a(`code`,null,o(l.value),1)])):c(``,!0)],64))}}),E={class:`en-cluster`},D=[`onClick`],O=p({__name:`8`,setup(n){let r=i(!1),c=i(`default`),l=[`default`,`primary`,`secondary`,`success`,`danger`,`warning`,`info`];function u(e){c.value=e,r.value=!0}return(n,i)=>(_(),d(e,null,[a(`div`,E,[(_(),d(e,null,b(l,e=>a(`button`,{key:e,class:`en-btn`,onClick:t=>u(e)},o(e),9,D)),64))]),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[0]||=e=>r.value=e,variant:c.value,title:`Variant: ${c.value}`},{default:m(()=>[...i[1]||=[f(` The header takes the variant colour. `,-1)]]),_:1},8,[`modelValue`,`variant`,`title`])],64))}}),k={class:`en-cluster`},A=[`onClick`],j=p({__name:`9`,setup(n){let r=i(!1),c=i(`medium`),l=[`small`,`medium`,`large`,`xlarge`];return(n,i)=>(_(),d(e,null,[a(`div`,k,[(_(),d(e,null,b(l,e=>a(`button`,{key:e,class:`en-btn`,onClick:t=>{c.value=e,r.value=!0}},o(e),9,A)),64))]),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[0]||=e=>r.value=e,size:c.value,title:`Size: ${c.value}`},{default:m(()=>[...i[1]||=[f(` The width follows `,-1),a(`code`,null,`size`,-1),f(`. `,-1)]]),_:1},8,[`modelValue`,`size`,`title`])],64))}}),M=p({__name:`11`,setup(n){let r=i(!1);return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open fullscreen`),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,fullscreen:``,title:`Fullscreen`},{default:m(()=>[...i[2]||=[f(`Fills the viewport.`,-1)]]),_:1},8,[`modelValue`])],64))}}),N={class:`en-cluster`},P=[`onClick`],F=p({__name:`12`,setup(n){let r=i(!1),c=i(`zoom`),l=[`zoom`,`fade`,`top`,`bottom`,`left`,`right`];return(n,i)=>(_(),d(e,null,[a(`div`,N,[(_(),d(e,null,b(l,e=>a(`button`,{key:e,class:`en-btn`,onClick:t=>{c.value=e,r.value=!0}},o(e),9,P)),64))]),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[0]||=e=>r.value=e,animation:c.value,title:`Animation: ${c.value}`},{default:m(()=>[...i[1]||=[f(` Close it to see the exit animation. `,-1)]]),_:1},8,[`modelValue`,`animation`,`title`])],64))}}),I={class:`en-cluster`},L=[`onClick`],R=p({__name:`13`,setup(n){let r=i(!1),c=i(`top`);return(n,i)=>(_(),d(e,null,[a(`div`,I,[(_(),d(e,null,b([`top`,`center`,`bottom`],e=>a(`button`,{key:e,class:`en-btn`,onClick:t=>{c.value=e,r.value=!0}},o(e),9,L)),64))]),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[0]||=e=>r.value=e,position:c.value,title:`Position: ${c.value}`},{default:m(()=>[f(`Placed at `+o(c.value)+`.`,1)]),_:1},8,[`modelValue`,`position`,`title`])],64))}}),z=p({__name:`14`,setup(n){let r=i(!1);return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open`),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,title:`Flush body`,"body-class":`en-modal__body--flush`},{default:m(()=>[...i[2]||=[a(`div`,{style:{padding:`var(--en-space-5)`,background:`var(--en-primary-subtle)`}},` The content touches the edges of the dialog. `,-1)]]),_:1},8,[`modelValue`])],64))}}),B=p({__name:`15`,setup(n){let r=i(!1);return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open`),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,"no-header":``,"no-footer":``,"aria-label":`Notice`},{default:m(()=>[...i[2]||=[a(`p`,null,`A bare modal. Click outside or press Esc to close it.`,-1)]]),_:1},8,[`modelValue`])],64))}}),V=p({__name:`16`,setup(n){let r=i(!1);return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open`),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e},{header:m(()=>[...i[2]||=[f(`Custom `,-1),a(`em`,null,`header`,-1),f(` content`,-1)]]),default:m(()=>[i[3]||=f(` Body content. `,-1)]),_:1},8,[`modelValue`])],64))}}),H=[`onClick`],U=[`onClick`],W=p({__name:`17`,setup(n){let r=i(!1);return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open`),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,title:`Custom footer`},{footer:m(({close:e})=>[a(`button`,{class:`en-btn en-btn--ghost`,onClick:t=>e(`cancel`)},`Not now`,8,H),a(`button`,{class:`en-btn en-btn--primary en-btn--solid`,onClick:t=>e(`save`)},`Save`,8,U)]),default:m(()=>[i[2]||=f(` Body content. `,-1)]),_:1},8,[`modelValue`])],64))}}),G={key:0},K=p({__name:`19`,setup(n){let r=i(!1),l=i(``),u=[{key:`cancel`,label:`Cancel`,color:`secondary`},{key:`draft`,label:`Save draft`,color:`primary`,appearance:`ghost`},{key:`publish`,label:`Publish`,color:`primary`,appearance:`solid`,autofocus:!0}];return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open`),l.value?(_(),d(`p`,G,[i[3]||=f(`Closed with: `,-1),a(`code`,null,o(l.value),1)])):c(``,!0),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,title:`Publish post`,buttons:u,onClose:i[2]||=e=>l.value=e.action},{default:m(()=>[...i[4]||=[f(` Choose what to do with this post. `,-1)]]),_:1},8,[`modelValue`])],64))}}),q={class:`en-cluster`},J=[`onClick`],oe=p({__name:`20`,setup(r){let c=i(!1),l=i(`end`),u=i(!1),p=[{key:`cancel`,label:`Cancel`,color:`secondary`},{key:`ok`,label:`OK`,color:`primary`,appearance:`solid`}];return(r,i)=>(_(),d(e,null,[a(`div`,q,[(_(),d(e,null,b([`start`,`center`,`end`,`between`],e=>a(`button`,{key:e,class:`en-btn`,onClick:t=>{l.value=e,c.value=!0}},o(e),9,J)),64)),a(`label`,null,[C(a(`input`,{"onUpdate:modelValue":i[0]||=e=>u.value=e,type:`checkbox`},null,512),[[n,u.value]]),i[2]||=f(` swap buttons`,-1)])]),s(t(T),{modelValue:c.value,"onUpdate:modelValue":i[1]||=e=>c.value=e,title:`footerAlign: ${l.value}`,buttons:p,"footer-align":l.value,"swap-buttons":u.value},{default:m(()=>[...i[3]||=[f(` Look at the footer. `,-1)]]),_:1},8,[`modelValue`,`title`,`footer-align`,`swap-buttons`])],64))}}),se=p({__name:`21`,setup(n){let r=i(!1),o=i(!1),c=u(()=>[{key:`cancel`,label:`Cancel`,color:`secondary`,disabled:o.value},{key:`save`,label:`Save`,color:`primary`,appearance:`solid`,loading:o.value}]);function l(e){e===`save`&&(o.value=!0,setTimeout(()=>{o.value=!1},1500))}return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open`),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,title:`Loading button`,buttons:c.value,onButtonClick:l},{default:m(()=>[...i[2]||=[f(` The Save button shows a spinner for a moment, then goes back. `,-1)]]),_:1},8,[`modelValue`,`buttons`])],64))}}),ce={key:0},le=p({__name:`22`,setup(n){let u=i(!1),p=i(``),h=i(``),g=[{key:`cancel`,label:`Cancel`,color:`secondary`},{key:`save`,label:`Save`,color:`primary`,appearance:`solid`,type:`submit`,form:`docs-user-form`}];function v(){h.value=`Saved: ${p.value}`}return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>u.value=!0},`New user`),h.value?(_(),d(`p`,ce,o(h.value),1)):c(``,!0),s(t(T),{modelValue:u.value,"onUpdate:modelValue":i[2]||=e=>u.value=e,title:`New user`,buttons:g},{default:m(()=>[a(`form`,{id:`docs-user-form`,onSubmit:l(v,[`prevent`])},[a(`label`,null,[i[3]||=f(`Name `,-1),C(a(`input`,{"onUpdate:modelValue":i[1]||=e=>p.value=e,class:`en-input`,required:``},null,512),[[r,p.value]])])],32)]),_:1},8,[`modelValue`])],64))}}),ue={key:0},de=p({__name:`23`,setup(n){let l=i(!1),u=i(`Untitled`),p=i(``),h=[{key:`cancel`,label:`Cancel`,color:`secondary`},{key:`save`,label:`Save`,color:`primary`,appearance:`solid`,autofocus:!0}];return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>l.value=!0},`Rename`),p.value?(_(),d(`p`,ue,[i[4]||=f(`Closed with: `,-1),a(`code`,null,o(p.value),1)])):c(``,!0),s(t(T),{modelValue:l.value,"onUpdate:modelValue":i[2]||=e=>l.value=e,title:`Rename`,buttons:h,"submit-on-enter":``,onClose:i[3]||=e=>p.value=e.action},{default:m(()=>[C(a(`input`,{"onUpdate:modelValue":i[1]||=e=>u.value=e,class:`en-input`,"aria-label":`Name`},null,512),[[r,u.value]])]),_:1},8,[`modelValue`])],64))}}),fe={key:0},pe=p({__name:`25`,setup(n){let r=i(!1),l=i(``);return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open`),l.value?(_(),d(`p`,fe,[i[3]||=f(`Closed by: `,-1),a(`code`,null,o(l.value),1)])):c(``,!0),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,title:`Only buttons close me`,"close-on-backdrop":!1,"close-on-escape":!1,onClose:i[2]||=e=>l.value=e.action},{default:m(()=>[...i[4]||=[f(` The backdrop and Esc do nothing. `,-1)]]),_:1},8,[`modelValue`])],64))}}),me=p({__name:`26`,setup(n){let r=i(!1);return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open`),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,title:`Terms`,persistent:``,closable:!1},{default:m(()=>[...i[2]||=[f(` Click outside or press Esc: the dialog shakes instead of closing. Use the button to continue. `,-1)]]),_:1},8,[`modelValue`])],64))}}),he=p({__name:`27`,setup(n){let r=i(!1),c=i(``),l=[{key:`cancel`,label:`Cancel`,color:`secondary`},{key:`save`,label:`Save`,color:`primary`,appearance:`solid`,autofocus:!0}],u=async({action:e})=>{if(e!==`save`)return!0;if(await new Promise(e=>setTimeout(e,1200)),Math.random()<.5)return c.value=`The server rejected it. Try again.`,!1;c.value=`Saved.`};return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open`),a(`p`,null,o(c.value),1),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,title:`Save changes`,buttons:l,"before-close":u},{default:m(()=>[...i[2]||=[f(` Save fails about half of the time, which keeps the dialog open. `,-1)]]),_:1},8,[`modelValue`])],64))}}),ge=p({__name:`29`,setup(n){let r=i(!1),c=i(``),l=[{key:`cancel`,label:`Cancel`,color:`secondary`},{key:`save`,label:`Save`,color:`primary`,appearance:`solid`,beforeClick:async()=>{await new Promise(e=>setTimeout(e,1e3)),c.value=`Saved, closing`}}];return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open`),a(`p`,null,o(c.value),1),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,title:`Per-button guard`,buttons:l},{default:m(()=>[...i[2]||=[f(` Only the Save button waits. `,-1)]]),_:1},8,[`modelValue`])],64))}}),_e={key:0},ve=p({__name:`33`,setup(n){let{confirm:r}=w(`docs-confirm`),l=i(``);async function u(){let e=await r({title:`Discard changes?`,content:`Your edits will be lost.`,variant:`warning`,okLabel:`Discard`,cancelLabel:`Keep editing`});l.value=String(e)}return(n,r)=>(_(),d(e,null,[s(t(T),{namespace:`docs-confirm`}),a(`button`,{class:`en-btn`,onClick:u},`Ask`),l.value?(_(),d(`p`,_e,[r[0]||=f(`Resolved: `,-1),a(`code`,null,o(l.value),1)])):c(``,!0)],64))}}),ye=p({__name:`34`,setup(n){let{alert:r}=w(`docs-alert`);return(n,i)=>(_(),d(e,null,[s(t(T),{namespace:`docs-alert`}),a(`button`,{class:`en-btn`,onClick:i[0]||=e=>t(r)({title:`Saved`,content:`Your changes were saved.`,variant:`success`})},`Alert`)],64))}}),be=p({__name:`35`,setup(n){let{prompt:r}=w(`docs-prompt`),c=i(`Untitled`);async function l(){let e=await r({title:`Rename`,content:`New name`,defaultValue:c.value,validate:e=>e.trim()!==``||`The name cannot be empty.`});e!==null&&(c.value=e)}return(n,r)=>(_(),d(e,null,[s(t(T),{namespace:`docs-prompt`}),a(`button`,{class:`en-btn`,onClick:l},`Rename`),a(`p`,null,[r[0]||=f(`Current name: `,-1),a(`strong`,null,o(c.value),1)])],64))}}),xe={key:0},Se=p({__name:`36`,setup(n){let{open:r}=w(`docs-handle`),l=i(``);async function u(){let e=r({title:`Uploading…`,content:`Please wait.`,closable:!1,noFooter:!0,persistent:!0,loading:!0});setTimeout(()=>{e.update({title:`Done`,content:`3 files uploaded.`,loading:!1,closable:!0,persistent:!1,noFooter:!1,variant:`success`,buttons:[{key:`close`,label:`Close`,color:`primary`,appearance:`solid`}]})},1500);let t=await e;l.value=t.action}return(n,r)=>(_(),d(e,null,[s(t(T),{namespace:`docs-handle`}),a(`button`,{class:`en-btn`,onClick:u},`Start upload`),l.value?(_(),d(`p`,xe,[r[0]||=f(`Closed by: `,-1),a(`code`,null,o(l.value),1)])):c(``,!0)],64))}}),Ce=p({__name:`38`,setup(n){let{open:r}=w(`docs-stack`);async function i(){(await r({title:`First`,content:`Open another modal on top?`,buttons:[{key:`more`,label:`Open second`,color:`primary`,appearance:`solid`}]})).action===`more`&&await r({title:`Second`,content:`Stacked on top of the first.`,variant:`info`})}return(n,r)=>(_(),d(e,null,[s(t(T),{namespace:`docs-stack`}),a(`button`,{class:`en-btn`,onClick:i},`Open`)],64))}}),we={class:`en-cluster`},Y=[`onClick`],X={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:re,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--solid"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open modal&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Hello"</span><span class="shiki-token-function"> variant</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"primary"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Modal body content.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:ae,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">confirm</span><span class="shiki-foreground"> } </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> useModal</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'docs-quick'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> answer</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">''</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">async</span><span class="shiki-token-keyword"> function</span><span class="shiki-token-function"> remove</span><span class="shiki-foreground">() {</span></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> ok</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-keyword"> await</span><span class="shiki-token-function"> confirm</span><span class="shiki-foreground">({</span></span>
<span class="line"><span class="shiki-foreground">    title</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Delete item?'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    content</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'This cannot be undone.'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    variant</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'danger'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    okLabel</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Delete'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  })</span></span>
<span class="line"><span class="shiki-token-constant">  answer</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> ok </span><span class="shiki-token-keyword">?</span><span class="shiki-token-string-expression"> 'Deleted'</span><span class="shiki-token-keyword"> :</span><span class="shiki-token-string-expression"> 'Cancelled'</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-comment">  &#x3C;!-- Host: mount ONE per namespace, usually in your app layout --></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> namespace</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"docs-quick"</span><span class="shiki-foreground"> /></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--danger en-btn--solid"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"remove"</span><span class="shiki-foreground">>Delete…&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> v-if</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"answer"</span><span class="shiki-foreground">>Result: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ answer }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "./en-preset-standard.css"</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-keyword">@import</span><span class="shiki-token-string-expression"> "./en-preset-extended.css"</span><span class="shiki-foreground">;</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`css`,key:3,lang:`css`,injectKind:null,editable:!1,source:null},4:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">npm</span><span class="shiki-token-string"> install</span><span class="shiki-token-string"> @en32/en-css-vue</span><span class="shiki-token-string"> vue</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`bash`,key:4,lang:`bash`,injectKind:null,editable:!1,source:null},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:5,lang:`ts`,injectKind:null,editable:!1,source:null},6:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { createApp } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> ENModalPlugin </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">createApp</span><span class="shiki-foreground">(App)</span><span class="shiki-token-function">.use</span><span class="shiki-foreground">(ENModalPlugin)</span><span class="shiki-token-function">.mount</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'#app'</span><span class="shiki-foreground">)</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:6,lang:`ts`,injectKind:null,editable:!1,source:null},7:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:7,lang:`ts`,injectKind:null,editable:!1,source:null},8:{component:O,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalVariant } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> variant</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ModalVariant</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'default'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> variants</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalVariant</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">'default'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'secondary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'success'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'danger'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'warning'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'info'</span><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">function</span><span class="shiki-token-function"> open</span><span class="shiki-foreground">(v</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalVariant</span><span class="shiki-foreground">) {</span></span>
<span class="line"><span class="shiki-token-constant">  variant</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> v</span></span>
<span class="line"><span class="shiki-token-constant">  show</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> true</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> v-for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"v in variants"</span><span class="shiki-token-function"> :key</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"v"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"open(v)"</span><span class="shiki-foreground">>{{ v }}&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">variant</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">variant</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">title</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-string-expression">\`Variant: </span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">variant</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">\`</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    The header takes the variant colour.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:8,lang:`vue`,injectKind:null,editable:!1,source:null},9:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalSize } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> size</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ModalSize</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'medium'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> sizes</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalSize</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">'small'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'medium'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'large'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'xlarge'</span><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> v-for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"s in sizes"</span><span class="shiki-token-function"> :key</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"s"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"size = s; show = true"</span><span class="shiki-foreground">>{{ s }}&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">size</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">size</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">title</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-string-expression">\`Size: </span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">size</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">\`</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    The width follows &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>size&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:9,lang:`vue`,injectKind:null,editable:!1,source:null},10:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">width</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">720</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"720px"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> width</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"40rem"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"40rem"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:10,lang:`vue`,injectKind:null,editable:!1,source:null},11:{component:M,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open fullscreen&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> fullscreen</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Fullscreen"</span><span class="shiki-foreground">>Fills the viewport.&#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:11,lang:`vue`,injectKind:null,editable:!1,source:null},12:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalAnimation } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> animation</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ModalAnimation</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'zoom'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> animations</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalAnimation</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">'zoom'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'fade'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'top'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'bottom'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'left'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'right'</span><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> v-for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"a in animations"</span><span class="shiki-token-function"> :key</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"a"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"animation = a; show = true"</span><span class="shiki-foreground">>{{ a }}&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">animation</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">animation</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">title</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-string-expression">\`Animation: </span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">animation</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">\`</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Close it to see the exit animation.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:12,lang:`vue`,injectKind:null,editable:!1,source:null},13:{component:R,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalPosition } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> position</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ModalPosition</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'top'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> v-for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"p in ['top', 'center', 'bottom']"</span><span class="shiki-token-function"> :key</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"p"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"position = p as ModalPosition; show = true"</span><span class="shiki-foreground">>{{ p }}&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">position</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">position</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">title</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-string-expression">\`Position: </span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">position</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">\`</span><span class="shiki-foreground">"</span><span class="shiki-foreground">>Placed at {{ position }}.&#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:13,lang:`vue`,injectKind:null,editable:!1,source:null},14:{component:z,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Flush body"</span><span class="shiki-token-function"> body-class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-modal__body--flush"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"padding: var(--en-space-5); background: var(--en-primary-subtle)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      The content touches the edges of the dialog.</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:14,lang:`vue`,injectKind:null,editable:!1,source:null},15:{component:B,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> no-header</span><span class="shiki-token-function"> no-footer</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Notice"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>A bare modal. Click outside or press Esc to close it.&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:15,lang:`vue`,injectKind:null,editable:!1,source:null},16:{component:V,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground"> #</span><span class="shiki-token-function">header</span><span class="shiki-foreground">>Custom &#x3C;</span><span class="shiki-token-string-expression">em</span><span class="shiki-foreground">>header&#x3C;/</span><span class="shiki-token-string-expression">em</span><span class="shiki-foreground">> content&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Body content.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:16,lang:`vue`,injectKind:null,editable:!1,source:null},17:{component:W,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Custom footer"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Body content.</span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground"> #</span><span class="shiki-token-function">footer</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">{ close }</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--ghost"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close('cancel')"</span><span class="shiki-foreground">>Not now&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn en-btn--primary en-btn--solid"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"close('save')"</span><span class="shiki-foreground">>Save&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:17,lang:`vue`,injectKind:null,editable:!1,source:null},18:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalButton } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:18,lang:`ts`,injectKind:null,editable:!1,source:null},19:{component:K,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalButton } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> last</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">''</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> buttons</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalButton</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'secondary'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'draft'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Save draft'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> appearance</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'ghost'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'publish'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Publish'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> appearance</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'solid'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> autofocus</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> v-if</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"last"</span><span class="shiki-foreground">>Closed with: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ last }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span></span>
<span class="line"><span class="shiki-token-function">    v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-token-function">    title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Publish post"</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">buttons</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">buttons</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">    @</span><span class="shiki-token-function">close</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">last </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> $event</span><span class="shiki-foreground">.action</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">  ></span></span>
<span class="line"><span class="shiki-foreground">    Choose what to do with this post.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:19,lang:`vue`,injectKind:null,editable:!1,source:null},20:{component:oe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalButton</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalFooterAlign } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> align</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ModalFooterAlign</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'end'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> swap</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> buttons</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalButton</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'secondary'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'ok'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'OK'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> appearance</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'solid'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> v-for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"a in ['start', 'center', 'end', 'between']"</span><span class="shiki-token-function"> :key</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"a"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"align = a as ModalFooterAlign; show = true"</span><span class="shiki-foreground">>{{ a }}&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">>&#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"swap"</span><span class="shiki-token-function"> type</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"checkbox"</span><span class="shiki-foreground">> swap buttons&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">title</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-string-expression">\`footerAlign: </span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">align</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">\`</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">buttons</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">buttons</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">footer-align</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">align</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">swap-buttons</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">swap</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Look at the footer.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:20,lang:`vue`,injectKind:null,editable:!1,source:null},21:{component:se,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { computed</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalButton } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> saving</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> buttons</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> computed</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ModalButton</span><span class="shiki-foreground">[]>(() </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'secondary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> disabled</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> saving</span><span class="shiki-foreground">.value }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'save'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Save'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> appearance</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'solid'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> loading</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> saving</span><span class="shiki-foreground">.value }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">])</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Replace the real request with your own</span></span>
<span class="line"><span class="shiki-token-keyword">function</span><span class="shiki-token-function"> onButton</span><span class="shiki-foreground">(key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> string</span><span class="shiki-foreground">) {</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (key </span><span class="shiki-token-keyword">!==</span><span class="shiki-token-string-expression"> 'save'</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">return</span></span>
<span class="line"><span class="shiki-token-constant">  saving</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> true</span></span>
<span class="line"><span class="shiki-token-function">  setTimeout</span><span class="shiki-foreground">(() </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">saving</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> false</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 1500</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Loading button"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">buttons</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">buttons</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">button-click</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">onButton</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    The Save button shows a spinner for a moment, then goes back.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:21,lang:`vue`,injectKind:null,editable:!1,source:null},22:{component:le,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalButton } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> name</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">''</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> log</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">''</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> buttons</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalButton</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'secondary'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'save'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Save'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> appearance</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'solid'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> type</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'submit'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> form</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'docs-user-form'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">function</span><span class="shiki-token-function"> submit</span><span class="shiki-foreground">() {</span></span>
<span class="line"><span class="shiki-token-constant">  log</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression"> \`Saved: </span><span class="shiki-token-keyword">\${</span><span class="shiki-token-constant">name</span><span class="shiki-foreground">.value</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">\`</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>New user&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> v-if</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"log"</span><span class="shiki-foreground">>{{ log }}&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"New user"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">buttons</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">buttons</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">form</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"docs-user-form"</span><span class="shiki-token-function"> @submit.prevent</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"submit"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">>Name &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"name"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">form</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:22,lang:`vue`,injectKind:null,editable:!1,source:null},23:{component:de,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalButton } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> text</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'Untitled'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> last</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">''</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> buttons</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalButton</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'secondary'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'save'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Save'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> appearance</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'solid'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> autofocus</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Rename&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> v-if</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"last"</span><span class="shiki-foreground">>Closed with: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ last }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Rename"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">buttons</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">buttons</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> submit-on-enter</span><span class="shiki-foreground"> @</span><span class="shiki-token-function">close</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">last </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> $event</span><span class="shiki-foreground">.action</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"text"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-input"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Name"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:23,lang:`vue`,injectKind:null,editable:!1,source:null},24:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> BeforeCloseHandler } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:24,lang:`ts`,injectKind:null,editable:!1,source:null},25:{component:pe,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> last</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">''</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> v-if</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"last"</span><span class="shiki-foreground">>Closed by: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ last }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span></span>
<span class="line"><span class="shiki-token-function">    v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-token-function">    title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Only buttons close me"</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">close-on-backdrop</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">close-on-escape</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">    @</span><span class="shiki-token-function">close</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">last </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> $event</span><span class="shiki-foreground">.action</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">  ></span></span>
<span class="line"><span class="shiki-foreground">    The backdrop and Esc do nothing.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:25,lang:`vue`,injectKind:null,editable:!1,source:null},26:{component:me,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Terms"</span><span class="shiki-token-function"> persistent</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">closable</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Click outside or press Esc: the dialog shakes instead of closing. Use the button to continue.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:26,lang:`vue`,injectKind:null,editable:!1,source:null},27:{component:he,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> BeforeCloseHandler</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalButton } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> message</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">''</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> buttons</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalButton</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'secondary'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'save'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Save'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> appearance</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'solid'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> autofocus</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Pretend this is an API call that can fail</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-function"> save</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> BeforeCloseHandler</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-keyword"> async</span><span class="shiki-foreground"> ({ action }) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (action </span><span class="shiki-token-keyword">!==</span><span class="shiki-token-string-expression"> 'save'</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">return</span><span class="shiki-token-constant"> true</span></span>
<span class="line"><span class="shiki-token-keyword">  await</span><span class="shiki-token-keyword"> new</span><span class="shiki-token-constant"> Promise</span><span class="shiki-foreground">((resolve) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> setTimeout</span><span class="shiki-foreground">(resolve</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 1200</span><span class="shiki-foreground">))</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (</span><span class="shiki-token-constant">Math</span><span class="shiki-token-function">.random</span><span class="shiki-foreground">() </span><span class="shiki-token-keyword">&#x3C;</span><span class="shiki-token-constant"> 0.5</span><span class="shiki-foreground">) {</span></span>
<span class="line"><span class="shiki-token-constant">    message</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression"> 'The server rejected it. Try again.'</span></span>
<span class="line"><span class="shiki-token-keyword">    return</span><span class="shiki-token-constant"> false</span><span class="shiki-token-comment"> // keep the modal open</span></span>
<span class="line"><span class="shiki-foreground">  }</span></span>
<span class="line"><span class="shiki-token-constant">  message</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression"> 'Saved.'</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>{{ message }}&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Save changes"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">buttons</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">buttons</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">before-close</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">save</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Save fails about half of the time, which keeps the dialog open.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:27,lang:`vue`,injectKind:null,editable:!1,source:null},28:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">before-close</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">save</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;template #footer="{ close, pending }"></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;button class="en-btn" :disabled="pending" @click="close('cancel')">Cancel&#x3C;/button></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;button class="en-btn en-btn--primary en-btn--solid" :class="{ 'en-btn--loading': pending }" @click="close('save')">Save&#x3C;/button></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/template></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:28,lang:`vue`,injectKind:null,editable:!1,source:null},29:{component:ge,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalButton } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> log</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">''</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> buttons</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalButton</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Cancel'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'secondary'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  {</span></span>
<span class="line"><span class="shiki-foreground">    key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'save'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Save'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    appearance</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'solid'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-token-function">    beforeClick</span><span class="shiki-token-keyword">:</span><span class="shiki-token-keyword"> async</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-keyword">      await</span><span class="shiki-token-keyword"> new</span><span class="shiki-token-constant"> Promise</span><span class="shiki-foreground">((resolve) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> setTimeout</span><span class="shiki-foreground">(resolve</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 1000</span><span class="shiki-foreground">))</span></span>
<span class="line"><span class="shiki-token-constant">      log</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression"> 'Saved, closing'</span></span>
<span class="line"><span class="shiki-foreground">    }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>{{ log }}&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Per-button guard"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">buttons</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">buttons</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    Only the Save button waits.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:29,lang:`vue`,injectKind:null,editable:!1,source:null},30:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> keep-on-route-change</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Stays open across pages"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:30,lang:`vue`,injectKind:null,editable:!1,source:null},31:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">open</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> confirm</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> alert</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> prompt</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> close</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> closeAll</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> modals</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> hasOpenModals</span><span class="shiki-foreground"> } </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> useModal</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'app'</span><span class="shiki-foreground">)</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:31,lang:`ts`,injectKind:null,editable:!1,source:null},32:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-comment">&#x3C;!-- once, in the app layout --></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> namespace</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"app"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:32,lang:`vue`,injectKind:null,editable:!1,source:null},33:{component:ve,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">confirm</span><span class="shiki-foreground"> } </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> useModal</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'docs-confirm'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> answer</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">''</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">async</span><span class="shiki-token-keyword"> function</span><span class="shiki-token-function"> ask</span><span class="shiki-foreground">() {</span></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> ok</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-keyword"> await</span><span class="shiki-token-function"> confirm</span><span class="shiki-foreground">({</span></span>
<span class="line"><span class="shiki-foreground">    title</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Discard changes?'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    content</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Your edits will be lost.'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    variant</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'warning'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    okLabel</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Discard'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    cancelLabel</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Keep editing'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  })</span></span>
<span class="line"><span class="shiki-token-constant">  answer</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> String</span><span class="shiki-foreground">(ok)</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> namespace</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"docs-confirm"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ask"</span><span class="shiki-foreground">>Ask&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> v-if</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"answer"</span><span class="shiki-foreground">>Resolved: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ answer }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:33,lang:`vue`,injectKind:null,editable:!1,source:null},34:{component:ye,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">alert</span><span class="shiki-foreground"> } </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> useModal</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'docs-alert'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> namespace</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"docs-alert"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"alert({ title: 'Saved', content: 'Your changes were saved.', variant: 'success' })"</span><span class="shiki-foreground">>Alert&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:34,lang:`vue`,injectKind:null,editable:!1,source:null},35:{component:be,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">prompt</span><span class="shiki-foreground"> } </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> useModal</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'docs-prompt'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> name</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'Untitled'</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">async</span><span class="shiki-token-keyword"> function</span><span class="shiki-token-function"> rename</span><span class="shiki-foreground">() {</span></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> value</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-keyword"> await</span><span class="shiki-token-function"> prompt</span><span class="shiki-foreground">({</span></span>
<span class="line"><span class="shiki-foreground">    title</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Rename'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    content</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'New name'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    defaultValue</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> name</span><span class="shiki-foreground">.value</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-token-function">    validate</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> (v) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> v</span><span class="shiki-token-function">.trim</span><span class="shiki-foreground">() </span><span class="shiki-token-keyword">!==</span><span class="shiki-token-string-expression"> ''</span><span class="shiki-token-keyword"> ||</span><span class="shiki-token-string-expression"> 'The name cannot be empty.'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  })</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (value </span><span class="shiki-token-keyword">!==</span><span class="shiki-token-constant"> null</span><span class="shiki-foreground">) </span><span class="shiki-token-constant">name</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> value</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> namespace</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"docs-prompt"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"rename"</span><span class="shiki-foreground">>Rename&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Current name: &#x3C;</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>{{ name }}&#x3C;/</span><span class="shiki-token-string-expression">strong</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:35,lang:`vue`,injectKind:null,editable:!1,source:null},36:{component:Se,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">open</span><span class="shiki-foreground"> } </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> useModal</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'docs-handle'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> result</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">''</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">async</span><span class="shiki-token-keyword"> function</span><span class="shiki-token-function"> upload</span><span class="shiki-foreground">() {</span></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> modal</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> open</span><span class="shiki-foreground">({</span></span>
<span class="line"><span class="shiki-foreground">    title</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Uploading…'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    content</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Please wait.'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    closable</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> false</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    noFooter</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    persistent</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    loading</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  })</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">  setTimeout</span><span class="shiki-foreground">(() </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">    modal</span><span class="shiki-token-function">.update</span><span class="shiki-foreground">({</span></span>
<span class="line"><span class="shiki-foreground">      title</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Done'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      content</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '3 files uploaded.'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      loading</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> false</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      closable</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      persistent</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> false</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      noFooter</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> false</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      variant</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'success'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">      buttons</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'close'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Close'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> appearance</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'solid'</span><span class="shiki-foreground"> }]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    })</span></span>
<span class="line"><span class="shiki-foreground">  }</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 1500</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> r</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-keyword"> await</span><span class="shiki-foreground"> modal</span></span>
<span class="line"><span class="shiki-token-constant">  result</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> r</span><span class="shiki-foreground">.action</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> namespace</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"docs-handle"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"upload"</span><span class="shiki-foreground">>Start upload&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-token-function"> v-if</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"result"</span><span class="shiki-foreground">>Closed by: &#x3C;</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>{{ result }}&#x3C;/</span><span class="shiki-token-string-expression">code</span><span class="shiki-foreground">>&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:36,lang:`vue`,injectKind:null,editable:!1,source:null},37:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { h } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">open</span><span class="shiki-foreground">({</span></span>
<span class="line"><span class="shiki-token-function">  title</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> h</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'span'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">'Order '</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-function"> h</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'code'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> '#1042'</span><span class="shiki-foreground">)])</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-token-function">  content</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> () </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> h</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'ul'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> [</span><span class="shiki-token-function">h</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'li'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Two items'</span><span class="shiki-foreground">)</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-function"> h</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'li'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Free shipping'</span><span class="shiki-foreground">)])</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">})</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:37,lang:`ts`,injectKind:null,editable:!1,source:null},38:{component:Ce,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">open</span><span class="shiki-foreground"> } </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> useModal</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'docs-stack'</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">async</span><span class="shiki-token-keyword"> function</span><span class="shiki-token-function"> first</span><span class="shiki-foreground">() {</span></span>
<span class="line"><span class="shiki-token-keyword">  const</span><span class="shiki-token-constant"> result</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-keyword"> await</span><span class="shiki-token-function"> open</span><span class="shiki-foreground">({</span></span>
<span class="line"><span class="shiki-foreground">    title</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'First'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    content</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Open another modal on top?'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">    buttons</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> [{ key</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'more'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> label</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Open second'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> color</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'primary'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> appearance</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'solid'</span><span class="shiki-foreground"> }]</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  })</span></span>
<span class="line"><span class="shiki-token-keyword">  if</span><span class="shiki-foreground"> (</span><span class="shiki-token-constant">result</span><span class="shiki-foreground">.action </span><span class="shiki-token-keyword">===</span><span class="shiki-token-string-expression"> 'more'</span><span class="shiki-foreground">) {</span></span>
<span class="line"><span class="shiki-token-keyword">    await</span><span class="shiki-token-function"> open</span><span class="shiki-foreground">({ title</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Second'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> content</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Stacked on top of the first.'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> variant</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'info'</span><span class="shiki-foreground"> })</span></span>
<span class="line"><span class="shiki-foreground">  }</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> namespace</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"docs-stack"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"first"</span><span class="shiki-foreground">>Open&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:38,lang:`vue`,injectKind:null,editable:!1,source:null},39:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">confirm</span><span class="shiki-foreground"> } </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> useModal</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'app'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  variant</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'danger'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  okLabel</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Ya'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  cancelLabel</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Batal'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  closeLabel</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Tutup'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  loadingLabel</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Memuat'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  footerAlign</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'between'</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">})</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Inherits the defaults above, but overrides footerAlign for this call</span></span>
<span class="line"><span class="shiki-token-keyword">await</span><span class="shiki-token-function"> confirm</span><span class="shiki-foreground">({ title</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Hapus item?'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> footerAlign</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'end'</span><span class="shiki-foreground"> })</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:39,lang:`ts`,injectKind:null,editable:!1,source:null},40:{component:p({__name:`40`,setup(n){let r=i(!1),c=i(!1),l=i(`spinner`),u=[`spinner`,`bounce`,`pulse`,`wave`,`typing`,`orbit`];function p(e){l.value=e,r.value=!0,c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return(n,i)=>(_(),d(e,null,[a(`div`,we,[(_(),d(e,null,b(u,e=>a(`button`,{key:e,class:`en-btn`,onClick:t=>p(e)},o(e),9,Y)),64))]),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[0]||=e=>r.value=e,title:`Working`,loading:c.value,loader:l.value,"loading-label":`Please wait`},{default:m(()=>[...i[1]||=[f(` The overlay lasts two seconds. `,-1)]]),_:1},8,[`modelValue`,`loading`,`loader`])],64))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> ModalLoader } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> loading</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> loader</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ModalLoader</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'spinner'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> loaders</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalLoader</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">'spinner'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'bounce'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'pulse'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'wave'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'typing'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'orbit'</span><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">function</span><span class="shiki-token-function"> run</span><span class="shiki-foreground">(l</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalLoader</span><span class="shiki-foreground">) {</span></span>
<span class="line"><span class="shiki-token-constant">  loader</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> l</span></span>
<span class="line"><span class="shiki-token-constant">  show</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> true</span></span>
<span class="line"><span class="shiki-token-constant">  loading</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> true</span></span>
<span class="line"><span class="shiki-token-function">  setTimeout</span><span class="shiki-foreground">(() </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">loading</span><span class="shiki-foreground">.value </span><span class="shiki-token-keyword">=</span><span class="shiki-token-constant"> false</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 2000</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-cluster"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> v-for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"l in loaders"</span><span class="shiki-token-function"> :key</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"l"</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"run(l)"</span><span class="shiki-foreground">>{{ l }}&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Working"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">loading</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">loading</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">loader</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">loader</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> loading-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Please wait"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    The overlay lasts two seconds.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:40,lang:`vue`,injectKind:null,editable:!1,source:null},41:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> modal</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> open</span><span class="shiki-foreground">({ title</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Saving'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> content</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> '…'</span><span class="shiki-foreground"> })</span></span>
<span class="line"><span class="shiki-token-constant">modal</span><span class="shiki-token-function">.update</span><span class="shiki-foreground">({ loading</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground"> })</span></span>
<span class="line"><span class="shiki-token-comment">// later</span></span>
<span class="line"><span class="shiki-token-constant">modal</span><span class="shiki-token-function">.update</span><span class="shiki-foreground">({ loading</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> false</span><span class="shiki-foreground"> })</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:41,lang:`ts`,injectKind:null,editable:!1,source:null},42:{component:p({__name:`42`,setup(n){let r=i(!1);return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open moveable`),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,moveable:``,"teleport-to":`body`,title:`Drag my header`,"close-on-backdrop":!1},{default:m(()=>[...i[2]||=[f(` The page behind stays usable. `,-1)]]),_:1},8,[`modelValue`])],64))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open moveable&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> moveable</span><span class="shiki-token-function"> teleport-to</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"body"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Drag my header"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">close-on-backdrop</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    The page behind stays usable.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:42,lang:`vue`,injectKind:null,editable:!1,source:null},43:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> moveable</span><span class="shiki-token-function"> teleport-to</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"body"</span><span class="shiki-foreground"> /></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:43,lang:`vue`,injectKind:null,editable:!1,source:null},44:{component:p({__name:`44`,setup(n){let r=i(!1);return(n,i)=>(_(),d(e,null,[a(`button`,{class:`en-btn`,onClick:i[0]||=e=>r.value=!0},`Open (page can still scroll)`),s(t(T),{modelValue:r.value,"onUpdate:modelValue":i[1]||=e=>r.value=e,title:`No scroll lock`,"lock-scroll":!1},{default:m(()=>[...i[2]||=[f(` The page behind can scroll while this modal is open. `,-1)]]),_:1},8,[`modelValue`])],64))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> show</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">button</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-btn"</span><span class="shiki-token-function"> @click</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"show = true"</span><span class="shiki-foreground">>Open (page can still scroll)&#x3C;/</span><span class="shiki-token-string-expression">button</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> title</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"No scroll lock"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">lock-scroll</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    The page behind can scroll while this modal is open.</span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:44,lang:`vue`,injectKind:null,editable:!1,source:null},45:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">show</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> no-header</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Session expired"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  Your session has expired.</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">ENModal</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:45,lang:`vue`,injectKind:null,editable:!1,source:null},46:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENModal</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useModal } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ModalOptions</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ModalButton</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ModalResult } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/modal'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:46,lang:`ts`,injectKind:null,editable:!1,source:null},47:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-function">useModal</span><span class="shiki-foreground">(namespace</span><span class="shiki-token-keyword">?:</span><span class="shiki-foreground"> string</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> defaults</span><span class="shiki-token-keyword">?:</span><span class="shiki-foreground"> ModalDefaults): UseModalReturn</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:47,lang:`ts`,injectKind:null,editable:!1,source:null},48:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">interface</span><span class="shiki-token-function"> ConfirmOptions</span><span class="shiki-token-keyword"> extends</span><span class="shiki-token-function"> Omit</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ModalOptions</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'buttons'</span><span class="shiki-foreground">> {</span></span>
<span class="line"><span class="shiki-foreground">  okAppearance</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-function"> ModalButtonAppearance</span><span class="shiki-token-comment">   // default 'solid'</span></span>
<span class="line"><span class="shiki-foreground">  cancelAppearance</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-function"> ModalButtonAppearance</span><span class="shiki-token-comment"> // default 'outline'</span></span>
<span class="line"><span class="shiki-foreground">  cancelLabel</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-constant"> string</span><span class="shiki-token-comment">                   // default 'Cancel'</span></span>
<span class="line"><span class="shiki-foreground">  okColor</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-function"> ModalButton</span><span class="shiki-foreground">[</span><span class="shiki-token-string-expression">'color'</span><span class="shiki-foreground">]         </span><span class="shiki-token-comment">// default from variant</span></span>
<span class="line"><span class="shiki-foreground">  cancelColor</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-function"> ModalButton</span><span class="shiki-foreground">[</span><span class="shiki-token-string-expression">'color'</span><span class="shiki-foreground">]     </span><span class="shiki-token-comment">// default 'secondary'</span></span>
<span class="line"><span class="shiki-foreground">  hideCancel</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-constant"> boolean</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">type</span><span class="shiki-token-function"> AlertOptions</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> Omit</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ConfirmOptions</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'hideCancel'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'cancelLabel'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'cancelColor'</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">interface</span><span class="shiki-token-function"> PromptOptions</span><span class="shiki-token-keyword"> extends</span><span class="shiki-token-function"> ConfirmOptions</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  defaultValue</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-constant"> string</span><span class="shiki-token-comment">                  // default ''</span></span>
<span class="line"><span class="shiki-foreground">  placeholder</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-constant"> string</span></span>
<span class="line"><span class="shiki-foreground">  inputType</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-string-expression"> 'text'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'password'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'email'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'url'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'search'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'tel'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'number'</span></span>
<span class="line"><span class="shiki-foreground">  inputClass</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-function"> ClassValue</span><span class="shiki-token-comment">                // default 'en-input'</span></span>
<span class="line"><span class="shiki-token-function">  validate</span><span class="shiki-token-keyword">?:</span><span class="shiki-foreground"> (value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> string</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> boolean</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> string</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> void</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-function"> Promise</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-constant">boolean</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> string</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> void</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:48,lang:`ts`,injectKind:null,editable:!1,source:null},49:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">interface</span><span class="shiki-token-function"> ModalResult</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">T</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> unknown</span><span class="shiki-foreground">> {</span></span>
<span class="line"><span class="shiki-foreground">  action</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> (</span><span class="shiki-token-constant">string</span><span class="shiki-token-keyword"> &#x26;</span><span class="shiki-foreground"> {}) </span><span class="shiki-token-keyword">|</span><span class="shiki-token-string-expression"> 'backdrop'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'escape'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'route'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'programmatic'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'native'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'unmount'</span></span>
<span class="line"><span class="shiki-foreground">  payload</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-function"> T</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:49,lang:`ts`,injectKind:null,editable:!1,source:null},50:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">type</span><span class="shiki-token-function"> BeforeCloseHandler</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> (result</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalResult</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> boolean</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> void</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-function"> Promise</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-constant">boolean</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> void</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:50,lang:`ts`,injectKind:null,editable:!1,source:null},51:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">type</span><span class="shiki-token-function"> BeforeClickHandler</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> (button</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalButton</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> boolean</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> void</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-function"> Promise</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-constant">boolean</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> void</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:51,lang:`ts`,injectKind:null,editable:!1,source:null},52:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">type</span><span class="shiki-token-function"> ModalHandle</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">T</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-constant"> unknown</span><span class="shiki-foreground">> </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> Promise</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ModalResult</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">T</span><span class="shiki-foreground">>> </span><span class="shiki-token-keyword">&#x26;</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-keyword">  readonly</span><span class="shiki-foreground"> id</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> string</span></span>
<span class="line"><span class="shiki-token-function">  close</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> (payload</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-function"> T</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> void</span></span>
<span class="line"><span class="shiki-token-function">  update</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> (patch</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalUpdate</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> void</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:52,lang:`ts`,injectKind:null,editable:!1,source:null},53:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">interface</span><span class="shiki-token-function"> ModalInstance</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  id</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> string</span></span>
<span class="line"><span class="shiki-foreground">  namespace</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> string</span></span>
<span class="line"><span class="shiki-foreground">  options</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalOptions</span><span class="shiki-token-comment">   // merged and reactive</span></span>
<span class="line"><span class="shiki-foreground">  visible</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> boolean</span><span class="shiki-token-comment">        // always true while it is in the store</span></span>
<span class="line"><span class="shiki-foreground">  result</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-function"> ModalResult</span><span class="shiki-token-comment">    // set when removed from the store</span></span>
<span class="line"><span class="shiki-token-function">  resolve</span><span class="shiki-token-keyword">?:</span><span class="shiki-foreground"> (result</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ModalResult</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> void</span></span>
<span class="line"><span class="shiki-foreground">}</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:53,lang:`ts`,injectKind:null,editable:!1,source:null}},Z=[{id:`modal`,text:`Modal`,level:1},{id:`quick-start`,text:`Quick start`,level:2},{id:`declarative-v-model`,text:"Declarative (`v-model`)",level:3},{id:`programmatic-usemodal`,text:"Programmatic (`useModal`)",level:3},{id:`which-one-to-use`,text:`Which one to use`,level:2},{id:`requirements`,text:`Requirements`,level:2},{id:`install`,text:`Install`,level:2},{id:`hosts-and-namespaces`,text:`Hosts and namespaces`,level:2},{id:`contents`,text:`Contents`,level:2},{id:`notes`,text:`Notes`,level:2},{id:`appearance`,text:`Appearance`,level:2},{id:`variants`,text:`Variants`,level:3},{id:`sizes`,text:`Sizes`,level:3},{id:`custom-width`,text:`Custom width`,level:4},{id:`fullscreen`,text:`Fullscreen`,level:3},{id:`animation`,text:`Animation`,level:3},{id:`position`,text:`Position`,level:3},{id:`classes-for-each-part`,text:`Classes for each part`,level:3},{id:`edge-to-edge-body`,text:`Edge-to-edge body`,level:4},{id:`header-and-footer`,text:`Header and footer`,level:3},{id:`custom-header-and-footer`,text:`Custom header and footer`,level:3},{id:`the-header-slot`,text:"The `header` slot",level:4},{id:`the-footer-slot`,text:"The `footer` slot",level:4},{id:`footer-and-buttons`,text:`Footer and Buttons`,level:2},{id:`default-footer`,text:`Default footer`,level:3},{id:`defining-buttons`,text:`Defining buttons`,level:3},{id:`modalbutton-fields`,text:"`ModalButton` fields",level:4},{id:`alignment-and-order`,text:`Alignment and order`,level:3},{id:`loading-buttons`,text:`Loading buttons`,level:3},{id:`buttons-that-submit-a-form`,text:`Buttons that submit a form`,level:3},{id:`enter-to-submit`,text:`Enter to submit`,level:3},{id:`closing`,text:`Closing`,level:2},{id:`close-actions`,text:`Close actions`,level:3},{id:`backdrop-and-esc`,text:"Backdrop and `Esc`",level:3},{id:`persistent-modals`,text:`Persistent modals`,level:3},{id:`guarding-a-close-beforeclose`,text:"Guarding a close: `beforeClose`",level:3},{id:`with-a-custom-footer`,text:`With a custom footer`,level:4},{id:`per-button-guard`,text:`Per-button guard`,level:3},{id:`closing-on-route-change`,text:`Closing on route change`,level:3},{id:`native-closes-and-host-unmount`,text:`Native closes and host unmount`,level:3},{id:`usemodal`,text:`useModal`,level:2},{id:`confirm`,text:"`confirm()`",level:3},{id:`alert`,text:"`alert()`",level:3},{id:`prompt`,text:"`prompt()`",level:3},{id:`open-and-the-handle`,text:"`open()` and the handle",level:3},{id:`content-as-a-render-function`,text:`Content as a render function`,level:4},{id:`lifecycle-callbacks`,text:`Lifecycle callbacks`,level:4},{id:`closing-from-code`,text:`Closing from code`,level:3},{id:`stacking`,text:`Stacking`,level:3},{id:`defaults-and-localization`,text:`Defaults and localization`,level:3},{id:`precedence`,text:`Precedence`,level:3},{id:`host-warnings`,text:`Host warnings`,level:3},{id:`loading-and-moveable`,text:`Loading and Moveable`,level:2},{id:`loading-overlay`,text:`Loading overlay`,level:3},{id:`moveable-modals`,text:`Moveable modals`,level:3},{id:`teleport`,text:`Teleport`,level:4},{id:`scroll-lock`,text:`Scroll lock`,level:3},{id:`accessibility`,text:`Accessibility`,level:2},{id:`what-the-browser-provides`,text:`What the browser provides`,level:3},{id:`what-enmodal-adds`,text:`What ENModal adds`,level:3},{id:`names`,text:`Names`,level:3},{id:`keyboard`,text:`Keyboard`,level:3},{id:`choosing-the-right-dialog`,text:`Choosing the right dialog`,level:3},{id:`known-gaps`,text:`Known gaps`,level:3},{id:`api-reference`,text:`API Reference`,level:2},{id:`enmodal`,text:"`<ENModal>`",level:3},{id:`props`,text:`Props`,level:4},{id:`events`,text:`Events`,level:4},{id:`slots`,text:`Slots`,level:4},{id:`attribute-fallthrough`,text:`Attribute fallthrough`,level:4},{id:`usemodal-reference`,text:"`useModal()` reference",level:3},{id:`usemodalreturn`,text:"`UseModalReturn`",level:4},{id:`types`,text:`Types`,level:3},{id:`modaloptions`,text:"`ModalOptions`",level:4},{id:`modalupdate`,text:"`ModalUpdate`",level:4},{id:`modalbutton`,text:"`ModalButton`",level:4},{id:`confirmoptions-alertoptions-promptoptions`,text:"`ConfirmOptions`, `AlertOptions`, `PromptOptions`",level:4},{id:`modaldefaults`,text:"`ModalDefaults`",level:4},{id:`modalresult`,text:"`ModalResult`",level:4},{id:`beforeclosehandler`,text:"`BeforeCloseHandler`",level:4},{id:`beforeclickhandler`,text:"`BeforeClickHandler`",level:4},{id:`modalhandle`,text:"`ModalHandle`",level:4},{id:`modalinstance`,text:"`ModalInstance`",level:4},{id:`union-types`,text:`Union types`,level:4},{id:`css-classes`,text:`CSS classes`,level:3},{id:`custom-properties`,text:`Custom properties`,level:4},{id:`development-warnings`,text:`Development warnings`,level:3},{id:`gotchas`,text:`Gotchas`,level:3}],Q=[{id:`modal`,text:`Modal`,level:1,children:[{id:`quick-start`,text:`Quick start`,level:2,children:[{id:`declarative-v-model`,text:"Declarative (`v-model`)",level:3,children:[]},{id:`programmatic-usemodal`,text:"Programmatic (`useModal`)",level:3,children:[]}]},{id:`which-one-to-use`,text:`Which one to use`,level:2,children:[]},{id:`requirements`,text:`Requirements`,level:2,children:[]},{id:`install`,text:`Install`,level:2,children:[]},{id:`hosts-and-namespaces`,text:`Hosts and namespaces`,level:2,children:[]},{id:`contents`,text:`Contents`,level:2,children:[]},{id:`notes`,text:`Notes`,level:2,children:[]},{id:`appearance`,text:`Appearance`,level:2,children:[{id:`variants`,text:`Variants`,level:3,children:[]},{id:`sizes`,text:`Sizes`,level:3,children:[{id:`custom-width`,text:`Custom width`,level:4,children:[]}]},{id:`fullscreen`,text:`Fullscreen`,level:3,children:[]},{id:`animation`,text:`Animation`,level:3,children:[]},{id:`position`,text:`Position`,level:3,children:[]},{id:`classes-for-each-part`,text:`Classes for each part`,level:3,children:[{id:`edge-to-edge-body`,text:`Edge-to-edge body`,level:4,children:[]}]},{id:`header-and-footer`,text:`Header and footer`,level:3,children:[]},{id:`custom-header-and-footer`,text:`Custom header and footer`,level:3,children:[{id:`the-header-slot`,text:"The `header` slot",level:4,children:[]},{id:`the-footer-slot`,text:"The `footer` slot",level:4,children:[]}]}]},{id:`footer-and-buttons`,text:`Footer and Buttons`,level:2,children:[{id:`default-footer`,text:`Default footer`,level:3,children:[]},{id:`defining-buttons`,text:`Defining buttons`,level:3,children:[{id:`modalbutton-fields`,text:"`ModalButton` fields",level:4,children:[]}]},{id:`alignment-and-order`,text:`Alignment and order`,level:3,children:[]},{id:`loading-buttons`,text:`Loading buttons`,level:3,children:[]},{id:`buttons-that-submit-a-form`,text:`Buttons that submit a form`,level:3,children:[]},{id:`enter-to-submit`,text:`Enter to submit`,level:3,children:[]}]},{id:`closing`,text:`Closing`,level:2,children:[{id:`close-actions`,text:`Close actions`,level:3,children:[]},{id:`backdrop-and-esc`,text:"Backdrop and `Esc`",level:3,children:[]},{id:`persistent-modals`,text:`Persistent modals`,level:3,children:[]},{id:`guarding-a-close-beforeclose`,text:"Guarding a close: `beforeClose`",level:3,children:[{id:`with-a-custom-footer`,text:`With a custom footer`,level:4,children:[]}]},{id:`per-button-guard`,text:`Per-button guard`,level:3,children:[]},{id:`closing-on-route-change`,text:`Closing on route change`,level:3,children:[]},{id:`native-closes-and-host-unmount`,text:`Native closes and host unmount`,level:3,children:[]}]},{id:`usemodal`,text:`useModal`,level:2,children:[{id:`confirm`,text:"`confirm()`",level:3,children:[]},{id:`alert`,text:"`alert()`",level:3,children:[]},{id:`prompt`,text:"`prompt()`",level:3,children:[]},{id:`open-and-the-handle`,text:"`open()` and the handle",level:3,children:[{id:`content-as-a-render-function`,text:`Content as a render function`,level:4,children:[]},{id:`lifecycle-callbacks`,text:`Lifecycle callbacks`,level:4,children:[]}]},{id:`closing-from-code`,text:`Closing from code`,level:3,children:[]},{id:`stacking`,text:`Stacking`,level:3,children:[]},{id:`defaults-and-localization`,text:`Defaults and localization`,level:3,children:[]},{id:`precedence`,text:`Precedence`,level:3,children:[]},{id:`host-warnings`,text:`Host warnings`,level:3,children:[]}]},{id:`loading-and-moveable`,text:`Loading and Moveable`,level:2,children:[{id:`loading-overlay`,text:`Loading overlay`,level:3,children:[]},{id:`moveable-modals`,text:`Moveable modals`,level:3,children:[{id:`teleport`,text:`Teleport`,level:4,children:[]}]},{id:`scroll-lock`,text:`Scroll lock`,level:3,children:[]}]},{id:`accessibility`,text:`Accessibility`,level:2,children:[{id:`what-the-browser-provides`,text:`What the browser provides`,level:3,children:[]},{id:`what-enmodal-adds`,text:`What ENModal adds`,level:3,children:[]},{id:`names`,text:`Names`,level:3,children:[]},{id:`keyboard`,text:`Keyboard`,level:3,children:[]},{id:`choosing-the-right-dialog`,text:`Choosing the right dialog`,level:3,children:[]},{id:`known-gaps`,text:`Known gaps`,level:3,children:[]}]},{id:`api-reference`,text:`API Reference`,level:2,children:[{id:`enmodal`,text:"`<ENModal>`",level:3,children:[{id:`props`,text:`Props`,level:4,children:[]},{id:`events`,text:`Events`,level:4,children:[]},{id:`slots`,text:`Slots`,level:4,children:[]},{id:`attribute-fallthrough`,text:`Attribute fallthrough`,level:4,children:[]}]},{id:`usemodal-reference`,text:"`useModal()` reference",level:3,children:[{id:`usemodalreturn`,text:"`UseModalReturn`",level:4,children:[]}]},{id:`types`,text:`Types`,level:3,children:[{id:`modaloptions`,text:"`ModalOptions`",level:4,children:[]},{id:`modalupdate`,text:"`ModalUpdate`",level:4,children:[]},{id:`modalbutton`,text:"`ModalButton`",level:4,children:[]},{id:`confirmoptions-alertoptions-promptoptions`,text:"`ConfirmOptions`, `AlertOptions`, `PromptOptions`",level:4,children:[]},{id:`modaldefaults`,text:"`ModalDefaults`",level:4,children:[]},{id:`modalresult`,text:"`ModalResult`",level:4,children:[]},{id:`beforeclosehandler`,text:"`BeforeCloseHandler`",level:4,children:[]},{id:`beforeclickhandler`,text:"`BeforeClickHandler`",level:4,children:[]},{id:`modalhandle`,text:"`ModalHandle`",level:4,children:[]},{id:`modalinstance`,text:"`ModalInstance`",level:4,children:[]},{id:`union-types`,text:`Union types`,level:4,children:[]}]},{id:`css-classes`,text:`CSS classes`,level:3,children:[{id:`custom-properties`,text:`Custom properties`,level:4,children:[]}]},{id:`development-warnings`,text:`Development warnings`,level:3,children:[]},{id:`gotchas`,text:`Gotchas`,level:3,children:[]}]}]}],Te={css:[],js:[],cleanup:[]},$=p({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>x(`div`,{class:n},[e.meta.isLive?x(te,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:x(ee,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),Ee=p({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/modal.md`,setup(){h(`vlm-toc`,{flat:Z,tree:Q}),S(()=>v(Z,Q)),y(()=>v([],[]));let e=ne(Te);return h(`vlm-inject`,e),S(()=>e.mount()),g(()=>e.beforeUnmount()),y(()=>e.unmounted()),()=>x(`div`,{class:`vlm-page`},[x(`div`,{class:`vlm-content`},[x(`div`,{class:`vlm-md`,innerHTML:`<h1 id="modal">Modal<a class="header-link" href="#modal" title="Link to this heading"></a></h1>
<p><code>ENModal</code> is a modal dialog built on the native <code>&lt;dialog&gt;</code> element. The browser provides the top layer, the backdrop, focus trapping and the <code>Esc</code> key; EN.CSS provides the look and the open/close animations. The same component works in two ways:</p>
<ul>
<li><strong>Declarative</strong>: bind <code>v-model</code> and put the content in slots, for one modal that belongs to a component.</li>
<li><strong>Programmatic</strong>: place one <code>&lt;ENModal namespace=&quot;app&quot; /&gt;</code> host in your app and open modals from anywhere with <code>useModal('app')</code>. <code>confirm()</code>, <code>alert()</code> and <code>prompt()</code> return promises, so a dialog reads like a normal <code>await</code>.</li>
</ul>
<p>`}),x($,{key:0,meta:X[0]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="quick-start">Quick start<a class="header-link" href="#quick-start" title="Link to this heading"></a></h2>
<h3 id="declarative-v-model">Declarative (<code>v-model</code>)<a class="header-link" href="#declarative-v-model" title="Link to this heading"></a></h3>
<p>`}),x($,{key:1,meta:X[1]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Without <code>buttons</code> or a <code>footer</code> slot, the footer has a single primary <strong>OK</strong> button (<code>ok-label</code> changes its text).</p>
<h3 id="programmatic-usemodal">Programmatic (<code>useModal</code>)<a class="header-link" href="#programmatic-usemodal" title="Link to this heading"></a></h3>
<p>`}),x($,{key:2,meta:X[2]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>useModal('docs-quick')</code> can be called in any component, composable or store. It only talks to the shared registry of that namespace, and the host renders what is in it.</p>
<h2 id="which-one-to-use">Which one to use<a class="header-link" href="#which-one-to-use" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>You want</th>
<th>Use</th>
</tr>
</thead>
<tbody>
<tr>
<td>A form or rich content that lives in one component</td>
<td>Declarative (<code>v-model</code> and slots)</td>
</tr>
<tr>
<td>A yes/no question that returns a value</td>
<td><a href="#confirm"><code>confirm()</code></a></td>
</tr>
<tr>
<td>A notice the user must acknowledge</td>
<td><a href="#alert"><code>alert()</code></a></td>
</tr>
<tr>
<td>One text value</td>
<td><a href="#prompt"><code>prompt()</code></a></td>
</tr>
<tr>
<td>Open a modal from a store, a router guard or an API callback</td>
<td><a href="#open-and-the-handle"><code>useModal().open()</code></a></td>
</tr>
<tr>
<td>A draggable window with the page still usable</td>
<td><a href="#moveable-modals"><code>moveable</code></a></td>
</tr>
</tbody>
</table>
</div><h2 id="requirements">Requirements<a class="header-link" href="#requirements" title="Link to this heading"></a></h2>
<p><code>ENModal</code> only toggles classes and attributes. All styles come from EN.CSS, which has to be loaded by your app.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Needed for</th>
<th>EN.CSS file</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Always</strong>: dialog, backdrop, header, footer, animations, scroll lock</td>
<td><code>components/basic/components-modal.css</code></td>
</tr>
<tr>
<td><strong>Always</strong>: the header × button (<code>.en-modal__close-icon</code>)</td>
<td><code>components/basic/components-close-icon.css</code></td>
</tr>
<tr>
<td><strong>Always</strong>: footer buttons (<code>.en-btn</code>, <code>--solid</code>, <code>--ghost</code>, sizes)</td>
<td><code>components/basic/components-button.css</code></td>
</tr>
<tr>
<td><code>prompt()</code> input (<code>inputClass</code>, default <code>en-input</code>)</td>
<td><code>form/form-basic.css</code></td>
</tr>
<tr>
<td>Button <code>loading</code>, async <code>beforeClose</code> / <code>beforeClick</code> (spinner on the button)</td>
<td><code>components/extended/components-btn-loading.css</code></td>
</tr>
<tr>
<td><code>loading</code> overlay with <code>loader: 'spinner'</code></td>
<td><code>components/extended/components-spinner.css</code></td>
</tr>
<tr>
<td><code>loading</code> overlay with a dot loader</td>
<td><code>components/extended/components-dot-loader-base.css</code> <strong>plus</strong> the part of the loader you use</td>
</tr>
</tbody>
</table>
</div><p>Dot-loader parts: <code>-line</code> for <code>bounce</code>, <code>pulse</code>, <code>fade</code>, <code>wave</code>, <code>typing</code>, <code>stretch</code>, <code>flip</code>; <code>-orbit</code> for <code>orbit</code>, <code>triangle</code>, <code>spiral</code>; <code>-travel</code> for <code>collision</code>, <code>shuffle</code>, <code>helix</code>. Importing <code>components-dot-loader.css</code> loads all of them.</p>
<p>What each bundle already includes (from <code>presets/manifest.json</code>):</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Bundle</th>
<th style="text-align:center">Modal</th>
<th style="text-align:center">Button <code>loading</code></th>
<th style="text-align:center">Spinner</th>
<th style="text-align:center">Dot loaders</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>en-extra</code></td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">Yes</td>
</tr>
<tr>
<td><code>en</code>, <code>en-preset-lite</code>, <code>-standard</code>, <code>-app</code>, <code>-data</code>, <code>-marketing</code></td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">No</td>
<td style="text-align:center">No</td>
<td style="text-align:center">No</td>
</tr>
<tr>
<td><code>en-preset-mobile</code></td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">No</td>
<td style="text-align:center">No</td>
<td style="text-align:center">Yes</td>
</tr>
<tr>
<td><code>en-preset-extended</code> (add-on)</td>
<td style="text-align:center">No</td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">Yes</td>
</tr>
<tr>
<td><code>en-preset-nano</code>, <code>-forms</code>, <code>-core</code>, <code>-bare</code>, <code>-docs</code>, <code>-a11y</code>, <code>-print</code></td>
<td style="text-align:center">No</td>
<td style="text-align:center">No</td>
<td style="text-align:center">No</td>
<td style="text-align:center">No</td>
</tr>
</tbody>
</table>
</div><p>Without the optional files nothing breaks, but the <code>loading</code> overlay is empty and a loading button shows no spinner. The simplest fix is the add-on bundle, imported after the base preset:</p>
<p>`}),x($,{key:3,meta:X[3]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The presets without a modal need the three always-required files added by hand.</p>
<h2 id="install">Install<a class="header-link" href="#install" title="Link to this heading"></a></h2>
<p>`}),x($,{key:4,meta:X[4]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),x($,{key:5,meta:X[5]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<blockquote>
<p><code>@en32/en-css-vue/modal/style.css</code> is a deprecated, empty stub kept so old imports keep working. Every <code>.en-modal*</code> rule now lives in EN.CSS core, so you do not need to import it.</p>
</blockquote>
<p>For global registration, install the optional plugin. It only registers <code>ENModal</code>:</p>
<p>`}),x($,{key:6,meta:X[6]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="hosts-and-namespaces">Hosts and namespaces<a class="header-link" href="#hosts-and-namespaces" title="Link to this heading"></a></h2>
<p>The programmatic API is split in two halves that share a <strong>namespace</strong> (a string, <code>'default'</code> unless you pass one):</p>
<ul>
<li>the <strong>host</strong>, <code>&lt;ENModal namespace=&quot;app&quot; /&gt;</code>, renders the modals of that namespace. Props on the host are defaults for every modal it renders (for example <code>:close-on-backdrop=&quot;false&quot;</code>).</li>
<li>the <strong>composable</strong>, <code>useModal('app')</code>, puts modals into that namespace.</li>
</ul>
<p>Precedence, from lowest to highest: host props, <code>useModal(namespace, defaults)</code>, then the options of one call.</p>
<p>Keep to <strong>one host per namespace</strong>. Two hosts would render every modal twice, and a development build warns about it. A modal opened before any host is mounted waits in the store and appears when a host mounts (a warning is printed in development).</p>
<h2 id="contents">Contents<a class="header-link" href="#contents" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Section</th>
<th>Contents</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#appearance">Appearance</a></td>
<td>Variants, sizes, animation, placement, width, fullscreen, classes, header, footer and body options</td>
</tr>
<tr>
<td><a href="#footer-and-buttons">Footer and Buttons</a></td>
<td>Button options, alignment, loading buttons, form submit buttons, Enter to submit</td>
</tr>
<tr>
<td><a href="#closing">Closing</a></td>
<td>Close actions, backdrop and <code>Esc</code>, <code>persistent</code>, <code>beforeClose</code>, <code>beforeClick</code>, route changes</td>
</tr>
<tr>
<td><a href="#usemodal">useModal</a></td>
<td><code>open()</code> and its handle, <code>confirm()</code>, <code>alert()</code>, <code>prompt()</code>, defaults, lifecycle callbacks, stacking</td>
</tr>
<tr>
<td><a href="#loading-and-moveable">Loading and Moveable</a></td>
<td>Loading overlay, draggable modals, scroll lock, teleport</td>
</tr>
<tr>
<td><a href="#accessibility">Accessibility</a></td>
<td>Roles, names, focus, keyboard and motion</td>
</tr>
<tr>
<td><a href="#api-reference">API Reference</a></td>
<td>Props, events, slots, types, CSS classes and custom properties</td>
</tr>
</tbody>
</table>
</div><h2 id="notes">Notes<a class="header-link" href="#notes" title="Link to this heading"></a></h2>
<ul>
<li>The library is <strong>experimental</strong> and has not been released officially. APIs may change without a version bump.</li>
<li>It needs a browser with native <code>&lt;dialog&gt;</code> support (all evergreen browsers). No polyfill is bundled.</li>
<li>Every modal is a real <code>&lt;dialog&gt;</code> opened with <code>showModal()</code>, so while one is open the page behind it is inert for the keyboard and for assistive technology. The exception is a <a href="#moveable-modals"><code>moveable</code></a> modal, which is non-modal on purpose.</li>
</ul>
<h2 id="appearance">Appearance<a class="header-link" href="#appearance" title="Link to this heading"></a></h2>
<p>How a modal looks and where it sits: variants, sizes, animations, placement, width, fullscreen, extra classes and which parts render. Everything on this page works the same for the declarative component (props) and for <code>useModal()</code> (options).</p>
<p>Requires <code>components/basic/components-modal.css</code>.</p>
<p>`}),x($,{key:7,meta:X[7]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="variants">Variants<a class="header-link" href="#variants" title="Link to this heading"></a></h3>
<p><code>variant</code> gives the <strong>header</strong> a solid semantic colour. The body and the footer stay neutral.</p>
<p>`}),x($,{key:8,meta:X[8]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The × button follows the header foreground, so it stays readable on every variant. Set <code>--en-modal-close-opacity</code> (default <code>1</code>, keep it at <code>0.85</code> or higher) to soften its resting state.</p>
<h3 id="sizes">Sizes<a class="header-link" href="#sizes" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>size</code></th>
<th>Class</th>
<th>Width</th>
<th>Footer buttons</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'small'</code></td>
<td><code>.en-modal--sm</code></td>
<td><code>24rem</code></td>
<td><code>.en-btn--sm</code></td>
</tr>
<tr>
<td><code>'medium'</code> (default)</td>
<td>none</td>
<td><code>32rem</code></td>
<td><code>.en-btn</code></td>
</tr>
<tr>
<td><code>'large'</code></td>
<td><code>.en-modal--lg</code></td>
<td><code>48rem</code></td>
<td><code>.en-btn--lg</code></td>
</tr>
<tr>
<td><code>'xlarge'</code></td>
<td><code>.en-modal--xl</code></td>
<td><code>64rem</code></td>
<td><code>.en-btn--lg</code></td>
</tr>
</tbody>
</table>
</div><p>The dialog is never wider than <code>90vw</code> (<code>94vw</code> for <code>xlarge</code>). <strong>Below 768px the <code>large</code> and <code>xlarge</code> sizes become fullscreen</strong>, because a wide dialog on a phone has no useful margin. The <code>small</code> size also uses tighter paddings and a smaller title.</p>
<p>`}),x($,{key:9,meta:X[9]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h4 id="custom-width">Custom width<a class="header-link" href="#custom-width" title="Link to this heading"></a></h4>
<p><code>width</code> sets the <code>--en-modal-width</code> custom property. A number means pixels, and any CSS length works. It takes precedence over <code>size</code> and is still capped at <code>90vw</code>.</p>
<p>`}),x($,{key:10,meta:X[10]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>You can also set <code>--en-modal-width</code> yourself on the dialog or on an ancestor.</p>
<h3 id="fullscreen">Fullscreen<a class="header-link" href="#fullscreen" title="Link to this heading"></a></h3>
<p><code>fullscreen</code> fills the whole viewport, without a border radius.</p>
<p>`}),x($,{key:11,meta:X[11]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="animation">Animation<a class="header-link" href="#animation" title="Link to this heading"></a></h3>
<p><code>zoom</code> (the default) is the built-in fade and scale. The others replace it with a slide from one edge or a plain fade. Both the opening and the closing are animated.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>animation</code></th>
<th>Class</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'zoom'</code> (default)</td>
<td>none</td>
<td>Fade and scale</td>
</tr>
<tr>
<td><code>'fade'</code></td>
<td><code>.en-modal--anim-fade</code></td>
<td>Fade only</td>
</tr>
<tr>
<td><code>'top'</code></td>
<td><code>.en-modal--anim-top</code></td>
<td>Slides down from <code>-2rem</code></td>
</tr>
<tr>
<td><code>'bottom'</code></td>
<td><code>.en-modal--anim-bottom</code></td>
<td>Slides up from <code>2rem</code></td>
</tr>
<tr>
<td><code>'left'</code></td>
<td><code>.en-modal--anim-left</code></td>
<td>Slides in from the left</td>
</tr>
<tr>
<td><code>'right'</code></td>
<td><code>.en-modal--anim-right</code></td>
<td>Slides in from the right</td>
</tr>
</tbody>
</table>
</div><p>`}),x($,{key:12,meta:X[12]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="position">Position<a class="header-link" href="#position" title="Link to this heading"></a></h3>
<p><code>position</code> places the modal vertically. The offset from the edge is <code>var(--en-space-8)</code>.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>position</code></th>
<th>Class</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'center'</code> (default)</td>
<td>none</td>
</tr>
<tr>
<td><code>'top'</code></td>
<td><code>.en-modal--top</code></td>
</tr>
<tr>
<td><code>'bottom'</code></td>
<td><code>.en-modal--bottom</code></td>
</tr>
</tbody>
</table>
</div><p>`}),x($,{key:13,meta:X[13]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>top</code> is a shorthand that predates <code>position</code>:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>top</code></th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>true</code></td>
<td>Top placement with the <code>var(--en-space-8)</code> offset</td>
</tr>
<tr>
<td>a number</td>
<td>Top placement, that many pixels from the edge (<code>--en-modal-offset</code>)</td>
</tr>
</tbody>
</table>
</div><p>An explicit <code>position</code> wins over <code>top</code>, except that a numeric <code>top</code> still supplies the offset for <code>position: 'top'</code>. The maximum height accounts for the offset, so a tall modal stays inside the viewport.</p>
<h3 id="classes-for-each-part">Classes for each part<a class="header-link" href="#classes-for-each-part" title="Link to this heading"></a></h3>
<p>Every part of the dialog accepts extra classes. Values are strings, arrays or objects (<code>ClassValue</code>).</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Target</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>contentClass</code> / <code>rootClass</code></td>
<td><code>.en-modal</code> (the <code>&lt;dialog&gt;</code>). Both are applied when both are set</td>
</tr>
<tr>
<td><code>headerClass</code></td>
<td><code>.en-modal__header</code></td>
</tr>
<tr>
<td><code>titleClass</code></td>
<td><code>.en-modal__title</code></td>
</tr>
<tr>
<td><code>bodyClass</code></td>
<td><code>.en-modal__body</code></td>
</tr>
<tr>
<td><code>footerClass</code></td>
<td><code>.en-modal__footer</code></td>
</tr>
</tbody>
</table>
</div><p>Attributes that are not props (<code>class</code>, <code>style</code>, <code>data-*</code>, <code>aria-*</code>, listeners) are applied to every rendered <code>&lt;dialog&gt;</code>.</p>
<h4 id="edge-to-edge-body">Edge-to-edge body<a class="header-link" href="#edge-to-edge-body" title="Link to this heading"></a></h4>
<p><code>en-modal__body--flush</code> removes the body padding, which suits images, tables and embedded forms:</p>
<p>`}),x($,{key:14,meta:X[14]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="header-and-footer">Header and footer<a class="header-link" href="#header-and-footer" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>title</code></td>
<td>Header text (a string, or a render function in <code>useModal</code>)</td>
</tr>
<tr>
<td><code>closable</code></td>
<td>Shows the × button in the header (default <code>true</code>)</td>
</tr>
<tr>
<td><code>noHeader</code></td>
<td>Does not render the header at all</td>
</tr>
<tr>
<td><code>noFooter</code></td>
<td>Does not render the footer at all</td>
</tr>
</tbody>
</table>
</div><p>The header is rendered when it has a title or a × button. A modal with <code>noHeader</code> has no title to name it, so give it an <code>aria-label</code> (see <a href="#names">Accessibility</a>).</p>
<p>`}),x($,{key:15,meta:X[15]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="custom-header-and-footer">Custom header and footer<a class="header-link" href="#custom-header-and-footer" title="Link to this heading"></a></h3>
<h4 id="the-header-slot">The <code>header</code> slot<a class="header-link" href="#the-header-slot" title="Link to this heading"></a></h4>
<p>The <code>header</code> slot replaces the <strong>title content</strong>. It is rendered inside the <code>&lt;h3 class=&quot;en-modal__title&quot;&gt;</code>, so the header layout and the × button stay.</p>
<p>`}),x($,{key:16,meta:X[16]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h4 id="the-footer-slot">The <code>footer</code> slot<a class="header-link" href="#the-footer-slot" title="Link to this heading"></a></h4>
<p>The <code>footer</code> slot replaces the button row. It stays wrapped in <code>.en-modal__footer</code>, so spacing and borders are kept. Its binding <code>close(action)</code> closes the modal <strong>through</strong> <code>beforeClose</code>, which a plain <code>show = false</code> does not.</p>
<p>`}),x($,{key:17,meta:X[17]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>footerAlign</code> and <code>swapButtons</code> only apply to the <strong>auto-rendered</strong> footer (see <a href="#footer-and-buttons">Footer and buttons</a>).</p>
<h2 id="footer-and-buttons">Footer and Buttons<a class="header-link" href="#footer-and-buttons" title="Link to this heading"></a></h2>
<p>The footer is a row of buttons. You describe the buttons as data (<code>ModalButton</code>), and ENModal renders, sizes, aligns and guards them. For a fully custom footer use the <a href="#the-footer-slot"><code>footer</code> slot</a> instead.</p>
<p>Requires <code>components/basic/components-button.css</code>. The loading state needs <code>components/extended/components-btn-loading.css</code>.</p>
<p>`}),x($,{key:18,meta:X[18]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="default-footer">Default footer<a class="header-link" href="#default-footer" title="Link to this heading"></a></h3>
<p>When no buttons are given, the footer has one primary <strong>OK</strong> button (<code>ok-label</code> changes its text). Giving <code>buttons</code> replaces it. An empty array also falls back to the OK button, so use <code>no-footer</code> to remove the footer.</p>
<h3 id="defining-buttons">Defining buttons<a class="header-link" href="#defining-buttons" title="Link to this heading"></a></h3>
<p>`}),x($,{key:19,meta:X[19]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Clicking a button closes the modal and reports the button’s <code>key</code> as the close <strong>action</strong> (<code>@close</code> for the declarative modal, <code>result.action</code> for <code>useModal</code>).</p>
<h4 id="modalbutton-fields"><code>ModalButton</code> fields<a class="header-link" href="#modalbutton-fields" title="Link to this heading"></a></h4>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>key</code></td>
<td><code>string</code></td>
<td>Required. Unique. Becomes the close action</td>
</tr>
<tr>
<td><code>label</code></td>
<td><code>string | () =&gt; VNode | VNode[]</code></td>
<td>Visible content</td>
</tr>
<tr>
<td><code>color</code></td>
<td><code>'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'</code></td>
<td><code>.en-btn--{color}</code>. No class when omitted</td>
</tr>
<tr>
<td><code>appearance</code></td>
<td><code>'solid' | 'outline' | 'ghost'</code></td>
<td>Fill style. <code>outline</code> (the default) adds no class, <code>solid</code> adds <code>.en-btn--solid</code>, <code>ghost</code> adds <code>.en-btn--ghost</code></td>
</tr>
<tr>
<td><code>type</code></td>
<td><code>'button' | 'submit'</code></td>
<td>Native button type. Default <code>'button'</code></td>
</tr>
<tr>
<td><code>form</code></td>
<td><code>string</code></td>
<td><code>id</code> of the <code>&lt;form&gt;</code> the button belongs to (the <code>form</code> attribute)</td>
</tr>
<tr>
<td><code>class</code></td>
<td><code>ClassValue</code></td>
<td>Extra classes on the button</td>
</tr>
<tr>
<td><code>autofocus</code></td>
<td><code>boolean</code></td>
<td>Marks the default action. It receives focus, and <code>submitOnEnter</code> picks it</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>boolean</code></td>
<td>Disables the button</td>
</tr>
<tr>
<td><code>loading</code></td>
<td><code>boolean</code></td>
<td>Shows the loading state and ignores clicks. The button keeps keyboard focus</td>
</tr>
<tr>
<td><code>beforeClick</code></td>
<td><code>(button) =&gt; boolean | void | Promise&lt;...&gt;</code></td>
<td>Guard for this button only. See <a href="#per-button-guard">Closing</a></td>
</tr>
</tbody>
</table>
</div><p><code>.en-btn--{color}</code> alone renders an <strong>outline</strong> button, so give the main action <code>appearance: 'solid'</code> for visual weight and a secondary one <code>'ghost'</code>.</p>
<p>The button size follows the modal size: <code>small</code> uses <code>.en-btn--sm</code>, <code>medium</code> the plain <code>.en-btn</code>, <code>large</code> and <code>xlarge</code> use <code>.en-btn--lg</code>.</p>
<h3 id="alignment-and-order">Alignment and order<a class="header-link" href="#alignment-and-order" title="Link to this heading"></a></h3>
<p><code>footerAlign</code> positions the buttons (<code>.en-modal__footer--{value}</code>). <code>swapButtons</code> reverses their order, which moves Cancel before OK without rewriting the list. Both only apply to the auto-rendered footer.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>footerAlign</code></th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'end'</code> (default)</td>
<td>Flush to the inline-end (right in LTR)</td>
</tr>
<tr>
<td><code>'start'</code></td>
<td>Flush to the inline-start</td>
</tr>
<tr>
<td><code>'center'</code></td>
<td>Centered</td>
</tr>
<tr>
<td><code>'between'</code></td>
<td>Spread with space between</td>
</tr>
</tbody>
</table>
</div><p>`}),x($,{key:20,meta:X[20]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="loading-buttons">Loading buttons<a class="header-link" href="#loading-buttons" title="Link to this heading"></a></h3>
<p><code>loading: true</code> shows the spinner state (<code>.en-btn--loading</code>) and ignores clicks. Unlike <code>disabled</code>, the button is not dimmed and keeps focus (<code>aria-busy</code> and <code>aria-disabled</code> are set). It works for every colour and appearance.</p>
<p>You rarely need it for work started by closing, because an <strong>async</strong> <code>beforeClose</code> or <code>beforeClick</code> sets the loading state on the clicked button by itself and disables the others. Use <code>loading</code> yourself when the work does not end in a close:</p>
<p>`}),x($,{key:21,meta:X[21]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>button-click</code> runs first for <strong>any</strong> footer click, and the modal then closes with the button’s key unless a guard stops it. In this demo <code>Save</code> also closes the modal after the first click. Use <a href="#per-button-guard"><code>beforeClick</code></a> to keep it open while a request runs.</p>
<h3 id="buttons-that-submit-a-form">Buttons that submit a form<a class="header-link" href="#buttons-that-submit-a-form" title="Link to this heading"></a></h3>
<p>A button with <code>type: 'submit'</code> and <code>form: '&lt;form id&gt;'</code> is tied to a <code>&lt;form&gt;</code> in the body. If the form is invalid, the browser shows its validation messages and the modal <strong>stays open</strong> (<code>button-click</code> does not fire).</p>
<p>`}),x($,{key:22,meta:X[22]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>If the form is valid, the click is handled like any footer button (<code>button-click</code>, guards, then the close with that key), and the browser also submits the form as the click’s default action. That submission is <strong>not</strong> blocked by <code>beforeClick</code> or <code>beforeClose</code>: they only decide whether the modal closes, so do the real validation or request in the form’s own <code>submit</code> handler.</p>
<h3 id="enter-to-submit">Enter to submit<a class="header-link" href="#enter-to-submit" title="Link to this heading"></a></h3>
<p><code>submitOnEnter</code> lets Enter inside a text input of the body trigger a footer button, the way submitting a form would.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Value</th>
<th>Triggers</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>false</code> (default)</td>
<td>Nothing special</td>
</tr>
<tr>
<td><code>true</code></td>
<td>The button flagged <code>autofocus</code>, else the first enabled button</td>
</tr>
<tr>
<td>a string</td>
<td>The button with that <code>key</code></td>
</tr>
</tbody>
</table>
</div><p>`}),x($,{key:23,meta:X[23]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Rules:</p>
<ul>
<li>It listens inside <code>.en-modal__body</code> only. Enter on a footer button or the × behaves as usual.</li>
<li>It applies to text-like inputs. <code>&lt;textarea&gt;</code> is excluded (Enter still inserts a newline), and so are <code>checkbox</code>, <code>radio</code>, <code>range</code>, <code>file</code>, <code>color</code>, <code>button</code>, <code>submit</code> and <code>reset</code>.</li>
<li>It is ignored during IME composition.</li>
<li>Disabled and loading buttons are never triggered.</li>
<li><code>confirm()</code> already marks its OK button <code>autofocus</code>, so <code>submitOnEnter: true</code> triggers it. <code>prompt()</code> turns <code>submitOnEnter</code> on by default.</li>
</ul>
<h2 id="closing">Closing<a class="header-link" href="#closing" title="Link to this heading"></a></h2>
<p>A modal can be closed by the user (a footer button, the × button, the backdrop, <code>Esc</code>), by the page (a route change), or by your code (<code>v-model</code>, <code>close()</code>). This page explains the <strong>actions</strong> they report and the guards that can keep a modal open.</p>
<p>`}),x($,{key:24,meta:X[24]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="close-actions">Close actions<a class="header-link" href="#close-actions" title="Link to this heading"></a></h3>
<p>Every close is reported with an <strong>action</strong> string: <code>@close</code> and <code>@closed</code> carry it for the declarative modal, and <code>result.action</code> resolves from <code>open()</code>.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>action</code></th>
<th>Cause</th>
</tr>
</thead>
<tbody>
<tr>
<td>a button <code>key</code></td>
<td>A footer button was clicked</td>
</tr>
<tr>
<td><code>'backdrop'</code></td>
<td>The × button <strong>or</strong> a click on the backdrop</td>
</tr>
<tr>
<td><code>'escape'</code></td>
<td>The <code>Esc</code> key</td>
</tr>
<tr>
<td><code>'route'</code></td>
<td>A route change</td>
</tr>
<tr>
<td><code>'programmatic'</code></td>
<td><code>close()</code>, <code>closeAll()</code> or a handle’s <code>close()</code></td>
</tr>
<tr>
<td><code>'native'</code></td>
<td>The <code>&lt;dialog&gt;</code> was closed outside ENModal (<code>&lt;form method=&quot;dialog&quot;&gt;</code>, a direct <code>el.close()</code>)</td>
</tr>
<tr>
<td><code>'unmount'</code></td>
<td>The host <code>&lt;ENModal&gt;</code> was unmounted while the modal was open</td>
</tr>
</tbody>
</table>
</div><p>The × button and a backdrop click report the same <code>'backdrop'</code> action.</p>
<h3 id="backdrop-and-esc">Backdrop and <code>Esc</code><a class="header-link" href="#backdrop-and-esc" title="Link to this heading"></a></h3>
<p><code>closeOnBackdrop</code> and <code>closeOnEscape</code> (both <code>true</code> by default) decide whether those two dismiss the modal.</p>
<p>`}),x($,{key:25,meta:X[25]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>A backdrop click counts only when both the press <strong>and</strong> the release land on the backdrop. Selecting text inside the dialog and releasing the mouse outside does not close it.</p>
<h3 id="persistent-modals">Persistent modals<a class="header-link" href="#persistent-modals" title="Link to this heading"></a></h3>
<p><code>persistent</code> blocks the backdrop and <code>Esc</code>, regardless of <code>closeOnBackdrop</code> and <code>closeOnEscape</code>, and plays a short shake (<code>.en-modal--shake</code>) so the user sees the attempt was noticed. With <code>prefers-reduced-motion</code> the shake becomes a brief focus-ring flash.</p>
<p>The × and the footer buttons still close the modal. Set <code>closable</code> to <code>false</code> to remove the ×.</p>
<p>`}),x($,{key:26,meta:X[26]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="guarding-a-close-beforeclose">Guarding a close: <code>beforeClose</code><a class="header-link" href="#guarding-a-close-beforeclose" title="Link to this heading"></a></h3>
<p><code>beforeClose</code> runs before a <strong>user-initiated</strong> close and receives the <code>ModalResult</code>. Return (or resolve) <code>false</code> to keep the modal open. Anything else lets it close.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Close source</th>
<th>Guarded by <code>beforeClose</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>Footer button, × button, backdrop, <code>Esc</code></td>
<td>Yes</td>
</tr>
<tr>
<td>Footer slot <code>close(action)</code></td>
<td>Yes</td>
</tr>
<tr>
<td><code>v-model</code> set to <code>false</code></td>
<td><strong>No</strong></td>
</tr>
<tr>
<td><code>useModal().close()</code>, <code>closeAll()</code>, handle <code>close()</code></td>
<td><strong>No</strong></td>
</tr>
<tr>
<td>Route change</td>
<td><strong>No</strong></td>
</tr>
<tr>
<td>Native close, host unmount</td>
<td><strong>No</strong></td>
</tr>
</tbody>
</table>
</div><p>The guard runs for <strong>every</strong> guarded action, Cancel included, so check <code>result.action</code>. While an async guard is pending, the footer button that triggered it shows the loading state and the other footer buttons are disabled. Further close requests are ignored while it is pending. If the guard throws or rejects, the error is logged and the modal stays open.</p>
<p>`}),x($,{key:27,meta:X[27]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<blockquote>
<p>A guard that never settles keeps the modal stuck in its pending state. Make sure async guards resolve or time out. A <code>useModal().close()</code> call can still close it.</p>
</blockquote>
<h4 id="with-a-custom-footer">With a custom footer<a class="header-link" href="#with-a-custom-footer" title="Link to this heading"></a></h4>
<p>A plain <code>show = false</code> bypasses <code>beforeClose</code>. From a custom footer, call the slot’s <code>close(action)</code> instead, and use <code>pending</code> for your own buttons:</p>
<p>`}),x($,{key:28,meta:X[28]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="per-button-guard">Per-button guard<a class="header-link" href="#per-button-guard" title="Link to this heading"></a></h3>
<p><code>ModalButton.beforeClick</code> guards one button. It runs when that button is clicked, <strong>before</strong> the modal-level <code>beforeClose</code>, so a Save button can run its request without affecting Cancel. Return <code>false</code> to keep the modal open. While it is pending, that button shows the loading state and the others are disabled.</p>
<p>`}),x($,{key:29,meta:X[29]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>beforeClick</code> runs for auto-rendered footer buttons only. A custom <code>footer</code> slot calls <code>close(action)</code>, which goes through <code>beforeClose</code> but has no per-button guard.</p>
<p>The order of events for a footer click is: <code>button-click</code> (<code>onButtonClick</code>), then <code>beforeClick</code>, then <code>beforeClose</code>, then the close.</p>
<h3 id="closing-on-route-change">Closing on route change<a class="header-link" href="#closing-on-route-change" title="Link to this heading"></a></h3>
<p>By default every modal <strong>closes when the route changes</strong>, so a dialog never lingers over a page it does not belong to. The action is <code>'route'</code>, and <code>confirm()</code> resolves <code>false</code> and <code>prompt()</code> resolves <code>null</code>.</p>
<ul>
<li>With Vue Router installed on the app, ENModal uses <code>router.afterEach</code>. Aborted or duplicate navigations, and navigations to the same <code>fullPath</code>, are ignored. A query or hash change <strong>is</strong> a new <code>fullPath</code> and closes the modal.</li>
<li>Without a router, it falls back to <code>popstate</code> and <code>hashchange</code>.</li>
<li>Route closes <strong>bypass</strong> <code>beforeClose</code>, <code>beforeClick</code> and <code>persistent</code>.</li>
<li><code>keepOnRouteChange</code> keeps a modal across navigations. It is a prop, an option, and can be a namespace default.</li>
</ul>
<p>`}),x($,{key:30,meta:X[30]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="native-closes-and-host-unmount">Native closes and host unmount<a class="header-link" href="#native-closes-and-host-unmount" title="Link to this heading"></a></h3>
<ul>
<li><strong>Native closes.</strong> If the <code>&lt;dialog&gt;</code> is closed without going through ENModal (<code>&lt;form method=&quot;dialog&quot;&gt;</code> in a slot, an external <code>el.close()</code>), ENModal still notifies you. The declarative modal emits <code>update:modelValue</code> (<code>false</code>) and <code>close</code> with <code>{ action: 'native' }</code>, so <code>v-model</code> never gets out of sync, and a programmatic modal resolves with <code>'native'</code>. Such closes bypass <code>beforeClose</code>.</li>
<li><strong>Host unmount.</strong> When the last <code>&lt;ENModal&gt;</code> of a namespace unmounts, its remaining programmatic modals are removed and resolve with <code>'unmount'</code> instead of hanging forever.</li>
</ul>
<h2 id="usemodal">useModal<a class="header-link" href="#usemodal" title="Link to this heading"></a></h2>
<p><code>useModal(namespace?, defaults?)</code> opens and closes modals from code. Pair it with <strong>one</strong> <code>&lt;ENModal namespace=&quot;...&quot; /&gt;</code> host. After that, any component, composable, store or router guard can open a dialog and <code>await</code> its result, without <code>v-model</code> state.</p>
<p>`}),x($,{key:31,meta:X[31]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>`}),x($,{key:32,meta:X[32]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Argument</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>namespace</code></td>
<td><code>string</code></td>
<td><code>'default'</code></td>
<td>Must match the host’s <code>namespace</code> prop</td>
</tr>
<tr>
<td><code>defaults</code></td>
<td><code>ModalDefaults</code></td>
<td><code>{}</code></td>
<td>Options inherited by every <code>open()</code>, <code>confirm()</code>, <code>alert()</code> and <code>prompt()</code> of this composable. A call can still override each of them</td>
</tr>
</tbody>
</table>
</div><p><code>ModalDefaults</code> is <code>ConfirmOptions</code> without <code>content</code> and <code>onClose</code>, so <code>variant</code>, <code>size</code>, <code>footerAlign</code>, <code>okLabel</code>, <code>beforeClose</code> and the other options can be set once.</p>
<h3 id="confirm"><code>confirm()</code><a class="header-link" href="#confirm" title="Link to this heading"></a></h3>
<p><code>confirm(options)</code> shows OK and Cancel and resolves <code>true</code> when the user pressed OK, otherwise <code>false</code> (Cancel, ×, backdrop, <code>Esc</code> and a route change all resolve <code>false</code>).</p>
<p>`}),x($,{key:33,meta:X[33]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li>Its role is <code>alertdialog</code>, because a confirmation interrupts the user and demands a response. Pass <code>role: 'dialog'</code> to change that.</li>
<li>The OK button is solid, has <code>autofocus</code>, and takes its colour from <code>variant</code> (<code>default</code> and <code>primary</code> give <code>primary</code>, the rest map to the same colour). Cancel is an outline <code>secondary</code> button. Both are configurable:</li>
</ul>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>okLabel</code></td>
<td><code>'OK'</code></td>
<td>OK button text</td>
</tr>
<tr>
<td><code>cancelLabel</code></td>
<td><code>'Cancel'</code></td>
<td>Cancel button text</td>
</tr>
<tr>
<td><code>okColor</code></td>
<td>from <code>variant</code></td>
<td><code>.en-btn--{color}</code> of OK</td>
</tr>
<tr>
<td><code>cancelColor</code></td>
<td><code>'secondary'</code></td>
<td><code>.en-btn--{color}</code> of Cancel</td>
</tr>
<tr>
<td><code>okAppearance</code></td>
<td><code>'solid'</code></td>
<td><code>'solid' | 'outline' | 'ghost'</code></td>
</tr>
<tr>
<td><code>cancelAppearance</code></td>
<td><code>'outline'</code></td>
<td><code>'solid' | 'outline' | 'ghost'</code></td>
</tr>
<tr>
<td><code>hideCancel</code></td>
<td><code>false</code></td>
<td>Hides Cancel</td>
</tr>
</tbody>
</table>
</div><p><code>confirm()</code> does not take <code>buttons</code>. For custom buttons use <a href="#open-and-the-handle"><code>open()</code></a>.</p>
<blockquote>
<p>A confirmation can still be dismissed by a backdrop click. Pass <code>closeOnBackdrop: false</code> (or <code>persistent: true</code>) when a response is required.</p>
</blockquote>
<h3 id="alert"><code>alert()</code><a class="header-link" href="#alert" title="Link to this heading"></a></h3>
<p><code>alert(options)</code> is a <code>confirm()</code> with a single OK button. It resolves (with nothing) once closed.</p>
<p>`}),x($,{key:34,meta:X[34]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>alert()</code> does not accept <code>hideCancel</code>, <code>cancelLabel</code> or <code>cancelColor</code>.</p>
<h3 id="prompt"><code>prompt()</code><a class="header-link" href="#prompt" title="Link to this heading"></a></h3>
<p><code>prompt(options?)</code> shows one input and resolves the entered string, or <code>null</code> when the user cancelled (Cancel, ×, backdrop, <code>Esc</code>, route change).</p>
<p>`}),x($,{key:35,meta:X[35]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>content</code></td>
<td>none</td>
<td>Shown above the input as its label</td>
</tr>
<tr>
<td><code>defaultValue</code></td>
<td><code>''</code></td>
<td>Initial value</td>
</tr>
<tr>
<td><code>placeholder</code></td>
<td>none</td>
<td>Input placeholder. Also names the input when there is no <code>content</code> (the title is the last fallback)</td>
</tr>
<tr>
<td><code>inputType</code></td>
<td><code>'text'</code></td>
<td><code>'text' | 'password' | 'email' | 'url' | 'search' | 'tel' | 'number'</code></td>
</tr>
<tr>
<td><code>inputClass</code></td>
<td><code>'en-input'</code></td>
<td>Classes of the <code>&lt;input&gt;</code></td>
</tr>
<tr>
<td><code>validate</code></td>
<td>none</td>
<td>Runs when OK is pressed. Return <code>true</code> or nothing when valid, <code>false</code> to reject silently, or a <strong>string</strong> to reject and show it under the input. May be async, and OK shows a loading state meanwhile</td>
</tr>
</tbody>
</table>
</div><ul>
<li>Validation runs for OK only. Cancel, <code>Esc</code> and the backdrop always go through.</li>
<li>Enter in the input presses OK (<code>submitOnEnter</code> defaults to <code>true</code>).</li>
<li>The input is autofocused. A rejected value puts focus back on it, sets <code>aria-invalid</code> and links the message with <code>aria-describedby</code>, and the message has <code>role=&quot;alert&quot;</code>.</li>
<li>It also accepts every <code>confirm()</code> option, and your own <code>beforeClose</code> still runs after validation.</li>
</ul>
<h3 id="open-and-the-handle"><code>open()</code> and the handle<a class="header-link" href="#open-and-the-handle" title="Link to this heading"></a></h3>
<p><code>open(options)</code> is the general form. It returns a promise of the <code>ModalResult</code> that is <strong>also a handle</strong>, so <code>await open(...)</code> works as usual.</p>
<p>`}),x($,{key:36,meta:X[36]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Member</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>id</code></td>
<td>Store id of the modal. Usable with <code>useModal().close(id)</code></td>
</tr>
<tr>
<td><code>close(payload?)</code></td>
<td>Closes this modal. Resolves with <code>{ action: 'programmatic', payload }</code>. Bypasses <code>beforeClose</code>, <code>beforeClick</code> and <code>persistent</code></td>
</tr>
<tr>
<td><code>update(patch)</code></td>
<td>Merges new options into the open modal, and it re-renders. Does nothing once the modal is closed. Arrays and objects such as <code>buttons</code> are <strong>replaced</strong>, not merged</td>
</tr>
</tbody>
</table>
</div><p><code>confirm()</code>, <code>alert()</code> and <code>prompt()</code> return plain promises, without a handle.</p>
<h4 id="content-as-a-render-function">Content as a render function<a class="header-link" href="#content-as-a-render-function" title="Link to this heading"></a></h4>
<p><code>title</code>, <code>content</code> and button <code>label</code> accept a string <strong>or</strong> a render function, so rich content works without a template:</p>
<p>`}),x($,{key:37,meta:X[37]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h4 id="lifecycle-callbacks">Lifecycle callbacks<a class="header-link" href="#lifecycle-callbacks" title="Link to this heading"></a></h4>
<p>Programmatic modals use options instead of events:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>When</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>onOpened()</code></td>
<td>The open transition has finished</td>
</tr>
<tr>
<td><code>onButtonClick(button)</code></td>
<td>A footer button was clicked, before guards run</td>
</tr>
<tr>
<td><code>onClose(result)</code></td>
<td>The close was committed (after any guard), before the exit transition</td>
</tr>
<tr>
<td><code>onClosed(result)</code></td>
<td>The <code>&lt;dialog&gt;</code> was removed, after the exit transition</td>
</tr>
</tbody>
</table>
</div><p>The promise resolves when the close is committed (the same moment as <code>onClose</code>), <strong>not</strong> after the animation. Use <code>onClosed</code> to run code once the dialog is gone. The waits for the open and exit animations are capped at 1.5 s, and a throwing callback is logged and does not break the modal.</p>
<h3 id="closing-from-code">Closing from code<a class="header-link" href="#closing-from-code" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Call</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>close()</code></td>
<td>Closes the most recently opened modal of the namespace</td>
</tr>
<tr>
<td><code>close(id, payload?)</code></td>
<td>Closes the modal with that id</td>
</tr>
<tr>
<td><code>closeAll()</code></td>
<td>Closes every modal of the namespace</td>
</tr>
</tbody>
</table>
</div><p>They resolve with <code>{ action: 'programmatic' }</code> (plus <code>payload</code>), and bypass every guard. <code>hasOpenModals</code> turns <code>false</code> when the last close is committed, before its exit transition ends, and <code>modals</code> is the reactive list of open instances.</p>
<h3 id="stacking">Stacking<a class="header-link" href="#stacking" title="Link to this heading"></a></h3>
<p>Modals opened under one namespace stack on top of each other. Each is a real <code>&lt;dialog&gt;</code> opened with <code>showModal()</code>, so the browser handles the top layer, and <code>Esc</code> goes to the most recent one.</p>
<p>`}),x($,{key:38,meta:X[38]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="defaults-and-localization">Defaults and localization<a class="header-link" href="#defaults-and-localization" title="Link to this heading"></a></h3>
<p>Set options once per namespace. The four built-in strings are options too:</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>Default</th>
<th>Used for</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>okLabel</code></td>
<td><code>'OK'</code></td>
<td>The default OK button, <code>confirm()</code>, <code>alert()</code>, <code>prompt()</code></td>
</tr>
<tr>
<td><code>cancelLabel</code></td>
<td><code>'Cancel'</code></td>
<td>Cancel in <code>confirm()</code> and <code>prompt()</code></td>
</tr>
<tr>
<td><code>closeLabel</code></td>
<td><code>'Close'</code></td>
<td><code>aria-label</code> of the header ×</td>
</tr>
<tr>
<td><code>loadingLabel</code></td>
<td><code>'Loading'</code></td>
<td><code>aria-label</code> of the loading overlay</td>
</tr>
</tbody>
</table>
</div><p>`}),x($,{key:39,meta:X[39]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The same strings can be props of the host or of a declarative modal.</p>
<h3 id="precedence">Precedence<a class="header-link" href="#precedence" title="Link to this heading"></a></h3>
<p>For a programmatic modal, from lowest to highest:</p>
<ol>
<li>Props of the <code>&lt;ENModal namespace=&quot;...&quot; /&gt;</code> host</li>
<li><code>useModal(namespace, defaults)</code></li>
<li>The options of the call</li>
</ol>
<h3 id="host-warnings">Host warnings<a class="header-link" href="#host-warnings" title="Link to this heading"></a></h3>
<p>In development builds, ENModal logs a warning (once per occurrence) when two hosts are mounted for one namespace and when a modal is opened in a namespace that has no host. In the latter case the modal stays queued and appears once a host mounts.</p>
<h2 id="loading-and-moveable">Loading and Moveable<a class="header-link" href="#loading-and-moveable" title="Link to this heading"></a></h2>
<p>Two features that change how a modal behaves: the <strong>loading overlay</strong> that blocks the dialog while work is running, and <strong>moveable</strong> modals that the user can drag around while the page stays usable. The page also covers scroll lock and teleporting.</p>
<h3 id="loading-overlay">Loading overlay<a class="header-link" href="#loading-overlay" title="Link to this heading"></a></h3>
<p><code>loading</code> covers the dialog with an overlay (<code>.en-modal__loading</code>, <code>role=&quot;status&quot;</code>) that draws an indicator. The body and the footer become <code>inert</code>, so they cannot be reached with the pointer or the keyboard. The <strong>header stays interactive</strong>, so the modal can still be dismissed.</p>
<p>`}),x($,{key:40,meta:X[40]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>loader</code></th>
<th>Needs</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'spinner'</code> (default)</td>
<td><code>components-spinner.css</code></td>
</tr>
<tr>
<td><code>'bounce'</code>, <code>'pulse'</code>, <code>'fade'</code>, <code>'wave'</code>, <code>'typing'</code>, <code>'stretch'</code>, <code>'flip'</code></td>
<td><code>components-dot-loader-base.css</code> and <code>components-dot-loader-line.css</code></td>
</tr>
<tr>
<td><code>'orbit'</code>, <code>'triangle'</code>, <code>'spiral'</code></td>
<td><code>components-dot-loader-base.css</code> and <code>components-dot-loader-orbit.css</code></td>
</tr>
<tr>
<td><code>'collision'</code>, <code>'shuffle'</code>, <code>'helix'</code></td>
<td><code>components-dot-loader-base.css</code> and <code>components-dot-loader-travel.css</code></td>
</tr>
</tbody>
</table>
</div><p><code>loadingLabel</code> is the accessible name of the overlay (default <code>'Loading'</code>), and the dialog gets <code>aria-busy=&quot;true&quot;</code> while it is loading.</p>
<blockquote>
<p><code>loading</code> makes the <strong>whole footer inert, Cancel included</strong>. Only the header, <code>Esc</code> and the backdrop (per their settings) can dismiss the modal. To keep Cancel usable, use a button-level <a href="#loading-buttons"><code>loading</code></a> or an async <a href="#guarding-a-close-beforeclose"><code>beforeClose</code></a> guard instead.</p>
</blockquote>
<p>With <code>useModal</code>, switch it on and off through the handle:</p>
<p>`}),x($,{key:41,meta:X[41]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="moveable-modals">Moveable modals<a class="header-link" href="#moveable-modals" title="Link to this heading"></a></h3>
<p><code>moveable</code> makes the header a drag handle. A moveable modal is <strong>non-modal</strong>: it opens with <code>show()</code> instead of <code>showModal()</code>.</p>
<p>`}),x($,{key:42,meta:X[42]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>What changes for a moveable modal:</p>
<ul>
<li>There is <strong>no backdrop</strong>, no focus trap and no top layer. It stacks by <code>z-index</code> (<code>var(--en-z-modal)</code>), and the page behind stays interactive and scrollable.</li>
<li>Dragging uses Pointer Events, so mouse, touch and pen work. Interactive content in the header (<code>button</code>, <code>a</code>, <code>input</code>, <code>select</code>, <code>textarea</code>, <code>label</code>, <code>summary</code>, <code>[role=&quot;button&quot;]</code>, <code>[contenteditable]</code>) does not start a drag.</li>
<li>The position is clamped to the viewport, also after a window resize.</li>
<li><code>Esc</code> closes it while focus is inside the dialog, and it respects <code>closeOnEscape</code>, <code>persistent</code> and <code>beforeClose</code>.</li>
<li>It never locks page scroll.</li>
<li>In <code>fullscreen</code> the header shows the normal cursor and the dialog already fills the viewport, so there is nowhere to drag it. The normal backdrop returns.</li>
<li>Dragging is pointer-only. There is no keyboard way to move the dialog, but it stays fully usable where it is.</li>
</ul>
<h4 id="teleport">Teleport<a class="header-link" href="#teleport" title="Link to this heading"></a></h4>
<p>Because it is not in the top layer, a moveable modal inside an ancestor with a <code>transform</code>, <code>filter</code> or <code>contain</code> would have the reference of its <code>position: fixed</code> changed. Teleport it out with <code>teleport-to</code>:</p>
<p>`}),x($,{key:43,meta:X[43]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>teleportTo</code> takes a CSS selector or an element, and wraps every dialog the component renders in a <code>&lt;Teleport&gt;</code>. It is useful for any modal, not only moveable ones.</p>
<h3 id="scroll-lock">Scroll lock<a class="header-link" href="#scroll-lock" title="Link to this heading"></a></h3>
<p><code>lockScroll</code> (default <code>true</code>) stops the page from scrolling behind a modal. It is <strong>pure CSS</strong>: <code>:root:has(dialog:modal:not([data-en-scroll-lock=&quot;off&quot;]))</code> sets <code>overflow: hidden</code> and <code>scrollbar-gutter: stable</code> on <code>&lt;html&gt;</code>, so the layout does not jump and stacked modals need no bookkeeping.</p>
<ul>
<li><code>moveable</code> modals are non-modal, so they never lock.</li>
<li><code>lockScroll: false</code> sets <code>data-en-scroll-lock=&quot;off&quot;</code> on the dialog to opt out. With stacked modals the page stays locked while any other modal without the opt-out is open.</li>
<li>Some mobile browsers (notably older iOS Safari) ignore <code>overflow: hidden</code> on <code>&lt;html&gt;</code>, so the page may still scroll under the backdrop there.</li>
<li>The modal body scrolls on its own (<code>overflow-y: auto</code>) and does not chain to the page (<code>overscroll-behavior: contain</code>).</li>
</ul>
<p>`}),x($,{key:44,meta:X[44]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<p><code>ENModal</code> is built on the native <code>&lt;dialog&gt;</code> element, so the browser supplies most of the behaviour assistive technology needs. This page lists what the browser does, what ENModal adds, and what is left for you.</p>
<h3 id="what-the-browser-provides">What the browser provides<a class="header-link" href="#what-the-browser-provides" title="Link to this heading"></a></h3>
<p>A modal is opened with <code>showModal()</code>, so:</p>
<ul>
<li>the page behind is <strong>inert</strong>: unreachable by keyboard, pointer and assistive technology;</li>
<li><code>Tab</code> stays inside the dialog (a focus trap);</li>
<li><code>Esc</code> requests a close;</li>
<li>the dialog is in the <strong>top layer</strong>, above everything else, and stacked modals order themselves.</li>
</ul>
<p>A <a href="#moveable-modals"><code>moveable</code></a> modal is the exception: it is non-modal, with no trap and no inert page.</p>
<h3 id="what-enmodal-adds">What ENModal adds<a class="header-link" href="#what-enmodal-adds" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Feature</th>
<th>Behaviour</th>
</tr>
</thead>
<tbody>
<tr>
<td>Role</td>
<td><code>role=&quot;alertdialog&quot;</code> for <code>confirm()</code> and <code>alert()</code>. Otherwise a plain dialog. Set it with <code>role</code></td>
</tr>
<tr>
<td>Name</td>
<td><code>aria-labelledby</code> points to the title. An explicit <code>ariaLabel</code> becomes <code>aria-label</code> and wins</td>
</tr>
<tr>
<td>Description</td>
<td>A dialog with <code>role=&quot;alertdialog&quot;</code> is described by its body (<code>aria-describedby</code>). <code>ariaDescribedby</code> overrides it, and works for any role</td>
</tr>
<tr>
<td>Close button</td>
<td>A real <code>&lt;button&gt;</code> with <code>aria-label</code> from <code>closeLabel</code> (default <code>'Close'</code>)</td>
</tr>
<tr>
<td>Busy</td>
<td><code>aria-busy=&quot;true&quot;</code> while <code>loading</code> is on or a close guard is pending</td>
</tr>
<tr>
<td>Loading overlay</td>
<td><code>role=&quot;status&quot;</code> with <code>aria-label</code> from <code>loadingLabel</code>. The body and footer are <code>inert</code></td>
</tr>
<tr>
<td>Loading button</td>
<td><code>aria-busy</code> and <code>aria-disabled</code>, and it keeps keyboard focus</td>
</tr>
<tr>
<td>Default action</td>
<td>The main button has <code>autofocus</code>, so it receives focus when the dialog opens. <code>prompt()</code> autofocuses its input</td>
</tr>
<tr>
<td>Prompt errors</td>
<td><code>aria-invalid</code> on the input, <code>aria-describedby</code> to the message, and the message has <code>role=&quot;alert&quot;</code></td>
</tr>
<tr>
<td>Motion</td>
<td>The <code>persistent</code> shake becomes a brief focus-ring flash under <code>prefers-reduced-motion</code></td>
</tr>
</tbody>
</table>
</div><h3 id="names">Names<a class="header-link" href="#names" title="Link to this heading"></a></h3>
<p>A dialog needs an accessible name. ENModal names it from the title, so a modal with a title is fine. A modal <strong>without a title</strong> needs <code>aria-label</code>, for example with <code>no-header</code>:</p>
<p>`}),x($,{key:45,meta:X[45]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>ENModal does not warn about a missing name in development.</p>
<h3 id="keyboard">Keyboard<a class="header-link" href="#keyboard" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Key</th>
<th>Behaviour</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>Tab</code> / <code>Shift+Tab</code></td>
<td>Moves inside the dialog only (modal dialogs)</td>
</tr>
<tr>
<td><code>Esc</code></td>
<td>Closes, unless <code>closeOnEscape</code> is <code>false</code> or <code>persistent</code> is set. A <code>beforeClose</code> guard runs first</td>
</tr>
<tr>
<td><code>Enter</code> in a text input</td>
<td>Triggers a footer button when <code>submitOnEnter</code> is set</td>
</tr>
<tr>
<td><code>Enter</code> / <code>Space</code> on a button</td>
<td>Activates it, like any <code>&lt;button&gt;</code></td>
</tr>
</tbody>
</table>
</div><h3 id="choosing-the-right-dialog">Choosing the right dialog<a class="header-link" href="#choosing-the-right-dialog" title="Link to this heading"></a></h3>
<ul>
<li>Use <code>confirm()</code> or <code>alert()</code> (<code>alertdialog</code>) when the user <strong>must</strong> respond. They can still be dismissed by the backdrop, so add <code>closeOnBackdrop: false</code> or <code>persistent: true</code> when a response is required.</li>
<li>Use a plain dialog (<code>open()</code>, or a declarative modal) for content the user can ignore.</li>
<li>Keep the title short and meaningful. It is rendered as an <code>&lt;h3&gt;</code>.</li>
<li>Prefer a visible title. When it is hidden for design reasons, supply <code>ariaLabel</code>.</li>
</ul>
<h3 id="known-gaps">Known gaps<a class="header-link" href="#known-gaps" title="Link to this heading"></a></h3>
<p>The library is experimental. These are not covered yet:</p>
<ul>
<li>The title is always an <code>&lt;h3&gt;</code>, and the default header is not text-selectable (<code>en-no-select</code>) unless you use the <code>header</code> slot.</li>
<li>The × button and a backdrop click both report <code>'backdrop'</code>, so you cannot tell them apart from the action alone.</li>
<li>Declarative dialog ids come from the component instance, so server-rendered ids may not match the client. Set an explicit <code>id</code> on <code>&lt;ENModal&gt;</code> when you server-render it.</li>
<li>Dragging a <code>moveable</code> modal needs a pointer.</li>
</ul>
<h2 id="api-reference">API Reference<a class="header-link" href="#api-reference" title="Link to this heading"></a></h2>
<p>Complete reference for <code>ENModal</code>, <code>useModal</code> and the exported types.</p>
<p>`}),x($,{key:46,meta:X[46]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="enmodal"><code>&lt;ENModal&gt;</code><a class="header-link" href="#enmodal" title="Link to this heading"></a></h3>
<h4 id="props">Props<a class="header-link" href="#props" title="Link to this heading"></a></h4>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>namespace</code></td>
<td><code>string</code></td>
<td><code>'default'</code></td>
<td>Namespace this instance renders programmatic modals for</td>
</tr>
<tr>
<td><code>modelValue</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td><code>v-model</code>. Shows the declarative modal</td>
</tr>
<tr>
<td><code>title</code></td>
<td><code>string | () =&gt; VNode | VNode[]</code></td>
<td>none</td>
<td>Header title</td>
</tr>
<tr>
<td><code>variant</code></td>
<td><code>ModalVariant</code></td>
<td><code>'default'</code></td>
<td>Header colour</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>ModalSize</code></td>
<td><code>'medium'</code></td>
<td>Width preset. Also picks the footer button size</td>
</tr>
<tr>
<td><code>animation</code></td>
<td><code>ModalAnimation</code></td>
<td><code>'zoom'</code></td>
<td>Open and close animation</td>
</tr>
<tr>
<td><code>fullscreen</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Fill the viewport</td>
</tr>
<tr>
<td><code>buttons</code></td>
<td><code>ModalButton[]</code></td>
<td><code>[]</code></td>
<td>Footer buttons. When empty, a single OK button is used</td>
</tr>
<tr>
<td><code>closable</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Shows the header × button</td>
</tr>
<tr>
<td><code>closeOnBackdrop</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Backdrop click closes the modal</td>
</tr>
<tr>
<td><code>closeOnEscape</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td><code>Esc</code> closes the modal</td>
</tr>
<tr>
<td><code>submitOnEnter</code></td>
<td><code>boolean | string</code></td>
<td><code>false</code></td>
<td>Enter in a text input triggers a footer button (<code>true</code>: the <code>autofocus</code> one, string: the button with that key)</td>
</tr>
<tr>
<td><code>moveable</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Non-modal dialog that can be dragged by its header</td>
</tr>
<tr>
<td><code>contentClass</code></td>
<td><code>ClassValue</code></td>
<td><code>''</code></td>
<td>Classes on <code>.en-modal</code></td>
</tr>
<tr>
<td><code>rootClass</code></td>
<td><code>ClassValue</code></td>
<td><code>''</code></td>
<td>Alias of <code>contentClass</code>. Both are applied</td>
</tr>
<tr>
<td><code>headerClass</code></td>
<td><code>ClassValue</code></td>
<td><code>''</code></td>
<td>Classes on <code>.en-modal__header</code></td>
</tr>
<tr>
<td><code>titleClass</code></td>
<td><code>ClassValue</code></td>
<td><code>''</code></td>
<td>Classes on <code>.en-modal__title</code></td>
</tr>
<tr>
<td><code>bodyClass</code></td>
<td><code>ClassValue</code></td>
<td><code>''</code></td>
<td>Classes on <code>.en-modal__body</code></td>
</tr>
<tr>
<td><code>footerClass</code></td>
<td><code>ClassValue</code></td>
<td><code>''</code></td>
<td>Classes on <code>.en-modal__footer</code></td>
</tr>
<tr>
<td><code>width</code></td>
<td><code>string | number</code></td>
<td>none</td>
<td>Dialog width. A number is pixels. Sets <code>--en-modal-width</code>. Wins over <code>size</code></td>
</tr>
<tr>
<td><code>okLabel</code></td>
<td><code>string</code></td>
<td><code>'OK'</code></td>
<td>Label of the default OK button</td>
</tr>
<tr>
<td><code>closeLabel</code></td>
<td><code>string</code></td>
<td><code>'Close'</code></td>
<td><code>aria-label</code> of the × button</td>
</tr>
<tr>
<td><code>loadingLabel</code></td>
<td><code>string</code></td>
<td><code>'Loading'</code></td>
<td><code>aria-label</code> of the loading overlay</td>
</tr>
<tr>
<td><code>position</code></td>
<td><code>ModalPosition</code></td>
<td>none</td>
<td><code>'top' | 'center' | 'bottom'</code>. Wins over <code>top</code></td>
</tr>
<tr>
<td><code>top</code></td>
<td><code>number | boolean</code></td>
<td><code>false</code></td>
<td><code>true</code>: top placement with the default offset. A number: top placement with that many pixels</td>
</tr>
<tr>
<td><code>footerAlign</code></td>
<td><code>ModalFooterAlign</code></td>
<td><code>'end'</code></td>
<td>Alignment of the auto-rendered buttons</td>
</tr>
<tr>
<td><code>swapButtons</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Reverses the order of the auto-rendered buttons</td>
</tr>
<tr>
<td><code>noHeader</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Do not render the header</td>
</tr>
<tr>
<td><code>noFooter</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Do not render the footer</td>
</tr>
<tr>
<td><code>persistent</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Blocks backdrop and <code>Esc</code> dismissal and shakes instead</td>
</tr>
<tr>
<td><code>beforeClose</code></td>
<td><code>BeforeCloseHandler</code></td>
<td>none</td>
<td>Guard for user-initiated closes</td>
</tr>
<tr>
<td><code>role</code></td>
<td><code>ModalRole</code></td>
<td><code>'dialog'</code></td>
<td><code>'dialog'</code> or <code>'alertdialog'</code></td>
</tr>
<tr>
<td><code>ariaDescribedby</code></td>
<td><code>string</code></td>
<td>none</td>
<td>Id of the describing element. Defaults to the body for <code>alertdialog</code></td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>string</code></td>
<td>none</td>
<td>Accessible name. When omitted, the title names the dialog</td>
</tr>
<tr>
<td><code>loading</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Loading overlay. Makes body and footer inert</td>
</tr>
<tr>
<td><code>loader</code></td>
<td><code>ModalLoader</code></td>
<td><code>'spinner'</code></td>
<td>Indicator of the overlay</td>
</tr>
<tr>
<td><code>lockScroll</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Lock page scrolling while open. Moveable modals never lock</td>
</tr>
<tr>
<td><code>keepOnRouteChange</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Keep the modal across route changes</td>
</tr>
<tr>
<td><code>teleportTo</code></td>
<td><code>string | HTMLElement</code></td>
<td>none</td>
<td>Wraps the rendered dialogs in a <code>&lt;Teleport&gt;</code> to this target</td>
</tr>
</tbody>
</table>
</div><p>On a <strong>host</strong> (<code>&lt;ENModal namespace=&quot;app&quot; /&gt;</code>), these props are defaults for the programmatic modals it renders. Per-call options win.</p>
<h4 id="events">Events<a class="header-link" href="#events" title="Link to this heading"></a></h4>
<p>Declarative usage only. Programmatic modals use the options <code>onClose</code>, <code>onOpened</code>, <code>onClosed</code> and <code>onButtonClick</code>.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Event</th>
<th>Payload</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>update:modelValue</code></td>
<td><code>boolean</code></td>
<td>Emitted with <code>false</code> when the close is committed (after <code>beforeClose</code> allowed it), or when the <code>&lt;dialog&gt;</code> was closed outside ENModal</td>
</tr>
<tr>
<td><code>close</code></td>
<td><code>{ action: string }</code></td>
<td>Emitted with <code>update:modelValue</code>, with the action that closed it</td>
</tr>
<tr>
<td><code>button-click</code></td>
<td><code>key: string</code></td>
<td>An auto-rendered footer button was clicked. Fires before <code>beforeClick</code> and <code>beforeClose</code></td>
</tr>
<tr>
<td><code>opened</code></td>
<td>none</td>
<td>The open transition has finished</td>
</tr>
<tr>
<td><code>closed</code></td>
<td><code>{ action: string }</code></td>
<td>The <code>&lt;dialog&gt;</code> was removed, after the exit transition</td>
</tr>
</tbody>
</table>
</div><h4 id="slots">Slots<a class="header-link" href="#slots" title="Link to this heading"></a></h4>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Slot</th>
<th>Bindings</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>header</code></td>
<td>none</td>
<td>Replaces the <strong>title content</strong>, inside <code>&lt;h3 class=&quot;en-modal__title&quot;&gt;</code>. The × button is still rendered unless <code>closable</code> is <code>false</code></td>
</tr>
<tr>
<td><code>default</code></td>
<td><code>{ close, pending }</code></td>
<td>Body, inside <code>.en-modal__body</code></td>
</tr>
<tr>
<td><code>footer</code></td>
<td><code>{ close, pending }</code></td>
<td>Replaces the button row, inside <code>.en-modal__footer</code></td>
</tr>
</tbody>
</table>
</div><p>Slot bindings:</p>
<ul>
<li><code>close(action: string)</code> closes the modal <strong>through</strong> <code>beforeClose</code>. A plain <code>show = false</code> bypasses the guard.</li>
<li><code>pending: boolean</code> is <code>true</code> while a <code>beforeClose</code> guard is running.</li>
</ul>
<p>Slots apply to declarative usage only. Programmatic modals use the <code>title</code>, <code>content</code> and <code>buttons</code> options, with render functions for rich content.</p>
<h4 id="attribute-fallthrough">Attribute fallthrough<a class="header-link" href="#attribute-fallthrough" title="Link to this heading"></a></h4>
<p><code>ENModal</code> sets <code>inheritAttrs: false</code> and applies every non-prop attribute (<code>class</code>, <code>style</code>, <code>data-*</code>, <code>aria-*</code>, listeners) to each rendered <code>&lt;dialog&gt;</code>.</p>
<ul>
<li>On the declarative dialog, <code>id</code> becomes the dialog’s DOM <code>id</code>, and the title and body ids derive from it (<code>{id}-title</code>, <code>{id}-body</code>). Without it, an id is generated.</li>
<li><code>id</code> is <strong>not</strong> forwarded to programmatic dialogs, which always use their store id, so ids never repeat.</li>
<li>Attributes that ENModal sets itself (<code>role</code>, <code>aria-label</code>, <code>aria-labelledby</code>, <code>aria-describedby</code>, <code>aria-busy</code>) win over inherited ones. An unset one never overrides yours.</li>
</ul>
<h3 id="usemodal-reference"><code>useModal()</code> reference<a class="header-link" href="#usemodal-reference" title="Link to this heading"></a></h3>
<p>`}),x($,{key:47,meta:X[47]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h4 id="usemodalreturn"><code>UseModalReturn</code><a class="header-link" href="#usemodalreturn" title="Link to this heading"></a></h4>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Member</th>
<th>Signature</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>open</code></td>
<td><code>(options: ModalOptions) =&gt; ModalHandle</code></td>
<td>Opens a modal. The promise resolves with a <code>ModalResult</code></td>
</tr>
<tr>
<td><code>confirm</code></td>
<td><code>(options: ConfirmOptions) =&gt; Promise&lt;boolean&gt;</code></td>
<td>OK and Cancel. <code>true</code> for OK</td>
</tr>
<tr>
<td><code>alert</code></td>
<td><code>(options: AlertOptions) =&gt; Promise&lt;void&gt;</code></td>
<td>One OK button</td>
</tr>
<tr>
<td><code>prompt</code></td>
<td><code>(options?: PromptOptions) =&gt; Promise&lt;string | null&gt;</code></td>
<td>One text input. <code>null</code> when cancelled</td>
</tr>
<tr>
<td><code>close</code></td>
<td><code>(id?: string, payload?: unknown) =&gt; void</code></td>
<td>Closes a modal by id, or the most recent one</td>
</tr>
<tr>
<td><code>closeAll</code></td>
<td><code>() =&gt; void</code></td>
<td>Closes every modal of the namespace</td>
</tr>
<tr>
<td><code>modals</code></td>
<td><code>ModalInstance[]</code></td>
<td>Reactive list of the open instances</td>
</tr>
<tr>
<td><code>hasOpenModals</code></td>
<td><code>boolean</code> (getter)</td>
<td><code>false</code> once the last close is committed, before its exit transition ends</td>
</tr>
</tbody>
</table>
</div><p>See <a href="#usemodal">useModal</a> for examples.</p>
<h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<h4 id="modaloptions"><code>ModalOptions</code><a class="header-link" href="#modaloptions" title="Link to this heading"></a></h4>
<p>Options of <code>open()</code>. They mirror the props above, plus the fields that only exist programmatically.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>title</code></td>
<td><code>ModalContent</code></td>
<td>Header title</td>
</tr>
<tr>
<td><code>content</code></td>
<td><code>ModalContent</code></td>
<td>Body. A string, or a render function returning VNode(s)</td>
</tr>
<tr>
<td><code>buttons</code></td>
<td><code>ModalButton[]</code></td>
<td>Footer buttons. When omitted or empty, a single OK button</td>
</tr>
<tr>
<td><code>variant</code>, <code>size</code>, <code>animation</code>, <code>fullscreen</code>, <code>position</code>, <code>top</code>, <code>width</code></td>
<td>as the props</td>
<td>Appearance and placement</td>
</tr>
<tr>
<td><code>closable</code>, <code>closeOnBackdrop</code>, <code>closeOnEscape</code>, <code>persistent</code>, <code>submitOnEnter</code>, <code>moveable</code></td>
<td>as the props</td>
<td>Behaviour</td>
</tr>
<tr>
<td><code>contentClass</code>, <code>rootClass</code>, <code>headerClass</code>, <code>titleClass</code>, <code>bodyClass</code>, <code>footerClass</code></td>
<td><code>ClassValue</code></td>
<td>Extra classes per part</td>
</tr>
<tr>
<td><code>footerAlign</code>, <code>swapButtons</code>, <code>noHeader</code>, <code>noFooter</code></td>
<td>as the props</td>
<td>Footer and header</td>
</tr>
<tr>
<td><code>okLabel</code>, <code>closeLabel</code>, <code>loadingLabel</code></td>
<td><code>string</code></td>
<td>Built-in strings</td>
</tr>
<tr>
<td><code>role</code>, <code>ariaDescribedby</code>, <code>ariaLabel</code></td>
<td>as the props</td>
<td>Accessibility</td>
</tr>
<tr>
<td><code>loading</code>, <code>loader</code></td>
<td>as the props</td>
<td>Loading overlay</td>
</tr>
<tr>
<td><code>lockScroll</code>, <code>keepOnRouteChange</code></td>
<td><code>boolean</code></td>
<td>Scroll lock and route behaviour</td>
</tr>
<tr>
<td><code>beforeClose</code></td>
<td><code>BeforeCloseHandler</code></td>
<td>Guard</td>
</tr>
<tr>
<td><code>onClose</code></td>
<td><code>(result: ModalResult) =&gt; void</code></td>
<td>The close was committed</td>
</tr>
<tr>
<td><code>onOpened</code></td>
<td><code>() =&gt; void</code></td>
<td>The open transition finished</td>
</tr>
<tr>
<td><code>onClosed</code></td>
<td><code>(result: ModalResult) =&gt; void</code></td>
<td>The <code>&lt;dialog&gt;</code> was removed</td>
</tr>
<tr>
<td><code>onButtonClick</code></td>
<td><code>(button: ModalButton) =&gt; void</code></td>
<td>A footer button was clicked, before guards</td>
</tr>
</tbody>
</table>
</div><h4 id="modalupdate"><code>ModalUpdate</code><a class="header-link" href="#modalupdate" title="Link to this heading"></a></h4>
<p><code>Partial&lt;ModalOptions&gt;</code>. What <code>handle.update()</code> accepts.</p>
<h4 id="modalbutton"><code>ModalButton</code><a class="header-link" href="#modalbutton" title="Link to this heading"></a></h4>
<p>See the <a href="#modalbutton-fields">field table</a>.</p>
<h4 id="confirmoptions-alertoptions-promptoptions"><code>ConfirmOptions</code>, <code>AlertOptions</code>, <code>PromptOptions</code><a class="header-link" href="#confirmoptions-alertoptions-promptoptions" title="Link to this heading"></a></h4>
<p>`}),x($,{key:48,meta:X[48]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h4 id="modaldefaults"><code>ModalDefaults</code><a class="header-link" href="#modaldefaults" title="Link to this heading"></a></h4>
<p><code>Omit&lt;ConfirmOptions, 'content' | 'onClose'&gt;</code>. The second argument of <code>useModal()</code>.</p>
<h4 id="modalresult"><code>ModalResult</code><a class="header-link" href="#modalresult" title="Link to this heading"></a></h4>
<p>`}),x($,{key:49,meta:X[49]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>action</code> is the key of the clicked button, or one of the reserved values described in <a href="#close-actions">Closing</a>. <code>payload</code> is set when a modal is closed with <code>close(payload)</code>.</p>
<h4 id="beforeclosehandler"><code>BeforeCloseHandler</code><a class="header-link" href="#beforeclosehandler" title="Link to this heading"></a></h4>
<p>`}),x($,{key:50,meta:X[50]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Return or resolve <code>false</code> to keep the modal open.</p>
<h4 id="beforeclickhandler"><code>BeforeClickHandler</code><a class="header-link" href="#beforeclickhandler" title="Link to this heading"></a></h4>
<p>`}),x($,{key:51,meta:X[51]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h4 id="modalhandle"><code>ModalHandle</code><a class="header-link" href="#modalhandle" title="Link to this heading"></a></h4>
<p>`}),x($,{key:52,meta:X[52]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h4 id="modalinstance"><code>ModalInstance</code><a class="header-link" href="#modalinstance" title="Link to this heading"></a></h4>
<p>`}),x($,{key:53,meta:X[53]}),x(`div`,{class:`vlm-md`,innerHTML:`</p>
<h4 id="union-types">Union types<a class="header-link" href="#union-types" title="Link to this heading"></a></h4>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Type</th>
<th>Values</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ModalVariant</code></td>
<td><code>'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'</code></td>
</tr>
<tr>
<td><code>ModalSize</code></td>
<td><code>'small' | 'medium' | 'large' | 'xlarge'</code></td>
</tr>
<tr>
<td><code>ModalAnimation</code></td>
<td><code>'top' | 'bottom' | 'left' | 'right' | 'zoom' | 'fade'</code></td>
</tr>
<tr>
<td><code>ModalPosition</code></td>
<td><code>'top' | 'center' | 'bottom'</code></td>
</tr>
<tr>
<td><code>ModalFooterAlign</code></td>
<td><code>'start' | 'center' | 'end' | 'between'</code></td>
</tr>
<tr>
<td><code>ModalRole</code></td>
<td><code>'dialog' | 'alertdialog'</code></td>
</tr>
<tr>
<td><code>ModalButtonAppearance</code></td>
<td><code>'solid' | 'outline' | 'ghost'</code></td>
</tr>
<tr>
<td><code>ModalLoader</code></td>
<td><code>'spinner' | 'bounce' | 'pulse' | 'fade' | 'wave' | 'typing' | 'orbit' | 'triangle' | 'stretch' | 'flip' | 'collision' | 'shuffle' | 'spiral' | 'helix'</code></td>
</tr>
<tr>
<td><code>ModalContent</code></td>
<td><code>string | (() =&gt; VNode | VNode[])</code></td>
</tr>
<tr>
<td><code>ClassValue</code></td>
<td><code>string | null | undefined | false | Record&lt;string, boolean&gt; | Array&lt;...&gt;</code> (one level)</td>
</tr>
</tbody>
</table>
</div><h3 id="css-classes">CSS classes<a class="header-link" href="#css-classes" title="Link to this heading"></a></h3>
<p>Everything is defined in EN.CSS core (<code>components/basic/components-modal.css</code>).</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class or attribute</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.en-modal</code></td>
<td>The <code>&lt;dialog&gt;</code>. Centered, with a backdrop and the open and close transition</td>
</tr>
<tr>
<td><code>.en-modal--sm</code>, <code>--lg</code>, <code>--xl</code></td>
<td>Width presets from <code>size</code>. <code>--lg</code> and <code>--xl</code> are fullscreen below 768px</td>
</tr>
<tr>
<td><code>.en-modal--fullscreen</code></td>
<td><code>fullscreen</code></td>
</tr>
<tr>
<td><code>.en-modal--top</code>, <code>.en-modal--bottom</code></td>
<td><code>position</code> and <code>top</code></td>
</tr>
<tr>
<td><code>.en-modal--moveable</code>, <code>.en-modal__header--draggable</code></td>
<td><code>moveable</code></td>
</tr>
<tr>
<td><code>.en-modal--anim-{fade,top,bottom,left,right}</code></td>
<td>Animations. <code>zoom</code> needs no class</td>
</tr>
<tr>
<td><code>.en-modal--loading</code>, <code>.en-modal__loading</code></td>
<td>Loading overlay and the state that lifts the header above it</td>
</tr>
<tr>
<td><code>.en-modal--shake</code></td>
<td>Added for about 400 ms on a blocked dismissal of a <code>persistent</code> modal</td>
</tr>
<tr>
<td><code>.en-modal__header</code>, <code>__title</code>, <code>__body</code>, <code>__footer</code></td>
<td>Parts</td>
</tr>
<tr>
<td><code>.en-modal__header--{primary,secondary,success,danger,warning,info}</code></td>
<td>Header colour from <code>variant</code></td>
</tr>
<tr>
<td><code>.en-modal__close-icon</code></td>
<td>The header × button. Also <code>.en-modal__close</code>, a glyph variant</td>
</tr>
<tr>
<td><code>.en-modal__footer--{start,center,end,between}</code></td>
<td><code>footerAlign</code></td>
</tr>
<tr>
<td><code>.en-modal__body--flush</code></td>
<td>Removes the body padding. Use through <code>bodyClass</code></td>
</tr>
<tr>
<td><code>.en-modal__prompt</code>, <code>__prompt-message</code>, <code>__prompt-error</code></td>
<td>Layout, label and error of <code>prompt()</code></td>
</tr>
<tr>
<td><code>[data-en-scroll-lock=&quot;off&quot;]</code></td>
<td>Set for <code>lockScroll: false</code>. Excludes the dialog from the scroll lock</td>
</tr>
</tbody>
</table>
</div><h4 id="custom-properties">Custom properties<a class="header-link" href="#custom-properties" title="Link to this heading"></a></h4>
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
<td><code>--en-modal-width</code></td>
<td><code>32rem</code> (<code>24rem</code>, <code>48rem</code>, <code>64rem</code> by size)</td>
<td>Dialog width, capped at <code>90vw</code>. Also set by the <code>width</code> prop</td>
</tr>
<tr>
<td><code>--en-modal-offset</code></td>
<td><code>var(--en-space-8)</code></td>
<td>Distance from the edge for top and bottom placement. Also set by a numeric <code>top</code></td>
</tr>
<tr>
<td><code>--en-modal-gap-block</code></td>
<td><code>var(--en-space-8)</code></td>
<td>Vertical space the dialog leaves free. Raised by the top and bottom offset</td>
</tr>
<tr>
<td><code>--en-modal-close-opacity</code></td>
<td><code>1</code></td>
<td>Resting opacity of the × on a coloured header. Keep it at <code>0.85</code> or higher</td>
</tr>
</tbody>
</table>
</div><h3 id="development-warnings">Development warnings<a class="header-link" href="#development-warnings" title="Link to this heading"></a></h3>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Message</th>
<th>Cause</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>More than one &lt;ENModal&gt; host is mounted for namespace &quot;x&quot;</code></td>
<td>Two hosts share a namespace, so each modal renders twice</td>
</tr>
<tr>
<td><code>A modal was opened in namespace &quot;x&quot; but no &lt;ENModal namespace=&quot;x&quot; /&gt; host is mounted</code></td>
<td>The modal waits in the store until a host mounts</td>
</tr>
<tr>
<td><code>A lifecycle callback threw.</code> (error)</td>
<td>An <code>onOpened</code> / <code>onClosed</code> / <code>onButtonClick</code> callback threw. The modal is not affected</td>
</tr>
<tr>
<td><code>A close guard (beforeClick / beforeClose) threw; keeping the modal open.</code> (error)</td>
<td>A guard threw or rejected</td>
</tr>
</tbody>
</table>
</div><h3 id="gotchas">Gotchas<a class="header-link" href="#gotchas" title="Link to this heading"></a></h3>
<ul>
<li><strong><code>medium</code> has no modifier class.</strong> It is the unmodified width of <code>.en-modal</code>, so the footer buttons use the plain <code>.en-btn</code>.</li>
<li><strong><code>variant</code> only affects the header.</strong> The body and the footer stay neutral.</li>
<li><strong>Programmatic promises resolve when the close is committed</strong>, not after the animation. Use <code>onClosed</code> to wait for the exit transition.</li>
<li><strong><code>beforeClose</code> does not guard programmatic or <code>v-model</code> closes.</strong> Call the slot’s <code>close(action)</code> from a custom footer.</li>
<li><strong><code>beforeClick</code> runs for auto-rendered buttons only.</strong></li>
<li><strong><code>loading</code> makes the footer inert, Cancel included.</strong></li>
<li><strong>A guard that never settles</strong> keeps the modal in its pending state, and further close requests are ignored. <code>useModal().close()</code> still closes it.</li>
<li><strong>A modal opened in a namespace without a host</strong> stays queued until a host mounts.</li>
</ul>
`})]),null])}}),De={title:`Modal`,description:`ENModal is a modal dialog built on the native <dialog> element. The browser provides the top layer, the backdrop, focus trapping and the Esc key; EN.CSS provides the look and the open/close animations...`},Oe=Ee;export{Oe as default,De as meta};