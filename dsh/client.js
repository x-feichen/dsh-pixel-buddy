window.__ModuleLoader__.load({
  id: "dsh-pixel-buddy",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
"use strict";var rt=Object.defineProperty;var ue=Object.getOwnPropertyDescriptor;var ge=Object.getOwnPropertyNames;var fe=Object.prototype.hasOwnProperty;var kt=e=>{throw TypeError(e)};var pe=(e,i)=>{for(var t in i)rt(e,t,{get:i[t],enumerable:!0})},ye=(e,i,t,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of ge(i))!fe.call(e,s)&&s!==t&&rt(e,s,{get:()=>i[s],enumerable:!(n=ue(i,s))||n.enumerable});return e};var me=e=>ye(rt({},"__esModule",{value:!0}),e);var nt=(e,i,t)=>i.has(e)||kt("Cannot "+t);var r=(e,i,t)=>(nt(e,i,"read from private field"),t?t.call(e):i.get(e)),l=(e,i,t)=>i.has(e)?kt("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,t),d=(e,i,t,n)=>(nt(e,i,"write to private field"),n?n.call(e,t):i.set(e,t),t),h=(e,i,t)=>(nt(e,i,"access private method"),t);var Ie={};pe(Ie,{apply:()=>_e,inject:()=>Re});module.exports=me(Ie);var a=require("react"),Et=require("@deepseek-ai/dsh-client-ui-primitives");var At=[32,40,48],Q=48,Y=16,st=8,Ft=3;function ot(e,i=window.innerHeight,t=48){let n=Math.max(st,i-t-st);return Math.min(n,Math.max(st,Math.round(e)))}var xe={running:'<rect x="9" y="9" width="6" height="6"/>',"input-required":'<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">?</text>',error:'<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">!</text>',success:'<path d="M7 12.5 L10.5 16 L17 8.5" stroke-width="2.5" fill="none"/>'},ht={idle:"\u4F1A\u8BDD\u7A7A\u95F2",running:"\u4F1A\u8BDD\u8FD0\u884C\u4E2D","input-required":"\u4F1A\u8BDD\u9700\u8981\u4EBA\u5DE5\u4ECB\u5165",error:"\u4F1A\u8BDD\u51FA\u73B0\u5F02\u5E38",success:"\u4EFB\u52A1\u6210\u529F\u5B8C\u6210"};function Dt(e){return`<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" class="badge-bg"/>
    <g class="badge-sym">${xe[e]}</g>
  </svg>`}function Ct(e,i=document){let t=[],n=i.querySelectorAll("body *");for(let s of n){if(s.tagName==="DSH-PIXEL-BUDDY"||s.closest?.("dsh-pixel-buddy"))continue;let g=getComputedStyle(s).position;if(g!=="fixed"&&g!=="sticky")continue;let p=s.getBoundingClientRect();if(p.width===0||p.height===0)continue;p.left<e.right&&p.right>e.left&&p.top<e.bottom&&p.bottom>e.top&&t.push(ve(s))}return{conflicts:t}}function ve(e){let i=e.id?`#${e.id}`:"",t=e.classList.length?`.${[...e.classList].slice(0,2).join(".")}`:"";return`${e.tagName.toLowerCase()}${i}${t}`}var Tt={id:"duck",label:"\u9E2D\u5B50",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="6" y="4" width="1" height="2" fill="#FFD966"/>'}};var Mt={id:"cat",label:"\u732B",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="4" width="1" height="2" fill="#9AA0A8"/><rect x="8" y="4" width="1" height="2" fill="#9AA0A8"/><rect x="4" y="5" width="1" height="1" fill="#6E747C"/><rect x="8" y="5" width="1" height="1" fill="#6E747C"/>'}};var Pt={id:"dog",label:"\u72D7",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="5" width="1" height="2" fill="#B98A5A"/><rect x="8" y="5" width="1" height="2" fill="#B98A5A"/><rect x="4" y="6" width="1" height="1" fill="#8A5F38"/><rect x="8" y="6" width="1" height="1" fill="#8A5F38"/>'}};var Lt={id:"rabbit",label:"\u5154\u5B50",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="6" width="1" height="1" fill="#F5F7FA"/><rect x="8" y="6" width="1" height="1" fill="#F5F7FA"/><rect x="4" y="6" width="1" height="1" fill="#C9CDD3"/><rect x="8" y="6" width="1" height="1" fill="#C9CDD3"/>'}};var Rt={id:"fox",label:"\u72D0\u72F8",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="4" width="1" height="1" fill="#E8873A"/><rect x="8" y="4" width="1" height="1" fill="#E8873A"/><rect x="4" y="4" width="1" height="1" fill="#C96F1F"/><rect x="8" y="4" width="1" height="1" fill="#C96F1F"/>'}};var _t={id:"hamster",label:"\u4ED3\u9F20",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="5" width="1" height="1" fill="#D8A25E"/><rect x="8" y="5" width="1" height="1" fill="#D8A25E"/><rect x="4" y="5" width="1" height="1" fill="#8A5F38"/><rect x="8" y="5" width="1" height="1" fill="#8A5F38"/>'}};var Ot={id:"panda",label:"\u718A\u732B",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="3" y="4" width="1" height="1" fill="#2B2B2B"/><rect x="8" y="5" width="1" height="1" fill="#2B2B2B"/>'}};var Ht={id:"frog",label:"\u9752\u86D9",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="2" y="1" width="3" height="3" fill="#6FBF4A"/><rect x="7" y="1" width="3" height="3" fill="#6FBF4A"/><rect x="3" y="2" width="1" height="1" fill="#4C8F33"/><rect x="8" y="2" width="1" height="1" fill="#4C8F33"/>'}};var dt={duck:Tt,cat:Mt,dog:Pt,rabbit:Lt,fox:Rt,hamster:_t,panda:Ot,frog:Ht},be="duck",si=Object.values(dt);function lt(e){return(e!=null?dt[e]:void 0)??dt[be]}var we=214748e4,Se=150,Be=`
  :host {
    position: fixed;
    right: ${Y}px;
    left: auto;
    bottom: ${Y}px;
    z-index: ${we};
    width: var(--buddy-size, ${Q}px);
    height: var(--buddy-size, ${Q}px);
    line-height: 0;
    user-select: none;
    -webkit-user-select: none;
    cursor: grab;
  }
  :host([side='left']) {
    right: auto;
    left: ${Y}px;
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
    transition: opacity ${Se}ms linear; /* crossfade \u4EC5\u4F5C\u7528\u4E8E\u5FBD\u7AE0 */
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
`,O,B,T,E,v,m,b,M,G,w,Z,x,H,X,I,q,o,J,at,qt,W,Nt,ct,jt,ut,zt,gt,ft,pt,U,yt,mt,xt,$t,S=class extends HTMLElement{constructor(){super(...arguments);l(this,o);l(this,O,null);l(this,B,null);l(this,T,null);l(this,E,null);l(this,v,null);l(this,m,null);l(this,b,null);l(this,M,0);l(this,G,"idle");l(this,w,Y);this.onAck=null;l(this,Z,()=>{r(this,H)||this.onAck?.()});l(this,x,null);l(this,H,!1);this.onDragEnd=null;l(this,X,t=>{t.button===0&&(t.preventDefault(),d(this,x,{startY:t.clientY,startBottom:r(this,w),moved:!1}),this.setAttribute("dragging",""),window.addEventListener("mousemove",r(this,I)),window.addEventListener("mouseup",r(this,q)))});l(this,I,t=>{if(!r(this,x))return;let n=r(this,x).startY-t.clientY;!r(this,x).moved&&Math.abs(n)>Ft&&(r(this,x).moved=!0),r(this,x).moved&&(d(this,w,ot(r(this,x).startBottom+n)),h(this,o,J).call(this,r(this,w)))});l(this,q,()=>{window.removeEventListener("mousemove",r(this,I)),window.removeEventListener("mouseup",r(this,q));let t=r(this,x)?.moved===!0;d(this,x,null),this.removeAttribute("dragging"),t&&(d(this,H,!0),setTimeout(()=>d(this,H,!1),0),this.onDragEnd?.(r(this,w)))})}connectedCallback(){if(r(this,O))return;let t=this.attachShadow({mode:"closed"});d(this,O,t);let n=document.createElement("style");n.textContent=Be;let s=document.createElement("div");s.className="pet-wrap",d(this,B,s),s.innerHTML=h(this,o,ct).call(this,h(this,o,W).call(this)),d(this,b,[It(),It()]),d(this,m,document.createElement("div")),r(this,m).className="sr-live",r(this,m).setAttribute("role","status"),r(this,m).setAttribute("aria-live","polite"),t.append(n,s,...r(this,b),r(this,m)),h(this,o,xt).call(this,h(this,o,yt).call(this)),h(this,o,pt).call(this,h(this,o,gt).call(this)),h(this,o,J).call(this,r(this,w)),h(this,o,ut).call(this,h(this,o,W).call(this)),h(this,o,$t).call(this),this.addEventListener("click",r(this,Z)),this.addEventListener("mousedown",r(this,X)),this.dataset.state="idle"}get bottomOffset(){return r(this,w)}set bottomOffset(t){d(this,w,ot(t)),h(this,o,J).call(this,r(this,w))}get blink(){return this.getAttribute("blink")==="on"}set blink(t){this.setAttribute("blink",t?"on":"off")}get side(){return h(this,o,at).call(this,this.getAttribute("side"))}set side(t){this.setAttribute("side",t)}setState(t){if(!r(this,b)||t===r(this,G))return;let n=r(this,b)[r(this,M)],s=r(this,b)[1-r(this,M)];t==="idle"?n.classList.remove("visible"):(s.querySelector("svg")?.remove(),s.insertAdjacentHTML("afterbegin",Dt(t)),s.className=`badge badge--${t}`,s.setAttribute("aria-label",ht[t]),s.classList.add("visible"),n.classList.remove("visible"),d(this,M,1-r(this,M))),d(this,G,t),this.dataset.state=t,r(this,m)&&(r(this,m).textContent=ht[t])}attributeChangedCallback(t,n,s){t==="size"&&h(this,o,xt).call(this,h(this,o,mt).call(this,s)),t==="theme"&&h(this,o,pt).call(this,h(this,o,ft).call(this,s)),t==="pet"&&h(this,o,zt).call(this,h(this,o,Nt).call(this,s)),t==="side"&&h(this,o,qt).call(this,h(this,o,at).call(this,s)),t==="blink"&&h(this,o,jt).call(this,s==="on")}get size(){return h(this,o,yt).call(this)}set size(t){this.setAttribute("size",String(t))}get pet(){return h(this,o,W).call(this).id}set pet(t){this.setAttribute("pet",t)}get theme(){return h(this,o,gt).call(this)}set theme(t){this.setAttribute("theme",t)}__testBadges(){return r(this,b)?[...r(this,b)]:[]}__testWrap(){return r(this,B)}__testPetSvg(){return r(this,B)?.innerHTML??""}__testLiveRegion(){return r(this,m)}destroy(){r(this,E)&&r(this,v)&&r(this,E).removeEventListener("change",r(this,v)),d(this,E,null),d(this,v,null),this.removeEventListener("click",r(this,Z)),this.removeEventListener("mousedown",r(this,X)),window.removeEventListener("mousemove",r(this,I)),window.removeEventListener("mouseup",r(this,q)),this.remove(),d(this,O,null),d(this,b,null),d(this,m,null),d(this,B,null),d(this,T,null)}};O=new WeakMap,B=new WeakMap,T=new WeakMap,E=new WeakMap,v=new WeakMap,m=new WeakMap,b=new WeakMap,M=new WeakMap,G=new WeakMap,w=new WeakMap,Z=new WeakMap,x=new WeakMap,H=new WeakMap,X=new WeakMap,I=new WeakMap,q=new WeakMap,o=new WeakSet,J=function(t){this.style.bottom=`${t}px`},at=function(t){return t==="left"?"left":"right"},qt=function(t){t==="left"?this.setAttribute("data-side","left"):this.removeAttribute("data-side")},W=function(){return r(this,T)??lt(this.getAttribute("pet"))},Nt=function(t){return lt(t)},ct=function(t){let n=t.blinkOverlay?`<svg class="lids" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">${t.blinkOverlay()}</svg>`:"";return t.svg()+n},jt=function(t){t?this.setAttribute("data-blink","on"):this.removeAttribute("data-blink")},ut=function(t){let n=r(this,B)?.querySelector(".lids");if(!n)return;let s=0;for(let g of t.id)s+=g.charCodeAt(0);n.style.animationDelay=`-${s%46*100}ms`},zt=function(t){r(this,T)===t||!r(this,B)||(d(this,T,t),r(this,B).innerHTML=h(this,o,ct).call(this,t),h(this,o,ut).call(this,t))},gt=function(){return h(this,o,ft).call(this,this.getAttribute("theme"))},ft=function(t){return t==="light"||t==="dark"?t:"auto"},pt=function(t){if(r(this,E)&&r(this,v)&&(r(this,E).removeEventListener("change",r(this,v)),d(this,E,null),d(this,v,null)),t!=="auto"){h(this,o,U).call(this,t);return}let n=window.matchMedia?.("(prefers-color-scheme: dark)");if(!n){h(this,o,U).call(this,"light");return}d(this,E,n),d(this,v,()=>h(this,o,U).call(this,n.matches?"dark":"light")),n.addEventListener("change",r(this,v)),h(this,o,U).call(this,n.matches?"dark":"light")},U=function(t){t==="dark"?this.setAttribute("data-theme","dark"):this.removeAttribute("data-theme")},yt=function(){return h(this,o,mt).call(this,this.getAttribute("size"))},mt=function(t){let n=t===null?NaN:Number(t);return At.includes(n)?n:Q},xt=function(t){this.style.setProperty("--buddy-size",`${t}px`)},$t=function(){requestAnimationFrame(()=>{if(!this.isConnected)return;let{conflicts:t}=Ct(this.getBoundingClientRect());t.length>0&&console.warn("[dsh-pixel-buddy] \u53F3\u4E0B\u89D2\u68C0\u6D4B\u5230\u5BBF\u4E3B\u60AC\u6D6E\u5143\u7D20\u91CD\u53E0\uFF0C\u9700\u4EA7\u54C1\u88C1\u51B3\u9519\u4F4D\u65B9\u6848\uFF1A",t)})},S.tagName="dsh-pixel-buddy",S.observedAttributes=["size","theme","pet","side","blink"];function It(){let e=document.createElement("div");return e.className="badge",e}function Yt(){customElements.get(S.tagName)||customElements.define(S.tagName,S)}var Ut={"stream:start":"task-start","stream:end":"task-success","stream:error":"task-error","confirmation:request":"input-required"},Gt=new Set(["task-success","task-error"]),Ee=200,ke=[1e3,2e3,4e3],f,P,F,N,k,L,j,A,z,u,vt,Zt,Xt,Vt,bt,Qt,Jt,Wt,K=class{constructor(i){l(this,u);l(this,f);l(this,P,new Set);l(this,F,new Map);l(this,N,new Map);l(this,k,null);l(this,L,!1);l(this,j,0);l(this,A,null);l(this,z,!1);d(this,f,{warn:(t,n)=>console.warn(t,n),setTimeoutFn:(t,n)=>setTimeout(t,n),clearTimeoutFn:t=>clearTimeout(t),...i})}subscribe(i){return r(this,P).add(i),h(this,u,vt).call(this),()=>{r(this,P).delete(i),r(this,P).size===0&&h(this,u,bt).call(this)}}};f=new WeakMap,P=new WeakMap,F=new WeakMap,N=new WeakMap,k=new WeakMap,L=new WeakMap,j=new WeakMap,A=new WeakMap,z=new WeakMap,u=new WeakSet,vt=function(){if(r(this,k)||r(this,z))return;let i=r(this,f).getApi();if(i){try{h(this,u,Xt).call(this,i)}catch(t){r(this,f).warn("[dsh-pixel-buddy] Hook API \u7ED1\u5B9A\u5931\u8D25\uFF0C\u5DF2\u964D\u7EA7\u4E3A\u5F85\u673A",t),d(this,k,null)}return}h(this,u,Zt).call(this)},Zt=function(){if(r(this,z)||r(this,A)!==null)return;let i=ke[r(this,j)];if(i===void 0){r(this,f).warn("[dsh-pixel-buddy] Hook API \u4E0D\u53EF\u7528\uFF0C\u5DF2\u9759\u9ED8\u56DE\u9000\u5F85\u673A");return}d(this,j,r(this,j)+1),d(this,A,r(this,f).setTimeoutFn(()=>{d(this,A,null),h(this,u,vt).call(this)},i))},Xt=function(i){for(let t of Object.keys(Ut)){let n=s=>h(this,u,Qt).call(this,t,s);i.on(t,n),r(this,N).set(t,n)}d(this,k,i)},Vt=function(){if(r(this,k))for(let[i,t]of r(this,N))try{r(this,k).off(i,t)}catch{}d(this,k,null),r(this,N).clear()},bt=function(){h(this,u,Vt).call(this);for(let i of r(this,F).values())r(this,f).clearTimeoutFn(i);r(this,F).clear(),d(this,L,!1),d(this,j,0),r(this,A)!==null&&(r(this,f).clearTimeoutFn(r(this,A)),d(this,A,null))},Qt=function(i,t){if(r(this,z))return;let n=Ut[i];if(!n)return;let s=r(this,F).get(n);s!==void 0&&r(this,f).clearTimeoutFn(s),r(this,F).set(n,r(this,f).setTimeoutFn(()=>{r(this,F).delete(n),h(this,u,Jt).call(this,n)},Ee))},Jt=function(i){if(Gt.has(i)&&!r(this,L)){r(this,f).warn(`[dsh-pixel-buddy] \u4E22\u5F03\u65E0\u8D77\u59CB\u7684\u7EC8\u6001\u4E8B\u4EF6\uFF1A${i}`);return}i==="task-start"&&d(this,L,!0),Gt.has(i)&&d(this,L,!1),h(this,u,Wt).call(this,{type:i})},Wt=function(i){for(let t of r(this,P))try{t(i)}catch(n){r(this,f).warn("[dsh-pixel-buddy] \u4E8B\u4EF6\u5904\u7406\u5F02\u5E38\uFF0C\u5DF2\u964D\u7EA7\u4E3A\u5F85\u673A",n),h(this,u,bt).call(this);return}};var Kt={current:"idle",stickyError:!1,stickyInputRequired:!1,taskActive:!1,timerMs:null};function te(e,i){switch(i.type){case"user-ack":return Ae(e);case"timer-elapsed":return e.current==="success"||e.current==="running"?{...e,current:"idle",timerMs:null}:{...e,timerMs:null};case"task-start":return Fe(e);case"task-success":case"task-error":case"input-required":return De(e,i.type);default:return i}}function Ae(e){return!e.stickyError&&!e.stickyInputRequired?e:{...e,stickyError:!1,stickyInputRequired:!1,current:"idle",timerMs:null}}function Fe(e){let i={...e,taskActive:!0,timerMs:6e5};return i.stickyError?i.current="error":i.stickyInputRequired?i.current="input-required":i.current="running",i}function De(e,i){if(!e.taskActive)return e;let t={...e,timerMs:null};switch(i){case"task-error":return t.stickyError=!0,t.taskActive=!1,t.current="error",t.timerMs=null,t;case"input-required":return t.stickyInputRequired=!0,t.stickyError||(t.current="input-required"),t.timerMs=null,t;case"task-success":return t.taskActive=!1,t.stickyError?(t.current="error",t):t.stickyInputRequired?(t.current="input-required",t):(t.current="success",t.timerMs=2500,t);default:return i}}var Ce={schedule:(e,i)=>setTimeout(e,i),cancel:e=>clearTimeout(e)};function ee(e,i,t=Ce){let n=Kt,s=null,g=()=>{s!==null&&(t.cancel(s),s=null)},p=D=>{let C=te(n,D);C!==n&&(n=C,i.setState(C.current),g(),C.timerMs!==null&&(s=t.schedule(()=>{s=null,p({type:"timer-elapsed"})},C.timerMs)))},$=e.subscribe(D=>p(D));return{dispatch:D=>p(D),destroy:()=>{$(),g()}}}function ie(e=document.body,i={}){Yt();let t=document.querySelector(`body > ${S.tagName}`);if(t instanceof S)return{destroy:()=>t.destroy()};let n=document.createElement(S.tagName);e.appendChild(n);let s=i.adapter??new K({getApi:Te}),g=ee(s,n);return n.onAck=()=>g.dispatch({type:"user-ack"}),{destroy:()=>{n.onAck=null,g.destroy(),n.destroy()}}}function Te(){return globalThis.dshHooks}var R,wt=class{constructor(){l(this,R,new Set)}dispatch(i){for(let t of r(this,R))t(i)}subscribe(i){return r(this,R).add(i),()=>r(this,R).delete(i)}reset(){r(this,R).clear()}};R=new WeakMap;var St=new wt;var re={error:3,"input-required":2,running:1,idle:0};function Me(e){return e?e.promptError!=null?"error":Array.isArray(e.pending)&&e.pending.length>0?"input-required":e.running===!0||e.partial!=null||Array.isArray(e.runningCalls)&&e.runningCalls.length>0?"running":"idle":"idle"}function Pe(e,i){let t=s=>St.dispatch({type:s}),n=()=>{e!=="running"&&t("task-start")};if(e===null){i==="running"&&t("task-start"),i==="error"&&(t("task-start"),t("task-error")),i==="input-required"&&(t("task-start"),t("input-required"));return}if(e!==i)switch(i){case"running":(e==="error"||e==="input-required")&&t("user-ack"),n();break;case"idle":(e==="error"||e==="input-required")&&t("user-ack"),e==="running"&&t("task-success");break;case"input-required":(e==="error"||e==="input-required")&&t("user-ack"),n(),t("input-required");break;case"error":n(),t("task-error");break}}var ne={statusBySession:new Map,globalPrev:null,update(e,i){this.statusBySession.set(e,i);let t="idle";for(let n of this.statusBySession.values())re[n]>re[t]&&(t=n);t!==this.globalPrev&&(Pe(this.globalPrev,t),this.globalPrev=t)},remove(e){this.statusBySession.delete(e),this.statusBySession.size===0?this.globalPrev=null:this.update(e,this.statusBySession.values().next().value)}},V=null,Bt=0,y={pet:"duck",visible:!0,side:"right",bottomOffset:16,blink:!1},de=null;function le(){let e=document.querySelector("dsh-pixel-buddy");e&&(e.setAttribute("pet",y.pet),e.style.display=y.visible?"":"none",e.setAttribute("side",y.side),e.bottomOffset=y.bottomOffset,e.blink=y.blink)}function Le(e){let{useSession:i,sessionId:t}=e,n=i(Me);return(0,a.useEffect)(()=>{ne.update(t,n)},[t,n]),(0,a.useEffect)(()=>{Bt+=1,V||(V=ie(document.body,{adapter:St})),le();let s=document.querySelector("dsh-pixel-buddy");return s&&(s.onDragEnd=g=>void de?.set("bottomOffset",g)),()=>{Bt-=1,Bt===0&&V&&(V.destroy(),V=null,ne.globalPrev=null)}},[]),null}var Re=["slots","settingsScope"];function _e(e){let i=e.settingsScope.bind({namespace:"dsh-pixel-buddy"});de=i;let t=()=>{let n=i.getSnapshot();n.value?.pet&&(y.pet=n.value.pet),typeof n.value?.visible=="boolean"&&(y.visible=n.value.visible),(n.value?.side==="left"||n.value?.side==="right")&&(y.side=n.value.side),typeof n.value?.bottomOffset=="number"&&(y.bottomOffset=n.value.bottomOffset),typeof n.value?.blink=="boolean"&&(y.blink=n.value.blink),le()};i.subscribe(t),t(),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"dsh-pixel-buddy",order:90},()=>He(i))),e.slots.inject("conversation.session.header.utilities",()=>e.slots.register({name:"conversation.session.header.utilities",id:"dsh-pixel-buddy",order:90,label:"PixelBuddy"},Le))}var tt=[["duck","\u9E2D\u5B50"],["cat","\u732B"],["dog","\u72D7"],["rabbit","\u5154\u5B50"],["fox","\u72D0\u72F8"],["hamster","\u4ED3\u9F20"],["panda","\u718A\u732B"],["frog","\u9752\u86D9"]],et={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",padding:"8px 0",minHeight:"32px"},it={color:"inherit"},se={display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 10px",background:"rgba(127, 127, 127, 0.12)",border:"1px solid rgba(127, 127, 127, 0.25)",borderRadius:"8px",color:"inherit",font:"inherit",fontSize:"13px",cursor:"pointer"},oe={opacity:"0.6",fontSize:"10px"},ae=[["right","\u53F3\u4FA7"],["left","\u5DE6\u4FA7"]];function Oe(e){return ae.find(([i])=>i===e)?.[1]??"\u53F3\u4FA7"}function he(e){let{checked:i,onChange:t}=e;return(0,a.createElement)("button",{type:"button",role:"switch","aria-checked":i,style:{width:"36px",height:"20px",borderRadius:"10px",background:i?"#4C7DFF":"rgba(127, 127, 127, 0.35)",border:"none",padding:"2px",display:"inline-flex",alignItems:"center",cursor:"pointer",transition:"background 150ms linear",justifyContent:i?"flex-end":"flex-start"},onClick:()=>t(!i)},(0,a.createElement)("span",{style:{width:"16px",height:"16px",borderRadius:"50%",background:"#ffffff",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)",transition:"transform 150ms linear"}}))}function He(e){let[,i]=(0,a.useReducer)(c=>c+1,0),[t,n]=(0,a.useState)(!1),[s,g]=(0,a.useState)(!1);(0,a.useEffect)(()=>e.subscribe(i),[e]);let p=e.getSnapshot(),$=p.value?.pet??"duck",D=p.value?.visible??!0,C=tt.find(([c])=>c===$)??tt[0];return(0,a.createElement)("div",null,(0,a.createElement)("div",{style:et},(0,a.createElement)("span",{style:it},"\u5BA0\u7269\u5F62\u8C61"),(0,a.createElement)(Et.Menu,{open:t,portal:!0,anchor:(0,a.createElement)("button",{type:"button",style:se,"aria-haspopup":"listbox","aria-expanded":t,onClick:()=>n(c=>!c)},(0,a.createElement)("span",null,C[1]),(0,a.createElement)("span",{style:oe},"\u25BC")),items:tt.map(([c,_])=>({id:c,label:_})),selectedId:$,onSelect:c=>{let _=tt.find(([ce])=>ce===c);_&&e.set("pet",_[0]),n(!1)},onClose:()=>n(!1)})),(0,a.createElement)("div",{style:et},(0,a.createElement)("span",{style:it},"\u663E\u793A\u4F4D\u7F6E"),(0,a.createElement)(Et.Menu,{open:s,portal:!0,anchor:(0,a.createElement)("button",{type:"button",style:se,"aria-haspopup":"listbox","aria-expanded":s,onClick:()=>g(c=>!c)},(0,a.createElement)("span",null,Oe(y.side)),(0,a.createElement)("span",{style:oe},"\u25BC")),items:ae.map(([c,_])=>({id:c,label:_})),selectedId:y.side,onSelect:c=>{(c==="left"||c==="right")&&e.set("side",c),g(!1)},onClose:()=>g(!1)})),(0,a.createElement)("div",{style:et},(0,a.createElement)("span",{style:it},"\u663E\u793A\u5BA0\u7269"),(0,a.createElement)(he,{checked:D,onChange:c=>{e.set("visible",c)}})),(0,a.createElement)("div",{style:et},(0,a.createElement)("span",{style:it},"\u5F85\u673A\u7728\u773C\u52A8\u753B"),(0,a.createElement)(he,{checked:y.blink,onChange:c=>{e.set("blink",c)}})))}

    return module.exports;
  }
});
