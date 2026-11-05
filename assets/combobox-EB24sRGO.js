import{A as e,At as t,Et as n,F as r,Ft as i,H as a,I as o,Pt as s,R as c,V as l,W as u,_t as d,at as f,et as p,it as m,l as h,m as g,n as _,nt as v,ot as y,q as b,r as x,s as S,tt as C}from"./components-BJME9hSd.js";import{n as w,r as T,t as E}from"./ENCombobox-DaGSbEqH.js";var D={class:`en-stack`,style:{"--en-gap":`var(--en-space-3)`}},O=u({__name:`1`,setup(e){let o=n(null),s=[`Jakarta`,`Bandung`,`Surabaya`,{value:`bjm`,text:`Banjarmasin`}];return(e,n)=>(m(),c(`div`,D,[a(t(E),{modelValue:o.value,"onUpdate:modelValue":n[0]||=e=>o.value=e,options:s,placeholder:`Search city`,"aria-label":`City`},null,8,[`modelValue`]),r(`p`,null,`Selected: `+i(o.value??`nothing`),1)]))}}),k=u({__name:`2`,setup(e){let r=n(`basic`),i=[{value:`free`,text:`Free`},{value:`basic`,text:`Basic`},{value:`pro`,text:`Pro`},{value:`enterprise`,text:`Enterprise (contact sales)`,disabled:!0}];return(e,n)=>(m(),o(t(E),{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,options:i,"aria-label":`Plan`},null,8,[`modelValue`]))}}),A={class:`en-stack`,style:{"--en-gap":`var(--en-space-3)`}},j=u({__name:`3`,setup(o){let s=n(null),l=n([]),u=e=>l.value.unshift(e);return(n,o)=>(m(),c(`div`,A,[a(t(E),{modelValue:s.value,"onUpdate:modelValue":o[0]||=e=>s.value=e,options:[`Apple`,`Banana`,`Cherry`,`Durian`],"aria-label":`Fruit`,onChange:o[1]||=e=>u(`change: ${e}`),onSearch:o[2]||=e=>u(`search: '${e}'`),onOpen:o[3]||=e=>u(`open`),onClose:o[4]||=e=>u(`close`)},null,8,[`modelValue`]),r(`ul`,null,[(m(!0),c(e,null,y(l.value.slice(0,6),(e,t)=>(m(),c(`li`,{key:t},i(e),1))),128))])]))}}),M={class:`en-stack`,style:{"--en-gap":`var(--en-space-3)`}},N=u({__name:`4`,setup(e){let r=n(null),i=n(null),o=n(`Medium`),s=n(`High`),l=[`Low`,`Medium`,`High`];return(e,n)=>(m(),c(`div`,M,[a(t(E),{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,options:l,size:`sm`,placeholder:`Small`,"aria-label":`Small`},null,8,[`modelValue`]),a(t(E),{modelValue:i.value,"onUpdate:modelValue":n[1]||=e=>i.value=e,options:l,size:`lg`,placeholder:`Large`,"aria-label":`Large`},null,8,[`modelValue`]),a(t(E),{modelValue:o.value,"onUpdate:modelValue":n[2]||=e=>o.value=e,options:l,invalid:``,"aria-label":`Invalid`},null,8,[`modelValue`]),a(t(E),{modelValue:s.value,"onUpdate:modelValue":n[3]||=e=>s.value=e,options:l,disabled:``,"aria-label":`Disabled`},null,8,[`modelValue`])]))}}),P=u({__name:`5`,setup(e){let i=n(null);return(e,n)=>(m(),c(`div`,null,[n[1]||=r(`label`,{class:`en-label`,for:`ghost-city`},`City`,-1),a(t(E),{id:`ghost-city`,modelValue:i.value,"onUpdate:modelValue":n[0]||=e=>i.value=e,options:[`Jakarta`,`Bandung`,`Medan`],ghost:``},null,8,[`modelValue`])]))}}),F=u({__name:`6`,setup(e){let r=n(`active`),i=[{value:`active`,text:`Active`},{value:`paused`,text:`Paused`},{value:`archived`,text:`Archived`}];return(e,n)=>(m(),o(t(E),{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,options:i,searchable:!1,"aria-label":`Status`},null,8,[`modelValue`]))}}),I=u({__name:`7`,setup(e){let r=n(`Teal`);return(e,n)=>(m(),o(t(E),{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,options:[`Teal`,`Amber`,`Rose`],clearable:``,"aria-label":`Color`},null,8,[`modelValue`]))}}),L={class:`en-stack`,style:{"--en-gap":`var(--en-space-3)`}},R=u({__name:`8`,setup(e){let o=n([`Jakarta`]);return(e,n)=>(m(),c(`div`,L,[a(t(E),{modelValue:o.value,"onUpdate:modelValue":n[0]||=e=>o.value=e,options:[`Jakarta`,`Bandung`,`Surabaya`,`Medan`,`Semarang`],multiple:``,clearable:``,"aria-label":`Cities`},null,8,[`modelValue`]),r(`p`,null,`Value: `+i(JSON.stringify(o.value)),1)]))}}),z={class:`clip`},B=g(u({__name:`9`,setup(e){let r=n(null),i=n(null),o=[`Alpha`,`Bravo`,`Charlie`,`Delta`,`Echo`,`Foxtrot`];return(e,n)=>(m(),c(`div`,z,[a(t(E),{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,options:o,placeholder:`inline`,"aria-label":`Inline placement`},null,8,[`modelValue`]),a(t(E),{modelValue:i.value,"onUpdate:modelValue":n[1]||=e=>i.value=e,options:o,placeholder:`popover`,placement:`popover`,"aria-label":`Popover placement`},null,8,[`modelValue`])]))}}),[[`__scopeId`,`data-v-77204a8a`]]),V=u({__name:`10`,setup(e){let r=n(null),i=[{value:`id`,text:`Indonesia`,code:`ID`},{value:`in`,text:`India`,code:`IN`},{value:`my`,text:`Malaysia`,code:`MY`},{value:`sg`,text:`Singapore`,code:`SG`}],a=(e,t)=>(e.text??``).toLowerCase().startsWith(t)||String(e.code).toLowerCase()===t;return(e,n)=>(m(),o(t(E),{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,options:i,"filter-fn":a,placeholder:`Name or code (try 'sg')`,"aria-label":`Country`},null,8,[`modelValue`]))}}),H={class:`en-stack`,style:{"--en-gap":`var(--en-space-3)`}},U=u({__name:`11`,setup(e){let o=[{id:1,name:`Ayu Lestari`},{id:2,name:`Budi Santoso`},{id:3,name:`Citra Dewi`},{id:4,name:`Dewi Anggraini`},{id:5,name:`Eko Prasetyo`}];async function s(e){return await new Promise(e=>setTimeout(e,600)),o.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())).map(e=>({value:e.id,text:e.name}))}let l=n(null);return T(`docs-user-search`,{fetcher:s,immediate:!0,debounce:250}),p(()=>w(`docs-user-search`)),(e,n)=>(m(),c(`div`,H,[a(t(E),{modelValue:l.value,"onUpdate:modelValue":n[0]||=e=>l.value=e,controller:`docs-user-search`,placeholder:`Search users`,"aria-label":`User`},null,8,[`modelValue`]),r(`p`,null,`User id: `+i(l.value??`none`),1)]))}}),W={style:{"margin-inline-start":`var(--en-space-2)`,opacity:`0.7`}},G=u({__name:`13`,setup(e){let a=n(null),c=[{value:1,text:`Ayu Lestari`,email:`ayu@example.com`},{value:2,text:`Budi Santoso`,email:`budi@example.com`},{value:3,text:`Citra Dewi`,email:`citra@example.com`}];return(e,n)=>(m(),o(t(E),{modelValue:a.value,"onUpdate:modelValue":n[0]||=e=>a.value=e,options:c,placeholder:`Search members`,"aria-label":`Member`},{option:d(({option:e,isSelected:t})=>[r(`span`,{style:s({fontWeight:t?600:400})},i(e.text),5),r(`small`,W,i(e.email),1)]),"no-options":d(()=>[...n[1]||=[l(`No member matches this name`,-1)]]),_:1},8,[`modelValue`]))}}),K={class:`en-stack`,style:{"--en-gap":`var(--en-space-2)`}},q={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox/style.css'</span><span class="shiki-token-comment"> // only needed for \`clearable\`</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:0,lang:`ts`,injectKind:null,editable:!1,source:null},1:{component:O,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> city</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> cities</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">'Jakarta'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Bandung'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Surabaya'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'bjm'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Banjarmasin'</span><span class="shiki-foreground"> }]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-stack"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">city</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">cities</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search city"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"City"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Selected: {{ city ?? 'nothing' }}&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:1,lang:`vue`,injectKind:null,editable:!1,source:null},2:{component:k,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENComboboxOption } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> plan</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'basic'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> plans</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ENComboboxOption</span><span class="shiki-foreground">[] </span><span class="shiki-token-keyword">=</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'free'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Free'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'basic'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Basic'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'pro'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Pro'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'enterprise'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Enterprise (contact sales)'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> disabled</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">plan</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">plans</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Plan"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:2,lang:`vue`,injectKind:null,editable:!1,source:null},3:{component:j,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> fruit</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> log</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-constant">string</span><span class="shiki-foreground">[]>([])</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-function"> push</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> (entry</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> string</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> log</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">value</span><span class="shiki-token-function">.unshift</span><span class="shiki-foreground">(entry)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-stack"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span></span>
<span class="line"><span class="shiki-token-function">      v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">fruit</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">      :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span><span class="shiki-token-string-expression">'Apple'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Banana'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Cherry'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Durian'</span><span class="shiki-foreground">]</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-token-function">      aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Fruit"</span></span>
<span class="line"><span class="shiki-foreground">      @</span><span class="shiki-token-function">change</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-function">push</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">\`change: </span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">$event</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">\`</span><span class="shiki-foreground">)</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">      @</span><span class="shiki-token-function">search</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-function">push</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">\`search: '</span><span class="shiki-token-keyword">\${</span><span class="shiki-foreground">$event</span><span class="shiki-token-keyword">}</span><span class="shiki-token-string-expression">'\`</span><span class="shiki-foreground">)</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">      @</span><span class="shiki-token-function">open</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-function">push</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'open'</span><span class="shiki-foreground">)</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">      @</span><span class="shiki-token-function">close</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-function">push</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'close'</span><span class="shiki-foreground">)</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">    /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> v-for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"(entry, i) in log.slice(0, 6)"</span><span class="shiki-token-function"> :key</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"i"</span><span class="shiki-foreground">>{{ entry }}&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:3,lang:`vue`,injectKind:null,editable:!1,source:null},4:{component:N,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> a</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> b</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> c</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'Medium'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> d</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'High'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> opts</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">'Low'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Medium'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'High'</span><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-stack"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">a</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">opts</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"sm"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Small"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Small"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">b</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">opts</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> size</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"lg"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Large"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Large"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">c</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">opts</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> invalid</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Invalid"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">d</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">opts</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> disabled</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Disabled"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:4,lang:`vue`,injectKind:null,editable:!1,source:null},5:{component:P,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> city</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ghost-city"</span><span class="shiki-foreground">>City&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ghost-city"</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">city</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span><span class="shiki-token-string-expression">'Jakarta'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Bandung'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Medan'</span><span class="shiki-foreground">]</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> ghost</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:5,lang:`vue`,injectKind:null,editable:!1,source:null},6:{component:F,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> status</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'active'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> statuses</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'active'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Active'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'paused'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Paused'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'archived'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Archived'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">status</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">statuses</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">searchable</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-token-constant">false</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Status"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:6,lang:`vue`,injectKind:null,editable:!1,source:null},7:{component:I,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox/style.css'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> color</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-string-expression">'Teal'</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">color</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span><span class="shiki-token-string-expression">'Teal'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Amber'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Rose'</span><span class="shiki-foreground">]</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> clearable</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Color"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:7,lang:`vue`,injectKind:null,editable:!1,source:null},8:{component:R,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox/style.css'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> cities</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>([</span><span class="shiki-token-string-expression">'Jakarta'</span><span class="shiki-foreground">])</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-stack"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span></span>
<span class="line"><span class="shiki-token-function">      v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">cities</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">      :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span><span class="shiki-token-string-expression">'Jakarta'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Bandung'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Surabaya'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Medan'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Semarang'</span><span class="shiki-foreground">]</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-token-function">      multiple</span></span>
<span class="line"><span class="shiki-token-function">      clearable</span></span>
<span class="line"><span class="shiki-token-function">      aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Cities"</span></span>
<span class="line"><span class="shiki-foreground">    /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>Value: {{ JSON.stringify(cities) }}&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:8,lang:`vue`,injectKind:null,editable:!1,source:null},9:{component:B,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> a</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> b</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> opts</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span><span class="shiki-token-string-expression">'Alpha'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Bravo'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Charlie'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Delta'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Echo'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Foxtrot'</span><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"clip"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">a</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">opts</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"inline"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Inline placement"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">b</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">opts</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"popover"</span><span class="shiki-token-function"> placement</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"popover"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Popover placement"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">style</span><span class="shiki-token-function"> scoped</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-function">.clip</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-token-constant">  display</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> grid</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  grid-template-columns</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">fr</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">fr</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  gap</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  height</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 6</span><span class="shiki-token-keyword">rem</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  padding</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-space-3)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  overflow</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> hidden</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-keyword">px</span><span class="shiki-token-constant"> dashed </span><span class="shiki-token-function">var</span><span class="shiki-token-constant">(--en-border)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-token-constant">  border-radius</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> var</span><span class="shiki-token-constant">(--en-radius-md)</span><span class="shiki-foreground">;</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">style</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:9,lang:`vue`,injectKind:null,editable:!1,source:null},10:{component:V,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxFilterFn</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> country</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> countries</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'id'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Indonesia'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> code</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'ID'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'in'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'India'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> code</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'IN'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'my'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Malaysia'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> code</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'MY'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'sg'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Singapore'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> code</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'SG'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Match the start of the name or the ISO code, instead of "contains".</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-function"> filterFn</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ENComboboxFilterFn</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> (option</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> query) </span><span class="shiki-token-keyword">=></span></span>
<span class="line"><span class="shiki-foreground">  (</span><span class="shiki-token-constant">option</span><span class="shiki-foreground">.text </span><span class="shiki-token-keyword">??</span><span class="shiki-token-string-expression"> ''</span><span class="shiki-foreground">)</span><span class="shiki-token-function">.toLowerCase</span><span class="shiki-foreground">()</span><span class="shiki-token-function">.startsWith</span><span class="shiki-foreground">(query) </span><span class="shiki-token-keyword">||</span></span>
<span class="line"><span class="shiki-token-function">  String</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">option</span><span class="shiki-foreground">.code)</span><span class="shiki-token-function">.toLowerCase</span><span class="shiki-foreground">() </span><span class="shiki-token-keyword">===</span><span class="shiki-foreground"> query</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span></span>
<span class="line"><span class="shiki-token-function">    v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">country</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">countries</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-foreground">    :</span><span class="shiki-token-function">filter-fn</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">filterFn</span><span class="shiki-foreground">"</span></span>
<span class="line"><span class="shiki-token-function">    placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Name or code (try 'sg')"</span></span>
<span class="line"><span class="shiki-token-function">    aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Country"</span></span>
<span class="line"><span class="shiki-foreground">  /></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:10,lang:`vue`,injectKind:null,editable:!1,source:null},11:{component:U,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { onBeforeUnmount</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> useCombobox</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> disposeCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> users</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { id</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> name</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Ayu Lestari'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { id</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 2</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> name</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Budi Santoso'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { id</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 3</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> name</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Citra Dewi'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { id</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 4</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> name</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Dewi Anggraini'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { id</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 5</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> name</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Eko Prasetyo'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-comment">// Stand-in for \`fetch('/api/users?q=…')\`.</span></span>
<span class="line"><span class="shiki-token-keyword">async</span><span class="shiki-token-keyword"> function</span><span class="shiki-token-function"> searchUsers</span><span class="shiki-foreground">(query</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> string</span><span class="shiki-foreground">) {</span></span>
<span class="line"><span class="shiki-token-keyword">  await</span><span class="shiki-token-keyword"> new</span><span class="shiki-token-constant"> Promise</span><span class="shiki-foreground">((resolve) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> setTimeout</span><span class="shiki-foreground">(resolve</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> 600</span><span class="shiki-foreground">))</span></span>
<span class="line"><span class="shiki-token-keyword">  return</span><span class="shiki-foreground"> users</span></span>
<span class="line"><span class="shiki-token-function">    .filter</span><span class="shiki-foreground">((u) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> u</span><span class="shiki-token-function">.</span><span class="shiki-token-constant">name</span><span class="shiki-token-function">.toLowerCase</span><span class="shiki-foreground">()</span><span class="shiki-token-function">.includes</span><span class="shiki-foreground">(</span><span class="shiki-token-constant">query</span><span class="shiki-token-function">.toLowerCase</span><span class="shiki-foreground">()))</span></span>
<span class="line"><span class="shiki-token-function">    .map</span><span class="shiki-foreground">((u) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> ({ value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> u</span><span class="shiki-foreground">.id</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> u</span><span class="shiki-foreground">.name }))</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> userId</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">useCombobox</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'docs-user-search'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> { fetcher</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> searchUsers</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> immediate</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> true</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> debounce</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 250</span><span class="shiki-foreground"> })</span></span>
<span class="line"><span class="shiki-token-function">onBeforeUnmount</span><span class="shiki-foreground">(() </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> disposeCombobox</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'docs-user-search'</span><span class="shiki-foreground">))</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-stack"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-3)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">userId</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> controller</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"docs-user-search"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search users"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"User"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">>User id: {{ userId ?? 'none' }}&#x3C;/</span><span class="shiki-token-string-expression">p</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:11,lang:`vue`,injectKind:null,editable:!1,source:null},12:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-foreground"> { </span><span class="shiki-token-constant">options</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> loading</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> error</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> search</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> setFetcher</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> setOptions</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-constant"> refresh</span><span class="shiki-foreground"> } </span><span class="shiki-token-keyword">=</span><span class="shiki-token-function"> useCombobox</span><span class="shiki-foreground">(</span><span class="shiki-token-string-expression">'user-search'</span><span class="shiki-foreground">)</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-function">setFetcher</span><span class="shiki-foreground">(</span><span class="shiki-token-keyword">async</span><span class="shiki-foreground"> (query) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> (</span><span class="shiki-token-keyword">await</span><span class="shiki-token-constant"> api</span><span class="shiki-token-function">.users</span><span class="shiki-foreground">({ q</span><span class="shiki-token-keyword">:</span><span class="shiki-foreground"> query }))</span><span class="shiki-token-function">.map</span><span class="shiki-foreground">((u) </span><span class="shiki-token-keyword">=></span><span class="shiki-foreground"> ({ value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> u</span><span class="shiki-foreground">.id</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> u</span><span class="shiki-foreground">.name })))</span></span>
<span class="line"><span class="shiki-token-keyword">await</span><span class="shiki-token-function"> refresh</span><span class="shiki-foreground">() </span><span class="shiki-token-comment">// re-run the fetcher for the current query</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:12,lang:`ts`,injectKind:null,editable:!1,source:null},13:{component:G,isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> member</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> members</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> [</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 1</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Ayu Lestari'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> email</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'ayu@example.com'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 2</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Budi Santoso'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> email</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'budi@example.com'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">  { value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> 3</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> text</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'Citra Dewi'</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> email</span><span class="shiki-token-keyword">:</span><span class="shiki-token-string-expression"> 'citra@example.com'</span><span class="shiki-foreground"> }</span><span class="shiki-token-punctuation">,</span></span>
<span class="line"><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">member</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">members</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> placeholder</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Search members"</span><span class="shiki-token-function"> aria-label</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"Member"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground"> #</span><span class="shiki-token-function">option</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">{ option</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> isSelected }</span><span class="shiki-foreground">"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">span</span><span class="shiki-token-function"> :style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"{ fontWeight: isSelected ? 600 : 400 }"</span><span class="shiki-foreground">>{{ option.text }}&#x3C;/</span><span class="shiki-token-string-expression">span</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">      &#x3C;</span><span class="shiki-token-string-expression">small</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"margin-inline-start: var(--en-space-2); opacity: 0.7"</span><span class="shiki-foreground">>{{ option.email }}&#x3C;/</span><span class="shiki-token-string-expression">small</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground"> #</span><span class="shiki-token-function">no-options</span><span class="shiki-foreground">>No member matches this name&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:13,lang:`vue`,injectKind:null,editable:!1,source:null},14:{component:u({__name:`14`,setup(e){let i=n(null);return(e,n)=>(m(),c(`div`,K,[n[1]||=r(`label`,{class:`en-label`,for:`form-city`},`City`,-1),a(t(E),{id:`form-city`,modelValue:i.value,"onUpdate:modelValue":n[0]||=e=>i.value=e,options:[`Jakarta`,`Bandung`],name:`city`,required:``},null,8,[`modelValue`])]))}}),isLive:!0,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">script</span><span class="shiki-token-function"> setup</span><span class="shiki-token-function"> lang</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"ts"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ref } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> 'vue'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-foreground"> { ENCombobox } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"><span class="shiki-token-keyword">import</span><span class="shiki-token-keyword"> type</span><span class="shiki-foreground"> { ENComboboxModel } </span><span class="shiki-token-keyword">from</span><span class="shiki-token-string-expression"> '@en32/en-css-vue/combobox'</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">const</span><span class="shiki-token-constant"> city</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ref</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxModel</span><span class="shiki-foreground">>(</span><span class="shiki-token-constant">null</span><span class="shiki-foreground">)</span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">script</span><span class="shiki-foreground">></span></span>
<span class="line"></span>
<span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-stack"</span><span class="shiki-token-function"> style</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"--en-gap: var(--en-space-2)"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">label</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-label"</span><span class="shiki-token-function"> for</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"form-city"</span><span class="shiki-foreground">>City&#x3C;/</span><span class="shiki-token-string-expression">label</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">ENCombobox</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"form-city"</span><span class="shiki-token-function"> v-model</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">city</span><span class="shiki-foreground">"</span><span class="shiki-foreground"> :</span><span class="shiki-token-function">options</span><span class="shiki-token-keyword">=</span><span class="shiki-foreground">"</span><span class="shiki-foreground">[</span><span class="shiki-token-string-expression">'Jakarta'</span><span class="shiki-token-punctuation">,</span><span class="shiki-token-string-expression"> 'Bandung'</span><span class="shiki-foreground">]</span><span class="shiki-foreground">"</span><span class="shiki-token-function"> name</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"city"</span><span class="shiki-token-function"> required</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">template</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`vue`,key:14,lang:`vue`,injectKind:null,editable:!1,source:null},15:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-string-expression">div</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">input</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__input"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"combobox"</span><span class="shiki-token-function"> aria-expanded</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"false"</span><span class="shiki-token-function"> aria-controls</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-foreground"> /></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;</span><span class="shiki-token-string-expression">ul</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__list"</span><span class="shiki-token-function"> id</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"…"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"listbox"</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> aria-selected</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>Jakarta&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> data-active</span><span class="shiki-foreground">>Bandung&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__option"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"option"</span><span class="shiki-token-function"> aria-disabled</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"true"</span><span class="shiki-foreground">>Closed&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">    &#x3C;</span><span class="shiki-token-string-expression">li</span><span class="shiki-token-function"> class</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"en-combobox__empty"</span><span class="shiki-token-function"> role</span><span class="shiki-token-keyword">=</span><span class="shiki-token-string-expression">"presentation"</span><span class="shiki-foreground">>No options found&#x3C;/</span><span class="shiki-token-string-expression">li</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">  &#x3C;/</span><span class="shiki-token-string-expression">ul</span><span class="shiki-foreground">></span></span>
<span class="line"><span class="shiki-foreground">&#x3C;/</span><span class="shiki-token-string-expression">div</span><span class="shiki-foreground">></span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`html`,key:15,lang:`html`,injectKind:null,editable:!1,source:null},16:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki-pre-container" tabindex="0"><code><span class="line"><span class="shiki-token-keyword">interface</span><span class="shiki-token-function"> ENComboboxOption</span><span class="shiki-foreground"> {</span></span>
<span class="line"><span class="shiki-foreground">  value</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> string</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> number</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> boolean</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> null</span></span>
<span class="line"><span class="shiki-foreground">  text</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-constant"> string</span></span>
<span class="line"><span class="shiki-foreground">  disabled</span><span class="shiki-token-keyword">?:</span><span class="shiki-token-constant"> boolean</span></span>
<span class="line"><span class="shiki-foreground">  [key: string]</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> unknown</span></span>
<span class="line"><span class="shiki-foreground">}</span></span>
<span class="line"></span>
<span class="line"><span class="shiki-token-keyword">type</span><span class="shiki-token-function"> ENComboboxValue</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ENComboboxOption</span><span class="shiki-foreground">[</span><span class="shiki-token-string-expression">'value'</span><span class="shiki-foreground">]</span></span>
<span class="line"><span class="shiki-token-keyword">type</span><span class="shiki-token-function"> ENComboboxModel</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ENComboboxValue</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-function"> ENComboboxValue</span><span class="shiki-foreground">[]</span></span>
<span class="line"><span class="shiki-token-keyword">type</span><span class="shiki-token-function"> ENComboboxOptionInput</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-function"> ENComboboxOption</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> string</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-constant"> number</span></span>
<span class="line"><span class="shiki-token-keyword">type</span><span class="shiki-token-function"> ENComboboxFetcher</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> (query</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> string</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-function"> Promise</span><span class="shiki-foreground">&#x3C;</span><span class="shiki-token-function">ENComboboxOption</span><span class="shiki-foreground">[]> </span><span class="shiki-token-keyword">|</span><span class="shiki-token-function"> ENComboboxOption</span><span class="shiki-foreground">[]</span></span>
<span class="line"><span class="shiki-token-keyword">type</span><span class="shiki-token-function"> ENComboboxFilterFn</span><span class="shiki-token-keyword"> =</span><span class="shiki-foreground"> (option</span><span class="shiki-token-keyword">:</span><span class="shiki-token-function"> ENComboboxOption</span><span class="shiki-token-punctuation">,</span><span class="shiki-foreground"> query</span><span class="shiki-token-keyword">:</span><span class="shiki-token-constant"> string</span><span class="shiki-foreground">) </span><span class="shiki-token-keyword">=></span><span class="shiki-token-constant"> boolean</span></span>
<span class="line"><span class="shiki-token-keyword">type</span><span class="shiki-token-function"> ENComboboxPlacement</span><span class="shiki-token-keyword"> =</span><span class="shiki-token-string-expression"> 'inline'</span><span class="shiki-token-keyword"> |</span><span class="shiki-token-string-expression"> 'popover'</span></span></code></pre>`,noCode:!1,collapsed:!1,fullscreen:!1,text:`ts`,key:16,lang:`ts`,injectKind:null,editable:!1,source:null}},J=[{id:`combobox`,text:`Combobox`,level:1},{id:`basic-usage`,text:`Basic usage`,level:2},{id:`options`,text:`Options`,level:2},{id:`events`,text:`Events`,level:2},{id:`sizes-and-states`,text:`Sizes and states`,level:2},{id:`ghost`,text:`Ghost`,level:3},{id:`select-only-mode`,text:`Select-only mode`,level:2},{id:`clearable`,text:`Clearable`,level:2},{id:`multiple-selection`,text:`Multiple selection`,level:2},{id:`placement`,text:`Placement`,level:2},{id:`custom-filtering`,text:`Custom filtering`,level:2},{id:`remote-data-source`,text:`Remote data source`,level:2},{id:`controller`,text:`Controller`,level:3},{id:`custom-option-content`,text:`Custom option content`,level:2},{id:`labels-ids-and-forms`,text:`Labels, ids and forms`,level:2},{id:`keyboard`,text:`Keyboard`,level:2},{id:`accessibility`,text:`Accessibility`,level:2},{id:`rendered-markup`,text:`Rendered markup`,level:2},{id:`migrating-from-ensearchselect`,text:"Migrating from `ENSearchSelect`",level:2},{id:`api`,text:`API`,level:2},{id:`props`,text:`Props`,level:3},{id:`events-1`,text:`Events`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`usecomboboxkey-options`,text:"`useCombobox(key, options?)`",level:3},{id:`types`,text:`Types`,level:3},{id:`see-also`,text:`See also`,level:2}],Y=[{id:`combobox`,text:`Combobox`,level:1,children:[{id:`basic-usage`,text:`Basic usage`,level:2,children:[]},{id:`options`,text:`Options`,level:2,children:[]},{id:`events`,text:`Events`,level:2,children:[]},{id:`sizes-and-states`,text:`Sizes and states`,level:2,children:[{id:`ghost`,text:`Ghost`,level:3,children:[]}]},{id:`select-only-mode`,text:`Select-only mode`,level:2,children:[]},{id:`clearable`,text:`Clearable`,level:2,children:[]},{id:`multiple-selection`,text:`Multiple selection`,level:2,children:[]},{id:`placement`,text:`Placement`,level:2,children:[]},{id:`custom-filtering`,text:`Custom filtering`,level:2,children:[]},{id:`remote-data-source`,text:`Remote data source`,level:2,children:[{id:`controller`,text:`Controller`,level:3,children:[]}]},{id:`custom-option-content`,text:`Custom option content`,level:2,children:[]},{id:`labels-ids-and-forms`,text:`Labels, ids and forms`,level:2,children:[]},{id:`keyboard`,text:`Keyboard`,level:2,children:[]},{id:`accessibility`,text:`Accessibility`,level:2,children:[]},{id:`rendered-markup`,text:`Rendered markup`,level:2,children:[]},{id:`migrating-from-ensearchselect`,text:"Migrating from `ENSearchSelect`",level:2,children:[]},{id:`api`,text:`API`,level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`events-1`,text:`Events`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]},{id:`usecomboboxkey-options`,text:"`useCombobox(key, options?)`",level:3,children:[]},{id:`types`,text:`Types`,level:3,children:[]}]},{id:`see-also`,text:`See also`,level:2,children:[]}]}],X={css:[],js:[],cleanup:[]},Z=u({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){let t=e.meta,n=[`vlm-block`];return t.noCode&&n.push(`vlm-no-code`),t.collapsed&&n.push(`vlm-collapsed`),()=>b(`div`,{class:n},[e.meta.isLive?b(x,{component:e.meta.component,...e.meta.fullscreen?{fullscreen:!0}:{}}):null,e.meta.noCode?null:b(_,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),Q=u({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/docs/components/combobox.md`,setup(){f(`vlm-toc`,{flat:J,tree:Y}),C(()=>h(J,Y)),v(()=>h([],[]));let e=S(X);return f(`vlm-inject`,e),C(()=>e.mount()),p(()=>e.beforeUnmount()),v(()=>e.unmounted()),()=>b(`div`,{class:`vlm-page`},[b(`div`,{class:`vlm-content`},[b(`div`,{class:`vlm-md`,innerHTML:`<h1 id="combobox">Combobox<a class="header-link" href="#combobox" title="Link to this heading"></a></h1>
<p><code>ENCombobox</code> is an editable select with a filterable suggestion list. It renders the EN.CSS <code>.en-combobox</code> markup and the WAI-ARIA combobox attribute contract (<code>role=&quot;combobox&quot;</code> / <code>listbox</code> / <code>option</code>, <code>aria-expanded</code>, <code>aria-activedescendant</code>), and adds the behavior: local filtering, keyboard navigation, multiple selection with chips, remote data sources and an optional top-layer list.</p>
<p>Requires <code>components-combobox.css</code> from <code>en-css-src</code> (part of the extended components). Chips in <code>multiple</code> mode use <code>components-chip.css</code>. The only CSS shipped with the Vue package is the optional clear button.</p>
<p>`}),b(Z,{key:0,meta:q[0]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="basic-usage">Basic usage<a class="header-link" href="#basic-usage" title="Link to this heading"></a></h2>
<p>Bind the selected value with <code>v-model</code>. Options can be primitives (<code>string | number</code>) or objects with <code>value</code>, <code>text</code> and <code>disabled</code>.</p>
<p>`}),b(Z,{key:1,meta:q[1]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The component is <strong>controlled</strong>: it never stores the selection itself, so without <code>v-model</code> (or a <code>modelValue</code> plus an <code>@update:modelValue</code> handler) a pick is emitted but not shown.</p>
<p>The text shown in the field is <code>text</code>, or <code>String(value)</code> when <code>text</code> is omitted. Typing filters the list (case-insensitive “contains” match on that text) and the first enabled match is highlighted so <code>Enter</code> picks it.</p>
<h2 id="options">Options<a class="header-link" href="#options" title="Link to this heading"></a></h2>
<p>An option object may carry any extra metadata. It is passed back untouched to the <code>option</code> slot, <code>filterFn</code> and the <code>fetcher</code>.</p>
<p>`}),b(Z,{key:2,meta:q[2]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>A disabled option is rendered with <code>aria-disabled=&quot;true&quot;</code>, ignores clicks and is skipped by the arrow keys.</p>
<h2 id="events">Events<a class="header-link" href="#events" title="Link to this heading"></a></h2>
<p><code>update:modelValue</code> and <code>change</code> fire when the selection changes. <code>search</code> fires whenever the typed query changes (including the reset to <code>''</code> when the list opens or closes), and <code>open</code> / <code>close</code> follow the list.</p>
<p>`}),b(Z,{key:3,meta:q[3]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="sizes-and-states">Sizes and states<a class="header-link" href="#sizes-and-states" title="Link to this heading"></a></h2>
<p><code>size</code> is <code>sm</code> or <code>lg</code> (medium is the default). <code>invalid</code> sets <code>aria-invalid=&quot;true&quot;</code> (error border) and <code>disabled</code> disables the input.</p>
<p>`}),b(Z,{key:4,meta:q[4]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="ghost">Ghost<a class="header-link" href="#ghost" title="Link to this heading"></a></h3>
<p><code>ghost</code> makes the field borderless and transparent until it is hovered, focused or open, like <code>en-input--ghost</code> and <code>en-select--ghost</code>. It adds <code>.en-combobox--ghost</code> to the root. A <code>.en-label</code> placed directly before the combobox gets the same underline states as the other ghost controls.</p>
<p>`}),b(Z,{key:5,meta:q[5]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<p><code>ghost</code> needs the revision of <code>components-combobox.css</code> that contains <code>.en-combobox--ghost</code>.</p>
<h2 id="select-only-mode">Select-only mode<a class="header-link" href="#select-only-mode" title="Link to this heading"></a></h2>
<p><code>:searchable=&quot;false&quot;</code> makes the input read-only, so the combobox behaves like a styled <code>&lt;select&gt;</code>: the list is always unfiltered and <code>Home</code> / <code>End</code> jump to the first / last option.</p>
<p>`}),b(Z,{key:6,meta:q[6]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="clearable">Clearable<a class="header-link" href="#clearable" title="Link to this heading"></a></h2>
<p><code>clearable</code> shows a <code>×</code> button while there is a value. It clears the selection (<code>null</code>, or <code>[]</code> in <code>multiple</code> mode) and returns focus to the input. <code>clearLabel</code> sets its accessible label.</p>
<p>`}),b(Z,{key:7,meta:q[7]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The clear button is the one part of the combobox that is not in EN.CSS, which is why <code>combobox/style.css</code> has to be imported. It is layered under <code>en-components</code>, so your own styles override it without <code>!important</code>.</p>
<h2 id="multiple-selection">Multiple selection<a class="header-link" href="#multiple-selection" title="Link to this heading"></a></h2>
<p>With <code>multiple</code>, <code>v-model</code> is an array. Selected options appear as chips (<code>.en-chip</code> inside <code>.en-combobox__tags</code>) under the input, the list stays open after each pick and the query is reset so the next option can be typed right away.</p>
<p>`}),b(Z,{key:8,meta:q[8]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li>Picking a selected option again removes it. Each chip has a <code>×</code> button; <code>removeLabel</code> is the prefix of its accessible name (<code>Remove Jakarta</code>).</li>
<li><code>Backspace</code> in the empty field removes the last chip.</li>
<li>A value that is no longer in the option list (for example after a remote refetch) keeps its label. Values that were never seen fall back to <code>String(value)</code>.</li>
<li><code>ghost</code> and <code>multiple</code> can be combined; the label underline counts chips as “filled”.</li>
</ul>
<h2 id="placement">Placement<a class="header-link" href="#placement" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th><code>placement</code></th>
<th>Behavior</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>inline</code> (default)</td>
<td>The list sits right under the input and is shown by <code>aria-expanded</code>. Works in every browser, but an <code>overflow: hidden</code> ancestor can clip it</td>
</tr>
<tr>
<td><code>popover</code></td>
<td>The list opens in the top layer (<code>popover=&quot;manual&quot;</code>) and is anchored to the whole field (input plus chips) with CSS anchor positioning. It is never clipped and flips above the field when there is no room below</td>
</tr>
</tbody>
</table>
</div><p><code>popover</code> needs the Popover API and CSS anchor positioning. In other browsers the component silently uses <code>inline</code>; the check runs after mount, so server and client render the same markup.</p>
<p>The example puts both placements in a container that clips its content. Open each list to compare.</p>
<p>`}),b(Z,{key:9,meta:q[9]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="custom-filtering">Custom filtering<a class="header-link" href="#custom-filtering" title="Link to this heading"></a></h2>
<p><code>filterFn(option, query)</code> replaces the built-in “contains” match for local options. <code>query</code> is already trimmed and lowercased. It is ignored when a <code>controller</code> is set.</p>
<p>`}),b(Z,{key:10,meta:q[10]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="remote-data-source">Remote data source<a class="header-link" href="#remote-data-source" title="Link to this heading"></a></h2>
<p>For server-backed lists, create a shared <strong>controller</strong> with <code>useCombobox(key)</code> and give it a fetcher. The component only needs the key (<code>controller=&quot;…&quot;</code>). Whenever the query changes, the fetcher is called after <code>debounce</code> ms and its result becomes the option list. A controller is assumed to filter by the query itself, so local filtering and <code>filterFn</code> are skipped.</p>
<p>`}),b(Z,{key:11,meta:q[11]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li>While a fetch is in flight the list gets <code>aria-busy=&quot;true&quot;</code> (dimmed by the stylesheet). If there is nothing to show, <code>loadingText</code> (or the <code>loading</code> slot) replaces the “no options” text.</li>
<li>Responses are matched to requests, so a slow, outdated response never overwrites a newer one. A rejected fetcher sets <code>controller.error</code> and keeps the previous options.</li>
<li><strong>The first list is empty unless you seed it.</strong> Fetching is triggered by a query <em>change</em>, not by opening the list. Pass <code>immediate: true</code> together with the <code>fetcher</code> (as above) or <code>initialOptions</code>.</li>
<li>The key identifies one shared controller. Calling <code>useCombobox</code> again with the same key returns the same controller, and a passed <code>fetcher</code> or <code>initialOptions</code> replaces the current one.</li>
<li>The controller’s watcher belongs to the component that created it, so it stops when that component unmounts. Call <code>disposeCombobox(key)</code> in <code>onBeforeUnmount</code>, or the next mount reuses a controller that no longer reacts to typing.</li>
<li>A single-mode <code>v-model</code> that is set before the options arrive shows an empty field until its option is loaded. Seed it with <code>setOptions([...])</code>. In <code>multiple</code> mode the chips fall back to <code>String(value)</code>.</li>
</ul>
<h3 id="controller">Controller<a class="header-link" href="#controller" title="Link to this heading"></a></h3>
<p><code>useCombobox</code> returns the controller, so remote state is also usable from script code:</p>
<p>`}),b(Z,{key:12,meta:q[12]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="custom-option-content">Custom option content<a class="header-link" href="#custom-option-content" title="Link to this heading"></a></h2>
<p>The <code>option</code> slot replaces the text of each option. The <code>no-options</code> and <code>loading</code> slots replace the text of the empty row.</p>
<p>`}),b(Z,{key:13,meta:q[13]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The text of the <em>selected</em> option in the field is always <code>text</code> (or <code>String(value)</code>); the <code>option</code> slot only changes the list.</p>
<h2 id="labels-ids-and-forms">Labels, ids and forms<a class="header-link" href="#labels-ids-and-forms" title="Link to this heading"></a></h2>
<p><code>id</code>, <code>name</code>, <code>required</code>, <code>aria-*</code> and any other non-prop attribute go to the <code>&lt;input&gt;</code>, so <code>&lt;label for=&quot;…&quot;&gt;</code> works. <code>class</code> and <code>style</code> stay on the root element.</p>
<p>`}),b(Z,{key:14,meta:q[14]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The input’s value is the <strong>displayed text</strong>, not the option <code>value</code>. A native <code>&lt;form&gt;</code> submission posts that text, so read the value from <code>v-model</code> when you submit.</p>
<h2 id="keyboard">Keyboard<a class="header-link" href="#keyboard" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Key</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>↓</code> / <code>↑</code></td>
<td>Open the list, then move the active option (disabled options are skipped, the list wraps)</td>
</tr>
<tr>
<td><code>Home</code> / <code>End</code></td>
<td>Move to the first / last option in select-only mode. In a typed field they move the caret</td>
</tr>
<tr>
<td><code>Enter</code></td>
<td>Open the list, or pick the active option (toggles it in <code>multiple</code> mode)</td>
</tr>
<tr>
<td><code>Backspace</code></td>
<td><code>multiple</code> only: in an empty field, remove the last chip</td>
</tr>
<tr>
<td><code>Esc</code></td>
<td>Close the list</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td>Close the list and move on</td>
</tr>
</tbody>
</table>
</div><p>The list also opens on focus and click, and closes when the pointer goes down outside the component.</p>
<h2 id="accessibility">Accessibility<a class="header-link" href="#accessibility" title="Link to this heading"></a></h2>
<ul>
<li>The input has <code>role=&quot;combobox&quot;</code>, <code>aria-controls</code> (the list id), <code>aria-haspopup=&quot;listbox&quot;</code> and <code>aria-expanded</code>. <code>aria-autocomplete=&quot;list&quot;</code> is set while <code>searchable</code>.</li>
<li><code>aria-activedescendant</code> points at the highlighted option, so focus stays in the input while screen readers announce the active option.</li>
<li>The list is a <code>listbox</code> (with <code>aria-multiselectable</code> in <code>multiple</code> mode). Options carry <code>aria-selected</code> and <code>aria-disabled</code>.</li>
<li>Always give the input an accessible name: a <code>&lt;label for&gt;</code> or <code>aria-label</code>.</li>
<li>The empty row is rendered with <code>role=&quot;presentation&quot;</code> and shown by the stylesheet only when no option is visible.</li>
</ul>
<h2 id="rendered-markup">Rendered markup<a class="header-link" href="#rendered-markup" title="Link to this heading"></a></h2>
<p>State is expressed only through attributes, exactly as the EN.CSS stylesheet expects:</p>
<p>`}),b(Z,{key:15,meta:q[15]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>The list is always rendered (not <code>v-if</code>), so the stylesheet can animate it and the markup stays valid without JavaScript state.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Element</th>
<th>Attribute</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>input</td>
<td><code>aria-expanded</code></td>
<td>List is open</td>
</tr>
<tr>
<td>input</td>
<td><code>aria-activedescendant</code></td>
<td>Id of the active option</td>
</tr>
<tr>
<td>input</td>
<td><code>aria-invalid=&quot;true&quot;</code></td>
<td>Error state</td>
</tr>
<tr>
<td>input</td>
<td><code>readonly</code></td>
<td>Select-only mode</td>
</tr>
<tr>
<td>root</td>
<td><code>.en-combobox--sm</code> / <code>--lg</code> / <code>--ghost</code></td>
<td>Size and ghost look</td>
</tr>
<tr>
<td>root</td>
<td><code>.en-combobox__tags</code> &gt; <code>.en-chip</code></td>
<td>Chips (<code>multiple</code>; always rendered, hidden by <code>:empty</code>)</td>
</tr>
<tr>
<td>list</td>
<td><code>aria-multiselectable=&quot;true&quot;</code></td>
<td><code>multiple</code> mode</td>
</tr>
<tr>
<td>list</td>
<td><code>popover=&quot;manual&quot;</code></td>
<td>Top-layer placement (when supported)</td>
</tr>
<tr>
<td>list</td>
<td><code>aria-busy=&quot;true&quot;</code></td>
<td>Loading</td>
</tr>
<tr>
<td>option</td>
<td><code>aria-selected=&quot;true&quot;</code></td>
<td>Chosen option</td>
</tr>
<tr>
<td>option</td>
<td><code>data-active</code></td>
<td>Keyboard / hover highlight</td>
</tr>
<tr>
<td>option</td>
<td><code>aria-disabled=&quot;true&quot;</code></td>
<td>Not selectable</td>
</tr>
</tbody>
</table>
</div><h2 id="migrating-from-ensearchselect">Migrating from <code>ENSearchSelect</code><a class="header-link" href="#migrating-from-ensearchselect" title="Link to this heading"></a></h2>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Before</th>
<th>After</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ENSearchSelect</code></td>
<td><code>ENCombobox</code></td>
</tr>
<tr>
<td><code>useSearchSelect</code> / <code>disposeSearchSelect</code> / <code>hasSearchSelectController</code></td>
<td><code>useCombobox</code> / <code>disposeCombobox</code> / <code>hasComboboxController</code></td>
</tr>
<tr>
<td><code>@en32/en-css-vue/search-select</code></td>
<td><code>@en32/en-css-vue/combobox</code></td>
</tr>
<tr>
<td><code>ENSearchSelect*</code> types</td>
<td><code>ENCombobox*</code> types</td>
</tr>
<tr>
<td><code>ghost</code> prop</td>
<td>Kept; now <code>.en-combobox--ghost</code> on the root (needs the updated <code>components-combobox.css</code>)</td>
</tr>
<tr>
<td>Preview of the highlighted option inside the input</td>
<td>Removed; the active option is shown with <code>data-active</code> and <code>aria-activedescendant</code></td>
</tr>
<tr>
<td><code>.en-search-select*</code> classes</td>
<td><code>.en-combobox*</code> classes from EN.CSS</td>
</tr>
</tbody>
</table>
</div><h2 id="api">API<a class="header-link" href="#api" title="Link to this heading"></a></h2>
<h3 id="props">Props<a class="header-link" href="#props" title="Link to this heading"></a></h3>
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
<td><code>modelValue</code></td>
<td><code>ENComboboxModel</code></td>
<td><code>null</code></td>
<td>Bound value (<code>v-model</code>). An array of values when <code>multiple</code> is set</td>
</tr>
<tr>
<td><code>options</code></td>
<td><code>ENComboboxOptionInput[]</code></td>
<td><code>[]</code></td>
<td>Static options. Ignored when <code>controller</code> is set</td>
</tr>
<tr>
<td><code>controller</code></td>
<td><code>string | null</code></td>
<td><code>null</code></td>
<td>Key of a shared <code>useCombobox</code> controller</td>
</tr>
<tr>
<td><code>placeholder</code></td>
<td><code>string</code></td>
<td><code>'Search...'</code></td>
<td>Input placeholder</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Disables the input</td>
</tr>
<tr>
<td><code>invalid</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Sets <code>aria-invalid=&quot;true&quot;</code> (error border)</td>
</tr>
<tr>
<td><code>ghost</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Borderless until hover / focus / open (<code>.en-combobox--ghost</code>)</td>
</tr>
<tr>
<td><code>multiple</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Several values shown as chips; <code>v-model</code> is an array and the list stays open after a pick</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>'sm' | 'lg'</code></td>
<td><code>undefined</code></td>
<td><code>.en-combobox--sm</code> / <code>.en-combobox--lg</code></td>
</tr>
<tr>
<td><code>searchable</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>When <code>false</code> the input is read-only (select-only mode)</td>
</tr>
<tr>
<td><code>clearable</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Shows a button that clears the selection</td>
</tr>
<tr>
<td><code>placement</code></td>
<td><code>'inline' | 'popover'</code></td>
<td><code>'inline'</code></td>
<td>List placement. <code>popover</code> falls back to <code>inline</code> when unsupported</td>
</tr>
<tr>
<td><code>noOptionsText</code></td>
<td><code>string</code></td>
<td><code>'No options found'</code></td>
<td>Text of the empty row</td>
</tr>
<tr>
<td><code>loadingText</code></td>
<td><code>string</code></td>
<td><code>'Loading...'</code></td>
<td>Text of the empty row while a controller fetch is in flight</td>
</tr>
<tr>
<td><code>clearLabel</code></td>
<td><code>string</code></td>
<td><code>'Clear selection'</code></td>
<td>Accessible label of the clear button</td>
</tr>
<tr>
<td><code>removeLabel</code></td>
<td><code>string</code></td>
<td><code>'Remove'</code></td>
<td>Accessible label prefix of a chip’s remove button</td>
</tr>
<tr>
<td><code>debounce</code></td>
<td><code>number</code></td>
<td><code>300</code></td>
<td>Debounce (ms) of the attached controller. Only used when this component creates the controller</td>
</tr>
<tr>
<td><code>filterFn</code></td>
<td><code>ENComboboxFilterFn</code></td>
<td><code>null</code></td>
<td>Custom local filter. Ignored when <code>controller</code> is set</td>
</tr>
<tr>
<td><code>rootClass</code></td>
<td><code>ENComboboxClassValue</code></td>
<td><code>undefined</code></td>
<td>Extra classes on the root element</td>
</tr>
</tbody>
</table>
</div><p>Non-prop attributes (<code>id</code>, <code>name</code>, <code>required</code>, <code>aria-*</code>, …) are forwarded to the <code>&lt;input&gt;</code>; <code>class</code> and <code>style</code> apply to the root.</p>
<h3 id="events-1">Events<a class="header-link" href="#events-1" title="Link to this heading"></a></h3>
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
<td><code>ENComboboxModel</code></td>
<td>Selection changed (<code>v-model</code>)</td>
</tr>
<tr>
<td><code>change</code></td>
<td><code>ENComboboxModel</code></td>
<td>Selection changed</td>
</tr>
<tr>
<td><code>search</code></td>
<td><code>string</code></td>
<td>The search query changed</td>
</tr>
<tr>
<td><code>open</code></td>
<td>—</td>
<td>The list opened</td>
</tr>
<tr>
<td><code>close</code></td>
<td>—</td>
<td>The list closed</td>
</tr>
</tbody>
</table>
</div><h3 id="slots">Slots<a class="header-link" href="#slots" title="Link to this heading"></a></h3>
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
<td><code>option</code></td>
<td><code>{ option, index, isSelected, isHighlighted }</code></td>
<td>Custom content of an option</td>
</tr>
<tr>
<td><code>no-options</code></td>
<td>—</td>
<td>Content of the empty row when nothing matches</td>
</tr>
<tr>
<td><code>loading</code></td>
<td>—</td>
<td>Content of the empty row while loading</td>
</tr>
</tbody>
</table>
</div><h3 id="usecomboboxkey-options"><code>useCombobox(key, options?)</code><a class="header-link" href="#usecomboboxkey-options" title="Link to this heading"></a></h3>
<p>Gets (or lazily creates) the shared controller for <code>key</code>.</p>
<div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>fetcher</code></td>
<td><code>ENComboboxFetcher</code></td>
<td>—</td>
<td>Resolves options for the current query</td>
</tr>
<tr>
<td><code>debounce</code></td>
<td><code>number</code></td>
<td><code>300</code></td>
<td>Debounce (ms) before the fetcher runs after the query changes</td>
</tr>
<tr>
<td><code>immediate</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Call the fetcher right away when the controller is created (needs <code>fetcher</code>)</td>
</tr>
<tr>
<td><code>initialOptions</code></td>
<td><code>ENComboboxOption[]</code></td>
<td><code>[]</code></td>
<td>Options before any fetch completes</td>
</tr>
</tbody>
</table>
</div><div class="en-table-responsive en-mb-3"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Controller member</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>key</code></td>
<td><code>string</code></td>
<td>The registry key</td>
</tr>
<tr>
<td><code>options</code></td>
<td><code>Ref&lt;ENComboboxOption[]&gt;</code></td>
<td>Current options</td>
</tr>
<tr>
<td><code>loading</code></td>
<td><code>Ref&lt;boolean&gt;</code></td>
<td>A fetch is in flight</td>
</tr>
<tr>
<td><code>error</code></td>
<td><code>Ref&lt;unknown&gt;</code></td>
<td>Last fetcher error</td>
</tr>
<tr>
<td><code>search</code></td>
<td><code>Ref&lt;string&gt;</code></td>
<td>Current query, kept in sync with the bound combobox</td>
</tr>
<tr>
<td><code>setFetcher(fn | null)</code></td>
<td><code>function</code></td>
<td>Replace or clear the fetcher</td>
</tr>
<tr>
<td><code>setOptions(options)</code></td>
<td><code>function</code></td>
<td>Override the options manually</td>
</tr>
<tr>
<td><code>refresh()</code></td>
<td><code>() =&gt; Promise&lt;void&gt;</code></td>
<td>Re-run the fetcher for the current query</td>
</tr>
</tbody>
</table>
</div><p><code>disposeCombobox(key)</code> removes a controller from the registry and <code>hasComboboxController(key)</code> tells whether one exists.</p>
<h3 id="types">Types<a class="header-link" href="#types" title="Link to this heading"></a></h3>
<p>`}),b(Z,{key:16,meta:q[16]}),b(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Also exported: <code>ENComboboxPrimitiveOption</code>, <code>ENComboboxClassValue</code>, <code>ENComboboxController</code>, <code>UseComboboxOptions</code>, <code>UseComboboxReturn</code>.</p>
<h2 id="see-also">See also<a class="header-link" href="#see-also" title="Link to this heading"></a></h2>
<ul>
<li><a href="../conventions">Conventions</a>: <code>v-model</code>, attribute forwarding and <code>rootClass</code></li>
<li><a href="../global-registration">Global registration</a>: registering <code>ENCombobox</code> once, or as a pre-configured variant such as a ghost combobox</li>
<li><a href="./modal">Modal</a></li>
</ul>
`})]),null])}}),$={title:`Combobox`,description:`ENCombobox is an editable select with a filterable suggestion list. It renders the EN.CSS .en-combobox markup and the WAI-ARIA combobox attribute contract (role="combobox" / listbox / option, aria-exp...`},ee=Q;export{ee as default,$ as meta};