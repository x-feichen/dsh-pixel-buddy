window.__ModuleLoader__.load({
  id: "dsh-pixel-buddy",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
"use strict";var xe=Object.defineProperty;var Lt=Object.getOwnPropertyDescriptor;var Ht=Object.getOwnPropertyNames;var It=Object.prototype.hasOwnProperty;var Ye=t=>{throw TypeError(t)};var Ot=(t,i)=>{for(var e in i)xe(t,e,{get:i[e],enumerable:!0})},qt=(t,i,e,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Ht(i))!It.call(t,s)&&s!==e&&xe(t,s,{get:()=>i[s],enumerable:!(n=Lt(i,s))||n.enumerable});return t};var Nt=t=>qt(xe({},"__esModule",{value:!0}),t);var be=(t,i,e)=>i.has(t)||Ye("Cannot "+e);var r=(t,i,e)=>(be(t,i,"read from private field"),e?e.call(t):i.get(t)),a=(t,i,e)=>i.has(t)?Ye("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,e),h=(t,i,e,n)=>(be(t,i,"write to private field"),n?n.call(t,e):i.set(t,e),e),l=(t,i,e)=>(be(t,i,"access private method"),e);var ui={};Ot(ui,{apply:()=>si,inject:()=>ni,notifyLangChange:()=>oi});module.exports=Nt(ui);var d=require("react"),Tt=require("react-dom/client"),Ne=require("@deepseek-ai/dsh-client-ui-primitives");var Ge=[32,40,48],se=48,j=16,ve=8,Ve=3;function we(t,i=window.innerHeight,e=48){let n=Math.max(ve,i-e-ve);return Math.min(n,Math.max(ve,Math.round(t)))}var zt={running:'<rect x="9" y="9" width="6" height="6"/>',"input-required":'<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">?</text>',error:'<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">!</text>',success:'<path d="M7 12.5 L10.5 16 L17 8.5" stroke-width="2.5" fill="none"/>'},Se={zh:{idle:"\u4F1A\u8BDD\u7A7A\u95F2",running:"\u4F1A\u8BDD\u8FD0\u884C\u4E2D","input-required":"\u4F1A\u8BDD\u9700\u8981\u4EBA\u5DE5\u4ECB\u5165",error:"\u4F1A\u8BDD\u51FA\u73B0\u5F02\u5E38",success:"\u4EFB\u52A1\u6210\u529F\u5B8C\u6210"},en:{idle:"Session idle",running:"Session running","input-required":"Input required",error:"Session error",success:"Task completed"}};function Je(t){return`<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" class="badge-bg"/>
    <g class="badge-sym">${zt[t]}</g>
  </svg>`}function Xe(t,i=document){let e=[],n=i.querySelectorAll("body *");for(let s of n){if(s.tagName==="DSH-PIXEL-BUDDY"||s.closest?.("dsh-pixel-buddy"))continue;let g=getComputedStyle(s).position;if(g!=="fixed"&&g!=="sticky")continue;let f=s.getBoundingClientRect();if(f.width===0||f.height===0)continue;f.left<t.right&&f.right>t.left&&f.top<t.bottom&&f.bottom>t.top&&e.push(jt(s))}return{conflicts:e}}function jt(t){let i=t.id?`#${t.id}`:"",e=t.classList.length?`.${[...t.classList].slice(0,2).join(".")}`:"";return`${t.tagName.toLowerCase()}${i}${e}`}var Ze={id:"duck",label:"\u9E2D\u5B50",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- \u5934\u90E8\uFF08\u6D45\u9EC4\uFF09 -->
    <g fill="#FFD966">
      <rect x="3" y="2" width="7" height="6"/>
      <rect x="2" y="3" width="1" height="4"/>
      <rect x="10" y="3" width="1" height="3"/>
    </g>
    <!-- \u5934\u90E8\u6697\u9762\uFF08\u8FC7\u6E21\u5230\u9888\u90E8\uFF09 -->
    <rect x="3" y="7" width="7" height="1" fill="#F0B429"/>
    <!-- \u5599\uFF08\u6A59\uFF0C\u53CC\u5C42\uFF09 -->
    <rect x="11" y="5" width="3" height="2" fill="#F08C1B"/>
    <rect x="11" y="6" width="3" height="1" fill="#D9700F"/>
    <!-- \u773C\u775B -->
    <rect x="6" y="4" width="1" height="2" fill="#2B2B2B"/>
    <rect x="6" y="4" width="1" height="1" fill="#555555"/>
    <!-- \u8EAB\u4F53\uFF08\u4E3B\u9EC4\uFF09 -->
    <g fill="#F6C445">
      <rect x="2" y="8" width="10" height="5"/>
      <rect x="1" y="9" width="1" height="3"/>
      <rect x="1" y="7" width="1" height="1"/>
    </g>
    <!-- \u5C3E\u7FBD\u4E0A\u7FD8\uFF08\u6DF1\u9EC4\uFF09 -->
    <rect x="2" y="7" width="2" height="1" fill="#E8A13A"/>
    <!-- \u7FC5\u8180\uFF08\u6DF1\u9EC4\uFF0C\u5E26\u9AD8\u5149\u8FB9\uFF09 -->
    <rect x="4" y="9" width="5" height="3" fill="#E8A13A"/>
    <rect x="4" y="9" width="5" height="1" fill="#F0B429"/>
    <!-- \u8179\u90E8\uFF08\u5976\u6CB9\u8272\uFF09 -->
    <rect x="3" y="12" width="8" height="1" fill="#FBEFD0"/>
    <!-- \u811A\uFF08\u6A59\u68D5\uFF09 -->
    <rect x="4" y="13" width="2" height="1" fill="#D9700F"/>
    <rect x="8" y="13" width="2" height="1" fill="#D9700F"/>
  </svg>`},blinkOverlay(){return'<rect x="6" y="4" width="1" height="2" fill="#FFD966"/>'}};var Ke={id:"cat",label:"\u732B",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- \u8033\u6735\uFF08\u5706\u949D\u5C0F\u4E09\u89D2\uFF0C\u7C89\u5185\u8033\uFF1B\u538B\u5728\u5934\u90E8\u8F6E\u5ED3\u4E0A\u6CBF\uFF0C\u4E0D\u4FB5\u5165\u53F3\u4E0A\u5FBD\u7AE0\u533A\uFF09 -->
    <g fill="#9AA0A8">
      <rect x="3" y="1" width="2" height="2"/>
      <rect x="7" y="1" width="2" height="2"/>
    </g>
    <g fill="#F2A6B8">
      <rect x="3" y="2" width="1" height="1"/>
      <rect x="8" y="2" width="1" height="1"/>
    </g>
    <!-- \u5934\u90E8\uFF08\u5706\u8F6E\u5ED3\uFF0C\u6D45\u7070\uFF09 -->
    <g fill="#9AA0A8">
      <rect x="2" y="2" width="8" height="6"/>
      <rect x="1" y="3" width="1" height="4"/>
      <rect x="10" y="3" width="1" height="4"/>
    </g>
    <!-- \u989D\u5934\u82B1\u7EB9 -->
    <rect x="5" y="2" width="1" height="2" fill="#6E747C"/>
    <rect x="7" y="3" width="1" height="1" fill="#6E747C"/>
    <!-- \u773C\u775B\uFF08\u7AD6\u77B3\uFF09 -->
    <rect x="4" y="4" width="1" height="2" fill="#2B2B2B"/>
    <rect x="8" y="4" width="1" height="2" fill="#2B2B2B"/>
    <rect x="4" y="4" width="1" height="1" fill="#D9E0E7"/>
    <rect x="8" y="4" width="1" height="1" fill="#D9E0E7"/>
    <!-- \u9F3B\u4E0E\u5634 -->
    <rect x="6" y="6" width="1" height="1" fill="#F2A6B8"/>
    <rect x="6" y="7" width="1" height="1" fill="#6E747C"/>
    <!-- \u80E1\u987B -->
    <rect x="1" y="6" width="1" height="1" fill="#D9E0E7"/>
    <rect x="11" y="6" width="1" height="1" fill="#D9E0E7"/>
    <!-- \u8EAB\u4F53\uFF08\u5750\u59FF\uFF09 -->
    <g fill="#9AA0A8">
      <rect x="3" y="8" width="8" height="5"/>
      <rect x="2" y="9" width="1" height="4"/>
      <rect x="11" y="9" width="1" height="3"/>
    </g>
    <!-- \u80F8\u8179\uFF08\u767D\u6BDB\uFF09 -->
    <rect x="5" y="9" width="3" height="4" fill="#E8ECF0"/>
    <!-- \u73AF\u7EB9\u5C3E\u5DF4\uFF08\u4E0A\u7FD8\uFF0C\u907F\u5F00\u5FBD\u7AE0\u533A\uFF09 -->
    <g fill="#6E747C">
      <rect x="12" y="7" width="1" height="3"/>
      <rect x="12" y="10" width="2" height="1"/>
    </g>
    <rect x="12" y="6" width="1" height="1" fill="#9AA0A8"/>
    <!-- \u524D\u722A\uFF08\u767D\uFF09 -->
    <rect x="3" y="13" width="2" height="1" fill="#E8ECF0"/>
    <rect x="8" y="13" width="2" height="1" fill="#E8ECF0"/>
  </svg>`},blinkOverlay(){return'<rect x="4" y="4" width="1" height="2" fill="#9AA0A8"/><rect x="8" y="4" width="1" height="2" fill="#9AA0A8"/><rect x="4" y="5" width="1" height="1" fill="#6E747C"/><rect x="8" y="5" width="1" height="1" fill="#6E747C"/>'}};var We={id:"dog",label:"\u72D7",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- \u5934\u90E8\uFF08\u5706\u8F6E\u5ED3\uFF0C\u68D5\u9EC4\uFF09 -->
    <g fill="#B98A5A">
      <rect x="3" y="3" width="7" height="6"/>
      <rect x="2" y="4" width="1" height="4"/>
      <rect x="10" y="4" width="1" height="4"/>
    </g>
    <!-- \u5782\u8033\uFF08\u6DF1\u68D5\uFF0C\u4E24\u4FA7\u8D34\u5934\uFF09 -->
    <g fill="#8A5F38">
      <rect x="1" y="3" width="1" height="5"/>
      <rect x="11" y="3" width="1" height="4"/>
    </g>
    <rect x="11" y="7" width="1" height="1" fill="#6E4A2A"/>
    <!-- \u7709\u70B9 -->
    <rect x="4" y="4" width="1" height="1" fill="#8A5F38"/>
    <rect x="8" y="4" width="1" height="1" fill="#8A5F38"/>
    <!-- \u773C\u775B -->
    <rect x="4" y="5" width="1" height="2" fill="#2B2B2B"/>
    <rect x="8" y="5" width="1" height="2" fill="#2B2B2B"/>
    <!-- \u543B\u90E8\uFF08\u5976\u6CB9\u8272\u5757 + \u6DF1\u8272\u9F3B\u5934\uFF09 -->
    <rect x="5" y="7" width="4" height="2" fill="#EFE0C8"/>
    <rect x="6" y="7" width="2" height="1" fill="#2B2B2B"/>
    <rect x="6" y="8" width="1" height="1" fill="#6E4A2A"/>
    <!-- \u8EAB\u4F53 -->
    <g fill="#B98A5A">
      <rect x="3" y="9" width="8" height="4"/>
      <rect x="2" y="10" width="1" height="3"/>
      <rect x="11" y="10" width="1" height="2"/>
    </g>
    <!-- \u80F8\u53E3\uFF08\u5976\u6CB9\uFF09 -->
    <rect x="6" y="9" width="2" height="4" fill="#EFE0C8"/>
    <!-- \u5C3E\u5DF4\uFF08\u4E0A\u7FD8\u6447\u6446\u4F4D\uFF09 -->
    <rect x="12" y="8" width="1" height="2" fill="#B98A5A"/>
    <rect x="12" y="7" width="1" height="1" fill="#EFE0C8"/>
    <!-- \u9879\u5708\uFF08\u7EA2\uFF0C\u70B9\u7F00\u8272\uFF09 -->
    <rect x="3" y="9" width="8" height="1" fill="#C94F4F"/>
    <!-- \u722A\uFF08\u5976\u6CB9\uFF09 -->
    <rect x="3" y="13" width="2" height="1" fill="#EFE0C8"/>
    <rect x="8" y="13" width="2" height="1" fill="#EFE0C8"/>
  </svg>`},blinkOverlay(){return'<rect x="4" y="5" width="1" height="2" fill="#B98A5A"/><rect x="8" y="5" width="1" height="2" fill="#B98A5A"/><rect x="4" y="6" width="1" height="1" fill="#8A5F38"/><rect x="8" y="6" width="1" height="1" fill="#8A5F38"/>'}};var Qe={id:"rabbit",label:"\u5154\u5B50",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- \u957F\u8033\uFF08\u5DE6\u5916\u4FA7\u7C89\u5185\u8033\uFF09 -->
    <g fill="#F5F7FA">
      <rect x="3" y="0" width="2" height="5"/>
      <rect x="6" y="0" width="2" height="4"/>
    </g>
    <rect x="3" y="1" width="1" height="3" fill="#F2A6B8"/>
    <rect x="7" y="1" width="1" height="2" fill="#F2A6B8"/>
    <!-- \u5934\u90E8\uFF08\u5706\u8F6E\u5ED3\uFF09 -->
    <g fill="#F5F7FA">
      <rect x="2" y="4" width="8" height="5"/>
      <rect x="1" y="5" width="1" height="3"/>
      <rect x="10" y="5" width="1" height="3"/>
    </g>
    <!-- \u773C\u775B\uFF08\u7EA2\u77B3\u70B9\u7F00\uFF09 -->
    <rect x="4" y="6" width="1" height="1" fill="#C94F4F"/>
    <rect x="8" y="6" width="1" height="1" fill="#C94F4F"/>
    <!-- \u9F3B\u4E0E\u5634 -->
    <rect x="6" y="7" width="1" height="1" fill="#F2A6B8"/>
    <rect x="6" y="8" width="1" height="1" fill="#C9CDD3"/>
    <!-- \u816E\u7EA2 -->
    <rect x="2" y="7" width="1" height="1" fill="#F7C8D2"/>
    <rect x="9" y="7" width="1" height="1" fill="#F7C8D2"/>
    <!-- \u8EAB\u4F53\uFF08\u8737\u5750\uFF09 -->
    <g fill="#F5F7FA">
      <rect x="3" y="9" width="8" height="4"/>
      <rect x="2" y="10" width="1" height="3"/>
      <rect x="11" y="10" width="1" height="2"/>
    </g>
    <!-- \u5C3E\u56E2\uFF08\u6D45\u7C89\uFF09 -->
    <rect x="12" y="11" width="1" height="2" fill="#F2A6B8"/>
    <!-- \u524D\u722A\uFF08\u6D45\u7070\u9634\u5F71\uFF09 -->
    <rect x="3" y="13" width="2" height="1" fill="#C9CDD3"/>
    <rect x="8" y="13" width="2" height="1" fill="#C9CDD3"/>
  </svg>`},blinkOverlay(){return'<rect x="4" y="6" width="1" height="1" fill="#F5F7FA"/><rect x="8" y="6" width="1" height="1" fill="#F5F7FA"/><rect x="4" y="6" width="1" height="1" fill="#C9CDD3"/><rect x="8" y="6" width="1" height="1" fill="#C9CDD3"/>'}};var et={id:"fox",label:"\u72D0\u72F8",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- \u8033\u6735\uFF08\u4E09\u89D2\uFF0C\u6DF1\u8272\u8033\u5C16\uFF1B\u4F4D\u4E8E\u5934\u90E8\u5DE6\u4E0A\uFF0C\u907F\u5F00\u53F3\u4E0A\u5FBD\u7AE0\u533A\uFF09 -->
    <g fill="#E8873A">
      <rect x="2" y="1" width="2" height="2"/>
      <rect x="7" y="1" width="2" height="2"/>
    </g>
    <rect x="2" y="1" width="1" height="1" fill="#5A3A22"/>
    <rect x="8" y="1" width="1" height="1" fill="#5A3A22"/>
    <!-- \u5934\u90E8 -->
    <g fill="#E8873A">
      <rect x="2" y="2" width="8" height="5"/>
      <rect x="1" y="3" width="1" height="3"/>
      <rect x="10" y="3" width="1" height="3"/>
    </g>
    <!-- \u767D\u8272\u988A\u6BDB\uFF08V \u5F62\u4E0B\u8138\uFF09 -->
    <rect x="4" y="6" width="5" height="1" fill="#FBF3E4"/>
    <rect x="5" y="7" width="3" height="1" fill="#FBF3E4"/>
    <!-- \u773C\u775B\uFF08\u772F\u773C\uFF09 -->
    <rect x="4" y="4" width="1" height="1" fill="#2B2B2B"/>
    <rect x="8" y="4" width="1" height="1" fill="#2B2B2B"/>
    <!-- \u9F3B\u5C16\uFF08\u6DF1\uFF09 -->
    <rect x="6" y="7" width="1" height="1" fill="#2B2B2B"/>
    <!-- \u8EAB\u4F53 -->
    <g fill="#E8873A">
      <rect x="3" y="8" width="7" height="5"/>
      <rect x="2" y="9" width="1" height="4"/>
    </g>
    <!-- \u80F8\u8179\uFF08\u767D\uFF09 -->
    <rect x="5" y="8" width="2" height="5" fill="#FBF3E4"/>
    <!-- \u5927\u5C3E\uFF08\u4E0A\u7FD8\uFF0C\u767D\u5C16\uFF09 -->
    <g fill="#E8873A">
      <rect x="10" y="9" width="3" height="3"/>
      <rect x="12" y="8" width="1" height="1"/>
    </g>
    <rect x="12" y="9" width="2" height="1" fill="#FBF3E4"/>
    <rect x="13" y="10" width="1" height="2" fill="#FBF3E4"/>
    <!-- \u722A\uFF08\u6DF1\uFF09 -->
    <rect x="3" y="13" width="2" height="1" fill="#5A3A22"/>
    <rect x="7" y="13" width="2" height="1" fill="#5A3A22"/>
  </svg>`},blinkOverlay(){return'<rect x="4" y="4" width="1" height="1" fill="#E8873A"/><rect x="8" y="4" width="1" height="1" fill="#E8873A"/><rect x="4" y="4" width="1" height="1" fill="#C96F1F"/><rect x="8" y="4" width="1" height="1" fill="#C96F1F"/>'}};var tt={id:"hamster",label:"\u4ED3\u9F20",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- \u5706\u8033\uFF08\u91D1\u6BDB + \u7C89\u5185\u8033\uFF09 -->
    <g fill="#E8B872">
      <rect x="2" y="1" width="3" height="3"/>
      <rect x="7" y="1" width="3" height="3"/>
    </g>
    <rect x="3" y="2" width="1" height="1" fill="#F2A6B8"/>
    <rect x="8" y="2" width="1" height="1" fill="#F2A6B8"/>
    <!-- \u5934\u90E8\uFF08\u5706\u8F6E\u5ED3\uFF09 -->
    <g fill="#E8B872">
      <rect x="2" y="3" width="8" height="6"/>
      <rect x="1" y="4" width="1" height="4"/>
      <rect x="10" y="4" width="1" height="4"/>
    </g>
    <!-- \u773C\u775B -->
    <rect x="4" y="5" width="1" height="1" fill="#2B2B2B"/>
    <rect x="8" y="5" width="1" height="1" fill="#2B2B2B"/>
    <!-- \u816E\u7EA2\uFF08\u9F13\u988A\uFF09 -->
    <rect x="2" y="7" width="2" height="1" fill="#F7C8A8"/>
    <rect x="8" y="7" width="2" height="1" fill="#F7C8A8"/>
    <!-- \u9F3B\u4E0E\u5634 -->
    <rect x="6" y="7" width="1" height="1" fill="#C97B6B"/>
    <rect x="6" y="8" width="1" height="1" fill="#D8A25E"/>
    <!-- \u8EAB\u4F53\uFF08\u767D\u809A\uFF09 -->
    <g fill="#E8B872">
      <rect x="3" y="9" width="8" height="4"/>
      <rect x="2" y="10" width="1" height="3"/>
      <rect x="11" y="10" width="1" height="2"/>
    </g>
    <rect x="5" y="10" width="3" height="3" fill="#F7E8CC"/>
    <!-- \u5C0F\u722A\uFF08\u7C89\uFF09 -->
    <rect x="3" y="13" width="2" height="1" fill="#F2C9A0"/>
    <rect x="8" y="13" width="2" height="1" fill="#F2C9A0"/>
  </svg>`},blinkOverlay(){return'<rect x="4" y="5" width="1" height="1" fill="#D8A25E"/><rect x="8" y="5" width="1" height="1" fill="#D8A25E"/><rect x="4" y="5" width="1" height="1" fill="#8A5F38"/><rect x="8" y="5" width="1" height="1" fill="#8A5F38"/>'}};var it={id:"panda",label:"\u718A\u732B",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- \u5706\u8033\uFF08\u9ED1\uFF09 -->
    <rect x="2" y="1" width="2" height="2" fill="#2B2B2B"/>
    <rect x="8" y="1" width="2" height="2" fill="#2B2B2B"/>
    <!-- \u5934\u90E8\uFF08\u767D\uFF09 -->
    <g fill="#F5F7FA">
      <rect x="2" y="2" width="8" height="6"/>
      <rect x="1" y="3" width="1" height="4"/>
      <rect x="10" y="3" width="1" height="4"/>
    </g>
    <!-- \u9ED1\u773C\u5708\uFF08\u659C\u7F6E\uFF09+ \u767D\u773C\u70B9 -->
    <rect x="3" y="4" width="2" height="2" fill="#2B2B2B"/>
    <rect x="7" y="4" width="2" height="2" fill="#2B2B2B"/>
    <rect x="3" y="4" width="1" height="1" fill="#F5F7FA"/>
    <rect x="8" y="5" width="1" height="1" fill="#F5F7FA"/>
    <!-- \u9F3B -->
    <rect x="6" y="6" width="1" height="1" fill="#2B2B2B"/>
    <!-- \u8EAB\u4F53\uFF08\u767D\uFF0C\u9ED1\u80A9\u5E26\u73AF\u7ED5\uFF09 -->
    <g fill="#F5F7FA">
      <rect x="3" y="8" width="8" height="5"/>
      <rect x="2" y="9" width="1" height="4"/>
      <rect x="11" y="9" width="1" height="3"/>
    </g>
    <rect x="3" y="9" width="8" height="1" fill="#2B2B2B"/>
    <!-- \u9ED1\u56DB\u80A2 -->
    <rect x="2" y="10" width="1" height="3" fill="#2B2B2B"/>
    <rect x="11" y="10" width="1" height="2" fill="#2B2B2B"/>
    <rect x="3" y="13" width="2" height="1" fill="#2B2B2B"/>
    <rect x="8" y="13" width="2" height="1" fill="#2B2B2B"/>
  </svg>`},blinkOverlay(){return'<rect x="3" y="4" width="1" height="1" fill="#2B2B2B"/><rect x="8" y="5" width="1" height="1" fill="#2B2B2B"/>'}};var rt={id:"frog",label:"\u9752\u86D9",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- \u51F8\u773C\uFF08\u5934\u9876\u4E24\u4FA7\uFF0C\u767D\u5E95\u9ED1\u77B3\uFF09 -->
    <g fill="#6FBF4A">
      <rect x="2" y="1" width="3" height="3"/>
      <rect x="7" y="1" width="3" height="3"/>
    </g>
    <rect x="3" y="2" width="1" height="1" fill="#F5F7FA"/>
    <rect x="8" y="2" width="1" height="1" fill="#F5F7FA"/>
    <rect x="3" y="1" width="1" height="1" fill="#2B2B2B"/>
    <rect x="8" y="1" width="1" height="1" fill="#2B2B2B"/>
    <!-- \u5934\u8EAB\u4E00\u4F53\uFF08\u9614\u5634\u8F6E\u5ED3\uFF09 -->
    <g fill="#6FBF4A">
      <rect x="2" y="4" width="9" height="7"/>
      <rect x="1" y="5" width="1" height="5"/>
      <rect x="11" y="5" width="1" height="4"/>
    </g>
    <!-- \u5634\u7EBF\uFF08\u6DF1\u7EFF\u6A2A\u7EBF\uFF09 -->
    <rect x="4" y="7" width="6" height="1" fill="#4C8F33"/>
    <!-- \u9F3B\u5B54 -->
    <rect x="5" y="5" width="1" height="1" fill="#4C8F33"/>
    <rect x="8" y="5" width="1" height="1" fill="#4C8F33"/>
    <!-- \u8179\u90E8\uFF08\u6D45\u7EFF\u767D\uFF09 -->
    <rect x="4" y="9" width="5" height="2" fill="#DFF0D0"/>
    <!-- \u540E\u817F\uFF08\u8E72\u59FF\uFF0C\u6DF1\u7EFF\uFF09 -->
    <g fill="#4C8F33">
      <rect x="1" y="10" width="1" height="3"/>
      <rect x="11" y="10" width="1" height="3"/>
    </g>
    <!-- \u524D\u811A\u638C -->
    <rect x="3" y="13" width="2" height="1" fill="#4C8F33"/>
    <rect x="8" y="13" width="2" height="1" fill="#4C8F33"/>
  </svg>`},blinkOverlay(){return'<rect x="2" y="1" width="3" height="3" fill="#6FBF4A"/><rect x="7" y="1" width="3" height="3" fill="#6FBF4A"/><rect x="3" y="2" width="1" height="1" fill="#4C8F33"/><rect x="8" y="2" width="1" height="1" fill="#4C8F33"/>'}};var ke={duck:Ze,cat:Ke,dog:We,rabbit:Qe,fox:et,hamster:tt,panda:it,frog:rt},$t="duck",Di=Object.values(ke);function Ee(t){return(t!=null?ke[t]:void 0)??ke[$t]}var Ut=214748e4,Yt=150,Gt=`
  :host {
    position: fixed;
    right: ${j}px;
    left: auto;
    bottom: ${j}px;
    z-index: ${Ut};
    width: var(--buddy-size, ${se}px);
    height: var(--buddy-size, ${se}px);
    line-height: 0;
    user-select: none;
    -webkit-user-select: none;
    cursor: grab;
  }
  :host([side='left']) {
    right: auto;
    left: ${j}px;
  }
  :host([dragging]) {
    cursor: grabbing;
  }
  .pet {
    width: 100%;
    height: 100%;
    /* \u672C\u4F53\u6C38\u4E0D\u643A\u5E26 animation/transition\uFF08PRD \xA74.4 \u6027\u80FD\u7EA2\u7EBF\uFF09 */
    image-rendering: pixelated;
  }
  .pet-wrap { position: relative; width: 100%; height: 100%; }
  .lids {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
  }
  :host([data-blink='on']) .lids {
    /* \u5F85\u673A\u7728\u773C\uFF08\u8BBE\u7F6E\u9879\uFF0C\u9ED8\u8BA4\u5173\uFF09\uFF1A\u7EAF CSS \u52A8\u753B\uFF0C\u65E0 JS \u5FAA\u73AF\uFF08\u6027\u80FD\u7EA2\u7EBF\uFF09 */
    animation: buddy-blink 4.6s linear infinite;
  }
  @keyframes buddy-blink {
    0%, 91%, 100% { opacity: 0; }
    93%, 95% { opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    :host([data-blink='on']) .lids { animation: none; } /* \u4E0E T2.2 \u4E00\u81F4 */
  }
  .badge {
    position: absolute;
    /* \u5934\u9876\u6B63\u4E0A\u65B9\u5C45\u4E2D\uFF08\u4EA7\u54C1\u88C1\u51B3 2026-09-05\uFF0C\u4FEE\u8BA2\u7F8E\u672F\u9700\u6C42\u5355 \xA74.1 \u53F3\u4E0A\u89D2\u65B9\u6848\uFF09\uFF1B
       \u5C3A\u5BF8\u4E3A\u672C\u4F53 50%\uFF0848px \u672C\u4F53\u5BF9\u5E94 24px\uFF0C\u8F83\u539F 55% \u7F29\u5C0F\u7EA6 2px\uFF09 */
    top: -40%; /* \u5B8C\u5168\u60AC\u6D6E\u4E8E\u5934\u9876\u4E0A\u65B9\uFF0C\u4E0D\u906E\u6321\u672C\u4F53 */
    left: 40%; /* \u5934\u90E8\u4E2D\u5FC3\uFF08\u5BA0\u7269\u5934\u5728\u753B\u5E03\u5DE6\u4FA7\uFF09\uFF0C\u975E\u672C\u4F53\u51E0\u4F55\u4E2D\u5FC3 */
    transform: translateX(-50%);
    width: 50%;
    height: 50%;
    opacity: 0;
    transition: opacity ${Yt}ms linear; /* crossfade \u4EC5\u4F5C\u7528\u4E8E\u5FBD\u7AE0 */
    pointer-events: none;
    /* \u4EAE\u8272\u4E3B\u9898\uFF1A\u6DF1\u5E95\u767D\u7B26\uFF08\u5BF9\u6BD4\u5EA6 \u2265 4.5:1\uFF0CT2.2\uFF09 */
    --badge-fg: #ffffff;
    --badge-stroke: #1f2937;
  }
  .badge.visible { opacity: 1; }
  .badge--running { --badge-bg: #2563eb; }
  .badge--input-required { --badge-bg: #b45309; }
  .badge--error { --badge-bg: #dc2626; }
  .badge--success { --badge-bg: #15803d; }
  .badge-bg { fill: var(--badge-bg); stroke: var(--badge-stroke); stroke-width: 1.5; }
  .badge-sym { fill: var(--badge-fg); stroke: var(--badge-fg); }
  /* \u6697\u8272\u4E3B\u9898\uFF1A\u4EAE\u5E95\u6DF1\u7B26\uFF08T2.1\uFF0Cdata-theme \u7531 theme \u5C5E\u6027/auto \u89E3\u6790\u9A71\u52A8\uFF09 */
  :host([data-theme='dark']) .badge {
    --badge-fg: #111827;
    --badge-stroke: #f3f4f6;
  }
  :host([data-theme='dark']) .badge--running { --badge-bg: #60a5fa; }
  :host([data-theme='dark']) .badge--input-required { --badge-bg: #fbbf24; }
  :host([data-theme='dark']) .badge--error { --badge-bg: #f87171; }
  :host([data-theme='dark']) .badge--success { --badge-bg: #4ade80; }
  @media (prefers-reduced-motion: reduce) {
    .badge { transition: none; } /* \u53EF\u8BBF\u95EE\u6027\uFF1A\u51CF\u5F31\u52A8\u6001\u6548\u679C\u65F6\u53D6\u6D88\u8FC7\u6E21\uFF08T2.2\uFF09 */
  }
  /* \u5C4F\u5E55\u9605\u8BFB\u5668 live region\uFF1A\u89C6\u89C9\u9690\u85CF\uFF08T2.2\uFF09 */
  .sr-live {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
`,$,P,H,C,k,v,E,I,K,O,B,W,w,U,Q,ee,Y,G,o,oe,Be,st,de,ot,Ae,dt,Fe,lt,Me,Te,Pe,Z,Ce,De,_e,ht,A=class extends HTMLElement{constructor(){super(...arguments);a(this,o);a(this,$,null);a(this,P,null);a(this,H,null);a(this,C,null);a(this,k,null);a(this,v,null);a(this,E,null);a(this,I,0);a(this,K,"idle");a(this,O,"zh");a(this,B,j);this.onAck=null;a(this,W,()=>{r(this,U)||this.onAck?.()});a(this,w,null);a(this,U,!1);this.onDragEnd=null;this.onContextMenu=null;a(this,Q,e=>{e.preventDefault(),e.stopPropagation(),this.onContextMenu?.({x:e.clientX,y:e.clientY})});a(this,ee,e=>{e.button===0&&(e.preventDefault(),h(this,w,{startY:e.clientY,startBottom:r(this,B),moved:!1}),this.setAttribute("dragging",""),window.addEventListener("mousemove",r(this,Y)),window.addEventListener("mouseup",r(this,G)))});a(this,Y,e=>{if(!r(this,w))return;let n=r(this,w).startY-e.clientY;!r(this,w).moved&&Math.abs(n)>Ve&&(r(this,w).moved=!0),r(this,w).moved&&(h(this,B,we(r(this,w).startBottom+n)),l(this,o,oe).call(this,r(this,B)))});a(this,G,()=>{window.removeEventListener("mousemove",r(this,Y)),window.removeEventListener("mouseup",r(this,G));let e=r(this,w)?.moved===!0;h(this,w,null),this.removeAttribute("dragging"),e&&(h(this,U,!0),setTimeout(()=>h(this,U,!1),0),this.onDragEnd?.(r(this,B)))})}connectedCallback(){if(r(this,$))return;let e=this.attachShadow({mode:"closed"});h(this,$,e);let n=document.createElement("style");n.textContent=Gt;let s=document.createElement("div");s.className="pet-wrap",h(this,P,s),s.innerHTML=l(this,o,Ae).call(this,l(this,o,de).call(this)),h(this,E,[nt(),nt()]),h(this,v,document.createElement("div")),r(this,v).className="sr-live",r(this,v).setAttribute("role","status"),r(this,v).setAttribute("aria-live","polite"),e.append(n,s,...r(this,E),r(this,v)),l(this,o,_e).call(this,l(this,o,Ce).call(this)),l(this,o,Pe).call(this,l(this,o,Me).call(this)),l(this,o,oe).call(this,r(this,B)),l(this,o,Fe).call(this,l(this,o,de).call(this)),l(this,o,ht).call(this),this.addEventListener("click",r(this,W)),this.addEventListener("mousedown",r(this,ee)),this.addEventListener("contextmenu",r(this,Q)),this.dataset.state="idle"}resetPosition(){this.bottomOffset=j}get bottomOffset(){return r(this,B)}set bottomOffset(e){h(this,B,we(e)),l(this,o,oe).call(this,r(this,B))}get lang(){return r(this,O)}set lang(e){this.setAttribute("lang",e)}get blink(){return this.getAttribute("blink")==="on"}set blink(e){this.setAttribute("blink",e?"on":"off")}get side(){return l(this,o,Be).call(this,this.getAttribute("side"))}set side(e){this.setAttribute("side",e)}setState(e){if(!r(this,E)||e===r(this,K))return;let n=r(this,E)[r(this,I)],s=r(this,E)[1-r(this,I)];e==="idle"?n.classList.remove("visible"):(s.querySelector("svg")?.remove(),s.insertAdjacentHTML("afterbegin",Je(e)),s.className=`badge badge--${e}`,s.setAttribute("aria-label",Se[r(this,O)][e]),s.classList.add("visible"),n.classList.remove("visible"),h(this,I,1-r(this,I))),h(this,K,e),this.dataset.state=e,r(this,v)&&(r(this,v).textContent=Se[r(this,O)][e])}attributeChangedCallback(e,n,s){e==="size"&&l(this,o,_e).call(this,l(this,o,De).call(this,s)),e==="theme"&&l(this,o,Pe).call(this,l(this,o,Te).call(this,s)),e==="pet"&&l(this,o,lt).call(this,l(this,o,ot).call(this,s)),e==="side"&&l(this,o,st).call(this,l(this,o,Be).call(this,s)),e==="blink"&&l(this,o,dt).call(this,s==="on"),e==="lang"&&h(this,O,s==="en"?"en":"zh")}get size(){return l(this,o,Ce).call(this)}set size(e){this.setAttribute("size",String(e))}get pet(){return l(this,o,de).call(this).id}set pet(e){this.setAttribute("pet",e)}get theme(){return l(this,o,Me).call(this)}set theme(e){this.setAttribute("theme",e)}__testBadges(){return r(this,E)?[...r(this,E)]:[]}__testWrap(){return r(this,P)}__testPetSvg(){return r(this,P)?.innerHTML??""}__testLiveRegion(){return r(this,v)}destroy(){r(this,C)&&r(this,k)&&r(this,C).removeEventListener("change",r(this,k)),h(this,C,null),h(this,k,null),this.removeEventListener("click",r(this,W)),this.removeEventListener("mousedown",r(this,ee)),this.removeEventListener("contextmenu",r(this,Q)),window.removeEventListener("mousemove",r(this,Y)),window.removeEventListener("mouseup",r(this,G)),this.remove(),h(this,$,null),h(this,E,null),h(this,v,null),h(this,P,null),h(this,H,null)}};$=new WeakMap,P=new WeakMap,H=new WeakMap,C=new WeakMap,k=new WeakMap,v=new WeakMap,E=new WeakMap,I=new WeakMap,K=new WeakMap,O=new WeakMap,B=new WeakMap,W=new WeakMap,w=new WeakMap,U=new WeakMap,Q=new WeakMap,ee=new WeakMap,Y=new WeakMap,G=new WeakMap,o=new WeakSet,oe=function(e){this.style.bottom=`${e}px`},Be=function(e){return e==="left"?"left":"right"},st=function(e){e==="left"?this.setAttribute("data-side","left"):this.removeAttribute("data-side")},de=function(){return r(this,H)??Ee(this.getAttribute("pet"))},ot=function(e){return Ee(e)},Ae=function(e){let n=e.blinkOverlay?`<svg class="lids" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">${e.blinkOverlay()}</svg>`:"";return e.svg()+n},dt=function(e){e?this.setAttribute("data-blink","on"):this.removeAttribute("data-blink")},Fe=function(e){let n=r(this,P)?.querySelector(".lids");if(!n)return;let s=0;for(let g of e.id)s+=g.charCodeAt(0);n.style.animationDelay=`-${s%46*100}ms`},lt=function(e){r(this,H)===e||!r(this,P)||(h(this,H,e),r(this,P).innerHTML=l(this,o,Ae).call(this,e),l(this,o,Fe).call(this,e))},Me=function(){return l(this,o,Te).call(this,this.getAttribute("theme"))},Te=function(e){return e==="light"||e==="dark"?e:"auto"},Pe=function(e){if(r(this,C)&&r(this,k)&&(r(this,C).removeEventListener("change",r(this,k)),h(this,C,null),h(this,k,null)),e!=="auto"){l(this,o,Z).call(this,e);return}let n=window.matchMedia?.("(prefers-color-scheme: dark)");if(!n){l(this,o,Z).call(this,"light");return}h(this,C,n),h(this,k,()=>l(this,o,Z).call(this,n.matches?"dark":"light")),n.addEventListener("change",r(this,k)),l(this,o,Z).call(this,n.matches?"dark":"light")},Z=function(e){e==="dark"?this.setAttribute("data-theme","dark"):this.removeAttribute("data-theme")},Ce=function(){return l(this,o,De).call(this,this.getAttribute("size"))},De=function(e){let n=e===null?NaN:Number(e);return Ge.includes(n)?n:se},_e=function(e){this.style.setProperty("--buddy-size",`${e}px`)},ht=function(){requestAnimationFrame(()=>{if(!this.isConnected)return;let{conflicts:e}=Xe(this.getBoundingClientRect());e.length>0&&console.warn("[dsh-pixel-buddy] \u53F3\u4E0B\u89D2\u68C0\u6D4B\u5230\u5BBF\u4E3B\u60AC\u6D6E\u5143\u7D20\u91CD\u53E0\uFF0C\u9700\u4EA7\u54C1\u88C1\u51B3\u9519\u4F4D\u65B9\u6848\uFF1A",e)})},A.tagName="dsh-pixel-buddy",A.observedAttributes=["size","theme","pet","side","blink","lang"];function nt(){let t=document.createElement("div");return t.className="badge",t}function at(){customElements.get(A.tagName)||customElements.define(A.tagName,A)}var ut={"stream:start":"task-start","stream:end":"task-success","stream:error":"task-error","confirmation:request":"input-required"},ct=new Set(["task-success","task-error"]),Vt=200,Jt=[1e3,2e3,4e3],x,q,R,V,D,N,J,_,X,y,Re,gt,pt,ft,Le,yt,mt,xt,le=class{constructor(i){a(this,y);a(this,x);a(this,q,new Set);a(this,R,new Map);a(this,V,new Map);a(this,D,null);a(this,N,!1);a(this,J,0);a(this,_,null);a(this,X,!1);h(this,x,{warn:(e,n)=>console.warn(e,n),setTimeoutFn:(e,n)=>setTimeout(e,n),clearTimeoutFn:e=>clearTimeout(e),...i})}subscribe(i){return r(this,q).add(i),l(this,y,Re).call(this),()=>{r(this,q).delete(i),r(this,q).size===0&&l(this,y,Le).call(this)}}};x=new WeakMap,q=new WeakMap,R=new WeakMap,V=new WeakMap,D=new WeakMap,N=new WeakMap,J=new WeakMap,_=new WeakMap,X=new WeakMap,y=new WeakSet,Re=function(){if(r(this,D)||r(this,X))return;let i=r(this,x).getApi();if(i){try{l(this,y,pt).call(this,i)}catch(e){r(this,x).warn("[dsh-pixel-buddy] Hook API \u7ED1\u5B9A\u5931\u8D25\uFF0C\u5DF2\u964D\u7EA7\u4E3A\u5F85\u673A",e),h(this,D,null)}return}l(this,y,gt).call(this)},gt=function(){if(r(this,X)||r(this,_)!==null)return;let i=Jt[r(this,J)];if(i===void 0){r(this,x).warn("[dsh-pixel-buddy] Hook API \u4E0D\u53EF\u7528\uFF0C\u5DF2\u9759\u9ED8\u56DE\u9000\u5F85\u673A");return}h(this,J,r(this,J)+1),h(this,_,r(this,x).setTimeoutFn(()=>{h(this,_,null),l(this,y,Re).call(this)},i))},pt=function(i){for(let e of Object.keys(ut)){let n=s=>l(this,y,yt).call(this,e,s);i.on(e,n),r(this,V).set(e,n)}h(this,D,i)},ft=function(){if(r(this,D))for(let[i,e]of r(this,V))try{r(this,D).off(i,e)}catch{}h(this,D,null),r(this,V).clear()},Le=function(){l(this,y,ft).call(this);for(let i of r(this,R).values())r(this,x).clearTimeoutFn(i);r(this,R).clear(),h(this,N,!1),h(this,J,0),r(this,_)!==null&&(r(this,x).clearTimeoutFn(r(this,_)),h(this,_,null))},yt=function(i,e){if(r(this,X))return;let n=ut[i];if(!n)return;let s=r(this,R).get(n);s!==void 0&&r(this,x).clearTimeoutFn(s),r(this,R).set(n,r(this,x).setTimeoutFn(()=>{r(this,R).delete(n),l(this,y,mt).call(this,n)},Vt))},mt=function(i){if(ct.has(i)&&!r(this,N)){r(this,x).warn(`[dsh-pixel-buddy] \u4E22\u5F03\u65E0\u8D77\u59CB\u7684\u7EC8\u6001\u4E8B\u4EF6\uFF1A${i}`);return}i==="task-start"&&h(this,N,!0),ct.has(i)&&h(this,N,!1),l(this,y,xt).call(this,{type:i})},xt=function(i){for(let e of r(this,q))try{e(i)}catch(n){r(this,x).warn("[dsh-pixel-buddy] \u4E8B\u4EF6\u5904\u7406\u5F02\u5E38\uFF0C\u5DF2\u964D\u7EA7\u4E3A\u5F85\u673A",n),l(this,y,Le).call(this);return}};var bt={current:"idle",stickyError:!1,stickyInputRequired:!1,taskActive:!1,timerMs:null};function vt(t,i){switch(i.type){case"user-ack":return Xt(t);case"timer-elapsed":return t.current==="success"||t.current==="running"?{...t,current:"idle",timerMs:null}:{...t,timerMs:null};case"task-start":return Zt(t);case"task-success":case"task-error":case"input-required":return Kt(t,i.type);default:return i}}function Xt(t){return!t.stickyError&&!t.stickyInputRequired?t:{...t,stickyError:!1,stickyInputRequired:!1,current:"idle",timerMs:null}}function Zt(t){let i={...t,taskActive:!0,timerMs:6e5};return i.stickyError?i.current="error":i.stickyInputRequired?i.current="input-required":i.current="running",i}function Kt(t,i){if(!t.taskActive)return t;let e={...t,timerMs:null};switch(i){case"task-error":return e.stickyError=!0,e.taskActive=!1,e.current="error",e.timerMs=null,e;case"input-required":return e.stickyInputRequired=!0,e.stickyError||(e.current="input-required"),e.timerMs=null,e;case"task-success":return e.taskActive=!1,e.stickyError?(e.current="error",e):e.stickyInputRequired?(e.current="input-required",e):(e.current="success",e.timerMs=2500,e);default:return i}}var Wt={schedule:(t,i)=>setTimeout(t,i),cancel:t=>clearTimeout(t)};function wt(t,i,e=Wt){let n=bt,s=null,g=()=>{s!==null&&(e.cancel(s),s=null)},f=M=>{let u=vt(n,M);u!==n&&(n=u,i.setState(u.current),g(),u.timerMs!==null&&(s=e.schedule(()=>{s=null,f({type:"timer-elapsed"})},u.timerMs)))},F=t.subscribe(M=>f(M));return{dispatch:M=>f(M),destroy:()=>{F(),g()}}}function St(t=document.body,i={}){at();let e=document.querySelector(`body > ${A.tagName}`);if(e instanceof A)return{destroy:()=>e.destroy()};let n=document.createElement(A.tagName);t.appendChild(n);let s=i.adapter??new le({getApi:Qt}),g=wt(s,n);return n.onAck=()=>g.dispatch({type:"user-ack"}),{destroy:()=>{n.onAck=null,g.destroy(),n.destroy()}}}function Qt(){return globalThis.dshHooks}var he={zh:{settings:{pet:"\u5BA0\u7269\u5F62\u8C61",side:"\u663E\u793A\u4F4D\u7F6E",showPet:"\u663E\u793A\u5BA0\u7269",blink:"\u5F85\u673A\u7728\u773C\u52A8\u753B",sideRight:"\u53F3\u4FA7",sideLeft:"\u5DE6\u4FA7"},pets:{duck:"\u9E2D\u5B50",cat:"\u732B",dog:"\u72D7",rabbit:"\u5154\u5B50",fox:"\u72D0\u72F8",hamster:"\u4ED3\u9F20",panda:"\u718A\u732B",frog:"\u9752\u86D9"},menu:{pet:"\u5BA0\u7269\u5F62\u8C61",hide:"\u9690\u85CF\u5BA0\u7269",show:"\u663E\u793A\u5BA0\u7269",resetPosition:"\u56DE\u5230\u9ED8\u8BA4\u4F4D\u7F6E",blink:"\u5F85\u673A\u7728\u773C\u52A8\u753B",about:"\u5173\u4E8E",aboutVersion:"dsh-pixel-buddy v0.1.0",aboutTagline:"DSH \u684C\u9762\u5BA0\u7269\u63D2\u4EF6",back:"\u8FD4\u56DE",openSettings:"\u6253\u5F00\u8BBE\u7F6E",newSession:"\u65B0\u5EFA\u4F1A\u8BDD"},states:{idle:"\u4F1A\u8BDD\u7A7A\u95F2",running:"\u4F1A\u8BDD\u8FD0\u884C\u4E2D",inputRequired:"\u4F1A\u8BDD\u9700\u8981\u4EBA\u5DE5\u4ECB\u5165",error:"\u4F1A\u8BDD\u51FA\u73B0\u5F02\u5E38",success:"\u4EFB\u52A1\u6210\u529F\u5B8C\u6210"}},en:{settings:{pet:"Pet",side:"Position",showPet:"Show pet",blink:"Idle blink animation",sideRight:"Right",sideLeft:"Left"},pets:{duck:"Duck",cat:"Cat",dog:"Dog",rabbit:"Rabbit",fox:"Fox",hamster:"Hamster",panda:"Panda",frog:"Frog"},menu:{pet:"Pet",hide:"Hide pet",show:"Show pet",resetPosition:"Reset position",blink:"Idle blink animation",about:"About",aboutVersion:"dsh-pixel-buddy v0.1.0",aboutTagline:"DSH desktop pet plugin",back:"Back",openSettings:"Open settings",newSession:"New session"},states:{idle:"Session idle",running:"Session running",inputRequired:"Input required",error:"Session error",success:"Task completed"}}};function m(t,i,e){return(he[t]??he.zh)[i][e]??e}function ae(t,i){return(he[t]??he.zh).pets[i]??i}var z,He=class{constructor(){a(this,z,new Set)}dispatch(i){for(let e of r(this,z))e(i)}subscribe(i){return r(this,z).add(i),()=>r(this,z).delete(i)}reset(){r(this,z).clear()}};z=new WeakMap;var Ie=new He;var ei="0.1.0",kt={error:3,"input-required":2,running:1,idle:0};function ti(t){return t?t.promptError!=null?"error":Array.isArray(t.pending)&&t.pending.length>0?"input-required":t.running===!0||t.partial!=null||Array.isArray(t.runningCalls)&&t.runningCalls.length>0?"running":"idle":"idle"}function ii(t,i){let e=s=>Ie.dispatch({type:s}),n=()=>{t!=="running"&&e("task-start")};if(t===null){i==="running"&&e("task-start"),i==="error"&&(e("task-start"),e("task-error")),i==="input-required"&&(e("task-start"),e("input-required"));return}if(t!==i)switch(i){case"running":(t==="error"||t==="input-required")&&e("user-ack"),n();break;case"idle":(t==="error"||t==="input-required")&&e("user-ack"),t==="running"&&e("task-success");break;case"input-required":(t==="error"||t==="input-required")&&e("user-ack"),n(),e("input-required");break;case"error":n(),e("task-error");break}}var Et={statusBySession:new Map,globalPrev:null,update(t,i){this.statusBySession.set(t,i);let e="idle";for(let n of this.statusBySession.values())kt[n]>kt[e]&&(e=n);e!==this.globalPrev&&(ii(this.globalPrev,e),this.globalPrev=e)},remove(t){this.statusBySession.delete(t),this.statusBySession.size===0?this.globalPrev=null:this.update(t,this.statusBySession.values().next().value)}},te=null,Oe=0,b={pet:"duck",visible:!0,side:"right",bottomOffset:16,blink:!1},ze=null,p="zh",ie=null,fe=new Set;function Pt(t){return fe.add(t),()=>fe.delete(t)}function Ct(){let t=document.querySelector("dsh-pixel-buddy");t&&(t.setAttribute("pet",b.pet),t.style.display=b.visible?"":"none",t.setAttribute("side",b.side),t.bottomOffset=b.bottomOffset,t.blink=b.blink)}function ri(t){let{useSession:i,sessionId:e}=t,n=i(ti);return(0,d.useEffect)(()=>{Et.update(e,n)},[e,n]),(0,d.useEffect)(()=>{Oe+=1,te||(te=St(document.body,{adapter:Ie})),Ct();let s=document.querySelector("dsh-pixel-buddy");s&&(s.lang=p);let g=document.querySelector("dsh-pixel-buddy");return g&&(g.onDragEnd=f=>void ze?.set("bottomOffset",f),g.onContextMenu=()=>ai(b.side)),()=>{Oe-=1,Oe===0&&te&&(te.destroy(),te=null,Et.globalPrev=null)}},[]),null}var ni=["slots","settingsScope"];function si(t){let i=t.settingsScope.bind({namespace:"dsh-pixel-buddy"});ze=i,ie=t.settingsScope.bind({namespace:"locale"});let e=()=>{if(!ie)return;let g=ie.getSnapshot().value?.preference==="en"?"en":"zh";if(g!==p){p=g;let f=document.querySelector("dsh-pixel-buddy");f&&(f.lang=p);for(let F of fe)F()}};ie.subscribe(e),window.__dshBuddyLocale=ie,e();let n=()=>{let s=i.getSnapshot();s.value?.pet&&(b.pet=s.value.pet),typeof s.value?.visible=="boolean"&&(b.visible=s.value.visible),(s.value?.side==="left"||s.value?.side==="right")&&(b.side=s.value.side),typeof s.value?.bottomOffset=="number"&&(b.bottomOffset=s.value.bottomOffset),typeof s.value?.blink=="boolean"&&(b.blink=s.value.blink),Ct()};i.subscribe(n),n(),t.slots.inject("settings.general.item",()=>t.slots.register({name:"settings.general.item",id:"dsh-pixel-buddy",order:90},()=>di(i))),t.slots.inject("conversation.session.header.utilities",()=>t.slots.register({name:"conversation.session.header.utilities",id:"dsh-pixel-buddy",order:90,label:"PixelBuddy"},ri))}var ye=["duck","cat","dog","rabbit","fox","hamster","panda","frog"],ue={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",padding:"8px 0",minHeight:"32px"},ce={color:"inherit"},Bt={display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 10px",background:"rgba(127, 127, 127, 0.12)",border:"1px solid rgba(127, 127, 127, 0.25)",borderRadius:"8px",color:"inherit",font:"inherit",fontSize:"13px",cursor:"pointer"},At={opacity:"0.6",fontSize:"10px"};function oi(){for(let t of fe)t()}function Ft(t){let{checked:i,onChange:e}=t;return(0,d.createElement)("button",{type:"button",role:"switch","aria-checked":i,style:{width:"36px",height:"20px",borderRadius:"10px",background:i?"#4C7DFF":"rgba(127, 127, 127, 0.35)",border:"none",padding:"2px",display:"inline-flex",alignItems:"center",cursor:"pointer",transition:"background 150ms linear",justifyContent:i?"flex-end":"flex-start"},onClick:()=>e(!i)},(0,d.createElement)("span",{style:{width:"16px",height:"16px",borderRadius:"50%",background:"#ffffff",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)",transition:"transform 150ms linear"}}))}function di(t){let[,i]=(0,d.useReducer)(u=>u+1,0),[e,n]=(0,d.useState)(!1),[s,g]=(0,d.useState)(!1);(0,d.useEffect)(()=>t.subscribe(i),[t]),(0,d.useEffect)(()=>Pt(i),[]);let f=t.getSnapshot(),F=f.value?.pet??"duck",M=f.value?.visible??!0;return(0,d.createElement)("div",null,(0,d.createElement)("div",{style:ue},(0,d.createElement)("span",{style:ce},m(p,"settings","pet")),(0,d.createElement)(Ne.Menu,{open:e,portal:!0,anchor:(0,d.createElement)("button",{type:"button",style:Bt,"aria-haspopup":"listbox","aria-expanded":e,onClick:()=>n(u=>!u)},(0,d.createElement)("span",null,ae(p,F)),(0,d.createElement)("span",{style:At},"\u25BC")),items:ye.map(u=>({id:u,label:ae(p,u)})),selectedId:F,onSelect:u=>{ye.includes(u)&&t.set("pet",u),n(!1)},onClose:()=>n(!1)})),(0,d.createElement)("div",{style:ue},(0,d.createElement)("span",{style:ce},m(p,"settings","side")),(0,d.createElement)(Ne.Menu,{open:s,portal:!0,anchor:(0,d.createElement)("button",{type:"button",style:Bt,"aria-haspopup":"listbox","aria-expanded":s,onClick:()=>g(u=>!u)},(0,d.createElement)("span",null,m(p,"settings",b.side==="left"?"sideLeft":"sideRight")),(0,d.createElement)("span",{style:At},"\u25BC")),items:["right","left"].map(u=>({id:u,label:m(p,"settings",u==="left"?"sideLeft":"sideRight")})),selectedId:b.side,onSelect:u=>{(u==="left"||u==="right")&&t.set("side",u),g(!1)},onClose:()=>g(!1)})),(0,d.createElement)("div",{style:ue},(0,d.createElement)("span",{style:ce},m(p,"settings","showPet")),(0,d.createElement)(Ft,{checked:M,onChange:u=>{t.set("visible",u)}})),(0,d.createElement)("div",{style:ue},(0,d.createElement)("span",{style:ce},m(p,"settings","blink")),(0,d.createElement)(Ft,{checked:b.blink,onChange:u=>{t.set("blink",u)}})))}var ge=8;function Mt(t){let e=[...(document.querySelector('[role="dialog"]')??document).querySelectorAll("button")];for(let n of t){let s=e.find(g=>g.textContent?.trim()===n);if(s)return s.click(),!0}return!1}function li(t){let{side:i,petRectJson:e,close:n}=t,s=ze,[g,f]=(0,d.useState)("main"),[,F]=(0,d.useReducer)(c=>c+1,0),M=(0,d.useRef)(null);(0,d.useEffect)(()=>s.subscribe(F),[s]),(0,d.useEffect)(()=>Pt(F),[]);let u=s.getSnapshot(),Dt=u.value?.pet??"duck",je=u.value?.visible??!0,$e=u.value?.blink??!1;(0,d.useEffect)(()=>{let c=L=>{L.target?.closest("[data-buddy-menu]")||n()},T=L=>{L.key==="Escape"&&n()};return window.addEventListener("pointerdown",c,!0),window.addEventListener("keydown",T),()=>{window.removeEventListener("pointerdown",c,!0),window.removeEventListener("keydown",T)}},[n]),(0,d.useLayoutEffect)(()=>{let c=M.current;if(!c)return;let T=c.getBoundingClientRect(),L=JSON.parse(e),ne=i==="right"?L.left-T.width-4:L.right+4,me=L.top-T.height-4;ne=Math.min(Math.max(ne,ge),window.innerWidth-T.width-ge),me=Math.min(Math.max(me,ge),window.innerHeight-T.height-ge),c.style.left=`${Math.round(ne)}px`,c.style.top=`${Math.round(me)}px`});let _t={position:"fixed",left:"0px",top:"0px",zIndex:"2147483000"},S=(c,T)=>({id:c,label:T});function Rt(c){if(c==="__pet"){f("pets");return}if(c==="__back"){f("main");return}if(c==="__hide"){s.set("visible",!je),n();return}if(c==="__reset"){document.querySelector("dsh-pixel-buddy")?.resetPosition(),s.set("bottomOffset",16),n();return}if(c==="__blink"){s.set("blink",!$e),n();return}if(c==="__settings"){n(),setTimeout(()=>Mt(["\u8BBE\u7F6E","Settings"]),50);return}if(c==="__new"){n(),setTimeout(()=>Mt(["\u65B0\u5EFA\u4F1A\u8BDD","New session","\u65B0\u4F1A\u8BDD"]),50);return}if(c==="__about"){f("about");return}ye.includes(c)&&(s.set("pet",c),n())}let re,Ue;return g==="pets"?(re=[...ye.map(c=>S(c,ae(p,c))),S("__back",m(p,"menu","back"))],Ue=Dt):g==="about"?re=[S("version",ei+" \xB7 "+m(p,"menu","aboutTagline")),S("__back",m(p,"menu","back"))]:re=[S("__pet",m(p,"menu","pet")+" \u25B8"),S("__hide",m(p,"menu",je?"hide":"show")),S("__reset",m(p,"menu","resetPosition")),S("__blink",m(p,"menu","blink")+($e?" \u2713":"")),S("__settings",m(p,"menu","openSettings")),S("__new",m(p,"menu","newSession")),S("__about",m(p,"menu","about"))],(0,d.createElement)("div",{"data-buddy-menu":"",style:_t},(0,d.createElement)("style",null,hi),(0,d.createElement)("div",{className:"buddy-menu-list",role:"menu",ref:M},re.map(c=>(0,d.createElement)("div",{key:c.id,className:"buddy-menu-item"+(Ue===c.id?" selected":""),role:"menuitem",onClick:()=>Rt(c.id)},c.label))))}var hi=[".buddy-menu-list {","  position: absolute; left: 0; top: 0; min-width: 170px;","  background: #22262e; color: #e8eaed;","  border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 4px;","  box-shadow: 0 6px 24px rgba(0,0,0,0.4); font-size: 13px;","}",".buddy-menu-item { padding: 7px 12px; border-radius: 6px; cursor: pointer; white-space: nowrap; }",".buddy-menu-item:hover { background: rgba(255,255,255,0.08); }",".buddy-menu-item.selected { color: #7ea6ff; }","@media (prefers-color-scheme: light) {","  .buddy-menu-list { background: #ffffff; color: #1f232b; border-color: rgba(0,0,0,0.1); box-shadow: 0 6px 24px rgba(0,0,0,0.15); }","  .buddy-menu-item:hover { background: rgba(0,0,0,0.06); }","  .buddy-menu-item.selected { color: #2563eb; }","}"].join(`
`),qe=null,pe=null;function ai(t){let i=document.querySelector("dsh-pixel-buddy");if(!i)return;let e=i.getBoundingClientRect().toJSON();pe||(pe=document.createElement("div"),document.body.appendChild(pe),qe=(0,Tt.createRoot)(pe));let n=()=>{qe?.render((0,d.createElement)("span",{style:{display:"none"}}))};qe?.render((0,d.createElement)(li,{side:t,petRectJson:JSON.stringify(e),close:n}))}

    return module.exports;
  }
});
