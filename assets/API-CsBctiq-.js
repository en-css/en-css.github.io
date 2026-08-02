import{M as e,R as t,V as n,k as r,v as i,z as a}from"./layouts-CK2yVfJi.js";import{t as o}from"./index-DYOVMqH4.js";import{n as s,r as c,t as l}from"./CustomToc-DrxX4mTi.js";var u={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> useEnTable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">RowT</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> any</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>>(</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  namespace</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UseEnTableOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">RowT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> UseEnTableReturn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">RowT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>;</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},1:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ETableField</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">RowT</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> any</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">                     // dot-notation supported, e.g. "user.name"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  label</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">                  // default: humanize(key)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  sortable</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  sortByFormatted</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | ((</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">item</span><span style="--shiki-light:#999999;--shiki-dark:#666666">) => </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">any</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  filterByFormatted</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | ((</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">item</span><span style="--shiki-light:#999999;--shiki-dark:#666666">) => </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">any</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  formatter</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">val</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">row</span><span style="--shiki-light:#999999;--shiki-dark:#666666">) => </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  thClass</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  thStyle</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  tdClass</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[] | ((</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">item</span><span style="--shiki-light:#999999;--shiki-dark:#666666">) => </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[]);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  tdStyle</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  thAttr</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  isRowHeader</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">           // render as &#x3C;th scope="row"> instead of &#x3C;td></span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  stickyColumn</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">          // pin column during horizontal scroll</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  hideOnStack</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">           // hide this column in stack mode</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  variant</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">EnVariant</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">             // per-column tint</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  class</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       // applied to both th &#x26; td</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  visible</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">               // default: true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> EnVariant</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">primary</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">secondary</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">success</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">danger</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">warning</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">info</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">light</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">dark</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ETableProvider</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">RowT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ETableProviderContext</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">RowT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Promise</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ETableProviderResult</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">RowT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>>;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ETableProviderContext</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">RowT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  sortBy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  sortDesc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  filter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  currentPage</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  perPage</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  signal</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">AbortSignal</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       // pass to fetch() for automatic request cancellation</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  extra</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ETableProviderResult</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">RowT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  items</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">RowT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  totalRows</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // required for correct server-side pagination</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  rawResponse</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`}},d=[{id:`api-reference`,text:`API Reference`,level:1},{id:`useentablenamespace-options`,text:"`useEnTable(namespace, options?)`",level:2},{id:`useentableoptionsrowt`,text:"`UseEnTableOptions<RowT>`",level:3},{id:`useentablereturnrowt`,text:"`UseEnTableReturn<RowT>`",level:3},{id:`etable`,text:"`<ETable>`",level:2},{id:`props`,text:`Props`,level:3},{id:`emits`,text:`Emits`,level:3},{id:`slots`,text:`Slots`,level:3},{id:`etablelite`,text:"`<ETableLite>`",level:2},{id:`props-1`,text:`Props`,level:3},{id:`emits-1`,text:`Emits`,level:3},{id:`slots-1`,text:`Slots`,level:3},{id:`field-definitions-etablefieldrowt`,text:"Field definitions — `ETableField<RowT>`",level:2},{id:`envariant`,text:"`EnVariant`",level:3},{id:`utility-exports`,text:`Utility exports`,level:2},{id:`provider-server-driven-types`,text:`Provider (server-driven) types`,level:2},{id:`css-classes-reference-e-tablecss`,text:"CSS classes reference (`e-table.css`)",level:2}],f=[{id:`api-reference`,text:`API Reference`,level:1,children:[{id:`useentablenamespace-options`,text:"`useEnTable(namespace, options?)`",level:2,children:[{id:`useentableoptionsrowt`,text:"`UseEnTableOptions<RowT>`",level:3,children:[]},{id:`useentablereturnrowt`,text:"`UseEnTableReturn<RowT>`",level:3,children:[]}]},{id:`etable`,text:"`<ETable>`",level:2,children:[{id:`props`,text:`Props`,level:3,children:[]},{id:`emits`,text:`Emits`,level:3,children:[]},{id:`slots`,text:`Slots`,level:3,children:[]}]},{id:`etablelite`,text:"`<ETableLite>`",level:2,children:[{id:`props-1`,text:`Props`,level:3,children:[]},{id:`emits-1`,text:`Emits`,level:3,children:[]},{id:`slots-1`,text:`Slots`,level:3,children:[]}]},{id:`field-definitions-etablefieldrowt`,text:"Field definitions — `ETableField<RowT>`",level:2,children:[{id:`envariant`,text:"`EnVariant`",level:3,children:[]}]},{id:`utility-exports`,text:`Utility exports`,level:2,children:[]},{id:`provider-server-driven-types`,text:`Provider (server-driven) types`,level:2,children:[]},{id:`css-classes-reference-e-tablecss`,text:"CSS classes reference (`e-table.css`)",level:2,children:[]}]}],p=r({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(t){return()=>e(`div`,{class:`vlm-block`},[t.meta.isLive?e(c,{component:t.meta.component}):null,t.meta.noCode?null:e(s,{highlightedHtml:t.meta.highlightedHtml,defaultOpen:!t.meta.isLive||!t.meta.collapsed,text:t.meta.text,showToggle:t.meta.isLive})])}}),m=r({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/@1032/en-css-vue/components/table/API.md`,setup(){return n(`vlm-toc`,{flat:d,tree:f}),t(()=>o(d,f)),a(()=>o([],[])),()=>e(`div`,{class:`vlm-page`},[e(`div`,{class:`vlm-content`},[e(`div`,{class:`vlm-md`,innerHTML:`<h1 id="api-reference">API Reference</h1>
<h2 id="useentablenamespace-options"><code>useEnTable(namespace, options?)</code></h2>
<p>`}),e(p,{key:0,meta:u[0]}),e(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li><code>namespace</code> — a string key. Calling <code>useEnTable()</code> with the same
<code>namespace</code> from multiple components shares one underlying state instance
(e.g. a filter toolbar in component A, the table in component B). The first
call for a namespace creates the state; later calls attach to it and can
update a subset of mutable options (<code>provider</code>, <code>filterFunction</code>,
<code>abortStrategy</code>, <code>noSortReset</code>, <code>multiSort</code>, <code>multiExpand</code>, <code>selectMode</code>,
<code>expandable</code>, <code>selectable</code>, <code>fields</code>).</li>
<li>State is reference-counted and automatically torn down (watchers stopped,
in-flight requests aborted, registry entry removed) when the last consumer’s
component scope is unmounted.</li>
</ul>
<h3 id="useentableoptionsrowt"><code>UseEnTableOptions&lt;RowT&gt;</code></h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
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
<td><code>items</code></td>
<td><code>MaybeRefOrGetter&lt;RowT[]&gt;</code></td>
<td>—</td>
<td>Static data (alternative to <code>provider</code>)</td>
</tr>
<tr>
<td><code>fields</code></td>
<td><code>MaybeRefOrGetter&lt;ETableFieldRaw&lt;RowT&gt;[]&gt;</code></td>
<td>—</td>
<td>Column definitions</td>
</tr>
<tr>
<td><code>provider</code></td>
<td><code>ETableProvider&lt;RowT&gt;</code></td>
<td>—</td>
<td>Async data source; enables server-driven mode</td>
</tr>
<tr>
<td><code>filterDebounce</code></td>
<td><code>number</code></td>
<td><code>300</code></td>
<td>Debounce (ms) before re-invoking <code>provider</code> after a filter change</td>
</tr>
<tr>
<td><code>immediate</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Run <code>provider</code> on mount &amp; whenever a dependency changes</td>
</tr>
<tr>
<td><code>abortStrategy</code></td>
<td><code>'auto' | 'manual'</code></td>
<td><code>'auto'</code></td>
<td><code>'auto'</code> cancels the previous in-flight request automatically</td>
</tr>
<tr>
<td><code>sortBy</code></td>
<td><code>string | null</code></td>
<td><code>null</code></td>
<td>Initially sorted column</td>
</tr>
<tr>
<td><code>sortDesc</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Initial sort direction</td>
</tr>
<tr>
<td><code>multiSort</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Enable multi-column sort</td>
</tr>
<tr>
<td><code>noSortReset</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>A 3rd header click loops desc → asc instead of resetting to unsorted</td>
</tr>
<tr>
<td><code>currentPage</code></td>
<td><code>number</code></td>
<td><code>1</code></td>
<td>Initial page</td>
</tr>
<tr>
<td><code>perPage</code></td>
<td><code>number</code></td>
<td><code>0</code></td>
<td>Rows per page; <code>0</code> = show all</td>
</tr>
<tr>
<td><code>perPageOptions</code></td>
<td><code>number[]</code></td>
<td>—</td>
<td>Page-size choices for a page-size <code>&lt;select&gt;</code></td>
</tr>
<tr>
<td><code>filter</code></td>
<td><code>string | Record&lt;string, unknown&gt; | null</code></td>
<td><code>null</code></td>
<td>Initial filter value</td>
</tr>
<tr>
<td><code>filterFunction</code></td>
<td><code>(item, filter) =&gt; boolean</code></td>
<td>simple substring match</td>
<td>Custom client-side filter</td>
</tr>
<tr>
<td><code>selectable</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Enable row selection</td>
</tr>
<tr>
<td><code>selectMode</code></td>
<td><code>'single' | 'multi' | 'range'</code></td>
<td><code>'single'</code></td>
<td>Selection mode</td>
</tr>
<tr>
<td><code>maxSelectedItems</code></td>
<td><code>number</code></td>
<td><code>10</code></td>
<td>Cap on simultaneous selections in <code>'multi'</code>/<code>'range'</code> mode</td>
</tr>
<tr>
<td><code>expandable</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Enable row expand/collapse</td>
</tr>
<tr>
<td><code>multiExpand</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Allow more than one row expanded at once</td>
</tr>
<tr>
<td><code>persist</code></td>
<td><code>boolean | { storage?: 'local' | 'session' | 'query' }</code></td>
<td>—</td>
<td>Persist sort/filter/page state to storage or the URL query string (<code>'query'</code> requires <code>vue-router</code>)</td>
</tr>
</tbody>
</table>
</div><h3 id="useentablereturnrowt"><code>UseEnTableReturn&lt;RowT&gt;</code></h3>
<p><strong>Reactive state</strong></p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>items</code></td>
<td><code>Ref&lt;RowT[]&gt;</code></td>
<td>Final rows to display (sorted/filtered/paged)</td>
</tr>
<tr>
<td><code>rawItems</code></td>
<td><code>Ref&lt;RowT[]&gt;</code></td>
<td>Raw rows before client-side transforms</td>
</tr>
<tr>
<td><code>fields</code></td>
<td><code>Ref&lt;ETableField&lt;RowT&gt;[]&gt;</code></td>
<td>Normalized column definitions</td>
</tr>
<tr>
<td><code>isBusy</code></td>
<td><code>Ref&lt;boolean&gt;</code></td>
<td><code>true</code> while the provider is loading</td>
</tr>
<tr>
<td><code>error</code></td>
<td><code>Ref&lt;unknown | null&gt;</code></td>
<td>Last provider error</td>
</tr>
<tr>
<td><code>sortBy</code> / <code>sortDesc</code></td>
<td><code>Ref&lt;string | null&gt;</code> / <code>Ref&lt;boolean&gt;</code></td>
<td>Current sort state</td>
</tr>
<tr>
<td><code>filter</code></td>
<td><code>Ref&lt;string | Record&lt;string, unknown&gt; | null&gt;</code></td>
<td>Current filter value</td>
</tr>
<tr>
<td><code>currentPage</code> / <code>perPage</code></td>
<td><code>Ref&lt;number&gt;</code></td>
<td>Current pagination state</td>
</tr>
<tr>
<td><code>totalRows</code></td>
<td><code>Ref&lt;number&gt;</code></td>
<td>Total row count (server- or client-computed)</td>
</tr>
<tr>
<td><code>totalPages</code></td>
<td><code>ComputedRef&lt;number&gt;</code></td>
<td><code>Math.ceil(totalRows / perPage)</code>, or <code>1</code> if <code>perPage</code> is <code>0</code></td>
</tr>
<tr>
<td><code>selectedItems</code></td>
<td><code>Ref&lt;RowT[]&gt;</code></td>
<td>Currently selected rows</td>
</tr>
<tr>
<td><code>expandedKeys</code></td>
<td><code>Ref&lt;Set&lt;unknown&gt;&gt;</code></td>
<td>Set of expanded row references</td>
</tr>
<tr>
<td><code>pageOffset</code></td>
<td><code>ComputedRef&lt;number&gt;</code></td>
<td>0-based index of the first row on the current page</td>
</tr>
<tr>
<td><code>indexOfPage(i)</code></td>
<td><code>(i: number) =&gt; number</code></td>
<td>Global index for local index <code>i</code> on the current page</td>
</tr>
</tbody>
</table>
</div><p><strong>Actions</strong></p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>refresh()</code></td>
<td>Force a re-fetch from the provider (no-op in client-side mode)</td>
</tr>
<tr>
<td><code>setSort(key, desc?)</code></td>
<td>Set sort directly</td>
</tr>
<tr>
<td><code>toggleSort(key)</code></td>
<td>Cycle sort on a column header click: asc → desc → null (or asc, if <code>noSortReset</code>)</td>
</tr>
<tr>
<td><code>setFilter(value)</code> / <code>clearFilter()</code></td>
<td>Update or clear the filter</td>
</tr>
<tr>
<td><code>setPage(page)</code> / <code>nextPage()</code> / <code>prevPage()</code></td>
<td>Change page (clamped to <code>[1, totalPages]</code>)</td>
</tr>
<tr>
<td><code>setPerPage(n)</code></td>
<td>Change page size (resets to page 1)</td>
</tr>
<tr>
<td><code>selectItem(item)</code> / <code>unselectItem(item)</code> / <code>toggleSelectItem(item)</code> / <code>clearSelection()</code></td>
<td>Manage selection</td>
</tr>
<tr>
<td><code>toggleExpansion(item)</code> / <code>isExpanded(item)</code> / <code>collapseAll()</code></td>
<td>Manage row expansion</td>
</tr>
<tr>
<td><code>abort(reason?)</code></td>
<td>Manually cancel the in-flight provider request</td>
</tr>
</tbody>
</table>
</div><p><strong>Event registration</strong> (all auto-cleaned-up on component scope unmount)</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Method</th>
<th>Fires when…</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>onAbort(cb)</code></td>
<td>A request is aborted (superseded, manual, or unmount)</td>
</tr>
<tr>
<td><code>onFetching(cb)</code></td>
<td>The provider starts fetching</td>
</tr>
<tr>
<td><code>onFetched(cb)</code></td>
<td>The provider succeeds — <code>cb({ items, isEmpty })</code></td>
</tr>
<tr>
<td><code>onError(cb)</code></td>
<td>The provider throws (excluding <code>AbortError</code>)</td>
</tr>
<tr>
<td><code>onSelectedItems(cb)</code></td>
<td>The selection array changes</td>
</tr>
<tr>
<td><code>onActiveItem(cb)</code></td>
<td>The most-recently-selected item changes (or <code>null</code> on clear)</td>
</tr>
</tbody>
</table>
</div><p><strong>Bridge to <code>&lt;ETable&gt;</code></strong></p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>tableProps</code></td>
<td><code>ComputedRef</code> — spread onto <code>&lt;ETable v-bind=&quot;table.tableProps&quot; /&gt;</code></td>
</tr>
<tr>
<td><code>tableListeners</code></td>
<td>Bind with <code>&lt;ETable v-on=&quot;table.tableListeners&quot; /&gt;</code></td>
</tr>
</tbody>
</table>
</div><p>In practice, just pass the whole return value via the <code>table</code> prop —
<code>&lt;ETable :table=&quot;table&quot; /&gt;</code> — which reads both internally.</p>
<hr>
<h2 id="etable"><code>&lt;ETable&gt;</code></h2>
<h3 id="props">Props</h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Default</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>table</code></td>
<td><code>UseEnTableReturn&lt;RowT&gt;</code></td>
<td>—</td>
<td>When set, composable mode is active; all data props below are ignored</td>
</tr>
<tr>
<td><code>items</code></td>
<td><code>RowT[]</code></td>
<td><code>[]</code></td>
<td>Standalone mode only</td>
</tr>
<tr>
<td><code>fields</code></td>
<td><code>ETableFieldRaw&lt;RowT&gt;[]</code></td>
<td><code>[]</code></td>
<td>Standalone mode only</td>
</tr>
<tr>
<td><code>striped</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td><code>hover</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td><code>bordered</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td><code>borderless</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td><code>small</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Compact padding</td>
</tr>
<tr>
<td><code>dark</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td><code>variant</code></td>
<td><code>EnVariant</code></td>
<td>—</td>
<td>Table-wide tint</td>
</tr>
<tr>
<td><code>responsive</code></td>
<td><code>boolean | 'sm'|'md'|'lg'|'xl'|'xxl'</code></td>
<td><code>false</code></td>
<td>Horizontal scroll</td>
</tr>
<tr>
<td><code>stickyHeader</code></td>
<td><code>boolean | string</code></td>
<td><code>false</code></td>
<td><code>true</code> = 300px max-height, string = custom (e.g. <code>'500px'</code>)</td>
</tr>
<tr>
<td><code>stack</code></td>
<td><code>boolean | 'always'|'sm'|'md'|'lg'|'xl'|'xxl'</code></td>
<td><code>false</code></td>
<td>Card layout</td>
</tr>
<tr>
<td><code>stackLabelPosition</code></td>
<td><code>'top' | 'inline'</code></td>
<td><code>'top'</code></td>
<td></td>
</tr>
<tr>
<td><code>sortBy</code> / <code>sortDesc</code></td>
<td><code>string | null</code> / <code>boolean</code></td>
<td><code>null</code> / <code>false</code></td>
<td>Standalone mode only</td>
</tr>
<tr>
<td><code>noSortReset</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Standalone mode only</td>
</tr>
<tr>
<td><code>busy</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Standalone mode only</td>
</tr>
<tr>
<td><code>showEmpty</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td></td>
</tr>
<tr>
<td><code>emptyText</code></td>
<td><code>string</code></td>
<td><code>'No data available'</code></td>
<td></td>
</tr>
<tr>
<td><code>currentPage</code> / <code>perPage</code></td>
<td><code>number</code></td>
<td><code>1</code> / <code>0</code></td>
<td>Standalone client-side paging</td>
</tr>
<tr>
<td><code>selectable</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Standalone mode only</td>
</tr>
<tr>
<td><code>selectMode</code></td>
<td><code>'single'|'multi'|'range'</code></td>
<td><code>'single'</code></td>
<td>Standalone mode only</td>
</tr>
<tr>
<td><code>selectedItems</code></td>
<td><code>RowT[]</code></td>
<td><code>[]</code></td>
<td>Standalone mode only (use <code>v-model:selectedItems</code>)</td>
</tr>
<tr>
<td><code>selectedVariant</code></td>
<td><code>string</code></td>
<td><code>'primary'</code></td>
<td><code>EnVariant</code> applied to selected rows</td>
</tr>
<tr>
<td><code>expandable</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td><code>fieldColumnClass</code></td>
<td><code>(field) =&gt; string</code></td>
<td>—</td>
<td>Extra per-column class hook</td>
</tr>
<tr>
<td><code>footClone</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Render <code>&lt;tfoot&gt;</code> cloning header labels</td>
</tr>
</tbody>
</table>
</div><h3 id="emits">Emits</h3>
<p><code>update:sortBy</code>, <code>update:sortDesc</code>, <code>sort-changed</code>, <code>filtered</code>,
<code>row-clicked</code>, <code>row-dblclicked</code>, <code>row-hovered</code>, <code>head-clicked</code>,
<code>update:selectedItems</code>, <code>row-selected</code>, <code>row-expanded</code>, <code>row-collapsed</code>.</p>
<h3 id="slots">Slots</h3>
<p>Same as <code>ETableLite</code> below, plus:</p>
<ul>
<li><code>#thead-top</code></li>
<li><code>#table-busy</code> — replaces the built-in spinner/“Loading…” indicator</li>
</ul>
<hr>
<h2 id="etablelite"><code>&lt;ETableLite&gt;</code></h2>
<p>A stateless rendering-only table: no sort/filter/pagination logic, and row
expansion display is driven entirely by the <code>isExpandedFn</code> prop.</p>
<h3 id="props-1">Props</h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>items</code></td>
<td><code>RowT[]</code></td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>fields</code></td>
<td><code>ETableFieldRaw&lt;RowT&gt;[]</code></td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>striped</code> / <code>hover</code> / <code>bordered</code> / <code>borderless</code> / <code>small</code> / <code>dark</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>variant</code></td>
<td><code>EnVariant</code></td>
<td>—</td>
</tr>
<tr>
<td><code>responsive</code></td>
<td><code>boolean | 'sm'|'md'|'lg'|'xl'|'xxl'</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>stickyHeader</code></td>
<td><code>boolean | string</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>stack</code></td>
<td><code>boolean | 'always'|'sm'|'md'|'lg'|'xl'|'xxl'</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>stackLabelPosition</code></td>
<td><code>'top' | 'inline'</code></td>
<td><code>'top'</code></td>
</tr>
<tr>
<td><code>showEmpty</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>emptyText</code></td>
<td><code>string</code></td>
<td><code>'No data available'</code></td>
</tr>
<tr>
<td><code>footClone</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>expandable</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>isExpandedFn</code></td>
<td><code>(item, index) =&gt; boolean</code></td>
<td><code>() =&gt; false</code></td>
</tr>
</tbody>
</table>
</div><h3 id="emits-1">Emits</h3>
<p><code>row-clicked</code>, <code>row-dblclicked</code>, <code>row-hovered</code>, <code>toggle-expansion</code>.</p>
<h3 id="slots-1">Slots</h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Slot</th>
<th>Scope</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>#head(key)</code> / <code>#head()</code></td>
<td><code>{ field, label }</code></td>
<td>Header cell content</td>
</tr>
<tr>
<td><code>#cell(key)</code> / <code>#cell()</code></td>
<td><code>{ value, formatted, item, index, field, toggleExpansion, expansionShowing }</code></td>
<td>Cell content</td>
</tr>
<tr>
<td><code>#foot(key)</code> / <code>#foot()</code></td>
<td><code>{ field, label }</code></td>
<td>Footer cell content</td>
</tr>
<tr>
<td><code>#empty</code></td>
<td><code>{ emptyText }</code></td>
<td>Empty-state content</td>
</tr>
<tr>
<td><code>#row-expansion</code></td>
<td><code>{ item, index, toggleExpansion }</code></td>
<td>Expanded row content</td>
</tr>
</tbody>
</table>
</div><hr>
<h2 id="field-definitions-etablefieldrowt">Field definitions — <code>ETableField&lt;RowT&gt;</code></h2>
<p>`}),e(p,{key:1,meta:u[1]}),e(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>A field may also be given as a plain string (<code>'name'</code>), which is shorthand
for <code>{ key: 'name', label: humanize('name') }</code>.</p>
<h3 id="envariant"><code>EnVariant</code></h3>
<p>`}),e(p,{key:2,meta:u[2]}),e(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="utility-exports">Utility exports</h2>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Export</th>
<th>Signature</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>humanize</code></td>
<td><code>(key: string) =&gt; string</code></td>
<td><code>&quot;firstName&quot;</code> → <code>&quot;First Name&quot;</code></td>
</tr>
<tr>
<td><code>normalizeField</code></td>
<td><code>(raw: ETableFieldRaw&lt;RowT&gt;) =&gt; ETableField&lt;RowT&gt;</code></td>
<td>Expand a string shorthand into a full field object</td>
</tr>
<tr>
<td><code>getNestedValue</code></td>
<td><code>(obj: any, path: string) =&gt; any</code></td>
<td>Dot-notation getter, e.g. <code>getNestedValue(row, 'user.city')</code></td>
</tr>
</tbody>
</table>
</div><h2 id="provider-server-driven-types">Provider (server-driven) types</h2>
<p>`}),e(p,{key:3,meta:u[3]}),e(`div`,{class:`vlm-md`,innerHTML:`</p>
<h2 id="css-classes-reference-e-tablecss">CSS classes reference (<code>e-table.css</code>)</h2>
<p>These are the classes <code>ETable</code>/<code>ETableLite</code> apply automatically based on
props — you generally won’t write them by hand, but they’re useful if you’re
extending the stylesheet or targeting the table with your own overrides.</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Class</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>en-table-wrapper</code></td>
<td>Wrapper <code>&lt;div&gt;</code>; always <code>position: relative</code></td>
</tr>
<tr>
<td><code>en-table-wrapper--responsive[-{bp}]</code></td>
<td>Horizontal scroll</td>
</tr>
<tr>
<td><code>en-table-wrapper--sticky-header</code></td>
<td>Vertical scroll container for sticky header</td>
</tr>
<tr>
<td><code>en-table--stack[-{bp}]</code></td>
<td>Card/stacked layout</td>
</tr>
<tr>
<td><code>en-table--striped</code> / <code>--hover</code> / <code>--bordered</code> / <code>--borderless</code> / <code>--compact</code> / <code>--dark</code></td>
<td>Appearance modifiers</td>
</tr>
<tr>
<td><code>en-table--variant-{variant}</code></td>
<td>Table-wide tint</td>
</tr>
<tr>
<td><code>en-table__variant-{variant}</code></td>
<td>Per-row/per-cell tint (also used for selected-row highlight)</td>
</tr>
<tr>
<td><code>en-table__col-sticky-start</code></td>
<td>Left-pinned sticky column</td>
</tr>
<tr>
<td><code>en-table__th--sortable</code></td>
<td>Sortable header affordance (focus ring)</td>
</tr>
<tr>
<td><code>en-table__th-content</code></td>
<td>Flex layout wrapper for header label</td>
</tr>
<tr>
<td><code>en-table__hide-on-stack</code></td>
<td>Hides a column in stack mode</td>
</tr>
<tr>
<td><code>en-table__stack-label</code></td>
<td>Inline column label shown in stack mode</td>
</tr>
<tr>
<td><code>en-table__row--selectable</code></td>
<td><code>cursor: pointer</code> on selectable rows</td>
</tr>
<tr>
<td><code>en-table__row--expansion</code></td>
<td>The expansion <code>&lt;tr&gt;</code>/<code>&lt;td&gt;</code></td>
</tr>
<tr>
<td><code>en-table__busy-overlay</code> / <code>__busy-overlay__content</code></td>
<td>Overlay shown while busy with existing data</td>
</tr>
<tr>
<td><code>en-table__busy-row</code></td>
<td>Inline loading row shown on first fetch</td>
</tr>
<tr>
<td><code>en-table__spinner--sm</code></td>
<td>Small <code>en-spinner</code> size variant</td>
</tr>
</tbody>
</table>
</div>`})]),e(i,{to:`#toc-right-sidebar`,defer:!0},[e(l,{tree:f})])])}});export{m as default};