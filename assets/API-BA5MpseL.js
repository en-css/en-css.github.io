import{E as e,I as t,N as n,O as r,P as i,g as a}from"./layouts-BrJwe6EV.js";import{t as o}from"./index-SSt72T1l.js";import{n as s,r as c,t as l}from"./CustomToc-5z9lVKbV.js";var u={0:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ENCSSPluginFactory</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">any</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ENCSSPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},1:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ENCSSPluginInput</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ENCSSPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ENCSSPluginFactory</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},2:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">readonly</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ENCSSPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},3:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">register</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">input</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ENCSSPluginInput</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">this</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},4:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mount</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">root</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ParentNode</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> document</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> { observe?: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> })</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">this</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},5:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rescan</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">root</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ParentNode</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> document</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">this</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},6:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">unmount</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">this</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},7:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">isMounted</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">boolean</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},8:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> markInit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">el</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Element</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> flag</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> boolean</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},9:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> bindThing</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">el</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">HTMLElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">!</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">markInit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">el</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">my-flag</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">))</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> return</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  el</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">addEventListener</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">click</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> handler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},10:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Modal</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ModalConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ModalInstance</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},11:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">open</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">target</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">string</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> HTMLDialogElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">void</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},12:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">close</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">target</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">string</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> HTMLDialogElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">void</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},13:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">confirm</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">opts</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ConfirmOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Promise</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},14:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">alert</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">opts</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Omit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ConfirmOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">cancelText</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Promise</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},15:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Dropdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">DropdownConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> DropdownInstance</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},16:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Tooltip</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">TooltipConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> TooltipInstance</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},17:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Offcanvas</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">OffcanvasConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> OffcanvasInstance</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},18:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Toast</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: { </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">gap</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ToastInstance</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},19:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">toast</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ENCSS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Toast</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> as</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ToastInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">toast</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">show</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Data tersimpan.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">toast</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">show</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Sesi akan berakhir dalam 5 menit.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">variant</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">warning</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">6000</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> });</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">persistent</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> toast</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">show</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Mengunggah berkas...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> });</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// ... setelah proses selesai:</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">toast</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">dismiss</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">persistent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`},20:{component:null,isLive:!1,highlightedHtml:`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./core</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // ENCSS, ENCSSPlugin, ENCSSPluginFactory, ENCSSPluginInput, markInit</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./modal</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     // Modal, ModalConfig, ConfirmOptions, ModalInstance</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./dropdown</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // Dropdown, DropdownConfig, DropdownInstance</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./tooltip</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // Tooltip, TooltipConfig, TooltipInstance</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./offcanvas</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // Offcanvas, OffcanvasConfig, OffcanvasInstance</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./toast</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     // Toast, ToastOptions, ToastInstance</span></span></code></pre>`,noCode:!1,collapsed:!1,text:`ts`}},d=[{id:`api-reference-encss-plugins`,text:`API Reference — en.css Plugins`,level:1},{id:`daftar-isi`,text:`Daftar Isi`,level:2},{id:`core`,text:`core`,level:2},{id:`interface-encssplugin`,text:"Interface `ENCSSPlugin`",level:3},{id:`tipe-encsspluginfactory`,text:"Tipe `ENCSSPluginFactory`",level:3},{id:`tipe-encssplugininput`,text:"Tipe `ENCSSPluginInput`",level:3},{id:`class-encssregistry`,text:"Class `ENCSSRegistry`",level:3},{id:`registryplugins`,text:"`registry.plugins`",level:4},{id:`registryregisterinput`,text:"`registry.register(input)`",level:4},{id:`registrymountroot-options`,text:"`registry.mount(root?, options?)`",level:4},{id:`registryrescanroot`,text:"`registry.rescan(root?)`",level:4},{id:`registryunmount`,text:"`registry.unmount()`",level:4},{id:`registryismounted`,text:"`registry.isMounted()`",level:4},{id:`fungsi-markinitel-flag`,text:"Fungsi `markInit(el, flag)`",level:3},{id:`global-windowencss`,text:"Global `window.ENCSS`",level:3},{id:`modal`,text:`modal`,level:2},{id:`interface-modalconfig`,text:"Interface `ModalConfig`",level:3},{id:`interface-confirmoptions`,text:"Interface `ConfirmOptions`",level:3},{id:`fungsi-modalconfig`,text:"Fungsi `Modal(config?)`",level:3},{id:`interface-modalinstance`,text:"Interface `ModalInstance`",level:3},{id:`opentarget`,text:"`open(target)`",level:4},{id:`closetarget`,text:"`close(target)`",level:4},{id:`confirmopts`,text:"`confirm(opts?)`",level:4},{id:`alertopts`,text:"`alert(opts?)`",level:4},{id:`atribut-markup`,text:`Atribut markup`,level:3},{id:`events`,text:`Events`,level:3},{id:`dropdown`,text:`dropdown`,level:2},{id:`interface-dropdownconfig`,text:"Interface `DropdownConfig`",level:3},{id:`fungsi-dropdownconfig`,text:"Fungsi `Dropdown(config?)`",level:3},{id:`interface-dropdowninstance`,text:"Interface `DropdownInstance`",level:3},{id:`perilaku-internal-penting`,text:`Perilaku internal penting`,level:3},{id:`events-1`,text:`Events`,level:3},{id:`tooltip`,text:`tooltip`,level:2},{id:`interface-tooltipconfig`,text:"Interface `TooltipConfig`",level:3},{id:`fungsi-tooltipconfig`,text:"Fungsi `Tooltip(config?)`",level:3},{id:`interface-tooltipinstance`,text:"Interface `TooltipInstance`",level:3},{id:`alur-kerja-tooltip-kaya-konten`,text:`Alur kerja tooltip kaya-konten`,level:3},{id:`placement-untuk-popover-native`,text:`Placement untuk popover native`,level:3},{id:`atribut-markup-1`,text:`Atribut markup`,level:3},{id:`catatan-performakeamanan`,text:`Catatan performa/keamanan`,level:3},{id:`offcanvas`,text:`offcanvas`,level:2},{id:`interface-offcanvasconfig`,text:"Interface `OffcanvasConfig`",level:3},{id:`fungsi-offcanvasconfig`,text:"Fungsi `Offcanvas(config?)`",level:3},{id:`interface-offcanvasinstance`,text:"Interface `OffcanvasInstance`",level:3},{id:`cara-plugin-menemukan-backdrop-suatu-panel-backdropfor`,text:"Cara plugin menemukan backdrop suatu panel (`backdropFor`)",level:3},{id:`atribut-markup-2`,text:`Atribut markup`,level:3},{id:`events-2`,text:`Events`,level:3},{id:`catatan`,text:`Catatan`,level:3},{id:`toast`,text:`toast`,level:2},{id:`interface-toastoptions`,text:"Interface `ToastOptions`",level:3},{id:`fungsi-toastconfig`,text:"Fungsi `Toast(config?)`",level:3},{id:`interface-toastinstance`,text:"Interface `ToastInstance`",level:3},{id:`perilaku-internal`,text:`Perilaku internal`,level:3},{id:`contoh`,text:`Contoh`,level:3},{id:`ringkasan-tipe-yang-diekspor-srcindexts`,text:"Ringkasan tipe yang diekspor `src/index.ts`",level:2}],f=[{id:`api-reference-encss-plugins`,text:`API Reference — en.css Plugins`,level:1,children:[{id:`daftar-isi`,text:`Daftar Isi`,level:2,children:[]},{id:`core`,text:`core`,level:2,children:[{id:`interface-encssplugin`,text:"Interface `ENCSSPlugin`",level:3,children:[]},{id:`tipe-encsspluginfactory`,text:"Tipe `ENCSSPluginFactory`",level:3,children:[]},{id:`tipe-encssplugininput`,text:"Tipe `ENCSSPluginInput`",level:3,children:[]},{id:`class-encssregistry`,text:"Class `ENCSSRegistry`",level:3,children:[{id:`registryplugins`,text:"`registry.plugins`",level:4,children:[]},{id:`registryregisterinput`,text:"`registry.register(input)`",level:4,children:[]},{id:`registrymountroot-options`,text:"`registry.mount(root?, options?)`",level:4,children:[]},{id:`registryrescanroot`,text:"`registry.rescan(root?)`",level:4,children:[]},{id:`registryunmount`,text:"`registry.unmount()`",level:4,children:[]},{id:`registryismounted`,text:"`registry.isMounted()`",level:4,children:[]}]},{id:`fungsi-markinitel-flag`,text:"Fungsi `markInit(el, flag)`",level:3,children:[]},{id:`global-windowencss`,text:"Global `window.ENCSS`",level:3,children:[]}]},{id:`modal`,text:`modal`,level:2,children:[{id:`interface-modalconfig`,text:"Interface `ModalConfig`",level:3,children:[]},{id:`interface-confirmoptions`,text:"Interface `ConfirmOptions`",level:3,children:[]},{id:`fungsi-modalconfig`,text:"Fungsi `Modal(config?)`",level:3,children:[]},{id:`interface-modalinstance`,text:"Interface `ModalInstance`",level:3,children:[{id:`opentarget`,text:"`open(target)`",level:4,children:[]},{id:`closetarget`,text:"`close(target)`",level:4,children:[]},{id:`confirmopts`,text:"`confirm(opts?)`",level:4,children:[]},{id:`alertopts`,text:"`alert(opts?)`",level:4,children:[]}]},{id:`atribut-markup`,text:`Atribut markup`,level:3,children:[]},{id:`events`,text:`Events`,level:3,children:[]}]},{id:`dropdown`,text:`dropdown`,level:2,children:[{id:`interface-dropdownconfig`,text:"Interface `DropdownConfig`",level:3,children:[]},{id:`fungsi-dropdownconfig`,text:"Fungsi `Dropdown(config?)`",level:3,children:[]},{id:`interface-dropdowninstance`,text:"Interface `DropdownInstance`",level:3,children:[]},{id:`perilaku-internal-penting`,text:`Perilaku internal penting`,level:3,children:[]},{id:`events-1`,text:`Events`,level:3,children:[]}]},{id:`tooltip`,text:`tooltip`,level:2,children:[{id:`interface-tooltipconfig`,text:"Interface `TooltipConfig`",level:3,children:[]},{id:`fungsi-tooltipconfig`,text:"Fungsi `Tooltip(config?)`",level:3,children:[]},{id:`interface-tooltipinstance`,text:"Interface `TooltipInstance`",level:3,children:[]},{id:`alur-kerja-tooltip-kaya-konten`,text:`Alur kerja tooltip kaya-konten`,level:3,children:[]},{id:`placement-untuk-popover-native`,text:`Placement untuk popover native`,level:3,children:[]},{id:`atribut-markup-1`,text:`Atribut markup`,level:3,children:[]},{id:`catatan-performakeamanan`,text:`Catatan performa/keamanan`,level:3,children:[]}]},{id:`offcanvas`,text:`offcanvas`,level:2,children:[{id:`interface-offcanvasconfig`,text:"Interface `OffcanvasConfig`",level:3,children:[]},{id:`fungsi-offcanvasconfig`,text:"Fungsi `Offcanvas(config?)`",level:3,children:[]},{id:`interface-offcanvasinstance`,text:"Interface `OffcanvasInstance`",level:3,children:[]},{id:`cara-plugin-menemukan-backdrop-suatu-panel-backdropfor`,text:"Cara plugin menemukan backdrop suatu panel (`backdropFor`)",level:3,children:[]},{id:`atribut-markup-2`,text:`Atribut markup`,level:3,children:[]},{id:`events-2`,text:`Events`,level:3,children:[]},{id:`catatan`,text:`Catatan`,level:3,children:[]}]},{id:`toast`,text:`toast`,level:2,children:[{id:`interface-toastoptions`,text:"Interface `ToastOptions`",level:3,children:[]},{id:`fungsi-toastconfig`,text:"Fungsi `Toast(config?)`",level:3,children:[]},{id:`interface-toastinstance`,text:"Interface `ToastInstance`",level:3,children:[]},{id:`perilaku-internal`,text:`Perilaku internal`,level:3,children:[]},{id:`contoh`,text:`Contoh`,level:3,children:[]}]},{id:`ringkasan-tipe-yang-diekspor-srcindexts`,text:"Ringkasan tipe yang diekspor `src/index.ts`",level:2,children:[]}]}],p=e({name:`LiveMdBlock`,props:{meta:{type:Object,required:!0}},setup(e){return()=>r(`div`,{class:`vlm-block`},[e.meta.isLive?r(c,{component:e.meta.component}):null,e.meta.noCode?null:r(s,{highlightedHtml:e.meta.highlightedHtml,defaultOpen:!e.meta.isLive||!e.meta.collapsed,text:e.meta.text,showToggle:e.meta.isLive})])}}),m=e({name:`LiveMdPage`,__file:`/home/enix90s/BunApps/monorepo/apps/en-framework/src/en-css/plugins/API.md`,setup(){return t(`vlm-toc`,{flat:d,tree:f}),n(()=>o(d,f)),i(()=>o([],[])),()=>r(`div`,{class:`vlm-page`},[r(`div`,{class:`vlm-content`},[r(`div`,{class:`vlm-md`,innerHTML:`<h1 id="api-reference-encss-plugins">API Reference — en.css Plugins</h1>
<p>Referensi lengkap tipe, fungsi, opsi konfigurasi, method, dan event dari
setiap modul di <code>src/</code>. Untuk contoh pemakaian &amp; markup, lihat <code>README.md</code>.</p>
<hr>
<h2 id="daftar-isi">Daftar Isi</h2>
<ul>
<li><a href="#core">core</a></li>
<li><a href="#modal">modal</a></li>
<li><a href="#dropdown">dropdown</a></li>
<li><a href="#tooltip">tooltip</a></li>
<li><a href="#offcanvas">offcanvas</a></li>
<li><a href="#toast">toast</a></li>
</ul>
<hr>
<h2 id="core">core</h2>
<p><code>src/core.ts</code> — registry dan mesin mounting. Semua plugin lain bergantung pada modul ini.</p>
<h3 id="interface-encssplugin">Interface <code>ENCSSPlugin</code></h3>
<p>Kontrak yang wajib dipenuhi setiap plugin.</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Properti</th>
<th>Tipe</th>
<th>Wajib</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>ya</td>
<td>Kunci unik plugin, dipakai sebagai key di <code>ENCSS.plugins</code> dan sumber nama saat <code>register()</code> tidak diberi key eksplisit.</td>
</tr>
<tr>
<td><code>init</code></td>
<td><code>(root: ParentNode) =&gt; void</code></td>
<td>ya</td>
<td>Dipanggil saat <code>mount()</code>/<code>rescan()</code>. Harus melakukan scan <code>root.querySelectorAll(...)</code> dan mengikat listener. Wajib idempotent (lihat <code>markInit</code>).</td>
</tr>
<tr>
<td><code>destroy</code></td>
<td><code>() =&gt; void</code></td>
<td>tidak</td>
<td>Melepas semua listener/observer yang dibuat plugin. Dipanggil oleh <code>ENCSS.unmount()</code>.</td>
</tr>
</tbody>
</table>
</div><h3 id="tipe-encsspluginfactory">Tipe <code>ENCSSPluginFactory</code></h3>
<p>`}),r(p,{key:0,meta:u[0]}),r(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Fungsi pembuat plugin, mis. <code>Modal</code>, <code>Dropdown</code>. Bisa dipanggil dengan
config (<code>Modal({ closeOnBackdrop: false })</code>) atau diberikan mentah ke
<code>register()</code> untuk memakai default.</p>
<h3 id="tipe-encssplugininput">Tipe <code>ENCSSPluginInput</code></h3>
<p>`}),r(p,{key:1,meta:u[1]}),r(`div`,{class:`vlm-md`,innerHTML:`</p>
<p>Union dari kedua bentuk di atas — inilah yang diterima <code>register()</code>.</p>
<h3 id="class-encssregistry">Class <code>ENCSSRegistry</code></h3>
<p>Diekspor sebagai instance singleton bernama <code>ENCSS</code> (juga tersedia di
<code>window.ENCSS</code> untuk pemakaian tanpa bundler).</p>
<h4 id="registryplugins"><code>registry.plugins</code></h4>
<p>`}),r(p,{key:2,meta:u[2]}),r(`div`,{class:`vlm-md`,innerHTML:`
Peta instance plugin yang sudah ter-<code>register()</code>, dikunci oleh <code>plugin.name</code>
(atau key yang diberikan ke <code>register()</code> jika <code>name</code> tidak ada).</p>
<h4 id="registryregisterinput"><code>registry.register(input)</code></h4>
<p>`}),r(p,{key:3,meta:u[3]}),r(`div`,{class:`vlm-md`,innerHTML:`
Mendaftarkan satu atau lebih plugin. Untuk setiap entri:</p>
<ul>
<li>Jika nilainya <code>function</code>, dipanggil tanpa argumen (<code>value()</code>) untuk
mendapat instance dengan konfigurasi default.</li>
<li>Jika nilainya sudah berupa objek plugin (hasil pemanggilan factory
manual, mis. <code>Modal({...})</code>), dipakai langsung.</li>
<li>Entri yang tidak punya method <code>init()</code> diabaikan dengan <code>console.warn</code>.</li>
</ul>
<p>Chainable — mengembalikan <code>this</code>, sehingga bisa dirangkai <code>.register(...).mount()</code>.</p>
<h4 id="registrymountroot-options"><code>registry.mount(root?, options?)</code></h4>
<p>`}),r(p,{key:4,meta:u[4]}),r(`div`,{class:`vlm-md`,innerHTML:`
Memanggil <code>init(root)</code> pada semua plugin terdaftar. Aman dipanggil berkali-
kali (masing-masing plugin bertanggung jawab mencegah double-binding lewat
<code>markInit</code>).</p>
<ul>
<li><code>root</code> — cakupan pencarian elemen (default: seluruh <code>document</code>). Berikan
elemen/container spesifik untuk mount parsial.</li>
<li><code>options.observe</code> — jika <code>true</code>, memasang <code>MutationObserver</code> pada
<code>document.body</code> yang otomatis memanggil <code>rescan()</code> setiap kali ada node
baru ditambahkan ke DOM (mis. hasil <code>fetch</code> + <code>innerHTML</code>, atau render
framework reaktif). Default: <code>false</code>.</li>
</ul>
<p>Error pada satu plugin di-<code>console.error</code> dan tidak menghentikan
inisialisasi plugin lain.</p>
<h4 id="registryrescanroot"><code>registry.rescan(root?)</code></h4>
<p>`}),r(p,{key:5,meta:u[5]}),r(`div`,{class:`vlm-md`,innerHTML:`
Menjalankan ulang <code>init(root)</code> semua plugin — dipakai untuk markup yang
ditambahkan setelah <code>mount()</code> awal (tanpa <code>observe: true</code>). Aman dipanggil
berulang karena <code>markInit</code> mencegah re-binding elemen yang sama.</p>
<h4 id="registryunmount"><code>registry.unmount()</code></h4>
<p>`}),r(p,{key:6,meta:u[6]}),r(`div`,{class:`vlm-md`,innerHTML:`
Menghentikan <code>MutationObserver</code> (jika aktif) dan memanggil <code>destroy()</code> pada
setiap plugin yang mengimplementasikannya.</p>
<h4 id="registryismounted"><code>registry.isMounted()</code></h4>
<p>`}),r(p,{key:7,meta:u[7]}),r(`div`,{class:`vlm-md`,innerHTML:`
<code>true</code> setelah <code>mount()</code> pernah dipanggil dan belum di-<code>unmount()</code>.</p>
<h3 id="fungsi-markinitel-flag">Fungsi <code>markInit(el, flag)</code></h3>
<p>`}),r(p,{key:8,meta:u[8]}),r(`div`,{class:`vlm-md`,innerHTML:`
Helper wajib dipakai setiap plugin sebelum mengikat listener ke sebuah
elemen. Menandai elemen dengan atribut <code>data-en-init-&lt;flag&gt;</code>.</p>
<ul>
<li>Mengembalikan <code>true</code> pada panggilan <strong>pertama</strong> untuk kombinasi
<code>(el, flag)</code> tersebut — plugin lanjut mengikat listener.</li>
<li>Mengembalikan <code>false</code> pada panggilan berikutnya — plugin harus <code>return</code>
lebih awal, mencegah listener terpasang dobel saat <code>rescan()</code>/<code>mount()</code>
dipanggil ulang di atas elemen yang sama.</li>
</ul>
<p>`}),r(p,{key:9,meta:u[9]}),r(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="global-windowencss">Global <code>window.ENCSS</code></h3>
<p>Modul ini menempelkan instance <code>ENCSS</code> ke <code>window.ENCSS</code> (dengan pengecekan
<code>typeof window !== &quot;undefined&quot;</code>, aman untuk SSR). Deklarasi tipe global
<code>Window.ENCSS: ENCSSRegistry</code> disediakan lewat <code>declare global</code>.</p>
<hr>
<h2 id="modal">modal</h2>
<p><code>src/modal.ts</code> — mengikat <code>&lt;dialog class=&quot;en-modal&quot;&gt;</code> + API programatik
<code>confirm()</code>/<code>alert()</code>.</p>
<h3 id="interface-modalconfig">Interface <code>ModalConfig</code></h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Opsi</th>
<th>Tipe</th>
<th>Default</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>closeOnBackdrop</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Tutup dialog saat klik area <code>::backdrop</code> (di luar kotak dialog).</td>
</tr>
<tr>
<td><code>openAttr</code></td>
<td><code>string</code></td>
<td><code>&quot;data-en-modal-open&quot;</code></td>
<td>Nama atribut trigger; nilainya adalah selector target dialog, mis. <code>data-en-modal-open=&quot;#id&quot;</code>.</td>
</tr>
<tr>
<td><code>closeAttr</code></td>
<td><code>string</code></td>
<td><code>&quot;data-en-modal-close&quot;</code></td>
<td>Atribut boolean pada elemen di dalam dialog yang menutupnya saat diklik.</td>
</tr>
<tr>
<td><code>labels</code></td>
<td><code>{ ok?: string; cancel?: string }</code></td>
<td><code>{ ok: &quot;OK&quot;, cancel: &quot;Batal&quot; }</code></td>
<td>Label tombol default untuk <code>confirm()</code>/<code>alert()</code> bila tidak dioverride per panggilan.</td>
</tr>
</tbody>
</table>
</div><h3 id="interface-confirmoptions">Interface <code>ConfirmOptions</code></h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Opsi</th>
<th>Tipe</th>
<th>Default</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>title</code></td>
<td><code>string</code></td>
<td>–</td>
<td>Judul di <code>.en-modal__header</code>. Header dilewati sama sekali jika tidak diisi.</td>
</tr>
<tr>
<td><code>body</code></td>
<td><code>string</code></td>
<td>–</td>
<td>Isi <code>.en-modal__body</code>. <strong>Diset via <code>textContent</code>, bukan <code>innerHTML</code></strong> — aman dari HTML injection, tapi tidak mendukung markup.</td>
</tr>
<tr>
<td><code>okText</code></td>
<td><code>string</code></td>
<td><code>labels.ok</code></td>
<td>Teks tombol konfirmasi.</td>
</tr>
<tr>
<td><code>cancelText</code></td>
<td><code>string</code></td>
<td><code>labels.cancel</code></td>
<td>Teks tombol batal (hanya dipakai oleh <code>confirm()</code>, diabaikan oleh <code>alert()</code>).</td>
</tr>
<tr>
<td><code>danger</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td><code>true</code> → tombol OK memakai <code>.en-btn--danger</code>; <code>false</code> → <code>.en-btn--primary</code>.</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;</code></td>
<td><code>&quot;sm&quot;</code></td>
<td>Modifier ukuran (<code>.en-modal--{size}</code>), sesuai skala di <code>06-components.css</code>.</td>
</tr>
</tbody>
</table>
</div><h3 id="fungsi-modalconfig">Fungsi <code>Modal(config?)</code></h3>
<p>`}),r(p,{key:10,meta:u[10]}),r(`div`,{class:`vlm-md`,innerHTML:`
Factory plugin. Mengembalikan <code>ModalInstance</code> (lihat di bawah).</p>
<h3 id="interface-modalinstance">Interface <code>ModalInstance</code></h3>
<p>Turunan dari <code>ENCSSPlugin</code>, ditambah:</p>
<h4 id="opentarget"><code>open(target)</code></h4>
<p>`}),r(p,{key:11,meta:u[11]}),r(`div`,{class:`vlm-md`,innerHTML:`
Membuka dialog via <code>HTMLDialogElement.showModal()</code>. <code>target</code> boleh berupa
selector CSS (<code>&quot;#id&quot;</code>) atau elemen <code>&lt;dialog&gt;</code> langsung. Tidak melakukan apa-
apa jika target bukan <code>&lt;dialog&gt;</code> yang valid.</p>
<p>Dispatch <code>en-modal:before-open</code> (cancelable) sebelum membuka — jika
<code>event.preventDefault()</code> dipanggil oleh listener, <code>open()</code> dibatalkan.
Dispatch <code>en-modal:open</code> setelah <code>showModal()</code> berhasil.</p>
<h4 id="closetarget"><code>close(target)</code></h4>
<p>`}),r(p,{key:12,meta:u[12]}),r(`div`,{class:`vlm-md`,innerHTML:`
Menutup dialog via <code>.close()</code>. Tidak melakukan apa-apa jika dialog tidak
sedang terbuka. Dispatch <code>en-modal:before-close</code> (cancelable) lalu
<code>en-modal:close</code>, dengan pola pembatalan yang sama seperti <code>open()</code>.</p>
<h4 id="confirmopts"><code>confirm(opts?)</code></h4>
<p>`}),r(p,{key:13,meta:u[13]}),r(`div`,{class:`vlm-md`,innerHTML:`
Membangun <code>&lt;dialog class=&quot;en-modal&quot;&gt;</code> sementara (di-<em>append</em> ke <code>&lt;body&gt;</code>,
otomatis dihapus setelah dijawab), lalu:</p>
<ul>
<li>Resolve <code>true</code> saat tombol OK diklik.</li>
<li>Resolve <code>false</code> saat tombol Batal diklik <strong>atau</strong> dialog ditutup lewat
<code>Esc</code> (event native <code>cancel</code> pada <code>&lt;dialog&gt;</code>).</li>
</ul>
<h4 id="alertopts"><code>alert(opts?)</code></h4>
<p>`}),r(p,{key:14,meta:u[14]}),r(`div`,{class:`vlm-md`,innerHTML:`
Sama seperti <code>confirm()</code> tapi hanya menampilkan satu tombol (OK) dan
Promise resolve tanpa nilai (<code>void</code>) baik lewat klik OK maupun <code>Esc</code>.</p>
<h3 id="atribut-markup">Atribut markup</h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Atribut</th>
<th>Ditaruh di</th>
<th>Nilai</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>data-en-modal-open</code></td>
<td>trigger (tombol)</td>
<td>selector dialog target, mis. <code>&quot;#modal-x&quot;</code></td>
</tr>
<tr>
<td><code>data-en-modal-close</code></td>
<td>elemen di dalam <code>&lt;dialog&gt;</code></td>
<td>tidak butuh nilai (boolean attr)</td>
</tr>
</tbody>
</table>
</div><p>Nama kedua atribut ini bisa diganti lewat <code>openAttr</code>/<code>closeAttr</code> di
<code>ModalConfig</code> jika bentrok dengan konvensi proyekmu.</p>
<h3 id="events">Events</h3>
<p>Semua event bubble dari elemen <code>&lt;dialog&gt;</code> terkait.</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Event</th>
<th style="text-align:center">Cancelable</th>
<th>Kapan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>en-modal:before-open</code></td>
<td style="text-align:center">ya</td>
<td>Sebelum <code>showModal()</code> dipanggil.</td>
</tr>
<tr>
<td><code>en-modal:open</code></td>
<td style="text-align:center">tidak</td>
<td>Setelah dialog terbuka.</td>
</tr>
<tr>
<td><code>en-modal:before-close</code></td>
<td style="text-align:center">ya</td>
<td>Sebelum <code>.close()</code> dipanggil.</td>
</tr>
<tr>
<td><code>en-modal:close</code></td>
<td style="text-align:center">tidak</td>
<td>Setelah dialog tertutup.</td>
</tr>
</tbody>
</table>
</div><p><code>confirm()</code>/<code>alert()</code> <strong>tidak</strong> memancarkan event-event ini karena tidak
melewati <code>open()</code>/<code>close()</code> internal — keduanya memanggil
<code>dialog.showModal()</code>/<code>.close()</code> langsung pada dialog sekali-pakai.</p>
<hr>
<h2 id="dropdown">dropdown</h2>
<p><code>src/dropdown.ts</code> — melengkapi <code>.en-dropdown</code> (hover/<code>:focus-within</code> CSS)
dengan interaksi klik.</p>
<h3 id="interface-dropdownconfig">Interface <code>DropdownConfig</code></h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Opsi</th>
<th>Tipe</th>
<th>Default</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>singleOpen</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Menutup semua dropdown lain yang sedang terbuka setiap kali satu dropdown dibuka.</td>
</tr>
<tr>
<td><code>toggleAttr</code></td>
<td><code>string</code></td>
<td><code>&quot;data-en-dropdown-toggle&quot;</code></td>
<td>Atribut penanda trigger di dalam <code>.en-dropdown</code>. Jika tidak ditemukan, anak pertama <code>.en-dropdown</code> dipakai sebagai trigger fallback.</td>
</tr>
</tbody>
</table>
</div><h3 id="fungsi-dropdownconfig">Fungsi <code>Dropdown(config?)</code></h3>
<p>`}),r(p,{key:15,meta:u[15]}),r(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="interface-dropdowninstance">Interface <code>DropdownInstance</code></h3>
<p>Turunan <code>ENCSSPlugin</code>, ditambah:</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Method</th>
<th>Signature</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>openAll</code></td>
<td><code>() =&gt; HTMLElement[]</code></td>
<td>Mengembalikan array elemen <code>.en-dropdown</code> yang sedang terbuka saat ini.</td>
</tr>
<tr>
<td><code>close</code></td>
<td><code>(el: HTMLElement) =&gt; void</code></td>
<td>Menutup satu wrapper <code>.en-dropdown</code> tertentu secara programatik.</td>
</tr>
<tr>
<td><code>closeAll</code></td>
<td><code>() =&gt; void</code></td>
<td>Menutup semua dropdown yang sedang terbuka.</td>
</tr>
</tbody>
</table>
</div><p>Tidak ada method <code>open()</code> publik — dropdown dibuka lewat interaksi
pengguna (klik trigger) atau lewat <code>toggle()</code> internal; gunakan
<code>el.click()</code> pada trigger-nya bila perlu membuka secara programatik.</p>
<h3 id="perilaku-internal-penting">Perilaku internal penting</h3>
<ul>
<li>Saat elemen <code>.en-dropdown</code> di-init, plugin menambahkan
<code>aria-haspopup=&quot;true&quot;</code> dan <code>aria-expanded</code> (disinkron setiap toggle) pada
trigger-nya — otomatis, tidak perlu ditulis manual di markup.</li>
<li>Klik pada <code>.en-dropdown__item</code> di dalam menu otomatis menutup dropdown
(perilaku umum menu navigasi).</li>
<li><code>Esc</code> saat fokus berada di dalam wrapper <code>.en-dropdown</code> menutup dropdown
dan mengembalikan fokus ke trigger.</li>
<li>Listener klik-di-luar dipasang <strong>sekali</strong> di <code>document</code> (bukan per
dropdown) — efisien untuk halaman dengan banyak dropdown.</li>
<li>Buka/tutup memakai <code>menu.style.display = &quot;block&quot; / &quot;&quot;</code> langsung pada
elemen <code>.en-dropdown__menu</code>, plus class <code>.en-dropdown--open</code> pada
wrapper untuk keperluan styling tambahan (mis. animasi via CSS).</li>
</ul>
<h3 id="events-1">Events</h3>
<p>Bubble dari elemen wrapper <code>.en-dropdown</code>.</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Event</th>
<th>Kapan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>en-dropdown:open</code></td>
<td>Setelah menu ditampilkan.</td>
</tr>
<tr>
<td><code>en-dropdown:close</code></td>
<td>Setelah menu disembunyikan.</td>
</tr>
</tbody>
</table>
</div><p>Tidak cancelable (tidak ada tahap <code>before-*</code> seperti pada Modal).</p>
<hr>
<h2 id="tooltip">tooltip</h2>
<p><code>src/tooltip.ts</code> — tooltip HTML kaya-konten dengan auto-placement, plus
positioning untuk <code>.en-popover[popover]</code> native.</p>
<blockquote>
<p>Tooltip teks polos (<code>.en-tooltip</code> + <code>data-tooltip</code>) di <code>06-components.css</code>
<strong>tidak</strong> memerlukan modul ini — itu murni CSS <code>::after</code> + <code>content: attr(...)</code>.</p>
</blockquote>
<h3 id="interface-tooltipconfig">Interface <code>TooltipConfig</code></h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Opsi</th>
<th>Tipe</th>
<th>Default</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>attr</code></td>
<td><code>string</code></td>
<td><code>&quot;data-en-tooltip&quot;</code></td>
<td>Atribut trigger; nilainya selector ke elemen <code>&lt;template&gt;</code> berisi konten tooltip.</td>
</tr>
<tr>
<td><code>placementAttr</code></td>
<td><code>string</code></td>
<td><code>&quot;data-en-tooltip-placement&quot;</code></td>
<td>Atribut opsional untuk override arah preferensi (<code>top|bottom|left|right</code>).</td>
</tr>
<tr>
<td><code>showDelay</code></td>
<td><code>number</code></td>
<td><code>60</code> (ms)</td>
<td>Jeda sebelum tooltip muncul setelah <code>mouseenter</code>, mencegah flicker saat kursor lewat cepat.</td>
</tr>
<tr>
<td><code>offset</code></td>
<td><code>number</code></td>
<td><code>8</code> (px)</td>
<td>Jarak antara trigger dan tooltip/popover.</td>
</tr>
</tbody>
</table>
</div><h3 id="fungsi-tooltipconfig">Fungsi <code>Tooltip(config?)</code></h3>
<p>`}),r(p,{key:16,meta:u[16]}),r(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="interface-tooltipinstance">Interface <code>TooltipInstance</code></h3>
<p>Turunan <code>ENCSSPlugin</code>, ditambah:</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Method</th>
<th>Signature</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>hideAll</code></td>
<td><code>() =&gt; void</code></td>
<td>Menyembunyikan &amp; menghapus semua tooltip HTML kaya-konten yang sedang tampil. Dipanggil otomatis saat <code>scroll</code>/<code>resize</code> window.</td>
</tr>
</tbody>
</table>
</div><h3 id="alur-kerja-tooltip-kaya-konten">Alur kerja tooltip kaya-konten</h3>
<ol>
<li>Trigger (elemen apa pun dengan <code>data-en-tooltip=&quot;#selector&quot;</code>) di-hover
atau di-fokus.</li>
<li>Setelah <code>showDelay</code> ms, konten <code>&lt;template&gt;</code> di-<em>clone</em> ke dalam
<code>&lt;div class=&quot;en-popover en-popover--js&quot; role=&quot;tooltip&quot;&gt;</code> baru yang
ditambahkan ke <code>&lt;body&gt;</code>.</li>
<li>Fungsi <code>place()</code> internal menghitung posisi terbaik: mencoba urutan
<code>[preferred, &quot;top&quot;, &quot;bottom&quot;, &quot;right&quot;, &quot;left&quot;]</code>, memilih posisi
pertama yang <strong>muat penuh</strong> di viewport; jika tidak ada yang muat
sempurna, tetap pakai posisi terakhir dicoba lalu <strong>clamp</strong> koordinat
agar tidak keluar layar sama sekali.</li>
<li>Tooltip dihapus dari DOM saat <code>mouseleave</code>/<code>blur</code>/<code>Esc</code> — tidak
disembunyikan via <code>display: none</code>, benar-benar di-<em>remove</em> untuk
menjaga DOM bersih.</li>
</ol>
<h3 id="placement-untuk-popover-native">Placement untuk popover native</h3>
<p><code>.en-popover[popover]</code> (dari <code>06-components-extended.css</code>, dibuka lewat
atribut <code>popovertarget</code>) tetap 100% ditangani native Popover API untuk
buka/tutup/light-dismiss — plugin ini <strong>hanya</strong> mendengarkan event
<code>toggle</code> bawaan popover, dan saat <code>newState === &quot;open&quot;</code>, memanggil
<code>place()</code> yang sama untuk memposisikannya relatif terhadap trigger-nya
(default arah: <code>bottom</code>, bisa dioverride lewat <code>data-en-tooltip-placement</code>
pada elemen trigger).</p>
<h3 id="atribut-markup-1">Atribut markup</h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Atribut</th>
<th>Ditaruh di</th>
<th>Nilai</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>data-en-tooltip</code></td>
<td>trigger</td>
<td>selector ke <code>&lt;template&gt;</code> berisi konten</td>
</tr>
<tr>
<td><code>data-en-tooltip-placement</code></td>
<td>trigger</td>
<td><code>&quot;top&quot; | &quot;bottom&quot; | &quot;left&quot; | &quot;right&quot;</code> (opsional)</td>
</tr>
</tbody>
</table>
</div><h3 id="catatan-performakeamanan">Catatan performa/keamanan</h3>
<ul>
<li>Setiap trigger di-<code>markInit</code> sekali; aman dipanggil ulang lewat <code>rescan()</code>.</li>
<li>Konten tooltip berasal dari <code>&lt;template&gt;</code> (elemen native, tidak dirender
browser secara default) yang di-<em>clone</em> — bukan <code>innerHTML</code> string, jadi
tidak ada risiko injection tambahan di luar apa yang sudah kamu taruh di
markup <code>&lt;template&gt;</code> sendiri.</li>
<li>Listener <code>scroll</code>/<code>resize</code> dipasang sekali secara global (bukan per
tooltip) untuk memanggil <code>hideAll()</code>.</li>
</ul>
<hr>
<h2 id="offcanvas">offcanvas</h2>
<p><code>src/offcanvas.ts</code> — trigger deklaratif untuk <code>.en-offcanvas</code> <strong>dan</strong>
<code>.en-sidebar</code> (keduanya ditangani plugin yang sama, karena berbagi pola
class-toggle yang identik di CSS).</p>
<h3 id="interface-offcanvasconfig">Interface <code>OffcanvasConfig</code></h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Opsi</th>
<th>Tipe</th>
<th>Default</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>toggleAttr</code></td>
<td><code>string</code></td>
<td><code>&quot;data-en-offcanvas-toggle&quot;</code></td>
<td>Atribut trigger buka/tutup; nilainya selector panel target.</td>
</tr>
<tr>
<td><code>closeAttr</code></td>
<td><code>string</code></td>
<td><code>&quot;data-en-offcanvas-close&quot;</code></td>
<td>Atribut boolean pada tombol di dalam panel untuk menutupnya.</td>
</tr>
<tr>
<td><code>backdropAttr</code></td>
<td><code>string</code></td>
<td><code>&quot;data-en-offcanvas-backdrop&quot;</code></td>
<td>Atribut pada elemen backdrop; nilainya selector panel yang harus ditutup saat backdrop diklik.</td>
</tr>
<tr>
<td><code>closeOnEscape</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Menutup semua panel yang sedang terbuka saat <code>Esc</code> ditekan.</td>
</tr>
</tbody>
</table>
</div><h3 id="fungsi-offcanvasconfig">Fungsi <code>Offcanvas(config?)</code></h3>
<p>`}),r(p,{key:17,meta:u[17]}),r(`div`,{class:`vlm-md`,innerHTML:`</p>
<h3 id="interface-offcanvasinstance">Interface <code>OffcanvasInstance</code></h3>
<p>Turunan <code>ENCSSPlugin</code>, ditambah:</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Method</th>
<th>Signature</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>open</code></td>
<td><code>(target: string | HTMLElement) =&gt; void</code></td>
<td>Membuka panel: menambah class <code>en-offcanvas--open</code> <strong>dan</strong> <code>en-sidebar--open</code> sekaligus (aman dipakai di kedua jenis elemen — hanya class yang relevan dengan elemen tsb yang berefek), plus menampilkan backdrop terkait jika ada.</td>
</tr>
<tr>
<td><code>close</code></td>
<td><code>(target: string | HTMLElement) =&gt; void</code></td>
<td>Kebalikan dari <code>open()</code>.</td>
</tr>
<tr>
<td><code>toggle</code></td>
<td><code>(target: string | HTMLElement) =&gt; void</code></td>
<td>Buka jika tertutup, tutup jika terbuka.</td>
</tr>
</tbody>
</table>
</div><h3 id="cara-plugin-menemukan-backdrop-suatu-panel-backdropfor">Cara plugin menemukan backdrop suatu panel (<code>backdropFor</code>)</h3>
<ol>
<li>Jika panel punya <code>id</code>, cari elemen dengan
<code>[data-en-offcanvas-backdrop=&quot;#&lt;id&gt;&quot;]</code> di seluruh dokumen.</li>
<li>Jika tidak ketemu (atau panel tidak punya <code>id</code>), fallback: cari child
<code>.en-offcanvas__backdrop</code> / <code>.en-sidebar__backdrop</code> di dalam
<code>panel.parentElement</code>.</li>
<li>Jika tetap tidak ada, panel dibuka/ditutup tanpa efek backdrop (tidak
error).</li>
</ol>
<h3 id="atribut-markup-2">Atribut markup</h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Atribut</th>
<th>Ditaruh di</th>
<th>Nilai</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>data-en-offcanvas-toggle</code></td>
<td>trigger</td>
<td>selector panel, mis. <code>&quot;#nav&quot;</code></td>
</tr>
<tr>
<td><code>data-en-offcanvas-close</code></td>
<td>tombol di dalam panel</td>
<td>tidak butuh nilai</td>
</tr>
<tr>
<td><code>data-en-offcanvas-backdrop</code></td>
<td>elemen backdrop</td>
<td>selector panel yang terkait, mis. <code>&quot;#nav&quot;</code></td>
</tr>
</tbody>
</table>
</div><h3 id="events-2">Events</h3>
<p>Bubble dari elemen panel (<code>.en-offcanvas</code>/<code>.en-sidebar</code>).</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Event</th>
<th>Kapan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>en-offcanvas:open</code></td>
<td>Setelah class <code>--open</code> ditambahkan.</td>
</tr>
<tr>
<td><code>en-offcanvas:close</code></td>
<td>Setelah class <code>--open</code> dihapus.</td>
</tr>
</tbody>
</table>
</div><p>Tidak cancelable.</p>
<h3 id="catatan">Catatan</h3>
<ul>
<li><code>init()</code> hanya memasang <strong>satu</strong> listener klik terdelegasi di root
(bukan per elemen), jadi trigger/close/backdrop yang ditambahkan
belakangan tetap berfungsi tanpa perlu <code>rescan()</code> — cukup pastikan
<code>mount()</code>/<code>init()</code> sudah pernah dipanggil sekali di root yang mencakup
area tersebut.</li>
<li>Listener <code>Esc</code> global dipasang sekali di <code>document</code>, menutup <strong>semua</strong>
panel yang tercatat terbuka oleh instance plugin ini (bukan cuma yang
terakhir dibuka).</li>
</ul>
<hr>
<h2 id="toast">toast</h2>
<p><code>src/toast.ts</code> — antrian notifikasi transient, sepenuhnya programatik
(tidak ada markup untuk di-scan, <code>init()</code> adalah no-op).</p>
<h3 id="interface-toastoptions">Interface <code>ToastOptions</code></h3>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Opsi</th>
<th>Tipe</th>
<th>Default</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>variant</code></td>
<td><code>&quot;default&quot; | &quot;success&quot; | &quot;warning&quot; | &quot;danger&quot; | &quot;info&quot;</code></td>
<td><code>&quot;default&quot;</code></td>
<td>Mewarnai background toast sesuai token warna (<code>--en-success</code>, dst.) dan teks putih. <code>&quot;default&quot;</code> memakai styling asli <code>.en-toast</code> dari CSS (gelap/terang mengikuti tema).</td>
</tr>
<tr>
<td><code>duration</code></td>
<td><code>number</code> (ms)</td>
<td><code>3500</code></td>
<td>Waktu sebelum auto-dismiss. <code>0</code> menonaktifkan auto-dismiss (toast tetap tampil sampai diklik atau <code>dismiss()</code> dipanggil manual).</td>
</tr>
</tbody>
</table>
</div><h3 id="fungsi-toastconfig">Fungsi <code>Toast(config?)</code></h3>
<p>`}),r(p,{key:18,meta:u[18]}),r(`div`,{class:`vlm-md`,innerHTML:`</p>
<ul>
<li><code>config.gap</code> — jarak antar-toast dalam stack, satuan px. Default: <code>12</code>.</li>
</ul>
<h3 id="interface-toastinstance">Interface <code>ToastInstance</code></h3>
<p>Turunan <code>ENCSSPlugin</code>, ditambah:</p>
<div class="en-table-responsive"><table class="en-table en-mdit-table en-border en-table--bordered">
<thead>
<tr>
<th>Method</th>
<th>Signature</th>
<th>Keterangan</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>show</code></td>
<td><code>(message: string, options?: ToastOptions) =&gt; HTMLElement</code></td>
<td>Menampilkan toast baru, mengembalikan elemen DOM-nya (mis. untuk manipulasi lanjutan).</td>
</tr>
<tr>
<td><code>dismiss</code></td>
<td><code>(el: HTMLElement) =&gt; void</code></td>
<td>Menutup satu toast tertentu dengan animasi fade-out, lalu menghapusnya dari DOM.</td>
</tr>
<tr>
<td><code>clear</code></td>
<td><code>() =&gt; void</code></td>
<td>Menutup semua toast yang sedang tampil di stack.</td>
</tr>
</tbody>
</table>
</div><h3 id="perilaku-internal">Perilaku internal</h3>
<ul>
<li>Container stack (<code>.en-toast-stack</code>) dibuat sekali secara <em>lazy</em> saat
<code>show()</code> pertama dipanggil — posisi <code>fixed</code>, <code>inset-block-end</code>/
<code>inset-inline-end</code> mengikuti token <code>--en-space-4</code>, <code>flex-direction: column</code>, <code>z-index: var(--en-z-toast)</code>.</li>
<li>Setiap toast individual memakai class <code>.en-toast</code> asli dari CSS
(<code>position: static</code> di-override secara inline karena positioning
ditangani oleh container stack, bukan tiap toast).</li>
<li>Klik pada toast langsung memicu <code>dismiss()</code> (penutupan manual lebih
cepat sebelum durasi habis).</li>
<li><code>message</code> diset lewat <code>textContent</code> — tidak mendukung HTML, aman dari
injection.</li>
</ul>
<h3 id="contoh">Contoh</h3>
<p>`}),r(p,{key:19,meta:u[19]}),r(`div`,{class:`vlm-md`,innerHTML:`</p>
<hr>
<h2 id="ringkasan-tipe-yang-diekspor-srcindexts">Ringkasan tipe yang diekspor <code>src/index.ts</code></h2>
<p>`}),r(p,{key:20,meta:u[20]}),r(`div`,{class:`vlm-md`,innerHTML:`</p>
`})]),r(a,{to:`#toc-sidebar`,defer:!0},[r(l,{tree:f})])])}});export{m as default};