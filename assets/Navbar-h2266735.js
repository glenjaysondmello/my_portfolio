import{j as e,r as s}from"./index-OT1ieUe4.js";import{d as n}from"./styled-components.browser.esm-CfUZlN5D.js";import{c as d}from"./createLucideIcon-Cmnn1dnd.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=d("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=d("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),p=()=>e.jsx(m,{children:e.jsx("div",{className:"pyramid-loader",children:e.jsxs("div",{className:"wrapper",children:[e.jsx("span",{className:"side side1"}),e.jsx("span",{className:"side side2"}),e.jsx("span",{className:"side side3"}),e.jsx("span",{className:"side side4"}),e.jsx("span",{className:"shadow"})]})})}),m=n.div`
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
`,g=()=>{const[r,t]=s.useState(!1),[o,i]=s.useState(!1);return s.useEffect(()=>{const a=()=>{i(window.scrollY>20)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),e.jsx("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${o?"bg-background/80 backdrop-blur-md shadow-sm":""}`,children:e.jsx("nav",{className:"container mx-auto px-4 py-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsx(p,{}),e.jsx("span",{className:"text-xl font-display font-bold",children:"Glen Jayson Dmello"})]}),e.jsx("button",{className:"md:hidden mr-5",onClick:()=>t(!r),"aria-label":"Toggle menu",children:r?e.jsx(c,{size:24}):e.jsx(l,{size:24})}),e.jsx("div",{className:"hidden md:flex gap-8 mr-8",children:["Home","About","Skills","Projects","Contact"].map(a=>e.jsx("a",{href:`#${a.toLowerCase()}`,className:"nav-link",children:a},a))}),r&&e.jsx("div",{className:"absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b md:hidden animate-fade-down",children:e.jsx("div",{className:"container mx-auto px-6 py-4",children:["Home","About","Skills","Projects","Contact"].map(a=>e.jsx("a",{href:`#${a.toLowerCase()}`,className:"block py-2 nav-link",onClick:()=>t(!1),children:a},a))})})]})})})};export{g as default};
