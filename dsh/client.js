window.__ModuleLoader__.load({
  id: "dsh-pixel-buddy",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
"use strict";var ye=Object.defineProperty;var Pt=Object.getOwnPropertyDescriptor;var Tt=Object.getOwnPropertyNames;var Ct=Object.prototype.hasOwnProperty;var ze=t=>{throw TypeError(t)};var Dt=(t,i)=>{for(var e in i)ye(t,e,{get:i[e],enumerable:!0})},Mt=(t,i,e,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Tt(i))!Ct.call(t,s)&&s!==e&&ye(t,s,{get:()=>i[s],enumerable:!(n=Pt(i,s))||n.enumerable});return t};var _t=t=>Mt(ye({},"__esModule",{value:!0}),t);var me=(t,i,e)=>i.has(t)||ze("Cannot "+e);var r=(t,i,e)=>(me(t,i,"read from private field"),e?e.call(t):i.get(t)),a=(t,i,e)=>i.has(t)?ze("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,e),h=(t,i,e,n)=>(me(t,i,"write to private field"),n?n.call(t,e):i.set(t,e),e),l=(t,i,e)=>(me(t,i,"access private method"),e);var ni={};Dt(ni,{apply:()=>Jt,inject:()=>Qt,notifyLangChange:()=>Wt});module.exports=_t(ni);var d=require("react"),Et=require("react-dom/client"),ce=require("@deepseek-ai/dsh-client-ui-primitives");var je=[32,40,48],re=48,N=16,xe=8,$e=3;function be(t,i=window.innerHeight,e=48){let n=Math.max(xe,i-e-xe);return Math.min(n,Math.max(xe,Math.round(t)))}var Lt={running:'<rect x="9" y="9" width="6" height="6"/>',"input-required":'<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">?</text>',error:'<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">!</text>',success:'<path d="M7 12.5 L10.5 16 L17 8.5" stroke-width="2.5" fill="none"/>'},ve={zh:{idle:"\u4F1A\u8BDD\u7A7A\u95F2",running:"\u4F1A\u8BDD\u8FD0\u884C\u4E2D","input-required":"\u4F1A\u8BDD\u9700\u8981\u4EBA\u5DE5\u4ECB\u5165",error:"\u4F1A\u8BDD\u51FA\u73B0\u5F02\u5E38",success:"\u4EFB\u52A1\u6210\u529F\u5B8C\u6210"},en:{idle:"Session idle",running:"Session running","input-required":"Input required",error:"Session error",success:"Task completed"}};function Ye(t){return`<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" class="badge-bg"/>
    <g class="badge-sym">${Lt[t]}</g>
  </svg>`}function Ue(t,i=document){let e=[],n=i.querySelectorAll("body *");for(let s of n){if(s.tagName==="DSH-PIXEL-BUDDY"||s.closest?.("dsh-pixel-buddy"))continue;let c=getComputedStyle(s).position;if(c!=="fixed"&&c!=="sticky")continue;let g=s.getBoundingClientRect();if(g.width===0||g.height===0)continue;g.left<t.right&&g.right>t.left&&g.top<t.bottom&&g.bottom>t.top&&e.push(Rt(s))}return{conflicts:e}}function Rt(t){let i=t.id?`#${t.id}`:"",e=t.classList.length?`.${[...t.classList].slice(0,2).join(".")}`:"";return`${t.tagName.toLowerCase()}${i}${e}`}var Ge={id:"duck",label:"\u9E2D\u5B50",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="6" y="4" width="1" height="2" fill="#FFD966"/>'}};var Ve={id:"cat",label:"\u732B",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="4" width="1" height="2" fill="#9AA0A8"/><rect x="8" y="4" width="1" height="2" fill="#9AA0A8"/><rect x="4" y="5" width="1" height="1" fill="#6E747C"/><rect x="8" y="5" width="1" height="1" fill="#6E747C"/>'}};var Xe={id:"dog",label:"\u72D7",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="5" width="1" height="2" fill="#B98A5A"/><rect x="8" y="5" width="1" height="2" fill="#B98A5A"/><rect x="4" y="6" width="1" height="1" fill="#8A5F38"/><rect x="8" y="6" width="1" height="1" fill="#8A5F38"/>'}};var Ze={id:"rabbit",label:"\u5154\u5B50",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="6" width="1" height="1" fill="#F5F7FA"/><rect x="8" y="6" width="1" height="1" fill="#F5F7FA"/><rect x="4" y="6" width="1" height="1" fill="#C9CDD3"/><rect x="8" y="6" width="1" height="1" fill="#C9CDD3"/>'}};var Ke={id:"fox",label:"\u72D0\u72F8",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="4" width="1" height="1" fill="#E8873A"/><rect x="8" y="4" width="1" height="1" fill="#E8873A"/><rect x="4" y="4" width="1" height="1" fill="#C96F1F"/><rect x="8" y="4" width="1" height="1" fill="#C96F1F"/>'}};var Qe={id:"hamster",label:"\u4ED3\u9F20",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="5" width="1" height="1" fill="#D8A25E"/><rect x="8" y="5" width="1" height="1" fill="#D8A25E"/><rect x="4" y="5" width="1" height="1" fill="#8A5F38"/><rect x="8" y="5" width="1" height="1" fill="#8A5F38"/>'}};var Je={id:"panda",label:"\u718A\u732B",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="3" y="4" width="1" height="1" fill="#2B2B2B"/><rect x="8" y="5" width="1" height="1" fill="#2B2B2B"/>'}};var We={id:"frog",label:"\u9752\u86D9",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="2" y="1" width="3" height="3" fill="#6FBF4A"/><rect x="7" y="1" width="3" height="3" fill="#6FBF4A"/><rect x="3" y="2" width="1" height="1" fill="#4C8F33"/><rect x="8" y="2" width="1" height="1" fill="#4C8F33"/>'}};var we={duck:Ge,cat:Ve,dog:Xe,rabbit:Ze,fox:Ke,hamster:Qe,panda:Je,frog:We},Ht="duck",Ai=Object.values(we);function Se(t){return(t!=null?we[t]:void 0)??we[Ht]}var It=214748e4,Ot=150,qt=`
  :host {
    position: fixed;
    right: ${N}px;
    left: auto;
    bottom: ${N}px;
    z-index: ${It};
    width: var(--buddy-size, ${re}px);
    height: var(--buddy-size, ${re}px);
    line-height: 0;
    user-select: none;
    -webkit-user-select: none;
    cursor: grab;
  }
  :host([side='left']) {
    right: auto;
    left: ${N}px;
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
    transition: opacity ${Ot}ms linear; /* crossfade \u4EC5\u4F5C\u7528\u4E8E\u5FBD\u7AE0 */
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
`,z,P,L,T,B,v,E,R,K,H,A,Q,w,j,J,W,$,Y,o,ne,ke,tt,se,it,Be,rt,Ee,nt,Ae,Fe,Pe,Z,Te,Ce,De,st,F=class extends HTMLElement{constructor(){super(...arguments);a(this,o);a(this,z,null);a(this,P,null);a(this,L,null);a(this,T,null);a(this,B,null);a(this,v,null);a(this,E,null);a(this,R,0);a(this,K,"idle");a(this,H,"zh");a(this,A,N);this.onAck=null;a(this,Q,()=>{r(this,j)||this.onAck?.()});a(this,w,null);a(this,j,!1);this.onDragEnd=null;this.onContextMenu=null;a(this,J,e=>{e.preventDefault(),e.stopPropagation(),this.onContextMenu?.({x:e.clientX,y:e.clientY})});a(this,W,e=>{e.button===0&&(e.preventDefault(),h(this,w,{startY:e.clientY,startBottom:r(this,A),moved:!1}),this.setAttribute("dragging",""),window.addEventListener("mousemove",r(this,$)),window.addEventListener("mouseup",r(this,Y)))});a(this,$,e=>{if(!r(this,w))return;let n=r(this,w).startY-e.clientY;!r(this,w).moved&&Math.abs(n)>$e&&(r(this,w).moved=!0),r(this,w).moved&&(h(this,A,be(r(this,w).startBottom+n)),l(this,o,ne).call(this,r(this,A)))});a(this,Y,()=>{window.removeEventListener("mousemove",r(this,$)),window.removeEventListener("mouseup",r(this,Y));let e=r(this,w)?.moved===!0;h(this,w,null),this.removeAttribute("dragging"),e&&(h(this,j,!0),setTimeout(()=>h(this,j,!1),0),this.onDragEnd?.(r(this,A)))})}connectedCallback(){if(r(this,z))return;let e=this.attachShadow({mode:"closed"});h(this,z,e);let n=document.createElement("style");n.textContent=qt;let s=document.createElement("div");s.className="pet-wrap",h(this,P,s),s.innerHTML=l(this,o,Be).call(this,l(this,o,se).call(this)),h(this,E,[et(),et()]),h(this,v,document.createElement("div")),r(this,v).className="sr-live",r(this,v).setAttribute("role","status"),r(this,v).setAttribute("aria-live","polite"),e.append(n,s,...r(this,E),r(this,v)),l(this,o,De).call(this,l(this,o,Te).call(this)),l(this,o,Pe).call(this,l(this,o,Ae).call(this)),l(this,o,ne).call(this,r(this,A)),l(this,o,Ee).call(this,l(this,o,se).call(this)),l(this,o,st).call(this),this.addEventListener("click",r(this,Q)),this.addEventListener("mousedown",r(this,W)),this.addEventListener("contextmenu",r(this,J)),this.dataset.state="idle"}resetPosition(){this.bottomOffset=N}get bottomOffset(){return r(this,A)}set bottomOffset(e){h(this,A,be(e)),l(this,o,ne).call(this,r(this,A))}get lang(){return r(this,H)}set lang(e){this.setAttribute("lang",e)}get blink(){return this.getAttribute("blink")==="on"}set blink(e){this.setAttribute("blink",e?"on":"off")}get side(){return l(this,o,ke).call(this,this.getAttribute("side"))}set side(e){this.setAttribute("side",e)}setState(e){if(!r(this,E)||e===r(this,K))return;let n=r(this,E)[r(this,R)],s=r(this,E)[1-r(this,R)];e==="idle"?n.classList.remove("visible"):(s.querySelector("svg")?.remove(),s.insertAdjacentHTML("afterbegin",Ye(e)),s.className=`badge badge--${e}`,s.setAttribute("aria-label",ve[r(this,H)][e]),s.classList.add("visible"),n.classList.remove("visible"),h(this,R,1-r(this,R))),h(this,K,e),this.dataset.state=e,r(this,v)&&(r(this,v).textContent=ve[r(this,H)][e])}attributeChangedCallback(e,n,s){e==="size"&&l(this,o,De).call(this,l(this,o,Ce).call(this,s)),e==="theme"&&l(this,o,Pe).call(this,l(this,o,Fe).call(this,s)),e==="pet"&&l(this,o,nt).call(this,l(this,o,it).call(this,s)),e==="side"&&l(this,o,tt).call(this,l(this,o,ke).call(this,s)),e==="blink"&&l(this,o,rt).call(this,s==="on"),e==="lang"&&h(this,H,s==="en"?"en":"zh")}get size(){return l(this,o,Te).call(this)}set size(e){this.setAttribute("size",String(e))}get pet(){return l(this,o,se).call(this).id}set pet(e){this.setAttribute("pet",e)}get theme(){return l(this,o,Ae).call(this)}set theme(e){this.setAttribute("theme",e)}__testBadges(){return r(this,E)?[...r(this,E)]:[]}__testWrap(){return r(this,P)}__testPetSvg(){return r(this,P)?.innerHTML??""}__testLiveRegion(){return r(this,v)}destroy(){r(this,T)&&r(this,B)&&r(this,T).removeEventListener("change",r(this,B)),h(this,T,null),h(this,B,null),this.removeEventListener("click",r(this,Q)),this.removeEventListener("mousedown",r(this,W)),this.removeEventListener("contextmenu",r(this,J)),window.removeEventListener("mousemove",r(this,$)),window.removeEventListener("mouseup",r(this,Y)),this.remove(),h(this,z,null),h(this,E,null),h(this,v,null),h(this,P,null),h(this,L,null)}};z=new WeakMap,P=new WeakMap,L=new WeakMap,T=new WeakMap,B=new WeakMap,v=new WeakMap,E=new WeakMap,R=new WeakMap,K=new WeakMap,H=new WeakMap,A=new WeakMap,Q=new WeakMap,w=new WeakMap,j=new WeakMap,J=new WeakMap,W=new WeakMap,$=new WeakMap,Y=new WeakMap,o=new WeakSet,ne=function(e){this.style.bottom=`${e}px`},ke=function(e){return e==="left"?"left":"right"},tt=function(e){e==="left"?this.setAttribute("data-side","left"):this.removeAttribute("data-side")},se=function(){return r(this,L)??Se(this.getAttribute("pet"))},it=function(e){return Se(e)},Be=function(e){let n=e.blinkOverlay?`<svg class="lids" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">${e.blinkOverlay()}</svg>`:"";return e.svg()+n},rt=function(e){e?this.setAttribute("data-blink","on"):this.removeAttribute("data-blink")},Ee=function(e){let n=r(this,P)?.querySelector(".lids");if(!n)return;let s=0;for(let c of e.id)s+=c.charCodeAt(0);n.style.animationDelay=`-${s%46*100}ms`},nt=function(e){r(this,L)===e||!r(this,P)||(h(this,L,e),r(this,P).innerHTML=l(this,o,Be).call(this,e),l(this,o,Ee).call(this,e))},Ae=function(){return l(this,o,Fe).call(this,this.getAttribute("theme"))},Fe=function(e){return e==="light"||e==="dark"?e:"auto"},Pe=function(e){if(r(this,T)&&r(this,B)&&(r(this,T).removeEventListener("change",r(this,B)),h(this,T,null),h(this,B,null)),e!=="auto"){l(this,o,Z).call(this,e);return}let n=window.matchMedia?.("(prefers-color-scheme: dark)");if(!n){l(this,o,Z).call(this,"light");return}h(this,T,n),h(this,B,()=>l(this,o,Z).call(this,n.matches?"dark":"light")),n.addEventListener("change",r(this,B)),l(this,o,Z).call(this,n.matches?"dark":"light")},Z=function(e){e==="dark"?this.setAttribute("data-theme","dark"):this.removeAttribute("data-theme")},Te=function(){return l(this,o,Ce).call(this,this.getAttribute("size"))},Ce=function(e){let n=e===null?NaN:Number(e);return je.includes(n)?n:re},De=function(e){this.style.setProperty("--buddy-size",`${e}px`)},st=function(){requestAnimationFrame(()=>{if(!this.isConnected)return;let{conflicts:e}=Ue(this.getBoundingClientRect());e.length>0&&console.warn("[dsh-pixel-buddy] \u53F3\u4E0B\u89D2\u68C0\u6D4B\u5230\u5BBF\u4E3B\u60AC\u6D6E\u5143\u7D20\u91CD\u53E0\uFF0C\u9700\u4EA7\u54C1\u88C1\u51B3\u9519\u4F4D\u65B9\u6848\uFF1A",e)})},F.tagName="dsh-pixel-buddy",F.observedAttributes=["size","theme","pet","side","blink","lang"];function et(){let t=document.createElement("div");return t.className="badge",t}function ot(){customElements.get(F.tagName)||customElements.define(F.tagName,F)}var lt={"stream:start":"task-start","stream:end":"task-success","stream:error":"task-error","confirmation:request":"input-required"},dt=new Set(["task-success","task-error"]),Nt=200,zt=[1e3,2e3,4e3],x,I,_,U,D,O,G,M,V,y,Me,ht,at,ut,_e,ct,gt,pt,oe=class{constructor(i){a(this,y);a(this,x);a(this,I,new Set);a(this,_,new Map);a(this,U,new Map);a(this,D,null);a(this,O,!1);a(this,G,0);a(this,M,null);a(this,V,!1);h(this,x,{warn:(e,n)=>console.warn(e,n),setTimeoutFn:(e,n)=>setTimeout(e,n),clearTimeoutFn:e=>clearTimeout(e),...i})}subscribe(i){return r(this,I).add(i),l(this,y,Me).call(this),()=>{r(this,I).delete(i),r(this,I).size===0&&l(this,y,_e).call(this)}}};x=new WeakMap,I=new WeakMap,_=new WeakMap,U=new WeakMap,D=new WeakMap,O=new WeakMap,G=new WeakMap,M=new WeakMap,V=new WeakMap,y=new WeakSet,Me=function(){if(r(this,D)||r(this,V))return;let i=r(this,x).getApi();if(i){try{l(this,y,at).call(this,i)}catch(e){r(this,x).warn("[dsh-pixel-buddy] Hook API \u7ED1\u5B9A\u5931\u8D25\uFF0C\u5DF2\u964D\u7EA7\u4E3A\u5F85\u673A",e),h(this,D,null)}return}l(this,y,ht).call(this)},ht=function(){if(r(this,V)||r(this,M)!==null)return;let i=zt[r(this,G)];if(i===void 0){r(this,x).warn("[dsh-pixel-buddy] Hook API \u4E0D\u53EF\u7528\uFF0C\u5DF2\u9759\u9ED8\u56DE\u9000\u5F85\u673A");return}h(this,G,r(this,G)+1),h(this,M,r(this,x).setTimeoutFn(()=>{h(this,M,null),l(this,y,Me).call(this)},i))},at=function(i){for(let e of Object.keys(lt)){let n=s=>l(this,y,ct).call(this,e,s);i.on(e,n),r(this,U).set(e,n)}h(this,D,i)},ut=function(){if(r(this,D))for(let[i,e]of r(this,U))try{r(this,D).off(i,e)}catch{}h(this,D,null),r(this,U).clear()},_e=function(){l(this,y,ut).call(this);for(let i of r(this,_).values())r(this,x).clearTimeoutFn(i);r(this,_).clear(),h(this,O,!1),h(this,G,0),r(this,M)!==null&&(r(this,x).clearTimeoutFn(r(this,M)),h(this,M,null))},ct=function(i,e){if(r(this,V))return;let n=lt[i];if(!n)return;let s=r(this,_).get(n);s!==void 0&&r(this,x).clearTimeoutFn(s),r(this,_).set(n,r(this,x).setTimeoutFn(()=>{r(this,_).delete(n),l(this,y,gt).call(this,n)},Nt))},gt=function(i){if(dt.has(i)&&!r(this,O)){r(this,x).warn(`[dsh-pixel-buddy] \u4E22\u5F03\u65E0\u8D77\u59CB\u7684\u7EC8\u6001\u4E8B\u4EF6\uFF1A${i}`);return}i==="task-start"&&h(this,O,!0),dt.has(i)&&h(this,O,!1),l(this,y,pt).call(this,{type:i})},pt=function(i){for(let e of r(this,I))try{e(i)}catch(n){r(this,x).warn("[dsh-pixel-buddy] \u4E8B\u4EF6\u5904\u7406\u5F02\u5E38\uFF0C\u5DF2\u964D\u7EA7\u4E3A\u5F85\u673A",n),l(this,y,_e).call(this);return}};var ft={current:"idle",stickyError:!1,stickyInputRequired:!1,taskActive:!1,timerMs:null};function yt(t,i){switch(i.type){case"user-ack":return jt(t);case"timer-elapsed":return t.current==="success"||t.current==="running"?{...t,current:"idle",timerMs:null}:{...t,timerMs:null};case"task-start":return $t(t);case"task-success":case"task-error":case"input-required":return Yt(t,i.type);default:return i}}function jt(t){return!t.stickyError&&!t.stickyInputRequired?t:{...t,stickyError:!1,stickyInputRequired:!1,current:"idle",timerMs:null}}function $t(t){let i={...t,taskActive:!0,timerMs:6e5};return i.stickyError?i.current="error":i.stickyInputRequired?i.current="input-required":i.current="running",i}function Yt(t,i){if(!t.taskActive)return t;let e={...t,timerMs:null};switch(i){case"task-error":return e.stickyError=!0,e.taskActive=!1,e.current="error",e.timerMs=null,e;case"input-required":return e.stickyInputRequired=!0,e.stickyError||(e.current="input-required"),e.timerMs=null,e;case"task-success":return e.taskActive=!1,e.stickyError?(e.current="error",e):e.stickyInputRequired?(e.current="input-required",e):(e.current="success",e.timerMs=2500,e);default:return i}}var Ut={schedule:(t,i)=>setTimeout(t,i),cancel:t=>clearTimeout(t)};function mt(t,i,e=Ut){let n=ft,s=null,c=()=>{s!==null&&(e.cancel(s),s=null)},g=C=>{let u=yt(n,C);u!==n&&(n=u,i.setState(u.current),c(),u.timerMs!==null&&(s=e.schedule(()=>{s=null,g({type:"timer-elapsed"})},u.timerMs)))},S=t.subscribe(C=>g(C));return{dispatch:C=>g(C),destroy:()=>{S(),c()}}}function xt(t=document.body,i={}){ot();let e=document.querySelector(`body > ${F.tagName}`);if(e instanceof F)return{destroy:()=>e.destroy()};let n=document.createElement(F.tagName);t.appendChild(n);let s=i.adapter??new oe({getApi:Gt}),c=mt(s,n);return n.onAck=()=>c.dispatch({type:"user-ack"}),{destroy:()=>{n.onAck=null,c.destroy(),n.destroy()}}}function Gt(){return globalThis.dshHooks}var le={zh:{settings:{pet:"\u5BA0\u7269\u5F62\u8C61",side:"\u663E\u793A\u4F4D\u7F6E",showPet:"\u663E\u793A\u5BA0\u7269",blink:"\u5F85\u673A\u7728\u773C\u52A8\u753B",sideRight:"\u53F3\u4FA7",sideLeft:"\u5DE6\u4FA7"},pets:{duck:"\u9E2D\u5B50",cat:"\u732B",dog:"\u72D7",rabbit:"\u5154\u5B50",fox:"\u72D0\u72F8",hamster:"\u4ED3\u9F20",panda:"\u718A\u732B",frog:"\u9752\u86D9"},menu:{pet:"\u5BA0\u7269\u5F62\u8C61",hide:"\u9690\u85CF\u5BA0\u7269",show:"\u663E\u793A\u5BA0\u7269",resetPosition:"\u56DE\u5230\u9ED8\u8BA4\u4F4D\u7F6E",blink:"\u5F85\u673A\u7728\u773C\u52A8\u753B",about:"\u5173\u4E8E",aboutVersion:"dsh-pixel-buddy v0.1.0",aboutTagline:"DSH \u684C\u9762\u5BA0\u7269\u63D2\u4EF6",back:"\u8FD4\u56DE",openSettings:"\u6253\u5F00\u8BBE\u7F6E",newSession:"\u65B0\u5EFA\u4F1A\u8BDD"},states:{idle:"\u4F1A\u8BDD\u7A7A\u95F2",running:"\u4F1A\u8BDD\u8FD0\u884C\u4E2D",inputRequired:"\u4F1A\u8BDD\u9700\u8981\u4EBA\u5DE5\u4ECB\u5165",error:"\u4F1A\u8BDD\u51FA\u73B0\u5F02\u5E38",success:"\u4EFB\u52A1\u6210\u529F\u5B8C\u6210"}},en:{settings:{pet:"Pet",side:"Position",showPet:"Show pet",blink:"Idle blink animation",sideRight:"Right",sideLeft:"Left"},pets:{duck:"Duck",cat:"Cat",dog:"Dog",rabbit:"Rabbit",fox:"Fox",hamster:"Hamster",panda:"Panda",frog:"Frog"},menu:{pet:"Pet",hide:"Hide pet",show:"Show pet",resetPosition:"Reset position",blink:"Idle blink animation",about:"About",aboutVersion:"dsh-pixel-buddy v0.1.0",aboutTagline:"DSH desktop pet plugin",back:"Back",openSettings:"Open settings",newSession:"New session"},states:{idle:"Session idle",running:"Session running",inputRequired:"Input required",error:"Session error",success:"Task completed"}}};function m(t,i,e){return(le[t]??le.zh)[i][e]??e}function de(t,i){return(le[t]??le.zh).pets[i]??i}var q,Le=class{constructor(){a(this,q,new Set)}dispatch(i){for(let e of r(this,q))e(i)}subscribe(i){return r(this,q).add(i),()=>r(this,q).delete(i)}reset(){r(this,q).clear()}};q=new WeakMap;var Re=new Le;var Vt="0.1.0",bt={error:3,"input-required":2,running:1,idle:0};function Xt(t){return t?t.promptError!=null?"error":Array.isArray(t.pending)&&t.pending.length>0?"input-required":t.running===!0||t.partial!=null||Array.isArray(t.runningCalls)&&t.runningCalls.length>0?"running":"idle":"idle"}function Zt(t,i){let e=s=>Re.dispatch({type:s}),n=()=>{t!=="running"&&e("task-start")};if(t===null){i==="running"&&e("task-start"),i==="error"&&(e("task-start"),e("task-error")),i==="input-required"&&(e("task-start"),e("input-required"));return}if(t!==i)switch(i){case"running":(t==="error"||t==="input-required")&&e("user-ack"),n();break;case"idle":(t==="error"||t==="input-required")&&e("user-ack"),t==="running"&&e("task-success");break;case"input-required":(t==="error"||t==="input-required")&&e("user-ack"),n(),e("input-required");break;case"error":n(),e("task-error");break}}var vt={statusBySession:new Map,globalPrev:null,update(t,i){this.statusBySession.set(t,i);let e="idle";for(let n of this.statusBySession.values())bt[n]>bt[e]&&(e=n);e!==this.globalPrev&&(Zt(this.globalPrev,e),this.globalPrev=e)},remove(t){this.statusBySession.delete(t),this.statusBySession.size===0?this.globalPrev=null:this.update(t,this.statusBySession.values().next().value)}},ee=null,He=0,b={pet:"duck",visible:!0,side:"right",bottomOffset:16,blink:!1},Oe=null,p="zh",te=null,ge=new Set;function At(t){return ge.add(t),()=>ge.delete(t)}function Ft(){let t=document.querySelector("dsh-pixel-buddy");t&&(t.setAttribute("pet",b.pet),t.style.display=b.visible?"":"none",t.setAttribute("side",b.side),t.bottomOffset=b.bottomOffset,t.blink=b.blink)}function Kt(t){let{useSession:i,sessionId:e}=t,n=i(Xt);return(0,d.useEffect)(()=>{vt.update(e,n)},[e,n]),(0,d.useEffect)(()=>{He+=1,ee||(ee=xt(document.body,{adapter:Re})),Ft();let s=document.querySelector("dsh-pixel-buddy");s&&(s.lang=p);let c=document.querySelector("dsh-pixel-buddy");return c&&(c.onDragEnd=g=>void Oe?.set("bottomOffset",g),c.onContextMenu=g=>ri(g)),()=>{He-=1,He===0&&ee&&(ee.destroy(),ee=null,vt.globalPrev=null)}},[]),null}var Qt=["slots","settingsScope"];function Jt(t){let i=t.settingsScope.bind({namespace:"dsh-pixel-buddy"});Oe=i,te=t.settingsScope.bind({namespace:"locale"});let e=()=>{if(!te)return;let c=te.getSnapshot().value?.preference==="en"?"en":"zh";if(c!==p){p=c;let g=document.querySelector("dsh-pixel-buddy");g&&(g.lang=p);for(let S of ge)S()}};te.subscribe(e),window.__dshBuddyLocale=te,e();let n=()=>{let s=i.getSnapshot();s.value?.pet&&(b.pet=s.value.pet),typeof s.value?.visible=="boolean"&&(b.visible=s.value.visible),(s.value?.side==="left"||s.value?.side==="right")&&(b.side=s.value.side),typeof s.value?.bottomOffset=="number"&&(b.bottomOffset=s.value.bottomOffset),typeof s.value?.blink=="boolean"&&(b.blink=s.value.blink),Ft()};i.subscribe(n),n(),t.slots.inject("settings.general.item",()=>t.slots.register({name:"settings.general.item",id:"dsh-pixel-buddy",order:90},()=>ei(i))),t.slots.inject("conversation.session.header.utilities",()=>t.slots.register({name:"conversation.session.header.utilities",id:"dsh-pixel-buddy",order:90,label:"PixelBuddy"},Kt))}var pe=["duck","cat","dog","rabbit","fox","hamster","panda","frog"],he={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",padding:"8px 0",minHeight:"32px"},ae={color:"inherit"},wt={display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 10px",background:"rgba(127, 127, 127, 0.12)",border:"1px solid rgba(127, 127, 127, 0.25)",borderRadius:"8px",color:"inherit",font:"inherit",fontSize:"13px",cursor:"pointer"},St={opacity:"0.6",fontSize:"10px"};function Wt(){for(let t of ge)t()}function kt(t){let{checked:i,onChange:e}=t;return(0,d.createElement)("button",{type:"button",role:"switch","aria-checked":i,style:{width:"36px",height:"20px",borderRadius:"10px",background:i?"#4C7DFF":"rgba(127, 127, 127, 0.35)",border:"none",padding:"2px",display:"inline-flex",alignItems:"center",cursor:"pointer",transition:"background 150ms linear",justifyContent:i?"flex-end":"flex-start"},onClick:()=>e(!i)},(0,d.createElement)("span",{style:{width:"16px",height:"16px",borderRadius:"50%",background:"#ffffff",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)",transition:"transform 150ms linear"}}))}function ei(t){let[,i]=(0,d.useReducer)(u=>u+1,0),[e,n]=(0,d.useState)(!1),[s,c]=(0,d.useState)(!1);(0,d.useEffect)(()=>t.subscribe(i),[t]),(0,d.useEffect)(()=>At(i),[]);let g=t.getSnapshot(),S=g.value?.pet??"duck",C=g.value?.visible??!0;return(0,d.createElement)("div",null,(0,d.createElement)("div",{style:he},(0,d.createElement)("span",{style:ae},m(p,"settings","pet")),(0,d.createElement)(ce.Menu,{open:e,portal:!0,anchor:(0,d.createElement)("button",{type:"button",style:wt,"aria-haspopup":"listbox","aria-expanded":e,onClick:()=>n(u=>!u)},(0,d.createElement)("span",null,de(p,S)),(0,d.createElement)("span",{style:St},"\u25BC")),items:pe.map(u=>({id:u,label:de(p,u)})),selectedId:S,onSelect:u=>{pe.includes(u)&&t.set("pet",u),n(!1)},onClose:()=>n(!1)})),(0,d.createElement)("div",{style:he},(0,d.createElement)("span",{style:ae},m(p,"settings","side")),(0,d.createElement)(ce.Menu,{open:s,portal:!0,anchor:(0,d.createElement)("button",{type:"button",style:wt,"aria-haspopup":"listbox","aria-expanded":s,onClick:()=>c(u=>!u)},(0,d.createElement)("span",null,m(p,"settings",b.side==="left"?"sideLeft":"sideRight")),(0,d.createElement)("span",{style:St},"\u25BC")),items:["right","left"].map(u=>({id:u,label:m(p,"settings",u==="left"?"sideLeft":"sideRight")})),selectedId:b.side,onSelect:u=>{(u==="left"||u==="right")&&t.set("side",u),c(!1)},onClose:()=>c(!1)})),(0,d.createElement)("div",{style:he},(0,d.createElement)("span",{style:ae},m(p,"settings","showPet")),(0,d.createElement)(kt,{checked:C,onChange:u=>{t.set("visible",u)}})),(0,d.createElement)("div",{style:he},(0,d.createElement)("span",{style:ae},m(p,"settings","blink")),(0,d.createElement)(kt,{checked:b.blink,onChange:u=>{t.set("blink",u)}})))}var ti={position:"fixed",left:"0px",top:"0px",zIndex:"2147483000"};function Bt(t){let e=[...(document.querySelector('[role="dialog"]')??document).querySelectorAll("button")];for(let n of t){let s=e.find(c=>c.textContent?.trim()===n);if(s)return s.click(),!0}return!1}function ii(t){let i=Oe,{pos:e,close:n}=t,[s,c]=(0,d.useState)("main"),[,g]=(0,d.useReducer)(f=>f+1,0);(0,d.useEffect)(()=>i.subscribe(g),[i]),(0,d.useEffect)(()=>At(g),[]);let S=i.getSnapshot(),C=S.value?.pet??"duck",u=S.value?.visible??!0,qe=S.value?.blink??!1;(0,d.useEffect)(()=>{let f=fe=>{fe.target?.closest("[data-buddy-menu]")||n()},X=fe=>{fe.key==="Escape"&&n()};return window.addEventListener("pointerdown",f,!0),window.addEventListener("keydown",X),()=>{window.removeEventListener("pointerdown",f,!0),window.removeEventListener("keydown",X)}},[n]);let k=(f,X)=>({id:f,label:X}),ie,Ne;return s==="pets"?(ie=[...pe.map(f=>k(f,de(p,f))),k("__back",m(p,"menu","back"))],Ne=C):s==="about"?ie=[k("version",Vt+" \xB7 "+m(p,"menu","aboutTagline")),k("__back",m(p,"menu","back"))]:ie=[k("__pet",m(p,"menu","pet")+" \u25B8"),k("__hide",m(p,"menu",u?"hide":"show")),k("__reset",m(p,"menu","resetPosition")),k("__blink",m(p,"menu","blink")+(qe?" \u2713":"")),k("__settings",m(p,"menu","openSettings")),k("__new",m(p,"menu","newSession")),k("__about",m(p,"menu","about"))],(0,d.createElement)(ce.Menu,{open:!0,portal:!1,anchor:(0,d.createElement)("div",{"data-buddy-menu":"",style:{...ti,left:`${e.x}px`,top:`${e.y}px`}}),items:ie,selectedId:s==="pets"?Ne:void 0,onSelect:f=>{if(f==="__pet"){c("pets");return}if(f==="__back"){c("main");return}if(f==="__hide"){i.set("visible",!u),n();return}if(f==="__reset"){document.querySelector("dsh-pixel-buddy")?.resetPosition(),i.set("bottomOffset",16),n();return}if(f==="__blink"){i.set("blink",!qe),n();return}if(f==="__settings"){n(),setTimeout(()=>Bt(["\u8BBE\u7F6E","Settings"]),50);return}if(f==="__new"){n(),setTimeout(()=>Bt(["\u65B0\u5EFA\u4F1A\u8BDD","New session","\u65B0\u4F1A\u8BDD"]),50);return}if(f==="__about"){c("about");return}pe.includes(f)&&(i.set("pet",f),n())},onClose:n})}var Ie=null,ue=null;function ri(t){ue||(ue=document.createElement("div"),document.body.appendChild(ue),Ie=(0,Et.createRoot)(ue));let i=()=>{Ie?.render((0,d.createElement)("span",{style:{display:"none"}}))};Ie?.render((0,d.createElement)(ii,{pos:t,close:i}))}

    return module.exports;
  }
});
