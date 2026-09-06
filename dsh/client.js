window.__ModuleLoader__.load({
  id: "dsh-pixel-buddy",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
"use strict";var tt=Object.defineProperty;var he=Object.getOwnPropertyDescriptor;var le=Object.getOwnPropertyNames;var ae=Object.prototype.hasOwnProperty;var Bt=e=>{throw TypeError(e)};var ce=(e,i)=>{for(var t in i)tt(e,t,{get:i[t],enumerable:!0})},ue=(e,i,t,s)=>{if(i&&typeof i=="object"||typeof i=="function")for(let n of le(i))!ae.call(e,n)&&n!==t&&tt(e,n,{get:()=>i[n],enumerable:!(s=he(i,n))||s.enumerable});return e};var ge=e=>ue(tt({},"__esModule",{value:!0}),e);var et=(e,i,t)=>i.has(e)||Bt("Cannot "+t);var r=(e,i,t)=>(et(e,i,"read from private field"),t?t.call(e):i.get(e)),l=(e,i,t)=>i.has(e)?Bt("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,t),h=(e,i,t,s)=>(et(e,i,"write to private field"),s?s.call(e,t):i.set(e,t),t),d=(e,i,t)=>(et(e,i,"access private method"),t);var _e={};ce(_e,{apply:()=>Pe,inject:()=>Me});module.exports=ge(_e);var a=require("react"),St=require("@deepseek-ai/dsh-client-ui-primitives");var Et=[32,40,48],Q=48,Y=16,it=8,kt=3;function rt(e,i=window.innerHeight,t=48){let s=Math.max(it,i-t-it);return Math.min(s,Math.max(it,Math.round(e)))}var pe={running:'<rect x="9" y="9" width="6" height="6"/>',"input-required":'<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">?</text>',error:'<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">!</text>',success:'<path d="M7 12.5 L10.5 16 L17 8.5" stroke-width="2.5" fill="none"/>'},st={idle:"\u4F1A\u8BDD\u7A7A\u95F2",running:"\u4F1A\u8BDD\u8FD0\u884C\u4E2D","input-required":"\u4F1A\u8BDD\u9700\u8981\u4EBA\u5DE5\u4ECB\u5165",error:"\u4F1A\u8BDD\u51FA\u73B0\u5F02\u5E38",success:"\u4EFB\u52A1\u6210\u529F\u5B8C\u6210"};function At(e){return`<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" class="badge-bg"/>
    <g class="badge-sym">${pe[e]}</g>
  </svg>`}function Ft(e,i=document){let t=[],s=i.querySelectorAll("body *");for(let n of s){if(n.tagName==="DSH-PIXEL-BUDDY"||n.closest?.("dsh-pixel-buddy"))continue;let g=getComputedStyle(n).position;if(g!=="fixed"&&g!=="sticky")continue;let f=n.getBoundingClientRect();if(f.width===0||f.height===0)continue;f.left<e.right&&f.right>e.left&&f.top<e.bottom&&f.bottom>e.top&&t.push(fe(n))}return{conflicts:t}}function fe(e){let i=e.id?`#${e.id}`:"",t=e.classList.length?`.${[...e.classList].slice(0,2).join(".")}`:"";return`${e.tagName.toLowerCase()}${i}${t}`}var Tt={id:"duck",label:"\u9E2D\u5B50",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`}};var Dt={id:"cat",label:"\u732B",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`}};var Mt={id:"dog",label:"\u72D7",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`}};var Pt={id:"rabbit",label:"\u5154\u5B50",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`}};var Ct={id:"fox",label:"\u72D0\u72F8",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`}};var Rt={id:"penguin",label:"\u4F01\u9E45",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- \u5934\u90E8\uFF08\u6DF1\u84DD\u7070\uFF09 -->
    <g fill="#39465A">
      <rect x="3" y="2" width="7" height="5"/>
      <rect x="2" y="3" width="1" height="3"/>
      <rect x="10" y="3" width="1" height="2"/>
    </g>
    <!-- \u773C\u775B\uFF08\u767D\u5E95\u9ED1\u70B9\uFF0C\u5728\u6DF1\u8272\u5934\u4E0A\u9700\u767D\u5708\uFF09 -->
    <rect x="4" y="4" width="1" height="2" fill="#F5F7FA"/>
    <rect x="8" y="4" width="1" height="2" fill="#F5F7FA"/>
    <rect x="4" y="5" width="1" height="1" fill="#2B2B2B"/>
    <rect x="8" y="5" width="1" height="1" fill="#2B2B2B"/>
    <!-- \u5599\uFF08\u6A59\uFF0C\u77ED\uFF09 -->
    <rect x="6" y="6" width="2" height="1" fill="#F08C1B"/>
    <!-- \u8EAB\u4F53\uFF08\u7AD9\u59FF\u5375\u5F62\uFF0C\u767D\u809A\uFF09 -->
    <g fill="#39465A">
      <rect x="3" y="7" width="8" height="6"/>
      <rect x="2" y="8" width="1" height="4"/>
      <rect x="11" y="8" width="1" height="3"/>
    </g>
    <g fill="#F5F7FA">
      <rect x="5" y="8" width="4" height="5"/>
      <rect x="4" y="9" width="1" height="3"/>
      <rect x="9" y="9" width="1" height="3"/>
    </g>
    <!-- \u9CCD\u7FC5\uFF08\u8D34\u8EAB\uFF09 -->
    <rect x="12" y="9" width="1" height="3" fill="#2B3648"/>
    <!-- \u811A\uFF08\u6A59\uFF09 -->
    <rect x="4" y="13" width="2" height="1" fill="#F08C1B"/>
    <rect x="8" y="13" width="2" height="1" fill="#F08C1B"/>
  </svg>`}};var Lt={id:"panda",label:"\u718A\u732B",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`}};var _t={id:"frog",label:"\u9752\u86D9",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`}};var nt={duck:Tt,cat:Dt,dog:Mt,rabbit:Pt,fox:Ct,penguin:Rt,panda:Lt,frog:_t},ye="duck",ii=Object.values(nt);function ot(e){return(e!=null?nt[e]:void 0)??nt[ye]}var me=214748e4,xe=150,ve=`
  :host {
    position: fixed;
    right: ${Y}px;
    left: auto;
    bottom: ${Y}px;
    z-index: ${me};
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
    transition: opacity ${xe}ms linear; /* crossfade \u4EC5\u4F5C\u7528\u4E8E\u5FBD\u7AE0 */
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
`,H,A,M,S,x,y,v,P,G,w,Z,m,I,X,O,q,o,J,dt,It,ht,Ot,qt,lt,at,ct,U,ut,gt,pt,Nt,b=class extends HTMLElement{constructor(){super(...arguments);l(this,o);l(this,H,null);l(this,A,null);l(this,M,null);l(this,S,null);l(this,x,null);l(this,y,null);l(this,v,null);l(this,P,0);l(this,G,"idle");l(this,w,Y);this.onAck=null;l(this,Z,()=>{r(this,I)||this.onAck?.()});l(this,m,null);l(this,I,!1);this.onDragEnd=null;l(this,X,t=>{t.button===0&&(t.preventDefault(),h(this,m,{startY:t.clientY,startBottom:r(this,w),moved:!1}),this.setAttribute("dragging",""),window.addEventListener("mousemove",r(this,O)),window.addEventListener("mouseup",r(this,q)))});l(this,O,t=>{if(!r(this,m))return;let s=r(this,m).startY-t.clientY;!r(this,m).moved&&Math.abs(s)>kt&&(r(this,m).moved=!0),r(this,m).moved&&(h(this,w,rt(r(this,m).startBottom+s)),d(this,o,J).call(this,r(this,w)))});l(this,q,()=>{window.removeEventListener("mousemove",r(this,O)),window.removeEventListener("mouseup",r(this,q));let t=r(this,m)?.moved===!0;h(this,m,null),this.removeAttribute("dragging"),t&&(h(this,I,!0),setTimeout(()=>h(this,I,!1),0),this.onDragEnd?.(r(this,w)))})}connectedCallback(){if(r(this,H))return;let t=this.attachShadow({mode:"closed"});h(this,H,t);let s=document.createElement("style");s.textContent=ve;let n=document.createElement("div");h(this,A,n),n.innerHTML=d(this,o,ht).call(this).svg(),h(this,v,[Ht(),Ht()]),h(this,y,document.createElement("div")),r(this,y).className="sr-live",r(this,y).setAttribute("role","status"),r(this,y).setAttribute("aria-live","polite"),t.append(s,n,...r(this,v),r(this,y)),d(this,o,pt).call(this,d(this,o,ut).call(this)),d(this,o,ct).call(this,d(this,o,lt).call(this)),d(this,o,J).call(this,r(this,w)),d(this,o,Nt).call(this),this.addEventListener("click",r(this,Z)),this.addEventListener("mousedown",r(this,X)),this.dataset.state="idle"}get bottomOffset(){return r(this,w)}set bottomOffset(t){h(this,w,rt(t)),d(this,o,J).call(this,r(this,w))}get side(){return d(this,o,dt).call(this,this.getAttribute("side"))}set side(t){this.setAttribute("side",t)}setState(t){if(!r(this,v)||t===r(this,G))return;let s=r(this,v)[r(this,P)],n=r(this,v)[1-r(this,P)];t==="idle"?s.classList.remove("visible"):(n.querySelector("svg")?.remove(),n.insertAdjacentHTML("afterbegin",At(t)),n.className=`badge badge--${t}`,n.setAttribute("aria-label",st[t]),n.classList.add("visible"),s.classList.remove("visible"),h(this,P,1-r(this,P))),h(this,G,t),this.dataset.state=t,r(this,y)&&(r(this,y).textContent=st[t])}attributeChangedCallback(t,s,n){t==="size"&&d(this,o,pt).call(this,d(this,o,gt).call(this,n)),t==="theme"&&d(this,o,ct).call(this,d(this,o,at).call(this,n)),t==="pet"&&d(this,o,qt).call(this,d(this,o,Ot).call(this,n)),t==="side"&&d(this,o,It).call(this,d(this,o,dt).call(this,n))}get size(){return d(this,o,ut).call(this)}set size(t){this.setAttribute("size",String(t))}get pet(){return d(this,o,ht).call(this).id}set pet(t){this.setAttribute("pet",t)}get theme(){return d(this,o,lt).call(this)}set theme(t){this.setAttribute("theme",t)}__testBadges(){return r(this,v)?[...r(this,v)]:[]}__testPetSvg(){return r(this,A)?.innerHTML??""}__testLiveRegion(){return r(this,y)}destroy(){r(this,S)&&r(this,x)&&r(this,S).removeEventListener("change",r(this,x)),h(this,S,null),h(this,x,null),this.removeEventListener("click",r(this,Z)),this.removeEventListener("mousedown",r(this,X)),window.removeEventListener("mousemove",r(this,O)),window.removeEventListener("mouseup",r(this,q)),this.remove(),h(this,H,null),h(this,v,null),h(this,y,null),h(this,A,null),h(this,M,null)}};H=new WeakMap,A=new WeakMap,M=new WeakMap,S=new WeakMap,x=new WeakMap,y=new WeakMap,v=new WeakMap,P=new WeakMap,G=new WeakMap,w=new WeakMap,Z=new WeakMap,m=new WeakMap,I=new WeakMap,X=new WeakMap,O=new WeakMap,q=new WeakMap,o=new WeakSet,J=function(t){this.style.bottom=`${t}px`},dt=function(t){return t==="left"?"left":"right"},It=function(t){t==="left"?this.setAttribute("data-side","left"):this.removeAttribute("data-side")},ht=function(){return r(this,M)??ot(this.getAttribute("pet"))},Ot=function(t){return ot(t)},qt=function(t){r(this,M)===t||!r(this,A)||(h(this,M,t),r(this,A).innerHTML=t.svg())},lt=function(){return d(this,o,at).call(this,this.getAttribute("theme"))},at=function(t){return t==="light"||t==="dark"?t:"auto"},ct=function(t){if(r(this,S)&&r(this,x)&&(r(this,S).removeEventListener("change",r(this,x)),h(this,S,null),h(this,x,null)),t!=="auto"){d(this,o,U).call(this,t);return}let s=window.matchMedia?.("(prefers-color-scheme: dark)");if(!s){d(this,o,U).call(this,"light");return}h(this,S,s),h(this,x,()=>d(this,o,U).call(this,s.matches?"dark":"light")),s.addEventListener("change",r(this,x)),d(this,o,U).call(this,s.matches?"dark":"light")},U=function(t){t==="dark"?this.setAttribute("data-theme","dark"):this.removeAttribute("data-theme")},ut=function(){return d(this,o,gt).call(this,this.getAttribute("size"))},gt=function(t){let s=t===null?NaN:Number(t);return Et.includes(s)?s:Q},pt=function(t){this.style.setProperty("--buddy-size",`${t}px`)},Nt=function(){requestAnimationFrame(()=>{if(!this.isConnected)return;let{conflicts:t}=Ft(this.getBoundingClientRect());t.length>0&&console.warn("[dsh-pixel-buddy] \u53F3\u4E0B\u89D2\u68C0\u6D4B\u5230\u5BBF\u4E3B\u60AC\u6D6E\u5143\u7D20\u91CD\u53E0\uFF0C\u9700\u4EA7\u54C1\u88C1\u51B3\u9519\u4F4D\u65B9\u6848\uFF1A",t)})},b.tagName="dsh-pixel-buddy",b.observedAttributes=["size","theme","pet","side"];function Ht(){let e=document.createElement("div");return e.className="badge",e}function jt(){customElements.get(b.tagName)||customElements.define(b.tagName,b)}var zt={"stream:start":"task-start","stream:end":"task-success","stream:error":"task-error","confirmation:request":"input-required"},$t=new Set(["task-success","task-error"]),we=200,be=[1e3,2e3,4e3],p,C,F,N,E,R,j,k,z,c,ft,Yt,Ut,Gt,yt,Zt,Xt,Vt,K=class{constructor(i){l(this,c);l(this,p);l(this,C,new Set);l(this,F,new Map);l(this,N,new Map);l(this,E,null);l(this,R,!1);l(this,j,0);l(this,k,null);l(this,z,!1);h(this,p,{warn:(t,s)=>console.warn(t,s),setTimeoutFn:(t,s)=>setTimeout(t,s),clearTimeoutFn:t=>clearTimeout(t),...i})}subscribe(i){return r(this,C).add(i),d(this,c,ft).call(this),()=>{r(this,C).delete(i),r(this,C).size===0&&d(this,c,yt).call(this)}}};p=new WeakMap,C=new WeakMap,F=new WeakMap,N=new WeakMap,E=new WeakMap,R=new WeakMap,j=new WeakMap,k=new WeakMap,z=new WeakMap,c=new WeakSet,ft=function(){if(r(this,E)||r(this,z))return;let i=r(this,p).getApi();if(i){try{d(this,c,Ut).call(this,i)}catch(t){r(this,p).warn("[dsh-pixel-buddy] Hook API \u7ED1\u5B9A\u5931\u8D25\uFF0C\u5DF2\u964D\u7EA7\u4E3A\u5F85\u673A",t),h(this,E,null)}return}d(this,c,Yt).call(this)},Yt=function(){if(r(this,z)||r(this,k)!==null)return;let i=be[r(this,j)];if(i===void 0){r(this,p).warn("[dsh-pixel-buddy] Hook API \u4E0D\u53EF\u7528\uFF0C\u5DF2\u9759\u9ED8\u56DE\u9000\u5F85\u673A");return}h(this,j,r(this,j)+1),h(this,k,r(this,p).setTimeoutFn(()=>{h(this,k,null),d(this,c,ft).call(this)},i))},Ut=function(i){for(let t of Object.keys(zt)){let s=n=>d(this,c,Zt).call(this,t,n);i.on(t,s),r(this,N).set(t,s)}h(this,E,i)},Gt=function(){if(r(this,E))for(let[i,t]of r(this,N))try{r(this,E).off(i,t)}catch{}h(this,E,null),r(this,N).clear()},yt=function(){d(this,c,Gt).call(this);for(let i of r(this,F).values())r(this,p).clearTimeoutFn(i);r(this,F).clear(),h(this,R,!1),h(this,j,0),r(this,k)!==null&&(r(this,p).clearTimeoutFn(r(this,k)),h(this,k,null))},Zt=function(i,t){if(r(this,z))return;let s=zt[i];if(!s)return;let n=r(this,F).get(s);n!==void 0&&r(this,p).clearTimeoutFn(n),r(this,F).set(s,r(this,p).setTimeoutFn(()=>{r(this,F).delete(s),d(this,c,Xt).call(this,s)},we))},Xt=function(i){if($t.has(i)&&!r(this,R)){r(this,p).warn(`[dsh-pixel-buddy] \u4E22\u5F03\u65E0\u8D77\u59CB\u7684\u7EC8\u6001\u4E8B\u4EF6\uFF1A${i}`);return}i==="task-start"&&h(this,R,!0),$t.has(i)&&h(this,R,!1),d(this,c,Vt).call(this,{type:i})},Vt=function(i){for(let t of r(this,C))try{t(i)}catch(s){r(this,p).warn("[dsh-pixel-buddy] \u4E8B\u4EF6\u5904\u7406\u5F02\u5E38\uFF0C\u5DF2\u964D\u7EA7\u4E3A\u5F85\u673A",s),d(this,c,yt).call(this);return}};var Qt={current:"idle",stickyError:!1,stickyInputRequired:!1,taskActive:!1,timerMs:null};function Jt(e,i){switch(i.type){case"user-ack":return Se(e);case"timer-elapsed":return e.current==="success"||e.current==="running"?{...e,current:"idle",timerMs:null}:{...e,timerMs:null};case"task-start":return Be(e);case"task-success":case"task-error":case"input-required":return Ee(e,i.type);default:return i}}function Se(e){return!e.stickyError&&!e.stickyInputRequired?e:{...e,stickyError:!1,stickyInputRequired:!1,current:"idle",timerMs:null}}function Be(e){let i={...e,taskActive:!0,timerMs:6e5};return i.stickyError?i.current="error":i.stickyInputRequired?i.current="input-required":i.current="running",i}function Ee(e,i){if(!e.taskActive)return e;let t={...e,timerMs:null};switch(i){case"task-error":return t.stickyError=!0,t.taskActive=!1,t.current="error",t.timerMs=null,t;case"input-required":return t.stickyInputRequired=!0,t.stickyError||(t.current="input-required"),t.timerMs=null,t;case"task-success":return t.taskActive=!1,t.stickyError?(t.current="error",t):t.stickyInputRequired?(t.current="input-required",t):(t.current="success",t.timerMs=2500,t);default:return i}}var ke={schedule:(e,i)=>setTimeout(e,i),cancel:e=>clearTimeout(e)};function Kt(e,i,t=ke){let s=Qt,n=null,g=()=>{n!==null&&(t.cancel(n),n=null)},f=T=>{let D=Jt(s,T);D!==s&&(s=D,i.setState(D.current),g(),D.timerMs!==null&&(n=t.schedule(()=>{n=null,f({type:"timer-elapsed"})},D.timerMs)))},$=e.subscribe(T=>f(T));return{dispatch:T=>f(T),destroy:()=>{$(),g()}}}function Wt(e=document.body,i={}){jt();let t=document.querySelector(`body > ${b.tagName}`);if(t instanceof b)return{destroy:()=>t.destroy()};let s=document.createElement(b.tagName);e.appendChild(s);let n=i.adapter??new K({getApi:Ae}),g=Kt(n,s);return s.onAck=()=>g.dispatch({type:"user-ack"}),{destroy:()=>{s.onAck=null,g.destroy(),s.destroy()}}}function Ae(){return globalThis.dshHooks}var L,mt=class{constructor(){l(this,L,new Set)}dispatch(i){for(let t of r(this,L))t(i)}subscribe(i){return r(this,L).add(i),()=>r(this,L).delete(i)}reset(){r(this,L).clear()}};L=new WeakMap;var xt=new mt;var te={error:3,"input-required":2,running:1,idle:0};function Fe(e){return e?e.promptError!=null?"error":Array.isArray(e.pending)&&e.pending.length>0?"input-required":e.running===!0||e.partial!=null||Array.isArray(e.runningCalls)&&e.runningCalls.length>0?"running":"idle":"idle"}function Te(e,i){let t=n=>xt.dispatch({type:n}),s=()=>{e!=="running"&&t("task-start")};if(e===null){i==="running"&&t("task-start"),i==="error"&&(t("task-start"),t("task-error")),i==="input-required"&&(t("task-start"),t("input-required"));return}if(e!==i)switch(i){case"running":(e==="error"||e==="input-required")&&t("user-ack"),s();break;case"idle":(e==="error"||e==="input-required")&&t("user-ack"),e==="running"&&t("task-success");break;case"input-required":(e==="error"||e==="input-required")&&t("user-ack"),s(),t("input-required");break;case"error":s(),t("task-error");break}}var ee={statusBySession:new Map,globalPrev:null,update(e,i){this.statusBySession.set(e,i);let t="idle";for(let s of this.statusBySession.values())te[s]>te[t]&&(t=s);t!==this.globalPrev&&(Te(this.globalPrev,t),this.globalPrev=t)},remove(e){this.statusBySession.delete(e),this.statusBySession.size===0?this.globalPrev=null:this.update(e,this.statusBySession.values().next().value)}},V=null,vt=0,B={pet:"duck",visible:!0,side:"right",bottomOffset:16},se=null;function ne(){let e=document.querySelector("dsh-pixel-buddy");e&&(e.setAttribute("pet",B.pet),e.style.display=B.visible?"":"none",e.setAttribute("side",B.side),e.bottomOffset=B.bottomOffset)}function De(e){let{useSession:i,sessionId:t}=e,s=i(Fe);return(0,a.useEffect)(()=>{ee.update(t,s)},[t,s]),(0,a.useEffect)(()=>{vt+=1,V||(V=Wt(document.body,{adapter:xt})),ne();let n=document.querySelector("dsh-pixel-buddy");return n&&(n.onDragEnd=g=>void se?.set("bottomOffset",g)),()=>{vt-=1,vt===0&&V&&(V.destroy(),V=null,ee.globalPrev=null)}},[]),null}var Me=["slots","settingsScope"];function Pe(e){let i=e.settingsScope.bind({namespace:"dsh-pixel-buddy"});se=i;let t=()=>{let s=i.getSnapshot();s.value?.pet&&(B.pet=s.value.pet),typeof s.value?.visible=="boolean"&&(B.visible=s.value.visible),(s.value?.side==="left"||s.value?.side==="right")&&(B.side=s.value.side),typeof s.value?.bottomOffset=="number"&&(B.bottomOffset=s.value.bottomOffset),ne()};i.subscribe(t),t(),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"dsh-pixel-buddy",order:90},()=>Le(i))),e.slots.inject("conversation.session.header.utilities",()=>e.slots.register({name:"conversation.session.header.utilities",id:"dsh-pixel-buddy",order:90,label:"PixelBuddy"},De))}var W=[["duck","\u9E2D\u5B50"],["cat","\u732B"],["dog","\u72D7"],["rabbit","\u5154\u5B50"],["fox","\u72D0\u72F8"],["penguin","\u4F01\u9E45"],["panda","\u718A\u732B"],["frog","\u9752\u86D9"]],wt={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",padding:"8px 0",minHeight:"32px"},bt={color:"inherit"},ie={display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 10px",background:"rgba(127, 127, 127, 0.12)",border:"1px solid rgba(127, 127, 127, 0.25)",borderRadius:"8px",color:"inherit",font:"inherit",fontSize:"13px",cursor:"pointer"},re={opacity:"0.6",fontSize:"10px"},oe=[["right","\u53F3\u4FA7"],["left","\u5DE6\u4FA7"]];function Ce(e){return oe.find(([i])=>i===e)?.[1]??"\u53F3\u4FA7"}function Re(e){let{checked:i,onChange:t}=e;return(0,a.createElement)("button",{type:"button",role:"switch","aria-checked":i,style:{width:"36px",height:"20px",borderRadius:"10px",background:i?"#4C7DFF":"rgba(127, 127, 127, 0.35)",border:"none",padding:"2px",display:"inline-flex",alignItems:"center",cursor:"pointer",transition:"background 150ms linear",justifyContent:i?"flex-end":"flex-start"},onClick:()=>t(!i)},(0,a.createElement)("span",{style:{width:"16px",height:"16px",borderRadius:"50%",background:"#ffffff",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)",transition:"transform 150ms linear"}}))}function Le(e){let[,i]=(0,a.useReducer)(u=>u+1,0),[t,s]=(0,a.useState)(!1),[n,g]=(0,a.useState)(!1);(0,a.useEffect)(()=>e.subscribe(i),[e]);let f=e.getSnapshot(),$=f.value?.pet??"duck",T=f.value?.visible??!0,D=W.find(([u])=>u===$)??W[0];return(0,a.createElement)("div",null,(0,a.createElement)("div",{style:wt},(0,a.createElement)("span",{style:bt},"\u5BA0\u7269\u5F62\u8C61"),(0,a.createElement)(St.Menu,{open:t,portal:!0,anchor:(0,a.createElement)("button",{type:"button",style:ie,"aria-haspopup":"listbox","aria-expanded":t,onClick:()=>s(u=>!u)},(0,a.createElement)("span",null,D[1]),(0,a.createElement)("span",{style:re},"\u25BC")),items:W.map(([u,_])=>({id:u,label:_})),selectedId:$,onSelect:u=>{let _=W.find(([de])=>de===u);_&&e.set("pet",_[0]),s(!1)},onClose:()=>s(!1)})),(0,a.createElement)("div",{style:wt},(0,a.createElement)("span",{style:bt},"\u663E\u793A\u4F4D\u7F6E"),(0,a.createElement)(St.Menu,{open:n,portal:!0,anchor:(0,a.createElement)("button",{type:"button",style:ie,"aria-haspopup":"listbox","aria-expanded":n,onClick:()=>g(u=>!u)},(0,a.createElement)("span",null,Ce(B.side)),(0,a.createElement)("span",{style:re},"\u25BC")),items:oe.map(([u,_])=>({id:u,label:_})),selectedId:B.side,onSelect:u=>{(u==="left"||u==="right")&&e.set("side",u),g(!1)},onClose:()=>g(!1)})),(0,a.createElement)("div",{style:wt},(0,a.createElement)("span",{style:bt},"\u663E\u793A\u5BA0\u7269"),(0,a.createElement)(Re,{checked:T,onChange:u=>{e.set("visible",u)}})))}

    return module.exports;
  }
});
