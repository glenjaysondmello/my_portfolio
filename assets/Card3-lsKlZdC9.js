import{j as n,r as h}from"./index-B2NxUSXS.js";import{d as m}from"./styled-components.browser.esm-D5QQHCIa.js";const x="/my_portfolio/profile.jpeg";function c(){return c=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},c.apply(this,arguments)}var b={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,r){},onStringTyped:function(i,r){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,r){},onTypingResumed:function(i,r){},onReset:function(i){},onStop:function(i,r){},onStart:function(i,r){},onDestroy:function(i){}},k=new(function(){function i(){}var r=i.prototype;return r.load=function(t,s,e){if(t.el=typeof e=="string"?document.querySelector(e):e,t.options=c({},b,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(u){return u.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var a=Array.prototype.slice.apply(t.stringsElement.children),o=a.length;if(o)for(var l=0;l<o;l+=1)t.strings.push(a[l].innerHTML.trim())}for(var p in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[p]=p;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},r.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},r.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(e)}},r.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(e)}},i}()),f=new(function(){function i(){}var r=i.prototype;return r.typeHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var a=t.substring(s).charAt(0);if(a==="<"||a==="&"){var o;for(o=a==="<"?">":";";t.substring(s+1).charAt(0)!==o&&!(1+ ++s>t.length););s++}return s},r.backSpaceHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var a=t.substring(s).charAt(0);if(a===">"||a===";"){var o;for(o=a===">"?"<":"&";t.substring(s-1).charAt(0)!==o&&!(--s<0););s--}return s},i}()),v=function(){function i(t,s){k.load(this,s,t),this.begin()}var r=i.prototype;return r.toggle=function(){this.pause.status?this.start():this.stop()},r.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},r.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},r.destroy=function(){this.reset(!1),this.options.onDestroy(this)},r.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},r.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},r.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=f.typeHtmlChars(t,s,e);var l=0,p=t.substring(s);if(p.charAt(0)==="^"&&/^\^\d+/.test(p)){var u=1;u+=(p=/\d+/.exec(p)[0]).length,l=parseInt(p),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+u),e.toggleBlinking(!0)}if(p.charAt(0)==="`"){for(;t.substring(s+o).charAt(0)!=="`"&&(o++,!(s+o>t.length)););var d=t.substring(0,s),y=t.substring(d.length+1,s+o),g=t.substring(s+o+1);t=d+y+g,o--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,o),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},l)},a):this.setPauseStatus(t,s,!0)},r.keepTyping=function(t,s,e){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var a=t.substring(0,s+=e);this.replaceText(a),this.typewrite(t,s)},r.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},r.backspace=function(t,s){var e=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=f.backSpaceHtmlChars(t,s,e);var o=t.substring(0,s);if(e.replaceText(o),e.smartBackspace){var l=e.strings[e.arrayPos+1];e.stopNum=l&&o===l.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},a)}else this.setPauseStatus(t,s,!1)},r.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},r.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},r.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},r.humanizer=function(t){return Math.round(Math.random()*t/2)+t},r.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},r.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},r.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},r.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},r.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}();const j=()=>n.jsx(C,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:200,width:200,children:n.jsxs("g",{style:{order:-1},children:[n.jsx("polygon",{transform:"rotate(45 100 100)",strokeWidth:1,stroke:"#d3a410",fill:"none",points:"70,70 148,50 130,130 50,150",id:"bounce"}),n.jsx("polygon",{transform:"rotate(45 100 100)",strokeWidth:1,stroke:"#d3a410",fill:"none",points:"70,70 148,50 130,130 50,150",id:"bounce2"}),n.jsx("polygon",{transform:"rotate(45 100 100)",strokeWidth:2,stroke:"none",fill:"#414750",points:"70,70 150,50 130,130 50,150"}),n.jsx("polygon",{strokeWidth:2,stroke:"none",fill:"url(#gradiente)",points:"100,70 150,100 100,130 50,100"}),n.jsx("defs",{children:n.jsxs("linearGradient",{y2:"100%",x2:"10%",y1:"0%",x1:"0%",id:"gradiente",children:[n.jsx("stop",{style:{stopColor:"#1e2026",stopOpacity:1},offset:"20%"}),n.jsx("stop",{style:{stopColor:"#414750",stopOpacity:1},offset:"60%"})]})}),n.jsx("polygon",{transform:"translate(20, 31)",strokeWidth:2,stroke:"none",fill:"#b7870f",points:"80,50 80,75 80,99 40,75"}),n.jsx("polygon",{transform:"translate(20, 31)",strokeWidth:2,stroke:"none",fill:"url(#gradiente2)",points:"40,-40 80,-40 80,99 40,75"}),n.jsx("defs",{children:n.jsxs("linearGradient",{y2:"100%",x2:"0%",y1:"-17%",x1:"10%",id:"gradiente2",children:[n.jsx("stop",{style:{stopColor:"#d3a51000",stopOpacity:1},offset:"20%"}),n.jsx("stop",{style:{stopColor:"#d3a51054",stopOpacity:1},offset:"100%",id:"animatedStop"})]})}),n.jsx("polygon",{transform:"rotate(180 100 100) translate(20, 20)",strokeWidth:2,stroke:"none",fill:"#d3a410",points:"80,50 80,75 80,99 40,75"}),n.jsx("polygon",{transform:"rotate(0 100 100) translate(60, 20)",strokeWidth:2,stroke:"none",fill:"url(#gradiente3)",points:"40,-40 80,-40 80,85 40,110.2"}),n.jsx("defs",{children:n.jsxs("linearGradient",{y2:"100%",x2:"10%",y1:"0%",x1:"0%",id:"gradiente3",children:[n.jsx("stop",{style:{stopColor:"#d3a51000",stopOpacity:1},offset:"20%"}),n.jsx("stop",{style:{stopColor:"#d3a51054",stopOpacity:1},offset:"100%",id:"animatedStop"})]})}),n.jsx("polygon",{transform:"rotate(45 100 100) translate(80, 95)",strokeWidth:2,stroke:"none",fill:"#ffe4a1",points:"5,0 5,5 0,5 0,0",id:"particles"}),n.jsx("polygon",{transform:"rotate(45 100 100) translate(80, 55)",strokeWidth:2,stroke:"none",fill:"#ccb069",points:"6,0 6,6 0,6 0,0",id:"particles"}),n.jsx("polygon",{transform:"rotate(45 100 100) translate(70, 80)",strokeWidth:2,stroke:"none",fill:"#fff",points:"2,0 2,2 0,2 0,0",id:"particles"}),n.jsx("polygon",{strokeWidth:2,stroke:"none",fill:"#292d34",points:"29.5,99.8 100,142 100,172 29.5,130"}),n.jsx("polygon",{transform:"translate(50, 92)",strokeWidth:2,stroke:"none",fill:"#1f2127",points:"50,50 120.5,8 120.5,35 50,80"})]})})}),C=m.div`
  .container {
    background-color: #414141;
  }
  
  @keyframes bounce {
    0%, 100% {
      translate: 0px 36px;
    }
    50% {
      translate: 0px 46px;
    }
  }

  @keyframes bounce2 {
    0%, 100% {
      translate: 0px 46px;
    }
    50% {
      translate: 0px 56px;
    }
  }

  @keyframes umbral {
    0% {
      stop-color: #d3a5102e;
    }
    50% {
      stop-color: rgba(211, 165, 16, 0.519);
    }
    100% {
      stop-color: #d3a5102e;
    }
  }

  @keyframes particles {
    0%, 100% {
      translate: 0px 16px;
    }
    50% {
      translate: 0px 6px;
    }
  }

  #particles {
    animation: particles 4s ease-in-out infinite;
  }

  #animatedStop {
    animation: umbral 4s infinite;
  }

  #bounce {
    animation: bounce 4s ease-in-out infinite;
    translate: 0px 36px;
  }

  #bounce2 {
    animation: bounce2 4s ease-in-out infinite;
    translate: 0px 46px;
    animation-delay: 0.5s;
  }
`,P=()=>{const i=h.useRef(null);return h.useEffect(()=>{const r=new v(i.current,{strings:["MERN Stack Developer","Full Stack Innovator","Aspiring AI Prompt Engineer"],typeSpeed:100,backSpeed:50,backDelay:1e3,loop:!0});return()=>{r.destroy()}},[]),n.jsx(w,{children:n.jsxs("div",{className:"terminal-container",children:[n.jsxs("div",{className:"terminal-toolbar",children:[n.jsxs("div",{className:"buttons",children:[n.jsx("div",{className:"dot red"}),n.jsx("div",{className:"dot yellow"}),n.jsx("div",{className:"dot green"})]}),n.jsx("p",{className:"terminal-title",children:"bash"})]}),n.jsx("div",{className:"container -mt-4",id:"home",children:n.jsxs("div",{className:"terminal_body text-white p-4 rounded-md",children:[n.jsxs("div",{className:"terminal_prompt text-green-400 inline-flex space-x-1 mt-4 mb-2",children:[n.jsx("span",{className:"terminal_user",children:"glenjaysondmello@admin:"}),n.jsx("span",{className:"terminal_location",children:"~"}),n.jsx("span",{className:"terminal_bling",children:"$"}),n.jsx("span",{className:"terminal_cursor mt-1"})]}),n.jsx("div",{className:"terminal_output mb-2",children:n.jsx("pre",{className:"output_text text-white",children:"Welcome to My Portfolio"})}),n.jsxs("div",{className:"hero_section flex flex-col items-center mt-4",children:[n.jsx("img",{src:x,alt:"Profile",className:"profile_img w-24 h-24 rounded-full border-2 border-gray-400"}),n.jsx("div",{className:"boxm mt-2",children:n.jsx("h3",{className:"text-white",children:"Tech Enthusiast"})}),n.jsx("div",{className:"buttons mt-2",children:n.jsx(j,{})}),n.jsx("div",{className:"typing-container mt-2",children:n.jsx("h3",{ref:i,className:"typing-text text-xl font-bold text-white"})}),n.jsx("div",{className:"mt-2",children:n.jsx("a",{href:"/my_portfolio/resume1.pdf",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-4 py-2 mt-3 mb-3 text-sm font-semibold text-white bg-black border border-gray-400 rounded hover:bg-gray-900 transition",children:"📄 View Resume"})}),n.jsx("div",{className:"mt-2",children:n.jsx("p",{className:"text-gray-400",children:"📍 Dakshina Kannada, Karnataka, India"})})]})]})})]})})},w=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .terminal-container {
    background: black;
    color: white;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    font-family: monospace;
    padding: 10px;
  }

  .terminal-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background: #212121;
    border-radius: 8px 8px 0 0;
  }

  .buttons {
    display: flex;
    gap: 5px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .red {
    background: red;
  }
  .yellow {
    background: yellow;
  }
  .green {
    background: green;
  }

  .terminal-body {
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 0 0 8px 8px;
  }

  .hero-section {
    text-align: center;
  }

  .profile-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .typing-text {
    font-size: 1rem;
    font-weight: bold;
    color: #1eff8e;
    margin-top: 10px;
  }

  .location {
    color: gray;
    font-size: 0.9rem;
    margin-top: 8px;
  }

  @keyframes curbl {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .terminal_cursor {
    display: inline-block;
    height: 14px;
    width: 5px;
    background-color: #1eff8e; /* Green color for visibility */
    margin-left: 5px;
    animation: curbl 0.8s infinite;
  }

  .resume-btn {
    background-color: #1eff8e;
    color: black;
    padding: 8px 16px;
    font-size: 0.9rem;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .resume-btn:hover {
    background-color: #00cc6a;
  }
`;export{P as default};
