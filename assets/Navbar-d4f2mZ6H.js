var p=Object.defineProperty;var h=(s,i,t)=>i in s?p(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t;var o=(s,i,t)=>h(s,typeof i!="symbol"?i+"":i,t);import{j as e,r as l}from"./index-Cz1kTmYD.js";import{d as m}from"./styled-components.browser.esm-sfhTt9Ek.js";import{c as d}from"./createLucideIcon-ShADWC_f.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=d("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=d("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);let b=class extends HTMLElement{constructor(){super();o(this,"_propsToUpgrade",{});o(this,"shadow");o(this,"template");o(this,"defaultProps");o(this,"isAttached",!1);this.shadow=this.attachShadow({mode:"open"}),this.template=document.createElement("template")}storePropsToUpgrade(t){t.forEach(a=>{this.hasOwnProperty(a)&&this[a]!==void 0&&(this._propsToUpgrade[a]=this[a],delete this[a])})}upgradeStoredProps(){Object.entries(this._propsToUpgrade).forEach(([t,a])=>{this.setAttribute(t,a)})}reflect(t){t.forEach(a=>{Object.defineProperty(this,a,{set(r){"string,number".includes(typeof r)?this.setAttribute(a,r.toString()):this.removeAttribute(a)},get(){return this.getAttribute(a)}})})}applyDefaultProps(t){this.defaultProps=t,Object.entries(t).forEach(([a,r])=>{this[a]=this[a]||r.toString()})}};var n=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate calc(var(--uib-speed)*4) linear infinite;height:var(--uib-size);position:relative;width:var(--uib-size)}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.particle{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.particle:first-child{--uib-delay:0;transform:rotate(8deg)}.particle:nth-child(2){--uib-delay:-0.4;transform:rotate(36deg)}.particle:nth-child(3){--uib-delay:-0.9;transform:rotate(72deg)}.particle:nth-child(4){--uib-delay:-0.5;transform:rotate(90deg)}.particle:nth-child(5){--uib-delay:-0.3;transform:rotate(144deg)}.particle:nth-child(6){--uib-delay:-0.2;transform:rotate(180deg)}.particle:nth-child(7){--uib-delay:-0.6;transform:rotate(216deg)}.particle:nth-child(8){--uib-delay:-0.7;transform:rotate(252deg)}.particle:nth-child(9){--uib-delay:-0.1;transform:rotate(300deg)}.particle:nth-child(10){--uib-delay:-0.8;transform:rotate(324deg)}.particle:nth-child(11){--uib-delay:-1.2;transform:rotate(335deg)}.particle:nth-child(12){--uib-delay:-0.5;transform:rotate(290deg)}.particle:nth-child(13){--uib-delay:-0.2;transform:rotate(240deg)}.particle:before{--uib-d:calc(var(--uib-delay)*var(--uib-speed));animation:orbit var(--uib-speed) linear var(--uib-d) infinite;background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:17.5%;position:absolute;transition:background-color .3s ease;width:17.5%}@keyframes orbit{0%{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}5%{opacity:.58;transform:translate(calc(var(--uib-size)*.4)) scale(.684208)}10%{opacity:.51;transform:translate(calc(var(--uib-size)*.3)) scale(.631576)}15%{opacity:.44;transform:translate(calc(var(--uib-size)*.2)) scale(.578944)}20%{opacity:.37;transform:translate(calc(var(--uib-size)*.1)) scale(.526312)}25%{opacity:.3;transform:translate(0) scale(.47368)}30%{opacity:.37;transform:translate(calc(var(--uib-size)*-.1)) scale(.526312)}35%{opacity:.44;transform:translate(calc(var(--uib-size)*-.2)) scale(.578944)}40%{opacity:.51;transform:translate(calc(var(--uib-size)*-.3)) scale(.631576)}45%{opacity:.58;transform:translate(calc(var(--uib-size)*-.4)) scale(.684208)}50%{opacity:.65;transform:translate(calc(var(--uib-size)*-.5)) scale(.73684)}55%{opacity:.72;transform:translate(calc(var(--uib-size)*-.4)) scale(.789472)}60%{opacity:.79;transform:translate(calc(var(--uib-size)*-.3)) scale(.842104)}65%{opacity:.86;transform:translate(calc(var(--uib-size)*-.2)) scale(.894736)}70%{opacity:.93;transform:translate(calc(var(--uib-size)*-.1)) scale(.947368)}75%{opacity:1;transform:translate(0) scale(1)}80%{opacity:.93;transform:translate(calc(var(--uib-size)*.1)) scale(.947368)}85%{opacity:.86;transform:translate(calc(var(--uib-size)*.2)) scale(.894736)}90%{opacity:.79;transform:translate(calc(var(--uib-size)*.3)) scale(.842104)}95%{opacity:.72;transform:translate(calc(var(--uib-size)*.4)) scale(.789472)}to{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}}';class c extends b{constructor(){super();o(this,"_attributes",["size","color","speed"]);o(this,"size");o(this,"color");o(this,"speed");this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}static get observedAttributes(){return["size","color","speed"]}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:1.75}),this.template.innerHTML=`
      <div class="container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${n}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){const t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${n}
    `)}}var v={register:(s="l-quantum")=>{customElements.get(s)||customElements.define(s,class extends c{})},element:c};const y=()=>e.jsx(g,{children:e.jsx("div",{className:"pyramid-loader",children:e.jsxs("div",{className:"wrapper",children:[e.jsx("span",{className:"side side1"}),e.jsx("span",{className:"side side2"}),e.jsx("span",{className:"side side3"}),e.jsx("span",{className:"side side4"}),e.jsx("span",{className:"shadow"})]})})}),g=m.div`
  .pyramid-loader {
    position: relative;
    width: 30px; /* Smaller Size */
    height: 65px;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }

  .pyramid-loader .wrapper .side {
    width: 40px; /* Reduced Size */
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  .pyramid-loader .wrapper .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585);
  }

  .pyramid-loader .wrapper .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac);
  }

  .pyramid-loader .wrapper .side3 {
    transform: rotateX(30deg);
    background: conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac);
  }

  .pyramid-loader .wrapper .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585);
  }

  .pyramid-loader .wrapper .shadow {
    width: 30px; /* Adjusted */
    height: 30px;
    background: #8b5ad5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-20px); /* Adjusted for Proportion */
    filter: blur(10px);
  }
`,N=()=>{const[s,i]=l.useState(!1),[t,a]=l.useState(!1);return l.useEffect(()=>{v.register();const r=()=>{a(window.scrollY>20)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),e.jsx("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"bg-background/80 backdrop-blur-md shadow-sm":""}`,children:e.jsx("nav",{className:"container mx-auto px-4 py-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsx(y,{}),e.jsx("span",{className:"text-xl font-display font-bold",children:"Glen Jayson Dmello"})]}),e.jsx("button",{className:"md:hidden mr-5",onClick:()=>i(!s),"aria-label":"Toggle menu",children:s?e.jsx(f,{size:24}):e.jsx(u,{size:24})}),e.jsx("div",{className:"hidden md:flex gap-8 mr-8",children:["Home","About","Skills","Projects","Contact"].map(r=>e.jsx("a",{href:`#${r.toLowerCase()}`,className:"nav-link",children:r},r))}),s&&e.jsx("div",{className:"absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b md:hidden animate-fade-down",children:e.jsx("div",{className:"container mx-auto px-6 py-4",children:["Home","About","Skills","Projects","Contact"].map(r=>e.jsx("a",{href:`#${r.toLowerCase()}`,className:"block py-2 nav-link",onClick:()=>i(!1),children:r},r))})})]})})})};export{N as default};
