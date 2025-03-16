function be(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(n,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ce(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fe={exports:{}},d={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=Symbol.for("react.transitional.element"),Ae=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),Ue=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),$e=Symbol.for("react.consumer"),je=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),Be=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),J=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var pe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},he=Object.assign,ve={};function A(e,t,r){this.props=e,this.context=t,this.refs=ve,this.updater=r||pe}A.prototype.isReactComponent={};A.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};A.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function me(){}me.prototype=A.prototype;function G(e,t,r){this.props=e,this.context=t,this.refs=ve,this.updater=r||pe}var V=G.prototype=new me;V.constructor=G;he(V,A.prototype);V.isPureReactComponent=!0;var Q=Array.isArray,v={H:null,A:null,T:null,S:null},ye=Object.prototype.hasOwnProperty;function q(e,t,r,n,o,s){return r=s.ref,{$$typeof:z,type:e,key:t,ref:r!==void 0?r:null,props:s}}function He(e,t){return q(e.type,t,void 0,void 0,void 0,e.props)}function K(e){return typeof e=="object"&&e!==null&&e.$$typeof===z}function ke(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Z=/\/+/g;function k(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ke(""+e.key):t.toString(36)}function ee(){}function Fe(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ee,ee):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function x(e,t,r,n,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case z:case Ae:i=!0;break;case de:return i=e._init,x(i(e._payload),t,r,n,o)}}if(i)return o=o(e),i=n===""?"."+k(e,0):n,Q(o)?(r="",i!=null&&(r=i.replace(Z,"$&/")+"/"),x(o,t,r,"",function(p){return p})):o!=null&&(K(o)&&(o=He(o,r+(o.key==null||e&&e.key===o.key?"":(""+o.key).replace(Z,"$&/")+"/")+i)),t.push(o)),1;i=0;var u=n===""?".":n+":";if(Q(e))for(var a=0;a<e.length;a++)n=e[a],s=u+k(n,a),i+=x(n,t,r,s,o);else if(a=De(e),typeof a=="function")for(e=a.call(e),a=0;!(n=e.next()).done;)n=n.value,s=u+k(n,a++),i+=x(n,t,r,s,o);else if(s==="object"){if(typeof e.then=="function")return x(Fe(e),t,r,n,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function I(e,t,r){if(e==null)return e;var n=[],o=0;return x(e,n,"","",function(s){return t.call(r,s,o++)}),n}function Ye(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var te=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function We(){}d.Children={map:I,forEach:function(e,t,r){I(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return I(e,function(){t++}),t},toArray:function(e){return I(e,function(t){return t})||[]},only:function(e){if(!K(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};d.Component=A;d.Fragment=Le;d.Profiler=Ie;d.PureComponent=G;d.StrictMode=Ue;d.Suspense=Me;d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=v;d.act=function(){throw Error("act(...) is not supported in production builds of React.")};d.cache=function(e){return function(){return e.apply(null,arguments)}};d.cloneElement=function(e,t,r){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=he({},e.props),o=e.key,s=void 0;if(t!=null)for(i in t.ref!==void 0&&(s=void 0),t.key!==void 0&&(o=""+t.key),t)!ye.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(n[i]=t[i]);var i=arguments.length-2;if(i===1)n.children=r;else if(1<i){for(var u=Array(i),a=0;a<i;a++)u[a]=arguments[a+2];n.children=u}return q(e.type,o,void 0,void 0,s,n)};d.createContext=function(e){return e={$$typeof:je,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:$e,_context:e},e};d.createElement=function(e,t,r){var n,o={},s=null;if(t!=null)for(n in t.key!==void 0&&(s=""+t.key),t)ye.call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(o[n]=t[n]);var i=arguments.length-2;if(i===1)o.children=r;else if(1<i){for(var u=Array(i),a=0;a<i;a++)u[a]=arguments[a+2];o.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)o[n]===void 0&&(o[n]=i[n]);return q(e,s,void 0,void 0,null,o)};d.createRef=function(){return{current:null}};d.forwardRef=function(e){return{$$typeof:Ne,render:e}};d.isValidElement=K;d.lazy=function(e){return{$$typeof:de,_payload:{_status:-1,_result:e},_init:Ye}};d.memo=function(e,t){return{$$typeof:Be,type:e,compare:t===void 0?null:t}};d.startTransition=function(e){var t=v.T,r={};v.T=r;try{var n=e(),o=v.S;o!==null&&o(r,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(We,te)}catch(s){te(s)}finally{v.T=t}};d.unstable_useCacheRefresh=function(){return v.H.useCacheRefresh()};d.use=function(e){return v.H.use(e)};d.useActionState=function(e,t,r){return v.H.useActionState(e,t,r)};d.useCallback=function(e,t){return v.H.useCallback(e,t)};d.useContext=function(e){return v.H.useContext(e)};d.useDebugValue=function(){};d.useDeferredValue=function(e,t){return v.H.useDeferredValue(e,t)};d.useEffect=function(e,t){return v.H.useEffect(e,t)};d.useId=function(){return v.H.useId()};d.useImperativeHandle=function(e,t,r){return v.H.useImperativeHandle(e,t,r)};d.useInsertionEffect=function(e,t){return v.H.useInsertionEffect(e,t)};d.useLayoutEffect=function(e,t){return v.H.useLayoutEffect(e,t)};d.useMemo=function(e,t){return v.H.useMemo(e,t)};d.useOptimistic=function(e,t){return v.H.useOptimistic(e,t)};d.useReducer=function(e,t,r){return v.H.useReducer(e,t,r)};d.useRef=function(e){return v.H.useRef(e)};d.useState=function(e){return v.H.useState(e)};d.useSyncExternalStore=function(e,t,r){return v.H.useSyncExternalStore(e,t,r)};d.useTransition=function(){return v.H.useTransition()};d.version="19.0.0";fe.exports=d;var c=fe.exports;const ze=ce(c),Ge=be({__proto__:null,default:ze},[c]);var ge={exports:{}},C={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=c;function Ee(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(){}var R={d:{f:O,r:function(){throw Error(Ee(522))},D:O,C:O,L:O,m:O,X:O,S:O,M:O},p:0,findDOMNode:null},qe=Symbol.for("react.portal");function Ke(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qe,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}var L=Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R;C.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Ee(299));return Ke(e,t,null,r)};C.flushSync=function(e){var t=L.T,r=R.p;try{if(L.T=null,R.p=2,e)return e()}finally{L.T=t,R.p=r,R.d.f()}};C.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,R.d.C(e,t))};C.prefetchDNS=function(e){typeof e=="string"&&R.d.D(e)};C.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var r=t.as,n=N(r,t.crossOrigin),o=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;r==="style"?R.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:n,integrity:o,fetchPriority:s}):r==="script"&&R.d.X(e,{crossOrigin:n,integrity:o,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};C.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var r=N(t.as,t.crossOrigin);R.d.M(e,{crossOrigin:r,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&R.d.M(e)};C.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var r=t.as,n=N(r,t.crossOrigin);R.d.L(e,r,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};C.preloadModule=function(e,t){if(typeof e=="string")if(t){var r=N(t.as,t.crossOrigin);R.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:r,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else R.d.m(e)};C.requestFormReset=function(e){R.d.r(e)};C.unstable_batchedUpdates=function(e,t){return e(t)};C.useFormState=function(e,t,r){return L.H.useFormState(e,t,r)};C.useFormStatus=function(){return L.H.useHostTransitionStatus()};C.version="19.0.0";function _e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_e)}catch(e){console.error(e)}}_e(),ge.exports=C;var Xe=ge.exports;const Nt=ce(Xe);/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$.apply(this,arguments)}var w;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(w||(w={}));const re="popstate";function Je(e){e===void 0&&(e={});function t(n,o){let{pathname:s,search:i,hash:u}=n.location;return F("",{pathname:s,search:i,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Ce(o)}return Ze(t,r,null,e)}function T(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Re(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qe(){return Math.random().toString(36).substr(2,8)}function ne(e,t){return{usr:e.state,key:e.key,idx:t}}function F(e,t,r,n){return r===void 0&&(r=null),$({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?M(t):t,{state:r,key:t&&t.key||n||Qe()})}function Ce(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function M(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ze(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:s=!1}=n,i=o.history,u=w.Pop,a=null,p=h();p==null&&(p=0,i.replaceState($({},i.state,{idx:p}),""));function h(){return(i.state||{idx:null}).idx}function l(){u=w.Pop;let f=h(),_=f==null?null:f-p;p=f,a&&a({action:u,location:m.location,delta:_})}function y(f,_){u=w.Push;let P=F(m.location,f,_);p=h()+1;let S=ne(P,p),U=m.createHref(P);try{i.pushState(S,"",U)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;o.location.assign(U)}s&&a&&a({action:u,location:m.location,delta:1})}function E(f,_){u=w.Replace;let P=F(m.location,f,_);p=h();let S=ne(P,p),U=m.createHref(P);i.replaceState(S,"",U),s&&a&&a({action:u,location:m.location,delta:0})}function g(f){let _=o.location.origin!=="null"?o.location.origin:o.location.href,P=typeof f=="string"?f:Ce(f);return P=P.replace(/ $/,"%20"),T(_,"No window.location.(origin|href) available to create URL for href: "+P),new URL(P,_)}let m={get action(){return u},get location(){return e(o,i)},listen(f){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(re,l),a=f,()=>{o.removeEventListener(re,l),a=null}},createHref(f){return t(o,f)},createURL:g,encodeLocation(f){let _=g(f);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:E,go(f){return i.go(f)}};return m}var oe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(oe||(oe={}));function et(e,t,r){return r===void 0&&(r="/"),tt(e,t,r,!1)}function tt(e,t,r,n){let o=typeof t=="string"?M(t):t,s=Se(o.pathname||"/",r);if(s==null)return null;let i=Te(e);rt(i);let u=null;for(let a=0;u==null&&a<i.length;++a){let p=pt(s);u=ft(i[a],p,n)}return u}function Te(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(s,i,u)=>{let a={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};a.relativePath.startsWith("/")&&(T(a.relativePath.startsWith(n),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(n.length));let p=b([n,a.relativePath]),h=r.concat(a);s.children&&s.children.length>0&&(T(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Te(s.children,t,h,p)),!(s.path==null&&!s.index)&&t.push({path:p,score:lt(p,s.index),routesMeta:h})};return e.forEach((s,i)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))o(s,i);else for(let a of Pe(s.path))o(s,i,a)}),t}function Pe(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return o?[s,""]:[s];let i=Pe(n.join("/")),u=[];return u.push(...i.map(a=>a===""?s:[s,a].join("/"))),o&&u.push(...i),u.map(a=>e.startsWith("/")&&a===""?"/":a)}function rt(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ct(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const nt=/^:[\w-]+$/,ot=3,it=2,st=1,at=10,ut=-2,ie=e=>e==="*";function lt(e,t){let r=e.split("/"),n=r.length;return r.some(ie)&&(n+=ut),t&&(n+=it),r.filter(o=>!ie(o)).reduce((o,s)=>o+(nt.test(s)?ot:s===""?st:at),n)}function ct(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function ft(e,t,r){let{routesMeta:n}=e,o={},s="/",i=[];for(let u=0;u<n.length;++u){let a=n[u],p=u===n.length-1,h=s==="/"?t:t.slice(s.length)||"/",l=se({path:a.relativePath,caseSensitive:a.caseSensitive,end:p},h),y=a.route;if(!l&&p&&r&&!n[n.length-1].route.index&&(l=se({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},h)),!l)return null;Object.assign(o,l.params),i.push({params:o,pathname:b([s,l.pathname]),pathnameBase:ht(b([s,l.pathnameBase])),route:y}),l.pathnameBase!=="/"&&(s=b([s,l.pathnameBase]))}return i}function se(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=dt(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let s=o[0],i=s.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:n.reduce((p,h,l)=>{let{paramName:y,isOptional:E}=h;if(y==="*"){let m=u[l]||"";i=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}const g=u[l];return E&&!g?p[y]=void 0:p[y]=(g||"").replace(/%2F/g,"/"),p},{}),pathname:s,pathnameBase:i,pattern:e}}function dt(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Re(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,u,a)=>(n.push({paramName:u,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function pt(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Re(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Se(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const b=e=>e.join("/").replace(/\/\/+/g,"/"),ht=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function vt(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Oe=["post","put","patch","delete"];new Set(Oe);const mt=["get",...Oe];new Set(mt);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}const yt=c.createContext(null),gt=c.createContext(null),we=c.createContext(null),B=c.createContext(null),D=c.createContext({outlet:null,matches:[],isDataRoute:!1}),xe=c.createContext(null);function X(){return c.useContext(B)!=null}function Et(){return X()||T(!1),c.useContext(B).location}function _t(e,t){return Rt(e,t)}function Rt(e,t,r,n){X()||T(!1);let{navigator:o}=c.useContext(we),{matches:s}=c.useContext(D),i=s[s.length-1],u=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let p=Et(),h;if(t){var l;let f=typeof t=="string"?M(t):t;a==="/"||(l=f.pathname)!=null&&l.startsWith(a)||T(!1),h=f}else h=p;let y=h.pathname||"/",E=y;if(a!=="/"){let f=a.replace(/^\//,"").split("/");E="/"+y.replace(/^\//,"").split("/").slice(f.length).join("/")}let g=et(e,{pathname:E}),m=Ot(g&&g.map(f=>Object.assign({},f,{params:Object.assign({},u,f.params),pathname:b([a,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?a:b([a,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),s,r,n);return t&&m?c.createElement(B.Provider,{value:{location:j({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:w.Pop}},m):m}function Ct(){let e=At(),t=vt(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),r?c.createElement("pre",{style:o},r):null,null)}const Tt=c.createElement(Ct,null);class Pt extends c.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?c.createElement(D.Provider,{value:this.props.routeContext},c.createElement(xe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function St(e){let{routeContext:t,match:r,children:n}=e,o=c.useContext(yt);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),c.createElement(D.Provider,{value:t},n)}function Ot(e,t,r,n){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,u=(o=r)==null?void 0:o.errors;if(u!=null){let h=i.findIndex(l=>l.route.id&&(u==null?void 0:u[l.route.id])!==void 0);h>=0||T(!1),i=i.slice(0,Math.min(i.length,h+1))}let a=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<i.length;h++){let l=i[h];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(p=h),l.route.id){let{loaderData:y,errors:E}=r,g=l.route.loader&&y[l.route.id]===void 0&&(!E||E[l.route.id]===void 0);if(l.route.lazy||g){a=!0,p>=0?i=i.slice(0,p+1):i=[i[0]];break}}}return i.reduceRight((h,l,y)=>{let E,g=!1,m=null,f=null;r&&(E=u&&l.route.id?u[l.route.id]:void 0,m=l.route.errorElement||Tt,a&&(p<0&&y===0?(g=!0,f=null):p===y&&(g=!0,f=l.route.hydrateFallbackElement||null)));let _=t.concat(i.slice(0,y+1)),P=()=>{let S;return E?S=m:g?S=f:l.route.Component?S=c.createElement(l.route.Component,null):l.route.element?S=l.route.element:S=h,c.createElement(St,{match:l,routeContext:{outlet:h,matches:_,isDataRoute:r!=null},children:S})};return r&&(l.route.ErrorBoundary||l.route.errorElement||y===0)?c.createElement(Pt,{location:r.location,revalidation:r.revalidation,component:m,error:E,children:P(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):P()},null)}var Y=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Y||{});function wt(e){let t=c.useContext(gt);return t||T(!1),t}function xt(e){let t=c.useContext(D);return t||T(!1),t}function bt(e){let t=xt(),r=t.matches[t.matches.length-1];return r.route.id||T(!1),r.route.id}function At(){var e;let t=c.useContext(xe),r=wt(Y.UseRouteError),n=bt(Y.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Lt(e){T(!1)}function Ut(e){let{basename:t="/",children:r=null,location:n,navigationType:o=w.Pop,navigator:s,static:i=!1,future:u}=e;X()&&T(!1);let a=t.replace(/^\/*/,"/"),p=c.useMemo(()=>({basename:a,navigator:s,static:i,future:j({v7_relativeSplatPath:!1},u)}),[a,u,s,i]);typeof n=="string"&&(n=M(n));let{pathname:h="/",search:l="",hash:y="",state:E=null,key:g="default"}=n,m=c.useMemo(()=>{let f=Se(h,a);return f==null?null:{location:{pathname:f,search:l,hash:y,state:E,key:g},navigationType:o}},[a,h,l,y,E,g,o]);return m==null?null:c.createElement(we.Provider,{value:p},c.createElement(B.Provider,{children:r,value:m}))}function Mt(e){let{children:t,location:r}=e;return _t(W(t),r)}new Promise(()=>{});function W(e,t){t===void 0&&(t=[]);let r=[];return c.Children.forEach(e,(n,o)=>{if(!c.isValidElement(n))return;let s=[...t,o];if(n.type===c.Fragment){r.push.apply(r,W(n.props.children,s));return}n.type!==Lt&&T(!1),!n.props.index||!n.props.children||T(!1);let i={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=W(n.props.children,s)),r.push(i)}),r}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const It="6";try{window.__reactRouterVersion=It}catch{}const $t="startTransition",ae=Ge[$t];function Bt(e){let{basename:t,children:r,future:n,window:o}=e,s=c.useRef();s.current==null&&(s.current=Je({window:o,v5Compat:!0}));let i=s.current,[u,a]=c.useState({action:i.action,location:i.location}),{v7_startTransition:p}=n||{},h=c.useCallback(l=>{p&&ae?ae(()=>a(l)):a(l)},[a,p]);return c.useLayoutEffect(()=>i.listen(h),[i,h]),c.createElement(Ut,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:i,future:n})}var ue;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ue||(ue={}));var le;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(le||(le={}));export{Bt as B,ze as R,Xe as a,Nt as b,jt as c,Mt as d,Lt as e,ce as g,c as r,Et as u};
