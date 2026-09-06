window.__ModuleLoader__.load({
  id: "dsh-pixel-buddy",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
"use strict";var oe=Object.defineProperty;var ft=Object.getOwnPropertyDescriptor;var yt=Object.getOwnPropertyNames;var mt=Object.prototype.hasOwnProperty;var Te=t=>{throw TypeError(t)};var xt=(t,i)=>{for(var e in i)oe(t,e,{get:i[e],enumerable:!0})},bt=(t,i,e,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of yt(i))!mt.call(t,s)&&s!==e&&oe(t,s,{get:()=>i[s],enumerable:!(n=ft(i,s))||n.enumerable});return t};var vt=t=>bt(oe({},"__esModule",{value:!0}),t);var he=(t,i,e)=>i.has(t)||Te("Cannot "+e);var r=(t,i,e)=>(he(t,i,"read from private field"),e?e.call(t):i.get(t)),l=(t,i,e)=>i.has(t)?Te("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,e),d=(t,i,e,n)=>(he(t,i,"write to private field"),n?n.call(t,e):i.set(t,e),e),h=(t,i,e)=>(he(t,i,"access private method"),e);var jt={};xt(jt,{apply:()=>qt,inject:()=>Ot,notifyLangChange:()=>zt});module.exports=vt(jt);var a=require("react"),De=require("@deepseek-ai/dsh-client-ui-primitives");var Ce=[32,40,48],K=48,U=16,de=8,Pe=3;function le(t,i=window.innerHeight,e=48){let n=Math.max(de,i-e-de);return Math.min(n,Math.max(de,Math.round(t)))}var wt={running:'<rect x="9" y="9" width="6" height="6"/>',"input-required":'<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">?</text>',error:'<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">!</text>',success:'<path d="M7 12.5 L10.5 16 L17 8.5" stroke-width="2.5" fill="none"/>'},ae={zh:{idle:"\u4F1A\u8BDD\u7A7A\u95F2",running:"\u4F1A\u8BDD\u8FD0\u884C\u4E2D","input-required":"\u4F1A\u8BDD\u9700\u8981\u4EBA\u5DE5\u4ECB\u5165",error:"\u4F1A\u8BDD\u51FA\u73B0\u5F02\u5E38",success:"\u4EFB\u52A1\u6210\u529F\u5B8C\u6210"},en:{idle:"Session idle",running:"Session running","input-required":"Input required",error:"Session error",success:"Task completed"}};function Me(t){return`<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" class="badge-bg"/>
    <g class="badge-sym">${wt[t]}</g>
  </svg>`}function Le(t,i=document){let e=[],n=i.querySelectorAll("body *");for(let s of n){if(s.tagName==="DSH-PIXEL-BUDDY"||s.closest?.("dsh-pixel-buddy"))continue;let u=getComputedStyle(s).position;if(u!=="fixed"&&u!=="sticky")continue;let p=s.getBoundingClientRect();if(p.width===0||p.height===0)continue;p.left<t.right&&p.right>t.left&&p.top<t.bottom&&p.bottom>t.top&&e.push(St(s))}return{conflicts:e}}function St(t){let i=t.id?`#${t.id}`:"",e=t.classList.length?`.${[...t.classList].slice(0,2).join(".")}`:"";return`${t.tagName.toLowerCase()}${i}${e}`}var Re={id:"duck",label:"\u9E2D\u5B50",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="6" y="4" width="1" height="2" fill="#FFD966"/>'}};var _e={id:"cat",label:"\u732B",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="4" width="1" height="2" fill="#9AA0A8"/><rect x="8" y="4" width="1" height="2" fill="#9AA0A8"/><rect x="4" y="5" width="1" height="1" fill="#6E747C"/><rect x="8" y="5" width="1" height="1" fill="#6E747C"/>'}};var He={id:"dog",label:"\u72D7",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="5" width="1" height="2" fill="#B98A5A"/><rect x="8" y="5" width="1" height="2" fill="#B98A5A"/><rect x="4" y="6" width="1" height="1" fill="#8A5F38"/><rect x="8" y="6" width="1" height="1" fill="#8A5F38"/>'}};var Ie={id:"rabbit",label:"\u5154\u5B50",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="6" width="1" height="1" fill="#F5F7FA"/><rect x="8" y="6" width="1" height="1" fill="#F5F7FA"/><rect x="4" y="6" width="1" height="1" fill="#C9CDD3"/><rect x="8" y="6" width="1" height="1" fill="#C9CDD3"/>'}};var Oe={id:"fox",label:"\u72D0\u72F8",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="4" width="1" height="1" fill="#E8873A"/><rect x="8" y="4" width="1" height="1" fill="#E8873A"/><rect x="4" y="4" width="1" height="1" fill="#C96F1F"/><rect x="8" y="4" width="1" height="1" fill="#C96F1F"/>'}};var qe={id:"hamster",label:"\u4ED3\u9F20",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="4" y="5" width="1" height="1" fill="#D8A25E"/><rect x="8" y="5" width="1" height="1" fill="#D8A25E"/><rect x="4" y="5" width="1" height="1" fill="#8A5F38"/><rect x="8" y="5" width="1" height="1" fill="#8A5F38"/>'}};var ze={id:"panda",label:"\u718A\u732B",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="3" y="4" width="1" height="1" fill="#2B2B2B"/><rect x="8" y="5" width="1" height="1" fill="#2B2B2B"/>'}};var Ne={id:"frog",label:"\u9752\u86D9",svg(){return`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
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
  </svg>`},blinkOverlay(){return'<rect x="2" y="1" width="3" height="3" fill="#6FBF4A"/><rect x="7" y="1" width="3" height="3" fill="#6FBF4A"/><rect x="3" y="2" width="1" height="1" fill="#4C8F33"/><rect x="8" y="2" width="1" height="1" fill="#4C8F33"/>'}};var ce={duck:Re,cat:_e,dog:He,rabbit:Ie,fox:Oe,hamster:qe,panda:ze,frog:Ne},Bt="duck",li=Object.values(ce);function ue(t){return(t!=null?ce[t]:void 0)??ce[Bt]}var Et=214748e4,kt=150,At=`
  :host {
    position: fixed;
    right: ${U}px;
    left: auto;
    bottom: ${U}px;
    z-index: ${Et};
    width: var(--buddy-size, ${K}px);
    height: var(--buddy-size, ${K}px);
    line-height: 0;
    user-select: none;
    -webkit-user-select: none;
    cursor: grab;
  }
  :host([side='left']) {
    right: auto;
    left: ${U}px;
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
    transition: opacity ${kt}ms linear; /* crossfade \u4EC5\u4F5C\u7528\u4E8E\u5FBD\u7AE0 */
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
`,O,E,P,k,v,m,w,M,Z,L,S,X,x,q,V,z,N,o,W,ge,$e,ee,Ye,pe,Ue,fe,Ge,ye,me,xe,G,be,ve,we,Ze,B=class extends HTMLElement{constructor(){super(...arguments);l(this,o);l(this,O,null);l(this,E,null);l(this,P,null);l(this,k,null);l(this,v,null);l(this,m,null);l(this,w,null);l(this,M,0);l(this,Z,"idle");l(this,L,"zh");l(this,S,U);this.onAck=null;l(this,X,()=>{r(this,q)||this.onAck?.()});l(this,x,null);l(this,q,!1);this.onDragEnd=null;l(this,V,e=>{e.button===0&&(e.preventDefault(),d(this,x,{startY:e.clientY,startBottom:r(this,S),moved:!1}),this.setAttribute("dragging",""),window.addEventListener("mousemove",r(this,z)),window.addEventListener("mouseup",r(this,N)))});l(this,z,e=>{if(!r(this,x))return;let n=r(this,x).startY-e.clientY;!r(this,x).moved&&Math.abs(n)>Pe&&(r(this,x).moved=!0),r(this,x).moved&&(d(this,S,le(r(this,x).startBottom+n)),h(this,o,W).call(this,r(this,S)))});l(this,N,()=>{window.removeEventListener("mousemove",r(this,z)),window.removeEventListener("mouseup",r(this,N));let e=r(this,x)?.moved===!0;d(this,x,null),this.removeAttribute("dragging"),e&&(d(this,q,!0),setTimeout(()=>d(this,q,!1),0),this.onDragEnd?.(r(this,S)))})}connectedCallback(){if(r(this,O))return;let e=this.attachShadow({mode:"closed"});d(this,O,e);let n=document.createElement("style");n.textContent=At;let s=document.createElement("div");s.className="pet-wrap",d(this,E,s),s.innerHTML=h(this,o,pe).call(this,h(this,o,ee).call(this)),d(this,w,[je(),je()]),d(this,m,document.createElement("div")),r(this,m).className="sr-live",r(this,m).setAttribute("role","status"),r(this,m).setAttribute("aria-live","polite"),e.append(n,s,...r(this,w),r(this,m)),h(this,o,we).call(this,h(this,o,be).call(this)),h(this,o,xe).call(this,h(this,o,ye).call(this)),h(this,o,W).call(this,r(this,S)),h(this,o,fe).call(this,h(this,o,ee).call(this)),h(this,o,Ze).call(this),this.addEventListener("click",r(this,X)),this.addEventListener("mousedown",r(this,V)),this.dataset.state="idle"}get bottomOffset(){return r(this,S)}set bottomOffset(e){d(this,S,le(e)),h(this,o,W).call(this,r(this,S))}get lang(){return r(this,L)}set lang(e){this.setAttribute("lang",e)}get blink(){return this.getAttribute("blink")==="on"}set blink(e){this.setAttribute("blink",e?"on":"off")}get side(){return h(this,o,ge).call(this,this.getAttribute("side"))}set side(e){this.setAttribute("side",e)}setState(e){if(!r(this,w)||e===r(this,Z))return;let n=r(this,w)[r(this,M)],s=r(this,w)[1-r(this,M)];e==="idle"?n.classList.remove("visible"):(s.querySelector("svg")?.remove(),s.insertAdjacentHTML("afterbegin",Me(e)),s.className=`badge badge--${e}`,s.setAttribute("aria-label",ae[r(this,L)][e]),s.classList.add("visible"),n.classList.remove("visible"),d(this,M,1-r(this,M))),d(this,Z,e),this.dataset.state=e,r(this,m)&&(r(this,m).textContent=ae[r(this,L)][e])}attributeChangedCallback(e,n,s){e==="size"&&h(this,o,we).call(this,h(this,o,ve).call(this,s)),e==="theme"&&h(this,o,xe).call(this,h(this,o,me).call(this,s)),e==="pet"&&h(this,o,Ge).call(this,h(this,o,Ye).call(this,s)),e==="side"&&h(this,o,$e).call(this,h(this,o,ge).call(this,s)),e==="blink"&&h(this,o,Ue).call(this,s==="on"),e==="lang"&&d(this,L,s==="en"?"en":"zh")}get size(){return h(this,o,be).call(this)}set size(e){this.setAttribute("size",String(e))}get pet(){return h(this,o,ee).call(this).id}set pet(e){this.setAttribute("pet",e)}get theme(){return h(this,o,ye).call(this)}set theme(e){this.setAttribute("theme",e)}__testBadges(){return r(this,w)?[...r(this,w)]:[]}__testWrap(){return r(this,E)}__testPetSvg(){return r(this,E)?.innerHTML??""}__testLiveRegion(){return r(this,m)}destroy(){r(this,k)&&r(this,v)&&r(this,k).removeEventListener("change",r(this,v)),d(this,k,null),d(this,v,null),this.removeEventListener("click",r(this,X)),this.removeEventListener("mousedown",r(this,V)),window.removeEventListener("mousemove",r(this,z)),window.removeEventListener("mouseup",r(this,N)),this.remove(),d(this,O,null),d(this,w,null),d(this,m,null),d(this,E,null),d(this,P,null)}};O=new WeakMap,E=new WeakMap,P=new WeakMap,k=new WeakMap,v=new WeakMap,m=new WeakMap,w=new WeakMap,M=new WeakMap,Z=new WeakMap,L=new WeakMap,S=new WeakMap,X=new WeakMap,x=new WeakMap,q=new WeakMap,V=new WeakMap,z=new WeakMap,N=new WeakMap,o=new WeakSet,W=function(e){this.style.bottom=`${e}px`},ge=function(e){return e==="left"?"left":"right"},$e=function(e){e==="left"?this.setAttribute("data-side","left"):this.removeAttribute("data-side")},ee=function(){return r(this,P)??ue(this.getAttribute("pet"))},Ye=function(e){return ue(e)},pe=function(e){let n=e.blinkOverlay?`<svg class="lids" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">${e.blinkOverlay()}</svg>`:"";return e.svg()+n},Ue=function(e){e?this.setAttribute("data-blink","on"):this.removeAttribute("data-blink")},fe=function(e){let n=r(this,E)?.querySelector(".lids");if(!n)return;let s=0;for(let u of e.id)s+=u.charCodeAt(0);n.style.animationDelay=`-${s%46*100}ms`},Ge=function(e){r(this,P)===e||!r(this,E)||(d(this,P,e),r(this,E).innerHTML=h(this,o,pe).call(this,e),h(this,o,fe).call(this,e))},ye=function(){return h(this,o,me).call(this,this.getAttribute("theme"))},me=function(e){return e==="light"||e==="dark"?e:"auto"},xe=function(e){if(r(this,k)&&r(this,v)&&(r(this,k).removeEventListener("change",r(this,v)),d(this,k,null),d(this,v,null)),e!=="auto"){h(this,o,G).call(this,e);return}let n=window.matchMedia?.("(prefers-color-scheme: dark)");if(!n){h(this,o,G).call(this,"light");return}d(this,k,n),d(this,v,()=>h(this,o,G).call(this,n.matches?"dark":"light")),n.addEventListener("change",r(this,v)),h(this,o,G).call(this,n.matches?"dark":"light")},G=function(e){e==="dark"?this.setAttribute("data-theme","dark"):this.removeAttribute("data-theme")},be=function(){return h(this,o,ve).call(this,this.getAttribute("size"))},ve=function(e){let n=e===null?NaN:Number(e);return Ce.includes(n)?n:K},we=function(e){this.style.setProperty("--buddy-size",`${e}px`)},Ze=function(){requestAnimationFrame(()=>{if(!this.isConnected)return;let{conflicts:e}=Le(this.getBoundingClientRect());e.length>0&&console.warn("[dsh-pixel-buddy] \u53F3\u4E0B\u89D2\u68C0\u6D4B\u5230\u5BBF\u4E3B\u60AC\u6D6E\u5143\u7D20\u91CD\u53E0\uFF0C\u9700\u4EA7\u54C1\u88C1\u51B3\u9519\u4F4D\u65B9\u6848\uFF1A",e)})},B.tagName="dsh-pixel-buddy",B.observedAttributes=["size","theme","pet","side","blink","lang"];function je(){let t=document.createElement("div");return t.className="badge",t}function Xe(){customElements.get(B.tagName)||customElements.define(B.tagName,B)}var Ve={"stream:start":"task-start","stream:end":"task-success","stream:error":"task-error","confirmation:request":"input-required"},Qe=new Set(["task-success","task-error"]),Ft=200,Dt=[1e3,2e3,4e3],f,R,D,j,A,_,$,F,Y,g,Se,Je,Ke,We,Be,et,tt,it,te=class{constructor(i){l(this,g);l(this,f);l(this,R,new Set);l(this,D,new Map);l(this,j,new Map);l(this,A,null);l(this,_,!1);l(this,$,0);l(this,F,null);l(this,Y,!1);d(this,f,{warn:(e,n)=>console.warn(e,n),setTimeoutFn:(e,n)=>setTimeout(e,n),clearTimeoutFn:e=>clearTimeout(e),...i})}subscribe(i){return r(this,R).add(i),h(this,g,Se).call(this),()=>{r(this,R).delete(i),r(this,R).size===0&&h(this,g,Be).call(this)}}};f=new WeakMap,R=new WeakMap,D=new WeakMap,j=new WeakMap,A=new WeakMap,_=new WeakMap,$=new WeakMap,F=new WeakMap,Y=new WeakMap,g=new WeakSet,Se=function(){if(r(this,A)||r(this,Y))return;let i=r(this,f).getApi();if(i){try{h(this,g,Ke).call(this,i)}catch(e){r(this,f).warn("[dsh-pixel-buddy] Hook API \u7ED1\u5B9A\u5931\u8D25\uFF0C\u5DF2\u964D\u7EA7\u4E3A\u5F85\u673A",e),d(this,A,null)}return}h(this,g,Je).call(this)},Je=function(){if(r(this,Y)||r(this,F)!==null)return;let i=Dt[r(this,$)];if(i===void 0){r(this,f).warn("[dsh-pixel-buddy] Hook API \u4E0D\u53EF\u7528\uFF0C\u5DF2\u9759\u9ED8\u56DE\u9000\u5F85\u673A");return}d(this,$,r(this,$)+1),d(this,F,r(this,f).setTimeoutFn(()=>{d(this,F,null),h(this,g,Se).call(this)},i))},Ke=function(i){for(let e of Object.keys(Ve)){let n=s=>h(this,g,et).call(this,e,s);i.on(e,n),r(this,j).set(e,n)}d(this,A,i)},We=function(){if(r(this,A))for(let[i,e]of r(this,j))try{r(this,A).off(i,e)}catch{}d(this,A,null),r(this,j).clear()},Be=function(){h(this,g,We).call(this);for(let i of r(this,D).values())r(this,f).clearTimeoutFn(i);r(this,D).clear(),d(this,_,!1),d(this,$,0),r(this,F)!==null&&(r(this,f).clearTimeoutFn(r(this,F)),d(this,F,null))},et=function(i,e){if(r(this,Y))return;let n=Ve[i];if(!n)return;let s=r(this,D).get(n);s!==void 0&&r(this,f).clearTimeoutFn(s),r(this,D).set(n,r(this,f).setTimeoutFn(()=>{r(this,D).delete(n),h(this,g,tt).call(this,n)},Ft))},tt=function(i){if(Qe.has(i)&&!r(this,_)){r(this,f).warn(`[dsh-pixel-buddy] \u4E22\u5F03\u65E0\u8D77\u59CB\u7684\u7EC8\u6001\u4E8B\u4EF6\uFF1A${i}`);return}i==="task-start"&&d(this,_,!0),Qe.has(i)&&d(this,_,!1),h(this,g,it).call(this,{type:i})},it=function(i){for(let e of r(this,R))try{e(i)}catch(n){r(this,f).warn("[dsh-pixel-buddy] \u4E8B\u4EF6\u5904\u7406\u5F02\u5E38\uFF0C\u5DF2\u964D\u7EA7\u4E3A\u5F85\u673A",n),h(this,g,Be).call(this);return}};var rt={current:"idle",stickyError:!1,stickyInputRequired:!1,taskActive:!1,timerMs:null};function nt(t,i){switch(i.type){case"user-ack":return Tt(t);case"timer-elapsed":return t.current==="success"||t.current==="running"?{...t,current:"idle",timerMs:null}:{...t,timerMs:null};case"task-start":return Ct(t);case"task-success":case"task-error":case"input-required":return Pt(t,i.type);default:return i}}function Tt(t){return!t.stickyError&&!t.stickyInputRequired?t:{...t,stickyError:!1,stickyInputRequired:!1,current:"idle",timerMs:null}}function Ct(t){let i={...t,taskActive:!0,timerMs:6e5};return i.stickyError?i.current="error":i.stickyInputRequired?i.current="input-required":i.current="running",i}function Pt(t,i){if(!t.taskActive)return t;let e={...t,timerMs:null};switch(i){case"task-error":return e.stickyError=!0,e.taskActive=!1,e.current="error",e.timerMs=null,e;case"input-required":return e.stickyInputRequired=!0,e.stickyError||(e.current="input-required"),e.timerMs=null,e;case"task-success":return e.taskActive=!1,e.stickyError?(e.current="error",e):e.stickyInputRequired?(e.current="input-required",e):(e.current="success",e.timerMs=2500,e);default:return i}}var Mt={schedule:(t,i)=>setTimeout(t,i),cancel:t=>clearTimeout(t)};function st(t,i,e=Mt){let n=rt,s=null,u=()=>{s!==null&&(e.cancel(s),s=null)},p=C=>{let c=nt(n,C);c!==n&&(n=c,i.setState(c.current),u(),c.timerMs!==null&&(s=e.schedule(()=>{s=null,p({type:"timer-elapsed"})},c.timerMs)))},T=t.subscribe(C=>p(C));return{dispatch:C=>p(C),destroy:()=>{T(),u()}}}function ot(t=document.body,i={}){Xe();let e=document.querySelector(`body > ${B.tagName}`);if(e instanceof B)return{destroy:()=>e.destroy()};let n=document.createElement(B.tagName);t.appendChild(n);let s=i.adapter??new te({getApi:Lt}),u=st(s,n);return n.onAck=()=>u.dispatch({type:"user-ack"}),{destroy:()=>{n.onAck=null,u.destroy(),n.destroy()}}}function Lt(){return globalThis.dshHooks}var ie={zh:{settings:{pet:"\u5BA0\u7269\u5F62\u8C61",side:"\u663E\u793A\u4F4D\u7F6E",showPet:"\u663E\u793A\u5BA0\u7269",blink:"\u5F85\u673A\u7728\u773C\u52A8\u753B",sideRight:"\u53F3\u4FA7",sideLeft:"\u5DE6\u4FA7"},pets:{duck:"\u9E2D\u5B50",cat:"\u732B",dog:"\u72D7",rabbit:"\u5154\u5B50",fox:"\u72D0\u72F8",hamster:"\u4ED3\u9F20",panda:"\u718A\u732B",frog:"\u9752\u86D9"},states:{idle:"\u4F1A\u8BDD\u7A7A\u95F2",running:"\u4F1A\u8BDD\u8FD0\u884C\u4E2D",inputRequired:"\u4F1A\u8BDD\u9700\u8981\u4EBA\u5DE5\u4ECB\u5165",error:"\u4F1A\u8BDD\u51FA\u73B0\u5F02\u5E38",success:"\u4EFB\u52A1\u6210\u529F\u5B8C\u6210"}},en:{settings:{pet:"Pet",side:"Position",showPet:"Show pet",blink:"Idle blink animation",sideRight:"Right",sideLeft:"Left"},pets:{duck:"Duck",cat:"Cat",dog:"Dog",rabbit:"Rabbit",fox:"Fox",hamster:"Hamster",panda:"Panda",frog:"Frog"},states:{idle:"Session idle",running:"Session running",inputRequired:"Input required",error:"Session error",success:"Task completed"}}};function H(t,i,e){return(ie[t]??ie.zh)[i][e]??e}function Ee(t,i){return(ie[t]??ie.zh).pets[i]??i}var I,ke=class{constructor(){l(this,I,new Set)}dispatch(i){for(let e of r(this,I))e(i)}subscribe(i){return r(this,I).add(i),()=>r(this,I).delete(i)}reset(){r(this,I).clear()}};I=new WeakMap;var Ae=new ke;var ht={error:3,"input-required":2,running:1,idle:0};function Rt(t){return t?t.promptError!=null?"error":Array.isArray(t.pending)&&t.pending.length>0?"input-required":t.running===!0||t.partial!=null||Array.isArray(t.runningCalls)&&t.runningCalls.length>0?"running":"idle":"idle"}function _t(t,i){let e=s=>Ae.dispatch({type:s}),n=()=>{t!=="running"&&e("task-start")};if(t===null){i==="running"&&e("task-start"),i==="error"&&(e("task-start"),e("task-error")),i==="input-required"&&(e("task-start"),e("input-required"));return}if(t!==i)switch(i){case"running":(t==="error"||t==="input-required")&&e("user-ack"),n();break;case"idle":(t==="error"||t==="input-required")&&e("user-ack"),t==="running"&&e("task-success");break;case"input-required":(t==="error"||t==="input-required")&&e("user-ack"),n(),e("input-required");break;case"error":n(),e("task-error");break}}var dt={statusBySession:new Map,globalPrev:null,update(t,i){this.statusBySession.set(t,i);let e="idle";for(let n of this.statusBySession.values())ht[n]>ht[e]&&(e=n);e!==this.globalPrev&&(_t(this.globalPrev,e),this.globalPrev=e)},remove(t){this.statusBySession.delete(t),this.statusBySession.size===0?this.globalPrev=null:this.update(t,this.statusBySession.values().next().value)}},Q=null,Fe=0,y={pet:"duck",visible:!0,side:"right",bottomOffset:16,blink:!1},gt=null,b="zh",J=null,se=new Set;function Ht(t){return se.add(t),()=>se.delete(t)}function pt(){let t=document.querySelector("dsh-pixel-buddy");t&&(t.setAttribute("pet",y.pet),t.style.display=y.visible?"":"none",t.setAttribute("side",y.side),t.bottomOffset=y.bottomOffset,t.blink=y.blink)}function It(t){let{useSession:i,sessionId:e}=t,n=i(Rt);return(0,a.useEffect)(()=>{dt.update(e,n)},[e,n]),(0,a.useEffect)(()=>{Fe+=1,Q||(Q=ot(document.body,{adapter:Ae})),pt();let s=document.querySelector("dsh-pixel-buddy");s&&(s.lang=b);let u=document.querySelector("dsh-pixel-buddy");return u&&(u.onDragEnd=p=>void gt?.set("bottomOffset",p)),()=>{Fe-=1,Fe===0&&Q&&(Q.destroy(),Q=null,dt.globalPrev=null)}},[]),null}var Ot=["slots","settingsScope"];function qt(t){let i=t.settingsScope.bind({namespace:"dsh-pixel-buddy"});gt=i,J=t.settingsScope.bind({namespace:"locale"});let e=()=>{if(!J)return;let u=J.getSnapshot().value?.preference==="en"?"en":"zh";if(u!==b){b=u;let p=document.querySelector("dsh-pixel-buddy");p&&(p.lang=b);for(let T of se)T()}};J.subscribe(e),window.__dshBuddyLocale=J,e();let n=()=>{let s=i.getSnapshot();s.value?.pet&&(y.pet=s.value.pet),typeof s.value?.visible=="boolean"&&(y.visible=s.value.visible),(s.value?.side==="left"||s.value?.side==="right")&&(y.side=s.value.side),typeof s.value?.bottomOffset=="number"&&(y.bottomOffset=s.value.bottomOffset),typeof s.value?.blink=="boolean"&&(y.blink=s.value.blink),pt()};i.subscribe(n),n(),t.slots.inject("settings.general.item",()=>t.slots.register({name:"settings.general.item",id:"dsh-pixel-buddy",order:90},()=>Nt(i))),t.slots.inject("conversation.session.header.utilities",()=>t.slots.register({name:"conversation.session.header.utilities",id:"dsh-pixel-buddy",order:90,label:"PixelBuddy"},It))}var lt=["duck","cat","dog","rabbit","fox","hamster","panda","frog"],re={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",padding:"8px 0",minHeight:"32px"},ne={color:"inherit"},at={display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 10px",background:"rgba(127, 127, 127, 0.12)",border:"1px solid rgba(127, 127, 127, 0.25)",borderRadius:"8px",color:"inherit",font:"inherit",fontSize:"13px",cursor:"pointer"},ct={opacity:"0.6",fontSize:"10px"};function zt(){for(let t of se)t()}function ut(t){let{checked:i,onChange:e}=t;return(0,a.createElement)("button",{type:"button",role:"switch","aria-checked":i,style:{width:"36px",height:"20px",borderRadius:"10px",background:i?"#4C7DFF":"rgba(127, 127, 127, 0.35)",border:"none",padding:"2px",display:"inline-flex",alignItems:"center",cursor:"pointer",transition:"background 150ms linear",justifyContent:i?"flex-end":"flex-start"},onClick:()=>e(!i)},(0,a.createElement)("span",{style:{width:"16px",height:"16px",borderRadius:"50%",background:"#ffffff",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)",transition:"transform 150ms linear"}}))}function Nt(t){let[,i]=(0,a.useReducer)(c=>c+1,0),[e,n]=(0,a.useState)(!1),[s,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>t.subscribe(i),[t]),(0,a.useEffect)(()=>Ht(i),[]);let p=t.getSnapshot(),T=p.value?.pet??"duck",C=p.value?.visible??!0;return(0,a.createElement)("div",null,(0,a.createElement)("div",{style:re},(0,a.createElement)("span",{style:ne},H(b,"settings","pet")),(0,a.createElement)(De.Menu,{open:e,portal:!0,anchor:(0,a.createElement)("button",{type:"button",style:at,"aria-haspopup":"listbox","aria-expanded":e,onClick:()=>n(c=>!c)},(0,a.createElement)("span",null,Ee(b,T)),(0,a.createElement)("span",{style:ct},"\u25BC")),items:lt.map(c=>({id:c,label:Ee(b,c)})),selectedId:T,onSelect:c=>{lt.includes(c)&&t.set("pet",c),n(!1)},onClose:()=>n(!1)})),(0,a.createElement)("div",{style:re},(0,a.createElement)("span",{style:ne},H(b,"settings","side")),(0,a.createElement)(De.Menu,{open:s,portal:!0,anchor:(0,a.createElement)("button",{type:"button",style:at,"aria-haspopup":"listbox","aria-expanded":s,onClick:()=>u(c=>!c)},(0,a.createElement)("span",null,H(b,"settings",y.side==="left"?"sideLeft":"sideRight")),(0,a.createElement)("span",{style:ct},"\u25BC")),items:["right","left"].map(c=>({id:c,label:H(b,"settings",c==="left"?"sideLeft":"sideRight")})),selectedId:y.side,onSelect:c=>{(c==="left"||c==="right")&&t.set("side",c),u(!1)},onClose:()=>u(!1)})),(0,a.createElement)("div",{style:re},(0,a.createElement)("span",{style:ne},H(b,"settings","showPet")),(0,a.createElement)(ut,{checked:C,onChange:c=>{t.set("visible",c)}})),(0,a.createElement)("div",{style:re},(0,a.createElement)("span",{style:ne},H(b,"settings","blink")),(0,a.createElement)(ut,{checked:y.blink,onChange:c=>{t.set("blink",c)}})))}

    return module.exports;
  }
});
